import type { ReactNode } from 'react';
import { useI18n } from '../i18n';

/** 외부 출처 링크: 새 창으로 열고(opener 차단), 스크린리더에는 새 창임을 알린다. http(s) 가 아니면 링크로 만들지 않는다. */
export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  const { t } = useI18n();
  if (!/^https?:\/\//i.test(href)) return <span>{children}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ext">
      {children}
      <span className="sr-only"> {t.foods.newWindow}</span>
    </a>
  );
}
