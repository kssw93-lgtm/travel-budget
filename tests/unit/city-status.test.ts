import { describe, expect, it } from 'vitest';
import { cityStatus } from '../../src/core/estimate';
import { cities, cityStatusFile, samples } from '../../src/data';

/**
 * 8개 파일럿 도시의 현재 데이터 상태 고정 테스트.
 * 새 조사 엑셀로 `npm run data:convert` 를 실행하면 status.json 이 자동으로 다시 계산되고,
 * 상태가 달라졌다면 아래 고정값과 달라 실패한다 → 변화를 확인한 뒤 `npm run status:update` 로 갱신.
 */
describe('파일럿 도시 데이터 상태', () => {
  it('status.json 은 현재 가격 표본으로 다시 계산한 판정과 같다(변환 누락 방지)', () => {
    const live = Object.fromEntries(cities.map((c) => [c.id, cityStatus(c, samples)]));
    expect(cityStatusFile).toEqual(live);
  });

  it('8개 도시의 현재 부족 상태(독립 표본 수 외식/교통/관광/기념품 · 충족률 · 판정)', () => {
    const table = Object.fromEntries(
      cities.map((c) => {
        const s = cityStatusFile[c.id]!;
        const n = s.counts;
        const verdict = s.computable ? 'ready' : `hold: ${s.missing.join(', ')}`;
        return [c.id, `${n.food}/${n.transport}/${n.attraction}/${n.souvenir} · ${Math.round(s.fillRate * 100)}% · ${verdict}`];
      }),
    );
    expect(table).toMatchInlineSnapshot(`
      {
        "bangkok": "3/3/3/3 · 100% · ready",
        "da-nang": "3/3/3/3 · 100% · ready",
        "london": "3/3/3/3 · 100% · ready",
        "osaka": "3/3/3/3 · 100% · ready",
        "paris": "3/3/4/3 · 100% · ready",
        "singapore": "3/3/3/3 · 100% · ready",
        "taipei": "3/3/3/3 · 100% · ready",
        "tokyo": "3/3/3/3 · 100% · ready",
      }
    `);
  });

  it('바스켓별 독립 표본·가격 행 수(용량·기간 변형이 독립 표본으로 부풀지 않았는지)', () => {
    const table = Object.fromEntries(
      cities.map((c) => {
        const s = cityStatusFile[c.id]!;
        const cell = (b: keyof typeof s.baskets) => `${b} ${s.baskets[b]}/${s.basketRows[b]}`;
        return [c.id, (['pass', 'ride', 'meal', 'snack', 'attraction', 'souvenir'] as const).map(cell).join(' · ')];
      }),
    );
    expect(table).toMatchInlineSnapshot(`
      {
        "bangkok": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/3",
        "da-nang": "pass 0/0 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/3",
        "london": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/3",
        "osaka": "pass 1/2 · ride 3/3 · meal 3/3 · snack 1/1 · attraction 3/3 · souvenir 3/4",
        "paris": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 4/4 · souvenir 3/3",
        "singapore": "pass 1/1 · ride 3/3 · meal 3/3 · snack 2/2 · attraction 3/3 · souvenir 3/3",
        "taipei": "pass 1/3 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/4",
        "tokyo": "pass 1/3 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/4",
      }
    `);
  });
});
