import citiesJson from './generated/cities.json';
import metaJson from './generated/meta.json';
import statusJson from './generated/status.json';
import type { CityStatus } from '../core/estimate';
import type { City } from '../core/types';

/** 첫 화면과 문서 메타데이터에 필요한 가벼운 도시 목록·자료 기준일. */
export const allCities = citiesJson as City[];
export const dataMeta = metaJson as { source: string; version: string; date: string; latestPriceCheckedAt: string; sha256: string; sampleCount: number };
export const cityStatusFile = statusJson as unknown as Record<string, CityStatus>;

/** 1차 화면에는 조사 단계가 '파일럿'인 도시만 노출한다. 2차 이후 도시는 데이터에 있어도 숨긴다. */
export const PILOT_STAGE = '파일럿';
export const cities: City[] = allCities.filter((city) => city.stage === PILOT_STAGE);
/** 숨긴 조사 중 도시(검색하면 '곧 추가'만 안내하고 고를 수는 없다) */
export const upcomingCities: City[] = allCities.filter((city) => city.stage !== PILOT_STAGE);

export const cityById = (id: string): City | undefined => cities.find((city) => city.id === id);

/** 공개 도시 가격 표본 중 가장 최근 확인일. 변환 메타데이터에 있어 첫 화면에서 가격 전체를 읽지 않는다. */
export const dataDate = dataMeta.latestPriceCheckedAt;
