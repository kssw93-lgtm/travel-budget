/**
 * AdSense 신청 전 점검. 실제 값으로 빌드한 뒤 실행한다:
 *   SITE_URL=https://내도메인 VITE_CONTACT_EMAIL=문의@내도메인 ADSENSE_PUBLISHER_ID=pub-… npm run build
 *   npm run adsense:check
 */
import { checkAdsenseReady } from './adsense-ready';

const results = checkAdsenseReady(process.argv[2] ?? 'dist');
for (const r of results) console.log(`${r.ok ? '✅' : r.optional ? 'ℹ️ ' : '❌'} ${r.item}${r.ok ? '' : `\n   → ${r.fix}`}`);
const failed = results.filter((r) => !r.ok && !r.optional).length;
console.log(failed ? `\n${failed}개 항목을 고친 뒤 다시 빌드·점검하세요.` : '\n신청 준비 완료: 배포 후 AdSense 에서 사이트를 추가하고 검토를 요청하세요.');
process.exit(failed ? 1 : 0);
