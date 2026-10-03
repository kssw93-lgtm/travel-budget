import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { cities, cityById, dataDate } from '../data';
import { I18nProvider, detectLang, fmt, messages, type Lang } from '../i18n';
import { AdSlot } from './AdSlot';
import { Calculator } from './Calculator';
import { About, Privacy } from './InfoPages';
import { CityGuidePage, GuideIndex } from './CityGuide';
import { routeOf } from './pages';
import { applyMeta } from './meta';
import { calcMemory, readLang, withLang } from './urlState';
import { currentLoc, isPreview, pushLoc, replaceLoc, type Loc } from './router';

export type Go = (to: string) => void;


const current = (): Loc => currentLoc();

function useLocation(): [Loc, Go] {
  const [loc, setLoc] = useState<Loc>(current);
  useEffect(() => {
    const onPop = () => setLoc(current());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const go = useCallback<Go>((to) => {
    pushLoc(to);
    setLoc(current());
  }, []);
  return [loc, go];
}

/** 같은 사이트 안의 링크는 새로고침 없이 이동한다(수정 키·가운데 클릭은 브라우저 기본 동작). */
export function InternalLink({ to, go, children, ...rest }: { to: string; go: Go; children: ReactNode; className?: string; 'aria-current'?: 'page' }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

export function App() {
  const [loc, go] = useLocation();
  const [lang, setLang] = useState<Lang>(() => readLang(currentLoc().search) ?? detectLang());
  const t = messages[lang];
  const route = routeOf(loc.pathname, cities.map((c) => c.id));
  const page = route.page;
  const guideCity = route.cityId ? cityById(route.cityId) : undefined;
  const first = useRef(true);

  // 언어·페이지가 바뀌면 문서 언어와 SEO 메타를 갱신하고 언어 선택을 기억한다
  useEffect(() => {
    applyMeta(lang, route, guideCity);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* 저장소를 못 쓰는 환경 */
    }
    if (page !== 'calculator') {
      const next = `${loc.pathname}${withLang(loc.search, lang)}${loc.hash}`;
      if (next !== `${loc.pathname}${loc.search}${loc.hash}`) replaceLoc(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, page, guideCity, loc.pathname, loc.search, loc.hash]);

  // 페이지 이동 시: 앵커가 있으면 그 위치로, 없으면 맨 위로 가고 본문 제목에 포커스(스크린리더 안내)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      if (!loc.hash) return;
    }
    const target = loc.hash ? document.getElementById(decodeURIComponent(loc.hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView();
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true });
    }
  }, [loc.pathname, loc.hash]);

  const calcHref = `/${calcMemory.search || `?lang=${lang}`}`;

  return (
    <I18nProvider lang={lang}>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <header className="site-header">
        <div className="wrap bar">
          <InternalLink className="brand" to={calcHref} go={go}>
            <span aria-hidden="true">✈</span> {lang === 'ko' ? '여행 경비 계산' : 'Travel Budget'}
          </InternalLink>
          <nav aria-label={t.nav.main}>
            <InternalLink to={calcHref} go={go} aria-current={page === 'calculator' ? 'page' : undefined}>{t.nav.calculator}</InternalLink>
            <InternalLink to={`/guides?lang=${lang}`} go={go} aria-current={page === 'guides' || page === 'guide' ? 'page' : undefined}>{t.nav.guides}</InternalLink>
            <InternalLink to={`/about?lang=${lang}`} go={go} aria-current={page === 'about' ? 'page' : undefined}>{t.footer.about}</InternalLink>
          </nav>
          <div className="lang" role="group" aria-label={t.nav.language}>
            {(['ko', 'en'] as const).map((l) => (
              <button key={l} type="button" lang={l} aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l === 'ko' ? '한국어' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </header>
      <div className="shell">
        <div className="ad-rail">
          <AdSlot name="rail-left" />
        </div>
        <main id="main" className="wrap" tabIndex={-1}>
          {isPreview && (
            <p className="notice preview-banner" role="note" data-testid="preview-banner">
              {t.preview.banner}
            </p>
          )}
          {page === 'about' ? (
            <About />
          ) : page === 'privacy' ? (
            <Privacy />
          ) : page === 'guides' ? (
            <GuideIndex go={go} />
          ) : page === 'guide' && guideCity ? (
            <CityGuidePage city={guideCity} go={go} />
          ) : (
            <Calculator />
          )}
        </main>
        <div className="ad-rail">
          <AdSlot name="rail-right" />
        </div>
      </div>
      <footer className="site-footer">
        <div className="wrap">
          <p>{t.footer.disclaimer}</p>
          <p>
            {fmt(t.footer.data, { date: dataDate })} ·{' '}
            <InternalLink to={`/about?lang=${lang}`} go={go}>{t.footer.about}</InternalLink> ·{' '}
            <InternalLink to={`/privacy?lang=${lang}`} go={go}>{t.footer.privacy}</InternalLink>
          </p>
          <p className="footer-guides">
            {t.nav.guides}:{' '}
            {cities.map((c, i) => (
              <span key={c.id}>
                {i > 0 && ' · '}
                <InternalLink to={`/guide/${c.id}?lang=${lang}`} go={go}>{lang === 'ko' ? c.nameKo : c.nameEn}</InternalLink>
              </span>
            ))}
          </p>
        </div>
      </footer>
    </I18nProvider>
  );
}
