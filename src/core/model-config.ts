import type { Category, TravelStyle } from './types';

/**
 * 계산 모델의 "가정" 값. 가격이 아니라 사용 방식에 대한 가정이며, 방법론 페이지에 그대로 공개한다.
 * 가격 데이터(JSON)는 건드리지 않고 여기 값만 바꿔도 결과가 바뀐다.
 */
export const MODEL = {
  /** 비용군당 최소 표본 수(조사자료 `도시 초안` 판정 기준과 동일) */
  minSamplesPerCategory: 2,
  /** 충족률 = Σmin(cap, 표본수) / (cap × 4). 이 값 미만이면 계산 보류 */
  fillRateCap: 3,
  minFillRate: 0.75,
  contingencyRate: 0.1,
  /** 첫날·마지막 날 식비·활동비 비율 */
  edgeDayFactor: 0.6,
  /** 하루 식사 횟수 */
  mealsPerDay: 3,
  /** 하루 관광(유료 명소) 횟수 */
  attractionsPerDay: { budget: 1, standard: 1, comfort: 2 } as Record<TravelStyle, number>,
  /** 성인 1인당 여행 전체 기념품 구매 개수 */
  souvenirsPerAdult: { budget: 2, standard: 3, comfort: 5 } as Record<TravelStyle, number>,
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
export const STYLES: readonly TravelStyle[] = ['budget', 'standard', 'comfort'];

/** `세부유형`·`단위`·항목명 해석용 키워드. 새 조사자료의 표기가 늘면 여기에만 추가한다. */
export const KEYWORDS = {
  /** 식사가 아닌 세부유형(간식·음료·곁들임) */
  notMeal: /간식|음료|사이드/,
  meal: /한끼|식사|관광지 식당|메뉴 표본|아침/,
  child: /아동|어린이|child|\d+\s*-\s*\d+\s*세/i,
  weekday: /평일|weekday/i,
  weekend: /주말|공휴일|weekend|holiday/i,
  dailyPass: /1일|당일|영업종료|일일|\bday\b|one-day|daily/i,
  hours: /(\d+)\s*(?:시간|-?\s*hour)/i,
  fromPrice: /시작가|\bfrom\b/i,
} as const;
