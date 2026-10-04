import { MODEL, STYLES } from '../core/model-config';
import type { City, RatesPayload } from '../core/types';
import { useState } from 'react';
import { COUNTRY_JA, CITY_JA } from '../i18n/places';
import { fmt, localName, useI18n, type Lang } from '../i18n';
import { currencyLabel, currencyOptions } from './currencies';
import type { FieldError, FormState } from './form';

interface Props {
  form: FormState;
  onChange: (patch: Partial<FormState>) => void;
  errors: Partial<Record<FieldError, true>>;
  cities: City[];
  rates: RatesPayload | null;
}

export function cityName(c: City, lang: Lang): string {
  if (lang === 'ja') return CITY_JA[c.id] ?? c.nameEn;
  return localName(lang, c.nameKo, c.nameEn);
}

/** 도시의 나라 이름(화면 언어) */
export function countryName(c: City, lang: Lang): string {
  if (lang === 'ja') return COUNTRY_JA[c.countryEn] ?? c.countryEn;
  return localName(lang, c.country, c.countryEn);
}

const norm = (v: string) => v.toLowerCase().normalize('NFKC').replace(/[\s\-·.,()]/g, '');

/** 도시·나라 이름(한/영)과 id 로 찾는다. 공백·하이픈·대소문자는 무시한다 */
export function matchCity(c: City, query: string): boolean {
  const q = norm(query);
  if (!q) return true;
  return [c.nameKo, c.nameEn, c.country, c.countryEn, c.id, CITY_JA[c.id] ?? '', COUNTRY_JA[c.countryEn] ?? ''].some((v) => norm(v).includes(q));
}

/** 나라별로 묶는다(나라·도시 이름순, 현재 언어 기준). 사용자 위치와 무관하게 같은 규칙 */
export function cityGroups(list: City[], lang: Lang): Array<{ country: string; items: City[] }> {
  const locale = lang;
  const label = (c: City) => countryName(c, lang);
  const groups = new Map<string, City[]>();
  for (const c of list) groups.set(label(c), [...(groups.get(label(c)) ?? []), c]);
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b, locale))
    .map(([country, items]) => ({ country, items: items.sort((a, b) => cityName(a, lang).localeCompare(cityName(b, lang), locale)) }));
}

function CityOption({ c, lang }: { c: City; lang: Lang }) {
  return <option value={c.id}>{cityName(c, lang)}</option>;
}

export function TripForm({ form, onChange, errors, cities, rates }: Props) {
  const { t, lang, locale } = useI18n();
  const L = MODEL.limits;
  const [query, setQuery] = useState('');
  const matches = cities.filter((c) => matchCity(c, query));
  // 고른 도시는 검색어와 맞지 않아도 목록에 남긴다(선택값이 사라지지 않게)
  const shown = matches.some((c) => c.id === form.cityId) ? matches : [...cities.filter((c) => c.id === form.cityId), ...matches];
  const onSearch = (q: string) => {
    setQuery(q);
    const hits = cities.filter((c) => matchCity(c, q));
    // 검색 결과가 하나뿐이면 바로 고른다
    if (q.trim() && hits.length === 1 && hits[0]!.id !== form.cityId) onChange({ cityId: hits[0]!.id });
  };
  const currencies = currencyOptions(rates, [form.currency, form.directCurrency]);
  const errText: Record<FieldError, string> = {
    date: t.form.errors.date,
    nights: fmt(t.form.errors.nights, { min: L.nightsMin, max: L.nightsMax }),
    adults: fmt(t.form.errors.adults, { min: L.adultsMin, max: L.adultsMax }),
    children: fmt(t.form.errors.children, { max: L.childrenMax }),
    flight: t.form.errors.amount,
    lodging: t.form.errors.amount,
    rentalDays: fmt(t.form.errors.rentalDays, { max: L.nightsMax + 1 }),
    ridesPerDay: t.form.errors.ridesPerDay,
    transitDays: fmt(t.form.errors.transitDays, { max: L.nightsMax + 1 }),
    mustEat: t.form.errors.mustEat,
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
          <input
            id="city-search"
            type="search"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => {
              // 목록에 보이는 순서(나라·도시 이름순)의 첫 도시를 고른다
              const first = cityGroups(matches, lang)[0]?.items[0];
              if (e.key === 'Enter' && first) {
                e.preventDefault();
                onChange({ cityId: first.id });
              }
            }}
            placeholder={t.form.citySearchPlaceholder}
            aria-label={t.form.citySearch}
            aria-describedby="city-search-status"
            autoComplete="off"
          />
          <p className="hint" id="city-search-status" role="status" data-testid="city-search-status">
            {query.trim() ? (matches.length ? fmt(t.form.cityMatches, { n: matches.length }) : t.form.cityNoMatch) : ''}
          </p>
          <select id="city" value={form.cityId} onChange={(e) => onChange({ cityId: e.target.value })}>
            {cityGroups(shown, lang).map((g) => (
              <optgroup key={g.country} label={g.country}>
                {g.items.map((c) => (
                  <CityOption key={c.id} c={c} lang={lang} />
                ))}
              </optgroup>
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

      <div className="check-field">
        <label htmlFor="drinks">
          <input id="drinks" type="checkbox" checked={form.drinks} onChange={(e) => onChange({ drinks: e.target.checked })} />
          {t.form.drinks}
        </label>
        <p className="hint">{t.form.drinksHint}</p>
      </div>

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
