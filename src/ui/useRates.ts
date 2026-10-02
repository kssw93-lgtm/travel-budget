import { useEffect, useState } from 'react';
import type { RatesPayload } from '../core/types';

export type RatesState = { status: 'loading' } | { status: 'ok'; data: RatesPayload } | { status: 'error' };

/** 서버가 캐시해 둔 환율을 한 번 읽는다. 실패하면 임의 값 없이 error 상태가 된다. */
export function useRates(): RatesState {
  const [state, setState] = useState<RatesState>({ status: 'loading' });
  useEffect(() => {
    const ctrl = new AbortController();
    fetch('/api/rates', { signal: ctrl.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as RatesPayload;
        if (!data || typeof data.rates !== 'object') throw new Error('bad payload');
        setState({ status: 'ok', data });
      })
      .catch((e: unknown) => {
        if ((e as { name?: string }).name !== 'AbortError') setState({ status: 'error' });
      });
    return () => ctrl.abort();
  }, []);
  return state;
}
