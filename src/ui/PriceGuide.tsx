import { priceGuide } from '../core/price-guide';
import type { City, PriceSample } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { convertRange, RangeText } from './money';
import { cityName } from './TripForm';
import type { RatesState } from './useRates';

/** 현지 물가 한눈에: 한 끼·간식·교통 1회·1일권·입장료·기념품의 대표 가격(중앙값)과 범위 */
export function PriceGuide({ city, samples, display, rates }: { city: City; samples: PriceSample[]; display: string; rates: RatesState }) {
  const { t, lang } = useI18n();
  const rows = priceGuide(city, samples);
  const ratesData = rates.status === 'ok' ? rates.data : null;
  if (rows.length === 0) return null;
  const cur = city.currency;
  return (
    <section className="card guide" aria-labelledby="guide-title" data-testid="price-guide">
      <h2 id="guide-title">{fmt(t.guide.title, { city: cityName(city, lang) })}</h2>
      <p className="hint">{t.guide.lead}</p>
      <table className="guide-table stack">
        <thead>
          <tr>
            <th scope="col">{t.guide.item}</th>
            <th scope="col">{t.guide.typical} ({cur})</th>
            <th scope="col">{t.guide.range} ({cur})</th>
            <th scope="col">{t.guide.typical} ({display})</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.basket} data-basket={r.basket}>
              <th scope="row">
                {t.guide.units[r.basket]}
                <small className={r.sufficient ? '' : 'insufficient'}>
                  {r.sufficient ? fmt(t.guide.enough, { n: r.independent }) : fmt(t.guide.reference, { n: r.independent })}
                </small>
              </th>
              <td data-label={`${t.guide.typical} (${cur})`}>
                <RangeText range={{ min: r.median, max: r.median }} currency={cur} />
              </td>
              <td data-label={`${t.guide.range} (${cur})`}>
                <RangeText range={{ min: r.min, max: r.max }} currency={cur} />
              </td>
              <td data-label={`${t.guide.typical} (${display})`}>
                <RangeText range={convertRange({ min: r.median, max: r.median }, cur, display, ratesData)} currency={display} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
