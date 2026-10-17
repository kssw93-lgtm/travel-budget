import { describe, expect, it } from 'vitest';
import { allCities, cities } from '../../src/data';
import { CHRISTMAS_MARKETS } from '../../src/data/christmas-markets';
import { CITY_INTROS } from '../../src/data/city-intros';
import { CITY_SEASONS } from '../../src/data/city-seasons';
import { CITY_WHEN } from '../../src/data/city-when';
import { WHEN_SOURCES } from '../../src/data/city-when-sources';
import { CITY_GUIDES } from '../../src/data/city-guides';
import { GUIDE_SOURCES } from '../../src/data/city-guide-sources';
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
        expect(line[3], country).toMatch(/^https:\/\//);
        expect(line.slice(0, 3).join(' '), country).not.toMatch(/[$€£¥₩]\s?\d|\d\s?(원|円|달러|유로)/);
      }
    }
  });

  it('공개된 모든 도시에 여행하기 좋은 시기 안내가 있다', () => {
    for (const c of cities) {
      const s = CITY_SEASONS[c.id];
      expect(s, c.id).toBeDefined();
      expect(s!.slice(0, 3).every((x) => !!x && x.length > 10), c.id).toBe(true);
      expect(s![3], c.id).toMatch(/^https:\/\//);
    }
  });

  it('공개된 모든 도시에 「언제 가면 좋을까」 추천 시기와 이유가 있고, 금액은 쓰지 않는다', () => {
    for (const c of cities) {
      const w = CITY_WHEN[c.id];
      expect(w, c.id).toBeDefined();
      expect(w!.p.length, c.id).toBeGreaterThan(0);
      for (const p of w!.p) expect(p.every((x) => x.length > 0), c.id).toBe(true);
      if (w!.x) expect(w!.x.every((x) => x.length > 0), c.id).toBe(true);
      const all = [...w!.p.flat(), ...(w!.x ?? [])].join(' ');
      expect(all, c.id).not.toMatch(/[$€£¥₩]\s?\d|\d\s?(원|円|달러|유로)/);
    }
    for (const id of Object.keys(CITY_WHEN)) expect(allCities.some((c) => c.id === id), id).toBe(true);
    for (const [key, url] of Object.entries(WHEN_SOURCES)) {
      const [id, ref] = key.split(':') as [string, string];
      const w = CITY_WHEN[id];
      expect(w, key).toBeDefined();
      expect(ref === 'x' ? !!w!.x : Number(ref.slice(1)) >= 1 && Number(ref.slice(1)) <= w!.p.length, key).toBe(true);
      expect(url, key).toMatch(/^https:\/\//);
    }
  });

  it('볼거리·팁 근거 URL 은 실제 있는 항목을 가리키는 https 주소다', () => {
    for (const [key, url] of Object.entries(GUIDE_SOURCES)) {
      const [id, ref] = key.split(':') as [string, string];
      const n = Number(ref.slice(1));
      const note = CITY_GUIDES[id];
      expect(note, key).toBeDefined();
      expect(n >= 1 && n <= (ref[0] === 'h' ? note!.highlights.length : note!.tips.length), key).toBe(true);
      expect(url, key).toMatch(/^https:\/\//);
    }
  });

  it('공개된 모든 도시에 소개·추천 기간·숙소 동네가 있다', () => {
    for (const c of cities) {
      const i = CITY_INTROS[c.id];
      expect(i, c.id).toBeDefined();
      expect(i!.o.every((x) => x.length > 30), c.id).toBe(true);
      expect(i!.d[0] >= 1 && i!.d[0] <= i!.d[1], c.id).toBe(true);
      expect(i!.s.length, c.id).toBeGreaterThan(0);
      expect(i!.o.join(' '), c.id).not.toMatch(/[$€£¥₩]\s?\d|\d\s?(원|円|달러|유로)/);
    }
  });

  it('크리스마스 마켓 안내는 등록된 도시에만 있고, 공식 안내 주소와 세 언어 문장을 갖춘다', () => {
    for (const [id, m] of Object.entries(CHRISTMAS_MARKETS)) {
      expect(allCities.some((c) => c.id === id), id).toBe(true);
      expect(m.url, id).toMatch(/^https:\/\//);
      for (const x of [m.name, m.place, m.period, m.note]) expect(x.every((v) => v.length > 0), id).toBe(true);
      expect([...m.note, ...m.period].join(' '), id).not.toMatch(/[$€£¥₩]\s?\d|\d\s?(원|円|달러|유로)/);
    }
  });
});
