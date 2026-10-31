import { useMemo, useState } from 'react';
import { cityGuide, guidePath, type CityGuide as CityGuideData } from '../core/guide';
import { airportBoardingMapUrl, airportBoardingQueries, airportDirectionsUrl, airportOrigins, airportPlannerUrl } from '../core/airport-directions';
import { formatMoney } from '../core/money';
import type { City, PriceSample } from '../core/types';
import { cities, dataDate, extras, foods, memos, samples } from '../data';
import { CITY_GUIDES, type Localized } from '../data/city-guides';
import { CITY_SEASON_EVENTS } from '../data/city-season-events';
import { CITY_INTROS } from '../data/city-intros';
import { CITY_SEASONS } from '../data/city-seasons';
import { CITY_WHEN } from '../data/city-when';
import { COUNTRY_GUIDES } from '../data/country-guides';
import { fmt, localName, useI18n, type Lang } from '../i18n';
import { InternalLink, type Go } from './App';
import { CityMemos } from './CityMemos';
import { ExternalLink } from './ExternalLink';
import { FoodSection } from './FoodSection';
import { convertRange, RangeText } from './money';
import { displayCurrency, guideRefDate } from './guide-utils';
import { cityGroups, cityName, countryName, matchCity } from './TripForm';
import { useRates, type RatesState } from './useRates';

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
      <p className="guide-links">
        <InternalLink to={`/compare?lang=${lang}`} go={go}>
          {t.compare.title}
        </InternalLink>
      </p>
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

const L = (lang: Lang) => (lang === 'ko' ? 0 : lang === 'en' ? 1 : 2);

/** 추천 일정(일수)과 그에 맞춘 박 수. 소개 데이터가 없으면 null */
export function tripDays(cityId: string): { min: number; max: number; nights: number } | null {
  const intro = CITY_INTROS[cityId];
  if (!intro) return null;
  const [min, max] = intro.d;
  return { min, max, nights: Math.max(1, max - 1) };
}

/** 놓치지 말 볼거리 */
function Highlights({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const note = CITY_GUIDES[city.id];
  if (!note || note.highlights.length === 0) return null;
  return (
    <section id="sights" className="card prose city-notes" aria-labelledby="guide-notes-title" data-testid="guide-notes">
      <h2 id="guide-notes-title">{fmt(g.highlightsTitle, { city: cityName(city, lang) })}</h2>
      <ol className="highlights">
        {note.highlights.map((h) => (
          <li key={h.name.en}>
            <strong>{h.name[lang]}</strong> {h.text[lang]}
          </li>
        ))}
      </ol>
    </section>
  );
}

const AIRPORT_TIP_PATTERN = /airport|airports|공항|空港|aéroport|aeropuerto|flughafen|lufthavn|lentokenttä|luchthaven/i;

function isAirportTip(tip: Localized) {
  return AIRPORT_TIP_PATTERN.test(`${tip.ko} ${tip.en} ${tip.ja}`);
}

function airportTipIndex(cityId: string) {
  return CITY_GUIDES[cityId]?.tips.findIndex(isAirportTip) ?? -1;
}

/** 공항에서 시내·숙소로 가는 기존 도시 팁을 별도 구역으로 보여 준다. */
function AirportAccess({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const note = CITY_GUIDES[city.id];
  const index = airportTipIndex(city.id);
  if (!note || index < 0) return null;
  const area = CITY_INTROS[city.id]?.s[0]?.[1] ?? `${city.nameEn} city centre`;
  const areaLabel = CITY_INTROS[city.id]?.s[0]?.[lang === 'ko' ? 0 : lang === 'ja' ? 2 : 1] ?? area;
  const airportTip = note.tips[index]!;
  const origins = airportOrigins(city, airportTip.en);
  return (
    <section id="airport" className="card prose airport-access" aria-labelledby="guide-airport-title" data-testid="guide-airport">
      <h2 id="guide-airport-title">{t.cityGuide.airportAccessTitle}</h2>
      <p>{note.tips[index]![lang]}</p>
      <h3>{t.cityGuide.airportDirectionsTitle}</h3>
      <div className="airport-map-links">
        {origins.map((origin) => (
          <ExternalLink
            key={origin.query}
            className="airport-map-link"
            href={airportDirectionsUrl(origin.query, area, lang)}
          >
            {fmt(t.cityGuide.airportDirectionsLink, { airport: origin.label, area: areaLabel })}
          </ExternalLink>
        ))}
      </div>
      <p className="hint">{t.cityGuide.airportDirectionsNote}</p>
      <h3>{t.cityGuide.airportBoardingTitle}</h3>
      <div className="airport-map-links">
        {origins.flatMap((origin) => airportBoardingQueries(origin, airportTip.ko).map(({ mode, query }) => (
          <ExternalLink key={`${origin.query}-${mode}`} className="airport-map-link" href={airportBoardingMapUrl(query, lang)}>
            {fmt(t.cityGuide.airportMapLink, { mode: t.cityGuide.airportModes[mode] })}
          </ExternalLink>
        )))}
        {origins.map((origin) => (
          <span className="airport-map-group" key={`official-${origin.query}`}>
            {origin.officialRouteMapUrl && (
              <ExternalLink className="airport-map-link" href={origin.officialRouteMapUrl}>
                {t.cityGuide.airportLineMapLink}
              </ExternalLink>
            )}
            {origin.officialPlannerUrl && (
              <ExternalLink className="airport-map-link" href={airportPlannerUrl(origin.officialPlannerUrl, lang)}>
                {t.cityGuide.airportRouteLink}
              </ExternalLink>
            )}
          </span>
        ))}
      </div>
      <p className="hint">{t.cityGuide.airportAccessHint}</p>
    </section>
  );
}

/** 언제 가면 좋을까: 추천 시기와 이유(축제·계절 풍경), 날씨, 피하면 좋은 때 */
function WhenToGo({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const w = CITY_WHEN[city.id];
  const season = CITY_SEASONS[city.id];
  const event = CITY_SEASON_EVENTS[city.id];
  if (!w && !season && !event) return null;
  const i = L(lang);
  const marketPeriod = event?.period[i];
  const marketDetails = event && (
    <>
      <strong>{event.name[i]}</strong> · {event.place[i]} · {event.note[i]}{' '}
      <ExternalLink href={event.url}>{g.seasonOfficialSchedule}</ExternalLink>
    </>
  );
  const marketPattern = /christmas market/i;
  const eventIndex = w?.p.findIndex((p) => marketPattern.test(p.join(' '))) ?? -1;
  return (
    <section id="when" className="card prose when-to-go" aria-labelledby="guide-when-title" data-testid="guide-when">
      <h2 id="guide-when-title">{fmt(g.whenTitle, { city: cityName(city, lang) })}</h2>
      {w && (
        <dl className="areas">
          {w.p.map((p, n) => event && n === eventIndex && marketPeriod ? (
            <div key={p[1]} data-season-event={city.id}>
              <dt>{marketPeriod}</dt>
              <dd>{marketDetails}</dd>
            </div>
          ) : (
            <div key={p[1]}>
              <dt>{p[i]}</dt>
              <dd>{p[3 + i]}</dd>
            </div>
          ))}
          {event && eventIndex < 0 && marketPeriod && (
            <div data-season-event={city.id}>
              <dt>{marketPeriod}</dt>
              <dd>{marketDetails}</dd>
            </div>
          )}
        </dl>
      )}
      {season && (
        <p data-testid="guide-season">
          <strong>{g.whenWeather}</strong> {season[i]}
        </p>
      )}
      {w?.x && (
        <p>
          <strong>{g.whenAvoid}</strong> {w.x[i]}
        </p>
      )}
      <p className="hint">{g.seasonHint}</p>
    </section>
  );
}

/** 숙소 잡기 좋은 동네 */
function StayAreas({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const intro = CITY_INTROS[city.id];
  if (!intro || intro.s.length === 0) return null;
  const i = L(lang);
  return (
    <section id="stay" className="card prose stay-areas" aria-labelledby="guide-stay-title" data-testid="guide-stay">
      <h2 id="guide-stay-title">{fmt(g.stayTitle, { city: cityName(city, lang) })}</h2>
      <dl className="areas">
        {intro.s.map((a) => (
          <div key={a[1]}>
            <dt>{a[i]}</dt>
            <dd>{a[3 + i]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** 그 도시의 현지 팁 + 나라 전체의 알아둘 것·조심할 것 */
function TipsAndCautions({ city }: { city: City }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const note = CITY_GUIDES[city.id];
  const country = COUNTRY_GUIDES[city.countryEn];
  if (!note?.tips.length && !country) return null;
  const name = cityName(city, lang);
  const cname = countryName(city, lang);
  const i = L(lang);
  const airportIndex = airportTipIndex(city.id);
  const localTips = note?.tips.map((tip, index) => ({ tip, index })).filter(({ index }) => index !== airportIndex) ?? [];
  return (
    <section id="tips" className="card prose city-tips" aria-labelledby="guide-tips-title" data-testid="guide-tips">
      <h2 id="guide-tips-title">{fmt(g.tipsSectionTitle, { city: name })}</h2>
      {note && localTips.length > 0 && (
        <>
          <h3>{fmt(g.tipsTitle, { city: name })}</h3>
          <ul>
            {localTips.map(({ tip }) => (
              <li key={tip.en}>
                {tip[lang]}
              </li>
            ))}
          </ul>
        </>
      )}
      {country && (
        <div className="country-notes" data-testid="guide-country">
          <h3>{fmt(g.countryTipsTitle, { country: cname })}</h3>
          <ul>
            {country.tips.map((x) => (
              <li key={x[1]}>
                {x[i]}
              </li>
            ))}
          </ul>
          <h3>{fmt(g.cautionsTitle, { country: cname })}</h3>
          <ul className="cautions">
            {country.cautions.map((x) => (
              <li key={x[1]}>
                {x[i]}
              </li>
            ))}
          </ul>
          <p className="hint">{g.countryNotesHint}</p>
        </div>
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

/** 도시 가이드(/guide/:city) — 이런 여행지 → 볼거리 → 숙소 → 교통 → 먹거리 → 팁·주의 → 비용 순서 */
export function CityGuidePage({ city, go }: { city: City; go: Go }) {
  const { t, lang } = useI18n();
  const g = t.cityGuide;
  const rates = useRates();
  const display = displayCurrency(lang);
  const guide = useMemo(() => cityGuide(city, samples, guideRefDate, extras), [city]);
  const name = cityName(city, lang);
  const intro = CITY_INTROS[city.id];
  const days = tripDays(city.id);
  const calc = `/?lang=${lang}&city=${city.id}${days ? `&nights=${days.nights}` : ''}`;
  const ctaText = days ? fmt(g.ctaNights, { city: name, n: days.nights, d: days.nights + 1 }) : fmt(g.cta, { city: name });
  const hasTransport = !!guide.prices.find((p) => p.basket === 'ride') && guide.passTips.length > 0;
  const toc: Array<[string, string, boolean]> = [
    ['when', g.tocWhen, !!CITY_WHEN[city.id] || !!CITY_SEASONS[city.id] || !!CITY_SEASON_EVENTS[city.id]],
    ['sights', g.tocSights, !!CITY_GUIDES[city.id]?.highlights.length],
    ['stay', g.tocStay, !!intro?.s.length],
    ['airport', g.tocAirportAccess, airportTipIndex(city.id) >= 0],
    ['transport', g.tocTransport, hasTransport],
    ['food', g.tocFood, foods.some((f) => f.cityId === city.id)],
    ['tips', g.tocTips, true],
    ['costs', g.tocCosts, true],
  ];
  return (
    <>
      <section className="hero guide-hero" data-testid="city-guide" data-city={city.id}>
        <nav className="crumbs" aria-label={g.indexTitle}>
          <InternalLink to={`/guides?lang=${lang}`} go={go}>
            {g.indexTitle}
          </InternalLink>{' '}
          › <span>{countryName(city, lang)}</span>
        </nav>
        <h1 tabIndex={-1}>{fmt(g.title, { city: name })}</h1>
        {intro && (
          <p className="guide-intro" data-testid="guide-intro">
            {intro.o[L(lang)]}
          </p>
        )}
        {days && (
          <p className="guide-facts">
            <span className="chip">{days.min === days.max ? fmt(g.daysOne, { n: days.min }) : fmt(g.daysRange, { min: days.min, max: days.max })}</span>
          </p>
        )}
        <p>
          <InternalLink className="button" to={calc} go={go}>
            {ctaText}
          </InternalLink>
        </p>
        <nav className="guide-toc" aria-label={g.tocLabel} data-testid="guide-toc">
          {toc
            .filter(([, , on]) => on)
            .map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
        </nav>
      </section>

      <WhenToGo city={city} />
      <Highlights city={city} />
      <StayAreas city={city} />
      <AirportAccess city={city} />
      <div id="transport">
        <PassTips guide={guide} />
      </div>
      <div id="food">
        <FoodSection city={city} foods={foods} />
      </div>
      <TipsAndCautions city={city} />
      <div id="costs">
        <AttractionTable guide={guide} display={display} rates={rates} />
        <CityMemos city={city} memos={memos} />
      </div>
      <p className="guide-cta">
        <InternalLink className="button" to={calc} go={go}>
          {ctaText}
        </InternalLink>
      </p>
      <p className="hint">{fmt(g.lead, { city: name, date: dataDate })}</p>
    </>
  );
}
