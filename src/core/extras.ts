import { isVariablePricing, productName } from './classify';
import { KEYWORDS, MODEL } from './model-config';
import type { ExtraEstimate, ExtraKind, ExtraSample, PriceSample, Range, TripInput } from './types';

/** 공항 이동·렌터카 목록의 한 줄: 성인(렌터카는 차량) 요금 표본과, 있으면 같은 상품의 아동 요금 표본 */
export interface ExtraOption {
  id: string;
  kind: ExtraKind;
  adult: ExtraSample;
  child: ExtraSample | null;
  /** 왕복 요금 상품(편도 2회가 아니라 1장) */
  roundTrip: boolean;
  variable: boolean;
}

const ADULT = /성인|어른|대인|adult/gi;
const ROUND_TRIP = /왕복|round[\s-]?trip|\breturn\b/i;
/** 렌터카는 1일(24시간) 요금만 쓴다. 3일·주간 요금은 하루 값으로 나눌 근거가 없으므로 쓰지 않는다 */
const PER_DAY = /1\s*일|24\s*시간|per\s*day|\bdaily\b|\b1\s*day\b|24\s*h/i;

const asSample = (s: ExtraSample): PriceSample => ({ ...s, category: 'transport' });
const text = (s: ExtraSample) => `${s.target} ${s.unit} ${s.subtype} ${s.nameKo} ${s.nameEn}`;
const isChild = (s: ExtraSample) => s.kind === 'airport' && KEYWORDS.child.test(text(s));

/** 같은 상품의 성인·아동 행을 짝짓는 키(출처 + 대상 표기를 뺀 상품명) */
function pairKey(s: ExtraSample): string {
  const source = (s.sourceUrl || s.sourceName).toLowerCase().replace(/^https?:\/\/(www\.)?/, '').replace(/[?#].*$/, '').replace(/\/+$/, '');
  const name = (s.nameEn || s.nameKo).replace(new RegExp(KEYWORDS.child.source, 'gi'), ' ').replace(ADULT, ' ');
  return `${source}|${productName(name)}`;
}

/** 계산에 쓸 수 없는 표본(모델 사용 아니오·D등급·보류·제한 대상·상한 문구·렌터카 비일일 요금) */
export function extraUsable(s: ExtraSample): boolean {
  if (s.modelUse === 'no' || s.grade === 'D' || s.status.includes('보류')) return false;
  if ((MODEL.excludedTargets as readonly string[]).includes(s.target)) return false;
  if (s.min === 0 && s.max > 0) return false;
  if (s.kind === 'rental' && !PER_DAY.test(`${s.unit} ${s.nameKo} ${s.nameEn}`)) return false;
  return true;
}

export function extraOptions(cityId: string, extras: ExtraSample[], kind: ExtraKind): ExtraOption[] {
  const rows = extras.filter((s) => s.cityId === cityId && s.kind === kind && extraUsable(s));
  const children = rows.filter(isChild);
  return rows
    .filter((s) => !isChild(s))
    .map((adult) => ({
      id: adult.id,
      kind,
      adult,
      child: children.find((c) => pairKey(c) === pairKey(adult)) ?? null,
      roundTrip: kind === 'airport' && ROUND_TRIP.test(`${adult.unit} ${adult.nameKo} ${adult.nameEn}`),
      variable: isVariablePricing(asSample(adult)),
    }));
}

const range = (s: ExtraSample): Range => ({ min: s.min, max: s.max });

/** 고른 공항 이동·렌터카의 여행 전체 비용. 고르지 않았거나 목록에 없는 ID 면 빈 배열 */
export function estimateExtras(input: TripInput, extras: ExtraSample[]): ExtraEstimate[] {
  const out: ExtraEstimate[] = [];
  const pick = (kind: ExtraKind, id: string | undefined) => (id ? extraOptions(input.cityId, extras, kind).find((o) => o.id === id) : undefined);
  const base = (o: ExtraOption) => ({
    kind: o.kind,
    id: o.id,
    nameKo: o.adult.nameKo,
    nameEn: o.adult.nameEn,
    roundTrip: o.roundTrip,
    unitPrice: range(o.adult),
    sourceName: o.adult.sourceName,
    sourceUrl: o.adult.sourceUrl,
    checkedAt: o.adult.checkedAt,
    variable: o.variable,
    contingency: null,
  });

  const airport = pick('airport', input.airportId);
  if (airport) {
    // 왕복 상품은 1장, 편도 상품은 고른 횟수(편도 1·왕복 2)만큼. 아동 요금이 없으면 성인 요금
    const units = airport.roundTrip ? 1 : (input.airportTrips ?? 2);
    const child = airport.child ? range(airport.child) : null;
    const c = child ?? range(airport.adult);
    const a = range(airport.adult);
    out.push({
      ...base(airport),
      units,
      childPrice: child,
      total: { min: (a.min * input.adults + c.min * input.children) * units, max: (a.max * input.adults + c.max * input.children) * units },
    });
  }

  const rental = pick('rental', input.rentalId);
  if (rental) {
    // 차량 1대 기준(인원과 무관). 대여 일수 기본값은 숙박 수(24시간 단위)
    const days = Math.max(1, input.rentalDays ?? input.nights);
    const a = range(rental.adult);
    out.push({ ...base(rental), units: days, childPrice: null, total: { min: a.min * days, max: a.max * days } });
  }
  return out;
}
