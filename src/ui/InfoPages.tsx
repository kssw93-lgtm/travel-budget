import { fmt, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { contactEmail } from './pages';
import { PRIVACY_EFFECTIVE } from './policy';
import { cities } from '../data';
import { cityName } from './TripForm';

/** 문단 안의 http(s) 주소는 외부 링크로 바꾼다 */
function Para({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return <p>{parts.map((p, i) => (/^https?:\/\//.test(p) ? <ExternalLink key={i} href={p}>{p}</ExternalLink> : p))}</p>;
}

/** 문의 이메일은 선택. 없으면 문의 절 자체를 두지 않는다("준비 중" 문구는 미완성 사이트처럼 보인다) */
function Contact() {
  const { t } = useI18n();
  if (!contactEmail) return null;
  return (
    <>
      <h2>{t.info.contactTitle}</h2>
      <p data-testid="contact">
        {t.info.contactLabel} <span className="selectable">{contactEmail}</span>
      </p>
    </>
  );
}

export function About() {
  const { t, lang } = useI18n();
  const list = cities.map((c) => cityName(c, lang)).join({ ko: '·', ja: '・', en: ', ' }[lang]);
  const a = t.about;
  return (
    <article className="card prose" data-testid="about">
      <h1 tabIndex={-1}>{a.title}</h1>
      <p className="lead">{a.lead}</p>
      {a.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.body.map((b) => (
            <Para key={b} text={fmt(b, { cities: list, n: cities.length })} />
          ))}
        </section>
      ))}
      <Contact />
    </article>
  );
}

export function Privacy() {
  const { t } = useI18n();
  const p = t.privacy;
  return (
    <article className="card prose" data-testid="privacy">
      <h1 tabIndex={-1}>{p.title}</h1>
      <p className="muted">{fmt(p.effective, { date: PRIVACY_EFFECTIVE })}</p>
      <p className="lead">{p.lead}</p>
      {p.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.body.map((b) => (
            <Para key={b} text={b} />
          ))}
        </section>
      ))}
      <Contact />
    </article>
  );
}
