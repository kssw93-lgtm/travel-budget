import { CATEGORIES, MODEL } from '../core/model-config';
import { isSupported } from '../core/money';
import type { Category, CategoryEstimate, City, Estimate, PriceSample, Range, TripInput, Warning } from '../core/types';
import { fmt, localName, useI18n, type Lang } from '../i18n';
import { AdSlot } from './AdSlot';
import { CategoryDetail } from './CategoryDetail';
import { convertRange, RangeText } from './money';
import type { RatesState } from './useRates';
import { cityName } from './TripForm';
import { ExternalLink } from './ExternalLink';

interface Props {
  estimate: Estimate;
  trip: TripInput;
  city: City;
  display: string;
  rates: RatesState;
  samples: PriceSample[];
  direct: { flight: number; lodging: number; currency: string };
}

const sumRange = (a: Range, b: Range): Range => ({ min: a.min + b.min, max: a.max + b.max });

/** 출처 이름이 같고 주소가 다르면 "Danabus 1, Danabus 2" 처럼 번호를 붙여 서로 다른 근거임을 보이게 한다 */
export function numberedSources(sources: { name: string; url: string }[]): { label: string; url: string }[] {
  const total = new Map<string, number>();
  sources.forEach((s) => total.set(s.name, (total.get(s.name) ?? 0) + 1));
  const seen = new Map<string, number>();
  return sources.map((s) => {
    const n = (seen.get(s.name) ?? 0) + 1;
    seen.set(s.name, n);
    return { url: s.url, label: (total.get(s.name) ?? 1) > 1 ? `${s.name} ${n}` : s.name };
  });
}

function AmountRows({ range, local, display, rates }: { range: Range | null; local: string; display: string; rates: RatesState }) {
  const { t } = useI18n();
  const r = rates.status === 'ok' ? rates.data : null;
  return (
    <dl className="amounts">
      <div>
        <dt>{t.result.local} ({local})</dt>
        <dd><RangeText range={range} currency={local} /></dd>
      </div>
      {display !== local && (
        <div>
          <dt>{t.result.selected} ({display})</dt>
          <dd><RangeText range={range && convertRange(range, local, display, r)} currency={display} /></dd>
        </div>
      )}
      <div>
        <dt>{t.result.usd}</dt>
        <dd><RangeText range={range && convertRange(range, local, 'USD', r)} currency="USD" /></dd>
      </div>
    </dl>
  );
}

function warningText(w: Warning, byId: Map<string, PriceSample>, lang: Lang, t: ReturnType<typeof useI18n>['t']): string {
  const names = [...(w.names ?? []), ...(w.ids ?? []).map((id) => {
    const s = byId.get(id);
    if (!s) return id;
    const name = localName(lang, s.nameKo, s.nameEn);
    // 변동 가격은 단일 가격으로 오인하지 않도록 표본의 현지 통화 범위를 함께 적는다
    return w.code === 'variablePricing' && s.min !== s.max ? `${name} (${s.min}~${s.max} ${s.currency})` : name;
  })].join(', ');
  const rate = Math.round(MODEL.minFillRate * 100);
  const basket = w.basket ? (t.baskets[w.basket] ?? w.basket) : '';
  return fmt(t.warnings[w.code], { names, min: MODEL.minSamplesPerCategory, rate, basket, n: w.n ?? 0 });
}

export function ResultView({ estimate: e, trip, city, display, rates, samples, direct }: Props) {
  const { t, lang } = useI18n();
  const ratesData = rates.status === 'ok' ? rates.data : null;
  // 현지 통화와 선택 통화가 같으면(예: 서울 + KRW) 같은 금액 열을 두 번 보이지 않는다
  const showSel = display !== e.currency;
  const byId = new Map(samples.map((s) => [s.id, s]));
  const catName = (c: Category) => t.categories[c];
  const kids = trip.children > 0 ? fmt(t.result.kids, { n: trip.children }) : '';
  /** 사용자가 정한 비용군(관광지 선택, 교통 이용 방식)의 한 줄 요약 */
  const selectedLabel = (est: CategoryEstimate): string => {
    if (est.category === 'transport') return est.lines[0] ? fmt(t.result.transportPassShort, { n: est.lines[0].units }) : t.result.transportNoneShort;
    return est.sampleCount ? fmt(t.result.selectedAttractions, { n: est.sampleCount }) : t.result.noAttractions;
  };

  const entered = direct.flight + direct.lodging;
  let directConverted: number | null = 0;
  if (entered > 0) {
    const r = convertRange({ min: entered, max: entered }, direct.currency, display, ratesData);
    directConverted = r ? r.min : null;
  }
  const directUsd = entered > 0 ? convertRange({ min: entered, max: entered }, direct.currency, 'USD', ratesData) : null;

  const holdList = e.missing.map((c) => `${catName(c)} (${fmt(t.result.needMore, { have: e.categories[c].independentCount, need: MODEL.minSamplesPerCategory })})`).join(', ');
  const fillPct = Math.round(e.fillRate * 100);

  return (
    <section className="card result" aria-labelledby="result-title" data-testid="result">
      <h2 id="result-title">{t.result.title}</h2>
      <p className="summary">
        {fmt(t.result.summary, { city: cityName(city, lang), days: e.days, nights: trip.nights, adults: trip.adults, kids, style: t.styles[trip.style].name })}
      </p>

      {e.computable && e.total ? (
        <div className="total" data-testid="total">
          <h3>{t.result.total}</h3>
          <AmountRows range={e.total} local={e.currency} display={display} rates={rates} />
          {e.dailyFoodAverage && (
            <div className="daily-food" data-testid="daily-food">
              <h4>{t.result.dailyFood}</h4>
              <AmountRows range={e.dailyFoodAverage} local={e.currency} display={display} rates={rates} />
              <p className="hint">{fmt(t.result.dailyFoodNote, { days: e.days })}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="notice hold" role="status" data-testid="hold">
          <h3>{t.result.holdTitle}</h3>
          <p>{t.result.holdBody}</p>
          {e.missing.length > 0 && <p>{fmt(t.result.holdMissing, { list: holdList })}</p>}
          <p className="hint">{fmt(t.result.holdFill, { min: MODEL.minSamplesPerCategory, rate: Math.round(MODEL.minFillRate * 100), fill: fillPct })}</p>
        </div>
      )}

      {entered > 0 && (
        <div className="direct" data-testid="direct">
          <h3>{t.result.directTitle}</h3>
          {directConverted === null ? (
            <p className="notice warn">{t.result.directNoRate}</p>
          ) : (
            <dl className="amounts">
              <div>
                <dt>{t.result.directSum} ({display})</dt>
                <dd><RangeText range={{ min: directConverted, max: directConverted }} currency={display} /></dd>
              </div>
              {e.computable && e.total && (
                <div>
                  <dt>{t.result.grand} ({display})</dt>
                  <dd>
                    <RangeText
                      range={(() => {
                        const stay = convertRange(e.total, e.currency, display, ratesData);
                        return stay ? sumRange(stay, { min: directConverted, max: directConverted }) : null;
                      })()}
                      currency={display}
                    />
                  </dd>
                </div>
              )}
              <div>
                <dt>{t.result.usd}</dt>
                <dd><RangeText range={directUsd} currency="USD" /></dd>
              </div>
            </dl>
          )}
        </div>
      )}

      <h3>{t.result.breakdown}</h3>
      <table className="breakdown stack" data-testid="breakdown">
        <thead>
          <tr>
            <th scope="col">{t.result.item}</th>
            <th scope="col">{t.result.local} ({e.currency})</th>
            {showSel && <th scope="col">{t.result.selected} ({display})</th>}
            <th scope="col">{t.result.usd}</th>
          </tr>
        </thead>
        <tbody>
          {CATEGORIES.map((c) => {
            const est: CategoryEstimate = e.categories[c];
            return [
              <tr key={c} data-category={c}>
                <th scope="row">
                  {catName(c)}
                  <small>{est.mode === 'selected' ? selectedLabel(est) : est.sufficient ? fmt(t.result.samples, { n: est.independentCount }) : ''}</small>
                </th>
                {est.total ? (
                  <>
                    <td data-label={`${t.result.local} (${e.currency})`}>
                      <RangeText range={est.total} currency={e.currency} />
                      {est.contingency && (
                        <small className="cont">
                          + {t.detail.contingency.replace('{rate}', String(Math.round(MODEL.contingencyRate * 100)))} <RangeText range={est.contingency} currency={e.currency} />
                        </small>
                      )}
                    </td>
                    {showSel && <td data-label={`${t.result.selected} (${display})`}><RangeText range={convertRange(est.total, e.currency, display, ratesData)} currency={display} /></td>}
                    <td data-label={t.result.usd}><RangeText range={convertRange(est.total, e.currency, 'USD', ratesData)} currency="USD" /></td>
                  </>
                ) : (
                  <td colSpan={showSel ? 3 : 2} className="insufficient">
                    {t.result.notEnough} · {fmt(t.result.needMore, { have: est.independentCount, need: MODEL.minSamplesPerCategory })}
                  </td>
                )}
              </tr>,
              est.total && est.lines.length > 0 ? (
                <tr key={`${c}-detail`} className="detail-row" data-detail={c}>
                  <td colSpan={showSel ? 4 : 3}>
                    <details>
                      <summary>{t.detail.open}</summary>
                      <CategoryDetail est={est} currency={e.currency} display={display} rates={ratesData} people={trip.adults + trip.children} adults={trip.adults} />
                    </details>
                  </td>
                </tr>
              ) : null,
            ];
          })}
          {e.extras.map((x) => {
            const label = x.kind === 'airport' ? t.extras.rowAirport : t.extras.rowRental;
            const name = localName(lang, x.nameKo, x.nameEn);
            const kids = x.kind === 'airport' && trip.children > 0 ? fmt(t.extras.lineKids, { n: trip.children }) : '';
            const line =
              x.kind === 'rental'
                ? fmt(t.extras.lineRental, { name, days: x.units })
                : fmt(x.roundTrip ? t.extras.lineAirportRound : t.extras.lineAirport, { name, adults: trip.adults, kids, units: x.units });
            return (
              <tr key={x.kind} data-category={`extra-${x.kind}`}>
                <th scope="row">
                  {label}
                  <small>{line}</small>
                </th>
                <td data-label={`${t.result.local} (${e.currency})`}>
                  <RangeText range={x.total} currency={e.currency} />
                  {x.contingency && (
                    <small className="cont">
                      + {t.detail.contingency.replace('{rate}', String(Math.round(MODEL.contingencyRate * 100)))} <RangeText range={x.contingency} currency={e.currency} />
                    </small>
                  )}
                </td>
                {showSel && <td data-label={`${t.result.selected} (${display})`}><RangeText range={convertRange(x.total, e.currency, display, ratesData)} currency={display} /></td>}
                <td data-label={t.result.usd}><RangeText range={convertRange(x.total, e.currency, 'USD', ratesData)} currency="USD" /></td>
              </tr>
            );
          })}
          {e.contingency && (
            <tr data-category="contingency">
              <th scope="row">{t.categories.contingency}</th>
              <td data-label={`${t.result.local} (${e.currency})`}><RangeText range={e.contingency} currency={e.currency} /></td>
              {showSel && <td data-label={`${t.result.selected} (${display})`}><RangeText range={convertRange(e.contingency, e.currency, display, ratesData)} currency={display} /></td>}
              <td data-label={t.result.usd}><RangeText range={convertRange(e.contingency, e.currency, 'USD', ratesData)} currency="USD" /></td>
            </tr>
          )}
        </tbody>
      </table>
      {e.warnings.some((w) => w.code === 'drinkNoData') && (
        <p className="notice warn" data-testid="drink-note">{t.warnings.drinkNoData}</p>
      )}

      <details className="evidence">
      <summary>{t.result.quality}</summary>
      <p className="hint">{t.result.qualityLead}</p>
      <div className="quality" data-testid="quality">
        {CATEGORIES.map((c) => {
          const est = e.categories[c];
          const ws = e.warnings.filter((w) => w.category === c);
          return (
            <details key={c} open={!est.sufficient || ws.length > 0} data-category={c}>
              <summary>
                <strong>{catName(c)}</strong>{' '}
                <span className="muted">
                  {est.sufficient ? fmt(t.result.sampleCount, { n: est.sampleCount, ind: est.independentCount }) : t.result.notEnough}
                  {est.childSampleCount > 0 ? ` ${fmt(t.result.childSamples, { n: est.childSampleCount })}` : ''}
                </span>
              </summary>
              <ul className="baskets" data-testid={`baskets-${c}`}>
                {est.mode === 'selected' && <li data-basket="selected">{selectedLabel(est)}</li>}
                {est.mode === 'estimated' && est.baskets.filter((b) => b.sampleCount > 0 || b.included).map((b) => (
                  <li key={b.basket} data-basket={b.basket}>
                    {fmt(t.result.basketLine, { name: t.baskets[b.basket] ?? b.basket, n: b.sampleCount, ind: b.independentCount })} ·{' '}
                    <span className={b.included ? '' : 'muted'}>{b.included ? t.result.included : t.result.notIncluded}</span>
                  </li>
                ))}
              </ul>
              {est.checkedFrom && (
                <p>
                  {est.checkedFrom === est.checkedTo
                    ? fmt(t.result.checkedOne, { date: est.checkedFrom })
                    : fmt(t.result.checked, { from: est.checkedFrom, to: est.checkedTo ?? '' })}
                </p>
              )}
              {est.sources.length > 0 ? (
                <p>
                  {t.result.sources}:{' '}
                  {numberedSources(est.sources).map((s, i) => (
                    <span key={s.url + i}>
                      {i > 0 && ', '}
                      <ExternalLink href={s.url}>{s.label}</ExternalLink>
                    </span>
                  ))}
                </p>
              ) : (
                <p className="muted">{t.result.noneUsed}</p>
              )}
              {ws.length > 0 && (
                <ul className="warnings">
                  {ws.map((w, i) => (
                    <li key={`${w.code}${i}`}>{warningText(w, byId, lang, t)}</li>
                  ))}
                </ul>
              )}
            </details>
          );
        })}
        {e.extras.length > 0 && (
          <ul className="sources" data-testid="extras-sources">
            {e.extras.map((x) => (
              <li key={x.id}>
                <strong>{x.kind === 'airport' ? t.extras.rowAirport : t.extras.rowRental}</strong> · {localName(lang, x.nameKo, x.nameEn)} ·{' '}
                <ExternalLink href={x.sourceUrl}>{x.sourceName}</ExternalLink> · {fmt(t.extras.checked, { date: x.checkedAt })}
                {x.variable ? ` · ${t.extras.variable}` : ''}
                {x.kind === 'airport' && trip.children > 0 && !x.childPrice ? ` · ${t.extras.noChild}` : ''}
              </li>
            ))}
          </ul>
        )}
        {e.warnings.filter((w) => !w.category).map((w, i) => (
          <p key={i} className="notice warn">{warningText(w, byId, lang, t)}</p>
        ))}
      </div>
      </details>
      <RatesNotice rates={rates} display={display} />
      <AdSlot name="inline-results" />
    </section>
  );
}

export function RatesNotice({ rates, display }: { rates: RatesState; display: string }) {
  const { t } = useI18n();
  if (rates.status === 'loading') return <p className="hint" role="status">{t.rates.loading}</p>;
  if (rates.status === 'error') return <p className="notice warn" role="alert" data-testid="rates-error">{rates.preview ? t.preview.rates : t.rates.failed}</p>;
  const d = rates.data;
  return (
    <div className="rates" data-testid="rates-info">
      <p className="hint">
        {fmt(t.rates.info, { date: d.asOf, source: d.source.name })}{' '}
        <ExternalLink href={d.source.url}>{fmt(t.rates.sourceLink, { source: d.source.name })}</ExternalLink>
      </p>
      {d.stale && <p className="notice warn" role="status" data-testid="rates-stale">{fmt(t.rates.stale, { date: d.asOf })}</p>}
      {!isSupported(display, d) && <p className="notice warn" role="alert" data-testid="rates-unsupported">{fmt(t.rates.unsupported, { code: display })}</p>}
    </div>
  );
}
