import { describe, expect, it, vi } from 'vitest';
import { page } from '../../worker/page';

describe('worker page redirects', () => {
  it('moves legacy Christmas market URLs to the guide list and preserves a valid language', async () => {
    const assets = { fetch: vi.fn() } as unknown as Fetcher;
    const response = await page(new Request('https://howmuchthere.com/christmas-markets?lang=ja'), assets);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toBe('https://howmuchthere.com/guides?lang=ja');
    expect(assets.fetch).not.toHaveBeenCalled();
  });
});
