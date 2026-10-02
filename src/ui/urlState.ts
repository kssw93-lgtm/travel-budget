import { STYLES } from '../core/model-config';
import type { TravelStyle } from '../core/types';
import type { Lang } from '../i18n';
import type { FormState } from './form';

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
} as const satisfies Record<keyof FormState, string>;

const CURRENCY = /^[A-Z]{3}$/;
const SHORT = /^[\d.,]{0,15}$/;

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
  for (const k of ['currency', 'directCurrency'] as const) {
    const v = get(k)?.toUpperCase();
    if (v && CURRENCY.test(v)) out[k] = v;
  }
  return out;
}

export function readLang(search: string): Lang | null {
  const v = new URLSearchParams(search).get('lang');
  return v === 'ko' || v === 'en' ? v : null;
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
