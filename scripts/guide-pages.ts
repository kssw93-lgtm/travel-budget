/**
 * 도시 가이드의 정적 HTML(검색엔진·광고 심사용 본문). 화면(React)과 같은 엔진·같은 표본·같은 문구로 만든다.
 * 언어마다(ko·en·ja) 따로 만든다: 한국어는 기본 주소, 영어·일본어는 Worker 가 ?lang= 에 맞춰 골라 보낸다.
 */
import { cityGuide, guidePath } from '../src/core/guide';
import { convertAmount, costComparison, formatCompareMoney } from '../src/core/compare';
import { methodExample } from '../src/core/method';
import { STATIC_RATES } from '../src/core/rates/static';
import { formatMoney } from '../src/core/money';
import { methodContent } from '../src/ui/method-content';
import { CITY_GUIDES } from '../src/data/city-guides';
import { CHRISTMAS_MARKETS } from '../src/data/christmas-markets';
import { CITY_INTROS } from '../src/data/city-intros';
import { CITY_SEASONS } from '../src/data/city-seasons';
import { CITY_WHEN } from '../src/data/city-when';
import { WHEN_SOURCES } from '../src/data/city-when-sources';
import { GUIDE_SOURCES } from '../src/data/city-guide-sources';
import { COUNTRY_GUIDES } from '../src/data/country-guides';
import type { City, CityMemo, ExtraSample, FoodRecommendation, PriceSample, Range } from '../src/core/types';
import { en } from '../src/i18n/en';
import { ja } from '../src/i18n/ja';
import { ko } from '../src/i18n/ko';
import { CITY_JA, COUNTRY_JA } from '../src/i18n/places';
import { escapeHtml as e, type PageMeta } from './site-files';

export type Lang = 'ko' | 'en' | 'ja';
export const MSG = { ko, en, ja } as const;
const LOCALE: Record<Lang, string> = { ko: 'ko-KR', en: 'en-US', ja: 'ja-JP' };
const IDX: Record<Lang, 0 | 1 | 2> = { ko: 0, en: 1, ja: 2 };
export const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? String(v[k]) : m));
const pick = (lang: Lang, k = '', en_ = '', ja_ = '') => (lang === 'ko' ? k : lang === 'ja' ? ja_ || en_ || k : en_ || k);
export const cityLabel = (c: City, lang: Lang) => (lang === 'ja' ? (CITY_JA[c.id] ?? c.nameEn) : pick(lang, c.nameKo, c.nameEn));
export const countryLabel = (c: City, lang: Lang) => (lang === 'ja' ? (COUNTRY_JA[c.countryEn] ?? c.countryEn) : pick(lang, c.country, c.countryEn));

/** 화면 i18n 에 없는 정적 본문 전용 문구 */
const S = {
  ko: {
    menuTitle: '{city} 식당 실제 메뉴 가격',
    menuLead: '식당 공식 메뉴판에 적힌 1인 한 끼 가격입니다(세금·팁 별도인 도시는 계산할 때 더합니다).',
    child: '아동',
    borrowed: '{city} 식당 가격은 아직 모으는 중이라, 식비·교통비는 {country}의 다른 도시 공식 가격을 함께 써서 계산했습니다(한 나라 안에서는 도시마다 물가 차이가 크지 않습니다).',
    meal: '한 끼 식사 {v}',
    ride: '대중교통 1회 {v}',
    perDay: '1인 1일 {v}',
    descTail: '참고 물가: {facts}(대표값).',
    homeH2: '이 계산기로 할 수 있는 것',
    homeList: ['도시·날짜·인원·여행 스타일(절약·일반·여유)에 맞춘 현지 체류비 범위', '가고 싶은 관광지를 골라 공식 입장료(성인·아동) 더하기', '교통 이용 방식(1회권·이용권), 하루 끼니 수, 음주까지 내 일정에 맞게 조정', '현지 통화와 원화·달러·엔화 환산을 함께 표시'],
    homeSource: '모든 금액은 교통 운영사·관광지·식당의 공식 페이지에서 확인한 가격 표본으로 계산하며, 각 가격에는 출처와 확인일이 붙어 있습니다. 가격 자료 기준일 {date}.',
    homeGuides: '도시별 여행 경비 가이드 ({n}개 도시)',
    homeFact: '한 끼 {meal}',
  },
  en: {
    menuTitle: 'Real menu prices in {city}',
    menuLead: 'Per-person meal prices from restaurants’ official menus (where tax and tips are extra, the calculator adds them).',
    child: 'child',
    borrowed: 'Restaurant prices for {city} are still being collected, so food and transport use official prices from other cities in {country} (prices within one country do not differ much).',
    meal: 'a meal {v}',
    ride: 'a transit ride {v}',
    perDay: '{v} per person per day',
    descTail: 'Typical prices: {facts}.',
    homeH2: 'What this calculator does',
    homeList: ['A min–max range of local costs for your city, dates, party size and travel style (budget, standard, comfort)', 'Add official admission prices (adult and child) for the attractions you pick', 'Fine-tune transport (single tickets or passes), meals per day and drinks', 'Shows local currency alongside KRW, USD and JPY conversions'],
    homeSource: 'Every amount comes from price samples checked on official pages of transit operators, attractions and restaurants, each with its source and check date. Prices as of {date}.',
    homeGuides: 'City travel cost guides ({n} cities)',
    homeFact: 'meal {meal}',
  },
  ja: {
    menuTitle: '{city}の飲食店の実際のメニュー価格',
    menuLead: '飲食店の公式メニューに載っている1人1食の価格です（税・チップ別の都市は計算時に加算します）。',
    child: '子ども',
    borrowed: '{city}の飲食店価格はまだ収集中のため、食費・交通費は{country}の他都市の公式価格も使って計算しています（同じ国の中では物価差は大きくありません）。',
    meal: '1食 {v}',
    ride: '公共交通1回 {v}',
    perDay: '1人1日 {v}',
    descTail: '参考物価：{facts}（代表値）。',
    homeH2: 'この計算機でできること',
    homeList: ['都市・日付・人数・旅行スタイル（節約・標準・ゆとり）に合わせた現地滞在費の範囲', '行きたい観光地を選んで公式入場料（大人・子ども）を追加', '交通の使い方（1回券・パス）、1日の食事回数、飲酒まで日程に合わせて調整', '現地通貨とウォン・ドル・円の換算を併記'],
    homeSource: 'すべての金額は交通事業者・観光地・飲食店の公式ページで確認した価格サンプルで計算し、各価格に出典と確認日を付けています。価格データ基準日 {date}。',
    homeGuides: '都市別 旅行費用ガイド（{n}都市）',
    homeFact: '1食 {meal}',
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

export interface GuideData {
  cities: City[];
  samples: PriceSample[];
  foods: FoodRecommendation[];
  extras: ExtraSample[];
  memos: CityMemo[];
  refDate: string;
  /** 화면에 보이는 가격 자료 기준일(가장 최근 확인일). 푸터와 같은 값 */
  updated: string;
}

const siteTitle = (lang: Lang) => MSG[lang].meta.brand;

export function guidePageMeta(city: City, d: GuideData, lang: Lang = 'ko'): PageMeta {
  const t = MSG[lang].cityGuide;
  const s = S[lang];
  const money = (n: number, cur: string) => formatMoney(n, cur, LOCALE[lang]);
  const range = (r: Range, cur: string) => (money(r.min, cur) === money(r.max, cur) ? money(r.min, cur) : `${money(r.min, cur)} ~ ${money(r.max, cur)}`);
  const g = cityGuide(city, d.samples, d.refDate, d.extras);
  const cur = city.currency;
  const name = cityLabel(city, lang);
  const country = countryLabel(city, lang);
  const meal = g.prices.find((p) => p.basket === 'meal');
  const ride = g.prices.find((p) => p.basket === 'ride');
  const std = g.styles.find((x) => x.style === 'standard');
  const facts = [meal && fill(s.meal, { v: money(meal.median, cur) }), ride && fill(s.ride, { v: money(ride.median, cur) }), std?.perDay && fill(s.perDay, { v: range(std.perDay, cur) })].filter(Boolean);
  const intro = CITY_INTROS[city.id];
  const days = intro ? { min: intro.d[0], max: intro.d[1], nights: Math.max(1, intro.d[1] - 1) } : null;
  const lead = intro ? intro.o[IDX[lang]] : fill(t.metaDescription, { city: name });
  const description = `${lead} ${facts.length ? fill(s.descTail, { facts: facts.join(', ') }) : ''}`.trim();

  const note = CITY_GUIDES[city.id];
  const srcLink = (url?: string) => (url ? ` <small><a href="${e(url)}" rel="noopener">${e(t.sourceLink)}</a></small>` : '');
  const sights = note
    ? `        <h2>${e(fill(t.highlightsTitle, { city: name }))}</h2><ol>${note.highlights.map((h, k) => `<li><strong>${e(h.name[lang])}</strong> ${e(h.text[lang])}${srcLink(GUIDE_SOURCES[`${city.id}:h${k + 1}`])}</li>`).join('')}</ol>`
    : '';
  const xm = CHRISTMAS_MARKETS[city.id];
  const xmas = xm
    ? `        <h2>${e(fill(t.xmasTitle, { city: name }))}</h2><p><strong>${e(xm.name[IDX[lang]])}</strong> ${e(xm.note[IDX[lang]])}</p>` +
      `<dl><dt>${e(t.xmasPlace)}</dt><dd>${e(xm.place[IDX[lang]])}</dd><dt>${e(t.xmasPeriod)}</dt><dd>${e(xm.period[IDX[lang]])}</dd></dl>` +
      `<p>${e(t.xmasCheck)} <a href="${e(xm.url)}" rel="noopener">${e(new URL(xm.url).hostname)}</a></p>`
    : '';
  const stay = intro?.s.length
    ? `        <h2>${e(fill(t.stayTitle, { city: name }))}</h2><dl>${intro.s.map((a) => `<dt>${e(a[IDX[lang]])}</dt><dd>${e(a[3 + IDX[lang]] ?? "")}</dd>`).join('')}</dl>`
    : '';
  const season = CITY_SEASONS[city.id];
  const wh = CITY_WHEN[city.id];
  const when =
    wh || season
      ? `        <h2>${e(fill(t.whenTitle, { city: name }))}</h2>` +
        (wh ? `<dl>${wh.p.map((p, k) => `<dt>${e(p[IDX[lang]])}</dt><dd>${e(p[3 + IDX[lang]] ?? '')}${srcLink(WHEN_SOURCES[`${city.id}:p${k + 1}`])}</dd>`).join('')}</dl>` : '') +
        (season ? `<p><strong>${e(t.whenWeather)}</strong> ${e(season[IDX[lang]])}${season[3] ? ` <small><a href="${e(season[3])}" rel="noopener">${e(t.sourceLink)}</a></small>` : ''}</p>` : '') +
        (wh?.x ? `<p><strong>${e(t.whenAvoid)}</strong> ${e(wh.x[IDX[lang]])}${srcLink(WHEN_SOURCES[`${city.id}:x`])}</p>` : '') +
        `<p>${e(t.seasonHint)}</p>`
      : '';
  const cityTips =
    (note?.tips.length ? `<h3>${e(fill(t.tipsTitle, { city: name }))}</h3><ul>${note.tips.map((x, k) => `<li>${e(x[lang])}${srcLink(GUIDE_SOURCES[`${city.id}:t${k + 1}`])}</li>`).join('')}</ul>` : '');
  const cn = COUNTRY_GUIDES[city.countryEn];
  const i = IDX[lang];
  const item = (x: readonly [string, string, string, string?]) => `<li>${e(x[i])}${x[3] ? ` <small><a href="${e(x[3])}" rel="noopener">${e(t.sourceLink)}</a></small>` : ''}</li>`;
  const countryNotes = cn
    ? `<h3>${e(fill(t.countryTipsTitle, { country }))}</h3><ul>${cn.tips.map(item).join('')}</ul>` +
      `<h3>${e(fill(t.cautionsTitle, { country }))}</h3><ul>${cn.cautions.map(item).join('')}</ul>` +
      `<p>${e(t.countryNotesHint)}</p>`
    : '';
  const ctaText = days ? fill(t.ctaNights, { city: name, n: days.nights, d: days.nights + 1 }) : fill(t.cta, { city: name });
  const cta = `        <p><a href="/?lang=${lang}&amp;city=${e(city.id)}${days ? `&amp;nights=${days.nights}` : ''}">${e(ctaText)}</a></p>`;
  const attractions = g.attractions
    .map((o) => {
      const x = o.adult.sample;
      return `<li>${e(pick(lang, x.nameKo, x.nameEn, x.nameJa))}: ${x.max === 0 ? e(t.free) : e(range(x, x.currency))}${o.child ? ` · ${e(s.child)} ${e(range(o.child.sample, x.currency))}` : ''}</li>`;
    })
    .join('');
  const foods = d.foods
    .filter((f) => f.cityId === city.id)
    .map((f) => {
      const desc = f.desc?.[lang] ?? (lang === 'ko' ? f.reason : lang === 'ja' ? (f.reasonJa ?? f.reasonEn) : f.reasonEn);
      return `<li>${e(pick(lang, f.nameKo, f.nameEn, f.nameJa))}${desc ? ` — ${e(desc)}` : ''}</li>`;
    })
    .join('');
  const passTips = ride
    ? g.passTips
        .map((p) => `<li>${e(fill(p.days > 1 ? t.passTipRowDays : t.passTipRow, { pass: pick(lang, p.nameKo, p.nameEn, p.nameJa), price: money(p.price, cur), days: p.days, n: p.ridesPerDay }))}</li>`)
        .join('')
    : '';
  // 실제 메뉴 가격 예시: 이 도시 식당의 1인 한 끼 공식 메뉴를 싼 것부터 비싼 것까지 고르게 최대 6개
  const meals = d.samples
    .filter((x) => x.cityId === city.id && x.category === 'food' && /한끼/.test(x.subtype) && x.modelUse !== 'no' && !/아동|어린이|child/i.test(`${x.target} ${x.nameKo}`))
    .sort((a, b) => a.min + a.max - (b.min + b.max));
  const picked = meals.length <= 6 ? meals : Array.from({ length: 6 }, (_, k) => meals[Math.round((k * (meals.length - 1)) / 5)]!);
  const menuExamples = picked.map((x) => `<li>${e(pick(lang, x.nameKo, x.nameEn, x.nameJa))}: ${e(range(x, x.currency))}</li>`).join('');
  const m = MSG[lang].memos;
  const memos = d.memos
    .filter((x) => x.cityId === city.id)
    .map((x) => `<li>${e((lang !== 'ko' && x.itemEn) || x.item)}: ${e((lang !== 'ko' && x.valueEn) || x.value)}${x.unit && (lang === 'ko' || !/[가-힣]/.test(x.unit)) ? ` ${e(x.unit)}` : ''}</li>`)
    .join('');
  const ownMeals = d.samples.some((x) => x.cityId === city.id && x.category === 'food' && /한끼/.test(x.subtype));
  const borrowedNote = ownMeals ? '' : `        <p>${e(fill(s.borrowed, { city: name, country }))}</p>`;

  const tips = cityTips || countryNotes ? `        <h2>${e(fill(t.tipsSectionTitle, { city: name }))}</h2>${cityTips}${countryNotes}` : '';
  const fallbackHtml = [
    `        <nav><a href="/guides?lang=${lang}">${e(t.indexTitle)}</a> › ${e(country)}</nav>`,
    `        <h1>${e(fill(t.title, { city: name }))}</h1>`,
    `        <p>${e(lead)}</p>`,
    days && `        <p>${e(days.min === days.max ? fill(t.daysOne, { n: days.min }) : fill(t.daysRange, { min: days.min, max: days.max }))}</p>`,
    cta,
    when,
    xmas,
    sights,
    stay,
    passTips && `        <h2>${e(t.passTipTitle)}</h2><p>${e(fill(t.passTipLead, { ride: money(ride!.median, cur) }))}</p><ul>${passTips}</ul>`,
    foods && `        <h2>${e(fill(MSG[lang].foods.title, { city: name }))}</h2><ul>${foods}</ul>`,
    tips,
    borrowedNote,
    menuExamples && `        <h2>${e(fill(s.menuTitle, { city: name }))}</h2><p>${e(s.menuLead)}</p><ul>${menuExamples}</ul>`,
    attractions && `        <h2>${e(fill(t.attractionsTitle, { city: name }))}</h2><p>${e(t.attractionsLead)}</p><ul>${attractions}</ul>`,
    memos && `        <h2>${e(fill(m.title, { city: name }))}</h2><p>${e(m.lead)}</p><ul>${memos}</ul>`,
    cta,
    `        <p>${e(fill(t.lead, { city: name, date: d.updated }))}</p>`,
  ]
    .filter(Boolean)
    .join('\n');

  return {
    title: `${fill(t.metaTitle, { city: name })} — ${siteTitle(lang)}`,
    description,
    path: guidePath(city.id),
    lang,
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: fill(t.title, { city: name }),
          description,
          inLanguage: lang,
          dateModified: d.updated,
          author: { '@type': 'Organization', name: siteTitle(lang) },
          about: { '@type': 'City', name: city.nameEn, containedInPlace: { '@type': 'Country', name: city.countryEn } },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.indexTitle, item: `/guides?lang=${lang}` },
            { '@type': 'ListItem', position: 2, name: fill(t.title, { city: name }) },
          ],
        },
        ...[marketEvent(city, lang)].filter(Boolean),
      ],
    },
    fallbackHtml,
  };
}

/** 나라별로 묶은 도시 목록(나라·도시 이름순, 그 언어 기준) */
function grouped(list: City[], lang: Lang): Array<[string, City[]]> {
  const map = new Map<string, City[]>();
  for (const c of list) map.set(countryLabel(c, lang), [...(map.get(countryLabel(c, lang)) ?? []), c]);
  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b, lang))
    .map(([k, v]) => [k, v.sort((a, b) => cityLabel(a, lang).localeCompare(cityLabel(b, lang), lang))]);
}

export function guideIndexMeta(d: GuideData, lang: Lang = 'ko'): PageMeta {
  const t = MSG[lang].cityGuide;
  const xc = d.cities.filter((c) => CHRISTMAS_MARKETS[c.id]).sort((a, b) => cityLabel(a, lang).localeCompare(cityLabel(b, lang), lang));
  const xmasList = xc.length
    ? `        <details><summary><h2>${e(t.xmasIndexTitle)} (${xc.length})</h2></summary><p>${e(t.xmasIndexLead)} <a href="/christmas-markets?lang=${lang}">${e(t.xmasPageLink)}</a></p><ul>${xc.map((c) => `<li><a href="${guidePath(c.id)}?lang=${lang}">${e(fill(t.xmasTitle, { city: cityLabel(c, lang) }))}</a></li>`).join('')}</ul></details>\n`
    : '';
  const groups = grouped(d.cities, lang)
    .map(([country, list]) => `        <h2>${e(country)}</h2><ul>${list.map((c) => `<li><a href="${guidePath(c.id)}?lang=${lang}">${e(fill(t.title, { city: cityLabel(c, lang) }))}</a></li>`).join('')}</ul>`)
    .join('\n');
  return {
    title: `${t.indexTitle} — ${siteTitle(lang)}`,
    description: t.indexDescription,
    path: '/guides',
    lang,
    ld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.indexTitle, inLanguage: lang },
    fallbackHtml: `        <h1>${e(t.indexTitle)}</h1>\n        <p>${e(t.indexLead)}</p>\n${xmasList}${groups}`,
  };
}

/** 도시별 하루 경비 비교(/compare)의 정적 HTML. 표시 통화는 언어 기본값(ko 원, en 달러, ja 엔) */
export function comparePageMeta(d: GuideData, lang: Lang = 'ko'): PageMeta {
  const m = MSG[lang].compare;
  const display = ({ ko: 'KRW', en: 'USD', ja: 'JPY' } as const)[lang];
  const rates = STATIC_RATES.rates;
  const money = (n: number, cur: string) => formatCompareMoney(n, cur, LOCALE[lang]);
  const rows = costComparison(d.cities, d.samples, d.extras, d.refDate)
    .map((r) => ({ r, mid: (r.perDay.min + r.perDay.max) / 2 }))
    .map((x) => ({ ...x, usd: convertAmount(x.mid, x.r.city.currency, 'USD', rates) ?? 0 }))
    .sort((a, b) => a.usd - b.usd);
  const n = rows.length;
  const body = rows
    .map(({ r, mid }, i) => {
      const cur = r.city.currency;
      const conv = convertAmount(mid, cur, display, rates);
      const day = conv !== null && cur !== display ? `≈ ${money(conv, display)} (${money(r.perDay.min, cur)}~${money(r.perDay.max, cur)})` : money(mid, cur);
      return `<tr><td>${i + 1}</td><td><a href="${guidePath(r.city.id)}?lang=${lang}">${e(cityLabel(r.city, lang))}</a> ${e(countryLabel(r.city, lang))}</td><td>${e(day)}</td><td>${r.meal !== null ? e(money(r.meal, cur)) : '–'}</td><td>${r.ride !== null ? e(money(r.ride, cur)) : '–'}</td></tr>`;
    })
    .join('');
  const description = fill(m.description, { n });
  return {
    title: `${m.title} — ${siteTitle(lang)}`,
    description,
    path: '/compare',
    lang,
    ld: { '@context': 'https://schema.org', '@type': 'WebPage', name: m.title, description, inLanguage: lang },
    fallbackHtml: [
      `        <h1>${e(m.title)}</h1>`,
      `        <p>${e(fill(m.lead, { n, date: d.updated, rate: STATIC_RATES.asOf }))}</p>`,
      `        <table><thead><tr><th>${e(m.colRank)}</th><th>${e(m.colCity)}</th><th>${e(m.colDay)}</th><th>${e(m.colMeal)}</th><th>${e(m.colRide)}</th></tr></thead><tbody>${body}</tbody></table>`,
      `        <p>${e(m.note)} <a href="/how-it-works?lang=${lang}">${e(MSG[lang].method.navLabel)}</a></p>`,
    ].join('\n'),
  };
}

/** 계산 방법(/how-it-works)의 정적 HTML: 화면과 같은 문장·같은 계산 예시 */
export function methodPageMeta(d: GuideData, lang: Lang = 'ko'): PageMeta {
  const m = MSG[lang].method;
  const ex = methodExample(d.cities, d.samples, d.extras, d.refDate);
  const money = (r: Range) => {
    const cur = ex?.city.currency ?? 'USD';
    const a = formatMoney(Math.round(r.min), cur, LOCALE[lang]);
    const b = formatMoney(Math.round(r.max), cur, LOCALE[lang]);
    return a === b ? a : `${a}~${b}`;
  };
  const c = methodContent(m, { lang, samples: d.samples.length, cities: d.cities.length, cityName: ex ? cityLabel(ex.city, lang) : '', date: d.refDate, money }, ex);
  const list = (tag: 'ol' | 'ul', items: string[]) => `<${tag}>${items.map((x) => `<li>${e(x)}</li>`).join('')}</${tag}>`;
  const body = [
    `        <h1>${e(m.title)}</h1>`,
    `        <p>${e(m.lead)}</p>`,
    `        <h2>${e(m.srcTitle)}</h2>${c.srcBody.map((x) => `<p>${e(x)}</p>`).join('')}`,
    `        <h2>${e(m.stepsTitle)}</h2>${list('ol', c.steps)}`,
    c.example && `        <h2>${e(c.example.title)}</h2><p>${e(c.example.lead)}</p>${list('ul', c.example.lines)}<p><a href="${e(c.example.href)}">${e(m.exOpen)}</a></p>`,
    `        <h2>${e(m.limitsTitle)}</h2>${list('ul', c.limits)}`,
    `        <h2>${e(m.troubleTitle)}</h2>${list('ul', c.trouble)}`,
  ]
    .filter(Boolean)
    .join('\n');
  return {
    title: `${m.title} — ${siteTitle(lang)}`,
    description: m.description,
    path: '/how-it-works',
    lang,
    ld: { '@context': 'https://schema.org', '@type': 'WebPage', name: m.title, description: m.description, inLanguage: lang },
    fallbackHtml: body,
  };
}

/** 크리스마스 마켓의 검색엔진 행사 정보(schema.org Event). 공식 일정(dates)이 확인된 곳만 */
function marketEvent(c: City, lang: Lang): Record<string, unknown> | null {
  const m = CHRISTMAS_MARKETS[c.id];
  if (!m?.dates) return null;
  const i = IDX[lang];
  return {
    '@type': 'Event',
    name: m.name[i],
    description: m.note[i],
    startDate: m.dates[0],
    ...(m.dates[1] ? { endDate: m.dates[1] } : {}),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: m.place[i], address: { '@type': 'PostalAddress', addressLocality: c.nameEn, addressCountry: c.countryEn } },
    url: m.url,
    inLanguage: lang,
  };
}

/** 크리스마스 마켓 일정 모음(/christmas-markets)의 정적 HTML */
export function christmasPageMeta(d: GuideData, lang: Lang = 'ko'): PageMeta {
  const t = MSG[lang].cityGuide;
  const i = IDX[lang];
  const groups = grouped(
    d.cities.filter((c) => CHRISTMAS_MARKETS[c.id]),
    lang,
  )
    .map(
      ([country, list]) =>
        `        <h2>${e(country)}</h2>` +
        list
          .map((c) => {
            const m = CHRISTMAS_MARKETS[c.id]!;
            return (
              `<h3>${e(cityLabel(c, lang))} · ${e(m.name[i])}</h3><dl><dt>${e(t.xmasPeriod)}</dt><dd>${e(m.period[i])}</dd><dt>${e(t.xmasPlace)}</dt><dd>${e(m.place[i])}</dd></dl>` +
              `<p><a href="${guidePath(c.id)}?lang=${lang}#christmas">${e(fill(t.xmasPageGuide, { city: cityLabel(c, lang) }))}</a> · <a href="${e(m.url)}" rel="noopener">${e(t.xmasPageOfficial)}</a></p>`
            );
          })
          .join(''),
    )
    .join('\n');
  return {
    title: `${t.xmasPageTitle} — ${siteTitle(lang)}`,
    description: t.xmasPageDescription,
    path: '/christmas-markets',
    lang,
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'CollectionPage', name: t.xmasPageTitle, description: t.xmasPageDescription, inLanguage: lang },
        ...d.cities.map((c) => marketEvent(c, lang)).filter(Boolean),
      ],
    },
    fallbackHtml: `        <nav><a href="/guides?lang=${lang}">${e(t.indexTitle)}</a></nav>\n        <h1>${e(t.xmasPageTitle)}</h1>\n        <p>${e(t.xmasPageLead)}</p>\n${groups}\n        <p>${e(t.xmasPageNote)}</p>`,
  };
}

/** 계산기(첫 화면)의 정적 본문: 무엇을 하는 도구인지와 도시별 가이드 목록(JS 실행 전 크롤러·심사용) */
export function homeFallbackHtml(d: GuideData, lang: Lang = 'ko'): string {
  const t = MSG[lang];
  const s = S[lang];
  const money = (n: number, cur: string) => formatMoney(n, cur, LOCALE[lang]);
  const items = grouped(d.cities, lang)
    .map(([country, list]) => {
      const li = list
        .map((c) => {
          const meal = cityGuide(c, d.samples, d.refDate, d.extras).prices.find((p) => p.basket === 'meal');
          return `<li><a href="${guidePath(c.id)}?lang=${lang}">${e(fill(t.cityGuide.title, { city: cityLabel(c, lang) }))}</a>${meal ? ` — ${e(fill(s.homeFact, { meal: money(meal.median, c.currency) }))}` : ''}</li>`;
        })
        .join('');
      return `        <h3>${e(country)}</h3><ul>${li}</ul>`;
    })
    .join('\n');
  return [
    `        <h1>${e(t.home.title)}</h1>`,
    `        <p>${e(t.home.lead)}</p>`,
    `        <h2>${e(s.homeH2)}</h2>`,
    `        <ul>${s.homeList.map((x) => `<li>${e(x)}</li>`).join('')}</ul>`,
    `        <p>${e(fill(s.homeSource, { date: d.updated }))}</p>`,
    `        <h2>${e(fill(s.homeGuides, { n: d.cities.length }))}</h2>`,
    items,
  ].join('\n');
}
