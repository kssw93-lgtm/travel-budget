import { useState } from 'react';
import { useI18n } from '../i18n';

/**
 * 결과 공유: 지금 주소(입력값이 모두 쿼리에 들어 있음)를 그대로 공유한다.
 * 휴대폰 등 공유 창을 지원하면 공유 창을, 아니면 클립보드 복사를 쓴다.
 */
export function ShareButton({ text }: { text: string }) {
  const { t } = useI18n();
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const onClick = async () => {
    const url = window.location.href;
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: document.title, text, url });
        return;
      } catch (err) {
        // 사용자가 공유 창을 닫은 경우는 그냥 끝낸다
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setState('copied');
    } catch {
      setState('failed');
    }
  };
  return (
    <div className="share">
      <button type="button" className="share-button" onClick={onClick} data-testid="share">
        {t.result.share}
      </button>
      <span role="status" className="share-status">
        {state === 'copied' ? t.result.shareCopied : state === 'failed' ? t.result.shareFailed : ''}
      </span>
    </div>
  );
}
