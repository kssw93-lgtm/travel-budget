import { useMemo } from 'react';
import { cityGuide, guidePath, GUIDE_EXAMPLE } from '../core/guide';
import type { City, PriceSample } from '../core/types';
import { cities, dataDate, dataMeta, extras, foods, memos, samples } from '../data';
import { DEFAULT_CURRENCY, fmt, localName, useI18n, type Lang } from '../i18n';
import { InternalLink, type Go } from './App';
import { CityMemos } from './CityMemos';
import { ExternalLink } from './ExternalLink';
import { FoodSection } from './FoodSection';
import { convertRange, RangeText } from './money';
import { PriceGuide } from './PriceGuide';
import { cityName, countryName } from './TripForm';
import { useRates, type RatesState } from './useRates';

/** 가이드의 예시 일정 기준일: 가격 자료 기준일(정적 HTML 과 화면이 같은 값을 쓰도록 고정) */
export const guideRefDate = dataMeta.date || dataDate;

function displayCurrency(lang: Lang): string {
  try {
    return localStorage.getItem('currency') ?? DEFAULT_CURRENCY[lang];
  } catch {
    return DEFAULT_CURRENCY[lang];
  }
}

function Converted({ range, from, to, rates }: { range: { min: number; max: number } | null; from: string; to: string; rates: RatesState }) {
  if (!range || from === to || rates.status !== 'ok') return null;
  const converted = convertRange(range, from, to, rates.data);
  if (!converted) return null;
  return (
    <span className="muted">
      {' '}
      (≈ <RangeText range={converted} currency={to} />)
    </span>
  );
}

/** 도시별 가이드 목록(/guides) */
export function GuideIndex({ go }: { go: Go }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const rates = useRates();
  const display = displayCurrency(lang);
  const rows = useMemo(() => cities.map((c) => cityGuide(c, samples, guideRefDate, extras)), []);
  return (
    <article className="card prose" data-testid="guides">
      <h1 tabIndex={-1}>{g.indexTitle}</h1>
      <p className="lead">{g.indexLead}</p>
      <ul className="guide-index">
        {rows.map((r) => {
          const std = r.styles.find((s) => s.style === 'standard');
          return (
            <li key={r.city.id} data-city={r.city.id}>
              <InternalLink to={`${guidePath(r.city.id)}?lang=${lang}`} go={go}>
                {fmt(g.title, { city: cityName(r.city, lang) })}
              </InternalLink>
              <span className="muted">
                {' '}
                · {countryName(r.city, lang)} ·{' '}
                {std?.perDay ? (
                  <>
                    {g.perDay} <RangeText range={std.perDay} currency={r.city.currency} />
                    <Converted range={std.perDay} from={r.city.currency} to={display} rates={rates} />
                  </>
                ) : (
                  g.notComputable
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function AttractionTable({ guide, display, rates }: { guide: ReturnType<typeof cityGuide>; display: string; rates: RatesState }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const hasChild = guide.attractions.some((o) => o.child);
  const price = (s: PriceSample, from = false, variable = false) =>
    s.max === 0 ? (
      g.free
    ) : (
      <>
        <RangeText range={{ min: s.min, max: s.max }} currency={s.currency} />
        {from && ` ${g.fromPrice}`}
        <Converted range={{ min: s.min, max: s.max }} from={s.currency} to={display} rates={rates} />
        {variable && (
          <>
            {' '}
            <small className="muted">{g.variable}</small>
          </>
        )}
      </>
    );
  return (
    <section className="card" aria-labelledby="guide-attr-title" data-testid="guide-attractions">
      <h2 id="guide-attr-title">{fmt(g.attractionsTitle, { city: cityName(guide.city, lang) })}</h2>
      <p className="hint">{g.attractionsLead}</p>
      {guide.attractions.length === 0 ? (
        <p className="muted">{g.attractionsEmpty}</p>
      ) : (
        <table className="guide-table stack">
          <thead>
            <tr>
              <th scope="col">{g.place}</th>
              <th scope="col">{g.adult}</th>
              {hasChild && <th scope="col">{g.child}</th>}
              <th scope="col">{g.source}</th>
            </tr>
          </thead>
          <tbody>
            {guide.attractions.map((o) => {
              const s = o.adult.sample;
              return (
                <tr key={o.id} data-attraction={o.id}>
                  <th scope="row">{localName(lang, s.nameKo, s.nameEn, s.nameJa)}</th>
                  <td data-label={g.adult}>{price(s, o.adult.fromPrice, o.variable)}</td>
                  {hasChild && <td data-label={g.child}>{o.child ? price(o.child.sample, o.child.fromPrice) : <span className="muted">—</span>}</td>}
                  <td data-label={g.source}>
                    <ExternalLink href={s.sourceUrl}>{s.sourceName}</ExternalLink> <small className="muted">{s.checkedAt}</small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

/** 도시 가이드(/guide/:city) — 계산기와 같은 엔진·같은 표본으로 만든 도시별 물가·예시 경비 */
export function CityGuidePage({ city, go }: { city: City; go: Go }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const rates = useRates();
  const display = displayCurrency(lang);
  const guide = useMemo(() => cityGuide(city, samples, guideRefDate, extras), [city]);
  const name = cityName(city, lang);
  const calc = `/?lang=${lang}&city=${city.id}&nights=${GUIDE_EXAMPLE.nights}&adults=2&children=0&style=standard`;
  return (
    <>
      <section className="hero" data-testid="city-guide" data-city={city.id}>
        <h1 tabIndex={-1}>{fmt(g.title, { city: name })}</h1>
        <p>{fmt(g.lead, { city: name, date: guideRefDate })}</p>
        <p>
          <InternalLink className="button" to={calc} go={go}>
            {g.cta}
          </InternalLink>
        </p>
      </section>

      <section className="card" aria-labelledby="guide-example-title" data-testid="guide-example">
        <h2 id="guide-example-title">{g.exampleTitle}</h2>
        <p className="hint">{g.exampleLead}</p>
        <table className="guide-table stack">
          <thead>
            <tr>
              <th scope="col">{g.style}</th>
              <th scope="col">{g.total} ({city.currency})</th>
              <th scope="col">{g.perDay} ({city.currency})</th>
            </tr>
          </thead>
          <tbody>
            {guide.styles.map((s) => (
              <tr key={s.style} data-style={s.style}>
                <th scope="row">{t.styles[s.style].name}</th>
                <td data-label={`${g.total} (${city.currency})`}>
                  {s.total ? (
                    <>
                      <RangeText range={s.total} currency={city.currency} />
                      <Converted range={s.total} from={city.currency} to={display} rates={rates} />
                    </>
                  ) : (
                    <span className="muted">{g.notComputable}</span>
                  )}
                </td>
                <td data-label={`${g.perDay} (${city.currency})`}>{s.perDay ? <RangeText range={s.perDay} currency={city.currency} /> : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 id="guide-breakdown-title">{g.breakdownTitle}</h3>
        <table className="guide-table stack" aria-labelledby="guide-breakdown-title" data-testid="guide-breakdown">
          <thead>
            <tr>
              <th scope="col">{g.item}</th>
              {guide.styles.map((s) => (
                <th scope="col" key={s.style}>
                  {t.styles[s.style].name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(guide.styles[0]?.breakdown ?? []).map((b, i) => (
              <tr key={b.key} data-item={b.key}>
                <th scope="row">{t.categories[b.key]}</th>
                {guide.styles.map((s) => {
                  const r = s.breakdown[i]?.total ?? null;
                  return (
                    <td key={s.style} data-label={t.styles[s.style].name}>
                      {r ? <RangeText range={r} currency={city.currency} /> : <span className="muted">—</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="hint">{g.breakdownNote}</p>
      </section>

      <PriceGuide city={city} samples={samples} display={display} rates={rates} />
      <AttractionTable guide={guide} display={display} rates={rates} />
      <FoodSection city={city} foods={foods} samples={samples} display={display} rates={rates} />
      <CityMemos city={city} memos={memos} />

      <nav className="card" aria-labelledby="guide-others-title" data-testid="guide-others">
        <h2 id="guide-others-title">{g.others}</h2>
        <ul className="inline-list">
          {cities
            .filter((c) => c.id !== city.id)
            .map((c) => (
              <li key={c.id}>
                <InternalLink to={`${guidePath(c.id)}?lang=${lang}`} go={go}>
                  {cityName(c, lang)}
                </InternalLink>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
