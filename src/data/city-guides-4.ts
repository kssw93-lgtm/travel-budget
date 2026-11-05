/** 도시 가이드 초안 4 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_4: Record<string, Compact> = {
  sokcho: {
    h: [
      ['설악산 국립공원', 'Seoraksan National Park', '雪岳山国立公園', '케이블카로 권금성에 오르거나 흔들바위까지 걸어갈 수 있습니다.', 'Ride the cable car to Gwongeumseong or hike to the Rocking Rock.', 'ロープウェイで権金城に登ったり、揺れ岩まで歩いたりできます。'],
      ['속초 관광수산시장', 'Sokcho Tourist & Fishery Market', '束草観光水産市場', '닭강정과 오징어순대 등 속초 먹거리가 모인 시장입니다.', 'The market for Sokcho staples like dakgangjeong and squid sundae.', 'タッカンジョンやイカスンデなど束草グルメが集まる市場です。'],
      ['아바이마을 갯배', 'Abai Village and Gaetbae ferry', 'アバイ村とケッペ', '줄을 당겨 건너는 작은 배로 실향민 마을 아바이마을에 갑니다.', 'Pull yourself across on the rope ferry to Abai Village, settled by North Korean refugees.', 'ロープを引いて渡る小舟で、失郷民の村アバイ村へ行きます。'],
      ['영금정', 'Yeonggeumjeong', '霊琴亭', '속초 등대 아래 바닷가 바위 위 정자로, 해돋이 명소입니다. 파도 소리가 거문고 소리 같다는 데서 이름이 왔습니다.', 'A pavilion on the rocks below Sokcho Lighthouse, a sunrise spot named for waves that sound like a zither.', '束草灯台の下、海辺の岩場に立つあずまやで、日の出の名所です。波音が琴のようだという由来の名です。'],
      ['청초호', 'Cheongchoho Lake', '青草湖', '시내 가운데 있는 석호로, 호숫가 산책로와 엑스포 타워가 있습니다.', 'A lagoon in the middle of town with a lakeside path and the Expo Tower.', '市街の中心にある潟湖で、湖畔の遊歩道とエキスポタワーがあります。'],
    ],
    t: [
      ['설악산 케이블카는 사전 예약 없이 당일 현장에서만 표를 팝니다. 주말에는 대기가 생길 수 있으니 운행시간을 확인하고 여유 있게 방문하세요.', 'Seorak Cable Car sells tickets on site only, with no advance reservations. Weekend waits are possible, so check operating hours and allow extra time.', '雪岳山ケーブルカーのチケットは予約できず、当日の現地販売のみです。週末は待ち時間が生じることがあるため、運行時間を確認して余裕を持って訪れましょう。'],
      ['영랑호와 청초호 주변 산책로를 걸어보세요. 청초호는 밤에 조명이 켜진 풍경도 볼 수 있습니다.', 'Walk the paths around Yeongnangho and Cheongchoho lakes. Cheongchoho is also lit up at night.', '永郎湖と青草湖の周辺を散策してみましょう。青草湖では夜のライトアップも楽しめます。'],
      ['가는 법: 속초에는 철도가 없어 서울 고속버스터미널이나 동서울터미널에서 고속버스를 타면 2시간 반 안팎입니다.', 'Getting there: Sokcho has no railway, so take an express bus from Seoul Express Bus Terminal or Dong Seoul Terminal — about 2.5 hours.', '行き方：束草には鉄道がないため、ソウル高速バスターミナルか東ソウルターミナルから高速バスで2時間半ほどです。'],
      ['양양공항에 도착하면 공식 안내에서 현재 운행 중인 버스와 셔틀을 먼저 확인하세요. 인천·김포공항을 이용한다면 서울 시내 장거리버스터미널에서 속초행 버스를 타고, 속초터미널에서 숙소까지 시내 교통으로 이동하는 방법이 있습니다.', 'If arriving at Yangyang Airport, first check the airport’s current bus and shuttle status. From Incheon or Gimpo, take a Sokcho-bound coach from a Seoul intercity terminal, then use local transport from Sokcho Terminal to your accommodation.', '襄陽空港に到着した場合は、空港の公式案内で運行中のバス・シャトルを確認してください。仁川・金浦空港からはソウル市内の長距離バスターミナルから束草行きバスに乗り、束草ターミナルから宿泊先へ市内交通で移動できます。'],
    ],
  },
  sydney: {
    h: [
      ['오페라 하우스·하버 브리지', 'Opera House and Harbour Bridge', 'オペラハウスとハーバーブリッジ', '항구를 사이에 둔 시드니의 상징. 서큘러 키에서 둘 다 잘 보입니다.', "Sydney's twin icons across the harbour, both visible from Circular Quay.", '港を挟んだシドニーのシンボル。サーキュラー・キーから両方見えます。'],
      ['본다이~쿠지 해안 산책로', 'Bondi to Coogee coastal walk', 'ボンダイ〜クージー海岸遊歩道', '절벽과 해변을 따라 걷는 인기 해안길입니다.', 'A popular clifftop walk linking beaches.', '断崖とビーチ沿いを歩く人気の海岸の道です。'],
      ['맨리 페리', 'Manly Ferry', 'マンリー・フェリー', '시내에서 맨리 해변까지 항구를 가로지르는 페리. 오페라 하우스를 바다에서 볼 수 있습니다.', 'The ferry across the harbour to Manly, with great Opera House views.', '市内からマンリー・ビーチまで港を渡るフェリー。海からオペラハウスが見えます。'],
      ['타롱가 동물원', 'Taronga Zoo', 'タロンガ動物園', '페리를 타고 가는 항구 언덕의 동물원으로, 코알라·캥거루 등 호주 동물과 시내 전망을 함께 봅니다.', 'A harbourside zoo reached by ferry, with koalas, kangaroos and city views.', 'フェリーで行く港の丘の動物園で、コアラやカンガルーなどオーストラリアの動物と市内の眺めを楽しめます。'],
      ['블루마운틴 국립공원', 'Blue Mountains National Park', 'ブルーマウンテンズ国立公園', '기차로 당일 다녀올 수 있는 유네스코 세계유산 산악 지대로, 세 자매 봉이 유명합니다.', 'A UNESCO-listed mountain area within a day trip by train, famous for the Three Sisters.', '電車で日帰りできる世界遺産の山岳地帯で、スリー・シスターズが有名です。'],
    ],
    t: [
      ['교통은 비접촉 카드나 휴대폰으로 찍고 타면 되고, 일요일에는 하루 요금 상한이 낮아집니다.', 'Tap a contactless card or phone to ride; daily fare caps are lower on Sundays.', 'タッチ決済で乗車でき、日曜は1日の上限運賃が低くなります。'],
      ['자외선이 매우 강하니 흐린 날에도 선크림을 바르고, 해변에서는 깃발 사이에서만 수영하세요.', 'UV is fierce; use sunscreen even when cloudy and swim between the flags.', '紫外線が強いので曇りでも日焼け止めを。ビーチでは旗の間で泳ぎましょう。'],
      ['공항에서 시내: 시드니 공항 국제선·국내선 터미널 역에서 공항 철도(T8선)를 타면 센트럴역까지 15분 안팎입니다.', 'Airport to city: Airport Link trains (T8 line) from the international and domestic terminal stations reach Central in about 15 minutes.', '空港から市内へ：シドニー空港の国際線・国内線ターミナル駅からエアポート・リンク(T8線)でセントラル駅まで15分ほどです。'],
    ],
  },
  taichung: {
    h: [
      ['펑자 야시장', 'Fengjia Night Market', '逢甲夜市', '대만에서 손꼽히게 큰 야시장. 새로운 길거리 음식이 많이 나오는 곳입니다.', 'One of Taiwan’s biggest night markets, known for new street-food trends.', '台湾有数の大きな夜市。新しい屋台グルメが生まれる場所です。'],
      ['무지개 마을', 'Rainbow Village', '彩虹眷村', '벽과 바닥이 알록달록한 그림으로 덮인 작은 마을입니다.', 'A small village covered in colourful painted murals.', '壁や地面がカラフルな絵で覆われた小さな村です。'],
      ['궁원안과', 'Miyahara', '宮原眼科', '옛 안과 건물을 개조한 디저트·펑리수 가게입니다.', 'A former eye clinic turned into a dessert and pineapple-cake shop.', '旧眼科の建物を改装したスイーツとパイナップルケーキの店です。'],
      ['국립 타이중 극장', 'National Taichung Theater', '台中国家歌劇院', '이토 도요가 설계한 곡면 건축으로 유명한 공연장으로, 공연이 없어도 건물과 옥상 정원을 둘러볼 수 있습니다.', 'Toyo Ito\'s curving opera house; the building and rooftop garden are open even without a show.', '伊東豊雄設計の曲面建築で知られる劇場で、公演がなくても館内と屋上庭園を見学できます。'],
      ['국립 자연과학박물관', 'National Museum of Natural Science', '国立自然科学博物館', '공룡 전시와 열대 식물원 온실이 있는 대형 과학박물관입니다.', 'A large science museum with dinosaur halls and a tropical rainforest greenhouse.', '恐竜展示や熱帯植物園の温室がある大型の科学博物館です。'],
    ],
    t: [
      ['일월담·가오메이 습지 등 근교 명소는 버스로 하루 일정에 다녀오기 좋습니다.', 'Sun Moon Lake and Gaomei Wetlands make good day trips by bus.', '日月潭や高美湿地など近郊の名所はバスで日帰りできます。'],
      ['버블티가 시작된 도시로 알려져 있어 원조 찻집을 찾아가 보는 여행자가 많습니다.', 'Said to be the birthplace of bubble tea; many visitors seek out the original tea house.', 'タピオカミルクティー発祥の地とされ、元祖の店を訪れる旅行者が多いです。'],
      ['도시 간 이동: 고속철(HSR) 타이중역은 시내에서 떨어진 우르에 있어, 시내까지 일반철도(TRA)나 버스로 갈아탑니다. 타이베이까지 고속철로 1시간 안팎입니다.', 'Between cities: the HSR Taichung station is in Wuri, outside the centre, so change to a TRA train or bus; Taipei is about an hour by HSR.', '都市間の移動：高鉄台中駅は市街から離れた烏日にあるため、在来線(台鉄)やバスに乗り換えて市内へ向かいます。台北まで高鉄で約1時間です。'],
      ['타이중공항에서는 555번 급행버스로 시내와 환승 거점에 갈 수 있어요. 목적지에 맞는 정류장을 노선 안내에서 확인하세요.', 'Route 555 connects Taichung Airport with downtown and major transfer points. Check the route guide for the stop that best matches your destination.', '台中国際空港からは555番快速バスで市街地や主要な乗り換え地点へ行けます。目的地に合う停留所を路線案内で確認しましょう。'],
    ],
  },
  tashkent: {
    h: [
      ['초르수 바자르', 'Chorsu Bazaar', 'チョルスー・バザール', '파란 돔 아래 향신료·건과일·빵이 모인 큰 전통 시장입니다.', 'A huge traditional market under a blue dome, full of spices, dried fruit and bread.', '青いドームの下にスパイスやドライフルーツ、パンが並ぶ大きな市場です。'],
      ['타슈켄트 지하철역', 'Tashkent Metro stations', 'タシケント地下鉄の駅', '역마다 장식이 달라 박물관 같다는 평을 듣는 지하철입니다.', 'Each station is uniquely decorated, often called an underground museum.', '駅ごとに装飾が異なり、地下の美術館とも呼ばれます。'],
      ['하즈라티 이맘 단지', 'Hazrati Imam Complex', 'ハズラティ・イマーム', '모스크와 마드라사가 모인 이슬람 종교 단지입니다.', 'A religious complex of mosques and madrasas.', 'モスクとマドラサが集まるイスラムの宗教施設群です。'],
      ['티무르 왕조 역사박물관', 'State Museum of the Temurids History', 'ティムール朝歴史博物館', '아미르 티무르와 티무르 왕조 시기의 우즈베키스탄 역사·유물을 소개하는 타슈켄트 중심부 박물관입니다.', 'A central Tashkent museum on Amir Timur and Uzbekistan during the Timurid dynasty.', 'アミール・ティムールとティムール朝時代のウズベキスタンの歴史・遺物を紹介するタシケント中心部の博物館です。'],
    ],
    t: [
      ['타슈켄트에서 사마르칸트·부하라로 가는 아프로시욥 고속열차는 성수기에 표를 미리 예매하세요.', 'Book Afrosiyob high-speed train tickets from Tashkent to Samarkand and Bukhara in advance, especially in peak season.', 'タシュケントからサマルカンド・ブハラへ向かう高速列車アフラシアブの切符は、繁忙期には早めに予約しましょう。'],
      ['모스크에 들어갈 때는 어깨와 무릎을 가리고, 여성은 머리를 가릴 스카프를 챙기면 좋습니다.', 'Cover shoulders and knees at mosques; women may want a headscarf.', 'モスクでは肩と膝を隠し、女性はスカーフがあると安心です。'],
      ['국제선 공항은 76번 시내버스 종점이며, 국내선 공항은 77번 노선이 연결됩니다. 노선표에서 숙소와 가까운 정류장을 확인하고 도착 터미널에 맞는 버스를 타세요.', 'City bus 76 serves the international airport and bus 77 serves the domestic airport. Check the route map for a stop near your accommodation and use the bus for your arrival terminal.', '国際線空港には市内バス76番、国内線空港には77番が乗り入れます。路線図で宿泊先に近い停留所を確認し、到着ターミナルに合うバスを利用してください。'],
    ],
  },
  tbilisi: {
    h: [
      ['나리칼라 요새', 'Narikala Fortress', 'ナリカラ要塞', '케이블카로 올라 구시가지와 쿠라강을 내려다보는 옛 요새입니다.', 'Ride the cable car up to the old fortress overlooking the Old Town and Kura River.', 'ロープウェイで上り、旧市街とクラ川を見下ろす古い要塞です。'],
      ['아바노투바니 유황온천', 'Abanotubani sulphur baths', 'アバノトゥバニ硫黄温泉', '벽돌 돔 지붕 아래 개인실을 빌리는 유황 온천 거리입니다.', 'Brick-domed sulphur bathhouses with private rooms to rent.', 'レンガのドーム屋根の下で個室を借りる硫黄温泉街です。'],
      ['므타츠민다 언덕', 'Mtatsminda Park', 'ムタツミンダ公園', '푸니쿨라로 오르는 언덕 공원. 시내 야경이 보입니다.', 'A hilltop park reached by funicular with city views at night.', 'ケーブルカーで登る丘の公園。市内の夜景が見えます。'],
      ['조지아 국립박물관', 'Georgian National Museum', 'ジョージア国立博物館', '루스타벨리 거리에 있는 박물관으로, 고대 황금 유물을 모은 보물관이 유명합니다.', 'On Rustaveli Avenue, best known for its treasury of ancient gold.', 'ルスタヴェリ通りにある博物館で、古代の黄金細工を集めた宝物館が有名です。'],
      ['므츠헤타', 'Mtskheta', 'ムツヘタ', '조지아의 옛 수도로, 즈바리 수도원과 스베티츠호벨리 대성당이 유네스코 세계유산입니다. 트빌리시에서 차로 약 30분입니다.', 'Georgia\'s ancient capital, whose Jvari Monastery and Svetitskhoveli Cathedral are UNESCO-listed; about 30 minutes away.', 'ジョージアの古都で、ジュヴァリ修道院とスヴェティツホヴェリ大聖堂は世界遺産。トビリシから車で約30分。'],
    ],
    t: [
      ['시내 대중교통은 교통카드나 비접촉 카드로 90분 안에 갈아타기가 자유롭습니다.', 'A transit or contactless card covers unlimited transfers within 90 minutes.', '市内交通は交通カードやタッチ決済で、90分以内なら乗り換え自由です。'],
      ['조지아는 와인의 발상지로 꼽혀, 항아리(크베브리) 숙성 와인을 맛볼 수 있는 와인바가 많습니다.', 'Georgia is called the cradle of wine; many bars pour qvevri-aged wine.', 'ジョージアはワイン発祥の地とされ、クヴェヴリ（甕）熟成ワインを出すバーが多いです。'],
      ['트빌리시공항 도착홀 앞 정류장에서 337번 버스를 타면 시내 중심부로 갈 수 있어요. 출발 전에 운행 시간과 결제 수단을 확인하세요.', 'Bus 337 departs from the stop in front of Tbilisi Airport’s arrivals hall and runs to the city center. Check operating hours and payment options before setting out.', 'トビリシ空港の到着ホール前の停留所から337番バスで市内中心部へ行けます。出発前に運行時間と支払い方法を確認しましょう。'],
    ],
  },
  tongyeong: {
    h: [
      ['동피랑 벽화마을', 'Dongpirang Mural Village', '東ピラン壁画村', '언덕 골목이 벽화로 꾸며진 마을. 위에서 강구안 항구가 보입니다.', 'A hillside village of murals overlooking Gangguan harbour.', '坂道の路地が壁画で彩られた村。上から港が見えます。'],
      ['통영 케이블카와 미륵산', 'Tongyeong cable car and Mireuksan', '統営ケーブルカーと弥勒山', '케이블카로 올라 한려수도의 섬들을 내려다봅니다.', 'Ride up to view the islands of Hallyeosudo.', 'ケーブルカーで上り、閑麗水道の島々を見下ろします。'],
      ['중앙시장', 'Jungang Market', '中央市場', '강구안 항구 앞 시장으로 활어·건어물을 둘러볼 수 있습니다. 인근에서 충무김밥과 꿀빵도 찾아보세요.', 'Browse fresh and dried fish at this market by Gangguan Port, then look for chungmu gimbap and honey bread nearby.', '江口岸港の前にある市場で鮮魚や干物を見て回れます。近くで忠武キンパやクルパンも探してみましょう。'],
      ['한산도 제승당', 'Jeseungdang, Hansando', '閑山島・制勝堂', '이순신 장군이 삼도수군통제영을 두었던 곳으로, 통영항에서 배로 약 30분입니다.', 'Admiral Yi Sun-sin\'s naval headquarters, about 30 minutes by ferry from Tongyeong harbour.', '李舜臣将軍が水軍の本営を置いた場所で、統営港から船で約30分です。'],
      ['세병관', 'Sebyeonggwan', '洗兵館', '조선 시대 삼도수군통제영의 객사 건물로, 시내 중심에 있는 큰 목조 건물입니다.', 'The great wooden hall of the Joseon-era naval command, right in the town centre.', '朝鮮時代の三道水軍統制営の客舎で、市の中心にある大きな木造建築です。'],
    ],
    t: [
      ['소매물도·욕지도 등 섬 배편은 기상에 따라 변경·결항될 수 있으니 출발 전 선사에 운항 여부를 확인하세요.', 'Ferries to islands such as Somaemuldo and Yokjido may change or be cancelled because of weather; confirm the sailing with the operator before departure.', '小毎勿島や欲知島などへの船は天候により変更・欠航する場合があります。出発前に運航会社へ確認してください。'],
      ['통영은 굴 산지입니다. 겨울에 제철 굴 요리를 맛보세요.', 'Tongyeong is an oyster-producing area. Try seasonal oyster dishes in winter.', '統営はカキの産地です。冬には旬のカキ料理を味わってみましょう。'],
      ['가는 법: 통영에는 철도가 없어 서울 고속버스터미널이나 남부터미널에서 버스를 타면 4시간 안팎입니다. 부산에서도 버스가 자주 다닙니다.', 'Getting there: Tongyeong has no railway, so take a bus from Seoul Express Bus Terminal or Nambu Terminal — about four hours; buses from Busan are frequent too.', '行き方：統営には鉄道がないため、ソウル高速バスターミナルか南部ターミナルからバスで4時間ほどです。釜山からもバスが頻繁に出ています。'],
      ['김해공항에서 통영·고성 방면 시외버스를 이용할 수 있습니다. 통영종합버스터미널에 도착한 뒤 숙소까지는 시내버스나 택시로 이동하세요.', 'Intercity buses from Gimhae Airport serve Tongyeong and Goseong. From Tongyeong Bus Terminal, continue to your accommodation by local bus or taxi.', '金海空港から統営・固城方面への市外バスを利用できます。統営総合バスターミナルから宿泊先までは、市内バスかタクシーで移動しましょう。'],
    ],
  },
  ulaanbaatar: {
    h: [
      ['칭기즈칸 광장(수흐바타르 광장)', 'Sükhbaatar Square', 'スフバートル広場', '국회의사당 앞 칭기즈칸 좌상이 있는 도시의 중심 광장입니다.', 'The central square with Chinggis Khaan’s statue before Government House.', '政府宮殿前にチンギス・ハーン像がある街の中心の広場です。'],
      ['간단 사원', 'Gandan Monastery', 'ガンダン寺', '거대한 관음보살상이 있는 몽골 불교의 중심 사원입니다.', 'The centre of Mongolian Buddhism with a towering Avalokiteshvara statue.', '巨大な観音像があるモンゴル仏教の中心寺院です。'],
      ['테를지 국립공원', 'Gorkhi-Terelj National Park', 'テレルジ国立公園', '시내에서 가까운 초원·바위산 지역. 게르 숙박과 승마를 체험할 수 있습니다.', 'Steppe and rock formations near the city, with ger stays and horse riding.', '市内から近い草原と岩山の地域。ゲル宿泊や乗馬が体験できます。'],
    ],
    t: [
      ['시내 교통 체증이 심해 출퇴근 시간에는 이동 시간을 넉넉히 잡으세요.', 'Traffic is heavy; allow extra time at rush hour.', '渋滞がひどいので、通勤時間帯は移動時間に余裕を。'],
      ['겨울은 매우 춥고 6~8월은 초원 여행을 즐기기 좋은 시기입니다. 계절별 날씨를 확인해 방한 준비를 하세요.', 'Winters are very cold, while June to August is a good period for grassland travel. Check seasonal weather and pack suitable warm clothing.', '冬は非常に寒く、6～8月は草原の旅を楽しみやすい時期です。季節ごとの天候を確認し、防寒の準備をしましょう。'],
    ],
  },
  vancouver: {
    h: [
      ['스탠리 파크', 'Stanley Park', 'スタンレー・パーク', '바다를 끼고 도는 방파제 산책로(시월)를 자전거로 한 바퀴 돌기 좋습니다.', 'Cycle or walk the Seawall that loops the park along the water.', '海沿いの遊歩道シーウォールを自転車で一周するのがおすすめです。'],
      ['그랜빌 아일랜드', 'Granville Island', 'グランビル・アイランド', '퍼블릭 마켓과 공방이 모인 섬. 작은 아쿠아버스로 건너갈 수 있습니다.', 'A public market and artisan studios, reached by tiny Aquabus ferries.', 'パブリックマーケットと工房が集まる島。小さなフェリーで渡れます。'],
      ['캐필라노 서스펜션 브리지', 'Capilano Suspension Bridge', 'キャピラノ吊り橋', '깊은 협곡 위에 걸린 흔들다리와 숲속 산책로입니다.', 'A swaying bridge over a deep canyon, with forest walkways.', '深い渓谷にかかる吊り橋と森の遊歩道です。'],
      ['개스타운', 'Gastown', 'ガスタウン', '벽돌 건물과 증기 시계가 있는 밴쿠버의 옛 거리로, 카페와 상점이 모여 있습니다.', 'Vancouver’s oldest quarter of brick buildings, cafés and the famous steam clock.', 'レンガの建物と蒸気時計があるバンクーバーの旧市街で、カフェや店が集まります。'],
      ['그라우스 마운틴', 'Grouse Mountain', 'グラウス・マウンテン', '케이블카로 오르는 산으로, 시내 전망과 함께 겨울에는 스키, 여름에는 하이킹을 즐깁니다.', 'A gondola-access peak with city views — skiing in winter, hiking in summer.', 'ロープウェイで上る山で、市内の眺めとともに冬はスキー、夏はハイキングが楽しめます。'],
    ],
    t: [
      ['밴쿠버 식당에서는 식사에 GST가 적용되고, 주류에는 별도 주세도 붙습니다. 팁은 보통 계산서와 별도로 정하므로 최종 금액을 확인하세요.', 'Restaurant meals in Vancouver are subject to GST, and alcohol also carries a separate provincial tax. Tips are usually decided separately, so check the final bill.', 'バンクーバーの飲食店では食事にGSTがかかり、酒類には州税も加わります。チップは通常別途決めるため、最終的な請求額を確認しましょう。'],
      ['비가 잦은 도시라 가을·겨울에는 방수 겉옷을 챙기세요.', 'It rains often, especially autumn and winter; bring a waterproof jacket.', '雨が多い街なので、秋冬は防水の上着を持参しましょう。'],
      ['공항에서 시내: 밴쿠버 공항에서 스카이트레인 캐나다 라인을 타면 다운타운 워터프런트역까지 약 25분입니다.', 'Airport to city: the SkyTrain Canada Line runs from YVR to Waterfront Station downtown in about 25 minutes.', '空港から市内へ：バンクーバー空港からスカイトレインのカナダ・ラインでダウンタウンのウォーターフロント駅まで約25分です。'],
    ],
  },
  venice: {
    h: [
      ['산마르코 광장·대성당', "St Mark's Square and Basilica", 'サン・マルコ広場・大聖堂', '황금 모자이크로 덮인 대성당과 두칼레 궁전이 있는 중심 광장입니다.', 'The main square with the gold-mosaic basilica and the Doge’s Palace.', '黄金のモザイクの大聖堂とドゥカーレ宮殿がある中心広場です。'],
      ['리알토 다리', 'Rialto Bridge', 'リアルト橋', '대운하를 건너는 가장 오래된 돌다리. 아침에는 옆 시장이 활기찹니다.', 'The oldest stone bridge over the Grand Canal, beside a lively morning market.', '大運河にかかる最古の石橋。朝は隣の市場がにぎわいます。'],
      ['부라노 섬', 'Burano', 'ブラーノ島', '알록달록한 집들이 늘어선 섬. 수상버스로 갈 수 있습니다.', 'An island of brightly painted houses, reached by vaporetto.', 'カラフルな家が並ぶ島。水上バスで行けます。'],
      ['두칼레 궁전', 'Doge’s Palace', 'ドゥカーレ宮殿', '베네치아 공화국 통치자의 궁전으로, 감옥으로 이어지는 「탄식의 다리」를 건너 볼 수 있습니다.', 'The seat of the Venetian Republic’s rulers; cross the Bridge of Sighs to the old prisons.', 'ヴェネツィア共和国の統治者の宮殿で、牢獄へ続く「ため息の橋」を渡れます。'],
      ['페기 구겐하임 컬렉션', 'Peggy Guggenheim Collection', 'ペギー・グッゲンハイム・コレクション', '대운하 변 저택에 피카소·달리 등 20세기 현대 미술 작품이 모여 있습니다.', 'A Grand Canal palazzo of 20th-century art, from Picasso to Dalí.', '大運河沿いの邸宅にピカソやダリなど20世紀の美術作品が集まります。'],
    ],
    t: [
      ['성수기 특정 날짜에는 당일 방문객에게 입도세(Access Fee)를 받으니 공식 사이트에서 날짜를 확인하세요.', 'On set peak days, day-trippers pay an Access Fee; check the dates on the official site.', '繁忙期の指定日は日帰り客に入島料がかかるので、公式サイトで日付を確認しましょう。'],
      ['수상버스(바포레토)는 1회권보다 1일권이 유리한 경우가 많고, 탑승 전에 꼭 찍어야 합니다.', 'Vaporetto day passes often beat single tickets; validate before boarding.', '水上バスは1回券より1日券がお得なことが多く、乗る前に必ずタッチを。'],
      ['공항에서 시내: 마르코 폴로 공항에서는 버스로 피아찰레 로마까지 가거나, 알릴라구나 수상버스로 바다를 건너 본섬에 들어갑니다.', 'Airport to city: take a bus from Marco Polo Airport to Piazzale Roma, or an Alilaguna water bus across the lagoon to the historic centre.', '空港から市内へ：マルコ・ポーロ空港からバスでローマ広場へ行くか、アリラグーナの水上バスで潟を渡って本島へ入ります。'],
      ['도시 간 이동: 본섬의 산타루치아역에서 고속열차를 타면 피렌체 2시간 안팎, 로마 4시간 안팎입니다. 메스트레역(본토)과 헷갈리지 마세요.', 'Between cities: high-speed trains from Santa Lucia on the island reach Florence in about two hours and Rome in about four; don\'t confuse it with Mestre on the mainland.', '都市間の移動：本島のサンタ・ルチア駅から高速列車でフィレンツェまで約2時間、ローマまで約4時間です。本土のメストレ駅と間違えないように。'],
    ],
  },
  vienna: {
    h: [
      ['쇤브룬 궁전', 'Schönbrunn Palace', 'シェーンブルン宮殿', '합스부르크 왕가의 여름 궁전과 넓은 정원입니다.', 'The Habsburgs’ summer palace and vast gardens.', 'ハプスブルク家の夏の離宮と広大な庭園です。'],
      ['슈테판 대성당', "St Stephen's Cathedral", 'シュテファン大聖堂', '모자이크 지붕이 인상적인 빈 구시가지의 중심입니다.', 'The heart of the Old Town, with its striking tiled roof.', 'モザイク屋根が印象的な旧市街の中心です。'],
      ['벨베데레 궁전', 'Belvedere', 'ベルヴェデーレ宮殿', '클림트의 「키스」를 볼 수 있는 궁전 미술관입니다.', "A palace gallery home to Klimt's The Kiss.", 'クリムト「接吻」が見られる宮殿の美術館です。'],
      ['빈 국립오페라극장', 'Vienna State Opera', 'ウィーン国立歌劇場', '세계적인 오페라극장으로, 공연이 없는 시간에는 극장 안내 투어로 내부를 볼 수 있습니다.', 'One of the world’s great opera houses; guided tours show the interior when there is no performance.', '世界有数のオペラハウスで、公演のない時間はガイドツアーで内部を見学できます。'],
      ['알베르티나 미술관', 'Albertina', 'アルベルティーナ美術館', '합스부르크 궁전 건물의 미술관으로, 모네부터 피카소까지 근현대 명작을 볼 수 있습니다.', 'A Habsburg-palace museum with modern masterpieces from Monet to Picasso.', 'ハプスブルク家の宮殿にある美術館で、モネからピカソまで近現代の名作が見られます。'],
    ],
    t: [
      ['전통 카페(카페하우스)에서는 커피 한 잔으로 오래 앉아 있어도 괜찮은 문화입니다.', 'In traditional coffee houses it is fine to linger for hours over one coffee.', '伝統的なカフェハウスでは、コーヒー1杯で長居しても問題ない文化です。'],
      ['국립오페라극장의 입석표는 공연 당일 저렴하게 팔아 여행자에게 인기가 많습니다.', 'Standing-room tickets at the State Opera are sold cheaply on the day and are popular with travellers.', '国立歌劇場の立見席は当日に安く売られ、旅行者に人気です。'],
      ['공항에서 시내: 빈 공항에서 시티 에어포트 트레인(CAT)을 타면 빈 미테역까지 약 16분이고, S반 S7이나 철도(레일젯)로도 갈 수 있습니다.', 'Airport to city: the City Airport Train (CAT) reaches Wien Mitte in about 16 minutes; the S7 S-Bahn and Railjet trains are alternatives.', '空港から市内へ：ウィーン空港からシティ・エアポート・トレイン(CAT)でウィーン・ミッテ駅まで約16分です。SバーンS7やレイルジェットでも行けます。'],
    ],
  },
  zhangjiajie: {
    h: [
      ['무릉원 국가삼림공원', 'Zhangjiajie National Forest Park', '張家界国家森林公園', '영화 「아바타」의 배경으로 알려진 기둥 모양 바위산이 모인 곳입니다.', 'Towering sandstone pillars known as the inspiration for Avatar.', '映画「アバター」のモデルとされる柱状の岩山が集まる場所です。'],
      ['톈먼산', 'Tianmen Mountain', '天門山', '긴 케이블카와 절벽 잔도, 거대한 하늘의 문(천문동)이 있는 산입니다.', 'A mountain with a very long cable car, cliff walkways and the great arch of Heaven’s Gate.', '長いロープウェイと断崖の桟道、巨大な天門洞がある山です。'],
      ['바이룽 엘리베이터', 'Bailong Elevator', '百龍エレベーター', '절벽에 붙여 지은 야외 엘리베이터로 숲 공원 위로 올라갑니다.', 'An outdoor elevator on the cliff face up into the forest park.', '崖に取り付けた屋外エレベーターで森林公園の上へ上がります。'],
      ['황룡동', 'Huanglong Cave Scenic Area', '黄龍洞景区', '자연 돔과 종유석·석순이 이어지는 석회암 동굴을 도보와 유람선으로 둘러봅니다.', 'Explore a karst cave of natural domes, stalactites and stalagmites on foot and by sightseeing boat.', '自然のドームや鍾乳石・石筍が広がる鍾乳洞を、遊歩道や遊覧船で巡ります。'],
      ['보봉호', 'Baofeng Lake Scenic Area', '宝峰湖景区', '산과 절벽, 폭포에 둘러싸인 호수에서 유람선을 타며 풍경을 감상합니다.', 'Take a boat across a lake framed by mountains, cliffs and waterfalls.', '山や断崖、滝に囲まれた湖を遊覧船で巡り、景色を楽しめます。'],
    ],
    t: [
      ['산 정상부는 안개가 자주 끼어, 전망이 좋은 날을 고르려면 일정에 여유를 두세요.', 'The peaks are often misty; leave slack in your plans for a clear day.', '山頂部は霧が多いので、眺めのいい日を選べるよう日程に余裕を。'],
      ['공원 입장권은 며칠간 쓸 수 있는 경우가 많아 공원 안 셔틀버스로 여러 구역을 나눠 볼 수 있습니다.', 'Park tickets are often valid for several days, so you can split areas using the park shuttles.', '入園券は数日間有効なことが多く、園内シャトルで複数エリアを分けて回れます。'],
      ['장가계 허화공항에서 시내 인민광장 방면으로는 공항신청 버스정류장에서 4번 버스를 타는 경로가 공식 안내에 소개되어 있어요. 현재 운행 여부를 출발 전에 확인하세요.', 'An official guide describes taking bus 4 from the Airport New Town stop at Zhangjiajie Hehua Airport toward People\'s Square. Confirm that the route is operating before you travel.', '張家界荷花空港から市内の人民広場方面へは、空港新城バス停から4番バスに乗る経路が公式案内に掲載されています。出発前に運行状況を確認しましょう。'],
    ],
  },
};

/** 볼거리·팁 보강(기존 항목 뒤에 이어 붙인다) */
export const NOTES_EXTRA: Record<string, Compact> = {
  boracay: {
    h: [
      ['디니위드 비치', 'Diniwid Beach', 'ディニウィッド・ビーチ', '화이트 비치 스테이션 1 너머의 작은 해변으로, 한적하게 바다를 바라보기 좋습니다.', 'A small, quieter beach beyond White Beach Station 1 where you can relax by the sea.', 'ホワイトビーチのステーション1の先にある小さなビーチで、静かに海を眺められます。'],
      ['윌리스 록', 'Willy’s Rock', 'ウィリーズ・ロック', '화이트 비치 스테이션 1 앞바다의 바위 지형으로, 위쪽 작은 예배당과 성모상이 알려져 있습니다.', 'A rock formation in the water near White Beach Station 1, known for its small chapel and statue of the Virgin Mary.', 'ホワイトビーチのステーション1近くの海にある岩で、小さな礼拝堂と聖母像で知られています。'],
    ],
    t: [['화이트 비치는 스테이션 1·2·3으로 나뉩니다. 스테이션 2에 식당과 상점이 집중되고, 3은 비교적 한적합니다.', 'White Beach is divided into Stations 1, 2 and 3. Restaurants and shops cluster around Station 2, while Station 3 is relatively quieter.', 'ホワイトビーチはステーション1・2・3に分かれます。飲食店や店はステーション2に集まり、3は比較的静かです。'], ['카티클란공항에서는 버스·밴으로 제티 포트에 간 뒤 페리를 타고 보라카이섬에 들어갑니다. 도착 항구에서 숙소까지는 섬 안 교통이나 숙소 픽업을 이용하세요. 칼리보공항에 도착하면 먼저 버스·밴으로 제티 포트까지 이동해야 합니다.', 'From Caticlan Airport, take a bus or van to the jetty port, then a ferry to Boracay. Continue from the island port by local transport or your accommodation’s pickup. From Kalibo Airport, first travel to the jetty port by bus or van.', 'カティクラン空港からはバス・バンでジェティ港へ行き、フェリーでボラカイ島へ渡ります。島の港から宿泊先までは島内交通か宿の送迎を利用してください。カリボ空港に到着した場合は、まずバス・バンでジェティ港へ向かいます。']],
  },
  brussels: {
    h: [
      ['오줌싸개 동상', 'Manneken Pis', '小便小僧', '그랑플라스 근처의 작은 청동상입니다. 특별한 날이나 행사에 맞춰 다양한 의상을 입습니다.', 'Manneken-Pis is a small bronze statue near Grand-Place. It wears different costumes for special dates and events.', '小便小僧はグランプラス近くにある小さな銅像です。記念日や行事に合わせてさまざまな衣装を着ます。'],
      ['그랑플라스', 'Grand-Place', 'グランプラス', '시청과 17세기 길드 하우스가 둘러싼 브뤼셀의 중심 광장으로, 1998년부터 유네스코 세계유산입니다. 행사 때는 통제 구역과 운영 시간을 확인하세요.', 'Brussels’ central square, framed by the Town Hall and 17th-century guild houses; a UNESCO World Heritage Site since 1998. Check access arrangements during events.', '市庁舎と17世紀のギルドハウスに囲まれたブリュッセル中心部の広場で、1998年から世界遺産です。催しの際は立入規制や開催時間を確認してください。'],
      ['아토미움', 'Atomium', 'アトミウム', '1958년 브뤼셀 세계박람회를 위해 만든 철 결정 구조의 랜드마크입니다. 구 안을 연결하는 통로와 전시, 상부 구 전망을 둘러볼 수 있습니다.', 'A landmark built for the 1958 Brussels World’s Fair, representing an iron crystal structure. Explore its connected spheres, exhibitions and upper-level views.', '1958年のブリュッセル万国博覧会のために建てられた、鉄の結晶構造を表すランドマークです。球体をつなぐ通路や展示、上部からの眺望を楽しめます。'],
      ['생 위베르 왕립 갤러리', 'Royal Gallery of Saint Hubert', 'ギャルリー・サンチュベール', '1847년에 문을 연 유럽의 오래된 아케이드 중 하나로, 유리 지붕 아래 상점·카페·문화 공간이 이어집니다.', 'One of Europe’s older covered galleries, opened in 1847, with shops, cafés and cultural venues beneath its glass roof.', '1847年に開廊したヨーロッパ有数の古いアーケードで、ガラス屋根の下に店、カフェ、文化施設が並びます。'],
      ['마그리트 미술관', 'Magritte Museum', 'マグリット美術館', '르네 마그리트의 회화·드로잉·조각·사진 등을 전시하는 왕립미술관 산하 미술관입니다. 전시실 일부 운영 여부는 방문 전에 확인하세요.', 'Part of the Royal Museums of Fine Arts, this museum presents René Magritte’s paintings, drawings, sculptures and photographs. Check current gallery access before visiting.', '王立美術館群の一館で、ルネ・マグリットの絵画、素描、彫刻、写真などを展示します。一部展示室の公開状況は訪問前に確認してください。'],
    ],
    t: [['감자튀김(프리트)은 전문 가게에서 원뿔 종이에 담아 소스를 골라 먹는 것이 현지식입니다.', 'Fries are best from a friterie, served in a paper cone with your choice of sauce.', 'フリット（フライドポテト）は専門店で円錐の紙に入れ、ソースを選んで食べるのが地元流です。'], ['공항에서 숙소까지: 브뤼셀 공항에서 북역·중앙역·남역 방면 직행 열차와 공항 버스가 있습니다. 숙소가 있는 역·동네를 확인한 뒤 맞는 노선을 고르세요.', 'Airport to your stay: direct trains from Brussels Airport serve North, Central and South stations, and airport buses also run into the city. Choose based on the station or neighbourhood nearest your accommodation.', '空港から宿泊先へ：ブリュッセル空港から北駅・中央駅・南駅方面への直通列車があり、市内行き空港バスもあります。宿泊先に近い駅や地区を確認して選びましょう。']],
  },
  cancun: {
    h: [
      ['툴룸 유적', 'Tulum ruins', 'トゥルム遺跡', '카리브해 절벽 위에 남은 마야 유적. 칸쿤에서 하루 일정으로 다녀옵니다.', 'Maya ruins on a clifftop above the Caribbean, a day trip from Cancún.', 'カリブ海の断崖に残るマヤ遺跡。カンクンから日帰りで行けます。'],
      ['엘 메코 유적', 'El Meco Archaeological Zone', 'エル・メコ遺跡', '칸쿤 북쪽 푸에르토 후아레스 인근의 마야 항구 유적으로, 가장 높은 건물 엘 카스티요에서 주변 해안과 칸쿤섬을 볼 수 있습니다.', 'A Maya port site near Puerto Juárez north of Cancún; the tallest building, El Castillo, overlooks the nearby coast and Cancún Island.', 'カンクン北部のプエルト・フアレス近くにあるマヤの港湾遺跡です。最も高い建物エル・カスティージョから周辺の海岸やカンクン島を望めます。'],
      ['엘 레이 고고학 지대', 'El Rey Archaeological Zone', 'エル・レイ遺跡', '호텔존 킬로미터 18에 있는 마야 유적으로, 한때 카리브해 연안 교역망의 항구 거점이었습니다. 대중교통으로 갈 수 있고 관람로를 따라 작은 광장과 유구를 둘러볼 수 있습니다.', 'A Maya site at kilometre 18 of the Hotel Zone, once a port in the Caribbean coastal trade network. It is reachable by public transport, with remains arranged along a main path and small plazas.', 'ホテルゾーンのキロメートル18にあるマヤ遺跡で、かつてカリブ海沿岸の交易網における港でした。公共交通でアクセスでき、主な道や小広場に沿って遺構を見学できます。'],
    ],
    t: [['해변의 해조류(사르가숨) 상황은 계절마다 달라 출발 전에 공식 안내나 현지 소식을 확인하면 좋습니다.', 'Seaweed (sargassum) levels vary by season; check updates before you go.', '海藻（サルガッサム）の状況は季節で変わるので、出発前に確認しましょう。'], ['공항에서 숙소까지: 칸쿤 공항에서 ADO 직행버스를 타면 다운타운 버스터미널 또는 호텔존 북쪽 Punta Cancún 정류장으로 갈 수 있습니다. 호텔존 남쪽 숙소는 현지 버스나 호텔 교통편으로 이어서 이동해야 합니다.', 'Airport to your stay: ADO buses from Cancún Airport serve the downtown bus terminal and the Punta Cancún stop in the north Hotel Zone. For hotels farther south, continue by local bus or hotel transport.', '空港から宿泊先へ：カンクン空港からADOの直行バスでダウンタウンのバスターミナル、またはホテルゾーン北部のPunta Cancún停留所へ行けます。南側のホテルへは市内バスやホテル送迎に乗り継ぎます。']],
  },
  nice: {
    h: [
      ['마티스 미술관', 'Musée Matisse', 'マティス美術館', '시미에 언덕의 저택에 마티스 작품을 모은 미술관입니다.', 'Matisse’s works in a villa on Cimiez hill.', 'シミエの丘の邸宅にマティス作品を集めた美術館です。'],
      ['마세나 광장', 'Place Masséna', 'マセナ広場', '붉은 외벽과 흑백 바닥 포장, 태양 분수가 눈에 띄는 니스 중심 광장입니다. 구시가지·장 메드생 거리·영국인 산책로가 만나는 지점이라 도보 일정의 기준점으로 삼기 좋습니다.', 'Nice’s central square, recognizable by its red façades, black-and-white paving and Fountain of the Sun. It connects Old Nice, Avenue Jean Médecin and the Promenade des Anglais, making it a useful landmark for a walking itinerary.', '赤い外壁、白黒の舗装、太陽の噴水が目を引くニース中心の広場です。旧市街、ジャン・メドサン通り、プロムナード・デ・ザングレが交わり、徒歩観光の目印になります。'],
      ['샤토 언덕 공원', 'Castle Hill Park (Parc de la Colline du Château)', 'シャトーの丘公園', '언덕 위 산책로에서 천사의 만·구시가지·항구를 내려다볼 수 있고, 폭포와 그늘진 숲길이 있습니다. 계단이나 구시가지 골목으로 오를 수 있으며 폰셰트 거리 근처 무료 엘리베이터도 이용할 수 있습니다.', 'Walk the hilltop paths for views over the Baie des Anges, Old Town and port, with a waterfall and shaded woodland. You can climb by stairs or Old Town lanes, or use the free lift near Rue des Ponchettes.', '丘の散策路から天使の湾、旧市街、港を見渡せ、滝や木陰の道もあります。階段や旧市街の路地から上れるほか、ポンシェット通り近くの無料エレベーターも利用できます。'],
      ['라스카리스 궁전 박물관', 'Palais Lascaris', 'ラスカリス宮殿博物館', '구시가지의 17~18세기 바로크 궁전으로, 프레스코 장식 계단과 회화·태피스트리·가구·악기 컬렉션을 볼 수 있습니다. 2026년 정기 휴관일은 화요일이므로 방문일을 확인하세요.', 'A 17th- to 18th-century Baroque palace in Old Nice, with a frescoed staircase and collections of paintings, tapestries, furniture and instruments. Its regular closing day in 2026 is Tuesday, so check your date before visiting.', '旧市街にある17〜18世紀のバロック宮殿で、フレスコ画の階段や絵画、タペストリー、家具、楽器のコレクションを見学できます。2026年の定期休館日は火曜日なので、訪問日を確認してください。'],
      ['프롬나드 뒤 파이용', 'Promenade du Paillon', 'プロムナード・デュ・パイヨン', '마세나 광장에서 구시가지와 현대미술관 쪽으로 이어지는 도심 공원입니다. 물거울과 분수, 그늘길, 어린이 놀이 공간이 있어 관광 사이에 쉬어가기 좋습니다.', 'A central park running from Place Masséna towards Old Nice and the contemporary-art museum, with a reflecting pool, water jets, shaded paths and children’s play areas.', 'マセナ広場から旧市街や現代美術館方面へ続く市街地の公園です。水鏡や噴水、木陰の道、子どもの遊び場があり、観光の合間に休憩できます。'],
    ],
    t: [['소카·피살라디에르 같은 니스 음식은 구시가지 시장 주변 노점에서 맛보기 좋습니다.', 'Try local socca and pissaladière from stalls around the Old Town market.', 'ソッカやピサラディエールなどニースの味は旧市街の市場周辺の屋台で。'], ['공항에서 숙소까지: 니스 코트다쥐르공항 터미널에서 트램 2호선을 타면 도심의 Jean Médecin역과 Port Lympia까지 이어집니다. 숙소가 동쪽 항구 쪽인지 서쪽 지역인지 확인해 내릴 역을 고르세요.', 'Airport to your stay: tram line 2 runs from Nice Côte d’Azur Airport terminals to Jean Médecin in the centre and Port Lympia. Choose your stop according to whether your accommodation is near the eastern port or farther west.', '空港から宿泊先へ：ニース・コート・ダジュール空港のターミナルからトラム2号線で中心部のJean Médecin駅やPort Lympiaへ行けます。宿泊先が東側の港周辺か西側かを見て降車駅を選びましょう。']],
  },
  reykjavik: {
    h: [
      ['블루 라군', 'Blue Lagoon', 'ブルーラグーン', '케플라비크공항과 레이캬비크 사이의 용암 지대에 있는 지열 스파로, 시내 명소와는 거리가 있습니다. 교통편과 시간 지정 예약을 먼저 확인하세요.', 'A geothermal spa in the lava fields between Keflavík Airport and Reykjavík, outside the city centre. Check transfers and timed reservations before planning your visit.', 'ケプラヴィーク空港とレイキャビクの間の溶岩原にある地熱スパで、市街中心部から離れています。移動手段と時間指定予約を先に確認しましょう。'],
      ['할그림스키르캬 교회', 'Hallgrímskirkja', 'ハットルグリムス教会', '아이슬란드 자연에서 영감을 얻은 현대 건축의 랜드마크입니다. 교회는 예배와 행사가 있는 살아 있는 공동체이므로 전망대·내부 관람 가능 여부를 방문 당일 확인하세요.', 'A modern architectural landmark inspired by Iceland’s landscapes. It is an active church, so check whether the tower and interior are open around services and events.', 'アイスランドの自然に着想を得た現代建築のランドマークです。礼拝や行事がある教会なので、塔や内部の見学可否を当日に確認してください。'],
      ['하르파 콘서트홀', 'Harpa Concert Hall', 'ハルパ・コンサートホール', '항구 옆의 공연·회의 시설이자 도심 문화 공간으로, 독특한 유리 외벽과 바다·산 전망을 볼 수 있습니다. 공연 외에 건물 관람·투어가 가능한지 일정을 확인하세요.', 'A concert and conference venue by the harbour and a central cultural space, known for its glass façade and sea-and-mountain views. Check tour availability as well as the performance calendar.', '港沿いのコンサート・会議施設であり、街の文化拠点です。特徴的なガラスの外壁と海・山の眺めを楽しめます。公演予定に加えて館内ツアーの有無も確認してください。'],
      ['아이슬란드 국립박물관', 'National Museum of Iceland', 'アイスランド国立博物館', '정착 시대부터 현대까지 아이슬란드의 문화사를 유물과 전시로 소개합니다. 상설전과 특별전 운영 시간을 확인해 방문 계획을 세우세요.', 'Explore Iceland’s cultural history from settlement to the present through objects and exhibitions. Check opening hours for permanent and temporary displays.', '入植期から現代までのアイスランド文化史を、資料や展示を通して紹介します。常設展・企画展の開館時間を確認して訪問計画を立てましょう。'],
      ['아르바이르 야외박물관', 'Árbær Open Air Museum', 'アウルバイル野外博物館', '복원된 옛 가옥과 당시 생활상을 통해 레이캬비크의 초기 역사를 체험하는 시립 야외박물관입니다. 도심 밖에 있어 이동 시간과 계절별 운영을 확인하세요.', 'A Reykjavík City Museum where restored historic homes and demonstrations bring early city life to view. It is outside the centre, so check travel time and seasonal hours.', '復元された歴史的住宅や実演を通して、レイキャビクの初期の暮らしを体験できる市立野外博物館です。中心部の外にあるため、移動時間と季節営業を確認してください。'],
    ],
    t: [['오로라는 보통 9월~4월 맑은 밤에 볼 수 있으며, 시내 불빛을 벗어나야 잘 보입니다.', 'Northern lights appear on clear nights roughly September to April, best away from city lights.', 'オーロラはだいたい9〜4月の晴れた夜に見られ、街の明かりから離れるとよく見えます。'], ['공항에서 숙소까지: 국제선은 케플라비크공항(KEF)을 이용하며 Flybus가 레이캬비크 BSÍ 터미널과 일부 숙소·지정 정류장까지 연결합니다. 예약 시 숙소 픽업·드롭오프 가능 여부를 확인하세요.', 'Airport to your stay: international flights use Keflavík Airport (KEF); Flybus connects it with Reykjavík’s BSÍ terminal and selected hotels or designated stops. Check whether pickup or drop-off is available for your accommodation when booking.', '空港から宿泊先へ：国際線はケプラヴィーク空港（KEF）を利用し、FlybusでレイキャビクのBSÍターミナルや一部の宿泊施設・指定停留所へ移動できます。予約時に宿泊先への送迎対象か確認しましょう。']],
  },
  'siem-reap': {
    h: [
      ['앙코르와트', 'Angkor Wat', 'アンコール・ワット', '12세기 초 수리야바르만 2세 때 세워진 대규모 사원으로, 긴 서쪽 진입로와 회랑의 부조, 중앙 성소를 차례로 둘러볼 수 있습니다. 사원은 종교 유적이므로 복장·출입 규칙을 지켜 주세요.', 'A monumental temple built in the early 12th century under Suryavarman II, with a long western approach, gallery bas-reliefs and a central sanctuary. Follow the site’s dress and access rules.', '12世紀初頭にスーリヤヴァルマン2世の時代に建てられた大寺院で、西側の参道、回廊の浮彫、中央聖所を順に見学できます。宗教遺跡のため服装や立入規則を守ってください。'],
      ['앙코르톰', 'Angkor Thom', 'アンコール・トム', '자야바르만 7세가 조성한 성벽 도시로, 남문을 비롯한 다섯 개 문과 성벽·해자를 둘러볼 수 있습니다. 내부의 바이욘·바푸온 등은 별도 관람 지점이므로 이동 시간을 잡으세요.', 'A walled city established by Jayavarman VII, with five monumental gates, walls and a moat. Bayon and Baphuon are separate stops inside, so allow time to move between them.', 'ジャヤヴァルマン7世が築いた城壁都市で、南大門を含む五つの門、城壁、環濠を見学できます。内部のバイヨンやバプーオンは別の見学地点なので移動時間を確保してください。'],
      ['바이욘 사원', 'Bayon Temple', 'バイヨン寺院', '앙코르톰 한가운데에 있는 사원으로, 탑의 네 방향을 향한 얼굴 조각과 회랑의 전투·시장·일상생활 부조가 특징입니다. 혼잡을 줄이려면 이른 아침이나 늦은 오후 방문을 고려하세요.', 'A temple at the centre of Angkor Thom, known for tower faces looking in four directions and gallery reliefs of battles, markets and daily life. Consider early morning or late afternoon to avoid the busiest periods.', 'アンコール・トムの中心にある寺院で、四方を向く塔の顔面彫刻や、戦闘・市場・日常生活を描いた回廊の浮彫が特徴です。混雑を避けるには早朝か夕方の訪問を検討してください。'],
      ['따프롬 사원', 'Ta Prohm Temple', 'タ・プローム寺院', '자야바르만 7세가 1186년에 세운 사원으로, 숲의 큰 나무와 뿌리가 회랑·문을 감싼 풍경으로 유명합니다. 보존을 위해 지정 보행로를 따르고 혼잡 시간대를 피해 보세요.', 'Built in 1186 under Jayavarman VII, this temple is known for large forest trees and roots growing over galleries and gateways. Follow designated paths to protect the site and consider avoiding peak hours.', '1186年にジャヤヴァルマン7世の時代に建てられた寺院で、大木や根が回廊・門を覆う景観で知られます。遺跡保護のため指定通路を歩き、混雑時間を避けることも検討してください。'],
      ['앙코르 국립박물관', 'Angkor National Museum', 'アンコール国立博物館', '앙코르 사원에서 발견·회수된 불교·힌두교 조각과 크메르 왕국의 유물을 전시합니다. 더운 한낮에 실내에서 유적의 배경을 먼저 살펴보는 일정으로 묶기 좋습니다.', 'Displays Buddhist and Hindu sculptures and Khmer artifacts recovered from Angkor’s temples. It works well as an indoor introduction to the archaeological sites, especially around midday.', 'アンコールの寺院から発見・回収された仏教・ヒンドゥー教彫刻やクメール王国の資料を展示します。遺跡を訪れる前の予習や、暑い昼の屋内見学に組み合わせやすい施設です。'],
    ],
    t: [['앙코르 유적은 여러 사원으로 넓게 펼쳐져 있습니다. 툭툭·택시·자전거 등으로 작은 순환 코스나 큰 순환 코스를 계획해 둘러보세요.', 'Angkor\'s temples are spread across a wide area. Plan a small or grand circuit using a tuk-tuk, taxi, or bicycle.', 'アンコールの寺院は広い範囲に点在しています。トゥクトゥク、タクシー、自転車などで小回り・大回りの巡回ルートを計画しましょう。'], ['공항에서 숙소까지: 시엠레아프 앙코르 국제공항은 시내행 공식 셔틀버스 안내를 제공합니다. 셔틀 정류장에서 숙소까지 마지막 이동이 필요한지 확인하고, 늦은 도착이면 숙소 픽업 가능 여부도 문의하세요.', 'Airport to your stay: Siem Reap Angkor International Airport links to information for its official shuttle bus to town. Check whether you need a final transfer from the shuttle stop to your accommodation, and ask your stay about pickup for late arrivals.', '空港から宿泊先へ：シェムリアップ・アンコール国際空港は市内行き公式シャトルバスの案内を掲載しています。シャトル停留所から宿泊先までの移動が必要か確認し、到着が遅い場合は宿の送迎について問い合わせましょう。']],
  },
  ulaanbaatar: {
    h: [
      ['몽골 국립박물관', 'National Museum of Mongolia', 'モンゴル国立博物館', '선사시대부터 몽골 제국과 유목 생활까지 보여 주는 박물관입니다.', 'Covers prehistory, the Mongol Empire and nomadic life.', '先史時代からモンゴル帝国、遊牧生活までを紹介する博物館です。'],
      ['칭기즈칸 국립박물관', 'Chinggis Khaan National Museum', 'チンギス・ハーン国立博物館', '몽골의 고대 국가와 칭기즈칸 시대, 제국의 역사를 다루는 국립박물관입니다. 여러 층의 전시를 둘러보려면 관람 시간을 넉넉히 잡고, 계절별 휴관일을 방문 전에 확인하세요.', 'A national museum covering Mongolia’s early states, the age of Chinggis Khaan and the history of the empire. Allow time for its multi-floor exhibitions and check seasonal closing days before visiting.', 'モンゴルの古代国家、チンギス・ハーンの時代、帝国の歴史を扱う国立博物館です。複数階の展示を見学する時間を確保し、季節ごとの休館日を事前に確認してください。'],
      ['국제지능박물관', 'International Intellectual Museum', '国際知能博物館', '세계 여러 나라의 퍼즐·체스·과학 체험 전시를 직접 만져 보고 풀어 볼 수 있는 박물관입니다.', 'Explore hands-on puzzles, chess and science displays from around the world.', '世界各地のパズルやチェス、科学展示に触れながら挑戦できる博物館です。'],
    ],
    t: [['7월 나담 축제에서는 씨름·말 경주·활쏘기를 볼 수 있습니다. 인기 행사라 관람권과 숙소를 일찍 확인하세요.', 'The July Naadam festival features wrestling, horse racing and archery. Check tickets and accommodation early for this popular event.', '7月のナーダム祭ではモンゴル相撲・競馬・弓射が見られます。人気の行事なので、観覧券と宿泊先は早めに確認しましょう。'], ['공항에서 숙소까지: 칭기즈 칸 국제공항에서 울란바토르 시내로 공공버스가 운행합니다. 노선별 목적지가 다르므로 숙소와 가까운 정류장을 확인하고, 짐이 많거나 심야 도착이면 공식 택시 안내도 살펴보세요.', 'Airport to your stay: public buses run from Chinggis Khaan International Airport to Ulaanbaatar. Routes serve different destinations, so check the stop nearest your accommodation; for heavy luggage or late arrivals, review the airport’s official taxi information.', '空港から宿泊先へ：チンギス・ハーン国際空港からウランバートル市内へ公共バスが運行しています。路線ごとに行き先が異なるため、宿泊先に近い停留所を確認しましょう。荷物が多い場合や深夜到着の場合は、空港の公式タクシー案内もご確認ください。'], ['칭기즈칸 국립박물관은 겨울 운영기간(9월 15일~5월 14일)에 화요일 휴관합니다. 방문일이 겨울이면 다른 요일로 일정을 잡고, 전시관 관람에 2~3시간 정도를 두세요.', 'The Chinggis Khaan National Museum closes on Tuesdays during its winter schedule (15 September–14 May). If visiting in winter, plan for another day and allow around 2–3 hours for the exhibition halls.', 'チンギス・ハーン国立博物館は冬季（9月15日～5月14日）の火曜日が休館日です。冬に訪れる場合は別の曜日に予定し、展示室の見学には2～3時間ほど見込みましょう。']],
  },
  gangneung: {
    h: [['하슬라아트월드', 'Haslla Art World', 'ハスラアートワールド', '동해를 마주한 야외 조각공원과 현대미술관, 피노키오 전시 공간이 함께 있는 예술 단지입니다.', 'An art complex facing the East Sea, combining an outdoor sculpture park, contemporary galleries and a Pinocchio museum.', '東海に面した芸術施設で、屋外彫刻公園、現代美術館、ピノキオ博物館があります。']],
    t: [],
  },
  yeosu: {
    h: [['진남관', 'Jinnamgwan Hall', '鎮南館', '이순신 장군의 조선 수군 지휘부 터에 세워진 대형 목조 건물로, 여수의 해전 역사를 살펴볼 수 있습니다. 현재 관람 가능 여부는 방문 전 공식 안내에서 확인하세요.', 'A large wooden hall on the former naval-command site associated with Admiral Yi Sun-sin, illustrating Yeosu’s naval history. Check current visitor access before going.', '李舜臣将軍ゆかりの朝鮮水軍司令部跡に建つ大規模な木造建築で、麗水の海戦史を知ることができます。現在の公開状況は訪問前に公式案内で確認してください。']],
    t: [],
  },
  cairns: {
    h: [
      ['케언스 보타닉 가든', 'Cairns Botanic Gardens', 'ケアンズ植物園', '열대 식물 컬렉션과 온실, 호수 산책로가 있는 정원으로, 플레커 가든은 날씨에 따라 운영 시간이 달라질 수 있습니다.', 'A garden with tropical plant collections, a conservatory and lakeside paths; Flecker Gardens hours can vary with weather.', '熱帯植物のコレクションや温室、湖畔の遊歩道がある庭園です。フレッカー・ガーデンズの開園時間は天候により変わる場合があります。'],
      ['스카이레일 열대우림 케이블웨이', 'Skyrail Rainforest Cableway', 'スカイレール熱帯雨林ケーブルウェイ', '스미스필드에서 쿠란다까지 열대우림 위를 지나며 레드 피크와 배런 폭포 정류장의 보드워크·전망대를 둘러봅니다.', 'Travel above rainforest canopy between Smithfield and Kuranda, with boardwalks and lookouts at Red Peak and Barron Falls.', 'スミスフィールドからキュランダまで熱帯雨林の上を進み、レッドピークやバロン滝の停車駅で遊歩道や展望所を巡れます。'],
    ],
    t: [],
  },
  verona: {
    h: [['로마 극장과 고고학 박물관', 'Roman Theatre and Archaeological Museum', 'ローマ劇場と考古学博物館', '아디제강 동쪽 언덕에 있는 로마 시대 극장과 유적 전시 공간으로, 강 건너 구시가지 풍경도 볼 수 있습니다.', 'A Roman-era theatre and archaeological displays on the hill east of the Adige, with views back toward the old town.', 'アディジェ川東岸の丘にあるローマ時代の劇場と考古資料の展示施設で、川向こうの旧市街も眺められます。']],
    t: [],
  },
  thessaloniki: {
    h: [['아리스토텔루스 광장', 'Aristotelous Square', 'アリストテレス広場', '바닷가에서 상부 도시까지 이어지는 도심 광장으로, 아케이드와 카페가 늘어서 있고 해안 산책로와 연결됩니다.', 'A central square opening from the waterfront toward the upper city, lined with arcades and cafés and connected to the seafront promenade.', '海辺から上町へ続く中心広場で、アーケードやカフェが並び、海岸遊歩道にもつながっています。']],
    t: [],
  },
  chengdu: {
    h: [
      ['청두 박물관', 'Chengdu Museum', '成都博物館', '톈푸 광장 서쪽에 있는 시립 박물관으로, 청두의 역사와 민속 전시를 관람할 수 있습니다. 방문일의 휴관일과 입장 예약 안내를 공식 페이지에서 확인하세요.', 'A city museum on the west side of Tianfu Square, with exhibitions on Chengdu’s history and folk culture. Check its official visitor page for closing days and any reservation requirements.', '天府広場西側にある市立博物館で、成都の歴史や民俗を展示しています。休館日や予約の要否は公式の来館案内で確認してください。'],
      ['칭양궁', 'Qingyang Palace', '青羊宮', '청두 도심 서쪽의 도교 사원으로, 고전 건축과 사원 정원을 둘러볼 수 있습니다. 행사·수리로 일부 공간 이용이 달라질 수 있으니 방문 전에 공식 안내를 확인하세요.', 'A Taoist temple west of central Chengdu, with historic architecture and temple grounds. Check official visitor information for any event- or renovation-related access changes.', '成都中心部の西にある道教寺院で、伝統建築や境内を見学できます。行事や修繕による公開状況の変更は訪問前に公式案内で確認してください。'],
    ],
    t: [],
  },
  tashkent: {
    h: [['타슈켄트 철도 박물관', 'Tashkent Railway Museum', 'タシケント鉄道博物館', '노천 전시장에 증기기관차·전기기관차와 중앙아시아 철도 자료를 전시하며, 관람객이 열차 내부를 살펴볼 수 있습니다.', 'An open-air collection of steam and electric locomotives and Central Asian railway exhibits, with access to some train interiors.', '蒸気機関車や電気機関車、中央アジア鉄道の資料を屋外展示し、一部の車両内部も見学できます。']],
    t: [],
  },
  bremen: {
    h: [['성 페트리 대성당', 'St. Peter’s Cathedral', '聖ペトリ大聖堂', '브레멘 마르크트 광장에 자리한 로마네스크·고딕 양식의 대성당으로, 성당 박물관과 남쪽 탑 전망을 볼 수 있습니다.', 'A Romanesque-Gothic cathedral on Bremen’s market square, with a cathedral museum and views from the south tower.', 'ブレーメンのマルクト広場に建つロマネスク・ゴシック様式の大聖堂で、教会博物館や南塔からの眺望を楽しめます。']],
    t: [],
  },
  gothenburg: {
    h: [['슬로츠스코겐 공원', 'Slottsskogen', 'スロッツスコーゲン公園', '도심 서쪽의 넓은 공원으로, 산책로와 전망 지점, 동물원이 있어 반나절 야외 일정으로 묶기 좋습니다.', 'A large park west of the centre with walking paths, viewpoints and a zoo, suitable for a half-day outdoors.', '中心部西側の広大な公園で、散策路や展望場所、動物園があり、半日の屋外観光に向いています。']],
    t: [],
  },
  aarhus: {
    h: [
      ['모에스고르 박물관', 'Moesgaard Museum', 'モースゴー博物館', '고고학·민족지 전시를 건축과 연결해 보여 주는 박물관으로, 선사시대부터 바이킹 시대까지 다룹니다.', 'A museum integrating archaeology and ethnography with its architecture, covering prehistory through the Viking Age.', '建築と一体化した考古学・民族誌の博物館で、先史時代からヴァイキング時代までを扱います。'],
      ['도크원 문화의 집', 'Dokk1 Culture House', 'ドックワン文化施設', '항구와 도심이 만나는 곳의 공공 문화시설로, 도서관·전시·놀이 공간과 해안 산책을 함께 즐길 수 있습니다. 행사에 따라 일부 공간은 이용 조건이 다를 수 있습니다.', 'A public cultural centre where harbour and city meet, with a library, exhibitions, play spaces and waterfront walks. Access to some areas may vary during events.', '港と市街地が接する場所にある公共文化施設で、図書館や展示、遊び場、海辺の散策を楽しめます。催しによって一部エリアの利用条件が異なる場合があります。'],
    ],
    t: [],
  },
  galway: {
    h: [
      ['스패니시 아치', 'Spanish Arch', 'スパニッシュ・アーチ', '코리브강 하구의 옛 성벽 일부로, 인근 박물관과 롱 워크 산책로를 함께 둘러볼 수 있습니다.', 'A surviving section of the old walls at the Corrib’s mouth, beside the city museum and Long Walk.', 'コリブ川河口に残る旧城壁の一部で、市立博物館やロング・ウォークと合わせて訪れられます。'],
      ['솔트힐 산책로', 'Salthill Promenade', 'ソルトヒル・プロムナード', '골웨이만을 따라 이어지는 해안 산책로로, 바다와 애런 제도 방향의 전망을 볼 수 있습니다.', 'A coastal promenade along Galway Bay with views toward the sea and the Aran Islands.', 'ゴールウェイ湾沿いの海岸遊歩道で、海やアラン諸島の方角を眺められます。'],
    ],
    t: [],
  },
  turku: {
    h: [
      ['아보아 베투스 아르스 노바', 'Aboa Vetus Ars Nova', 'アボア・ヴェトゥス・アルス・ノヴァ', '중세 투르쿠의 발굴된 거리와 유적, 현대미술 전시를 한 건물에서 볼 수 있는 박물관입니다.', 'A museum combining excavated medieval Turku streets and ruins with contemporary art exhibitions.', '中世トゥルクの発掘された街路や遺構と、現代美術の展示を一つの施設で見られます。'],
      ['루오스타린마키 박물관 구역', 'Luostarinmäki Museum Quarter', 'ルオスタリンマキ博物館地区', '1827년 대화재를 피한 목조 주택 지구를 보존한 야외 박물관으로, 옛 투르쿠의 생활과 수공예 작업장을 살펴볼 수 있습니다. 계절 운영일을 공식 페이지에서 확인하세요.', 'An open-air museum preserving a wooden residential quarter that survived the 1827 fire, with historic homes and craft workshops. Check seasonal opening dates on the official site.', '1827年の大火を免れた木造住宅地区を保存する野外博物館で、昔のトゥルクの暮らしや工房を見学できます。季節ごとの開館日は公式サイトで確認してください。'],
    ],
    t: [],
  },
  tartu: {
    h: [
      ['타르투 미술관', 'Tartu Art Museum', 'タルトゥ美術館', '기울어진 집으로도 불리는 구시가지 건물에서 에스토니아와 국제 현대미술 전시를 엽니다.', 'Presents Estonian and international contemporary art in the Old Town’s “Leaning House.”', '旧市街の「傾いた家」と呼ばれる建物で、エストニアや各国の現代美術を展示します。'],
      ['타르투 대성당의 대학 박물관', 'University of Tartu Museum at the Cathedral', '大聖堂内のタルトゥ大学博物館', '토오메 언덕의 옛 대성당 건물에 자리한 대학 박물관에서 대학과 성당의 역사를 살펴볼 수 있습니다. 유적 가까이는 낙석 위험으로 접근이 제한될 수 있으니 현장 안내를 따르세요.', 'The university museum in the former cathedral on Toome Hill presents the history of the university and cathedral. Access close to the ruins may be restricted because of falling-stone risks; follow on-site guidance.', 'トーメの丘にある旧大聖堂の大学博物館で、大学と大聖堂の歴史を見学できます。落石の危険により遺跡の近くは立入制限される場合があるため、現地の案内に従ってください。'],
    ],
    t: [],
  },
  'san-sebastian': {
    h: [
      ['몬테 이겔도', 'Monte Igueldo', 'モンテ・イゲルド', '라 콘차 만을 내려다보는 언덕으로, 전망대와 오래된 놀이시설을 둘러볼 수 있습니다.', 'A hill overlooking La Concha Bay, with a viewpoint and historic amusement rides.', 'ラ・コンチャ湾を見下ろす丘で、展望台や昔ながらの遊具を楽しめます。'],
      ['바람의 빗', 'Peine del Viento', '風の櫛（ペイネ・デル・ビエント）', '이겔도 산기슭 바위 해안에 설치된 에두아르도 칠리다의 조각 작품으로, 파도와 바람을 함께 느낄 수 있습니다.', 'Eduardo Chillida’s sculpture installation among the rocks at the foot of Mount Igueldo, where waves and wind meet.', 'イゲルド山麓の岩場に設置されたエドゥアルド・チリーダの作品で、波と風を間近に感じられます。'],
    ],
    t: [],
  },
  funchal: {
    h: [
      ['라브라두레스 시장', 'Mercado dos Lavradores', 'ラブラドーレス市場', '구시가지의 역사적인 시장 건물에서 과일·꽃·생선 판매 구역과 아줄레주 장식을 볼 수 있습니다.', 'A historic Old Town market building with produce, flower and fish sections and azulejo tile decoration.', '旧市街の歴史的な市場建築で、果物・花・魚の売り場やアズレージョ装飾を見られます。'],
      ['상티아구 요새', 'Fortress of São Tiago', 'サン・ティアゴ要塞', '구시가지 해안에 선 노란색 요새로, 마데이라 현대미술관이 들어서 있습니다.', 'A yellow seaside fort in the Old Town that houses the Museum of Contemporary Art of Madeira.', '旧市街の海辺に建つ黄色い要塞で、マデイラ現代美術館が入っています。'],
    ],
    t: [],
  },
  cordoba: {
    h: [
      ['기독교 군주들의 알카사르', 'Alcázar of the Christian Monarchs', 'キリスト教徒の王たちのアルカサル', '정원과 탑, 요새 건축을 갖춘 옛 왕궁으로, 코르도바 역사지구의 대표 명소입니다.', 'A former royal palace with gardens, towers and fortress architecture, among the historic quarter’s major sights.', '庭園や塔、要塞建築を備えた旧王宮で、コルドバ歴史地区の代表的な見どころです。'],
      ['로마 다리와 칼라오라 탑', 'Roman Bridge and Calahorra Tower', 'ローマ橋とカラオーラの塔', '과달키비르강을 건너는 옛 다리와 남쪽 끝의 방어탑으로, 구시가지 스카이라인을 바라보기 좋습니다.', 'A historic bridge over the Guadalquivir and the defensive tower at its southern end, with views toward the Old Town.', 'グアダルキビル川に架かる古い橋と南端の防御塔で、旧市街の眺めを楽しめます。'],
    ],
    t: [],
  },
  montpellier: {
    h: [
      ['생피에르 대성당', 'Montpellier Cathedral of Saint Peter', 'モンペリエ・サン・ピエール大聖堂', '두 개의 거대한 탑이 입구를 받치는 고딕 성당으로, 옛 의학대학 지구와 가까이 있습니다.', 'A Gothic cathedral whose entrance is framed by two massive towers, near the historic medical-school district.', '二つの大きな塔が入口を支えるゴシック大聖堂で、旧医学部地区の近くにあります。'],
      ['몽펠리에 개선문과 페이루 산책로', 'Arc de Triomphe and Promenade du Peyrou', '凱旋門とペイルー遊歩道', '구시가지 서쪽 입구의 개선문과 테라스형 산책로로, 수도교와 도시 전망을 함께 볼 수 있습니다.', 'A gateway to the Old Town and a terraced promenade with views of the aqueduct and city.', '旧市街西側の凱旋門と段状の遊歩道で、水道橋や街の眺望を楽しめます。'],
    ],
    t: [],
  },
  malmo: {
    h: [
      ['민속 공원', 'Folkets Park', 'フォルケッツ公園', '놀이·공연·카페와 계절 행사가 모인 도심 공원으로, 아이들과 쉬어가기 좋습니다.', 'A central park with play areas, performances, cafés and seasonal events, popular with families.', '遊び場や公演、カフェ、季節の催しが集まる中心部の公園で、家族連れにも人気です。'],
      ['릴라 토리 광장', 'Lilla Torg', 'リラ・トーリ広場', '구시가지의 자갈 광장으로, 역사적인 파사드와 야외 카페가 둘러싸고 있습니다.', 'A cobbled Old Town square framed by historic façades and outdoor cafés.', '旧市街の石畳の広場で、歴史的な建物の正面や屋外カフェに囲まれています。'],
    ],
    t: [],
  },
  'nha-trang': {
    h: [['롱선사', 'Long Son Pagoda', 'ロンソン寺', '언덕의 불상과 긴 계단으로 알려진 불교 사찰로, 시내와 해안 풍경을 함께 볼 수 있습니다.', 'A Buddhist pagoda known for its hilltop Buddha and long stairway, with views over the city and coast.', '丘の上の仏像と長い階段で知られる仏教寺院で、市街や海岸の景色を眺められます。']],
    t: [],
  },
  'phu-quoc': {
    h: [['빈펄 사파리 푸꾸옥', 'Vinpearl Safari Phu Quoc', 'ビンパール・サファリ・フーコック', '푸꾸옥 북부의 야생동물 보호·관람 시설로, 사파리 구역과 동물원 구역, 교육 프로그램을 운영합니다. 동물 관람 방식과 운영 시간은 공식 안내에서 확인하세요.', 'A wildlife conservation and viewing park in northern Phu Quoc, with safari and zoo areas and educational programmes. Check the official visitor information for viewing rules and hours.', 'フーコック北部にある野生動物の保護・観覧施設で、サファリ区域、動物園区域、教育プログラムがあります。観覧方法や営業時間は公式案内で確認してください。']],
    t: [],
  },
};
