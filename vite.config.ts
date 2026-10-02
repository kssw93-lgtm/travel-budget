import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** e2e 모드 빌드에서만 가격 표본 JSON 을 테스트용 파일로 바꾼다(tests/e2e/make-fixture.ts 가 생성). */
const e2eFixture = (): Plugin => ({
  name: 'e2e-fixture-data',
  enforce: 'pre',
  resolveId(source) {
    if (/generated\/samples\.json$/.test(source)) return resolve(__dirname, 'tests/e2e/.fixture/samples.json');
    return null;
  },
});

// 개발 중에는 `npm run dev:worker`(wrangler dev, 8787)로 /api/* 를 프록시한다.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'e2e' ? [e2eFixture()] : [])],
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
}));
