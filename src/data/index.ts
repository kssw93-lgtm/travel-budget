import citiesJson from './generated/cities.json';
import foodsJson from './generated/foods.json';
import extrasJson from './generated/extras.json';
import memosJson from './generated/memos.json';
import metaJson from './generated/meta.json';
import samplesJson from './generated/samples.json';
import statusJson from './generated/status.json';
import type { CityStatus } from '../core/estimate';
import type { City, CityMemo, ExtraSample, FoodRecommendation, PriceSample } from '../core/types';

/** 가격 데이터는 전부 여기서만 들어온다. 엑셀을 다시 변환해 JSON 만 교체하면 계산 결과가 바뀐다. */
export const allCities = citiesJson as City[];
export const samples = samplesJson as PriceSample[];
export const foods = foodsJson as FoodRecommendation[];
/** 고르면 더하는 공항 이동·렌터카 표본 */
export const extras = extrasJson as ExtraSample[];
/** 도시 메모(팁·숙박세·입국 수수료 등, 안내용) */
export const memos = memosJson as CityMemo[];
/** data:convert 가 만든 파일럿 도시 판정(엑셀 교체 시 자동 갱신) */
export const cityStatusFile = statusJson as unknown as Record<string, CityStatus>;
export const dataMeta = metaJson as { source: string; version: string; date: string; sha256: string; sampleCount: number };

/** 1차 화면에는 조사 단계가 '파일럿'인 도시만 노출한다. 2차 이후 도시는 데이터에 있어도 숨긴다. */
export const PILOT_STAGE = '파일럿';
export const cities: City[] = allCities.filter((c) => c.stage === PILOT_STAGE);

export const cityById = (id: string): City | undefined => cities.find((c) => c.id === id);

/** 공개 도시 가격 표본 중 가장 최근 확인일(화면의 '가격 자료 기준일'). 숨긴 조사 중 도시는 세지 않는다 */
const publicIds = new Set(cities.map((c) => c.id));
export const dataDate = samples.reduce((d, s) => (publicIds.has(s.cityId) && s.checkedAt > d ? s.checkedAt : d), '');
