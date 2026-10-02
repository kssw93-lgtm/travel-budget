import { KEYWORDS, MODEL } from './model-config';
import type { Basket, PriceSample } from './types';

export type ExcludeReason =
  | 'modelNo'
  | 'gradeD'
  | 'onHold'
  | 'restrictedTarget'
  | 'boundOnly'
  | 'unsupportedUnit'
  | 'sideDish'
  | 'unclassified';

export type Audience = 'adult' | 'child';
export type DayVariant = 'weekday' | 'weekend';

export interface Classified {
  sample: PriceSample;
  /** 계산에 쓸 수 있으면 true. 아니면 excludeReason 에 사유가 있다. */
  usable: boolean;
  excludeReason?: ExcludeReason;
  audience: Audience;
  /**
   * 독립 표본 판정 키. 같은 출처의 같은 상품이 용량·기간·요일만 다른 경우(24/48/72시간권, 4개입/8개입,
   * 평일/주말 요금)는 같은 키가 되어 최소 표본 수를 셀 때 1건으로 센다.
   */
  productKey: string;
  /** 1회권 합계의 하루 상한 요금 표본(TfL daily cap 등) */
  dailyCap: boolean;
  /** 1회권이지만 대중교통 하루 상한과 다른 요금 체계(공유자전거 등)라 상한을 적용하지 않음 */
  capExempt: boolean;
  /** 표시 가격에 세금·서비스료가 빠져 있음 */
  taxExcluded: boolean;
  /** 교통 표본이지만 관광 체험형 탑승이라 입장권 바스켓으로 옮김 */
  sightseeingRide: boolean;
  /** 계산에 쓰는 가격 바스켓(제외 표본은 null) */
  basket: Basket | null;
  /** 교통 무제한권이 덮는 일수(24시간=1, 48시간=2 …). 1일 환산 단가 = 가격 ÷ passDays */
  passDays: number;
  variant?: DayVariant;
  fromPrice: boolean;
}

const VARIABLE_TYPES = ['수요형', '일정/구성형', '일정/대상형'];
/**
 * 방문일·수요·구성에 따라 값이 달라지는데 날짜별 금액을 정확히 고를 수 없는 가격.
 * '요일형'처럼 평일/주말 변형이 따로 있는 표본은 날짜로 해결되지만, '요일/기간형'처럼 한 행에
 * 범위만 있는 표본(예: 개선문 4~9월 €22·수요일 €16, 10~3월 €16)은 범위를 그대로 쓰고 경고한다.
 */
export const isVariablePricing = (s: PriceSample, variant?: DayVariant): boolean =>
  VARIABLE_TYPES.includes(s.priceType) || (s.priceType.includes('요일') && !variant);

function audienceOf(s: PriceSample): Audience {
  const text = `${s.target} ${s.unit} ${s.subtype} ${s.nameKo} ${s.nameEn}`;
  return KEYWORDS.child.test(text) ? 'child' : 'adult';
}

function variantOf(s: PriceSample): DayVariant | undefined {
  if (!s.priceType.includes('요일')) return undefined;
  const text = `${s.nameKo} ${s.nameEn}`;
  if (KEYWORDS.weekend.test(text)) return 'weekend';
  if (KEYWORDS.weekday.test(text)) return 'weekday';
  return undefined;
}

/** 교통 표본이 "하루(또는 N시간) 이용권" 기준이면 일수, 아니면 null(1회권·차량 단위·왕복 등) */
export function transportPassDays(s: PriceSample): number | null {
  const text = `${s.unit} ${s.nameKo} ${s.nameEn}`;
  const hours = KEYWORDS.hours.exec(text);
  if (hours?.[1]) return Math.max(1, Math.ceil(Number(hours[1]) / 24));
  if (KEYWORDS.dailyPass.test(text)) return 1;
  return null;
}

/** 숫자·용량·기간·요일 표기를 뺀 상품명(대소문자·기호 무시) */
export function productName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\d+(?:[.,]\d+)?/g, ' ')
    .replace(new RegExp(`(?:${VARIANT_TOKENS.join('|')})`, 'g'), ' ')
    .replace(/[^\p{L}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const VARIANT_TOKENS = [
  '\\bpcs?\\b', '\\bpieces?\\b', '\\bhours?\\b', '\\bdays?\\b', '\\bone\\b', '\\bweekdays?\\b', '\\bweekends?\\b',
  '\\bholidays?\\b', '시간', '일권', '개입', '개', '평일', '주말', '공휴일',
];

function normalizeSource(s: PriceSample): string {
  const raw = (s.sourceUrl || s.sourceName).toLowerCase().trim();
  return raw.replace(/^https?:\/\/(www\.)?/, '').replace(/[?#].*$/, '').replace(/\/+$/, '');
}

export function productKey(s: PriceSample): string {
  return `${normalizeSource(s)}|${productName(s.nameEn || s.nameKo)}`;
}

/**
 * 관광지는 같은 출처의 같은 명소라면 관람 옵션(계단/엘리베이터/정상, 입장권/엘리베이터 추가)이 달라도
 * 같은 상품으로 본다. 명소 이름은 상품명의 앞 두 단어로 판단한다(예: "eiffel tower ...").
 */
export function venueKey(s: PriceSample): string {
  const words = productName(s.nameEn || s.nameKo).split(' ').filter(Boolean);
  return `${normalizeSource(s)}|${words.slice(0, 2).join(' ')}`;
}

export function classify(s: PriceSample): Classified {
  const sightseeingRide = s.category === 'transport' && KEYWORDS.sightseeingRide.test(`${s.subtype} ${s.nameKo} ${s.nameEn}`);
  const asAttraction = s.category === 'attraction' || sightseeingRide;
  const base = {
    sample: s,
    productKey: asAttraction ? venueKey(s) : productKey(s),
    dailyCap: s.category === 'transport' && KEYWORDS.dailyCap.test(`${s.subtype} ${s.nameEn}`),
    capExempt: s.category === 'transport' && KEYWORDS.capExempt.test(`${s.subtype} ${s.nameKo} ${s.nameEn}`),
    taxExcluded: KEYWORDS.taxExcluded.test(`${s.note} ${s.unit}`),
    sightseeingRide,
    audience: audienceOf(s),
    passDays: 1,
    variant: variantOf(s),
    fromPrice: KEYWORDS.fromPrice.test(`${s.unit} ${s.nameEn}`),
  };
  const out = (basket: Basket | null, excludeReason?: ExcludeReason, passDays = 1): Classified => ({
    ...base,
    passDays,
    basket: excludeReason ? null : basket,
    usable: excludeReason === undefined,
    ...(excludeReason ? { excludeReason } : {}),
  });

  if (s.modelUse === 'no') return out(null, 'modelNo');
  if (s.grade === 'D') return out(null, 'gradeD');
  if (s.status.includes('보류')) return out(null, 'onHold');
  if ((MODEL.excludedTargets as readonly string[]).includes(s.target)) return out(null, 'restrictedTarget');
  // 최소 0·최대>0 은 "○○ 미만" 같은 상한 문구라 실제 관측 가격이 아니다(0·0 은 무료 입장)
  if (s.min === 0 && s.max > 0) return out(null, 'boundOnly');

  switch (s.category) {
    case 'transport': {
      if (sightseeingRide) return out('attraction');
      const text = `${s.unit} ${s.nameKo} ${s.nameEn}`;
      const days = transportPassDays(s);
      if (days !== null) return out('pass', undefined, days);
      // 차량 단위(택시·전용차)와 왕복·구간 요금은 1인 1회 요금이 아니라 바스켓에 넣지 않는다
      if (KEYWORDS.ride.test(s.unit) && !KEYWORDS.vehicle.test(text)) return out('ride');
      return out(null, 'unsupportedUnit');
    }
    case 'food': {
      if (KEYWORDS.side.test(s.subtype)) return out(null, 'sideDish');
      if (KEYWORDS.drink.test(s.subtype)) return out('drink');
      if (KEYWORDS.snack.test(s.subtype)) return out('snack');
      if (KEYWORDS.meal.test(s.subtype)) return out('meal');
      return out(null, 'unclassified');
    }
    case 'attraction':
      return out('attraction');
    case 'souvenir':
      return out('souvenir');
  }
}
