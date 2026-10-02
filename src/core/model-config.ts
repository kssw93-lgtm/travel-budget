import type { Basket, Category, TravelStyle } from './types';

/**
 * 계산 모델의 "가정" 값. 가격이 아니라 사용 방식에 대한 가정이며, 방법론 페이지에 그대로 공개한다.
 * 가격 데이터(JSON)는 건드리지 않고 여기 값만 바꿔도 결과가 바뀐다.
 */
export const MODEL = {
  /** 바스켓(필수 비용 유형)당 최소 표본 수 */
  minSamplesPerCategory: 3,
  /** 충족률 = Σmin(cap, 표본수) / (cap × 4). 이 값 미만이면 계산 보류 */
  fillRateCap: 3,
  minFillRate: 0.75,
  contingencyRate: 0.1,
  /** 첫날·마지막 날 식비·활동비 비율 */
  edgeDayFactor: 0.6,
  /**
   * 바스켓별 이용 횟수 가정(가격이 아니라 사용 방식). 방법론 페이지에 그대로 공개한다.
   * pass·ride·meal·snack·attraction 은 1인 하루 기준, souvenir 는 성인 1인 여행 전체 구매 개수.
   */
  usage: {
    pass: { budget: 1, standard: 1, comfort: 1 },
    ride: { budget: 2, standard: 3, comfort: 4 },
    meal: { budget: 3, standard: 3, comfort: 3 },
    snack: { budget: 1, standard: 1, comfort: 2 },
    attraction: { budget: 1, standard: 1, comfort: 2 },
    souvenir: { budget: 2, standard: 3, comfort: 5 },
  } as Record<Basket, Record<TravelStyle, number>>,
  /** 여행 스타일별로 가격 분포(표본 끝점 정렬)에서 읽는 분위 구간 */
  styleBand: {
    budget: [0, 0.5],
    standard: [0.25, 0.75],
    comfort: [0.5, 1],
  } as Record<TravelStyle, [number, number]>,
  /** 방문객이 해당하지 않는 거주자 전용 대상(`대상` 열 값) */
  excludedTargets: ['EEA'],
  /** 숫자 입력 한도 */
  limits: { nightsMin: 1, nightsMax: 30, adultsMin: 1, adultsMax: 20, childrenMax: 20 },
} as const;

export const CATEGORIES: readonly Category[] = ['food', 'transport', 'attraction', 'souvenir'];

export const BASKETS: readonly Basket[] = ['pass', 'ride', 'meal', 'snack', 'attraction', 'souvenir'];

/** 첫날·마지막 날 60% 규칙을 적용하는 바스켓(식비·활동비) */
export const EDGE_WEIGHTED: readonly Basket[] = ['meal', 'snack', 'attraction'];

/**
 * 비용군이 어떤 바스켓으로 이뤄지는지.
 * sum: 필수 바스켓에 선택 바스켓(표본이 충분할 때만)을 더한다.
 * alternatives: 이용권과 1회권처럼 서로 대안이다. 표본이 충분한 바스켓들의 범위를 합쳐 하나 이상이면 된다.
 */
export const BASKET_RULES: Record<Category, { baskets: readonly Basket[]; mode: 'sum' | 'alternatives'; required: readonly Basket[] }> = {
  food: { baskets: ['meal', 'snack'], mode: 'sum', required: ['meal'] },
  transport: { baskets: ['pass', 'ride'], mode: 'alternatives', required: [] },
  attraction: { baskets: ['attraction'], mode: 'sum', required: ['attraction'] },
  souvenir: { baskets: ['souvenir'], mode: 'sum', required: ['souvenir'] },
};
export const STYLES: readonly TravelStyle[] = ['budget', 'standard', 'comfort'];

/** `세부유형`·`단위`·항목명 해석용 키워드. 새 조사자료의 표기가 늘면 여기에만 추가한다. */
export const KEYWORDS = {
  /** 곁들임 메뉴(한 끼도 간식도 아니라 계산에서 제외) */
  side: /사이드/,
  snack: /간식|음료/,
  /** 차량 단위 요금(택시·전용차)은 1인 요금이 아니다 */
  vehicle: /차량|택시|전용차|\btaxi\b|private car/i,
  ride: /(?:^|\s)1회|per ride|single/i,
  meal: /한끼|식사|관광지 식당|메뉴 표본|아침/,
  child: /아동|어린이|child|\d+\s*-\s*\d+\s*세/i,
  weekday: /평일|weekday/i,
  weekend: /주말|공휴일|weekend|holiday/i,
  dailyPass: /1일|당일|영업종료|일일|\bday\b|one-day|daily/i,
  hours: /(\d+)\s*(?:시간|-?\s*hour)/i,
  fromPrice: /시작가|\bfrom\b/i,
} as const;
