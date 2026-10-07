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
  return ['User-agent: *', 'Allow: /', ...(site ? [`Sitemap: ${site}/sitemap.xml`] : [])].join('\n') + '\n';
}

export function sitemapXml(site: string, pages: SitePage[] = SITE_PAGES): string {
  const urls = pages.flatMap((p) =>
    LANGS.map(
      (lang) =>
        `  <url><loc>${site}${p.path}?lang=${lang}</loc>` +
        LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site}${p.path}?lang=${l}"/>`).join('') +
        `</url>`,
    ),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}

export function headTags(site: string, page: SitePage): string[] {
  const url = (lang: string) => `${site}${page.path}?lang=${lang}`;
  return [
    `<link rel="canonical" data-base="${site}" href="${url('ko')}" />`,
    `<link rel="alternate" hreflang="ko" href="${url('ko')}" />`,
    `<link rel="alternate" hreflang="en" href="${url('en')}" />`,
    `<link rel="alternate" hreflang="ja" href="${url('ja')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${site}${page.path}" />`,
    `<meta property="og:url" content="${url('ko')}" />`,
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
}

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
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(meta.ld).replace(/</g, '\\u003c')}</script>`);
  html = replaceFallback(html, meta.fallbackHtml);
  // 계산기용 canonical·hreflang·og:url 을 이 페이지 주소로 교체
  html = html.replace(/\s*<link rel="(?:canonical|alternate)"[^>]*>/g, '').replace(/\s*<meta property="og:url"[^>]*>/g, '');
  if (site) html = html.replace('</head>', `    ${headTags(site, { file: '', path: meta.path }).join('\n    ')}\n  </head>`);
  return html;
}
