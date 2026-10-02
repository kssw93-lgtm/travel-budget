import { useI18n } from '../i18n';

export type AdSlotName = 'after-form' | 'after-results' | 'after-food';

/**
 * 광고 자리표시. 실제 Google 광고 코드는 광고 ID를 받은 뒤 이 컴포넌트 안에서만 추가한다.
 * 자리를 미리 확보해 광고가 들어와도 레이아웃이 밀리지 않게 한다.
 */
export function AdSlot({ name }: { name: AdSlotName }) {
  const { t } = useI18n();
  return (
    <aside className="ad-slot" data-ad-slot={name} aria-label={t.ads.label}>
      <span>{t.ads.label}</span>
    </aside>
  );
}
