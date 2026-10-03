import type { City } from '../core/types';
import { fmt, messages, type Lang } from '../i18n';
import { routePath, type Route } from './pages';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** 페이지·언어에 맞춰 문서 언어, 제목, 설명, Open Graph, canonical 을 갱신한다. */
export function applyMeta(lang: Lang, route: Route, city?: City) {
  const t = messages[lang];
  const name = city ? (lang === 'ko' ? city.nameKo : city.nameEn) : '';
  const page = route.page;
  const pageTitle = {
    calculator: '',
    about: t.about.title,
    privacy: t.privacy.title,
    guides: t.cityGuide.indexTitle,
    guide: fmt(t.cityGuide.metaTitle, { city: name }),
  }[page];
  const title = pageTitle ? `${pageTitle} — ${t.meta.title}` : t.meta.title;
  const description = {
    calculator: t.meta.description,
    about: t.meta.aboutDescription,
    privacy: t.meta.privacyDescription,
    guides: t.cityGuide.indexDescription,
    guide: fmt(t.cityGuide.metaDescription, { city: name }),
  }[page];
  document.documentElement.lang = lang;
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:locale', lang === 'ko' ? 'ko_KR' : 'en_US');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  // canonical 은 빌드 시 SITE_URL 이 있을 때만 존재한다(data-base 에 사이트 주소)
  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"][data-base]');
  if (canonical) canonical.href = `${canonical.dataset.base}${routePath(route)}?lang=${lang}`;
}
