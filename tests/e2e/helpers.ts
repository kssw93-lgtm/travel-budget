import { test as base, expect, type Page } from '@playwright/test';

export const RATES = {
  base: 'USD',
  rates: { USD: 1, KRW: 1400, JPY: 150, TWD: 32, EUR: 0.9, GBP: 0.8, SGD: 1.3, THB: 35, VND: 25000 },
  asOf: '2026-10-02',
  fetchedAt: '2026-10-02T00:00:00Z',
  source: { id: 'test', name: 'Test Rates', url: 'https://example.com/rates' },
  stale: false,
};

export async function mockRates(page: Page, override: Record<string, unknown> | 'fail' = {}, delayMs = 0) {
  await page.route('**/api/rates', async (route) => {
    if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
    return override === 'fail'
      ? route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"rates_unavailable"}' })
      : route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ...RATES, ...override }) });
  });
}

export async function fillTrip(page: Page, o: { city?: string; date?: string; nights?: string; adults?: string; children?: string } = {}) {
  await page.selectOption('#city', o.city ?? 'taipei');
  await page.fill('#date', o.date ?? '2026-11-04');
  await page.fill('#nights', o.nights ?? '3');
  await page.fill('#adults', o.adults ?? '2');
  await page.fill('#children', o.children ?? '0');
}

/**
 * 모든 테스트에서 브라우저 콘솔 오류와 처리되지 않은 예외를 모아, 테스트가 끝날 때 하나라도 있으면 실패시킨다.
 * 예외: 환율 장애를 일부러 흉내 낸 /api/rates 503 응답의 리소스 로드 오류.
 */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() !== 'error') return;
        if (msg.location().url.includes('/api/rates')) return;
        errors.push(msg.text());
      });
      page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
      await use(errors);
      expect(errors, '브라우저 콘솔 오류').toEqual([]);
    },
    { auto: true },
  ],
});
export { expect };
