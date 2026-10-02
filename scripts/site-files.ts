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

const LANGS = ['ko', 'en'] as const;

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
