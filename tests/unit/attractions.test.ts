import { describe, expect, it } from 'vitest';
import { attractionOptions } from '../../src/core/attractions';
import { estimateTrip } from '../../src/core/estimate';
import { priceGuide } from '../../src/core/price-guide';
import type { TripInput } from '../../src/core/types';
import { cityById, samples } from '../../src/data';

const trip = (cityId: string, over: Partial<TripInput> = {}): TripInput => ({
  cityId, visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard', ...over,
});
const city = (id: string) => cityById(id)!;

describe('관광지 입장료 목록', () => {
  it('성인 요금마다 한 줄, 같은 상품의 아동 요금을 짝지어 보여준다', () => {
    const opts = attractionOptions(city('london'), samples);
    const byId = Object.fromEntries(opts.map((o) => [o.id, o]));
    expect(byId['LON-AT-001']!.child?.sample.id).toBe('LON-AT-002'); // 런던탑 성인/아동
    expect(byId['LON-AT-003']!.child?.sample.id).toBe('LON-AT-004'); // 런던아이 성인/아동
    expect(byId['LON-AT-003']!.variable).toBe(true); // 29~39 수요형
    expect(byId['LON-TR-004']).toBeDefined(); // 케이블카는 관광지로 보인다
    expect(opts.some((o) => o.adult.audience === 'child')).toBe(false);
  });

  it('계산 제외 규칙을 그대로 따른다(파리 루브르 EEA 전용 요금 제외, 에펠탑 옵션은 각각 선택 가능)', () => {
    const ids = attractionOptions(city('paris'), samples).map((o) => o.id);
    expect(ids).not.toContain('PAR-AT-004');
    expect(ids).toEqual(expect.arrayContaining(['PAR-AT-001', 'PAR-AT-002', 'PAR-AT-003', 'PAR-AT-005', 'PAR-AT-006']));
  });
});

describe('선택한 관광지로 관광 비용 계산', () => {
  it('고르지 않으면 관광지 비용은 0 (자동으로 넣지 않음)', () => {
    const e = estimateTrip(trip('tokyo'), city('tokyo'), samples);
    expect(e.categories.attraction).toMatchObject({ mode: 'selected', total: { min: 0, max: 0 }, lines: [] });
    expect(e.computable).toBe(true);
  });

  it('고른 곳의 입장료 합계(1곳 1회)로 바뀐다 — 도쿄 스카이트리 + 도쿄타워, 성인 2', () => {
    const e = estimateTrip(trip('tokyo', { attractionIds: ['TYO-AT-001', 'TYO-AT-002'] }), city('tokyo'), samples);
    // v0.4: 스카이트리 콤보는 날짜별 수요요금 ¥3,000–4,800(조건부) → 2×(3000+1500) ~ 2×(4800+1500)
    expect(e.categories.attraction).toMatchObject({ mode: 'selected', total: { min: 9000, max: 12600 }, sampleCount: 2, sufficient: true });
    expect(e.warnings.filter((w) => w.category === 'attraction').map((w) => w.code)).toEqual(expect.arrayContaining(['conditionalUsed', 'variablePricing']));
    expect(e.computable).toBe(true);
  });

  it('아동 요금이 있으면 아동 요금, 범위 가격은 범위 그대로 — 런던탑 + 런던아이, 성인 2·아동 1', () => {
    const e = estimateTrip(trip('london', { children: 1, attractionIds: ['LON-AT-001', 'LON-AT-003'] }), city('london'), samples);
    // v0.4 런던탑 성인 £37·아동 £18.5 → 최소: 2×(37+29) + (18.5+26) = 176.5, 최대: 2×(37+39) + (18.5+35) = 205.5
    expect(e.categories.attraction.total).toEqual({ min: 176.5, max: 205.5 });
    expect(e.categories.attraction.usedIds).toEqual(expect.arrayContaining(['LON-AT-002', 'LON-AT-004']));
    expect(e.warnings.find((w) => w.code === 'variablePricing' && w.category === 'attraction')?.ids).toEqual(['LON-AT-003', 'LON-AT-004']); // 성인·아동 모두 수요형
    expect(e.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'attraction')).toBe(false);
  });

  it('아동 요금이 없는 곳은 성인 요금을 적용하고 경고한다', () => {
    const e = estimateTrip(trip('paris', { adults: 1, children: 1, attractionIds: ['PAR-AT-001'] }), city('paris'), samples);
    expect(e.categories.attraction.total).toEqual({ min: 29.6, max: 29.6 });
    expect(e.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'attraction')).toBe(true);
  });

  it('다른 도시의 ID 만 고르면 무시한다(0)', () => {
    const e = estimateTrip(trip('tokyo', { attractionIds: ['LON-AT-001'] }), city('tokyo'), samples);
    expect(e.categories.attraction.total).toEqual({ min: 0, max: 0 });
  });

  it('여행 기간에 판매하지 않는 곳은 빼고 알린다(오사카 산타마리아 크루즈 2026-10-01 부터)', () => {
    const e = estimateTrip(trip('osaka', { visitDate: '2026-09-20', nights: 2, attractionIds: ['OSA-AT-003', 'OSA-AT-001'] }), city('osaka'), samples);
    expect(e.categories.attraction.total).toEqual({ min: 4000, max: 4000 });
    expect(e.warnings).toContainEqual({ category: 'attraction', code: 'dateExcluded', ids: ['OSA-AT-003'] });
  });
});

describe('현지 물가 한눈에', () => {
  it('바스켓별 대표 가격(중앙값·범위)과 독립 표본 수를 낸다', () => {
    const rows = Object.fromEntries(priceGuide(city('tokyo'), samples).map((r) => [r.basket, r]));
    // 식사 480·2800·4200 → 중앙값 2800
    expect(rows.meal).toMatchObject({ min: 480, median: 2800, max: 4200, independent: 3, sufficient: true });
    // 1일권은 1일 환산(1000, 750, 666.7) — 같은 상품 변형이라 독립 1건(참고용)
    expect(rows.pass!.independent).toBe(1);
    expect(rows.pass!.sufficient).toBe(false);
    expect(rows.pass!.max).toBe(1000);
    expect(rows.snack).toBeUndefined(); // 표본이 없으면 줄 자체가 없다
  });
});
