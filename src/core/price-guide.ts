import { classify } from './classify';
import { BASKETS, MODEL } from './model-config';
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
  return out;
}
