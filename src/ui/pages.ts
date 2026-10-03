/** 사이트 페이지 목록(계산기 + 정적 안내 페이지 + 도시 가이드). 주소·정적 HTML·메타가 모두 이 목록을 따른다. */
export type PageId = 'calculator' | 'about' | 'privacy' | 'guides' | 'guide';

export const PAGE_PATHS: Record<Exclude<PageId, 'guide'>, string> = {
  calculator: '/',
  about: '/about',
  privacy: '/privacy',
  guides: '/guides',
};

export interface Route {
  page: PageId;
  /** 도시 가이드(page === 'guide')의 도시 */
  cityId?: string;
}

const normalize = (pathname: string) => pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';

/** 주소 → 페이지. 없는 도시의 가이드나 모르는 주소는 계산기로 보낸다 */
export function routeOf(pathname: string, cityIds: readonly string[]): Route {
  const p = normalize(pathname);
  const guide = /^\/guide\/([a-z0-9-]+)$/.exec(p);
  if (guide?.[1] && cityIds.includes(guide[1])) return { page: 'guide', cityId: guide[1] };
  const hit = (Object.keys(PAGE_PATHS) as Array<keyof typeof PAGE_PATHS>).find((id) => PAGE_PATHS[id] === p);
  return { page: hit ?? 'calculator' };
}

export const routePath = (r: Route): string => (r.page === 'guide' ? `/guide/${r.cityId}` : PAGE_PATHS[r.page]);

/** 문의 이메일(빌드 시 VITE_CONTACT_EMAIL). 없으면 null — 화면에 "운영 시작 시 기재" 로 표시 */
export const contactEmail: string | null = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || null;
