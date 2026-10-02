/**
 * 비공개 미리보기용 단일 HTML 만들기(운영 배포 아님).
 * VITE_PREVIEW=1 로 빌드해(화면 안 이동·환율 미호출) JS·CSS 를 한 파일에 넣는다.
 * 사용: npm run build:preview [-- <출력 경로>]
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv[2] ?? `${root}/dist-preview/travel-budget-preview.html`);
execSync('npx vite build --outDir dist-preview --emptyOutDir --base ./', { cwd: root, stdio: 'inherit', env: { ...process.env, VITE_PREVIEW: '1' } });

const html = readFileSync(`${root}/dist-preview/index.html`, 'utf8');
const asset = (re: RegExp) => {
  const m = re.exec(html);
  if (!m?.[1]) throw new Error(`빌드 결과에서 ${re} 를 찾지 못했습니다`);
  return readFileSync(resolve(`${root}/dist-preview`, m[1]), 'utf8');
};
const js = asset(/<script type="module" crossorigin src="([^"]+)"><\/script>/).replace(/<\/script/gi, '<\\/script');
const css = asset(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
const body = /<body>([\s\S]*)<\/body>/.exec(html)?.[1]?.replace(/<script type="module"[^>]*><\/script>/, '') ?? '';

// 미리보기 페이지는 문서 뼈대를 자동으로 씌우므로 title·style·본문·script 만 쓴다
const page = `<title>여행 경비 계산기</title>
<meta name="description" content="도시·일정·여행 스타일별 현지 체류비 범위 계산기 데모 미리보기">
<style>${css}</style>
${body.trim()}
<script type="module">${js}</script>
`;
writeFileSync(out, page);
console.log(`미리보기 HTML: ${out} (${Math.round(page.length / 1024)} KB)`);
