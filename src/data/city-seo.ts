type Lang = 'ko' | 'en' | 'ja';

type CitySeoCopy = { title: string; description: string };

/** Search Console 우선 페이지용으로, 실제 페이지에서 제공하는 비용 정보를 짧게 설명한다. */
export const CITY_SEO_COPY: Record<string, Partial<Record<Lang, CitySeoCopy>>> = {
  gangneung: {
    ko: {
      title: '{city} 여행 경비 계산 | 식사·교통·관광 입장료',
      description: '{city} 여행의 식사·커피·교통·관광지 입장료를 확인하고, 일정과 인원에 맞는 현지 경비를 계산해 보세요.',
    },
  },
  saipan: {
    en: {
      title: '{city} Travel Costs | Daily Budget Calculator',
      description: 'See meal, transit and attraction prices in {city}, then estimate local costs for your dates and travel style. Add flights and lodging if you want them included.',
    },
  },
  boston: {
    ja: {
      title: '{city}旅行費用｜食事・交通・観光の予算',
      description: '{city}旅行で使う食事・交通・観光施設の料金例を確認。日程や人数に合わせて、現地で必要な費用の目安を試算できます。',
    },
  },
  tongyeong: {
    ko: {
      title: '{city} 여행 경비 계산 | 식사·교통·관광 입장료',
      description: '{city} 여행에서 자주 드는 식사·커피·교통·관광지 입장료를 살펴보고 일정에 맞는 현지 경비를 계산해 보세요.',
    },
  },
  'san-antonio': {
    en: {
      title: '{city} Travel Costs | Daily Budget Calculator',
      description: 'Explore meal, transit and attraction prices in {city}, then estimate local costs for your dates and travel style.',
    },
  },
  gyeongju: {
    ko: {
      title: '{city} 여행 경비 계산 | 식사·교통·관광 입장료',
      description: '{city} 여행의 식사·커피·교통·관광지 입장료 예시를 보고 일정과 인원에 맞는 현지 경비를 계산해 보세요.',
    },
  },
};

export function citySeoCopy(cityId: string, lang: Lang): CitySeoCopy | undefined {
  return CITY_SEO_COPY[cityId]?.[lang];
}
