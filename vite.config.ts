import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { guideIndexMeta, guidePageMeta, type GuideData } from './scripts/guide-pages';
import { SITE_PAGES, adsTxt, headTags, normalizeSite, pageHtml, robotsTxt, sitemapXml } from './scripts/site-files';
import { guidePath } from './src/core/guide';
import { cities, dataDate, dataMeta, extras, foods, samples } from './src/data';

/**
 * SEO·광고 보조 파일. SITE_URL(예: https://example.com)이 있으면 canonical·hreflang·og:url 과 sitemap.xml,
 * ADSENSE_PUBLISHER_ID 가 있으면 ads.txt 를 만든다. 없으면 robots.txt 만 만든다(값을 지어내지 않는다).
 */
const seo = (siteUrl: string | undefined, publisherId: string | undefined): Plugin => {
  const site = normalizeSite(siteUrl);
  const ads = adsTxt(publisherId);
  return {
    name: 'seo-files',
    transformIndexHtml(html, ctx) {
      if (!site) return html;
      const page = SITE_PAGES.find((p) => ctx.filename.endsWith(p.file)) ?? SITE_PAGES[0]!;
      return html.replace('</head>', `    ${headTags(site, page).join('\n    ')}\n  </head>`);
    },
    generateBundle: {
      // 도시 가이드 정적 HTML 은 빌드된 index.html(스크립트·스타일 경로 포함)을 바탕으로 만드므로 마지막에 실행
      order: 'post',
      handler(_, bundle) {
        const guidePages = [{ file: 'guides.html', path: '/guides' }, ...cities.map((c) => ({ file: `guide/${c.id}.html`, path: guidePath(c.id) }))];
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt(site) });
        if (site) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml(site, [...SITE_PAGES, ...guidePages]) });
        if (ads) this.emitFile({ type: 'asset', fileName: 'ads.txt', source: ads });
        const index = bundle['index.html'];
        if (index?.type !== 'asset' || typeof index.source !== 'string') return;
        const data: GuideData = { cities, samples, foods, extras, refDate: dataMeta.date || dataDate };
        this.emitFile({ type: 'asset', fileName: 'guides.html', source: pageHtml(index.source, guideIndexMeta(data), site) });
        for (const c of cities) {
          this.emitFile({ type: 'asset', fileName: `guide/${c.id}.html`, source: pageHtml(index.source, guidePageMeta(c, data), site) });
        }
      },
    },
  };
};

// 개발 중에는 `npm run dev:worker`(wrangler dev, 8787)로 /api/* 를 프록시한다.
export default defineConfig(() => ({
  plugins: [react(), seo(process.env.SITE_URL, process.env.ADSENSE_PUBLISHER_ID)],
  build: {
    rollupOptions: {
      input: Object.fromEntries(SITE_PAGES.map((p) => [p.file.replace('.html', ''), resolve(__dirname, p.file)])),
    },
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
}));
