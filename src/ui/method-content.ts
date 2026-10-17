import { METHOD_EXAMPLE, type MethodExample } from '../core/method';
import { MODEL } from '../core/model-config';
import type { Range } from '../core/types';
import type { Messages } from '../i18n/ko';

/** 「계산 방법」 페이지의 문장(화면·정적 HTML 공용). 숫자는 모델 설정·실제 계산 결과에서만 가져온다 */
export interface MethodContent {
  srcBody: string[];
  steps: string[];
  example: { title: string; lead: string; lines: string[]; href: string } | null;
  limits: string[];
  trouble: string[];
}

const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? String(v[k]) : m));
const pct = (n: number) => `${Math.round(n * 100)}%`;
const band = ([a, b]: readonly [number, number]) => `${Math.round(a * 100)}~${Math.round(b * 100)}%`;

export function methodContent(
  m: Messages['method'],
  opts: { lang: string; samples: number; cities: number; cityName: string; date: string; money: (r: Range) => string },
  ex: MethodExample | null,
): MethodContent {
  const u = MODEL.usage;
  const f = MODEL.mealItemFactor;
  const edge = Math.round(MODEL.edgeDayFactor * 100);
  const cont = Math.round(MODEL.contingencyRate * 100);
  const stepVars = {
    edge,
    meals: u.meal.standard,
    b1: band(MODEL.styleBand.budget),
    b2: band(MODEL.styleBand.standard),
    b3: band(MODEL.styleBand.comfort),
    f1: f.budget,
    f2: f.standard,
    f3: f.comfort,
    s1: u.snack.budget,
    s2: u.snack.standard,
    s3: u.snack.comfort,
    d1: u.drink.budget,
    d3: u.drink.comfort,
    r1: u.ride.budget,
    r2: u.ride.standard,
    r3: u.ride.comfort,
    cont,
  };
  const { adults, nights } = METHOD_EXAMPLE;
  const example = ex && {
    title: fill(m.exampleTitle, { city: opts.cityName, n: nights, d: ex.days, adults }),
    lead: fill(m.exampleLead, { date: ex.refDate }),
    lines: [
      ex.meal && fill(m.exMeal, { unit: opts.money(ex.meal.unit), per: ex.meal.perDay, edge, adults, total: opts.money(ex.meal.total) }),
      ex.snack && fill(m.exSnack, { unit: opts.money(ex.snack.unit), per: ex.snack.perDay, edge, adults, total: opts.money(ex.snack.total) }),
      ex.ride && fill(m.exRide, { unit: opts.money(ex.ride.unit), per: ex.ride.perDay, days: ex.days, adults, total: opts.money(ex.ride.total) }),
      fill(m.exSum, { sub: opts.money(ex.subtotal), cont, c: opts.money(ex.contingency), total: opts.money(ex.total) }),
    ].filter((x): x is string => !!x),
    href: `/?lang=${opts.lang}&city=${ex.city.id}&date=${ex.refDate}&nights=${nights}&adults=${adults}&style=${METHOD_EXAMPLE.style}`,
  };
  return {
    srcBody: m.srcBody.map((s) => fill(s, { n: opts.samples.toLocaleString(), cities: opts.cities })),
    steps: m.steps.map((s) => fill(s, stepVars)),
    example,
    limits: [...m.limits],
    trouble: m.trouble.map((s) => fill(s, { fill: pct(MODEL.minFillRate).replace('%', '') })),
  };
}
