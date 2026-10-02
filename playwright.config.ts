import { existsSync } from 'node:fs';
import { defineConfig, devices } from '@playwright/test';

// 사전 설치된 Chromium 이 있으면 그것을 쓰고, 없으면 Playwright 기본 브라우저를 쓴다.
const preinstalled = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const launchOptions = existsSync(preinstalled) ? { executablePath: preinstalled } : {};

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4173', locale: 'ko-KR', launchOptions },
  webServer: { command: 'tsx tests/e2e/make-fixture.ts && vite build --mode e2e --outDir dist-e2e --emptyOutDir && vite preview --outDir dist-e2e --host 127.0.0.1', url: 'http://127.0.0.1:4173', reuseExistingServer: !process.env.CI, timeout: 120_000 },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, launchOptions } },
    { name: 'mobile', use: { ...devices['Pixel 5'], launchOptions } },
  ],
});
