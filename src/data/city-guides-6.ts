/** 도시 가이드 초안 6 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_6: Record<string, Compact> = {
  'da-nang': {
    h: [
      ['미케 비치', 'My Khe Beach', 'ミーケー・ビーチ', '시내 바로 앞의 긴 모래 해변입니다.', 'A long sandy beach right next to the city.', '市内のすぐ前に広がる長い砂浜です。'],
      ['바나힐', 'Ba Na Hills', 'バーナーヒルズ', '긴 케이블카로 오르는 산 위 테마파크. 거대한 손 모양의 골든 브리지가 유명합니다.', 'A mountaintop park reached by cable car, famous for the Golden Bridge held by giant hands.', '長いロープウェイで登る山上のテーマパーク。巨大な手のゴールデンブリッジが有名です。'],
      ['호이안 구시가지', 'Hoi An Ancient Town', 'ホイアン旧市街', '차로 가까운 옛 무역항. 저녁에 등불이 켜진 거리가 아름답습니다.', 'A nearby old trading port, beautiful when the lanterns light up at dusk.', '車で近い古い貿易港。夕方、灯籠がともる街並みが美しいです。'],
    ],
    t: [
      ['주말 밤 용다리(드래곤 브리지)에서 불과 물을 뿜는 쇼가 열립니다.', 'On weekend nights the Dragon Bridge breathes fire and water.', '週末の夜、ドラゴンブリッジで火と水を噴くショーがあります。'],
      ['차량 호출 앱(그랩 등)을 쓰면 요금이 미리 정해져 흥정할 필요가 없습니다.', 'Ride-hailing apps like Grab show the fare upfront, so no haggling.', 'Grabなどの配車アプリなら料金が事前に決まり、交渉不要です。'],
    ],
  },
  taipei: {
    h: [
      ['타이베이 101', 'Taipei 101', '台北101', '시내 어디서나 보이는 초고층 빌딩. 전망대와 거대한 댐퍼가 볼거리입니다.', 'The skyscraper visible across the city, with an observatory and giant damper ball.', '市内どこからでも見える超高層ビル。展望台と巨大なダンパーが見どころです。'],
      ['고궁박물원', 'National Palace Museum', '故宮博物院', '중국 황실 소장품을 모은 박물관입니다.', 'Treasures from the Chinese imperial collection.', '中国皇室の収蔵品を集めた博物館です。'],
      ['스린 야시장', 'Shilin Night Market', '士林夜市', '타이베이에서 가장 큰 야시장 중 하나입니다.', 'One of Taipei’s largest night markets.', '台北最大級の夜市の一つです。'],
    ],
    t: [
      ['지하철(MRT) 안에서는 물을 포함해 먹고 마시는 것이 금지되어 벌금이 있습니다.', 'Eating and drinking, even water, is banned on the MRT and fined.', 'MRT車内では水も含め飲食禁止で、罰金があります。'],
      ['지우펀·스펀 등 근교 마을은 버스와 기차로 하루에 묶어 다녀오는 여행자가 많습니다.', 'Many combine Jiufen and Shifen in a day by bus and train.', '九份や十分など近郊の町はバスと電車で1日にまとめて回る人が多いです。'],
    ],
  },
  singapore: {
    h: [
      ['가든스 바이 더 베이', 'Gardens by the Bay', 'ガーデンズ・バイ・ザ・ベイ', '거대한 인공 나무(슈퍼트리)에 저녁마다 무료 조명 쇼가 열립니다.', 'The Supertrees host a free light show every evening.', '巨大な人工樹スーパーツリーで毎晩無料のライトショーがあります。'],
      ['마리나 베이', 'Marina Bay', 'マリーナ・ベイ', '마리나 베이 샌즈와 멀라이언 공원이 모인 항만 지역입니다.', 'The bay with Marina Bay Sands and the Merlion.', 'マリーナベイ・サンズとマーライオンが集まる湾岸エリアです。'],
      ['호커 센터', 'Hawker centres', 'ホーカーセンター', '치킨라이스·락사 등을 저렴하게 먹을 수 있는 노천 푸드코트입니다.', 'Open-air food courts for chicken rice, laksa and more.', 'チキンライスやラクサを手頃に食べられる屋台村です。'],
    ],
    t: [
      ['호커 센터에서는 휴지 한 묶음을 자리에 올려 두면 자리를 맡았다는 표시입니다.', 'A packet of tissues on a hawker-centre seat means it is taken.', 'ホーカーセンターで席にティッシュを置くのは「席取り」の印です。'],
      ['지하철·버스는 비접촉 카드로 바로 탈 수 있고, 차 안 음식물 섭취는 금지입니다.', 'Tap a contactless card on trains and buses; eating and drinking on board is banned.', '電車・バスはタッチ決済で乗れ、車内での飲食は禁止です。'],
    ],
  },
  london: {
    h: [
      ['대영박물관', 'British Museum', '大英博物館', '로제타석 등 세계 유물을 모은 박물관. 상설 전시는 무료입니다.', 'World treasures including the Rosetta Stone; the permanent collection is free.', 'ロゼッタ・ストーンなど世界の遺物を集めた博物館。常設展は無料です。'],
      ['런던 타워', 'Tower of London', 'ロンドン塔', '왕관 보석이 보관된 옛 요새입니다.', 'The old fortress that guards the Crown Jewels.', '王冠の宝石が保管されている古い要塞です。'],
      ['버로우 마켓', 'Borough Market', 'バラ・マーケット', '먹거리 노점과 식재료 가게가 모인 오래된 시장입니다.', 'A historic market of food stalls and producers.', '屋台や食材店が集まる歴史ある市場です。'],
    ],
    t: [
      ['지하철·버스는 비접촉 카드로 타면 하루·주간 요금 상한이 자동 적용됩니다.', 'Tapping a contactless card applies daily and weekly fare caps automatically.', '地下鉄・バスはタッチ決済で乗ると1日・週の上限運賃が自動で適用されます。'],
      ['국립 박물관·미술관 대부분이 상설 전시를 무료로 공개합니다.', 'Most national museums and galleries are free for permanent collections.', '国立の博物館・美術館の多くは常設展が無料です。'],
    ],
  },
  cebu: {
    h: [
      ['막탄 섬 해변', 'Mactan Island beaches', 'マクタン島のビーチ', '공항이 있는 섬으로 리조트와 아일랜드 호핑 출발지가 모여 있습니다.', 'The airport island, home to resorts and island-hopping departures.', '空港がある島で、リゾートとアイランドホッピングの拠点です。'],
      ['산토 니뇨 성당·마젤란 십자가', 'Basilica del Santo Niño and Magellan’s Cross', 'サント・ニーニョ教会とマゼラン・クロス', '필리핀 가톨릭 역사가 시작된 곳입니다.', 'Where Philippine Catholic history began.', 'フィリピンのカトリックの歴史が始まった場所です。'],
      ['오슬롭·모알보알', 'Oslob and Moalboal', 'オスロブ・モアルボアル', '남쪽 해안의 고래상어·정어리 떼 스노클링으로 유명한 곳입니다.', 'Southern coast spots famous for whale sharks and sardine runs.', '南の海岸で、ジンベエザメやイワシの群れのシュノーケリングが有名です。'],
    ],
    t: [
      ['막탄과 세부 시내 사이는 다리가 막히는 시간이 많아 이동 시간을 넉넉히 잡으세요.', 'The bridges between Mactan and Cebu City jam often; allow extra time.', 'マクタン島とセブ市内を結ぶ橋は渋滞しやすいので、時間に余裕を。'],
      ['남부 투어는 새벽에 출발하는 경우가 많아 전날 일찍 쉬는 것이 좋습니다.', 'Southern tours often leave before dawn; rest early the night before.', '南部ツアーは早朝出発が多いので、前日は早めに休みましょう。'],
    ],
  },
  honolulu: {
    h: [
      ['와이키키 해변', 'Waikiki Beach', 'ワイキキ・ビーチ', '서핑 강습과 해변 산책으로 유명한 하와이 대표 해변입니다.', 'Hawaii’s signature beach for surf lessons and strolling.', 'サーフィンレッスンと散歩で有名なハワイを代表するビーチです。'],
      ['다이아몬드 헤드', 'Diamond Head', 'ダイヤモンドヘッド', '분화구 정상까지 걸어 올라가는 트레킹 코스. 입장 예약이 필요합니다.', 'A crater summit hike that requires an advance entry reservation.', '火口の頂上まで歩くトレッキング。入場予約が必要です。'],
      ['진주만', 'Pearl Harbor', 'パールハーバー', '태평양 전쟁의 역사를 볼 수 있는 기념관이 모인 곳입니다.', 'Memorials to the Pacific War.', '太平洋戦争の歴史を伝える記念館が集まる場所です。'],
    ],
    t: [
      ['하나우마 베이 스노클링은 예약제이며 화요일 등 휴무일이 있으니 미리 확인하세요.', 'Hanauma Bay snorkelling needs a reservation and has closing days; check ahead.', 'ハナウマ湾のシュノーケリングは予約制で休業日もあるので事前に確認を。'],
      ['산호초 보호를 위해 하와이 기준에 맞는 선크림을 쓰는 것이 권장됩니다.', 'Use reef-safe sunscreen that meets Hawaii’s rules.', 'サンゴ保護のため、ハワイの基準に合う日焼け止めが推奨されます。'],
    ],
  },
  interlaken: {
    h: [
      ['융프라우요흐', 'Jungfraujoch', 'ユングフラウヨッホ', '산악 열차로 오르는 해발 높은 전망대와 빙하입니다.', 'A high-altitude viewpoint and glacier reached by mountain railway.', '登山鉄道で上る高所の展望台と氷河です。'],
      ['하더 쿨름', 'Harder Kulm', 'ハーダー・クルム', '푸니쿨라로 오르는 전망대. 두 호수와 알프스가 보입니다.', 'A funicular viewpoint over both lakes and the Alps.', 'ケーブルカーで上る展望台。2つの湖とアルプスが見えます。'],
      ['툰·브리엔츠 호수', 'Lakes Thun and Brienz', 'トゥーン湖・ブリエンツ湖', '유람선을 타고 호숫가 마을을 둘러볼 수 있습니다.', 'Cruise boats call at lakeside villages.', '遊覧船で湖畔の村を巡れます。'],
    ],
    t: [
      ['높은 산은 날씨가 빨리 바뀌니 출발 전 산 정상 실시간 화면을 확인하세요.', 'Mountain weather changes fast; check the summit webcams before you go.', '山の天気は変わりやすいので、出発前に山頂のライブカメラを確認しましょう。'],
      ['스위스 트래블 패스나 지역 할인 카드가 산악 열차 요금을 줄여 주는 경우가 많습니다.', 'Swiss Travel Pass or regional cards often reduce mountain railway fares.', 'スイストラベルパスや地域割引カードで登山鉄道が安くなることが多いです。'],
    ],
  },
  kobe: {
    h: [
      ['기타노이진칸', 'Kitano Ijinkan', '北野異人館', '개항기 외국인이 살던 서양식 저택들이 모인 언덕 동네입니다.', 'A hillside district of Western-style houses from the port-opening era.', '開港期に外国人が住んだ洋館が集まる坂の街です。'],
      ['메리켄 파크·하버랜드', 'Meriken Park and Harborland', 'メリケンパーク・ハーバーランド', '포트 타워가 보이는 항구 공원과 쇼핑 지역입니다.', 'The harbour park and shopping area by Port Tower.', 'ポートタワーが見える港の公園とショッピングエリアです。'],
      ['롯코산·누노비키 허브원', 'Mount Rokko and Nunobiki Herb Gardens', '六甲山・布引ハーブ園', '로프웨이로 오르는 정원과 야경 명소입니다.', 'Ropeway rides up to gardens and night views.', 'ロープウェイで上る庭園と夜景の名所です。'],
    ],
    t: [
      ['고베규는 인증을 받은 소고기만 이름을 쓸 수 있어, 가게에 인증서가 걸려 있는지 보면 좋습니다.', 'Only certified beef may be called Kobe beef; look for the certificate in shops.', '神戸ビーフは認定牛だけが名乗れるので、店の認定証を確認しましょう。'],
      ['오사카에서 전철로 30분 남짓이라 당일치기로 다녀오는 여행자가 많습니다.', 'About 30 minutes by train from Osaka, so many visit as a day trip.', '大阪から電車で30分ほどなので、日帰りで訪れる人が多いです。'],
    ],
  },
  hiroshima: {
    h: [
      ['평화기념공원·원폭 돔', 'Peace Memorial Park and Atomic Bomb Dome', '平和記念公園・原爆ドーム', '원폭의 기억을 전하는 공원과 자료관입니다.', 'The park and museum that preserve the memory of the atomic bombing.', '原爆の記憶を伝える公園と資料館です。'],
      ['미야지마 이쓰쿠시마 신사', 'Itsukushima Shrine, Miyajima', '宮島・厳島神社', '바다 위에 선 붉은 도리이로 유명한 섬의 신사입니다.', 'The island shrine famous for its red torii standing in the sea.', '海の上に立つ朱色の鳥居で有名な島の神社です。'],
      ['히로시마성', 'Hiroshima Castle', '広島城', '해자에 둘러싸인 성으로, 시내 중심에 있습니다.', 'A moated castle in the city centre.', '堀に囲まれた市中心部の城です。'],
    ],
    t: [
      ['미야지마의 도리이는 썰물 때 걸어서 가까이 갈 수 있어 물때표를 확인하면 좋습니다.', 'At low tide you can walk out to the Miyajima torii; check the tide table.', '宮島の鳥居は干潮時に歩いて近づけるので、潮見表を確認しましょう。'],
      ['미야지마에 들어갈 때 방문세가 따로 붙습니다.', 'A visitor tax is charged when you go to Miyajima.', '宮島に渡る際は訪問税がかかります。'],
    ],
  },
  kanazawa: {
    h: [
      ['겐로쿠엔', 'Kenroku-en', '兼六園', '일본 3대 정원으로 꼽히는 사계절 정원입니다.', 'Ranked among Japan’s three great gardens.', '日本三名園に数えられる庭園です。'],
      ['히가시차야 거리', 'Higashi Chaya District', 'ひがし茶屋街', '옛 찻집 건물이 늘어선 거리. 금박 아이스크림이 명물입니다.', 'Old teahouse streets, known for gold-leaf ice cream.', '昔の茶屋が並ぶ通り。金箔ソフトが名物です。'],
      ['오미초 시장', 'Omicho Market', '近江町市場', '해산물 덮밥을 먹을 수 있는 가나자와의 부엌 같은 시장입니다.', "Kanazawa's kitchen, great for seafood bowls.", '海鮮丼が食べられる金沢の台所のような市場です。'],
    ],
    t: [
      ['겨울에는 대게·방어 등 동해 해산물이 제철입니다.', 'Winter is the season for snow crab and yellowtail from the Sea of Japan.', '冬はズワイガニやブリなど日本海の海の幸が旬です。'],
      ['명소가 가까이 모여 있어 시내 주유 버스로 하루에 돌아보기 좋습니다.', 'Sights are close together; the loop bus covers them in a day.', '名所がまとまっているので、市内周遊バスで1日で回れます。'],
    ],
  },
  hakodate: {
    h: [
      ['하코다테산 야경', 'Mount Hakodate night view', '函館山の夜景', '로프웨이로 올라 바다 사이 좁은 땅에 펼쳐진 야경을 봅니다.', 'Ride the ropeway for the night view of the city between two bays.', 'ロープウェイで上り、2つの海に挟まれた街の夜景を眺めます。'],
      ['고료카쿠', 'Goryokaku', '五稜郭', '별 모양 성곽 공원. 옆 타워에서 별 모양이 잘 보입니다.', 'A star-shaped fort park, best seen from the tower next door.', '星形の城郭公園。隣のタワーから星形がよく見えます。'],
      ['하코다테 아침시장', 'Hakodate Morning Market', '函館朝市', '오징어·성게 덮밥 등 해산물 아침 식사로 유명합니다.', 'Famous for seafood breakfasts like squid and sea-urchin bowls.', 'イカやウニ丼など海鮮の朝ごはんで有名です。'],
    ],
    t: [
      ['야경은 해가 진 직후가 가장 붐비니 시간을 조금 늦추면 여유롭게 볼 수 있습니다.', 'The night view is busiest right after sunset; go a little later for space.', '夜景は日没直後が最も混むので、少し遅らせるとゆっくり見られます。'],
      ['시내 이동은 노면전차가 편합니다.', 'Streetcars are the easy way around town.', '市内の移動は路面電車が便利です。'],
    ],
  },
};
