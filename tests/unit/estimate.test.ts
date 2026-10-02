import { describe, expect, it } from 'vitest';
import { dayWeights, estimateTrip } from '../../src/core/estimate';
import { MODEL } from '../../src/core/model-config';
import { attr, baseSamples, city, gift, meal, pass, ride, sample, snack, trip } from './fixtures';

const close = (r: { min: number; max: number } | null, min: number, max: number) => {
  expect(r).not.toBeNull();
  expect(r!.min).toBeCloseTo(min, 6);
  expect(r!.max).toBeCloseTo(max, 6);
};
const without = (rows: ReturnType<typeof baseSamples>, category: string) => rows.filter((s) => s.category !== category);

describe('기본 계산 규칙', () => {
  it('바스켓마다 최소 표본 수는 3건', () => {
    expect(MODEL.minSamplesPerCategory).toBe(3);
  });

  it('여행일 수 = 숙박 수 + 1, 첫날·마지막 날은 60%', () => {
    expect(dayWeights(4)).toEqual([0.6, 1, 1, 0.6]);
    expect(estimateTrip(trip({ nights: 3 }), city, baseSamples()).days).toBe(4);
  });

  it('음식 + 교통 + 관광 + 기념품 합에 예비비 10%를 더해 최소~최대로 낸다 (일반형, 성인 2, 3박)', () => {
    const e = estimateTrip(trip(), city, baseSamples());
    // 식사 3회 × [12.5, 27.5] × 가중합 3.2 × 2인
    close(e.categories.food.total, 240, 528);
    // 1일 이용권 [12.5, 27.5] × 4일 × 2인 (첫·마지막 날도 이용권은 하루치)
    close(e.categories.transport.total, 100, 220);
    // 입장권 1회 × [125, 275] × 3.2 × 2인
    close(e.categories.attraction.total, 800, 1760);
    // 기념품 3개 × 2인 × [7.5, 22.5]
    close(e.categories.souvenir.total, 45, 135);
    close(e.subtotal, 1185, 2643);
    close(e.contingency, 118.5, 264.3);
    close(e.total, 1303.5, 2907.3);
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
    // 여유형은 하루 입장권 2회, 상위 50~100% 구간 [200, 300]
    close(comfort.categories.attraction.total, 2 * 3.2 * 2 * 200, 2 * 3.2 * 2 * 300);
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

describe('유형별 바스켓 분리', () => {
  it('간식·음료는 식사와 섞지 않고 별도 바스켓으로 더한다', () => {
    const e = estimateTrip(trip(), city, [...baseSamples(), snack(2), snack(4), snack(6)]);
    // 간식 바스켓: [2.5, 5.5] × 하루 1회 × 가중합 3.2 × 2인 = [16, 35.2], 식사 바스켓은 그대로 [240, 528]
    close(e.categories.food.total, 240 + 16, 528 + 35.2);
    const meal = e.categories.food.baskets.find((b) => b.basket === 'meal')!;
    const snk = e.categories.food.baskets.find((b) => b.basket === 'snack')!;
    expect([meal.sampleCount, meal.included]).toEqual([3, true]);
    expect([snk.sampleCount, snk.included]).toEqual([3, true]);
  });

  it('간식 가격이 아무리 달라도 식사 바스켓 금액은 변하지 않는다', () => {
    const cheap = estimateTrip(trip(), city, [...baseSamples(), snack(1), snack(1), snack(1)]);
    const dear = estimateTrip(trip(), city, [...baseSamples(), snack(1000), snack(1000), snack(1000)]);
    const mealOnly = estimateTrip(trip(), city, baseSamples());
    close(cheap.categories.food.total, mealOnly.categories.food.total!.min + 6.4, mealOnly.categories.food.total!.max + 6.4);
    close(dear.categories.food.total, mealOnly.categories.food.total!.min + 6400, mealOnly.categories.food.total!.max + 6400);
  });

  it('표본이 3건 미만인 선택 바스켓(간식)은 합계에서 빼고 그 사실을 알린다', () => {
    const e = estimateTrip(trip(), city, [...baseSamples(), snack(2), snack(4)]);
    close(e.categories.food.total, 240, 528);
    expect(e.categories.food.baskets.find((b) => b.basket === 'snack')).toMatchObject({ sampleCount: 2, sufficient: false, included: false });
    expect(e.warnings).toContainEqual({ category: 'food', code: 'basketOmitted', basket: 'snack' });
    expect(e.computable).toBe(true);
  });

  it('필수 바스켓(식사)이 부족하면 간식이 충분해도 식비는 부족이다', () => {
    const rows = [...without(baseSamples(), 'food'), meal(10), meal(20), snack(2), snack(4), snack(6)];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.food.sufficient).toBe(false);
    expect(e.missing).toContain('food');
  });

  it('1일 이용권과 1회권은 대안이며 단위를 섞지 않고 각각 계산해 범위를 합친다', () => {
    const e = estimateTrip(trip(), city, [...baseSamples(), ride(1), ride(2), ride(3)]);
    // 이용권 [100, 220], 1회권: [1.25, 2.75] × 하루 3회 × 4일 × 2인 = [30, 66] → 합친 범위 [30, 220]
    close(e.categories.transport.total, 30, 220);
    expect(e.categories.transport.baskets.filter((b) => b.included).map((b) => b.basket)).toEqual(['pass', 'ride']);
  });

  it('1회권만 충분해도 교통을 계산하고, 이용권 가격과는 섞지 않는다', () => {
    const rows = [...without(baseSamples(), 'transport'), pass(500), pass(600), ride(1), ride(2), ride(3)];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.transport.baskets.find((b) => b.basket === 'pass')).toMatchObject({ sampleCount: 2, included: false });
    close(e.categories.transport.total, 30, 66);
  });

  it('택시·전용차 같은 차량 단위와 왕복 요금은 어느 바스켓에도 넣지 않는다', () => {
    const rows = [...baseSamples(), sample({ category: 'transport', subtype: '택시', unit: '1회', nameKo: '시내 택시', nameEn: 'City Taxi', min: 9999 })];
    expect(estimateTrip(trip(), city, rows).total).toEqual(estimateTrip(trip(), city, baseSamples()).total);
  });
});

describe('독립 표본(같은 출처의 용량·기간 변형 과대 계산 방지)', () => {
  const variant = (nameKo: string, nameEn: string, v: number, over: Parameters<typeof sample>[0] | object = {}) =>
    sample({ category: 'transport', subtype: '무제한권', unit: '성인 1인', sourceUrl: 'https://metro.example/tickets', nameKo, nameEn, min: v, ...over });

  it('같은 출처의 24·48·72시간권은 가격 3건이지만 독립 표본 1건이라 부족이다', () => {
    const rows = [
      ...without(baseSamples(), 'transport'),
      variant('지하철 24시간권', 'Subway 24-hour Ticket', 10),
      variant('지하철 48시간권', 'Subway 48-hour Ticket', 15),
      variant('지하철 72시간권', 'Subway 72-hour Ticket', 20),
    ];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.transport.sufficient).toBe(false);
    expect(e.categories.transport.independentCount).toBe(1);
    expect(e.categories.transport.baskets[0]).toMatchObject({ basket: 'pass', sampleCount: 3, independentCount: 1 });
    expect(e.missing).toContain('transport');
  });

  it('같은 상품의 성인·아동 가격은 성인 표본 수를 늘리지 않는다', () => {
    const adultChild = (target: string, unit: string, v: number) =>
      sample({ category: 'attraction', subtype: '정원', sourceUrl: 'https://garden.example', nameKo: '플라워돔', nameEn: 'Flower Dome', target, unit, min: v });
    const rows = [...without(baseSamples(), 'attraction'), attr(100), adultChild('비거주자', '비거주 성인 1인', 46), adultChild('아동 3-12', '비거주 아동 1인', 32)];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.attraction.independentCount).toBe(2);
    expect(e.categories.attraction.sufficient).toBe(false);
  });

  it('같은 상품의 용량 차이(4개입·8개입)도 1건으로 센다', () => {
    const box = (n: number, v: number) => sample({ category: 'souvenir', subtype: '식품', unit: '1상자', sourceUrl: 'https://banana.example/p/28', nameKo: `바나나 과자 ${n}개입`, nameEn: `Banana Cake ${n} pcs`, min: v });
    const rows = [...without(baseSamples(), 'souvenir'), box(4, 691), box(8, 1296), box(12, 1800)];
    expect(estimateTrip(trip(), city, rows).categories.souvenir.sufficient).toBe(false);
  });

  it('변형은 표본 수로는 1건이지만 가격 분포에는 모두 반영한다', () => {
    const rows = [
      ...without(baseSamples(), 'transport'),
      variant('지하철 24시간권', 'Subway 24-hour Ticket', 10),
      variant('지하철 48시간권', 'Subway 48-hour Ticket', 30), // 1일 15
      pass(40),
      pass(50),
    ];
    const e = estimateTrip(trip({ adults: 1, nights: 1, style: 'budget' }), city, rows);
    // 1일 환산 10·15·40·50 → 끝점 [10,10,15,15,40,40,50,50], 하위 0~50% = [10, 27.5], 2일
    close(e.categories.transport.total, 20, 55);
    expect(e.categories.transport).toMatchObject({ sampleCount: 4, independentCount: 3 });
  });

  it('이름이 같아도 출처가 다르면, 같은 출처라도 상품이 다르면 독립 표본이다', () => {
    const rows = [
      ...without(baseSamples(), 'transport'),
      variant('1일권', 'Day Pass', 10, { sourceUrl: 'https://a.example' }),
      variant('1일권', 'Day Pass', 12, { sourceUrl: 'https://b.example' }),
      variant('공항선 1일권', 'Airport Line Day Pass', 14, { sourceUrl: 'https://b.example' }),
    ];
    expect(estimateTrip(trip(), city, rows).categories.transport.independentCount).toBe(3);
  });
});

describe('교통 대체 방식은 이중 합산하지 않는다', () => {
  it('1일권과 1회권이 모두 충분해도 교통비는 둘 중 하나의 범위 안이며 합이 아니다', () => {
    const passOnly = estimateTrip(trip(), city, baseSamples()).categories.transport.total!;
    const rideOnlyRows = [...without(baseSamples(), 'transport'), ride(1), ride(2), ride(3)];
    const rideOnly = estimateTrip(trip(), city, rideOnlyRows).categories.transport.total!;
    const both = estimateTrip(trip(), city, [...baseSamples(), ride(1), ride(2), ride(3)]);
    const t = both.categories.transport.total!;
    expect(t.min).toBeCloseTo(Math.min(passOnly.min, rideOnly.min), 6);
    expect(t.max).toBeCloseTo(Math.max(passOnly.max, rideOnly.max), 6);
    expect(t.max).toBeLessThan(passOnly.max + rideOnly.max);
    expect(t.min).toBeLessThan(passOnly.min + rideOnly.min);
  });

  it('전체 합계에도 교통은 한 번만 들어간다', () => {
    const e = estimateTrip(trip(), city, [...baseSamples(), ride(1), ride(2), ride(3)]);
    const sum = (k: 'min' | 'max') =>
      e.categories.food.total![k] + e.categories.transport.total![k] + e.categories.attraction.total![k] + e.categories.souvenir.total![k];
    close(e.subtotal, sum('min'), sum('max'));
  });

  it('1회권 가격을 아무리 올려도 이용권 쪽 최솟값은 그대로다(대체 관계)', () => {
    const cheap = estimateTrip(trip(), city, [...baseSamples(), ride(1), ride(2), ride(3)]).categories.transport.total!;
    const dear = estimateTrip(trip(), city, [...baseSamples(), ride(100), ride(200), ride(300)]).categories.transport.total!;
    expect(dear.min).toBeCloseTo(100, 6); // 이용권 최솟값
    expect(cheap.max).toBeCloseTo(220, 6); // 이용권 최댓값
  });
});

describe('불확실성 줄이기 규칙', () => {
  it('케이블카·곤돌라 같은 관광 탑승은 1회권이 아니라 관광 입장권 바스켓으로 간다', () => {
    const cable = sample({ category: 'transport', subtype: '케이블카 1회권', unit: '성인 1인 1회', nameKo: '케이블카', nameEn: 'Cable Car One-Way', sourceUrl: 'https://cable.example', min: 7 });
    const rows = [...without(baseSamples(), 'transport'), ride(1), ride(2), cable];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.transport.sufficient).toBe(false); // 1회권은 2건만 남음
    expect(e.categories.attraction.independentCount).toBe(4);
    expect(e.warnings).toContainEqual({ category: 'attraction', code: 'sightseeingRide', ids: [cable.id] });
  });

  it('같은 출처·같은 명소의 관람 옵션(계단/엘리베이터/정상)은 독립 표본 1건이다', () => {
    const eiffel = (name: string, v: number) =>
      sample({ category: 'attraction', subtype: '랜드마크', unit: '성인 1인', sourceUrl: 'https://eiffel.example/rates', nameKo: name, nameEn: name, min: v });
    const rows = [...without(baseSamples(), 'attraction'), attr(100), eiffel('Eiffel Tower 2nd Floor by Stairs', 14.8), eiffel('Eiffel Tower 2nd Floor by Elevator', 23.5), eiffel('Eiffel Tower Summit by Elevator', 36.7)];
    const e = estimateTrip(trip(), city, rows);
    expect(e.categories.attraction).toMatchObject({ sufficient: false, independentCount: 2 });
  });

  it('공식 하루 상한(daily cap)이 있으면 1회권 하루 비용을 그 금액으로 자른다', () => {
    const cap = sample({ category: 'transport', subtype: '일일 상한', unit: '성인 1일', nameKo: '1·2존 일일 상한', nameEn: 'Zones 1-2 Daily Cap', sourceUrl: 'https://cap.example', min: 5 });
    const rows = [...without(baseSamples(), 'transport'), ride(1), ride(2), ride(3), cap];
    const e = estimateTrip(trip(), city, rows);
    // 1회권 [1.25, 2.75] × 하루 3회 = [3.75, 8.25] → 상한 5 로 잘림 → [3.75, 5] × 4일 × 2인
    close(e.categories.transport.total, 30, 40);
    expect(e.warnings).toContainEqual({ category: 'transport', code: 'dailyCapApplied', ids: [cap.id] });
  });

  it('하루 상한은 같은 대중교통 요금 체계에만 적용하고, 공유자전거 같은 별도 체계는 자르지 않는다', () => {
    const cap = sample({ category: 'transport', subtype: '일일 상한', unit: '성인 1일', nameEn: 'Zones 1-2 Daily Cap', sourceUrl: 'https://cap.example', min: 5 });
    const bike = sample({ category: 'transport', subtype: '공유자전거 1회권', unit: '성인 1인 1회(30분)', nameKo: '공유자전거 30분', nameEn: 'Bike Share 30-Minute Ride', sourceUrl: 'https://bike.example', min: 10 });
    const rows = [...without(baseSamples(), 'transport'), ride(1), ride(2), bike, cap];
    const e = estimateTrip(trip(), city, rows);
    // 대중교통 {1, 2}: 일반형 [1, 2] × 하루 3회 = [3, 6] → 상한 5 → [3, 5]
    // 공유자전거 {10}: [10, 10] × 3 = [30, 30] (상한 미적용)
    // 두 범위를 합침 [3, 30] × 4일 × 2인 = [24, 240]
    close(e.categories.transport.total, 24, 240);
    expect(e.categories.transport.independentCount).toBe(3);
    expect(e.warnings).toContainEqual({ category: 'transport', code: 'dailyCapApplied', ids: [cap.id] });
    expect(e.warnings).toContainEqual({ category: 'transport', code: 'capExempt', ids: [bike.id] });
  });

  it('상한보다 적게 쓰면 상한을 적용하지 않는다', () => {
    const cap = sample({ category: 'transport', subtype: '일일 상한', unit: '성인 1일', nameEn: 'Daily Cap', sourceUrl: 'https://cap.example', min: 100 });
    const e = estimateTrip(trip(), city, [...without(baseSamples(), 'transport'), ride(1), ride(2), ride(3), cap]);
    close(e.categories.transport.total, 30, 66);
    expect(e.warnings.some((w) => w.code === 'dailyCapApplied')).toBe(false);
  });

  it('세금·서비스료 별도 표기(450++)는 경고한다', () => {
    const plus = sample({ category: 'food', subtype: '프리미엄 한끼', unit: '1접시', note: '450++: 세금·서비스료 별도', min: 25 });
    const rows = [...without(baseSamples(), 'food'), meal(10), meal(20), plus];
    expect(estimateTrip(trip(), city, rows).warnings).toContainEqual({ category: 'food', code: 'taxExcluded', ids: [plus.id] });
  });
});

describe('데이터 부족 상태', () => {
  it('바스켓 표본이 3건 미만이면 그 항목을 부족으로 표시하고 합계를 만들지 않는다', () => {
    const rows = [...without(baseSamples(), 'food'), meal(10), meal(20)];
    const e = estimateTrip(trip(), city, rows);
    expect(e.missing).toEqual(['food']);
    expect(e.categories.food.total).toBeNull();
    expect(e.categories.food.sampleCount).toBe(2);
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

  it('충족률이 기준 미만이면 비용군마다 최소 표본이 있어도 계산을 보류한다', () => {
    const M = MODEL as unknown as { minSamplesPerCategory: number };
    M.minSamplesPerCategory = 2;
    try {
      // 최소 표본을 2건으로 낮춘 상황에서 비용군마다 2건 → 충족률 8/12 = 0.67 < 0.75
      const two = [pass(1), pass(2), meal(1), meal(2), attr(1), attr(2), gift(1), gift(2)];
      const e = estimateTrip(trip(), city, two);
      expect(e.missing).toEqual([]);
      expect(e.fillRate).toBeCloseTo(8 / 12, 6);
      expect(e.computable).toBe(false);
      expect(e.total).toBeNull();
      expect(e.warnings.some((w) => w.code === 'lowFillRate')).toBe(true);
    } finally {
      M.minSamplesPerCategory = 3;
    }
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

  it('곁들임(사이드) 메뉴는 어느 바스켓에도 넣지 않는다', () => {
    sameResult({ category: 'food', subtype: '사이드', min: 9999 });
    sameResult({ category: 'food', subtype: '사이드/간식', min: 9999 });
  });

  it('"○○ 미만" 상한 문구(최소 0·최대>0)는 관측 가격이 아니라 제외하지만, 0·0 무료 입장은 포함', () => {
    sameResult({ category: 'food', subtype: '저가 식사', min: 0, max: 9999 });
    const free = estimateTrip(trip(), city, [...baseSamples(), sample({ category: 'attraction', subtype: '박물관', min: 0 })]);
    expect(free.categories.attraction.sampleCount).toBe(4);
  });

  it('거주자 전용(EEA) 요금과 왕복·구간 교통 요금은 제외', () => {
    sameResult({ category: 'attraction', target: 'EEA', min: 9999 });
    sameResult({ category: 'transport', subtype: '관광 셔틀', unit: '1인 왕복', min: 9999 });
  });

  it('모델사용=예 표본이 충분하면 조건부 표본은 쓰지 않고, 부족하면 조건부까지 쓰며 경고한다', () => {
    sameResult({ category: 'food', subtype: '중가 한끼', min: 9999, modelUse: 'conditional' });
    const rows = [
      ...without(baseSamples(), 'food'),
      meal(10),
      meal(20),
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
      ...without(baseSamples(), 'transport'),
      pass(10),
      sample({ category: 'transport', subtype: '무제한권', unit: '성인 1인', nameKo: 'A선 48시간권', nameEn: 'Line A 48-hour', sourceUrl: 'https://a.example', min: 30 }),
      sample({ category: 'transport', subtype: '무제한권', unit: '성인 1인', nameKo: 'B선 72시간권', nameEn: 'Line B 72-hour', sourceUrl: 'https://b.example', min: 60 }),
    ];
    const e = estimateTrip(trip({ adults: 1, style: 'budget' }), city, rows);
    // 1일 환산 10·15·20 → 예산형 하위 0~50% = [10, 15], 4일
    close(e.categories.transport.total, 10 * 4, 15 * 4);
  });
});

describe('어린이', () => {
  it('어린이 표본이 있으면 어린이 가격을, 없으면 성인 가격을 쓰고 경고한다', () => {
    const withChild = [...baseSamples(), sample({ category: 'transport', subtype: '아동권', unit: '아동 1일', target: '아동', min: 5 })];
    const a = estimateTrip(trip({ adults: 1, children: 1 }), city, withChild);
    close(a.categories.transport.total, (12.5 + 5) * 4, (27.5 + 5) * 4);
    expect(a.categories.transport.childSampleCount).toBe(1);
    expect(a.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'transport')).toBe(false);

    const b = estimateTrip(trip({ adults: 1, children: 1 }), city, baseSamples());
    close(b.categories.transport.total, 2 * 12.5 * 4, 2 * 27.5 * 4);
    expect(b.warnings.some((w) => w.code === 'childAsAdult' && w.category === 'transport')).toBe(true);
  });

  it('기념품은 성인만 구매하는 것으로 가정', () => {
    const e = estimateTrip(trip({ adults: 1, children: 3 }), city, baseSamples());
    close(e.categories.souvenir.total, 3 * 7.5, 3 * 22.5);
  });
});

describe('방문일 반영(날짜에 따라 달라지는 항목만)', () => {
  const dayPass = (name: string, nameEn: string, v: number) =>
    sample({ category: 'transport', subtype: '무제한권', unit: '성인 1일', priceType: '요일형', nameKo: name, nameEn, min: v });
  const rows = () => [
    ...without(baseSamples(), 'transport'),
    dayPass('1일권 평일', 'Pass Weekday', 10),
    dayPass('1일권 주말·공휴일', 'Pass Weekend/Holiday', 6),
    pass(20),
    pass(30),
  ];

  it('요일형은 방문 날짜의 요일에 맞는 요금만 쓴다', () => {
    // 2026-11-04 수 · 05 목 · 06 금 · 07 토. 평일 풀 {10, 20, 30} → 예산형 [10, 20], 주말 풀 {6, 20, 30} → [6, 20]
    const e = estimateTrip(trip({ adults: 1, style: 'budget' }), city, rows());
    close(e.categories.transport.total, 3 * 10 + 6, 3 * 20 + 20);
    // 평일·주말 요금은 같은 상품이라 독립 표본 1건 + 다른 이용권 2건 = 3건
    expect(e.categories.transport.independentCount).toBe(3);
    expect(e.warnings.some((w) => w.code === 'dateResolved' && w.category === 'transport')).toBe(true);
  });

  it('유효 기간 밖 표본은 그날 계산에서 빠지고, 전부 빠지면 부족으로 처리', () => {
    const seasonal = [
      ...without(baseSamples(), 'food'),
      ...[10, 20, 30].map((v) => sample({ category: 'food', subtype: '중가 한끼', min: v, validFrom: '2027-01-01' })),
    ];
    expect(estimateTrip(trip(), city, seasonal).categories.food.sufficient).toBe(false);
    expect(estimateTrip(trip({ visitDate: '2027-02-01' }), city, seasonal).categories.food.sufficient).toBe(true);
  });

  it('방문일에 유효한 독립 표본이 최소 기준 미만이 되면 부족으로 처리하고 이유를 알린다', () => {
    const rows = [
      ...without(baseSamples(), 'food'),
      meal(10),
      meal(20),
      sample({ category: 'food', subtype: '중가 한끼', min: 30, validFrom: '2026-10-01', validTo: '2027-06-30' }),
    ];
    expect(estimateTrip(trip({ visitDate: '2026-11-04' }), city, rows).categories.food.sufficient).toBe(true);
    const after = estimateTrip(trip({ visitDate: '2027-08-01' }), city, rows);
    expect(after.categories.food.sufficient).toBe(false);
    expect(after.warnings.filter((w) => w.category === 'food').map((w) => w.code)).toEqual(['insufficient', 'dateExcluded']);
  });

  it('요일/기간형처럼 날짜별 금액을 고를 수 없는 범위 가격은 범위를 그대로 쓰고 변동 경고를 낸다', () => {
    const arc = sample({ category: 'attraction', subtype: '랜드마크', priceType: '요일/기간형', unit: '성인 1인 1회', nameEn: 'Arc Ticket', sourceUrl: 'https://arc.example', min: 16, max: 22 });
    const e = estimateTrip(trip(), city, [...baseSamples(), arc]);
    expect(e.warnings).toContainEqual({ category: 'attraction', code: 'variablePricing', ids: [arc.id] });
    // 평일/주말 변형으로 해결되는 요일형은 변동 경고 대상이 아니다
    const wk = sample({ category: 'transport', subtype: '무제한권', unit: '성인 1일', priceType: '요일형', nameKo: '1일권 평일', nameEn: 'Pass Weekday', min: 9 });
    const e2 = estimateTrip(trip(), city, [...baseSamples(), wk]);
    expect(e2.warnings.some((w) => w.code === 'variablePricing' && w.category === 'transport')).toBe(false);
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
    expect(e.categories.transport.sampleCount).toBe(3);
    expect(e.categories.transport.sources.map((s) => s.name).sort()).toEqual(['Other', 'Test']);
    expect(e.categories.transport.checkedFrom).toBe('2026-09-01');
    expect(e.categories.transport.checkedTo).toBe('2026-10-02');
  });
});
