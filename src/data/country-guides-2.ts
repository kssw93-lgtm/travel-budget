/** 나라별 알아둘 것·조심할 것 2 — 형식은 country-guides-1.ts 와 같다 */
import type { CountryNote } from './country-guides-1';

export const COUNTRY_2: Record<string, CountryNote> = {
  Canada: {
    tips: [
      ['메뉴판·가격표 가격에는 판매세가 빠져 있어 계산할 때 더해집니다. 식당에서는 팁을 따로 남기는 것이 일반적입니다.', 'Menu and shelf prices exclude sales tax, which is added at the till; tipping in restaurants is customary.', 'メニューや値札の価格には売上税が含まれず、会計時に加算されます。レストランではチップを置くのが一般的です。', 'https://fanvancouver.com/vancouver/tipping/'],
      ['대부분의 상점·대중교통에서 비접촉 카드 결제가 됩니다.', 'Contactless card payment works in most shops and on public transit.', 'ほとんどの店や公共交通でタッチ決済が使えます。', 'https://www.timescolonist.com/bc-news/transit-in-metro-vancouver-accepting-credit-card-tap-payments-4662339'],
    ],
    cautions: [
      ['국립공원이나 산길에서는 곰 같은 야생동물을 만날 수 있으니 안내판 규칙을 지키고 음식을 밖에 두지 마세요.', 'In parks and on trails you may meet bears and other wildlife; follow posted rules and never leave food out.', '国立公園や山道ではクマなどの野生動物に出会うことがあります。掲示のルールを守り、食べ物を外に置かないように。', 'https://www.parks.canada.ca/voyage-travel/conseils-tips/faune-wildlife'],
      ['밴쿠버 다운타운 이스트사이드처럼 일부 도심 구역은 밤에 혼자 걷지 않는 것이 좋습니다.', 'In some inner-city areas such as Vancouver’s Downtown Eastside, avoid walking alone at night.', 'バンクーバーのダウンタウン・イーストサイドなど一部の都心地区は、夜の一人歩きを避けましょう。', 'https://www.smartertravel.com/downtown-eastside-vancouver-warnings-dangers/'],
    ],
  },
  'New Zealand': {
    tips: [
      ['자외선이 매우 강해 흐린 날에도 선크림과 모자를 챙기세요.', 'UV is very strong, even on cloudy days; bring sunscreen and a hat.', '紫外線がとても強いので、曇りの日も日焼け止めと帽子を。', 'https://www.sunsmart.org.nz/assets/UV-Index-Flyer-July-2025.pdf'],
      ['차는 왼쪽으로 다니므로 길을 건널 때 오른쪽을 먼저 보세요.', 'Traffic drives on the left, so look right first when crossing.', '車は左側通行なので、道を渡るときはまず右を確認しましょう。', 'https://www.nzta.govt.nz/resources/roadcode/about-driving/keeping-left/'],
    ],
    cautions: [
      ['산과 해안의 날씨는 급변할 수 있습니다. 트레킹 전 MetService 예보·경보를 확인하고 방수 옷을 준비하세요.', 'Mountain and coastal weather can change quickly. Check MetService forecasts and warnings before a hike, and carry waterproof clothing.', '山や海岸の天気は急変することがあります。トレッキング前にMetServiceの予報・警報を確認し、防水の服を用意しましょう。', 'https://about.metservice.com/roles-and-responsibilities'],
    ],
  },
  China: {
    tips: [
      ['현지 결제는 알리페이·위챗페이가 기본이라 출국 전에 해외 카드를 연결해 두면 편합니다. 현금도 조금 챙기세요.', 'Payment runs on Alipay and WeChat Pay; link a foreign card before you fly and carry some cash too.', '支払いはアリペイ・WeChat Payが基本なので、出発前に海外カードを登録しておくと便利です。現金も少し用意を。', 'https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html'],
      ['Google 등 일부 해외 서비스는 중국 본토에서 이용할 수 없을 수 있으므로 지도와 연락 수단을 미리 준비하세요.', 'Some overseas services, including Google services, may be unavailable in mainland China; prepare maps and communication options in advance.', 'Googleなどの一部海外サービスは中国本土で利用できないことがあります。地図や連絡手段を事前に準備しましょう。', 'https://www.gov.uk/foreign-travel-advice/china/safety-and-security'],
    ],
    cautions: [
      ['지하철과 일부 관광지에서는 보안 검색을 할 수 있으니 현장 안내를 따르고 이동 시간을 여유 있게 잡으세요.', 'Security screening may take place at metro stations and some attractions; follow instructions and allow extra time.', '地下鉄駅や一部の観光施設では保安検査が行われることがあります。案内に従い、移動時間に余裕を持ちましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/189/detail'],
      ['관광지 주변에서 먼저 말을 걸며 찻집이나 미술 전시로 데려가는 사람은 바가지 수법일 수 있습니다.', 'Friendly strangers near sights inviting you to a tea house or art show may be running a rip-off.', '観光地で話しかけて茶館や美術展へ誘う人は、ぼったくりの手口のことがあります。', 'https://www.0404.go.kr/ntnSafetyInfo/189/detail'],
    ],
  },
  Netherlands: {
    tips: [
      ['대중교통은 운영사 안내를 확인하고, 비접촉 결제가 지원되면 승차·하차 때 같은 카드를 태그하세요.', 'Check the operator’s guidance; where contactless is accepted, use the same card to check in and out.', '交通機関では、利用する会社の案内を確認し、対応するカードなら乗車時と降車時に同じカードをタッチしてください。', 'https://www.ovpay.nl/en/'],
      ['많은 가게가 카드만 받고 현금을 받지 않는 경우도 있습니다.', 'Many places are card-only and some refuse cash altogether.', 'カードのみで現金を受け付けない店も多くあります。', 'https://www.remitly.com/blog/travel/what-is-used-most-in-netherlands-cash-or-card/'],
    ],
    cautions: [
      ['자전거 도로를 걷거나 확인 없이 가로지르지 마세요. 자전거 통행을 방해해 충돌할 수 있습니다.', 'Do not walk along cycle lanes or step across them without checking; this can obstruct cyclists and cause collisions.', '自転車道を歩いたり、横切る前に確認せずに進んだりしないでください。自転車の通行を妨げるおそれがあります。', 'https://www.0404.go.kr/ntnSafetyInfo/21/detail'],
      ['관광객이 많은 역과 트램 안에서는 소매치기가 잦으니 가방을 앞으로 메세요.', 'Pickpockets work busy stations and trams; wear your bag in front.', '観光客の多い駅やトラムではスリが多いので、バッグは前に持ちましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/21/detail'],
    ],
  },
  Greece: {
    tips: [
      ['여름 더위에 대비해 공식 폭염 정보를 확인하고, 야외 유적 관람은 더운 시간을 피해 계획하세요.', 'During summer, check official heat alerts and plan outdoor archaeological visits to avoid the hottest periods.', '夏の暑さに備え、気温や熱波に関する公式情報を確認し、屋外の遺跡観光は暑さを避けて計画しましょう。', 'https://civilprotection.gov.gr/en/odigies-prostasias/kaysonas?lang=en'],
      ['식당에서 빵과 물이 자리 요금처럼 계산서에 붙는 경우가 있으니 메뉴판을 확인하세요.', 'Bread and water can appear on the bill as a cover; check the menu.', 'パンや水が席料のように会計に加わることがあるので、メニューを確認しましょう。', 'https://www.smartertravel.com/tipping-in-greece-the-greece-tipping-guide/'],
    ],
    cautions: [
      ['아테네 지하철, 특히 공항·관광지 노선에서는 소매치기를 조심하세요.', 'Watch for pickpockets on the Athens metro, especially the airport and tourist lines.', 'アテネの地下鉄、特に空港や観光地の路線ではスリに注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/11/detail'],
      ['유적지의 대리석 길은 매우 미끄러우니 밑창이 단단한 신발을 신으세요.', 'Marble paths at ancient sites are very slippery; wear shoes with good grip.', '遺跡の大理石の道はとても滑りやすいので、滑りにくい靴を履きましょう。', 'https://sofiaadventures.com/mistakes-visiting-the-acropolis/'],
    ],
  },
  Croatia: {
    tips: [
      ['성수기(여름)에는 구시가지가 크루즈 관광객으로 붐비니 이른 아침이나 저녁에 둘러보세요.', 'In summer the old towns fill with cruise crowds; explore early morning or evening.', '夏の繁忙期は旧市街がクルーズ客で混むので、早朝か夕方に回りましょう。', 'https://www.responsibletravel.com/holidays/dubrovnik/travel-guide/avoid-the-crowds-in-dubrovnik'],
      ['해변은 자갈이 많아 물놀이 신발이 있으면 편합니다.', 'Beaches are mostly pebbly, so water shoes help.', 'ビーチは小石が多いので、マリンシューズがあると便利です。', 'https://www.croatiatraveller.com/Practicalities/Water-Shoes.html'],
    ],
    cautions: [
      ['구시가지 성벽과 돌계단은 그늘이 적고 미끄러워, 한낮 더위와 발밑을 조심하세요.', 'City walls and stone steps have little shade and get slippery; mind the midday heat and your footing.', '城壁や石段は日陰が少なく滑りやすいので、日中の暑さと足元に注意を。', 'https://happytowander.com/avoid-crowds-dubrovnik/'],
      ['스플리트·두브로브니크 등은 해변이 아닌 시내에서 수영복 차림이나 웃통을 벗고 다니면 벌금을 물릴 수 있습니다.', 'Split, Dubrovnik and other towns fine people walking the streets in swimwear or shirtless.', 'スプリットやドゥブロヴニクなどでは、ビーチ以外の市内を水着や上半身裸で歩くと罰金になることがあります。', 'https://www.croatiaweek.com/dubrovnik-tourists-face-fines-for-walking-streets-in-swimwear/'],
    ],
  },
  'United States': {
    tips: [
      ['가격표에는 판매세가 빠져 있고, 식당에서는 팁을 따로 남기는 것이 관행입니다.', 'Shelf prices exclude sales tax, and leaving a tip in restaurants is expected.', '値札には売上税が含まれず、レストランではチップを置くのが慣習です。', 'https://www.ytravelblog.com/tipping-in-usa/'],
      ['LA처럼 넓게 퍼진 도시는 대중교통으로 닿기 어려운 명소가 많아 차량 호출 앱을 함께 쓰게 됩니다.', 'Spread-out cities such as LA have many sights that are hard to reach by transit, so ride-hailing apps help.', 'LAのように広い都市は公共交通で行きにくい名所が多く、配車アプリを併用することになります。', 'https://www.kayak.com/Los-Angeles.16078.guide/getting-around-los-angeles'],
    ],
    cautions: [
      ['차 안에 가방·물건을 보이게 두면 차량 털이가 잦으니 아무것도 남기지 마세요.', 'Car break-ins are common; never leave bags or anything visible in a parked car.', '車上荒らしが多いので、駐車した車内に荷物を見える状態で置かないように。', 'https://www.0404.go.kr/ntnSafetyInfo/69/detail'],
      ['늦은 밤에는 걸어서 이동하기보다 택시나 차량 호출로 숙소까지 가는 것이 안전합니다.', 'Late at night, take a taxi or ride-hail back to your hotel rather than walking.', '夜遅くは歩くより、タクシーや配車アプリで宿まで戻るほうが安全です。', 'https://thebettervacation.com/travel-tips/is-chicago-safe/amp/'],
    ],
  },
  Malaysia: {
    tips: [
      ['말레이시아에서 Grab 차량 호출 서비스를 이용할 수 있지만, 승차 위치와 차량 정보를 앱에서 확인하세요.', 'Grab ride-hailing is available in Malaysia; confirm the pickup point and vehicle details in the app.', 'マレーシアではGrabの配車サービスを利用できます。アプリで乗車場所と車両情報を確認しましょう。', 'https://www.grab.com/my/transport/'],
      ['이슬람 사원에 방문할 때는 어깨·팔·다리를 가리는 단정한 옷을 입고, 신발을 벗는 등 현장 규칙을 따르세요.', 'When visiting a mosque, dress modestly with shoulders, arms and legs covered, remove shoes, and follow site rules.', 'モスクを訪れる際は肩・腕・脚を覆う服装にし、靴を脱ぐなど現地のルールに従ってください。', 'https://www.malaysia.travel/explore/putra-mosque'],
    ],
    cautions: [
      ['오토바이 날치기가 있으니 가방은 차도 반대쪽으로 메고 다니세요.', 'Bag snatching from motorbikes happens; carry your bag on the side away from traffic.', 'バイクによるひったくりがあるので、バッグは車道と反対側に持ちましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/56/detail'],
      ['오후에 갑자기 쏟아지는 열대성 소나기가 잦아 우산을 늘 챙기세요.', 'Sudden tropical downpours are common in the afternoon; always carry an umbrella.', '午後に突然のスコールが多いので、傘を常に持ちましょう。', 'https://sg.trip.com/guide/info/best-time-to-visit-kuala-lumpur.html'],
    ],
  },
  Italy: {
    tips: [
      ['바에서 서서 마시는 커피와 테이블에 앉아 마시는 커피는 값이 다를 수 있습니다.', 'Coffee drunk standing at the bar can cost less than at a table.', 'バールで立って飲むコーヒーと席で飲むコーヒーは値段が違うことがあります。', 'https://italyhandbook.com/how-to-order-coffee-in-italy-like-a-local/'],
      ['기차표는 탑승 전에 개찰(검인)이 필요한 종류가 있으니 표에 적힌 안내를 확인하세요.', 'Some paper train tickets must be validated before boarding; check what your ticket says.', '一部の紙の切符は乗車前に刻印が必要なので、切符の案内を確認しましょう。', 'https://cinqueterre.eu.com/en/cinque-terre-how-to-validate-train-ticket'],
    ],
    cautions: [
      ['로마·피렌체·베네치아 관광지와 대중교통에서는 소매치기가 매우 잦습니다.', 'Pickpocketing is very common at sights and on transit in Rome, Florence and Venice.', 'ローマ・フィレンツェ・ヴェネツィアの観光地や公共交通ではスリが非常に多いです。', 'https://www.0404.go.kr/ntnSafetyInfo/179/detail'],
      ['일부 도시 중심부는 허가 차량만 들어갈 수 있는 구역(ZTL)이라 렌터카로 들어가면 벌금이 나옵니다.', 'Many historic centres are limited-traffic zones (ZTL); driving in with a rental car brings fines.', '多くの歴史地区は進入制限区域（ZTL）で、レンタカーで入ると罰金になります。', 'https://www.covingtontravel.com/2016/11/avoid-italys-ztl-restricted-driving-zones/'],
    ],
  },
  Spain: {
    tips: [
      ['스페인은 다른 여러 나라보다 식사 시간이 늦은 편이지만 식당별 영업시간은 다르므로 방문 전에 확인하세요.', 'Meal times in Spain tend to be later than in many countries, but opening hours vary by restaurant; check before visiting.', 'スペインでは食事の時間が他国より遅い傾向がありますが、店によって営業時間は異なります。訪問前に確認しましょう。', 'https://www.spain.info/en/about-spain/'],
      ['주요 성당·궁전은 시간 지정 예약제라 온라인 공식 판매처에서 미리 사 두는 것이 좋습니다.', 'Major monuments use timed entry; buy ahead from the official site.', '主要な聖堂や宮殿は時間指定制なので、公式サイトで事前購入がおすすめです。', 'https://thebettervacation.com/granada/alhambra-palace-official-website/'],
    ],
    cautions: [
      ['바르셀로나 람블라스 거리·지하철과 마드리드 솔 광장 주변은 소매치기가 매우 많습니다.', 'Pickpockets are rife on Las Ramblas and the Barcelona metro, and around Madrid’s Puerta del Sol.', 'バルセロナのランブラス通りや地下鉄、マドリードのソル広場周辺はスリが非常に多いです。', 'https://www.0404.go.kr/ntnSafetyInfo/128/detail'],
      ['테라스 자리에서 휴대폰을 테이블 위에 두면 순식간에 가져가는 경우가 있습니다.', 'Phones left on terrace tables can vanish in seconds.', 'テラス席でテーブルに携帯を置くと、一瞬で盗られることがあります。', 'https://barcelonaurbana.com/en/blog/barcelona-safety-guide'],
    ],
  },
  Kazakhstan: {
    tips: [
      ['현지 차량 호출 앱(Yandex Go 등)으로 택시를 부르면 요금이 미리 정해져 편합니다.', 'Local ride-hailing apps such as Yandex Go give fixed fares upfront.', '現地の配車アプリ（Yandex Goなど）を使うと料金が事前に決まり便利です。', 'https://www.airporttransferportal.com/es/airport-guides/ala/taxi-vs-transfer'],
      ['러시아어가 널리 쓰여 번역 앱을 준비하면 메뉴와 표지판을 읽기 쉽습니다.', 'Russian is widely used; a translation app helps with menus and signs.', 'ロシア語が広く使われるので、翻訳アプリがあるとメニューや標識が読みやすくなります。', 'https://welcome.kz/en/info-cities/almaty/info-about-almaty'],
    ],
    cautions: [
      ['겨울에는 영하로 크게 내려가고 길이 얼어 미끄러우니 미끄럼 방지 신발과 방한복을 챙기세요.', 'Winters drop well below freezing with icy pavements; bring grippy boots and warm layers.', '冬は氷点下を大きく下回り道が凍るので、滑りにくい靴と防寒着を。', 'https://www.0404.go.kr/ntnSafetyInfo/201/detail'],
    ],
  },
  Uzbekistan: {
    tips: [
      ['도시 간 이동은 고속열차가 편하지만 성수기에는 표가 빨리 매진되니 미리 예매하세요.', 'High-speed trains link the cities but sell out in peak season; book early.', '都市間は高速鉄道が便利ですが、繁忙期は早く売り切れるので事前予約を。', 'https://eurasia.travel/uzbekistan/transport/uzbekistan-railways/book-tickets/'],
      ['모스크·성지를 방문할 때 시설별 복장 규칙을 확인하고, 필요하면 어깨·무릎을 가리는 옷과 스카프를 준비하세요.', 'Check dress rules at mosques and sacred sites; bring clothing that covers your shoulders and knees, and a scarf if required.', 'モスクや聖地では施設ごとの服装ルールを確認し、必要に応じて肩や膝を覆う服やスカーフを用意しましょう。', 'https://uzbekistan.travel/en/i/travel-tips/'],
    ],
    cautions: [
      ['시장과 택시는 가격을 미리 확인하거나 흥정하고, 미터기 없는 택시는 출발 전에 요금을 정하세요.', 'Agree prices at markets and fix taxi fares before setting off if there is no meter.', '市場やタクシーは事前に値段を確認し、メーターのないタクシーは出発前に料金を決めましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/168/detail'],
      ['여름 한낮 기온이 매우 높아 오후 야외 관광은 피하고 물을 자주 마시세요.', 'Summer afternoons are extremely hot; avoid outdoor sightseeing then and drink plenty of water.', '夏の日中は非常に暑いので、午後の屋外観光は避け、水をこまめに飲みましょう。', 'https://uzbekistan.travel/en/i/travel-tips/'],
    ],
  },
  Georgia: {
    tips: [
      ['현지 차량 호출 앱(Bolt 등)을 쓰면 택시 요금을 흥정하지 않아도 됩니다.', 'Ride-hailing apps such as Bolt save you from haggling taxi fares.', '配車アプリ（Boltなど）を使えばタクシー料金の交渉が不要です。', 'https://travelvient.com/packing-list/tbilisi-georgia/'],
      ['교회에 들어갈 때 여성은 머리를 가리고 치마를 두르는 것이 예절이며, 입구에서 빌려주는 곳도 있습니다.', 'Women cover their hair and wear a skirt in churches; wraps are often lent at the door.', '教会では女性は髪を覆いスカートを着用するのが礼儀で、入口で貸してくれる所もあります。', 'https://madloba.info/en/faq/holidays-and-traditions/what-to-wear-in-georgia/'],
    ],
    cautions: [
      ['트빌리시 구시가지는 언덕과 울퉁불퉁한 돌길이 많아 편한 신발이 필요합니다.', 'Tbilisi’s old town is hilly with uneven cobbles; wear comfortable shoes.', 'トビリシ旧市街は坂と凸凹の石畳が多いので、歩きやすい靴が必要です。', 'https://travelvient.com/packing-list/tbilisi-georgia/'],
      ['운전이 거칠어 길을 건널 때는 신호가 있어도 차를 확인하세요.', 'Driving can be aggressive; check for cars even at a green crossing.', '運転が荒いので、信号があっても車を確認して渡りましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/332/detail'],
    ],
  },
  Mexico: {
    tips: [
      ['식당에서는 팁을 따로 남기는 것이 일반적이니 계산서에 포함됐는지 확인하세요.', 'Tipping in restaurants is customary; check whether it is already on the bill.', 'レストランではチップを置くのが一般的なので、会計に含まれているか確認しましょう。', 'https://www.mexpro.com/blog/how-to-tip-mexico/'],
      ['관광지에서는 가격을 페소와 달러로 함께 적는 곳이 많으니 어느 통화인지 확인하고, 팁은 페소로 주는 편이 좋습니다.', 'Tourist areas often list prices in both pesos and dollars, so confirm the currency, and tip in pesos.', '観光地ではペソとドルの両方で価格を表示する店が多いので通貨を確認し、チップはペソで渡しましょう。', 'https://www.mexpro.com/blog/how-to-tip-mexico/'],
    ],
    cautions: [
      ['멕시코에서는 생수를 마시고, 수돗물은 마시지 않는 편이 안전합니다.', 'Drink bottled water in Mexico; it is safer not to drink tap water.', 'メキシコではボトル入りの水を飲み、水道水は飲まないほうが安全です。', 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/mexico'],
      ['지역별 치안 상황이 다르므로 야간 이동 전에는 외교부의 지역별 안전 안내를 확인하고 이동 수단을 미리 정하세요.', 'Safety conditions vary by area. Check official regional advice before travelling at night and plan your transport in advance.', '地域によって治安状況が異なるため、夜間の移動前に外務省の地域別安全情報を確認し、移動手段を決めておきましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/58/detail'],
    ],
  },
  Denmark: {
    tips: [
      ['대부분 카드로 결제해 현금이 거의 필요 없습니다.', 'Almost everything is paid by card, so you rarely need cash.', 'ほぼカード払いなので、現金はほとんど必要ありません。', 'https://www.travelgo.gr/en/travel-tips/502239/10-things-you-need-know-visiting-copenhagen'],
      ['수돗물이 깨끗해 그냥 마셔도 됩니다. 물병을 채워 다니세요.', 'Tap water is safe and good; refill a bottle as you go.', '水道水は安全なので、ボトルに入れて持ち歩きましょう。', 'https://www.studieskolen.dk/en/danish/danish-courses/summer-course/practical-information-about-denmark-and-copenhagen'],
    ],
    cautions: [
      ['자전거가 많아 자전거 도로를 걷거나 갑자기 멈추면 위험합니다.', 'Bikes are everywhere; walking in or stopping suddenly on cycle lanes is dangerous.', '自転車が多いので、自転車道を歩いたり急に止まったりすると危険です。', 'https://uniavisen.dk/en/surviving-copenhagen-a-guide/'],
      ['겨울에는 해가 짧아 오후 일찍 어두워지니 일정을 낮 시간에 맞추세요.', 'Winter days are short and dark by mid-afternoon; plan sights around daylight.', '冬は日が短く午後早くに暗くなるので、日中に予定を組みましょう。', 'https://uniavisen.dk/en/surviving-copenhagen-a-guide/'],
      ['코펜하겐 중심가·공항·중앙역과 혼잡한 대중교통에서는 소매치기를 조심하고 소지품을 눈에 띄게 두지 마세요.', 'Watch for pickpockets in central Copenhagen, the airport, the central station and crowded public transport; keep valuables out of sight.', 'コペンハーゲン中心部・空港・中央駅や混雑した公共交通ではスリに注意し、貴重品を見える所に置かないでください。', 'https://www.0404.go.kr/ntnSafetyInfo/31/detail'],
    ],
  },
  Sweden: {
    tips: [
      ['현금을 받지 않는 가게가 많아 카드나 모바일 결제를 준비하세요.', 'Many places refuse cash; have a card or mobile payment ready.', '現金不可の店が多いので、カードかモバイル決済を用意しましょう。', 'https://www.riksbank.se/en-gb/payments--cash/payments-in-sweden/payments-in-sweden-2019/the-payment-market-is-being-digitalised/cash-use-in-constant-decline/why-are-we-no-longer-using-cash/'],
      ['상점과 약국에서 번호표를 뽑고 차례를 기다리는 문화가 있습니다.', 'Take a queue ticket in shops and pharmacies and wait to be called.', '店や薬局では番号札を取って順番を待つ文化があります。', 'https://www.oru.se/english/about-us/life-in-orebro-and-sweden/social-guide/'],
    ],
    cautions: [
      ['Systembolaget은 일부 주류를 판매하는 국영 소매점이지만, 모든 주류가 그곳에서만 판매되는 것은 아닙니다. 필요한 상품과 영업시간은 공식 사이트에서 확인하세요.', 'Systembolaget is the state-owned retailer for certain alcoholic drinks, but not every alcoholic beverage is sold exclusively there. Check product availability and opening hours on its official site.', 'Systembolagetは一部のアルコール飲料を扱う国営小売店ですが、すべての酒類が同店限定ではありません。商品と営業時間は公式サイトで確認してください。', 'https://www.systembolaget.se/en/about-systembolaget/'],
      ['관광객이 많은 역과 시내 중심에서는 소지품을 잘 챙기세요.', 'Keep an eye on belongings at busy stations and in the city centre.', '観光客の多い駅や中心街では持ち物に注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/126/detail'],
    ],
  },
  Finland: {
    tips: [
      ['공공 사우나와 시설마다 수영복 등 이용 규칙이 다르므로 방문 전에 시설 안내를 확인하세요.', 'Rules on swimwear and other clothing vary between public saunas and facilities; check the venue’s guidance before visiting.', '公共サウナや施設によって水着などの利用ルールが異なるため、訪問前に施設の案内を確認しましょう。', 'https://www.visitfinland.com/en/things-to-do/sauna/'],
      ['수돗물이 깨끗해 그대로 마실 수 있습니다.', 'Tap water is clean and drinkable.', '水道水はきれいでそのまま飲めます。', 'https://www.visitfinland.com/en/articles/guide-to-finnish-drinks-and-beverages/'],
    ],
    cautions: [
      ['겨울에는 매우 춥고 길이 얼어 미끄러우니 미끄럼 방지 신발과 장갑·모자를 챙기세요.', 'Winters are very cold with icy streets; bring grippy shoes, gloves and a hat.', '冬はとても寒く道が凍るので、滑りにくい靴と手袋・帽子を。', 'https://www.myhelsinki.fi/visit/how-to-survive-helsinki-winter-7-tips/'],
      ['알코올 판매처와 영업시간은 상품·매장에 따라 다르므로 구매 전에 Alko 공식 안내를 확인하세요.', 'Alcohol availability and opening hours vary by product and shop; check Alko’s official information before planning a purchase.', 'アルコールの販売場所や営業時間は商品・店舗によって異なるため、購入前にAlkoの公式案内を確認してください。', 'https://www.alko.fi/en/alko-inc/about-alko/responsible-sale-of-alcoholic-beverages'],
    ],
  },
  Poland: {
    tips: [
      ['식당 팁은 의무가 아니지만, 서비스가 좋았다면 조금 남기는 경우가 많습니다.', 'Tipping is not required, but leaving a little for good service is common.', 'チップは義務ではありませんが、良いサービスには少し置くことが多いです。', 'https://www.hellocracow.com/krakow-tourist-mistakes-to-avoid'],
      ['트램·버스표는 탄 뒤 안의 단말기에서 개찰해야 하는 종류가 있습니다.', 'Some tram and bus tickets must be validated in the machine once on board.', 'トラムやバスの切符は、乗車後に車内の機械で刻印が必要なものがあります。', 'https://www.inyourpocket.com/krakow/joka_17001v'],
    ],
    cautions: [
      ['길에서 환전을 권하는 사람이나 환율이 크게 좋다는 환전소는 수수료가 높은 경우가 많습니다.', 'Street money changers and booths with “great rates” often hide steep fees.', '路上の両替や「好レート」をうたう両替所は手数料が高いことが多いです。', 'https://www.isitsafetovisit.com/cities/krakow'],
      ['일부 바·클럽에서 계산서에 터무니없는 금액이 붙는 사기가 있으니 주문 전에 가격을 확인하세요.', 'Some bars inflate bills; confirm prices before ordering.', '一部のバーで法外な会計を請求する詐欺があるので、注文前に値段を確認しましょう。', 'https://www.isitsafetovisit.com/cities/krakow'],
    ],
  },
  Ireland: {
    tips: [
      ['날씨가 자주 바뀌니 하루에도 여러 번 비가 올 수 있다고 생각하고 방수 겉옷을 챙기세요.', 'Weather changes constantly; expect showers several times a day and pack a waterproof.', '天気がよく変わるので、1日に何度も雨が降ると思って防水の上着を。', 'https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-ireland'],
    ],
    cautions: [
      ['차는 왼쪽으로 다니니 길을 건널 때 양쪽을 모두 확인하세요.', 'Traffic drives on the left; look both ways before crossing.', '車は左側通行なので、道を渡るときは左右を必ず確認しましょう。', 'https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-ireland'],
      ['해안 절벽 산책로는 바람이 강하고 가장자리가 무너질 수 있어 안전선 안쪽으로 다니세요.', 'Cliff paths are windy and edges can crumble; stay behind the barriers.', '海岸の崖の遊歩道は風が強く縁が崩れることがあるので、柵の内側を歩きましょう。', 'https://www.travelextra.ie/an-branan-mor-sea-stack-collapses-at-cliffs-of-moher/'],
    ],
  },
  Belgium: {
    tips: [
      ['프랑스어와 네덜란드어를 함께 쓰는 나라라 같은 곳도 이름이 두 가지로 표시됩니다.', 'Signs use both French and Dutch, so the same place can have two names.', 'フランス語とオランダ語を併用する国なので、同じ場所でも名前が二つ表示されます。', 'https://www.belgium.be/en/about_belgium/country/languages'],
      ['식당 계산서에는 봉사료가 포함되어 팁은 선택입니다.', 'Service is included in restaurant bills, so tipping is optional.', 'レストランの会計にはサービス料が含まれるので、チップは任意です。', 'https://www.smartertravel.com/tipping-in-belgium-the-belgium-tipping-guide/'],
    ],
    cautions: [
      ['브뤼셀 중앙역·남역 주변과 지하철에서는 소매치기를 조심하세요.', 'Watch for pickpockets around Brussels Central and Midi stations and on the metro.', 'ブリュッセル中央駅・南駅周辺や地下鉄ではスリに注意しましょう。', 'https://brusselstimes.com/209360/brussels-police-warns-of-pickpocketing-in-city-centre'],
    ],
  },
  Iceland: {
    tips: [
      ['거의 모든 곳에서 카드를 받아 현금이 거의 필요 없습니다. 신용카드도 PIN을 요구하는 경우가 많으니 미리 확인하세요.', 'Cards are accepted almost everywhere, but terminals often ask for a PIN even on credit cards.', 'ほぼどこでもカードが使えますが、クレジットカードでもPINを求められることが多いので確認を。', 'https://wise.com/gb/blog/cash-or-card-in-iceland'],
      ['수돗물이 깨끗해 생수를 살 필요가 없습니다.', 'Tap water is excellent; no need to buy bottled water.', '水道水がきれいなので、ミネラルウォーターを買う必要はありません。', 'https://www.funiceland.is/facts/travel-guide/useful-information/'],
    ],
    cautions: [
      ['검은 모래 해변(레이니스피아라 등)은 갑자기 큰 파도가 덮쳐 사고가 나니 바다에 가까이 가지 마세요.', 'Sneaker waves at black-sand beaches like Reynisfjara are deadly; keep well back from the water.', 'レイニスファラなどの黒砂海岸は突然大波が来て事故が起きるので、海に近づかないように。', 'https://www.visiticeland.com/article/reynisfjara-black-sand-beach-is-dangerous/'],
      ['날씨와 도로 상황이 빠르게 바뀌니 운전·트레킹 전에 공식 기상·도로 정보를 확인하세요.', 'Weather and road conditions change fast; check official forecasts and road status before driving or hiking.', '天気や道路状況が急変するので、運転やトレッキング前に公式の気象・道路情報を確認しましょう。', 'https://www.visitreykjavik.is/safe-travel'],
    ],
  },
  Türkiye: {
    tips: [
      ['이스탄불카드는 대중교통 결제에 쓰이지만, 노선·운영사별 적용 여부는 현장 안내를 확인하세요.', 'Istanbulkart is used to pay for public transport, but check local guidance for coverage by route and operator.', 'イスタンブールカードは公共交通の支払いに使えますが、路線や運営会社ごとの対応状況は現地案内を確認してください。', 'https://www.iett.istanbul/'],
      ['모스크에서는 신발을 벗고, 여성은 머리를 가리며 기도 시간에는 관람이 제한됩니다.', 'At mosques remove shoes, women cover their hair, and visits pause at prayer times.', 'モスクでは靴を脱ぎ、女性は髪を覆い、礼拝の時間は見学が制限されます。', 'https://turkeytravelplanner.com/Religion/mosque_etiquette.html'],
    ],
    cautions: [
      ['친근하게 말을 걸며 바·카펫 가게로 데려가는 사람은 바가지 수법일 수 있습니다.', 'Friendly strangers who lead you to a bar or carpet shop may be setting up a rip-off.', '親しげに話しかけてバーや絨毯店に連れて行く人は、ぼったくりの手口のことがあります。', 'https://www.0404.go.kr/ntnSafetyInfo/228/detail'],
      ['택시는 미터기를 켰는지 확인하고, 가능하면 차량 호출 앱을 쓰세요.', 'Make sure taxis run the meter, or use a ride-hailing app where possible.', 'タクシーはメーターが動いているか確認し、できれば配車アプリを使いましょう。', 'https://0404.go.kr/bbs/embsyNtc/1347211/detail?ntnCd=228'],
    ],
  },
  'Hong Kong': {
    tips: [
      ['옥토퍼스 카드 하나로 지하철·버스·페리와 편의점 결제를 모두 할 수 있습니다.', 'One Octopus card covers MTR, buses, ferries and convenience stores.', 'オクトパスカード1枚で地下鉄・バス・フェリーやコンビニ払いができます。', 'https://www.octopus.com.hk/en/consumer/customer-service/faq/get-your-octopus/about-octopus.html'],
      ['현지 식당(차찬텡)은 팁을 기대하지 않고, 계산서에 봉사료가 붙는 곳도 있으니 확인하세요.', 'Local cha chaan tengs don’t expect tips, and some restaurants add a service charge, so check the bill.', 'ローカル食堂（茶餐廳）ではチップは不要で、サービス料が加算される店もあるので会計を確認しましょう。', 'https://www.cathaypacific.com/cx/en_GB/inspiration/travel/guide-tipping-hong-kong.html'],
    ],
    cautions: [
      ['여름~가을에는 태풍이 오면 교통·관광지가 멈출 수 있으니 기상청 경보를 확인하세요.', 'Typhoons in summer and autumn can halt transport and attractions; follow Observatory signals.', '夏から秋は台風で交通や観光地が止まることがあるので、天文台の警報を確認しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/377/detail'],
      ['홍콩 MTR 시설에서는 음식·음료 섭취가 금지되어 있으므로 역과 열차에서 먹거나 마시지 마세요.', 'Eating and drinking are prohibited on Hong Kong MTR premises; do not eat or drink in stations or trains.', '香港のMTR施設内では飲食が禁止されています。駅や車内で食べたり飲んだりしないでください。', 'https://www.mtr.com.hk/en/customer/services/lt_bus_index.html'],
    ],
  },
  Indonesia: {
    tips: [
      ['발리 사원에 들어갈 때는 허리에 두르는 천(사롱)이 필요하며, 입구에서 빌려주는 곳이 많습니다.', 'Bali temples require a sarong around the waist; many lend one at the gate.', 'バリの寺院では腰に巻く布（サロン）が必要で、入口で貸してくれる所が多いです。', 'https://www.indonesia.travel/gb/en/trip-ideas/a-guide-to-the-holy-springs-of-tirta-empul-bali'],
      ['차량 호출 앱(Grab·Gojek)을 쓰면 요금 흥정 없이 이동할 수 있지만, 일부 지역은 호출 차량 진입을 막기도 합니다.', 'Grab and Gojek avoid haggling, though some areas restrict app pickups.', '配車アプリ（Grab・Gojek）で交渉なしに移動できますが、一部地域では乗車が制限されます。', 'https://baliuntold.com/getting-around/online-taxis-grab-and-gojek/'],
    ],
    cautions: [
      ['수돗물은 마시지 말고 생수를 드세요. 얼음과 날음식도 조심하는 것이 좋습니다.', 'Do not drink tap water; take care with ice and raw food too.', '水道水は飲まず、ミネラルウォーターを。氷や生ものにも注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/181/detail'],
      ['원숭이가 많은 사원·숲에서는 안경·모자·휴대폰을 낚아채 가니 가방에 넣어 두세요.', 'Monkeys at temples and forests snatch glasses, hats and phones; keep them in your bag.', 'サルの多い寺院や森では眼鏡・帽子・携帯を奪われるので、バッグにしまいましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/181/detail'],
      ['화산·지진 활동이 발생할 수 있으므로 화산 지역을 방문하기 전 인도네시아 당국의 경보와 출입 제한을 확인하세요.', 'Volcanic and seismic activity can occur; check Indonesian authorities’ alerts and access restrictions before visiting volcanic areas.', '火山・地震活動が起こることがあります。火山地域を訪れる前に、インドネシア当局の警報と立入制限を確認してください。', 'https://magma.esdm.go.id/'],
    ],
  },
  'United Arab Emirates': {
    tips: [
      ['메트로에는 여성·어린이 전용 칸과 프리미엄 칸이 따로 있으니 표지판을 확인하세요.', 'The metro has women-and-children and premium carriages; check the signs.', '地下鉄には女性・子ども専用車両とプレミアム車両があるので、表示を確認しましょう。', 'https://rta.ae/wps/portal/rta/ae/public-transport/metro/about-metro'],
      ['한낮 야외 활동은 무척 더워, 쇼핑몰과 실내 명소를 낮에, 야외는 저녁에 배치하세요.', 'Midday heat is intense; plan malls and indoor sights for daytime and outdoors for evening.', '日中はとても暑いので、昼はモールや屋内、屋外は夕方に回しましょう。', 'https://www.visitdubai.com/en/plan-your-trip/weather-in-dubai'],
    ],
    cautions: [
      ['허락 없이 사람을 촬영하지 말고 공공장소에서 현지 예절을 지키며 정부의 방문객 안내를 따르세요.', 'Do not photograph people without permission; observe local etiquette in public and follow the government’s guidance for visitors.', '許可なく人を撮影せず、公共の場では現地の礼儀を守り、政府の訪問者向け案内に従ってください。', 'https://u.ae/en/information-and-services/visiting-and-exploring-the-uae/social-responsibility'],
      ['메트로 안 음식·음료 섭취는 금지되어 벌금을 물 수 있습니다.', 'Eating and drinking on the metro is prohibited and fined.', '地下鉄内での飲食は禁止で、罰金の対象です。', 'https://rta.ae/wps/portal/rta/ae/public-transport/metro/about-metro'],
    ],
  },
  Estonia: {
    tips: [
      ['탈린 버스·트램은 비접촉 카드로 차 안에서 바로 표를 살 수 있고, 공항·터미널에서도 1회권과 교통카드를 팝니다.', 'On Tallinn buses and trams you can buy a ticket on board with a contactless bank card; single tickets and travel cards are also sold at the airport and terminals.', 'タリンのバスやトラムはタッチ決済のカードで車内で切符が買え、空港やターミナルでも1回券や交通カードを販売しています。', 'https://isablog.ut.ee/?p=13156'],
      ['유료 명소를 3곳 이상 갈 계획이면 탈린 카드가 유리할 수 있습니다.', 'If you plan to visit three or more paid attractions, the Tallinn Card can pay off.', '有料の名所を3か所以上回るなら、タリンカードがお得になることがあります。', 'https://chasingwhereabouts.com/blog/tallinn-pass-review'],
    ],
    cautions: [
      ['구시가지의 붐비는 곳과 술집에서는 여럿이 짜고 하는 소매치기가 있으니 소지품을 잘 챙기세요.', 'Pickpockets, sometimes working in teams, target crowded parts of the Old Town and its bars; keep valuables secure.', '旧市街の混雑した場所や酒場では、グループでのスリがあるので持ち物に注意しましょう。', 'https://gov.uk/foreign-travel-advice/estonia/safety-and-security'],
      ['일부 술집에서 관광객에게 터무니없는 술값을 받는 경우가 있으니 주문 전에 가격을 확인하세요.', 'Some bars charge tourists exorbitant drink prices; check prices before ordering.', '一部のバーでは観光客に法外な酒代を請求することがあるので、注文前に値段を確認しましょう。', 'https://gov.uk/foreign-travel-advice/estonia/safety-and-security'],
    ],
  },
  Egypt: {
    tips: [
      ['식당·호텔·가이드 등에서 팁(박시시)을 주는 것이 일반적이니 작은 지폐를 넉넉히 챙기세요.', 'Tipping (baksheesh) is expected in restaurants, hotels and on tours, so carry plenty of small notes.', 'レストランやホテル、ガイドなどでチップ（バクシーシ）を渡すのが一般的なので、小額紙幣を多めに。', 'https://www.egypttoursplus.com/tipping-in-egypt/'],
      ['수돗물보다 밀봉된 생수를 마시는 것이 안전합니다.', 'Drink sealed bottled water rather than tap water.', '水道水より未開封のミネラルウォーターを飲むのが安全です。', 'https://intrepidtravel.com/ca/egypt/is-water-safe-to-drink-in-egypt'],
    ],
    cautions: [
      ['피라미드 주변에는 가짜 가이드와 호객꾼이 많으니 공식 매표소에서 표를 사고 낙타·마차는 가격을 먼저 정하세요.', 'Fake guides and touts work around the pyramids; buy tickets at official counters and agree camel or carriage prices first.', 'ピラミッド周辺には偽ガイドや客引きが多いので、公式窓口で切符を買い、ラクダや馬車は先に値段を決めましょう。', 'https://www.inyourpocket.com/egypt/common-egypt-travel-scams-and-how-to-avoid-them_81428f'],
      ['일부 지역은 여행 자제·금지 경보가 있으니 출발 전에 정부 해외안전 안내를 확인하세요.', 'Some regions carry advice against travel; check official government travel advice before you go.', '一部地域には渡航中止・自粛の勧告があるので、出発前に政府の海外安全情報を確認しましょう。', 'https://www.gov.uk/foreign-travel-advice/egypt/safety-and-security'],
    ],
  },
};

