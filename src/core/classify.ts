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
  /** 계산에 쓰는 가격 바스켓(제외 표본은 null) */
  basket: Basket | null;
  /** 교통 무제한권이 덮는 일수(24시간=1, 48시간=2 …). 1일 환산 단가 = 가격 ÷ passDays */
  passDays: number;
  variant?: DayVariant;
  fromPrice: boolean;
}

const VARIABLE_TYPES = ['수요형', '일정/구성형', '일정/대상형'];
export const isVariablePricing = (s: PriceSample): boolean => VARIABLE_TYPES.includes(s.priceType);

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

export function classify(s: PriceSample): Classified {
  const base = {
    sample: s,
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
      const text = `${s.unit} ${s.nameKo} ${s.nameEn}`;
      const days = transportPassDays(s);
      if (days !== null) return out('pass', undefined, days);
      // 차량 단위(택시·전용차)와 왕복·구간 요금은 1인 1회 요금이 아니라 바스켓에 넣지 않는다
      if (KEYWORDS.ride.test(s.unit) && !KEYWORDS.vehicle.test(text)) return out('ride');
      return out(null, 'unsupportedUnit');
    }
    case 'food': {
      if (KEYWORDS.side.test(s.subtype)) return out(null, 'sideDish');
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
