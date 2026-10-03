import { extraOptions, type ExtraOption } from '../core/extras';
import { MODEL } from '../core/model-config';
import type { City, ExtraSample, Range } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import type { FieldError, FormState } from './form';
import { convertRange, RangeText } from './money';
import type { RatesState } from './useRates';

interface Props {
  city: City;
  extras: ExtraSample[];
  form: FormState;
  onChange: (p: Partial<FormState>) => void;
  display: string;
  rates: RatesState;
  nights: number;
  errors: Partial<Record<FieldError, true>>;
}

/**
 * 공항↔시내 이동·렌터카 선택. 도시에 확인된 공식 요금이 하나도 없으면 카드 자체를 그리지 않는다.
 * 하나씩만 고를 수 있고(라디오), 고른 상품만 경비에 더한다.
 */
export function ExtrasPicker({ city, extras, form, onChange, display, rates, nights, errors }: Props) {
  const { t, lang } = useI18n();
  const x = t.extras;
  const airport = extraOptions(city.id, extras, 'airport');
  const rental = extraOptions(city.id, extras, 'rental');
  if (airport.length === 0 && rental.length === 0) return null;
  const ratesData = rates.status === 'ok' ? rates.data : null;

  const price = (r: Range, currency: string) => (
    <>
      <RangeText range={r} currency={currency} />
      {display !== currency && ratesData && (
        <span className="muted">
          {' '}
          (≈ <RangeText range={convertRange(r, currency, display, ratesData)} currency={display} />)
        </span>
      )}
    </>
  );
  const name = (o: ExtraOption) => (lang === 'ko' ? o.adult.nameKo : o.adult.nameEn);
  const chosen = [airport.find((o) => o.id === form.airport), rental.find((o) => o.id === form.rental)].filter(Boolean) as ExtraOption[];
  const status = chosen.length ? chosen.map(name).join(' · ') : x.summaryNone;

  const option = (o: ExtraOption, group: 'airport' | 'rental') => {
    const s = o.adult;
    const checked = (group === 'airport' ? form.airport : form.rental) === o.id;
    const range = { min: s.min, max: s.max };
    return (
      <li key={o.id} className={checked ? 'attr-option selected' : 'attr-option'} data-extra={o.id}>
        <label>
          <input type="radio" name={`extra-${group}`} checked={checked} onChange={() => onChange(group === 'airport' ? { airport: o.id } : { rental: o.id })} />
          <span className="attr-name">{name(o)}</span>
        </label>
        <div className="attr-prices">
          {group === 'airport' ? (
            <>
              <span>
                {x.adult} {price(range, s.currency)}
                {o.roundTrip && <span className="badge">{x.roundTripProduct}</span>}
              </span>
              {o.child ? (
                <span>
                  {x.child} {price({ min: o.child.min, max: o.child.max }, s.currency)}
                </span>
              ) : (
                <span className="muted">{x.noChild}</span>
              )}
            </>
          ) : (
            <span>
              {x.perDay} {price(range, s.currency)}
            </span>
          )}
        </div>
        <div className="attr-meta muted">
          {o.variable && <span className="badge">{x.variable}</span>} <ExternalLink href={s.sourceUrl}>{s.sourceName}</ExternalLink> · {fmt(x.checked, { date: s.checkedAt })}
        </div>
      </li>
    );
  };

  return (
    <section className="card attractions extras" aria-labelledby="extras-title" data-testid="extras">
      <details open>
        <summary>
          <span id="extras-title" className="summary-title">{x.title}</span>{' '}
          <span className="muted" data-testid="extras-status">{status}</span>
        </summary>
        <p className="hint">{x.lead}</p>
        {airport.length > 0 && (
          <fieldset className="extra-group" data-testid="extras-airport">
            <legend>{x.airport}</legend>
            <ul className="attr-list">
              <li className={form.airport ? 'attr-option' : 'attr-option selected'}>
                <label>
                  <input type="radio" name="extra-airport" checked={!form.airport} onChange={() => onChange({ airport: '' })} />
                  <span className="attr-name">{x.airportNone}</span>
                </label>
              </li>
              {airport.map((o) => option(o, 'airport'))}
            </ul>
            {form.airport && !airport.find((o) => o.id === form.airport)?.roundTrip && (
              <div className="field inline">
                <label htmlFor="airport-trips">{x.trips}</label>
                <select id="airport-trips" value={form.airportTrips} onChange={(e) => onChange({ airportTrips: e.target.value as '1' | '2' })}>
                  <option value="2">{x.roundTrip}</option>
                  <option value="1">{x.oneWay}</option>
                </select>
              </div>
            )}
          </fieldset>
        )}
        {rental.length > 0 && (
          <fieldset className="extra-group" data-testid="extras-rental">
            <legend>{x.rental}</legend>
            <ul className="attr-list">
              <li className={form.rental ? 'attr-option' : 'attr-option selected'}>
                <label>
                  <input type="radio" name="extra-rental" checked={!form.rental} onChange={() => onChange({ rental: '' })} />
                  <span className="attr-name">{x.rentalNone}</span>
                </label>
              </li>
              {rental.map((o) => option(o, 'rental'))}
            </ul>
            {form.rental && (
              <div className="field inline">
                <label htmlFor="rental-days">{x.rentalDays}</label>
                <input
                  id="rental-days"
                  inputMode="numeric"
                  value={form.rentalDays}
                  placeholder={String(nights)}
                  onChange={(e) => onChange({ rentalDays: e.target.value })}
                  aria-invalid={errors.rentalDays ? true : undefined}
                  aria-describedby="rental-days-hint"
                />
                <small id="rental-days-hint" className="hint">
                  {errors.rentalDays ? fmt(t.form.errors.rentalDays, { max: MODEL.limits.nightsMax + 1 }) : fmt(x.rentalDaysHint, { n: nights })}
                </small>
              </div>
            )}
            <p className="hint">{x.rentalNote}</p>
          </fieldset>
        )}
      </details>
    </section>
  );
}
