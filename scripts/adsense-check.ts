/**
 * AdSense 신청 전 점검. 실제 값으로 빌드한 뒤 실행한다:
 *   SITE_URL=https://내도메인 VITE_CONTACT_EMAIL=문의@내도메인 ADSENSE_PUBLISHER_ID=pub-… npm run build
 *   npm run adsense:check
 */
import { checkAdsenseReady } from './adsense-ready';

const results = checkAdsenseReady(process.argv[2] ?? 'dist');
for (const r of results) console.log(`${r.ok ? '✅' : r.optional ? 'ℹ️ ' : '❌'} ${r.item}${r.ok ? '' : `\n   → ${r.fix}`}`);
const failed = results.filter((r) => !r.ok && !r.optional).length;
console.log(failed ? `\n${failed}개 기술 항목을 고친 뒤 다시 빌드·점검하세요.` : '\n기본 기술 점검 통과: 콘텐츠 고유 가치와 실제 AdSense 승인 여부는 이 자동 점검으로 판단할 수 없습니다. 계정의 구체적인 반려 사유도 확인하세요.');
process.exit(failed ? 1 : 0);
