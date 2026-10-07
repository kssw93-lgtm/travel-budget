import { test as base, expect, type Page } from '@playwright/test';

export const RATES = {
  base: 'USD',
  rates: { USD: 1, KRW: 1400, JPY: 150, TWD: 32, EUR: 0.9, GBP: 0.8, SGD: 1.3, THB: 35, VND: 25000 },
  asOf: '2026-10-02',
  fetchedAt: '2026-10-02T00:00:00Z',
  source: { id: 'test', name: 'Test Rates', url: 'https://example.com/rates' },
  stale: false,
};

/** 브라우저가 직접 부르는 공개 환율 API(서버 장애 시 대체). 테스트는 외부 네트워크에 기대지 않도록 모두 가로챈다 */
export const PUBLIC_RATE_HOSTS = ['open.er-api.com', 'api.frankfurter.dev', 'cdn.jsdelivr.net'];

/**
 * /api/rates 를 흉내 낸다. 공개 환율 API 는 기본으로 실패시키고(browser='fail'),
 * browser='ok' 이면 ExchangeRate-API 형식으로 성공 응답을 준다.
 */
export async function mockRates(page: Page, override: Record<string, unknown> | 'fail' = {}, delayMs = 0, browser: 'ok' | 'fail' = 'fail') {
  await page.route(/open\.er-api\.com|api\.frankfurter\.dev|cdn\.jsdelivr\.net\/npm\/@fawazahmed0/, (route) =>
    browser === 'ok' && route.request().url().includes('open.er-api.com')
      ? route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: { 'access-control-allow-origin': '*' },
          body: JSON.stringify({ result: 'success', time_last_update_unix: 1791072000, rates: { ...RATES.rates, KRW: 1500 } }),
        })
      : route.fulfill({ status: 503, headers: { 'access-control-allow-origin': '*' }, body: '' }),
  );
  await page.route('**/api/rates', async (route) => {
    if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
    return override === 'fail'
      ? route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"rates_unavailable"}' })
      : route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ...RATES, ...override }) });
  });
}

export async function fillTrip(page: Page, o: { city?: string; date?: string; nights?: string; adults?: string; children?: string } = {}) {
  await page.selectOption('#city', o.city ?? 'tokyo');
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
      // 음식 사진(위키미디어 공용)은 테스트 환경에서 외부 접속이 막혀 있으므로 1×1 PNG 로 대신 응답한다
      await page.route('https://upload.wikimedia.org/**', (route) =>
        route.fulfill({ contentType: 'image/png', body: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64') }),
      );
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() !== 'error') return;
        const where = msg.location().url;
        if (where.includes('/api/rates') || PUBLIC_RATE_HOSTS.some((h) => where.includes(h))) return;
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
