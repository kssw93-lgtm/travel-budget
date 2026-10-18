import { dataDate } from '../data/catalog';
import { DEFAULT_CURRENCY, type Lang } from '../i18n';

/** 가격 기준일은 공개 표본의 최근 실제 확인일로 통일한다. */
export const guideRefDate = dataDate;

export function displayCurrency(lang: Lang): string {
  try {
    return localStorage.getItem('currency') ?? DEFAULT_CURRENCY[lang];
  } catch {
    return DEFAULT_CURRENCY[lang];
  }
}
