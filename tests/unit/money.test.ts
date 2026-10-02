import { describe, expect, it } from 'vitest';
import { convert, isSupported } from '../../src/core/money';
import { quantile } from '../../src/core/pool';
import { addDays, isIsoDate, isWeekend } from '../../src/core/dates';
import type { RatesPayload } from '../../src/core/types';

const rates: RatesPayload = {
  base: 'USD', rates: { USD: 1, JPY: 150, KRW: 1400, EUR: 0.9 }, asOf: '2026-10-02',
  fetchedAt: '2026-10-02T00:00:00Z', source: { id: 't', name: 'Test', url: 'https://example.com' }, stale: false,
};

describe('환산', () => {
  it('현지 통화 → 선택 통화 → USD 참고값', () => {
    expect(convert(1500, 'JPY', 'KRW', rates)).toBeCloseTo(14000, 6);
    expect(convert(1500, 'JPY', 'USD', rates)).toBeCloseTo(10, 6);
  });
  it('같은 통화는 환율 없이도 그대로', () => {
    expect(convert(100, 'JPY', 'JPY', null)).toBe(100);
  });
  it('환율이 없거나 지원하지 않는 통화는 임의 값 대신 null', () => {
    expect(convert(100, 'JPY', 'KRW', null)).toBeNull();
    expect(convert(100, 'JPY', 'VND', rates)).toBeNull();
    expect(isSupported('VND', rates)).toBe(false);
    expect(isSupported('EUR', rates)).toBe(true);
  });
});

describe('보조 함수', () => {
  it('분위수 보간', () => {
    expect(quantile([10, 20], 0.5)).toBe(15);
    expect(quantile([7], 0.9)).toBe(7);
    expect(quantile([1, 2, 3, 4], 0)).toBe(1);
    expect(quantile([1, 2, 3, 4], 1)).toBe(4);
  });
  it('날짜 계산은 달력 기준', () => {
    expect(addDays('2026-12-30', 3)).toBe('2027-01-02');
    expect(isIsoDate('2026-02-30')).toBe(false);
    expect(isWeekend('2026-11-07')).toBe(true);
    expect(isWeekend('2026-11-04')).toBe(false);
  });
});
