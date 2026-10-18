import { useEffect, useMemo, useState } from 'react';
import { estimateTrip } from '../core/estimate';
import type { ExtraSample, FoodRecommendation, PriceSample } from '../core/types';
import { cityById, cities, upcomingCities } from '../data/catalog';
import { DEFAULT_CURRENCY, useI18n } from '../i18n';
import { AttractionPicker } from './AttractionPicker';
import { ExtrasPicker } from './ExtrasPicker';
import { FoodSection } from './FoodSection';
import { PlanOptions } from './PlanOptions';
import { parseForm, type FormState } from './form';
import { RatesNotice, ResultView } from './ResultView';
import { TripForm } from './TripForm';
import { useRates } from './useRates';
import { calcMemory, formToSearch, readForm } from './urlState';
import { currentLoc, replaceLoc } from './router';

function savedCurrency(): string | null {
  try {
    return localStorage.getItem('currency');
  } catch {
    return null;
  }
}

export function Calculator() {
  const { t, lang } = useI18n();
  const rates = useRates();
  const [form, setForm] = useState<FormState>(() => {
    const fromUrl = readForm(currentLoc().search, cities.map((c) => c.id));
    const currency = savedCurrency() ?? DEFAULT_CURRENCY[lang];
    return {
      // 첫 화면은 아무 도시·일정도 미리 고르지 않는다(사용자가 직접 고른다)
      cityId: '',
      visitDate: '',
      nights: '',
      adults: '',
      children: '0',
      style: 'standard',
      currency,
      flight: '',
      lodging: '',
      directCurrency: currency,
      // URL 에 담긴 입력이 있으면 그것을 우선한다(새로고침·공유 링크)
      ...fromUrl,
      attractions: fromUrl.attractions ?? [],
      drinks: fromUrl.drinks ?? false,
      shopping: fromUrl.shopping ?? false,
      shoppingAmount: fromUrl.shoppingAmount ?? '',
      airport: fromUrl.airport ?? '',
      airportTrips: fromUrl.airportTrips ?? '2',
      rental: fromUrl.rental ?? '',
      rentalDays: fromUrl.rentalDays ?? '',
      transportMode: fromUrl.transportMode ?? 'auto',
      ridesPerDay: fromUrl.ridesPerDay ?? '3',
      transitDays: fromUrl.transitDays ?? '',
      passId: fromUrl.passId ?? '',
      mealsPerDay: fromUrl.mealsPerDay ?? '',
      drinksPerDay: fromUrl.drinksPerDay ?? '',
      drinkPicks: fromUrl.drinkPicks ?? [],
    };
  });
  const [priceData, setPriceData] = useState<{ extras: ExtraSample[]; foods: FoodRecommendation[]; samples: PriceSample[] } | null>(null);
  const [priceDataError, setPriceDataError] = useState(false);

  // 첫 화면에는 무거운 가격 JSON을 받지 않고, 사용자가 도시를 고른 뒤 한 번 불러온다.
  useEffect(() => {
    if (!form.cityId || priceData) return;
    let active = true;
    import('../data/calculator')
      .then(({ calculatorData }) => {
        if (active) {
          setPriceData(calculatorData);
          setPriceDataError(false);
        }
      })
      .catch(() => {
        if (active) setPriceDataError(true);
      });
    return () => {
      active = false;
    };
  }, [form.cityId, priceData]);
  // 도시를 바꾸면 이전 도시의 관광지·공항 이동·렌터카 선택은 의미가 없으므로 비운다
  const patch = (p: Partial<FormState>) =>
    setForm((f) => ({
      ...f,
      ...p,
      ...(p.cityId && p.cityId !== f.cityId
        ? { attractions: [], airport: '', airportTrips: '2' as const, rental: '', rentalDays: '', passId: '', drinkPicks: [], ...(f.transportMode === 'pass' ? { transportMode: 'auto' as const } : {}) }
        : {}),
    }));

  // 표시 통화를 고르면 기억해 둔다(언어와 독립)
  useEffect(() => {
    try {
      localStorage.setItem('currency', form.currency);
    } catch {
      /* 저장소를 못 쓰는 환경 */
    }
  }, [form.currency]);

  // 입력이 바뀔 때마다 URL 을 갱신(기록은 쌓지 않음)
  useEffect(() => {
    const search = formToSearch(form, lang);
    calcMemory.search = search;
    const loc = currentLoc();
    if (loc.search !== search) replaceLoc(`/${search}${loc.hash}`);
  }, [form, lang]);

  const parsed = useMemo(() => parseForm(form), [form]);
  const city = cityById(form.cityId);
  const estimate = useMemo(
    () => (parsed.trip && city && priceData ? estimateTrip(parsed.trip, city, priceData.samples, priceData.extras) : null),
    [parsed.trip, city, priceData],
  );

  return (
    <>
      <section className="hero">
        <h1 tabIndex={-1}>{t.home.title}</h1>
        <p>{t.home.lead}</p>
      </section>
      <TripForm form={form} onChange={patch} errors={parsed.errors} cities={cities} upcoming={upcomingCities} rates={rates.status === 'ok' ? rates.data : null} />
      {city && !priceData && !priceDataError && <p className="card" role="status">{t.home.loadingData}</p>}
      {city && priceDataError && <p className="card" role="alert">{t.home.dataLoadError}</p>}
      {city && priceData && (
        <PlanOptions
          city={city}
          samples={priceData.samples}
          form={form}
          onChange={patch}
          errors={parsed.errors}
          days={parsed.trip ? parsed.trip.nights + 1 : (Number(form.nights) || 0) + 1}
        />
      )}
      {city && priceData && (
        <AttractionPicker
          city={city}
          samples={priceData.samples}
          selected={form.attractions}
          onChange={(attractions) => patch({ attractions })}
          display={form.currency}
          rates={rates}
          adults={parsed.trip?.adults ?? 0}
          children={parsed.trip?.children ?? 0}
        />
      )}
      {city && priceData && (
        <ExtrasPicker
          city={city}
          extras={priceData.extras}
          form={form}
          onChange={patch}
          display={form.currency}
          rates={rates}
          nights={parsed.trip?.nights ?? (Number(form.nights) || 1)}
          errors={parsed.errors}
        />
      )}
      {estimate && parsed.trip && city && priceData ? (
        <>
          <ResultView
            estimate={estimate}
            trip={parsed.trip}
            city={city}
            display={form.currency}
            rates={rates}
            samples={priceData.samples}
            direct={{ ...parsed.direct, currency: form.directCurrency }}
            shopping={parsed.shopping}
          />
          <FoodSection city={city} foods={priceData.foods} />
        </>
      ) : (
        <>
          {!parsed.trip || !city ? (
            <p className="card start-hint" data-testid="start-hint">
              {t.home.startHint}
            </p>
          ) : null}
          <RatesNotice rates={rates} display={form.currency} />
        </>
      )}
    </>
  );
}
