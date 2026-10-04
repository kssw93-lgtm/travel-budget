import { defaultProviders } from '../src/core/rates/providers';
import { getRates } from '../src/core/rates/service';
import { RatesUnavailableError, type RateStore, type StoredRates } from '../src/core/rates/types';

/** Cloudflare Cache API 를 저장소로 쓴다(별도 바인딩 없이 배포 가능). 30일 뒤 만료. */
const CACHE_KEY = 'https://rates.internal/v1/latest-usd';

const cacheStore: RateStore = {
  async get() {
    const hit = await caches.default.match(CACHE_KEY);
    return hit ? ((await hit.json()) as StoredRates) : null;
  },
  async put(record) {
    await caches.default.put(
      CACHE_KEY,
      new Response(JSON.stringify(record), { headers: { 'cache-control': 'max-age=2592000', 'content-type': 'application/json' } }),
    );
  },
};

const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...extra } });

export async function handle(request: Request, store: RateStore = cacheStore): Promise<Response> {
  const { pathname } = new URL(request.url);
  if (pathname !== '/api/rates') return json({ error: 'not_found' }, 404);
  if (request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405, { allow: 'GET' });
  try {
    const payload = await getRates({ providers: defaultProviders, store, now: Date.now, fetchFn: fetch });
    return json(payload, 200, { 'cache-control': 'public, max-age=3600' });
  } catch (e) {
    if (e instanceof RatesUnavailableError) return json({ error: 'rates_unavailable' }, 503, { 'cache-control': 'no-store' });
    throw e;
  }
}

export default {
  fetch: (request: Request) => handle(request),
} satisfies ExportedHandler;
