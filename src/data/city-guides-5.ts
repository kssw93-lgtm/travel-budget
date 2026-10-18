/** 도시 가이드 초안 5 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_5: Record<string, Compact> = {
  seoul: {
    h: [
      ['경복궁', 'Gyeongbokgung Palace', '景福宮', '조선의 정궁. 한복을 입으면 고궁 입장이 무료입니다.', 'The main Joseon palace; entry is free if you wear hanbok.', '朝鮮王朝の正宮。韓服を着ると入場無料です。'],
      ['북촌 한옥마을', 'Bukchon Hanok Village', '北村韓屋村', '경복궁과 창덕궁 사이 언덕의 한옥 골목. 주민이 사는 곳이라 조용히 둘러봐야 합니다.', 'Hillside lanes of traditional houses where people live, so keep quiet.', '景福宮と昌徳宮の間の丘にある韓屋の路地。住民が暮らしているので静かに見学を。'],
      ['광장시장', 'Gwangjang Market', '広蔵市場', '빈대떡·마약김밥·육회 등 노점 먹거리로 유명한 오래된 시장입니다.', 'An old market famous for mung-bean pancakes, mini gimbap and yukhoe.', 'ピンデトックやミニキンパ、ユッケなど屋台グルメで有名な市場です。'],
      ['N서울타워', 'N Seoul Tower', 'Nソウルタワー', '남산 꼭대기의 전망 타워로, 케이블카나 산책로로 올라 서울 야경을 볼 수 있습니다.', 'The lookout tower atop Namsan, reached by cable car or trail, for night views over Seoul.', '南山の頂上にある展望タワーで、ケーブルカーや散策路で上ってソウルの夜景を楽しめます。'],
      ['국립중앙박물관', 'National Museum of Korea', '国立中央博物館', '선사시대부터 조선까지 한국 역사를 보여 주는 대형 박물관으로, 상설 전시는 무료입니다.', 'Korea’s largest museum, covering prehistory to the Joseon era; the permanent galleries are free.', '先史時代から朝鮮時代まで韓国の歴史を紹介する大規模な博物館で、常設展は無料です。'],
    ],
    t: [
      ['지하철·버스는 교통카드(티머니)로 갈아타면 환승 할인이 됩니다.', 'Transfers between subway and bus are discounted with a T-money card.', '地下鉄とバスはT-moneyカードで乗り換えると割引になります。'],
      ['북촌 일부 골목은 관광 가능 시간이 정해져 있어 이른 아침·늦은 저녁 방문은 피하세요.', 'Parts of Bukchon have set visiting hours; avoid early mornings and late evenings.', '北村の一部路地は観光可能時間が決まっているので、早朝や夜遅くは避けましょう。'],
      ['공항에서 시내: 인천공항에서는 공항철도(AREX) 직통열차가 서울역까지 쉬지 않고 가고, 일반열차는 홍대입구·공덕 등을 거칩니다. 김포공항은 지하철 5·9호선과 공항철도로 연결됩니다.', 'Airport to city: from Incheon, the AREX express train runs non-stop to Seoul Station, while the all-stop train calls at Hongik Univ. and Gongdeok. Gimpo Airport is on subway lines 5 and 9 and AREX.', '空港から市内へ：仁川空港からは空港鉄道(AREX)直通列車がソウル駅までノンストップで、一般列車は弘大入口・孔徳などに停まります。金浦空港は地下鉄5・9号線と空港鉄道で結ばれています。'],
    ],
  },
  busan: {
    h: [
      ['해운대·광안리 해변', 'Haeundae and Gwangalli beaches', '海雲台・広安里ビーチ', '광안리에서는 밤에 조명이 켜진 광안대교가 보입니다.', 'Gwangalli looks out on the lit-up Gwangan Bridge at night.', '広安里からは夜にライトアップされた広安大橋が見えます。'],
      ['감천문화마을', 'Gamcheon Culture Village', '甘川文化村', '산비탈에 알록달록한 집들이 계단처럼 이어진 마을입니다.', 'Colourful houses stacked up a hillside like steps.', '山の斜面にカラフルな家が階段状に連なる村です。'],
      ['자갈치시장', 'Jagalchi Fish Market', 'チャガルチ市場', '국내 최대 수산시장. 1층에서 고른 생선을 위층 식당에서 먹을 수 있습니다.', 'Korea’s biggest fish market; pick seafood downstairs and eat it upstairs.', '国内最大の水産市場。1階で選んだ魚を上の階の食堂で食べられます。'],
      ['해운대 블루라인파크', 'Haeundae Blueline Park', '海雲台ブルーラインパーク', '옛 동해남부선 철길을 따라 해변열차와 하늘 위 스카이캡슐이 달리는 해안 관광 시설입니다.', 'A coastal attraction where a beach train and elevated sky capsules run along the old Donghae Nambu railway.', '旧東海南部線の線路に沿って海辺列車と空中のスカイカプセルが走る海岸の観光施設です。'],
      ['부산 엑스 더 스카이', 'BUSAN X the SKY', '釜山 X the SKY', '해운대 엘시티 100층 전망대로, 해운대 해변과 광안대교가 한눈에 보입니다.', 'The 100th-floor observatory at Haeundae LCT, overlooking the beach and Gwangan Bridge.', '海雲台LCTの100階展望台で、海雲台ビーチと広安大橋が一望できます。'],
    ],
    t: [
      ['해운대 블루라인파크의 해변열차·스카이캡슐은 온라인 예매가 가능하고 현장 표가 일찍 소진될 수 있으니 방문 전 예약 현황을 확인하세요.', 'The Haeundae Blueline Park Beach Train and Sky Capsule can be booked online, and limited on-site tickets may sell out early. Check availability before visiting.', '海雲台ブルーラインパークの海辺列車とスカイカプセルはオンライン予約が可能で、当日券は早く売り切れる場合があります。訪問前に空き状況を確認しましょう。'],
      ['돼지국밥은 서면의 국밥 골목에서, 밀면과 씨앗호떡 등 부산 먹거리는 시내 여러 지역에서 찾아보세요.', 'Try dwaeji-gukbap in Seomyeon\'s pork soup alley, and look for milmyeon, seed hotteok, and other Busan foods across the city.', '豚クッパは西面のクッパ通りで、ミルミョンやシアホットクなどの釜山グルメは市内各地で探せます。'],
      ['공항에서 시내: 김해공항에서는 부산-김해 경전철을 타고 사상역에서 지하철 2호선으로 갈아타거나, 해운대·서면 방면 리무진 버스를 이용합니다.', 'Airport to city: from Gimhae Airport take the Busan–Gimhae Light Rail to Sasang and change to Metro Line 2, or ride a limousine bus towards Haeundae or Seomyeon.', '空港から市内へ：金海空港からは釜山・金海軽電鉄で沙上駅へ行き地下鉄2号線に乗り換えるか、海雲台・西面方面のリムジンバスを使います。'],
    ],
  },
  jeju: {
    h: [
      ['성산일출봉', 'Seongsan Ilchulbong', '城山日出峰', '바다에서 솟은 분화구 봉우리. 이름처럼 해돋이 명소입니다.', 'A crater peak rising from the sea, famous for sunrise.', '海からそびえる火口の峰。名前の通り日の出の名所です。'],
      ['한라산', 'Hallasan', '漢拏山', '한국에서 가장 높은 산. 백록담으로 가는 성판악·관음사 코스 일부 구간은 탐방 예약이 필요합니다.', 'Hallasan is South Korea\'s highest mountain. Reservations are required for parts of the Seongpanak and Gwaneumsa routes to Baengnokdam.', '漢拏山は韓国で最も高い山です。白鹿潭へ向かう城板岳・観音寺コースの一部区間は事前予約が必要です。'],
      ['올레길', 'Jeju Olle Trail', 'オルレ道', '섬 해안을 따라 이어지는 도보 코스. 한 구간씩 골라 걷기 좋습니다.', 'Walking routes that circle the island’s coast; pick a section to walk.', '島の海岸に沿って続く散策コース。区間を選んで歩けます。'],
      ['만장굴', 'Manjanggul Lava Tube', '万丈窟', '유네스코 세계자연유산 「제주 화산섬과 용암동굴」의 하나로, 수 킬로미터 이어진 용암동굴 일부를 걸어 볼 수 있습니다.', 'Part of the UNESCO-listed Jeju Volcanic Island and Lava Tubes; walk a section of the kilometres-long tube.', '世界自然遺産「済州火山島と溶岩洞窟群」の一つで、数キロ続く溶岩洞窟の一部を歩けます。'],
      ['국립제주박물관', 'Jeju National Museum', '国立済州博物館', '탐라국부터 이어진 제주의 역사와 섬 문화를 보여 주는 박물관입니다.', 'A museum of Jeju’s history and island culture since the ancient Tamna kingdom.', '耽羅国から続く済州の歴史と島の文化を紹介する博物館です。'],
    ],
    t: [
      ['버스로도 다닐 수 있지만 명소가 흩어져 있어 렌터카를 많이 이용합니다.', 'Buses work, but sights are spread out, so many people rent a car.', 'バスでも回れますが、名所が点在しているのでレンタカーの利用が多いです。'],
      ['바람이 강한 날이 많아 해안 일정에는 바람막이를 챙기세요.', 'It is often windy, so bring a windbreaker for the coast.', '風の強い日が多いので、海岸を回るなら風よけの上着を。'],
      ['공항에서 시내: 제주공항은 제주시 도심과 가까워 택시로 금방이고, 서귀포·중문으로는 공항 리무진 버스가 다닙니다. 섬 전체를 돌 계획이면 렌터카가 편합니다.', 'Airport to city: Jeju Airport is close to downtown Jeju City by taxi, and limousine buses run to Seogwipo and Jungmun. A rental car is easiest for touring the island.', '空港から市内へ：済州空港は済州市の中心に近くタクシーですぐです。西帰浦・中文へは空港リムジンバスがあります。島を一周するならレンタカーが便利です。'],
    ],
  },
  gangneung: {
    h: [
      ['안목 커피거리', 'Anmok Coffee Street', '安木コーヒー通り', '바다를 마주한 카페들이 줄지어 있는 거리입니다.', 'A seafront street lined with cafés.', '海に面したカフェが並ぶ通りです。'],
      ['경포대·경포호', 'Gyeongpodae and Gyeongpo Lake', '鏡浦台・鏡浦湖', '호수 둘레 산책로와 해변이 이어진 강릉의 대표 명소입니다.', 'Lakeside paths that lead to the beach, Gangneung’s classic sight.', '湖畔の散歩道と海辺がつながる江陵の代表名所です。'],
      ['오죽헌', 'Ojukheon', '烏竹軒', '신사임당과 율곡 이이가 태어난 조선 시대 가옥입니다.', 'The Joseon-era house where Shin Saimdang and Yulgok were born.', '申師任堂と栗谷李珥が生まれた朝鮮時代の家屋です。'],
      ['정동진', 'Jeongdongjin', '正東津', '바다 바로 옆 기차역과 모래시계공원이 있는 해돋이 명소입니다.', 'A sunrise spot with a seaside railway station and the Hourglass Park.', '海のすぐそばの駅と砂時計公園がある日の出の名所です。'],
    ],
    t: [
      ['서울에서 KTX로 2시간 안팎이라 당일치기 여행도 가능합니다.', 'About two hours from Seoul by KTX, so a day trip is possible.', 'ソウルからKTXで約2時間なので日帰りも可能です。'],
      ['초당 순두부 마을에는 아침 일찍 문을 여는 두부 식당이 있어 순두부로 아침을 먹기 좋습니다.', 'Some tofu restaurants in Chodang Village open early, making soft tofu a good breakfast option.', '草堂スンドゥブ村には朝早くから営業する豆腐料理店があり、スンドゥブを朝食に楽しめます。'],
    ],
  },
  gyeongju: {
    h: [
      ['불국사·석굴암', 'Bulguksa and Seokguram', '仏国寺・石窟庵', '신라 불교 예술을 대표하는 유네스코 세계유산입니다.', 'UNESCO-listed masterpieces of Silla Buddhist art.', '新羅仏教美術を代表する世界遺産です。'],
      ['동궁과 월지', 'Donggung Palace and Wolji Pond', '東宮と月池', '연못에 비치는 야간 조명이 아름다운 신라 궁궐터입니다.', 'Silla palace grounds best at night, reflected in the pond.', '池に映る夜のライトアップが美しい新羅の宮殿跡です。'],
      ['대릉원·황리단길', 'Daereungwon and Hwangnidan-gil', '大陵苑・皇理団通り', '거대한 고분 공원 옆으로 한옥 카페 거리가 이어집니다.', 'Giant royal tombs next to a lane of hanok cafés.', '巨大な古墳公園の隣に韓屋カフェ通りが続きます。'],
      ['국립경주박물관', 'Gyeongju National Museum', '国立慶州博物館', '신라 금관과 성덕대왕신종(에밀레종) 등 신라 유물을 모은 박물관으로, 상설 전시는 무료입니다.', 'Home to Silla gold crowns and the Sacred Bell of King Seongdeok; the permanent exhibition is free.', '新羅の金冠や聖徳大王神鐘など新羅の遺物を集めた博物館で、常設展は無料です。'],
      ['양동마을', 'Yangdong Village', '良洞村', '조선 시대 양반 가옥과 초가가 그대로 남은 씨족 마을로, 하회마을과 함께 유네스코 세계유산입니다.', 'A Joseon-era clan village of noble houses and thatched homes, UNESCO-listed with Hahoe.', '朝鮮時代の両班家屋とわらぶき家が残る同族村で、河回村とともに世界遺産です。'],
    ],
    t: [
      ['유적이 넓게 퍼져 있어 시내 구간은 자전거를 빌려 다니기 좋습니다.', 'Sites are spread out; renting a bike works well around town.', '遺跡が広く点在しているので、市内は自転車を借りると便利です。'],
      ['KTX 경주역(옛 신경주역)은 시내에서 떨어져 있습니다. 도착 후에는 시내버스나 택시로 중심지까지 이동하세요.', 'KTX Gyeongju Station, formerly Singyeongju Station, is outside the centre. Continue into town by local bus or taxi.', 'KTX慶州駅（旧・新慶州駅）は市街地から離れています。到着後は路線バスかタクシーで中心部へ向かいましょう。'],
    ],
  },
  yeosu: {
    h: [
      ['여수 밤바다·낭만포차', 'Yeosu night sea and pojangmacha', '麗水の夜の海と屋台', '이순신광장에서는 해양공원을 따라 걸어 하멜등대 근처의 낭만포차 거리를 찾을 수 있습니다.', 'Walk along the waterfront from Yi Sun-sin Square to the seaside stalls near Hamel Lighthouse.', '麗水の夜景と浪漫屋台。李舜臣広場から海沿いを歩くと、ハメル灯台近くの屋台通りに着きます。'],
      ['여수 해상케이블카', 'Yeosu Maritime Cable Car', '麗水海上ケーブルカー', '바다 위를 건너 돌산도까지 가는 케이블카입니다.', 'A cable car that crosses the sea to Dolsando.', '海の上を渡って突山島へ行くケーブルカーです。'],
      ['오동도', 'Odongdo Island', '梧桐島', '방파제 길로 걸어 들어가는 동백꽃 섬입니다.', 'A camellia island reached on foot along a breakwater.', '防波堤の道を歩いて渡る椿の島です。'],
      ['향일암', 'Hyangiram Hermitage', '向日庵', '돌산도 끝자락 바위 절벽 위 암자로, 이름처럼 해돋이 명소입니다.', 'A hermitage on the cliffs at the tip of Dolsando, famous, as its name says, for sunrise.', '突山島の先端の断崖に立つ庵で、名前のとおり日の出の名所です。'],
    ],
    t: [
      ['게장 백반은 간장·양념게장을 함께 맛볼 수 있는 여수 대표 음식입니다. 리필 횟수와 조건은 식당마다 다르니 메뉴를 확인하세요.', 'Crab set meals are a Yeosu specialty, often with soy and spicy marinated crab. Check each restaurant\'s menu for its refill limits and conditions.', 'カンジャンケジャンとヤンニョムケジャンを味わえるケジャン定食は麗水の名物です。おかわりの回数や条件は店ごとに確認してください。'],
      ['여수엑스포역에 KTX로 도착하면 엑스포 해변공원과 오동도 등 주변 명소를 도보나 대중교통으로 둘러보기 좋습니다.', 'Arriving by KTX at Yeosu-Expo Station makes nearby sights such as Expo Beach Park and Odongdo easy to reach on foot or by public transport.', 'KTXで麗水エキスポ駅に着けば、エキスポ海浜公園や梧桐島など周辺の名所を徒歩や公共交通で巡りやすくなります。'],
    ],
  },
  jeonju: {
    h: [
      ['전주 한옥마을', 'Jeonju Hanok Village', '全州韓屋村', '한옥 수백 채가 모인 마을. 한복을 빌려 입고 걷는 여행자가 많습니다.', 'Hundreds of hanok houses; many visitors stroll in rented hanbok.', '数百軒の韓屋が集まる村。韓服を借りて歩く人が多いです。'],
      ['경기전', 'Gyeonggijeon Shrine', '慶基殿', '조선 태조의 초상화를 모신 곳입니다.', 'The shrine holding the portrait of King Taejo of Joseon.', '朝鮮太祖の肖像画を祀る場所です。'],
      ['남부시장 야시장', 'Nambu Market night market', '南部市場夜市', '주말 저녁에 열리는 먹거리 야시장입니다.', 'A weekend evening street-food market.', '週末の夜に開かれる屋台の夜市です。'],
      ['전동성당', 'Jeondong Cathedral', '殿洞聖堂', '한옥마을 입구의 로마네스크 양식 성당으로, 한국 천주교 첫 순교 터에 세워졌습니다.', 'A Romanesque cathedral at the entrance to the Hanok Village, built on the site of Korea\'s first Catholic martyrdom.', '韓屋村の入口にあるロマネスク様式の聖堂で、韓国カトリック最初の殉教地に建てられました。'],
      ['자만벽화마을', 'Jaman Mural Village', '滋満壁画村', '한옥마을에서 길 하나 건너 언덕 위 마을로, 골목 벽화를 30분 정도면 둘러봅니다. 주민이 사는 곳이니 조용히 다니세요.', 'A hillside village across the road from the Hanok Village, its mural-lined lanes seen in about 30 minutes; residents live here, so keep quiet.', '韓屋村から道を渡った丘の上の村で、路地の壁画を30分ほどで見て回れます。住民が暮らす場所なので静かに。'],
    ],
    t: [
      ['비빔밥과 콩나물국밥이 유명하며, 콩나물국밥은 아침 해장 메뉴로 즐겨 먹습니다.', 'Bibimbap and bean-sprout soup are famous; the soup is a favourite breakfast.', 'ビビンバとコンナムルクッパが有名で、クッパは朝食によく食べられます。'],
      ['한옥마을 안 한옥스테이에 묵을 계획이라면 원하는 객실을 미리 예약하세요. 주말에는 마을 안 차량 통행도 제한됩니다.', 'If you plan to stay in a hanok inside the village, book your preferred room ahead. Vehicle access to the village is also restricted on weekends.', '韓屋村内の韓屋ステイに泊まるなら、希望の部屋を早めに予約しましょう。週末は村内の車両通行も制限されます。'],
    ],
  },
  kyoto: {
    h: [
      ['후시미 이나리 신사', 'Fushimi Inari Taisha', '伏見稲荷大社', '산길을 따라 붉은 도리이 수천 개가 이어진 신사입니다.', 'Thousands of red torii gates line the mountain paths.', '山道に沿って数千の朱色の鳥居が続く神社です。'],
      ['기요미즈데라', 'Kiyomizu-dera', '清水寺', '절벽 위 나무 무대에서 교토 시내가 내려다보이는 절입니다.', 'A temple whose wooden stage juts out over the hillside.', '崖の上の木造舞台から京都市内を見下ろす寺です。'],
      ['아라시야마 대나무숲', 'Arashiyama Bamboo Grove', '嵐山・竹林の小径', '키 큰 대나무 사이로 난 길. 아침 일찍 가면 한산합니다.', 'A path through towering bamboo, quiet early in the morning.', '背の高い竹林の中の小道。朝早く行くとすいています。'],
      ['니조성', 'Nijo Castle', '二条城', '도쿠가와 쇼군의 교토 거처였던 성으로, 걸으면 새 울음소리가 나는 「꾀꼬리 마루」 복도가 유명합니다.', 'The Tokugawa shoguns’ Kyoto residence, famous for its “nightingale floors” that chirp underfoot.', '徳川将軍の京都での居城で、歩くと鳥の鳴き声のような音がする「うぐいす張り」の廊下で知られます。'],
      ['긴카쿠지(은각사)', 'Ginkaku-ji (Silver Pavilion)', '銀閣寺', '모래로 만든 정원과 이끼 정원이 아름다운 선종 사찰로, 「철학의 길」 산책과 묶어 둘러보기 좋습니다.', 'A Zen temple with sculpted sand and moss gardens, best paired with a walk along the Philosopher’s Path.', '砂の造形と苔の庭が美しい禅寺で、「哲学の道」の散策と合わせて巡るのがおすすめです。'],
    ],
    t: [
      ['시내버스가 매우 붐비니 지하철·JR·게이한 등 철도를 섞어 다니면 빠릅니다.', 'City buses get packed; mixing in the subway and rail lines is faster.', '市バスはとても混むので、地下鉄やJR・京阪などの鉄道を組み合わせると速いです。'],
      ['기온 지역에서는 게이코·마이코를 허락 없이 촬영하지 마세요. 일부 사유지 골목은 촬영 금지입니다.', 'Do not photograph geiko or maiko without permission in Gion; some private lanes ban photos.', '祇園では芸妓・舞妓を無断で撮影しないでください。一部の私道は撮影禁止です。'],
      ['공항에서 시내: 교토에는 공항이 없어 보통 간사이 공항을 이용합니다. JR 특급 하루카를 타면 갈아타지 않고 교토역까지 갑니다.', 'Airport to city: Kyoto has no airport, so most travellers use Kansai Airport; the JR Haruka limited express runs straight to Kyoto Station.', '空港から市内へ：京都には空港がないため関西空港を使うのが一般的です。JR特急はるかなら乗り換えなしで京都駅まで行けます。'],
    ],
  },
  okinawa: {
    h: [
      ['추라우미 수족관', 'Okinawa Churaumi Aquarium', '美ら海水族館', '고래상어가 헤엄치는 대형 수조로 유명한 수족관입니다.', 'Famous for its giant tank with whale sharks.', 'ジンベエザメが泳ぐ大水槽で有名な水族館です。'],
      ['국제거리', 'Kokusai-dori', '国際通り', '나하 중심의 쇼핑·먹거리 거리입니다.', "Naha's main street for shopping and food.", '那覇中心のショッピングとグルメの通りです。'],
      ['슈리성 공원', 'Shurijo Castle Park', '首里城公園', '류큐 왕국의 왕성 터. 화재 뒤 복원 공사를 공개하고 있습니다.', 'The Ryukyu royal castle site, where post-fire restoration is on view.', '琉球王国の王城跡。火災後の復元工事を公開しています。'],
      ['오키나와 현립 박물관·미술관', 'Okinawa Prefectural Museum & Art Museum', '沖縄県立博物館・美術館', '나하 신도심에 있는 박물관과 미술관으로, 류큐 왕국부터 현대까지 오키나와의 역사와 자연을 다룹니다.', 'Naha\'s museum and art museum covering Okinawa\'s nature and history from the Ryukyu Kingdom onwards.', '那覇新都心にある博物館・美術館で、琉球王国から現代までの沖縄の歴史と自然を紹介します。'],
      ['만좌모', 'Cape Manzamo', '万座毛', '코끼리 코 모양 바위로 유명한 해안 절벽으로, 북부 츄라우미 수족관 가는 길에 들르기 좋습니다.', 'Seaside cliffs known for the elephant-trunk rock, a handy stop on the way north to the aquarium.', '象の鼻の形の岩で知られる海岸の断崖で、北部の美ら海水族館へ向かう途中に寄りやすいです。'],
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
      ['도요타 산업기술기념관', 'Toyota Commemorative Museum of Industry and Technology', 'トヨタ産業技術記念館', '도요타의 출발점인 방직기부터 자동차 제조까지 실제 기계가 움직이는 모습을 보여 주는 박물관입니다.', 'Working machines trace Toyota’s story from looms to car making.', 'トヨタの原点である織機から自動車づくりまで、実際に動く機械で紹介する博物館です。'],
      ['리니어·철도관', 'SCMAGLEV and Railway Park', 'リニア・鉄道館', '신칸센과 자기부상열차 실물 차량이 전시된 JR 도카이의 철도 박물관입니다.', 'JR Central’s railway museum with real shinkansen and maglev trains.', '新幹線やリニアの実物車両が並ぶJR東海の鉄道博物館です。'],
    ],
    t: [
      ['히쓰마부시는 그대로, 양념을 얹어서, 육수를 부어서 세 가지 방법으로 나눠 먹습니다.', 'Hitsumabushi is eaten three ways: plain, with condiments, then with broth.', 'ひつまぶしは、そのまま、薬味をのせて、だしをかけての3通りで食べます。'],
      ['나고야 카페에는 오전에 음료를 주문하면 토스트·달걀 등을 곁들이는 모닝 서비스가 있습니다. 가게에 따라 음료 가격에 포함되거나 추가 요금이 붙습니다.', 'Nagoya cafés have a morning service that pairs a drink with toast, eggs or similar food. Depending on the café, it may be included with the drink or cost a little extra.', '名古屋の喫茶店には、朝にドリンクを注文するとトーストやゆで卵などが付くモーニングサービスがあります。ドリンク代に含まれる店も、追加料金がかかる店もあります。'],
    ],
  },
  hanoi: {
    h: [
      ['호안끼엠 호수', 'Hoan Kiem Lake', 'ホアンキエム湖', '구시가지 옆 호수. 주말 저녁에는 주변 도로가 보행자 거리가 됩니다.', 'The lake by the Old Quarter; nearby streets go pedestrian on weekend evenings.', '旧市街の隣の湖。週末の夜は周辺が歩行者天国になります。'],
      ['구시가지 36거리', 'Old Quarter (36 Streets)', '旧市街（36通り）', '골목마다 다른 물건을 파는 옛 상업 거리입니다.', 'Old trading streets, each once devoted to a single craft.', '通りごとに異なる品を売る昔ながらの商業地区です。'],
      ['문묘', 'Temple of Literature', '文廟', '베트남 최초의 대학이 있던 공자 사당입니다.', 'A Confucian temple that housed Vietnam’s first university.', 'ベトナム最初の大学があった孔子廟です。'],
      ['호찌민 묘소', 'Ho Chi Minh Mausoleum', 'ホーチミン廟', '바딘 광장 앞의 묘소로, 복장 규정과 개방 시간이 정해져 있어 미리 확인하고 가야 합니다.', 'The mausoleum on Ba Dinh Square; dress codes and limited opening hours apply, so check before going.', 'バーディン広場前の廟で、服装規定や開館時間が決まっているので事前に確認しましょう。'],
      ['탕롱 황성', 'Imperial Citadel of Thang Long', 'タンロン遺跡', '천 년 넘게 베트남 왕조의 중심이었던 성터로, 유네스코 세계유산입니다.', 'The UNESCO-listed citadel that was the seat of Vietnamese dynasties for over a thousand years.', '千年以上ベトナム王朝の中心だった城跡で、世界遺産です。'],
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
      ['비셰흐라드', 'Vyšehrad', 'ヴィシェフラド', '블타바강을 내려다보는 언덕 위 옛 요새로, 성당과 묘지, 강 전망이 있는 조용한 산책지입니다.', 'A quiet hilltop fortress above the Vltava with a basilica, cemetery and river views.', 'ヴルタヴァ川を見下ろす丘の上の古い城塞で、聖堂や墓地、川の眺めがある静かな散策地です。'],
      ['국립박물관', 'National Museum', '国立博物館', '바츨라프 광장 끝에 선 웅장한 박물관 건물로, 체코의 자연과 역사를 전시합니다.', 'The grand museum at the top of Wenceslas Square, covering Czech nature and history.', 'ヴァーツラフ広場の端に建つ壮麗な博物館で、チェコの自然と歴史を展示しています。'],
    ],
    t: [
      ['체코 화폐는 코루나입니다. 환전소의 "수수료 0%" 문구보다 실제 환율을 확인하세요.', 'The currency is the koruna; check the actual rate rather than “0% commission” signs.', '通貨はコルナ。両替所の「手数料0%」より実際のレートを確認しましょう。'],
      ['체코 맥주는 맥주 거품까지 즐기는 문화라 거품이 많은 잔도 정상입니다.', 'Czech beer is served with a generous head; that is intentional.', 'チェコビールは泡も楽しむ文化なので、泡が多いのも普通です。'],
      ['공항에서 시내: 프라하 공항에서는 119번 버스로 나드라지 벨레슬라빈역에 가서 지하철 A선으로 갈아타거나, 중앙역까지 가는 에어포트 익스프레스(AE) 버스를 탑니다.', 'Airport to city: take bus 119 to Nádraží Veleslavín for Metro line A, or the Airport Express (AE) bus to the main railway station.', '空港から市内へ：プラハ空港からは119番バスでナードラジー・ヴェレスラヴィーン駅へ行き地下鉄A線に乗り換えるか、中央駅行きのエアポート・エクスプレス(AE)バスを使います。'],
    ],
  },
};
