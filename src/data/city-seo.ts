type Lang = 'ko' | 'en' | 'ja';

type CitySeoCopy = { title: string; description: string };

/** Search Console 우선 페이지용으로, 실제 페이지에서 제공하는 비용 정보를 짧게 설명한다. */
export const CITY_SEO_COPY: Record<string, Partial<Record<Lang, CitySeoCopy>>> = {
  'kota-kinabalu': {
    ko: {
      title: '{city} 물가·여행 경비 | 식비·교통·관광지 가격',
      description: '{city}의 식사·커피·대중교통·관광지 입장료 사례와 1일 현지 경비를 확인하세요. 공항에서 시내로 가는 길과 터미널 탑승 위치도도 볼 수 있습니다.',
    },
    en: {
      title: '{city} Travel Costs | Food, Transport & Attractions',
      description: 'Check meal, coffee, local transport and attraction prices in {city}, estimate a daily budget, and open the airport terminal map for boarding information.',
    },
    ja: {
      title: '{city}の物価・旅行費用｜食事・交通・観光料金',
      description: '{city}の食事・コーヒー・市内交通・観光施設の料金例と1日の現地予算を確認。空港から市内への移動案内とターミナル図も見られます。',
    },
  },
  florence: {
    ko: {
      title: '{city} 물가·여행 경비 | 식비와 관광 입장료',
      description: '{city} 여행 경비를 짤 때 필요한 식사·커피·교통·관광지 가격 사례와 1일 현지 경비를 확인하세요.',
    },
    en: {
      title: '{city} Travel Costs | Meals, Transit & Sight Tickets',
      description: 'Plan a {city} budget with local meal, coffee, transit and attraction price examples, plus a daily on-the-ground estimate.',
    },
    ja: {
      title: '{city}の物価・旅行費用｜食事・交通・観光料金',
      description: '{city}旅行の計画に役立つ食事・コーヒー・交通・観光施設の料金例と、1日の現地予算を確認できます。',
    },
  },
  manchester: {
    ko: {
      title: '{city} 물가·여행 경비 | 놀거리와 관광 비용',
      description: '{city} 식비·교통비·관광지 가격 사례와 여행 경비를 확인하세요. 축구 경기장과 박물관 등 가볼 곳을 일정에 맞춰 살펴볼 수 있습니다.',
    },
    en: {
      title: '{city} Travel Costs | Attractions & Daily Budget',
      description: 'Explore meal, transit and attraction prices in {city}, see places to visit, and estimate your daily travel budget.',
    },
    ja: {
      title: '{city}の物価・旅行費用｜観光スポットと予算',
      description: '{city}の食事・交通・観光施設の料金例や見どころを確認し、旅行日程に合わせた1日の現地予算を試算できます。',
    },
  },
  edinburgh: {
    ko: {
      title: '{city} 여행 경비·물가 | 축제 시기와 관광 비용',
      description: '{city}의 식사·교통·관광지 가격과 여행 경비를 확인하세요. 축제 기간과 계절별 여행 정보를 보고 일정을 계획할 수 있습니다.',
    },
    en: {
      title: '{city} Travel Costs | Festival Seasons & Attractions',
      description: 'Plan an {city} trip with local meal, transit and attraction prices, a daily budget estimate, and seasonal festival guidance.',
    },
    ja: {
      title: '{city}旅行の費用・物価｜祭りの時期と観光料金',
      description: '{city}の食事・交通・観光施設の料金例と1日の現地予算を確認。祭りの時期や季節情報を見ながら旅行を計画できます。',
    },
  },
  ulaanbaatar: {
    ko: {
      title: '{city} 여행 경비 | 몽골 5박 6일·겨울 여행 예산',
      description: '{city} 여행의 식사·교통·관광 비용 사례를 살펴보고 여행 기간과 인원에 맞춰 현지 경비를 계산하세요. 겨울 방문 팁도 확인할 수 있습니다.',
    },
    en: {
      title: '{city} Travel Costs | Daily Budget & Winter Tips',
      description: 'Estimate local food, transport and attraction costs in {city} for your trip length, then review practical winter travel guidance.',
    },
    ja: {
      title: '{city}旅行の費用｜1日の予算と冬の旅行情報',
      description: '{city}の食事・交通・観光費用の例を確認し、日数や人数に合わせて現地予算を試算。冬の旅行情報も見られます。',
    },
  },
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
