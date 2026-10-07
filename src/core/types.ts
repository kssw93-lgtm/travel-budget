/** 엑셀 `가격 표본` 시트의 한 행. 가격은 조회 당시 현지 통화 원값 그대로 보존한다. */
export type Category = 'transport' | 'food' | 'attraction' | 'souvenir';
export type SourceGrade = 'A' | 'B' | 'C' | 'D';
export type ModelUse = 'yes' | 'conditional' | 'no';
export type TravelStyle = 'budget' | 'standard' | 'comfort';

/**
 * 가격 바스켓: 단위가 같은 표본끼리만 묶는 계산 단위. 서로 다른 바스켓의 가격은 한 분포로 섞지 않는다.
 * pass=하루(N시간) 이용권, ride=1회권, meal=한 끼 식사, snack=간식·음료, drink=주류(선택), attraction=입장권, souvenir=기념품
 */
export type Basket = 'pass' | 'ride' | 'meal' | 'snack' | 'drink' | 'attraction' | 'souvenir';

export interface PriceSample {
  id: string;
  cityId: string;
  country: string;
  city: string;
  category: Category;
  subtype: string;
  nameKo: string;
  nameEn: string;
  /** 일본어권 표기로 확인된 일본어 이름(없으면 일본어 화면에서 영문) */
  nameJa?: string;
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
  /** 검수 메모(data/overlays/review-flags.json). 가격·분류는 바꾸지 않고 재검증 필요만 표시 */
  review?: { flag: string; flagEn: string; detail: string; reportedAt: string };
}

/** 공항↔시내 이동, 렌터카처럼 "고르면 더하는" 여행당 비용. 엑셀 `가격 표본` 시트의 카테고리 `공항이동`·`렌터카` 행 */
export type ExtraKind = 'airport' | 'rental';
export interface ExtraSample extends Omit<PriceSample, 'category'> {
  kind: ExtraKind;
}

/** 엑셀 `도시 메모` 시트의 한 행(팁 관행, 숙박세, 입국 수수료, eSIM 등). 계산에는 넣지 않고 안내만 한다 */
export interface CityMemo {
  cityId: string;
  item: string;
  value: string;
  /** 영문 항목·값(선택 열 `Item (English)`·`Value (English)`). 없으면 영어 화면에서도 한글 원문 */
  itemEn: string;
  valueEn: string;
  unit: string;
  sourceName: string;
  sourceUrl: string;
  checkedAt: string;
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
  /** 일본어 이름(확인된 표기만)과 일본어 추천 이유 */
  nameJa?: string;
  reasonJa?: string;
  /** 무슨 음식인지 한 줄 설명(한·영·일) */
  desc?: { ko: string; en: string; ja: string };
  /** 자유 이용 허락 사진(위키미디어 공용). 없으면 사진 없이 보인다 */
  photo?: FoodPhoto;
  /** 저 / 저~중 / 중 / 중~고 / 고 */
  budgetBand: string;
  linkedPriceIds: string[];
  priceStatus: string;
  recommendSource: string;
  recommendUrl: string;
  note: string;
}

export interface FoodPhoto {
  /** 이미지 주소(upload.wikimedia.org) */
  url: string;
  author: string;
  /** 예: CC BY-SA 4.0, CC0, Public domain */
  license: string;
  /** 위키미디어 공용 파일 페이지 */
  page: string;
}

export interface TripInput {
  cityId: string;
  /** YYYY-MM-DD */
  visitDate: string;
  nights: number;
  adults: number;
  children: number;
  style: TravelStyle;
  /**
   * 사용자가 직접 고른 관광지(입장권 표본 ID). 하나 이상이면 관광 비용을 평균 추정 대신
   * 선택한 곳의 입장료 합계(성인×인원 + 아동 요금×아동, 1곳당 1회)로 계산한다.
   */
  attractionIds?: string[];
  /** 성인 음주 비용 포함(주류 바스켓). 주류 가격 표본이 3건 미만이면 포함하지 않고 알린다 */
  drinks?: boolean;
  /** 고른 공항↔시내 이동 상품(ExtraSample ID)과 이용 횟수(1=편도, 2=왕복). 왕복 상품이면 횟수와 무관하게 1장 */
  airportId?: string;
  airportTrips?: 1 | 2;
  /** 고른 렌터카 상품(1일 요금, 차량 1대)과 대여 일수 */
  rentalId?: string;
  rentalDays?: number;
  /**
   * 교통 이용 방식(자세히 설정). 없으면 여행 스타일별 하루 이용 횟수 가정으로 매일 계산한다.
   * none: 시내 대중교통을 거의 타지 않음(공항 이동은 따로 고른 경우만) · rides: 하루 perDay 번 × days 일 ·
   * pass: 고른 이용권(passId)으로 days 일을 덮는 장수
   */
  transport?: TransportPlan;
  /** 하루 끼니 수(자세히 설정, 1~4). 없으면 모델 기본값 */
  mealsPerDay?: number;
  /** 꼭 먹을 음식(자세히 설정): 1인분 가격(현지 통화). 1개당 1인 일반 한 끼를 대신한다 */
  mustEat?: MustEat[];
  /** 음주(자세히 설정): 성인 1인 하루 잔 수. 없으면 여행 스타일 기본값 */
  drinksPerDay?: number;
  /** 음주(자세히 설정): 마실 술 1잔 가격. 있으면 주류 가격 분포 대신 고른 술의 가격 범위(최저~최고)로 계산 */
  drinkPicks?: MustEat[];
}

export type TransportPlan = { mode: 'none' } | { mode: 'rides'; perDay: number; days: number } | { mode: 'pass'; passId: string; days: number };

export interface MustEat {
  name: string;
  /** 1인분 가격(현지 통화) */
  price: number;
  /** 조사된 가격 표본에서 자동으로 채운 값이면 그 표본 ID(직접 입력이면 없음) */
  sampleId?: string;
}

/** 고른 여행당 비용 한 건(공항 이동·렌터카) */
export interface ExtraEstimate {
  kind: ExtraKind;
  id: string;
  nameKo: string;
  nameEn: string;
  nameJa?: string;
  /** 공항: 1인 이용 횟수(왕복 상품은 1) / 렌터카: 대여 일수 */
  units: number;
  /** 왕복 상품 */
  roundTrip: boolean;
  /** 성인 1회(렌터카는 차량 1대 1일) 가격 */
  unitPrice: Range;
  /** 같은 상품의 아동 가격(없으면 null → 성인 가격 적용) */
  childPrice: Range | null;
  total: Range;
  contingency: Range | null;
  sourceName: string;
  sourceUrl: string;
  checkedAt: string;
  variable: boolean;
}

/**
 * 결과 "자세히 보기"의 한 줄.
 * day: 일차별(그날 1인 이용 횟수 × 1회 가격 → 전 인원 합계), trip: 여행 전체(기념품), item: 고른 관광지 1곳
 */
export interface DetailLine {
  kind: 'day' | 'trip' | 'item';
  basket: Basket;
  /** 1부터 시작하는 일차 */
  day?: number;
  date?: string;
  /** 1인 이용 횟수(끼니·회·곳). trip 은 여행 전체 개수. 첫날·마지막 날은 기본 횟수 × weight */
  units: number;
  /** 첫날·마지막 날 비율(1 이 아니면 '3끼 × 60%' 처럼 표시) */
  weight?: number;
  /** 성인 1회(1끼·1회·1곳·1개) 가격 범위 */
  unitPrice: Range;
  /** 그날(또는 여행 전체) 전 인원 합계 */
  total: Range;
  id?: string;
  nameKo?: string;
  nameEn?: string;
  nameJa?: string;
  childPrice?: Range | null;
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
  | 'capExempt'
  | 'taxExcluded'
  | 'sightseeingRide'
  | 'drinkNoData'
  | 'mustEat'
  | 'customPrice'
  | 'transportNone'
  | 'drinkPicks';

export interface Warning {
  code: WarningCode;
  category?: Category;
  basket?: Basket;
  /** 관련 표본 ID */
  ids?: string[];
  /** 표본이 아닌 이름(사용자가 입력한 음식 등) */
  names?: string[];
  /** 개수 같은 숫자 자리표시자 */
  n?: number;
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
  /** estimated: 바스켓 가격 분포로 추정 / selected: 사용자가 고른 관광지 입장료 합계 */
  mode: 'estimated' | 'selected';
  baskets: BasketEstimate[];
  /** 자세히 보기 내역(합계에 반영된 바스켓) */
  lines: DetailLine[];
  /** 이 항목 몫의 예비비(합계 × 예비비율). 전체 합계를 낼 수 있을 때만 */
  contingency: Range | null;
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
  /** 사용자가 고른 공항 이동·렌터카(합계·예비비에 포함) */
  extras: ExtraEstimate[];
  /** 4개 비용군 + 고른 공항 이동·렌터카 합(예비비 전). 하나라도 부족하면 null */
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
