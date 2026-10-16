/**
 * 도시 소개(이런 여행지)·추천 기간·숙소 잡기 좋은 동네 — Claude 초안(금액 없음).
 * o: 소개 [ko, en, ja] / d: 추천 일수 [최소, 최대] / s: 동네 [이름ko, en, ja, 설명ko, en, ja]
 */
export type L3 = readonly [string, string, string];
export type Area = readonly [string, string, string, string, string, string];
export interface Intro {
  o: L3;
  d: readonly [number, number];
  s: readonly Area[];
}

export const INTROS_1: Record<string, Intro> = {
  tokyo: {
    o: ['전통 사찰과 초고층 빌딩, 골목 술집과 백화점 식품관이 한 도시에 모여 있는 곳입니다. 동네마다 분위기가 달라 처음이라면 아사쿠사·시부야·신주쿠를 나눠 보는 일정이 편합니다.', 'Temples and skyscrapers, tiny alley bars and department-store food halls all share one city. Each district feels different, so first-timers usually split days between Asakusa, Shibuya and Shinjuku.', '伝統的な寺と超高層ビル、路地の居酒屋とデパ地下が一つの街に集まっています。エリアごとに雰囲気が違うので、初めてなら浅草・渋谷・新宿を日ごとに分けて回るのが楽です。'],
    d: [4, 5],
    s: [
      ['신주쿠', 'Shinjuku', '新宿', '교통의 중심이라 어디든 가기 편하고 밤늦게까지 식당이 많습니다.', 'The transport hub, easy for day trips, with restaurants open late.', '交通の中心でどこへでも行きやすく、夜遅くまで飲食店が多いです。'],
      ['긴자·도쿄역', 'Ginza / Tokyo Station', '銀座・東京駅', '조용하고 깔끔하며 공항버스·신칸센 이동이 편합니다.', 'Quieter and polished, convenient for airport buses and the shinkansen.', '落ち着いていて、空港バスや新幹線での移動が便利です。'],
      ['아사쿠사·우에노', 'Asakusa / Ueno', '浅草・上野', '옛 도쿄 분위기에 숙소 선택지가 넓고, 나리타 공항 접근성이 좋습니다.', 'Old-Tokyo atmosphere, a wide range of stays and good access to Narita.', '下町の雰囲気で宿の選択肢が広く、成田空港へのアクセスも良いです。'],
    ],
  },
  osaka: {
    o: ['「먹다 쓰러진다」는 말이 있을 만큼 먹거리가 중심인 도시입니다. 교토·나라·고베가 기차로 1시간 안팎이라 오사카를 거점으로 근교를 함께 도는 일정이 많습니다.', 'A city built around eating. Kyoto, Nara and Kobe are all about an hour by train, so many travellers base themselves here for day trips.', '「食い倒れ」の言葉通り、食べ歩きが主役の街です。京都・奈良・神戸へ電車で1時間前後なので、大阪を拠点に近郊を回る旅程が多いです。'],
    d: [3, 4],
    s: [
      ['난바·신사이바시', 'Namba / Shinsaibashi', '難波・心斎橋', '도톤보리와 가깝고 간사이 공항 열차가 바로 닿아 첫 방문에 가장 무난합니다.', 'Next to Dotonbori with direct trains to Kansai Airport; the easiest choice for first-timers.', '道頓堀に近く関西空港への電車も直通で、初めてなら最も無難です。'],
      ['우메다(오사카역)', 'Umeda (Osaka Station)', '梅田（大阪駅）', '교토·고베로 가는 열차가 많아 근교 여행 거점으로 좋습니다.', 'Plenty of trains to Kyoto and Kobe; a good base for day trips.', '京都・神戸行きの電車が多く、近郊旅行の拠点に向いています。'],
    ],
  },
  kyoto: {
    o: ['천 년 넘게 일본의 수도였던 곳으로 사찰과 신사, 옛 거리가 도시 곳곳에 남아 있습니다. 인기 명소는 아침 일찍 가야 붐비지 않고, 동선을 동쪽(기온·기요미즈)과 서쪽(아라시야마)으로 나누면 효율적입니다.', 'Japan’s capital for over a thousand years, full of temples, shrines and old streets. Go early to beat the crowds, and split days into east (Gion, Kiyomizu) and west (Arashiyama).', '千年以上都だった街で、寺社や古い町並みがあちこちに残ります。人気の名所は朝早く行くと空いていて、東（祇園・清水）と西（嵐山）に分けて回ると効率的です。'],
    d: [2, 3],
    s: [
      ['교토역', 'Kyoto Station', '京都駅', '공항 특급과 버스가 모두 출발해 이동이 가장 편합니다.', 'Airport express trains and city buses all start here; the most convenient base.', '空港特急もバスもここから出るので、移動が最も便利です。'],
      ['가와라마치·기온', 'Kawaramachi / Gion', '河原町・祇園', '식당과 거리 산책이 많아 저녁 시간을 즐기기 좋습니다.', 'Full of restaurants and evening strolls through old streets.', '飲食店が多く、夜の散策を楽しむのに向いています。'],
    ],
  },
  okinawa: {
    o: ['일본 본토와 다른 류큐 문화와 에메랄드빛 바다가 있는 휴양 섬입니다. 섬이 길고 대중교통이 적어 렌터카로 북부 해변과 수족관까지 도는 여행자가 많습니다.', 'A resort island with its own Ryukyu culture and emerald seas. The island is long and buses are sparse, so most visitors rent a car to reach the northern beaches and aquarium.', '本土とは違う琉球文化とエメラルドの海がある島です。島が細長く公共交通が少ないので、レンタカーで北部のビーチや水族館まで回る人が多いです。'],
    d: [3, 5],
    s: [
      ['나하(국제거리)', 'Naha (Kokusai-dori)', '那覇（国際通り）', '공항과 가깝고 모노레일로 다닐 수 있어 차 없이도 편합니다.', 'Close to the airport and served by monorail; easy without a car.', '空港に近くモノレールで動けるので、車なしでも便利です。'],
      ['온나·차탄 해변', 'Onna / Chatan coast', '恩納・北谷', '리조트와 해변이 모여 있어 바다 위주 여행에 좋습니다.', 'Resorts and beaches; ideal for a sea-focused trip.', 'リゾートとビーチが集まり、海中心の旅に向いています。'],
    ],
  },
  nagoya: {
    o: ['나고야성과 독특한 먹거리(미소카츠·장어덮밥·데바사키)로 알려진 일본 중부의 중심 도시입니다. 다카야마·시라카와고·이세로 가는 관문이기도 합니다.', 'Central Japan’s hub, known for its castle and distinctive food such as miso katsu, hitsumabushi eel and tebasaki wings, and a gateway to Takayama, Shirakawa-go and Ise.', '名古屋城と独特の名古屋めし（みそかつ・ひつまぶし・手羽先）で知られる中部の中心都市。高山・白川郷・伊勢への玄関口でもあります。'],
    d: [2, 3],
    s: [
      ['나고야역', 'Nagoya Station', '名古屋駅', '공항 열차·신칸센·고속버스가 모여 근교 여행에 편합니다.', 'Airport trains, shinkansen and highway buses all meet here.', '空港線・新幹線・高速バスが集まり、近郊旅行に便利です。'],
      ['사카에', 'Sakae', '栄', '쇼핑과 식당이 몰린 번화가라 저녁 시간이 즐겁습니다.', 'The shopping and dining district, lively in the evening.', '買い物と飲食店が集まる繁華街で、夜も楽しめます。'],
    ],
  },
  kobe: {
    o: ['바다와 산 사이에 자리한 항구 도시로, 이국적인 옛 외국인 거리와 고베규, 야경이 유명합니다. 오사카에서 가까워 당일치기로도 많이 오지만 아리마 온천까지 묶으면 1박이 알맞습니다.', 'A port city between sea and mountains, known for its old foreign quarter, Kobe beef and night views. Many visit on a day trip from Osaka, but an overnight stay lets you add Arima Onsen.', '海と山に挟まれた港町で、異人館街や神戸牛、夜景が有名です。大阪から日帰りも多いですが、有馬温泉まで含めるなら1泊がちょうどいいです。'],
    d: [1, 2],
    s: [
      ['산노미야', 'Sannomiya', '三宮', '역·버스·식당이 모여 있는 중심가라 가장 편합니다.', 'The central hub of stations, buses and restaurants.', '駅・バス・飲食店が集まる中心地で最も便利です。'],
      ['고베 하버랜드', 'Harborland', 'ハーバーランド', '항구 야경과 쇼핑몰이 가까운 바닷가 숙소가 많습니다.', 'Waterfront hotels near the harbour lights and malls.', '港の夜景やショッピングモールに近い海辺の宿が多いです。'],
    ],
  },
  hiroshima: {
    o: ['원폭의 역사를 기억하는 평화기념공원과, 바다 위 도리이로 유명한 미야지마가 함께 있는 도시입니다. 오코노미야키도 오사카와 다른 히로시마식이 따로 있습니다.', 'Home to the Peace Memorial Park and a short trip from Miyajima’s floating torii gate. Its layered okonomiyaki is a style of its own.', '原爆の歴史を伝える平和記念公園と、海に浮かぶ鳥居で知られる宮島がある街です。お好み焼きも広島風が別にあります。'],
    d: [2, 2],
    s: [
      ['히로시마역', 'Hiroshima Station', '広島駅', '신칸센·공항버스가 닿고 미야지마행 열차도 출발합니다.', 'Shinkansen and airport buses arrive here, with trains to Miyajima.', '新幹線や空港バスが着き、宮島方面の電車も出ます。'],
      ['핫초보리·평화공원 주변', 'Hatchobori / Peace Park area', '八丁堀・平和公園周辺', '공원과 번화가를 걸어서 다닐 수 있습니다.', 'Walk to the Peace Park and the main shopping streets.', '平和公園や繁華街へ歩いて行けます。'],
    ],
  },
  kanazawa: {
    o: ['에도 시대 거리와 정원이 잘 남아 「작은 교토」로 불리는 도시입니다. 겐로쿠엔과 찻집 거리, 신선한 해산물 시장을 이틀이면 여유 있게 둘러볼 수 있습니다.', 'Often called “little Kyoto” for its preserved Edo-era streets and gardens. Two days is enough for Kenroku-en, the teahouse districts and the seafood market.', '江戸時代の町並みと庭園がよく残り「小京都」と呼ばれる街。兼六園や茶屋街、新鮮な市場を2日あればゆっくり回れます。'],
    d: [2, 2],
    s: [
      ['가나자와역', 'Kanazawa Station', '金沢駅', '신칸센·버스 이동이 편하고 숙소가 많습니다.', 'Plenty of hotels with easy shinkansen and bus links.', '新幹線やバスでの移動が便利で、宿も多いです。'],
      ['고린보·가타마치', 'Korinbo / Katamachi', '香林坊・片町', '겐로쿠엔과 가깝고 저녁 식당가가 모여 있습니다.', 'Close to Kenroku-en with the main dining streets.', '兼六園に近く、夜の飲食街が集まっています。'],
    ],
  },
  hakodate: {
    o: ['홋카이도 남쪽 끝의 항구 도시로, 하코다테산 야경과 아침시장 해산물 덮밥이 대표 즐길 거리입니다. 언덕 위 옛 서양식 건물 거리도 걷기 좋습니다.', 'A port at Hokkaido’s southern tip, famous for the night view from Mount Hakodate and seafood bowls at the morning market, with old Western-style buildings on its slopes.', '北海道南端の港町で、函館山の夜景と朝市の海鮮丼が代表的な楽しみ。坂の上の洋館が並ぶ街並みも散策に最適です。'],
    d: [2, 2],
    s: [
      ['하코다테역 주변', 'Hakodate Station area', '函館駅周辺', '아침시장과 가깝고 공항버스·노면전차가 출발합니다.', 'Next to the morning market, with airport buses and trams.', '朝市に近く、空港バスや市電が出ています。'],
      ['베이 에어리어·모토마치', 'Bay Area / Motomachi', 'ベイエリア・元町', '창고 거리와 언덕길을 걸어서 다니기 좋습니다.', 'Walk to the red-brick warehouses and hillside streets.', '赤レンガ倉庫や坂道を歩いて巡れます。'],
    ],
  },
  fukuoka: {
    o: ['한국에서 가장 가까운 일본 대도시로, 공항이 시내와 가까워 짧은 일정에도 알차게 다닐 수 있습니다. 하카타 돈코츠 라멘과 강변 포장마차(야타이)가 대표 먹거리입니다.', 'The closest big Japanese city to Korea, with an airport minutes from downtown, ideal for short trips. Hakata tonkotsu ramen and riverside yatai stalls are the must-eats.', '韓国から最も近い日本の大都市で、空港が市内に近く短い日程でも効率よく回れます。博多豚骨ラーメンと屋台が名物です。'],
    d: [2, 3],
    s: [
      ['하카타역', 'Hakata Station', '博多駅', '공항 지하철로 5분, 근교 열차·버스가 모두 출발합니다.', 'Five minutes from the airport by subway, with trains and buses everywhere.', '空港から地下鉄で5分、近郊への電車やバスがすべて出ます。'],
      ['텐진·나카스', 'Tenjin / Nakasu', '天神・中洲', '쇼핑과 야타이가 가까워 저녁 시간을 즐기기 좋습니다.', 'Shopping and yatai stalls within walking distance.', '買い物や屋台に近く、夜を楽しむのに向いています。'],
    ],
  },
  sapporo: {
    o: ['홋카이도의 중심 도시로, 여름에는 선선한 날씨, 겨울에는 눈축제와 스키가 매력입니다. 오타루·비에이·노보리베쓰 같은 근교와 묶어 여행하는 경우가 많습니다.', 'Hokkaido’s main city: cool in summer, snowy in winter with its Snow Festival and nearby skiing. Most trips add Otaru, Biei or Noboribetsu.', '北海道の中心都市で、夏は涼しく、冬は雪まつりやスキーが魅力。小樽・美瑛・登別などの近郊と組み合わせる旅が多いです。'],
    d: [3, 4],
    s: [
      ['삿포로역', 'Sapporo Station', '札幌駅', '공항 열차와 근교행 기차·버스가 출발해 이동이 편합니다.', 'Airport trains and services to Otaru and beyond depart here.', '空港線や近郊行きの列車・バスが出て移動が便利です。'],
      ['스스키노·오도리', 'Susukino / Odori', 'すすきの・大通', '눈축제 회장과 가깝고 라멘·징기스칸 식당이 많습니다.', 'Near the Snow Festival sites, packed with ramen and lamb-barbecue spots.', '雪まつり会場に近く、ラーメンやジンギスカンの店が多いです。'],
    ],
  },
};
