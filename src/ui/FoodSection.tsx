import type { City, FoodRecommendation, PriceSample } from '../core/types';
import { fmt, localName, useI18n, type Lang } from '../i18n';
import { convertRange, RangeText } from './money';
import type { RatesState } from './useRates';
import { cityName } from './TripForm';
import { ExternalLink } from './ExternalLink';

interface Props {
  city: City;
  foods: FoodRecommendation[];
  samples: PriceSample[];
  display: string;
  rates: RatesState;
}

/** 추천 이유: 화면 언어의 문장이 없으면 영문, 그것도 없으면 한국어 원문(lang 속성으로 표시) */
function pickReason(lang: Lang, f: FoodRecommendation): { text: string; lang?: string } {
  if (lang === 'ko') return { text: f.reason };
  if (lang === 'ja' && f.reasonJa) return { text: f.reasonJa };
  if (f.reasonEn) return { text: f.reasonEn, ...(lang === 'ja' ? { lang: 'en' } : {}) };
  return { text: f.reason, lang: 'ko' };
}

export function FoodSection({ city, foods, samples, display, rates }: Props) {
  const { t, lang } = useI18n();
  const mine = foods.filter((f) => f.cityId === city.id);
  const byId = new Map(samples.map((s) => [s.id, s]));
  const ratesData = rates.status === 'ok' ? rates.data : null;
  if (mine.length === 0) return null;

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
                {localName(lang, f.nameKo, f.nameEn, f.nameJa)}
                {lang !== 'ja' && <small>{lang === 'ko' ? f.nameEn : f.nameKo}</small>}
              </h3>
              <p className="band">{t.foods.band}: {t.foods.bands[f.budgetBand] ?? f.budgetBand}</p>
              <div className="evidence">
                <h4>{t.foods.why}</h4>
                <p lang={pickReason(lang, f).lang}>{pickReason(lang, f).text}</p>
                <p className="src">
                  <ExternalLink href={f.recommendUrl}>{f.recommendSource}</ExternalLink>
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
                          {localName(lang, s.nameKo, s.nameEn, s.nameJa)} · <RangeText range={local} currency={s.currency} />
                          {display !== s.currency && ratesData && (
                            <> (≈ <RangeText range={convertRange(local, s.currency, display, ratesData)} currency={display} />)</>
                          )}{' '}
                          <span className="muted">
                            [{t.grades[s.grade] ?? s.grade}, {s.checkedAt}]{' '}
                          </span>
                          <ExternalLink href={s.sourceUrl}>{s.sourceName}</ExternalLink>
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
    </section>
  );
}
