/** 새 나라 파일럿 가이드 초안. 공식 도시 관광청 자료로 작성; 요금 자료 확인 전까지 도시는 비공개. */
import type { Intro } from './city-intros-1';

export const INTROS_7: Record<string, Intro> = {
  oslo: {
    o: ['오슬로는 피오르와 숲이 도시 가까이 이어지고, 오페라하우스와 비겔란 조각공원 같은 명소를 대중교통과 도보로 묶기 좋습니다. 시내 중심 숙소를 잡으면 주요 미술관과 항구 산책로를 오가기 편합니다.', 'Oslo brings the fjord and forests close to the city, with landmarks such as the Opera House and Vigeland Sculpture Park easy to combine by public transport and on foot. A central stay works well for museums and the harbour promenade.', 'オスロはフィヨルドや森が街の近くにあり、オペラハウスやヴィーゲラン彫刻公園などを公共交通と徒歩で巡りやすい街です。中心部に泊まると美術館や港の遊歩道へ移動しやすくなります。'],
    d: [2, 3],
    s: [
      ['중앙역·비외르비카', 'Oslo Central Station / Bjørvika', 'オスロ中央駅・ビョルヴィカ', '공항 열차와 시내 대중교통을 이용하기 쉽고, 오페라하우스와 뭉크 미술관이 가깝습니다.', 'Convenient for airport trains and city transit, with the Opera House and MUNCH nearby.', '空港列車や市内交通を使いやすく、オペラハウスやムンク美術館にも近いエリアです。'],
      ['그뤼네뢰카', 'Grünerløkka', 'グリューネルロッカ', '카페·식당과 빈티지 상점이 모인 동네로, 트램을 타고 중심부에 갈 수 있습니다.', 'A café, restaurant and vintage-shopping district with tram links to the centre.', 'カフェや飲食店、ヴィンテージショップが集まり、トラムで中心部へ出られます。'],
    ],
  },
  'cape-town': {
    o: ['케이프타운은 테이블마운틴과 대서양 해안, 역사 명소가 함께 있어 자연과 도시 일정을 섞기 좋은 남아프리카공화국의 항구 도시입니다. 날씨와 산악·해안 안전 정보를 확인하며 하루 동선을 계획하세요.', 'Cape Town pairs Table Mountain and the Atlantic coast with major historical sights, making it easy to mix nature and city days. Check weather and mountain or coastal safety information when planning each day.', 'ケープタウンはテーブルマウンテンや大西洋岸、歴史的な名所を組み合わせやすい港町です。山や海岸へ出かける日は天候と安全情報を確認して計画しましょう。'],
    d: [3, 4],
    s: [
      ['시티볼·가든스', 'City Bowl / Gardens', 'シティボウル・ガーデンズ', '박물관과 식당, 시내 명소에 접근하기 좋습니다. 해가 진 뒤 이동은 숙소 안내와 현지 상황을 확인하세요.', 'Well placed for museums, restaurants and central sights. Check local conditions and your accommodation’s advice for travel after dark.', '博物館や飲食店、市内の名所へ行きやすいエリアです。日没後の移動は宿泊先の案内と現地状況を確認してください。'],
      ['워터프런트·그린포인트', 'V&A Waterfront / Green Point', 'V&Aウォーターフロント・グリーンポイント', '워터프런트와 해안 산책로, 로벤섬 출발지에 가까워 관광 동선이 편합니다.', 'Convenient for the Waterfront, coastal walks and the Robben Island ferry departure point.', 'ウォーターフロントや海岸の散歩道、ロベン島行きフェリー乗り場に近く、観光に便利です。'],
    ],
  },
  marrakech: {
    o: ['마라케시는 메디나의 시장과 제마 엘프나 광장, 정원과 궁전 건축을 함께 경험하는 모로코의 대표 도시입니다. 골목길은 복잡하므로 첫날은 숙소 위치와 공식 교통·안내 정보를 확인해 동선을 정하는 편이 좋습니다.', 'Marrakech combines the medina’s souks and Jemaa el-Fnaa with gardens and palace architecture. Its lanes can be confusing, so check your accommodation location and official transport information before planning your first day.', 'マラケシュはメディナのスークやジャマ・エル・フナ広場、庭園、宮殿建築を楽しめるモロッコの代表的な都市です。路地が複雑なので、初日は宿の場所と公式交通情報を確認して動線を決めると安心です。'],
    d: [2, 3],
    s: [
      ['메디나·제마 엘프나 주변', 'Medina / Jemaa el-Fnaa', 'メディナ・ジャマ・エル・フナ周辺', '시장과 대표 명소에 걸어서 갈 수 있지만 골목이 복잡해 숙소의 정확한 위치와 픽업 방법을 미리 확인하세요.', 'Walkable to souks and landmark sights, but lanes are complex; confirm the exact riad location and pickup arrangements in advance.', 'スークや代表的な名所へ徒歩で行けますが、路地が複雑です。リヤドの正確な場所と送迎方法を事前に確認しましょう。'],
      ['기엘리즈', 'Gueliz', 'ゲリーズ', '현대적인 상점과 식당이 있는 신시가지입니다. 메디나와 떨어져 있으므로 이동 수단과 귀가 동선을 확인하세요.', 'The modern district for shops and restaurants. It is separate from the medina, so check transport and your return route.', '新市街の商店や飲食店が集まるエリアです。メディナとは離れているため、交通手段と帰路を確認しましょう。'],
    ],
  },
  tsushima: {
    o: ['규슈와 한반도 사이에 놓인 나가사키현의 긴 섬 도시입니다. 산과 리아스 해안, 고대 산성부터 조선통신사 역사까지 자연과 교류의 역사를 함께 볼 수 있습니다. 북쪽과 남쪽 명소 사이 거리가 멀어 2~3일 일정은 숙소 위치와 이동 동선을 먼저 정하면 편합니다.', 'Tsushima is a long island city in Nagasaki Prefecture between Kyushu and the Korean Peninsula. It combines mountain scenery, a ria coast and a history of exchange, from an ancient fortress to the Korean missions of the Joseon period. The north and south are far apart, so plan your lodging and routes for a two- or three-day stay.', '対馬は九州と朝鮮半島の間にある長崎県の細長い島のまちです。山やリアス海岸、古代山城、朝鮮通信使の歴史を一緒に楽しめます。北部と南部の名所は離れているため、2〜3日の滞在では宿の場所と移動経路を先に決めると便利です。'],
    d: [2, 3],
    s: [
      ['이즈하라', 'Izuhara', '厳原', '대마도박물관·만송원·조선통신사역사관 등 남부의 역사 명소와 이즈하라항을 이용하기 좋습니다.', 'Convenient for southern historical sights such as Tsushima Museum, Banshoin and the Korean Envoys History Museum, as well as Izuhara Port.', '対馬博物館、万松院、朝鮮通信使歴史館など南部の歴史名所や厳原港を利用しやすいエリアです。'],
      ['히타카쓰', 'Hitakatsu', '比田勝', '북쪽 여객터미널 주변에 머물며 북부 해안과 자연 명소를 둘러볼 때 편리합니다.', 'A useful base near the northern passenger terminal for exploring the north coast and natural sights.', '北部の旅客ターミナル周辺に泊まり、北部の海岸や自然の名所を巡る際に便利です。'],
    ],
  },
};
