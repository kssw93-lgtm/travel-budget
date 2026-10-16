import { useMemo, useState } from 'react';
import { cityGuide, guidePath, type CityGuide as CityGuideData } from '../core/guide';
import { formatMoney } from '../core/money';
import type { City, PriceSample } from '../core/types';
import { cities, dataDate, dataMeta, extras, foods, memos, samples } from '../data';
import { CITY_GUIDES } from '../data/city-guides';
import { CITY_SEASONS } from '../data/city-seasons';
import { COUNTRY_GUIDES } from '../data/country-guides';
import { DEFAULT_CURRENCY, fmt, localName, useI18n, type Lang } from '../i18n';
import { InternalLink, type Go } from './App';
import { CityMemos } from './CityMemos';
import { ExternalLink } from './ExternalLink';
import { FoodSection } from './FoodSection';
import { convertRange, RangeText } from './money';
import { cityGroups, cityName, countryName, matchCity } from './TripForm';
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

/** 도시별 가이드 목록(/guides): 나라별로 묶고, 도시·나라 이름으로 검색한다 */
export function GuideIndex({ go }: { go: Go }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const [query, setQuery] = useState('');
  const groups = cityGroups(
    cities.filter((c) => matchCity(c, query)),
    lang,
  );
  return (
    <article className="card prose" data-testid="guides">
      <h1 tabIndex={-1}>{g.indexTitle}</h1>
      <p className="lead">{g.indexLead}</p>
      <div className="field guide-search">
        <label htmlFor="guide-search">{g.searchLabel}</label>
        <input id="guide-search" type="search" value={query} placeholder={g.searchPlaceholder} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {groups.length === 0 && (
        <p className="muted" role="status">
          {g.searchEmpty}
        </p>
      )}
      {groups.map((grp) => (
        <section key={grp.country} className="guide-group" data-country={grp.items[0]!.countryEn}>
          <h2>{grp.country}</h2>
          <ul className="guide-index">
            {grp.items.map((c) => (
              <li key={c.id} data-city={c.id}>
                <InternalLink to={`${guidePath(c.id)}?lang=${lang}`} go={go}>
                  {fmt(g.title, { city: cityName(c, lang) })}
                </InternalLink>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}

/** 나라별 알아둘 것·조심할 것(데이터가 있는 나라만) */
function CountryNotes({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const note = COUNTRY_GUIDES[city.countryEn];
  if (!note) return null;
  const i = lang === 'ko' ? 0 : lang === 'en' ? 1 : 2;
  const country = countryName(city, lang);
  return (
    <section className="card prose country-notes" aria-labelledby="guide-country-title" data-testid="guide-country">
      <h2 id="guide-country-title">{fmt(g.countryTipsTitle, { country })}</h2>
      <ul>
        {note.tips.map((x) => (
          <li key={x[1]}>
            {x[i]}
            {x[3] && (
              <>
                {' '}
                <small>
                  <ExternalLink href={x[3]}>{g.sourceLink}</ExternalLink>
                </small>
              </>
            )}
          </li>
        ))}
      </ul>
      <h3>{fmt(g.cautionsTitle, { country })}</h3>
      <ul className="cautions">
        {note.cautions.map((x) => (
          <li key={x[1]}>
            {x[i]}
            {x[3] && (
              <>
                {' '}
                <small>
                  <ExternalLink href={x[3]}>{g.sourceLink}</ExternalLink>
                </small>
              </>
            )}
          </li>
        ))}
      </ul>
      <p className="hint">{g.countryNotesHint}</p>
    </section>
  );
}

/** 그 도시만의 볼거리·현지 팁(데이터가 있는 도시만) */
function CityNotes({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const note = CITY_GUIDES[city.id];
  if (!note) return null;
  const name = cityName(city, lang);
  const season = CITY_SEASONS[city.id];
  return (
    <section className="card prose city-notes" aria-labelledby="guide-notes-title" data-testid="guide-notes">
      <h2 id="guide-notes-title">{fmt(g.highlightsTitle, { city: name })}</h2>
      <ul className="highlights">
        {note.highlights.map((h) => (
          <li key={h.name.en}>
            <strong>{h.name[lang]}</strong> {h.text[lang]}
          </li>
        ))}
      </ul>
      {note.tips.length > 0 && (
        <>
          <h3>{fmt(g.tipsTitle, { city: name })}</h3>
          <ul>
            {note.tips.map((tip) => (
              <li key={tip.en}>{tip[lang]}</li>
            ))}
          </ul>
        </>
      )}
      {season && (
        <>
          <h3>{fmt(g.seasonTitle, { city: name })}</h3>
          <p data-testid="guide-season">
            {season[lang === 'ko' ? 0 : lang === 'en' ? 1 : 2]} <small className="muted">{g.seasonHint}</small>
          </p>
        </>
      )}
      {note.source && (
        <p className="hint">
          {g.notesSource} <ExternalLink href={note.source.url}>{note.source.name}</ExternalLink>
        </p>
      )}
    </section>
  );
}

/** 이용권 손익분기(하루 몇 번 타야 이용권이 이득인지). 1회 요금 표본이 부족하거나 이용권이 없으면 그리지 않는다 */
function PassTips({ guide }: { guide: CityGuideData }) {
  const { t, lang, locale } = useI18n();
  const g = t.cityGuide;
  const ride = guide.prices.find((p) => p.basket === 'ride');
  if (!ride || guide.passTips.length === 0) return null;
  const cur = guide.city.currency;
  const money = (n: number) => formatMoney(n, cur, locale);
  return (
    <section className="card" aria-labelledby="guide-pass-title" data-testid="guide-pass-tips">
      <h2 id="guide-pass-title">{g.passTipTitle}</h2>
      <p className="hint">{fmt(g.passTipLead, { ride: money(ride.median) })}</p>
      <ul>
        {guide.passTips.map((p) => (
          <li key={p.id} data-pass={p.id}>
            {fmt(p.days > 1 ? g.passTipRowDays : g.passTipRow, {
              pass: localName(lang, p.nameKo, p.nameEn, p.nameJa),
              price: money(p.price),
              days: p.days,
              n: p.ridesPerDay,
            })}
          </li>
        ))}
      </ul>
    </section>
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
  const calc = `/?lang=${lang}&city=${city.id}`;
  return (
    <>
      <section className="hero" data-testid="city-guide" data-city={city.id}>
        <nav className="crumbs" aria-label={g.indexTitle}>
          <InternalLink to={`/guides?lang=${lang}`} go={go}>
            {g.indexTitle}
          </InternalLink>{' '}
          › <span>{countryName(city, lang)}</span>
        </nav>
        <h1 tabIndex={-1}>{fmt(g.title, { city: name })}</h1>
        <p>{fmt(g.lead, { city: name, date: dataDate })}</p>
        <p>
          <InternalLink className="button" to={calc} go={go}>
            {fmt(g.cta, { city: name })}
          </InternalLink>
        </p>
      </section>

      <CityNotes city={city} />
      <CountryNotes city={city} />
      <PassTips guide={guide} />
      <AttractionTable guide={guide} display={display} rates={rates} />
      <FoodSection city={city} foods={foods} />
      <CityMemos city={city} memos={memos} />
      <p className="guide-cta">
        <InternalLink className="button" to={calc} go={go}>
          {fmt(g.cta, { city: name })}
        </InternalLink>
      </p>
    </>
  );
}
