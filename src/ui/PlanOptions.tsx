import { MODEL } from "../core/model-config";
import { passOptions, passesNeeded } from "../core/transport";
import type { City, PriceSample } from "../core/types";
import { fmt, localName, useI18n } from "../i18n";
import {
  PLAN_LIMITS,
  type FieldError,
  type FormState,
  type TransportMode,
} from "./form";
import { DrinkOptions } from "./DrinkOptions";

interface Props {
  city: City;
  samples: PriceSample[];
  form: FormState;
  onChange: (p: Partial<FormState>) => void;
  errors: Partial<Record<FieldError, true>>;
  /** 여행 일수(숙박 수 + 1). 입력이 틀리면 0 */
  days: number;
}

/**
 * 자세히 설정(선택): 교통 이용 방식·하루 끼니 수·음주. 접혀 있으면 기본(여행 스타일 기준)으로 계산한다.
 * 고른 값은 모두 URL 에 남는다.
 */
export function PlanOptions({
  city,
  samples,
  form,
  onChange,
  errors,
  days,
}: Props) {
  const { t, lang } = useI18n();
  const p = t.plan;
  const passes = passOptions(city, samples);
  const customized =
    form.transportMode !== "auto" ||
    form.drinksPerDay !== "" ||
    form.drinkPicks.length > 0 ||
    form.mealsPerDay !== "";
  const autoRides = MODEL.usage.ride[form.style];

  const setMode = (transportMode: TransportMode) =>
    onChange({
      transportMode,
      ...(transportMode === "pass" && !form.passId && passes[0]
        ? { passId: passes[0].id }
        : {}),
    });
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
                        o.adult.sample.nameJa,
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

        <DrinkOptions city={city} samples={samples} form={form} onChange={onChange} errors={errors} />
      </details>
    </section>
  );
}
