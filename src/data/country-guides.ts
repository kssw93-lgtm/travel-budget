/** 나라별 "알아둘 것·조심할 것". 키는 cities.json 의 countryEn. 금액·자주 바뀌는 입국 규정은 쓰지 않는다 */
import { COUNTRY_1, type CountryNote } from './country-guides-1';
import { COUNTRY_2 } from './country-guides-2';
export type { CountryNote } from './country-guides-1';

export const COUNTRY_GUIDES: Record<string, CountryNote> = { ...COUNTRY_1, ...COUNTRY_2 };
