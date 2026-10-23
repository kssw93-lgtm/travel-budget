/**
 * 도시 소개(이런 여행지예요)·추천 여행 기간·숙소 잡기 좋은 동네. 금액은 쓰지 않는다.
 * Claude 초안이며 GPT 할 일에서 검증한다.
 */
import { INTROS_1, type Intro } from './city-intros-1';
import { INTROS_2 } from './city-intros-2';
import { INTROS_3 } from './city-intros-3';
import { INTROS_4 } from './city-intros-4';
import { INTROS_5 } from './city-intros-5';
import { INTROS_6 } from './city-intros-6';
import { INTROS_7 } from './city-intros-7';
export type { Intro, Area } from './city-intros-1';

export const CITY_INTROS: Record<string, Intro> = { ...INTROS_1, ...INTROS_2, ...INTROS_3, ...INTROS_4, ...INTROS_5, ...INTROS_6, ...INTROS_7 };
