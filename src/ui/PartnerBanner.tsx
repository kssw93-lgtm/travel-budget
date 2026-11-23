import { useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { hasCitySpecificPartnerLink, tripPartnerLink, type PartnerLinkKind } from '../data/partner-links';

const bannerLinks: PartnerLinkKind[] = ['flight', 'hotel'];

export function PartnerBanner({ cityId }: { cityId: string }) {
  const { t, lang } = useI18n();
  const hotelHint = hasCitySpecificPartnerLink('hotel', cityId) ? t.partners.hints.hotelCity : t.partners.hints.hotel;
  return (
    <section className="card partner-banner" aria-labelledby="partner-banner-title" data-testid="partner-banner">
      <div className="partner-banner-brand" aria-hidden="true">Trip.com</div>
      <div className="partner-banner-copy">
        <h2 id="partner-banner-title">{t.partners.bannerTitle}</h2>
        <p>{t.partners.bannerDescription}</p>
      </div>
      <nav className="partner-banner-actions" aria-label={t.partners.bannerTitle}>
        {bannerLinks.map((kind) => (
          <div key={kind} className="partner-banner-option">
            <ExternalLink href={tripPartnerLink(lang, kind, cityId)} className="partner-link-action" rel="sponsored">
              {t.partners[kind]}
            </ExternalLink>
            <small className="partner-link-context">{kind === 'hotel' ? hotelHint : t.partners.hints.flight}</small>
          </div>
        ))}
      </nav>
      <p className="muted partner-link-disclosure">{t.partners.disclosure}</p>
    </section>
  );
}
