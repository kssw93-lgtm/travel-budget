import { expect, fillTrip, mockRates, test } from './helpers';

test.describe('계산기 핵심 흐름', () => {
  test('도시 선택 목록에는 파일럿 8개 도시만 나온다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    const values = await page.locator('#city option').evaluateAll((os) => os.map((o) => (o as HTMLOptionElement).value));
    expect(values.sort()).toEqual(['bangkok', 'da-nang', 'london', 'osaka', 'paris', 'singapore', 'taipei', 'tokyo']);
  });

  test('데이터가 충분한 도시: 범위·항목·출처·대표 음식·광고 자리까지 표시', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'KRW');

    const total = page.getByTestId('total');
    await expect(total).toBeVisible();
    await expect(total).toContainText('TWD');
    await expect(total).toContainText('₩');
    await expect(total).toContainText('USD 참고');
    await expect(total).toContainText('~'); // 최소~최대 범위
    await expect(page.getByTestId('daily-food')).toContainText('하루 평균 외식비');

    for (const c of ['food', 'transport', 'attraction', 'souvenir', 'contingency']) {
      await expect(page.locator(`tr[data-category="${c}"]`)).toBeVisible();
    }
    await expect(page.getByTestId('quality')).toContainText('사용 표본');
    // 단위가 다른 가격은 유형별 바스켓으로 나뉘어 표시된다
    await expect(page.getByTestId('baskets-food')).toContainText('식사');
    // 타이베이 MRT 1일·24·48시간권은 같은 상품이라 독립 1건 → 1일권 바스켓 제외, 1회권 바스켓으로 계산
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="pass"]')).toContainText('1일 이용권 독립 1건 (가격 3건) · 제외');
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="ride"]')).toContainText('1회권 독립 3건 (가격 3건) · 합계에 반영');
    await expect(page.getByTestId('quality').getByRole('link').first()).toHaveAttribute('href', /^https?:\/\//);
    await expect(page.getByTestId('rates-info')).toContainText('2026-10-02');
    await expect(page.getByTestId('rates-info')).toContainText('Test Rates');

    // 대표 음식: 추천 근거와 가격 근거 분리
    const foods = page.getByTestId('foods');
    await expect(foods).toContainText('샤오롱바오');
    await expect(foods.locator('[data-food="XiaoLongBao"]')).toContainText('추천 근거');
    await expect(foods.locator('[data-food="XiaoLongBao"]')).toContainText('가격 근거');
    await expect(foods.locator('[data-food="Mango Shaved Ice"]')).toContainText('아직 확인된 메뉴 가격이 없습니다');

    // 광고는 자리만(입력 아래·결과 아래·음식 아래)
    for (const slot of ['after-form', 'after-results', 'after-food']) {
      await expect(page.locator(`[data-ad-slot="${slot}"]`)).toHaveCount(1);
    }
    expect(await page.locator('script[src*="googlesyndication"], ins.adsbygoogle').count()).toBe(0);
  });

  test('언어와 통화는 독립적이다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'EUR');
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('How much will you spend there?');
    await expect(page.locator('#currency')).toHaveValue('EUR'); // 언어를 바꿔도 통화 유지
    await expect(page.getByTestId('total')).toContainText('€');
    await page.getByRole('button', { name: '한국어' }).click();
    await expect(page.locator('#currency')).toHaveValue('EUR'); // 통화를 바꿔도 언어 유지
    await expect(page.getByRole('heading', { level: 1 })).toContainText('현지에서 얼마나');
    // 한국어 사용자도 KRW 가 아닌 통화를 쓸 수 있고, 영어 사용자도 KRW 를 고를 수 있다
    await page.getByRole('button', { name: 'English' }).click();
    await page.selectOption('#currency', 'KRW');
    await expect(page.getByTestId('total')).toContainText('₩');
  });

  test('여행 스타일에 따라 결과가 바뀐다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    const before = await page.getByTestId('total').innerText();
    await page.getByLabel('여유형').check({ force: true });
    await expect(page.getByTestId('total')).not.toHaveText(before);
  });

  test('8개 파일럿 도시 모두 실제 데이터로 전체 합계가 나온다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    for (const city of ['tokyo', 'osaka', 'bangkok', 'da-nang', 'taipei', 'singapore', 'paris', 'london']) {
      await fillTrip(page, { city });
      await expect(page.getByTestId('total'), city).toBeVisible();
      await expect(page.getByTestId('hold'), city).toHaveCount(0);
      await expect(page.getByTestId('quality'), city).toContainText('사용 표본');
    }
  });

  test('부족 상태: 방문일에 유효한 표본이 모자라면 억지 금액 없이 부족 항목을 표시', async ({ page }) => {
    // 실제 데이터: 도쿄 식사 표본 중 TYO-FD-003 은 2027-06-30 까지 판매 → 이후 방문은 식사 독립 표본 2건
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page, { city: 'tokyo', date: '2027-08-02' });
    await expect(page.getByTestId('hold')).toContainText('충분하지 않습니다');
    await expect(page.getByTestId('hold')).toContainText('부족한 항목: 외식');
    await expect(page.getByTestId('total')).toHaveCount(0);
    await expect(page.locator('tr[data-category="food"]')).toContainText('데이터 부족');
    await expect(page.locator('tr[data-category="contingency"]')).toHaveCount(0);
    await expect(page.getByTestId('quality').locator('[data-category="food"]')).toContainText('유효 기간 밖');
  });

  test('조건부·부족 바스켓 경고가 결과에 표시된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page, { city: 'singapore' });
    const q = page.getByTestId('quality');
    await expect(q.locator('[data-category="food"]')).toContainText('"조건부"');
    await expect(q.locator('[data-category="food"]')).toContainText('간식·음료은(는) 표본이 3건 미만');
  });

  test('항공권·숙박을 직접 입력하면 합산된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'KRW');
    await expect(page.getByTestId('direct')).toHaveCount(0);
    await page.locator('details.optional summary').click();
    await page.fill('#flight', '500000');
    await page.fill('#lodging', '300,000');
    await page.selectOption('#directCurrency', 'KRW');
    await expect(page.getByTestId('direct')).toContainText('₩800,000');
    await expect(page.getByTestId('direct')).toContainText('체류비 + 직접 입력 합계');
  });

  test('잘못된 입력은 오류를 보여주고 결과를 숨긴다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.fill('#nights', '0');
    await expect(page.getByRole('alert').filter({ hasText: '숙박 수' })).toBeVisible();
    await expect(page.getByTestId('result')).toHaveCount(0);
    await page.fill('#nights', '2');
    await expect(page.getByTestId('result')).toBeVisible();
  });
});

test.describe('환율 장애 처리', () => {
  test('환율 API 실패: 임의 환율 없이 현지 통화만 표시', async ({ page }) => {
    await mockRates(page, 'fail');
    await page.goto('/');
    await fillTrip(page);
    await expect(page.getByTestId('rates-error')).toBeVisible();
    await expect(page.getByTestId('total')).toContainText('TWD');
    await expect(page.getByTestId('total')).toContainText('환산 불가');
    await expect(page.getByTestId('total')).not.toContainText('₩');
  });

  test('오래된 환율은 stale 표시와 함께 사용', async ({ page }) => {
    await mockRates(page, { stale: true, asOf: '2026-09-20' });
    await page.goto('/');
    await fillTrip(page);
    await expect(page.getByTestId('rates-stale')).toContainText('2026-09-20');
    await expect(page.getByTestId('total')).toContainText('₩');
  });

  test('지원하지 않는 통화는 명확히 안내', async ({ page }) => {
    await mockRates(page, { rates: { USD: 1, KRW: 1400, TWD: 32 } });
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'VND');
    await expect(page.getByTestId('rates-unsupported')).toContainText('VND');
    await expect(page.getByTestId('total')).toContainText('환산 불가');
  });
});

test.describe('방법론·출처 페이지', () => {
  test('직접 접속과 메뉴 이동 모두 동작하고 데이터 현황을 보여준다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/methodology');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('방법론');
    await expect(page.getByTestId('status-table').locator('tbody tr')).toHaveCount(8);
    for (const city of ['tokyo', 'osaka', 'bangkok', 'da-nang', 'taipei', 'singapore', 'paris', 'london']) {
      await expect(page.locator(`[data-city="${city}"]`)).toContainText('계산 가능');
    }
    await expect(page.locator('main')).toContainText('v0.2');
    await expect(page.getByTestId('excluded-table')).toContainText('DAD-FD-003');
    await page.getByRole('navigation').getByRole('link', { name: '계산기' }).click();
    await expect(page).toHaveURL(/127\.0\.0\.1:4173\/\?lang=ko/);
    await page.getByRole('navigation').getByRole('link', { name: '방법론·출처' }).click();
    await expect(page).toHaveURL(/\/methodology\?lang=ko$/);
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Method');
  });
});

test.describe('반응형', () => {
  for (const path of ['/', '/methodology']) {
    test(`${path} 가로 스크롤이 생기지 않는다`, async ({ page }) => {
      await mockRates(page);
      await page.goto(path);
      if (path === '/') await fillTrip(page);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});
