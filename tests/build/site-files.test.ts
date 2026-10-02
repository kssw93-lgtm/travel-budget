import { describe, expect, it } from 'vitest';
import { SITE_PAGES, adsTxt, headTags, normalizeSite, robotsTxt, sitemapXml } from '../../scripts/site-files';

describe('배포 보조 파일', () => {
  it('사이트 주소가 없으면 sitemap 줄 없는 robots.txt', () => {
    expect(robotsTxt(normalizeSite(undefined))).toBe('User-agent: *\nAllow: /\n');
    expect(normalizeSite('  ')).toBeUndefined();
  });

  it('사이트 주소가 있으면 robots 에 sitemap, sitemap 에 3개 페이지 × 2개 언어', () => {
    const site = normalizeSite('https://example.com/')!;
    expect(robotsTxt(site)).toContain('Sitemap: https://example.com/sitemap.xml');
    const xml = sitemapXml(site);
    expect(xml.match(/<loc>/g)).toHaveLength(SITE_PAGES.length * 2);
    for (const p of ['/about', '/privacy']) expect(xml).toContain(`<loc>https://example.com${p}?lang=en</loc>`);
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
