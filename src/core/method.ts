import { estimateTrip } from './estimate';
import { MODEL } from './model-config';
import type { City, ExtraSample, PriceSample, Range, TravelStyle } from './types';

/** 「계산 방법」 페이지의 실제 계산 예시 조건(계산기와 같은 엔진으로 계산한다) */
export const METHOD_EXAMPLE = { cityId: 'osaka', nights: 3, adults: 2, children: 0, style: 'standard' as TravelStyle };

export interface MethodExample {
  city: City;
  refDate: string;
  days: number;
  /** 성인 1회 단가(현지 통화)와 하루 기본 횟수 */
  meal: { unit: Range; perDay: number; total: Range } | null;
  snack: { unit: Range; perDay: number; total: Range } | null;
  ride: { unit: Range; perDay: number; total: Range } | null;
  food: Range;
  transport: Range;
  subtotal: Range;
  contingency: Range;
  total: Range;
}

/** 예시 계산. 데이터가 부족해 계산할 수 없으면 null */
export function methodExample(cities: City[], samples: PriceSample[], extras: ExtraSample[], refDate: string): MethodExample | null {
  const city = cities.find((c) => c.id === METHOD_EXAMPLE.cityId);
  if (!city) return null;
  const { style, ...rest } = METHOD_EXAMPLE;
  const e = estimateTrip({ ...rest, visitDate: refDate, style }, city, samples, extras);
  if (!e.computable || !e.subtotal || !e.contingency || !e.total || !e.categories.food.total || !e.categories.transport.total) return null;
  const pick = (cat: 'food' | 'transport', basket: 'meal' | 'snack' | 'ride') => {
    const lines = e.categories[cat].lines.filter((l) => l.basket === basket && l.kind === 'day');
    if (!lines.length) return null;
    const total = lines.reduce((s, l) => ({ min: s.min + l.total.min, max: s.max + l.total.max }), { min: 0, max: 0 });
    return { unit: lines[0]!.unitPrice, perDay: MODEL.usage[basket][style], total };
  };
  return {
    city,
    refDate,
    days: e.days,
    meal: pick('food', 'meal'),
    snack: pick('food', 'snack'),
    ride: pick('transport', 'ride'),
    food: e.categories.food.total,
    transport: e.categories.transport.total,
    subtotal: e.subtotal,
    contingency: e.contingency,
    total: e.total,
  };
}
