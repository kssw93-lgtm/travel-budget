import { useState } from 'react';
import { classify } from '../core/classify';
import { MODEL } from '../core/model-config';
import type { City, PriceSample } from '../core/types';
import { fmt, localName, useI18n } from '../i18n';
import { PLAN_LIMITS, type FieldError, type FormState, type MustEatInput } from './form';
import { RangeText } from './money';

interface Props {
  city: City;
  samples: PriceSample[];
  form: FormState;
  onChange: (p: Partial<FormState>) => void;
  errors: Partial<Record<FieldError, true>>;
}

const midPrice = (s: PriceSample) => String(Math.round(((s.min + s.max) / 2) * 100) / 100);

/**
 * 자세히 설정 · 음주: 간단히는 계산기의 "음주 포함" 체크만으로 되고(같은 값),
 * 여기서는 성인 1인 하루 잔 수와 마실 술(조사된 주류 가격 또는 직접 입력)을 정한다.
 */
export function DrinkOptions({ city, samples, form, onChange, errors }: Props) {
  const { t, lang } = useI18n();
  const p = t.plan;
  const [pick, setPick] = useState('');
  const drinks = samples.filter((s) => s.cityId === city.id).map(classify).filter((r) => r.usable && r.basket === 'drink' && r.audience === 'adult').map((r) => r.sample);
  const byId = new Map(drinks.map((s) => [s.id, s]));
  const list = form.drinkPicks;
  const setList = (drinkPicks: MustEatInput[]) => onChange({ drinkPicks });
  const full = list.length >= PLAN_LIMITS.mustEatMax;
  const name = (s: PriceSample) => localName(lang, s.nameKo, s.nameEn, s.nameJa);

  return (
    <fieldset className="plan-group" data-testid="plan-drinks">
      <legend>{p.drinks}</legend>
      <p className="hint">{p.drinksLead}</p>
      <label className="radio-line">
        <input id="plan-drinks-on" type="checkbox" checked={form.drinks} onChange={(e) => onChange({ drinks: e.target.checked })} />
        {p.drinksOn}
      </label>
      {form.drinks && (
        <>
          <div className="field">
            <label htmlFor="drinks-per-day">{p.drinksPerDay}</label>
            <select id="drinks-per-day" value={form.drinksPerDay} onChange={(e) => onChange({ drinksPerDay: e.target.value })}>
              <option value="">{fmt(p.drinksDefault, { n: MODEL.usage.drink[form.style] })}</option>
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>
                  {fmt(p.drinksN, { n })}
                </option>
              ))}
            </select>
          </div>
          <p className="hint">{drinks.length ? p.drinkLead : p.drinkNoData}</p>
          {list.length > 0 && (
            <ul className="must-eat-list">
              {list.map((d, i) => {
                const s = d.sampleId ? byId.get(d.sampleId) : undefined;
                const missing = d.price.trim() === '' || !d.name.trim();
                const set = (patch: Partial<MustEatInput>) => setList(list.map((x, j) => (j === i ? { ...x, ...patch } : x)));
                return (
                  <li key={i} className="must-eat-row" data-drink={i}>
                    <div className="field">
                      <label htmlFor={`drink-name-${i}`}>{p.drinkName}</label>
                      <input id={`drink-name-${i}`} type="text" maxLength={PLAN_LIMITS.nameMax} value={d.name} onChange={(e) => set({ name: e.target.value })} />
                    </div>
                    <div className="field">
                      <label htmlFor={`drink-price-${i}`}>{fmt(p.drinkPrice, { currency: city.currency })}</label>
                      <input
                        id={`drink-price-${i}`}
                        type="text"
                        inputMode="decimal"
                        value={d.price}
                        onChange={(e) => set({ price: e.target.value, sampleId: undefined })}
                        aria-invalid={missing ? true : undefined}
                      />
                      {s ? (
                        <p className="hint">
                          {p.priceAuto} <RangeText range={{ min: s.min, max: s.max }} currency={s.currency} /> · {s.unit} · {s.sourceName}
                        </p>
                      ) : (
                        missing && (
                          <p className="field-error" role="alert">
                            {p.priceNeeded}
                          </p>
                        )
                      )}
                    </div>
                    <button type="button" className="link-button" onClick={() => setList(list.filter((_, j) => j !== i))}>
                      {p.remove}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {errors.drinkPicks && <p className="sr-only">{t.form.errors.drinkPicks}</p>}
          {full ? (
            <p className="hint">{fmt(p.max, { n: PLAN_LIMITS.mustEatMax })}</p>
          ) : (
            <div className="must-eat-add">
              {drinks.length > 0 && (
                <>
                  <label htmlFor="drink-pick" className="sr-only">
                    {p.drinkPick}
                  </label>
                  <select id="drink-pick" value={pick} onChange={(e) => setPick(e.target.value)}>
                    <option value="">{p.drinkPickPlaceholder}</option>
                    {drinks.map((s) => (
                      <option key={s.id} value={s.id}>
                        {name(s)} · {s.min === s.max ? s.min : `${s.min}~${s.max}`} {s.currency} ({s.unit})
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={!pick}
                    onClick={() => {
                      const s = byId.get(pick);
                      if (s) setList([...list, { name: name(s), price: midPrice(s), sampleId: s.id }]);
                      setPick('');
                    }}
                  >
                    {p.add}
                  </button>
                </>
              )}
              <button type="button" onClick={() => setList([...list, { name: '', price: '' }])}>
                {p.addCustom}
              </button>
            </div>
          )}
        </>
      )}
    </fieldset>
  );
}
