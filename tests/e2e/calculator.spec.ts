import { expect, fillTrip, mockRates, test } from './helpers';
import { readFileSync } from 'node:fs';

/** data:convert 가 만든 실제 도시 판정. 데이터가 바뀌면 기대값도 자동으로 따라간다. */
/** 공개(파일럿) 도시 목록. 도시를 공개해도 테스트를 고칠 필요가 없게 데이터에서 읽는다 */
const allCities = JSON.parse(readFileSync('src/data/generated/cities.json', 'utf8')) as Array<{ id: string; stage: string; country: string; nameKo: string }>;
const pilotCities = allCities.filter((c) => c.stage === '파일럿');
const status = JSON.parse(readFileSync('src/data/generated/status.json', 'utf8')) as Record<string, { computable: boolean; missing: string[] }>;

test.describe('계산기 핵심 흐름', () => {
  test('도시 선택 목록에는 파일럿 도시만 나오고 나라별로 묶이며 검색할 수 있다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    // 첫 화면은 도시를 미리 고르지 않는다: '도시를 선택하세요' 자리 + 공개 도시, 일정 칸도 비어 있고 안내만 보인다
    await expect(page.locator('#city')).toHaveValue('');
    await expect(page.locator('#date')).toHaveValue('');
    await expect(page.locator('#nights')).toHaveValue('');
    await expect(page.locator('#adults')).toHaveValue('');
    await expect(page.getByTestId('start-hint')).toBeVisible();
    await expect(page.getByTestId('total')).toHaveCount(0);
    await expect(page.locator('.field-error')).toHaveCount(0);
    const values = await page.locator('#city option').evaluateAll((os) => os.map((o) => (o as HTMLOptionElement).value).filter(Boolean));
    expect([...values].sort()).toEqual(pilotCities.map((c) => c.id).sort());
    // 국내/해외가 아니라 나라별로 묶는다
    await expect(page.locator('#city optgroup')).toHaveCount(new Set(pilotCities.map((c) => c.country)).size);
    // 검색: 결과가 하나면 바로 선택, 여러 개면 목록만 좁힌다
    await page.getByLabel('도시·나라 검색').fill('바르셀로나');
    await expect(page.locator('#city')).toHaveValue('barcelona');
    await page.getByLabel('도시·나라 검색').fill('일본');
    const japan = pilotCities.filter((c) => c.country === '일본').sort((a, b) => a.nameKo.localeCompare(b.nameKo, 'ko'));
    await expect(page.getByTestId('city-search-status')).toHaveText(`${japan.length}개 도시`);
    await expect(page.locator('#city option')).toHaveCount(japan.length + 1); // 고른 도시(바르셀로나) + 일본 도시
    await page.getByLabel('도시·나라 검색').press('Enter'); // 보이는 순서(가나다)의 첫 도시
    await expect(page.locator('#city')).toHaveValue(japan[0]!.id);
    await page.getByLabel('도시·나라 검색').fill('아틀란티스');
    await expect(page.getByTestId('city-search-status')).toContainText('아직 없는 도시');
    const soon = allCities.find((c) => c.stage !== '파일럿');
    if (soon) {
      await page.getByLabel('도시·나라 검색').fill(soon.nameKo);
      await expect(page.getByTestId('city-search-status')).toContainText(`${soon.nameKo}: 공식 가격을 모으는 중`);
    }
  });

  test('데이터가 충분한 도시: 범위·항목·출처·대표 음식·광고 자리까지 표시', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'KRW');

    const total = page.getByTestId('total');
    await expect(total).toBeVisible();
    // 선택 통화(원화)를 크게, 현지 통화(엔화)를 작게. USD 참고값은 따로 보이지 않는다
    await expect(total).toContainText('JP¥');
    await expect(total).toContainText('₩');
    await expect(total).not.toContainText('US$');
    await expect(total).toContainText('~'); // 최소~최대 범위
    await expect(page.getByTestId('daily-food')).toContainText('하루 평균 외식비');

    for (const c of ['food', 'transport', 'attraction', 'contingency']) {
      await expect(page.locator(`tr[data-category="${c}"]`)).toBeVisible();
    }
    // 기념품은 가격으로 추정하지 않는다(쇼핑·선물은 금액을 직접 적을 때만)
    await expect(page.locator('tr[data-category="souvenir"]')).toHaveCount(0);
    await expect(page.locator('tr[data-category="shopping"]')).toHaveCount(0);
    await expect(page.getByTestId('quality')).toContainText('사용 표본');
    // 단위가 다른 가격은 유형별 바스켓으로 나뉘어 표시된다
    await expect(page.getByTestId('baskets-food')).toContainText('식사');
    // 도쿄 지하철 24·48·72시간권(같은 상품 변형 1건) + 메트로 24시간권 + 메트로·도에이 공통 1일권 → 독립 3건(가격 5건)
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="pass"]')).toContainText('1일 이용권 독립 3건 (가격 5건) · 합계에 반영');
    await expect(page.getByTestId('baskets-transport').locator('[data-basket="ride"]')).toContainText('1회권 독립 3건 (가격 3건) · 합계에 반영');
    // 근거·출처 패널은 기본으로 접혀 있고, 펼치면 출처 링크가 보인다
    await expect(page.locator('details.evidence')).not.toHaveAttribute('open', '');
    await page.locator('details.evidence > summary').click();
    await expect(page.getByTestId('quality').getByRole('link').first()).toHaveAttribute('href', /^https?:\/\//);
    await expect(page.getByTestId('rates-info')).toContainText('2026-10-16');
    await expect(page.getByTestId('rates-info')).toContainText('ECB');

    // 광고는 자리만(좌우 레일 + 결과 뒤 인라인 1개). 실제 광고 코드·추적 스크립트 없음
    for (const slot of ['rail-left', 'rail-right', 'inline-results']) {
      await expect(page.locator(`[data-ad-slot="${slot}"]`)).toHaveCount(1);
    }
    expect(await page.locator('script[src*="googlesyndication"], script[src*="googletagmanager"], script[src*="doubleclick"], ins.adsbygoogle').count()).toBe(0);

    // 계산 결과 화면에는 물가표·현지 비용 메모를 두지 않는다(자료는 계산에만 쓴다)
    for (const id of ['price-guide', 'city-memos']) await expect(page.getByTestId(id)).toHaveCount(0);

    // 먹어 볼 음식은 결과 바로 아래에: 사진·이름·무슨 음식인지 한 줄(가게·예산대·추천 근거 없음)
    const foods = page.getByTestId('foods');
    await expect(foods).toContainText('도쿄에서 먹어 볼 음식');
    await expect(foods.locator('[data-food="Gyudon"]')).toContainText('규동');
    await expect(foods.locator('[data-food="Gyudon"]')).toContainText('소고기');
    await expect(foods).not.toContainText('추천 근거');
    await expect(foods).not.toContainText('예산대');
    await expect(foods).not.toContainText('스키야');

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

  test('결과 공유: 지금 주소(입력값 포함)와 요약·총액을 복사하고, 그 주소로 들어오면 같은 결과가 나온다', async ({ page, context }) => {
    await mockRates(page);
    await page.addInitScript(() => {
      // 공유 창이 없는 환경(데스크톱)을 가정하고 클립보드 내용을 기록한다
      Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
      Object.defineProperty(navigator, 'clipboard', { value: { writeText: async (s: string) => { (window as unknown as { copied: string }).copied = s; } }, configurable: true });
    });
    await page.goto('/');
    await fillTrip(page);
    const total = await page.getByTestId('total').locator('.amount').first().innerText();
    await page.getByTestId('share').click();
    await expect(page.getByText('링크를 복사했어요')).toBeVisible();
    const copied = await page.evaluate(() => (window as unknown as { copied: string }).copied);
    expect(copied).toContain(page.url());
    expect(copied).toContain('city=');
    const other = await context.newPage();
    await mockRates(other);
    await other.goto(page.url());
    await expect(other.getByTestId('total')).toBeVisible();
    expect(await other.getByTestId('total').locator('.amount').first().innerText()).toBe(total);
  });

  test('여행 스타일에 따라 결과가 바뀐다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    await fillTrip(page);
    const before = await page.getByTestId('total').innerText();
    await page.getByLabel('여유형').check({ force: true });
    await expect(page.getByTestId('total')).not.toHaveText(before);
  });

  test('쇼핑·선물 예산 칸에 금액을 적으면 총액에 더해진다(예비비 없음)', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=JPY');
    const before = (await page.getByTestId('total').textContent()) ?? '';
    const contingency = (await page.locator('tr[data-category="contingency"]').textContent()) ?? '';
    // 체크 없이 금액 칸이 바로 보이고, 제대로 입력할 수 있는 크기여야 한다
    const box = await page.getByLabel('쇼핑·선물 예산 (선택, JPY)').boundingBox();
    expect(box!.width).toBeGreaterThan(120);
    expect(box!.height).toBeGreaterThan(36);
    await page.getByLabel('쇼핑·선물 예산 (선택, JPY)').fill('30000');
    await expect(page).toHaveURL(/shop=1/);
    await expect(page).toHaveURL(/shopamt=30000/);
    await expect(page.locator('tr[data-category="shopping"]')).toContainText('JP¥30,000');
    await expect(page.getByTestId('total')).not.toHaveText(before);
    await expect(page.locator('tr[data-category="contingency"]')).toHaveText(contingency);
    // 금액을 지우면 줄이 사라지고 총액이 원래대로
    await page.getByLabel('쇼핑·선물 예산 (선택, JPY)').fill('');
    await expect(page.locator('tr[data-category="shopping"]')).toHaveCount(0);
    await expect(page.getByTestId('total')).toHaveText(before);
  });

  test('파일럿 도시 화면이 실제 데이터 판정과 일치한다(계산 가능 → 합계, 부족 → 부족 항목)', async ({ page }) => {
    test.setTimeout(30_000 + pilotCities.length * 1_500); // 도시가 늘어도 시간 초과로 실패하지 않게
    await mockRates(page);
    await page.goto('/');
    const label: Record<string, string> = { food: '외식', transport: '현지 교통', attraction: '관광지' };
    expect(Object.keys(status)).toHaveLength(pilotCities.length);
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

  test('조건부·부족 바스켓 경고가 결과에 표시된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/');
    // 실데이터: 세부 시내 교통은 조건부 표본(MyBus 등)을 쓴다(로마 외식은 2026-10-11 공식 메뉴로 바뀌어 조건부를 쓰지 않음). 부족 바스켓 경고 문구는 단위 테스트가 고정
    await fillTrip(page, { city: 'cebu' });
    const q = page.getByTestId('quality');
    await page.locator('details.evidence > summary').click();
    await expect(q.locator('[data-category="transport"]')).toContainText('"조건부"');
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

test.describe('환율(조사 고정값)', () => {
  test('외부 환율 API 없이 조사한 환율표로 환산하고 기준일·출처를 보여준다', async ({ page }) => {
    // 환율 서버·공개 환율 API 를 모두 막아도 환산이 된다
    await page.route('**/api/rates', (route) => route.abort());
    await page.route(/open\.er-api\.com|frankfurter|jsdelivr/, (route) => route.abort());
    await page.goto('/');
    await fillTrip(page);
    await page.selectOption('#currency', 'KRW');
    await expect(page.getByTestId('rates-error')).toHaveCount(0);
    await expect(page.getByTestId('total')).toContainText('₩');
    await expect(page.getByTestId('rates-info')).toContainText('2026-10-16');
    await expect(page.getByTestId('rates-info')).toContainText('ECB');
  });

  test('목록의 모든 통화가 조사 환율표에 있다(환산 불가 통화 없음)', async ({ page }) => {
    await page.goto('/');
    await fillTrip(page);
    for (const code of ['VND', 'TWD', 'AED', 'TRY', 'CNY']) {
      await page.selectOption('#currency', code);
      await expect(page.getByTestId('rates-unsupported')).toHaveCount(0);
      await expect(page.getByTestId('total')).not.toContainText('환산 불가');
    }
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
    await expect(privacy).toContainText('2026-10-18');
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
    // 고르기 전에는 관광지 비용 0, 목록은 접혀 있고 "눌러서 N곳 보기"가 보인다
    await expect(row).toContainText('선택 안 함');
    await expect(row).toContainText('£0.00');
    await expect(page.getByTestId('attractions').locator('details')).not.toHaveAttribute('open', '');
    await expect(page.getByTestId('attractions').locator('summary')).toContainText('눌러서');
    await page.getByTestId('attractions').locator('summary').click();
    await page.locator('[data-attraction="LON-AT-001"] input').check();
    await page.locator('[data-attraction="LON-AT-003"] input').check();
    await expect(page.getByTestId('attractions-status')).toContainText('2곳 선택 · +£179.00 ~ £208.00');
    await expect(page.locator('[data-attraction="LON-AT-001"] [data-testid="attr-added"]')).toContainText('+£95.00 (전체 3명)'); // 38×2 + 19
    await expect(row).toContainText('선택한 관광지 2곳');
    // 2×(38+29)+(19+26) = 179, 2×(38+39)+(19+35) = 208
    await expect(row).toContainText('£179.00 ~ £208.00');
    await expect(page).toHaveURL(/attr=LON-AT-001%2CLON-AT-003|attr=LON-AT-001,LON-AT-003/);
    await page.reload();
    await expect(page.locator('[data-attraction="LON-AT-003"] input')).toBeChecked();
    await expect(row).toContainText('£179.00 ~ £208.00');
    // 도시를 바꾸면 선택이 비워진다
    await page.selectOption('#city', 'paris');
    await expect(page.getByTestId('attractions-status')).toContainText('고른 곳 없음');
    await expect(page).not.toHaveURL(/attr=/);
  });

  test('입장료 목록은 성인·아동 요금, 변동 범위, 재검증 표시와 출처를 보여준다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=en&city=london&date=2026-11-04&nights=3&adults=1&children=0&style=standard&cur=USD');
    await page.getByTestId('attractions').locator('summary').click();
    const eye = page.locator('[data-attraction="LON-AT-003"]');
    await expect(eye).toContainText('Adult £29.00 ~ £39.00');
    await expect(eye).toContainText('Child £26.00 ~ £35.00');
    await expect(eye).toContainText('Varies by date or demand');
    await expect(page.locator('[data-attraction="LON-AT-005"]')).toContainText('Free');
    await expect(page.locator('[data-attraction="LON-AT-005"]')).toContainText('Needs re-verification');
    await expect(eye.getByRole('link')).toHaveAttribute('href', /^https:\/\//);
  });

  test('도시 가이드에는 그 도시만의 볼거리·팁이 있고, 경비 표·물가표는 없다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guide/tokyo?lang=ko');
    const notes = page.getByTestId('guide-notes');
    await expect(notes).toContainText('도쿄에서 놓치지 말 것');
    await expect(notes).toContainText('센소지');
    const tips = page.getByTestId('guide-tips');
    await expect(tips).toContainText('도쿄 여행 팁과 조심할 점');
    const when = page.getByTestId('guide-when');
    await expect(when).toContainText('도쿄 언제 가면 좋을까');
    await expect(when).toContainText('벚꽃');
    await expect(page.getByTestId('guide-toc').getByRole('link', { name: '언제 갈까' })).toHaveAttribute('href', '#when');
    await expect(page.getByTestId('guide-intro')).toContainText('아사쿠사');
    await expect(page.getByTestId('guide-stay')).toContainText('신주쿠');
    await expect(page.getByTestId('guide-toc').getByRole('link', { name: '숙소 위치' })).toHaveAttribute('href', '#stay');
    await expect(page.getByTestId('guide-example')).toHaveCount(0);
    await expect(page.getByTestId('price-guide')).toHaveCount(0);
    const country = page.getByTestId('guide-country');
    await expect(country).toContainText('일본 여행 시 알아둘 것');
    await expect(country).toContainText('일본에서 조심할 것');
    await expect(page.getByTestId('guide-others')).toHaveCount(0);
  });

  test('크리스마스 마켓 도시는 가이드에 마켓 칸이 있고, 가이드 목록 맨 위에 모여 있다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guide/dresden?lang=ko');
    const x = page.getByTestId('guide-christmas');
    await expect(x).toContainText('드레스덴 크리스마스 마켓');
    await expect(x).toContainText('슈트리첼마르크트');
    await expect(page.getByTestId('guide-toc').getByRole('link', { name: '크리스마스 마켓' })).toHaveAttribute('href', '#christmas');
    await page.goto('/guide/bangkok?lang=ko');
    await expect(page.getByTestId('guide-christmas')).toHaveCount(0);
    await page.goto('/guides?lang=ko');
    const xc = page.getByTestId('guide-xmas-cities');
    await expect(xc.locator('[data-xmas-city="dresden"]')).toBeHidden();
    await xc.locator('summary').click();
    await expect(xc.locator('[data-xmas-city="dresden"]')).toBeVisible();
  });

  test('도시별 하루 경비 비교: 싼 순 표, 도시·나라로 찾기, 도시 가이드로 이동', async ({ page }) => {
    await mockRates(page);
    await page.goto('/compare?lang=ko');
    const c = page.getByTestId('compare');
    await expect(c.getByRole('heading', { level: 1 })).toHaveText('도시별 하루 여행 경비 비교');
    await expect(c.locator('tbody tr').first()).toContainText('1');
    await page.getByLabel('도시·나라 찾기').fill('일본');
    await expect(c.locator('[data-compare-city="osaka"]')).toBeVisible();
    await expect(c.locator('[data-compare-city="paris"]')).toHaveCount(0);
    await c.locator('[data-compare-city="osaka"]').getByRole('link').click();
    await expect(page.getByTestId('city-guide')).toBeVisible();
  });

  test('계산 방법 페이지: 계산 순서·실제 계산 예시·한계가 있고, 예시 조건으로 계산기를 연다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/how-it-works?lang=ko');
    const m = page.getByTestId('how-it-works');
    await expect(m.getByRole('heading', { level: 1 })).toHaveText('여행 경비 계산 방법');
    const ex = page.getByTestId('method-example');
    await expect(ex).toContainText('오사카 3박 4일, 성인 2명');
    await expect(ex).toContainText('합계');
    await ex.getByRole('link', { name: '같은 조건으로 계산기 열기' }).click();
    await expect(page).toHaveURL(/city=osaka/);
    await expect(page.getByTestId('total')).toBeVisible();
  });

  test('크리스마스 마켓 일정 모음 페이지: 나라별 도시·기간·공식 안내, 가이드 목록에서 들어간다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guides?lang=ko');
    await page.getByTestId('guide-xmas-cities').locator('summary').click();
    await page.getByTestId('guide-xmas-cities').getByRole('link', { name: '2026 크리스마스 마켓 일정 한눈에 보기' }).click();
    await expect(page).toHaveURL(/\/christmas-markets\?lang=ko/);
    const x = page.getByTestId('xmas-page');
    await expect(x.getByRole('heading', { level: 1 })).toHaveText('2026 유럽 크리스마스 마켓 일정 총정리');
    const dresden = x.locator('[data-xmas-row="dresden"]');
    await expect(dresden).toContainText('2026년 11월 25일~12월 24일');
    await expect(dresden.getByRole('link', { name: '공식 안내' })).toHaveAttribute('href', /^https:\/\//);
    await dresden.getByRole('link', { name: '드레스덴 여행 가이드·경비 보기' }).click();
    await expect(page.getByTestId('guide-christmas')).toBeVisible();
    await expect(page).toHaveTitle(/드레스덴/);
  });

  test('가이드 목록은 나라별로 묶이고 도시·나라 이름으로 검색된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guides?lang=ko');
    const list = page.getByTestId('guides');
    await expect(list.locator('[data-country="Japan"] [data-city="osaka"]')).toBeVisible();
    await page.getByLabel('도시·나라 검색').fill('이탈리아');
    await expect(list.locator('[data-city="rome"]')).toBeVisible();
    await expect(list.locator('[data-city="osaka"]')).toHaveCount(0);
    await page.getByLabel('도시·나라 검색').fill('없는도시zz');
    await expect(list.getByRole('status')).toBeVisible();
  });
});

test.describe('항목별 자세히 보기·음주', () => {
  test('외식은 일차별 끼니·1끼 가격, 관광지는 고른 곳별 입장료, 항목별 예비비가 펼쳐진다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=1&style=standard&cur=JPY&attr=TYO-AT-001,TYO-AT-002');
    const food = page.locator('[data-detail="food"]');
    await food.locator('summary').click();
    // 식사 줄이 먼저, 이어서 간식·음료 줄(같은 일차 표시)이 나온다
    await expect(food.locator('[data-line="day-1"]').first()).toContainText('1일차');
    await expect(food.locator('[data-line="day-1"]').first()).toContainText('3끼 × 80%');
    await expect(food.locator('[data-line="day-2"]').first()).toContainText('3끼');
    await expect(food.locator('[data-line="day-4"]').first()).toContainText('2026-11-07');
    await expect(food.locator('[data-line="contingency"]')).toContainText('예비비 10%');
    const attr = page.locator('[data-detail="attraction"]');
    await attr.locator('summary').click();
    await expect(attr.locator('[data-line="TYO-AT-001"]')).toContainText('도쿄 스카이트리');
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('JP¥1,500');
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('JP¥900'); // 초등학생 요금
    await expect(attr.locator('[data-line="TYO-AT-002"]')).toContainText('JP¥3,900'); // 1,500 × 2명 + 900
    await expect(page.locator('tr[data-category="contingency"]')).toContainText('예비비');
  });

  test('음주 포함을 고르면 URL 에 남고 외식비에 주류가 더해진다(주류 표본이 3건 미만이면 더하지 않고 알린다)', async ({ page }) => {
    await mockRates(page);
    // 파리: 주류 독립 표본 3건 → 외식 합계가 늘고 자세히 보기에 주류 줄이 생긴다
    await page.goto('/?lang=ko&city=paris&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=EUR');
    await expect(page.getByTestId('rates-info')).toHaveCount(1); // 환율 안내는 근거·출처 패널 안
    const food = page.locator('tr[data-category="food"]');
    const before = (await food.textContent()) ?? '';
    await page.getByLabel('음주 포함 (성인)').check();
    await expect(page).toHaveURL(/drink=1/);
    await expect(food).not.toHaveText(before);
    await expect(page.getByTestId('drink-note')).toHaveCount(0);
    // 바르셀로나: 주류 독립 표본 3건(2026-10-09 파브리카 모리츠 추가) → 근거 패널에 주류가 합계에 반영된다고 보인다
    await page.goto('/?lang=ko&city=barcelona&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=EUR&drink=1');
    await page.locator('details.evidence > summary').click();
    await expect(page.getByTestId('quality').locator('[data-category="food"]')).toContainText('주류 독립 3건');
    await expect(page.getByTestId('drink-note')).toHaveCount(0);
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
    await expect(page).toHaveTitle(/^파리 여행 경비·물가, 볼거리와 여행 팁 — 여행 경비 계산기$/);
    await expect(page.getByTestId('guide-attractions')).toContainText('에펠탑');
    // 위·아래 두 곳에 같은 버튼: 누르면 도시와 추천 박 수를 채운 계산기로 간다(날짜는 사용자가 입력)
    await expect(page.getByRole('link', { name: '파리 4박 5일 여행 경비 계산해 보기' })).toHaveCount(2);
    await page.getByRole('link', { name: '파리 4박 5일 여행 경비 계산해 보기' }).first().click();
    await expect(page.locator('#city')).toHaveValue('paris');
    await expect(page.locator('#nights')).toHaveValue('4');
    await expect(page.locator('#date')).toHaveValue('');
  });

  test('정적 HTML 에 도시별 제목·본문이 있고, 없는 도시는 계산기로 간다', async ({ page, request }) => {
    const html = await (await request.get('/guide/osaka.html')).text();
    expect(html).toContain('<title>오사카 여행 경비·물가, 볼거리와 여행 팁 — 여행 경비 계산기</title>');
    expect(html).toContain('<h1>오사카 여행 경비 가이드</h1>');
    expect(html).toContain('오사카 3박 4일 여행 경비 계산해 보기');
    expect(html).toContain('오사카 숙소, 어디에 잡을까');
    expect(html).toContain('오사카에서 놓치지 말 것');
    expect(html).not.toContain('3박 4일 예상 현지 체류비');
    await mockRates(page);
    await page.goto('/guide/atlantis');
    await expect(page.locator('#city')).toBeVisible();
  });

  test('영어로 바꾸면 가이드 제목·메타가 영어가 된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guide/london?lang=ko');
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page.locator('main h1')).toHaveText('London travel cost guide');
    await expect(page).toHaveTitle(/^London trip cost, local prices & tips/);
    await expect(page).toHaveURL(/\/guide\/london\?lang=en$/);
  });

  test('일본어로 바꾸면 화면·도시 이름·기본 통화가 일본어 기준이 된다', async ({ page }) => {
    await mockRates(page);
    await page.goto('/guide/tokyo?lang=ko');
    await page.getByRole('button', { name: '日本語' }).click();
    await expect(page).toHaveURL(/\/guide\/tokyo\?lang=ja$/);
    await expect(page.locator('main h1')).toHaveText('東京の旅行費用ガイド');
    await expect(page).toHaveTitle(/^東京旅行の費用・現地の物価/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
    await expect(page.getByTestId('guide-attractions')).toContainText('大人');
    // 일본어권 표기로 확인된 데이터 이름은 일본어로 보인다(음역 행은 영문)
    await expect(page.getByTestId('guide-attractions')).toContainText('東京タワー');
    await page.goto('/?lang=ja');
    await expect(page.locator('main h1')).toHaveText('現地でいくら使う？');
    await page.locator('#city-search').fill('上海');
    await expect(page.locator('#city')).toHaveValue('shanghai');
  });
});

test.describe('자세히 설정', () => {
  test('교통 이용권을 고르면 결과와 URL 에 반영되고, 꼭 먹을 음식 선택은 없다', async ({ page }) => {
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=JPY');
    const plan = page.getByTestId('plan');
    await plan.locator('summary').click();
    // 교통: 72시간권으로 4일 → 1인 2장
    await plan.getByLabel('교통 이용권 쓰기').check();
    await page.selectOption('#pass-id', 'TYO-TR-003');
    await expect(page.getByTestId('pass-need')).toContainText('2장');
    await expect(page.locator('tr[data-category="transport"]')).toContainText('이용권 1인 2장');
    await expect(page).toHaveURL(/tm=pass/);
    await expect(page).toHaveURL(/pass=TYO-TR-003/);
    await expect(page.getByTestId('plan-must-eat')).toHaveCount(0);
    // 새로고침해도 유지
    await page.reload();
    await expect(page.locator('#pass-id')).toHaveValue('TYO-TR-003');
  });

  test('교통 거의 안 탐을 고르면 교통비가 0 이 된다', async ({ page }) => {
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=JPY&tm=none');
    await expect(page.getByTestId('plan').locator('details')).toHaveAttribute('open', '');
    await expect(page.locator('tr[data-category="transport"]')).toContainText('이용 안 함');
  });
});

test.describe('음주 자세히', () => {
  test('간단히는 체크만, 자세히는 하루 잔 수와 마실 술을 고르면 결과·URL 에 반영된다', async ({ page }) => {
    await page.goto('/?lang=ko&city=tokyo&date=2026-11-04&nights=3&adults=2&children=0&style=standard&cur=JPY');
    const plan = page.getByTestId('plan');
    await plan.locator('summary').click();
    const drinks = page.getByTestId('plan-drinks');
    // 계산기의 "음주 포함"과 같은 값
    await drinks.getByLabel(/음주 비용 계산하기/).check();
    await expect(page.locator('#drinks')).toBeChecked();
    await page.selectOption('#drinks-per-day', '2');
    await page.selectOption('#drink-pick', 'TYO-FD-951');
    await drinks.getByRole('button', { name: '추가', exact: true }).click();
    await expect(page.locator('#drink-price-0')).not.toHaveValue('');
    await expect(page).toHaveURL(/dpd=2/);
    await expect(page).toHaveURL(/dk=/);
    await expect(page.getByTestId('quality')).toContainText('하루 2잔');
    // 음주를 끄면 잔 수·술 선택은 URL 에서 빠진다
    await page.locator('#drinks').uncheck();
    await expect(page).not.toHaveURL(/dpd=|dk=/);
  });
});
