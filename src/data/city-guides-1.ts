/**
 * 도시 가이드 "놓치지 말 것·여행 팁" 초안 1 (Claude 초안, 금액 없음). GPT 할 일 R 에서 근거 URL 로 확인한다.
 * 형식: 볼거리 [이름 ko, en, ja, 한 줄 ko, en, ja], 팁 [ko, en, ja]
 */
export type H = readonly [string, string, string, string, string, string];
export type T = readonly [string, string, string];
export interface Compact {
  h: readonly H[];
  t: readonly T[];
}

export const NOTES_1: Record<string, Compact> = {
  almaty: {
    h: [
      ['콕토베 언덕', 'Kok Tobe', 'コクトベの丘', '케이블카로 올라가 알마티 시내와 톈산 산맥을 한눈에 내려다보는 전망 언덕입니다.', 'A hilltop reached by cable car with views over the city and the Tian Shan mountains.', 'ロープウェイで登り、市街と天山山脈を一望できる丘です。'],
      ['메데우·심불락', 'Medeu and Shymbulak', 'メデウ・シンブラク', '시내에서 차로 가까운 산악 지대. 고산 스케이트장과 스키장, 케이블카가 있습니다.', 'Mountain area close to the city with a high-altitude skating rink, ski resort and cable cars.', '市内から近い山岳エリア。高地のスケートリンクとスキー場、ロープウェイがあります。'],
      ['그린 바자르', 'Green Bazaar', 'グリーン・バザール', '말고기 소시지·건과일·꿀 등 카자흐 식재료가 모인 큰 실내 시장입니다.', 'A large covered market for Kazakh foods such as horse-meat sausage, dried fruit and honey.', '馬肉ソーセージやドライフルーツ、蜂蜜などカザフの食材が集まる大きな市場です。'],
    ],
    t: [
      ['알마티의 버스와 지하철을 이용할 때는 ONAY 교통카드를 사용할 수 있습니다.', 'You can use an ONAY transport card on Almaty\'s buses and metro.', 'アルマトイのバスと地下鉄では、交通カード「ONAY」を利用できます。'],
      ['빅 알마티 호수는 해발 약 2,500m에 있어 산책할 때 여벌 겉옷을 챙기면 좋습니다.', 'Big Almaty Lake sits at about 2,500 metres above sea level, so consider bringing an extra layer for your walk.', 'ビッグ・アルマティ湖は標高約2,500mにあるため、散策には羽織るものを持参すると安心です。'],
    ],
  },
  amsterdam: {
    h: [
      ['국립미술관', 'Rijksmuseum', 'アムステルダム国立美術館', '렘브란트의 「야간 순찰」과 페르메이르 작품을 볼 수 있는 네덜란드 대표 미술관입니다.', "The Netherlands' great art museum, home to Rembrandt's Night Watch and works by Vermeer.", 'レンブラントの「夜警」やフェルメール作品を所蔵するオランダを代表する美術館です。'],
      ['안네 프랑크의 집', 'Anne Frank House', 'アンネ・フランクの家', '안네 프랑크 가족이 숨어 지냈던 집. 입장권은 온라인으로만 팔아 미리 예약해야 합니다.', "The house where Anne Frank's family hid; tickets are sold online only, so book ahead.", 'アンネ一家が隠れ住んだ家。チケットはオンライン販売のみなので事前予約が必要です。'],
      ['운하 지구', 'Canal Ring', '運河地区', '17세기에 만든 운하와 좁고 긴 집들이 이어지는 구시가지. 운하 보트로 둘러보기 좋습니다.', 'The 17th-century canal ring lined with narrow gabled houses, best seen from a canal boat.', '17世紀の運河と細長い家並みが続く旧市街。運河ボートでの見学がおすすめです。'],
      ['반 고흐 미술관', 'Van Gogh Museum', 'ゴッホ美術館', '반 고흐 작품을 세계에서 가장 많이 소장한 미술관으로, 시간 지정 온라인 예약이 필요합니다.', 'The world’s largest Van Gogh collection; book a timed ticket online.', 'ゴッホ作品を世界で最も多く所蔵する美術館で、時間指定のオンライン予約が必要です。'],
    ],
    t: [
      ['자전거 도로(붉은 길)는 보행로가 아닙니다. 걸을 때 자전거 도로에 서 있지 않도록 조심하세요.', 'The red bike lanes are not footpaths; watch out and do not stand in them.', '赤い自転車道は歩道ではありません。歩くときに立ち止まらないよう注意しましょう。'],
      ['트램·버스는 현금을 받지 않습니다. 교통카드나 비접촉 카드로 탈 때와 내릴 때 모두 찍어야 합니다.', 'Trams and buses do not take cash; tap a card both when boarding and when getting off.', 'トラムやバスは現金不可。乗るときと降りるときの両方でカードをタッチします。'],
    ],
  },
  athens: {
    h: [
      ['아크로폴리스·파르테논', 'Acropolis and Parthenon', 'アクロポリス・パルテノン神殿', '고대 아테네의 성채 언덕. 한낮에는 매우 더우니 문 여는 시간에 맞춰 가는 것이 좋습니다.', 'The ancient citadel; go right at opening time because midday is very hot.', '古代アテネの城塞の丘。日中はとても暑いので開門直後がおすすめです。'],
      ['아크로폴리스 박물관', 'Acropolis Museum', 'アクロポリス博物館', '아크로폴리스에서 나온 조각을 모은 박물관. 유리 바닥 아래로 옛 유적이 보입니다.', 'Houses sculptures from the Acropolis, with excavations visible beneath glass floors.', 'アクロポリスの彫刻を集めた博物館。ガラスの床の下に遺跡が見えます。'],
      ['플라카 지구', 'Plaka', 'プラカ地区', '아크로폴리스 아래 골목에 타베르나와 기념품 가게가 모인 옛 동네입니다.', 'The old quarter below the Acropolis, full of tavernas and souvenir shops.', 'アクロポリスの麓の路地にタベルナや土産物店が集まる旧市街です。'],
      ['국립고고학박물관', 'National Archaeological Museum', '国立考古学博物館', '그리스 최대의 고고학 박물관으로, 아가멤논의 황금 가면과 청동 조각 등 선사 시대부터 고대 말기까지의 유물을 소장합니다.', 'Greece\'s largest archaeological museum, from the Mask of Agamemnon to classical bronzes.', 'ギリシャ最大の考古学博物館で、アガメムノンの黄金マスクや古代のブロンズ像などを収蔵します。'],
      ['베나키 박물관', 'Benaki Museum', 'ベナキ博物館', '고대부터 근현대까지 그리스 문화 전반을 한 건물에서 훑어볼 수 있는 사립 박물관입니다.', 'A private museum tracing Greek culture from antiquity to the modern era under one roof.', '古代から近現代までのギリシャ文化を一つの館でたどれる私立博物館です。'],
    ],
    t: [
      ['아테네 고대 유적을 여러 곳 갈 계획이라면 각 유적의 공식 입장권과 방문 시간을 따로 확인하세요. 기존 통합권은 폐지됐습니다.', 'If you plan to visit several ancient sites in Athens, check each site\'s official ticket and visiting hours separately. The former combined ticket has been discontinued.', 'アテネの古代遺跡を複数訪れる場合は、各遺跡の公式入場券と見学時間を個別に確認してください。以前の共通券は廃止されました。'],
      ['그리스에서는 화장지를 변기에 버리지 않고 옆 휴지통에 버리는 곳이 많습니다.', 'In many places in Greece, toilet paper goes in the bin, not the toilet.', 'ギリシャではトイレットペーパーを便器に流さず、横のごみ箱に捨てる所が多いです。'],
    ],
  },
  auckland: {
    h: [
      ['스카이 타워', 'Sky Tower', 'スカイタワー', '시내 어디서나 보이는 전망 타워. 꼭대기 전망대에서 항구와 화산 지형이 보입니다.', 'The tower visible across the city, with views of the harbour and volcanic cones.', '市内のどこからでも見える展望タワー。港と火山地形が見渡せます。'],
      ['마운트 이든', 'Maungawhau / Mount Eden', 'マウント・イーデン', '시내 가까운 휴화산. 분화구 둘레를 걸으며 도시 전경을 무료로 볼 수 있습니다.', 'A dormant volcano near downtown; walk the crater rim for free city views.', '市内に近い休火山。火口の周りを歩いて無料で街を一望できます。'],
      ['와이헤케 섬', 'Waiheke Island', 'ワイヘケ島', '페리로 가는 섬. 해변과 와이너리가 많아 하루 나들이로 인기입니다.', 'A ferry ride away, known for beaches and vineyards; a popular day trip.', 'フェリーで行く島。ビーチとワイナリーが多く日帰り旅行に人気です。'],
      ['오클랜드 전쟁기념 박물관', 'Auckland War Memorial Museum', 'オークランド戦争記念博物館', '도메인 공원 언덕 위 박물관으로, 마오리와 태평양 문화 전시가 충실합니다.', 'A museum on the Domain hill with strong Māori and Pacific collections.', 'ドメイン公園の丘に立つ博物館で、マオリと太平洋の文化展示が充実しています。'],
      ['호비튼 영화 세트장', 'Hobbiton Movie Set', 'ホビット村映画セット', '영화 \'반지의 제왕\'과 \'호빗\' 촬영지인 마타마타의 세트장으로, 가이드 투어로만 볼 수 있습니다. 오클랜드에서 차로 약 2시간입니다.', 'The Lord of the Rings and Hobbit set at Matamata, seen only on guided tours; about two hours\' drive.', '映画『ロード・オブ・ザ・リング』『ホビット』のマタマタのロケセットで、ガイドツアーのみ。オークランドから車で約2時間。'],
    ],
    t: [
      ['오클랜드 시내버스는 현금을 받지 않습니다. AT HOP 카드나 비접촉 카드를 쓰고, 기차·페리의 종이 승차권과 요금 차이를 노선별로 확인하세요.', 'Auckland buses do not accept cash. Use an AT HOP card or contactless payment, and check route-specific fares against paper tickets for trains and ferries.', 'オークランドのバスでは現金払いができません。AT HOPカードかタッチ決済を使い、鉄道・フェリーの紙の切符との運賃差は路線ごとに確認しましょう。'],
      ['자외선이 매우 강한 지역이라 흐린 날에도 선크림과 모자를 챙기세요.', 'UV levels are very high, so wear sunscreen and a hat even on cloudy days.', '紫外線がとても強いので、曇りの日も日焼け止めと帽子を。'],
    ],
  },
  bali: {
    h: [
      ['우붓', 'Ubud', 'ウブド', '계단식 논과 왕궁, 전통 공연이 있는 발리 문화의 중심지입니다.', "Bali's cultural heart with rice terraces, a royal palace and traditional dance.", '棚田や王宮、伝統舞踊があるバリ文化の中心地です。'],
      ['울루와뚜 사원', 'Uluwatu Temple', 'ウルワトゥ寺院', '절벽 위 바다 사원. 해 질 녘 께짝 댄스 공연이 유명합니다.', 'A clifftop sea temple famous for its sunset Kecak dance.', '断崖の上の海の寺院。夕暮れのケチャダンスが有名です。'],
      ['따나롯 사원', 'Tanah Lot', 'タナロット寺院', '밀물 때 바다에 떠 있는 듯 보이는 바위 위 사원입니다.', 'A rock temple that seems to float on the sea at high tide.', '満潮時には海に浮かんで見える岩の上の寺院です。'],
    ],
    t: [
      ['사원에 들어갈 때는 사롱(허리에 두르는 천)을 둘러야 합니다. 입구에서 빌려주는 곳이 많습니다.', 'Wear a sarong to enter temples; many lend them at the entrance.', '寺院に入る際はサロン（腰布）が必要です。入口で貸してくれる所が多いです。'],
      ['발리 남부는 교통이 혼잡할 수 있으니 지역 간 이동 시간을 넉넉히 잡으세요. 먼 지역을 함께 돌 경우 숙소 위치도 고려하세요.', 'Traffic in southern Bali can be heavy, so allow extra time between areas and consider where you stay for a multi-area trip.', 'バリ島南部は渋滞することがあります。地域間の移動には余裕を持ち、複数エリアを回るなら宿泊地も考えましょう。'],
    ],
  },
  beijing: {
    h: [
      ['자금성(고궁박물원)', 'Forbidden City (Palace Museum)', '故宮（紫禁城）', '명·청 황궁. 하루 입장 인원이 정해져 있어 실명 예약이 필요합니다.', 'The Ming and Qing imperial palace; daily entry is capped and needs real-name booking.', '明・清の皇宮。1日の入場者数に上限があり、実名予約が必要です。'],
      ['만리장성 무톈위·바다링', 'Great Wall at Mutianyu or Badaling', '万里の長城（慕田峪・八達嶺）', '시내에서 당일로 갈 수 있는 장성 구간. 무톈위는 비교적 덜 붐빕니다.', 'Wall sections reachable on a day trip; Mutianyu is usually less crowded.', '市内から日帰りできる長城。慕田峪は比較的すいています。'],
      ['이화원', 'Summer Palace', '頤和園', '호수와 회랑이 아름다운 황실 정원입니다.', 'An imperial garden of lakes and long painted corridors.', '湖と長い回廊が美しい皇室庭園です。'],
      ['천단 공원', 'Temple of Heaven', '天壇公園', '명·청 황제가 풍년을 빌던 제단으로, 둥근 기년전이 상징인 유네스코 세계유산입니다.', 'Where Ming and Qing emperors prayed for good harvests; its round Hall of Prayer is a UNESCO landmark.', '明・清の皇帝が豊作を祈った祭壇で、円形の祈年殿が象徴の世界遺産です。'],
    ],
    t: [
      ['주요 관광지는 여권으로 실명 예약을 해야 하는 곳이 많습니다. 방문 전날까지 예약해 두세요.', 'Many major sights require real-name booking with your passport; book by the day before.', '主要観光地は旅券での実名予約が必要な所が多いので、前日までに予約を。'],
      ['베이징에서는 알리페이·위챗페이를 준비하면 편리합니다. 해외 발행 카드 연결이 가능한지 출국 전에 확인하세요.', 'Alipay and WeChat Pay can be convenient in Beijing. Check before departure whether your foreign-issued card can be linked.', '北京ではアリペイやWeChat Payを用意すると便利です。海外発行カードを連携できるか、出発前に確認しましょう。'],
    ],
  },
  boracay: {
    h: [
      ['화이트 비치', 'White Beach', 'ホワイトビーチ', '고운 흰 모래가 길게 이어지는 보라카이 대표 해변입니다.', "Boracay's famous long stretch of fine white sand.", '細かい白砂が長く続くボラカイを代表するビーチです。'],
      ['푸카 셸 비치', 'Puka Shell Beach', 'プカシェルビーチ', '섬 북쪽의 한적한 해변. 화이트 비치보다 조용합니다.', 'A quieter beach on the north of the island.', '島の北側の静かなビーチです。'],
      ['아일랜드 호핑', 'Island hopping', 'アイランドホッピング', '배를 타고 보라카이 주변 섬과 해변을 둘러보며 스노클링을 즐기는 코스입니다.', 'Boat trips visit islands and beaches around Boracay, with opportunities to snorkel.', '船でボラカイ周辺の島やビーチを巡り、シュノーケリングを楽しむコースです。'],
    ],
    t: [
      ['섬에 들어갈 때 터미널 이용료와 환경 요금을 따로 냅니다(입도 절차에서 안내).', 'You pay a terminal fee and an environmental fee when entering the island.', '島に入る際、ターミナル使用料と環境料を別途支払います。'],
      ['보라카이 해변에서는 흡연·음주 등 금지 행위를 피하고, 모래성 만들기처럼 규정이 바뀔 수 있는 활동은 현장 안내를 확인하세요.', 'Avoid prohibited activities such as smoking and drinking on Boracay\'s beaches, and check current posted rules for activities such as building sandcastles.', 'ボラカイのビーチでは喫煙や飲酒などの禁止行為を避け、砂の城作りのように規則が変わり得る活動は現地の案内を確認してください。'],
    ],
  },
  brussels: {
    h: [
      ['그랑플라스', 'Grand-Place', 'グラン・プラス', '고딕 시청과 길드 하우스로 둘러싸인 광장. 밤 조명이 특히 아름답습니다.', 'The square framed by the Gothic town hall and guild houses, lovely when lit at night.', 'ゴシック様式の市庁舎とギルドハウスに囲まれた広場。夜のライトアップが特に美しいです。'],
      ['아토미움', 'Atomium', 'アトミウム', '1958년 만국박람회 때 세운 원자 모양 건축물. 구 안으로 들어가 전망을 볼 수 있습니다.', 'The atom-shaped landmark from the 1958 World Expo; you can go inside its spheres.', '1958年の万博で建てられた原子の形の建物。球体の中に入れます。'],
      ['만화 벽화 거리', 'Comic Strip Route', 'コミック壁画ルート', '틴틴 등 벨기에 만화 캐릭터 벽화가 시내 곳곳에 그려져 있습니다.', 'Murals of Tintin and other Belgian comic heroes are painted around the city.', 'タンタンなどベルギー漫画の壁画が街のあちこちに描かれています。'],
    ],
    t: [
      ['그랑플라스 주변에는 식당이 많습니다. 주문 전에 메뉴와 결제 조건을 확인하세요.', 'There are many restaurants around Grand-Place. Check the menu and payment terms before ordering.', 'グランプラス周辺には飲食店が多くあります。注文前にメニューと支払い条件を確認しましょう。'],
      ['브뤼셀에서는 여러 종류의 벨기에 맥주를 맛볼 수 있습니다. 주문 전에 메뉴의 도수와 잔 크기를 확인하세요.', 'Brussels offers many varieties of Belgian beer. Check the alcohol content and serving size on the menu before ordering.', 'ブリュッセルではさまざまなベルギービールを味わえます。注文前にメニューのアルコール度数とグラスの大きさを確認しましょう。'],
    ],
  },
  budapest: {
    h: [
      ['국회의사당', 'Parliament Building', '国会議事堂', '다뉴브강변의 대형 네오고딕 건축물. 내부 관람은 정해진 시간의 가이드 또는 오디오 가이드 투어로 진행됩니다.', 'a large Neo-Gothic landmark on the Danube. Interior visits follow a timed guided or audio-guided tour.', 'ドナウ川沿いに建つ大規模なネオゴシック建築。内部見学は指定時刻のガイド付き、または音声ガイド付きツアーで行われます。'],
      ['어부의 요새', "Fisherman's Bastion", '漁夫の砦', '부다 언덕 위 전망 테라스. 강 건너 국회의사당이 정면으로 보입니다.', 'Viewing terraces on Buda hill facing the Parliament across the river.', 'ブダの丘の展望テラス。対岸の国会議事堂が正面に見えます。'],
      ['세체니 온천', 'Széchenyi Thermal Bath', 'セーチェーニ温泉', '노천 온천탕이 있는 대형 온천. 겨울에도 야외 탕에서 즐길 수 있습니다.', 'A grand spa with outdoor thermal pools, enjoyed even in winter.', '屋外の温泉プールがある大型温泉。冬も屋外で楽しめます。'],
      ['헝가리 국립미술관(부다 성)', 'Hungarian National Gallery (Buda Castle)', 'ハンガリー国立美術館（ブダ城）', '부다 성 왕궁 건물의 미술관으로, 성 언덕에서 다뉴브강과 국회의사당이 보입니다.', 'Housed in the Buda Castle palace, with views over the Danube and Parliament from the hill.', 'ブダ城の王宮にある美術館で、城の丘からドナウ川と国会議事堂を望めます。'],
    ],
    t: [
      ['밤에 다뉴브강 유람선을 타면 조명이 켜진 국회의사당과 다리를 볼 수 있습니다.', 'An evening Danube cruise shows the Parliament and bridges lit up.', '夜のドナウ川クルーズでライトアップされた国会議事堂と橋が見られます。'],
      ['헝가리 화폐는 포린트입니다. 유로를 받는 곳도 있지만 환율이 불리한 경우가 많습니다.', 'The currency is the forint; some places take euros, but usually at a poor rate.', '通貨はフォリント。ユーロ可の店もありますが、レートが不利なことが多いです。'],
    ],
  },
  cancun: {
    h: [
      ['호텔존 해변', 'Hotel Zone beaches', 'ホテルゾーンのビーチ', '카리브해의 맑은 물빛을 볼 수 있는 긴 해변이 이어집니다.', 'Long beaches with the clear turquoise water of the Caribbean.', 'カリブ海の澄んだ水色が広がる長いビーチが続きます。'],
      ['마야 박물관', 'Maya Museum of Cancún', 'カンクン・マヤ博物館', '마야 유물을 전시하고, 같은 부지에 산 미겔리토 유적이 있습니다.', 'Displays Maya artefacts, with the San Miguelito ruins on the same grounds.', 'マヤの遺物を展示し、同じ敷地にサン・ミゲリート遺跡があります。'],
      ['이슬라 무헤레스', 'Isla Mujeres', 'イスラ・ムヘーレス', '페리로 가는 작은 섬. 북쪽 해변이 잔잔하고 물이 얕습니다.', 'A small island reached by ferry, with calm shallow water at its northern beach.', 'フェリーで行く小さな島。北のビーチは穏やかで遠浅です。'],
    ],
    t: [
      ['칸쿤 호텔존과 시내는 시내버스로 이동할 수 있습니다. 탑승 전 노선과 운행 시간을 확인하세요.', 'City buses connect Cancún\'s Hotel Zone and downtown. Check the route and timetable before boarding.', 'カンクンのホテルゾーンと市街地は路線バスで移動できます。乗車前に路線と時刻を確認しましょう。'],
      ['칸쿤에서 치첸이트사 유적까지 도로로 이동할 수 있습니다. 세노테를 함께 보려면 이동 시간과 각 시설의 운영 시간을 확인하세요.', 'You can reach Chichén Itzá by road from Cancún. If adding a cenote, check travel times and each site\'s opening hours.', 'カンクンからチチェン・イッツァ遺跡へは陸路で行けます。セノーテも巡る場合は、移動時間と各施設の開館時間を確認しましょう。'],
    ],
  },
  'chiang-mai': {
    h: [
      ['도이수텝 사원', 'Wat Phra That Doi Suthep', 'ドイ・ステープ寺院', '산 위 황금 탑이 있는 사원. 계단을 올라가면 시내가 내려다보입니다.', 'A mountain temple with a golden stupa and views over the city from the top of its stairs.', '山の上に黄金の仏塔がある寺院。階段を上ると市内が見渡せます。'],
      ['구시가지 사원들', 'Old City temples', '旧市街の寺院', '해자로 둘러싸인 구시가지 안에 왓 프라싱·왓 체디루앙 등 옛 사원이 모여 있습니다.', 'Inside the moated Old City are temples such as Wat Phra Singh and Wat Chedi Luang.', '堀に囲まれた旧市街にワット・プラシンやワット・チェディルアンなどの古寺が集まります。'],
      ['선데이 워킹 스트리트', 'Sunday Walking Street', 'サンデーウォーキングストリート', '일요일 저녁 구시가지 중심 거리에 열리는 야시장입니다.', 'A night market that fills the main Old City street on Sunday evenings.', '日曜の夕方、旧市街のメイン通りで開かれるナイトマーケットです。'],
      ['엘리펀트 네이처 파크', 'Elephant Nature Park', 'エレファント・ネイチャー・パーク', '구조된 코끼리를 보호하는 시설로, 코끼리 타기 없이 관찰과 먹이 주기 위주로 방문합니다. 예약제입니다.', 'A sanctuary for rescued elephants; visits focus on watching and feeding, with no riding. Booking required.', '保護されたゾウの施設で、乗象なしで観察や餌やりが中心です。予約制です。'],
    ],
    t: [
      ['시내 이동은 붉은 합승 트럭(썽태우)이 편합니다. 타기 전에 목적지를 말하고 요금을 정하세요.', 'Red shared trucks (songthaew) are the easy way around; agree the destination and fare first.', '市内移動は赤い乗り合いトラック（ソンテウ）が便利。乗る前に行き先と料金を決めましょう。'],
      ['2~4월은 산불 연기로 공기가 탁해지는 경우가 있으니 마스크를 챙기세요.', 'February to April can bring smoky haze from burning; pack a mask.', '2〜4月は野焼きの煙で空気が悪くなることがあるので、マスクを持参しましょう。'],
    ],
  },
  'da-lat': {
    h: [
      ['쑤언흐엉 호수', 'Xuan Huong Lake', 'スアンフーン湖', '시내 한가운데 호수. 산책하거나 자전거를 타기 좋습니다.', 'The lake at the centre of town, good for walks and cycling.', '市の中心にある湖。散歩やサイクリングに向いています。'],
      ['달랏 야시장', 'Da Lat Night Market', 'ダラット・ナイトマーケット', '저녁이면 시장 주변에 길거리 음식 노점이 들어섭니다.', 'Street-food stalls gather around the market in the evening.', '夕方から市場周辺に屋台が並びます。'],
      ['크레이지 하우스', 'Crazy House', 'クレイジーハウス', '동화 속 나무집처럼 지은 독특한 건축물입니다.', 'A whimsical building designed like a fairy-tale tree house.', 'おとぎ話のツリーハウスのような独特の建物です。'],
    ],
    t: [
      ['고원 도시라 아침저녁이 쌀쌀합니다. 얇은 겉옷을 꼭 챙기세요.', 'It is a highland town with cool mornings and evenings; bring a light jacket.', '高原の街なので朝晩は肌寒いです。薄手の上着を必ず持参しましょう。'],
      ['달랏의 시장에서는 고원 특산물인 딸기 가공품과 아티초크차를 찾아보세요.', 'Look for highland specialties such as strawberry products and artichoke tea at Da Lat\'s markets.', 'ダラットの市場では、高原の特産品であるイチゴ加工品やアーティチョーク茶を探してみましょう。'],
    ],
  },
  daegu: {
    h: [
      ['서문시장', 'Seomun Market', '西門市場', '대구에서 가장 큰 전통시장. 야시장이 열리는 날에는 먹거리 노점이 늘어섭니다.', "Daegu's biggest traditional market, with food stalls on night-market days.", '大邱最大の伝統市場。夜市の日には屋台が並びます。'],
      ['김광석 다시그리기길', 'Kim Kwang-seok Street', 'キム・グァンソク通り', '가수 김광석을 기리는 벽화 골목입니다.', 'A mural alley dedicated to the singer Kim Kwang-seok.', '歌手キム・グァンソクを記念した壁画の路地です。'],
      ['근대골목', 'Modern History Alleys', '近代路地', '청라언덕·계산성당 등 근대 건축물이 이어지는 도보 코스입니다.', 'A walking route past early-modern buildings such as Gyesan Cathedral.', '桂山聖堂など近代建築が続く散策コースです。'],
    ],
    t: [
      ['여름이 특히 더운 도시로 알려져 있어, 7~8월에는 한낮 야외 일정을 줄이는 것이 좋습니다.', 'Daegu is known for very hot summers; keep midday outdoor plans light in July and August.', '夏が特に暑い街として知られるので、7〜8月は日中の屋外予定を控えめに。'],
      ['납작만두는 서문시장에서, 곱창·막창 구이는 안지랑 곱창골목에서 찾아보세요.', 'Look for flat dumplings at Seomun Market and grilled gopchang or makchang in Anjirang Gopchang Alley.', '納作餃子（ナプチャクマンドゥ）は西門市場で、コプチャンやマクチャンの焼き物はアンジラン・コプチャン通りで探してみましょう。'],
    ],
  },
};
