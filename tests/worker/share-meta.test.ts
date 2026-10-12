import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { shareMeta } from '../../worker/share-meta';
import cities from '../../src/data/generated/cities.json';
import type { City } from '../../src/core/types';
import { CITY_JA } from '../../src/i18n/places';

const html = readFileSync('index.html', 'utf8');
const list = cities as City[];
const meta = (out: string, key: string) => out.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"`))?.[1];

describe('공유 링크 미리보기(제목·설명)', () => {
  it('도시·일정·인원이 있으면 제목·설명에 넣는다', () => {
    const out = shareMeta(html, new URL('https://x.dev/?city=tokyo&nights=3&adults=2&lang=ko'), list, CITY_JA);
    expect(out).toContain('<title>도쿄 4일 여행 경비 계산 — 여행 경비 계산기</title>');
    expect(meta(out, 'og:title')).toBe('도쿄 4일 여행 경비 계산 — 여행 경비 계산기');
    expect(meta(out, 'twitter:title')).toBe(meta(out, 'og:title'));
    expect(meta(out, 'og:description')).toContain('도쿄 4일(3박) · 성인 2명');
    expect(meta(out, 'description')).toBe(meta(out, 'og:description'));
  });
  it('영어·일본어 링크는 그 언어로', () => {
    expect(meta(shareMeta(html, new URL('https://x.dev/?city=osaka&nights=2&lang=en'), list, CITY_JA), 'og:title')).toBe('Osaka 3-day trip budget — Travel Budget Calculator');
    expect(meta(shareMeta(html, new URL('https://x.dev/?city=osaka&lang=ja'), list, CITY_JA), 'og:title')).toBe('大阪の旅行費用 — 旅行費用計算機');
  });
  it('도시가 없거나 숨김·모르는 도시면 원본 그대로', () => {
    expect(shareMeta(html, new URL('https://x.dev/'), list)).toBe(html);
    expect(shareMeta(html, new URL('https://x.dev/?city=nowhere'), list)).toBe(html);
    const hidden = list.find((c) => c.stage !== '파일럿');
    if (hidden) expect(shareMeta(html, new URL(`https://x.dev/?city=${hidden.id}`), list)).toBe(html);
  });
  it('이상한 값은 넣지 않는다', () => {
    const out = shareMeta(html, new URL('https://x.dev/?city=tokyo&nights=%3Cscript%3E&adults=999'), list, CITY_JA);
    expect(meta(out, 'og:title')).toBe('도쿄 여행 경비 계산 — 여행 경비 계산기');
    expect(out).not.toContain('<script>');
  });
});
