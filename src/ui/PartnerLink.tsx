import { tripPartnerLink, type PartnerLinkKind } from '../data/partner-links';
import { useI18n } from '../i18n';
import { ExternalLink } from './ExternalLink';

export function PartnerLink({ kind, cityId }: { kind: PartnerLinkKind; cityId?: string }) {
  const { t, lang } = useI18n();
  return (
    <aside className="partner-link" data-testid={`partner-${kind}`}>
      <ExternalLink href={tripPartnerLink(lang, kind, cityId)} className="partner-link-action" rel="sponsored">
        {t.partners[kind]}
      </ExternalLink>
      <small className="muted partner-link-disclosure">{t.partners.disclosure}</small>
    </aside>
  );
}
