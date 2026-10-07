import type { City, CityMemo } from '../core/types';
import { fmt, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { cityName } from './TripForm';

/** 도시 메모(팁 관행·숙박세·입국 수수료·eSIM 등). 계산에 넣지 않는 안내. 메모가 없으면 그리지 않는다 */
export function CityMemos({ city, memos }: { city: City; memos: CityMemo[] }) {
  const { t, lang } = useI18n();
  const rows = memos.filter((m) => m.cityId === city.id);
  if (rows.length === 0) return null;
  const m = t.memos;
  return (
    <section className="card memos" aria-labelledby="memos-title" data-testid="city-memos">
      <h2 id="memos-title">{fmt(m.title, { city: cityName(city, lang) })}</h2>
      <p className="hint">{m.lead}</p>
      <table className="guide-table stack">
        <thead>
          <tr>
            <th scope="col">{m.item}</th>
            <th scope="col">{m.value}</th>
            <th scope="col">{m.source}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={`${r.item}${i}`}>
              <th scope="row">{(lang !== 'ko' && r.itemEn) || r.item}</th>
              <td data-label={m.value}>
                {(lang !== 'ko' && r.valueEn) || r.value}
                {r.unit ? ` ${r.unit}` : ''}
              </td>
              <td data-label={m.source}>
                <ExternalLink href={r.sourceUrl}>{r.sourceName || new URL(r.sourceUrl).hostname}</ExternalLink>{' '}
                <small className="muted">{r.checkedAt}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
