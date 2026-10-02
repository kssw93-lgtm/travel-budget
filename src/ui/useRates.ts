import { useEffect, useState } from 'react';
import type { RatesPayload } from '../core/types';
import { isPreview } from './router';

export type RatesState = { status: 'loading' } | { status: 'ok'; data: RatesPayload } | { status: 'error'; preview?: true };

/** 서버가 캐시해 둔 환율을 한 번 읽는다. 실패하면 임의 값 없이 error 상태가 된다. */
export function useRates(): RatesState {
  const [state, setState] = useState<RatesState>(isPreview ? { status: 'error', preview: true } : { status: 'loading' });
  useEffect(() => {
    // 미리보기 빌드는 환율 서버가 없으므로 호출하지 않는다(임의 환율도 쓰지 않음)
    if (isPreview) return;
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
