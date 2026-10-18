import type { Basket, CostCategory, TravelStyle } from './types';

/**
 * 계산 모델의 "가정" 값. 가격이 아니라 사용 방식에 대한 가정이다.
 * 가격 데이터(JSON)는 건드리지 않고 여기 값만 바꿔도 결과가 바뀐다.
 */
export const MODEL = {
  /** 바스켓(필수 비용 유형)당 최소 표본 수 */
  minSamplesPerCategory: 3,
  /** 충족률 = Σmin(cap, 표본수) / (cap × 자동 추정 비용군 수). 이 값 미만이면 계산 보류 */
  fillRateCap: 3,
  minFillRate: 0.75,
  contingencyRate: 0.1,
  /** 첫날·마지막 날 식비·활동비 비율(도착·출발일도 2끼 이상은 먹는다고 보고 0.6 → 0.8, 2026-10-11) */
  edgeDayFactor: 0.8,
  /**
   * 한 끼 단가 = 대표 메뉴 1개 가격 × 이 배수. 여행 중에는 메뉴 하나만 먹기보다 곁들임·음료·나눠 먹을 메뉴를 더 시키는 일이 많아
   * 스타일별로 추가 주문을 반영한다(가격이 아니라 주문량 가정, 2026-10-11).
   */
  mealItemFactor: { budget: 1.15, standard: 1.5, comfort: 2.0 } as Record<TravelStyle, number>,
  /**
   * 바스켓별 이용 횟수 가정(가격이 아니라 사용 방식).
   * pass·ride·meal·snack·attraction 은 1인 하루 기준.
   */
  usage: {
    pass: { budget: 1, standard: 1, comfort: 1 },
    ride: { budget: 2, standard: 3, comfort: 4 },
    meal: { budget: 3, standard: 3, comfort: 3 },
    snack: { budget: 1, standard: 2, comfort: 3 },
    /** 성인 1인 하루 술 잔(병) 수 — 음주 포함을 고른 경우만 */
    drink: { budget: 1, standard: 2, comfort: 3 },
    /** 관광지는 자동 추정하지 않는다(사용자가 고른 곳 1회씩). 바스켓 구조상 값만 둔다 */
    attraction: { budget: 1, standard: 1, comfort: 1 },
    /** 기념품은 계산하지 않는다(사용자가 쇼핑 예산을 직접 입력). 바스켓 구조상 값만 둔다 */
    souvenir: { budget: 0, standard: 0, comfort: 0 },
  } as Record<Basket, Record<TravelStyle, number>>,
  /**
   * 여행 스타일별로 가격 분포(표본 끝점 정렬)에서 읽는 분위 구간.
   * 최저가 계산기가 아니라 "보통 여행자가 실제로 쓰는 금액"이 목적이라, 일반형은 가격 분포의 중간~위쪽(50~72%)을 읽고
   * 구간을 좁게 둔다(2026-10-11: 일반형 0.25~0.75 → 0.5~0.72).
   */
  styleBand: {
    budget: [0.2, 0.4],
    standard: [0.5, 0.72],
    comfort: [0.75, 0.9],
  } as Record<TravelStyle, [number, number]>,
  /** 방문객이 해당하지 않는 거주자 전용 대상(`대상` 열 값) */
  excludedTargets: ['EEA'],
  /** 숫자 입력 한도 */
  limits: { nightsMin: 1, nightsMax: 30, adultsMin: 1, adultsMax: 20, childrenMax: 20 },
} as const;

export const CATEGORIES: readonly CostCategory[] = ['food', 'transport', 'attraction'];

/**
 * 가격 분포로 자동 추정하는 비용군. 관광지는 갈지 말지 사용자가 정하는 것이라 자동으로 넣지 않고,
 * 사용자가 고른 곳의 입장료만 더한다(고르지 않으면 0). 따라서 도시 판정(최소 표본·충족률)에서도 빠진다.
 */
export const ESTIMATED_CATEGORIES: readonly CostCategory[] = ['food', 'transport'];

export const BASKETS: readonly Basket[] = ['pass', 'ride', 'meal', 'snack', 'drink', 'attraction', 'souvenir'];

/** 첫날·마지막 날 60% 규칙을 적용하는 바스켓(식비·활동비) */
export const EDGE_WEIGHTED: readonly Basket[] = ['meal', 'snack', 'drink', 'attraction'];

/**
 * 비용군이 어떤 바스켓으로 이뤄지는지.
 * sum: 필수 바스켓에 선택 바스켓(표본이 충분할 때만)을 더한다.
 * alternatives: 이용권과 1회권처럼 서로 대안이다. 표본이 충분한 바스켓들의 범위를 합쳐 하나 이상이면 된다.
 */
export const BASKET_RULES: Record<CostCategory, { baskets: readonly Basket[]; mode: 'sum' | 'alternatives'; required: readonly Basket[] }> = {
  food: { baskets: ['meal', 'snack', 'drink'], mode: 'sum', required: ['meal'] },
  transport: { baskets: ['pass', 'ride'], mode: 'alternatives', required: [] },
  attraction: { baskets: ['attraction'], mode: 'sum', required: ['attraction'] },
};
export const STYLES: readonly TravelStyle[] = ['budget', 'standard', 'comfort'];

/**
 * 바스켓별 최소 독립 표본 수(없으면 MODEL.minSamplesPerCategory).
 * 이 계산기는 대략적인 체류비 범위가 목적이라, 시내버스 하나뿐인 소도시처럼 대중교통 요금 체계가 하나인 곳도
 * 공식 1회 요금(또는 1일권) 1건이면 교통비를 계산한다. 식사는 그대로 3건(가게마다 값 차이가 커서).
 */
/**
 * 메뉴 가격에 판매세·팁이 빠지는 도시의 외식 가산(결제 기준으로 맞춤). tax 는 정부 공식 세율,
 * tip 은 테이블 서비스 팁 관행(가격이 아니라 계산 가정 — 식사·술에만, 카페·간식에는 붙이지 않음).
 * drinkTax 가 있으면 술에는 그 세율을 쓴다(예: BC 주류 PST 10% + GST 5%).
 */
export const MENU_SURCHARGE: Record<string, { tax: number; drinkTax?: number; tip: readonly [number, number]; taxSource: string }> = {
  'new-york': { tax: 0.08875, tip: [0.18, 0.2], taxSource: 'New York State Department of Taxation and Finance — New York City 8.875%' },
  honolulu: { tax: 0.045, tip: [0.18, 0.2], taxSource: 'Hawaii Department of Taxation — GET 4% + Oahu county surcharge 0.5%' },
  victoria: { tax: 0.05, drinkTax: 0.15, tip: [0.15, 0.18], taxSource: 'Canada Revenue Agency GST 5%, BC PST 10% on liquor' },
  vancouver: { tax: 0.05, drinkTax: 0.15, tip: [0.15, 0.18], taxSource: 'Canada Revenue Agency GST 5%, BC PST 10% on liquor' },
  'quebec-city': { tax: 0.14975, tip: [0.15, 0.18], taxSource: 'Canada Revenue Agency GST 5% + Revenu Québec QST 9.975%' },
  'washington-dc': { tax: 0.1, tip: [0.18, 0.2], taxSource: 'DC Office of Tax and Revenue — food and beverage for immediate consumption 10%' },
  'new-orleans': { tax: 0.1, tip: [0.18, 0.2], taxSource: 'City of New Orleans — Orleans Parish 5% + Louisiana 5% = 10%' },
  portland: { tax: 0, tip: [0.18, 0.2], taxSource: 'Oregon has no sales tax (Travel Portland)' },
  philadelphia: { tax: 0.08, tip: [0.18, 0.2], taxSource: 'City of Philadelphia — Sales Tax 2% (City) + 6% (Commonwealth) = 8%' },
  'san-diego': { tax: 0.0775, tip: [0.18, 0.2], taxSource: 'CDTFA — San Diego 7.750% (state 7.25% + San Diego County district 0.50%)' },
  montreal: { tax: 0.14975, tip: [0.15, 0.18], taxSource: 'Canada Revenue Agency GST 5% + Revenu Québec QST 9.975%' },
  seattle: { tax: 0.1055, tip: [0.18, 0.2], taxSource: 'Washington DOR — Seattle combined 10.55% (state 6.5% + local 4.05%)' },
  calgary: { tax: 0.05, tip: [0.15, 0.18], taxSource: 'Canada Revenue Agency GST 5% (Alberta has no provincial sales tax)' },
  ottawa: { tax: 0.13, tip: [0.15, 0.18], taxSource: 'Ontario — Harmonized Sales Tax 13%' },
  toronto: { tax: 0.13, tip: [0.15, 0.18], taxSource: 'Ontario — Harmonized Sales Tax 13%' },
  chicago: { tax: 0.1075, tip: [0.18, 0.2], taxSource: 'Chicago 10.25% sales tax (state 6.25% + Cook County 1.75% + city 1.25% + RTA 1%) + City of Chicago restaurant tax 0.5%' },
  nashville: { tax: 0.0975, tip: [0.18, 0.2], taxSource: 'Tennessee DOR — state 7% on prepared food + Davidson County 2.75% (incl. 0.5% transit surcharge, from Feb 2025)' },
  austin: { tax: 0.0825, tip: [0.18, 0.2], taxSource: 'Texas Comptroller — Austin combined 8.25% (state 6.25% + city 1% + Capital Metro 1%)' },
  boston: { tax: 0.07, tip: [0.18, 0.2], taxSource: 'Massachusetts DOR — meals 6.25% + local option 0.75%' },
  // 아래 셋은 숨김(조사 중) 도시. 공개하면 바로 적용된다. 세율은 퍼플렉시티가 세무청 공식 세율표에서 확인(2026-10-14)
  'los-angeles': { tax: 0.1025, tip: [0.18, 0.2], taxSource: 'CDTFA — Los Angeles City 10.250% (effective October 1, 2026)' },
  'san-francisco': { tax: 0.08625, tip: [0.18, 0.2], taxSource: 'CDTFA — San Francisco 8.625% (effective October 1, 2026)' },
  'las-vegas': { tax: 0.08375, tip: [0.18, 0.2], taxSource: 'Nevada Department of Taxation — Clark County 8.375%' },
};

export const MIN_SAMPLES_BY_BASKET: Partial<Record<Basket, number>> = { ride: 1, pass: 1 };

export function minSamples(basket: Basket): number {
  return MIN_SAMPLES_BY_BASKET[basket] ?? MODEL.minSamplesPerCategory;
}

/** 비용군을 계산하는 데 필요한 최소 독립 표본 수(대체 바스켓이면 가장 낮은 기준, 합산이면 필수 바스켓 중 가장 높은 기준) */
export function minSamplesForCategory(category: CostCategory): number {
  const rule = BASKET_RULES[category];
  const pool = rule.mode === 'alternatives' ? rule.baskets : rule.required;
  if (pool.length === 0) return MODEL.minSamplesPerCategory;
  const mins = pool.map(minSamples);
  return rule.mode === 'alternatives' ? Math.min(...mins) : Math.max(...mins);
}

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
