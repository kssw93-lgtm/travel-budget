/**
 * AdSense 신청 전 점검: 빌드 결과(dist)만 보고 승인 심사에 필요한 것이 갖춰졌는지 확인한다.
 * 실제 값(도메인·이메일·게시자 ID)은 빌드 환경변수로 넣으며, 여기서는 결과물에 제대로 들어갔는지만 본다.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export interface CheckResult {
  ok: boolean;
  item: string;
  /** 실패했을 때 할 일 */
  fix: string;
  /** 선택 항목: 없어도 신청은 가능(점검 실패로 세지 않음) */
  optional?: boolean;
}

const PLACEHOLDER = /example\.com|pub-0{16}|test@/i;
const read = (dir: string, file: string) => (existsSync(join(dir, file)) ? readFileSync(join(dir, file), 'utf8') : null);
/** 정적 본문(JS 실행 전 크롤러가 보는 글)의 글자 수 */
const fallbackText = (html: string) =>
  (/<div class="fallback">([\s\S]*?)<noscript>/.exec(html)?.[1] ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function checkAdsenseReady(dir: string): CheckResult[] {
  const out: CheckResult[] = [];
  const add = (ok: boolean, item: string, fix: string, optional = false) => out.push({ ok, item, fix, optional });

  const pages = ['index.html', 'about.html', 'privacy.html', 'guides.html'];
  const guideDir = join(dir, 'guide');
  const guides = existsSync(guideDir) ? readdirSync(guideDir).filter((f) => f.endsWith('.html')).map((f) => `guide/${f}`) : [];
  const all = [...pages, ...guides];
  const html = Object.fromEntries(all.map((f) => [f, read(dir, f)]));

  add(pages.every((f) => html[f]), '빌드 결과에 계산기·소개·개인정보처리방침·가이드 목록 페이지가 있음', 'npm run build 를 먼저 실행하세요.');

  const sitemap = read(dir, 'sitemap.xml');
  add(
    !!sitemap && ['/about', '/privacy', '/guides', '/guide/'].every((p) => sitemap.includes(p)),
    'sitemap.xml 에 소개·개인정보처리방침·도시 가이드가 들어 있음',
    'SITE_URL=https://내도메인 을 빌드 환경변수로 넣으세요.',
  );
  add(/^Sitemap: https:\/\//m.test(read(dir, 'robots.txt') ?? ''), 'robots.txt 가 https sitemap 을 가리킴', 'SITE_URL 은 https:// 로 시작해야 합니다.');

  const about = html['about.html'] ?? '';
  const privacy = html['privacy.html'] ?? '';
  add(
    /@/.test(fallbackText(privacy)),
    '(선택) 소개·개인정보처리방침에 문의 이메일이 보임',
    '필수는 아님. 가격 오류 제보를 받고 싶으면 VITE_CONTACT_EMAIL=이메일 을 넣으세요.',
    true,
  );
  add(
    ['Google', 'adssettings.google.com', 'aboutads.info'].every((w) => fallbackText(privacy).includes(w)),
    '개인정보처리방침 정적 HTML 에 Google 광고 쿠키·맞춤 광고 해제 안내가 있음',
    'privacy 문구(src/i18n/ko.ts)와 빌드 설정(vite.config.ts)을 확인하세요.',
  );
  add(fallbackText(about).length >= 500, '소개 페이지 정적 본문이 충분함(500자 이상)', 'about 문구(src/i18n/ko.ts)를 확인하세요.');

  add(existsSync(join(dir, 'ads.txt')), 'ads.txt 가 있음', 'ADSENSE_PUBLISHER_ID=pub-16자리 를 빌드 환경변수로 넣으세요(AdSense 가입 후).');
  const missingMeta = all.filter((f) => html[f] && !/<meta name="google-adsense-account" content="ca-pub-\d{16}"/.test(html[f]!));
  add(
    missingMeta.length === 0,
    '모든 페이지에 AdSense 사이트 소유권 확인 태그가 있음',
    missingMeta.length === all.length ? 'ADSENSE_PUBLISHER_ID 를 넣고 다시 빌드하세요.' : `태그가 빠진 페이지: ${missingMeta.join(', ')}`,
  );

  const thin = guides.filter((f) => fallbackText(html[f] ?? '').length < 800);
  add(guides.length >= 10 && thin.length === 0, `도시 가이드 ${guides.length}개가 각자 고유한 정적 본문을 가짐(800자 이상)`, thin.length ? `본문이 짧은 가이드: ${thin.join(', ')}` : '도시 가이드가 10개 미만입니다.');

  const titles = all.map((f) => /<title>([^<]*)<\/title>/.exec(html[f] ?? '')?.[1] ?? '');
  add(titles.every((t) => t) && new Set(titles).size === titles.length, '페이지마다 제목이 있고 서로 다름', '제목이 비었거나 겹치는 페이지가 있습니다.');

  const placeholder = [...all, 'ads.txt', 'sitemap.xml', 'robots.txt'].filter((f) => PLACEHOLDER.test(read(dir, f) ?? ''));
  add(placeholder.length === 0, '예시 값(example.com, pub-0000…, test@)이 남아 있지 않음', `예시 값이 남은 파일: ${placeholder.join(', ')} — 실제 값으로 다시 빌드하세요.`);

  return out;
}
