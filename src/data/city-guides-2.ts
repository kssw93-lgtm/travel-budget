/** 도시 가이드 초안 2 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_2: Record<string, Compact> = {
  dubai: {
    h: [
      ['부르즈 할리파', 'Burj Khalifa', 'ブルジュ・ハリファ', '세계에서 가장 높은 건물. 해 질 녘 시간대 전망대 입장은 일찍 마감되는 편입니다.', "The world's tallest building; sunset observation slots sell out early.", '世界一高いビル。夕暮れの展望台枠は早く埋まりがちです。'],
      ['두바이 몰 분수 쇼', 'Dubai Fountain', 'ドバイ・ファウンテン', '부르즈 할리파 앞 호수에서 저녁마다 열리는 무료 음악 분수 쇼입니다.', 'A free musical fountain show on the lake below the Burj Khalifa every evening.', 'ブルジュ・ハリファ前の湖で毎晩行われる無料の噴水ショーです。'],
      ['올드 두바이·아브라 수상택시', 'Old Dubai and abra boats', 'オールド・ドバイとアブラ', '두바이 크리크를 나무배(아브라)로 건너 향신료·금 시장(수크)을 둘러봅니다.', 'Cross Dubai Creek by wooden abra to the spice and gold souks.', '木造船アブラでドバイ・クリークを渡り、スパイスと金のスークを巡ります。'],
      ['두바이 프레임', 'Dubai Frame', 'ドバイ・フレーム', '거대한 액자 모양 전망대로, 한쪽은 옛 두바이, 다른 쪽은 신도심이 보입니다.', 'A giant picture-frame lookout with old Dubai on one side and the new skyline on the other.', '巨大な額縁の形をした展望台で、片側に旧市街、反対側に新市街が見えます。'],
      ['미래 박물관', 'Museum of the Future', '未来博物館', '아랍어 서예가 새겨진 타원형 건물로, 미래 기술을 주제로 한 체험형 전시가 열립니다.', 'An oval building wrapped in Arabic calligraphy, with immersive exhibits on future technology.', 'アラビア書道が刻まれた楕円形の建物で、未来の技術をテーマにした体験型展示があります。'],
    ],
    t: [
      ['여름(6~9월)은 한낮 기온이 매우 높아 야외 관광은 아침이나 저녁에 하는 것이 좋습니다.', 'Summer (June–September) is extremely hot; do outdoor sightseeing early or late.', '夏（6〜9月）は日中が非常に暑いので、屋外観光は朝か夕方に。'],
      ['모스크에서는 어깨와 팔·다리를 가리는 단정한 옷을 입고, 여성은 머리를 가릴 스카프도 준비하세요.', 'For mosque visits, wear modest clothing that covers shoulders, arms, and legs; women should also bring a headscarf.', 'モスクを訪れる際は肩・腕・脚を覆う服装にし、女性は頭を覆うスカーフも用意しましょう。'],
      ['공항에서 시내: 두바이 국제공항 제1·3터미널에서 두바이 메트로 레드라인을 타면 시내와 두바이몰 방면으로 갑니다.', 'Airport to city: the Dubai Metro Red Line stops at DXB Terminals 1 and 3 and runs into the city and towards Dubai Mall.', '空港から市内へ：ドバイ国際空港の第1・第3ターミナルからドバイメトロ・レッドラインで市内やドバイモール方面へ行けます。'],
    ],
  },
  dubrovnik: {
    h: [
      ['성벽 걷기', 'City Walls walk', '城壁歩き', '구시가지를 둘러싼 성벽 위를 한 바퀴 걸으며 바다와 붉은 지붕을 내려다봅니다.', 'Walk the full circuit of the walls above the sea and red rooftops.', '旧市街を囲む城壁の上を一周し、海と赤い屋根を見下ろします。'],
      ['스트라둔 거리', 'Stradun', 'ストラドゥン通り', '구시가지를 가로지르는 대리석 중심 거리입니다.', 'The polished limestone main street running through the Old Town.', '旧市街を貫く大理石のメインストリートです。'],
      ['스르지산 케이블카', 'Mount Srđ cable car', 'スルジ山ロープウェイ', '산 위에서 구시가지와 섬들을 한눈에 볼 수 있습니다.', 'Rides up for a panorama of the Old Town and islands.', '山の上から旧市街と島々を一望できます。'],
      ['로크룸섬', 'Lokrum Island', 'ロクルム島', '구시가 항구에서 배로 약 15분 거리의 숲이 우거진 섬으로, 수도원 정원과 바위 해변이 있습니다.', 'A wooded island about 15 minutes by boat from the old harbour, with monastery gardens and rocky swimming spots.', '旧市街の港から船で約15分の緑豊かな島で、修道院の庭園や岩場の海水浴場があります。'],
      ['렉터 궁전', 'Rector\'s Palace', '総督邸', '옛 두브로브니크 공화국의 통치자 관저로, 지금은 문화역사박물관으로 쓰입니다.', 'Seat of the old Republic of Dubrovnik\'s rector, now the Cultural History Museum.', 'かつてのドゥブロヴニク共和国の総督の館で、現在は文化歴史博物館です。'],
    ],
    t: [
      ['크루즈선이 들어오는 낮 시간에는 구시가지가 매우 붐빕니다. 성벽은 아침 일찍이나 늦은 오후가 좋습니다.', 'Cruise crowds pack the Old Town at midday; walk the walls early or late afternoon.', 'クルーズ船の寄港時間は旧市街が混むので、城壁は朝早くか夕方に。'],
      ['구시가지의 매끈한 돌길과 성벽 계단을 걸을 때는 미끄럼에 주의하고 밑창이 잘 잡히는 신발을 신으세요.', 'Take care on the Old Town\'s smooth stone streets and the city wall steps, and wear shoes with good grip.', '旧市街の滑らかな石畳や城壁の階段では滑らないよう注意し、滑りにくい靴を履いてください。'],
    ],
  },
  florence: {
    h: [
      ['두오모(산타 마리아 델 피오레)', 'Florence Cathedral (Duomo)', 'ドゥオーモ', '브루넬레스키 돔이 있는 대성당. 돔에 오르려면 시간 지정 예약이 필요합니다.', "The cathedral with Brunelleschi's dome; climbing it needs a timed booking.", 'ブルネレスキのクーポラがある大聖堂。クーポラに登るには時間指定の予約が必要です。'],
      ['우피치 미술관', 'Uffizi Gallery', 'ウフィツィ美術館', '보티첼리 「비너스의 탄생」 등 르네상스 회화를 모은 미술관입니다.', "Renaissance masterpieces including Botticelli's Birth of Venus.", 'ボッティチェリ「ヴィーナスの誕生」などルネサンス絵画を集めた美術館です。'],
      ['미켈란젤로 광장', 'Piazzale Michelangelo', 'ミケランジェロ広場', '강 건너 언덕 위 광장. 해 질 녘 피렌체 전경이 유명합니다.', 'A hilltop square across the river, famous for sunset views of the city.', '川向こうの丘の広場。夕暮れのフィレンツェの眺めが有名です。'],
      ['아카데미아 미술관', 'Galleria dell’Accademia', 'アカデミア美術館', '미켈란젤로의 「다비드」 원본이 있는 미술관으로, 시간 지정 예약을 추천합니다.', 'Home of Michelangelo’s original David; timed booking is recommended.', 'ミケランジェロの「ダビデ像」の本物がある美術館で、時間指定の予約がおすすめです。'],
      ['피티 궁전과 보볼리 정원', 'Palazzo Pitti and the Boboli Gardens', 'ピッティ宮殿とボーボリ庭園', '메디치 가문의 궁전과 뒤편의 계단식 정원으로, 아르노강 건너편에 있습니다.', 'The Medici palace and its terraced gardens across the Arno.', 'メディチ家の宮殿と裏手の段々の庭園で、アルノ川の対岸にあります。'],
    ],
    t: [
      ['아카데미아 미술관(다비드상)과 우피치는 줄이 길어 시간 지정 예약을 하는 것이 좋습니다.', 'The Accademia (David) and Uffizi have long queues; book timed entry.', 'アカデミア美術館（ダビデ像）とウフィツィは行列が長いので時間指定予約を。'],
      ['피렌체 숙소에는 숙박세가 적용될 수 있으니 예약 내역에서 포함 여부와 결제 시점을 확인하세요.', 'A tourist tax may apply to accommodation in Florence; check your booking to see whether it is included and when it is collected.', 'フィレンツェの宿泊には宿泊税がかかる場合があります。予約内容で税の包含と支払い時期を確認してください。'],
      ['공항에서 시내: 피렌체 공항에서 트램 T2선을 타면 산타마리아노벨라역 근처 우니타 정류장까지 약 20분입니다.', 'Airport to city: tram line T2 runs from Florence Airport to Unità, beside Santa Maria Novella station, in about 20 minutes.', '空港から市内へ：フィレンツェ空港からトラムT2線でサンタ・マリア・ノヴェッラ駅近くのウニタ停留所まで約20分です。'],
    ],
  },
  guam: {
    h: [
      ['투몬 비치', 'Tumon Bay', 'タモン湾', '호텔이 모인 잔잔한 산호초 해변. 얕은 곳에서 스노클링을 할 수 있습니다.', 'A calm reef-sheltered beach lined with hotels, good for shallow snorkelling.', 'ホテルが並ぶ穏やかなサンゴ礁のビーチ。浅瀬でシュノーケリングができます。'],
      ['사랑의 절벽', "Two Lovers Point", '恋人岬', '투몬 만이 내려다보이는 절벽 전망대입니다.', 'A clifftop lookout over Tumon Bay.', 'タモン湾を見下ろす断崖の展望台です。'],
      ['차모로 빌리지 야시장', 'Chamorro Village Night Market', 'チャモロ・ビレッジ・ナイトマーケット', '수요일 저녁에 열리는 야시장. 차모로 바비큐를 맛볼 수 있습니다.', 'The Wednesday evening market for Chamorro barbecue and crafts.', '水曜の夜に開かれる市場。チャモロ料理のバーベキューが味わえます。'],
      ['리티디안 포인트', 'Ritidian Point', 'リティディアン・ポイント', '괌 북쪽 끝 국립 야생동물 보호구역의 해변으로, 맑은 바다로 유명합니다. 안전요원이 없고 해류가 강하니 주의하세요.', 'A beach in the national wildlife refuge at Guam\'s northern tip, known for clear water; no lifeguards and strong currents.', 'グアム北端の国立野生生物保護区のビーチで、透明な海で知られます。監視員はおらず潮流が強いので注意。'],
    ],
    t: [
      ['GMTA 버스 노선이 있지만 렌터카로 다니는 여행자가 많습니다. 운전은 오른쪽 차선이고, 버스 운행 정보는 미리 확인하세요.', 'GMTA buses run on Guam, but many visitors rent a car; driving is on the right, and check bus schedules in advance.', 'GMTAのバス路線がありますが、レンタカーで回る旅行者が多いです。右側通行で、バスの運行情報は事前に確認を。'],
      ['괌 식당에서는 팁을 남기는 관행이 있지만 선택 사항입니다. 계산서에 서비스료가 이미 붙었는지 확인하세요.', 'Tipping at restaurants in Guam is customary but optional. Check whether a service charge is already on the bill.', 'グアムの飲食店ではチップを渡す習慣がありますが、任意です。会計にサービス料が含まれているか確認しましょう。'],
    ],
  },
  'ho-chi-minh-city': {
    h: [
      ['벤탄 시장', 'Ben Thanh Market', 'ベンタイン市場', '시내 중심의 큰 시장. 먹거리 코너와 기념품 가게가 모여 있습니다.', 'The central market with food stalls and souvenir shops.', '市中心の大きな市場。屋台と土産物店が集まっています。'],
      ['통일궁', 'Independence Palace', '統一会堂', '1975년 전쟁 종결의 상징이 된 옛 대통령궁입니다.', 'The former presidential palace that marked the end of the war in 1975.', '1975年の終戦の象徴となった旧大統領官邸です。'],
      ['전쟁기념관', 'War Remnants Museum', '戦争証跡博物館', '베트남 전쟁의 기록과 사진을 전시하는 박물관입니다.', 'A museum documenting the Vietnam War through photographs and exhibits.', 'ベトナム戦争の記録と写真を展示する博物館です。'],
      ['사이공 중앙우체국', 'Saigon Central Post Office', 'サイゴン中央郵便局', '프랑스 식민지 시대에 지어진 우체국으로, 지금도 우체국으로 쓰이며 옛 지도와 아치형 천장이 볼거리입니다.', 'A French colonial-era post office still in use, with old maps and a vaulted hall.', 'フランス統治時代に建てられ今も使われる郵便局で、古い地図とアーチ天井が見どころです。'],
      ['구찌 터널', 'Cu Chi Tunnels', 'クチトンネル', '베트남 전쟁 때 쓰인 지하 터널 유적으로, 시내에서 차로 1시간 반 정도 걸려 반나절 투어로 다녀옵니다.', 'Wartime underground tunnels about 1.5 hours\' drive away, usually visited on a half-day tour.', 'ベトナム戦争時の地下トンネル遺跡で、市内から車で1時間半ほど。半日ツアーで行きます。'],
    ],
    t: [
      ['오토바이가 많은 도로를 건널 때는 횡단보도를 이용하고, 초록불이어도 양쪽 차량을 확인하세요. 운전자가 알아서 피할 것이라고 믿고 걷지 마세요.', 'When crossing motorbike-heavy roads, use a crossing and check traffic in both directions even on a green signal. Do not assume drivers will move around you.', 'バイクの多い道路を渡るときは横断歩道を使い、青信号でも左右の車両を確認してください。運転者が必ず避けてくれると思って歩かないでください。'],
      ['그랩의 GrabCar는 예약 전에 앱에 확정 요금이 표시되어 흥정할 필요가 없습니다. GrabTaxi는 미터 요금이므로 차량 유형을 확인하세요.', 'GrabCar shows a fixed fare in the app before booking, so there is no need to haggle. GrabTaxi uses a meter; check which service you select.', 'GrabのGrabCarは予約前に確定運賃がアプリに表示され、値段交渉は不要です。GrabTaxiはメーター制なので、選んだ車種を確認しましょう。'],
    ],
  },
  incheon: {
    h: [
      ['차이나타운·짜장면박물관', 'Chinatown and Jajangmyeon Museum', 'チャイナタウン・チャジャン麺博物館', '한국 짜장면이 시작된 곳. 박물관과 중식당이 모여 있습니다.', 'Where Korean jajangmyeon began, with a museum and Chinese restaurants.', '韓国のチャジャン麺発祥の地。博物館と中華料理店が集まります。'],
      ['송월동 동화마을', 'Songwol-dong Fairy Tale Village', '松月洞童話村', '동화 속 장면을 벽화와 조형물로 꾸민 골목입니다.', 'Alleys decorated with murals and sculptures from fairy tales.', '童話の場面を壁画や造形物で飾った路地です。'],
      ['송도 센트럴파크', 'Songdo Central Park', '松島セントラルパーク', '고층 빌딩 사이 수로에서 보트를 탈 수 있는 공원입니다.', 'A park with a canal for boating between high-rise towers.', '高層ビルの間の水路でボートに乗れる公園です。'],
      ['월미도와 월미바다열차', 'Wolmido and the Wolmi Sea Train', '月尾島と月尾海列車', '바다를 따라 월미도를 한 바퀴 도는 모노레일로, 인천항과 서해를 내려다봅니다.', 'A monorail loop around Wolmido looking out over Incheon port and the Yellow Sea.', '海沿いに月尾島をひと回りするモノレールで、仁川港と黄海を見渡せます。'],
    ],
    t: [
      ['출국 전 차이나타운을 들를 계획이라면 공항 왕복 시간과 환승 경로를 먼저 확인하세요. 차이나타운은 인천역 맞은편입니다.', 'If you plan to visit Chinatown before departure, check the round-trip travel time and transfer route to the airport first. Chinatown is across from Incheon Station.', '出国前にチャイナタウンへ立ち寄る場合は、空港との往復時間と乗り換え経路を先に確認しましょう。チャイナタウンは仁川駅の向かいです。'],
      ['월미도에서는 서해 바다 전망을, 영종도 해변에서는 석양을 즐겨보세요.', 'Enjoy West Sea views on Wolmido and the sunset at a Yeongjongdo beach.', '月尾島では西海の眺めを、永宗島の海辺では夕日を楽しんでみましょう。'],
    ],
  },
  kaohsiung: {
    h: [
      ['보얼 예술특구', 'Pier-2 Art Center', '駁二芸術特区', '옛 항구 창고를 전시장과 상점으로 바꾼 예술 지구입니다.', 'Old harbour warehouses turned into galleries and shops.', '旧港の倉庫を展示場と店に変えたアート地区です。'],
      ['롄츠탄 용호탑', 'Dragon and Tiger Pagodas, Lotus Pond', '蓮池潭・龍虎塔', '호수 위에 용과 호랑이 입 모양 입구가 있는 두 탑입니다.', 'Twin pagodas on a lake, entered through a dragon’s and a tiger’s mouth.', '湖の上に龍と虎の口の入口がある2つの塔です。'],
      ['류허 야시장', 'Liuhe Night Market', '六合夜市', '해산물과 파파야 우유 등 먹거리가 많은 야시장입니다.', 'A night market known for seafood and papaya milk.', '海鮮やパパイヤミルクなどが楽しめる夜市です。'],
      ['불광산 불타기념관', 'Fo Guang Shan Buddha Museum', '仏光山仏陀紀念館', '거대한 좌불과 탑들이 늘어선 불교 문화 시설로, 가오슝 시내에서 버스로 갈 수 있습니다.', 'A Buddhist cultural complex with a giant seated Buddha and pagodas, reachable by bus from the city.', '巨大な大仏と塔が並ぶ仏教文化施設で、高雄市内からバスで行けます。'],
      ['치진섬', 'Cijin Island', '旗津', '페리로 몇 분이면 닿는 섬으로, 해변과 해산물 거리, 등대가 있습니다.', 'A few minutes by ferry, with a beach, seafood street and lighthouse.', 'フェリーで数分の島で、ビーチや海鮮通り、灯台があります。'],
    ],
    t: [
      ['MRT와 경전철(LRT)로 주요 명소를 다닐 수 있고, 교통카드(아이패스 등)를 쓰면 편합니다.', 'The MRT and light rail reach most sights; a transit card such as iPASS is handy.', 'MRTとライトレールで主な名所を回れ、交通カード（iPASSなど）が便利です。'],
      ['치진섬은 페리로 금방 건너가 해산물 거리와 해변을 둘러볼 수 있습니다.', 'Cijin Island is a short ferry ride away for seafood streets and beaches.', '旗津島はフェリーですぐ渡れ、海鮮街とビーチを楽しめます。'],
    ],
  },
  'kota-kinabalu': {
    h: [
      ['툰쿠 압둘 라만 해양공원', 'Tunku Abdul Rahman Marine Park', 'トゥンク・アブドゥル・ラーマン海洋公園', '시내 앞바다 섬들로 보트를 타고 가서 스노클링을 즐깁니다.', 'Islands just offshore, reached by boat for snorkelling.', '市の沖の島々へボートで行き、シュノーケリングを楽しみます。'],
      ['키나발루 공원', 'Kinabalu Park', 'キナバル公園', '동남아 최고봉 키나발루산이 있는 유네스코 세계유산 공원입니다.', 'A UNESCO World Heritage park around Mount Kinabalu.', 'キナバル山がある世界遺産の公園です。'],
      ['탄중아루 해변 노을', 'Tanjung Aru sunset', 'タンジュン・アル・ビーチの夕日', '시내에서 가까운 해변으로, 해 질 녘 노을이 아름답기로 유명합니다.', 'A beach near the city famed for its sunsets.', '市内から近いビーチで、夕焼けが美しいことで有名です。'],
      ['마리마리 문화마을', 'Mari Mari Cultural Village', 'マリマリ文化村', '사바주 다섯 민족의 전통 가옥과 생활을 체험하는 \'살아 있는 박물관\'으로, 하루 정해진 시간에 투어가 열립니다.', 'A \'living museum\' of the traditional homes and crafts of five Sabah peoples, visited on scheduled tours.', 'サバ州の五つの民族の伝統家屋と暮らしを体験する「生きた博物館」で、決まった時間にツアーがあります。'],
    ],
    t: [
      ['해양공원 섬에 들어갈 때는 공원 입장료를 따로 내야 합니다.', 'A separate park fee is charged when you land on the marine-park islands.', '海洋公園の島に上陸する際は別途入園料がかかります。'],
      ['일요일 오전 가야 거리 시장(Gaya Street Sunday Market)에서 현지 간식과 공예품을 볼 수 있습니다.', 'The Gaya Street Sunday Market is good for local snacks and crafts.', '日曜朝のガヤ・ストリート・マーケットで地元のお菓子や工芸品が見られます。'],
    ],
  },
  krakow: {
    h: [
      ['중앙 광장과 직물회관', 'Main Market Square and Cloth Hall', '中央広場と織物会館', '유럽에서 손꼽히게 큰 중세 광장. 직물회관 안에 기념품 상점이 있습니다.', 'One of Europe’s largest medieval squares, with stalls in the Cloth Hall.', 'ヨーロッパ有数の中世の広場。織物会館に土産店があります。'],
      ['바벨성', 'Wawel Royal Castle', 'ヴァヴェル城', '폴란드 왕들이 머물던 언덕 위 성과 대성당입니다.', 'The hilltop castle and cathedral of the Polish kings.', 'ポーランド王が暮らした丘の上の城と大聖堂です。'],
      ['카지미에시 지구', 'Kazimierz', 'カジミエシュ地区', '옛 유대인 지구. 카페와 식당이 많고 쉰들러 공장도 가깝습니다.', "The old Jewish quarter, full of cafés and near Schindler's Factory.", '旧ユダヤ人地区。カフェや食堂が多く、シンドラーの工場も近いです。'],
      ['비엘리치카 소금광산', 'Wieliczka Salt Mine', 'ヴィエリチカ岩塩坑', '유네스코 세계유산으로, 지하 갱도와 소금으로 조각한 예배당을 가이드 투어로 둘러봅니다. 크라쿠프에서 당일로 다녀옵니다.', 'A UNESCO-listed mine with underground chambers and a chapel carved from salt, seen on guided tours; an easy day trip.', '世界遺産の岩塩坑で、地下坑道や塩で彫られた礼拝堂をガイドツアーで巡ります。クラクフから日帰りできます。'],
      ['아우슈비츠-비르케나우 기념관', 'Auschwitz-Birkenau Memorial', 'アウシュヴィッツ=ビルケナウ博物館', '나치 강제수용소 터에 세워진 기념관이자 박물관입니다. 방문 시간대 예약이 필요하니 공식 사이트에서 미리 확인하세요.', 'The memorial and museum at the former Nazi camp; entry is by timed reservation, so book on the official site.', 'ナチス強制収容所跡の記念館・博物館です。入場は時間指定予約が必要なので公式サイトで事前に確認を。'],
    ],
    t: [
      ['성 마리아 성당 탑에서는 매시 정각 나팔 소리(헤이나우)가 울리다 중간에 끊깁니다.', 'Every hour a trumpet call (hejnał) plays from St Mary’s tower and breaks off mid-tune.', '聖マリア教会の塔から毎正時にラッパ（ヘイナウ）が鳴り、途中で途切れます。'],
      ['아우슈비츠·비엘리치카 소금광산은 하루 일정으로 다녀오며, 시간 지정 예약이 필요합니다.', 'Auschwitz and the Wieliczka Salt Mine are day trips that need timed bookings.', 'アウシュヴィッツとヴィエリチカ岩塩坑は日帰りで、時間指定予約が必要です。'],
    ],
  },
  lisbon: {
    h: [
      ['벨렝 지구', 'Belém', 'ベレン地区', '제로니무스 수도원과 벨렝탑, 원조 에그타르트 가게가 있는 지구입니다.', 'Home to Jerónimos Monastery, Belém Tower and the original custard-tart bakery.', 'ジェロニモス修道院とベレンの塔、元祖エッグタルトの店がある地区です。'],
      ['알파마', 'Alfama', 'アルファマ', '언덕 위 미로 같은 옛 동네. 저녁에 파두 공연을 하는 식당이 많습니다.', 'The maze-like old hillside quarter, with fado in many restaurants at night.', '丘の上の迷路のような旧市街。夜はファドを聴ける店が多いです。'],
      ['28번 트램', 'Tram 28', '28番トラム', '언덕 동네를 지나는 옛 노란 트램 노선입니다.', 'The vintage yellow tram that climbs through the old neighbourhoods.', '丘の街を走る昔ながらの黄色いトラムです。'],
      ['상 조르즈 성', 'São Jorge Castle', 'サン・ジョルジェ城', '알파마 언덕 꼭대기의 성으로, 성벽 위에서 리스본 시내와 테주강이 내려다보입니다.', 'The castle crowning Alfama’s hill, with views over the city and the Tagus from its walls.', 'アルファマの丘の上の城で、城壁からリスボン市内とテージョ川を見渡せます。'],
      ['신트라', 'Sintra', 'シントラ', '기차로 당일 다녀오는 언덕 마을로, 알록달록한 페나 궁전과 숲속 궁전들이 유네스코 세계유산입니다.', 'A hill town a day trip away by train, whose colourful Pena Palace and forest estates are UNESCO-listed.', '電車で日帰りできる丘の町で、色鮮やかなペーナ宮殿や森の宮殿群は世界遺産です。'],
    ],
    t: [
      ['리스본에는 언덕과 돌로 포장된 길이 많습니다. 걷기 편하고 미끄럼을 덜 타는 신발을 준비하세요.', 'Lisbon has many hills and stone-paved streets. Bring comfortable shoes with good grip for walking.', 'リスボンには坂道や石畳が多くあります。歩きやすく滑りにくい靴を用意しましょう。'],
      ['식당에서 앉자마자 나오는 빵·올리브는 먹으면 요금이 붙습니다. 원하지 않으면 돌려보내도 됩니다.', 'Bread and olives brought to the table are charged if eaten; you can send them back.', '席に着くと出てくるパンやオリーブは食べると料金がかかります。不要なら下げてもらえます。'],
      ['공항에서 시내: 리스본 공항은 지하철 빨간선(Vermelha) 종점과 연결되어 시내까지 지하철로 갈 수 있습니다.', 'Airport to city: Lisbon Airport is the terminus of the Metro Red line, so you can ride straight into town.', '空港から市内へ：リスボン空港は地下鉄レッドラインの終点とつながっていて、地下鉄で市内へ行けます。'],
    ],
  },
  'los-angeles': {
    h: [
      ['그리피스 천문대', 'Griffith Observatory', 'グリフィス天文台', '할리우드 사인과 시내 야경이 보이는 언덕 위 천문대입니다.', 'A hilltop observatory with views of the Hollywood Sign and city lights.', 'ハリウッドサインと夜景が見える丘の上の天文台です。'],
      ['산타모니카 피어', 'Santa Monica Pier', 'サンタモニカ・ピア', '놀이공원이 있는 해변 부두. 루트 66의 끝 지점으로도 알려져 있습니다.', 'A seaside pier with an amusement park, known as the end of Route 66.', '遊園地がある海辺の桟橋。ルート66の終点としても知られます。'],
      ['게티 센터', 'Getty Center', 'ゲッティ・センター', '언덕 위 미술관과 정원. 건축과 전망도 볼거리입니다.', 'A hilltop art museum and garden, worth it for the architecture and views too.', '丘の上の美術館と庭園。建築と眺めも見どころです。'],
      ['할리우드 명예의 거리', 'Hollywood Walk of Fame', 'ハリウッド・ウォーク・オブ・フェーム', '스타의 이름이 새겨진 별 모양 동판이 할리우드 대로를 따라 이어집니다.', 'Star-shaped plaques bearing celebrities’ names line Hollywood Boulevard.', 'スターの名前が刻まれた星形のプレートがハリウッド大通りに続きます。'],
      ['유니버설 스튜디오 할리우드', 'Universal Studios Hollywood', 'ユニバーサル・スタジオ・ハリウッド', '실제 영화 촬영장을 도는 스튜디오 투어와 놀이기구가 함께 있는 테마파크입니다.', 'A theme park combining rides with a tour of working film studios.', '実際の撮影所を巡るスタジオツアーとアトラクションがあるテーマパークです。'],
    ],
    t: [
      ['명소끼리 멀고 차가 많이 막혀 하루에 한 지역씩 묶어 다니는 것이 좋습니다.', 'Sights are far apart and traffic is heavy; group each day by area.', '名所同士が遠く渋滞もひどいので、1日1エリアにまとめましょう。'],
      ['식당 메뉴 가격에는 판매세와 팁이 빠져 있어 실제로는 메뉴 가격보다 꽤 더 나옵니다.', 'Menu prices exclude sales tax and tip, so the bill ends up well above the menu price.', 'メニュー価格に売上税とチップは含まれず、実際の支払いはかなり高くなります。'],
      ['공항에서 시내: LAX에서 택시·차량 호출은 \'LAX-it\' 승차장에서 탑니다. 유니언역까지는 FlyAway 버스가 다닙니다.', 'Airport to city: taxis and ride-hail pick up at the LAX-it lot; FlyAway buses run to Union Station.', '空港から市内へ：LAXではタクシーや配車サービスは「LAX-it」乗り場から乗ります。ユニオン駅へはFlyAwayバスがあります。'],
    ],
  },
  macau: {
    h: [
      ['세나도 광장·성 바울 성당 유적', 'Senado Square and Ruins of St Paul’s', 'セナド広場・聖ポール天主堂跡', '포르투갈풍 물결무늬 광장과 정면 벽만 남은 성당 유적이 이어집니다.', 'The Portuguese-tiled square leading up to the façade-only church ruins.', 'ポルトガル風の波模様の広場から、正面壁だけが残る聖堂跡へ続きます。'],
      ['타이파 빌리지', 'Taipa Village', 'タイパ・ビレッジ', '골목에 포르투갈·매캐니즈 식당과 육포·과자 가게가 모여 있습니다.', 'Lanes of Portuguese and Macanese restaurants and snack shops.', '路地にポルトガル・マカオ料理店や菓子店が並びます。'],
      ['마카오 타워', 'Macau Tower', 'マカオタワー', '전망대와 번지점프로 유명한 타워입니다.', 'A tower known for its observation deck and bungee jump.', '展望台とバンジージャンプで有名なタワーです。'],
      ['몬테 요새와 기아 요새', 'Mount Fortress and Guia Fortress', 'モンテの砦とギア要塞', '유네스코 세계유산 \'마카오 역사지구\'에 속한 언덕 위 요새들로, 시내를 내려다볼 수 있습니다.', 'Hilltop forts in the UNESCO-listed Historic Centre of Macao, with views over the city.', '世界遺産「マカオ歴史市街地区」に含まれる丘の上の要塞で、市街を見渡せます。'],
      ['아마 사원', 'A-Ma Temple', '媽閣廟', '바다의 여신 마조를 모시는 마카오에서 가장 오래된 사원 중 하나로, 마카오라는 지명의 유래로 알려져 있습니다.', 'One of Macao\'s oldest temples, dedicated to the sea goddess Mazu and linked to the city\'s name.', '海の女神・媽祖を祀るマカオ最古級の寺院で、マカオの地名の由来とされます。'],
    ],
    t: [
      ['대형 리조트들이 운영하는 무료 셔틀버스로 국경·페리 터미널과 시내를 오갈 수 있습니다.', 'Free shuttle buses run by the big resorts link the border, ferry terminals and town.', '大型リゾートの無料シャトルバスで国境やフェリーターミナルと市内を行き来できます。'],
      ['마카오 파타카와 홍콩달러를 함께 쓰지만, 거스름돈은 파타카로 받는 경우가 많습니다.', 'Hong Kong dollars are accepted, but change usually comes in patacas.', '香港ドルも使えますが、お釣りはパタカで返ってくることが多いです。'],
    ],
  },
};
