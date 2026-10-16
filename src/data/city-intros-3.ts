/** 도시 소개 3 — 동남아·중화권 (형식은 city-intros-1.ts) */
import type { Intro } from './city-intros-1';

export const INTROS_3: Record<string, Intro> = {
  bangkok: {
    o: ['화려한 왕실 사원과 강변 풍경, 노점 음식과 대형 쇼핑몰이 공존하는 도시입니다. 교통 체증이 심해 BTS·MRT 지하철과 짜오프라야 수상 보트를 함께 쓰면 이동이 빨라집니다.', 'Gilded royal temples, river views, street food and giant malls in one city. Traffic is heavy, so combine the BTS/MRT with Chao Phraya river boats.', '豪華な王室寺院と川辺の風景、屋台と大型モールが共存する街。渋滞がひどいので、BTS・MRTとチャオプラヤー川のボートを組み合わせると移動が速くなります。'],
    d: [4, 5],
    s: [
      ['수쿰빗', 'Sukhumvit', 'スクンビット', 'BTS를 따라 호텔·식당이 많아 어디든 이동이 편합니다.', 'Hotels and restaurants all along the BTS line.', 'BTS沿いにホテルや飲食店が多く、どこへでも移動しやすいです。'],
      ['리버사이드', 'Riverside', 'リバーサイド', '왕궁·왓 아룬과 가깝고 강변 호텔의 야경이 좋습니다.', 'Close to the Grand Palace and Wat Arun, with river-view hotels.', '王宮やワット・アルンに近く、川沿いのホテルの夜景が見事です。'],
      ['시암', 'Siam', 'サイアム', '대형 쇼핑몰이 모인 중심지로 지하철 환승이 편합니다.', 'The mall district at the centre of the train network.', '大型モールが集まる中心地で、電車の乗り換えが便利です。'],
    ],
  },
  'chiang-mai': {
    o: ['해자로 둘러싸인 구시가지에 수백 개의 사원이 있는 태국 북부의 옛 왕도입니다. 방콕보다 느긋한 분위기에 야시장, 쿠킹 클래스, 산속 사원과 코끼리 보호구역 투어가 인기입니다.', 'Northern Thailand’s old royal city, with hundreds of temples inside a moated old town. More relaxed than Bangkok, with night markets, cooking classes, mountain temples and elephant sanctuaries.', '堀に囲まれた旧市街に数百の寺がある北部タイの古都。バンコクよりのんびりした雰囲気で、ナイトマーケットや料理教室、山寺や象の保護施設ツアーが人気です。'],
    d: [3, 4],
    s: [
      ['구시가지(올드시티)', 'Old City', '旧市街', '사원과 일요 야시장을 걸어서 다닐 수 있습니다.', 'Walk to the temples and the Sunday night market.', '寺や日曜ナイトマーケットへ歩いて行けます。'],
      ['님만해민', 'Nimmanhaemin', 'ニマンヘミン', '카페와 쇼핑몰이 모인 세련된 동네입니다.', 'A trendy area of cafés and malls.', 'カフェやモールが集まるおしゃれなエリアです。'],
    ],
  },
  phuket: {
    o: ['안다만해의 대표 휴양 섬으로, 해변마다 분위기가 달라 숙소 위치가 여행의 성격을 정합니다. 피피섬·팡아만 보트 투어를 하루 넣는 일정이 많습니다.', 'The Andaman Sea’s best-known resort island; each beach has its own character, so where you stay shapes the trip. Most itineraries include a boat day to Phi Phi or Phang Nga Bay.', 'アンダマン海を代表するリゾート島で、ビーチごとに雰囲気が違うため宿の場所が旅の性格を決めます。ピピ島やパンガー湾のボートツアーを1日入れる旅程が多いです。'],
    d: [4, 5],
    s: [
      ['빠통', 'Patong', 'パトン', '식당·쇼핑·밤 문화가 몰린 가장 번화한 해변입니다.', 'The busiest beach for dining, shopping and nightlife.', '飲食・買い物・ナイトライフが集まる最もにぎやかなビーチです。'],
      ['까론·까따', 'Karon / Kata', 'カロン・カタ', '빠통보다 조용하면서 편의시설이 적당히 있습니다.', 'Calmer than Patong but still well served.', 'パトンより静かで、施設も程よくあります。'],
      ['푸껫 타운', 'Phuket Town', 'プーケットタウン', '알록달록한 옛 상가 건물과 현지 식당이 많습니다.', 'Colourful old shophouses and local eateries.', 'カラフルな古いショップハウスと地元の食堂が多いです。'],
    ],
  },
  pattaya: {
    o: ['방콕에서 차로 2시간 남짓인 해변 도시로, 근처 섬(꼬란) 투어와 테마파크, 활기찬 밤거리가 특징입니다. 가족 여행이라면 번화가에서 조금 떨어진 해변이 편합니다.', 'A beach city about two hours from Bangkok, known for trips to Koh Larn, theme parks and a lively nightlife strip. Families often prefer the quieter beaches away from the centre.', 'バンコクから車で2時間ほどのビーチの街で、近くのラン島ツアーやテーマパーク、にぎやかな夜の街が特徴。家族旅行なら中心から少し離れたビーチが快適です。'],
    d: [2, 3],
    s: [
      ['파타야 비치 중심', 'Central Pattaya Beach', 'パタヤビーチ中心', '식당과 쇼핑몰, 섬 가는 선착장이 가깝습니다.', 'Near restaurants, malls and the pier for Koh Larn.', '飲食店やモール、島行きの桟橋に近いです。'],
      ['좀티엔', 'Jomtien', 'ジョムティエン', '번화가보다 조용해 가족 여행에 좋습니다.', 'Quieter, good for families.', '中心より静かで、家族旅行に向いています。'],
    ],
  },
  'da-nang': {
    o: ['긴 미케 해변과 바나힐, 오행산이 있는 베트남 중부의 휴양 도시입니다. 차로 30~40분 거리의 호이안 옛 거리를 저녁에 함께 다녀오는 일정이 거의 필수입니다.', 'Central Vietnam’s beach city with long My Khe Beach, Ba Na Hills and the Marble Mountains; an evening trip to Hoi An’s old town, 30–40 minutes away, is almost a must.', '長いミーケービーチやバーナーヒルズ、五行山がある中部ベトナムのリゾート都市。車で30〜40分のホイアン旧市街を夜に訪れるのはほぼ必須です。'],
    d: [3, 4],
    s: [
      ['미케 해변', 'My Khe Beach', 'ミーケービーチ', '바다 전망 호텔이 많고 시내·공항과도 가깝습니다.', 'Sea-view hotels close to downtown and the airport.', '海の見えるホテルが多く、市内や空港にも近いです。'],
      ['한강 주변 시내', 'Han River downtown', 'ハン川沿いの市内', '시장과 식당, 용다리 야경을 걸어서 봅니다.', 'Walk to markets, restaurants and the Dragon Bridge lights.', '市場や飲食店、ロン橋の夜景へ歩いて行けます。'],
    ],
  },
  hanoi: {
    o: ['호안끼엠 호수 주변 구시가지의 좁은 거리와 오토바이 물결, 쌀국수와 분짜의 도시입니다. 하롱베이 크루즈나 닌빈 투어를 하루씩 붙이는 일정이 일반적입니다.', 'Narrow old-quarter streets around Hoan Kiem Lake, rivers of motorbikes, pho and bun cha. Most trips add a day for a Ha Long Bay cruise or Ninh Binh.', 'ホアンキエム湖周辺の旧市街の細い通りとバイクの波、フォーやブンチャーの街。ハロン湾クルーズやニンビンを1日ずつ加えるのが一般的です。'],
    d: [3, 4],
    s: [
      ['구시가지(호안끼엠)', 'Old Quarter (Hoan Kiem)', '旧市街（ホアンキエム）', '먹거리와 명소를 걸어서 다닐 수 있고 투어 픽업도 이곳에서 합니다.', 'Walk to food and sights; tour pickups start here.', 'グルメや名所へ歩いて行け、ツアーの送迎もここからです。'],
      ['서호(떠이호)', 'West Lake (Tay Ho)', '西湖（タイホー）', '호숫가 카페가 많은 조용한 동네입니다.', 'A quieter lakeside area full of cafés.', '湖畔のカフェが多い静かなエリアです。'],
    ],
  },
  'ho-chi-minh-city': {
    o: ['프랑스 식민 시대 건물과 고층 빌딩, 시장과 루프탑 바가 뒤섞인 베트남 최대 도시입니다. 메콩 델타와 구찌 터널을 당일 투어로 다녀올 수 있습니다.', 'Vietnam’s largest city, mixing French colonial buildings, high-rises, markets and rooftop bars; day tours reach the Mekong Delta and Cu Chi Tunnels.', 'フランス統治時代の建物と高層ビル、市場やルーフトップバーが混ざるベトナム最大の都市。メコンデルタやクチトンネルへ日帰りツアーで行けます。'],
    d: [3, 4],
    s: [
      ['1군(벤탄 시장 주변)', 'District 1 (Ben Thanh)', '1区（ベンタイン市場周辺）', '주요 명소와 식당을 걸어서 다닐 수 있습니다.', 'Walk to the main sights and restaurants.', '主要な名所や飲食店へ歩いて行けます。'],
      ['3군', 'District 3', '3区', '1군과 가깝고 현지 식당·카페가 많은 차분한 동네입니다.', 'Calmer, near District 1, with local eateries and cafés.', '1区に近く、地元の食堂やカフェが多い落ち着いたエリアです。'],
    ],
  },
  'da-lat': {
    o: ['해발 1,500m 고원에 있어 일 년 내내 선선한 「베트남의 작은 유럽」입니다. 꽃 농장과 소나무 숲, 야시장, 신혼여행객이 많은 아기자기한 카페가 매력입니다.', 'A highland town at 1,500 m that stays cool all year — “Vietnam’s little Europe” — with flower farms, pine forests, a night market and charming cafés.', '標高1,500mの高原にあり一年中涼しい「ベトナムの小さなヨーロッパ」。花畑や松林、ナイトマーケット、かわいいカフェが魅力です。'],
    d: [2, 3],
    s: [
      ['쑤언흐엉 호수 주변', 'Xuan Huong Lake area', 'スアンフーン湖周辺', '야시장과 시내 명소를 걸어서 다닐 수 있습니다.', 'Walk to the night market and town sights.', 'ナイトマーケットや市内の名所へ歩いて行けます。'],
    ],
  },
  'nha-trang': {
    o: ['긴 해변을 따라 호텔이 늘어선 베트남 남중부의 바다 도시입니다. 섬 호핑 투어와 머드 온천, 빈원더스 같은 섬 테마파크가 인기입니다.', 'A south-central beach city lined with hotels, popular for island-hopping, mud baths and the island theme park VinWonders.', '長いビーチ沿いにホテルが並ぶ南中部の海の街。アイランドホッピングや泥温泉、島のテーマパーク「ヴィンワンダーズ」が人気です。'],
    d: [3, 4],
    s: [
      ['쩐푸 해변 거리', 'Tran Phu beachfront', 'チャンフー通りの海沿い', '해변과 식당·마사지숍이 바로 앞입니다.', 'Right on the beach with restaurants and spas.', 'ビーチや飲食店、マッサージ店が目の前です。'],
      ['혼째섬(빈펄)', 'Hon Tre (Vinpearl)', 'ホンチェー島（ヴィンパール）', '테마파크와 리조트가 함께 있는 섬 숙소입니다.', 'Island resorts beside the theme park.', 'テーマパークと一体のリゾートがある島です。'],
    ],
  },
  'phu-quoc': {
    o: ['베트남 남쪽 끝의 섬 휴양지로, 맑은 바다와 해상 케이블카, 야시장 해산물이 특징입니다. 섬 북쪽과 남쪽 리조트 지역이 떨어져 있어 숙소 위치를 먼저 정하는 것이 좋습니다.', 'An island resort at Vietnam’s southern tip with clear water, a record-breaking sea cable car and seafood night markets; resorts cluster in the north and south, so pick your area first.', 'ベトナム南端の島リゾートで、澄んだ海と海上ケーブルカー、ナイトマーケットの海鮮が特徴。島の北と南のリゾート地区が離れているので、先に宿の場所を決めましょう。'],
    d: [3, 5],
    s: [
      ['즈엉동(섬 중심)', 'Duong Dong (centre)', 'ズオンドン（島の中心）', '야시장과 공항이 가까워 이동이 편합니다.', 'Near the night market and the airport.', 'ナイトマーケットや空港に近く便利です。'],
      ['남부(안터이)', 'South (An Thoi)', '南部（アントイ）', '케이블카와 사오 해변 등 남쪽 명소가 가깝습니다.', 'Close to the cable car and Sao Beach.', 'ケーブルカーやサオビーチなど南の名所に近いです。'],
    ],
  },
  taipei: {
    o: ['야시장 먹거리와 101 타워, 근교 온천·옛 거리(지우펀·단수이)를 지하철과 버스로 쉽게 다닐 수 있는 도시입니다. 비가 잦아 실내 명소를 섞어 두면 좋습니다.', 'Night-market food, Taipei 101 and easy day trips by metro and bus to hot springs and old streets such as Jiufen and Tamsui. Rain is common, so keep some indoor plans.', '夜市グルメや台北101、近郊の温泉や古い街（九份・淡水）へMRTやバスで簡単に行ける街。雨が多いので屋内の名所も組み込むと安心です。'],
    d: [3, 4],
    s: [
      ['타이베이역', 'Taipei Main Station', '台北駅', '공항철도와 고속철·지하철이 모여 이동이 가장 편합니다.', 'Airport MRT, high-speed rail and metro all meet here.', '空港MRT・高速鉄道・MRTが集まり、最も便利です。'],
      ['시먼딩', 'Ximending', '西門町', '먹거리와 쇼핑이 가득한 젊은 번화가입니다.', 'A youthful district packed with food and shopping.', 'グルメと買い物が詰まった若者の繁華街です。'],
    ],
  },
  kaohsiung: {
    o: ['대만 남부의 항구 도시로, 보얼 예술특구와 연지담·불광산, 따뜻한 날씨가 특징입니다. 타이베이보다 여유롭고 지하철·경전철로 다니기 편합니다.', 'Southern Taiwan’s port city with the Pier-2 art district, Lotus Pond, Fo Guang Shan and warm weather; more relaxed than Taipei and easy by metro and light rail.', '台湾南部の港町で、駁二芸術特区や蓮池潭、仏光山、暖かい気候が特徴。台北よりのんびりしていて、MRTやライトレールで動きやすいです。'],
    d: [2, 3],
    s: [
      ['메이리다오·중앙공원', 'Formosa Boulevard / Central Park', '美麗島・中央公園', '지하철 환승역 주변이라 어디든 가기 편합니다.', 'Around the main metro interchange; easy to get anywhere.', 'MRTの乗換駅周辺で、どこへでも行きやすいです。'],
    ],
  },
  taichung: {
    o: ['날씨가 온화한 대만 중부 도시로, 버블티의 고향이자 무지개마을·심계신촌 같은 감성 명소가 있습니다. 일월담·르웨탄을 다녀오는 거점으로도 많이 찾습니다.', 'A mild central-Taiwan city, birthplace of bubble tea, with photogenic spots such as Rainbow Village and Shenji New Village; also the base for Sun Moon Lake.', '気候が穏やかな台湾中部の街で、タピオカミルクティー発祥の地。彩虹眷村や審計新村などの名所があり、日月潭への拠点にもなります。'],
    d: [2, 3],
    s: [
      ['타이중역 주변', 'Taichung Station area', '台中駅周辺', '버스·기차 이동이 편하고 옛 건물 명소가 가깝습니다.', 'Handy for buses and trains, near heritage sights.', 'バスや列車の移動が便利で、古い建物の名所に近いです。'],
      ['시툰·펑자 야시장 방면', 'Xitun / Fengjia area', '西屯・逢甲方面', '야시장과 쇼핑몰이 있는 신도심입니다.', 'The newer district with Fengjia night market and malls.', '逢甲夜市やモールがある新都心です。'],
    ],
  },
  singapore: {
    o: ['깨끗하고 안전한 도시 국가로, 마리나 베이 야경, 가든스 바이 더 베이, 호커센터 음식, 센토사섬이 대표 코스입니다. 지하철이 촘촘해 짧은 일정에도 많이 볼 수 있습니다.', 'A clean, safe city-state: Marina Bay views, Gardens by the Bay, hawker-centre food and Sentosa Island. The dense MRT lets you see a lot in a short trip.', '清潔で安全な都市国家で、マリーナベイの夜景、ガーデンズ・バイ・ザ・ベイ、ホーカーの屋台飯、セントーサ島が定番。MRTが充実していて短い日程でも多く回れます。'],
    d: [3, 4],
    s: [
      ['마리나 베이·시티홀', 'Marina Bay / City Hall', 'マリーナベイ・シティホール', '야경 명소와 박물관이 걸어서 닿습니다.', 'Walk to the skyline sights and museums.', '夜景スポットや博物館へ歩いて行けます。'],
      ['차이나타운·클락키', 'Chinatown / Clarke Quay', 'チャイナタウン・クラークキー', '호커센터와 강변 식당이 많고 숙소 선택지가 넓습니다.', 'Hawker centres, riverside dining and a wider range of hotels.', 'ホーカーや川沿いの飲食店が多く、宿の選択肢が広いです。'],
    ],
  },
  'hong-kong': {
    o: ['빅토리아 하버를 사이에 둔 홍콩섬과 구룡반도가 페리와 지하철로 이어진 도시입니다. 딤섬과 야경, 피크 트램, 근교 섬과 디즈니랜드까지 짧은 일정에 담기 좋습니다.', 'Hong Kong Island and Kowloon face each other across Victoria Harbour, linked by ferry and MTR. Dim sum, skyline views, the Peak Tram, outlying islands and Disneyland all fit a short trip.', 'ヴィクトリア・ハーバーを挟んだ香港島と九龍がフェリーとMTRで結ばれた街。飲茶や夜景、ピークトラム、離島やディズニーランドまで短い日程に詰め込めます。'],
    d: [3, 4],
    s: [
      ['침사추이', 'Tsim Sha Tsui', '尖沙咀', '하버 야경과 쇼핑, 공항버스·지하철이 편합니다.', 'Harbour views, shopping and easy airport links.', 'ハーバーの夜景と買い物、空港へのアクセスが便利です。'],
      ['센트럴·완차이', 'Central / Wan Chai', '中環・湾仔', '피크 트램과 소호 골목, 페리 선착장이 가깝습니다.', 'Near the Peak Tram, SoHo lanes and the ferry piers.', 'ピークトラムやソーホーの路地、フェリー乗り場に近いです。'],
    ],
  },
  macau: {
    o: ['포르투갈 식민지 시절의 광장·성당과 대형 카지노 리조트가 공존하는 작은 도시입니다. 홍콩에서 페리나 다리로 1시간 안팎이라 1~2일 일정으로 많이 다녀옵니다.', 'A small city where Portuguese-era squares and churches meet giant casino resorts; about an hour from Hong Kong by ferry or bridge, so many visit for a day or two.', 'ポルトガル統治時代の広場や教会と大型カジノリゾートが共存する小さな街。香港からフェリーや橋で1時間前後なので、1〜2日で訪れる人が多いです。'],
    d: [1, 2],
    s: [
      ['마카오 반도(세나도 광장)', 'Macau Peninsula (Senado Square)', 'マカオ半島（セナド広場）', '세계유산 거리를 걸어서 둘러보기 좋습니다.', 'Walk the World Heritage streets.', '世界遺産の街並みを歩いて巡れます。'],
      ['코타이', 'Cotai', 'コタイ', '대형 리조트·쇼가 모여 있고 무료 셔틀이 다닙니다.', 'Mega-resorts and shows with free shuttles.', '大型リゾートやショーが集まり、無料シャトルが走ります。'],
    ],
  },
  cebu: {
    o: ['필리핀 중부의 관문으로, 막탄섬 리조트의 바다와 호핑 투어, 고래상어·캐녀닝 같은 액티비티가 유명합니다. 세부 시티와 막탄섬은 분위기가 달라 목적에 맞게 숙소를 고르세요.', 'Central Philippines’ gateway: Mactan resorts, island hopping and adventures like whale sharks and canyoneering. Cebu City and Mactan feel very different, so choose your base by purpose.', 'フィリピン中部の玄関口で、マクタン島リゾートの海やアイランドホッピング、ジンベエザメやキャニオニングが有名。セブ市内とマクタン島は雰囲気が違うので目的に合わせて宿を選びましょう。'],
    d: [3, 5],
    s: [
      ['막탄섬', 'Mactan Island', 'マクタン島', '공항과 가깝고 바다 리조트가 모여 있습니다.', 'Beach resorts close to the airport.', '空港に近く、海のリゾートが集まっています。'],
      ['세부 시티(IT파크·아얄라)', 'Cebu City (IT Park / Ayala)', 'セブ市内（ITパーク・アヤラ）', '쇼핑몰과 식당이 많아 도시 여행에 편합니다.', 'Malls and restaurants for a city stay.', 'モールや飲食店が多く、街歩きに便利です。'],
    ],
  },
  boracay: {
    o: ['고운 하얀 모래의 화이트 비치로 유명한 작은 섬입니다. 해변을 따라 걸으며 노을과 바다를 즐기는 여유로운 여행지로, 섬 안에서는 걷거나 트라이시클로 다닙니다.', 'A small island famous for the powdery sand of White Beach. Days are about sunsets and the sea, and you get around on foot or by e-trike.', '白い砂のホワイトビーチで有名な小さな島。夕日と海をのんびり楽しむ旅先で、島内は徒歩かトライシクルで移動します。'],
    d: [3, 4],
    s: [
      ['스테이션 2', 'Station 2', 'ステーション2', '디몰과 식당이 모여 있는 중심가입니다.', 'The lively centre around D’Mall.', 'Dモールや飲食店が集まる中心地です。'],
      ['스테이션 1', 'Station 1', 'ステーション1', '모래가 가장 넓고 고운 조용한 구역입니다.', 'The widest, finest sand and a quieter vibe.', '砂浜が最も広くきれいで、静かなエリアです。'],
    ],
  },
  'kuala-lumpur': {
    o: ['페트로나스 트윈타워와 이슬람 사원, 차이나타운과 리틀 인디아가 함께 있는 다문화 도시입니다. 바투 동굴과 말라카 당일치기도 인기입니다.', 'A multicultural city of the Petronas Towers, mosques, Chinatown and Little India; Batu Caves and a day trip to Melaka are popular.', 'ペトロナスツインタワーやモスク、チャイナタウンとリトルインディアが共存する多文化都市。バトゥ洞窟やマラッカ日帰りも人気です。'],
    d: [2, 3],
    s: [
      ['부킷 빈탕·KLCC', 'Bukit Bintang / KLCC', 'ブキッ・ビンタン・KLCC', '쇼핑몰과 트윈타워가 가깝고 대중교통이 편합니다.', 'Malls and the Twin Towers with easy transit.', 'モールやツインタワーに近く、公共交通が便利です。'],
      ['KL 센트럴', 'KL Sentral', 'KLセントラル', '공항철도가 닿아 이른 비행기 일정에 좋습니다.', 'Airport rail terminal; good for early flights.', '空港鉄道が着き、早朝便の日に便利です。'],
    ],
  },
  'kota-kinabalu': {
    o: ['보르네오섬의 해안 도시로, 붉게 물드는 석양과 섬 호핑, 반딧불·맹그로브 투어, 키나발루산이 매력입니다. 시내가 작아 투어 업체 픽업을 이용하면 편합니다.', 'A Borneo coastal city of fiery sunsets, island hopping, firefly and mangrove tours, and Mount Kinabalu. The town is compact, and tours pick you up from your hotel.', 'ボルネオ島の海辺の街で、真っ赤な夕日やアイランドホッピング、ホタル・マングローブツアー、キナバル山が魅力。市内は小さく、ツアーの送迎を使うと便利です。'],
    d: [3, 4],
    s: [
      ['시내(워터프런트)', 'Downtown waterfront', '市内（ウォーターフロント）', '야시장과 석양 명소, 섬 가는 선착장이 가깝습니다.', 'Near the night market, sunset spots and island jetty.', 'ナイトマーケットや夕日スポット、島行きの桟橋に近いです。'],
      ['탄중아루·수트라하버', 'Tanjung Aru / Sutera Harbour', 'タンジュンアル・ステラハーバー', '석양이 보이는 리조트가 모여 있습니다.', 'Resorts facing the sunset.', '夕日が見えるリゾートが集まっています。'],
    ],
  },
  bali: {
    o: ['힌두 사원과 계단식 논, 서핑 해변과 절벽 위 리조트가 어우러진 섬입니다. 지역마다 성격이 뚜렷하고 이동 시간이 길어, 두 지역 정도로 나눠 묵는 일정이 많습니다.', 'Hindu temples, rice terraces, surf beaches and clifftop resorts. Each area has a distinct character and travel times are long, so many trips split stays between two areas.', 'ヒンドゥー寺院と棚田、サーフィンのビーチと崖の上のリゾートが調和する島。エリアごとに性格がはっきりしていて移動時間が長いため、2つのエリアに分けて泊まる旅程が多いです。'],
    d: [4, 6],
    s: [
      ['스미냑·짱구', 'Seminyak / Canggu', 'スミニャック・チャングー', '해변 클럽과 카페, 식당이 많은 활기찬 지역입니다.', 'Lively beach clubs, cafés and restaurants.', 'ビーチクラブやカフェ、飲食店が多いにぎやかなエリアです。'],
      ['우붓', 'Ubud', 'ウブド', '논과 숲, 사원, 요가·스파가 있는 내륙 마을입니다.', 'An inland town of rice fields, temples, yoga and spas.', '田んぼと森、寺院、ヨガやスパがある内陸の村です。'],
      ['누사두아·울루와뚜', 'Nusa Dua / Uluwatu', 'ヌサドゥア・ウルワツ', '조용한 리조트와 절벽 사원의 석양이 있습니다.', 'Quiet resorts and clifftop temple sunsets.', '静かなリゾートと崖の寺院の夕日があります。'],
    ],
  },
  'siem-reap': {
    o: ['앙코르와트를 비롯한 크메르 유적지의 관문 도시입니다. 유적이 넓게 퍼져 있어 툭툭이나 차량을 하루 단위로 빌려 일출과 함께 둘러보는 방식이 일반적입니다.', 'The gateway to Angkor Wat and the Khmer temples. The ruins are spread out, so most visitors hire a tuk-tuk or car by the day and start at sunrise.', 'アンコールワットをはじめとするクメール遺跡の玄関口。遺跡が広く点在するため、トゥクトゥクや車を1日単位で借りて日の出とともに巡るのが一般的です。'],
    d: [2, 3],
    s: [
      ['펍 스트리트·올드 마켓', 'Pub Street / Old Market', 'パブストリート・オールドマーケット', '식당과 야시장이 모여 있어 저녁이 편합니다.', 'Restaurants and night markets for easy evenings.', '飲食店やナイトマーケットが集まり、夜が便利です。'],
    ],
  },
};
