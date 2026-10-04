import { createContext, useContext, type ReactNode } from 'react';
import { en } from './en';
import { ja } from './ja';
import { ko, type Messages } from './ko';

export type Lang = 'ko' | 'en' | 'ja';
export const LANGS: readonly Lang[] = ['ko', 'en', 'ja'];
export const messages: Record<Lang, Messages> = { ko, en, ja };
export const LOCALES: Record<Lang, string> = { ko: 'ko-KR', en: 'en-US', ja: 'ja-JP' };
/** 언어 고르기 단추에 쓰는 이름(각 언어로) */
export const LANG_NAMES: Record<Lang, string> = { ko: '한국어', en: 'English', ja: '日本語' };
/** 언어별 기본 표시 통화 */
export const DEFAULT_CURRENCY: Record<Lang, string> = { ko: 'KRW', en: 'USD', ja: 'JPY' };
export const isLang = (v: unknown): v is Lang => v === 'ko' || v === 'en' || v === 'ja';

/** 데이터의 한글·영문·일본어 이름 중 화면 언어에 맞는 것. 일본어 이름이 없으면 일본어 화면에서 영문으로 보인다 */
export const localName = (lang: Lang, ko = '', en = '', ja = ''): string => (lang === 'ko' ? ko : lang === 'ja' ? ja || en || ko : en || ko);

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
  return <Ctx.Provider value={{ lang, t: messages[lang], locale: LOCALES[lang] }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (isLang(saved)) return saved;
  } catch {
    /* 저장소를 못 쓰는 환경 */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
  return nav.startsWith('ko') ? 'ko' : nav.startsWith('ja') ? 'ja' : 'en';
}
