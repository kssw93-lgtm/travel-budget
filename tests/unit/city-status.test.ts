import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { classify } from '../../src/core/classify';
import { cityStatus, estimateTrip } from '../../src/core/estimate';
import { cities, cityById, cityStatusFile, samples } from '../../src/data';

/**
 * 파일럿 도시의 현재 데이터 상태 고정 테스트.
 * 새 조사 엑셀로 `npm run data:convert` 를 실행하면 status.json 이 자동으로 다시 계산되고,
 * 상태가 달라졌다면 아래 고정값과 달라 실패한다 → 변화를 확인한 뒤 `npm run status:update` 로 갱신.
 */
describe('파일럿 도시 데이터 상태', () => {
  it('status.json 은 현재 가격 표본으로 다시 계산한 판정과 같다(변환 누락 방지)', () => {
    const live = Object.fromEntries(cities.map((c) => [c.id, cityStatus(c, samples)]));
    expect(cityStatusFile).toEqual(live);
  });

  it('파일럿 도시의 현재 부족 상태(독립 표본 수 외식/교통/관광/기념품 · 충족률 · 판정)', () => {
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
        "bangkok": "3/3/3/4 · 100% · ready",
        "barcelona": "5/3/4/3 · 100% · ready",
        "busan": "5/3/7/3 · 100% · ready",
        "da-nang": "5/3/3/3 · 100% · ready",
        "istanbul": "5/3/6/3 · 100% · ready",
        "jeju": "5/3/4/3 · 100% · ready",
        "london": "3/3/4/3 · 100% · ready",
        "new-york": "3/4/5/3 · 100% · ready",
        "osaka": "5/3/3/3 · 100% · ready",
        "paris": "3/3/3/4 · 100% · ready",
        "rome": "5/3/4/3 · 100% · ready",
        "seoul": "5/3/7/6 · 100% · ready",
        "shanghai": "3/3/5/3 · 100% · ready",
        "singapore": "6/3/3/4 · 100% · ready",
        "taipei": "3/3/4/3 · 100% · ready",
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
        "bangkok": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 4/4",
        "barcelona": "pass 1/1 · ride 3/3 · meal 5/5 · snack 5/5 · attraction 4/5 · souvenir 3/3",
        "busan": "pass 1/1 · ride 3/4 · meal 5/5 · snack 3/3 · attraction 7/7 · souvenir 3/3",
        "da-nang": "pass 0/0 · ride 3/3 · meal 5/5 · snack 1/1 · attraction 3/4 · souvenir 3/3",
        "istanbul": "pass 0/0 · ride 3/3 · meal 5/5 · snack 3/3 · attraction 6/6 · souvenir 3/3",
        "jeju": "pass 0/0 · ride 3/3 · meal 5/5 · snack 3/3 · attraction 4/4 · souvenir 3/3",
        "london": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 4/4 · souvenir 3/3",
        "new-york": "pass 0/0 · ride 4/4 · meal 3/3 · snack 1/1 · attraction 5/6 · souvenir 3/3",
        "osaka": "pass 1/2 · ride 3/3 · meal 5/5 · snack 1/1 · attraction 3/3 · souvenir 3/4",
        "paris": "pass 1/1 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/5 · souvenir 4/4",
        "rome": "pass 1/3 · ride 3/3 · meal 5/5 · snack 3/3 · attraction 4/4 · souvenir 3/3",
        "seoul": "pass 1/1 · ride 3/3 · meal 5/5 · snack 0/0 · attraction 7/7 · souvenir 6/6",
        "shanghai": "pass 0/0 · ride 3/3 · meal 3/3 · snack 3/3 · attraction 5/5 · souvenir 3/3",
        "singapore": "pass 1/1 · ride 3/3 · meal 6/6 · snack 1/1 · attraction 3/3 · souvenir 4/4",
        "taipei": "pass 1/3 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 4/4 · souvenir 3/4",
        "tokyo": "pass 1/3 · ride 3/3 · meal 3/3 · snack 0/0 · attraction 3/3 · souvenir 3/4",
      }
    `);
  });
});

describe('v0.3 신규 공식 표본이 실제 분류 규칙으로 부족 항목을 채웠는지', () => {
  const byId = (id: string) => classify(samples.find((s) => s.id === id)!);

  it('신규 4건은 예상한 바스켓에 들어간다(규칙 완화 없이)', () => {
    expect(byId('DAD-AT-004')).toMatchObject({ usable: true, basket: 'attraction' });
    expect(byId('PAR-AT-006')).toMatchObject({ usable: true, basket: 'attraction' });
    expect(byId('TPE-TR-007')).toMatchObject({ usable: true, basket: 'ride' });
    expect(byId('LON-TR-005')).toMatchObject({ usable: true, basket: 'ride' });
  });

  it('관광 탑승 분리·같은 명소 옵션 묶기 규칙은 그대로 적용된다', () => {
    expect(byId('LON-TR-004').basket).toBe('attraction'); // 케이블카
    expect(byId('TPE-TR-006').basket).toBe('attraction'); // 곤돌라
    const eiffel = ['PAR-AT-001', 'PAR-AT-002', 'PAR-AT-003'].map((id) => byId(id).productKey);
    expect(new Set(eiffel).size).toBe(1);
    expect(byId('DAD-AT-002').productKey).toBe(byId('DAD-AT-003').productKey); // 오행산 입장권·엘리베이터
  });

  it('다낭 관광·파리 관광·타이베이 교통·런던 교통이 독립 표본 3건으로 계산 가능', () => {
    expect(cityStatusFile['da-nang']!.baskets.attraction).toBe(3);
    expect(cityStatusFile.paris!.baskets.attraction).toBe(3);
    expect(cityStatusFile.taipei!.baskets.ride).toBe(3);
    expect(cityStatusFile.london!.baskets.ride).toBe(3);
    // 판정 자체는 다른 바스켓(v0.4 에서 보류된 식사·기념품)에 따라 달라지므로 상태 파일 스냅숏이 고정한다
    expect(cityStatusFile.london!.computable).toBe(true);
  });

  it('파리 개선문은 €16–22 범위를 유지하고 변동 가격으로 경고된다', () => {
    const arc = samples.find((s) => s.id === 'PAR-AT-006')!;
    expect([arc.min, arc.max, arc.currency]).toEqual([16, 22, 'EUR']);
    const e = estimateTrip({ cityId: 'paris', visitDate: '2026-11-04', nights: 3, adults: 2, children: 0, style: 'standard', attractionIds: ['PAR-AT-006'] }, cityById('paris')!, samples);
    expect(e.warnings.find((w) => w.code === 'variablePricing' && w.category === 'attraction')?.ids).toContain('PAR-AT-006');
  });
});

describe('검수 지적 사항', () => {
  const london = () => cityById('london')!;
  const run = (cityId: string, visitDate: string, attractionIds: string[] = []) =>
    estimateTrip({ cityId, visitDate, nights: 3, adults: 1, children: 0, style: 'standard', attractionIds }, cityById(cityId)!, samples);

  it('런던 Santander Cycles(LON-TR-005)는 TfL 버스·지하철 일일 상한에 잘리지 않는다', () => {
    expect(classify(samples.find((s) => s.id === 'LON-TR-005')!)).toMatchObject({ basket: 'ride', capExempt: true });
    expect(classify(samples.find((s) => s.id === 'LON-TR-002')!).capExempt).toBe(false);
    expect(classify(samples.find((s) => s.id === 'LON-TR-003')!).capExempt).toBe(false);
    expect(classify(samples.find((s) => s.id === 'LON-TR-001')!).dailyCap).toBe(true);
    const e = estimateTrip({ cityId: 'london', visitDate: '2026-11-04', nights: 3, adults: 1, children: 0, style: 'comfort' }, london(), samples);
    expect(e.warnings.find((w) => w.code === 'capExempt')?.ids).toEqual(['LON-TR-005']);
    // 여유형 하루 4회: 대중교통은 상한 £8.9 에 잘리고, 자전거 4회(£6.6)는 그대로 → 1인 하루 상한은 £8.9 를 넘지 않음
    const perDay = e.categories.transport.total!.max / 4;
    expect(perDay).toBeLessThanOrEqual(8.9 + 1e-9);
    expect(e.warnings.find((w) => w.code === 'dailyCapApplied')?.ids).toEqual(['LON-TR-001']);
  });

  it('파리 개선문(PAR-AT-006) 월·요일 규칙은 자동 적용하지 않는다 — 방문일과 무관하게 €16–22 범위와 변동 경고', () => {
    // 4~9월 수요일 / 4~9월 목요일 / 11월: 규칙을 적용했다면 서로 달라야 하지만, 범위만 쓰므로 같아야 한다
    const julWed = run('paris', '2026-07-01', ['PAR-AT-006']);
    const julThu = run('paris', '2026-07-02', ['PAR-AT-006']);
    const nov = run('paris', '2026-11-05', ['PAR-AT-006']);
    expect(julWed.categories.attraction.total).toEqual(julThu.categories.attraction.total);
    expect(julWed.categories.attraction.total).toEqual(nov.categories.attraction.total);
    for (const e of [julWed, julThu, nov]) {
      expect(e.warnings.find((w) => w.code === 'variablePricing' && w.category === 'attraction')?.ids).toContain('PAR-AT-006');
      expect(e.warnings.some((w) => w.code === 'dateResolved' && w.ids?.includes('PAR-AT-006'))).toBe(false);
    }
  });

  it('변환기는 조사표의 요약 시트("도시 초안"·"다음 조사 큐")를 읽지 않는다', () => {
    const src = readFileSync('scripts/convert-xlsx.ts', 'utf8');
    expect(src).not.toMatch(/readTable\(wb, '(도시 초안|다음 조사 큐)'/);
  });

  it('다낭 참조각박물관(DAD-AT-004)은 원문 미확인 → 가격은 그대로, 재검증 경고·조사 요청 목록에 표시', () => {
    const s = samples.find((x) => x.id === 'DAD-AT-004')!;
    expect([s.min, s.max, s.review?.flag]).toEqual([60000, 60000, '원문 미확인']);
    const e = run('da-nang', '2026-11-04', ['DAD-AT-004']);
    expect(e.warnings.find((w) => w.code === 'revalidation' && w.category === 'attraction')?.ids).toContain('DAD-AT-004');
    expect(readFileSync('data/research-queue.md', 'utf8')).toMatch(/DAD-AT-004 .*검수: 원문 미확인/);
  });

  it('다낭 기념품은 조사표의 "다음 조사 큐"(0건)가 아니라 가격 원장으로 계산한다', () => {
    const dad = cityStatusFile['da-nang']!;
    expect(dad.baskets.souvenir).toBe(3);
    expect(cityStatus(cityById('da-nang')!, samples).baskets.souvenir).toBe(3);
  });
});
