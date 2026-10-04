import type { RatesPayload } from '../types';
import { RatesUnavailableError, type ProviderResult, type RateProvider, type RateStore } from './types';

/** 정상 환율을 이 시간 동안 그대로 쓴다(하루) */
export const FRESH_MS = 24 * 60 * 60 * 1000;

export interface RatesDeps {
  providers: RateProvider[];
  store: RateStore;
  now: () => number;
  fetchFn: typeof fetch;
}

/** 제공자 응답 검증: 양수 숫자 환율만 남기고, 쓸 만한 개수가 아니면 거부한다(임의 값으로 채우지 않는다). */
export function sanitize(result: ProviderResult): Record<string, number> {
  const clean: Record<string, number> = {};
  for (const [code, rate] of Object.entries(result.rates)) {
    if (/^[A-Z]{3}$/.test(code) && typeof rate === 'number' && Number.isFinite(rate) && rate > 0) clean[code] = rate;
  }
  if (Object.keys(clean).length < 5) throw new Error('too few rates');
  clean.USD = 1;
  return clean;
}

/**
 * 환율 조회 정책
 * 1) 24시간 안의 정상 값이 저장돼 있으면 그대로 반환
 * 2) 아니면 제공자를 순서대로 호출해 성공하면 저장 후 반환
 * 3) 모두 실패하면 저장된 마지막 정상 값을 stale=true 로 반환
 * 4) 저장된 값도 없으면 RatesUnavailableError (환율을 지어내지 않는다)
 */
export async function getRates(deps: RatesDeps): Promise<RatesPayload> {
  const { providers, store, now, fetchFn } = deps;
  const saved = await store.get();
  if (saved && now() - saved.storedAt < FRESH_MS) return { ...saved.payload, stale: false };

  const causes: string[] = [];
  for (const p of providers) {
    try {
      const result = await p.load(fetchFn);
      const payload: RatesPayload = {
        base: 'USD',
        rates: sanitize(result),
        asOf: /^\d{4}-\d{2}-\d{2}$/.test(result.asOf) ? result.asOf : new Date(now()).toISOString().slice(0, 10),
        fetchedAt: new Date(now()).toISOString(),
        source: { id: p.id, name: p.name, url: p.url },
        stale: false,
      };
      await store.put({ payload, storedAt: now() });
      return payload;
    } catch (e) {
      causes.push(`${p.id}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }
  if (saved) return { ...saved.payload, stale: true };
  throw new RatesUnavailableError(causes);
}
