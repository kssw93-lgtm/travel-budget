import { estimateTrip } from './estimate';
import { priceGuide } from './price-guide';
import type { City, ExtraSample, PriceSample, Range } from './types';

/** 도시별 비교 조건: 성인 1명, 3박 4일, 일반형(보통). 계산기와 같은 엔진·같은 표본으로 계산한다 */
export const COMPARE_TRIP = { nights: 3, adults: 1, children: 0, style: 'standard' as const };

export interface CompareRow {
  city: City;
  /** 1인 1일 현지 체류비(외식·현지 교통·예비비, 현지 통화) */
  perDay: Range;
  /** 대표 한 끼 메뉴 가격 중앙값(현지 통화, 세금·팁 가산 전) */
  meal: number | null;
  /** 대중교통 1회 요금 중앙값(현지 통화) */
  ride: number | null;
}

/** 공개 도시 전체의 비교표. 계산할 수 없는 도시는 빠진다 */
export function costComparison(cities: City[], samples: PriceSample[], extras: ExtraSample[], refDate: string): CompareRow[] {
  const out: CompareRow[] = [];
  for (const city of cities) {
    const e = estimateTrip({ cityId: city.id, visitDate: refDate, ...COMPARE_TRIP }, city, samples, extras);
    if (!e.total) continue;
    const pg = priceGuide(city, samples);
    out.push({
      city,
      perDay: { min: e.total.min / e.days, max: e.total.max / e.days },
      meal: pg.find((p) => p.basket === 'meal')?.median ?? null,
      ride: pg.find((p) => p.basket === 'ride')?.median ?? null,
    });
  }
  return out;
}

/** 현지 통화 금액을 다른 통화로(1 USD 기준 환율표). 환율이 없으면 null */
export function convertAmount(amount: number, from: string, to: string, rates: Record<string, number>): number | null {
  const a = rates[from];
  const b = rates[to];
  return a && b ? (amount / a) * b : null;
}

/** 비교표 금액 표기: 100 이상은 정수, 그보다 작으면 소수 둘째 자리까지(필요할 때만) */
export function formatCompareMoney(amount: number, currency: string, locale: string): string {
  const big = Math.abs(amount) >= 100;
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: big ? 0 : 2 }).format(amount);
  } catch {
    return `${(big ? Math.round(amount) : Math.round(amount * 100) / 100).toLocaleString(locale)} ${currency}`;
  }
}
