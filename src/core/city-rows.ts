import { classify, type Classified } from './classify';
import { MODEL } from './model-config';
import { independentCount, selectUsable } from './pool';
import type { Basket, City, PriceSample } from './types';

/**
 * 같은 나라 안에서 빌려 쓰는 바스켓: 식사·간식·주류·시내 교통 1회 요금.
 * 한 나라 안에서는 도시마다 물가 차이가 크지 않아서, 도시 자체 공식 가격이 모자라면 같은 나라 다른 도시의 공식 가격을 함께 쓴다.
 * 도시는 관광지·테마파크·대표 음식을 보여 주려고 추가하므로, 기본 물가는 나라 단위로 모아도 된다.
 * 이용권(1일권 등)·관광지·기념품은 도시마다 상품이 달라 빌리지 않는다.
 */
export const COUNTRY_SHARED: readonly Basket[] = ['meal', 'snack', 'drink', 'ride'];

/** 이 도시 자체 표본으로 모자라 같은 나라 표본을 빌려야 하는 바스켓 */
export function borrowedBaskets(own: Classified[]): Basket[] {
  const hasTransport = own.some((r) => r.usable && r.audience === 'adult' && (r.basket === 'ride' || r.basket === 'pass'));
  return COUNTRY_SHARED.filter((b) =>
    // 교통은 시내버스 1종뿐인 소도시도 그 도시 요금이 맞으므로, 자체 교통 요금이 하나도 없을 때만 빌린다
    b === 'ride'
      ? !hasTransport
      : independentCount(selectUsable(own.filter((r) => r.basket === b && r.audience === 'adult'))) < MODEL.minSamplesPerCategory,
  );
}

/** 계산에 쓰는 도시 표본: 도시 자체 표본 + (모자란 바스켓만) 같은 나라 다른 도시 표본 */
export function cityRows(city: City, samples: PriceSample[]): { rows: Classified[]; borrowed: Basket[] } {
  const own = samples.filter((s) => s.cityId === city.id).map(classify);
  const need = borrowedBaskets(own);
  if (need.length === 0) return { rows: own, borrowed: [] };
  const extra = samples
    .filter((s) => s.cityId !== city.id && s.country === city.country)
    .map(classify)
    .filter((r) => r.basket !== null && need.includes(r.basket));
  const borrowed = need.filter((b) => extra.some((r) => r.usable && r.basket === b));
  return { rows: [...own, ...extra.filter((r) => r.basket !== null && borrowed.includes(r.basket))], borrowed };
}
