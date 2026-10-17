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
      ['11~4월 건기', 'November–April (dry season)', '11〜4月（乾季）', '바다가 잔잔하고 맑아 피피섬·팡아만 투어와 해수욕에 가장 좋습니다.', 'Calm, clear seas for Phi Phi and Phang Nga Bay trips and swimming.', '海が穏やかで澄み、ピピ島やパンガー湾ツアー、海水浴に最適です。'],
      ['10월 채식 축제', 'October (Vegetarian Festival)', '10月（ベジタリアン・フェスティバル）', '중국계 주민들의 독특한 종교 축제로, 거리 행렬이 열립니다(일부 의식은 자극적일 수 있음).', 'A striking festival of the Chinese community with street processions (some rituals are intense).', '中国系住民の独特な宗教祭りで、街頭行列があります（一部の儀式は刺激が強い）。'],
    ],
    x: ['5~10월 우기에는 파도가 높아 일부 해변 수영이 금지됩니다.', 'In the May–October monsoon, rough surf closes some beaches to swimming.', '5〜10月の雨季は波が高く、一部ビーチで遊泳禁止になります。'],
  },
  pattaya: {
    p: [
      ['11~3월 건기', 'November–March (dry season)', '11〜3月（乾季）', '맑은 날씨에 꼬란섬 투어와 해변을 즐기기 좋습니다.', 'Sunny days for Koh Larn trips and the beach.', '晴天が続き、ラン島ツアーやビーチを楽しめます。'],
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
      ['3~4월 봄', 'March–April (spring)', '3〜4月（春）', '날씨가 온화하고 닌빈의 논 풍경이 푸릇합니다.', 'Mild weather and green rice fields at Ninh Binh.', '穏やかな気候で、ニンビンの田園が青々としています。'],
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
      ['12~3월 건기', 'December–March (dry season)', '12〜3月（乾季）', '맑은 날이 많고 꽃이 많이 피며, 연말에 꽃 축제가 열리는 해도 있습니다.', 'Clear days and plenty of blooms; the flower festival is held in some years.', '晴れの日が多く花が咲き誇り、年によって花祭りが開かれます。'],
      ['11월 해바라기(야생 해바라기)', 'November (wild sunflowers)', '11月（野生のヒマワリ）', '고원 길가가 노란 야생 해바라기로 물듭니다.', 'Highland roadsides turn yellow with wild sunflowers.', '高原の道沿いが黄色い野生のヒマワリに染まります。'],
    ],
  },
  'nha-trang': {
    p: [
      ['2~8월', 'February–August', '2〜8月', '바다가 맑고 잔잔해 섬 호핑과 스노클링에 좋습니다.', 'Clear, calm water for island-hopping and snorkelling.', '海が澄んで穏やかで、アイランドホッピングやシュノーケリングに最適です。'],
    ],
    x: ['10~12월은 비가 많고 바다가 거칩니다.', 'October–December brings heavy rain and rough seas.', '10〜12月は雨が多く海が荒れます。'],
  },
  'phu-quoc': {
    p: [
      ['11~4월 건기', 'November–April (dry season)', '11〜4月（乾季）', '바다가 가장 맑아 해상 케이블카와 남부 해변을 즐기기 좋습니다.', 'The clearest water, ideal for the sea cable car and southern beaches.', '海が最も澄み、海上ケーブルカーや南部のビーチに最適です。'],
    ],
    x: ['5~10월 우기에는 비와 파도가 잦습니다.', 'Frequent rain and waves in the May–October wet season.', '5〜10月の雨季は雨や波が多いです。'],
  },
  taipei: {
    p: [
      ['음력 정월 대보름 등불 축제', 'Lantern Festival (15th day of Lunar New Year)', '元宵節のランタン祭り', '핑시에서 소원을 적은 천등을 날리는 행사와 도시 곳곳의 등불 전시가 열립니다.', 'Sky lanterns at Pingxi and lantern displays across the city.', '平渓で願いを書いた天灯を飛ばす行事や、市内各所のランタン展示があります。'],
      ['12월 31일 101 불꽃놀이', '31 December (Taipei 101 fireworks)', '12月31日（台北101の花火）', '타이베이 101 빌딩에서 쏘아 올리는 새해 불꽃놀이가 유명합니다.', 'The New Year fireworks launched from Taipei 101 are famous.', '台北101から打ち上げる年越し花火が有名です。'],
      ['10~12월 가을', 'October–December (autumn)', '10〜12月（秋）', '선선하고 비가 비교적 적어 야시장과 근교 여행에 좋습니다.', 'Cooler and drier, good for night markets and day trips.', '涼しく比較的雨が少なく、夜市や近郊旅行に最適です。'],
    ],
    x: ['여름(6~9월)은 무덥고 태풍이 올 수 있습니다.', 'Summer (June–September) is hot with possible typhoons.', '夏（6〜9月）は蒸し暑く台風の可能性があります。'],
  },
  kaohsiung: {
    p: [
      ['음력 정월 등불 축제', 'Lunar New Year lantern season', '旧正月のランタン祭り', '아이허(사랑의 강) 일대 등불 전시가 아름답습니다.', 'Lantern displays along the Love River are lovely.', '愛河一帯のランタン展示が美しいです。'],
      ['10~4월', 'October–April', '10〜4月', '따뜻하고 맑은 날이 많아 항구 산책에 좋습니다.', 'Warm, sunny days for harbour walks.', '暖かく晴れの日が多く、港の散策に最適です。'],
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
      ['9월 무렵 F1 싱가포르 그랑프리', 'Around September (Formula 1 Singapore Grand Prix)', '9月頃（F1シンガポールGP）', '도심 도로를 달리는 야간 레이스로 도시 전체가 축제 분위기입니다.', 'A night race on city streets that turns the city into a festival.', '市街地を走るナイトレースで、街全体がお祭りムードになります。'],
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
    x: ['6~9월은 무덥고 태풍 경보로 일정이 멈출 수 있습니다.', 'June–September is hot, and typhoon signals can halt plans.', '6〜9月は蒸し暑く、台風警報で予定が止まることがあります。'],
  },
  macau: {
    p: [
      ['11월 마카오 그랑프리', 'November (Macau Grand Prix)', '11月（マカオ・グランプリ）', '도심 도로에서 열리는 국제 자동차 경주 대회입니다.', 'An international motor race on the city’s streets.', '市街地で開かれる国際的なモーターレースです。'],
      ['10~12월', 'October–December', '10〜12月', '선선하고 맑아 구시가지를 걷기 좋습니다.', 'Cool and clear, perfect for walking the old town.', '涼しく晴れて、旧市街を歩くのに最適です。'],
    ],
    x: ['그랑프리·연휴 기간에는 숙소가 비싸고 붐빕니다.', 'Rooms are pricey and crowded during the Grand Prix and holidays.', 'グランプリや連休中は宿が高く混雑します。'],
  },
  cebu: {
    p: [
      ['1월 셋째 일요일 무렵 시눌로그', 'Around the third Sunday of January (Sinulog)', '1月第3日曜日頃（シヌログ）', '필리핀 최대급 축제로, 화려한 의상의 거리 퍼레이드가 열립니다.', 'One of the Philippines’ biggest festivals, with a colourful street parade.', 'フィリピン最大級の祭りで、色鮮やかな衣装の街頭パレードがあります。'],
      ['12~5월 건기', 'December–May (dry season)', '12〜5月（乾季）', '바다가 잔잔해 호핑 투어와 다이빙에 좋습니다.', 'Calm seas for island-hopping and diving.', '海が穏やかで、アイランドホッピングやダイビングに最適です。'],
    ],
    x: ['시눌로그 기간에는 숙소가 일찍 찹니다.', 'Rooms book out early for Sinulog.', 'シヌログ期間は宿が早く埋まります。'],
  },
  boracay: {
    p: [
      ['11~5월 건기', 'November–May (dry season)', '11〜5月（乾季）', '화이트 비치의 바다가 가장 맑고 노을이 아름답습니다.', 'White Beach at its clearest, with beautiful sunsets.', 'ホワイトビーチの海が最も澄み、夕日が美しいです。'],
    ],
    x: ['6~10월 우기에는 바람과 비가 잦고 배편이 지연될 수 있습니다.', 'In June–October winds and rain are frequent and boats may be delayed.', '6〜10月の雨季は風雨が多く、船が遅れることがあります。'],
  },
  'kuala-lumpur': {
    p: [
      ['1~2월 타이푸삼', 'January–February (Thaipusam)', '1〜2月（タイプーサム）', '바투 동굴로 향하는 힌두교 순례 행렬이 장관입니다.', 'The Hindu pilgrimage procession to the Batu Caves is spectacular.', 'バトゥ洞窟へ向かうヒンドゥー教の巡礼行列が壮観です。'],
      ['6~8월', 'June–August', '6〜8月', '비가 비교적 적은 편이라 시내 관광에 좋습니다.', 'Relatively drier months for city sightseeing.', '比較的雨が少なく、市内観光に向いています。'],
    ],
  },
  'kota-kinabalu': {
    p: [
      ['2~4월', 'February–April', '2〜4月', '비교적 건조해 섬 호핑과 키나발루산 등반에 좋습니다.', 'Drier months for island-hopping and climbing Mount Kinabalu.', '比較的乾燥していて、島巡りやキナバル山の登山に最適です。'],
      ['일 년 내내 석양', 'Sunsets all year', '一年中の夕日', '해안 석양은 계절과 관계없이 이 도시의 대표 볼거리입니다.', 'The coastal sunsets are the city’s signature sight in any season.', '海辺の夕日は季節を問わずこの街の代表的な見どころです。'],
    ],
  },
  bali: {
    p: [
      ['4~10월 건기', 'April–October (dry season)', '4〜10月（乾季）', '맑은 날이 많아 해변·서핑·사원 관광에 가장 좋습니다.', 'Sunny days for beaches, surfing and temples.', '晴れの日が多く、ビーチ・サーフィン・寺院観光に最適です。'],
      ['갈룽안·쿠닝안', 'Galungan and Kuningan', 'ガルンガン・クニンガン', '약 210일마다 돌아오는 힌두 명절로, 마을 길가에 대나무 장식(펜조르)이 늘어섭니다.', 'A Hindu festival every 210 days, when bamboo penjor poles line village roads.', '約210日ごとに巡るヒンドゥーの祝日で、村の道沿いに竹飾り（ペンジョール）が並びます。'],
    ],
    x: ['녀삐(발리 새해, 보통 3월)에는 하루 동안 공항과 거리가 모두 멈춥니다.', 'On Nyepi (Balinese New Year, usually March) the airport and streets shut for a day.', 'ニュピ（バリの新年、例年3月）は1日、空港も街も止まります。'],
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
      ['8월 칭다오 국제맥주축제', 'August (Qingdao International Beer Festival)', '8月（青島国際ビール祭り）', '세계 각국 맥주를 맛보는 대형 축제입니다(해마다 장소·기간 확인).', 'A huge festival of beers from around the world (check venue and dates each year).', '世界各国のビールが味わえる大規模な祭りです（年ごとに会場・期間を確認）。'],
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '선선한 바닷바람에 구시가지와 해변을 걷기 좋습니다.', 'Cool sea breezes for the old town and beaches.', '涼しい海風の中、旧市街や海辺を歩くのに最適です。'],
    ],
  },
  beijing: {
    p: [
      ['4~5월 봄', 'April–May (spring)', '4〜5月（春）', '맑은 날이 많아 만리장성과 이화원을 둘러보기 좋습니다.', 'Clear days for the Great Wall and the Summer Palace.', '晴れの日が多く、万里の長城や頤和園の見学に最適です。'],
      ['9~10월 가을', 'September–October (autumn)', '9〜10月（秋）', '하늘이 맑고 향산 단풍이 아름다운 베이징 최고의 계절입니다.', 'Beijing’s best season, with clear skies and autumn colour at Xiangshan.', '空が澄み香山の紅葉が美しい、北京で最高の季節です。'],
    ],
    x: ['국경절 연휴(10월 1일~7일 무렵)는 명소가 극도로 붐빕니다.', 'The National Day holiday (about 1–7 October) brings extreme crowds.', '国慶節連休（10月1〜7日頃）は名所が大混雑します。'],
  },
  shanghai: {
    p: [
      ['3~5월 봄', 'March–May (spring)', '3〜5月（春）', '예원과 옛 프랑스 조계지 산책, 근교 수향마을 여행에 좋습니다.', 'Good for Yu Garden, the former French Concession and nearby water towns.', '豫園や旧フランス租界の散策、近郊の水郷巡りに最適です。'],
      ['10~11월 가을', 'October–November (autumn)', '10〜11月（秋）', '선선하고 맑아 와이탄 야경을 보기 좋습니다.', 'Cool, clear evenings for the Bund’s skyline.', '涼しく晴れて、外灘の夜景に最適です。'],
    ],
    x: ['6월 장마와 7~8월 무더위.', 'The June plum rains and July–August heat.', '6月の梅雨と7〜8月の猛暑。'],
  },
  zhangjiajie: {
    p: [
      ['4월·10월', 'April and October', '4月・10月', '안개 낀 봉우리와 맑은 날이 번갈아 와 경치가 가장 좋다고 꼽히는 시기입니다.', 'Often named the best months, mixing misty peaks with clear days.', '霧の峰と晴天が交互に訪れ、景色が最も良いとされる時期です。'],
      ['1~2월 설경', 'January–February (snow)', '1〜2月（雪景色）', '눈 덮인 봉우리를 볼 수 있고 관광객이 적습니다(일부 길 통제 가능).', 'Snow-capped pillars and fewer visitors (some paths may close).', '雪をかぶった峰が見られ観光客も少なめです（一部通行止めの可能性）。'],
    ],
    x: ['5월 초·10월 초 중국 연휴는 매우 붐빕니다.', 'The early-May and early-October holidays are extremely crowded.', '5月初めと10月初めの中国の連休は大混雑します。'],
  },
  ulaanbaatar: {
    p: [
      ['7월 11~13일 무렵 나담 축제', 'Around 11–13 July (Naadam)', '7月11〜13日頃（ナーダム）', '씨름·활쏘기·경마로 이뤄진 몽골 최대 축제입니다.', 'Mongolia’s biggest festival of wrestling, archery and horse racing.', 'モンゴル相撲・弓射・競馬からなるモンゴル最大の祭りです。'],
      ['6~8월 초원', 'June–August (the steppe)', '6〜8月（草原）', '초원이 푸르고 게르 숙박과 별 보기에 가장 좋은 시기입니다.', 'Green steppe, ideal for ger stays and stargazing.', '草原が緑に染まり、ゲル泊や星空観察に最適です。'],
    ],
    x: ['11~3월은 세계에서 가장 추운 수도 중 하나이고 대기 오염이 심합니다.', 'November–March is bitterly cold with heavy air pollution.', '11〜3月は世界有数の寒さで、大気汚染もひどいです。'],
  },
  almaty: {
    p: [
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '빅 알마티 호수·차린 캐니언 같은 자연 명소를 즐기기 좋습니다.', 'Best for Big Almaty Lake and Charyn Canyon.', 'ビッグ・アルマトイ湖やチャリン渓谷などの自然を楽しむのに最適です。'],
      ['3월 나우르즈', 'March (Nauryz)', '3月（ナウルズ）', '봄맞이 새해 명절로 거리 축제와 전통 음식을 즐길 수 있습니다.', 'The spring new-year holiday with street festivities and traditional food.', '春の新年の祝日で、街の祭りや伝統料理を楽しめます。'],
      ['12~3월 스키', 'December–March (skiing)', '12〜3月（スキー）', '시내에서 가까운 침불락 스키장을 즐길 수 있습니다.', 'Ski at Shymbulak, close to the city.', '市内に近いシンブラク・スキー場が楽しめます。'],
    ],
  },
  tashkent: {
    p: [
      ['3월 21일 무렵 나브루즈', 'Around 21 March (Navruz)', '3月21日頃（ナヴルーズ）', '봄맞이 새해 명절로, 수말락 같은 전통 음식을 함께 나눕니다.', 'The spring New Year, when dishes such as sumalak are shared.', '春の新年の祝日で、スマラクなどの伝統料理を分かち合います。'],
      ['4~5월·9~10월', 'April–May and September–October', '4〜5月・9〜10月', '사마르칸트·부하라까지 실크로드 여행을 이어 가기 좋은 날씨입니다.', 'Pleasant weather to continue along the Silk Road to Samarkand and Bukhara.', 'サマルカンド・ブハラまでシルクロードの旅を続けるのに快適な気候です。'],
    ],
    x: ['7~8월은 매우 덥습니다.', 'July–August is very hot.', '7〜8月は非常に暑いです。'],
  },
  tbilisi: {
    p: [
      ['10월 트빌리소바·와인 수확', 'October (Tbilisoba and the grape harvest)', '10月（トビリソバ・ブドウ収穫）', '도시 축제 트빌리소바와 카헤티 와인 산지의 수확철이 겹칩니다.', 'The Tbilisoba city festival coincides with the Kakheti grape harvest.', '街の祭りトビリソバとカヘティのワイン産地の収穫期が重なります。'],
      ['5~6월', 'May–June', '5〜6月', '푸른 산과 온화한 날씨에 카즈베기 당일 투어를 하기 좋습니다.', 'Green mountains and mild weather for a day trip to Kazbegi.', '緑の山と穏やかな気候で、カズベギへの日帰りに最適です。'],
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
      ['10~4월', 'October–April', '10〜4月', '선선해 피라미드와 유적을 둘러보기 가장 좋습니다.', 'Cool enough to explore the pyramids and ancient sites.', '涼しく、ピラミッドや遺跡を巡るのに最適です。'],
    ],
    x: ['한여름은 매우 덥고, 3~5월에는 모래바람(캄신)이 불 수 있습니다. 라마단 기간에는 낮 영업시간이 짧아질 수 있습니다.', 'Midsummer is very hot, the khamsin can blow March–May, and daytime hours may shorten during Ramadan.', '真夏は非常に暑く、3〜5月は砂嵐（ハムシーン）が吹くことがあり、ラマダン中は日中の営業時間が短くなることがあります。'],
  },
};
