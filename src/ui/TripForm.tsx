import { MODEL, STYLES } from '../core/model-config';
import type { City, RatesPayload } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { currencyLabel, currencyOptions } from './currencies';
import type { FieldError, FormState } from './form';

interface Props {
  form: FormState;
  onChange: (patch: Partial<FormState>) => void;
  errors: Partial<Record<FieldError, true>>;
  cities: City[];
  rates: RatesPayload | null;
}

export function cityName(c: City, lang: 'ko' | 'en'): string {
  return lang === 'ko' ? c.nameKo : c.nameEn;
}

export function TripForm({ form, onChange, errors, cities, rates }: Props) {
  const { t, lang, locale } = useI18n();
  const L = MODEL.limits;
  const currencies = currencyOptions(rates, [form.currency, form.directCurrency]);
  const errText: Record<FieldError, string> = {
    date: t.form.errors.date,
    nights: fmt(t.form.errors.nights, { min: L.nightsMin, max: L.nightsMax }),
    adults: fmt(t.form.errors.adults, { min: L.adultsMin, max: L.adultsMax }),
    children: fmt(t.form.errors.children, { max: L.childrenMax }),
    flight: t.form.errors.amount,
    lodging: t.form.errors.amount,
  };
  const field = (id: FieldError) =>
    errors[id] ? { 'aria-invalid': true, 'aria-describedby': `err-${id}` } : {};
  const err = (id: FieldError) =>
    errors[id] ? (
      <p className="field-error" id={`err-${id}`} role="alert">
        {errText[id]}
      </p>
    ) : null;
  const currencySelect = (id: string, value: string, key: 'currency' | 'directCurrency') => (
    <select id={id} value={value} onChange={(e) => onChange({ [key]: e.target.value })}>
      {currencies.map((c) => (
        <option key={c} value={c}>
          {currencyLabel(c, locale)}
        </option>
      ))}
    </select>
  );

  return (
    <form className="card form" onSubmit={(e) => e.preventDefault()} aria-labelledby="form-title">
      <h2 id="form-title">{t.form.title}</h2>

      <div className="grid">
        <div className="field wide">
          <label htmlFor="city">{t.form.city}</label>
          <select id="city" value={form.cityId} onChange={(e) => onChange({ cityId: e.target.value })}>
            {cities.map((c) => (
              <option key={c.id} value={c.id}>
                {cityName(c, lang)} ({lang === 'ko' ? c.country : c.countryEn})
              </option>
            ))}
          </select>
        </div>
        <div className="field span-3 m-6">
          <label htmlFor="date">{t.form.visitDate}</label>
          <input id="date" type="date" value={form.visitDate} onChange={(e) => onChange({ visitDate: e.target.value })} {...field('date')} />
          {err('date')}
        </div>
        <div className="field span-3 m-2">
          <label htmlFor="nights">{t.form.nights}</label>
          <input id="nights" type="number" inputMode="numeric" min={L.nightsMin} max={L.nightsMax} value={form.nights} onChange={(e) => onChange({ nights: e.target.value })} {...field('nights')} />
          {err('nights')}
        </div>
        <div className="field span-3 m-2">
          <label htmlFor="adults">{t.form.adults}</label>
          <input id="adults" type="number" inputMode="numeric" min={L.adultsMin} max={L.adultsMax} value={form.adults} onChange={(e) => onChange({ adults: e.target.value })} {...field('adults')} />
          {err('adults')}
        </div>
        <div className="field span-3 m-2">
          <label htmlFor="children">{t.form.children}</label>
          <input id="children" type="number" inputMode="numeric" min={0} max={L.childrenMax} value={form.children} onChange={(e) => onChange({ children: e.target.value })} {...field('children')} />
          {err('children')}
        </div>
      </div>

      <fieldset className="styles">
        <legend>{t.form.style}</legend>
        {STYLES.map((s) => (
          <label key={s} className={`style-option${form.style === s ? ' selected' : ''}`}>
            <input type="radio" name="style" value={s} checked={form.style === s} onChange={() => onChange({ style: s })} />
            <span className="style-name">{t.styles[s].name}</span>
            <span className="style-desc">{t.styles[s].desc}</span>
          </label>
        ))}
      </fieldset>

      <div className="field">
        <label htmlFor="currency">{t.form.currency}</label>
        {currencySelect('currency', form.currency, 'currency')}
        <p className="hint">{t.form.currencyHint}</p>
      </div>

      <details className="optional">
        <summary>{t.form.optional}</summary>
        <p className="hint">{t.form.optionalHint}</p>
        <div className="grid">
          <div className="field span-3">
            <label htmlFor="flight">{t.form.flight}</label>
            <input id="flight" type="text" inputMode="decimal" value={form.flight} onChange={(e) => onChange({ flight: e.target.value })} {...field('flight')} />
            {err('flight')}
          </div>
          <div className="field span-3">
            <label htmlFor="lodging">{t.form.lodging}</label>
            <input id="lodging" type="text" inputMode="decimal" value={form.lodging} onChange={(e) => onChange({ lodging: e.target.value })} {...field('lodging')} />
            {err('lodging')}
          </div>
          <div className="field wide">
            <label htmlFor="directCurrency">{t.form.directCurrency}</label>
            {currencySelect('directCurrency', form.directCurrency, 'directCurrency')}
          </div>
        </div>
      </details>
    </form>
  );
}
