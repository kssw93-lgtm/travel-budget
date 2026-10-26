import { describe, expect, it } from 'vitest';
import { withSecurityHeaders } from '../../worker/security';

describe('security response headers', () => {
  it('adds the site security policy without dropping response headers or body', async () => {
    const source = new Response('ok', { headers: { 'content-type': 'text/plain', 'cache-control': 'no-store' } });
    const response = withSecurityHeaders(source);

    expect(await response.text()).toBe('ok');
    expect(response.headers.get('content-type')).toBe('text/plain');
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(response.headers.get('strict-transport-security')).toBe('max-age=31536000');
    expect(response.headers.get('x-content-type-options')).toBe('nosniff');
    expect(response.headers.get('content-security-policy')).toContain("default-src 'self'");
  });
});
