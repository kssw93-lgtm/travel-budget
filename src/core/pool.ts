import type { Classified } from './classify';
import { isWeekend } from './dates';
import { MODEL } from './model-config';
import type { Basket, Range, TravelStyle } from './types';

/** 독립 표본 수: 같은 출처·같은 상품의 용량·기간·요일 변형은 1건으로 센다 */
export function independentCount(rows: Classified[]): number {
  return new Set(rows.map((r) => r.productKey)).size;
}

/** 모델 사용 우선 규칙: `예` 표본이 독립 기준으로 충분하면 `예`만, 아니면 `조건부` 표본까지 쓴다. */
export function selectUsable(rows: Classified[]): Classified[] {
  const usable = rows.filter((r) => r.usable);
  const yes = usable.filter((r) => r.sample.modelUse === 'yes');
  return independentCount(yes) >= MODEL.minSamplesPerCategory ? yes : usable;
}

/** 방문 일자에 맞는 표본만 남긴다: 유효 기간 밖 표본 제외, 평일/주말 요금 중 해당 요금만 선택 */
export function poolOnDate(
  rows: Classified[],
  date: string,
): { rows: Classified[]; excludedByDate: string[]; resolvedVariants: string[] } {
  const weekend = isWeekend(date);
  const kept: Classified[] = [];
  const excludedByDate: string[] = [];
  const resolvedVariants: string[] = [];
  for (const r of rows) {
    const { validFrom, validTo } = r.sample;
    if ((validFrom && date < validFrom) || (validTo && date > validTo)) {
      excludedByDate.push(r.sample.id);
      continue;
    }
    if (r.variant) {
      if ((r.variant === 'weekend') !== weekend) continue;
      resolvedVariants.push(r.sample.id);
    }
    kept.push(r);
  }
  return { rows: kept, excludedByDate, resolvedVariants };
}

/** 1회 구매 기준 단가의 양 끝점(교통은 무제한권 일수로 1일 환산) */
export function endpoints(rows: Classified[], basket: Basket): number[] {
  const pts: number[] = [];
  for (const r of rows) {
    const div = basket === 'pass' ? r.passDays : 1;
    pts.push(r.sample.min / div, r.sample.max / div);
  }
  return pts.sort((a, b) => a - b);
}

export function quantile(sorted: number[], p: number): number {
  const n = sorted.length;
  if (n === 0) return NaN;
  const first = sorted[0] as number;
  if (n === 1) return first;
  const pos = Math.min(1, Math.max(0, p)) * (n - 1);
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  const a = sorted[lo] as number;
  const b = sorted[hi] as number;
  return a + (b - a) * (pos - lo);
}

/** 여행 스타일이 가격 분포에서 읽는 구간 */
export function styleRange(sorted: number[], style: TravelStyle): Range {
  const [lo, hi] = MODEL.styleBand[style];
  return { min: quantile(sorted, lo), max: quantile(sorted, hi) };
}
