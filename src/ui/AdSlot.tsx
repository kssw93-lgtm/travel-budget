import { useI18n } from '../i18n';

/**
 * 광고 자리(표지만 있음). 실제 Google 광고 코드·계정 ID 는 넣지 않았다. 광고를 붙일 때는 이 컴포넌트 안에서만 추가한다.
 * - rail-left / rail-right: 화면 폭 1200px 이상에서만 보이는 좌우 160px 레일(본문과 다른 열이라 광고가 커져도 본문이 밀리지 않음)
 * - inline-results: 1200px 미만에서만 결과 뒤에 보이는 작은 반응형 자리 1개(높이 고정 → CLS 없음)
 * 고정(position: fixed)·오버레이 광고는 쓰지 않는다.
 */
export type AdSlotName = 'rail-left' | 'rail-right' | 'inline-results';

export function AdSlot({ name }: { name: AdSlotName }) {
  const { t } = useI18n();
  const kind = name === 'inline-results' ? 'inline' : 'rail';
  return (
    <aside className={`ad-slot ${kind}`} data-ad-slot={name} aria-label={t.ads.label}>
      <span>{t.ads.label}</span>
    </aside>
  );
}
