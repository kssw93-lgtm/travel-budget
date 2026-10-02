import type { Page } from '@playwright/test';
import { expect, mockRates, test } from './helpers';

/**
 * 레이아웃 수락 기준: 320·375·768·1024·1280·1440px 에서 가로 스크롤·겹침이 없고,
 * 1200px 이상에서만 좌우 160px 광고 레일이 보이며, 본문은 약 760px·전체는 1160px 이내.
 */
type Box = { x: number; y: number; width: number; height: number };
const overlap = (a: Box, b: Box) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

async function boxes(page: Page, selector: string): Promise<Box[]> {
  return page.locator(selector).evaluateAll((els) =>
    els
      .map((e) => e.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ x: r.left, y: r.top + window.scrollY, width: r.width, height: r.height })),
  );
}

const pages = [
  ['계산기(계산 가능)', '/?lang=ko&city=paris&date=2026-11-04&nights=3&adults=2&children=1&style=standard&cur=KRW'],
  ['계산기(영어·부족 상태)', '/?lang=en&city=tokyo&date=2027-08-02&nights=2&adults=1&children=0&style=comfort&cur=USD'],
  ['방법론', '/methodology?lang=ko'],
] as const;

for (const [name, url] of pages) {
  test(`${name}: 가로 스크롤·겹침 없음, 폭 제한, 광고 레일 조건`, async ({ page }) => {
    await mockRates(page);
    await page.goto(url);
    await expect(page.locator('main h1')).toBeVisible();
    const width = page.viewportSize()!.width;

    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);

    const main = (await boxes(page, 'main'))[0]!;
    expect(main.width).toBeLessThanOrEqual(760);
    const shell = (await boxes(page, '.shell'))[0]!;
    expect(shell.width).toBeLessThanOrEqual(1160);

    // 본문 카드끼리 겹치지 않는다
    const cards = await boxes(page, 'main > .card, main > section, main > article');
    for (let i = 1; i < cards.length; i++) expect(cards[i]!.y).toBeGreaterThanOrEqual(cards[i - 1]!.y + cards[i - 1]!.height - 1);

    const rails = await boxes(page, '[data-ad-slot^="rail-"]');
    const inline = await boxes(page, '[data-ad-slot="inline-results"]');
    if (width >= 1200) {
      expect(rails).toHaveLength(2);
      for (const r of rails) {
        expect(Math.round(r.width)).toBe(160);
        expect(overlap(r, main)).toBe(false);
      }
      expect(inline).toHaveLength(0);
    } else {
      expect(rails).toHaveLength(0);
      expect(inline.length).toBeLessThanOrEqual(1); // 결과가 있을 때만 1개
      for (const r of inline) expect(r.height).toBeLessThanOrEqual(width <= 640 ? 50 : 90);
    }

    // 고정·오버레이 광고 없음, 광고 자리는 입력·결과·출처를 가리지 않음
    const positions = await page.locator('[data-ad-slot]').evaluateAll((els) => els.map((e) => getComputedStyle(e).position));
    expect(positions.every((p) => p !== 'fixed' && p !== 'sticky')).toBe(true);
    for (const ad of [...rails, ...inline]) {
      for (const target of await boxes(page, 'main form, [data-testid="total"], [data-testid="hold"], [data-testid="quality"], [data-testid="foods"] li')) {
        expect(overlap(ad, target)).toBe(false);
      }
    }
    expect(await page.locator('script[src*="googlesyndication"], script[src*="googletagmanager"], ins.adsbygoogle').count()).toBe(0);
  });
}

test('광고가 없어도 큰 빈칸이 없다(광고 표지 총면적이 화면의 작은 일부)', async ({ page }) => {
  await mockRates(page);
  await page.goto(pages[0][1]);
  const area = (await boxes(page, '[data-ad-slot]')).reduce((s, b) => s + b.width * b.height, 0);
  const view = page.viewportSize()!;
  expect(area).toBeLessThan(view.width * view.height * 0.1);
});
