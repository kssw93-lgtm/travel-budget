import { convert, formatMoney } from '../core/money';
import type { Range, RatesPayload } from '../core/types';
import { useI18n } from '../i18n';

export function convertRange(r: Range, from: string, to: string, rates: RatesPayload | null): Range | null {
  const min = convert(r.min, from, to, rates);
  const max = convert(r.max, from, to, rates);
  return min === null || max === null ? null : { min, max };
}

/** 통화 소수 자릿수에 맞춰 반올림한 뒤 같은 값이면 하나만, 아니면 "최소 ~ 최대"로 표시 */
export function RangeText({ range, currency }: { range: Range | null; currency: string }) {
  const { t, locale } = useI18n();
  if (!range) return <span className="muted">{t.rates.none}</span>;
  const a = formatMoney(range.min, currency, locale);
  const b = formatMoney(range.max, currency, locale);
  return <span className="amount">{a === b ? a : `${a} ~ ${b}`}</span>;
}
