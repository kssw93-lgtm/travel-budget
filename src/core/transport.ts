import { classify, isVariablePricing, type Classified } from './classify';
import type { City, PriceSample } from './types';

/** 자세히 설정에서 고를 수 있는 교통 이용권 하나: 성인 표본과(있으면) 같은 상품·같은 기간의 아동 표본 */
export interface PassOption {
  id: string;
  adult: Classified;
  child: Classified | null;
  /** 이용권 1장이 덮는 일수(24시간권=1, 72시간권=3) */
  days: number;
  variable: boolean;
}

/**
 * 도시의 교통 이용권(1일권·N시간권·관광객 패스) 목록. 계산 제외 규칙을 그대로 따르고,
 * 하루 상한 요금(TfL daily cap 처럼 1회권 합계의 상한)은 이용권이 아니므로 뺀다.
 */
export function passOptions(city: City, samples: PriceSample[]): PassOption[] {
  const rows = samples.filter((s) => s.cityId === city.id).map(classify).filter((r) => r.usable && r.basket === 'pass' && !r.dailyCap);
  const children = rows.filter((r) => r.audience === 'child');
  return rows
    .filter((r) => r.audience === 'adult')
    .map((adult) => ({
      id: adult.sample.id,
      adult,
      child: children.find((c) => c.productKey === adult.productKey && c.passDays === adult.passDays) ?? null,
      days: adult.passDays,
      variable: isVariablePricing(adult.sample, adult.variant),
    }));
}

/** 이용 일수를 덮는 데 필요한 이용권 장수(1인). 72시간권으로 4일이면 2장 */
export const passesNeeded = (passDays: number, useDays: number): number => (useDays <= 0 ? 0 : Math.ceil(useDays / Math.max(1, passDays)));
