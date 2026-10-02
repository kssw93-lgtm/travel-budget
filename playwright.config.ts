import { existsSync } from 'node:fs';
import { defineConfig, devices } from '@playwright/test';

// 사전 설치된 Chromium 이 있으면 그것을 쓰고(클라우드 개발 환경), 없으면 Playwright 기본 브라우저(CI)를 쓴다.
const preinstalled = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const launchOptions = existsSync(preinstalled) ? { executablePath: preinstalled } : {};
const mobile = (width: number, height: number) => ({
  ...devices['Pixel 5'],
  viewport: { width, height },
  screen: { width, height },
  launchOptions,
});

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL: 'http://127.0.0.1:4173', locale: 'ko-KR', launchOptions, trace: 'retain-on-failure' },
  webServer: {
    // 배포와 같은 빌드(실제 가격 데이터만)를 띄워 검사한다
    command: 'vite build && vite preview --host 127.0.0.1 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, launchOptions } },
    { name: 'mobile-375', use: mobile(375, 667) },
    { name: 'mobile-320', use: mobile(320, 568) },
  ],
});
