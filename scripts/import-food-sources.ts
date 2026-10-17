/**
 * GPT 결과 「GPT전달내용/결과/음식출처_*.csv」(키, 판정, 출처명, 출처URL, 확인일)를 data/overlays/food-sources.json 에 합친다.
 * 판정이 「확인」이고 https 주소인 것만 받는다. 실행: npx tsx scripts/import-food-sources.ts && npm run data:convert
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const dir = `${root}GPT전달내용/결과/`;
const out = `${root}data/overlays/food-sources.json`;

export function parseCsv(s: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let f = '';
  let q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i]!;
    if (q) {
      if (c === '"' && s[i + 1] === '"') {
        f += '"';
        i++;
      } else if (c === '"') q = false;
      else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') {
      row.push(f);
      f = '';
    } else if (c === '\n') {
      row.push(f);
      rows.push(row);
      row = [];
      f = '';
    } else if (c !== '\r') f += c;
  }
  if (f || row.length) rows.push([...row, f]);
  return rows;
}

if (process.argv[1]?.endsWith('import-food-sources.ts')) main();

function main(): void {
  const merged = JSON.parse(readFileSync(out, 'utf8')) as Record<string, { name: string; url: string; checkedAt: string }>;
  let added = 0;
  for (const file of readdirSync(dir)
    .filter((n) => /^음식출처_.*\.csv$/.test(n))
    .sort()) {
    for (const [key, verdict, name, urls, date] of parseCsv(readFileSync(dir + file, 'utf8').replace(/^\uFEFF/, '')).slice(1)) {
      const url = (urls ?? '')
        .split(';')
        .map((u) => u.trim())
        .find((u) => u.startsWith('https://'));
      if (!key || verdict !== '확인' || !url) continue;
      if (!merged[key]) added++;
      merged[key] = { name: name ?? '', url, checkedAt: date ?? '' };
    }
  }
  writeFileSync(out, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`음식 출처 ${added}건 추가, 전체 ${Object.keys(merged).length}건`);
}
