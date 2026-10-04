import type { RatesPayload } from '../core/types';
import { STATIC_RATES } from '../core/rates/static';

export type RatesState = { status: 'loading' } | { status: 'ok'; data: RatesPayload } | { status: 'error'; preview?: true };

const STATE: RatesState = { status: 'ok', data: STATIC_RATES };

/** 조사해서 고정한 환율표를 쓴다(data/rates/). 외부 환율 API 는 부르지 않는다 */
export function useRates(): RatesState {
  return STATE;
}
