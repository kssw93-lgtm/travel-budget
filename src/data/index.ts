import foodsJson from './generated/foods.json';
import extrasJson from './generated/extras.json';
import memosJson from './generated/memos.json';
import samplesJson from './generated/samples.json';
import type { CityMemo, ExtraSample, FoodRecommendation, PriceSample } from '../core/types';

export { allCities, cities, cityById, dataDate, dataMeta, cityStatusFile, PILOT_STAGE, upcomingCities } from './catalog';

/** 가격 데이터는 전부 여기서만 들어온다. 엑셀을 다시 변환해 JSON 만 교체하면 계산 결과가 바뀐다. */
export const samples = samplesJson as PriceSample[];
export const foods = foodsJson as FoodRecommendation[];
/** 고르면 더하는 공항 이동·렌터카 표본 */
export const extras = extrasJson as ExtraSample[];
/** 도시 메모(팁·숙박세·입국 수수료 등, 안내용) */
export const memos = memosJson as CityMemo[];
