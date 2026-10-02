import { classify, isVariablePricing, type Classified, type ExcludeReason } from './classify';
import { addDays } from './dates';
import { BASKET_RULES, CATEGORIES, EDGE_WEIGHTED, MODEL } from './model-config';
import { endpoints, poolOnDate, selectUsable, styleRange } from './pool';
import type {
  Basket,
  BasketEstimate,
  Category,
  CategoryEstimate,
  City,
  Estimate,
  PriceSample,
  Range,
  SourceRef,
  TripInput,
  Warning,
} from './types';

const ZERO: Range = { min: 0, max: 0 };
const add = (a: Range, b: Range): Range => ({ min: a.min + b.min, max: a.max + b.max });
const scale = (a: Range, k: number): Range => ({ min: a.min * k, max: a.max * k });

export function tripDays(nights: number): number {
  return nights + 1;
}

/** 일자별 식비·활동비 비중: 첫날·마지막 날은 60%, 나머지는 100% */
export function dayWeights(days: number): number[] {
  return Array.from({ length: days }, (_, i) => (i === 0 || i === days - 1 ? MODEL.edgeDayFactor : 1));
}

function uniqueSources(rows: Classified[]): SourceRef[] {
  const seen = new Map<string, SourceRef>();
  for (const r of rows) {
    const key = `${r.sample.sourceName}|${r.sample.sourceUrl}`;
    if (!seen.has(key)) seen.set(key, { name: r.sample.sourceName, url: r.sample.sourceUrl });
  }
  return [...seen.values()];
}

interface BasketRun {
  basket: Basket;
  /** 성인 기준 사용 가능 표본(모델 사용 우선 규칙 적용 후) */
  adultCount: number;
  childCount: number;
  sufficient: boolean;
  total: Range | null;
  used: Classified[];
  excludedByDate: string[];
  resolved: string[];
  childAsAdult: boolean;
}

/** 한 바스켓(같은 단위의 표본 묶음)의 전체 일정·전체 인원 합계. 다른 바스켓의 가격과 섞지 않는다. */
function priceBasket(basket: Basket, all: Classified[], input: TripInput, dates: string[], weights: number[]): BasketRun {
  const rows = all.filter((r) => r.basket === basket);
  const adultRows = selectUsable(rows.filter((r) => r.audience === 'adult'));
  const childRows = selectUsable(rows.filter((r) => r.audience === 'child'));
  const run: BasketRun = {
    basket,
    adultCount: adultRows.length,
    childCount: childRows.length,
    sufficient: adultRows.length >= MODEL.minSamplesPerCategory,
    total: null,
    used: [],
    excludedByDate: [],
    resolved: [],
    childAsAdult: false,
  };
  if (!run.sufficient) return run;

  const used = new Map<string, Classified>();
  const excluded = new Set<string>();
  const resolved = new Set<string>();
  const perUse = MODEL.usage[basket][input.style];
  const edge = EDGE_WEIGHTED.includes(basket);
  const hasChildPool = childRows.length > 0;

  const priceDay = (pool: Classified[], date: string): Range | null => {
    const day = poolOnDate(pool, date);
    day.excludedByDate.forEach((id) => excluded.add(id));
    if (day.rows.length === 0) return null;
    day.resolvedVariants.forEach((id) => resolved.add(id));
    day.rows.forEach((r) => used.set(r.sample.id, r));
    return styleRange(endpoints(day.rows, basket), input.style);
  };

  let total: Range = ZERO;
  if (basket === 'souvenir') {
    // 기념품은 여행 전체 기준: 성인 1인당 구매 개수 × 단가(어린이는 구매하지 않는 것으로 가정)
    const unit = priceDay(adultRows, dates[0] as string);
    if (!unit) run.sufficient = false;
    else total = scale(unit, perUse * input.adults);
  } else {
    for (const [i, date] of dates.entries()) {
      const adult = priceDay(adultRows, date);
      if (!adult) {
        run.sufficient = false;
        break;
      }
      let day = scale(adult, input.adults);
      if (input.children > 0) {
        // 어린이 표본이 있으면 어린이 가격, 없으면 성인 가격을 적용(경고 표시)
        const child = hasChildPool ? (priceDay(childRows, date) ?? adult) : adult;
        day = add(day, scale(child, input.children));
      }
      total = add(total, scale(day, perUse * (edge ? (weights[i] as number) : 1)));
    }
    run.childAsAdult = input.children > 0 && !hasChildPool;
  }

  run.excludedByDate = [...excluded];
  run.resolved = [...resolved];
  if (run.sufficient) {
    run.total = total;
    run.used = [...used.values()];
  }
  return run;
}

function estimateCategory(
  category: Category,
  all: Classified[],
  input: TripInput,
  dates: string[],
  weights: number[],
): { estimate: CategoryEstimate; warnings: Warning[] } {
  const rule = BASKET_RULES[category];
  const runs = rule.baskets.map((b) => priceBasket(b, all, input, dates, weights));
  const warnings: Warning[] = [];

  const sufficientRuns = runs.filter((r) => r.sufficient);
  const requiredOk = rule.mode === 'alternatives' ? sufficientRuns.length > 0 : rule.required.every((b) => runs.find((r) => r.basket === b)?.sufficient);
  const included = requiredOk ? sufficientRuns : [];

  let total: Range | null = null;
  if (requiredOk) {
    total =
      rule.mode === 'sum'
        ? included.reduce((sum, r) => add(sum, r.total as Range), ZERO)
        : {
            // 이용권과 1회권은 대안이므로 둘의 범위를 합쳐 하나의 범위로 낸다
            min: Math.min(...included.map((r) => (r.total as Range).min)),
            max: Math.max(...included.map((r) => (r.total as Range).max)),
          };
  }

  if (!requiredOk) warnings.push({ category, code: 'insufficient' });
  for (const r of runs) {
    // 표본이 있는데 최소 기준에 못 미쳐 빠진 바스켓은 조용히 넘기지 않고 알린다
    if (requiredOk && !r.sufficient && r.adultCount > 0) warnings.push({ category, code: 'basketOmitted', basket: r.basket });
  }

  const usedRows = included.flatMap((r) => r.used);
  if (requiredOk) {
    const pick = (f: (r: Classified) => boolean) => [...new Set(usedRows.filter(f).map((r) => r.sample.id))];
    const flag = (code: Warning['code'], ids: string[]) => {
      if (ids.length) warnings.push({ category, code, ids });
    };
    if (included.some((r) => r.childAsAdult) || (input.children > 0 && category === 'food' && !included.some((r) => r.childCount > 0))) {
      warnings.push({ category, code: 'childAsAdult' });
    }
    flag('conditionalUsed', pick((r) => r.sample.modelUse === 'conditional'));
    flag('gradeCUsed', pick((r) => r.sample.grade === 'C'));
    flag('revalidation', pick((r) => r.sample.status.includes('재검증')));
    flag('fromPrice', pick((r) => r.fromPrice));
    flag('variablePricing', pick((r) => isVariablePricing(r.sample)));
    flag('dateResolved', included.flatMap((r) => r.resolved));
    flag('dateExcluded', included.flatMap((r) => r.excludedByDate));
  }

  const baskets: BasketEstimate[] = runs.map((r) => ({
    basket: r.basket,
    sampleCount: r.adultCount,
    childSampleCount: r.childCount,
    sufficient: r.sufficient,
    included: included.includes(r),
  }));
  const checked = usedRows.map((r) => r.sample.checkedAt).sort();
  const people = input.adults + input.children;
  const adultUsed = usedRows.filter((r) => r.audience === 'adult');
  return {
    warnings,
    estimate: {
      category,
      baskets,
      total,
      perPersonPerDay: total ? scale(total, 1 / (people * dates.length)) : null,
      sampleCount: requiredOk ? new Set(adultUsed.map((r) => r.sample.id)).size : primaryCount(category, runs),
      childSampleCount: requiredOk ? new Set(usedRows.filter((r) => r.audience === 'child').map((r) => r.sample.id)).size : 0,
      sufficient: requiredOk,
      sources: uniqueSources(usedRows),
      checkedFrom: checked[0] ?? null,
      checkedTo: checked[checked.length - 1] ?? null,
      usedIds: [...new Set(usedRows.map((r) => r.sample.id))],
    },
  };
}

/** 부족 안내에 쓰는 대표 표본 수: 필수 바스켓의 수(대안형은 가장 많은 바스켓) */
function primaryCount(category: Category, runs: BasketRun[]): number {
  const rule = BASKET_RULES[category];
  const pool = rule.mode === 'alternatives' ? runs : runs.filter((r) => rule.required.includes(r.basket));
  return Math.max(0, ...pool.map((r) => r.adultCount));
}

/** 한 도시·한 여행 조건의 현지 체류비 범위를 계산한다. 순수 함수 — 가격은 samples 인자로만 들어온다. */
export function estimateTrip(input: TripInput, city: City, samples: PriceSample[]): Estimate {
  const days = tripDays(input.nights);
  const dates = Array.from({ length: days }, (_, i) => addDays(input.visitDate, i));
  const weights = dayWeights(days);
  const classified = samples.filter((s) => s.cityId === city.id).map(classify);

  const categories = {} as Record<Category, CategoryEstimate>;
  const warnings: Warning[] = [];
  for (const c of CATEGORIES) {
    const run = estimateCategory(c, classified, input, dates, weights);
    categories[c] = run.estimate;
    warnings.push(...run.warnings);
  }

  const missing = CATEGORIES.filter((c) => !categories[c].sufficient);
  const { fillRate } = summarizeCity(city, samples);
  const lowFill = missing.length === 0 && fillRate < MODEL.minFillRate;
  if (lowFill) warnings.push({ code: 'lowFillRate' });
  const computable = missing.length === 0 && !lowFill;

  let subtotal: Range | null = null;
  let contingency: Range | null = null;
  let total: Range | null = null;
  if (computable) {
    subtotal = CATEGORIES.reduce((sum, c) => add(sum, categories[c].total as Range), ZERO);
    contingency = scale(subtotal, MODEL.contingencyRate);
    total = add(subtotal, contingency);
  }
  const food = categories.food.total;
  return {
    cityId: city.id,
    currency: city.currency,
    days,
    categories,
    subtotal,
    contingency,
    total,
    dailyFoodAverage: food ? scale(food, 1 / days) : null,
    missing,
    fillRate,
    computable,
    warnings,
  };
}

export interface CitySummary {
  /** 비용군별 대표 바스켓의 계산 가능 표본 수(성인 기준) */
  counts: Record<Category, number>;
  /** 바스켓별 계산 가능 표본 수(성인 기준) */
  baskets: Record<Basket, number>;
  fillRate: number;
  /** 표본 수가 최소 기준 미만인 비용군 */
  missing: Category[];
  excluded: Array<{ sample: PriceSample; reason: ExcludeReason }>;
  totalRows: number;
}

/** 방문일·인원과 무관한 도시 데이터 현황(방법론 페이지의 데이터 현황 표에 쓴다) */
export function summarizeCity(city: City, samples: PriceSample[]): CitySummary {
  const rows = samples.filter((s) => s.cityId === city.id).map(classify);
  const baskets = {} as Record<Basket, number>;
  for (const b of ['pass', 'ride', 'meal', 'snack', 'attraction', 'souvenir'] as const) {
    baskets[b] = selectUsable(rows.filter((r) => r.basket === b && r.audience === 'adult')).length;
  }
  const counts = {} as Record<Category, number>;
  for (const c of CATEGORIES) {
    const rule = BASKET_RULES[c];
    const pool = rule.mode === 'alternatives' ? rule.baskets : rule.required;
    counts[c] = Math.max(0, ...pool.map((b) => baskets[b]));
  }
  const fillRate =
    CATEGORIES.reduce((sum, c) => sum + Math.min(MODEL.fillRateCap, counts[c]), 0) / (MODEL.fillRateCap * CATEGORIES.length);
  return {
    counts,
    baskets,
    fillRate,
    missing: CATEGORIES.filter((c) => counts[c] < MODEL.minSamplesPerCategory),
    excluded: rows.filter((r) => !r.usable).map((r) => ({ sample: r.sample, reason: r.excludeReason as ExcludeReason })),
    totalRows: rows.length,
  };
}
