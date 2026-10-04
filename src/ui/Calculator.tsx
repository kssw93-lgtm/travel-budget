import { useEffect, useMemo, useState } from 'react';
import { estimateTrip } from '../core/estimate';
import { cityById, cities, extras, foods, memos, samples } from '../data';
import { DEFAULT_CURRENCY, useI18n } from '../i18n';
import { AttractionPicker } from './AttractionPicker';
import { CityMemos } from './CityMemos';
import { ExtrasPicker } from './ExtrasPicker';
import { FoodSection } from './FoodSection';
import { PlanOptions } from './PlanOptions';
import { PriceGuide } from './PriceGuide';
import { parseForm, type FormState } from './form';
import { RatesNotice, ResultView } from './ResultView';
import { TripForm } from './TripForm';
import { useRates } from './useRates';
import { calcMemory, formToSearch, readForm } from './urlState';
import { currentLoc, replaceLoc } from './router';

const today = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

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
      cityId: cities[0]?.id ?? '',
      visitDate: today(),
      nights: '3',
      adults: '2',
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
      airport: fromUrl.airport ?? '',
      airportTrips: fromUrl.airportTrips ?? '2',
      rental: fromUrl.rental ?? '',
      rentalDays: fromUrl.rentalDays ?? '',
      transportMode: fromUrl.transportMode ?? 'auto',
      ridesPerDay: fromUrl.ridesPerDay ?? '3',
      transitDays: fromUrl.transitDays ?? '',
      passId: fromUrl.passId ?? '',
      mealsPerDay: fromUrl.mealsPerDay ?? '',
      mustEat: fromUrl.mustEat ?? [],
      drinksPerDay: fromUrl.drinksPerDay ?? '',
      drinkPicks: fromUrl.drinkPicks ?? [],
    };
  });
  // 도시를 바꾸면 이전 도시의 관광지·공항 이동·렌터카 선택은 의미가 없으므로 비운다
  const patch = (p: Partial<FormState>) =>
    setForm((f) => ({
      ...f,
      ...p,
      ...(p.cityId && p.cityId !== f.cityId
        ? { attractions: [], airport: '', airportTrips: '2' as const, rental: '', rentalDays: '', passId: '', mustEat: [], drinkPicks: [], ...(f.transportMode === 'pass' ? { transportMode: 'auto' as const } : {}) }
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
    () => (parsed.trip && city ? estimateTrip(parsed.trip, city, samples, extras) : null),
    [parsed.trip, city],
  );

  return (
    <>
      <section className="hero">
        <h1 tabIndex={-1}>{t.home.title}</h1>
        <p>{t.home.lead}</p>
      </section>
      <TripForm form={form} onChange={patch} errors={parsed.errors} cities={cities} rates={rates.status === 'ok' ? rates.data : null} />
      {city && (
        <PlanOptions
          city={city}
          samples={samples}
          foods={foods}
          form={form}
          onChange={patch}
          errors={parsed.errors}
          days={parsed.trip ? parsed.trip.nights + 1 : (Number(form.nights) || 0) + 1}
        />
      )}
      {city && (
        <AttractionPicker
          city={city}
          samples={samples}
          selected={form.attractions}
          onChange={(attractions) => patch({ attractions })}
          display={form.currency}
          rates={rates}
          adults={parsed.trip?.adults ?? 0}
          children={parsed.trip?.children ?? 0}
        />
      )}
      {city && (
        <ExtrasPicker
          city={city}
          extras={extras}
          form={form}
          onChange={patch}
          display={form.currency}
          rates={rates}
          nights={parsed.trip?.nights ?? (Number(form.nights) || 1)}
          errors={parsed.errors}
        />
      )}
      {estimate && parsed.trip && city ? (
        <>
          <ResultView
            estimate={estimate}
            trip={parsed.trip}
            city={city}
            display={form.currency}
            rates={rates}
            samples={samples}
            direct={{ ...parsed.direct, currency: form.directCurrency }}
          />
          <PriceGuide city={city} samples={samples} display={form.currency} rates={rates} />
          <CityMemos city={city} memos={memos} />
          <FoodSection city={city} foods={foods} samples={samples} display={form.currency} rates={rates} />
        </>
      ) : (
        <RatesNotice rates={rates} display={form.currency} />
      )}
    </>
  );
}
