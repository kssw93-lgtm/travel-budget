import cities from '../src/data/generated/cities.json';
import type { City } from '../src/core/types';
import { CITY_JA } from '../src/i18n/places';
import { shareMeta } from './share-meta';

/** 정식 주소(검색엔진·공유용). workers.dev 로 들어오면 이 주소로 영구 이동한다 */
export const CANONICAL_ORIGIN = 'https://howmuchthere.com';

const PAGE_PATHS = new Set(['/', '/guides', '/how-it-works', '/compare', '/about', '/privacy']);
const isPage = (p: string) => PAGE_PATHS.has(p) || /^\\/guide\\/[a-z0-9-]+$/.test(p);

/** 영문·일문 페이지의 OG 주소를 요청 언어와 실제 공유 URL에 맞춘다 */
function localizedOgUrl(html: string, url: URL): string {
  const lang = url.searchParams.get('lang');
  if (lang !== 'en' && lang !== 'ja') return html;
  const escapedUrl = url.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escapedUrl}$2`);
}

/** 페이지 요청 처리: 정식 주소로 이동, 언어별 정적 HTML 선택, 공유 링크 미리보기 */
export async function page(request: Request, assets: Fetcher): Promise<Response> {
  const url = new URL(request.url);
  if (url.hostname.endsWith('.workers.dev') && (request.method === 'GET' || request.method === 'HEAD')) {
    return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
  }
  const legacyChristmasPath = url.pathname.replace(/\\/+$/, '');
  if (legacyChristmasPath === '/christmas-markets' || legacyChristmasPath === '/christmas-markets.html') {
    const target = new URL('/guides', url);
    const lang = url.searchParams.get('lang');
    if (lang === 'ko' || lang === 'en' || lang === 'ja') target.searchParams.set('lang', lang);
    return Response.redirect(target.toString(), 301);
  }
  // 언어별 정적 파일 폴더는 직접 열 수 없다(같은 내용이 두 주소로 색인되지 않게). .html 주소는 확장자 없는 주소로
  if (url.pathname.startsWith('/_l/')) return assets.fetch(new Request(new URL('/__not_found__', url), request));
  if (url.pathname.endsWith('.html') && url.pathname !== '/404.html') {
    const clean = url.pathname.replace(/(index)?\\.html$/, '') || '/';
    return Response.redirect(`${url.origin}${clean}${url.search}`, 301);
  }
  const lang = url.searchParams.get('lang');
  let res: Response;
  if ((lang === 'en' || lang === 'ja') && isPage(url.pathname)) {
    const target = new URL(url.pathname === '/' ? `/_l/${lang}/` : `/_l/${lang}${url.pathname}`, url);
    res = await assets.fetch(new Request(target, request));
  } else {
    res = await assets.fetch(request);
  }
  if (!res.ok || !(res.headers.get('content-type') ?? '').includes('text/html')) return res;

  let html = await res.text();
  const originalHtml = html;
  // X 등 공유 크롤러가 정적 파일의 기본 한국어 og:url 을 읽지 않도록 요청 언어와 주소를 맞춘다.
  html = localizedOgUrl(html, url);
  // 첫 화면: 공유 링크의 도시·일정을 미리보기 제목·설명에 넣는다
  if (url.pathname === '/' && url.searchParams.has('city')) {
    html = shareMeta(html, url, cities as City[], CITY_JA);
  }
  if (html === originalHtml) return res;
  const headers = new Headers(res.headers);
  headers.delete('content-length');
  return new Response(html, { status: res.status, statusText: res.statusText, headers });
}
