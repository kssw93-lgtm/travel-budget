import { useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { tripPartnerLink, type PartnerLinkKind } from '../data/partner-links';

const bannerLinks: PartnerLinkKind[] = ['flight', 'hotel', 'train', 'tours', 'flightHotel'];

export function PartnerBanner({ cityId }: { cityId?: string }) {
  const { t, lang } = useI18n();
  return (
    <section className="card partner-banner" aria-labelledby="partner-banner-title" data-testid="partner-banner">
      <div className="partner-banner-brand" aria-hidden="true">Trip.com</div>
      <div className="partner-banner-copy">
        <h2 id="partner-banner-title">{t.partners.bannerTitle}</h2>
        <p>{t.partners.bannerDescription}</p>
      </div>
      <nav className="partner-banner-actions" aria-label={t.partners.bannerTitle}>
        {bannerLinks.map((kind) => (
          <ExternalLink key={kind} href={tripPartnerLink(lang, kind, cityId)} className="partner-link-action" rel="sponsored">
            {t.partners[kind]}
          </ExternalLink>
        ))}
      </nav>
      <p className="muted partner-link-disclosure">{t.partners.disclosure}</p>
    </section>
  );
}
