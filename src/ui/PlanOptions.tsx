import { useState } from "react";
import { MODEL } from "../core/model-config";
import { passOptions, passesNeeded } from "../core/transport";
import type { City, FoodRecommendation, PriceSample } from "../core/types";
import { fmt, localName, useI18n } from "../i18n";
import {
  PLAN_LIMITS,
  type FieldError,
  type FormState,
  type MustEatInput,
  type TransportMode,
} from "./form";
import { RangeText } from "./money";

interface Props {
  city: City;
  samples: PriceSample[];
  foods: FoodRecommendation[];
  form: FormState;
  onChange: (p: Partial<FormState>) => void;
  errors: Partial<Record<FieldError, true>>;
  /** 여행 일수(숙박 수 + 1). 입력이 틀리면 0 */
  days: number;
}

/** 대표 음식의 조사된 메뉴 가격(연결된 외식 표본 중 첫 번째). 없으면 null */
function researchedPrice(
  f: FoodRecommendation,
  byId: Map<string, PriceSample>,
): PriceSample | null {
  for (const id of f.linkedPriceIds) {
    const s = byId.get(id);
    if (s && s.category === "food" && s.modelUse !== "no") return s;
  }
  return null;
}

/** 계산기에 넣을 1인분 가격: 조사 가격 범위의 가운데(소수 둘째 자리까지) */
const midPrice = (s: PriceSample) =>
  String(Math.round(((s.min + s.max) / 2) * 100) / 100);

/**
 * 자세히 설정(선택): 교통 이용 방식·하루 끼니 수·꼭 먹을 음식. 접혀 있으면 기본(여행 스타일 기준)으로 계산한다.
 * 고른 값은 모두 URL 에 남는다.
 */
export function PlanOptions({
  city,
  samples,
  foods,
  form,
  onChange,
  errors,
  days,
}: Props) {
  const { t, lang } = useI18n();
  const p = t.plan;
  const passes = passOptions(city, samples);
  const byId = new Map(samples.map((s) => [s.id, s]));
  const cityFoods = foods.filter((f) => f.cityId === city.id);
  const [pick, setPick] = useState("");
  const customized =
    form.transportMode !== "auto" ||
    form.mealsPerDay !== "" ||
    form.mustEat.length > 0;
  const autoRides = MODEL.usage.ride[form.style];

  const setMode = (transportMode: TransportMode) =>
    onChange({
      transportMode,
      ...(transportMode === "pass" && !form.passId && passes[0]
        ? { passId: passes[0].id }
        : {}),
    });
  const setEat = (mustEat: MustEatInput[]) => onChange({ mustEat });
  const addFood = (f: FoodRecommendation) => {
    const s = researchedPrice(f, byId);
    setEat([
      ...form.mustEat,
      {
        name: localName(lang, f.nameKo, f.nameEn),
        price: s ? midPrice(s) : "",
        ...(s ? { sampleId: s.id } : {}),
      },
    ]);
  };
  const full = form.mustEat.length >= PLAN_LIMITS.mustEatMax;
  const transitDays =
    form.transitDays.trim() === "" ? days : Number(form.transitDays) || 0;
  const chosenPass = passes.find((o) => o.id === form.passId);

  const daysField = (
    <div className="field span-3">
      <label htmlFor="transit-days">{p.transitDays}</label>
      <input
        id="transit-days"
        type="number"
        inputMode="numeric"
        min={0}
        max={days || MODEL.limits.nightsMax + 1}
        value={form.transitDays}
        placeholder={String(days)}
        onChange={(e) => onChange({ transitDays: e.target.value })}
        aria-invalid={errors.transitDays ? true : undefined}
      />
      <p className="hint">{fmt(p.transitDaysHint, { n: days })}</p>
      {errors.transitDays && (
        <p className="field-error" role="alert">
          {fmt(t.form.errors.transitDays, { max: MODEL.limits.nightsMax + 1 })}
        </p>
      )}
    </div>
  );

  return (
    <section
      className="card plan"
      aria-labelledby="plan-title"
      data-testid="plan"
    >
      <details open={customized || undefined}>
        <summary>
          <span id="plan-title" className="summary-title">
            {p.title}
          </span>{" "}
          {!customized && <span className="muted">{p.summaryDefault}</span>}
        </summary>
        <p className="hint">{p.lead}</p>

        <fieldset className="plan-group" data-testid="plan-transport">
          <legend>{p.transport}</legend>
          {(
            [
              ["auto", fmt(p.tAuto, { n: autoRides })],
              ["none", p.tNone],
              ["rides", p.tRides],
              ["pass", p.tPass],
            ] as const
          ).map(([mode, label]) => (
            <label key={mode} className="radio-line">
              <input
                type="radio"
                name="transport-mode"
                value={mode}
                checked={form.transportMode === mode}
                disabled={mode === "pass" && passes.length === 0}
                onChange={() => setMode(mode)}
              />
              {label}
            </label>
          ))}
          {passes.length === 0 && <p className="hint">{p.noPass}</p>}

          {form.transportMode === "rides" && (
            <div className="grid">
              <div className="field span-3">
                <label htmlFor="rides-per-day">{p.ridesPerDay}</label>
                <input
                  id="rides-per-day"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={PLAN_LIMITS.ridesMax}
                  value={form.ridesPerDay}
                  onChange={(e) => onChange({ ridesPerDay: e.target.value })}
                  aria-invalid={errors.ridesPerDay ? true : undefined}
                />
                {errors.ridesPerDay && (
                  <p className="field-error" role="alert">
                    {t.form.errors.ridesPerDay}
                  </p>
                )}
              </div>
              {daysField}
            </div>
          )}

          {form.transportMode === "pass" && passes.length > 0 && (
            <div className="grid">
              <div className="field wide">
                <label htmlFor="pass-id">{p.pass}</label>
                <select
                  id="pass-id"
                  value={form.passId}
                  onChange={(e) => onChange({ passId: e.target.value })}
                >
                  {passes.map((o) => (
                    <option key={o.id} value={o.id}>
                      {localName(
                        lang,
                        o.adult.sample.nameKo,
                        o.adult.sample.nameEn,
                      )}{" "}
                      ·{" "}
                      {o.adult.sample.min === o.adult.sample.max
                        ? o.adult.sample.min
                        : `${o.adult.sample.min}~${o.adult.sample.max}`}{" "}
                      {o.adult.sample.currency}
                    </option>
                  ))}
                </select>
                {chosenPass && (
                  <p className="hint" data-testid="pass-need">
                    {fmt(p.passDays, { n: chosenPass.days })} ·{" "}
                    {fmt(p.passNeed, {
                      count: passesNeeded(
                        chosenPass.days,
                        Math.min(days, transitDays),
                      ),
                    })}
                  </p>
                )}
              </div>
              {daysField}
            </div>
          )}
          {form.transportMode !== "auto" && (
            <p className="hint">{p.airportHint}</p>
          )}
        </fieldset>

        <div className="field">
          <label htmlFor="meals-per-day">{p.meals}</label>
          <select
            id="meals-per-day"
            value={form.mealsPerDay}
            onChange={(e) => onChange({ mealsPerDay: e.target.value })}
          >
            <option value="">{p.mealsDefault}</option>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={String(n)}>
                {fmt(p.mealsN, { n })}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="plan-group" data-testid="plan-must-eat">
          <legend>{p.mustEat}</legend>
          <p className="hint">{p.mustEatLead}</p>
          {form.mustEat.length > 0 && (
            <ul className="must-eat-list">
              {form.mustEat.map((m, i) => {
                const s = m.sampleId ? byId.get(m.sampleId) : undefined;
                const missing = m.price.trim() === "" || !m.name.trim();
                const set = (patch: Partial<MustEatInput>) =>
                  setEat(
                    form.mustEat.map((x, j) =>
                      j === i ? { ...x, ...patch } : x,
                    ),
                  );
                return (
                  <li key={i} className="must-eat-row" data-must-eat={i}>
                    <div className="field">
                      <label htmlFor={`eat-name-${i}`}>{p.name}</label>
                      <input
                        id={`eat-name-${i}`}
                        type="text"
                        maxLength={PLAN_LIMITS.nameMax}
                        value={m.name}
                        onChange={(e) => set({ name: e.target.value })}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor={`eat-price-${i}`}>
                        {fmt(p.price, { currency: city.currency })}
                      </label>
                      <input
                        id={`eat-price-${i}`}
                        type="text"
                        inputMode="decimal"
                        value={m.price}
                        // 가격을 고치면 조사 가격이 아니라 직접 입력한 값이 된다
                        onChange={(e) =>
                          set({ price: e.target.value, sampleId: undefined })
                        }
                        aria-invalid={missing ? true : undefined}
                      />
                      {s ? (
                        <p className="hint">
                          {p.priceAuto}{" "}
                          <RangeText
                            range={{ min: s.min, max: s.max }}
                            currency={s.currency}
                          />{" "}
                          · {s.sourceName}
                        </p>
                      ) : (
                        missing && (
                          <p className="field-error" role="alert">
                            {p.priceNeeded}
                          </p>
                        )
                      )}
                    </div>
                    <button
                      type="button"
                      className="link-button"
                      onClick={() =>
                        setEat(form.mustEat.filter((_, j) => j !== i))
                      }
                    >
                      {p.remove}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {full ? (
            <p className="hint">{fmt(p.max, { n: PLAN_LIMITS.mustEatMax })}</p>
          ) : (
            <div className="must-eat-add">
              {cityFoods.length > 0 && (
                <>
                  <label htmlFor="eat-pick" className="sr-only">
                    {p.pick}
                  </label>
                  <select
                    id="eat-pick"
                    value={pick}
                    onChange={(e) => setPick(e.target.value)}
                  >
                    <option value="">{p.pickPlaceholder}</option>
                    {cityFoods.map((f) => {
                      const s = researchedPrice(f, byId);
                      return (
                        <option key={f.nameEn} value={f.nameEn}>
                          {localName(lang, f.nameKo, f.nameEn)}
                          {s
                            ? ` · ${s.min === s.max ? s.min : `${s.min}~${s.max}`} ${s.currency}`
                            : ""}
                        </option>
                      );
                    })}
                  </select>
                  <button
                    type="button"
                    disabled={!pick}
                    onClick={() => {
                      const f = cityFoods.find((x) => x.nameEn === pick);
                      if (f) addFood(f);
                      setPick("");
                    }}
                  >
                    {p.add}
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() =>
                  setEat([...form.mustEat, { name: "", price: "" }])
                }
              >
                {p.addCustom}
              </button>
            </div>
          )}
        </fieldset>
      </details>
    </section>
  );
}
