/**
 * 도시 가이드의 정적 HTML(검색엔진·광고 심사용 본문). 화면(React)과 같은 엔진·같은 표본으로 만든다.
 * 정적 본문은 한국어 기본 언어로 쓰고, 화면은 로드 후 언어 설정에 맞춰 다시 그린다.
 */
import { cityGuide, guidePath } from '../src/core/guide';
import { formatMoney } from '../src/core/money';
import type { City, CityMemo, ExtraSample, FoodRecommendation, PriceSample, Range } from '../src/core/types';
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
  memos: CityMemo[];
  refDate: string;
  /** 화면에 보이는 가격 자료 기준일(가장 최근 확인일). 푸터와 같은 값 */
  updated: string;
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
  const foods = d.foods.filter((f) => f.cityId === city.id).map((f) => `<li>${e(f.nameKo)} — ${e(f.desc?.ko ?? f.reason)}</li>`).join('');
  const passTips = ride
    ? g.passTips
        .map((p) =>
          p.days > 1
            ? `<li>${e(p.nameKo)} ${e(money(p.price, cur))}(${p.days}일) → ${p.days}일 동안 하루 ${p.ridesPerDay}회 이상 타면 이득</li>`
            : `<li>${e(p.nameKo)} ${e(money(p.price, cur))} → 하루 ${p.ridesPerDay}회 이상 타면 이득</li>`,
        )
        .join('')
    : '';
  const memos = d.memos
    .filter((m) => m.cityId === city.id)
    .map((m) => `<li>${e(m.item)}: ${e(m.value)}${m.unit ? ` ${e(m.unit)}` : ''}</li>`)
    .join('');

  const fallbackHtml = [
    `        <h1>${e(city.nameKo)} 여행 경비 가이드</h1>`,
    `        <p>${e(city.nameKo)}에서 실제로 쓰게 될 돈을 공식 가격 자료로 정리했습니다. 가격 자료 기준일 ${e(d.updated)}.</p>`,
    `        <h2>3박 4일 예상 현지 체류비 (성인 1명)</h2><p>외식·현지 교통 + 예비비 10%. 관광지 입장료·쇼핑·항공·숙박 제외.</p><ul>${styles}</ul>`,
    prices && `        <h2>${e(city.nameKo)} 현지 물가 한눈에</h2><ul>${prices}</ul>`,
    passTips &&
      `        <h2>이용권, 하루 몇 번 타야 이득일까</h2><p>대중교통 1회 요금 대표값(중앙값) ${e(money(ride!.median, cur))} 기준입니다. 실제 요금은 노선·거리에 따라 달라 참고용입니다.</p><ul>${passTips}</ul>`,
    attractions && `        <h2>${e(city.nameKo)} 관광지·테마파크 입장료</h2><ul>${attractions}</ul>`,
    foods && `        <h2>${e(city.nameKo)}에서 먹어 볼 음식</h2><ul>${foods}</ul>`,
    memos && `        <h2>${e(city.nameKo)} 알아두면 좋은 현지 비용</h2><p>팁·세금·숙박세처럼 계산에는 넣지 않았지만 미리 알아두면 좋은 항목입니다.</p><ul>${memos}</ul>`,
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
      inLanguage: ['ko', 'en', 'ja'],
      dateModified: d.updated,
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
    ld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: '도시별 여행 경비 가이드', inLanguage: ['ko', 'en', 'ja'] },
    fallbackHtml: `        <h1>도시별 여행 경비 가이드</h1>\n        <ul>${items}</ul>`,
  };
}

/** 계산기(첫 화면)의 정적 본문: 무엇을 하는 도구인지와 도시별 가이드 목록(JS 실행 전 크롤러·심사용) */
export function homeFallbackHtml(d: GuideData): string {
  const items = d.cities
    .map((c) => {
      const g = cityGuide(c, d.samples, d.refDate, d.extras);
      const std = g.styles.find((s) => s.style === 'standard');
      const meal = g.prices.find((p) => p.basket === 'meal');
      const facts = [meal && `한 끼 ${money(meal.median, c.currency)}`, std?.perDay && `1인 1일 ${range(std.perDay, c.currency)}`].filter(Boolean).join(', ');
      return `<li><a href="${guidePath(c.id)}">${e(c.nameKo)} 여행 경비 가이드</a>${facts ? ` — ${e(facts)}` : ''}</li>`;
    })
    .join('');
  return [
    '        <h1>현지에서 얼마나 쓸까?</h1>',
    '        <p>도시와 일정을 고르면 외식·교통·관광 예상 경비를 최소~최대 범위로 계산합니다. 쇼핑·선물 예산과 항공권·숙박은 직접 입력한 경우에만 더합니다.</p>',
    '        <h2>이 계산기로 할 수 있는 것</h2>',
    '        <ul><li>도시·날짜·인원·여행 스타일(절약·일반·여유)에 맞춘 현지 체류비 범위</li><li>가고 싶은 관광지를 골라 공식 입장료(성인·아동) 더하기</li><li>교통 이용 방식(1회권·이용권), 하루 끼니 수, 음주까지 내 일정에 맞게 조정</li><li>현지 통화와 원화·달러·엔화 환산을 함께 표시</li></ul>',
    `        <p>모든 금액은 교통 운영사·관광지·식당의 공식 페이지에서 확인한 가격 표본으로 계산하며, 각 가격에는 출처와 확인일이 붙어 있습니다. 가격 자료 기준일 ${e(d.updated)}.</p>`,
    `        <h2>도시별 여행 경비 가이드 (${d.cities.length}개 도시)</h2>`,
    `        <ul>${items}</ul>`,
  ].join('\n');
}
