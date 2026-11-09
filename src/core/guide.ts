import { attractionOptions, type AttractionOption } from './attractions';
import { classify } from './classify';
import { cityRows } from './city-rows';
import { estimateTrip } from './estimate';
import { STYLES } from './model-config';
import { priceGuide, type GuideRow } from './price-guide';
import { passOptions } from './transport';
import type { CostCategory, City, ExtraSample, PriceSample, Range, TravelStyle } from './types';
import { selectUsable } from './pool';

/** 예시 경비 내역의 줄: 외식·현지 교통·예비비 */
export type GuideBreakdownKey = Exclude<CostCategory, 'attraction'> | 'contingency';

export type CityPriceExampleKind = 'localFood' | 'meal' | 'coffee' | 'bottledWater' | 'softDrink' | 'ride' | 'pass' | 'taxi' | 'globalChain';
export interface CityPriceExampleGroup {
  kind: CityPriceExampleKind;
  samples: PriceSample[];
  range: Range;
}
const BREAKDOWN: readonly Exclude<CostCategory, 'attraction'>[] = ['food', 'transport'];

/** 도시 가이드의 예시 일정: 성인 1명, 3박 4일. 스타일별 현지 체류비(예비비 포함)를 보여 준다 */
export const GUIDE_EXAMPLE = { nights: 3, adults: 1, children: 0 } as const;

export interface CityGuide {
  city: City;
  /** 예시 일정 기준일(가격 자료 기준일). 요일별 요금이 있는 항목은 이 날짜부터 계산된다 */
  refDate: string;
  /** 스타일별 예시 일정 합계(예비비 포함)와 1인 1일 평균. 계산 불가면 null */
  styles: Array<{
    style: TravelStyle;
    total: Range | null;
    perDay: Range | null;
    /** 항목별 내역(전 일정·성인 1명). 관광지는 예시 일정에 넣지 않으므로 없다 */
    breakdown: Array<{ key: GuideBreakdownKey; total: Range | null }>;
  }>;
  prices: GuideRow[];
  /** 도시·같은 나라에서 확인한 자주 쓰는 품목의 범위와 그 범위를 만든 개별 가격 */
  priceExamples: CityPriceExampleGroup[];
  attractions: AttractionOption[];
  /** 이용권 손익분기: 1회 요금 대표값 기준으로 하루 몇 번 이상 타면 이용권이 이득인지. 1회 요금 표본이 충분할 때만 */
  passTips: PassTip[];
}

function cityPriceExamples(city: City, samples: PriceSample[], localFoodIds: string[]): CityGuide['priceExamples'] {
  const localAndCountryRows = cityRows(city, samples).rows;
  const shared = localAndCountryRows
    .filter((row) => row.usable && row.audience === 'adult' && row.basket);
  const unique = (rows: typeof shared, limit: number): PriceSample[] => {
    const seen = new Set<string>();
    return rows.filter((row) => {
      if (seen.has(row.productKey)) return false;
      seen.add(row.productKey);
      return true;
    }).slice(0, limit).map((row) => row.sample);
  };
  const withRange = (kind: CityPriceExampleKind, products: PriceSample[]): CityPriceExampleGroup | null => products.length
    ? { kind, samples: products, range: { min: Math.min(...products.map((sample) => sample.min)), max: Math.max(...products.map((sample) => sample.max)) } }
    : null;
  const productText = (sample: PriceSample) => `${sample.nameKo} ${sample.nameEn}`;
  const coffee = /coffee|café|cafe|latte|espresso|cappuccino|americano|flat white|mocha|cold brew|drip coffee|brewed coffee|아메리카노|커피|라떼|에스프레소|카푸치노|콜드브루|플랫화이트|モカ|コーヒー|カフェラテ|エスプレッソ|フラットホワイト/i;
  const food = unique(shared.filter((row) => row.basket === 'meal' && localFoodIds.includes(row.sample.id) && !coffee.test(productText(row.sample))), 3);
  const meals = unique(selectUsable(shared.filter((row) => row.basket === 'meal' && !localFoodIds.includes(row.sample.id))), 5);
  const coffeePrices = unique(selectUsable(shared.filter((row) => row.basket === 'snack' && coffee.test(productText(row.sample)))), 5);
  const water = unique(selectUsable(shared.filter((row) => row.basket === 'snack' && /water|생수|미네랄워터|ミネラルウォーター/i.test(productText(row.sample)))), 5);
  const soda = unique(selectUsable(shared.filter((row) => row.basket === 'snack' && /cola|coke|soda|콜라|탄산음료|コーラ/i.test(productText(row.sample)))), 5);
  const rides = unique(selectUsable(shared.filter((row) => row.basket === 'ride')), 5);
  const passes = unique(selectUsable(shared.filter((row) => row.basket === 'pass')), 5);
  const taxi = unique(samples
    .filter((sample) => sample.cityId === city.id && sample.category === 'transport' && /택시|taxi/i.test(`${sample.subtype} ${productText(sample)}`))
    // Taxi is a useful local price example, but a vehicle fare is not a per-person trip-budget item.
    // Keep only the specific unit exclusion here; the fare remains outside the calculator basket.
    .map(classify)
    .filter((row) =>
      (row.usable || row.excludeReason === 'unsupportedUnit') && row.audience === 'adult' &&
      row.sample.modelUse === 'yes' && row.sample.grade !== 'D' && !row.sample.status.includes('보류')), 3);
  const bigMac = unique(samples
    .filter((sample) => sample.cityId === city.id && /big\s*mac|빅맥/i.test(productText(sample)) && /mcdonald/i.test(sample.sourceName))
    .map(classify).filter((row) => row.usable && row.audience === 'adult'), 1);
  return [
    ...food.map((sample) => ({ kind: 'localFood' as const, samples: [sample], range: { min: sample.min, max: sample.max } })),
    withRange('meal', meals), withRange('coffee', coffeePrices), withRange('bottledWater', water),
    withRange('softDrink', soda), withRange('ride', rides), withRange('pass', passes),
    withRange('taxi', taxi), withRange('globalChain', bigMac),
  ].filter((group): group is CityPriceExampleGroup => group !== null);
}

export interface PassTip {
  id: string;
  nameKo: string;
  nameEn: string;
  nameJa?: string;
  /** 이용권 1장 가격(현지 통화, 가격 범위면 최고가로 보수적으로) */
  price: number;
  /** 이용권 1장이 덮는 일수 */
  days: number;
  /** 하루 이 횟수 이상 타면 1회권보다 이용권이 싸다 */
  ridesPerDay: number;
}

/** 이용권 손익분기 = ⌈(이용권 가격 ÷ 일수) ÷ 1회 요금 중앙값⌉. 이용권이 가장 싼 1회 요금보다도 싸면(1회 이하) 보여 줄 의미가 없어 뺀다 */
export function passTips(city: City, samples: PriceSample[], rides: GuideRow | undefined): PassTip[] {
  if (!rides || !rides.sufficient || rides.median <= 0) return [];
  return passOptions(city, samples)
    .map((o) => {
      const s = o.adult.sample;
      return { id: s.id, nameKo: s.nameKo, nameEn: s.nameEn, nameJa: s.nameJa, price: s.max, days: o.days, ridesPerDay: Math.ceil(s.max / o.days / rides.median) };
    })
    .filter((p) => p.ridesPerDay >= 2)
    .sort((a, b) => a.days - b.days || a.price - b.price);
}

/** 도시 가이드 페이지 데이터. 계산기와 같은 엔진·같은 표본만 쓴다(별도 수치 없음) */
export function cityGuide(city: City, samples: PriceSample[], refDate: string, extras: ExtraSample[] = [], localFoodIds: string[] = []): CityGuide {
  const days = GUIDE_EXAMPLE.nights + 1;
  const styles = STYLES.map((style) => {
    const e = estimateTrip({ cityId: city.id, visitDate: refDate, style, ...GUIDE_EXAMPLE }, city, samples, extras);
    const breakdown: CityGuide['styles'][number]['breakdown'] = [
      ...BREAKDOWN.map((key) => ({ key, total: e.categories[key].total })),
      { key: 'contingency', total: e.contingency },
    ];
    return { style, total: e.total, perDay: e.total ? { min: e.total.min / days, max: e.total.max / days } : null, breakdown };
  });
  const prices = priceGuide(city, samples);
  return {
    city,
    refDate,
    styles,
    prices,
    priceExamples: cityPriceExamples(city, samples, localFoodIds),
    attractions: attractionOptions(city, samples),
    passTips: passTips(city, samples, prices.find((p) => p.basket === 'ride')),
  };
}

/** 도시 가이드 주소 */
export const guidePath = (cityId: string) => `/guide/${cityId}`;
