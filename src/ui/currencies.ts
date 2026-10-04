import type { RatesPayload } from '../core/types';

/** 환율 응답과 무관하게 항상 목록에 올리는 주요 통화(지원 여부는 환율 응답으로 안내) */
export const COMMON_CURRENCIES = [
  'KRW', 'USD', 'JPY', 'EUR', 'GBP', 'CNY', 'HKD', 'TWD', 'SGD', 'THB', 'VND', 'AUD', 'CAD', 'NZD', 'CHF',
  'MYR', 'IDR', 'PHP', 'INR', 'TRY', 'AED', 'SAR', 'BRL', 'MXN', 'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'ZAR',
];

export function currencyOptions(rates: RatesPayload | null, extra: string[]): string[] {
  const all = new Set<string>([...COMMON_CURRENCIES, ...extra, ...(rates ? Object.keys(rates.rates) : [])]);
  const rest = [...all].filter((c) => !COMMON_CURRENCIES.includes(c)).sort();
  return [...COMMON_CURRENCIES.filter((c) => all.has(c)), ...rest];
}

export function currencyLabel(code: string, locale: string): string {
  try {
    const name = new Intl.DisplayNames([locale], { type: 'currency' }).of(code);
    return name && name !== code ? `${code} — ${name}` : code;
  } catch {
    return code;
  }
}
