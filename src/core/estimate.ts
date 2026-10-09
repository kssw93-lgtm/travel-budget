import { classify, isVariablePricing, type Classified, type ExcludeReason } from './classify';
import { addDays } from './dates';
import { BASKET_RULES, BASKETS, CATEGORIES, EDGE_WEIGHTED, ESTIMATED_CATEGORIES, MODEL } from './model-config';
import { attractionOptions } from './attractions';
import { passOptions, passesNeeded } from './transport';
import { estimateExtras } from './extras';
import { endpoints, independentCount, poolOnDate, selectUsable, styleRange } from './pool';
import type {
  Basket,
  BasketEstimate,
  CostCategory,
  CategoryEstimate,
  City,
  DetailLine,
  Estimate,
  ExtraSample,
  PriceSample,
  Range,
  SourceRef,
  TripInput,
  Warning,
} from './types';

/** 바스켓 계산 옵션(자세히 설정): 하루 이용 횟수와 이용 일수를 바꾼다 */
interface BasketOpts {
  perUse?: number;
  /** 앞에서부터 며칠만 계산(교통을 매일 타지 않는 경우) */
  days?: number;
}

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
export function qualityWarnings(category: CostCategory, rows: Classified[]): Warning[] {
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
function priceBasket(basket: Basket, all: Classified[], input: TripInput, dates: string[], weights: number[], opts: BasketOpts = {}): BasketRun {
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
  const perUse = opts.perUse ?? MODEL.usage[basket][input.style];
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
  {
    const useDates = opts.days === undefined ? dates : dates.slice(0, Math.max(0, Math.min(dates.length, opts.days)));
    for (const [i, date] of useDates.entries()) {
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
      run.lines.push({ kind: 'day', basket, day: i + 1, date, units: perUse * w, weight: w, unitPrice: adult.unit, total: dayTotal });
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
  category: CostCategory,
  all: Classified[],
  input: TripInput,
  dates: string[],
  weights: number[],
  override: { baskets?: readonly Basket[]; opts?: (b: Basket) => BasketOpts } = {},
): { estimate: CategoryEstimate; warnings: Warning[] } {
  const rule = { ...BASKET_RULES[category], ...(override.baskets ? { baskets: override.baskets } : {}) };
  // 주류는 사용자가 "음주 포함"을 고른 경우에만 계산한다
  const runs = rule.baskets.filter((b) => b !== 'drink' || input.drinks).map((b) => priceBasket(b, all, input, dates, weights, override.opts?.(b) ?? {}));
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
function primaryCount(category: CostCategory, runs: BasketRun[], kind: 'rows' | 'independent'): number {
  const rule = BASKET_RULES[category];
  const pool = rule.mode === 'alternatives' ? runs : runs.filter((r) => rule.required.includes(r.basket));
  return Math.max(0, ...pool.map((r) => (kind === 'rows' ? r.adultCount : r.adultIndependent)));
}

/** 한 도시·한 여행 조건의 현지 체류비 범위를 계산한다. 순수 함수 — 가격은 samples 인자로만 들어온다. */
export function estimateTrip(input: TripInput, city: City, samples: PriceSample[], extraSamples: ExtraSample[] = []): Estimate {
  const days = tripDays(input.nights);
  const dates = Array.from({ length: days }, (_, i) => addDays(input.visitDate, i));
  const weights = dayWeights(days);
  const classified = samples.filter((s) => s.cityId === city.id).map(classify);

  const categories = {} as Record<CostCategory, CategoryEstimate>;
  const warnings: Warning[] = [];
  for (const c of CATEGORIES) {
    // 관광지는 자동 추정하지 않는다: 고른 곳의 입장료 합계, 고르지 않으면 0
    const run =
      c === 'attraction'
        ? selectedAttractions(city, samples, input, dates)
        : c === 'transport' && input.transport
          ? plannedTransport(input.transport, city, samples, classified, input, dates, weights)
          : c === 'food'
            ? withMustEat(foodWithDrinks(classified, input, dates, weights), input, weights)
            : estimateCategory(c, classified, input, dates, weights);
    categories[c] = run.estimate;
    warnings.push(...run.warnings);
  }

  const missing = CATEGORIES.filter((c) => !categories[c].sufficient);
  const { fillRate } = summarizeCity(city, samples);
  const lowFill = missing.length === 0 && fillRate < MODEL.minFillRate;
  if (lowFill) warnings.push({ code: 'lowFillRate' });
  const computable = missing.length === 0 && !lowFill;

  const extras = estimateExtras(input, extraSamples);
  let subtotal: Range | null = null;
  let contingency: Range | null = null;
  let total: Range | null = null;
  if (computable) {
    // 예비비는 항목별로도 보여 준다(합은 전체 예비비와 같다)
    for (const c of CATEGORIES) categories[c].contingency = scale(categories[c].total as Range, MODEL.contingencyRate);
    for (const x of extras) x.contingency = scale(x.total, MODEL.contingencyRate);
    subtotal = extras.reduce((sum, x) => add(sum, x.total), CATEGORIES.reduce((sum, c) => add(sum, categories[c].total as Range), ZERO));
    contingency = scale(subtotal, MODEL.contingencyRate);
    total = add(subtotal, contingency);
  }
  const food = categories.food.total;
  return {
    cityId: city.id,
    currency: city.currency,
    days,
    categories,
    extras,
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
  counts: Record<CostCategory, number>;
  /** 바스켓별 독립 표본 수(성인 기준) */
  baskets: Record<Basket, number>;
  /** 바스켓별 표본 행 수(성인 기준, 변형 포함) */
  basketRows: Record<Basket, number>;
  fillRate: number;
  /** 표본 수가 최소 기준 미만인 비용군 */
  missing: CostCategory[];
  excluded: Array<{ sample: PriceSample; reason: ExcludeReason }>;
  totalRows: number;
}

/** 방문일·인원과 무관한 도시 데이터 현황(조사 큐·상태 파일·테스트에 쓴다) */
export function summarizeCity(city: City, samples: PriceSample[]): CitySummary {
  const rows = samples.filter((s) => s.cityId === city.id).map(classify);
  const baskets = {} as Record<Basket, number>;
  const basketRows = {} as Record<Basket, number>;
  for (const b of BASKETS) {
    const pool = selectUsable(rows.filter((r) => r.basket === b && r.audience === 'adult'));
    baskets[b] = independentCount(pool);
    basketRows[b] = pool.length;
  }
  const counts = {} as Record<CostCategory, number>;
  for (const c of CATEGORIES) {
    const rule = BASKET_RULES[c];
    const pool = rule.mode === 'alternatives' ? rule.baskets : rule.required;
    counts[c] = Math.max(0, ...pool.map((b) => baskets[b]));
  }
  const fillRate =
    ESTIMATED_CATEGORIES.reduce((sum, c) => sum + Math.min(MODEL.fillRateCap, counts[c]), 0) / (MODEL.fillRateCap * ESTIMATED_CATEGORIES.length);
  return {
    counts,
    baskets,
    basketRows,
    fillRate,
    missing: ESTIMATED_CATEGORIES.filter((c) => counts[c] < MODEL.minSamplesPerCategory),
    excluded: rows.filter((r) => !r.usable).map((r) => ({ sample: r.sample, reason: r.excludeReason as ExcludeReason })),
    totalRows: rows.length,
  };
}

/** 방문일·인원과 무관한 도시 판정. data:convert 가 status.json 으로 저장하고 고정 테스트가 비교한다. */
export interface CityStatus {
  /** 비용군별 독립 표본 수(성인, 대표 바스켓) */
  counts: Record<CostCategory, number>;
  /** 바스켓별 독립 표본 수 */
  baskets: Record<Basket, number>;
  /** 바스켓별 가격 행 수(변형 포함) */
  basketRows: Record<Basket, number>;
  fillRate: number;
  missing: CostCategory[];
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
 * 여행 기간 중 하루라도 판매·유효 기간에 드는 곳만 더하고, 아닌 곳은 경고로 알린다. 고른 곳이 없으면 0.
 */
function selectedAttractions(city: City, samples: PriceSample[], input: TripInput, dates: string[]): { estimate: CategoryEstimate; warnings: Warning[] } {
  const ids = new Set(input.attractionIds ?? []);
  const options = attractionOptions(city, samples).filter((o) => ids.has(o.id));

  const validSomeDay = (r: Classified) => dates.some((d) => poolOnDate([r], d).rows.length > 0);
  const chosen = options.filter((o) => validSomeDay(o.adult));
  const dropped = options.filter((o) => !chosen.includes(o)).map((o) => o.id);
  const warnings: Warning[] = [];
  if (dropped.length) warnings.push({ category: 'attraction', code: 'dateExcluded', ids: dropped });

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
      kind: 'item', basket: 'attraction', id: o.id, nameKo: o.adult.sample.nameKo, nameEn: o.adult.sample.nameEn, nameJa: o.adult.sample.nameJa,
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
      perPersonPerDay: scale(total, 1 / Math.max(1, people * dates.length)),
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

/** 금액만 정해진 비용군(교통 안 탐·이용권 선택 등)의 결과 모양 */
function fixedEstimate(category: CostCategory, total: Range, lines: DetailLine[], used: Classified[], people: number, days: number): CategoryEstimate {
  const checked = used.map((r) => r.sample.checkedAt).sort();
  return {
    category,
    mode: 'selected',
    baskets: [],
    lines,
    contingency: null,
    total,
    perPersonPerDay: scale(total, 1 / Math.max(1, people * days)),
    sampleCount: used.length,
    independentCount: used.length,
    childSampleCount: used.filter((r) => r.audience === 'child').length,
    sufficient: true,
    sources: uniqueSources(used),
    checkedFrom: checked[0] ?? null,
    checkedTo: checked[checked.length - 1] ?? null,
    usedIds: used.map((r) => r.sample.id),
  };
}

/**
 * 자세히 설정의 교통 이용 방식.
 * none: 0(공항 이동은 따로 고른 상품만) · rides: 1회권 바스켓으로 하루 perDay 번 × days 일(하루 상한 규칙 그대로) ·
 * pass: 고른 이용권을 days 일 동안 필요한 장수만큼(성인 요금 × 성인 + 같은 상품 아동 요금(없으면 성인 요금) × 아동)
 */
function plannedTransport(
  plan: NonNullable<TripInput['transport']>,
  city: City,
  samples: PriceSample[],
  classified: Classified[],
  input: TripInput,
  dates: string[],
  weights: number[],
): { estimate: CategoryEstimate; warnings: Warning[] } {
  const people = input.adults + input.children;
  if (plan.mode === 'none') {
    return { estimate: fixedEstimate('transport', ZERO, [], [], people, dates.length), warnings: [{ category: 'transport', code: 'transportNone' }] };
  }
  const days = Math.max(0, Math.min(dates.length, plan.days));
  if (plan.mode === 'rides') {
    return estimateCategory('transport', classified, input, dates, weights, { baskets: ['ride'], opts: () => ({ perUse: plan.perDay, days }) });
  }
  const option = passOptions(city, samples).find((o) => o.id === plan.passId);
  // 고른 이용권이 이 도시에 없으면(도시를 바꾼 직후 등) 기본 가정으로 계산한다
  if (!option) return estimateCategory('transport', classified, input, dates, weights);
  const count = passesNeeded(option.days, days);
  const adult = { min: option.adult.sample.min, max: option.adult.sample.max };
  const child = option.child ? { min: option.child.sample.min, max: option.child.sample.max } : adult;
  const total = add(scale(adult, count * input.adults), scale(child, count * input.children));
  const used = [option.adult, ...(option.child && input.children > 0 ? [option.child] : [])];
  const warnings: Warning[] = [...qualityWarnings('transport', used)];
  if (input.children > 0 && !option.child) warnings.push({ category: 'transport', code: 'childAsAdult' });
  const line: DetailLine = {
    kind: 'item', basket: 'pass', id: option.id, nameKo: option.adult.sample.nameKo, nameEn: option.adult.sample.nameEn, nameJa: option.adult.sample.nameJa,
    units: count, unitPrice: adult, childPrice: option.child ? child : null, total,
  };
  return { estimate: fixedEstimate('transport', total, [line], used, people, dates.length), warnings };
}

/**
 * 꼭 먹을 음식: 1개당 전 인원이 1인분씩 먹는 것으로 보고 그 가격을 더하고, 같은 수의 일반 한 끼(1인 1끼 단가 × 인원)를 뺀다.
 * 일반 끼니 수(일정 전체)보다 많이 고르면 남는 것은 빼지 않고 더하기만 한다. 외식이 계산 불가면 그대로 둔다.
 */
function withMustEat(run: { estimate: CategoryEstimate; warnings: Warning[] }, input: TripInput, weights: number[]): { estimate: CategoryEstimate; warnings: Warning[] } {
  const items = (input.mustEat ?? []).filter((m) => m.price >= 0 && m.name.trim());
  const e = run.estimate;
  if (items.length === 0 || !e.total) return run;
  const people = input.adults + input.children;
  const mealLine = e.lines.find((l) => l.basket === 'meal');
  const mealsPerPerson = weights.reduce((sum, w) => sum + w, 0) * (input.mealsPerDay ?? MODEL.usage.meal[input.style]);
  const replaced = Math.min(items.length, Math.floor(mealsPerPerson));
  const minus = mealLine ? scale(mealLine.unitPrice, replaced * people) : ZERO;
  const lines: DetailLine[] = items.map((m, i) => ({
    kind: 'item', basket: 'meal', id: m.sampleId ?? `must-${i + 1}`, nameKo: m.name, nameEn: m.name,
    units: people, unitPrice: { min: m.price, max: m.price }, childPrice: null, total: { min: m.price * people, max: m.price * people },
  }));
  const added = lines.reduce((sum, l) => add(sum, l.total), ZERO);
  // 범위의 양 끝을 각각 뺀다(최소엔 최소 단가, 최대엔 최대 단가). 음수가 되지 않게 0 에서 멈춘다
  const total = { min: Math.max(0, e.total.min - minus.min) + added.min, max: Math.max(0, e.total.max - minus.max) + added.max };
  const warnings = [...run.warnings, { category: 'food' as const, code: 'mustEat' as const, names: items.map((m) => m.name), n: replaced }];
  const custom = items.filter((m) => !m.sampleId).map((m) => m.name);
  if (custom.length) warnings.push({ category: 'food', code: 'customPrice', names: custom, n: custom.length });
  return {
    warnings,
    estimate: { ...e, total, lines: [...e.lines, ...lines], perPersonPerDay: scale(total, 1 / Math.max(1, people * weights.length)) },
  };
}

/**
 * 외식(식사·간식·주류). 자세히 설정의 하루 끼니 수·하루 잔 수를 반영하고,
 * 마실 술을 골랐으면 주류 가격 분포 대신 고른 술 1잔 가격의 최저~최고 × 하루 잔 수 × 성인 × 일자 비중으로 계산한다.
 */
function foodWithDrinks(classified: Classified[], input: TripInput, dates: string[], weights: number[]): { estimate: CategoryEstimate; warnings: Warning[] } {
  const picks = (input.drinkPicks ?? []).filter((d) => d.price >= 0 && d.name.trim());
  const usePicks = Boolean(input.drinks) && picks.length > 0;
  const opts = (b: Basket): BasketOpts =>
    b === 'meal' && input.mealsPerDay ? { perUse: input.mealsPerDay } : b === 'drink' && input.drinksPerDay !== undefined ? { perUse: input.drinksPerDay } : {};
  const run = estimateCategory('food', classified, usePicks ? { ...input, drinks: false } : input, dates, weights, { opts });
  if (!usePicks || !run.estimate.total) return run;
  const perDay = input.drinksPerDay ?? MODEL.usage.drink[input.style];
  const unit = { min: Math.min(...picks.map((d) => d.price)), max: Math.max(...picks.map((d) => d.price)) };
  const lines: DetailLine[] = dates.map((date, i) => {
    const w = weights[i] as number;
    return { kind: 'day', basket: 'drink', day: i + 1, date, units: perDay * w, weight: w, unitPrice: unit, total: scale(unit, perDay * w * input.adults) };
  });
  const added = lines.reduce((sum, l) => add(sum, l.total), ZERO);
  const total = add(run.estimate.total, added);
  const people = input.adults + input.children;
  const warnings: Warning[] = [...run.warnings, { category: 'food', code: 'drinkPicks', names: picks.map((d) => d.name), n: perDay }];
  const custom = picks.filter((d) => !d.sampleId).map((d) => d.name);
  if (custom.length) warnings.push({ category: 'food', code: 'customPrice', names: custom, n: custom.length });
  return {
    warnings,
    estimate: { ...run.estimate, total, lines: [...run.estimate.lines, ...lines], perPersonPerDay: scale(total, 1 / Math.max(1, people * dates.length)) },
  };
}
