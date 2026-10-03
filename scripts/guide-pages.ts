/**
 * 도시 가이드의 정적 HTML(검색엔진·광고 심사용 본문). 화면(React)과 같은 엔진·같은 표본으로 만든다.
 * 정적 본문은 한국어 기본 언어로 쓰고, 화면은 로드 후 언어 설정에 맞춰 다시 그린다.
 */
import { cityGuide, guidePath } from '../src/core/guide';
import { formatMoney } from '../src/core/money';
import type { City, ExtraSample, FoodRecommendation, PriceSample, Range } from '../src/core/types';
import { escapeHtml as e, type PageMeta } from './site-files';

const STYLE_KO = { budget: '절약형', standard: '일반형', comfort: '여유형' } as const;
const UNIT_KO: Record<string, string> = {
  pass: '1일 이용권(1일 환산)', ride: '대중교통·이동 1회', meal: '한 끼 식사', snack: '간식·음료 1개', drink: '맥주·와인 1잔',
  attraction: '관광지 입장료(성인 1회)', souvenir: '기념품 1개',
};

const money = (n: number, cur: string) => formatMoney(n, cur, 'ko-KR');
const range = (r: Range, cur: string) => (money(r.min, cur) === money(r.max, cur) ? money(r.min, cur) : `${money(r.min, cur)} ~ ${money(r.max, cur)}`);

export interface GuideData {
  cities: City[];
  samples: PriceSample[];
  foods: FoodRecommendation[];
  extras: ExtraSample[];
  refDate: string;
}

export function guidePageMeta(city: City, d: GuideData): PageMeta {
  const g = cityGuide(city, d.samples, d.refDate, d.extras);
  const cur = city.currency;
  const meal = g.prices.find((p) => p.basket === 'meal');
  const ride = g.prices.find((p) => p.basket === 'ride');
  const std = g.styles.find((s) => s.style === 'standard');
  const facts = [
    meal && `한 끼 식사 ${money(meal.median, cur)}`,
    ride && `대중교통 1회 ${money(ride.median, cur)}`,
    std?.perDay && `1인 1일 ${range(std.perDay, cur)}`,
  ].filter(Boolean);
  const description = `${city.nameKo} 여행 경비와 현지 물가: ${facts.join(', ')}(대표값). 관광지 입장료와 3박 4일 예상 경비를 공식 가격 자료로 정리했습니다.`;

  const styles = g.styles
    .map((s) => `<li>${STYLE_KO[s.style]}: ${s.total ? `4일 합계 ${e(range(s.total, cur))} (1일 평균 ${e(range(s.perDay as Range, cur))})` : '가격 자료 보강 중'}</li>`)
    .join('');
  const prices = g.prices.map((p) => `<li>${UNIT_KO[p.basket] ?? p.basket}: 대표 ${e(money(p.median, cur))} (범위 ${e(range(p, cur))})</li>`).join('');
  const attractions = g.attractions
    .map((o) => {
      const s = o.adult.sample;
      return `<li>${e(s.nameKo)}: ${s.max === 0 ? '무료' : e(range(s, s.currency))}${o.child ? ` · 아동 ${e(range(o.child.sample, s.currency))}` : ''}</li>`;
    })
    .join('');
  const foods = d.foods.filter((f) => f.cityId === city.id).map((f) => `<li>${e(f.nameKo)} — ${e(f.reason)}</li>`).join('');

  const fallbackHtml = [
    `        <h1>${e(city.nameKo)} 여행 경비 가이드</h1>`,
    `        <p>${e(city.nameKo)}에서 실제로 쓰게 될 돈을 공식 가격 자료로 정리했습니다. 가격 자료 기준일 ${e(d.refDate)}.</p>`,
    `        <h2>3박 4일 예상 현지 체류비 (성인 1명)</h2><p>외식·현지 교통·기념품 + 예비비 10%. 관광지 입장료·항공·숙박 제외.</p><ul>${styles}</ul>`,
    prices && `        <h2>${e(city.nameKo)} 현지 물가 한눈에</h2><ul>${prices}</ul>`,
    attractions && `        <h2>${e(city.nameKo)} 관광지·테마파크 입장료</h2><ul>${attractions}</ul>`,
    foods && `        <h2>${e(city.nameKo)}의 대표 음식</h2><ul>${foods}</ul>`,
  ]
    .filter(Boolean)
    .join('\n');

  return {
    title: `${city.nameKo} 여행 경비·현지 물가 — 여행 경비 계산기 — 현지 체류비 범위`,
    description,
    path: guidePath(city.id),
    ld: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${city.nameKo} 여행 경비 가이드`,
      inLanguage: ['ko', 'en'],
      dateModified: d.refDate,
      about: { '@type': 'City', name: city.nameEn, containedInPlace: { '@type': 'Country', name: city.countryEn } },
    },
    fallbackHtml,
  };
}

export function guideIndexMeta(d: GuideData): PageMeta {
  const items = d.cities
    .map((c) => {
      const std = cityGuide(c, d.samples, d.refDate, d.extras).styles.find((s) => s.style === 'standard');
      return `<li><a href="${guidePath(c.id)}">${e(c.nameKo)} 여행 경비 가이드</a>${std?.perDay ? ` — 1인 1일 ${e(range(std.perDay, c.currency))}` : ''}</li>`;
    })
    .join('');
  return {
    title: '도시별 여행 경비 가이드 — 여행 경비 계산기 — 현지 체류비 범위',
    description: '도쿄·파리 등 도시별 한 끼 식사·대중교통·관광지 입장료와 3박 4일 예상 현지 체류비를 공식 가격 자료로 정리했습니다.',
    path: '/guides',
    ld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: '도시별 여행 경비 가이드', inLanguage: ['ko', 'en'] },
    fallbackHtml: `        <h1>도시별 여행 경비 가이드</h1>\n        <ul>${items}</ul>`,
  };
}
