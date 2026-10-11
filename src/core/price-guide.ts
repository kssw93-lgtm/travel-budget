import { classify } from './classify';
import { BASKET_RULES, BASKETS, MODEL, minSamples } from './model-config';
import { endpoints, independentCount, quantile, selectUsable } from './pool';
import type { Basket, City, PriceSample } from './types';

/** 현지 물가 한눈에: 바스켓별 대표 가격(1회·1개·1끼·1일 단위). 계산과 같은 표본 선택 규칙을 쓴다. */
export interface GuideRow {
  basket: Basket;
  min: number;
  median: number;
  max: number;
  rows: number;
  independent: number;
  /** 독립 표본이 최소 기준 이상 */
  sufficient: boolean;
}

export function priceGuide(city: City, samples: PriceSample[]): GuideRow[] {
  const all = samples.filter((s) => s.cityId === city.id).map(classify);
  const out: GuideRow[] = [];
  for (const basket of BASKETS) {
    const pool = selectUsable(all.filter((r) => r.basket === basket && r.audience === 'adult'));
    if (pool.length === 0) continue;
    const pts = endpoints(pool, basket);
    const independent = independentCount(pool);
    out.push({
      basket,
      min: pts[0] as number,
      median: quantile(pts, 0.5),
      max: pts[pts.length - 1] as number,
      rows: pool.length,
      independent,
      sufficient: independent >= MODEL.minSamplesPerCategory,
    });
  }
  // 교통(1회권·이용권 대안): 어느 쪽도 3건이 안 되면 공식 요금 1건부터 쓴다(계산과 같은 규칙)
  const transport = BASKET_RULES.transport.baskets;
  if (!out.some((r) => transport.includes(r.basket) && r.sufficient)) {
    for (const r of out) if (transport.includes(r.basket)) r.sufficient = r.independent >= minSamples(r.basket);
  }
  return out;
}
