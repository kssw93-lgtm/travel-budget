/** 도시 가이드 초안 3 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_3: Record<string, Compact> = {
  madrid: {
    h: [
      ['프라도 미술관', 'Prado Museum', 'プラド美術館', '벨라스케스 「시녀들」, 고야 작품 등 스페인 회화의 보고입니다.', "Spain's great art museum, with Velázquez's Las Meninas and Goya.", 'ベラスケス「ラス・メニーナス」やゴヤなどスペイン絵画の宝庫です。'],
      ['마드리드 왕궁', 'Royal Palace of Madrid', 'マドリード王宮', '서유럽에서 손꼽히게 큰 왕궁. 바로 옆 사바티니 정원도 함께 둘러보기 좋습니다.', 'One of the largest palaces in western Europe, next to the Sabatini Gardens.', '西ヨーロッパ有数の大きな王宮。隣のサバティーニ庭園も合わせてどうぞ。'],
      ['레티로 공원', 'El Retiro Park', 'レティーロ公園', '호수에서 보트를 타고 유리 궁전을 볼 수 있는 큰 공원입니다.', 'A big park with a boating lake and the Crystal Palace.', 'ボート池とガラスの宮殿がある大きな公園です。'],
    ],
    t: [
      ['주요 미술관은 저녁 마지막 두 시간 등 무료 입장 시간이 있어 공식 사이트에서 확인해 볼 만합니다.', 'Major museums have free-entry hours, often in the last two hours; check their official sites.', '主要美術館には夕方の無料時間などがあるので、公式サイトを確認してみましょう。'],
      ['저녁 식사는 밤 9시 무렵부터 시작하는 문화라 그 전에는 타파스 바에서 가볍게 먹기 좋습니다.', 'Dinner starts around 9 pm; tapas bars fill the gap before that.', '夕食は夜9時頃からが一般的なので、それまではタパスバーで軽くどうぞ。'],
    ],
  },
  melbourne: {
    h: [
      ['골목길(레인웨이)', 'Laneways', 'レーンウェイ', '호시어 레인 등 그래피티와 카페가 가득한 시내 골목들입니다.', 'City lanes such as Hosier Lane, packed with street art and cafés.', 'ホージア・レーンなど落書きアートとカフェが並ぶ路地です。'],
      ['퀸 빅토리아 마켓', 'Queen Victoria Market', 'クイーン・ヴィクトリア・マーケット', '식재료와 잡화가 모인 오래된 시장. 핫 잼 도넛이 명물입니다.', 'A historic market for food and goods, famous for hot jam doughnuts.', '食材と雑貨が集まる歴史ある市場。ホットジャムドーナツが名物です。'],
      ['그레이트 오션 로드', 'Great Ocean Road', 'グレート・オーシャン・ロード', '해안 절벽과 12사도 바위를 보러 가는 하루 여행 코스입니다.', 'A day trip along coastal cliffs to the Twelve Apostles.', '海岸の断崖と十二使徒岩を見に行く日帰りコースです。'],
    ],
    t: [
      ['시내 중심의 무료 트램 구역 안에서는 트램을 무료로 탈 수 있습니다.', 'Trams are free within the city-centre Free Tram Zone.', '市中心部のフリートラムゾーン内はトラムが無料です。'],
      ['하루에 사계절이 있다는 말이 있을 만큼 날씨가 자주 바뀌니 겉옷을 챙기세요.', 'Weather can change several times a day; carry a layer.', '1日に四季があると言われるほど天気が変わりやすいので、上着を持参しましょう。'],
    ],
  },
  munich: {
    h: [
      ['마리엔 광장', 'Marienplatz', 'マリエン広場', '신시청 시계탑의 인형극(글로켄슈필)이 정해진 시간에 움직입니다.', 'The New Town Hall’s Glockenspiel figures perform at set times.', '新市庁舎の仕掛け時計の人形が決まった時刻に動きます。'],
      ['호프브로이하우스', 'Hofbräuhaus', 'ホフブロイハウス', '1리터 맥주잔과 바이에른 음악으로 유명한 대형 맥주홀입니다.', 'The famous beer hall of litre steins and Bavarian bands.', '1リットルジョッキとバイエルン音楽で有名なビアホールです。'],
      ['영국 정원', 'English Garden', '英国庭園', '도심 속 큰 공원. 인공 수로에서 서핑하는 사람들을 볼 수 있습니다.', 'A huge city park where people surf a standing wave on the Eisbach.', '都心の大きな公園。人工水路でサーフィンする人が見られます。'],
    ],
    t: [
      ['일요일과 공휴일에는 대부분의 상점이 문을 닫으니 쇼핑은 평일·토요일에 하세요.', 'Most shops close on Sundays and holidays; shop on weekdays or Saturday.', '日曜・祝日はほとんどの店が閉まるので、買い物は平日か土曜に。'],
      ['노이슈반슈타인 성은 기차와 버스로 하루 일정이며, 성 내부는 시간 지정 예약이 필요합니다.', 'Neuschwanstein is a day trip by train and bus; the interior needs a timed ticket.', 'ノイシュヴァンシュタイン城は電車とバスで日帰り。内部は時間指定予約が必要です。'],
    ],
  },
  nice: {
    h: [
      ['프롬나드 데 장글레', 'Promenade des Anglais', 'プロムナード・デ・ザングレ', '바다를 따라 길게 이어지는 해변 산책로입니다.', 'The long seafront promenade along the Baie des Anges.', '海沿いに長く続く遊歩道です。'],
      ['구시가지와 살레야 시장', 'Old Town and Cours Saleya market', '旧市街とサレヤ広場の市場', '좁은 골목과 꽃·식재료 시장이 열리는 광장이 있는 옛 동네입니다.', 'Narrow lanes and a square hosting the flower and produce market.', '細い路地と花や食材の市が立つ広場がある旧市街です。'],
      ['샤토 언덕', 'Castle Hill (Colline du Château)', '城跡の丘', '해변과 항구, 붉은 지붕을 한눈에 내려다보는 언덕 공원입니다.', 'A hilltop park overlooking the beach, port and red rooftops.', 'ビーチと港、赤い屋根を一望できる丘の公園です。'],
    ],
    t: [
      ['니스 해변은 모래가 아니라 자갈이라 물놀이 신발이 있으면 편합니다.', 'Nice’s beaches are pebbles, not sand; water shoes help.', 'ニースのビーチは砂ではなく小石なので、マリンシューズがあると便利です。'],
      ['모나코·에즈·앙티브 등 근교 도시는 기차나 버스로 당일치기하기 좋습니다.', 'Monaco, Èze and Antibes are easy day trips by train or bus.', 'モナコやエズ、アンティーブなど近郊へは電車やバスで日帰りできます。'],
    ],
  },
  pattaya: {
    h: [
      ['진리의 성전', 'Sanctuary of Truth', 'サンクチュアリ・オブ・トゥルース', '못 없이 나무로만 지은 거대한 조각 건축물입니다.', 'A vast carved temple built entirely of wood without nails.', '釘を使わず木だけで建てた巨大な彫刻建築です。'],
      ['꼬란 섬', 'Koh Larn', 'ラン島', '배로 가는 섬. 시내 해변보다 물이 맑아 해수욕하기 좋습니다.', 'An island reached by boat with clearer water than the city beaches.', '船で行く島。市内のビーチより水がきれいです。'],
      ['워킹 스트리트', 'Walking Street', 'ウォーキング・ストリート', '저녁부터 차량이 통제되는 유흥가 거리입니다.', 'The nightlife strip closed to traffic in the evenings.', '夜は車両通行止めになる歓楽街です。'],
    ],
    t: [
      ['시내 이동은 해변 도로를 도는 합승 트럭(썽태우)이 저렴합니다.', 'Shared songthaew trucks looping the beach roads are the cheap way around.', '市内移動はビーチ沿いを回る乗り合いソンテウが安いです。'],
      ['제트스키 등 해양 레저는 대여 전 기체 상태를 사진으로 남겨 두면 분쟁을 막을 수 있습니다.', 'Photograph jet skis before renting to avoid damage disputes.', 'ジェットスキーなどは借りる前に機体の写真を撮っておくとトラブルを防げます。'],
    ],
  },
  'phu-quoc': {
    h: [
      ['혼톰 케이블카', 'Hon Thom cable car', 'ホントム・ロープウェイ', '바다 위를 길게 건너 남쪽 섬으로 가는 케이블카입니다.', 'A long cable car over the sea to Hon Thom island.', '海の上を長く渡って南の島へ向かうロープウェイです。'],
      ['사오 비치', 'Sao Beach', 'サオビーチ', '고운 흰 모래와 잔잔한 물빛으로 유명한 해변입니다.', 'Known for soft white sand and calm, clear water.', '白い砂と穏やかな海で有名なビーチです。'],
      ['즈엉동 야시장', 'Duong Dong Night Market', 'ズオンドン・ナイトマーケット', '해산물 구이 노점이 모인 섬의 대표 야시장입니다.', "The island's main night market, full of grilled-seafood stalls.", '海鮮焼きの屋台が並ぶ島の代表的な夜市です。'],
    ],
    t: [
      ['섬 북쪽과 남쪽이 멀어 숙소 위치에 따라 이동 시간이 크게 달라집니다.', 'The north and south of the island are far apart; where you stay changes travel times a lot.', '島の北と南は離れているので、宿の場所で移動時間が大きく変わります。'],
      ['피시 소스(느억맘)와 후추 농장이 유명해, 공장·농장 견학을 겸한 기념품 쇼핑이 가능합니다.', 'Famous for fish sauce and pepper farms, which double as souvenir stops.', '魚醤（ヌックマム）と胡椒農園が有名で、見学を兼ねたお土産選びができます。'],
    ],
  },
  phuket: {
    h: [
      ['푸껫 올드타운', 'Phuket Old Town', 'プーケット・オールドタウン', '파스텔색 시노-포르투갈 건물이 늘어선 옛 거리입니다.', 'Streets of pastel Sino-Portuguese shophouses.', 'パステルカラーの中国ポルトガル様式の建物が並ぶ旧市街です。'],
      ['빅 붓다', 'Big Buddha', 'ビッグ・ブッダ', '언덕 위 대형 불상. 섬 남쪽 바다가 내려다보입니다.', 'A giant hilltop Buddha with views over the south of the island.', '丘の上の大仏。島の南の海が見渡せます。'],
      ['피피섬·팡아만', 'Phi Phi Islands and Phang Nga Bay', 'ピピ島・パンガー湾', '보트 투어로 가는 석회암 섬과 에메랄드빛 바다입니다.', 'Boat trips to limestone islands and emerald water.', 'ボートツアーで行く石灰岩の島々とエメラルドの海です。'],
    ],
    t: [
      ['5~10월은 우기로 서쪽 해변 파도가 높아지는 날이 있으니 붉은 깃발이 꽂히면 수영을 피하세요.', 'May to October is the wet season; avoid swimming when red flags are up on the west coast.', '5〜10月は雨季で西側の波が高くなる日があるので、赤旗が立ったら泳がないでください。'],
      ['해변 사이 이동은 택시 요금이 비싼 편이라 차량 호출 앱 요금을 비교해 보세요.', 'Taxis between beaches are pricey; compare with ride-hailing apps.', 'ビーチ間のタクシーは高めなので、配車アプリの料金と比べてみましょう。'],
    ],
  },
  qingdao: {
    h: [
      ['칭다오 맥주박물관', 'Tsingtao Beer Museum', '青島ビール博物館', '옛 양조장 건물에서 맥주 역사를 보고 갓 뽑은 맥주를 맛봅니다.', 'Brewery history in the original buildings, with fresh beer to taste.', '昔の醸造所でビールの歴史を見て、できたてのビールを味わえます。'],
      ['잔차오 잔교', 'Zhanqiao Pier', '桟橋', '바다로 길게 뻗은 부두로 칭다오의 상징입니다.', 'The long pier reaching into the sea, a symbol of the city.', '海に長く延びる桟橋で、青島のシンボルです。'],
      ['바다관 별장 거리', 'Badaguan', '八大関', '유럽풍 별장이 늘어선 나무 그늘 거리입니다.', 'Tree-lined streets of European-style villas.', 'ヨーロッパ風の別荘が並ぶ並木道です。'],
    ],
    t: [
      ['여름 맥주 축제 기간에는 숙소가 빨리 차니 일찍 예약하세요.', 'Hotels fill fast during the summer beer festival; book early.', '夏のビール祭り期間は宿がすぐ埋まるので早めに予約を。'],
      ['결제는 알리페이·위챗페이가 기본이라 출국 전에 외국 카드 연동을 해 두면 편합니다.', 'Alipay and WeChat Pay are the norm; link a foreign card before you go.', '支払いはアリペイ・WeChatペイが基本。出発前に海外カードを連携しておくと便利です。'],
    ],
  },
  reykjavik: {
    h: [
      ['할그림스키르캬 교회', 'Hallgrímskirkja', 'ハットルグリムス教会', '현무암 기둥을 본뜬 교회. 탑에 오르면 알록달록한 지붕들이 보입니다.', 'The basalt-inspired church; its tower overlooks colourful rooftops.', '玄武岩の柱を模した教会。塔からカラフルな屋根が見えます。'],
      ['하르파 콘서트홀', 'Harpa Concert Hall', 'ハルパ', '유리 외벽이 빛에 따라 색이 바뀌는 항구 앞 콘서트홀입니다.', 'The harbourside concert hall whose glass facade changes with the light.', 'ガラスの外壁が光で色を変える港のコンサートホールです。'],
      ['골든 서클', 'Golden Circle', 'ゴールデンサークル', '싱벨리어 국립공원·게이시르 간헐천·굴포스 폭포를 하루에 도는 코스입니다.', 'A day loop of Þingvellir, the Geysir area and Gullfoss waterfall.', 'シンクヴェトリル国立公園、ゲイシール、グトルフォスの滝を1日で巡るコースです。'],
    ],
    t: [
      ['날씨와 도로 사정이 빨리 바뀌니 운전하거나 투어에 나가기 전에 공식 기상·도로 정보를 확인하세요.', 'Weather and roads change fast; check official weather and road updates before heading out.', '天気と道路状況が急変するので、出発前に公式の気象・道路情報を確認しましょう。'],
      ['수돗물이 깨끗해 그대로 마셔도 됩니다. 물병을 채워 다니면 물값을 아낄 수 있습니다.', 'Tap water is clean to drink; refill a bottle instead of buying water.', '水道水はそのまま飲めます。ボトルに補充すれば水代を節約できます。'],
    ],
  },
  saipan: {
    h: [
      ['마나가하 섬', 'Managaha Island', 'マニャガハ島', '배로 금방 가는 작은 섬으로, 보전구역의 맑은 물과 산호초에서 스노클링을 즐깁니다.', 'A small island a short boat ride away, with clear water and coral reefs in a conservation area — great for snorkelling.', '船ですぐ行ける小さな島で、保護区の澄んだ海とサンゴ礁でシュノーケリングが楽しめます。'],
      ['그로토', 'The Grotto', 'グロット', '바다와 연결된 석회암 동굴 다이빙 명소입니다.', 'A limestone sea cave famous among divers.', '海とつながる石灰岩の洞窟で、ダイビングの名所です。'],
      ['만세 절벽', 'Banzai Cliff', 'バンザイクリフ', '태평양 전쟁의 역사가 남은 섬 북쪽 절벽입니다.', 'The northern cliffs marked by Pacific War history.', '太平洋戦争の歴史が残る島北部の断崖です。'],
    ],
    t: [
      ['대중교통이 거의 없어 렌터카나 호텔 셔틀을 이용하는 경우가 많습니다.', 'There is almost no public transport, so most visitors rent a car or use hotel shuttles.', '公共交通がほとんどないので、レンタカーやホテルのシャトルを利用します。'],
      ['미국령이라 식당 메뉴 가격에 팁이 포함되지 않은 경우가 많습니다.', 'As a US territory, menu prices usually exclude the tip.', 'アメリカ領のため、メニュー価格にチップは含まれないことが多いです。'],
    ],
  },
  'san-francisco': {
    h: [
      ['골든게이트 브리지', 'Golden Gate Bridge', 'ゴールデンゲートブリッジ', '걸어서나 자전거로 건너볼 수 있는 붉은 현수교입니다.', 'The red suspension bridge you can walk or cycle across.', '歩いても自転車でも渡れる赤い吊り橋です。'],
      ['알카트라즈 섬', 'Alcatraz Island', 'アルカトラズ島', '옛 연방 교도소 섬. 공식 운항사 배편은 일찍 매진되는 편입니다.', 'The former federal prison island; official ferries sell out early.', '旧連邦刑務所の島。公式フェリーは早く売り切れがちです。'],
      ['케이블카', 'Cable cars', 'ケーブルカー', '가파른 언덕길을 오르내리는 옛 케이블카 자체가 명물입니다.', 'Riding the historic cable cars up the steep hills is an attraction itself.', '急な坂を上り下りする昔ながらのケーブルカーそのものが名物です。'],
    ],
    t: [
      ['여름에도 안개와 바람으로 쌀쌀한 날이 많아 겉옷이 필요합니다.', 'Fog and wind make even summer days chilly; bring a jacket.', '夏でも霧と風で肌寒い日が多いので、上着が必要です。'],
      ['식당 메뉴 가격에는 판매세와 팁이 빠져 있고, 일부 식당은 직원 복지 부담금을 따로 붙입니다.', 'Menu prices exclude tax and tip, and some restaurants add a staff-benefit surcharge.', 'メニュー価格に税とチップは含まれず、従業員福利の追加料金を加える店もあります。'],
    ],
  },
  'siem-reap': {
    h: [
      ['앙코르와트', 'Angkor Wat', 'アンコール・ワット', '세계 최대 규모의 사원 유적. 해 뜨는 모습을 보러 새벽에 가는 사람이 많습니다.', 'The vast temple complex; many go at dawn to watch the sunrise.', '世界最大級の寺院遺跡。日の出を見に早朝に訪れる人が多いです。'],
      ['바이욘 사원', 'Bayon', 'バイヨン寺院', '앙코르톰 안에 미소 짓는 거대한 얼굴 조각이 가득한 사원입니다.', 'Inside Angkor Thom, a temple of giant smiling stone faces.', 'アンコール・トム内の、微笑む巨大な顔の彫刻が並ぶ寺院です。'],
      ['따프롬', 'Ta Prohm', 'タ・プローム', '거대한 나무뿌리가 유적을 감싸고 있는 사원입니다.', 'A temple wrapped in the roots of giant trees.', '巨大な木の根が遺跡を覆う寺院です。'],
    ],
    t: [
      ['앙코르 유적 입장권은 사진이 들어간 본인 전용권이라 다른 사람과 나눠 쓸 수 없습니다.', 'Angkor passes carry your photo and cannot be shared.', 'アンコール遺跡のチケットは顔写真入りの本人専用で、共有できません。'],
      ['유적 사원 안에서는 어깨와 무릎을 가리는 옷을 입어야 합니다.', 'Cover shoulders and knees inside the temples.', '寺院内では肩と膝を隠す服装が必要です。'],
    ],
  },
};
