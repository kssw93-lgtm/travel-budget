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
      // 접힌 <details> 안처럼 화면에 보이지 않는 요소는 빼고 잰다
      .filter((e) => e.checkVisibility())
      .map((e) => e.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ x: r.left, y: r.top + window.scrollY, width: r.width, height: r.height })),
  );
}

const pages = [
  ['계산기(계산 가능)', '/?lang=ko&city=paris&date=2026-11-04&nights=3&adults=2&children=1&style=standard&cur=KRW'],
  ['계산기(영어·부족 상태)', '/?lang=en&city=tokyo&date=2027-08-02&nights=2&adults=1&children=0&style=comfort&cur=USD'],
  ['사이트 소개', '/about?lang=ko'],
  ['개인정보처리방침(영어)', '/privacy?lang=en'],
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

test.describe('광고 레일: 표지 상태와 광고가 채워진 상태', () => {
  test('세로형 160×600 콘텐츠를 넣으면 레일이 늘어나 잘리지 않고, 본문 폭·위치는 그대로다', async ({ page }) => {
    const width = page.viewportSize()!.width;
    test.skip(width < 1200, '레일은 1200px 이상에서만 보인다');
    await mockRates(page);
    await page.goto(pages[0][1]);
    await expect(page.getByTestId('total')).toBeVisible();

    // 표지 상태: 작게 고정(160×120)
    for (const name of ['rail-left', 'rail-right']) {
      const slot = page.locator(`[data-ad-slot="${name}"]`);
      await expect(slot).toHaveAttribute('data-state', 'placeholder');
      const b = (await slot.boundingBox())!;
      expect([Math.round(b.width), Math.round(b.height)]).toEqual([160, 120]);
    }
    const before = { main: (await boxes(page, 'main'))[0]!, form: (await boxes(page, 'main form'))[0]!, total: (await boxes(page, '[data-testid="total"]'))[0]! };

    // 광고 스크립트가 하듯 컨테이너에 직접 삽입(테스트용 가짜 콘텐츠, 실제 광고 코드 아님)
    await page.evaluate(() => {
      for (const name of ['rail-left', 'rail-right']) {
        const box = document.querySelector(`[data-ad-slot="${name}"] .ad-slot__content`)!;
        const fake = document.createElement('div');
        fake.dataset.fakeAd = '160x600';
        fake.style.cssText = 'width:160px;height:600px;background:repeating-linear-gradient(45deg,#ccc 0 10px,#eee 10px 20px)';
        box.appendChild(fake);
      }
    });

    for (const name of ['rail-left', 'rail-right']) {
      const slot = page.locator(`[data-ad-slot="${name}"]`);
      await expect(slot).toHaveAttribute('data-state', 'filled');
      await expect(slot.locator('.ad-slot__label')).toHaveCount(0);
      const s = (await slot.boundingBox())!;
      const ad = (await slot.locator('[data-fake-ad]').boundingBox())!;
      // 광고 전체가 자리 안에 있고(세로 600px 그대로) 숨겨진 넘침이 없다
      expect(Math.round(ad.height)).toBe(600);
      expect(Math.round(s.height)).toBeGreaterThanOrEqual(600);
      expect(ad.y).toBeGreaterThanOrEqual(s.y - 0.5);
      expect(ad.y + ad.height).toBeLessThanOrEqual(s.y + s.height + 0.5);
      const clip = await slot.evaluate((el) => ({ overflowY: getComputedStyle(el).overflowY, hidden: el.scrollHeight - el.clientHeight }));
      expect(clip.overflowY).not.toBe('hidden');
      expect(clip.hidden).toBeLessThanOrEqual(0);
    }

    // 본문 폭·위치는 그대로, 겹침·가로 스크롤 없음
    const after = { main: (await boxes(page, 'main'))[0]!, form: (await boxes(page, 'main form'))[0]!, total: (await boxes(page, '[data-testid="total"]'))[0]! };
    expect(after).toEqual(before);
    expect(after.main.width).toBeLessThanOrEqual(760);
    for (const r of await boxes(page, '[data-ad-slot^="rail-"]')) expect(overlap(r, after.main)).toBe(false);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  });

  test('160px 보다 넓은 콘텐츠가 들어와도 가로로 넘쳐 본문을 가리지 않는다', async ({ page }) => {
    const width = page.viewportSize()!.width;
    test.skip(width < 1200, '레일은 1200px 이상에서만 보인다');
    await mockRates(page);
    await page.goto(pages[0][1]);
    await page.evaluate(() => {
      const box = document.querySelector('[data-ad-slot="rail-left"] .ad-slot__content')!;
      const fake = document.createElement('div');
      fake.dataset.fakeAd = '300x250';
      fake.style.cssText = 'width:300px;height:250px;background:#c33';
      box.appendChild(fake);
    });
    const slot = (await boxes(page, '[data-ad-slot="rail-left"]'))[0]!;
    const main = (await boxes(page, 'main'))[0]!;
    // 레일 오른쪽 바깥(본문 쪽) 지점에는 광고가 보이지 않아야 한다
    const y = slot.y + 100 - (await page.evaluate(() => window.scrollY));
    const hit = await page.evaluate(([x, yy]) => (document.elementFromPoint(x!, yy!) as HTMLElement | null)?.dataset.fakeAd ?? null, [slot.x + 170, y]);
    expect(hit).toBeNull();
    expect(slot.x + slot.width).toBeLessThanOrEqual(main.x);
  });

  test('광고 콘텐츠가 사라지면 다시 작은 표지 상태로 돌아간다', async ({ page }) => {
    const width = page.viewportSize()!.width;
    test.skip(width < 1200, '레일은 1200px 이상에서만 보인다');
    await mockRates(page);
    await page.goto(pages[2][1]);
    const slot = page.locator('[data-ad-slot="rail-right"]');
    await page.evaluate(() => {
      const box = document.querySelector('[data-ad-slot="rail-right"] .ad-slot__content')!;
      const fake = document.createElement('div');
      fake.style.cssText = 'width:160px;height:600px';
      box.appendChild(fake);
    });
    await expect(slot).toHaveAttribute('data-state', 'filled');
    await page.evaluate(() => document.querySelector('[data-ad-slot="rail-right"] .ad-slot__content')!.replaceChildren());
    await expect(slot).toHaveAttribute('data-state', 'placeholder');
    expect(Math.round((await slot.boundingBox())!.height)).toBe(120);
  });
});
