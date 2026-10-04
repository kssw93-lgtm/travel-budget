import { MODEL } from '../core/model-config';
import type { CategoryEstimate, DetailLine, RatesPayload } from '../core/types';
import { fmt, localName, useI18n } from '../i18n';
import { convertRange, RangeText } from './money';

const round1 = (n: number) => Math.round(n * 10) / 10;

interface Props {
  est: CategoryEstimate;
  currency: string;
  display: string;
  rates: RatesPayload | null;
  people: number;
  adults: number;
}

/** 결과 "자세히 보기": 일차별 내역(외식·교통·관광), 기념품 개수, 고른 관광지별 입장료, 항목별 예비비 */
export function CategoryDetail({ est, currency, display, rates, people, adults }: Props) {
  const { t, lang } = useI18n();
  const d = t.detail;
  const money = (r: { min: number; max: number }) => <RangeText range={r} currency={currency} />;
  const shown = (r: { min: number; max: number }) =>
    display !== currency && rates ? (
      <span className="muted">
        {' '}
        (≈ <RangeText range={convertRange(r, currency, display, rates)} currency={display} />)
      </span>
    ) : null;

  const byBasket = new Map<string, DetailLine[]>();
  for (const l of est.lines) byBasket.set(l.basket, [...(byBasket.get(l.basket) ?? []), l]);
  const isAlt = est.category === 'transport' && byBasket.size > 1;

  return (
    <div className="detail" data-testid={`detail-${est.category}`}>
      {[...byBasket.entries()].map(([basket, lines]) => {
        const first = lines[0]!;
        if (first.kind === 'item') {
          return (
            <table key={basket} className="detail-table stack">
              <thead>
                <tr>
                  <th scope="col">{d.colPlace}</th>
                  <th scope="col">{d.colAdult}</th>
                  <th scope="col">{d.colChild}</th>
                  <th scope="col">{d.colSubtotal} ({fmt(d.people, { n: people })})</th>
                </tr>
              </thead>
              <tbody>
                {lines.map((l) => (
                  <tr key={l.id} data-line={l.id}>
                    <th scope="row">{localName(lang, l.nameKo, l.nameEn)}</th>
                    <td data-label={d.colAdult}>{money(l.unitPrice)}</td>
                    <td data-label={d.colChild}>
                      {l.childPrice ? money(l.childPrice) : people > adults ? <span className="muted">{d.childAsAdult}</span> : <span className="muted">—</span>}
                    </td>
                    <td data-label={d.colSubtotal}>
                      {money(l.total)}
                      {shown(l.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }
        if (first.kind === 'trip') {
          const per = adults ? round1(first.units / adults) : first.units;
          return (
            <p key={basket} className="detail-line" data-line="trip">
              {fmt(d.souvenirLine, { adults, per, n: round1(first.units) })} · {d.unitWord[basket]} {money(first.unitPrice)} → <strong>{money(first.total)}</strong>
              {shown(first.total)}
            </p>
          );
        }
        return (
          <div key={basket}>
            {(byBasket.size > 1 || isAlt) && <h4>{t.baskets[basket] ?? basket}</h4>}
            <table className="detail-table stack">
              <thead>
                <tr>
                  <th scope="col">{d.colDay}</th>
                  <th scope="col">{d.colUnits}</th>
                  <th scope="col">{d.unitWord[basket]}</th>
                  <th scope="col">
                    {d.colTotal} ({fmt(d.people, { n: basket === 'drink' ? adults : people })})
                  </th>
                </tr>
              </thead>
              <tbody>
                {lines.map((l) => (
                  <tr key={l.day} data-line={`day-${l.day}`}>
                    <th scope="row">
                      {fmt(d.day, { n: l.day ?? 0 })} <small>{l.date}</small>
                    </th>
                    <td data-label={d.colUnits}>
                      {l.weight && l.weight < 1
                        ? `${fmt(d.units[basket] ?? '{n}', { n: round1(l.units / l.weight) })} × ${Math.round(l.weight * 100)}%`
                        : fmt(d.units[basket] ?? '{n}', { n: round1(l.units) })}
                    </td>
                    <td data-label={d.unitWord[basket]}>{money(l.unitPrice)}</td>
                    <td data-label={d.colTotal}>
                      {money(l.total)}
                      {shown(l.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
      {isAlt && <p className="hint">{d.alternatives}</p>}
      {est.lines.some((l) => l.kind === 'day' && l.weight !== undefined && l.weight < 1) && <p className="hint">{d.edgeNote}</p>}
      {est.contingency && est.total && (
        <p className="detail-line contingency-line" data-line="contingency">
          {fmt(d.contingency, { rate: Math.round(MODEL.contingencyRate * 100) })} +{money(est.contingency)} · {d.withContingency}{' '}
          <strong>{money({ min: est.total.min + est.contingency.min, max: est.total.max + est.contingency.max })}</strong>
        </p>
      )}
    </div>
  );
}
