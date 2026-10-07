import type { Basket, Category, TravelStyle } from './types';

/**
 * 계산 모델의 "가정" 값. 가격이 아니라 사용 방식에 대한 가정이다.
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
   * 바스켓별 이용 횟수 가정(가격이 아니라 사용 방식).
   * pass·ride·meal·snack·attraction 은 1인 하루 기준, souvenir 는 성인 1인 여행 전체 구매 개수.
   */
  usage: {
    pass: { budget: 1, standard: 1, comfort: 1 },
    ride: { budget: 2, standard: 3, comfort: 4 },
    meal: { budget: 3, standard: 3, comfort: 3 },
    snack: { budget: 1, standard: 1, comfort: 2 },
    /** 성인 1인 하루 술 잔(병) 수 — 음주 포함을 고른 경우만 */
    drink: { budget: 1, standard: 2, comfort: 3 },
    /** 관광지는 자동 추정하지 않는다(사용자가 고른 곳 1회씩). 바스켓 구조상 값만 둔다 */
    attraction: { budget: 1, standard: 1, comfort: 1 },
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

/**
 * 가격 분포로 자동 추정하는 비용군. 관광지는 갈지 말지 사용자가 정하는 것이라 자동으로 넣지 않고,
 * 사용자가 고른 곳의 입장료만 더한다(고르지 않으면 0). 따라서 도시 판정(최소 표본·충족률)에서도 빠진다.
 */
export const ESTIMATED_CATEGORIES: readonly Category[] = ['food', 'transport', 'souvenir'];

export const BASKETS: readonly Basket[] = ['pass', 'ride', 'meal', 'snack', 'drink', 'attraction', 'souvenir'];

/** 첫날·마지막 날 60% 규칙을 적용하는 바스켓(식비·활동비) */
export const EDGE_WEIGHTED: readonly Basket[] = ['meal', 'snack', 'drink', 'attraction'];

/**
 * 비용군이 어떤 바스켓으로 이뤄지는지.
 * sum: 필수 바스켓에 선택 바스켓(표본이 충분할 때만)을 더한다.
 * alternatives: 이용권과 1회권처럼 서로 대안이다. 표본이 충분한 바스켓들의 범위를 합쳐 하나 이상이면 된다.
 */
export const BASKET_RULES: Record<Category, { baskets: readonly Basket[]; mode: 'sum' | 'alternatives'; required: readonly Basket[] }> = {
  food: { baskets: ['meal', 'snack', 'drink'], mode: 'sum', required: ['meal'] },
  transport: { baskets: ['pass', 'ride'], mode: 'alternatives', required: [] },
  attraction: { baskets: ['attraction'], mode: 'sum', required: ['attraction'] },
  souvenir: { baskets: ['souvenir'], mode: 'sum', required: ['souvenir'] },
};
export const STYLES: readonly TravelStyle[] = ['budget', 'standard', 'comfort'];

/** `세부유형`·`단위`·항목명 해석용 키워드. 새 조사자료의 표기가 늘면 여기에만 추가한다. */
export const KEYWORDS = {
  /** 곁들임 메뉴(한 끼도 간식도 아니라 계산에서 제외) */
  side: /사이드/,
  /** 주류(맥주·와인 등). '음료' 보다 먼저 판정 */
  drink: /주류|맥주|와인|칵테일|소주|사케|beer|wine|cocktail|alcohol/i,
  snack: /간식|음료/,
  /** 차량 단위 요금(택시·전용차)은 1인 요금이 아니다 */
  vehicle: /차량|택시|전용차|\btaxi\b|private car/i,
  /** 1인이 아니라 차량·객실 1대 단위로 파는 관광 상품(2인승 캡슐 등) — 인원 기준 입장료로 쓸 수 없다 */
  perVehicle: /(?:^|\s)1대|per (?:car|cabin|capsule|vehicle)/i,
  ride: /(?:^|\s)1회|per ride|single/i,
  /** 관광 체험형 탑승(케이블카·곤돌라·로프웨이)은 일상 교통이 아니라 관광지 입장권 바스켓에 넣는다 */
  sightseeingRide: /케이블카|곤돌라|로프웨이|cable car|gondola|ropeway/i,
  /** 1회 요금 합계의 하루 상한(예: TfL daily cap) */
  dailyCap: /상한|daily cap|fare cap/i,
  /**
   * 대중교통 하루 상한의 적용을 받지 않는 별도 요금 체계(공유자전거·킥보드·수상교통 등).
   * 예: 런던 Santander Cycles 는 TfL 버스·지하철 일일 상한에 포함되지 않는다.
   */
  capExempt: /공유자전거|자전거|킥보드|bike|cycle|scooter|보트|수상|ferry|boat|river bus/i,
  /** 메뉴 가격에 세금·서비스료가 빠진 표기(예: 450++) */
  taxExcluded: /\+\+|세금[^,;]*별도|서비스료[^,;]*별도|excl(?:\.|uding)? (?:tax|service)/i,
  meal: /한끼|식사|관광지 식당|메뉴 표본|아침/,
  /** 아동 표본임을 직접 밝힌 낱말 */
  child: /아동|어린이|child/i,
  /** 나이·학년으로 적은 아동·학생 요금(예: 만 15세 이하, 중학생 이하, Under 10). 성인 표기가 없을 때만 본다 */
  childAge: /\d+\s*[-~]\s*\d+\s*세|\d+\s*세\s*(?:이하|미만)|초등|중학|고등학생|유치원|미취학|\bunder\s*\d+|and under/i,
  /** 성인 표본임을 밝힌 표기(예: "성인(15세 이상, 고등학생 이상)", "경복궁 관람권 (성인)"). "성인 동반"은 제외 */
  adult: /성인(?!\s*동반)|어른|대인|\badult/i,
  weekday: /평일|weekday/i,
  weekend: /주말|공휴일|weekend|holiday/i,
  dailyPass: /1일|당일|영업종료|일일|\bday\b|one-day|daily/i,
  hours: /(\d+)\s*(?:시간|-?\s*hour)/i,
  /** N일권(2일권·7일권, 2-day 등). 시간 표기가 없을 때 이용권이 덮는 일수 */
  days: /(\d+)\s*일\s*(?:권|이용권|패스)|(\d+)\s*-?\s*day\b/i,
  fromPrice: /시작가|최저|\bfrom\b|starting price|lowest/i,
  /** 학생·우대·감면 같은 할인 대상 요금(대상 열에 성인 표기가 없을 때). 관광지 목록에 성인 요금으로 따로 세우지 않는다 */
  concession: /학생|우대|감면|할인\s*대상|student|concession/i,
} as const;
