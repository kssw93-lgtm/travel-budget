import { attractionOptions, type AttractionOption } from './attractions';
import { estimateTrip } from './estimate';
import { STYLES } from './model-config';
import { priceGuide, type GuideRow } from './price-guide';
import type { City, ExtraSample, PriceSample, Range, TravelStyle } from './types';

/** 도시 가이드의 예시 일정: 성인 1명, 3박 4일. 스타일별 현지 체류비(예비비 포함)를 보여 준다 */
export const GUIDE_EXAMPLE = { nights: 3, adults: 1, children: 0 } as const;

export interface CityGuide {
  city: City;
  /** 예시 일정 기준일(가격 자료 기준일). 요일별 요금이 있는 항목은 이 날짜부터 계산된다 */
  refDate: string;
  /** 스타일별 예시 일정 합계(예비비 포함)와 1인 1일 평균. 계산 불가면 null */
  styles: Array<{ style: TravelStyle; total: Range | null; perDay: Range | null }>;
  prices: GuideRow[];
  attractions: AttractionOption[];
}

/** 도시 가이드 페이지 데이터. 계산기와 같은 엔진·같은 표본만 쓴다(별도 수치 없음) */
export function cityGuide(city: City, samples: PriceSample[], refDate: string, extras: ExtraSample[] = []): CityGuide {
  const days = GUIDE_EXAMPLE.nights + 1;
  const styles = STYLES.map((style) => {
    const e = estimateTrip({ cityId: city.id, visitDate: refDate, style, ...GUIDE_EXAMPLE }, city, samples, extras);
    return { style, total: e.total, perDay: e.total ? { min: e.total.min / days, max: e.total.max / days } : null };
  });
  return { city, refDate, styles, prices: priceGuide(city, samples), attractions: attractionOptions(city, samples) };
}

/** 도시 가이드 주소 */
export const guidePath = (cityId: string) => `/guide/${cityId}`;
