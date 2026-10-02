import type { City, PriceSample, TripInput } from '../../src/core/types';

export const city: City = {
  id: 'testville', country: '테스트국', countryEn: 'Testland', nameKo: '테스트빌', nameEn: 'Testville',
  currency: 'TST', tier: 'A', stage: '파일럿',
};

let seq = 0;
/** 숫자가 아닌 고유 상품명(숫자는 독립 표본 판정에서 무시되므로 문자로 구분) */
const letters = (n: number): string => (n <= 0 ? '' : letters(Math.floor((n - 1) / 26)) + String.fromCharCode(97 + ((n - 1) % 26)));

export function sample(over: Partial<PriceSample> & Pick<PriceSample, 'category'>): PriceSample {
  seq += 1;
  const min = over.min ?? 10;
  return {
    id: `T-${seq}`, cityId: 'testville', country: '테스트국', city: '테스트빌', subtype: '', nameKo: `항목 ${letters(seq)}`,
    nameEn: `Item ${letters(seq)}`, min, max: min, currency: 'TST', unit: '1인', priceType: '고정형', target: '일반',
    grade: 'A', modelUse: 'yes', status: '확정 1차', checkedAt: '2026-10-02', applied: '2026', sourceName: 'Test',
    sourceUrl: 'https://example.com', note: '', ...over,
  };
}

export const pass = (v: number) => sample({ category: 'transport', subtype: '무제한권', unit: '성인 1일', min: v });
export const ride = (v: number) => sample({ category: 'transport', subtype: '시내버스', unit: '1회', min: v });
export const meal = (v: number) => sample({ category: 'food', subtype: '중가 한끼', unit: '1그릇', min: v });
export const snack = (v: number) => sample({ category: 'food', subtype: '간식', unit: '1개', min: v });
export const attr = (v: number) => sample({ category: 'attraction', subtype: '박물관', unit: '성인 1인', min: v });
export const gift = (v: number) => sample({ category: 'souvenir', subtype: '식품', unit: '1개', min: v });

/** 손계산이 쉬운 기본 표본 세트(비용군마다 3건): 이용권 10·20·30, 식사 10·20·30, 입장권 100·200·300, 기념품 5·15·25 */
export const baseSamples = (): PriceSample[] => [
  pass(10), pass(20), pass(30), meal(10), meal(20), meal(30), attr(100), attr(200), attr(300), gift(5), gift(15), gift(25),
];

/** 2026-11-04 는 수요일 */
export const trip = (over: Partial<TripInput> = {}): TripInput => ({
  cityId: 'testville', visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard', ...over,
});
