import type { City, FoodRecommendation, PriceSample } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { AdSlot } from './AdSlot';
import { convertRange, RangeText } from './money';
import type { RatesState } from './useRates';
import { cityName } from './TripForm';

interface Props {
  city: City;
  foods: FoodRecommendation[];
  samples: PriceSample[];
  display: string;
  rates: RatesState;
}

export function FoodSection({ city, foods, samples, display, rates }: Props) {
  const { t, lang } = useI18n();
  const mine = foods.filter((f) => f.cityId === city.id);
  const byId = new Map(samples.map((s) => [s.id, s]));
  const ratesData = rates.status === 'ok' ? rates.data : null;
  if (mine.length === 0) return <AdSlot name="after-food" />;

  return (
    <section className="card foods" aria-labelledby="foods-title" data-testid="foods">
      <h2 id="foods-title">{fmt(t.foods.title, { city: cityName(city, lang) })}</h2>
      <p className="hint">{t.foods.lead}</p>
      <ul className="food-list">
        {mine.map((f) => {
          const linked = f.linkedPriceIds.map((id) => byId.get(id)).filter((s): s is PriceSample => Boolean(s));
          return (
            <li key={f.nameEn} className="food" data-food={f.nameEn}>
              <h3>
                {lang === 'ko' ? f.nameKo : f.nameEn}
                <small>{lang === 'ko' ? f.nameEn : f.nameKo}</small>
              </h3>
              <p className="band">{t.foods.band}: {t.foods.bands[f.budgetBand] ?? f.budgetBand}</p>
              <div className="evidence">
                <h4>{t.foods.why}</h4>
                <p lang={lang === 'en' && !f.reasonEn ? 'ko' : undefined}>{lang === 'en' ? (f.reasonEn ?? f.reason) : f.reason}</p>
                <p className="src">
                  <a href={f.recommendUrl} target="_blank" rel="noopener noreferrer">{f.recommendSource}</a>
                </p>
              </div>
              <div className="evidence">
                <h4>{t.foods.priceEvidence}</h4>
                {linked.length === 0 ? (
                  <p className="muted">{t.foods.noPrice}</p>
                ) : (
                  <ul>
                    {linked.map((s) => {
                      const local = { min: s.min, max: s.max };
                      return (
                        <li key={s.id}>
                          {lang === 'ko' ? s.nameKo : s.nameEn} · <RangeText range={local} currency={s.currency} />
                          {display !== s.currency && ratesData && (
                            <> (≈ <RangeText range={convertRange(local, s.currency, display, ratesData)} currency={display} />)</>
                          )}{' '}
                          <span className="muted">
                            [{t.grades[s.grade] ?? s.grade}, {s.checkedAt}]{' '}
                          </span>
                          <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer">{s.sourceName}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <AdSlot name="after-food" />
    </section>
  );
}
