import { isIsoDate } from '../core/dates';
import { MODEL } from '../core/model-config';
import type { TravelStyle, TripInput } from '../core/types';

export interface FormState {
  cityId: string;
  visitDate: string;
  nights: string;
  adults: string;
  children: string;
  style: TravelStyle;
  currency: string;
  flight: string;
  lodging: string;
  directCurrency: string;
}

export type FieldError = 'date' | 'nights' | 'adults' | 'children' | 'flight' | 'lodging';

export interface ParsedForm {
  trip: TripInput | null;
  /** 직접 입력한 항공권·숙박 합계(입력 통화). 비워두면 0 */
  direct: { flight: number; lodging: number };
  errors: Partial<Record<FieldError, true>>;
}

const toInt = (v: string): number => (/^\d+$/.test(v.trim()) ? Number(v.trim()) : Number.NaN);

function toAmount(v: string): number {
  const s = v.trim().replace(/,/g, '');
  if (s === '') return 0;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : Number.NaN;
}

export function parseForm(f: FormState): ParsedForm {
  const L = MODEL.limits;
  const errors: ParsedForm['errors'] = {};
  const nights = toInt(f.nights);
  const adults = toInt(f.adults);
  const children = toInt(f.children);
  const flight = toAmount(f.flight);
  const lodging = toAmount(f.lodging);

  if (!isIsoDate(f.visitDate)) errors.date = true;
  if (!(nights >= L.nightsMin && nights <= L.nightsMax)) errors.nights = true;
  if (!(adults >= L.adultsMin && adults <= L.adultsMax)) errors.adults = true;
  if (!(children >= 0 && children <= L.childrenMax)) errors.children = true;
  if (Number.isNaN(flight)) errors.flight = true;
  if (Number.isNaN(lodging)) errors.lodging = true;

  const tripValid = !errors.date && !errors.nights && !errors.adults && !errors.children;
  return {
    trip: tripValid ? { cityId: f.cityId, visitDate: f.visitDate, nights, adults, children, style: f.style } : null,
    direct: { flight: errors.flight ? 0 : flight, lodging: errors.lodging ? 0 : lodging },
    errors,
  };
}
