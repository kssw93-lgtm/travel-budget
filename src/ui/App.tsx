import { useCallback, useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { I18nProvider, detectLang, messages, type Lang, fmt } from '../i18n';
import { dataDate } from '../data';
import { Calculator } from './Calculator';
import { Methodology } from './Methodology';

const BASE_PATHS = ['/', '/methodology'];

function usePath(): [string, (to: string) => void] {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const go = useCallback((to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  }, []);
  return [BASE_PATHS.includes(path) ? path : '/', go];
}

function NavLink({ to, current, go, children }: { to: string; current: string; go: (p: string) => void; children: ReactNode }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };
  return (
    <a href={to} onClick={onClick} aria-current={current === to ? 'page' : undefined}>
      {children}
    </a>
  );
}

export function App() {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [path, go] = usePath();
  const t = messages[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = path === '/methodology' ? `${t.method.title} — ${t.meta.title}` : t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* 저장소를 못 쓰는 환경 */
    }
  }, [lang, path, t]);

  return (
    <I18nProvider lang={lang}>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="/" onClick={(e) => { e.preventDefault(); go('/'); }}>✈ {lang === 'ko' ? '여행 경비 계산' : 'Travel Budget'}</a>
          <nav aria-label="Main">
            <NavLink to="/" current={path} go={go}>{t.nav.calculator}</NavLink>
            <NavLink to="/methodology" current={path} go={go}>{t.nav.methodology}</NavLink>
          </nav>
          <div className="lang" role="group" aria-label={t.nav.language}>
            {(['ko', 'en'] as const).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l === 'ko' ? '한국어' : 'EN'}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main id="main" className="wrap">
        {path === '/methodology' ? <Methodology /> : <Calculator />}
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <p>{t.footer.disclaimer}</p>
          <p>{fmt(t.footer.data, { date: dataDate })}</p>
        </div>
      </footer>
    </I18nProvider>
  );
}
