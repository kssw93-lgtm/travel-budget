import { describe, expect, it } from 'vitest';
import { estimateTrip, dayWeights } from '../../src/core/estimate';
import { baseSamples, city, sample, trip } from './fixtures';

const close = (r: { min: number; max: number } | null, min: number, max: number) => {
  expect(r).not.toBeNull();
  expect(r!.min).toBeCloseTo(min, 6);
  expect(r!.max).toBeCloseTo(max, 6);
};

describe('기본 계산 규칙', () => {
  it('여행일 수 = 숙박 수 + 1, 첫날·마지막 날은 60%', () => {
    expect(dayWeights(4)).toEqual([0.6, 1, 1, 0.6]);
    expect(estimateTrip(trip({ nights: 3 }), city, baseSamples()).days).toBe(4);
  });

  it('음식 + 교통 + 관광 + 기념품 합에 예비비 10%를 더해 최소~최대로 낸다 (일반형, 성인 2, 3박)', () => {
    const e = estimateTrip(trip(), city, baseSamples());
    // 식사 3회 × [12.5, 27.5] × 가중합 3.2 × 2인
    close(e.categories.food.total, 240, 528);
    // 교통 [10, 20] × 4일 × 2인 (첫·마지막 날도 이용권은 하루치)
    close(e.categories.transport.total, 80, 160);
    // 관광 1회 × [100, 200] × 3.2 × 2인
    close(e.categories.attraction.total, 640, 1280);
    // 기념품 3개 × 2인 × [5, 15]
    close(e.categories.souvenir.total, 30, 90);
    close(e.subtotal, 990, 2058);
    close(e.contingency, 99, 205.8);
    close(e.total, 1089, 2263.8);
    close(e.dailyFoodAverage, 60, 132);
    expect(e.computable).toBe(true);
    expect(e.currency).toBe('TST');
  });

  it('여행 스타일에 따라 같은 데이터에서 다른 구간을 읽는다', () => {
    const budget = estimateTrip(trip({ style: 'budget' }), city, baseSamples());
    const comfort = estimateTrip(trip({ style: 'comfort' }), city, baseSamples());
    const standard = estimateTrip(trip(), city, baseSamples());
    expect(budget.total!.max).toBeLessThan(standard.total!.max);
    expect(comfort.total!.min).toBeGreaterThan(standard.total!.min);
    // 여유형은 하루 관광 2회
    close(comfort.categories.attraction.total, 2 * 3.2 * 2 * 150, 2 * 3.2 * 2 * 200);
  });

  it('인원이 늘면 비례해서 늘어난다', () => {
    const one = estimateTrip(trip({ adults: 1 }), city, baseSamples());
    const two = estimateTrip(trip({ adults: 2 }), city, baseSamples());
    expect(two.total!.min).toBeCloseTo(one.total!.min * 2, 6);
  });

  it('가격 데이터만 바꾸면 결과가 바뀐다(코드 수정 없음)', () => {
    const doubled = baseSamples().map((s) => ({ ...s, min: s.min * 2, max: s.max * 2 }));
    const a = estimateTrip(trip(), city, baseSamples());
    const b = estimateTrip(trip(), city, doubled);
    expect(b.total!.min).toBeCloseTo(a.total!.min * 2, 6);
  });
});

describe('데이터 부족 상태', () => {
  it('비용군 표본이 최소 수 미만이면 그 항목을 부족으로 표시하고 합계를 만들지 않는다', () => {
    const rows = baseSamples().filter((s) => !(s.category === 'food' && s.min === 30 || s.category === 'food' && s.min === 20));
    const e = estimateTrip(trip(), city, rows);
    expect(e.missing).toEqual(['food']);
    expect(e.categories.food.total).toBeNull();
    expect(e.total).toBeNull();
    expect(e.dailyFoodAverage).toBeNull();
    expect(e.computable).toBe(false);
    expect(e.categories.transport.total).not.toBeNull();
    expect(e.warnings.some((w) => w.code === 'insufficient' && w.category === 'food')).toBe(true);
  });

  it('표본이 아예 없는 도시는 모든 비용군이 부족이다', () => {
    const e = estimateTrip(trip(), city, []);
    expect(e.missing).toHaveLength(4);
    expect(e.total).toBeNull();
  });

  it('충족률이 75% 미만이면 비용군마다 2건이 있어도 계산을 보류한다', () => {
    const rows = baseSamples().filter((s) => !(s.category === 'food' && s.min === 30));
    // 교통 2 + 식사 2 + 관광 2 + 기념품 2 = 8/12 = 0.67
    const e = estimateTrip(trip(), city, rows);
    expect(e.missing).toEqual([]);
    expect(e.fillRate).toBeCloseTo(8 / 12, 6);
    expect(e.computable).toBe(false);
    expect(e.total).toBeNull();
    expect(e.warnings.some((w) => w.code === 'lowFillRate')).toBe(true);
  });
});

describe('표본 제외 규칙', () => {
  const sameResult = (extra: Parameters<typeof sample>[0]) => {
    const a = estimateTrip(trip(), city, baseSamples());
    const b = estimateTrip(trip(), city, [...baseSamples(), sample(extra)]);
    expect(b.total).toEqual(a.total);
  };

  it('모델사용=아니오, D등급, 보류 자료는 계산에서 제외', () => {
    sameResult({ category: 'food', subtype: '중가 한끼', min: 9999, modelUse: 'no' });
    sameResult({ category: 'food', subtype: '중가 한끼', min: 9999, grade: 'D' });
    sameResult({ category: 'food', subtype: '중가 한끼', min: 9999, status: '보류' });
  });

  it('간식·음료·사이드는 한 끼 식사로 보지 않는다', () => {
    sameResult({ category: 'food', subtype: '간식', min: 9999 });
    sameResult({ category: 'food', subtype: '사이드', min: 9999 });
  });

  it('"○○ 미만" 상한 문구(최소 0·최대>0)는 관측 가격이 아니라 제외하지만, 0·0 무료 입장은 포함', () => {
    sameResult({ category: 'food', subtype: '저가 식사', min: 0, max: 9999 });
    const free = estimateTrip(trip(), city, [...baseSamples(), sample({ category: 'attraction', subtype: '박물관', min: 0 })]);
    expect(free.categories.attraction.sampleCount).toBe(3);
  });

  it('거주자 전용(EEA) 요금과 하루 단위가 아닌 교통(1회권·왕복)은 제외', () => {
    sameResult({ category: 'attraction', target: 'EEA', min: 9999 });
    sameResult({ category: 'transport', subtype: '택시', unit: '1회', min: 9999 });
    sameResult({ category: 'transport', subtype: '관광 셔틀', unit: '1인 왕복', min: 9999 });
  });

  it('모델사용=예 표본이 충분하면 조건부 표본은 쓰지 않고, 부족하면 조건부까지 쓰며 경고한다', () => {
    sameResult({ category: 'food', subtype: '중가 한끼', min: 9999, modelUse: 'conditional' });
    const rows = [
      ...baseSamples().filter((s) => s.category !== 'food'),
      sample({ category: 'food', subtype: '중가 한끼', min: 10 }),
      sample({ category: 'food', subtype: '중가 한끼', min: 30, modelUse: 'conditional', grade: 'C', status: '재검증' }),
    ];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.food.sufficient).toBe(true);
    const codes = e.warnings.filter((w) => w.category === 'food').map((w) => w.code);
    expect(codes).toEqual(expect.arrayContaining(['conditionalUsed', 'gradeCUsed', 'revalidation']));
  });
});

describe('교통 무제한권 환산', () => {
  it('48시간권은 2일, 72시간권은 3일로 나눠 1일 단가를 만든다', () => {
    const rows = [
      ...baseSamples().filter((s) => s.category !== 'transport'),
      sample({ category: 'transport', subtype: '무제한권', unit: '성인 1인', nameKo: '지하철 48시간권', nameEn: 'Subway 48-hour', min: 30 }),
      sample({ category: 'transport', subtype: '무제한권', unit: '성인 1인', nameKo: '지하철 72시간권', nameEn: 'Subway 72-hour', min: 60 }),
    ];
    const e = estimateTrip(trip({ adults: 1, style: 'budget' }), city, rows);
    // 1일 환산 [15, 20] → 예산형 [15, 17.5], 4일
    close(e.categories.transport.total, 15 * 4, 17.5 * 4);
  });
});

describe('어린이', () => {
  it('어린이 표본이 있으면 어린이 가격을, 없으면 성인 가격을 쓰고 경고한다', () => {
    const withChild = [...baseSamples(), sample({ category: 'transport', subtype: '아동권', unit: '아동 1일', target: '아동', min: 5 })];
    const a = estimateTrip(trip({ adults: 1, children: 1 }), city, withChild);
    close(a.categories.transport.total, (10 + 5) * 4, (20 + 5) * 4);
    expect(a.categories.transport.childSampleCount).toBe(1);
    expect(a.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'transport')).toBe(false);

    const b = estimateTrip(trip({ adults: 1, children: 1 }), city, baseSamples());
    close(b.categories.transport.total, 2 * 10 * 4, 2 * 20 * 4);
    expect(b.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'transport')).toBe(true);
  });

  it('기념품은 성인만 구매하는 것으로 가정', () => {
    const e = estimateTrip(trip({ adults: 1, children: 3 }), city, baseSamples());
    close(e.categories.souvenir.total, 3 * 5, 3 * 15);
  });
});

describe('방문일 반영(날짜에 따라 달라지는 항목만)', () => {
  const dayPass = (name: string, nameEn: string, v: number) =>
    sample({ category: 'transport', subtype: '무제한권', unit: '성인 1일', priceType: '요일형', nameKo: name, nameEn, min: v });
  const rows = () => [
    ...baseSamples().filter((s) => s.category !== 'transport'),
    dayPass('1일권 평일', 'Pass Weekday', 10),
    dayPass('1일권 주말·공휴일', 'Pass Weekend/Holiday', 6),
  ];

  it('요일형은 방문 날짜의 요일에 맞는 요금만 쓴다', () => {
    // 2026-11-04 수 · 05 목 · 06 금 · 07 토 → 평일 3일 + 주말 1일, 성인 1
    const e = estimateTrip(trip({ adults: 1, style: 'budget' }), city, rows());
    close(e.categories.transport.total, 10 * 3 + 6, 10 * 3 + 6);
    expect(e.warnings.some((w) => w.code === 'dateResolved' && w.category === 'transport')).toBe(true);
  });

  it('유효 기간 밖 표본은 그날 계산에서 빠지고, 전부 빠지면 부족으로 처리', () => {
    const seasonal = [
      ...baseSamples().filter((s) => s.category !== 'food'),
      sample({ category: 'food', subtype: '중가 한끼', min: 10, validFrom: '2027-01-01' }),
      sample({ category: 'food', subtype: '중가 한끼', min: 20, validFrom: '2027-01-01' }),
    ];
    expect(estimateTrip(trip(), city, seasonal).categories.food.sufficient).toBe(false);
    const inSeason = estimateTrip(trip({ visitDate: '2027-02-01' }), city, seasonal);
    expect(inSeason.categories.food.sufficient).toBe(true);
  });

  it('고정형 가격에는 방문일이 영향을 주지 않고, 전체에 성수기 배수를 곱하지 않는다', () => {
    const a = estimateTrip(trip({ visitDate: '2026-11-04' }), city, baseSamples());
    const b = estimateTrip(trip({ visitDate: '2026-12-24' }), city, baseSamples());
    expect(b.total).toEqual(a.total);
  });
});

describe('출처·확인일', () => {
  it('사용한 표본 수, 출처, 확인일 범위를 돌려준다', () => {
    const rows = baseSamples();
    const first = rows[0]!;
    first.checkedAt = '2026-09-01';
    first.sourceName = 'Other';
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.transport.sampleCount).toBe(2);
    expect(e.categories.transport.sources.map((s) => s.name).sort()).toEqual(['Other', 'Test']);
    expect(e.categories.transport.checkedFrom).toBe('2026-09-01');
    expect(e.categories.transport.checkedTo).toBe('2026-10-02');
  });
});
