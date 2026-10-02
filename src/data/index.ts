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

/** 선택 목록에는 가격 표본이 1건이라도 있는 도시만 나온다(조사 대기 도시는 제외). */
export const cities: City[] = allCities.filter((c) => samples.some((s) => s.cityId === c.id));

export const cityById = (id: string): City | undefined => cities.find((c) => c.id === id);
