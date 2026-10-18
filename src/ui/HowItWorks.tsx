import { useMemo } from 'react';
import { methodExample } from '../core/method';
import { formatMoney } from '../core/money';
import type { Range } from '../core/types';
import { cities, extras, samples } from '../data';
import { LOCALES, useI18n } from '../i18n';
import { InternalLink, type Go } from './App';
import { guideRefDate } from './guide-utils';
import { methodContent } from './method-content';
import { cityName } from './TripForm';

/** 계산 방법(/how-it-works): 가격 자료, 계산 순서, 실제 계산 예시, 한계, 결과가 안 나올 때 */
export function HowItWorks({ go }: { go: Go }) {
  const { t, lang } = useI18n();
  const m = t.method;
  const ex = useMemo(() => methodExample(cities, samples, extras, guideRefDate), []);
  const money = (r: Range) => {
    const cur = ex?.city.currency ?? 'USD';
    const a = formatMoney(Math.round(r.min), cur, LOCALES[lang]);
    const b = formatMoney(Math.round(r.max), cur, LOCALES[lang]);
    return a === b ? a : `${a}~${b}`;
  };
  const c = methodContent(m, { lang, samples: samples.length, cities: cities.length, cityName: ex ? cityName(ex.city, lang) : '', date: guideRefDate, money }, ex);
  return (
    <article className="card prose" data-testid="how-it-works">
      <h1 tabIndex={-1}>{m.title}</h1>
      <p className="lead">{m.lead}</p>
      <h2>{m.srcTitle}</h2>
      {c.srcBody.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h2>{m.stepsTitle}</h2>
      <ol>
        {c.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      {c.example && (
        <section data-testid="method-example">
          <h2>{c.example.title}</h2>
          <p className="hint">{c.example.lead}</p>
          <ul>
            {c.example.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <p>
            <InternalLink className="button" to={c.example.href} go={go}>
              {m.exOpen}
            </InternalLink>
          </p>
        </section>
      )}
      <h2>{m.limitsTitle}</h2>
      <ul>
        {c.limits.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{m.troubleTitle}</h2>
      <ul>
        {c.trouble.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </article>
  );
}
