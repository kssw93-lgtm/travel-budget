import { classify, isVariablePricing, type Classified, type ExcludeReason } from './classify';
import { addDays } from './dates';
import { CATEGORIES, MODEL } from './model-config';
import { endpoints, poolOnDate, selectUsable, styleRange } from './pool';
import type {
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

function unitFactor(category: Category, input: TripInput): number {
  if (category === 'food') return MODEL.mealsPerDay;
  if (category === 'attraction') return MODEL.attractionsPerDay[input.style];
  return 1;
}

function uniqueSources(rows: Classified[]): SourceRef[] {
  const seen = new Map<string, SourceRef>();
  for (const r of rows) {
    const key = `${r.sample.sourceName}|${r.sample.sourceUrl}`;
    if (!seen.has(key)) seen.set(key, { name: r.sample.sourceName, url: r.sample.sourceUrl });
  }
  return [...seen.values()];
}

interface CategoryRun {
  estimate: CategoryEstimate;
  warnings: Warning[];
}

function estimateCategory(
  category: Category,
  all: Classified[],
  input: TripInput,
  dates: string[],
  weights: number[],
): CategoryRun {
  const mine = all.filter((r) => r.sample.category === category);
  const adultRows = selectUsable(mine.filter((r) => r.audience === 'adult'));
  const childRows = selectUsable(mine.filter((r) => r.audience === 'child'));
  const warnings: Warning[] = [];

  const used = new Map<string, Classified>();
  const excludedByDate = new Set<string>();
  const resolved = new Set<string>();

  let sufficient = adultRows.length >= MODEL.minSamplesPerCategory;
  const edge = category === 'food' || category === 'attraction';
  let total: Range = ZERO;

  if (sufficient) {
    const factor = unitFactor(category, input);
    const hasChildPool = childRows.length > 0;

    const priceDay = (rows: Classified[], date: string): Range | null => {
      const pool = poolOnDate(rows, date);
      pool.excludedByDate.forEach((id) => excludedByDate.add(id));
      if (pool.rows.length === 0) return null;
      pool.resolvedVariants.forEach((id) => resolved.add(id));
      pool.rows.forEach((r) => used.set(r.sample.id, r));
      return styleRange(endpoints(pool.rows, category), input.style);
    };

    if (category === 'souvenir') {
      // 기념품은 여행 전체 기준: 성인 1인당 구매 개수 × 단가(어린이는 구매하지 않는 것으로 가정)
      const unit = priceDay(adultRows, dates[0] as string);
      if (!unit) sufficient = false;
      else total = scale(unit, MODEL.souvenirsPerAdult[input.style] * input.adults);
    } else {
      dates.forEach((date, i) => {
        if (!sufficient) return;
        const w = edge ? (weights[i] as number) : 1;
        const adult = priceDay(adultRows, date);
        if (!adult) {
          sufficient = false;
          return;
        }
        let day = scale(adult, input.adults);
        if (input.children > 0) {
          // 어린이 표본이 있으면 어린이 가격, 없으면 성인 가격을 적용(경고 표시)
          const child = hasChildPool ? (priceDay(childRows, date) ?? adult) : adult;
          day = add(day, scale(child, input.children));
        }
        total = add(total, scale(day, factor * w));
      });
    }

    if (sufficient) {
      if (input.children > 0 && category !== 'souvenir' && (!hasChildPool || category === 'food')) {
        warnings.push({ category, code: 'childAsAdult' });
      }
    }
  }

  if (!sufficient) {
    warnings.push({ category, code: 'insufficient' });
    total = ZERO;
  } else {
    const rows = [...used.values()];
    const pick = (f: (r: Classified) => boolean) => rows.filter(f).map((r) => r.sample.id);
    const flag = (code: Warning['code'], ids: string[]) => ids.length && warnings.push({ category, code, ids });
    flag('conditionalUsed', pick((r) => r.sample.modelUse === 'conditional'));
    flag('gradeCUsed', pick((r) => r.sample.grade === 'C'));
    flag('revalidation', pick((r) => r.sample.status.includes('재검증')));
    flag('fromPrice', pick((r) => r.fromPrice));
    flag('variablePricing', pick((r) => isVariablePricing(r.sample)));
    flag('dateResolved', [...resolved]);
    flag('dateExcluded', [...excludedByDate]);
  }

  const rows = [...used.values()];
  const checked = rows.map((r) => r.sample.checkedAt).sort();
  const people = input.adults + input.children;
  const days = dates.length;
  return {
    warnings,
    estimate: {
      category,
      total: sufficient ? total : null,
      perPersonPerDay: sufficient ? scale(total, 1 / (people * days)) : null,
      sampleCount: sufficient ? rows.filter((r) => r.audience === 'adult').length : adultRows.length,
      childSampleCount: sufficient ? rows.filter((r) => r.audience === 'child').length : 0,
      sufficient,
      sources: uniqueSources(rows),
      checkedFrom: checked[0] ?? null,
      checkedTo: checked[checked.length - 1] ?? null,
      usedIds: rows.map((r) => r.sample.id),
    },
  };
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
  /** 비용군별 계산에 쓸 수 있는 성인 기준 표본 수 */
  counts: Record<Category, number>;
  fillRate: number;
  /** 표본 수가 최소 기준 미만인 비용군 */
  missing: Category[];
  excluded: Array<{ sample: PriceSample; reason: ExcludeReason }>;
  totalRows: number;
}

/** 방문일·인원과 무관한 도시 데이터 현황(방법론 페이지의 데이터 현황 표에 쓴다) */
export function summarizeCity(city: City, samples: PriceSample[]): CitySummary {
  const rows = samples.filter((s) => s.cityId === city.id).map(classify);
  const counts = {} as Record<Category, number>;
  for (const c of CATEGORIES) {
    counts[c] = selectUsable(rows.filter((r) => r.sample.category === c && r.audience === 'adult')).length;
  }
  const fillRate =
    CATEGORIES.reduce((sum, c) => sum + Math.min(MODEL.fillRateCap, counts[c]), 0) / (MODEL.fillRateCap * CATEGORIES.length);
  return {
    counts,
    fillRate,
    missing: CATEGORIES.filter((c) => counts[c] < MODEL.minSamplesPerCategory),
    excluded: rows.filter((r) => !r.usable).map((r) => ({ sample: r.sample, reason: r.excludeReason as ExcludeReason })),
    totalRows: rows.length,
  };
}
