import { describe, expect, it } from 'vitest';
import { STATIC_RATES } from '../../src/core/rates/static';
import { COMMON_CURRENCIES } from '../../src/ui/currencies';

describe('조사 고정 환율표', () => {
  const r = STATIC_RATES.rates;

  it('통화 목록의 모든 통화가 양수 환율로 들어 있다', () => {
    for (const code of COMMON_CURRENCIES) expect(r[code], code).toBeGreaterThan(0);
    expect(r.USD).toBe(1);
  });

  it('교차 확인: 원/달러는 서울 외환시장 2026-10-02 1,350.60원과 1% 안, 홍콩달러는 연동 범위 안', () => {
    expect(Math.abs(r.KRW! / 1350.6 - 1)).toBeLessThan(0.01);
    expect(r.HKD!).toBeGreaterThanOrEqual(7.75);
    expect(r.HKD!).toBeLessThanOrEqual(7.85);
    expect(r.AED).toBe(3.6725);
    expect(r.SAR).toBe(3.75);
  });

  it('기준일·출처가 붙어 있다', () => {
    expect(STATIC_RATES.asOf).toBe('2026-10-02');
    expect(STATIC_RATES.source.url).toMatch(/^https:\/\/www\.ecb\.europa\.eu\//);
  });
});
