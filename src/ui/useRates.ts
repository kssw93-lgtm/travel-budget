import { useEffect, useState } from 'react';
import { defaultProviders } from '../core/rates/providers';
import { getRates } from '../core/rates/service';
import type { RateStore, StoredRates } from '../core/rates/types';
import type { RatesPayload } from '../core/types';
import { isPreview } from './router';

export type RatesState = { status: 'loading' } | { status: 'ok'; data: RatesPayload } | { status: 'error'; preview?: true };

const STORE_KEY = 'rates-v1';

/** 브라우저 저장소에 마지막 정상 환율을 둔다(이 기기 전용 캐시). 저장소를 못 쓰면 매번 새로 받는다 */
const browserStore: RateStore = {
  async get() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? (JSON.parse(raw) as StoredRates) : null;
    } catch {
      return null;
    }
  },
  async put(record) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(record));
    } catch {
      /* 저장소를 못 쓰는 환경 */
    }
  },
};

async function fromServer(signal: AbortSignal): Promise<RatesPayload> {
  const res = await fetch('/api/rates', { signal });
  if (!res.ok) throw new Error(String(res.status));
  const data = (await res.json()) as RatesPayload;
  if (!data || typeof data.rates !== 'object') throw new Error('bad payload');
  return data;
}

/** 서버(/api/rates)를 거치지 않고 브라우저에서 공개 환율 API 를 직접 부른다. 서버와 같은 제공자 순서·검증 규칙을 쓴다 */
const fromBrowser = () => getRates({ providers: defaultProviders, store: browserStore, now: () => Date.now(), fetchFn: fetch.bind(globalThis) });

/**
 * 환율을 한 번 읽는다.
 * 1) 서버가 캐시해 둔 환율(/api/rates) — 미리보기처럼 서버가 없는 빌드는 건너뛴다
 * 2) 실패하면 브라우저에서 공개 환율 API 를 직접 호출(앞에서부터 ExchangeRate-API → Frankfurter → jsDelivr)
 * 3) 모두 실패하면 임의 값 없이 error 상태가 된다(현지 통화만 표시)
 */
let shared: Promise<RatesPayload> | null = null;
/** 한 화면의 여러 곳이 동시에 불러도 요청은 한 번만 보낸다(실패하면 다음 호출 때 다시 시도) */
function loadRates(): Promise<RatesPayload> {
  shared ??= (isPreview ? fromBrowser() : fromServer(AbortSignal.timeout(8000)).catch(() => fromBrowser())).catch((e: unknown) => {
    shared = null;
    throw e;
  });
  return shared;
}

export function useRates(): RatesState {
  const [state, setState] = useState<RatesState>({ status: 'loading' });
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await loadRates();
        if (alive) setState({ status: 'ok', data });
      } catch {
        if (alive) setState(isPreview ? { status: 'error', preview: true } : { status: 'error' });
      }
    })();
    return () => {
      alive = false;
    };
  }, []);
  return state;
}
