type Lang = 'ko' | 'en' | 'ja';

/** Official travel-advisory entry point chosen by the page language.
 * The advisory is issued for that government's own nationals, not a universal rating.
 */
export function travelSafetySource(lang: Lang): { url: string; label: string } {
  if (lang === 'ja') {
    return {
      url: 'https://www.anzen.mofa.go.jp/',
      label: '日本国外務省（日本国籍の方向け）',
    };
  }
  if (lang === 'en') {
    return {
      url: 'https://travel.state.gov/en/international-travel/travel-advisories.html',
      label: 'U.S. Department of State (for U.S. citizens)',
    };
  }
  return {
    url: 'https://www.0404.go.kr/',
    label: '대한민국 외교부 (대한민국 국민 대상)',
  };
}
