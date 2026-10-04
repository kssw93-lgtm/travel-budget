import { isIsoDate } from '../core/dates';
import { MODEL } from '../core/model-config';
import type { MustEat, TransportPlan, TravelStyle, TripInput } from '../core/types';

export type TransportMode = 'auto' | 'none' | 'rides' | 'pass';
/** 꼭 먹을 음식 입력 한 줄(가격은 입력 문자열 그대로) */
export interface MustEatInput {
  name: string;
  price: string;
  /** 조사된 메뉴 가격에서 자동으로 채운 경우 그 표본 ID */
  sampleId?: string;
}

export interface FormState {
  cityId: string;
  visitDate: string;
  nights: string;
  adults: string;
  children: string;
  style: TravelStyle;
  currency: string;
  flight: string;
  lodging: string;
  directCurrency: string;
  /** 사용자가 고른 관광지 입장권 표본 ID */
  attractions: string[];
  /** 음주 비용 포함(성인) */
  drinks: boolean;
  /** 고른 공항↔시내 이동 상품 ID(없으면 '') 와 횟수('1' 편도, '2' 왕복) */
  airport: string;
  airportTrips: '1' | '2';
  /** 고른 렌터카 상품 ID(없으면 '') 와 대여 일수(비우면 숙박 수) */
  rental: string;
  rentalDays: string;
  /** 자세히 설정: 교통 이용 방식, 하루 이용 횟수, 교통 이용 일수(비우면 전체), 고른 이용권 */
  transportMode: TransportMode;
  ridesPerDay: string;
  transitDays: string;
  passId: string;
  /** 자세히 설정: 하루 끼니 수(비우면 기본) */
  mealsPerDay: string;
  /** 자세히 설정: 꼭 먹을 음식 */
  mustEat: MustEatInput[];
  /** 자세히 설정(음주): 성인 1인 하루 잔 수(비우면 스타일 기본)와 마실 술 */
  drinksPerDay: string;
  drinkPicks: MustEatInput[];
}

export type FieldError = 'date' | 'nights' | 'adults' | 'children' | 'flight' | 'lodging' | 'rentalDays' | 'ridesPerDay' | 'transitDays' | 'mustEat' | 'drinkPicks';

/** 자세히 설정의 입력 한도 */
export const PLAN_LIMITS = { ridesMax: 20, mustEatMax: 10, nameMax: 40 } as const;

export interface ParsedForm {
  trip: TripInput | null;
  /** 직접 입력한 항공권·숙박 합계(입력 통화). 비워두면 0 */
  direct: { flight: number; lodging: number };
  errors: Partial<Record<FieldError, true>>;
}

const toInt = (v: string): number => (/^\d+$/.test(v.trim()) ? Number(v.trim()) : Number.NaN);

function toAmount(v: string): number {
  const s = v.trim().replace(/,/g, '');
  if (s === '') return 0;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : Number.NaN;
}

export function parseForm(f: FormState): ParsedForm {
  const L = MODEL.limits;
  const errors: ParsedForm['errors'] = {};
  const nights = toInt(f.nights);
  const adults = toInt(f.adults);
  const children = toInt(f.children);
  const flight = toAmount(f.flight);
  const lodging = toAmount(f.lodging);

  if (!isIsoDate(f.visitDate)) errors.date = true;
  if (!(nights >= L.nightsMin && nights <= L.nightsMax)) errors.nights = true;
  if (!(adults >= L.adultsMin && adults <= L.adultsMax)) errors.adults = true;
  if (!(children >= 0 && children <= L.childrenMax)) errors.children = true;
  if (Number.isNaN(flight)) errors.flight = true;
  if (Number.isNaN(lodging)) errors.lodging = true;
  const rentalDays = f.rentalDays.trim() === '' ? nights : toInt(f.rentalDays);
  if (f.rental && !(rentalDays >= 1 && rentalDays <= L.nightsMax + 1)) errors.rentalDays = true;

  // 자세히 설정: 교통 이용 방식
  const days = nights + 1;
  const transitDays = f.transitDays.trim() === '' ? days : toInt(f.transitDays);
  if (f.transportMode === 'rides' || f.transportMode === 'pass') {
    if (!(transitDays >= 0 && transitDays <= L.nightsMax + 1)) errors.transitDays = true;
  }
  const rides = toInt(f.ridesPerDay);
  if (f.transportMode === 'rides' && !(rides >= 0 && rides <= PLAN_LIMITS.ridesMax)) errors.ridesPerDay = true;
  let transport: TransportPlan | undefined;
  const useDays = Number.isNaN(days) ? 0 : Math.min(days, transitDays);
  if (f.transportMode === 'none') transport = { mode: 'none' };
  else if (f.transportMode === 'rides' && !errors.ridesPerDay && !errors.transitDays) transport = { mode: 'rides', perDay: rides, days: useDays };
  else if (f.transportMode === 'pass' && f.passId && !errors.transitDays) transport = { mode: 'pass', passId: f.passId, days: useDays };
  // 꼭 먹을 음식: 이름과 가격이 모두 있어야 계산에 넣는다. 가격이 비었거나 틀리면 오류로 알린다
  const mustEat: MustEat[] = [];
  for (const m of f.mustEat) {
    const price = m.price.trim() === '' ? Number.NaN : toAmount(m.price);
    if (!m.name.trim() || Number.isNaN(price)) {
      errors.mustEat = true;
      continue;
    }
    mustEat.push({ name: m.name.trim(), price, ...(m.sampleId ? { sampleId: m.sampleId } : {}) });
  }
  const meals = toInt(f.mealsPerDay);
  const drinkPicks: MustEat[] = [];
  for (const d of f.drinkPicks) {
    const price = d.price.trim() === '' ? Number.NaN : toAmount(d.price);
    if (!d.name.trim() || Number.isNaN(price)) {
      errors.drinkPicks = true;
      continue;
    }
    drinkPicks.push({ name: d.name.trim(), price, ...(d.sampleId ? { sampleId: d.sampleId } : {}) });
  }
  const drinksPerDay = toInt(f.drinksPerDay);

  const tripValid = !errors.date && !errors.nights && !errors.adults && !errors.children;
  return {
    trip: tripValid ? { cityId: f.cityId, visitDate: f.visitDate, nights, adults, children, style: f.style, attractionIds: f.attractions, drinks: f.drinks,
          ...(f.airport ? { airportId: f.airport, airportTrips: f.airportTrips === '1' ? 1 : 2 } : {}),
          ...(f.rental && !errors.rentalDays ? { rentalId: f.rental, rentalDays } : {}),
          ...(transport ? { transport } : {}),
          ...(meals >= 1 && meals <= 4 ? { mealsPerDay: meals } : {}),
          ...(mustEat.length ? { mustEat } : {}),
          ...(f.drinks && drinksPerDay >= 0 && drinksPerDay <= 10 ? { drinksPerDay } : {}),
          ...(f.drinks && drinkPicks.length ? { drinkPicks } : {}) } : null,
    direct: { flight: errors.flight ? 0 : flight, lodging: errors.lodging ? 0 : lodging },
    errors,
  };
}
