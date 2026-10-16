import { resolve } from 'node:path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { MSG, guideIndexMeta, guidePageMeta, homeFallbackHtml, type GuideData } from './scripts/guide-pages';
import { SITE_PAGES, adsTxt, escapeHtml, notFoundHtml, adsenseMeta, headTags, infoFallbackHtml, normalizeSite, pageHtml, replaceFallback, robotsTxt, rssXml, sitemapXml } from './scripts/site-files';
import { ko } from './src/i18n/ko';
import { guidePath } from './src/core/guide';
import { cities, dataDate, dataMeta, extras, foods, memos, samples } from './src/data';
import { PRIVACY_EFFECTIVE } from './src/ui/policy';
import { KEYWORDS } from './src/core/model-config';

const MODEL_TAX_EXCLUDED = KEYWORDS.taxExcluded;

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
        if (site) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml(site, [...SITE_PAGES, ...guidePages], /^\d{4}-\d{2}-\d{2}$/.test(guideData.updated) ? guideData.updated : undefined) });
        if (ads) this.emitFile({ type: 'asset', fileName: 'ads.txt', source: ads });
        const index = bundle['index.html'];
        if (index?.type !== 'asset' || typeof index.source !== 'string') return;
        const data = guideData;
        if (site) {
          const rssItems = [guideIndexMeta(data), ...cities.map((c) => guidePageMeta(c, data))].map((m) => ({ title: m.title, path: m.path, description: m.description }));
          this.emitFile({ type: 'asset', fileName: 'rss.xml', source: rssXml(site, rssItems, data.updated) });
        }
        this.emitFile({ type: 'asset', fileName: 'guides.html', source: pageHtml(index.source, guideIndexMeta(data), site) });
        for (const c of cities) {
          this.emitFile({ type: 'asset', fileName: `guide/${c.id}.html`, source: pageHtml(index.source, guidePageMeta(c, data), site) });
        }
        // 영어·일본어 정적 HTML(같은 주소 ?lang=en|ja 로 Worker 가 골라 보낸다). /_l/ 는 직접 열 수 없다
        for (const lang of ['en', 'ja'] as const) {
          const m = MSG[lang];
          const ld = (name: string, description: string) => ({ '@context': 'https://schema.org', '@type': 'WebPage', name, description, inLanguage: lang });
          const contactL = { title: m.info.contactTitle, label: m.info.contactLabel, email };
          const info = [
            { file: 'index.html', path: '/', title: m.meta.title, description: m.meta.description, html: homeFallbackHtml(data, lang) },
            { file: 'about.html', path: '/about', title: `${m.about.title} — ${m.meta.brand}`, description: m.meta.aboutDescription, html: infoFallbackHtml(m.about, { cities: cities.map((c) => c.nameEn).join(', '), n: cities.length }, contactL) },
            { file: 'privacy.html', path: '/privacy', title: `${m.privacy.title} — ${m.meta.brand}`, description: m.meta.privacyDescription, html: infoFallbackHtml(m.privacy, { date: PRIVACY_EFFECTIVE }, contactL) },
          ];
          for (const p of info) {
            this.emitFile({ type: 'asset', fileName: `_l/${lang}/${p.file}`, source: pageHtml(index.source, { title: p.title, description: p.description, path: p.path, lang, ld: ld(p.title, p.description), fallbackHtml: p.html }, site) });
          }
          this.emitFile({ type: 'asset', fileName: `_l/${lang}/guides.html`, source: pageHtml(index.source, guideIndexMeta(data, lang), site) });
          for (const c of cities) {
            this.emitFile({ type: 'asset', fileName: `_l/${lang}/guide/${c.id}.html`, source: pageHtml(index.source, guidePageMeta(c, data, lang), site) });
          }
        }
        this.emitFile({ type: 'asset', fileName: '404.html', source: notFoundHtml(escapeHtml) });
      },
    },
  };
};

/**
 * 배포 번들 가볍게: 가격 표본의 note(수집 메모·원문 인용, 화면에 쓰지 않음)를 뺀다.
 * 화면이 쓰는 유일한 용도(세금·서비스료 별도 판정)는 짧은 표시로 남긴다. 테스트(vitest)·스크립트는 원본을 그대로 쓴다.
 */
const slimData = (): Plugin => ({
  name: 'slim-data',
  apply: 'build',
  enforce: 'pre',
  transform(code, id) {
    if (!id.replace(/\\/g, '/').endsWith('/src/data/generated/samples.json')) return null;
    const rows = JSON.parse(code) as Array<{ note?: string; unit?: string }>;
    for (const r of rows) r.note = MODEL_TAX_EXCLUDED.test(`${r.note ?? ''} ${r.unit ?? ''}`) ? '세금·서비스료 별도' : '';
    return { code: JSON.stringify(rows), map: null };
  },
});

// 개발 중에는 `npm run dev:worker`(wrangler dev, 8787)로 /api/* 를 프록시한다.
export default defineConfig(({ mode }) => ({
  plugins: [slimData(), react(), seo(process.env.SITE_URL ?? 'https://howmuchthere.com', process.env.ADSENSE_PUBLISHER_ID ?? 'pub-8704899603701516', process.env.VITE_CONTACT_EMAIL ?? loadEnv(mode, process.cwd(), 'VITE_').VITE_CONTACT_EMAIL)],
  build: {
    rollupOptions: {
      input: Object.fromEntries(SITE_PAGES.map((p) => [p.file.replace('.html', ''), resolve(__dirname, p.file)])),
    },
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
}));
