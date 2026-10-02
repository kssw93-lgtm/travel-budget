/**
 * 화면 이동·URL 상태의 한 곳. 운영 빌드는 브라우저 주소(history)를 쓰고,
 * 미리보기 빌드(VITE_PREVIEW=1, 주소를 바꿀 수 없는 비공개 미리보기 페이지용)는 메모리 안에서만 이동한다.
 */
export interface Loc {
  pathname: string;
  search: string;
  hash: string;
}

export const isPreview = import.meta.env.VITE_PREVIEW === '1';

let memory: Loc = { pathname: '/', search: '', hash: '' };

function parse(to: string): Loc {
  const u = new URL(to, 'http://local');
  return { pathname: u.pathname, search: u.search, hash: u.hash };
}

export function currentLoc(): Loc {
  if (isPreview) return { ...memory };
  return { pathname: window.location.pathname, search: window.location.search, hash: window.location.hash };
}

export function pushLoc(to: string): void {
  if (isPreview) memory = parse(to);
  else window.history.pushState({}, '', to);
}

export function replaceLoc(to: string): void {
  if (isPreview) memory = parse(to);
  else window.history.replaceState({}, '', to);
}
