import { expect, fillTrip, mockRates, test } from './helpers';
import { readFileSync } from 'node:fs';

/** data:convert 가 만든 실제 도시 판정. 데이터가 바뀌면 기대값도 자동으로 따라간다. */
const status = JSON.parse(readFileSync('src/data/generated/status.json', 'utf8')) as Record<string, { computable: boolean; missing: string[] }>;

test.describe('계산기 핵심 흐름', () => {
  test('도시 선택 목록에는 파일럿 도시만 나오고 나라별로 묶이며 검색할 수 있다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    const values = await page.locator('#city option').evaluateAll((os) => os.map((o) => (o as HTMLOptionElement).value));
    expect([...values].sort()).toEqual(['bangkok', 'barcelona', 'busan', 'da-nang', 'istanbul', 'jeju', 'london', 'new-york', 'osaka', 'paris', 'rome', 'seoul', 'singapore', 'taipei', 'tokyo']);
    // 국내/해외가 아니라 나라별로 묶는다
    const pilot = (JSON.parse(readFileSync('src/data/generated/cities.json', 'utf8')) as Array<{ stage: string; country: string }>).filter((c) => c.stage === '파일럿');
    await expect(page.locator('#city optgroup')).toHaveCount(new Set(pilot.map((c) => c.country)).size);
    // 검색: 결과가 하나면 바로 선택, 여러 개면 목록만 좁힌다
    await page.getByLabel('도시·나라 검색').fill('바르셀로나');
    await expect(page.locator('#city')).toHaveValue('barcelona');
    await page.getByLabel('도시·나라 검색').fill('일본');
    await expect(page.getByTestId('city-search-status')).toHaveText('2개 도시');
    await expect(page.locator('#city option')).toHaveCount(3); // 고른 도시(바르셀로나) + 일본 2곳
    await page.getByLabel('도시·나라 검색').press('Enter'); // 보이는 순서(가나다)의 첫 도시: 도쿄
    await expect(page.locator('#city')).toHaveValue('tokyo');
    await page.getByLabel('도시·나라 검색').fill('아틀란티스');
    await expect(page.getByTestId('city-search-status')).toContainText('아직 없는 도시');
  });

  test('데이터가 충분한 도시: 범위·항목·출처·대표 음식·광고 자리까지 표시', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'KRW');

    const total = page.getByTestId('total');
    await expect(total).toBeVisible();
    await expect(total).toContainText('JPY');
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
    // 도쿄 지하철 24·48·72시간권은 같은 상품이라 독립 1건 → 1일권 바스켓 제외, 1회권 바스켓으로 계산
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="pass"]')).toContainText('1일 이용권 독립 1건 (가격 3건) · 제외');
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="ride"]')).toContainText('1회권 독립 3건 (가격 3건) · 합계에 반영');
    // 근거·출처 패널은 기본으로 접혀 있고, 펼치면 출처 링크가 보인다
    await expect(page.locator('details.evidence')).not.toHaveAttribute('open', '');
    await page.locator('details.evidence > summary').click();
    await expect(page.getByTestId('quality').getByRole('link').first()).toHaveAttribute('href', /^https?:\/\//);
    await expect(page.getByTestId('rates-info')).toContainText('2026-10-02');
    await expect(page.getByTestId('rates-info')).toContainText('Test Rates');

    // 대표 음식: 추천 근거와 가격 근거 분리
    const foods = page.getByTestId('foods');
    await expect(foods).toContainText('규동');
    await expect(foods.locator('[data-food="Gyudon"]')).toContainText('추천 근거');
    await expect(foods.locator('[data-food="Gyudon"]')).toContainText('가격 근거');
    await expect(foods.locator('[data-food="Gyudon"]')).toContainText('스키야 규동');
    await expect(foods.locator('[data-food="Ramen"]')).toContainText('아직 확인된 메뉴 가격이 없습니다');

    // 광고는 자리만(좌우 레일 + 결과 뒤 인라인 1개). 실제 광고 코드·추적 스크립트 없음
    for (const slot of ['rail-left', 'rail-right', 'inline-results']) {
      await expect(page.locator(`[data-ad-slot="${slot}"]`)).toHaveCount(1);
    }
    expect(await page.locator('script[src*="googlesyndication"], script[src*="googletagmanager"], script[src*="doubleclick"], ins.adsbygoogle').count()).toBe(0);
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

  test('파일럿 도시 화면이 실제 데이터 판정과 일치한다(계산 가능 → 합계, 부족 → 부족 항목)', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    const label: Record<string, string> = { food: '외식', transport: '현지 교통', attraction: '관광지', souvenir: '기념품' };
    expect(Object.keys(status)).toHaveLength(15);
    for (const [city, st] of Object.entries(status)) {
      await fillTrip(page, { city });
      if (st.computable) {
        await expect(page.getByTestId('total'), city).toBeVisible();
        await expect(page.getByTestId('hold'), city).toHaveCount(0);
      } else {
        await expect(page.getByTestId('total'), city).toHaveCount(0);
        for (const m of st.missing) await expect(page.getByTestId('hold'), city).toContainText(label[m]!);
      }
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
    // v0.4 실데이터: 파리 외식은 조건부·시작가 표본을 쓴다(부족 바스켓 경고 문구는 단위 테스트가 고정)
    await fillTrip(page, { city: 'paris' });
    const q = page.getByTestId('quality');
    await page.locator('details.evidence > summary').click();
    await expect(q.locator('[data-category="food"]')).toContainText('"조건부"');
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

test.describe('검수 지적 사항 화면 확인', () => {
  test('파리 개선문은 범위(16~22 EUR)와 "확정 요금 아님" 경고로 보인다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=paris&date=2026-07-01&nights=2&adults=1&children=0&style=standard&cur=EUR&attr=PAR-AT-006');
    const q = page.getByTestId('quality').locator('[data-category="attraction"]');
    await expect(q).toContainText('개선문');
    await expect(q).toContainText('16~22 EUR');
    await expect(q).toContainText('선택한 방문일의 확정 요금이 아니며');
  });

  test('런던 공유자전거는 대중교통 하루 상한과 별도로 계산됐다고 표시된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=en&city=london&date=2026-11-04&nights=3&adults=1&children=0&style=comfort&cur=GBP');
    const q = page.getByTestId('quality').locator('[data-category="transport"]');
    await expect(q).toContainText('separate fare system');
    await expect(q).toContainText('Santander Cycles');
  });

  test('다낭 참조각박물관은 재검증 필요로 표시된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=da-nang&date=2026-11-04&nights=3&adults=1&children=0&style=standard&cur=KRW&attr=DAD-AT-004');
    await expect(page.getByTestId('quality').locator('[data-category="attraction"]')).toContainText('재검증이 필요한 가격');
  });
});

test.describe('환율 장애 처리', () => {
  test('환율 API 실패: 임의 환율 없이 현지 통화만 표시', async ({ page }) => {
    await mockRates(page, 'fail');
    await page.goto('/');
    await fillTrip(page);
    await expect(page.getByTestId('rates-error')).toBeVisible();
    await expect(page.getByTestId('total')).toContainText('JPY');
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
    await mockRates(page, { rates: { USD: 1, KRW: 1400, JPY: 150 } });
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'VND');
    await expect(page.getByTestId('rates-unsupported')).toContainText('VND');
    await expect(page.getByTestId('total')).toContainText('환산 불가');
  });
});

test.describe('사이트 소개·개인정보처리방침', () => {
  test('직접 접속과 메뉴·푸터 이동이 동작하고 언어를 바꾸면 내용이 바뀐다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/about');
    await expect(page).toHaveURL(/\/about\?lang=ko$/);
    await expect(page.getByTestId('about').getByRole('heading', { level: 1 })).toHaveText('사이트 소개');
    await expect(page.getByTestId('about')).toContainText('가격은 어디에서 오나요');
    await page.getByRole('navigation').getByRole('link', { name: '계산기' }).click();
    await expect(page).toHaveURL(/127\.0\.0\.1:4173\/\?lang=ko/);
    await page.getByRole('contentinfo').getByRole('link', { name: '개인정보처리방침' }).click();
    await expect(page).toHaveURL(/\/privacy\?lang=ko$/);
    const privacy = page.getByTestId('privacy');
    await expect(privacy).toContainText('2026-10-02');
    await expect(privacy).toContainText('쿠키');
    await expect(privacy.locator('a[href="https://adssettings.google.com/"], a[href^="https://adssettings.google.com"]')).toHaveCount(1);
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page).toHaveURL(/\/privacy\?lang=en$/);
    await expect(privacy.getByRole('heading', { level: 1 })).toHaveText('Privacy Policy');
  });

  test('예전 방법론 주소로 들어오면 계산기를 보여준다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/methodology');
    await expect(page.locator('#city')).toBeVisible();
  });
});

test.describe('반응형', () => {
  for (const path of ['/', '/about', '/privacy', '/guides', '/guide/singapore']) {
    test(`${path} 가로 스크롤이 생기지 않는다`, async ({ page }) => {
      await mockRates(page);
      await page.goto(path);
      if (path === '/') await fillTrip(page);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});

test.describe('관광지 입장료 선택·현지 물가', () => {
  test('관광지를 고르면 관광 비용이 고른 곳의 입장료 합계로 바뀌고 URL 에 남는다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=london&date=2026-11-04&nights=3&adults=2&children=1&style=standard&cur=GBP');
    const row = page.locator('tr[data-category="attraction"]');
    // 고르기 전에는 관광지 비용 0, 목록은 처음부터 펼쳐져 있다
    await expect(row).toContainText('선택 안 함');
    await expect(row).toContainText('£0.00');
    await expect(page.getByTestId('attractions').locator('details')).toHaveAttribute('open', '');
    await page.locator('[data-attraction="LON-AT-001"] input').check();
    await page.locator('[data-attraction="LON-AT-003"] input').check();
    await expect(page.getByTestId('attractions-status')).toContainText('2곳 선택 · +£176.50 ~ £205.50');
    await expect(page.locator('[data-attraction="LON-AT-001"] [data-testid="attr-added"]')).toContainText('+£92.50 (전체 3명)'); // 37×2 + 18.5
    await expect(row).toContainText('선택한 관광지 2곳');
    // v0.4: 2×(37+29)+(18.5+26) = 176.5, 2×(37+39)+(18.5+35) = 205.5
    await expect(row).toContainText('£176.50 ~ £205.50');
    await expect(page).toHaveURL(/attr=LON-AT-001%2CLON-AT-003|attr=LON-AT-001,LON-AT-003/);
    await page.reload();
    await expect(page.locator('[data-attraction="LON-AT-003"] input')).toBeChecked();
    await expect(row).toContainText('£176.50 ~ £205.50');
    // 도시를 바꾸면 선택이 비워진다
    await page.selectOption('#city', 'paris');
    await expect(page.getByTestId('attractions-status')).toContainText('고른 곳 없음');
    await expect(page).not.toHaveURL(/attr=/);
  });

  test('입장료 목록은 성인·아동 요금, 변동 범위, 재검증 표시와 출처를 보여준다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=en&city=london&date=2026-11-04&nights=3&adults=1&children=0&style=standard&cur=USD');
    const eye = page.locator('[data-attraction="LON-AT-003"]');
    await expect(eye).toContainText('Adult £29.00 ~ £39.00');
    await expect(eye).toContainText('Child £26.00 ~ £35.00');
    await expect(eye).toContainText('Varies by date or demand');
    await expect(page.locator('[data-attraction="LON-AT-005"]')).toContainText('Free');
    await expect(page.locator('[data-attraction="LON-AT-005"]')).toContainText('Needs re-verification');
    await expect(eye.getByRole('link')).toHaveAttribute('href', /^https:\/\//);
  });

  test('현지 물가 한눈에: 한 끼·교통 1회·입장료 등 대표 가격을 현지·선택 통화로 보여준다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=KRW');
    const guide = page.getByTestId('price-guide');
    await expect(guide.locator('tr[data-basket="meal"]')).toContainText('한 끼 식사');
    await expect(guide.locator('tr[data-basket="meal"]')).toContainText('2,800');
    await expect(guide.locator('tr[data-basket="meal"]')).toContainText('₩26,133');
    await expect(guide.locator('tr[data-basket="pass"]')).toContainText('참고용');
    await expect(guide.locator('tr[data-basket="snack"]')).toHaveCount(0);
  });
});

test.describe('항목별 자세히 보기·음주', () => {
  test('외식은 일차별 끼니·1끼 가격, 관광지는 고른 곳별 입장료, 항목별 예비비가 펼쳐진다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=1&style=standard&cur=JPY&attr=TYO-AT-001,TYO-AT-002');
    const food = page.locator('[data-detail="food"]');
    await food.locator('summary').click();
    await expect(food.locator('[data-line="day-1"]')).toContainText('1일차');
    await expect(food.locator('[data-line="day-1"]')).toContainText('3끼 × 60%');
    await expect(food.locator('[data-line="day-2"]')).toContainText('3끼');
    await expect(food.locator('[data-line="day-4"]')).toContainText('2026-11-07');
    await expect(food.locator('[data-line="contingency"]')).toContainText('예비비 10%');
    const attr = page.locator('[data-detail="attraction"]');
    await attr.locator('summary').click();
    await expect(attr.locator('[data-line="TYO-AT-001"]')).toContainText('도쿄 스카이트리');
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('JP¥1,500');
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('성인 요금 적용'); // 아동 요금 없음
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('JP¥4,500'); // 1,500 × 3명
    await expect(page.locator('tr[data-category="food"] .cont')).toContainText('예비비 10%');
  });

  test('음주 포함을 고르면 URL 에 남고 외식비에 주류가 더해진다(주류 표본이 3건 미만이면 더하지 않고 알린다)', async ({ page }) => {
    await mockRates(page);
    // 파리: 주류 독립 표본 3건 → 외식 합계가 늘고 자세히 보기에 주류 줄이 생긴다
    await page.goto('/?lang=ko&city=paris&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=EUR');
    await expect(page.getByTestId('rates-info')).toBeVisible();
    const food = page.locator('tr[data-category="food"]');
    const before = (await food.textContent()) ?? '';
    await page.getByLabel('음주 포함 (성인)').check();
    await expect(page).toHaveURL(/drink=1/);
    await expect(food).not.toHaveText(before);
    await expect(page.getByTestId('drink-note')).toHaveCount(0);
    // 오사카: 주류 2건 → 합계에 넣지 않고 부족하다고 알린다
    await page.goto('/?lang=ko&city=osaka&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=JPY&drink=1');
    await page.locator('details.evidence > summary').click();
    await expect(page.getByTestId('quality').locator('[data-category="food"]')).toContainText('주류은(는) 표본이 3건 미만');
  });
});

test.describe('공항 이동·렌터카', () => {
  const extras = JSON.parse(readFileSync('src/data/generated/extras.json', 'utf8')) as Array<{ id: string; cityId: string; kind: string }>;

  test('확인된 요금이 없는 도시에는 카드를 보여 주지 않는다', async ({ page }) => {
    const empty = Object.keys(status).find((c) => !extras.some((x) => x.cityId === c));
    test.skip(!empty, '모든 도시에 공항 이동·렌터카 자료가 있음');
    await mockRates(page);
    await page.goto(`/?lang=ko&city=${empty}&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=KRW`);
    await expect(page.getByTestId('result')).toBeVisible();
    await expect(page.getByTestId('extras')).toHaveCount(0);
  });

  test('자료가 있으면 고른 상품이 결과 표와 URL 에 들어간다', async ({ page }) => {
    const x = extras.find((e) => e.kind === 'airport' && e.cityId in status);
    test.skip(!x, '아직 공항 이동 자료가 없음(데이터 대기)');
    await mockRates(page);
    await page.goto(`/?lang=ko&city=${x!.cityId}&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=KRW`);
    await page.locator(`[data-extra="${x!.id}"] input[type="radio"]`).check();
    await expect(page).toHaveURL(new RegExp(`apt=${x!.id}`));
    await expect(page.getByTestId('breakdown').locator('[data-category="extra-airport"]')).toBeVisible();
  });
});

test.describe('도시 가이드', () => {
  test('가이드 목록에서 도시 가이드로, 가이드에서 계산기로 이어진다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guides?lang=ko');
    await expect(page.getByTestId('guides').locator('li[data-city]')).toHaveCount(Object.keys(status).length);
    await page.getByRole('link', { name: '파리 여행 경비 가이드' }).click();
    await expect(page).toHaveURL(/\/guide\/paris\?lang=ko$/);
    await expect(page.locator('main h1')).toHaveText('파리 여행 경비 가이드');
    await expect(page).toHaveTitle(/^파리 여행 경비·현지 물가 — /);
    await expect(page.getByTestId('guide-example').locator('table').first().locator('tbody tr')).toHaveCount(3);
    await expect(page.getByTestId('guide-breakdown').locator('tbody tr')).toHaveCount(4);
    await expect(page.getByTestId('guide-attractions')).toContainText('에펠탑');
    await page.getByRole('link', { name: '내 일정으로 계산하기' }).click();
    await expect(page.locator('#city')).toHaveValue('paris');
  });

  test('가이드 숫자는 계산기와 같은 엔진에서 나온다(일반형 4일 합계 = 계산기 성인 1명 3박 결과)', async ({ page }) => {
    await mockRates(page);
    const date = (JSON.parse(readFileSync('src/data/generated/meta.json', 'utf8')) as { date: string }).date;
    await page.goto('/guide/tokyo?lang=ko');
    const guideTotal = await page.getByTestId('guide-example').locator('[data-style="standard"] td').first().locator('.amount').first().textContent();
    await page.goto(`/?lang=ko&city=tokyo&date=${date}&nights=3&adults=1&children=0&style=standard&cur=JPY`);
    await expect(page.getByTestId('total').locator('.amount').first()).toHaveText(guideTotal!);
  });

  test('정적 HTML 에 도시별 제목·본문이 있고, 없는 도시는 계산기로 간다', async ({ page, request }) => {
    const html = await (await request.get('/guide/osaka.html')).text();
    expect(html).toContain('<title>오사카 여행 경비·현지 물가');
    expect(html).toContain('<h1>오사카 여행 경비 가이드</h1>');
    expect(html).toContain('3박 4일 예상 현지 체류비');
    await mockRates(page);
    await page.goto('/guide/atlantis');
    await expect(page.locator('#city')).toBeVisible();
  });

  test('영어로 바꾸면 가이드 제목·메타가 영어가 된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guide/london?lang=ko');
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('main h1')).toHaveText('London travel cost guide');
    await expect(page).toHaveTitle(/^London travel costs & local prices/);
    await expect(page).toHaveURL(/\/guide\/london\?lang=en$/);
  });
});
