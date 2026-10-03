/**
 * 조사 엑셀 → 운영 JSON 변환.
 * 원본 엑셀은 읽기만 하고 수정하지 않는다. 열은 위치가 아니라 머리글 이름으로 찾으므로
 * 열 순서가 바뀌거나 행이 늘어도 그대로 동작한다.
 *
 * 기본 입력은 data/source/latest.json 이 가리키는 최신 버전 엑셀이다.
 * 사용: npm run data:convert [-- <xlsx 경로>]
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as XLSX from 'xlsx';
import { classify } from '../src/core/classify';
import { cityStatus } from '../src/core/estimate';
import { BASKET_RULES, MODEL } from '../src/core/model-config';
import type { Category, City, CityMemo, ExtraKind, ExtraSample, FoodRecommendation, ModelUse, PriceSample, SourceGrade } from '../src/core/types';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const latest = JSON.parse(readFileSync(`${root}/data/source/latest.json`, 'utf8')) as { version: string; file: string; date: string };
const xlsxPath = resolve(process.argv[2] ?? `${root}/data/source/${latest.file}`);
const usingLatest = !process.argv[2];
const outDir = `${root}/src/data/generated`;

const CATEGORY: Record<string, Category> = { 교통: 'transport', 외식: 'food', 관광: 'attraction', 기념품: 'souvenir' };
/** 고르면 더하는 여행당 비용(4개 비용군과 따로 계산) */
const EXTRA: Record<string, ExtraKind> = { 공항이동: 'airport', 렌터카: 'rental' };
const MODEL_USE: Record<string, ModelUse> = { 예: 'yes', 조건부: 'conditional', 아니오: 'no' };
const COUNTRY_EN: Record<string, string> = {
  한국: 'South Korea', 대한민국: 'South Korea',
  일본: 'Japan', 태국: 'Thailand', 베트남: 'Vietnam', 대만: 'Taiwan', 싱가포르: 'Singapore', 프랑스: 'France',
  영국: 'United Kingdom', 인도네시아: 'Indonesia', '중국 홍콩': 'Hong Kong', 말레이시아: 'Malaysia',
  튀르키예: 'Türkiye', 아랍에미리트: 'United Arab Emirates', 미국: 'United States', 이탈리아: 'Italy', 스페인: 'Spain',
};

const errors: string[] = [];
const REVIEW_VERDICTS = ['일치', '불일치', '확인불가'];
/** 지도·리뷰·배달 플랫폼 주소(판매 주체 공식 페이지가 아님) */
const PLATFORM_HOSTS = /^https?:\/\/(?:[\w-]+\.)*(?:map\.naver\.com|place\.naver\.com|m\.place\.naver\.com|map\.kakao\.com|place\.map\.kakao\.com|ubereats\.com|grab\.com|foodpanda\.|deliveroo\.|quandoo\.|tripadvisor\.|thefork\.)/i;
const platform = new Set<string>();
/** 교차 검수 결과 요약(조사 큐에 표시) */
const reviewed: Array<{ file: string; id: string; verdict: string }> = [];
const notes: string[] = [];

function text(v: unknown): string {
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).trim();
}

/**
 * 머리글 행(첫 칸이 anchor 인 행)을 찾아 데이터 행마다 `머리글 → 값` 조회 함수를 돌려준다.
 * optional 에 적은 열은 없어도 빈 문자열로 읽는다.
 */
function readTable(wb: XLSX.WorkBook, sheetName: string, anchor: string, optional: string[] = []) {
  const ws = wb.Sheets[sheetName];
  if (!ws) throw new Error(`시트 '${sheetName}'가 없습니다.`);
  const grid = XLSX.utils.sheet_to_json<unknown[]>(ws, { header: 1, raw: true, defval: '' });
  const headerAt = grid.findIndex((row) => text(row[0]) === anchor);
  if (headerAt < 0) throw new Error(`시트 '${sheetName}'에서 머리글 '${anchor}'를 찾지 못했습니다.`);
  const cols = new Map<string, number>();
  (grid[headerAt] as unknown[]).forEach((h, c) => cols.set(text(h), c));
  return grid
    .slice(headerAt + 1)
    .filter((row) => text(row[0]) !== '')
    .map((row) => (h: string) => {
      const c = cols.get(h);
      if (c === undefined && optional.includes(h)) return '';
      if (c === undefined) throw new Error(`시트 '${sheetName}'에 '${h}' 열이 없습니다.`);
      return text(row[c]);
    });
}

type Row = (h: string) => string;

/**
 * 엑셀 밖에서 받은 추가 자료(data/additions/<종류>-*.csv, 예: Gemini 수집분). 머리글은 엑셀 시트와 같다.
 * 엑셀 원본은 건드리지 않고 변환할 때만 합친다.
 */
function additionRows(kind: 'cities' | 'prices' | 'foods' | 'memos', anchor: string, optional: string[] = []): Array<{ file: string; r: Row }> {
  const dir = `${root}/data/additions`;
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.startsWith(`${kind}-`) && f.endsWith('.csv'))
    .sort()
    .flatMap((file) => {
      const book = XLSX.read(readFileSync(`${dir}/${file}`, 'utf8').replace(/^\uFEFF/, ''), { type: 'string', raw: true });
      return readTable(book, book.SheetNames[0]!, anchor, optional).map((r) => ({ file, r }));
    });
}

const slug = (en: string) => en.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const isoDate = (v: string): string => {
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(v);
  return m?.[1] ?? '';
};

/** 적용/게시 열에서 유효 기간 해석. 연도('2026')·게시일·'과거 메뉴'는 유효 기간이 아니므로 무시한다. */
function parseValidity(applied: string): { validFrom?: string; validTo?: string } {
  const range = /(\d{4}-\d{2}-\d{2})\s*~\s*(\d{4}-\d{2}-\d{2})/.exec(applied);
  if (range) return { validFrom: range[1], validTo: range[2] };
  const since = /(\d{4}-\d{2}-\d{2})\s*이후/.exec(applied);
  if (since) return { validFrom: since[1] };
  return {};
}

const num = (v: string, where: string): number => {
  const n = Number(v);
  if (v === '' || !Number.isFinite(n) || n < 0) errors.push(`${where}: 숫자가 아닌 가격 '${v}'`);
  return n;
};

function main() {
  const wb = XLSX.read(readFileSync(xlsxPath), { type: 'buffer', cellDates: true });

  // 도시
  // 추가 자료의 도시가 엑셀에 이미 있으면(2차·3차 도시 공개 등) 그 행을 덮어쓴다 — 조사 단계만 바꿔 공개할 때 쓴다
  const excelCities = readTable(wb, '도시 우선순위', '순번');
  const extraCities = additionRows('cities', '순번').map((x) => x.r);
  const overridden = new Set(extraCities.map((r) => r('도시(한글)')));
  const cityRows: Row[] = [...excelCities.filter((r) => !overridden.has(r('도시(한글)'))), ...extraCities];
  const cities: City[] = cityRows.map((r) => {
    const country = r('국가');
    if (!COUNTRY_EN[country]) notes.push(`국가 영문명 없음: ${country} (한글로 표시됩니다)`);
    return {
      id: slug(r('City')),
      country,
      countryEn: COUNTRY_EN[country] ?? country,
      nameKo: r('도시(한글)'),
      nameEn: r('City'),
      currency: r('통화'),
      tier: r('등급'),
      stage: r('조사 단계'),
    };
  });
  const cityByKo = new Map(cities.map((c) => [c.nameKo, c]));
  if (cityByKo.size !== cities.length) errors.push('도시(한글) 이름 중복: 추가 자료의 도시가 엑셀에 이미 있음');

  // 가격 표본
  const samples: PriceSample[] = [];
  const extras: ExtraSample[] = [];
  const priceRows: Array<{ file: string; r: Row }> = [
    ...readTable(wb, '가격 표본', 'ID').map((r) => ({ file: '', r })),
    ...additionRows('prices', 'ID', ['비고']),
  ];
  for (const { file, r } of priceRows) {
    const id = r('ID');
    const cat = CATEGORY[r('카테고리')];
    const extra = EXTRA[r('카테고리')];
    if (!cat && !extra) {
      notes.push(`${id}: 계산에 쓰지 않는 카테고리 '${r('카테고리')}' 건너뜀`);
      continue;
    }
    const city = cityByKo.get(r('도시'));
    if (!city) {
      errors.push(`${id}: 도시 '${r('도시')}'가 '도시 우선순위'에 없음`);
      continue;
    }
    let grade = r('출처등급').charAt(0) as SourceGrade;
    let modelUse = MODEL_USE[r('모델사용')];
    if (!'ABCD'.includes(grade) || !modelUse) errors.push(`${id}: 출처등급/모델사용 해석 불가`);
    const currency = r('통화');
    if (currency !== city.currency) errors.push(`${id}: 통화 ${currency} ≠ 도시 통화 ${city.currency}`);
    const applied = r('적용/게시');
    // 엑셀 밖 추가 자료는 한 곳에서만 수집된 값이므로, 교차 확인 전까지 '재검증'으로 표시한다(계산에는 쓰되 경고)
    let status = r('상태');
    let note = r('비고');
    if (file) {
      const quote = r('원문 인용');
      if (!quote) errors.push(`${file} ${id}: '원문 인용'(페이지에 적힌 가격 문구)이 비어 있음`);
      if (!/^https?:\/\//.test(r('출처 URL'))) errors.push(`${file} ${id}: 출처 URL 없음`);
      if (!status.includes('재검증')) status = `${status} 재검증(교차 확인 전)`.trim();
      // 지도·리뷰 플랫폼(네이버 플레이스 등)은 판매 주체의 공식 페이지가 아니다 → 보조 출처·조건부로 낮춘다
      if (PLATFORM_HOSTS.test(r('출처 URL'))) {
        platform.add(id);
        note = [note, '플랫폼 출처(공식 페이지 아님)'].filter(Boolean).join(' · ');
      }
      note = [note, `원문: ${quote}`, `수집: ${file}`].filter(Boolean).join(' · ');
    }
    const min = num(r('최소'), id);
    const max = num(r('최대'), id);
    if (min > max) errors.push(`${id}: 최소 > 최대`);
    if (platform.has(id)) {
      if (grade === 'A' || grade === 'B') grade = 'C';
      if (modelUse === 'yes') modelUse = 'conditional';
    }
    const row = {
      id,
      cityId: city.id,
      country: r('국가'),
      city: city.nameKo,
      category: cat ?? 'transport',
      subtype: r('세부유형'),
      nameKo: r('항목(한글)'),
      nameEn: r('Item (English)'),
      min,
      max,
      currency,
      unit: r('단위'),
      priceType: r('가격형태'),
      target: r('대상'),
      grade,
      modelUse: modelUse ?? 'no',
      status,
      checkedAt: isoDate(r('조회일')),
      applied,
      ...parseValidity(applied),
      sourceName: r('출처명'),
      sourceUrl: r('출처 URL'),
      note,
    };
    if (cat) samples.push(row);
    else {
      const x: ExtraSample & { category?: Category } = { ...row, kind: extra as ExtraKind };
      delete x.category;
      extras.push(x);
    }
  }
  // 검수 메모: 원문 재확인이 안 된 표본에 '재검증 필요' 표시만 붙인다(가격·분류 불변)
  const reviewFlags = JSON.parse(readFileSync(`${root}/data/overlays/review-flags.json`, 'utf8')) as Record<string, PriceSample['review'] | string>;
  for (const [id, review] of Object.entries(reviewFlags)) {
    if (id.startsWith('_')) continue;
    const s = samples.find((x) => x.id === id);
    if (!s) errors.push(`review-flags.json: 없는 표본 ID '${id}'`);
    else s.review = review as PriceSample['review'];
  }

  // 교차 검수 결과(data/reviews/*.csv, 예: Gemini 검수). '불일치'·'확인불가' 판정만 재검증 표시로 붙인다.
  // 가격은 바꾸지 않는다 — 고칠 값은 조사 엑셀 다음 버전에 반영한다. review-flags.json 이 먼저 붙은 표본은 그대로 둔다.
  const byId = new Map<string, PriceSample | ExtraSample>([...samples, ...extras].map((x) => [x.id, x]));
  for (const file of readdirSync(`${root}/data/reviews`).filter((f) => f.endsWith('.csv')).sort()) {
    const book = XLSX.read(readFileSync(`${root}/data/reviews/${file}`, 'utf8').replace(/^\uFEFF/, ''), { type: 'string', raw: true });
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(book.Sheets[book.SheetNames[0]!]!, { defval: '', raw: true });
    for (const row of rows) {
      const r = (h: string) => text(row[h]);
      const id = r('ID');
      if (!id) continue;
      const verdict = r('판정');
      if (!verdict) continue; // 아직 검수하지 않은 행
      const target = byId.get(id);
      if (!target) {
        errors.push(`${file}: 없는 표본 ID '${id}'`);
        continue;
      }
      if (!REVIEW_VERDICTS.includes(verdict)) {
        errors.push(`${file} ${id}: 판정은 ${REVIEW_VERDICTS.join('/')} 중 하나여야 함('${verdict}')`);
        continue;
      }
      reviewed.push({ file, id, verdict });
      if (verdict === '일치' || target.review) continue;
      const found = r('확인 가격');
      target.review = {
        flag: verdict === '불일치' ? '교차 검수 불일치' : '원문 확인 불가',
        flagEn: verdict === '불일치' ? 'cross-check mismatch' : 'source could not be verified',
        detail: [found && `확인 가격 ${found}`, r('확인 URL'), r('메모')].filter(Boolean).join(' · '),
        reportedAt: isoDate(r('확인일')),
      };
    }
  }

  const ids = new Set<string>();
  for (const s of [...samples, ...extras]) {
    if (ids.has(s.id)) errors.push(`${s.id}: ID 중복`);
    ids.add(s.id);
    if (!s.checkedAt) errors.push(`${s.id}: 조회일 해석 불가`);
  }

  // 음식 추천
  const overlay = JSON.parse(readFileSync(`${root}/data/overlays/food-reasons-en.json`, 'utf8')) as Record<string, string>;
  const foodRows: Row[] = [...readTable(wb, '음식 추천', '국가'), ...additionRows('foods', '국가', ['비고', '연결 가격 ID']).map((x) => x.r)];
  const foods: FoodRecommendation[] = foodRows.map((r) => {
    const city = cityByKo.get(r('도시'));
    if (!city) throw new Error(`음식 추천: 도시 '${r('도시')}'가 '도시 우선순위'에 없음`);
    const linked = r('연결 가격 ID').split(/[\s,;/]+/).filter(Boolean);
    for (const id of linked) if (!ids.has(id)) errors.push(`음식 '${r('음식(한글)')}': 연결 가격 ID '${id}' 없음`);
    const reasonEn = overlay[`${city.id}:${r('Food')}`];
    if (!reasonEn) notes.push(`영문 추천 이유 없음: ${city.id}:${r('Food')}`);
    return {
      cityId: city.id,
      nameKo: r('음식(한글)'),
      nameEn: r('Food'),
      reason: r('추천 이유'),
      ...(reasonEn ? { reasonEn } : {}),
      budgetBand: r('예산대'),
      linkedPriceIds: linked,
      priceStatus: r('가격조사 상태'),
      recommendSource: r('추천 출처'),
      recommendUrl: r('출처 URL'),
      note: r('비고'),
    };
  });

  // 도시 메모(선택 시트): 팁 관행·숙박세·입국 수수료·eSIM 등. 계산에는 넣지 않는다
  const memos: CityMemo[] = [];
  const memoOptional = ['단위', '출처명', '비고', 'Item (English)', 'Value (English)'];
  const memoRows: Row[] = [
    ...(wb.Sheets['도시 메모'] ? readTable(wb, '도시 메모', '도시', memoOptional) : []),
    ...additionRows('memos', '도시', memoOptional).map((x) => x.r),
  ];
  {
    for (const r of memoRows) {
      const city = cityByKo.get(r('도시'));
      if (!city) {
        errors.push(`도시 메모: 도시 '${r('도시')}'가 '도시 우선순위'에 없음`);
        continue;
      }
      const memo: CityMemo = {
        cityId: city.id,
        item: r('항목'),
        value: r('값'),
        itemEn: r('Item (English)'),
        valueEn: r('Value (English)'),
        unit: r('단위'),
        sourceName: r('출처명'),
        sourceUrl: r('출처 URL'),
        checkedAt: isoDate(r('조회일')),
        note: r('비고'),
      };
      if (!memo.item || !memo.value) errors.push(`도시 메모(${city.nameKo}): 항목·값이 비어 있음`);
      if (!/^https?:\/\//.test(memo.sourceUrl)) errors.push(`도시 메모(${city.nameKo} ${memo.item}): 출처 URL 없음`);
      if (!memo.checkedAt) errors.push(`도시 메모(${city.nameKo} ${memo.item}): 조회일 해석 불가`);
      memos.push(memo);
    }
  }

  // 데이터 점검 리포트
  const unclassified = samples.filter((s) => classify(s).excludeReason === 'unclassified');
  for (const s of unclassified) notes.push(`${s.id}: 세부유형 '${s.subtype}' 분류 불가 → 계산 제외 (model-config.ts KEYWORDS 확인)`);

  if (errors.length) {
    console.error(`변환 실패 — 데이터 오류 ${errors.length}건\n` + errors.map((e) => ` - ${e}`).join('\n'));
    process.exit(1);
  }

  const meta = {
    source: basename(xlsxPath),
    version: usingLatest ? latest.version : 'custom',
    date: usingLatest ? latest.date : '',
    sha256: createHash('sha256').update(readFileSync(xlsxPath)).digest('hex').slice(0, 16),
    sampleCount: samples.length,
  };
  mkdirSync(outDir, { recursive: true });
  const write = (name: string, data: unknown) => writeFileSync(`${outDir}/${name}.json`, JSON.stringify(data, null, 2) + '\n');
  write('cities', cities);
  write('samples', samples);
  write('extras', extras);
  write('memos', memos);
  write('foods', foods);
  write('meta', meta);

  // 도시별 판정(파일럿 도시). 엑셀을 교체하고 변환하면 자동으로 다시 계산된다.
  const pilot = cities.filter((c) => c.stage === '파일럿');
  const status = Object.fromEntries(pilot.map((c) => [c.id, cityStatus(c, samples)]));
  write('status', status);

  writeFileSync(`${root}/data/research-queue.md`, researchQueue(pilot, samples, status, meta));
  writeFileSync(`${root}/data/cross-check-queue.csv`, crossCheckQueue(pilot, [...samples, ...extras]));

  console.log(`원본: ${meta.source} (${meta.version})`);
  console.log(`도시 ${cities.length} · 가격 표본 ${samples.length} · 공항이동·렌터카 ${extras.length} · 도시 메모 ${memos.length} · 음식 추천 ${foods.length} → ${outDir}`);
  console.log('\n파일럿 도시 판정 (독립 표본: 외식/교통/관광/기념품)');
  for (const c of pilot) {
    const st = status[c.id]!;
    const n = st.counts;
    console.log(
      `  ${c.nameKo.padEnd(6, '　')} ${n.food}/${n.transport}/${n.attraction}/${n.souvenir}  충족률 ${Math.round(st.fillRate * 100)}%  ` +
        (st.computable ? '계산 가능' : `부족: ${st.missing.join(', ') || '충족률 미달'}`),
    );
  }
  console.log('  → 상태가 바뀌었다면 `npm run status:update` 로 고정 테스트를 갱신하세요.');
  for (const n of notes) console.log(`  ※ ${n}`);
}

const BASKET_KO: Record<string, string> = { pass: '1일 이용권', ride: '1회권', meal: '식사', snack: '간식·음료', attraction: '관광 입장권', souvenir: '기념품' };
const NEED_HINT: Record<string, string> = {
  pass: '다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격',
  ride: '시내 버스·지하철 등 일상 이동 1회 요금(다른 운영사 또는 다른 교통수단)',
  meal: '다른 식당의 한 끼 식사 공식 메뉴 가격',
  snack: '간식·음료 공식 메뉴 가격(선택 바스켓)',
  attraction: '다른 명소의 성인 입장료(같은 명소의 다른 옵션은 1건으로 셈)',
  souvenir: '다른 상품의 기념품 공식 판매가(같은 상품의 용량 차이는 1건으로 셈)',
};

/** 계산을 막는 부족 바스켓과 공식 재검증이 필요한 표본을 조사팀용 목록으로 만든다(변환할 때마다 자동 갱신). */
function researchQueue(pilot: City[], samples: PriceSample[], status: Record<string, ReturnType<typeof cityStatus>>, meta: { source: string; version: string }): string {
  const min = MODEL.minSamplesPerCategory;
  const lines: string[] = [
    '# 조사 요청 목록 (자동 생성)',
    '',
    `> \`npm run data:convert\` 가 \`${meta.source}\` (${meta.version}) 로부터 만든 파일입니다. 직접 고치지 마세요.`,
    `> 기준: 바스켓마다 **독립 표본 ${min}건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).`,
    '> 수치는 가격 원장과 계산 코드로 다시 만든 것입니다. 엑셀의 "도시 초안"·"다음 조사 큐" 시트 수치는 쓰지 않습니다(작성 시점이 달라 오래된 값이 있을 수 있음).',
    '',
    '## 1. 계산을 막는 부족 바스켓',
    '',
    '| 도시 | 바스켓 | 현재 독립 표본 | 필요 | 필요한 자료 |',
    '| --- | --- | --- | --- | --- |',
  ];
  let blocking = 0;
  for (const c of pilot) {
    const st = status[c.id]!;
    for (const cat of st.missing) {
      const rule = BASKET_RULES[cat];
      const pool = rule.mode === 'alternatives' ? rule.baskets : rule.required;
      for (const b of pool) {
        const either = rule.mode === 'alternatives' ? ' (1일 이용권·1회권 중 하나만 채우면 됨)' : '';
        lines.push(`| ${c.nameKo} | ${BASKET_KO[b]} | ${st.baskets[b]} | ${min - st.baskets[b]}건 더 | ${NEED_HINT[b]}${either} |`);
        blocking++;
      }
    }
  }
  if (!blocking) lines.push('| - | - | - | - | 없음: 모든 파일럿 도시 계산 가능 |');

  lines.push('', '## 2. 보강하면 좋은 바스켓(계산은 가능)', '', '| 도시 | 바스켓 | 현재 독립 표본 | 메모 |', '| --- | --- | --- | --- |');
  for (const c of pilot) {
    const st = status[c.id]!;
    for (const b of ['pass', 'ride', 'snack'] as const) {
      const n = st.baskets[b];
      const blockingHere = st.missing.some((cat) => BASKET_RULES[cat].baskets.includes(b));
      if (n < min && !blockingHere) lines.push(`| ${c.nameKo} | ${BASKET_KO[b]} | ${n} | ${NEED_HINT[b]} |`);
    }
  }

  lines.push(
    '',
    '## 3. 공식 재검증이 필요한 표본',
    '',
    '계산 대상 바스켓에 들어가는 표본 중 출처가 공식(A)이 아니거나, 모델 사용이 "조건부"이거나, 재검증·시작가·세금 별도 표기인 표본입니다.',
    '공식 판매 주체 페이지에서 같은 가격을 확인하면 엑셀에서 등급·모델 사용·상태를 올려 주세요.',
    '',
    '| ID | 도시 | 항목 | 가격 | 등급 | 모델 사용 | 사유 | 출처 |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |',
  );
  const pilotIds = new Set(pilot.map((c) => c.id));
  for (const s of samples) {
    if (!pilotIds.has(s.cityId)) continue;
    const r = classify(s);
    if (!r.usable) continue;
    const why = [
      s.grade !== 'A' && `${s.grade}등급`,
      s.modelUse === 'conditional' && '조건부',
      s.status.includes('재검증') && '재검증',
      r.fromPrice && '시작가 표기',
      r.taxExcluded && '세금·서비스료 별도',
      s.review && `검수: ${s.review.flag}`,
    ].filter(Boolean);
    if (!why.length) continue;
    const price = s.min === s.max ? `${s.min}` : `${s.min}~${s.max}`;
    lines.push(`| ${s.id} | ${s.city} | ${s.nameKo} | ${price} ${s.currency} | ${s.grade} | ${s.modelUse === 'yes' ? '예' : '조건부'} | ${why.join(', ')} | [${s.sourceName}](${s.sourceUrl}) |`);
  }

  const count = (v: string) => reviewed.filter((x) => x.verdict === v).length;
  lines.push(
    '',
    '## 4. 교차 검수 현황',
    '',
    `\`data/reviews/*.csv\` 에서 읽은 판정: 일치 ${count('일치')}건 · 불일치 ${count('불일치')}건 · 확인불가 ${count('확인불가')}건.`,
    '아직 "일치" 판정이 없는 표본은 `data/cross-check-queue.csv` 에 모여 있습니다(교차 검수 담당에게 그대로 전달).',
  );
  return lines.join('\n') + '\n';
}

/** 교차 검수 대기 목록(CSV). 계산·목록에 쓰이는 파일럿 도시 표본 중 아직 "일치" 판정이 없는 행. 오른쪽 빈 칸을 채워 data/reviews/ 에 넣는다 */
function crossCheckQueue(pilot: City[], rows: Array<PriceSample | ExtraSample>): string {
  const ok = new Set(reviewed.filter((x) => x.verdict === '일치').map((x) => x.id));
  const pilotIds = new Set(pilot.map((c) => c.id));
  const csv = (v: string | number) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const head = ['ID', '도시', '항목', '최소', '최대', '통화', '단위', '대상', '가격형태', '출처 URL', '조회일', '판정', '확인 가격', '확인 URL', '확인일', '메모'];
  const out = [head.join(',')];
  for (const s of rows) {
    if (!pilotIds.has(s.cityId) || ok.has(s.id)) continue;
    if ('category' in s ? !classify(s).usable : s.modelUse === 'no') continue;
    out.push([s.id, s.city, s.nameKo, s.min, s.max, s.currency, s.unit, s.target, s.priceType, s.sourceUrl, s.checkedAt, '', '', '', '', ''].map(csv).join(','));
  }
  return '\uFEFF' + out.join('\n') + '\n';
}

try {
  main();
} catch (e) {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
}
