import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { guideIndexMeta, guidePageMeta, homeFallbackHtml, type GuideData } from './scripts/guide-pages';
import { SITE_PAGES, adsTxt, adsenseMeta, headTags, infoFallbackHtml, normalizeSite, pageHtml, replaceFallback, robotsTxt, sitemapXml } from './scripts/site-files';
import { ko } from './src/i18n/ko';
import { guidePath } from './src/core/guide';
import { cities, dataDate, dataMeta, extras, foods, memos, samples } from './src/data';
import { PRIVACY_EFFECTIVE } from './src/ui/policy';

/**
 * SEO·광고 보조 파일. SITE_URL(예: https://example.com)이 있으면 canonical·hreflang·og:url 과 sitemap.xml,
 * ADSENSE_PUBLISHER_ID 가 있으면 ads.txt 와 모든 페이지의 AdSense 소유권 확인 메타 태그를 만든다.
 * 없으면 robots.txt 만 만든다(값을 지어내지 않는다). 소개·개인정보처리방침 정적 HTML 에는 화면과 같은 전문을 넣는다.
 */
const seo = (siteUrl: string | undefined, publisherId: string | undefined, contactEmail: string | undefined): Plugin => {
  const site = normalizeSite(siteUrl);
  const ads = adsTxt(publisherId);
  const adsMeta = adsenseMeta(publisherId);
  const email = contactEmail?.trim() || null;
  const contact = { title: ko.info.contactTitle, label: ko.info.contactLabel, email };
  const guideData: GuideData = { cities, samples, foods, extras, memos, refDate: dataMeta.date || dataDate, updated: dataDate };
  const infoHtml: Record<string, string> = {
    'index.html': homeFallbackHtml(guideData),
    'about.html': infoFallbackHtml(ko.about, { cities: cities.map((c) => c.nameKo).join('·'), n: cities.length }, contact),
    'privacy.html': infoFallbackHtml(ko.privacy, { date: PRIVACY_EFFECTIVE }, contact),
  };
  return {
    name: 'seo-files',
    transformIndexHtml(html, ctx) {
      const page = SITE_PAGES.find((p) => ctx.filename.endsWith(p.file)) ?? SITE_PAGES[0]!;
      const tags = [...(site ? headTags(site, page) : []), ...(adsMeta ? [adsMeta] : [])];
      const withInfo = infoHtml[page.file] ? replaceFallback(html, infoHtml[page.file]!) : html;
      return tags.length ? withInfo.replace('</head>', `    ${tags.join('\n    ')}\n  </head>`) : withInfo;
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
        const data = guideData;
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
  plugins: [react(), seo(process.env.SITE_URL, process.env.ADSENSE_PUBLISHER_ID, process.env.VITE_CONTACT_EMAIL)],
  build: {
    rollupOptions: {
      input: Object.fromEntries(SITE_PAGES.map((p) => [p.file.replace('.html', ''), resolve(__dirname, p.file)])),
    },
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
}));
