import { attractionOptions, type AttractionOption } from './attractions';
import { estimateTrip } from './estimate';
import { STYLES } from './model-config';
import { priceGuide, type GuideRow } from './price-guide';
import { passOptions } from './transport';
import type { CostCategory, City, ExtraSample, PriceSample, Range, TravelStyle } from './types';

/** 예시 경비 내역의 줄: 외식·현지 교통·예비비 */
export type GuideBreakdownKey = Exclude<CostCategory, 'attraction'> | 'contingency';
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
  attractions: AttractionOption[];
  /** 이용권 손익분기: 1회 요금 대표값 기준으로 하루 몇 번 이상 타면 이용권이 이득인지. 1회 요금 표본이 충분할 때만 */
  passTips: PassTip[];
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
export function cityGuide(city: City, samples: PriceSample[], refDate: string, extras: ExtraSample[] = []): CityGuide {
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
    attractions: attractionOptions(city, samples),
    passTips: passTips(city, samples, prices.find((p) => p.basket === 'ride')),
  };
}

/** 도시 가이드 주소 */
export const guidePath = (cityId: string) => `/guide/${cityId}`;
