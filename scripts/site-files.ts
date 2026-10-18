/**
 * 배포용 보조 파일(robots.txt, sitemap.xml, ads.txt)과 canonical 태그를 만든다.
 * 주소·광고 계정이 환경변수로 주어지지 않으면 해당 파일을 만들지 않는다(값을 지어내지 않는다).
 */
export interface SitePage {
  file: string;
  path: string;
}

export const SITE_PAGES: SitePage[] = [
  { file: 'index.html', path: '/' },
  { file: 'about.html', path: '/about' },
  { file: 'privacy.html', path: '/privacy' },
];

const LANGS = ['ko', 'en', 'ja'] as const;

export function normalizeSite(siteUrl: string | undefined): string | undefined {
  const s = siteUrl?.trim().replace(/\/+$/, '');
  return s ? s : undefined;
}

export function robotsTxt(site: string | undefined): string {
  return ['User-agent: *', 'Allow: /', 'Disallow: /api/', 'Disallow: /_l/', ...(site ? [`Sitemap: ${site}/sitemap.xml`] : [])].join('\n') + '\n';
}

/** AI 검색·답변 엔진용 사이트 안내(llms.txt). 영어로 쓰고 영어 주소를 건다 */
export function llmsTxt(site: string, guides: Array<{ path: string; name: string; country: string }>, date: string): string {
  const u = (path: string) => `${site}${path}?lang=en`;
  return [
    '# Travel Budget Calculator (howmuchthere.com)',
    '',
    `> Free calculator and city guides for on-the-ground travel costs — meals, local transport and attraction tickets — in ${guides.length} cities. Every price comes from an official source (transit operators, attractions, restaurant menus) with its source and check date. Results are min–max ranges; flights and accommodation are added only if the user enters them. Pages are available in Korean, English and Japanese (?lang=ko|en|ja). Price data as of ${date}.`,
    '',
    '## Key pages',
    `- [Travel budget calculator](${u('/')})`,
    `- [City travel cost guides](${u('/guides')})`,
    `- [How the estimate is calculated](${u('/how-it-works')})`,
    `- [Compare daily costs between cities](${u('/compare')})`,
    `- [European Christmas markets 2026/27](${u('/christmas-markets')})`,
    `- [About the site](${u('/about')})`,
    '',
    '## City guides',
    ...guides.map((g) => `- [${g.name === g.country ? g.name : `${g.name}, ${g.country}`}](${u(g.path)})`),
    '',
  ].join('\n');
}

export function sitemapXml(site: string, pages: SitePage[] = SITE_PAGES, lastmod?: string): string {
  const urls = pages.flatMap((p) =>
    LANGS.map(
      (lang) =>
        `  <url><loc>${site}${p.path}?lang=${lang}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}` +
        LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site}${p.path}?lang=${l}"/>`).join('') +
        `</url>`,
    ),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}

const xmlEsc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export interface RssItem {
  title: string;
  path: string;
  description: string;
}

/** 네이버 서치어드바이저 등에 제출하는 RSS 2.0 피드. 날짜는 화면의 가격 자료 기준일(YYYY-MM-DD) */
export function rssXml(site: string, items: RssItem[], updated: string): string {
  const date = new Date(`${updated || '1970-01-01'}T00:00:00+09:00`).toUTCString();
  const body = items
    .map(
      (i) =>
        `    <item><title>${xmlEsc(i.title)}</title><link>${site}${i.path}?lang=ko</link><guid isPermaLink="true">${site}${i.path}?lang=ko</guid>` +
        `<description>${xmlEsc(i.description)}</description><pubDate>${date}</pubDate></item>`,
    )
    .join('\n');
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n` +
    `    <title>여행 경비 계산기 — 도시별 여행 경비 가이드</title>\n    <link>${site}/</link>\n` +
    `    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />\n` +
    `    <description>도시별 현지 물가와 3박 4일 예상 경비를 공식 가격 자료로 정리합니다.</description>\n` +
    `    <language>ko</language>\n    <lastBuildDate>${date}</lastBuildDate>\n${body}\n  </channel>\n</rss>\n`
  );
}

export function headTags(site: string, page: SitePage, lang: (typeof LANGS)[number] = 'ko'): string[] {
  const url = (l: string) => `${site}${page.path}?lang=${l}`;
  return [
    `<link rel="canonical" data-base="${site}" href="${url(lang)}" />`,
    `<link rel="alternate" hreflang="ko" href="${url('ko')}" />`,
    `<link rel="alternate" hreflang="en" href="${url('en')}" />`,
    `<link rel="alternate" hreflang="ja" href="${url('ja')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url('ko')}" />`,
    `<meta property="og:url" content="${url(lang)}" />`,
    `<meta property="og:image" content="${site}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:image" content="${site}/og-image.png" />`,
    `<link rel="alternate" type="application/rss+xml" title="여행 경비 가이드" href="${site}/rss.xml" />`,
  ];
}

/** AdSense 게시자 ID(pub-16자리 숫자). 형식이 틀리면 오류를 던져 잘못된 ads.txt 배포를 막는다. */
export function adsTxt(publisherId: string | undefined): string | null {
  const id = publisherId?.trim().replace(/^ca-/, '');
  if (!id) return null;
  if (!/^pub-\d{16}$/.test(id)) throw new Error(`ADSENSE_PUBLISHER_ID 형식 오류: "${publisherId}" (예: pub-0000000000000000)`);
  return `google.com, ${id}, DIRECT, f08c47fec0942fa0\n`;
}

/**
 * AdSense 사이트 소유권 확인 메타 태그. 게시자 ID 가 있을 때만 모든 페이지 <head> 에 넣는다.
 * 광고 스크립트(adsbygoogle.js)는 넣지 않는다 — 승인 후 광고 단위를 정하고 따로 연결한다.
 */
export function adsenseMeta(publisherId: string | undefined): string | null {
  if (adsTxt(publisherId) === null) return null;
  const id = publisherId!.trim().replace(/^ca-/, '');
  return `<meta name="google-adsense-account" content="ca-${id}" />`;
}

/** 안내 페이지(소개·개인정보처리방침) 문구 구조: i18n 의 about / privacy 와 같다 */
export interface InfoText {
  title: string;
  lead: string;
  effective?: string;
  sections: ReadonlyArray<{ h: string; body: readonly string[] }>;
}

/**
 * 안내 페이지의 정적 본문(JS 실행 전 크롤러·심사용). 화면(InfoPages.tsx)과 같은 문구를 쓰고,
 * 자리표시자 {name} 은 vars 로 채운다. 문의 이메일은 선택이며 없으면 문의 절을 넣지 않는다.
 */
export function infoFallbackHtml(
  text: InfoText,
  vars: Record<string, string | number>,
  contact: { title: string; label: string; email: string | null },
): string {
  const fill = (s: string) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  const out = [`<h1>${escapeHtml(text.title)}</h1>`];
  if (text.effective) out.push(`<p>${escapeHtml(fill(text.effective))}</p>`);
  out.push(`<p>${escapeHtml(fill(text.lead))}</p>`);
  for (const sec of text.sections) {
    out.push(`<h2>${escapeHtml(sec.h)}</h2>`, ...sec.body.map((b) => `<p>${escapeHtml(fill(b))}</p>`));
  }
  if (contact.email) out.push(`<h2>${escapeHtml(contact.title)}</h2>`, `<p>${escapeHtml(`${contact.label} ${contact.email}`)}</p>`);
  return out.map((l) => `        ${l}`).join('\n');
}

/** 빌드된 HTML 의 정적 본문(`<div class="fallback">` 안, noscript 앞)을 바꾼다 */
export const replaceFallback = (html: string, fallbackHtml: string) =>
  html.replace(/<div class="fallback">[\s\S]*?<noscript>/, `<div class="fallback">\n${fallbackHtml}\n        <noscript>`);

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** JSON-LD 객체 */
  ld: Record<string, unknown>;
  /** `<div class="fallback">` 안에 넣을 정적 본문(이미 이스케이프된 HTML) */
  fallbackHtml: string;
  /** 본문 언어(기본 ko). 영어·일본어 정적 HTML 은 Worker 가 ?lang= 에 맞춰 보낸다 */
  lang?: (typeof LANGS)[number];
}

const OG_LOCALE = { ko: 'ko_KR', en: 'en_US', ja: 'ja_JP' } as const;

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * 빌드된 index.html 을 바탕으로 다른 주소의 정적 HTML 을 만든다(스크립트·스타일은 그대로).
 * 제목·설명·OG·JSON-LD·canonical·정적 본문만 바꾼다.
 */
export function pageHtml(indexHtml: string, meta: PageMeta, site: string | undefined): string {
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  let html = indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(meta.ld).replace(/"item":"\//g, `"item":"${site ?? ''}/`).replace(/</g, '\\u003c')}</script>`);
  html = replaceFallback(html, meta.fallbackHtml);
  const lang = meta.lang ?? 'ko';
  if (lang !== 'ko') {
    html = html
      .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
      .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${OG_LOCALE[lang]}$2`)
      .replace(/<p>이 계산기는 JavaScript가 필요합니다\. \/ /, '<p>');
  }
  // 계산기용 canonical·hreflang·og:url·공유 이미지 태그를 이 페이지 것으로 교체(두 번 들어가지 않게)
  html = html
    .replace(/\s*<link rel="(?:canonical|alternate)"[^>]*>/g, '')
    .replace(/\s*<meta property="og:(?:url|image(?::\w+)?)"[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:image"[^>]*>/g, '');
  if (site) html = html.replace('</head>', `    ${headTags(site, { file: '', path: meta.path }, lang).join('\n    ')}\n  </head>`);
  return html;
}

/** 없는 주소의 404 페이지(색인 제외). 앱을 띄우지 않는 가벼운 정적 페이지 */
export function notFoundHtml(esc: (s: string) => string = escapeHtml): string {
  const t = esc('페이지를 찾을 수 없습니다 · Page not found');
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>${t}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <style>
      :root { color-scheme: light dark; --bg: #f7f8f6; --ink: #17201b; --muted: #5b6660; --brand: #0b6e4f; }
      @media (prefers-color-scheme: dark) { :root { --bg: #111513; --ink: #e8ece9; --muted: #9aa59f; --brand: #4cc59a; } }
      body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.6 system-ui, sans-serif; }
      main { max-width: 560px; margin: 12vh auto; padding: 0 16px; }
      h1 { font-size: 1.5rem; margin: 0 0 8px; } p { color: var(--muted); } a { color: var(--brand); font-weight: 700; }
    </style>
  </head>
  <body>
    <main>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 바뀌었거나 아직 준비되지 않은 페이지입니다. / This page does not exist.</p>
      <p><a href="/?lang=ko">여행 경비 계산기</a> · <a href="/guides?lang=ko">도시별 여행 가이드</a> · <a href="/?lang=en">Travel Budget (English)</a> · <a href="/?lang=ja">日本語</a></p>
    </main>
  </body>
</html>
`;
}
