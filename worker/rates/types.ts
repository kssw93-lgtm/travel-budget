import type { RatesPayload } from '../../src/core/types';

export interface ProviderResult {
  /** 1 USD 당 해당 통화 단위 수 */
  rates: Record<string, number>;
  /** 제공자가 밝힌 환율 기준일 YYYY-MM-DD */
  asOf: string;
}

/** 무료 환율 API 하나. 새 제공자는 이 모양으로 만들어 providers 배열에 추가하면 된다. */
export interface RateProvider {
  id: string;
  name: string;
  /** 출처 표기용 링크 */
  url: string;
  load(fetchFn: typeof fetch): Promise<ProviderResult>;
}

export interface StoredRates {
  payload: RatesPayload;
  /** 마지막으로 성공한 갱신 시각(ms) */
  storedAt: number;
}

export interface RateStore {
  get(): Promise<StoredRates | null>;
  put(record: StoredRates): Promise<void>;
}

export class RatesUnavailableError extends Error {
  constructor(public readonly causes: string[]) {
    super(`환율을 가져올 수 없습니다: ${causes.join('; ')}`);
  }
}
