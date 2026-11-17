import { estimateTrip } from './estimate';
import { cityRows } from './city-rows';
import { priceGuide } from './price-guide';
import { selectUsable } from './pool';
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
  /** 공식 가격 표본에서 확인한 커피·카페 음료 가격 범위(현지 통화). 용량·상품이 같다는 뜻은 아님 */
  coffee: Range | null;
  /** 공식 가격 표본에서 확인한 생수 가격 범위(현지 통화). 용량이 같다는 뜻은 아님 */
  bottledWater: Range | null;
}

const EXAMPLE_PATTERNS = {
  coffee: /coffee|café|cafe|latte|espresso|cappuccino|americano|flat white|mocha|cold brew|drip coffee|brewed coffee|아메리카노|커피|라떼|에스프레소|카푸치노|콜드브루|플랫화이트|モカ|コーヒー|カフェラテ|エスプレッソ|フラットホワイト/i,
  bottledWater: /bottled water|mineral water|water bottle|생수|미네랄워터|ミネラルウォーター/i,
} as const;

/** 같은 나라 표본을 포함한 현지 가격 예시 범위. 다른 용량·상품 간 가격 분포임을 UI에서 안내한다. */
function exampleRange(city: City, samples: PriceSample[], pattern: RegExp): Range | null {
  const pool = selectUsable(cityRows(city, samples).rows.filter((row) =>
    row.usable && row.audience === 'adult' && row.basket === 'snack' &&
    pattern.test(`${row.sample.nameKo} ${row.sample.nameEn} ${row.sample.nameJa ?? ''}`),
  ));
  const unique = new Map(pool.map((row) => [row.productKey, row.sample]));
  const prices = [...unique.values()].slice(0, 5);
  return prices.length
    ? { min: Math.min(...prices.map((sample) => sample.min)), max: Math.max(...prices.map((sample) => sample.max)) }
    : null;
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
      coffee: exampleRange(city, samples, EXAMPLE_PATTERNS.coffee),
      bottledWater: exampleRange(city, samples, EXAMPLE_PATTERNS.bottledWater),
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
