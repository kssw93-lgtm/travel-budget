import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * SEO 보조 파일. 사이트 주소(SITE_URL, 예: https://example.com)가 있으면 canonical·hreflang·og:url 과
 * sitemap.xml 을 만들고, 없으면 robots.txt 만 만든다(주소를 지어내지 않는다).
 */
const seo = (siteUrl: string | undefined): Plugin => {
  const site = siteUrl?.replace(/\/+$/, '');
  const pages = [
    { file: 'index.html', path: '/' },
    { file: 'methodology.html', path: '/methodology' },
  ];
  return {
    name: 'seo-files',
    transformIndexHtml(html, ctx) {
      if (!site) return html;
      const page = pages.find((p) => ctx.filename.endsWith(p.file)) ?? pages[0]!;
      const url = (lang: string) => `${site}${page.path}?lang=${lang}`;
      const tags = [
        `<link rel="canonical" data-base="${site}" href="${url('ko')}" />`,
        `<link rel="alternate" hreflang="ko" href="${url('ko')}" />`,
        `<link rel="alternate" hreflang="en" href="${url('en')}" />`,
        `<link rel="alternate" hreflang="x-default" href="${site}${page.path}" />`,
        `<meta property="og:url" content="${url('ko')}" />`,
      ];
      return html.replace('</head>', `    ${tags.join('\n    ')}\n  </head>`);
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', ...(site ? [`Sitemap: ${site}/sitemap.xml`] : [])].join('\n') + '\n';
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      if (!site) return;
      const urls = pages.flatMap((p) =>
        ['ko', 'en'].map(
          (lang) =>
            `  <url><loc>${site}${p.path}?lang=${lang}</loc>` +
            ['ko', 'en'].map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${site}${p.path}?lang=${l}"/>`).join('') +
            `</url>`,
        ),
      );
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml });
    },
  };
};

// 개발 중에는 `npm run dev:worker`(wrangler dev, 8787)로 /api/* 를 프록시한다.
export default defineConfig(() => ({
  plugins: [react(), seo(process.env.SITE_URL)],
  build: {
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html'), methodology: resolve(__dirname, 'methodology.html') },
    },
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
}));
