/** 도시별 「언제 가면 좋을까」(추천 시기·이유·피하면 좋은 때). Claude 초안이며 GPT 할 일에서 검증한다 */
import { WHEN_1, type When } from './city-when-1';
import { WHEN_2 } from './city-when-2';
import { WHEN_3 } from './city-when-3';
import { WHEN_4 } from './city-when-4';
import { WHEN_5 } from './city-when-5';
import { WHEN_6 } from './city-when-6';
export type { When, Pick } from './city-when-1';

export const CITY_WHEN: Record<string, When> = { ...WHEN_1, ...WHEN_2, ...WHEN_3, ...WHEN_4, ...WHEN_5, ...WHEN_6 };
