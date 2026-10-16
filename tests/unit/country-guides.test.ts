import { describe, expect, it } from 'vitest';
import { cities } from '../../src/data';
import { CITY_SEASONS } from '../../src/data/city-seasons';
import { COUNTRY_GUIDES } from '../../src/data/country-guides';

describe('나라별 알아둘 것·조심할 것', () => {
  it('공개된 모든 나라에 팁과 주의사항이 있고, 금액은 쓰지 않는다', () => {
    for (const country of new Set(cities.map((c) => c.countryEn))) {
      const note = COUNTRY_GUIDES[country];
      expect(note, country).toBeDefined();
      expect(note!.tips.length, country).toBeGreaterThan(0);
      expect(note!.cautions.length, country).toBeGreaterThan(0);
      for (const line of [...note!.tips, ...note!.cautions]) {
        expect(line.slice(0, 3).every((t) => !!t && t.length > 0), country).toBe(true);
        if (line[3]) expect(line[3], country).toMatch(/^https:\/\//);
        expect(line.slice(0, 3).join(' '), country).not.toMatch(/[$€£¥₩]\s?\d|\d\s?(원|円|달러|유로)/);
      }
    }
  });

  it('공개된 모든 도시에 여행하기 좋은 시기 안내가 있다', () => {
    for (const c of cities) {
      const s = CITY_SEASONS[c.id];
      expect(s, c.id).toBeDefined();
      expect(s!.every((x) => x.length > 10), c.id).toBe(true);
    }
  });
});
