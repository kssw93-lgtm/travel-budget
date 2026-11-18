import { useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { tripPartnerLink } from '../data/partner-links';

export function PartnerBanner() {
  const { t, lang } = useI18n();
  return (
    <section className="card partner-banner" aria-labelledby="partner-banner-title" data-testid="partner-banner">
      <div className="partner-banner-brand" aria-hidden="true">Trip.com</div>
      <div className="partner-banner-copy">
        <h2 id="partner-banner-title">{t.partners.bannerTitle}</h2>
        <p>{t.partners.bannerDescription}</p>
      </div>
      <ExternalLink href={tripPartnerLink(lang, 'flightHotel')} className="partner-link-action partner-banner-cta" rel="sponsored">
        {t.partners.flightHotel}
      </ExternalLink>
      <p className="muted partner-link-disclosure">{t.partners.disclosure}</p>
    </section>
  );
}
