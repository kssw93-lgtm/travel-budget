/** 도시 가이드 초안 7 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_7: Record<string, Compact> = {
  'las-vegas': {
    h: [
      ['라스베이거스 스트립', 'The Strip', 'ストリップ', '대형 호텔·카지노가 늘어선 중심 거리. 호텔마다 무료 볼거리가 있습니다.', 'The boulevard of mega-resorts, many with free shows.', '大型ホテルとカジノが並ぶメイン通り。ホテルごとに無料の見どころがあります。'],
      ['벨라지오 분수 쇼', 'Fountains of Bellagio', 'ベラージオの噴水ショー', '저녁마다 음악에 맞춰 춤추는 무료 분수 쇼입니다.', 'A free musical fountain show every evening.', '毎晩音楽に合わせて踊る無料の噴水ショーです。'],
      ['그랜드 캐니언·레드록 캐니언', 'Grand Canyon and Red Rock Canyon', 'グランドキャニオン・レッドロックキャニオン', '사막 협곡을 보러 가는 당일 여행지입니다.', 'Desert canyons within reach on a day trip.', '砂漠の峡谷を見に行く日帰りの行き先です。'],
      ['후버 댐', 'Hoover Dam', 'フーバーダム', '콜로라도강의 거대한 콘크리트 댐으로, 라스베이거스에서 차로 약 45분 거리입니다. 방문자 센터와 투어가 있습니다.', 'The giant Colorado River dam about 45 minutes\' drive away, with a visitor centre and tours.', 'コロラド川の巨大なダムで、ラスベガスから車で約45分。ビジターセンターとツアーがあります。'],
      ['네온 박물관', 'The Neon Museum', 'ネオン博物館', '옛 카지노와 호텔의 네온 간판을 모아 둔 야외 전시장으로, 밤 투어가 인기입니다.', 'An outdoor \'boneyard\' of old casino and hotel neon signs; night tours are popular.', 'かつてのカジノやホテルのネオンサインを集めた屋外展示場で、夜のツアーが人気です。'],
    ],
    t: [
      ['호텔 요금 외에 리조트 요금이 1박마다 따로 붙는 곳이 많습니다.', 'Many hotels add a nightly resort fee on top of the room rate.', '多くのホテルで宿泊料とは別に1泊ごとのリゾートフィーがかかります。'],
      ['한여름 낮 기온이 매우 높아 물을 자주 마시고 야외 활동은 아침·저녁에 하세요.', 'Summer days are extremely hot; drink water and go out in the morning or evening.', '真夏の日中は非常に暑いので、水をこまめに飲み、屋外は朝夕に。'],
    ],
  },
  barcelona: {
    h: [
      ['사그라다 파밀리아', 'Sagrada Família', 'サグラダ・ファミリア', '가우디의 미완성 성당. 시간 지정 예약을 해야 들어갈 수 있습니다.', "Gaudí's unfinished basilica; entry needs a timed booking.", 'ガウディの未完の聖堂。時間指定の予約が必要です。'],
      ['구엘 공원', 'Park Güell', 'グエル公園', '모자이크 벤치가 있는 가우디의 공원. 기념물 구역은 예약제입니다.', "Gaudí's park of mosaic benches; the monument zone is ticketed.", 'モザイクのベンチがあるガウディの公園。記念エリアは予約制です。'],
      ['고딕 지구·보케리아 시장', 'Gothic Quarter and La Boqueria', 'ゴシック地区・ボケリア市場', '중세 골목과 람블라스 거리의 시장이 이어집니다.', 'Medieval lanes and the market off La Rambla.', '中世の路地とランブラス通りの市場が続きます。'],
      ['카사 바트요', 'Casa Batlló', 'カサ・バトリョ', '가우디가 고친 집으로, 뼈와 비늘을 닮은 외관과 빛이 들어오는 실내가 인상적입니다.', 'Gaudí’s remodelled house, with a bone-and-scale façade and light-filled interiors.', 'ガウディが改装した邸宅で、骨やうろこを思わせる外観と光あふれる室内が印象的です。'],
      ['몬주익 언덕과 카탈루냐 미술관', 'Montjuïc and the National Art Museum of Catalonia', 'モンジュイックの丘とカタルーニャ美術館', '언덕 위 궁전 같은 미술관에 로마네스크 벽화가 모여 있고, 앞 계단에서 시내가 내려다보입니다.', 'A palatial hilltop museum of Romanesque murals, with city views from its front steps.', '丘の上の宮殿のような美術館にロマネスク壁画が集まり、正面の階段から市内を見渡せます。'],
    ],
    t: [
      ['람블라스 거리와 지하철에서는 소매치기가 많으니 가방을 앞으로 메세요.', 'Pickpockets work La Rambla and the metro; wear your bag in front.', 'ランブラス通りや地下鉄ではスリが多いので、バッグは前に。'],
      ['바르셀로나 숙박에는 관광세가 부과됩니다. 숙소에서 청구 방식을 확인하세요.', 'A tourist tax applies to accommodation in Barcelona. Check how your lodging collects it.', 'バルセロナの宿泊には観光税がかかります。徴収方法は宿泊施設に確認してください。'],
    ],
  },
  rome: {
    h: [
      ['콜로세움·포로 로마노', 'Colosseum and Roman Forum', 'コロッセオ・フォロ・ロマーノ', '고대 로마의 원형경기장과 광장 유적. 시간 지정 예약이 필요합니다.', 'The ancient arena and forum; timed tickets are required.', '古代ローマの円形闘技場と広場遺跡。時間指定予約が必要です。'],
      ['바티칸 박물관·시스티나 성당', 'Vatican Museums and Sistine Chapel', 'バチカン美術館・システィーナ礼拝堂', '미켈란젤로 천장화가 있는 박물관입니다.', "Michelangelo's ceiling in the Sistine Chapel.", 'ミケランジェロの天井画がある美術館です。'],
      ['트레비 분수', 'Trevi Fountain', 'トレビの泉', '동전을 던지면 로마에 다시 온다는 전설의 분수입니다.', 'Toss a coin to return to Rome, legend says.', 'コインを投げるとローマに再び来られるという伝説の泉です。'],
      ['판테온', 'Pantheon', 'パンテオン', '2천 년 가까이 된 로마 신전으로, 돔 꼭대기의 둥근 구멍으로 빛이 들어옵니다.', 'A nearly 2,000-year-old Roman temple lit by the open oculus in its dome.', '2千年近い歴史を持つローマの神殿で、ドーム頂上の円い穴から光が差し込みます。'],
      ['보르게세 미술관', 'Galleria Borghese', 'ボルゲーゼ美術館', '베르니니 조각과 카라바조 그림으로 유명한 미술관으로, 시간 지정 예약제입니다.', 'Famous for Bernini sculptures and Caravaggio paintings; entry is by timed reservation.', 'ベルニーニの彫刻とカラヴァッジョの絵画で知られる美術館で、時間指定の予約制です。'],
    ],
    t: [
      ['성당에 들어갈 때는 어깨와 무릎을 가려야 합니다.', 'Cover shoulders and knees to enter churches.', '教会に入る際は肩と膝を隠しましょう。'],
      ['시내 곳곳의 식수대(나소네) 물은 마셔도 되니 물병을 채워 다니세요.', 'The nasoni drinking fountains are safe; refill your bottle.', '街中の水飲み場（ナゾーネ）の水は飲めるので、ボトルに補充しましょう。'],
    ],
  },
  'new-york': {
    h: [
      ['센트럴 파크', 'Central Park', 'セントラルパーク', '맨해튼 한가운데 큰 공원. 자전거를 빌려 한 바퀴 돌기 좋습니다.', 'The huge park in the middle of Manhattan, good by bike.', 'マンハッタンの真ん中の大きな公園。自転車で一周するのがおすすめです。'],
      ['메트로폴리탄 미술관', 'The Met', 'メトロポリタン美術館', '세계 최대급 미술관. 하루에 다 보기 어렵습니다.', 'One of the world’s largest art museums.', '世界最大級の美術館。1日では見きれません。'],
      ['자유의 여신상·스태튼 아일랜드 페리', 'Statue of Liberty and Staten Island Ferry', '自由の女神・スタテンアイランド・フェリー', '무료 페리에서 자유의 여신상과 맨해튼 스카이라인을 볼 수 있습니다.', 'The free ferry passes the Statue of Liberty and the skyline.', '無料のフェリーから自由の女神とマンハッタンの摩天楼が見えます。'],
      ['하이라인', 'The High Line', 'ハイライン', '옛 고가 철로를 공원으로 바꾼 산책로로, 첼시 일대를 내려다보며 걷습니다.', 'A park built on an old elevated railway, walking above Chelsea.', '旧高架線路を公園にした遊歩道で、チェルシー一帯を見下ろしながら歩けます。'],
      ['9/11 메모리얼', '9/11 Memorial & Museum', '9/11メモリアル＆ミュージアム', '세계무역센터 자리에 만든 추모 공간으로, 두 개의 거대한 사각 연못이 옛 빌딩 터를 표시합니다.', 'The memorial on the World Trade Center site, where two vast reflecting pools mark the towers’ footprints.', '世界貿易センター跡地の追悼施設で、二つの巨大な四角い池がビルの跡を示しています。'],
    ],
    t: [
      ['지하철은 비접촉 카드로 찍고 타며, 일주일 안에 일정 횟수를 넘기면 나머지는 무료입니다.', 'Tap a contactless card on the subway; after a set number of rides in a week, the rest are free.', '地下鉄はタッチ決済で乗れ、1週間で一定回数を超えると残りは無料です。'],
      ['뉴욕 식당에서는 메뉴 표시액에 판매세가 더해질 수 있고, 팁이나 명시된 서비스 요금도 확인해야 합니다.', 'At New York City restaurants, sales tax may be added to menu prices; check any tip or disclosed service charge as well.', 'ニューヨークの飲食店では、メニュー表示額に売上税が加わる場合があります。チップや明示されたサービス料も確認しましょう。'],
    ],
  },
  istanbul: {
    h: [
      ['아야 소피아', 'Hagia Sophia', 'アヤソフィア', '성당에서 모스크로 쓰인 거대한 돔 건축물입니다.', 'The great domed building, church then mosque.', '聖堂からモスクとなった巨大なドーム建築です。'],
      ['그랜드 바자르', 'Grand Bazaar', 'グランドバザール', '수천 개 상점이 모인 세계에서 손꼽히게 오래된 실내 시장입니다.', 'One of the world’s oldest covered markets, with thousands of shops.', '数千の店が集まる世界有数の古い屋内市場です。'],
      ['보스포루스 해협 유람선', 'Bosphorus cruise', 'ボスポラス海峡クルーズ', '유럽과 아시아 사이 해협을 배로 오가며 궁전과 마을을 봅니다.', 'Sail the strait between Europe and Asia past palaces and villages.', 'ヨーロッパとアジアの間の海峡を船で巡り、宮殿や町を眺めます。'],
      ['술탄 아흐메트 모스크(블루 모스크)', 'Sultan Ahmed Mosque (Blue Mosque)', 'スルタンアフメト・モスク（ブルーモスク）', '푸른 타일로 장식된 내부와 여섯 개의 첨탑이 특징인 모스크로, 예배 시간에는 관광객 입장이 제한됩니다.', 'Known for its blue-tiled interior and six minarets; visitor entry pauses at prayer times.', '青いタイルの内装と6本のミナレットが特徴のモスクで、礼拝時間は観光客の入場が制限されます。'],
      ['돌마바흐체 궁전', 'Dolmabahçe Palace', 'ドルマバフチェ宮殿', '보스포루스 해협 변의 오스만 제국 말기 궁전으로, 화려한 샹들리에 홀이 유명합니다.', 'The late-Ottoman palace on the Bosphorus, famed for its chandeliered halls.', 'ボスポラス海峡沿いのオスマン帝国末期の宮殿で、豪華なシャンデリアの広間が有名です。'],
    ],
    t: [
      ['교통카드(이스탄불카르트) 하나로 지하철·트램·페리를 탈 수 있습니다.', 'One Istanbulkart covers metro, tram and ferry.', 'イスタンブールカード1枚で地下鉄・トラム・フェリーに乗れます。'],
      ['모스크에 들어갈 때는 신발을 벗고 복장 규칙을 지키세요. 여성은 머리를 가릴 스카프를 준비하면 좋습니다.', 'Remove your shoes and follow the dress code when entering a mosque. Women should bring a headscarf.', 'モスクに入る際は靴を脱ぎ、服装規定に従ってください。女性は頭を覆うスカーフを用意すると安心です。'],
    ],
  },
  shanghai: {
    h: [
      ['와이탄', 'The Bund', '外灘', '강변의 근대 건축물과 건너편 푸둥 마천루 야경이 유명합니다.', 'Colonial-era buildings facing the Pudong skyline across the river.', '川沿いの近代建築と対岸の浦東の夜景が有名です。'],
      ['위위안', 'Yu Garden', '豫園', '명나라 정원과 주변 옛 상점가입니다.', 'A Ming-dynasty garden and the old bazaar around it.', '明代の庭園と周りの古い商店街です。'],
      ['티엔즈팡·신톈디', 'Tianzifang and Xintiandi', '田子坊・新天地', '옛 골목 주택을 카페·상점으로 바꾼 거리입니다.', 'Old lane houses turned into cafés and shops.', '古い路地の住宅をカフェや店にした通りです。'],
      ['상하이 박물관', 'Shanghai Museum', '上海博物館', '인민광장에 있는 중국 고대 미술 박물관으로, 청동기·도자기·서화 컬렉션이 유명합니다.', 'A museum of ancient Chinese art on People\'s Square, known for bronzes, ceramics and calligraphy.', '人民広場にある中国古代美術の博物館で、青銅器・陶磁器・書画のコレクションが有名です。'],
      ['상하이 디즈니랜드', 'Shanghai Disneyland', '上海ディズニーランド', '푸둥에 있는 디즈니 테마파크로, 지하철 11호선으로 갈 수 있습니다.', 'Disney\'s theme park in Pudong, reached by Metro Line 11.', '浦東にあるディズニーのテーマパークで、地下鉄11号線で行けます。'],
    ],
    t: [
      ['결제는 알리페이·위챗페이가 기본이라 출국 전에 외국 카드 연동을 해 두면 편합니다.', 'Alipay and WeChat Pay are the norm; link a foreign card before you go.', '支払いはアリペイ・WeChatペイが基本。出発前に海外カードを連携しておくと便利です。'],
      ['샤오룽바오는 피를 살짝 찢어 국물을 먼저 마시면 덜 뜨겁게 먹을 수 있습니다.', 'Nibble a xiaolongbao and sip the soup first to avoid burns.', '小籠包は皮を少し破ってスープを先に飲むと、やけどしにくいです。'],
    ],
  },
  fukuoka: {
    h: [
      ['나카스 포장마차(야타이)', 'Nakasu yatai stalls', '中洲の屋台', '강변에 저녁마다 라멘·꼬치 포장마차가 섭니다.', 'Riverside food stalls serving ramen and skewers every evening.', '川沿いに毎晩ラーメンや串焼きの屋台が並びます。'],
      ['다자이후 덴만구', 'Dazaifu Tenmangu', '太宰府天満宮', '학문의 신을 모신 신사. 매화떡(우메가에모치)이 명물입니다.', 'The shrine to the god of learning, known for umegae-mochi.', '学問の神様を祀る神社。梅ヶ枝餅が名物です。'],
      ['캐널시티 하카타', 'Canal City Hakata', 'キャナルシティ博多', '운하가 흐르는 복합 쇼핑몰. 분수 쇼가 열립니다.', 'A shopping complex built around a canal, with fountain shows.', '運河が流れる複合商業施設。噴水ショーがあります。'],
      ['오호리 공원', 'Ohori Park', '大濠公園', '큰 연못 둘레를 따라 산책로가 이어진 공원으로, 현지인이 조깅과 산책을 즐기는 곳입니다.', 'A park with a walking loop around a large pond, beloved by locals for jogging and strolls.', '大きな池の周りに散策路が続く公園で、地元の人のジョギングや散歩の場です。'],
      ['후쿠오카 타워', 'Fukuoka Tower', '福岡タワー', '바닷가에 선 234m 타워로, 전망대에서 하카타만과 시내 야경을 볼 수 있습니다.', 'A 234 m seaside tower with views over Hakata Bay and the city lights.', '海辺に建つ234mのタワーで、展望室から博多湾と市内の夜景が見られます。'],
    ],
    t: [
      ['공항에서 시내(하카타역)까지 지하철로 몇 정거장이라 이동이 매우 빠릅니다.', 'The airport is only a few subway stops from Hakata Station.', '空港から博多駅まで地下鉄で数駅と、とても近いです。'],
      ['돈코쓰 라멘은 면 굵기와 익힘 정도를 고르고, 면만 추가(가에다마)할 수 있습니다.', 'At tonkotsu ramen shops you choose noodle firmness and can order extra noodles (kaedama).', '豚骨ラーメンは麺の硬さを選べ、替え玉もできます。'],
    ],
  },
  'hong-kong': {
    h: [
      ['빅토리아 피크', 'Victoria Peak', 'ヴィクトリア・ピーク', '피크 트램으로 올라 항구와 마천루 전경을 봅니다.', 'Ride the Peak Tram for harbour and skyline views.', 'ピークトラムで上り、港と摩天楼を一望します。'],
      ['스타페리·침사추이', 'Star Ferry and Tsim Sha Tsui', 'スターフェリー・尖沙咀', '오래된 페리로 항구를 건너고, 저녁 심포니 오브 라이트를 봅니다.', 'Cross the harbour on the old ferry and watch the evening Symphony of Lights.', '昔ながらのフェリーで港を渡り、夜のシンフォニー・オブ・ライツを見ます。'],
      ['몽콕 야시장', 'Mong Kok markets', '旺角のマーケット', '레이디스 마켓 등 거리 시장이 모인 번화가입니다.', 'Busy district of street markets like the Ladies’ Market.', '女人街など路上市場が集まる繁華街です。'],
      ['옹핑 360·톈탄 대불', 'Ngong Ping 360 and the Big Buddha', '昂坪360・天壇大仏', '케이블카를 타고 란터우섬 산 위로 올라가 거대한 청동 좌불과 포린 사원을 봅니다.', 'Ride the cable car up Lantau Island to the giant bronze Buddha and Po Lin Monastery.', 'ケーブルカーでランタオ島の山上へ上り、巨大な青銅の大仏と宝蓮禅寺を訪ねます。'],
      ['M+ 미술관', 'M+ museum', 'M+（エムプラス）美術館', '서구룡 문화지구의 현대 시각 문화 미술관으로, 빅토리아 하버 전망이 좋습니다.', 'West Kowloon’s museum of contemporary visual culture, with fine views over Victoria Harbour.', '西九龍文化地区にある現代ビジュアル文化の美術館で、ビクトリア・ハーバーの眺めも見事です。'],
    ],
    t: [
      ['교통카드(옥토퍼스)로 지하철·버스·페리와 편의점 결제까지 할 수 있습니다.', 'An Octopus card works on MTR, buses, ferries and in convenience stores.', 'オクトパスカードで地下鉄・バス・フェリーやコンビニの支払いができます。'],
      ['홍콩식 딤섬은 전통 찻집에서 얌차로 즐겨 보세요. 차찬텡은 별도의 홍콩식 카페 문화입니다.', 'Try Hong Kong dim sum at a traditional teahouse as yum cha. Cha chaan teng is a separate local café tradition.', '香港の点心は伝統的な茶楼で飲茶として楽しめます。茶餐廳は別の香港式カフェ文化です。'],
    ],
  },
  'kuala-lumpur': {
    h: [
      ['페트로나스 트윈타워', 'Petronas Twin Towers', 'ペトロナス・ツインタワー', '쌍둥이 빌딩과 스카이브리지. 저녁에 KLCC 공원 분수 쇼가 열립니다.', 'The twin towers and skybridge, with fountain shows in KLCC Park at night.', 'ツインタワーとスカイブリッジ。夜はKLCC公園で噴水ショーがあります。'],
      ['바투 동굴', 'Batu Caves', 'バトゥ洞窟', '알록달록한 계단을 올라가는 힌두교 동굴 사원입니다.', 'A Hindu cave temple up a flight of rainbow stairs.', 'カラフルな階段を上るヒンドゥー教の洞窟寺院です。'],
      ['잘란 알로 야시장', 'Jalan Alor', 'ジャラン・アロー', '저녁마다 노점과 식당이 늘어서는 먹자골목입니다.', 'A food street of stalls and restaurants every evening.', '毎晩屋台と食堂が並ぶグルメ通りです。'],
      ['KL 타워', 'KL Tower (Menara Kuala Lumpur)', 'KLタワー', '숲 언덕 위에 선 통신탑 전망대로, 페트로나스 트윈타워가 정면으로 보입니다.', 'A hilltop telecom tower with an observation deck facing the Petronas Towers.', '森の丘に建つ通信塔の展望台で、ペトロナス・ツインタワーを正面に望めます。'],
      ['KL 새 공원', 'KL Bird Park', 'KLバードパーク', '거대한 그물 안에서 새들이 자유롭게 날아다니는 도심 공원입니다.', 'A city park where birds fly freely under a giant net canopy.', '巨大なネットの中を鳥たちが自由に飛び回る都市公園です。'],
    ],
    t: [
      ['바투 동굴의 사원 구역에서는 어깨와 무릎을 가리는 복장을 준비하세요. 노출이 큰 옷은 입장이 제한될 수 있습니다.', 'Cover your shoulders and knees in Batu Caves\' temple areas; revealing clothing may restrict entry.', 'バトゥ洞窟の寺院エリアでは肩と膝を覆う服装を用意しましょう。露出の多い服装では入場が制限される場合があります。'],
      ['그랩 같은 차량 호출 앱에서는 예약 전에 예상 요금을 볼 수 있습니다. 택시와 어느 쪽이 편한지는 상황에 따라 다릅니다.', 'Ride-hailing apps such as Grab show an upfront fare before booking. Compare them with taxis for your route.', 'Grabなどの配車アプリでは予約前に料金を確認できます。タクシーとも比較して選びましょう。'],
    ],
  },
  sapporo: {
    h: [
      ['오도리 공원', 'Odori Park', '大通公園', '2월 눈축제의 주 무대인 시내 중심 공원입니다.', 'The central park that hosts the February Snow Festival.', '2月の雪まつりのメイン会場となる市中心の公園です。'],
      ['니조 시장', 'Nijo Market', '二条市場', '해산물 덮밥과 털게 등 홋카이도 해산물을 맛보는 시장입니다.', 'A market for Hokkaido seafood bowls and hairy crab.', '海鮮丼や毛ガニなど北海道の海の幸を味わえる市場です。'],
      ['오타루 운하', 'Otaru Canal', '小樽運河', '기차로 가까운 운하 도시. 유리 공예와 오르골 가게가 많습니다.', 'A nearby canal town known for glasswork and music boxes.', '電車で近い運河の町。ガラス工芸とオルゴールの店が多いです。'],
      ['모이와산 로프웨이', 'Mt. Moiwa Ropeway', 'もいわ山ロープウェイ', '로프웨이와 미니 케이블카로 정상에 올라 삿포로 시내 야경을 내려다봅니다.', 'Ropeway and mini cable car to the summit for a night view over Sapporo.', 'ロープウェイとミニケーブルカーで山頂へ上り、札幌の夜景を見下ろせます。'],
      ['시로이 코이비토 파크', 'Shiroi Koibito Park', '白い恋人パーク', '홋카이도 대표 과자 「시로이 코이비토」 공장 견학과 과자 만들기 체험을 할 수 있는 곳입니다.', 'The factory park of Hokkaido’s famous Shiroi Koibito biscuits, with tours and baking workshops.', '北海道を代表するお菓子「白い恋人」の工場見学やお菓子作り体験ができます。'],
    ],
    t: [
      ['겨울에는 길이 매우 미끄러우니 미끄럼 방지 신발이나 덧신을 준비하세요.', 'Winter sidewalks are icy; wear non-slip shoes or grips.', '冬は道がとても滑るので、滑り止め付きの靴を用意しましょう。'],
      ['미소 라멘·수프 카레·징기스칸(양고기 구이)이 삿포로 대표 음식입니다.', 'Miso ramen, soup curry and Genghis Khan lamb barbecue are local classics.', '味噌ラーメン、スープカレー、ジンギスカンが札幌の名物です。'],
    ],
  },
  'nha-trang': {
    h: [
      ['나트랑 해변', 'Nha Trang Beach', 'ニャチャン・ビーチ', '시내를 따라 길게 이어진 해변 산책로입니다.', 'A long beach promenade running along the city.', '市内に沿って長く続くビーチの遊歩道です。'],
      ['뽀나가르 참탑', 'Po Nagar Cham Towers', 'ポーナガル塔', '참파 왕국 시대에 세운 붉은 벽돌 탑입니다.', 'Red-brick towers from the Champa kingdom.', 'チャンパ王国時代に建てられた赤レンガの塔です。'],
      ['섬 투어', 'Island tours', 'アイランドツアー', '배를 타고 주변 섬을 돌며 스노클링을 즐깁니다.', 'Boat trips around nearby islands for snorkelling.', '船で周辺の島を巡り、シュノーケリングを楽しみます。'],
    ],
    t: [
      ['나트랑 근교에는 탑바 등 진흙 온천 시설이 있어 시내 관광과 함께 둘러볼 수 있습니다.', 'Mud bath venues such as Thap Ba lie near Nha Trang and can be combined with city sightseeing.', 'ニャチャン近郊にはタップバーなどの泥温泉施設があり、市内観光と合わせて訪れられます。'],
      ['차량 호출 앱(그랩 등)을 쓰면 요금이 미리 정해져 흥정할 필요가 없습니다.', 'Ride-hailing apps like Grab show the fare upfront.', 'Grabなどの配車アプリなら料金が事前に決まり、交渉不要です。'],
    ],
  },
};
