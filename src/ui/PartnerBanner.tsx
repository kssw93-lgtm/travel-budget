import { useState } from 'react';
import { tripPartnerBanner } from '../data/partner-banners';
import { useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';
import { tripPartnerLink } from '../data/partner-links';

export function PartnerBanner() {
  const { t, lang } = useI18n();
  const [showBanner, setShowBanner] = useState(false);
  return (
    <section className="card partner-banner" aria-labelledby="partner-banner-title" data-testid="partner-banner">
      <h2 id="partner-banner-title">{t.partners.bannerTitle}</h2>
      <p className="muted partner-link-disclosure">{t.partners.disclosure}</p>
      <div className="partner-banner-actions">
        <ExternalLink href={tripPartnerLink(lang, 'flightHotel')} className="partner-link-action" rel="sponsored">
          {t.partners.flightHotel}
        </ExternalLink>
        <button type="button" className="partner-link-action" aria-expanded={showBanner} aria-controls="trip-partner-banner-frame" onClick={() => setShowBanner((visible) => !visible)}>
          {showBanner ? t.partners.bannerHide : t.partners.bannerToggle}
        </button>
      </div>
      {showBanner && (
        <iframe
          id="trip-partner-banner-frame"
          title={t.partners.bannerTitle}
          src={tripPartnerBanner(lang)}
          width="300"
          height="250"
          loading="lazy"
          scrolling="no"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </section>
  );
}
