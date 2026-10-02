import { fmt, useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { contactEmail } from './pages';

/** 문단 안의 http(s) 주소는 외부 링크로 바꾼다 */
function Para({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return <p>{parts.map((p, i) => (/^https?:\/\//.test(p) ? <ExternalLink key={i} href={p}>{p}</ExternalLink> : p))}</p>;
}

function Contact() {
  const { t } = useI18n();
  return contactEmail ? (
    <p data-testid="contact">
      {t.info.contactLabel} <span className="selectable">{contactEmail}</span>
    </p>
  ) : (
    <p className="muted" data-testid="contact">{t.info.contactPending}</p>
  );
}

export function About() {
  const { t } = useI18n();
  const a = t.about;
  return (
    <article className="card prose" data-testid="about">
      <h1 tabIndex={-1}>{a.title}</h1>
      <p className="lead">{a.lead}</p>
      {a.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.body.map((b) => (
            <Para key={b} text={b} />
          ))}
        </section>
      ))}
      <h2>{t.info.contactTitle}</h2>
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
      <p className="muted">{fmt(p.effective, { date: '2026-10-02' })}</p>
      <p className="lead">{p.lead}</p>
      {p.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.body.map((b) => (
            <Para key={b} text={b} />
          ))}
        </section>
      ))}
      <h2>{t.info.contactTitle}</h2>
      <Contact />
    </article>
  );
}
