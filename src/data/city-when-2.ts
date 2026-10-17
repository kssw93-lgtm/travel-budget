/** 언제 가면 좋을까 2 — 동남아·중화권·몽골·중앙아시아·중동 (형식은 city-when-1.ts) */
import type { When } from './city-when-1';

export const WHEN_2: Record<string, When> = {
  bangkok: {
    p: [
      ['4월 13~15일 송끄란', '13–15 April (Songkran)', '4月13〜15日（ソンクラーン）', '태국 설날 물축제로, 카오산로드·실롬 거리에서 도시 전체가 물싸움을 벌입니다.', 'Thai New Year’s water festival turns Khao San Road and Silom into giant water fights.', 'タイ正月の水かけ祭りで、カオサン通りやシーロム通りで街中が水かけ合戦になります。'],
      ['11월 러이끄라통', 'November (Loy Krathong)', '11月（ロイクラトン）', '보름달 밤 강에 연꽃 모양 등불(끄라통)을 띄우는 축제로, 짜오프라야강 변이 아름답습니다.', 'On the full-moon night, lotus-shaped krathongs are floated on the Chao Phraya.', '満月の夜に灯籠（クラトン）を川に流す祭りで、チャオプラヤー川沿いが美しいです。'],
      ['11~2월 건기', 'November–February (cool dry season)', '11〜2月（乾季）', '일 년 중 가장 선선하고 비가 적어 사원 관광과 야시장에 좋습니다.', 'The coolest, driest months for temples and night markets.', '一年で最も涼しく雨が少なく、寺院観光やナイトマーケットに最適です。'],
    ],
    x: ['3~5월은 매우 덥고, 9~10월은 비가 가장 많습니다.', 'March–May is very hot, and September–October is the wettest.', '3〜5月は非常に暑く、9〜10月は最も雨が多いです。'],
  },
  'chiang-mai': {
    p: [
      ['11월 이뻥 등불 축제', 'November (Yi Peng lantern festival)', '11月（イーペン祭り）', '러이끄라통 기간에 하늘로 등불을 날리는 축제로, 치앙마이의 가장 유명한 장면입니다(대규모 등불 행사는 유료·예약제가 많음).', 'Sky lanterns released during Loy Krathong — Chiang Mai’s most famous sight (big launches are often ticketed).', 'ロイクラトンの期間に天灯を空へ放つ祭りで、チェンマイで最も有名な光景です（大規模な行事は有料・予約制が多い）。'],
      ['12~1월', 'December–January', '12〜1月', '일 년 중 가장 선선해 산속 사원과 트레킹에 좋습니다.', 'The coolest months, ideal for mountain temples and trekking.', '一年で最も涼しく、山の寺院やトレッキングに最適です。'],
    ],
    x: ['2~4월은 산불 연기로 공기가 나쁜 날이 많습니다.', 'February–April often brings smoky air from seasonal burning.', '2〜4月は野焼きの煙で空気が悪い日が多いです。'],
  },
  phuket: {
    p: [
      ['11~4월 안다만 해안 관광철', 'November–April Andaman travel season', '11～4月のアンダマン海側の観光シーズン', '피피섬·팡아만 보트 여행과 해수욕을 계획하기 좋습니다. 바다 상태는 출발 전 확인하세요.', 'A good time to plan boat trips to Phi Phi and Phang Nga Bay and beach visits. Check sea conditions before departure.', 'ピピ諸島やパンガー湾への船旅、海水浴を計画しやすい時期です。出発前に海況を確認しましょう。'],
      ['10월 채식 축제', 'October (Vegetarian Festival)', '10月（ベジタリアン・フェスティバル）', '중국계 주민들의 독특한 종교 축제로, 거리 행렬이 열립니다(일부 의식은 자극적일 수 있음).', 'A striking festival of the Chinese community with street processions (some rituals are intense).', '中国系住民の独特な宗教祭りで、街頭行列があります（一部の儀式は刺激が強い）。'],
    ],
    x: ['5~10월 우기에는 안다만 해안의 파도와 기상에 유의하고, 적색 깃발이 있는 해변에서는 수영하지 마세요.', 'In the May–October rainy season, watch sea and weather conditions on the Andaman coast. Do not swim at beaches marked with a red flag.', '5～10月の雨季はアンダマン海沿岸の波と天候に注意し、赤い旗が立つビーチでは泳がないでください。'],
  },
  pattaya: {
    p: [
      ['11~3월', 'November–March', '11～3月', '파타야 해변과 꼬란 섬 여행을 계획하기 좋은 시기입니다. 수영 가능 여부는 당일 날씨와 바다 상태를 확인하세요.', 'A useful season to plan Pattaya beach and Ko Lan trips. Check the day\'s weather and sea conditions before swimming.', 'パタヤのビーチやラン島への旅行を計画しやすい時期です。泳ぐ前に当日の天気と海況を確認しましょう。'],
      ['4월 송끄란', 'April (Songkran)', '4月（ソンクラーン）', '파타야는 송끄란 물축제가 다른 지역보다 길게 이어지는 것으로 유명합니다.', 'Pattaya is known for celebrating Songkran longer than elsewhere.', 'パタヤはソンクラーンが他の地域より長く続くことで有名です。'],
    ],
  },
  'da-nang': {
    p: [
      ['2~5월', 'February–May', '2〜5月', '비가 적고 덥지 않아 해변과 바나힐, 호이안 야경을 즐기기 가장 좋습니다.', 'Dry and not too hot — the best time for beaches, Ba Na Hills and Hoi An by night.', '雨が少なく暑すぎず、ビーチやバーナーヒルズ、ホイアンの夜景に最適です。'],
      ['6~7월 국제 불꽃 축제', 'June–July (International Fireworks Festival)', '6〜7月（国際花火大会）', '여러 나라 팀이 한강 위에서 불꽃 경연을 펼치는 다낭의 대표 행사입니다(해마다 일정 확인).', 'Teams from several countries compete over the Han River (check the year’s schedule).', '各国のチームがハン川の上で花火を競う、ダナンを代表するイベントです（年ごとに日程確認）。'],
    ],
    x: ['9~12월은 비가 많고 태풍이 올 수 있습니다.', 'September–December is rainy with possible typhoons.', '9〜12月は雨が多く台風の可能性があります。'],
  },
  hanoi: {
    p: [
      ['10~12월 가을', 'October–December (autumn)', '10〜12月（秋）', '선선하고 맑은 하노이의 가장 좋은 계절로, 하롱베이 크루즈도 쾌적합니다.', 'Hanoi’s best season — cool and clear, and pleasant for Ha Long Bay cruises.', '涼しく晴れたハノイの最高の季節で、ハロン湾クルーズも快適です。'],
      ['4~6월', 'April–June', '4〜6月', '맑은 날이 많아 시내와 근교를 둘러보기 좋은 시기입니다.', 'Often clear skies — a good time to explore the city and around.', '晴れの日が多く、市内や近郊を巡るのに向いた時期です。'],
    ],
    x: ['설(뗏, 1~2월) 연휴에는 많은 상점이 며칠씩 문을 닫습니다.', 'Many shops close for days over Tết (Lunar New Year, January–February).', 'テト（旧正月、1〜2月）の連休は多くの店が数日休みます。'],
  },
  'ho-chi-minh-city': {
    p: [
      ['12~4월 건기', 'December–April (dry season)', '12〜4月（乾季）', '비가 적어 시내 관광과 메콩 델타·구찌 터널 투어에 좋습니다.', 'Dry weather for city sights and Mekong Delta or Cu Chi day tours.', '雨が少なく、市内観光やメコンデルタ・クチトンネルのツアーに最適です。'],
      ['설(뗏) 전 꽃거리', 'Before Tết (Nguyen Hue flower street)', 'テト前（グエンフエの花通り）', '설 직전 응우옌후에 거리가 꽃 장식으로 꾸며집니다.', 'Just before Lunar New Year, Nguyen Hue boulevard is decorated with flowers.', '旧正月の直前、グエンフエ通りが花で飾られます。'],
    ],
  },
  'da-lat': {
    p: [
      ['11~5월 건기', 'November–May (dry season)', '11〜5月（乾季）', '비교적 건조하고 하늘이 맑은 날이 많습니다. 꽃 축제는 해마다 공지되는 일정을 확인하세요.', 'Generally drier with clearer skies; check each year’s announcement for the flower festival.', '比較的乾燥して空が澄む日が多いです。花祭りは毎年の発表で日程を確認を。'],
      ['11월 해바라기(야생 해바라기)', 'November (wild sunflowers)', '11月（野生のヒマワリ）', '고원 길가가 노란 야생 해바라기로 물듭니다.', 'Highland roadsides turn yellow with wild sunflowers.', '高原の道沿いが黄色い野生のヒマワリに染まります。'],
    ],
  },
  'nha-trang': {
    p: [
      ['2~8월', 'February–August', '2〜8月', '바다가 맑고 잔잔해 섬 호핑과 스노클링에 좋습니다.', 'Clear, calm water for island-hopping and snorkelling.', '海が澄んで穏やかで、アイランドホッピングやシュノーケリングに最適です。'],
    ],
    x: ['9~12월은 비가 잦고 흐린 날이 많습니다.', 'September–December can be rainy and cloudy.', '9〜12月は雨が多く曇りがちです。'],
  },
  'phu-quoc': {
    p: [
      ['11~4월 건기', 'November–April (dry season)', '11〜4月（乾季）', '바다가 가장 맑아 해상 케이블카와 남부 해변을 즐기기 좋습니다.', 'The clearest water, ideal for the sea cable car and southern beaches.', '海が最も澄み、海上ケーブルカーや南部のビーチに最適です。'],
    ],
    x: ['7~9월은 폭풍과 비가 잦아 배편과 해변 일정에 영향을 줄 수 있습니다.', 'Storms and rain are more frequent July–September and can affect ferries and beach plans.', '7〜9月は嵐や雨が多く、船や海辺の予定に影響することがあります。'],
  },
  taipei: {
    p: [
      ['음력 정월 대보름 등불 축제', 'Lantern Festival (15th day of Lunar New Year)', '元宵節のランタン祭り', '핑시에서 소원을 적은 천등을 날리는 행사와 도시 곳곳의 등불 전시가 열립니다.', 'Sky lanterns at Pingxi and lantern displays across the city.', '平渓で願いを書いた天灯を飛ばす行事や、市内各所のランタン展示があります。'],
      ['12월 31일 101 불꽃놀이', '31 December (Taipei 101 fireworks)', '12月31日（台北101の花火）', '타이베이 101 빌딩에서 쏘아 올리는 새해 불꽃놀이가 유명합니다.', 'The New Year fireworks launched from Taipei 101 are famous.', '台北101から打ち上げる年越し花火が有名です。'],
      ['10~11월 가을', 'October–November (autumn)', '10〜11月の秋', '선선하고 비가 비교적 적어 야시장과 근교 여행에 좋습니다.', 'Cooler and relatively drier, good for night markets and day trips.', '涼しく、比較的雨が少ないため、夜市や近郊への小旅行に向いています。'],
    ],
    x: ['여름(6~9월)은 무덥고 태풍이 올 수 있습니다.', 'Summer (June–September) is hot with possible typhoons.', '夏（6〜9月）は蒸し暑く台風の可能性があります。'],
  },
  kaohsiung: {
    p: [
      ['음력 설 무렵', 'Around Lunar New Year', '旧正月のころ', '가오슝의 계절 축제와 조명 전시를 즐길 수 있습니다. 개최 장소와 기간은 해마다 공식 일정을 확인하세요.', 'Enjoy Kaohsiung\'s seasonal festivals and light displays. Check the official venue and dates each year.', '高雄の季節行事やライトアップを楽しめます。会場と期間は毎年公式日程を確認してください。'],
      ['가을·겨울', 'Autumn and winter', '秋・冬', '비교적 온화한 날씨에 가오슝 항구와 치진 해변을 산책하기 좋습니다.', 'Generally mild weather makes it pleasant to walk around Kaohsiung Harbor and Cijin Beach.', '比較的穏やかな気候の中、高雄港や旗津の海辺を散策しやすい時期です。'],
    ],
  },
  taichung: {
    p: [
      ['10~12월', 'October–December', '10〜12月', '맑고 온화해 시내 명소와 근교 일월담(르웨탄)을 함께 보기 좋습니다.', 'Clear, mild weather for the city and a trip to Sun Moon Lake.', '晴れて穏やかで、市内の名所と近郊の日月潭を一緒に巡れます。'],
      ['3~4월', 'March–April', '3〜4月', '꽃이 피는 봄 날씨로 공원과 거리 산책이 즐겁습니다.', 'Spring blooms make parks and streets pleasant.', '花咲く春で、公園や街歩きが楽しいです。'],
    ],
  },
  singapore: {
    p: [
      ['음력 설(1~2월)', 'Lunar New Year (January–February)', '旧正月（1〜2月）', '차이나타운이 등불과 장식으로 화려해지고 리버 홍바오 행사가 열립니다.', 'Chinatown glows with lanterns and the River Hongbao celebrations take place.', 'チャイナタウンが提灯や飾りで華やぎ、リバー・ホンバオが開かれます。'],
      ['10월 무렵 F1 싱가포르 그랑프리', 'Around October (Formula 1 Singapore Grand Prix)', '10月頃（F1シンガポールGP）', '도심 도로를 달리는 야간 레이스로 도시 전체가 축제 분위기입니다.', 'Around October, the F1 Singapore Grand Prix brings a night race to city streets and a festival atmosphere across Singapore.', '10月ごろのF1シンガポールグランプリ。市街地を走るナイトレースで、街全体が祭りの雰囲気に包まれます。'],
      ['12월 연말', 'December (year-end)', '12月（年末）', '오차드 로드의 크리스마스 조명과 마리나 베이 새해 불꽃이 유명합니다.', 'Orchard Road’s Christmas lights and the Marina Bay New Year fireworks.', 'オーチャード通りのクリスマスイルミネーションとマリーナベイの年越し花火が有名です。'],
    ],
    x: ['F1 기간에는 호텔 요금이 크게 오릅니다.', 'Hotel rates jump during the Grand Prix.', 'F1期間はホテル料金が大きく上がります。'],
  },
  'hong-kong': {
    p: [
      ['10~12월 가을', 'October–December (autumn)', '10〜12月（秋）', '맑고 선선해 하이킹과 야경 보기에 가장 좋습니다.', 'Clear, cool weather — the best for hiking and skyline views.', '晴れて涼しく、ハイキングや夜景に最適です。'],
      ['음력 설', 'Lunar New Year', '旧正月', '퍼레이드와 빅토리아 하버 불꽃놀이가 열립니다.', 'A parade and fireworks over Victoria Harbour.', 'パレードとヴィクトリア・ハーバーの花火があります。'],
      ['12월 31일 새해 불꽃', '31 December (New Year fireworks)', '12月31日（年越し花火）', '하버를 둘러싼 빌딩에서 쏘아 올리는 새해 불꽃이 장관입니다.', 'Fireworks launched from the harbourfront towers are spectacular.', 'ハーバー沿いのビルから打ち上げる年越し花火が壮観です。'],
    ],
    x: ['5~11월은 태풍이 올 수 있으니 기상 경보를 확인하세요. 한여름은 무덥습니다.', 'Typhoons can occur May–November, so check weather warnings; midsummer is hot and humid.', '5〜11月は台風が来ることがあるので気象警報を確認を。真夏は蒸し暑いです。'],
  },
  macau: {
    p: [
      ['11월 마카오 그랑프리', 'November (Macau Grand Prix)', '11月（マカオ・グランプリ）', '도심 도로에서 열리는 국제 자동차 경주 대회입니다.', 'An international motor race on the city’s streets.', '市街地で開かれる国際的なモーターレースです。'],
      ['10~11월', 'October–November', '10〜11月', '온화하고 건조해 구시가지를 걷기 좋은 시기입니다.', 'Mild and dry, perfect for walking the old town.', '穏やかで乾燥し、旧市街を歩くのに最適な時期です。'],
    ],
    x: ['그랑프리·연휴 기간에는 숙소가 비싸고 붐빕니다.', 'Rooms are pricey and crowded during the Grand Prix and holidays.', 'グランプリや連休中は宿が高く混雑します。'],
  },
  cebu: {
    p: [
      ['1월 시눌로그', 'January (Sinulog)', '1月（シヌログ）', '필리핀 최대급 축제로, 순례와 화려한 의상의 거리 행렬이 열립니다.', 'One of the Philippines’ biggest festivals, with pilgrimages and a colourful street parade.', 'フィリピン最大級の祭りで、巡礼や色鮮やかな衣装の街頭パレードがあります。'],
      ['12~5월 건기', 'December–May (dry season)', '12〜5月（乾季）', '바다가 잔잔해 호핑 투어와 다이빙에 좋습니다.', 'Calm seas for island-hopping and diving.', '海が穏やかで、アイランドホッピングやダイビングに最適です。'],
    ],
    x: ['시눌로그 기간에는 숙소가 일찍 찹니다.', 'Rooms book out early for Sinulog.', 'シヌログ期間は宿が早く埋まります。'],
  },
  boracay: {
    p: [
      ['11~4월 건기', 'November–April dry season', '11～4月の乾季', '화이트 비치에서 해변 산책과 노을을 즐기기 좋은 시기입니다.', 'A good time for White Beach walks and sunsets.', 'ホワイトビーチの散策や夕日を楽しみやすい時期です。'],
    ],
    x: ['5~10월 우기에는 비와 강한 바람에 대비하고, 배편은 기상에 따라 변경될 수 있으니 운항을 확인하세요.', 'During the May–October rainy season, prepare for rain and stronger winds and check boat operations, which may change with the weather.', '5～10月の雨季は雨や強い風に備え、天候で変更されることがある船の運航を確認してください。'],
  },
  'kuala-lumpur': {
    p: [
      ['타이푸삼(보통 1~2월, 해마다 다름)', 'Thaipusam (usually January–February)', 'タイプーサム（通常1〜2月）', '쿠알라룸푸르에서 바투 동굴로 향하는 힌두교 순례 행렬을 볼 수 있습니다. 날짜는 해마다 확인하세요.', 'During Thaipusam, a Hindu procession travels from Kuala Lumpur toward Batu Caves. Check the date each year.', 'タイプーサムではクアラルンプールからバトゥ洞窟へ向かうヒンドゥー教の行列が行われます。日付は毎年確認してください。'],
      ['6~8월', 'June–August', '6〜8月', '남서몬순 시기로 강수량이 다소 적은 편이지만, 소나기에 대비해 유동적인 일정을 잡으세요.', 'June–August is part of the southwest monsoon, when rainfall is somewhat lower, but keep plans flexible for showers.', '6〜8月は南西モンスーン期で降水量がやや少なめですが、にわか雨に備えて予定に余裕を持ちましょう。'],
    ],
  },
  'kota-kinabalu': {
    p: [
      ['2~4월', 'February–April', '2〜4月', '비교적 건조해 섬 호핑과 키나발루산 등반에 좋습니다.', 'Drier months for island-hopping and climbing Mount Kinabalu.', '比較的乾燥していて、島巡りやキナバル山の登山に最適です。'],
      ['해안 석양', 'Coastal sunset', '海辺の夕日', '탄중아루 해변의 석양은 코타키나발루의 대표 볼거리입니다. 맑게 보이는지는 그날 날씨에 따라 달라집니다.', 'The sunset at Tanjung Aru Beach is one of Kota Kinabalu\'s signature sights. Visibility depends on the day\'s weather.', 'タンジュンアル・ビーチの夕日はコタキナバルを代表する見どころです。きれいに見えるかどうかは当日の天候によります。'],
    ],
  },
  bali: {
    p: [
      ['4~10월 건기', 'April–October (dry season)', '4〜10月（乾季）', '맑은 날이 많아 해변·서핑·사원 관광에 가장 좋습니다.', 'Sunny days for beaches, surfing and temples.', '晴れの日が多く、ビーチ・サーフィン・寺院観光に最適です。'],
      ['갈룽안·쿠닝안', 'Galungan and Kuningan', 'ガルンガン・クニンガン', '약 210일마다 돌아오는 힌두 명절로, 마을 길가에 대나무 장식(펜조르)이 늘어섭니다.', 'A Hindu festival every 210 days, when bamboo penjor poles line village roads.', '約210日ごとに巡るヒンドゥーの祝日で、村の道沿いに竹飾り（ペンジョール）が並びます。'],
    ],
    x: ['녀삐(발리 새해)에는 하루 동안 공항과 교통시설이 중단되고 상점도 문을 닫습니다. 날짜는 해마다 확인하세요.', 'On Nyepi, Bali\'s day of silence, the airport and transport hubs close and shops shut for a day. Check the annual date.', 'バリの新年「ニュピ」には、1日間空港や交通機関が止まり、店も閉まります。日付は毎年確認してください。'],
  },
  'siem-reap': {
    p: [
      ['11~2월', 'November–February', '11〜2月', '건기이면서 덜 더워 앙코르와트 일출과 유적 관람에 가장 좋습니다.', 'Dry and cooler — the best for Angkor Wat sunrise and temple visits.', '乾季で暑さも和らぎ、アンコールワットの日の出や遺跡見学に最適です。'],
      ['4월 중순 크메르 새해', 'Mid-April (Khmer New Year)', '4月中旬（クメール正月）', '앙코르 유적 일대에서 새해 축제 행사가 열립니다.', 'New Year festivities are held around the Angkor temples.', 'アンコール遺跡一帯で新年の祭りが行われます。'],
    ],
    x: ['3~5월은 매우 더워 한낮 관람이 힘듭니다.', 'March–May is extremely hot for midday visits.', '3〜5月は非常に暑く、日中の見学は大変です。'],
  },
  qingdao: {
    p: [
      ['7~8월 무렵 칭다오 국제맥주축제', 'Qingdao International Beer Festival, usually around July–August', '7～8月ごろの青島国際ビール祭り', '대형 맥주 축제로, 해마다 개최 날짜와 회장을 공식 안내에서 확인하세요.', 'A major beer festival. Check the official dates and venue each year.', '大規模なビール祭りです。毎年、公式案内で開催日と会場を確認してください。'],
      ['늦봄·초가을', 'Late spring and early autumn', '晩春・初秋', '칭다오의 구시가지와 해변을 걸어보세요. 해안 바람에 대비해 겉옷을 챙기면 좋습니다.', 'Explore Qingdao\'s old town and coast on foot, and bring a light layer for the sea breeze.', '青島の旧市街と海辺を歩いてみましょう。海風に備えて羽織るものがあると便利です。'],
    ],
  },
  beijing: {
    p: [
      ['4~5월 봄', 'April–May spring', '4～5月の春', '만리장성 주변 꽃과 이화원 정원을 둘러보기 좋은 시기입니다. 맑은 날은 당일 예보를 확인하세요.', 'A good time to see flowers near the Great Wall and explore the Summer Palace gardens. Check the day\'s forecast for clear skies.', '万里の長城周辺の花や頤和園の庭園を巡りやすい時期です。晴天かどうかは当日の予報を確認してください。'],
      ['9~10월 가을', 'September–October (autumn)', '9〜10月（秋）', '하늘이 맑고 향산 단풍이 아름다운 베이징 최고의 계절입니다.', 'Beijing’s best season, with clear skies and autumn colour at Xiangshan.', '空が澄み香山の紅葉が美しい、北京で最高の季節です。'],
    ],
    x: ['중국 국경절 연휴(대개 10월 초)에는 베이징의 인기 명소가 붐빌 수 있으니 날짜별 공식 휴일과 예약 상황을 확인하세요.', 'During China\'s National Day holiday, usually in early October, popular Beijing sights can be crowded. Check that year\'s official holiday dates and reservations.', '中国の国慶節連休（通常10月上旬）は北京の人気観光地が混み合うことがあります。その年の公式休日と予約状況を確認してください。'],
  },
  shanghai: {
    p: [
      ['3~5월 봄', 'March–May (spring)', '3〜5月（春）', '예원과 옛 프랑스 조계지 산책, 근교 수향마을 여행에 좋습니다.', 'Good for Yu Garden, the former French Concession and nearby water towns.', '豫園や旧フランス租界の散策、近郊の水郷巡りに最適です。'],
      ['10~11월 가을', 'October–November (autumn)', '10〜11月（秋）', '선선해져 와이탄을 걷기 좋습니다.', 'October–November brings cooler autumn weather for a walk along the Bund.', '10〜11月の秋は涼しくなり、外灘の散策に向いています。'],
    ],
    x: ['6월 장마와 7~8월 무더위.', 'The June plum rains and July–August heat.', '6月の梅雨と7〜8月の猛暑。'],
  },
  zhangjiajie: {
    p: [
      ['4월·10월', 'April and October', '4月・10月', '안개 낀 봉우리와 맑은 날이 번갈아 와 경치가 가장 좋다고 꼽히는 시기입니다.', 'Often named the best months, mixing misty peaks with clear days.', '霧の峰と晴天が交互に訪れ、景色が最も良いとされる時期です。'],
      ['겨울 설경', 'Winter snowscape', '冬の雪景色', '눈이 오면 무릉원 봉우리의 설경을 볼 수 있습니다. 설 연휴에는 관광객이 많을 수 있고 눈·얼음 때문에 이동이 제한될 수 있으니 운영 공지를 확인하세요.', 'Snow can transform Wulingyuan\'s peaks. The Lunar New Year holiday may still be busy, and snow or ice can disrupt access, so check operating notices.', '雪が降ると武陵源の峰々が雪景色になります。春節休暇は混雑することがあり、雪や凍結で移動が制限される場合もあるため、運営情報を確認してください。'],
    ],
    x: ['5월 초·10월 초 중국 연휴는 매우 붐빕니다.', 'The early-May and early-October holidays are extremely crowded.', '5月初めと10月初めの中国の連休は大混雑します。'],
  },
  ulaanbaatar: {
    p: [
      ['7월 11~15일 무렵 나담 축제', 'Around 11–15 July (Naadam)', '7月11〜15日頃（ナーダム）', '씨름·활쏘기·말 경주로 이뤄진 몽골의 큰 국가 축제입니다. 지역별 일정은 다를 수 있습니다.', 'Around July 11–15, Naadam brings wrestling, archery, and horse racing to one of Mongolia\'s major national celebrations. Local dates may vary.', '7月11～15日ごろのナーダム祭では、相撲・弓術・競馬が行われます。モンゴルの大きな国家行事で、地域により日程が異なる場合があります。'],
      ['6~8월 초원 여행', 'June–August (steppe trips)', '6〜8月（草原の旅）', '초록빛 초원에서 게르 숙박과 승마를 즐기기 좋은 시기입니다. 별 보기는 현지 날씨를 확인하세요.', 'June to August is a good season for green grasslands, ger stays, and horseback riding. Check the local weather if you hope to stargaze.', '6～8月は緑の草原でゲル宿泊や乗馬を楽しみやすい時期です。星空観察を予定するなら現地の天気を確認しましょう。'],
    ],
    x: ['11~3월 울란바토르는 겨울 추위가 심하고 대기질이 나빠질 수 있습니다. 방문 전 날씨와 공기질을 확인하세요.', 'Ulaanbaatar is very cold from November to March, and air quality can deteriorate in winter. Check weather and air-quality updates before your visit.', '11～3月のウランバートルは寒さが厳しく、大気質が悪化することがあります。旅行前に天候と大気質の情報を確認しましょう。'],
  },
  almaty: {
    p: [
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '빅 알마티 호수에서는 산책과 사진 촬영을 즐길 수 있습니다. 차린 캐니언도 별도 일정을 잡아 둘러보세요.', 'Enjoy walks and photography at Big Almaty Lake, and plan a separate outing to Charyn Canyon.', '夏はビッグ・アルマティ湖で散策や写真撮影を楽しめます。チャリン渓谷は別の日程で訪れましょう。'],
      ['3월 나우르즈', 'March (Nauryz)', '3月（ナウルズ）', '봄맞이 새해 명절로 거리 축제와 전통 음식을 즐길 수 있습니다.', 'The spring new-year holiday with street festivities and traditional food.', '春の新年の祝日で、街の祭りや伝統料理を楽しめます。'],
      ['12~3월 스키', 'December–March (skiing)', '12〜3月（スキー）', '시내에서 가까운 침불락 스키장을 즐길 수 있습니다.', 'Ski at Shymbulak, close to the city.', '市内に近いシンブラク・スキー場が楽しめます。'],
    ],
  },
  tashkent: {
    p: [
      ['3월 21일 무렵 나브루즈', 'Around 21 March (Navruz)', '3月21日頃（ナヴルーズ）', '봄맞이 새해 명절로, 수말락 같은 전통 음식을 함께 나눕니다.', 'The spring New Year, when dishes such as sumalak are shared.', '春の新年の祝日で、スマラクなどの伝統料理を分かち合います。'],
      ['4~5월·9~10월', 'April–May and September–October', '4〜5月・9〜10月', '여름 더위를 피해 사마르칸트·부하라의 실크로드 유적을 둘러보세요.', 'Explore the Silk Road sites of Samarkand and Bukhara outside the summer heat.', '春と秋は、夏の暑さを避けてサマルカンドとブハラのシルクロード遺跡を巡れます。'],
    ],
    x: ['7~8월은 매우 덥습니다.', 'July–August is very hot.', '7〜8月は非常に暑いです。'],
  },
  tbilisi: {
    p: [
      ['10월 트빌리소바·와인 수확', 'October (Tbilisoba and the grape harvest)', '10月（トビリソバ・ブドウ収穫）', '도시 축제 트빌리소바와 카헤티 와인 산지의 수확철이 겹칩니다.', 'The Tbilisoba city festival coincides with the Kakheti grape harvest.', '街の祭りトビリソバとカヘティのワイン産地の収穫期が重なります。'],
      ['5~6월', 'May–June', '5〜6月', '카즈베기 지역 하이킹을 계획하기 좋은 시기입니다. 트빌리시에서 스테판츠민다까지는 편도 약 3시간이므로 당일치기는 일찍 출발하세요.', 'May–June is a good time to plan hikes in the Kazbegi region. The drive from Tbilisi to Stepantsminda takes about three hours each way, so leave early for a day trip.', '5～6月はカズベギ周辺のハイキングを計画しやすい時期です。トビリシからステパンツミンダまでは片道約3時間なので、日帰りなら早朝に出発しましょう。'],
    ],
  },
  dubai: {
    p: [
      ['12~1월 두바이 쇼핑 페스티벌', 'December–January (Dubai Shopping Festival)', '12〜1月（ドバイ・ショッピング・フェスティバル）', '쇼핑 할인과 불꽃놀이·공연이 이어지는 축제 시즌입니다.', 'A season of retail promotions, fireworks and shows.', 'セールや花火、ショーが続くお祭りシーズンです。'],
      ['11~3월', 'November–March', '11〜3月', '선선해 사막 사파리와 해변 등 야외 활동을 즐기기 좋습니다.', 'Cool enough for desert safaris and beach days.', '涼しく、砂漠サファリやビーチなど屋外活動に最適です。'],
    ],
    x: ['6~9월은 매우 뜨거워 야외 활동이 어렵습니다.', 'June–September is too hot for outdoor plans.', '6〜9月は非常に暑く屋外活動は困難です。'],
  },
  cairo: {
    p: [
      ['11~4월', 'November–April', '11〜4月', '이집트의 비교적 온화한 겨울에 피라미드와 유적을 둘러보기 좋습니다.', 'Egypt\'s relatively mild winter suits visits to the pyramids and archaeological sites.', '11～4月はエジプトの比較的穏やかな冬で、ピラミッドや遺跡を巡りやすい時期です。'],
    ],
    x: ['한여름은 덥고 봄에는 먼지바람이 불 수 있습니다. 라마단에는 박물관과 상점의 운영 시간이 달라질 수 있으니 방문 전 확인하세요.', 'Summer can be hot and spring may bring dusty winds. Museum and shop hours may change during Ramadan, so check before visiting.', '真夏は暑く、春には砂ぼこりを伴う風が吹くことがあります。ラマダン中は博物館や店の営業時間が変わる場合があるため、訪問前に確認しましょう。'],
  },
};
