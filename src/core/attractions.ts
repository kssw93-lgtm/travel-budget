import { classify, isVariablePricing, type Classified } from './classify';
import { KEYWORDS } from './model-config';
import type { City, PriceSample } from './types';

/** 관광지 입장료 목록의 한 줄: 성인 요금 표본과(있으면) 같은 상품의 아동 요금 표본 */
export interface AttractionOption {
  id: string;
  adult: Classified;
  child: Classified | null;
  /** 날짜·수요에 따라 달라져 범위로만 보여야 하는 가격 */
  variable: boolean;
}

/**
 * 도시의 관광지(입장권 바스켓) 목록. 계산 제외 규칙은 그대로 적용한다(EEA 전용·상한 문구·D등급 등은 빠짐).
 * 같은 명소의 관람 옵션(에펠탑 계단/엘리베이터/정상)은 각각 고를 수 있게 따로 보여 준다.
 * 아동 요금은 같은 상품(같은 출처·같은 명소) 의 아동 표본과 짝짓는다.
 */
export function attractionOptions(city: City, samples: PriceSample[]): AttractionOption[] {
  const rows = samples.filter((s) => s.cityId === city.id).map(classify).filter((r) => r.usable && r.basket === 'attraction');
  const children = rows.filter((r) => r.audience === 'child');
  // 학생·우대 요금(대상에 성인 표기 없음)은 같은 곳의 일반 요금과 겹치는 할인 변형이라 목록에 따로 세우지 않는다
  const isConcession = (r: Classified) => KEYWORDS.concession.test(r.sample.target) && !KEYWORDS.adult.test(r.sample.target);
  return rows
    .filter((r) => r.audience === 'adult' && !isConcession(r))
    .map((adult) => ({
      id: adult.sample.id,
      adult,
      child: children.find((c) => c.productKey === adult.productKey) ?? null,
      variable: isVariablePricing(adult.sample, adult.variant),
    }));
}
