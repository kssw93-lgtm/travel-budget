/** 사이트 페이지 목록(계산기 + 정적 안내 페이지). 주소·정적 HTML·메타가 모두 이 목록을 따른다. */
export type PageId = 'calculator' | 'about' | 'privacy';

export const PAGE_PATHS: Record<PageId, string> = {
  calculator: '/',
  about: '/about',
  privacy: '/privacy',
};

export function pageOf(pathname: string): PageId {
  const p = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  const hit = (Object.keys(PAGE_PATHS) as PageId[]).find((id) => PAGE_PATHS[id] === p);
  return hit ?? 'calculator';
}

/** 문의 이메일(빌드 시 VITE_CONTACT_EMAIL). 없으면 null — 화면에 "운영 시작 시 기재" 로 표시 */
export const contactEmail: string | null = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || null;
