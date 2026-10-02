import type { ProviderResult, RateProvider } from './types';

const TIMEOUT_MS = 6000;

async function getJson(fetchFn: typeof fetch, url: string): Promise<unknown> {
  const res = await fetchFn(url, { signal: AbortSignal.timeout(TIMEOUT_MS), headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

const isoDay = (d: Date) => d.toISOString().slice(0, 10);

/** ExchangeRate-API 오픈 엔드포인트: 키 없이 무료, 하루 1회 갱신, 160여 개 통화(VND·TWD 포함) */
export const openErApi: RateProvider = {
  id: 'open-er-api',
  name: 'ExchangeRate-API (open access)',
  url: 'https://www.exchangerate-api.com',
  async load(fetchFn): Promise<ProviderResult> {
    const body = (await getJson(fetchFn, 'https://open.er-api.com/v6/latest/USD')) as {
      result?: string;
      rates?: Record<string, number>;
      time_last_update_unix?: number;
    };
    if (body.result !== 'success' || !body.rates) throw new Error('unexpected response');
    const asOf = body.time_last_update_unix ? isoDay(new Date(body.time_last_update_unix * 1000)) : '';
    return { rates: body.rates, asOf };
  },
};

/** Frankfurter: 유럽중앙은행 참조환율 기반 무료 API. 지원 통화가 적어 보조(2순위)로 둔다. */
export const frankfurter: RateProvider = {
  id: 'frankfurter',
  name: 'Frankfurter (European Central Bank)',
  url: 'https://frankfurter.dev',
  async load(fetchFn): Promise<ProviderResult> {
    const body = (await getJson(fetchFn, 'https://api.frankfurter.dev/v1/latest?base=USD')) as {
      rates?: Record<string, number>;
      date?: string;
    };
    if (!body.rates) throw new Error('unexpected response');
    return { rates: { USD: 1, ...body.rates }, asOf: body.date ?? '' };
  },
};

/** 앞에서부터 시도한다. 제공자를 바꾸려면 이 배열만 수정한다. */
export const defaultProviders: RateProvider[] = [openErApi, frankfurter];
