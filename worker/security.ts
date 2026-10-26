const SECURITY_HEADERS: ReadonlyArray<readonly [string, string]> = [
  ['Strict-Transport-Security', 'max-age=31536000'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()'],
  ['X-Frame-Options', 'SAMEORIGIN'],
  [
    'Content-Security-Policy',
    "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://upload.wikimedia.org; font-src 'self' data:; connect-src 'self'; upgrade-insecure-requests",
  ],
];

/** Worker가 직접 만든 API·redirect 응답에도 사이트 보안 헤더를 일관되게 붙인다. */
export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of SECURITY_HEADERS) headers.set(name, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
