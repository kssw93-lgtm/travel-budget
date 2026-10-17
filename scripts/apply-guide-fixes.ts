/**
 * GPT 할 일 AA 결과 「GPT전달내용/결과/근거보강_*.csv」의 「수정」 줄을 데이터 파일의 문장에 반영한다.
 * 볼거리(h)·여행시기(p)는 「이름(시기) — 설명」을 나눠 바꾸고, 팁(t)·피할때(x)는 문장 전체를 바꾼다.
 * 원래 문장이 데이터 파일에 정확히 한 번 나올 때만 바꾸고, 아니면(공유 문장·이미 바뀜) 목록으로 알린다.
 * 실행: npx tsx scripts/apply-guide-fixes.ts [--dry]
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { CITY_GUIDES } from '../src/data/city-guides';
import { CITY_WHEN } from '../src/data/city-when';
import { parseCsv } from './import-food-sources';

const root = new URL('..', import.meta.url).pathname;
const dataDir = `${root}src/data/`;
const files = readdirSync(dataDir).filter((n) => /^city-(guides|when)(-\d+)?\.ts$/.test(n));
const text: Record<string, string> = Object.fromEntries(files.map((f) => [f, readFileSync(dataDir + f, 'utf8')]));
const dry = process.argv.includes('--dry');

const lit = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
/** 그 도시 블록 안에서만 찾아 바꾼다(여러 도시가 같은 문장을 쓰는 경우가 있어서) */
function cityBlock(src: string, city: string): [number, number] | null {
  const m = new RegExp(`\\n  '?${city}'?: \\{`).exec(src);
  if (!m) return null;
  const next = /\n {2}'?[a-z0-9-]+'?: \{/g;
  next.lastIndex = m.index + m[0].length;
  const n = next.exec(src);
  return [m.index, n ? n.index : src.length];
}
function replaceOnce(city: string, oldS: string, newS: string): boolean {
  if (oldS === newS) return true;
  const cands = [lit(oldS), JSON.stringify(oldS)];
  for (const f of files) {
    const b = cityBlock(text[f]!, city);
    if (!b) continue;
    const block = text[f]!.slice(b[0], b[1]);
    const c = cands.find((x) => block.split(x).length === 2);
    if (!c) continue;
    text[f] = text[f]!.slice(0, b[0]) + block.replace(c, lit(newS)) + text[f]!.slice(b[1]);
    return true;
  }
  return false;
}
const split = (s: string) => {
  const i = s.indexOf(' — ');
  return i < 0 ? null : [s.slice(0, i).trim(), s.slice(i + 3).trim()];
};

/** 「시기·이름」이 바뀌었는데 영어·일본어가 「이름 — 설명」 형식이 아닌 줄의 세 언어 이름(사람이 정함) */
const LABELS: Record<string, [string, string, string]> = {
  'singapore:p2': ['10월 무렵 F1 싱가포르 그랑프리', 'Around October (Formula 1 Singapore Grand Prix)', '10月頃（F1シンガポールGP）'],
  'guam:p1': ['1~5월 건기', 'January–May (dry season)', '1〜5月（乾季）'],
  'prague:p2': ['5월~6월 초 프라하의 봄 음악제', 'May–early June (Prague Spring music festival)', '5月〜6月初め（プラハの春音楽祭）'],
  'prague:p3': ['봄·가을', 'Spring and autumn', '春・秋'],
  'saipan:p1': ['1~5월 건기', 'January–May (dry season)', '1〜5月（乾季）'],
  'ulaanbaatar:p1': ['7월 11~15일 무렵 나담 축제', 'Around 11–15 July (Naadam)', '7月11〜15日頃（ナーダム）'],
  'ulaanbaatar:p2': ['6~8월 초원 여행', 'June–August (steppe trips)', '6〜8月（草原の旅）'],
  'vancouver:p1': ['6~9월(특히 7~8월)', 'June–September (especially July–August)', '6〜9月（特に7〜8月）'],
  'auckland:p1': ['12~2월 여름', 'December–February (summer)', '12〜2月（夏）'],
  'cologne:p2': ['2월 또는 3월 쾰른 카니발', 'February or March (Cologne Carnival)', '2月または3月（ケルン・カーニバル）'],
  'basel:p2': ['2월 또는 3월 바젤 파스나흐트', 'February or March (Basel Fasnacht)', '2月または3月（バーゼル・ファスナハト）'],
  'new-york:p2': ['봄·가을', 'Spring and autumn', '春・秋'],
  'fukuoka:p2': ['일 년 내내 야타이', 'Year-round (yatai food stalls)', '通年（屋台）'],
  'busan:p1': ['여름 해수욕철', 'Summer (beach season)', '夏（海水浴シーズン）'],
  'kuala-lumpur:p1': ['타이푸삼(보통 1~2월, 해마다 다름)', 'Thaipusam (usually January–February)', 'タイプーサム（通常1〜2月）'],
  'sapporo:p2': ['7월 중순~8월 라벤더', 'Mid-July–August (lavender)', '7月中旬〜8月（ラベンダー）'],
  'sapporo:p3': ['겨울 스키', 'Winter (skiing)', '冬（スキー）'],
  'jeonju:p1': ['4월 말~5월 초 전주국제영화제', 'Late April–early May (Jeonju International Film Festival)', '4月末〜5月初め（全州国際映画祭）'],
  'cairo:p1': ['11~4월', 'November–April', '11〜4月'],
};
/** GPT가 시기를 「따뜻한 계절」처럼 흐리게만 바꾼 줄: 원래 시기 이름을 두고 설명만 바꾼다 */
const KEEP_LABEL = new Set([
  'almaty:p1',
  'tashkent:p2',
  'helsinki:p1',
  'krakow:p2',
  'dresden:p2',
  'nuremberg:p2',
  'strasbourg:p2',
  'colmar:p2',
  'zagreb:p2',
  'rovaniemi:p2',
  'frankfurt:p2',
  'berlin:p2',
  'zurich:p2',
  'bruges:p2',
  'new-york:p1',
]);
/** 반영하지 않는 줄: 여러 도시가 함께 쓰는 문장(크리스마스 마켓 공통 문구) */
const SKIP = new Set(['vienna:p2']);

const manual: string[] = [];
let applied = 0;
for (const name of readdirSync(`${root}GPT전달내용/결과/`)
  .filter((n) => /^근거보강_.*\.csv$/.test(n))
  .sort()) {
  for (const [key, verdict, ko, en, ja] of parseCsv(readFileSync(`${root}GPT전달내용/결과/${name}`, 'utf8').replace(/^\uFEFF/, '')).slice(1)) {
    if (verdict !== '수정' || !key || !ko || !en || !ja) continue;
    const [city, ref] = key.split(':') as [string, string];
    const n = Number(ref.slice(1)) - 1;
    const nu = [ko, en, ja];
    let olds: string[][] = [];
    let news: string[][] = [];
    if (SKIP.has(key)) {
      manual.push(`${key}: 공통 문장이라 반영하지 않음 | ${ko}`);
      continue;
    }
    if (ref[0] === 'h' || ref[0] === 'p') {
      let oldName: string[];
      let oldText: string[];
      if (ref[0] === 'h') {
        const h = CITY_GUIDES[city]?.highlights[n];
        if (!h) continue;
        oldName = [h.name.ko, h.name.en, h.name.ja];
        oldText = [h.text.ko, h.text.en, h.text.ja];
      } else {
        const p = CITY_WHEN[city]?.p[n];
        if (!p) continue;
        oldName = [p[0], p[1], p[2]];
        oldText = [p[3], p[4], p[5]];
      }
      // 한국어는 「이름 — 설명」, 영어·일본어는 형식이 없으면 문장 전체를 설명으로 쓴다
      const parts = nu.map(split);
      const name = LABELS[key] ?? parts.map((pt, i) => (pt && LABELS[key] === undefined && i === 0 ? pt[0]! : oldName[i]!));
      if (!LABELS[key] && !KEEP_LABEL.has(key) && parts[0] && parts[0][0] !== oldName[0] && !(parts[1] && parts[2])) {
        manual.push(`${key}: 이름이 바뀌었는데 영어·일본어 이름이 없음 | ${ko}`);
        continue;
      }
      const desc = nu.map((s, i) => (parts[i] ? parts[i]![1]! : s));
      olds = [oldName, oldText];
      news = [KEEP_LABEL.has(key) ? oldName : parts[1] && parts[2] && !LABELS[key] ? parts.map((pt) => pt![0]!) : name, desc];
    } else if (ref[0] === 't') {
      const t = CITY_GUIDES[city]?.tips[n];
      if (!t) continue;
      olds = [[t.ko, t.en, t.ja]];
      news = [nu];
    } else {
      const x = CITY_WHEN[city]?.x;
      if (!x) continue;
      olds = [[x[0], x[1], x[2]]];
      news = [nu];
    }
    const ok = olds.every((group, gi) => group.every((o, li) => replaceOnce(city, o, news[gi]![li]!)));
    if (ok) applied++;
    else manual.push(`${key}: 원래 문장이 여러 곳에 있거나 찾지 못함 | ${ko}`);
  }
}
if (!dry) for (const f of files) writeFileSync(dataDir + f, text[f]!);
console.log(`반영 ${applied}건`);
for (const m of manual) console.log(`직접 확인: ${m}`);
