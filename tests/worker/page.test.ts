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
  it('언어 폴더를 직접 열면 404, .html 주소는 확장자 없는 주소로 301', async () => {
    const { fetcher } = fakeAssets({ '/_l/en/guide/tokyo': 'EN' });
    expect((await page(new Request('https://howmuchthere.com/_l/en/guide/tokyo'), fetcher)).status).toBe(404);
    const r = await page(new Request('https://howmuchthere.com/guide/tokyo.html?lang=ko'), fetcher);
    expect(r.status).toBe(301);
    expect(r.headers.get('location')).toBe('https://howmuchthere.com/guide/tokyo?lang=ko');
  });
});
