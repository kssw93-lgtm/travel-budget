import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useI18n } from '../i18n';

/**
 * 광고 자리. 실제 Google 광고 코드·계정 ID 는 넣지 않았다(광고를 붙일 때는 이 컴포넌트의 `.ad-slot__content` 안에서만).
 *
 * 상태(data-state)
 * - placeholder: 내용이 없을 때. "광고 영역" 표지만 보이고 작게 고정(레일 160×120, 인라인 320×50 / 728×90).
 * - filled: `.ad-slot__content` 에 노드가 들어오면(React children 또는 광고 스크립트의 직접 삽입) 자동 전환.
 *   레일은 광고 높이만큼 늘어나고 세로로 잘리지 않는다(가로는 160px 를 넘는 부분만 잘라 본문을 침범하지 않음).
 *   인라인은 CLS 방지를 위해 표준 규격 높이를 그대로 유지한다.
 *
 * 위치
 * - rail-left / rail-right: 화면 폭 1200px 이상에서만 보이는 좌우 160px 레일. 본문과 다른 열이라 레일이 길어져도 본문 폭·위치가 그대로다.
 * - inline-results: 1200px 미만에서만 결과 뒤에 보이는 작은 자리 1개.
 * 고정(position: fixed)·sticky·오버레이 광고는 쓰지 않는다.
 */
export type AdSlotName = 'rail-left' | 'rail-right' | 'inline-results';

export function AdSlot({ name, children }: { name: AdSlotName; children?: ReactNode }) {
  const { t } = useI18n();
  const kind = name === 'inline-results' ? 'inline' : 'rail';
  const content = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(Boolean(children));

  // 광고 스크립트가 DOM 에 직접 삽입하는 경우도 감지해 filled 로 바꾼다
  useEffect(() => {
    const el = content.current;
    if (!el) return;
    const update = () => setFilled(el.childElementCount > 0);
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { childList: true });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`ad-slot ${kind}`} data-ad-slot={name} data-state={filled ? 'filled' : 'placeholder'} aria-label={t.ads.label}>
      {!filled && (
        <span className="ad-slot__label" aria-hidden="true">
          {t.ads.label}
        </span>
      )}
      <div className="ad-slot__content" ref={content}>
        {children}
      </div>
    </aside>
  );
}
