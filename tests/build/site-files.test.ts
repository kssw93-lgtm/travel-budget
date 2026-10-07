import { describe, expect, it } from 'vitest';
import { SITE_PAGES, adsTxt, adsenseMeta, headTags, infoFallbackHtml, normalizeSite, pageHtml, robotsTxt, sitemapXml } from '../../scripts/site-files';
import { checkAdsenseReady } from '../../scripts/adsense-ready';

describe('배포 보조 파일', () => {
  it('사이트 주소가 없으면 sitemap 줄 없는 robots.txt', () => {
    expect(robotsTxt(normalizeSite(undefined))).toBe('User-agent: *\nAllow: /\n');
    expect(normalizeSite('  ')).toBeUndefined();
  });

  it('사이트 주소가 있으면 robots 에 sitemap, sitemap 에 3개 페이지 × 2개 언어', () => {
    const site = normalizeSite('https://example.com/')!;
    expect(robotsTxt(site)).toContain('Sitemap: https://example.com/sitemap.xml');
    const xml = sitemapXml(site);
    expect(xml.match(/<loc>/g)).toHaveLength(SITE_PAGES.length * 3);
    for (const p of ['/about', '/privacy']) expect(xml).toContain(`<loc>https://example.com${p}?lang=en</loc>`);
    expect(xml).toContain('hreflang="ja"');
  });

  it('canonical 태그는 페이지 경로를 쓴다', () => {
    const tags = headTags('https://example.com', SITE_PAGES.find((p) => p.file === 'privacy.html')!);
    expect(tags[0]).toBe('<link rel="canonical" data-base="https://example.com" href="https://example.com/privacy?lang=ko" />');
  });

  it('ads.txt 는 게시자 ID 가 있을 때만, 형식이 맞을 때만 만든다', () => {
    expect(adsTxt(undefined)).toBeNull();
    expect(adsTxt('')).toBeNull();
    expect(adsTxt('pub-0000000000000000')).toBe('google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n');
    expect(adsTxt('ca-pub-0000000000000000')).toContain('pub-0000000000000000');
    expect(() => adsTxt('pub-123')).toThrow();
  });
});

describe('정적 페이지 HTML', () => {
  const index = '<html><head><title>계산기</title><meta name="description" content="x" /><meta property="og:title" content="x" /><script type="application/ld+json">{}</script><link rel="canonical" data-base="https://a.com" href="https://a.com/?lang=ko" /></head><body><div id="root"><div class="fallback"><h1>계산기</h1><noscript>js</noscript></div></div></body></html>';
  it('제목·설명·JSON-LD·canonical·본문을 페이지 것으로 바꾸고 스크립트는 둔다', () => {
    const html = pageHtml(index, { title: '도쿄 <가이드>', description: '"설명"', path: '/guide/tokyo', ld: { a: '</script>' }, fallbackHtml: '<h1>도쿄</h1>' }, 'https://a.com');
    expect(html).toContain('<title>도쿄 &lt;가이드&gt;</title>');
    expect(html).toContain('content="&quot;설명&quot;"');
    expect(html).not.toContain('</script></script>');
    expect(html).toContain('href="https://a.com/guide/tokyo?lang=ko"');
    expect(html).not.toContain('href="https://a.com/?lang=ko"');
    expect(html).toContain('<h1>도쿄</h1>');
    expect(html).not.toContain('<h1>계산기</h1>');
  });
});

describe('AdSense 신청 준비', () => {
  it('소유권 확인 메타 태그는 게시자 ID 가 있을 때만, 형식이 맞을 때만', () => {
    expect(adsenseMeta(undefined)).toBeNull();
    expect(adsenseMeta('pub-1234567890123456')).toBe('<meta name="google-adsense-account" content="ca-pub-1234567890123456" />');
    expect(adsenseMeta('ca-pub-1234567890123456')).toContain('content="ca-pub-1234567890123456"');
    expect(() => adsenseMeta('pub-1')).toThrow();
  });

  it('안내 페이지 정적 본문: 화면과 같은 문구·자리표시자 채움·이스케이프·문의처', () => {
    const text = { title: '방침 <A>', lead: '{n}개 도시', effective: '시행일 {date}', sections: [{ h: '쿠키', body: ['Google 광고'] }] };
    const contact = { title: '문의', label: '이메일:', email: null };
    const html = infoFallbackHtml(text, { n: 16, date: '2026-10-02' }, contact);
    expect(html).toContain('<h1>방침 &lt;A&gt;</h1>');
    expect(html).toContain('<p>16개 도시</p>');
    expect(html).toContain('<p>시행일 2026-10-02</p>');
    expect(html).toContain('<h2>쿠키</h2>');
    expect(html).not.toContain('<h2>문의</h2>'); // 이메일이 없으면 문의 절 없음
    expect(infoFallbackHtml(text, {}, { ...contact, email: 'a@b.kr' })).toContain('<p>이메일: a@b.kr</p>');
  });

  it('신청 전 점검은 빈 빌드 결과에서 실패 항목과 할 일을 알려 준다', () => {
    const results = checkAdsenseReady('/nonexistent-dist');
    expect(results.some((r) => !r.ok && r.fix.includes('npm run build'))).toBe(true);
    expect(results.find((r) => r.item.includes('ads.txt'))?.ok).toBe(false);
  });
});
