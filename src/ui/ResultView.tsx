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
  /** 사용자가 정한 쇼핑·선물 예산(표시 통화). 0 이면 없음 */
  shopping?: number;
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

/** 금액 한 덩어리: 선택 통화를 크게, 현지 통화를 그 아래 작게(같은 통화면 한 줄). USD 참고값은 따로 보이지 않는다 */
function Amount({ range, local, display, rates, big = false }: { range: Range | null; local: string; display: string; rates: RatesState; big?: boolean }) {
  const r = rates.status === 'ok' ? rates.data : null;
  const converted = display === local ? range : range && convertRange(range, local, display, r);
  return (
    <span className={`amount${big ? ' big' : ''}`}>
      <span className="amount-main">
        <RangeText range={converted ?? range} currency={converted ? display : local} />
      </span>
      {display !== local && converted && (
        <span className="amount-local">
          <RangeText range={range} currency={local} />
        </span>
      )}
    </span>
  );
}

function warningText(w: Warning, byId: Map<string, PriceSample>, lang: Lang, t: ReturnType<typeof useI18n>['t']): string {
  const names = [...(w.names ?? []), ...(w.ids ?? []).map((id) => {
    const s = byId.get(id);
    if (!s) return id;
    const name = localName(lang, s.nameKo, s.nameEn, s.nameJa);
    // 변동 가격은 단일 가격으로 오인하지 않도록 표본의 현지 통화 범위를 함께 적는다
    return w.code === 'variablePricing' && s.min !== s.max ? `${name} (${s.min}~${s.max} ${s.currency})` : name;
  })].join(', ');
  const rate = Math.round(MODEL.minFillRate * 100);
  const basket = w.basket ? (t.baskets[w.basket] ?? w.basket) : '';
  return fmt(t.warnings[w.code], { names, min: MODEL.minSamplesPerCategory, rate, basket, n: w.n ?? 0 });
}

export function ResultView({ estimate: e, trip, city, display, rates, samples, direct, shopping = 0 }: Props) {
  const { t, lang } = useI18n();
  const ratesData = rates.status === 'ok' ? rates.data : null;
  const byId = new Map(samples.map((s) => [s.id, s]));
  const catName = (c: Category) => t.categories[c];
  const kids = trip.children > 0 ? fmt(t.result.kids, { n: trip.children }) : '';
  /** 사용자가 정한 비용군(관광지 선택, 교통 이용 방식)의 한 줄 요약 */
  const selectedLabel = (est: CategoryEstimate): string => {
    if (est.category === 'transport') return est.lines[0] ? fmt(t.result.transportPassShort, { n: est.lines[0].units }) : t.result.transportNoneShort;
    return est.sampleCount ? fmt(t.result.selectedAttractions, { n: est.sampleCount }) : t.result.noAttractions;
  };

  // 쇼핑·선물 예산은 표시 통화로 입력받아 현지 통화로 바꿔 총액에 더한다(예비비는 붙이지 않는다)
  const shopLocal: Range | null =
    shopping > 0 ? (display === e.currency ? { min: shopping, max: shopping } : convertRange({ min: shopping, max: shopping }, display, e.currency, ratesData)) : null;
  const stayTotal: Range | null = e.total && shopLocal ? sumRange(e.total, shopLocal) : e.total;

  const entered = direct.flight + direct.lodging;
  let directConverted: number | null = 0;
  if (entered > 0) {
    const r = convertRange({ min: entered, max: entered }, direct.currency, display, ratesData);
    directConverted = r ? r.min : null;
  }

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
          <Amount range={stayTotal} local={e.currency} display={display} rates={rates} big />
          {e.dailyFoodAverage && (
            <p className="daily-food" data-testid="daily-food">
              <span>{t.result.dailyFood}</span> <Amount range={e.dailyFoodAverage} local={e.currency} display={display} rates={rates} />
            </p>
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
              {e.computable && stayTotal && (
                <div>
                  <dt>{t.result.grand} ({display})</dt>
                  <dd>
                    <RangeText
                      range={(() => {
                        const stay = stayTotal && convertRange(stayTotal, e.currency, display, ratesData);
                        return stay ? sumRange(stay, { min: directConverted, max: directConverted }) : null;
                      })()}
                      currency={display}
                    />
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>
      )}

      <h3>{t.result.breakdown}</h3>
      <table className="breakdown stack" data-testid="breakdown">
        <thead>
          <tr>
            <th scope="col">{t.result.item}</th>
            <th scope="col">{t.result.amount}</th>
          </tr>
        </thead>
        <tbody>
          {CATEGORIES.map((c) => {
            const est: CategoryEstimate = e.categories[c];
            return [
              <tr key={c} data-category={c}>
                <th scope="row">
                  {catName(c)}
                  {est.mode === 'selected' && <small>{selectedLabel(est)}</small>}
                </th>
                {est.total ? (
                  <td data-label={t.result.amount}>
                    <Amount range={est.total} local={e.currency} display={display} rates={rates} />
                  </td>
                ) : (
                  <td className="insufficient">
                    {t.result.notEnough} · {fmt(t.result.needMore, { have: est.independentCount, need: MODEL.minSamplesPerCategory })}
                  </td>
                )}
              </tr>,
              est.total && est.lines.length > 0 ? (
                <tr key={`${c}-detail`} className="detail-row" data-detail={c}>
                  <td colSpan={2}>
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
            const name = localName(lang, x.nameKo, x.nameEn, x.nameJa);
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
                <td data-label={t.result.amount}>
                  <Amount range={x.total} local={e.currency} display={display} rates={rates} />
                </td>
              </tr>
            );
          })}
          {e.contingency && (
            <tr data-category="contingency">
              <th scope="row">{t.categories.contingency}</th>
              <td data-label={t.result.amount}>
                <Amount range={e.contingency} local={e.currency} display={display} rates={rates} />
              </td>
            </tr>
          )}
          {shopping > 0 && (
            <tr data-category="shopping">
              <th scope="row">{t.result.shoppingRow}</th>
              <td data-label={t.result.amount}>
                {shopLocal ? (
                  <Amount range={shopLocal} local={e.currency} display={display} rates={rates} />
                ) : (
                  <RangeText range={{ min: shopping, max: shopping }} currency={display} />
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {shopping > 0 && !shopLocal && <p className="notice warn" data-testid="shopping-no-rate">{t.result.shoppingNoRate}</p>}
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
                <strong>{x.kind === 'airport' ? t.extras.rowAirport : t.extras.rowRental}</strong> · {localName(lang, x.nameKo, x.nameEn, x.nameJa)} ·{' '}
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
      <RatesNotice rates={rates} display={display} />
      </details>
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
