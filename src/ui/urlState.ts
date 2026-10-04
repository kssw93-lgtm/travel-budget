import { STYLES } from '../core/model-config';
import type { TravelStyle } from '../core/types';
import { isLang, type Lang } from '../i18n';
import { PLAN_LIMITS, type FormState, type MustEatInput } from './form';

/**
 * 계산기 입력을 URL 쿼리에 보존한다(새로고침·공유·뒤로가기). 값 검증은 parseForm 이 하므로
 * 여기서는 형식이 명백히 틀린 값(없는 도시·스타일, 통화 코드 형식)만 버린다.
 */
const KEYS = {
  cityId: 'city',
  visitDate: 'date',
  nights: 'nights',
  adults: 'adults',
  children: 'children',
  style: 'style',
  currency: 'cur',
  flight: 'flight',
  lodging: 'lodging',
  directCurrency: 'dcur',
  attractions: 'attr',
  drinks: 'drink',
  airport: 'apt',
  airportTrips: 'aptw',
  rental: 'car',
  rentalDays: 'cardays',
  transportMode: 'tm',
  ridesPerDay: 'rpd',
  transitDays: 'tdays',
  passId: 'pass',
  mealsPerDay: 'meals',
  mustEat: 'eat',
} as const satisfies Record<keyof FormState, string>;

const CURRENCY = /^[A-Z]{3}$/;
const SHORT = /^[\d.,]{0,15}$/;
const EXTRA_ID = /^[A-Z0-9][A-Z0-9-]{2,23}$/;

export function readForm(search: string, cityIds: string[]): Partial<FormState> {
  const q = new URLSearchParams(search);
  const out: Partial<FormState> = {};
  const get = (k: keyof FormState) => q.get(KEYS[k]);
  const city = get('cityId');
  if (city && cityIds.includes(city)) out.cityId = city;
  const date = get('visitDate');
  if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) out.visitDate = date;
  for (const k of ['nights', 'adults', 'children', 'flight', 'lodging'] as const) {
    const v = get(k);
    if (v !== null && SHORT.test(v)) out[k] = v;
  }
  const style = get('style');
  if (style && (STYLES as readonly string[]).includes(style)) out.style = style as TravelStyle;
  const attr = get('attractions');
  if (attr) {
    const ids = attr.split(',').filter((id) => /^[A-Z]{3}-[A-Z]{2}-\d{3}$/.test(id)).slice(0, 30);
    if (ids.length) out.attractions = ids;
  }
  if (get('drinks') === '1') out.drinks = true;
  for (const k of ['airport', 'rental'] as const) {
    const v = get(k);
    if (v && EXTRA_ID.test(v)) out[k] = v;
  }
  if (out.airport && get('airportTrips') === '1') out.airportTrips = '1';
  const days = get('rentalDays');
  if (out.rental && days && /^\d{1,2}$/.test(days)) out.rentalDays = days;
  for (const k of ['currency', 'directCurrency'] as const) {
    const v = get(k)?.toUpperCase();
    if (v && CURRENCY.test(v)) out[k] = v;
  }
  const tm = get('transportMode');
  if (tm === 'none' || tm === 'rides' || tm === 'pass') out.transportMode = tm;
  for (const k of ['ridesPerDay', 'transitDays', 'mealsPerDay'] as const) {
    const v = get(k);
    if (v && /^\d{1,2}$/.test(v)) out[k] = v;
  }
  const pass = get('passId');
  if (pass && EXTRA_ID.test(pass)) out.passId = pass;
  const eat = get('mustEat');
  if (eat) out.mustEat = decodeMustEat(eat);
  return out;
}

/** 꼭 먹을 음식은 "이름~가격~표본ID" 를 | 로 이어 담는다(이름의 ~·| 는 지운다) */
const clean = (v: string) => v.replace(/[~|]/g, ' ').slice(0, PLAN_LIMITS.nameMax);
function encodeMustEat(list: MustEatInput[]): string {
  return list.map((m) => [clean(m.name), m.price.trim(), m.sampleId ?? ''].join('~').replace(/~$/, '')).join('|');
}
function decodeMustEat(v: string): MustEatInput[] {
  return v
    .split('|')
    .slice(0, PLAN_LIMITS.mustEatMax)
    .map((part) => {
      const [name = '', price = '', sampleId = ''] = part.split('~');
      return { name: clean(name), price: SHORT.test(price) ? price : '', ...(/^[A-Z]{3}-[A-Z]{2}-\d{3}$/.test(sampleId) ? { sampleId } : {}) };
    })
    .filter((m) => m.name.trim());
}

export function readLang(search: string): Lang | null {
  const v = new URLSearchParams(search).get('lang');
  return isLang(v) ? v : null;
}

/** 계산기 상태 + 언어를 쿼리 문자열로. 빈 선택 입력은 생략한다. */
export function formToSearch(form: FormState, lang: Lang): string {
  const q = new URLSearchParams();
  q.set('lang', lang);
  (Object.keys(KEYS) as (keyof FormState)[]).forEach((k) => {
    if (k === 'attractions') {
      if (form.attractions.length) q.set(KEYS.attractions, form.attractions.join(','));
      return;
    }
    if (k === 'drinks') {
      if (form.drinks) q.set(KEYS.drinks, '1');
      return;
    }
    // 공항 이동 횟수·렌터카 일수는 상품을 골랐을 때만, 기본값(왕복·숙박 수)이 아닐 때만 남긴다
    if (k === 'airportTrips') {
      if (form.airport && form.airportTrips === '1') q.set(KEYS.airportTrips, '1');
      return;
    }
    if (k === 'rentalDays' && !form.rental) return;
    // 자세히 설정은 기본값(스타일 기준)이 아닐 때만 남긴다
    if (k === 'transportMode') {
      if (form.transportMode !== 'auto') q.set(KEYS.transportMode, form.transportMode);
      return;
    }
    if (k === 'ridesPerDay' && form.transportMode !== 'rides') return;
    if (k === 'transitDays' && form.transportMode !== 'rides' && form.transportMode !== 'pass') return;
    if (k === 'passId' && form.transportMode !== 'pass') return;
    if (k === 'mustEat') {
      if (form.mustEat.length) q.set(KEYS.mustEat, encodeMustEat(form.mustEat));
      return;
    }
    const v = form[k];
    if (v === '' || ((k === 'flight' || k === 'lodging' || k === 'directCurrency') && !form.flight && !form.lodging)) return;
    q.set(KEYS[k], v);
  });
  return `?${q.toString()}`;
}

export function withLang(search: string, lang: Lang): string {
  const q = new URLSearchParams(search);
  q.set('lang', lang);
  return `?${q.toString()}`;
}

/** 다른 페이지(소개·개인정보)에 다녀와도 계산기 입력이 유지되도록 마지막 계산기 쿼리를 기억한다. */
export const calcMemory = { search: '' };
