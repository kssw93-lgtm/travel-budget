import { classify, isVariablePricing, type Classified, type ExcludeReason } from './classify';
import { addDays } from './dates';
import { BASKET_RULES, BASKETS, CATEGORIES, EDGE_WEIGHTED, MODEL } from './model-config';
import { attractionOptions } from './attractions';
import { endpoints, independentCount, poolOnDate, selectUsable, styleRange } from './pool';
import type {
  Basket,
  BasketEstimate,
  Category,
  CategoryEstimate,
  City,
  DetailLine,
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
  /** 성인 기준 사용 가능 표본 행 수(모델 사용 우선 규칙 적용 후) */
  adultCount: number;
  /** 성인 기준 독립 표본 수 — 충족 판정 기준 */
  adultIndependent: number;
  childCount: number;
  sufficient: boolean;
  total: Range | null;
  used: Classified[];
  excludedByDate: string[];
  resolved: string[];
  childAsAdult: boolean;
  /** 하루 상한 요금으로 잘린 경우 그 상한 표본 ID */
  capIds: string[];
  /** 상한이 있는 도시에서 상한 적용을 받지 않은 별도 요금 체계 1회권 */
  exemptIds: string[];
  /** 자세히 보기 내역 */
  lines: DetailLine[];
}

const clampRange = (r: Range, cap: number): Range => ({ min: Math.min(r.min, cap), max: Math.min(r.max, cap) });

/** 사용한 표본의 품질 경고(조건부·C등급·재검증·시작가·변동 가격·세금 별도·관광 탑승) */
export function qualityWarnings(category: Category, rows: Classified[]): Warning[] {
  const out: Warning[] = [];
  const pick = (f: (r: Classified) => boolean) => [...new Set(rows.filter(f).map((r) => r.sample.id))];
  const flag = (code: Warning['code'], ids: string[]) => {
    if (ids.length) out.push({ category, code, ids });
  };
  flag('conditionalUsed', pick((r) => r.sample.modelUse === 'conditional'));
  flag('gradeCUsed', pick((r) => r.sample.grade === 'C'));
  flag('revalidation', pick((r) => r.sample.status.includes('재검증') || Boolean(r.sample.review)));
  flag('fromPrice', pick((r) => r.fromPrice));
  flag('variablePricing', pick((r) => isVariablePricing(r.sample, r.variant)));
  flag('taxExcluded', pick((r) => r.taxExcluded));
  flag('sightseeingRide', pick((r) => r.sightseeingRide));
  return out;
}

/** 한 바스켓(같은 단위의 표본 묶음)의 전체 일정·전체 인원 합계. 다른 바스켓의 가격과 섞지 않는다. */
function priceBasket(basket: Basket, all: Classified[], input: TripInput, dates: string[], weights: number[]): BasketRun {
  const rows = all.filter((r) => r.basket === basket);
  const adultRows = selectUsable(rows.filter((r) => r.audience === 'adult'));
  const childRows = selectUsable(rows.filter((r) => r.audience === 'child'));
  const run: BasketRun = {
    basket,
    adultCount: adultRows.length,
    adultIndependent: independentCount(adultRows),
    childCount: childRows.length,
    sufficient: independentCount(adultRows) >= MODEL.minSamplesPerCategory,
    total: null,
    used: [],
    excludedByDate: [],
    resolved: [],
    childAsAdult: false,
    capIds: [],
    exemptIds: [],
    lines: [],
  };
  if (!run.sufficient) return run;

  const used = new Map<string, Classified>();
  const excluded = new Set<string>();
  const resolved = new Set<string>();
  const perUse = MODEL.usage[basket][input.style];
  const edge = EDGE_WEIGHTED.includes(basket);
  const hasChildPool = childRows.length > 0;

  // 성인 가격은 그날 유효한 독립 표본이 최소 기준 이상일 때만 낸다(판매 기간이 끝난 표본이 빠지면 부족이 될 수 있음).
  // 어린이 가격은 표본이 하나라도 있으면 쓰고, 없으면 성인 가격으로 대신한다.
  const priceDay = (pool: Classified[], date: string, minIndependent = 1): Range | null => {
    const day = poolOnDate(pool, date);
    day.excludedByDate.forEach((id) => excluded.add(id));
    if (day.rows.length === 0 || independentCount(day.rows) < minIndependent) return null;
    day.resolvedVariants.forEach((id) => resolved.add(id));
    day.rows.forEach((r) => used.set(r.sample.id, r));
    return styleRange(endpoints(day.rows, basket), input.style);
  };

  // 1회권은 하루 상한 요금(TfL daily cap 등 공식 요금 규칙)이 있으면 1인 하루 비용을 그 금액으로 자른다.
  // 상한은 같은 대중교통 요금 체계에만 적용한다. 공유자전거처럼 별도 체계인 1회권(capExempt)은 자르지 않고
  // 따로 계산한 뒤 두 범위를 합친다(그날 대중교통만 탈 수도, 자전거만 탈 수도 있으므로).
  const caps = basket === 'ride' ? all.filter((r) => r.dailyCap && r.usable && r.audience === 'adult') : [];
  const capIds = new Set<string>();
  const exemptIds = new Set<string>();
  const capOn = (date: string): { value: number; ids: string[] } | null => {
    const valid = poolOnDate(caps, date).rows;
    if (valid.length === 0) return null;
    return { value: Math.min(...valid.map((r) => r.sample.max)), ids: valid.map((r) => r.sample.id) };
  };
  /** 1인 하루 비용(이용 횟수 반영)과 1회 가격. 표본이 부족하면 null */
  const personDay = (pool: Classified[], date: string, minIndependent: number): { unit: Range; day: Range } | null => {
    const whole = priceDay(pool, date, minIndependent);
    if (!whole) return null;
    const cap = capOn(date);
    if (!cap) return { unit: whole, day: scale(whole, perUse) };
    const parts: Range[] = [];
    const covered = priceDay(pool.filter((r) => !r.capExempt), date, 1);
    if (covered) {
      let day = scale(covered, perUse);
      if (day.max > cap.value) {
        cap.ids.forEach((id) => capIds.add(id));
        day = clampRange(day, cap.value);
      }
      parts.push(day);
    }
    const exempt = pool.filter((r) => r.capExempt);
    const exemptRange = priceDay(exempt, date, 1);
    if (exemptRange) {
      poolOnDate(exempt, date).rows.forEach((r) => exemptIds.add(r.sample.id));
      parts.push(scale(exemptRange, perUse));
    }
    return { unit: whole, day: { min: Math.min(...parts.map((p) => p.min)), max: Math.max(...parts.map((p) => p.max)) } };
  };

  let total: Range = ZERO;
  if (basket === 'souvenir') {
    // 기념품은 여행 전체 기준: 성인 1인당 구매 개수 × 단가(어린이는 구매하지 않는 것으로 가정)
    const unit = priceDay(adultRows, dates[0] as string, MODEL.minSamplesPerCategory);
    if (!unit) run.sufficient = false;
    else {
      total = scale(unit, perUse * input.adults);
      run.lines.push({ kind: 'trip', basket, units: perUse * input.adults, unitPrice: unit, total });
    }
  } else {
    for (const [i, date] of dates.entries()) {
      const adult = personDay(adultRows, date, MODEL.minSamplesPerCategory);
      if (!adult) {
        run.sufficient = false;
        break;
      }
      const w = edge ? (weights[i] as number) : 1;
      let day = scale(adult.day, input.adults);
      // 주류는 성인만. 그 밖에는 어린이 표본이 있으면 어린이 가격, 없으면 성인 가격(경고 표시)
      if (input.children > 0 && basket !== 'drink') {
        const child = hasChildPool ? (personDay(childRows, date, 1) ?? adult) : adult;
        day = add(day, scale(child.day, input.children));
      }
      const dayTotal = scale(day, w);
      total = add(total, dayTotal);
      run.lines.push({ kind: 'day', basket, day: i + 1, date, units: perUse * w, unitPrice: adult.unit, total: dayTotal });
    }
    run.childAsAdult = input.children > 0 && !hasChildPool && basket !== 'drink';
  }

  run.capIds = [...capIds];
  run.exemptIds = capIds.size || caps.length ? [...exemptIds] : [];
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
  // 주류는 사용자가 "음주 포함"을 고른 경우에만 계산한다
  const runs = rule.baskets.filter((b) => b !== 'drink' || input.drinks).map((b) => priceBasket(b, all, input, dates, weights));
  const warnings: Warning[] = [];
  const drinkRun = runs.find((r) => r.basket === 'drink');
  if (drinkRun && drinkRun.adultCount === 0) warnings.push({ category, code: 'drinkNoData', basket: 'drink' });

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

  if (!requiredOk) {
    warnings.push({ category, code: 'insufficient' });
    const dated = runs.flatMap((r) => r.excludedByDate);
    if (dated.length) warnings.push({ category, code: 'dateExcluded', ids: [...new Set(dated)] });
  }
  for (const r of runs) {
    // 표본이 있는데 최소 기준에 못 미쳐 빠진 바스켓은 조용히 넘기지 않고 알린다
    if (requiredOk && !r.sufficient && r.adultCount > 0) warnings.push({ category, code: 'basketOmitted', basket: r.basket });
  }

  const usedRows = included.flatMap((r) => r.used);
  if (requiredOk) {
    const flag = (code: Warning['code'], ids: string[]) => {
      if (ids.length) warnings.push({ category, code, ids });
    };
    if (included.some((r) => r.childAsAdult) || (input.children > 0 && category === 'food' && !included.some((r) => r.childCount > 0))) {
      warnings.push({ category, code: 'childAsAdult' });
    }
    warnings.push(...qualityWarnings(category, usedRows));
    flag('dailyCapApplied', [...new Set(included.flatMap((r) => r.capIds))]);
    flag('capExempt', [...new Set(included.flatMap((r) => r.exemptIds))]);
    flag('dateResolved', included.flatMap((r) => r.resolved));
    flag('dateExcluded', included.flatMap((r) => r.excludedByDate));
  }

  const baskets: BasketEstimate[] = runs.map((r) => ({
    basket: r.basket,
    sampleCount: r.adultCount,
    independentCount: r.adultIndependent,
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
      mode: 'estimated',
      baskets,
      lines: included.flatMap((r) => r.lines),
      contingency: null,
      total,
      perPersonPerDay: total ? scale(total, 1 / (people * dates.length)) : null,
      sampleCount: requiredOk ? new Set(adultUsed.map((r) => r.sample.id)).size : primaryCount(category, runs, 'rows'),
      independentCount: requiredOk ? independentCount(dedupe(adultUsed)) : primaryCount(category, runs, 'independent'),
      childSampleCount: requiredOk ? new Set(usedRows.filter((r) => r.audience === 'child').map((r) => r.sample.id)).size : 0,
      sufficient: requiredOk,
      sources: uniqueSources(usedRows),
      checkedFrom: checked[0] ?? null,
      checkedTo: checked[checked.length - 1] ?? null,
      usedIds: [...new Set(usedRows.map((r) => r.sample.id))],
    },
  };
}

const dedupe = (rows: Classified[]) => [...new Map(rows.map((r) => [r.sample.id, r])).values()];

/** 부족 안내에 쓰는 대표 표본 수: 필수 바스켓의 수(대안형은 가장 많은 바스켓) */
function primaryCount(category: Category, runs: BasketRun[], kind: 'rows' | 'independent'): number {
  const rule = BASKET_RULES[category];
  const pool = rule.mode === 'alternatives' ? runs : runs.filter((r) => rule.required.includes(r.basket));
  return Math.max(0, ...pool.map((r) => (kind === 'rows' ? r.adultCount : r.adultIndependent)));
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
    const selected = c === 'attraction' && input.attractionIds?.length ? selectedAttractions(city, samples, input, dates) : null;
    const run = selected ?? estimateCategory(c, classified, input, dates, weights);
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
    // 예비비는 항목별로도 보여 준다(합은 전체 예비비와 같다)
    for (const c of CATEGORIES) categories[c].contingency = scale(categories[c].total as Range, MODEL.contingencyRate);
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
  /** 비용군별 대표 바스켓의 독립 표본 수(성인 기준) — 충족 판정 기준 */
  counts: Record<Category, number>;
  /** 바스켓별 독립 표본 수(성인 기준) */
  baskets: Record<Basket, number>;
  /** 바스켓별 표본 행 수(성인 기준, 변형 포함) */
  basketRows: Record<Basket, number>;
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
  const basketRows = {} as Record<Basket, number>;
  for (const b of BASKETS) {
    const pool = selectUsable(rows.filter((r) => r.basket === b && r.audience === 'adult'));
    baskets[b] = independentCount(pool);
    basketRows[b] = pool.length;
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
    basketRows,
    fillRate,
    missing: CATEGORIES.filter((c) => counts[c] < MODEL.minSamplesPerCategory),
    excluded: rows.filter((r) => !r.usable).map((r) => ({ sample: r.sample, reason: r.excludeReason as ExcludeReason })),
    totalRows: rows.length,
  };
}

/** 방문일·인원과 무관한 도시 판정. data:convert 가 status.json 으로 저장하고 고정 테스트가 비교한다. */
export interface CityStatus {
  /** 비용군별 독립 표본 수(성인, 대표 바스켓) */
  counts: Record<Category, number>;
  /** 바스켓별 독립 표본 수 */
  baskets: Record<Basket, number>;
  /** 바스켓별 가격 행 수(변형 포함) */
  basketRows: Record<Basket, number>;
  fillRate: number;
  missing: Category[];
  computable: boolean;
}

export function cityStatus(city: City, samples: PriceSample[]): CityStatus {
  const s = summarizeCity(city, samples);
  return {
    counts: s.counts,
    baskets: s.baskets,
    basketRows: s.basketRows,
    fillRate: Math.round(s.fillRate * 100) / 100,
    missing: s.missing,
    computable: s.missing.length === 0 && s.fillRate >= MODEL.minFillRate,
  };
}

/**
 * 사용자가 고른 관광지의 입장료 합계. 1곳당 1회 방문, 성인 요금 × 성인 + (아동 요금이 있으면 아동 요금, 없으면 성인 요금) × 아동.
 * 여행 기간 중 하루라도 판매·유효 기간에 드는 곳만 더하고, 아닌 곳은 경고로 알린다. 고른 곳이 모두 무효면 null(평균 추정으로 대체).
 */
function selectedAttractions(city: City, samples: PriceSample[], input: TripInput, dates: string[]): { estimate: CategoryEstimate; warnings: Warning[] } | null {
  const ids = new Set(input.attractionIds ?? []);
  const options = attractionOptions(city, samples).filter((o) => ids.has(o.id));
  if (options.length === 0) return null;
  const validSomeDay = (r: Classified) => dates.some((d) => poolOnDate([r], d).rows.length > 0);
  const chosen = options.filter((o) => validSomeDay(o.adult));
  const dropped = options.filter((o) => !chosen.includes(o)).map((o) => o.id);
  const warnings: Warning[] = [];
  if (dropped.length) warnings.push({ category: 'attraction', code: 'dateExcluded', ids: dropped });
  if (chosen.length === 0) return null;

  let total: Range = ZERO;
  const used: Classified[] = [];
  const lines: DetailLine[] = [];
  let childFallback = false;
  for (const o of chosen) {
    const adult = { min: o.adult.sample.min, max: o.adult.sample.max };
    const child = o.child ? { min: o.child.sample.min, max: o.child.sample.max } : adult;
    if (input.children > 0 && !o.child) childFallback = true;
    const line = add(scale(adult, input.adults), scale(child, input.children));
    total = add(total, line);
    lines.push({
      kind: 'item', basket: 'attraction', id: o.id, nameKo: o.adult.sample.nameKo, nameEn: o.adult.sample.nameEn,
      units: 1, unitPrice: adult, childPrice: o.child ? child : null, total: line,
    });
    used.push(o.adult);
    if (o.child && input.children > 0) used.push(o.child);
  }
  if (childFallback) warnings.push({ category: 'attraction', code: 'childAsAdult' });
  warnings.push(...qualityWarnings('attraction', used));
  const checked = used.map((r) => r.sample.checkedAt).sort();
  const people = input.adults + input.children;
  return {
    warnings,
    estimate: {
      category: 'attraction',
      mode: 'selected',
      lines,
      contingency: null,
      baskets: [{ basket: 'attraction', sampleCount: chosen.length, independentCount: chosen.length, childSampleCount: used.length - chosen.length, sufficient: true, included: true }],
      total,
      perPersonPerDay: scale(total, 1 / (people * dates.length)),
      sampleCount: chosen.length,
      independentCount: chosen.length,
      childSampleCount: used.length - chosen.length,
      sufficient: true,
      sources: uniqueSources(used),
      checkedFrom: checked[0] ?? null,
      checkedTo: checked[checked.length - 1] ?? null,
      usedIds: used.map((r) => r.sample.id),
    },
  };
}
