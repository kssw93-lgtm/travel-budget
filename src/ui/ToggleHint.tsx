import { fmt, useI18n } from '../i18n';

/** 접히는 카드의 머리글에 붙는 "눌러서 열기/접기" 표시. 열림 여부는 CSS(details[open])로 바꾼다 */
export function ToggleHint({ count }: { count?: number }) {
  const { t } = useI18n();
  return (
    <span className="toggle-hint" aria-hidden="true">
      <span className="when-closed">▾ {count !== undefined ? fmt(t.toggle.openCount, { n: count }) : t.toggle.open}</span>
      <span className="when-open">▴ {t.toggle.close}</span>
    </span>
  );
}
