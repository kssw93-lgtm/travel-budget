/**
 * GPT 결과 「GPT전달내용/결과/음식사진_*.csv」(키, 도시, 음식(한글), Food, 사진 URL, 작가, 라이선스, 파일 페이지, 메모)를
 * data/overlays/food-info.json 의 photo 로 넣는다. 위키미디어 원본 주소(md5 경로 확인)·자유 라이선스·작가가 있는 것만 받고,
 * 화면에는 960px 썸네일 주소를 쓴다(불러오지 못하면 화면에서 사진 칸을 숨긴다). 이미 사진이 있는 음식은 건드리지 않는다.
 * 실행: npx tsx scripts/import-food-photos.ts && npm run data:convert
 */
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCsv } from './import-food-sources';

const root = fileURLToPath(new URL('..', import.meta.url));
const dir = join(root, 'GPT전달내용', '결과');
const file = join(root, 'data', 'overlays', 'food-info.json');
const FREE_LICENSE = /^(CC0|Public domain|CC BY(-SA)? [1-4]\.[0-5])/i;

const info = JSON.parse(readFileSync(file, 'utf8')) as Record<string, { photo?: { url: string; author: string; license: string; page: string } }>;
let added = 0;
for (const name of readdirSync(dir)
  .filter((n) => /^음식사진_.*\.csv$/.test(n))
  .sort()) {
  for (const [key, , , , url, author, license, page] of parseCsv(readFileSync(join(dir, name), 'utf8').replace(/^\uFEFF/, '')).slice(1)) {
    const m = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)$/.exec((url ?? '').trim());
    const why =
      !key || !info[key]
        ? '음식 키 없음'
        : info[key].photo
          ? ''
          : !m
            ? '위키미디어 원본 주소 아님'
            : !FREE_LICENSE.test(license ?? '') || !author
              ? '라이선스·작가 누락'
              : !page?.startsWith('https://commons.wikimedia.org/')
                ? '파일 페이지 누락'
                : '';
    if (!key || !info[key] || info[key].photo || why) {
      if (why) console.log(`건너뜀 ${key}: ${why}`);
      continue;
    }
    const file = decodeURIComponent(m![3]!);
    const md5 = createHash('md5').update(file).digest('hex');
    if (md5[0] !== m![1] || md5.slice(0, 2) !== m![2]) {
      console.log(`건너뜀 ${key}: 파일 경로가 파일 이름과 맞지 않음`);
      continue;
    }
    const q = encodeURIComponent(file);
    info[key].photo = {
      url: `https://upload.wikimedia.org/wikipedia/commons/thumb/${m![1]}/${m![2]}/${q}/960px-${q}`,
      author: author!.trim(),
      license: license!.trim(),
      page: page!.trim(),
    };
    added++;
  }
}
writeFileSync(file, `${JSON.stringify(info, null, 2)}\n`);
console.log(`음식 사진 ${added}건 추가`);
