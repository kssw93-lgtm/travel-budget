/** 도시 가이드 초안 5 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_5: Record<string, Compact> = {
  seoul: {
    h: [
      ['경복궁', 'Gyeongbokgung Palace', '景福宮', '조선의 정궁. 한복을 입으면 고궁 입장이 무료입니다.', 'The main Joseon palace; entry is free if you wear hanbok.', '朝鮮王朝の正宮。韓服を着ると入場無料です。'],
      ['북촌 한옥마을', 'Bukchon Hanok Village', '北村韓屋村', '경복궁과 창덕궁 사이 언덕의 한옥 골목. 주민이 사는 곳이라 조용히 둘러봐야 합니다.', 'Hillside lanes of traditional houses where people live, so keep quiet.', '景福宮と昌徳宮の間の丘にある韓屋の路地。住民が暮らしているので静かに見学を。'],
      ['광장시장', 'Gwangjang Market', '広蔵市場', '빈대떡·마약김밥·육회 등 노점 먹거리로 유명한 오래된 시장입니다.', 'An old market famous for mung-bean pancakes, mini gimbap and yukhoe.', 'ピンデトックやミニキンパ、ユッケなど屋台グルメで有名な市場です。'],
    ],
    t: [
      ['지하철·버스는 교통카드(티머니)로 갈아타면 환승 할인이 됩니다.', 'Transfers between subway and bus are discounted with a T-money card.', '地下鉄とバスはT-moneyカードで乗り換えると割引になります。'],
      ['북촌 일부 골목은 관광 가능 시간이 정해져 있어 이른 아침·늦은 저녁 방문은 피하세요.', 'Parts of Bukchon have set visiting hours; avoid early mornings and late evenings.', '北村の一部路地は観光可能時間が決まっているので、早朝や夜遅くは避けましょう。'],
    ],
  },
  busan: {
    h: [
      ['해운대·광안리 해변', 'Haeundae and Gwangalli beaches', '海雲台・広安里ビーチ', '광안리에서는 밤에 조명이 켜진 광안대교가 보입니다.', 'Gwangalli looks out on the lit-up Gwangan Bridge at night.', '広安里からは夜にライトアップされた広安大橋が見えます。'],
      ['감천문화마을', 'Gamcheon Culture Village', '甘川文化村', '산비탈에 알록달록한 집들이 계단처럼 이어진 마을입니다.', 'Colourful houses stacked up a hillside like steps.', '山の斜面にカラフルな家が階段状に連なる村です。'],
      ['자갈치시장', 'Jagalchi Fish Market', 'チャガルチ市場', '국내 최대 수산시장. 1층에서 고른 생선을 위층 식당에서 먹을 수 있습니다.', 'Korea’s biggest fish market; pick seafood downstairs and eat it upstairs.', '国内最大の水産市場。1階で選んだ魚を上の階の食堂で食べられます。'],
    ],
    t: [
      ['해변열차·스카이캡슐이 다니는 해운대 블루라인파크는 주말에 매진되기 쉬워 미리 예약하세요.', 'The Haeundae Blueline Park beach train and sky capsules sell out on weekends; book ahead.', '海雲台ブルーラインパークの海辺列車とスカイカプセルは週末に売り切れやすいので予約を。'],
      ['돼지국밥·밀면 같은 부산 음식은 오래된 노포가 많은 서면·남포동에서 찾기 쉽습니다.', 'Look for dwaeji-gukbap and milmyeon in the old shops of Seomyeon and Nampo-dong.', 'テジクッパやミルミョンは老舗の多い西面や南浦洞で見つけやすいです。'],
    ],
  },
  jeju: {
    h: [
      ['성산일출봉', 'Seongsan Ilchulbong', '城山日出峰', '바다에서 솟은 분화구 봉우리. 이름처럼 해돋이 명소입니다.', 'A crater peak rising from the sea, famous for sunrise.', '海からそびえる火口の峰。名前の通り日の出の名所です。'],
      ['한라산', 'Hallasan', '漢拏山', '한국에서 가장 높은 산. 정상 코스는 탐방 예약이 필요합니다.', 'Korea’s highest mountain; summit trails require a reservation.', '韓国で一番高い山。山頂コースは入山予約が必要です。'],
      ['올레길', 'Jeju Olle Trail', 'オルレ道', '섬 해안을 따라 이어지는 도보 코스. 한 구간씩 골라 걷기 좋습니다.', 'Walking routes that circle the island’s coast; pick a section to walk.', '島の海岸に沿って続く散策コース。区間を選んで歩けます。'],
    ],
    t: [
      ['버스로도 다닐 수 있지만 명소가 흩어져 있어 렌터카를 많이 이용합니다.', 'Buses work, but sights are spread out, so many people rent a car.', 'バスでも回れますが、名所が点在しているのでレンタカーの利用が多いです。'],
      ['바람이 강한 날이 많아 해안 일정에는 바람막이를 챙기세요.', 'It is often windy, so bring a windbreaker for the coast.', '風の強い日が多いので、海岸を回るなら風よけの上着を。'],
    ],
  },
  gangneung: {
    h: [
      ['안목 커피거리', 'Anmok Coffee Street', '安木コーヒー通り', '바다를 마주한 카페들이 줄지어 있는 거리입니다.', 'A seafront street lined with cafés.', '海に面したカフェが並ぶ通りです。'],
      ['경포대·경포호', 'Gyeongpodae and Gyeongpo Lake', '鏡浦台・鏡浦湖', '호수 둘레 산책로와 해변이 이어진 강릉의 대표 명소입니다.', 'Lakeside paths that lead to the beach, Gangneung’s classic sight.', '湖畔の散歩道と海辺がつながる江陵の代表名所です。'],
      ['오죽헌', 'Ojukheon', '烏竹軒', '신사임당과 율곡 이이가 태어난 조선 시대 가옥입니다.', 'The Joseon-era house where Shin Saimdang and Yulgok were born.', '申師任堂と栗谷李珥が生まれた朝鮮時代の家屋です。'],
    ],
    t: [
      ['서울에서 KTX로 2시간 안팎이라 당일치기 여행도 가능합니다.', 'About two hours from Seoul by KTX, so a day trip is possible.', 'ソウルからKTXで約2時間なので日帰りも可能です。'],
      ['초당 순두부 마을의 두부 요리는 아침 식사로 먹는 현지인이 많습니다.', 'Many locals eat Chodang soft tofu for breakfast.', '草堂スンドゥブ村の豆腐料理は朝食に食べる地元の人が多いです。'],
    ],
  },
  gyeongju: {
    h: [
      ['불국사·석굴암', 'Bulguksa and Seokguram', '仏国寺・石窟庵', '신라 불교 예술을 대표하는 유네스코 세계유산입니다.', 'UNESCO-listed masterpieces of Silla Buddhist art.', '新羅仏教美術を代表する世界遺産です。'],
      ['동궁과 월지', 'Donggung Palace and Wolji Pond', '東宮と月池', '연못에 비치는 야간 조명이 아름다운 신라 궁궐터입니다.', 'Silla palace grounds best at night, reflected in the pond.', '池に映る夜のライトアップが美しい新羅の宮殿跡です。'],
      ['대릉원·황리단길', 'Daereungwon and Hwangnidan-gil', '大陵苑・皇理団通り', '거대한 고분 공원 옆으로 한옥 카페 거리가 이어집니다.', 'Giant royal tombs next to a lane of hanok cafés.', '巨大な古墳公園の隣に韓屋カフェ通りが続きます。'],
    ],
    t: [
      ['유적이 넓게 퍼져 있어 시내 구간은 자전거를 빌려 다니기 좋습니다.', 'Sites are spread out; renting a bike works well around town.', '遺跡が広く点在しているので、市内は自転車を借りると便利です。'],
      ['경주역(KTX 신경주역)은 시내에서 떨어져 있어 버스로 갈아타야 합니다.', 'The KTX Singyeongju station is outside town, so you need a bus in.', 'KTX新慶州駅は市内から離れているので、バスに乗り換えます。'],
    ],
  },
  yeosu: {
    h: [
      ['여수 밤바다·낭만포차', 'Yeosu night sea and pojangmacha', '麗水の夜の海と屋台', '이순신광장 근처 바닷가에 저녁마다 포장마차 거리가 펼쳐집니다.', 'Seaside food tents set up every evening near Yi Sun-sin Square.', '李舜臣広場近くの海辺に毎晩屋台が並びます。'],
      ['여수 해상케이블카', 'Yeosu Maritime Cable Car', '麗水海上ケーブルカー', '바다 위를 건너 돌산도까지 가는 케이블카입니다.', 'A cable car that crosses the sea to Dolsando.', '海の上を渡って突山島へ行くケーブルカーです。'],
      ['오동도', 'Odongdo Island', '梧桐島', '방파제 길로 걸어 들어가는 동백꽃 섬입니다.', 'A camellia island reached on foot along a breakwater.', '防波堤の道を歩いて渡る椿の島です。'],
    ],
    t: [
      ['게장 백반은 간장·양념게장이 무한 리필되는 식당이 많습니다.', 'Many crab-rice restaurants offer free refills of soy and spicy marinated crab.', 'ケジャン定食は醤油・ヤンニョムケジャンがおかわり自由の店が多いです。'],
      ['여수엑스포역에서 주요 명소가 가까워 KTX로 오면 이동이 편합니다.', 'Most sights are near Yeosu-EXPO station, convenient by KTX.', '主要名所が麗水EXPO駅から近く、KTXで来ると便利です。'],
    ],
  },
  jeonju: {
    h: [
      ['전주 한옥마을', 'Jeonju Hanok Village', '全州韓屋村', '한옥 수백 채가 모인 마을. 한복을 빌려 입고 걷는 여행자가 많습니다.', 'Hundreds of hanok houses; many visitors stroll in rented hanbok.', '数百軒の韓屋が集まる村。韓服を借りて歩く人が多いです。'],
      ['경기전', 'Gyeonggijeon Shrine', '慶基殿', '조선 태조의 초상화를 모신 곳입니다.', 'The shrine holding the portrait of King Taejo of Joseon.', '朝鮮太祖の肖像画を祀る場所です。'],
      ['남부시장 야시장', 'Nambu Market night market', '南部市場夜市', '주말 저녁에 열리는 먹거리 야시장입니다.', 'A weekend evening street-food market.', '週末の夜に開かれる屋台の夜市です。'],
    ],
    t: [
      ['비빔밥과 콩나물국밥이 유명하며, 콩나물국밥은 아침 해장 메뉴로 즐겨 먹습니다.', 'Bibimbap and bean-sprout soup are famous; the soup is a favourite breakfast.', 'ビビンバとコンナムルクッパが有名で、クッパは朝食によく食べられます。'],
      ['한옥마을 안 숙소(한옥스테이)는 주말에 빨리 차니 미리 예약하세요.', 'Hanok stays inside the village fill up on weekends; book early.', '韓屋村の宿（韓屋ステイ）は週末すぐ埋まるので早めに予約を。'],
    ],
  },
  kyoto: {
    h: [
      ['후시미 이나리 신사', 'Fushimi Inari Taisha', '伏見稲荷大社', '산길을 따라 붉은 도리이 수천 개가 이어진 신사입니다.', 'Thousands of red torii gates line the mountain paths.', '山道に沿って数千の朱色の鳥居が続く神社です。'],
      ['기요미즈데라', 'Kiyomizu-dera', '清水寺', '절벽 위 나무 무대에서 교토 시내가 내려다보이는 절입니다.', 'A temple whose wooden stage juts out over the hillside.', '崖の上の木造舞台から京都市内を見下ろす寺です。'],
      ['아라시야마 대나무숲', 'Arashiyama Bamboo Grove', '嵐山・竹林の小径', '키 큰 대나무 사이로 난 길. 아침 일찍 가면 한산합니다.', 'A path through towering bamboo, quiet early in the morning.', '背の高い竹林の中の小道。朝早く行くとすいています。'],
    ],
    t: [
      ['시내버스가 매우 붐비니 지하철·JR·게이한 등 철도를 섞어 다니면 빠릅니다.', 'City buses get packed; mixing in the subway and rail lines is faster.', '市バスはとても混むので、地下鉄やJR・京阪などの鉄道を組み合わせると速いです。'],
      ['기온 지역에서는 게이코·마이코를 허락 없이 촬영하지 마세요. 일부 사유지 골목은 촬영 금지입니다.', 'Do not photograph geiko or maiko without permission in Gion; some private lanes ban photos.', '祇園では芸妓・舞妓を無断で撮影しないでください。一部の私道は撮影禁止です。'],
    ],
  },
  okinawa: {
    h: [
      ['추라우미 수족관', 'Okinawa Churaumi Aquarium', '美ら海水族館', '고래상어가 헤엄치는 대형 수조로 유명한 수족관입니다.', 'Famous for its giant tank with whale sharks.', 'ジンベエザメが泳ぐ大水槽で有名な水族館です。'],
      ['국제거리', 'Kokusai-dori', '国際通り', '나하 중심의 쇼핑·먹거리 거리입니다.', "Naha's main street for shopping and food.", '那覇中心のショッピングとグルメの通りです。'],
      ['슈리성 공원', 'Shurijo Castle Park', '首里城公園', '류큐 왕국의 왕성 터. 화재 뒤 복원 공사를 공개하고 있습니다.', 'The Ryukyu royal castle site, where post-fire restoration is on view.', '琉球王国の王城跡。火災後の復元工事を公開しています。'],
    ],
    t: [
      ['북부 명소는 대중교통이 불편해 렌터카를 많이 빌립니다. 운전은 왼쪽 차선입니다.', 'Northern sights are hard to reach by bus, so many rent a car; driving is on the left.', '北部の名所は公共交通が不便なのでレンタカーが多いです。左側通行です。'],
      ['나하 시내는 모노레일(유이레일)로 공항과 주요 지역을 오갈 수 있습니다.', 'In Naha, the Yui Rail monorail links the airport and main areas.', '那覇市内はゆいレールで空港と主要エリアを移動できます。'],
    ],
  },
  nagoya: {
    h: [
      ['나고야성', 'Nagoya Castle', '名古屋城', '금빛 범고래(샤치호코) 장식으로 유명한 성. 혼마루 어전이 복원되어 있습니다.', 'Known for its golden shachihoko; the Hommaru Palace has been restored.', '金のシャチホコで有名な城。本丸御殿が復元されています。'],
      ['아쓰타 신궁', 'Atsuta Jingu', '熱田神宮', '일본에서 손꼽히는 오래된 신사입니다.', 'One of Japan’s most important Shinto shrines.', '日本有数の格式ある神社です。'],
      ['오스 상점가', 'Osu Shopping District', '大須商店街', '전자제품·옷·먹거리 가게가 모인 활기찬 상점가입니다.', 'A lively arcade of electronics, fashion and snack shops.', '電器・服・食べ歩きの店が集まるにぎやかな商店街です。'],
    ],
    t: [
      ['히쓰마부시는 그대로, 양념을 얹어서, 육수를 부어서 세 가지 방법으로 나눠 먹습니다.', 'Hitsumabushi is eaten three ways: plain, with condiments, then with broth.', 'ひつまぶしは、そのまま、薬味をのせて、だしをかけての3通りで食べます。'],
      ['카페에서 음료를 시키면 오전에 토스트 등을 무료로 주는 모닝 서비스 문화가 있습니다.', 'Many cafés add free toast with a morning drink order (the “morning service”).', '喫茶店で飲み物を頼むと、朝はトーストなどが無料で付くモーニング文化があります。'],
    ],
  },
  hanoi: {
    h: [
      ['호안끼엠 호수', 'Hoan Kiem Lake', 'ホアンキエム湖', '구시가지 옆 호수. 주말 저녁에는 주변 도로가 보행자 거리가 됩니다.', 'The lake by the Old Quarter; nearby streets go pedestrian on weekend evenings.', '旧市街の隣の湖。週末の夜は周辺が歩行者天国になります。'],
      ['구시가지 36거리', 'Old Quarter (36 Streets)', '旧市街（36通り）', '골목마다 다른 물건을 파는 옛 상업 거리입니다.', 'Old trading streets, each once devoted to a single craft.', '通りごとに異なる品を売る昔ながらの商業地区です。'],
      ['문묘', 'Temple of Literature', '文廟', '베트남 최초의 대학이 있던 공자 사당입니다.', 'A Confucian temple that housed Vietnam’s first university.', 'ベトナム最初の大学があった孔子廟です。'],
    ],
    t: [
      ['기찻길 마을(트레인 스트리트)은 안전 문제로 출입이 제한될 때가 있습니다.', 'Train Street is sometimes closed to visitors for safety reasons.', 'トレインストリートは安全のため立ち入りが制限されることがあります。'],
      ['하롱베이는 하노이에서 차로 가는 당일·1박 투어가 일반적입니다.', 'Ha Long Bay is usually visited on a day or overnight tour from Hanoi.', 'ハロン湾はハノイから車で行く日帰りや1泊ツアーが一般的です。'],
    ],
  },
  prague: {
    h: [
      ['카를교', 'Charles Bridge', 'カレル橋', '성인 조각상이 늘어선 중세 돌다리. 이른 아침이 한산합니다.', 'The statue-lined medieval stone bridge, quietest early in the morning.', '聖人像が並ぶ中世の石橋。早朝がすいています。'],
      ['프라하 성', 'Prague Castle', 'プラハ城', '성 비투스 대성당과 황금소로가 있는 거대한 성 단지입니다.', 'A huge castle complex with St Vitus Cathedral and Golden Lane.', '聖ヴィート大聖堂と黄金の小路がある巨大な城です。'],
      ['구시가지 광장 천문시계', 'Old Town Square Astronomical Clock', '旧市街広場の天文時計', '매시 정각에 인형이 움직이는 중세 천문시계입니다.', 'The medieval clock whose figures move on the hour.', '毎正時に人形が動く中世の天文時計です。'],
    ],
    t: [
      ['체코 화폐는 코루나입니다. 환전소의 "수수료 0%" 문구보다 실제 환율을 확인하세요.', 'The currency is the koruna; check the actual rate rather than “0% commission” signs.', '通貨はコルナ。両替所の「手数料0%」より実際のレートを確認しましょう。'],
      ['체코 맥주는 맥주 거품까지 즐기는 문화라 거품이 많은 잔도 정상입니다.', 'Czech beer is served with a generous head; that is intentional.', 'チェコビールは泡も楽しむ文化なので、泡が多いのも普通です。'],
    ],
  },
};
