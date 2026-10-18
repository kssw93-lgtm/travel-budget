import foodsJson from './generated/foods.json';
import extrasJson from './generated/extras.json';
import samplesJson from './generated/samples.json';
import type { ExtraSample, FoodRecommendation, PriceSample } from '../core/types';

/** 사용자가 도시를 고른 뒤에만 읽는 계산기 전용 대용량 자료. */
export const calculatorData = {
  foods: foodsJson as FoodRecommendation[],
  extras: extrasJson as ExtraSample[],
  samples: samplesJson as PriceSample[],
};
