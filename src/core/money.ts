import type { RatesPayload } from './types';

/** 통화 a의 금액을 b로 환산. 환율이 없는 통화가 있으면 null(임의 환율을 쓰지 않는다). */
export function convert(amount: number, from: string, to: string, rates: RatesPayload | null): number | null {
  if (from === to) return amount;
  if (!rates) return null;
  const rf = rates.rates[from];
  const rt = rates.rates[to];
  if (!rf || !rt) return null;
  return (amount / rf) * rt;
}

export function isSupported(currency: string, rates: RatesPayload | null): boolean {
  return Boolean(rates && rates.rates[currency]);
}

export function formatMoney(amount: number, currency: string, locale: string): string {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  } catch {
    return `${Math.round(amount).toLocaleString(locale)} ${currency}`;
  }
}
