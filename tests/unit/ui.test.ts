import { describe, expect, it } from 'vitest';
import { en } from '../../src/i18n/en';
import { ko } from '../../src/i18n/ko';
import { fmt } from '../../src/i18n';
import { parseForm, type FormState } from '../../src/ui/form';
import { allCities, cities, foods, PILOT_STAGE, samples } from '../../src/data';

const base: FormState = {
  cityId: 'taipei', visitDate: '2026-11-04', nights: '3', adults: '2', children: '0', style: 'standard',
  currency: 'KRW', flight: '', lodging: '', directCurrency: 'KRW', attractions: [],
};

describe('입력 검증', () => {
  it('정상 입력은 TripInput 으로 변환', () => {
    const p = parseForm(base);
    expect(p.errors).toEqual({});
    expect(p.trip).toEqual({ cityId: 'taipei', visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard', attractionIds: [] });
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
  it('선택 가능한 도시는 8개 1차 도시이고 모든 표본이 도시에 연결된다', () => {
    expect(cities.map((c) => c.id).sort()).toEqual(['bangkok', 'da-nang', 'london', 'osaka', 'paris', 'singapore', 'taipei', 'tokyo']);
    for (const s of samples) expect(cities.some((c) => c.id === s.cityId && c.currency === s.currency)).toBe(true);
  });
  it('1차 화면에는 파일럿 8개 도시만 노출하고 2차 이후 도시는 숨긴다', () => {
    expect(allCities.length).toBeGreaterThan(cities.length);
    expect(cities).toHaveLength(8);
    expect(cities.every((c) => c.stage === PILOT_STAGE)).toBe(true);
    expect(cities.some((c) => c.id === 'fukuoka')).toBe(false);
  });
  it('음식 추천이 연결한 가격 ID 는 모두 존재한다', () => {
    const ids = new Set(samples.map((s) => s.id));
    for (const f of foods) for (const id of f.linkedPriceIds) expect(ids.has(id)).toBe(true);
  });
  it('모든 도시에 대표 음식이 있고 영문 추천 이유가 있다', () => {
    for (const c of cities) expect(foods.some((f) => f.cityId === c.id)).toBe(true);
    for (const f of foods) expect(f.reasonEn).toBeTruthy();
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
