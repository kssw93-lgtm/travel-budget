import { estimateTrip, summarizeCity } from '../core/estimate';
import { CATEGORIES, MODEL, STYLES } from '../core/model-config';
import type { Basket } from '../core/types';
import { cities, dataMeta, samples } from '../data';
import { fmt, useI18n } from '../i18n';
import { cityName } from './TripForm';

const styleList = (b: Basket) => STYLES.map((s) => MODEL.usage[b][s]).join('/');

export function Methodology() {
  const { t, lang } = useI18n();
  const m = t.method;
  const vars = {
    edge: MODEL.edgeDayFactor * 100,
    meals: MODEL.usage.meal.standard,
    snacks: styleList('snack'),
    rides: styleList('ride'),
    attractions: styleList('attraction'),
    souvenirs: styleList('souvenir'),
    contingency: MODEL.contingencyRate * 100,
    min: MODEL.minSamplesPerCategory,
    cap: MODEL.fillRateCap,
    total: MODEL.fillRateCap * CATEGORIES.length,
    rate: Math.round(MODEL.minFillRate * 100),
  };
  const list = (items: string[]) => (
    <ul>
      {items.map((s) => (
        <li key={s}>{fmt(s, vars)}</li>
      ))}
    </ul>
  );
  const rows = cities.map((c) => {
    const sum = summarizeCity(c, samples);
    const computable = estimateTrip({ cityId: c.id, visitDate: '2026-01-01', nights: 1, adults: 1, children: 0, style: 'standard' }, c, samples).computable;
    return { c, sum, computable };
  });
  const excluded = rows.flatMap((r) => r.sum.excluded);
  const sourcesByCity = cities.map((c) => {
    const seen = new Map<string, string>();
    for (const s of samples) if (s.cityId === c.id) seen.set(s.sourceUrl, s.sourceName);
    return { c, sources: [...seen.entries()] };
  });

  return (
    <article className="card prose">
      <h1>{m.title}</h1>
      <p>{m.lead}</p>

      <h2>{m.scopeTitle}</h2>
      {list(m.scope)}
      <h2>{m.formulaTitle}</h2>
      {list(m.formula)}
      <h2>{m.dataTitle}</h2>
      {list(m.data)}
      <h2>{m.dateTitle}</h2>
      {list(m.date)}
      <h2>{m.foodTitle}</h2>
      <p>{m.food}</p>
      <h2>{m.ratesTitle}</h2>
      {list(m.rates)}
      <h2>{m.limitTitle}</h2>
      {list(m.limit)}

      <h2>{m.statusTitle}</h2>
      <p>{fmt(m.statusLead, vars)}</p>
      <div className="table-wrap">
        <table className="status" data-testid="status-table">
          <thead>
            <tr>
              <th>{m.colCity}</th>
              {CATEGORIES.map((c) => (
                <th key={c}>{t.categories[c]}</th>
              ))}
              <th>{m.colFill}</th>
              <th>{m.colState}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ c, sum, computable }) => (
              <tr key={c.id} data-city={c.id}>
                <th scope="row">{cityName(c, lang)}</th>
                {CATEGORIES.map((k) => (
                  <td key={k} className={sum.counts[k] < MODEL.minSamplesPerCategory ? 'insufficient' : ''}>{sum.counts[k]}</td>
                ))}
                <td>{Math.round(sum.fillRate * 100)}%</td>
                <td>
                  {computable
                    ? m.ready
                    : `${m.hold}${sum.missing.length ? ` — ${fmt(m.holdWith, { list: sum.missing.map((k) => t.categories[k]).join(', ') })}` : ''}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>{m.excludedTitle}</h2>
      <p>{m.excludedLead}</p>
      <div className="table-wrap">
        <table className="excluded" data-testid="excluded-table">
          <thead>
            <tr>
              <th>{m.colId}</th>
              <th>{m.colItem}</th>
              <th>{m.colReason}</th>
            </tr>
          </thead>
          <tbody>
            {excluded.map(({ sample: s, reason }) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{lang === 'ko' ? s.nameKo : s.nameEn}</td>
                <td>{m.reasons[reason] ?? reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>{m.sourcesTitle}</h2>
      <p>{m.sourcesLead}</p>
      {sourcesByCity.map(({ c, sources }) => (
        <details key={c.id}>
          <summary>{cityName(c, lang)} ({sources.length})</summary>
          <ul>
            {sources.map(([url, name]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
              </li>
            ))}
          </ul>
        </details>
      ))}
      <p className="hint">{fmt(m.dataFile, { file: dataMeta.source, hash: dataMeta.sha256, n: dataMeta.sampleCount })}</p>
    </article>
  );
}
