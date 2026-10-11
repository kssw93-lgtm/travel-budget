/**
 * 같은 나라 도시끼리 기본 물가(식사·간식·주류·시내 교통 1회)를 비교한다.
 * 계산은 도시 자체 가격이 모자랄 때만 같은 나라 가격을 빌리는데, 그 전제(나라 안 물가 차이가 크지 않음)가 맞는지 확인하는 표다.
 * 도시 중앙값이 나라 안 다른 도시 중앙값과 30% 넘게 다르면 "차이 큼"으로 표시해 그 도시를 따로 조사하게 한다.
 * 실행: npx tsx scripts/compare-country.ts → data/country-compare.md
 */
import { writeFileSync } from 'node:fs';
import { classify } from '../src/core/classify';
import { COUNTRY_SHARED } from '../src/core/city-rows';
import { endpoints, quantile, selectUsable } from '../src/core/pool';
import type { Basket, PriceSample } from '../src/core/types';
import { cities, samples } from '../src/data';

const LABEL: Record<string, string> = { meal: '식사 1끼', snack: '간식·음료', drink: '주류', ride: '교통 1회' };
const THRESHOLD = 0.3;

function median(rows: PriceSample[], basket: Basket): { median: number; n: number } | null {
  const pool = selectUsable(rows.map(classify).filter((r) => r.basket === basket && r.audience === 'adult'));
  if (pool.length === 0) return null;
  return { median: quantile(endpoints(pool, basket), 0.5), n: pool.length };
}

const lines: string[] = [
  '# 나라 안 도시별 기본 물가 비교',
  '',
  '`npx tsx scripts/compare-country.ts` 로 다시 만든다. 공식 가격 중앙값(성인) 비교.',
  `도시 값이 같은 나라 다른 도시 값과 ${THRESHOLD * 100}% 넘게 다르면 **차이 큼**. 표본이 적으면(n<3) 참고만.`,
  '도시 값이 비어 있으면 계산 때 같은 나라 가격을 빌려 쓴다.',
  '',
];
const flagged: string[] = [];
const countries = [...new Set(cities.map((c) => c.country))];
for (const country of countries) {
  const group = cities.filter((c) => c.country === country);
  if (group.length < 2) continue;
  lines.push(`## ${country} (${group[0]?.currency})`, '', '| 도시 | 공개 | ' + COUNTRY_SHARED.map((b) => LABEL[b]).join(' | ') + ' |', '|---|---|' + COUNTRY_SHARED.map(() => '---').join('|') + '|');
  for (const city of group) {
    const own = samples.filter((s) => s.cityId === city.id);
    const others = samples.filter((s) => s.country === country && s.cityId !== city.id);
    const cells = COUNTRY_SHARED.map((b) => {
      const m = median(own, b);
      const o = median(others, b);
      if (!m) return '—';
      const val = `${Math.round(m.median).toLocaleString('en-US')} (n${m.n})`;
      if (!o) return val;
      const diff = m.median / o.median - 1;
      const pct = `${diff >= 0 ? '+' : ''}${Math.round(diff * 100)}%`;
      if (Math.abs(diff) > THRESHOLD && m.n >= 3) {
        flagged.push(`${city.nameKo} ${LABEL[b]} ${pct}`);
        return `${val} **${pct} 차이 큼**`;
      }
      return `${val} ${pct}`;
    });
    lines.push(`| ${city.nameKo} | ${city.stage === '파일럿' ? '공개' : '숨김'} | ${cells.join(' | ')} |`);
  }
  lines.push('');
}
lines.splice(6, 0, '## 차이 큰 곳', '', ...(flagged.length ? flagged.map((f) => `- ${f}`) : ['- 없음']), '');
writeFileSync('data/country-compare.md', lines.join('\n'));
console.log(`data/country-compare.md 저장 (차이 큼 ${flagged.length}건)`);
