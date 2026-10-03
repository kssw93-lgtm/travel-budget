import { describe, expect, it } from 'vitest';
import { estimateTrip } from '../../src/core/estimate';
import { extraOptions, estimateExtras } from '../../src/core/extras';
import type { ExtraSample } from '../../src/core/types';
import { baseSamples, city, ride, sample, trip } from './fixtures';

/** 테스트 전용 표본(운영 데이터 아님): 공항 이동·렌터카 */
function extra(over: Partial<ExtraSample> & Pick<ExtraSample, 'kind' | 'nameEn'>): ExtraSample {
  const { category: _c, ...base } = sample({ category: 'transport' });
  void _c;
  return { ...base, nameKo: over.nameEn, unit: '편도 1인', ...over, max: over.max ?? over.min ?? base.max };
}

const express = extra({ id: 'X-AP-1', kind: 'airport', nameEn: 'Airport Express adult', sourceUrl: 'https://rail.example/fares', min: 30 });
const expressChild = extra({ id: 'X-AP-2', kind: 'airport', nameEn: 'Airport Express child', target: '아동 6-11세', sourceUrl: 'https://rail.example/fares', min: 15 });
const busReturn = extra({ id: 'X-AP-3', kind: 'airport', nameEn: 'Limousine bus round trip', unit: '왕복 1인', sourceUrl: 'https://bus.example', min: 50 });
const car = extra({ id: 'X-RC-1', kind: 'rental', nameEn: 'Compact car', unit: '1일(24시간) 차량 1대', min: 40, max: 60 });
const carWeekly = extra({ id: 'X-RC-2', kind: 'rental', nameEn: 'Compact car weekly', unit: '7일 차량 1대', min: 250 });
const all = [express, expressChild, busReturn, car, carWeekly];

describe('공항 이동·렌터카 목록', () => {
  it('성인·아동 행을 같은 상품으로 짝짓고, 왕복 상품을 구분한다', () => {
    const opts = extraOptions(city.id, all, 'airport');
    expect(opts.map((o) => o.id)).toEqual(['X-AP-1', 'X-AP-3']);
    expect(opts[0]!.child?.id).toBe('X-AP-2');
    expect(opts[1]!.roundTrip).toBe(true);
  });

  it('렌터카는 1일(24시간) 요금만 쓴다(주간 요금은 나눌 근거가 없어 제외)', () => {
    expect(extraOptions(city.id, all, 'rental').map((o) => o.id)).toEqual(['X-RC-1']);
  });

  it('모델 사용 아니오·D등급·보류 표본은 목록에 없다', () => {
    const bad = [
      extra({ id: 'B1', kind: 'airport', nameEn: 'No', modelUse: 'no' }),
      extra({ id: 'B2', kind: 'airport', nameEn: 'Dgrade', grade: 'D' }),
      extra({ id: 'B3', kind: 'airport', nameEn: 'Hold', status: '보류' }),
    ];
    expect(extraOptions(city.id, bad, 'airport')).toEqual([]);
  });
});

describe('공항 이동·렌터카 비용', () => {
  it('편도 상품: (성인 요금 × 성인 + 아동 요금 × 아동) × 횟수', () => {
    const [x] = estimateExtras(trip({ adults: 2, children: 1, airportId: 'X-AP-1', airportTrips: 2 }), all);
    expect(x!.total).toEqual({ min: (30 * 2 + 15) * 2, max: (30 * 2 + 15) * 2 });
    const [one] = estimateExtras(trip({ adults: 2, children: 1, airportId: 'X-AP-1', airportTrips: 1 }), all);
    expect(one!.total.min).toBe(75);
  });

  it('왕복 상품은 횟수와 무관하게 1장, 아동 요금이 없으면 성인 요금', () => {
    const [x] = estimateExtras(trip({ adults: 1, children: 1, airportId: 'X-AP-3', airportTrips: 2 }), all);
    expect(x!.units).toBe(1);
    expect(x!.childPrice).toBeNull();
    expect(x!.total.min).toBe(100);
  });

  it('렌터카: 차량 1대 × 대여 일수(기본값은 숙박 수), 인원과 무관', () => {
    expect(estimateExtras(trip({ nights: 3, adults: 4, rentalId: 'X-RC-1' }), all)[0]!.total).toEqual({ min: 120, max: 180 });
    expect(estimateExtras(trip({ nights: 3, rentalId: 'X-RC-1', rentalDays: 2 }), all)[0]!.total).toEqual({ min: 80, max: 120 });
  });

  it('고르지 않거나 목록에 없는 ID 는 더하지 않는다', () => {
    expect(estimateExtras(trip(), all)).toEqual([]);
    expect(estimateExtras(trip({ rentalId: 'X-RC-2', airportId: 'NOPE' }), all)).toEqual([]);
  });

  it('고른 항목은 합계와 예비비에 들어간다', () => {
    const samples = [...baseSamples(), ride(5), ride(6), ride(7)];
    const without = estimateTrip(trip(), city, samples, all);
    const withCar = estimateTrip(trip({ rentalId: 'X-RC-1' }), city, samples, all);
    expect(withCar.extras).toHaveLength(1);
    expect(withCar.subtotal!.min - without.subtotal!.min).toBeCloseTo(120);
    expect(withCar.extras[0]!.contingency!.min).toBeCloseTo(12);
    expect(withCar.total!.min - without.total!.min).toBeCloseTo(132);
  });
});
