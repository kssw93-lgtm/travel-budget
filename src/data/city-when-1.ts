/**
 * 「언제 가면 좋을까」 — 도시별 추천 시기와 이유(축제·계절 풍경), 피하면 좋은 때. Claude 초안(금액 없음).
 * p: [시기ko, en, ja, 이유ko, en, ja] / x: 피하면 좋은 때 [ko, en, ja]
 * 축제 날짜는 해마다 조금씩 달라 「보통 ~월」로 쓴다.
 */
export type L3 = readonly [string, string, string];
export type Pick = readonly [string, string, string, string, string, string];
export interface When {
  p: readonly Pick[];
  x?: L3;
}

export const WHEN_1: Record<string, When> = {
  tokyo: {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '우에노 공원·메구로강·신주쿠교엔이 벚꽃으로 덮이고, 밤 벚꽃 조명도 즐길 수 있습니다.', 'Ueno Park, the Meguro River and Shinjuku Gyoen fill with blossoms, lit up at night.', '上野公園・目黒川・新宿御苑が桜に包まれ、夜桜のライトアップも楽しめます。'],
      ['7월 말 스미다강 불꽃놀이', 'Late July (Sumida River fireworks)', '7月末（隅田川花火大会）', '보통 7월 마지막 토요일에 열리는 도쿄 대표 불꽃놀이로, 유카타 차림의 여름 축제 분위기를 느낄 수 있습니다.', 'Tokyo’s signature fireworks, usually on the last Saturday of July, with a summer-festival atmosphere.', '例年7月最終土曜日に開かれる東京を代表する花火大会で、浴衣姿の夏祭りの雰囲気を味わえます。'],
      ['11월 말~12월 단풍·일루미네이션', 'Late November–December (autumn leaves, illuminations)', '11月末〜12月（紅葉・イルミネーション）', '은행나무 가로수가 노랗게 물들고, 연말에는 거리마다 화려한 조명이 켜집니다.', 'Ginkgo avenues turn gold and the streets glow with year-end illuminations.', 'イチョウ並木が黄金色に染まり、年末は街中が華やかなイルミネーションに彩られます。'],
    ],
    x: ['6월 장마와 8월 무더위, 골든위크(4월 말~5월 초)는 붐빕니다.', 'The June rainy season, August heat and Golden Week (late April–early May) crowds.', '6月の梅雨、8月の猛暑、ゴールデンウィーク（4月末〜5月初め）の混雑。'],
  },
  osaka: {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '오사카성 공원과 조폐국의 벚꽃 길이 유명하고, 교토·나라 벚꽃과 함께 즐기기 좋습니다.', 'Osaka Castle Park and the Mint’s cherry-blossom walk are famous, easy to pair with Kyoto and Nara.', '大阪城公園や造幣局の桜の通り抜けが有名で、京都・奈良の桜と一緒に楽しめます。'],
      ['7월 24~25일 무렵 덴진 마쓰리', 'Around 24–25 July (Tenjin Matsuri)', '7月24〜25日頃（天神祭）', '일본 3대 축제 중 하나로, 강 위를 지나는 배 행렬과 불꽃놀이가 장관입니다.', 'One of Japan’s three great festivals, with a river procession of boats and fireworks.', '日本三大祭りの一つで、川を行く船渡御と奉納花火が見どころです。'],
      ['10~11월', 'October–November', '10〜11月', '날씨가 선선해 먹거리 골목을 걷기 좋고, 근교 교토 단풍과 묶기 좋습니다.', 'Cool weather for food-street wandering, easily combined with Kyoto’s autumn colours.', '涼しく食べ歩きに最適で、近郊・京都の紅葉と組み合わせやすいです。'],
    ],
    x: ['한여름(7~8월)은 무덥고 습합니다.', 'Midsummer (July–August) is hot and humid.', '真夏（7〜8月）は蒸し暑いです。'],
  },
  kyoto: {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '철학의 길·마루야마 공원·아라시야마가 벚꽃으로 물드는 교토의 가장 화사한 계절입니다.', 'The Philosopher’s Path, Maruyama Park and Arashiyama bloom in Kyoto’s most colourful season.', '哲学の道・円山公園・嵐山が桜に染まる、京都で最も華やかな季節です。'],
      ['7월 기온 마쓰리', 'July (Gion Matsuri)', '7月（祇園祭）', '한 달 내내 이어지는 일본 대표 축제로, 17일 무렵의 거대한 수레(야마보코) 행렬이 하이라이트입니다.', 'A month-long festival whose highlight is the great float procession around 17 July.', '1か月続く日本を代表する祭りで、17日頃の山鉾巡行がハイライトです。'],
      ['11월 중순~말 단풍', 'Mid–late November (autumn leaves)', '11月中旬〜下旬（紅葉）', '도후쿠지·에이칸도·기요미즈데라의 단풍과 야간 조명이 절정입니다.', 'Peak colour and night illuminations at Tofuku-ji, Eikando and Kiyomizu-dera.', '東福寺・永観堂・清水寺の紅葉と夜間ライトアップが見頃です。'],
    ],
    x: ['벚꽃·단풍 절정 주말은 매우 붐비니 이른 아침에 움직이세요.', 'Peak blossom and foliage weekends are packed; go early in the morning.', '桜・紅葉の見頃の週末は大混雑なので、早朝に動きましょう。'],
  },
  okinawa: {
    p: [
      ['4월~5월 초', 'April–early May', '4月〜5月初め', '바다에 들어가기 시작하는 시기로, 한여름보다 덜 붐비고 덜 덥습니다(장마는 보통 5월 중순~6월 말).', 'Swimming season begins, less crowded and hot than midsummer (the rainy season usually runs mid-May to late June).', '海開きの時期で、真夏より空いていて暑さも控えめです（梅雨は例年5月中旬〜6月末）。'],
      ['1~2월 벚꽃', 'January–February (early cherry blossoms)', '1〜2月（早咲きの桜）', '일본에서 가장 먼저 피는 진분홍 벚꽃을 볼 수 있고, 겨울에도 따뜻합니다.', 'See Japan’s earliest deep-pink cherry blossoms in mild winter weather.', '日本で最も早く咲く濃いピンクの桜が見られ、冬でも温暖です。'],
      ['10~11월', 'October–November', '10〜11月', '태풍 시기가 지나고 바다가 아직 따뜻해 해변과 드라이브를 즐기기 좋습니다.', 'After typhoon season, with seas still warm for beaches and drives.', '台風シーズンが過ぎ、海がまだ温かくビーチやドライブに最適です。'],
    ],
    x: ['7~9월 태풍이 오면 항공·배편이 멈출 수 있습니다.', 'Typhoons in July–September can halt flights and ferries.', '7〜9月は台風で飛行機や船が止まることがあります。'],
  },
  nagoya: {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '나고야성 벚꽃과 조명이 아름답습니다.', 'Nagoya Castle’s blossoms and illuminations are lovely.', '名古屋城の桜とライトアップが美しいです。'],
      ['10~11월', 'October–November', '10〜11月', '선선한 날씨에 근교 다카야마·시라카와고 단풍 여행을 묶기 좋습니다.', 'Cool weather, ideal for autumn trips to Takayama and Shirakawa-go.', '涼しく、近郊の高山・白川郷の紅葉旅と組み合わせやすいです。'],
      ['1~2월 시라카와고 설경', 'January–February (Shirakawa-go in snow)', '1〜2月（白川郷の雪景色）', '눈 덮인 합장 가옥 마을을 보러 가는 거점으로 좋습니다(라이트업은 사전 예약제인 해가 많음).', 'A base for the snowy gassho-zukuri village (illumination nights often need booking).', '雪の合掌造り集落を見に行く拠点に（ライトアップは予約制の年が多い）。'],
    ],
    x: ['한여름은 일본에서도 무더운 편입니다.', 'Summers are among Japan’s hottest.', '夏は日本でも特に暑いです。'],
  },
  kobe: {
    p: [
      ['겨울 루미나리에', 'Winter (Kobe Luminarie)', '冬（神戸ルミナリエ）', '한신·아와지 대지진 추모와 희망을 담은 빛 축제로, 최근에는 1월 말 무렵 열립니다(해마다 시기 확인).', 'A light festival honouring the 1995 earthquake, held in winter (check the year’s dates).', '阪神・淡路大震災の鎮魂と希望の光の祭典で、冬に開かれます（年ごとに日程確認）。'],
      ['봄·가을', 'Spring and autumn', '春・秋', '항구 산책과 롯코산 전망, 아리마 온천을 쾌적하게 즐길 수 있습니다.', 'Comfortable for harbour walks, Mount Rokko views and Arima Onsen.', '港の散策、六甲山の眺め、有馬温泉を快適に楽しめます。'],
    ],
  },
  hiroshima: {
    p: [
      ['봄·가을', 'Spring and autumn', '春・秋', '미야지마와 평화기념공원 산책을 계획하기 좋습니다. 미야지마 모미지다니의 단풍은 보통 11월 무렵 절정입니다.', 'Good seasons to plan walks on Miyajima and in Peace Memorial Park. Foliage at Miyajima\'s Momijidani usually peaks around November.', '宮島や平和記念公園の散策を計画しやすい時期です。宮島の紅葉谷の紅葉は例年11月ごろが見頃です。'],
      ['8월 6일 평화기념식', '6 August (Peace Memorial Ceremony)', '8月6日（平和記念式典）', '원폭의 날 저녁, 강 위에 등불을 띄우는 등롱 흘리기가 열립니다.', 'On the anniversary evening, lanterns are floated on the river.', '原爆の日の夜、川に灯籠を流す灯籠流しが行われます。'],
    ],
    x: ['6~7월 장마철에는 비가 잦습니다.', 'Rain is frequent in the June–July rainy season.', '6〜7月の梅雨は雨が多いです。'],
  },
  kanazawa: {
    p: [
      ['11월~2월 겨울', 'November–February (winter)', '11月〜2月（冬）', '겐로쿠엔 소나무에 눈 무게를 막는 「유키쓰리」가 설치되고, 제철 대게와 방어를 맛볼 수 있습니다.', 'Kenroku-en’s pines get their snow-rope supports, and crab and yellowtail are in season.', '兼六園の松に雪吊りが施され、旬のカニやブリが味わえます。'],
      ['4월 벚꽃', 'April (cherry blossoms)', '4月（桜）', '가나자와성 공원과 겐로쿠엔의 벚꽃이 아름답습니다.', 'Kanazawa Castle Park and Kenroku-en in bloom.', '金沢城公園と兼六園の桜が美しいです。'],
    ],
  },
  hakodate: {
    p: [
      ['12월~2월 겨울', 'December–February (winter)', '12月〜2月（冬）', '눈 덮인 언덕길과 크리스마스 판타지(대형 트리·불꽃), 하코다테산 설경 야경이 아름답습니다.', 'Snowy slopes, the Christmas Fantasy tree and fireworks, and snowy night views from Mount Hakodate.', '雪の坂道、クリスマスファンタジー（大きなツリーと花火）、函館山の雪の夜景が美しいです。'],
      ['6~8월 여름', 'June–August (summer)', '6〜8月（夏）', '선선한 날씨에 아침시장 오징어 등 제철 해산물이 풍성합니다.', 'Cool weather and plenty of seasonal seafood, including fresh squid at the morning market.', '涼しく、朝市のイカなど旬の海産物が豊富です。'],
    ],
  },
  fukuoka: {
    p: [
      ['7월 1~15일 하카타 기온 야마카사', '1–15 July (Hakata Gion Yamakasa)', '7月1〜15日（博多祇園山笠）', '무거운 가마를 메고 시내를 달리는 축제로, 15일 새벽의 경주가 하이라이트입니다.', 'Teams race huge floats through the streets, peaking at dawn on 15 July.', '重い舁き山を担いで街を駆け抜ける祭りで、15日早朝の追い山がハイライトです。'],
      ['일 년 내내 야타이', 'Year-round (yatai food stalls)', '通年（屋台）', '후쿠오카의 야타이에서는 저녁 거리 분위기와 현지 음식을 함께 즐길 수 있습니다.', 'Fukuoka\'s yatai food stalls let you enjoy local dishes and the evening street atmosphere.', '福岡の屋台では、夜の街の雰囲気と地元の料理を一緒に楽しめます。'],
    ],
    x: ['늦여름 태풍 때는 항공편이 지연될 수 있습니다.', 'Late-summer typhoons can delay flights.', '晩夏の台風で飛行機が遅れることがあります。'],
  },
  sapporo: {
    p: [
      ['2월 초 삿포로 눈축제', 'Early February (Sapporo Snow Festival)', '2月初め（さっぽろ雪まつり）', '오도리 공원에서 대형 눈 조각을 볼 수 있습니다. 연도별 개최 날짜를 확인하세요.', 'In early February, the Sapporo Snow Festival displays large snow sculptures in Odori Park. Check each year\'s dates.', '2月上旬のさっぽろ雪まつりでは、大通公園で大きな雪像を見られます。開催日は毎年確認してください。'],
      ['7월 중순~8월 라벤더', 'Mid-July–August (lavender)', '7月中旬〜8月（ラベンダー）', '후라노·나카후라노 일대에서 라벤더를 볼 수 있습니다.', 'From mid-July into August, see lavender around Furano and Nakafurano.', '7月中旬から8月にかけて、富良野・中富良野周辺でラベンダーを楽しめます。'],
      ['겨울 스키', 'Winter (skiing)', '冬（スキー）', '삿포로 근처 스키장과 니세코 지역에서 파우더 스노를 즐길 수 있습니다. 운영 기간은 스키장별로 확인하세요.', 'Winter skiing is available near Sapporo and in the Niseko area, with powder snow conditions. Check each resort\'s season.', '冬は札幌近郊やニセコ地域のスキー場でパウダースノーを楽しめます。営業期間は各施設で確認してください。'],
    ],
    x: ['눈축제 방문객이 많으므로 축제 기간에 맞춰 여행한다면 숙소를 미리 알아보세요.', 'The Snow Festival draws many visitors, so look for accommodation early if traveling during the event.', '雪まつりには多くの来場者が集まるため、期間中の旅行なら宿泊先を早めに探しましょう。'],
  },
  seoul: {
    p: [
      ['4월 초 벚꽃', 'Early April (cherry blossoms)', '4月初め（桜）', '여의도 윤중로·석촌호수의 벚꽃 축제가 열리는 서울의 가장 화사한 시기입니다.', 'Cherry-blossom festivals at Yeouido and Seokchon Lake make it Seoul’s prettiest time.', '汝矣島の輪中路や石村湖で桜祭りが開かれる、ソウルで最も華やかな時期です。'],
      ['가을', 'Autumn', '秋', '궁궐과 남산의 단풍이 아름답고, 맑은 날씨에 걷기 좋습니다. 서울세계불꽃축제가 열리는 시기라 일정은 해마다 확인하세요.', 'Palaces and Namsan turn red and gold in clear walking weather; the Seoul International Fireworks Festival is held in this season — check the date each year.', '王宮や南山の紅葉が美しく、晴れて歩きやすい季節です。ソウル世界花火祭りの時期なので日程は毎年確認を。'],
      ['12월 연말', 'December (year-end)', '12月（年末）', '명동·광화문 일대 조명과 크리스마스 장식이 화려합니다.', 'Myeongdong and Gwanghwamun glow with festive lights.', '明洞や光化門一帯のイルミネーションが華やかです。'],
    ],
    x: ['7~8월 장마·무더위와 1~2월 혹한.', 'The July–August monsoon and heat, and the deep cold of January–February.', '7〜8月の梅雨と猛暑、1〜2月の厳しい寒さ。'],
  },
  busan: {
    p: [
      ['여름 해수욕철', 'Summer (beach season)', '夏（海水浴シーズン）', '해운대·광안리 해수욕장이 운영됩니다. 개장 날짜는 해마다 확인하세요.', 'Summer beach season brings swimming at Haeundae and Gwangalli. Check each year\'s opening dates.', '夏の海水浴シーズンには海雲台と広安里の海水浴場が開きます。開設日は毎年確認してください。'],
      ['가을 부산국제영화제', 'Autumn (Busan International Film Festival)', '秋（釜山国際映画祭）', '부산국제영화제 등 큰 행사가 열리는 시기입니다. 행사 일정은 해마다 확인하세요.', 'Season of major events such as the Busan International Film Festival; check the dates each year.', '釜山国際映画祭など大きなイベントが開かれる時期です。日程は毎年確認を。'],
    ],
    x: ['늦여름 태풍 때는 해안이 위험할 수 있습니다.', 'Late-summer typhoons can make the coast dangerous.', '晩夏の台風時は海岸が危険になることがあります。'],
  },
  jeju: {
    p: [
      ['3월 말~4월 유채꽃·벚꽃', 'Late March–April (canola and cherry blossoms)', '3月末〜4月（菜の花・桜）', '노란 유채꽃과 벚꽃이 함께 피는 제주의 대표 풍경을 볼 수 있습니다.', 'Yellow canola and cherry blossoms bloom together in Jeju’s signature scene.', '黄色い菜の花と桜が一緒に咲く済州の代表的な風景が見られます。'],
      ['6~9월 여름 바다', 'June–September (summer sea)', '6〜9月（夏の海）', '협재·함덕 해변의 에메랄드빛 바다에서 물놀이하기 좋습니다.', 'Swim in the emerald water at Hyeopjae and Hamdeok.', '挟才・咸徳ビーチのエメラルドの海で泳ぐのに最適です。'],
      ['10~11월 억새', 'October–November (silver grass)', '10〜11月（ススキ）', '오름과 산굼부리를 은빛 억새가 덮는 가을 풍경이 유명합니다.', 'Silver grass covers the volcanic cones, famous at Sangumburi.', 'オルムや山君不離を銀色のススキが覆う秋の景色が有名です。'],
    ],
  },
  gangneung: {
    p: [
      ['음력 5월 단오 무렵 강릉단오제', 'Around Dano, 5th day of the 5th lunar month (Gangneung Danoje)', '旧暦5月の端午の頃（江陵端午祭）', '유네스코 인류무형문화유산인 단오 축제로, 전통 굿과 공연이 열립니다. 양력 날짜는 해마다 달라집니다.', 'A UNESCO-listed Dano festival of rituals and performances; the calendar dates change every year.', 'ユネスコ無形文化遺産の端午祭で、伝統儀礼や公演が行われます。新暦の日付は毎年変わります。'],
      ['7~8월 바다', 'July–August (sea)', '7〜8月（海）', '경포 해변 등 동해 해수욕을 즐기기 좋습니다.', 'Beach days at Gyeongpo and along the east coast.', '鏡浦ビーチなど東海の海水浴を楽しめます。'],
      ['1월 해돋이', 'January (New Year sunrise)', '1月（初日の出）', '정동진·경포에서 새해 해돋이를 보러 많이 찾습니다.', 'Crowds come to Jeongdongjin and Gyeongpo for the first sunrise of the year.', '正東津や鏡浦で初日の出を見に多くの人が訪れます。'],
    ],
  },
  gyeongju: {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '보문호와 대릉원 일대가 벚꽃으로 덮이는 한국 대표 벚꽃 명소입니다.', 'Bomun Lake and the tumuli area are among Korea’s best blossom spots.', '普門湖や大陵苑一帯が桜に包まれる韓国有数の桜の名所です。'],
      ['10~11월 단풍', 'October–November (autumn leaves)', '10〜11月（紅葉）', '불국사와 통일전 은행나무 길이 물들고, 동궁과 월지 야경이 아름답습니다.', 'Bulguksa and the ginkgo road turn gold, with lovely night views at Donggung Palace.', '仏国寺や統一殿のイチョウ並木が色づき、東宮と月池の夜景も美しいです。'],
    ],
  },
  yeosu: {
    p: [
      ['3월 오동도 동백꽃', 'March (camellias on Odongdo)', '3月（梧桐島の椿）', '붉은 동백꽃이 섬 숲을 덮는 시기입니다.', 'Red camellias cover the island’s woods.', '赤い椿が島の森を覆う時期です。'],
      ['여름 밤바다', 'Summer nights by the sea', '夏の夜の海', '해상 케이블카에서 야경을 보고 하멜등대 근처 낭만포차 거리를 걸어보세요.', 'Take in the night view from the marine cable car, then stroll past the seaside stalls near Hamel Lighthouse.', '夏の麗水の夜は、海上ケーブルカーから夜景を眺め、ハメル灯台近くの屋台通りを歩いてみましょう。'],
    ],
  },
  jeonju: {
    p: [
      ['4월 말~5월 초 전주국제영화제', 'Late April–early May (Jeonju International Film Festival)', '4月末〜5月初め（全州国際映画祭）', '독립·예술 영화 중심의 상영과 행사가 전주 곳곳에서 열립니다.', 'Independent and art films, screenings and events take place around the city.', '4月末～5月初めの全州国際映画祭では、インディペンデント映画や芸術映画の上映と催しが市内各地で開かれます。'],
      ['10~11월 가을', 'October–November (autumn)', '10〜11月（秋）', '한옥마을 은행나무와 경기전 단풍이 아름답고 걷기 좋습니다.', 'Golden ginkgos in the hanok village and autumn colour at Gyeonggijeon.', '韓屋村のイチョウや慶基殿の紅葉が美しく、歩きやすいです。'],
    ],
  },
  sokcho: {
    p: [
      ['10월 설악산 단풍', 'October (Seoraksan foliage)', '10月の雪岳山の紅葉', '국내에서 이른 편에 드는 단풍 명소입니다. 단풍철에는 케이블카 대기를 감안하세요.', 'One of Korea\'s earlier autumn-colour destinations. Allow for cable-car waits during foliage season.', '韓国でも早い時期に色づく紅葉の名所です。紅葉シーズンはロープウェイの待ち時間を見込んでください。'],
      ['7~8월 바다', 'July–August (sea)', '7〜8月（海）', '속초해변 해수욕과 시장 먹거리를 함께 즐기기 좋습니다.', 'Beach days plus the market’s seafood snacks.', '束草ビーチの海水浴と市場グルメを一緒に楽しめます。'],
    ],
    x: ['단풍철 주말에는 설악산 케이블카와 주변 이동에 여유 시간을 잡으세요.', 'On foliage-season weekends, leave extra time for the Seoraksan cable car and travel nearby.', '紅葉シーズンの週末は、雪岳山ロープウェイと周辺の移動に余裕を持たせましょう。'],
  },
  tongyeong: {
    p: [
      ['봄·가을', 'Spring and autumn', '春・秋', '섬 여행과 미륵산 케이블카를 계획하기 좋습니다. 한려수도 전망은 당일 날씨를 확인하세요.', 'Plan an island trip and the Mireuksan cable car, and check the day\'s weather for Hallyeo Waterway views.', '島めぐりや弥勒山ロープウェイを計画しやすい時期です。閑麗水道の眺望は当日の天気を確認しましょう。'],
      ['11~3월 굴 철', 'November–March oyster season', '11～3月のカキの季節', '통영의 식당에서 제철 굴 요리를 맛보기 좋습니다.', 'Try seasonal oyster dishes at restaurants in Tongyeong.', '統営の食堂で旬のカキ料理を楽しめます。'],
    ],
  },
  daegu: {
    p: [
      ['7월 치맥 페스티벌', 'July (Chimac Festival)', '7月（チメクフェスティバル）', '치킨과 맥주를 즐기는 여름 축제로 많은 사람이 찾습니다.', 'A summer festival of fried chicken and beer that draws big crowds.', 'チキンとビールを楽しむ夏祭りで、多くの人が訪れます。'],
      ['봄·가을', 'Spring and autumn', '春・秋', '근대골목과 팔공산을 걷기 좋은 날씨입니다.', 'Pleasant weather for the heritage alleys and Palgongsan.', '近代路地や八公山を歩くのに快適な気候です。'],
    ],
    x: ['한여름에는 대구의 폭염에 대비하세요.', 'Prepare for extreme heat in Daegu during midsummer.', '真夏の大邱では猛暑に備えましょう。'],
  },
  incheon: {
    p: [
      ['봄', 'Spring', '春', '차이나타운·개항장 일대를 걷기 좋은 계절입니다. 섬 여행은 배편 운항 정보를 미리 확인하세요.', 'A pleasant season for walking around Chinatown and the open-port district; check ferry schedules for island trips.', 'チャイナタウンや開港場周辺の散策に向く季節です。島への旅は船の運航情報を事前に確認を。'],
      ['여행 첫날이나 마지막 날', 'First or last day of a trip', '旅の初日・最終日', '인천공항 일정을 고려해 차이나타운이나 영종도 관광을 계획할 수 있습니다. 이동 시간은 별도로 확인하세요.', 'You can plan a visit to Chinatown or Yeongjongdo around an Incheon Airport itinerary. Check the travel time separately.', '仁川空港の予定に合わせてチャイナタウンや永宗島の観光を計画できます。移動時間は別途確認しましょう。'],
    ],
  },
};
