import type { City } from '../src/core/types';

/**
 * 결과 공유 링크(/?city=tokyo&nights=3&adults=2…)를 메신저에 붙였을 때 미리보기에 도시·일정이 보이도록
 * index.html 의 제목·설명 메타 태그를 바꾼다. 도시가 없거나 모르는 도시면 원본 그대로 돌려준다.
 */
const TEXT = {
  ko: {
    title: (city: string, days: number | null) => `${city}${days ? ` ${days}일` : ''} 여행 경비 계산 — 여행 경비 계산기`,
    desc: (city: string, days: number | null, adults: number | null) =>
      `${city}${days ? ` ${days}일(${days - 1}박)` : ''}${adults ? ` · 성인 ${adults}명` : ''} 여행에서 현지에서 쓸 예상 경비(식비·교통·관광)를 최소~최대 범위로 확인해 보세요.`,
  },
  en: {
    title: (city: string, days: number | null) => `${city}${days ? ` ${days}-day` : ''} trip budget — Travel Budget Calculator`,
    desc: (city: string, days: number | null, adults: number | null) =>
      `See the estimated on-the-ground costs (food, transport, sightseeing) for a${days ? ` ${days}-day` : ''} trip to ${city}${adults ? ` for ${adults} adult${adults > 1 ? 's' : ''}` : ''}, as a min–max range.`,
  },
  ja: {
    title: (city: string, days: number | null) => `${city}${days ? ` ${days}日間` : ''}の旅行費用 — 旅行費用計算機`,
    desc: (city: string, days: number | null, adults: number | null) =>
      `${city}${days ? ` ${days}日間（${days - 1}泊）` : ''}${adults ? `・大人${adults}名` : ''}の旅行で現地で使う費用（食費・交通・観光）の目安を最小〜最大の範囲で確認できます。`,
  },
} as const;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function int(v: string | null, max: number): number | null {
  if (!v || !/^\d{1,2}$/.test(v)) return null;
  const n = Number(v);
  return n >= 1 && n <= max ? n : null;
}

export function shareMeta(html: string, url: URL, cities: City[], cityJa: Record<string, string> = {}): string {
  const id = url.searchParams.get('city');
  const city = id ? cities.find((c) => c.id === id && c.stage === '파일럿') : undefined;
  if (!city) return html;
  const lang = url.searchParams.get('lang');
  const l = lang === 'en' || lang === 'ja' ? lang : 'ko';
  const name = l === 'en' ? city.nameEn : l === 'ja' ? (cityJa[city.id] ?? city.nameEn) : city.nameKo;
  const nights = int(url.searchParams.get('nights'), 30);
  const days = nights ? nights + 1 : null;
  const adults = int(url.searchParams.get('adults'), 20);
  const title = esc(TEXT[l].title(name, days));
  const desc = esc(TEXT[l].desc(name, days, adults));
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*(")/g, `$1${title}$2`)
    .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*(")/g, `$1${desc}$2`);
}
