import { useMemo, useState } from 'react';
import { convertAmount, costComparison, formatCompareMoney } from '../core/compare';
import { guidePath } from '../core/guide';
import { STATIC_RATES } from '../core/rates/static';
import { cities, dataDate, extras, samples } from '../data';
import { LOCALES, fmt, useI18n } from '../i18n';
import { InternalLink, type Go } from './App';
import { displayCurrency, guideRefDate } from './guide-utils';
import { cityName, countryName, matchCity } from './TripForm';

/** 도시별 하루 여행 경비 비교(/compare): 같은 조건의 1인 1일 현지 체류비를 낮은 순으로 */
export function CostComparePage({ go }: { go: Go }) {
  const { t, lang } = useI18n();
  const m = t.compare;
  const [query, setQuery] = useState('');
  const rows = useMemo(() => costComparison(cities, samples, extras, guideRefDate), []);
  const display = displayCurrency(lang);
  const rates = STATIC_RATES.rates;
  const money = (n: number, cur: string) => formatCompareMoney(n, cur, LOCALES[lang]);
  const mid = (r: { min: number; max: number }) => (r.min + r.max) / 2;
  const sorted = useMemo(
    () =>
      [...rows]
        .map((r) => ({ r, usd: convertAmount(mid(r.perDay), r.city.currency, 'USD', rates) ?? 0 }))
        .sort((a, b) => a.usd - b.usd)
        .map((x, i) => ({ ...x, rank: i + 1 })),
    [rows, rates],
  );
  const shown = sorted.filter(({ r }) => matchCity(r.city, query));
  return (
    <article className="card prose" data-testid="compare">
      <h1 tabIndex={-1}>{m.title}</h1>
      <p className="lead">{fmt(m.lead, { n: rows.length, date: dataDate, rate: STATIC_RATES.asOf })}</p>
      <div className="field guide-search">
        <label htmlFor="compare-search">{m.filterLabel}</label>
        <input id="compare-search" type="search" value={query} placeholder={m.filterPlaceholder} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {shown.length === 0 ? (
        <p className="muted" role="status">
          {m.empty}
        </p>
      ) : (
        <div className="table-wrap" tabIndex={0}>
          <table className="compare-table">
            <thead>
              <tr>
                <th>{m.colRank}</th>
                <th>{m.colCity}</th>
                <th>{m.colDay}</th>
                <th>{m.colMeal}</th>
                <th>{m.colRide}</th>
              </tr>
            </thead>
            <tbody>
              {shown.map(({ r, rank }) => {
                const cur = r.city.currency;
                const conv = convertAmount(mid(r.perDay), cur, display, rates);
                return (
                  <tr key={r.city.id} data-compare-city={r.city.id}>
                    <td>{rank}</td>
                    <td>
                      <InternalLink to={`${guidePath(r.city.id)}?lang=${lang}`} go={go}>
                        {cityName(r.city, lang)}
                      </InternalLink>
                      <small className="muted"> {countryName(r.city, lang)}</small>
                    </td>
                    <td>
                      {conv !== null && cur !== display ? <strong>≈ {money(conv, display)}</strong> : <strong>{money(mid(r.perDay), cur)}</strong>}
                      {cur !== display && <small className="muted"> ({money(r.perDay.min, cur)}~{money(r.perDay.max, cur)})</small>}
                    </td>
                    <td>{r.meal !== null ? money(r.meal, cur) : '–'}</td>
                    <td>{r.ride !== null ? money(r.ride, cur) : '–'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <p className="hint">
        {m.note}{' '}
        <InternalLink to={`/how-it-works?lang=${lang}`} go={go}>
          {t.method.navLabel}
        </InternalLink>
      </p>
    </article>
  );
}
