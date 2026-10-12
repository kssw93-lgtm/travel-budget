import { describe, expect, it } from 'vitest';
import { cityRows } from '../../src/core/city-rows';
import { cities, samples } from '../../src/data';

const city = (id: string) => {
  const c = cities.find((x) => x.id === id);
  if (!c) throw new Error(id);
  return c;
};

describe('같은 나라 가격 빌려 쓰기', () => {
  it('도시 자체 식사 가격이 충분하면 빌리지 않는다', () => {
    const { rows, borrowed } = cityRows(city('tokyo'), samples);
    expect(borrowed).not.toContain('meal');
    expect(rows.filter((r) => r.basket === 'meal').every((r) => r.sample.cityId === 'tokyo')).toBe(true);
  });

  it('모자란 바스켓만 같은 나라 다른 도시 가격을 빌린다(다른 나라·이용권·관광지는 빌리지 않음)', () => {
    const c = city('nagoya');
    const { rows, borrowed } = cityRows(c, samples);
    const extra = rows.filter((r) => r.sample.cityId !== c.id);
    for (const r of extra) {
      expect(r.sample.country).toBe(c.country);
      expect(borrowed).toContain(r.basket);
      expect(['pass', 'attraction', 'souvenir']).not.toContain(r.basket);
    }
  });

  it('교통은 도시 자체 요금이 하나라도 있으면 빌리지 않는다', () => {
    for (const c of cities) {
      const own = samples.filter((s) => s.cityId === c.id && s.category === 'transport');
      if (own.length > 0) expect(cityRows(c, samples).borrowed).not.toContain('ride');
    }
  });
});

describe('메뉴 가격에 세금·팁이 빠지는 도시', () => {
  it('뉴욕 식비는 세금·팁을 더해 결제 기준으로 계산하고 안내한다', async () => {
    const { estimateTrip } = await import('../../src/core/estimate');
    const { MENU_SURCHARGE } = await import('../../src/core/model-config');
    const c = city('new-york');
    const input = { cityId: c.id, visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard' as const };
    const withSur = estimateTrip(input, c, samples);
    const saved = MENU_SURCHARGE['new-york'];
    delete MENU_SURCHARGE['new-york'];
    try {
      const plain = estimateTrip(input, c, samples);
      expect(withSur.categories.food.total!.min).toBeGreaterThan(plain.categories.food.total!.min);
      expect(plain.warnings.some((w) => w.code === 'menuSurcharge')).toBe(false);
    } finally {
      MENU_SURCHARGE['new-york'] = saved!;
    }
    expect(withSur.warnings.some((w) => w.code === 'menuSurcharge')).toBe(true);
  });
});
