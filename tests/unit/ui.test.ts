import { describe, expect, it } from 'vitest';
import { en } from '../../src/i18n/en';
import { ko } from '../../src/i18n/ko';
import { fmt } from '../../src/i18n';
import { parseForm, type FormState } from '../../src/ui/form';
import { allCities, cities, foods, PILOT_STAGE, samples } from '../../src/data';
import { cityGroups, matchCity } from '../../src/ui/TripForm';

const base: FormState = {
  cityId: 'taipei', visitDate: '2026-11-04', nights: '3', adults: '2', children: '0', style: 'standard',
  currency: 'KRW', flight: '', lodging: '', directCurrency: 'KRW', attractions: [], drinks: false, shopping: false, shoppingAmount: '', airport: '', airportTrips: '2', rental: '', rentalDays: '',
  transportMode: 'auto', ridesPerDay: '3', transitDays: '', passId: '', mealsPerDay: '', drinksPerDay: '', drinkPicks: [],
};

describe('입력 검증', () => {
  it('자세히 설정: 교통 방식·끼니 수를 TripInput 으로', () => {
    const p = parseForm({ ...base, transportMode: 'rides', ridesPerDay: '2', transitDays: '2', mealsPerDay: '2' });
    expect(p.trip).toMatchObject({ transport: { mode: 'rides', perDay: 2, days: 2 }, mealsPerDay: 2 });
    expect(p.trip).not.toHaveProperty('mustEat');
    expect(parseForm({ ...base, transportMode: 'pass', passId: 'X-TR-001' }).trip?.transport).toEqual({ mode: 'pass', passId: 'X-TR-001', days: 4 });
    expect(parseForm({ ...base, transportMode: 'none' }).trip?.transport).toEqual({ mode: 'none' });
    expect(parseForm({ ...base, transportMode: 'rides', ridesPerDay: '99' }).errors.ridesPerDay).toBe(true);
  });
  it('정상 입력은 TripInput 으로 변환', () => {
    const p = parseForm(base);
    expect(p.errors).toEqual({});
    expect(p.trip).toEqual({ cityId: 'taipei', visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard', attractionIds: [], drinks: false });
    expect(p.direct).toEqual({ flight: 0, lodging: 0 });
  });
  it('범위를 벗어나거나 숫자가 아니면 오류이고 trip 은 null', () => {
    expect(parseForm({ ...base, nights: '0' }).errors.nights).toBe(true);
    expect(parseForm({ ...base, nights: '31' }).trip).toBeNull();
    expect(parseForm({ ...base, adults: '0' }).errors.adults).toBe(true);
    expect(parseForm({ ...base, children: '-1' }).errors.children).toBe(true);
    expect(parseForm({ ...base, nights: '2.5' }).errors.nights).toBe(true);
    expect(parseForm({ ...base, visitDate: '2026-02-30' }).errors.date).toBe(true);
    expect(parseForm({ ...base, visitDate: '' }).trip).toBeNull();
  });
  it('직접 입력 금액: 쉼표 허용, 음수·문자는 오류', () => {
    expect(parseForm({ ...base, flight: '1,200,000', lodging: '350000.5' }).direct).toEqual({ flight: 1200000, lodging: 350000.5 });
    expect(parseForm({ ...base, flight: '-5' }).errors.flight).toBe(true);
    expect(parseForm({ ...base, lodging: 'abc' }).errors.lodging).toBe(true);
  });
});

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
function walk(a: unknown, b: unknown, path: string, out: string[]) {
  if (typeof a === 'string' && typeof b === 'string') {
    if (!a.trim() || !b.trim()) out.push(`${path}: 빈 문구`);
    if (JSON.stringify(placeholders(a)) !== JSON.stringify(placeholders(b))) out.push(`${path}: 자리표시자 불일치`);
  } else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) out.push(`${path}: 항목 수 불일치`);
    a.forEach((x, i) => walk(x, b[i], `${path}[${i}]`, out));
  } else if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ka = Object.keys(a).sort();
    const kb = Object.keys(b).sort();
    if (JSON.stringify(ka) !== JSON.stringify(kb)) out.push(`${path}: 키 불일치`);
    for (const k of ka) walk((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`, out);
  } else out.push(`${path}: 형식 불일치`);
}

describe('한/영 문구', () => {
  it('두 언어의 키·자리표시자·항목 수가 같다', () => {
    const problems: string[] = [];
    walk(ko, en, 'messages', problems);
    expect(problems).toEqual([]);
  });
  it('자리표시자를 채운다', () => {
    expect(fmt('{a}-{b}-{c}', { a: 1, b: 'x' })).toBe('1-x-{c}');
  });
});

describe('가격 데이터 무결성', () => {
  it('선택 가능한 도시는 파일럿 도시이고 모든 표본이 (공개 전 도시 포함) 도시에 연결된다', () => {
    expect(cities.map((c) => c.id).sort()).toEqual(['bangkok', 'barcelona', 'busan', 'cebu', 'da-nang', 'fukuoka', 'istanbul', 'jeju', 'london', 'new-york', 'osaka', 'paris', 'rome', 'seoul', 'shanghai', 'singapore', 'taipei', 'tokyo']);
    for (const s of samples) expect(allCities.some((c) => c.id === s.cityId && c.currency === s.currency)).toBe(true);
  });
  it('1차 화면에는 파일럿 도시만 노출하고 2차 이후 도시는 숨긴다', () => {
    expect(allCities.length).toBeGreaterThan(cities.length);
    expect(cities).toHaveLength(18);
    expect(cities.every((c) => c.stage === PILOT_STAGE)).toBe(true);
    expect(cities.some((c) => c.id === 'sapporo')).toBe(false);
  });
  it('지도·리뷰 플랫폼 출처(네이버 플레이스 등) 가격은 C등급, 운영자가 직접 확인한 캡처만 계산에 쓰고 나머지는 조건부', () => {
    const platform = samples.filter((s) => /map\.naver\.com|place\.naver\.com|kakao\.com|tripadvisor|ubereats|grab\.com/.test(s.sourceUrl));
    expect(platform.length).toBeGreaterThan(0);
    for (const s of platform) {
      expect([s.id, s.grade]).toEqual([s.id, 'C']);
      expect([s.id, s.modelUse]).toEqual([s.id, s.note.includes('운영자 제공') ? 'yes' : 'conditional']);
    }
  });
  it('음식 추천이 연결한 가격 ID 는 모두 존재한다', () => {
    const ids = new Set(samples.map((s) => s.id));
    for (const f of foods) for (const id of f.linkedPriceIds) expect(ids.has(id)).toBe(true);
  });
  it('모든 도시에 대표 음식이 있고 영문 추천 이유가 있다(조사 대기 도시 제외)', () => {
    // 대표 음식 조사 대기 도시(없으면 빈 목록)
    const pending: string[] = [];
    for (const c of cities) expect(foods.some((f) => f.cityId === c.id), c.id).toBe(!pending.includes(c.id));
    for (const f of foods) expect(f.reasonEn).toBeTruthy();
    // 모든 음식에 한·영·일 한 줄 설명(data/overlays/food-info.json)
    for (const f of foods) expect(f.desc?.ko && f.desc.en && f.desc.ja, `${f.cityId}:${f.nameEn}`).toBeTruthy();
  });
});

describe('출처 표시', () => {
  it('이름이 같고 주소가 다른 출처에는 번호를 붙인다', async () => {
    const { numberedSources } = await import('../../src/ui/ResultView');
    expect(
      numberedSources([
        { name: 'Danabus', url: 'https://a' },
        { name: 'Pheva', url: 'https://p' },
        { name: 'Danabus', url: 'https://b' },
      ]).map((s) => s.label),
    ).toEqual(['Danabus 1', 'Pheva', 'Danabus 2']);
  });
});

describe('데이터 버전', () => {
  it('운영 JSON 은 latest.json 이 가리키는 최신 엑셀(v0.2, 130건)에서 만들어졌다', async () => {
    const { dataMeta } = await import('../../src/data');
    const { readFileSync } = await import('node:fs');
    const latest = JSON.parse(readFileSync('data/source/latest.json', 'utf8')) as { version: string; file: string };
    expect(dataMeta).toMatchObject({ source: latest.file, version: latest.version });
    expect(dataMeta.sampleCount).toBe(samples.length);
    expect(samples.some((s) => s.id.includes('TEST'))).toBe(false);
  });
});

describe('도시 선택: 나라별 묶음과 검색', () => {
  it('사용자 위치와 무관하게 나라별로 묶고, 나라·도시 이름순으로 정렬한다', () => {
    const ko = cityGroups(cities, 'ko');
    expect(ko.map((g) => g.country)).toEqual([...new Set(cities.map((c) => c.country))].sort((a, b) => a.localeCompare(b, 'ko')));
    expect(ko.find((g) => g.country === '한국')!.items.map((c) => c.nameKo)).toEqual(['부산', '서울', '제주']);
    const en = cityGroups(cities, 'en');
    expect(en[0]!.country.localeCompare(en[1]!.country, 'en')).toBeLessThan(0);
    expect(en.flatMap((g) => g.items)).toHaveLength(cities.length);
  });
  it('도시·나라 이름(한/영)으로 찾고 공백·대소문자는 무시한다', () => {
    const find = (q: string) => cities.filter((c) => matchCity(c, q)).map((c) => c.id).sort();
    expect(find('도쿄')).toEqual(['tokyo']);
    expect(find('일본')).toEqual(['fukuoka', 'osaka', 'tokyo']);
    expect(find('south korea')).toEqual(['busan', 'jeju', 'seoul']);
    expect(find('ParIs')).toEqual(['paris']);
    expect(find('다 낭')).toEqual(['da-nang']);
    expect(find('')).toHaveLength(cities.length);
    expect(find('atlantis')).toEqual([]);
  });
});


describe('모델 제외 목록(data/overlays/exclusions.json)', () => {
  it('여러 명이 나눠 먹는 메뉴는 원본 가격은 남기되 계산에서 뺀다', async () => {
    const { readFileSync } = await import('node:fs');
    const ex = JSON.parse(readFileSync('data/overlays/exclusions.json', 'utf8')) as Record<string, string>;
    for (const id of Object.keys(ex).filter((k) => !k.startsWith('_'))) {
      const { extras } = await import('../../src/data');
      const s = samples.find((x) => x.id === id) ?? extras.find((x) => x.id === id);
      // 현지 통화가 아닌 행은 변환 단계에서 아예 건너뛴다
      if (!s) continue;
      expect([id, s.modelUse]).toEqual([id, 'no']);
      expect(s.note).toContain('모델 제외');
    }
  });
});
