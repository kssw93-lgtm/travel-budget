import table from '../../../data/rates/rates-2026-10-02.json';
import type { RatesPayload } from '../types';

/**
 * 조사해서 고정한 환율표(외부 API 를 부르지 않는다). 원자료와 출처는 data/rates/ 에 있다.
 * ECB 기준환율(1 EUR 당)을 1 USD 기준으로 나누고, ECB 에 없는 통화는 1 USD 당 값을 그대로 쓴다.
 */
export function staticRates(): RatesPayload {
  const usdPerEur = table.ecb.perEUR.USD;
  const rates: Record<string, number> = { USD: 1, EUR: 1 / usdPerEur };
  for (const [code, perEur] of Object.entries(table.ecb.perEUR)) if (code !== 'USD') rates[code] = perEur / usdPerEur;
  for (const [code, v] of Object.entries(table.perUSD)) rates[code] = v.rate;
  return {
    base: 'USD',
    rates,
    asOf: table.asOf,
    fetchedAt: `${table.researchedAt}T00:00:00Z`,
    source: { id: 'research', name: 'ECB reference rates & official sources', url: table.ecb.url },
    stale: false,
  };
}

export const STATIC_RATES: RatesPayload = staticRates();
