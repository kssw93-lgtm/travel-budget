import type { Page } from '@playwright/test';

export const RATES = {
  base: 'USD',
  rates: { USD: 1, KRW: 1400, JPY: 150, TWD: 32, EUR: 0.9, GBP: 0.8, SGD: 1.3, THB: 35, VND: 25000 },
  asOf: '2026-10-02',
  fetchedAt: '2026-10-02T00:00:00Z',
  source: { id: 'test', name: 'Test Rates', url: 'https://example.com/rates' },
  stale: false,
};

export async function mockRates(page: Page, override: Record<string, unknown> | 'fail' = {}) {
  await page.route('**/api/rates', (route) =>
    override === 'fail'
      ? route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"rates_unavailable"}' })
      : route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ...RATES, ...override }) }),
  );
}

export async function fillTrip(page: Page, o: { city?: string; date?: string; nights?: string; adults?: string; children?: string } = {}) {
  await page.selectOption('#city', o.city ?? 'taipei');
  await page.fill('#date', o.date ?? '2026-11-04');
  await page.fill('#nights', o.nights ?? '3');
  await page.fill('#adults', o.adults ?? '2');
  await page.fill('#children', o.children ?? '0');
}
