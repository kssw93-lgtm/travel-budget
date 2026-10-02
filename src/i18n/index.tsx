import { createContext, useContext, type ReactNode } from 'react';
import { en } from './en';
import { ko, type Messages } from './ko';

export type Lang = 'ko' | 'en';
export const messages: Record<Lang, Messages> = { ko, en };

/** `{name}` 자리표시자를 채운다 */
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

interface I18n {
  lang: Lang;
  t: Messages;
  locale: string;
}

const Ctx = createContext<I18n>({ lang: 'ko', t: ko, locale: 'ko-KR' });

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <Ctx.Provider value={{ lang, t: messages[lang], locale: lang === 'ko' ? 'ko-KR' : 'en-US' }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'ko' || saved === 'en') return saved;
  } catch {
    /* 저장소를 못 쓰는 환경 */
  }
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}
