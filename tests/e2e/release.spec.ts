import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, fillTrip, mockRates, test } from './helpers';

const axe = (page: Page) => new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']);

test.describe('접근성(axe, WCAG 2.1 AA)', () => {
  const cases: Array<[string, (p: Page) => Promise<void>]> = [
    ['계산기 · 계산 가능 결과', async (p) => { await p.goto('/'); await fillTrip(p); await expect(p.getByTestId('total')).toBeVisible(); }],
    ['계산기 · 데이터 부족 결과', async (p) => { await p.goto('/'); await fillTrip(p, { city: 'tokyo', date: '2027-08-02' }); await expect(p.getByTestId('hold')).toBeVisible(); }],
    ['계산기 · 입력 오류', async (p) => { await p.goto('/'); await fillTrip(p, { nights: '0' }); await expect(p.locator('#err-nights')).toBeVisible(); }],
    ['사이트 소개', async (p) => { await p.goto('/about'); await expect(p.getByTestId('about')).toBeVisible(); }],
    ['개인정보처리방침', async (p) => { await p.goto('/privacy'); await expect(p.getByTestId('privacy')).toBeVisible(); }],
  ];
  for (const lang of ['ko', 'en'] as const) {
    for (const [name, open] of cases) {
      test(`${lang} · ${name}`, async ({ page }) => {
        await mockRates(page);
        await page.addInitScript((l) => localStorage.setItem('lang', l), lang);
        await open(page);
        await page.locator('details').evaluateAll((ds) => ds.forEach((d) => d.setAttribute('open', '')));
        const { violations } = await axe(page).analyze();
        expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([]);
      });
    }
  }

  test('키보드만으로 입력·스타일 선택·언어 전환이 가능하고 포커스가 보인다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: '본문으로 건너뛰기' })).toBeFocused();
    await page.locator('input[name="style"][value="standard"]').focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('input[name="style"][value="comfort"]')).toBeChecked();
    await page.getByRole('button', { name: 'English' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});

test.describe('URL 입력 상태 보존', () => {
  test('입력·언어·통화가 URL 에 담겨 새로고침 후에도 유지된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page, { city: 'paris', nights: '5', adults: '3', children: '1' });
    await page.getByLabel('여유형').check({ force: true });
    await page.selectOption('#currency', 'JPY');
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page).toHaveURL(/city=paris/);
    await expect(page).toHaveURL(/cur=JPY/);
    await expect(page).toHaveURL(/lang=en/);
    await page.reload();
    await expect(page.locator('#city')).toHaveValue('paris');
    await expect(page.locator('#date')).toHaveValue('2026-11-04');
    await expect(page.locator('#nights')).toHaveValue('5');
    await expect(page.locator('#adults')).toHaveValue('3');
    await expect(page.locator('#children')).toHaveValue('1');
    await expect(page.locator('input[name="style"][value="comfort"]')).toBeChecked();
    await expect(page.locator('#currency')).toHaveValue('JPY');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('공유 링크로 바로 열면 그 조건으로 계산된다(언어와 통화는 서로 독립)', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=london&date=2026-12-01&nights=2&adults=1&children=0&style=budget&cur=USD');
    await expect(page.locator('#city')).toHaveValue('london');
    await expect(page.locator('#currency')).toHaveValue('USD');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('현지에서 얼마나');
    await expect(page.getByTestId('result')).toContainText('런던');
  });

  test('잘못된 URL 값은 무시하고 기본값을 쓴다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?city=atlantis&style=luxury&cur=<script>&lang=xx');
    await expect(page.locator('#city')).toHaveValue('tokyo');
    await expect(page.locator('input[name="style"][value="standard"]')).toBeChecked();
    await expect(page.locator('#currency')).toHaveValue('KRW');
  });

  test('소개 페이지에 다녀와도 계산기 입력이 유지된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page, { city: 'bangkok', nights: '6' });
    await page.getByRole('navigation').getByRole('link', { name: '사이트 소개' }).click();
    await expect(page).toHaveURL(/\/about\?lang=ko/);
    await page.getByRole('navigation').getByRole('link', { name: '계산기' }).click();
    await expect(page.locator('#city')).toHaveValue('bangkok');
    await expect(page.locator('#nights')).toHaveValue('6');
    await page.goBack();
    await page.goBack();
    await expect(page.locator('#city')).toHaveValue('bangkok');
  });
});

test.describe('광고 자리 CLS', () => {
  test('환율이 늦게 와도 레이아웃 이동(CLS)이 0.1 미만이고 광고 자리 높이가 고정돼 있다', async ({ page }, info) => {
    await mockRates(page, {}, 800);
    await page.addInitScript(() => {
      (window as unknown as { __cls: number }).__cls = 0;
      new PerformanceObserver((list) => {
        for (const e of list.getEntries() as Array<PerformanceEntry & { value: number; hadRecentInput: boolean }>) {
          if (!e.hadRecentInput) (window as unknown as { __cls: number }).__cls += e.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto('/?city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=KRW');
    await expect(page.getByTestId('rates-info')).toBeVisible({ timeout: 5000 });
    await page.waitForTimeout(300);
    const cls = await page.evaluate(() => (window as unknown as { __cls: number }).__cls);
    expect(cls).toBeLessThan(0.1);
    // 넓은 화면은 좌우 레일(120px 표지), 그 밖에는 결과 뒤 인라인 1개(모바일 50px·태블릿 90px)만 보인다
    const wide = (page.viewportSize()?.width ?? 0) >= 1200;
    const visible = wide ? ['rail-left', 'rail-right'] : ['inline-results'];
    for (const slot of visible) {
      const box = await page.locator(`[data-ad-slot="${slot}"]`).boundingBox();
      const width = page.viewportSize()!.width;
      expect(Math.round(box!.height), `${info.project.name} ${slot}`).toBe(wide ? 120 : width <= 640 ? 50 : 90);
    }
  });
});

test.describe('SEO 메타', () => {
  test('계산기: 언어별 제목·설명·OG·lang 이 바뀐다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko');
    await expect(page).toHaveTitle('여행 경비 계산기 — 현지 체류비 범위');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /최소~최대/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', '여행 경비 계산기 — 현지 체류비 범위');
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'ko_KR');
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page).toHaveTitle(/Travel Budget Calculator/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /min–max/);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('소개·개인정보 페이지는 정적 HTML 부터 자체 제목·설명을 가진다', async ({ page, request }) => {
    for (const [file, title] of [['/about.html', '사이트 소개'], ['/privacy.html', '개인정보처리방침']] as const) {
      const html = await (await request.get(file)).text();
      expect(html).toContain(`<title>${title} — 여행 경비 계산기`);
      expect(html).toContain('application/ld+json');
    }
    await mockRates(page);
    await page.goto('/about?lang=ko');
    await expect(page).toHaveTitle('사이트 소개 — 여행 경비 계산기 — 현지 체류비 범위');
    await page.goto('/privacy?lang=en');
    await expect(page).toHaveTitle(/^Privacy Policy — /);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /[Pp]rivacy/);
  });

  test('robots.txt 와 정적 대체 본문이 있다', async ({ request }) => {
    expect(await (await request.get('/robots.txt')).text()).toContain('User-agent: *');
    const index = await (await request.get('/')).text();
    expect(index).toContain('<h1>현지에서 얼마나 쓸까?</h1>');
    expect(index).toContain('application/ld+json');
  });
});

test.describe('외부 링크', () => {
  test('모든 외부 링크는 http(s)이고 새 창·opener 차단·새 창 안내가 있다', async ({ page }) => {
    await mockRates(page);
    for (const [url, min] of [['/?city=tokyo&date=2026-11-04', 5], ['/privacy', 1]] as const) {
      await page.goto(url);
      await page.locator('details').evaluateAll((ds) => ds.forEach((d) => d.setAttribute('open', '')));
      const links = page.locator('main a[target="_blank"], main a[href^="http"]');
      expect(await links.count()).toBeGreaterThan(min);
      for (const a of await links.all()) {
        await expect(a).toHaveAttribute('href', /^https?:\/\//);
        await expect(a).toHaveAttribute('target', '_blank');
        await expect(a).toHaveAttribute('rel', /noopener/);
        expect(await a.locator('.sr-only').count()).toBe(1);
      }
    }
  });
});
