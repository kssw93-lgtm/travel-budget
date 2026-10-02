import { describe, expect, it, vi } from 'vitest';
import { FRESH_MS, getRates, sanitize } from '../../worker/rates/service';
import { openErApi } from '../../worker/rates/providers';
import { RatesUnavailableError, type RateProvider, type RateStore, type StoredRates } from '../../worker/rates/types';
import { handle } from '../../worker/index';

const good = { USD: 1, KRW: 1400, JPY: 150, EUR: 0.9, GBP: 0.8, VND: 25000 };
const provider = (id: string, impl: () => Promise<{ rates: Record<string, number>; asOf: string }>): RateProvider => ({
  id, name: id, url: `https://${id}.example`, load: impl,
});
const memoryStore = (initial: StoredRates | null = null): RateStore & { value: StoredRates | null } => {
  const s = {
    value: initial,
    get: async () => s.value,
    put: async (r: StoredRates) => { s.value = r; },
  };
  return s;
};
const T0 = Date.parse('2026-10-02T00:00:00Z');
const fetchFn = vi.fn() as unknown as typeof fetch;

describe('환율 서비스', () => {
  it('제공자 성공 시 저장하고 출처·기준일을 붙여 돌려준다', async () => {
    const store = memoryStore();
    const r = await getRates({ providers: [provider('a', async () => ({ rates: good, asOf: '2026-10-01' }))], store, now: () => T0, fetchFn });
    expect(r.rates.KRW).toBe(1400);
    expect(r.asOf).toBe('2026-10-01');
    expect(r.source.id).toBe('a');
    expect(r.stale).toBe(false);
    expect(store.value?.storedAt).toBe(T0);
  });

  it('24시간 안에는 제공자를 다시 호출하지 않는다(캐시)', async () => {
    const load = vi.fn(async () => ({ rates: good, asOf: '2026-10-01' }));
    const store = memoryStore();
    const deps = { providers: [provider('a', load)], store, fetchFn };
    await getRates({ ...deps, now: () => T0 });
    await getRates({ ...deps, now: () => T0 + FRESH_MS - 1 });
    expect(load).toHaveBeenCalledTimes(1);
    await getRates({ ...deps, now: () => T0 + FRESH_MS + 1 });
    expect(load).toHaveBeenCalledTimes(2);
  });

  it('1순위가 실패하면 2순위 제공자로 넘어간다', async () => {
    const r = await getRates({
      providers: [provider('a', async () => { throw new Error('down'); }), provider('b', async () => ({ rates: good, asOf: '2026-10-02' }))],
      store: memoryStore(), now: () => T0, fetchFn,
    });
    expect(r.source.id).toBe('b');
  });

  it('모두 실패하고 저장된 값이 있으면 오래된 값(stale)으로 돌려준다', async () => {
    const store = memoryStore();
    await getRates({ providers: [provider('a', async () => ({ rates: good, asOf: '2026-10-01' }))], store, now: () => T0, fetchFn });
    const r = await getRates({ providers: [provider('a', async () => { throw new Error('down'); })], store, now: () => T0 + 3 * FRESH_MS, fetchFn });
    expect(r.stale).toBe(true);
    expect(r.asOf).toBe('2026-10-01');
    expect(r.rates.KRW).toBe(1400);
  });

  it('모두 실패하고 저장된 값도 없으면 임의 환율 없이 오류', async () => {
    await expect(
      getRates({ providers: [provider('a', async () => { throw new Error('down'); })], store: memoryStore(), now: () => T0, fetchFn }),
    ).rejects.toBeInstanceOf(RatesUnavailableError);
  });

  it('이상한 응답(환율 너무 적음·0·문자열)은 거부하고 유효한 값만 남긴다', async () => {
    expect(() => sanitize({ rates: { KRW: 1400 }, asOf: '' })).toThrow();
    const clean = sanitize({ rates: { ...good, BAD: 0, NEG: -1, str: 5, XXX: Number.NaN } as Record<string, number>, asOf: '' });
    expect(Object.keys(clean).sort()).toEqual(['EUR', 'GBP', 'JPY', 'KRW', 'USD', 'VND']);
  });
});

describe('제공자 응답 해석', () => {
  it('open.er-api.com 응답에서 환율과 기준일을 읽는다', async () => {
    const f = vi.fn(async () => new Response(JSON.stringify({ result: 'success', time_last_update_unix: 1790899201, rates: good })));
    const r = await openErApi.load(f as unknown as typeof fetch);
    expect(r.rates.VND).toBe(25000);
    expect(r.asOf).toBe('2026-10-02');
  });
  it('HTTP 오류는 예외', async () => {
    const f = vi.fn(async () => new Response('x', { status: 500 }));
    await expect(openErApi.load(f as unknown as typeof fetch)).rejects.toThrow('HTTP 500');
  });
});

describe('/api/rates 핸들러', () => {
  it('저장된 값이 있으면 200 JSON', async () => {
    const store = memoryStore({ storedAt: Date.now(), payload: { base: 'USD', rates: good, asOf: '2026-10-01', fetchedAt: 'x', source: { id: 'a', name: 'A', url: 'https://a' }, stale: false } });
    const res = await handle(new Request('https://x.test/api/rates'), store);
    expect(res.status).toBe(200);
    expect(((await res.json()) as { rates: Record<string, number> }).rates.KRW).toBe(1400);
  });
  it('POST 는 405, 다른 경로는 404', async () => {
    expect((await handle(new Request('https://x.test/api/rates', { method: 'POST' }), memoryStore())).status).toBe(405);
    expect((await handle(new Request('https://x.test/api/nope'), memoryStore())).status).toBe(404);
  });
  it('환율을 구할 수 없으면 503', async () => {
    const orig = globalThis.fetch;
    globalThis.fetch = (async () => new Response('x', { status: 500 })) as typeof fetch;
    try {
      const res = await handle(new Request('https://x.test/api/rates'), memoryStore());
      expect(res.status).toBe(503);
    } finally {
      globalThis.fetch = orig;
    }
  });
});
