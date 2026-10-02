import citiesJson from './generated/cities.json';
import foodsJson from './generated/foods.json';
import metaJson from './generated/meta.json';
import samplesJson from './generated/samples.json';
import type { City, FoodRecommendation, PriceSample } from '../core/types';

/** 가격 데이터는 전부 여기서만 들어온다. 엑셀을 다시 변환해 JSON 만 교체하면 계산 결과가 바뀐다. */
export const allCities = citiesJson as City[];
export const samples = samplesJson as PriceSample[];
export const foods = foodsJson as FoodRecommendation[];
export const dataMeta = metaJson as { source: string; sha256: string; sampleCount: number };

/** 1차 화면에는 조사 단계가 '파일럿'인 도시만 노출한다. 2차 이후 도시는 데이터에 있어도 숨긴다. */
export const PILOT_STAGE = '파일럿';
export const cities: City[] = allCities.filter((c) => c.stage === PILOT_STAGE);

export const cityById = (id: string): City | undefined => cities.find((c) => c.id === id);

/** 가격 표본 중 가장 최근 확인일 */
export const dataDate = samples.reduce((d, s) => (s.checkedAt > d ? s.checkedAt : d), '');
