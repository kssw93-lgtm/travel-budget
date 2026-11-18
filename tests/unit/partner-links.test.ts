import { describe, expect, it } from 'vitest';
import { tripPartnerLink } from '../../src/data/partner-links';

describe('Trip.com 숙소 제휴 링크', () => {
  it.each([
    ['tokyo', 'tokyo-hotels-list-228'],
    ['london', 'london-hotels-list-338'],
    ['paris', 'paris-hotels-list-192'],
    ['bangkok', 'bangkok-hotels-list-359'],
  ])('%s 목적지 링크에 발급된 추적 정보가 유지된다', (cityId, slug) => {
    for (const lang of ['ko', 'en', 'ja'] as const) {
      const url = new URL(tripPartnerLink(lang, 'hotel', cityId));
      expect(url.pathname).toContain(slug);
      expect(url.searchParams.get('Allianceid')).toBe('11407425');
      expect(url.searchParams.get('SID')).toBe('336341650');
      expect(url.searchParams.get('trip_sub1')).toContain(`howmuchthere_${cityId}_hotel`);
      expect(url.searchParams.get('trip_sub3')).toBe('D21288913');
    }
  });

  it('도시별 링크가 없는 경우 기존 일반 검색 링크를 사용한다', () => {
    expect(tripPartnerLink('ko', 'hotel', 'rome')).toBe(tripPartnerLink('ko', 'hotel'));
  });

  it('숙소 이외 상품 링크는 도시 지정에 따라 바뀌지 않는다', () => {
    expect(tripPartnerLink('ja', 'tours', 'tokyo')).toBe(tripPartnerLink('ja', 'tours'));
  });
});
