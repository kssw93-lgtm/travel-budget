/**
 * 조사자료.xlsx → 개발용 JSON 변환.
 * 원본 엑셀은 읽기만 하고 수정하지 않는다. 열은 위치가 아니라 머리글 이름으로 찾으므로
 * 열 순서가 바뀌거나 행이 늘어도 그대로 동작한다.
 *
 * 사용: npm run data:convert [-- <xlsx 경로>]
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as XLSX from 'xlsx';
import { classify } from '../src/core/classify';
import { cityStatus } from '../src/core/estimate';
import type { Category, City, FoodRecommendation, ModelUse, PriceSample, SourceGrade } from '../src/core/types';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const xlsxPath = resolve(process.argv[2] ?? `${root}/data/source/조사자료.xlsx`);
const outDir = `${root}/src/data/generated`;

const CATEGORY: Record<string, Category> = { 교통: 'transport', 외식: 'food', 관광: 'attraction', 기념품: 'souvenir' };
const MODEL_USE: Record<string, ModelUse> = { 예: 'yes', 조건부: 'conditional', 아니오: 'no' };
const COUNTRY_EN: Record<string, string> = {
  일본: 'Japan', 태국: 'Thailand', 베트남: 'Vietnam', 대만: 'Taiwan', 싱가포르: 'Singapore', 프랑스: 'France',
  영국: 'United Kingdom', 인도네시아: 'Indonesia', '중국 홍콩': 'Hong Kong', 말레이시아: 'Malaysia',
  튀르키예: 'Türkiye', 아랍에미리트: 'United Arab Emirates', 미국: 'United States', 이탈리아: 'Italy', 스페인: 'Spain',
};

const errors: string[] = [];
const notes: string[] = [];

function text(v: unknown): string {
  if (v === null || v === undefined) return '';
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).trim();
}

/** 머리글 행(첫 칸이 anchor 인 행)을 찾아 데이터 행마다 `머리글 → 값` 조회 함수를 돌려준다. */
function readTable(wb: XLSX.WorkBook, sheetName: string, anchor: string) {
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
      if (c === undefined) throw new Error(`시트 '${sheetName}'에 '${h}' 열이 없습니다.`);
      return text(row[c]);
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
  const cities: City[] = readTable(wb, '도시 우선순위', '순번').map((r) => {
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

  // 가격 표본
  const samples: PriceSample[] = [];
  for (const r of readTable(wb, '가격 표본', 'ID')) {
    const id = r('ID');
    const cat = CATEGORY[r('카테고리')];
    if (!cat) {
      notes.push(`${id}: 계산에 쓰지 않는 카테고리 '${r('카테고리')}' 건너뜀`);
      continue;
    }
    const city = cityByKo.get(r('도시'));
    if (!city) {
      errors.push(`${id}: 도시 '${r('도시')}'가 '도시 우선순위'에 없음`);
      continue;
    }
    const grade = r('출처등급').charAt(0) as SourceGrade;
    const modelUse = MODEL_USE[r('모델사용')];
    if (!'ABCD'.includes(grade) || !modelUse) errors.push(`${id}: 출처등급/모델사용 해석 불가`);
    const currency = r('통화');
    if (currency !== city.currency) errors.push(`${id}: 통화 ${currency} ≠ 도시 통화 ${city.currency}`);
    const applied = r('적용/게시');
    const min = num(r('최소'), id);
    const max = num(r('최대'), id);
    if (min > max) errors.push(`${id}: 최소 > 최대`);
    samples.push({
      id,
      cityId: city.id,
      country: r('국가'),
      city: city.nameKo,
      category: cat,
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
      status: r('상태'),
      checkedAt: isoDate(r('조회일')),
      applied,
      ...parseValidity(applied),
      sourceName: r('출처명'),
      sourceUrl: r('출처 URL'),
      note: r('비고'),
    });
  }
  const ids = new Set<string>();
  for (const s of samples) {
    if (ids.has(s.id)) errors.push(`${s.id}: ID 중복`);
    ids.add(s.id);
    if (!s.checkedAt) errors.push(`${s.id}: 조회일 해석 불가`);
  }

  // 음식 추천
  const overlay = JSON.parse(readFileSync(`${root}/data/overlays/food-reasons-en.json`, 'utf8')) as Record<string, string>;
  const foods: FoodRecommendation[] = readTable(wb, '음식 추천', '국가').map((r) => {
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

  // 데이터 점검 리포트
  const unclassified = samples.filter((s) => classify(s).excludeReason === 'unclassified');
  for (const s of unclassified) notes.push(`${s.id}: 세부유형 '${s.subtype}' 분류 불가 → 계산 제외 (model-config.ts KEYWORDS 확인)`);

  if (errors.length) {
    console.error(`변환 실패 — 데이터 오류 ${errors.length}건\n` + errors.map((e) => ` - ${e}`).join('\n'));
    process.exit(1);
  }

  const meta = {
    source: '조사자료.xlsx',
    sha256: createHash('sha256').update(readFileSync(xlsxPath)).digest('hex').slice(0, 16),
    sampleCount: samples.length,
  };
  mkdirSync(outDir, { recursive: true });
  const write = (name: string, data: unknown) => writeFileSync(`${outDir}/${name}.json`, JSON.stringify(data, null, 2) + '\n');
  write('cities', cities);
  write('samples', samples);
  write('foods', foods);
  write('meta', meta);

  // 도시별 판정(파일럿 도시). 엑셀을 교체하고 변환하면 자동으로 다시 계산된다.
  const pilot = cities.filter((c) => c.stage === '파일럿');
  const status = Object.fromEntries(pilot.map((c) => [c.id, cityStatus(c, samples)]));
  write('status', status);

  console.log(`도시 ${cities.length} · 가격 표본 ${samples.length} · 음식 추천 ${foods.length} → ${outDir}`);
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

try {
  main();
} catch (e) {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
}
