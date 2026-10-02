import { attractionOptions } from '../core/attractions';
import type { City, PriceSample, Range } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { formatMoney } from '../core/money';
import { convertRange, RangeText } from './money';
import type { RatesState } from './useRates';

interface Props {
  city: City;
  samples: PriceSample[];
  selected: string[];
  onChange: (ids: string[]) => void;
  display: string;
  rates: RatesState;
  adults: number;
  children: number;
}

/** 관광지·테마파크 입장료 목록. 체크한 곳의 입장료(1곳 1회, 인원 기준)만 경비에 더한다. 체크하지 않으면 0. */
export function AttractionPicker({ city, samples, selected, onChange, display, rates, adults, children }: Props) {
  const { t, lang, locale } = useI18n();
  const options = attractionOptions(city, samples);
  const ratesData = rates.status === 'ok' ? rates.data : null;
  const chosen = options.filter((o) => selected.includes(o.id));
  const toggle = (id: string) => onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  const people = adults + children;
  /** 이 인원이 그곳에 갈 때 드는 입장료(아동 요금이 없으면 성인 요금) */
  const costOf = (o: (typeof options)[number]): Range => {
    const a = o.adult.sample;
    const c = o.child?.sample ?? a;
    return { min: a.min * adults + c.min * children, max: a.max * adults + c.max * children };
  };
  const added = chosen.reduce<Range>((sum, o) => {
    const r = costOf(o);
    return { min: sum.min + r.min, max: sum.max + r.max };
  }, { min: 0, max: 0 });
  const amountText = (r: Range) => {
    const a = formatMoney(r.min, city.currency, locale);
    const b = formatMoney(r.max, city.currency, locale);
    return a === b ? a : `${a} ~ ${b}`;
  };

  const price = (s: PriceSample) => {
    const r: Range = { min: s.min, max: s.max };
    if (s.max === 0) return <strong>{t.attractions.free}</strong>;
    return (
      <>
        <RangeText range={r} currency={s.currency} />
        {display !== s.currency && ratesData && (
          <span className="muted">
            {' '}
            (≈ <RangeText range={convertRange(r, s.currency, display, ratesData)} currency={display} />)
          </span>
        )}
      </>
    );
  };

  return (
    <section className="card attractions" aria-labelledby="attr-title" data-testid="attractions">
      <details open>
        <summary>
          <span id="attr-title" className="summary-title">{t.attractions.title}</span>{' '}
          <span className="muted" data-testid="attractions-status">
            {chosen.length ? fmt(t.attractions.summarySome, { n: chosen.length, amount: amountText(added) }) : t.attractions.summaryNone}
          </span>
        </summary>
        <p className="hint">{t.attractions.lead}</p>
        {options.length === 0 ? (
          <p className="muted">{t.attractions.empty}</p>
        ) : (
          <ul className="attr-list">
            {options.map((o) => {
              const s = o.adult.sample;
              const name = lang === 'ko' ? s.nameKo : s.nameEn;
              const flags = [
                o.variable && t.attractions.variable,
                (s.status.includes('재검증') || s.review) && t.attractions.check,
                s.modelUse === 'conditional' && t.attractions.conditional,
              ].filter(Boolean) as string[];
              return (
                <li key={o.id} className={selected.includes(o.id) ? 'attr-option selected' : 'attr-option'} data-attraction={o.id}>
                  <label>
                    <input type="checkbox" checked={selected.includes(o.id)} onChange={() => toggle(o.id)} />
                    <span className="attr-name">{name}</span>
                  </label>
                  <div className="attr-prices">
                    <span>
                      {t.attractions.adult} {price(s)}
                    </span>
                    {o.child ? (
                      <span>
                        {t.attractions.child} {price(o.child.sample)}
                      </span>
                    ) : (
                      <span className="muted">{t.attractions.noChild}</span>
                    )}
                  </div>
                  {selected.includes(o.id) && people > 0 && (
                    <p className="attr-added" data-testid="attr-added">
                      {fmt(t.attractions.added, { amount: amountText(costOf(o)), people })}
                    </p>
                  )}
                  <div className="attr-meta muted">
                    {flags.length > 0 && <span className="badge">{flags.join(' · ')}</span>}{' '}
                    <ExternalLink href={s.sourceUrl}>{s.sourceName}</ExternalLink> · {fmt(t.attractions.checked, { date: s.checkedAt })}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {chosen.length > 0 && (
          <button type="button" className="link-button" onClick={() => onChange([])}>
            {t.attractions.clear}
          </button>
        )}
      </details>
    </section>
  );
}
