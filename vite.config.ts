import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 개발 중에는 `npm run dev:worker`(wrangler dev, 8787)로 /api/* 를 프록시한다.
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
  preview: { port: 4173 },
});
