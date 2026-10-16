/** 도시 소개 5 — 미주·대양주·중국·중앙아시아·중동 (형식은 city-intros-1.ts) */
import type { Intro } from './city-intros-1';

export const INTROS_5: Record<string, Intro> = {
  guam: {
    o: ['한국에서 비행기로 4시간 남짓인 미국령 휴양 섬으로, 투몬 해변의 리조트와 쇼핑, 스노클링이 중심입니다. 아이와 함께하는 가족 여행지로 특히 인기가 많습니다.', 'A US-territory island about four hours from Korea, centred on Tumon Bay resorts, shopping and snorkelling; especially popular with families.', '韓国から飛行機で4時間ほどのアメリカ領の島で、タモン湾のリゾートや買い物、シュノーケリングが中心。子連れの家族旅行に特に人気です。'],
    d: [3, 5],
    s: [
      ['투몬', 'Tumon', 'タモン', '해변 리조트와 쇼핑몰, 식당이 모여 있습니다.', 'Beach resorts, malls and restaurants together.', 'ビーチリゾートやモール、飲食店が集まっています。'],
    ],
  },
  saipan: {
    o: ['맑은 바다와 한적한 해변, 마나가하섬이 매력인 북마리아나 제도의 섬입니다. 번화한 곳이 적어 리조트에서 쉬며 바다 액티비티를 즐기는 여행에 맞습니다.', 'A Northern Mariana island of clear water, quiet beaches and Managaha Island; with little nightlife, it suits a resort-and-sea-activities trip.', '澄んだ海と静かなビーチ、マニャガハ島が魅力の北マリアナ諸島の島。にぎやかな場所が少なく、リゾートで休みつつ海のアクティビティを楽しむ旅に向いています。'],
    d: [3, 5],
    s: [
      ['가라판', 'Garapan', 'ガラパン', '식당과 상점이 모인 중심가로 리조트가 많습니다.', 'The main town of restaurants, shops and resorts.', '飲食店や店が集まる中心地で、リゾートが多いです。'],
    ],
  },
  honolulu: {
    o: ['와이키키 해변과 다이아몬드 헤드, 진주만이 있는 오아후섬의 중심 도시입니다. 북쪽 해안이나 동쪽 해안 드라이브를 하루 넣으면 섬의 다른 얼굴을 볼 수 있습니다.', 'Oʻahu’s main city, with Waikīkī Beach, Diamond Head and Pearl Harbor; a day driving the North Shore or east coast shows another side of the island.', 'ワイキキビーチやダイヤモンドヘッド、真珠湾があるオアフ島の中心都市。ノースショアや東海岸のドライブを1日入れると島の別の顔が見られます。'],
    d: [4, 5],
    s: [
      ['와이키키', 'Waikīkī', 'ワイキキ', '해변과 식당, 쇼핑이 모두 걸어서 닿습니다.', 'Beach, dining and shopping within walking distance.', 'ビーチや飲食店、買い物へすべて歩いて行けます。'],
      ['알라모아나', 'Ala Moana', 'アラモアナ', '대형 쇼핑센터와 공원이 가깝습니다.', 'Next to the big shopping centre and beach park.', '大型ショッピングセンターや公園に近いです。'],
    ],
  },
  'los-angeles': {
    o: ['할리우드와 산타모니카 해변, 그리피스 천문대, 테마파크가 넓게 흩어진 도시입니다. 이동 거리가 길어 지역별로 날을 나누고, 렌터카나 차량 호출을 함께 쓰는 것이 현실적입니다.', 'Hollywood, Santa Monica Beach, Griffith Observatory and theme parks spread across a huge area. Group days by area and plan on a rental car or ride-hailing.', 'ハリウッドやサンタモニカビーチ、グリフィス天文台、テーマパークが広く散らばる街。移動距離が長いのでエリアごとに日を分け、レンタカーや配車アプリを併用するのが現実的です。'],
    d: [4, 5],
    s: [
      ['산타모니카', 'Santa Monica', 'サンタモニカ', '해변과 산책로가 있고 비교적 걷기 좋습니다.', 'Beachside and relatively walkable.', 'ビーチと遊歩道があり、比較的歩きやすいです。'],
      ['할리우드·웨스트 할리우드', 'Hollywood / West Hollywood', 'ハリウッド・ウェストハリウッド', '명소와 식당이 가깝고 지하철 역이 있습니다.', 'Close to sights and dining, with a Metro station.', '名所や飲食店に近く、地下鉄の駅があります。'],
    ],
  },
  'las-vegas': {
    o: ['스트립을 따라 대형 카지노 호텔과 쇼가 늘어선 도시로, 그랜드캐니언 등 국립공원 투어의 거점이기도 합니다. 호텔 사이 거리가 생각보다 멀어 한낮에는 걷는 동선을 줄이는 것이 좋습니다.', 'Mega casino hotels and shows line the Strip, and it is the base for Grand Canyon and national-park tours. Hotels are further apart than they look, so limit midday walking.', 'ストリップ沿いに大型カジノホテルやショーが並ぶ街で、グランドキャニオンなど国立公園ツアーの拠点でもあります。ホテル間は見た目より遠いので、日中の徒歩移動は控えめに。'],
    d: [3, 4],
    s: [
      ['스트립 중심', 'Center Strip', 'ストリップ中心', '주요 호텔과 쇼, 분수쇼를 걸어서 봅니다.', 'Walk to the main resorts, shows and fountains.', '主要なホテルやショー、噴水ショーへ歩いて行けます。'],
      ['다운타운(프리몬트 스트리트)', 'Downtown (Fremont Street)', 'ダウンタウン（フリーモント・ストリート）', '옛 라스베이거스 분위기에 숙박비가 낮은 편입니다.', 'Old-Vegas vibe and often lower rates.', '昔のラスベガスの雰囲気で、宿泊費は安めです。'],
    ],
  },
  'san-francisco': {
    o: ['언덕길을 오르는 케이블카와 금문교, 피셔맨스 워프, 알카트라즈섬이 있는 도시입니다. 동네마다 날씨가 다를 만큼 바람과 안개가 잦아 겉옷을 꼭 챙기세요.', 'Cable cars climbing steep hills, the Golden Gate Bridge, Fisherman’s Wharf and Alcatraz. Wind and fog vary by neighbourhood, so always bring a layer.', '坂を上るケーブルカー、ゴールデンゲートブリッジ、フィッシャーマンズワーフ、アルカトラズ島がある街。地区ごとに天気が違うほど風と霧が多いので、上着を必ず持ちましょう。'],
    d: [3, 4],
    s: [
      ['유니언 스퀘어', 'Union Square', 'ユニオンスクエア', '케이블카·지하철이 모여 이동이 편합니다(밤에는 주변 주의).', 'Cable cars and BART meet here (stay alert at night nearby).', 'ケーブルカーや地下鉄が集まり便利です（夜は周辺に注意）。'],
      ['피셔맨스 워프·노스비치', 'Fisherman’s Wharf / North Beach', 'フィッシャーマンズワーフ・ノースビーチ', '항구와 알카트라즈 선착장이 가깝습니다.', 'Near the waterfront and the Alcatraz ferry.', '港やアルカトラズ行きの船着き場に近いです。'],
    ],
  },
  'new-york': {
    o: ['자유의 여신상, 센트럴 파크, 브로드웨이, 세계적인 미술관이 지하철로 연결된 도시입니다. 맨해튼을 미드타운·다운타운·업타운으로 나눠 걸으면 효율적입니다.', 'The Statue of Liberty, Central Park, Broadway and world-class museums, all linked by subway. Walk Manhattan in chunks: Midtown, Downtown and Uptown.', '自由の女神やセントラルパーク、ブロードウェイ、世界的な美術館が地下鉄でつながる街。マンハッタンをミッドタウン・ダウンタウン・アップタウンに分けて歩くと効率的です。'],
    d: [4, 6],
    s: [
      ['미드타운', 'Midtown', 'ミッドタウン', '타임스스퀘어와 지하철 노선이 모여 어디든 편합니다.', 'Times Square and many subway lines; easy to reach everything.', 'タイムズスクエアや多くの地下鉄路線があり、どこへでも便利です。'],
      ['롱아일랜드시티(퀸스)', 'Long Island City (Queens)', 'ロングアイランドシティ（クイーンズ）', '맨해튼과 가깝고 숙박비가 낮은 편입니다.', 'Close to Manhattan with lower rates.', 'マンハッタンに近く、宿泊費は安めです。'],
    ],
  },
  vancouver: {
    o: ['바다와 산이 맞닿은 도시로, 스탠리 공원 자전거 길과 그랜빌 아일랜드 시장, 근교 캐필라노 현수교가 대표 코스입니다. 휘슬러나 빅토리아로 이어 가기도 좋습니다.', 'Where ocean meets mountains: cycle the Stanley Park Seawall, graze Granville Island Market and cross the Capilano Suspension Bridge; Whistler and Victoria are easy add-ons.', '海と山が接する街で、スタンレーパークの自転車道、グランビルアイランドの市場、近郊のキャピラノ吊り橋が定番。ウィスラーやビクトリアへ足を延ばすのにも便利です。'],
    d: [3, 4],
    s: [
      ['다운타운·웨스트엔드', 'Downtown / West End', 'ダウンタウン・ウエストエンド', '스탠리 공원과 해변이 가깝고 걷기 좋습니다.', 'Walkable, near Stanley Park and the beaches.', 'スタンレーパークやビーチに近く、歩きやすいです。'],
      ['예일타운', 'Yaletown', 'イェールタウン', '세련된 식당이 많고 공항철도가 닿습니다.', 'Stylish dining with a stop on the airport line.', 'おしゃれな飲食店が多く、空港線の駅があります。'],
    ],
  },
  cancun: {
    o: ['카리브해의 에메랄드빛 바다와 올인클루시브 리조트로 유명한 휴양지입니다. 마야 유적(치첸이트사·툴룸)과 세노테 투어를 하루씩 넣는 일정이 많습니다.', 'Turquoise Caribbean water and all-inclusive resorts; many trips add a day for Mayan ruins (Chichén Itzá, Tulum) and cenote swims.', 'カリブ海のエメラルドの海とオールインクルーシブのリゾートで有名な保養地。マヤ遺跡（チチェン・イッツァ、トゥルム）やセノーテのツアーを1日ずつ入れる旅程が多いです。'],
    d: [4, 5],
    s: [
      ['호텔 존', 'Hotel Zone', 'ホテルゾーン', '바다 앞 리조트가 길게 늘어선 지역입니다.', 'The strip of beachfront resorts.', '海沿いのリゾートが長く並ぶエリアです。'],
      ['다운타운', 'Downtown Cancún', 'ダウンタウン', '현지 식당과 시장이 있고 숙박비가 낮은 편입니다.', 'Local eateries and markets with lower rates.', '地元の食堂や市場があり、宿泊費は安めです。'],
    ],
  },
  sydney: {
    o: ['오페라하우스와 하버브리지가 있는 항구 도시로, 본다이 해변 산책로와 페리 여행이 매력입니다. 블루마운틴을 당일치기로 다녀오는 일정이 인기입니다.', 'A harbour city of the Opera House and Harbour Bridge, with the Bondi coastal walk and scenic ferries; a day trip to the Blue Mountains is popular.', 'オペラハウスとハーバーブリッジがある港町で、ボンダイビーチの海岸遊歩道やフェリーが魅力。ブルーマウンテンズへの日帰りが人気です。'],
    d: [4, 5],
    s: [
      ['서큘러 키·더 록스', 'Circular Quay / The Rocks', 'サーキュラー・キー・ロックス', '오페라하우스와 페리 선착장이 바로 앞입니다.', 'Right by the Opera House and ferry wharves.', 'オペラハウスやフェリー乗り場が目の前です。'],
      ['달링하버·CBD', 'Darling Harbour / CBD', 'ダーリングハーバー・CBD', '쇼핑과 식당, 대중교통이 편합니다.', 'Shopping, dining and easy transport.', '買い物や飲食店、公共交通が便利です。'],
    ],
  },
  melbourne: {
    o: ['골목 카페와 거리 예술, 트램이 어울리는 호주의 문화 도시입니다. 그레이트 오션 로드와 필립섬 펭귄 퍼레이드 투어를 하루씩 붙이는 일정이 많습니다.', 'Australia’s cultural city of laneway cafés, street art and trams; tours of the Great Ocean Road and Phillip Island’s penguin parade are classic add-ons.', '路地のカフェやストリートアート、トラムが似合うオーストラリアの文化都市。グレートオーシャンロードやフィリップ島のペンギンパレードのツアーを1日ずつ加える旅程が多いです。'],
    d: [4, 5],
    s: [
      ['CBD(시내 중심)', 'CBD', 'CBD（中心部）', '무료 트램 구역 안이라 이동이 편합니다.', 'Inside the free tram zone.', '無料トラム区域内で移動が便利です。'],
      ['사우스뱅크', 'Southbank', 'サウスバンク', '강변 산책로와 식당이 있습니다.', 'Riverside promenades and dining.', '川沿いの遊歩道や飲食店があります。'],
    ],
  },
  auckland: {
    o: ['두 바다 사이에 화산 언덕이 솟은 뉴질랜드 최대 도시입니다. 와이헤케섬 페리, 로토루아·호빗 마을(마타마타) 투어의 출발점으로 많이 찾습니다.', 'New Zealand’s largest city, set between two harbours and studded with volcanic cones; the starting point for Waiheke Island ferries and tours to Rotorua and Hobbiton.', '二つの湾の間に火山の丘がそびえるニュージーランド最大の都市。ワイヘケ島へのフェリーやロトルア、ホビット村ツアーの出発点として多く訪れます。'],
    d: [2, 3],
    s: [
      ['시내 중심(브리토마트·바이어덕트)', 'CBD (Britomart / Viaduct)', '中心部（ブリトマート・ヴァイアダクト）', '페리 터미널과 식당가가 가깝습니다.', 'Near the ferry terminal and waterfront dining.', 'フェリーターミナルや飲食街に近いです。'],
    ],
  },
  qingdao: {
    o: ['독일 조계지 시절의 붉은 지붕 건물과 해변, 칭다오 맥주 박물관으로 유명한 해안 도시입니다. 한국에서 가깝고 해산물이 풍부해 짧은 일정의 여행지로 인기입니다.', 'A coastal city of red-roofed buildings from the German concession era, beaches and the Tsingtao Beer Museum; close to Korea and full of seafood, ideal for a short trip.', 'ドイツ租借地時代の赤い屋根の建物とビーチ、青島ビール博物館で有名な海辺の街。韓国から近く海鮮が豊富で、短い旅行先として人気です。'],
    d: [2, 3],
    s: [
      ['시난구(구시가지·잔교)', 'Shinan (old town / Zhanqiao Pier)', '市南区（旧市街・桟橋）', '옛 건물 거리와 해변을 걸어서 다닙니다.', 'Walk the old streets and beaches.', '古い建物の街並みや海辺を歩いて回れます。'],
      ['5·4 광장', 'May Fourth Square', '五四広場', '바다 야경과 쇼핑몰이 가까운 신시가지입니다.', 'The modern waterfront with night views and malls.', '海の夜景やモールに近い新市街です。'],
    ],
  },
  beijing: {
    o: ['자금성과 천안문, 만리장성, 이화원 같은 거대한 유적이 모인 중국의 수도입니다. 명소마다 실명 예약과 여권이 필요한 경우가 많아 미리 준비하고, 만리장성은 하루를 따로 잡으세요.', 'China’s capital of vast sites: the Forbidden City, Tiananmen, the Great Wall and the Summer Palace. Many require advance real-name booking with your passport, and the Great Wall needs its own day.', '紫禁城や天安門、万里の長城、頤和園などの巨大な遺跡が集まる中国の首都。名所ごとに実名予約とパスポートが必要なことが多いので準備しておき、万里の長城は1日別に取りましょう。'],
    d: [3, 4],
    s: [
      ['왕푸징·동청구', 'Wangfujing / Dongcheng', '王府井・東城区', '자금성과 가깝고 쇼핑가가 있습니다.', 'Near the Forbidden City with shopping streets.', '紫禁城に近く、繁華街があります。'],
      ['첸먼·후퉁 지역', 'Qianmen / hutong area', '前門・胡同エリア', '옛 골목(후퉁) 분위기의 숙소가 있습니다.', 'Stays in the old hutong lanes.', '昔ながらの路地（胡同）の雰囲気の宿があります。'],
    ],
  },
  shanghai: {
    o: ['와이탄의 옛 유럽식 건물과 푸둥의 초고층 스카이라인이 강을 사이에 마주한 도시입니다. 예원과 옛 프랑스 조계지 산책, 근교 수향마을(주자자오 등)이 인기입니다.', 'The Bund’s old European façades face Pudong’s skyscrapers across the river; Yu Garden, walks in the former French Concession and nearby water towns such as Zhujiajiao are favourites.', '外灘の古いヨーロッパ風建築と浦東の超高層スカイラインが川を挟んで向き合う街。豫園や旧フランス租界の散策、近郊の水郷（朱家角など）が人気です。'],
    d: [3, 4],
    s: [
      ['인민광장·난징로', 'People’s Square / Nanjing Road', '人民広場・南京路', '지하철 환승이 편하고 와이탄까지 걸어갑니다.', 'Easy metro transfers and a walk to the Bund.', '地下鉄の乗り換えが便利で、外灘まで歩けます。'],
      ['옛 프랑스 조계지', 'Former French Concession', '旧フランス租界', '가로수길과 카페가 있는 조용한 동네입니다.', 'Leafy streets and cafés in a quieter area.', '並木道やカフェがある静かな地区です。'],
    ],
  },
  zhangjiajie: {
    o: ['영화 「아바타」의 배경으로 알려진 기암 봉우리 숲(무릉원)과 톈먼산, 유리다리로 유명한 산악 관광지입니다. 국가삼림공원 입장권이 여러 날 유효해 2~3일에 나눠 보는 것이 일반적입니다.', 'A mountain destination of sandstone pillars (Wulingyuan) said to have inspired Avatar, Tianmen Mountain and glass bridges. Forest-park tickets cover several days, so most visits span two or three.', '映画「アバター」の舞台として知られる奇岩の峰（武陵源）や天門山、ガラスの橋で有名な山岳観光地。国家森林公園の入場券は数日有効なので、2〜3日に分けて回るのが一般的です。'],
    d: [3, 4],
    s: [
      ['우링위안(무릉원)', 'Wulingyuan', '武陵源', '국가삼림공원 입구와 가까워 이른 입장에 좋습니다.', 'Next to the park gates for early entry.', '国家森林公園の入口に近く、早い入場に便利です。'],
      ['장자제 시내', 'Zhangjiajie city', '張家界市内', '톈먼산 케이블카와 기차역이 가깝습니다.', 'Near the Tianmen cable car and the station.', '天門山ロープウェイや駅に近いです。'],
    ],
  },
  ulaanbaatar: {
    o: ['몽골 초원 여행의 출발점인 수도로, 시내에서는 간단사원과 칭기즈칸 광장을 보고 테를지 국립공원의 게르 숙박이나 투어로 초원을 경험합니다.', 'The capital and starting point for the steppe: see Gandan Monastery and Sükhbaatar Square in town, then sleep in a ger or tour Terelj National Park.', 'モンゴル草原の旅の出発点となる首都。市内ではガンダン寺やチンギス・ハーン広場を見て、テレルジ国立公園のゲル泊やツアーで草原を体験します。'],
    d: [4, 6],
    s: [
      ['시내 중심(수흐바타르 광장)', 'Central (Sükhbaatar Square)', '中心部（スフバートル広場）', '식당과 투어 출발지가 가깝습니다.', 'Close to restaurants and tour departures.', '飲食店やツアーの出発地に近いです。'],
      ['테를지 국립공원', 'Terelj National Park', 'テレルジ国立公園', '게르 캠프에서 초원과 별을 즐깁니다.', 'Ger camps under the steppe stars.', 'ゲルキャンプで草原と星空を楽しめます。'],
    ],
  },
  almaty: {
    o: ['톈산산맥 아래 자리한 카자흐스탄 최대 도시로, 콕토베 전망대와 침불락 스키장, 빅 알마티 호수·차린 캐니언 같은 자연 명소가 가깝습니다.', 'Kazakhstan’s largest city at the foot of the Tian Shan, close to Kok-Tobe, Shymbulak ski resort, Big Almaty Lake and Charyn Canyon.', '天山山脈のふもとにあるカザフスタン最大の都市で、コクトベ展望台やシンブラク・スキー場、ビッグ・アルマトイ湖やチャリン渓谷などの自然が近いです。'],
    d: [3, 4],
    s: [
      ['시내 중심(아바이·판필로프 공원)', 'Centre (Abay / Panfilov Park)', '中心部（アバイ通り・パンフィロフ公園）', '공원과 식당, 지하철이 가깝습니다.', 'Near parks, restaurants and the metro.', '公園や飲食店、地下鉄に近いです。'],
    ],
  },
  tashkent: {
    o: ['우즈베키스탄의 수도이자 실크로드 여행의 출발점으로, 아름다운 지하철역과 초르수 시장이 볼거리입니다. 고속열차로 사마르칸트·부하라를 이어 가는 일정이 일반적입니다.', 'Uzbekistan’s capital and the starting point for the Silk Road, with ornate metro stations and Chorsu Bazaar; most travellers continue by high-speed train to Samarkand and Bukhara.', 'ウズベキスタンの首都でシルクロード旅の出発点。美しい地下鉄駅やチョルスー・バザールが見どころで、高速鉄道でサマルカンドやブハラへ続けるのが一般的です。'],
    d: [2, 3],
    s: [
      ['아미르 티무르 광장 주변', 'Amir Timur Square area', 'アミール・ティムール広場周辺', '지하철과 호텔이 모인 중심가입니다.', 'The central district of hotels and metro lines.', '地下鉄やホテルが集まる中心地です。'],
    ],
  },
  tbilisi: {
    o: ['언덕 위 요새와 유황 온천, 발코니가 있는 옛 집들이 어우러진 조지아의 수도입니다. 와인 산지 카헤티와 므츠헤타·카즈베기를 당일 투어로 다녀오기 좋습니다.', 'Georgia’s capital of hilltop fortresses, sulphur baths and old houses with carved balconies; day tours reach the Kakheti wine region, Mtskheta and Kazbegi.', '丘の上の要塞や硫黄温泉、バルコニーのある古い家並みが調和するジョージアの首都。ワイン産地カヘティやムツヘタ、カズベギへの日帰りツアーに便利です。'],
    d: [3, 4],
    s: [
      ['올드 트빌리시', 'Old Tbilisi', '旧市街', '온천 지구와 요새를 걸어서 다닙니다(언덕길 많음).', 'Walk to the baths and fortress (hilly).', '温泉地区や要塞へ歩いて行けます（坂が多い）。'],
      ['루스타벨리 거리', 'Rustaveli Avenue', 'ルスタヴェリ通り', '지하철역과 극장·미술관이 있는 중심가입니다.', 'The main boulevard of theatres, museums and metro.', '地下鉄駅や劇場、美術館がある中心街です。'],
    ],
  },
  dubai: {
    o: ['부르즈 할리파와 대형 쇼핑몰, 사막 사파리, 옛 크릭 지구가 함께 있는 도시입니다. 낮에는 실내 명소, 해 질 무렵에는 사막·해변을 즐기는 식으로 일정을 짜면 편합니다.', 'The Burj Khalifa, mega-malls, desert safaris and the old Creek district. Plan indoor sights for the day and the desert or beach for late afternoon.', 'ブルジュ・ハリファや大型モール、砂漠サファリ、古いクリーク地区がそろう街。日中は屋内の名所、夕方は砂漠やビーチを楽しむように組むと快適です。'],
    d: [3, 4],
    s: [
      ['다운타운', 'Downtown Dubai', 'ダウンタウン', '부르즈 할리파와 두바이 몰, 분수쇼가 바로 앞입니다.', 'Right by the Burj Khalifa, Dubai Mall and fountains.', 'ブルジュ・ハリファやドバイモール、噴水ショーが目の前です。'],
      ['두바이 마리나·JBR', 'Dubai Marina / JBR', 'ドバイマリーナ・JBR', '해변과 산책로, 식당이 많습니다.', 'Beach, promenade and restaurants.', 'ビーチや遊歩道、飲食店が多いです。'],
    ],
  },
};
