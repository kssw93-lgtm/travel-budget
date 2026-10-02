/** 엑셀 `가격 표본` 시트의 한 행. 가격은 조회 당시 현지 통화 원값 그대로 보존한다. */
export type Category = 'transport' | 'food' | 'attraction' | 'souvenir';
export type SourceGrade = 'A' | 'B' | 'C' | 'D';
export type ModelUse = 'yes' | 'conditional' | 'no';
export type TravelStyle = 'budget' | 'standard' | 'comfort';

/**
 * 가격 바스켓: 단위가 같은 표본끼리만 묶는 계산 단위. 서로 다른 바스켓의 가격은 한 분포로 섞지 않는다.
 * pass=하루(N시간) 이용권, ride=1회권, meal=한 끼 식사, snack=간식·음료, attraction=입장권, souvenir=기념품
 */
export type Basket = 'pass' | 'ride' | 'meal' | 'snack' | 'attraction' | 'souvenir';

export interface PriceSample {
  id: string;
  cityId: string;
  country: string;
  city: string;
  category: Category;
  subtype: string;
  nameKo: string;
  nameEn: string;
  min: number;
  max: number;
  currency: string;
  unit: string;
  /** 가격형태 원문(고정형·요일형·기간형·수요형 …) */
  priceType: string;
  /** 대상 원문(일반·아동·EEA·비거주자 …) */
  target: string;
  grade: SourceGrade;
  modelUse: ModelUse;
  /** 상태 원문(확정 1차·재검증·보류 …) */
  status: string;
  /** 조회일 YYYY-MM-DD */
  checkedAt: string;
  /** 적용/게시 원문 */
  applied: string;
  /** `적용/게시`에서 해석한 유효 기간(없으면 생략). 날짜 보정에만 쓴다. */
  validFrom?: string;
  validTo?: string;
  sourceName: string;
  sourceUrl: string;
  note: string;
}

export interface City {
  id: string;
  country: string;
  countryEn: string;
  nameKo: string;
  nameEn: string;
  currency: string;
  tier: string;
  stage: string;
}

export interface FoodRecommendation {
  cityId: string;
  nameKo: string;
  nameEn: string;
  reason: string;
  reasonEn?: string;
  /** 저 / 저~중 / 중 / 중~고 / 고 */
  budgetBand: string;
  linkedPriceIds: string[];
  priceStatus: string;
  recommendSource: string;
  recommendUrl: string;
  note: string;
}

export interface TripInput {
  cityId: string;
  /** YYYY-MM-DD */
  visitDate: string;
  nights: number;
  adults: number;
  children: number;
  style: TravelStyle;
}

export interface Range {
  min: number;
  max: number;
}

/** 번역은 UI가 한다. 엔진은 코드와 파라미터만 돌려준다. */
export type WarningCode =
  | 'insufficient'
  | 'conditionalUsed'
  | 'gradeCUsed'
  | 'revalidation'
  | 'fromPrice'
  | 'childAsAdult'
  | 'dateResolved'
  | 'dateExcluded'
  | 'variablePricing'
  | 'lowFillRate'
  | 'basketOmitted'
  | 'dailyCapApplied'
  | 'taxExcluded'
  | 'sightseeingRide';

export interface Warning {
  code: WarningCode;
  category?: Category;
  basket?: Basket;
  /** 관련 표본 ID */
  ids?: string[];
}

export interface SourceRef {
  name: string;
  url: string;
}

export interface BasketEstimate {
  basket: Basket;
  /** 성인 기준 사용 가능 표본 행 수 */
  sampleCount: number;
  /** 성인 기준 독립 표본 수(같은 상품의 용량·기간 변형은 1건). 충족 판정에 쓴다 */
  independentCount: number;
  childSampleCount: number;
  /** 표본 수가 최소 기준 이상 */
  sufficient: boolean;
  /** 실제로 합계에 반영됨 */
  included: boolean;
}

export interface CategoryEstimate {
  category: Category;
  baskets: BasketEstimate[];
  /** 현지 통화 합계 범위(전 일정·전 인원). 데이터 부족이면 null */
  total: Range | null;
  /** 1인 1일 기준 단가 범위(전체 일정 평균). 데이터 부족이면 null */
  perPersonPerDay: Range | null;
  sampleCount: number;
  /** 독립 표본 수(충족 판정 기준). 부족이면 대표 바스켓의 독립 표본 수 */
  independentCount: number;
  /** 어린이 가격에 쓴 표본 수 */
  childSampleCount: number;
  sufficient: boolean;
  sources: SourceRef[];
  checkedFrom: string | null;
  checkedTo: string | null;
  usedIds: string[];
}

export interface Estimate {
  cityId: string;
  currency: string;
  days: number;
  categories: Record<Category, CategoryEstimate>;
  /** 4개 비용군 합(예비비 전). 하나라도 부족하면 null */
  subtotal: Range | null;
  contingency: Range | null;
  /** 현지 체류비 최종(예비비 포함). 하나라도 부족하면 null */
  total: Range | null;
  /** 하루 평균 외식비(전 인원 합계 ÷ 여행일 수) */
  dailyFoodAverage: Range | null;
  missing: Category[];
  fillRate: number;
  /** 도시 단위 계산 가능 여부(비용군별 최소 표본 + 충족률) */
  computable: boolean;
  warnings: Warning[];
}

export interface RatesPayload {
  base: 'USD';
  /** 1 USD 당 해당 통화 단위 수 */
  rates: Record<string, number>;
  /** 환율 기준일 YYYY-MM-DD */
  asOf: string;
  fetchedAt: string;
  source: { id: string; name: string; url: string };
  /** 최근 갱신에 실패해 저장된 오래된 값을 쓰는 중 */
  stale: boolean;
}
