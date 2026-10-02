import { useEffect, useMemo, useState } from 'react';
import { estimateTrip } from '../core/estimate';
import { cityById, cities, foods, samples } from '../data';
import { useI18n } from '../i18n';
import { AttractionPicker } from './AttractionPicker';
import { FoodSection } from './FoodSection';
import { PriceGuide } from './PriceGuide';
import { parseForm, type FormState } from './form';
import { RatesNotice, ResultView } from './ResultView';
import { TripForm } from './TripForm';
import { useRates } from './useRates';
import type { Go } from './App';
import { calcMemory, formToSearch, readForm } from './urlState';

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

export function Calculator({ go }: { go: Go }) {
  const { t, lang } = useI18n();
  const rates = useRates();
  const [form, setForm] = useState<FormState>(() => {
    const fromUrl = readForm(window.location.search, cities.map((c) => c.id));
    const currency = savedCurrency() ?? (lang === 'ko' ? 'KRW' : 'USD');
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
    };
  });
  // 도시를 바꾸면 이전 도시의 관광지 선택은 의미가 없으므로 비운다
  const patch = (p: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...p, ...(p.cityId && p.cityId !== f.cityId ? { attractions: [] } : {}) }));

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
    if (window.location.search !== search) window.history.replaceState({}, '', `/${search}${window.location.hash}`);
  }, [form, lang]);

  const parsed = useMemo(() => parseForm(form), [form]);
  const city = cityById(form.cityId);
  const estimate = useMemo(
    () => (parsed.trip && city ? estimateTrip(parsed.trip, city, samples) : null),
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
        <AttractionPicker
          city={city}
          samples={samples}
          selected={form.attractions}
          onChange={(attractions) => patch({ attractions })}
          display={form.currency}
          rates={rates}
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
            go={go}
          />
          <PriceGuide city={city} samples={samples} display={form.currency} rates={rates} />
          <FoodSection city={city} foods={foods} samples={samples} display={form.currency} rates={rates} />
        </>
      ) : (
        <RatesNotice rates={rates} display={form.currency} />
      )}
    </>
  );
}
