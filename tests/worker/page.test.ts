import { describe, expect, it } from 'vitest';
import { CANONICAL_ORIGIN, page } from '../../worker/page';

/** ASSETS 바인딩 흉내: 요청받은 경로를 기록하고, 아는 파일만 200, 나머지는 404 페이지 */
function fakeAssets(files: Record<string, string>) {
  const seen: string[] = [];
  const fetcher = {
    async fetch(input: Request | string) {
      const req = typeof input === 'string' ? new Request(input) : input;
      const path = new URL(req.url).pathname;
      seen.push(path);
      const body = files[path];
      return body === undefined
        ? new Response('not found', { status: 404, headers: { 'content-type': 'text/html' } })
        : new Response(body, { headers: { 'content-type': 'text/html' } });
    },
  } as unknown as Fetcher;
  return { fetcher, seen };
}

describe('페이지 요청(Worker)', () => {
  it('workers.dev 주소는 자체 도메인으로 301', async () => {
    const { fetcher } = fakeAssets({});
    const res = await page(new Request('https://travel-budget.x.workers.dev/guide/tokyo?lang=en'), fetcher);
    expect(res.status).toBe(301);
    expect(res.headers.get('location')).toBe(`${CANONICAL_ORIGIN}/guide/tokyo?lang=en`);
  });
  it('?lang=en|ja 는 그 언어 정적 HTML 을 같은 주소로 보낸다', async () => {
    const { fetcher, seen } = fakeAssets({ '/_l/en/guide/tokyo': 'EN', '/_l/ja/': 'JA', '/guide/tokyo': 'KO' });
    expect(await (await page(new Request('https://howmuchthere.com/guide/tokyo?lang=en'), fetcher)).text()).toBe('EN');
    expect(await (await page(new Request('https://howmuchthere.com/?lang=ja'), fetcher)).text()).toBe('JA');
    expect(await (await page(new Request('https://howmuchthere.com/guide/tokyo?lang=ko'), fetcher)).text()).toBe('KO');
    expect(seen).toEqual(['/_l/en/guide/tokyo', '/_l/ja/', '/guide/tokyo']);
  });
  it('영어·일본어 홈 OG 주소를 캐시 분리용 언어 경로로 고정한다', async () => {
    const source = '<html><head><link rel="canonical" href="https://howmuchthere.com/?lang=ko"><link rel="alternate" hreflang="en" href="https://howmuchthere.com/?lang=en"><meta property="og:url" content="https://howmuchthere.com/?lang=ko"><meta property="og:image" content="https://howmuchthere.com/og-image-ja.png"><meta name="twitter:image" content="https://howmuchthere.com/og-image-ja.png"><meta name="twitter:image:alt" content="古い日本語カード"></head></html>';
    const { fetcher } = fakeAssets({ '/_l/en/': source, '/_l/ja/': source });
    const en = await (await page(new Request('https://howmuchthere.com/?lang=en&city=tokyo&nights=3'), fetcher)).text();
    const ja = await (await page(new Request('https://howmuchthere.com/?lang=ja&city=tokyo'), fetcher)).text();
    expect(en).toContain('content="https://howmuchthere.com/en?lang=en&amp;city=tokyo&amp;nights=3"');
    expect(en).toContain('rel="canonical" href="https://howmuchthere.com/en?lang=en&amp;city=tokyo&amp;nights=3"');
    expect(en).toContain('hreflang="en" href="https://howmuchthere.com/en?lang=en&amp;city=tokyo&amp;nights=3"');
    expect(en).toContain('og-image-en.png?v=20261110');
    expect(en).toContain('Travel Budget Calculator — meals, transit, and attraction tickets');
    expect(en).not.toContain('og-image-ja.png');
    expect(en).not.toContain('古い日本語カード');
    expect(en.match(/name="twitter:image:alt"/g)).toHaveLength(1);
    expect(ja).toContain('content="https://howmuchthere.com/ja?lang=ja&amp;city=tokyo"');
    expect(ja).toContain('og-image-ja.png?v=20261110');
  });
  it('영어·일본어 홈 별칭은 각 언어의 정적 홈을 제공하고 누락된 언어 쿼리는 보정한다', async () => {
    const { fetcher, seen } = fakeAssets({ '/_l/en/': '<meta property="og:url" content="ko">', '/_l/ja/': '<meta property="og:url" content="ko">' });
    const en = await page(new Request('https://howmuchthere.com/en?lang=en'), fetcher);
    const ja = await page(new Request('https://howmuchthere.com/ja?lang=ja'), fetcher);
    const redirect = await page(new Request('https://howmuchthere.com/en'), fetcher);
    expect(await en.text()).toContain('content="https://howmuchthere.com/en?lang=en"');
    expect(await ja.text()).toContain('content="https://howmuchthere.com/ja?lang=ja"');
    expect(redirect.status).toBe(301);
    expect(redirect.headers.get('location')).toBe('https://howmuchthere.com/en?lang=en');
    expect(seen).toEqual(['/_l/en/', '/_l/ja/']);
  });
  it('언어 폴더를 직접 열면 404, .html 주소는 확장자 없는 주소로 301 이동', async () => {
    const { fetcher } = fakeAssets({ '/_l/en/guide/tokyo': 'EN' });
    expect((await page(new Request('https://howmuchthere.com/_l/en/guide/tokyo'), fetcher)).status).toBe(404);
    const r = await page(new Request('https://howmuchthere.com/guide/tokyo.html?lang=ko'), fetcher);
    expect(r.status).toBe(301);
    expect(r.headers.get('location')).toBe('https://howmuchthere.com/guide/tokyo?lang=ko');
  });
});
