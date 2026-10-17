/**
 * GPT 할 일 AA 결과 「GPT전달내용/결과/근거보강_*.csv」(키,판정,수정_ko,수정_en,수정_ja,근거URL,근거종류,메모)에서
 * 판정이 「확인」·「수정」인 줄의 근거 URL 을 src/data/city-guide-sources.ts(h·t)·city-when-sources.ts(p·x)에 합친다.
 * 「수정」·「삭제」 줄은 문장을 직접 고쳐야 하므로 목록만 출력한다(데이터 파일의 문장은 사람이 확인하고 고친다).
 * 실행: npx tsx scripts/import-guide-sources.ts
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { GUIDE_SOURCES } from '../src/data/city-guide-sources';
import { WHEN_SOURCES } from '../src/data/city-when-sources';
import { parseCsv } from './import-food-sources';

const root = new URL('..', import.meta.url).pathname;
const dir = `${root}GPT전달내용/결과/`;

function writeMap(file: string, header: string[], name: string, map: Record<string, string>): void {
  const body = Object.keys(map)
    .sort()
    .map((k) => `  '${k}': '${map[k]!.replace(/'/g, '%27')}',`);
  writeFileSync(`${root}src/data/${file}`, [...header, `export const ${name}: Record<string, string> = {`, ...body, '};', ''].join('\n'));
}

const guide = { ...GUIDE_SOURCES };
const when = { ...WHEN_SOURCES };
let added = 0;
for (const name of readdirSync(dir)
  .filter((n) => /^근거보강_.*\.csv$/.test(n))
  .sort()) {
  for (const [key, verdict, ko, en, ja, urls, kind, memo] of parseCsv(readFileSync(dir + name, 'utf8').replace(/^\uFEFF/, '')).slice(1)) {
    const m = /^([a-z0-9-]+):([htp]\d+|x)$/.exec(key ?? '');
    if (!m) continue;
    if (verdict === '수정' || verdict === '삭제') console.log(`${verdict} ${key} | ${ko ?? ''} | ${en ?? ''} | ${ja ?? ''} | ${memo ?? ''}`);
    if (verdict !== '확인' && verdict !== '수정') continue;
    const url = (urls ?? '')
      .split(';')
      .map((u) => u.trim())
      .find((u) => u.startsWith('https://'));
    if (!url) continue;
    const target = /^[ht]/.test(m[2]!) ? guide : when;
    if (!target[key!]) added++;
    target[key!] = url;
    void kind;
  }
}
writeMap(
  'city-guide-sources.ts',
  [
    '/**',
    ' * 도시 가이드 볼거리(h)·팁(t) 항목별 근거 URL. 키는 「도시id:h1」(1부터). GPT 검증(2026-10-18·19, 할 일 V·AA)에서 확인된 항목만.',
    ' * 금액 근거가 아니라 장소·사실 확인용이다. 항목 순서를 바꾸면 이 키도 함께 고친다. scripts/import-guide-sources.ts 로 합친다.',
    ' */',
  ],
  'GUIDE_SOURCES',
  guide,
);
writeMap(
  'city-when-sources.ts',
  [
    '/**',
    ' * 「언제 가면 좋을까」 항목별 근거 URL. 키는 「도시id:p1」(추천 시기 1부터)·「도시id:x」(피하면 좋은 때).',
    ' * GPT 할 일 Y·AA(2026-10-19)에서 확인된 것만. 항목 순서를 바꾸면 키도 함께 고친다. scripts/import-guide-sources.ts 로 합친다.',
    ' */',
  ],
  'WHEN_SOURCES',
  when,
);
console.log(`근거 ${added}건 추가`);
