/** 나라별 알아둘 것·조심할 것 2 — 형식은 country-guides-1.ts 와 같다 */
import type { CountryNote } from './country-guides-1';

export const COUNTRY_2: Record<string, CountryNote> = {
  Canada: {
    tips: [
      ['캐나다에서는 판매세가 표시 가격에 포함되거나 계산 때 따로 더해질 수 있으니 영수증을 확인하세요.', 'Sales tax may be included in the displayed price or added separately; check your receipt.', 'カナダでは売上税が表示価格に含まれる場合と別途加算される場合があるため、レシートを確認しましょう。', 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html'],
      ['대부분의 상점·대중교통에서 비접촉 카드 결제가 됩니다.', 'Contactless card payment works in most shops and on public transit.', 'ほとんどの店や公共交通でタッチ決済が使えます。', 'https://www.timescolonist.com/bc-news/transit-in-metro-vancouver-accepting-credit-card-tap-payments-4662339'],
    ],
    cautions: [
      ['국립공원이나 산길에서는 곰 같은 야생동물을 만날 수 있으니 안내판 규칙을 지키고 음식을 밖에 두지 마세요.', 'In parks and on trails you may meet bears and other wildlife; follow posted rules and never leave food out.', '国立公園や山道ではクマなどの野生動物に出会うことがあります。掲示のルールを守り、食べ物を外に置かないように。', 'https://www.parks.canada.ca/voyage-travel/conseils-tips/faune-wildlife'],
      ['캐나다 도시에서는 가방을 방치하지 말고 귀중품과 여권을 안전한 곳에 보관하세요.', 'In Canadian cities, do not leave bags unattended and keep valuables and your passport secure.', 'カナダの都市部ではバッグを放置せず、貴重品やパスポートを安全な場所に保管しましょう。', 'https://www.gov.uk/foreign-travel-advice/canada/safety-and-security'],
    ],
  },
  'New Zealand': {
    tips: [
      ['뉴질랜드에서는 흐린 날에도 자외선에 노출될 수 있으니 자외선 지수를 확인하고 모자·선크림을 챙기세요.', 'In New Zealand, UV exposure is possible on cloudy days. Check the UV index and bring a hat and sunscreen.', 'ニュージーランドでは曇りの日も紫外線を浴びるため、UV指数を確認し、帽子と日焼け止めを用意しましょう。', 'https://www.sunsmart.org.nz/sunsmart-facts/uv-radiation/'],
      ['차는 왼쪽으로 다니므로 길을 건널 때 오른쪽을 먼저 보세요.', 'Traffic drives on the left, so look right first when crossing.', '車は左側通行なので、道を渡るときはまず右を確認しましょう。', 'https://www.nzta.govt.nz/resources/roadcode/about-driving/keeping-left/'],
    ],
    cautions: [
      ['뉴질랜드의 산길 날씨는 빠르게 바뀔 수 있습니다. 트레킹 전에 예보를 확인하고 방수 옷을 챙기세요.', 'Weather on New Zealand mountain trails can change quickly. Check the forecast before hiking and carry waterproof clothing.', 'ニュージーランドの山道では天気が急変することがあります。トレッキング前に予報を確認し、防水の服を持ちましょう。', 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/tararua-forest-park/things-to-do/tracks/kiriwhakapapa-to-blue-range-hut/'],
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
      ['네덜란드 대중교통에서 비접촉 카드로 승차했다면 내릴 때도 같은 카드로 태그하세요. 휴대전화와 실물 카드는 서로 다른 카드로 인식될 수 있습니다.', 'When using contactless payment on Dutch public transport, check out with the same card used to check in. A phone and its physical card may be treated as different cards.', 'オランダの公共交通でタッチ決済カードを使う場合、乗車時と降車時に同じカードを使いましょう。スマートフォンと実物のカードは別のカードとして扱われることがあります。', 'https://www.ns.nl/en/service-and-contact/your-card/faq-about-travelling-with-debit-card'],
      ['네덜란드에서는 대부분의 소매점이 현금을 받지만 일부는 카드 전용입니다. 입구의 결제 안내를 확인하세요.', 'Most Dutch retailers accept cash, but some are card-only; check the payment notice at the entrance.', 'オランダでは多くの小売店で現金が使えますが、カード専用の店もあります。入口の支払い案内を確認しましょう。', 'https://www.dnb.nl/en/general-news/news-2026/cash-acceptance-in-the-netherlands-remains-stable/'],
    ],
    cautions: [
      ['자전거 도로를 걷거나 확인 없이 가로지르지 마세요. 자전거 통행을 방해해 충돌할 수 있습니다.', 'Do not walk along cycle lanes or step across them without checking; this can obstruct cyclists and cause collisions.', '自転車道を歩いたり、横切る前に確認せずに進んだりしないでください。自転車の通行を妨げるおそれがあります。', 'https://www.0404.go.kr/ntnSafetyInfo/21/detail'],
      ['관광객이 많은 역과 트램 안에서는 소매치기가 잦으니 가방을 앞으로 메세요.', 'Pickpockets work busy stations and trams; wear your bag in front.', '観光客の多い駅やトラムではスリが多いので、バッグは前に持ちましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/21/detail'],
    ],
  },
  Greece: {
    tips: [
      ['여름 더위에 대비해 공식 폭염 정보를 확인하고, 야외 유적 관람은 더운 시간을 피해 계획하세요.', 'During summer, check official heat alerts and plan outdoor archaeological visits to avoid the hottest periods.', '夏の暑さに備え、気温や熱波に関する公式情報を確認し、屋外の遺跡観光は暑さを避けて計画しましょう。', 'https://civilprotection.gov.gr/en/odigies-prostasias/kaysonas?lang=en'],
      ['그리스 식당에서는 빵·생수를 동의 없이 제공하고 청구하거나 식기·수저 사용료를 받을 수 없습니다. 주문 내용과 계산서를 확인하세요.', 'Greek restaurants may not charge for bread or bottled water without your consent, or add a cover charge for tableware. Check your order and bill.', 'ギリシャの飲食店では、同意なくパンやボトル水を提供して請求したり、食器類の席料を取ったりできません。注文内容と会計を確認しましょう。', 'https://gge.mindev.gov.gr/tomeas-emporiou/kanones-dieppy/'],
    ],
    cautions: [
      ['아테네 지하철, 특히 공항·관광지 노선에서는 소매치기를 조심하세요.', 'Watch for pickpockets on the Athens metro, especially the airport and tourist lines.', 'アテネの地下鉄、特に空港や観光地の路線ではスリに注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/11/detail'],
      ['유적지의 대리석 길은 매우 미끄러우니 밑창이 단단한 신발을 신으세요.', 'Marble paths at ancient sites are very slippery; wear shoes with good grip.', '遺跡の大理石の道はとても滑りやすいので、滑りにくい靴を履きましょう。', 'https://sofiaadventures.com/mistakes-visiting-the-acropolis/'],
    ],
  },
  Croatia: {
    tips: [
      ['두브로브니크 구시가지는 크루즈선 입항 때 붐빌 수 있습니다. 시 당국의 방문객·입항 안내를 확인하고 방문 시간을 잡으세요.', 'Dubrovnik Old Town can be crowded when cruise ships arrive. Check the city’s visitor and ship-arrival information when planning your visit.', 'ドゥブロヴニク旧市街はクルーズ船の入港時に混雑することがあります。市の訪問者・入港案内を確認して訪問時間を決めましょう。', 'https://www.dubrovnik.hr/vijesti/obavijest-izmjena-plana-dolaska-kruzera-15-listopada%3A-tri-broda-na-vezu-u-luci-gruz-21072'],
      ['두브로브니크 주변에는 자갈 해변도 있으니 해변 바닥을 확인하고 필요하면 물놀이 신발을 챙기세요.', 'Some beaches around Dubrovnik are pebbly. Check the beach surface and bring water shoes if useful.', 'ドゥブロヴニク周辺には小石の浜もあります。浜の状態を確認し、必要ならマリンシューズを用意しましょう。', 'https://visitdubrovnik.hr/wp-content/uploads/2023/10/brosura-en-web.pdf'],
    ],
    cautions: [
      ['두브로브니크 구시가지 등 관광객이 많은 곳에서는 소매치기에 대비해 귀중품을 잘 챙기세요.', 'In busy tourist areas such as Dubrovnik Old Town, secure valuables against pickpockets.', 'ドゥブロヴニク旧市街など観光客の多い場所では、スリに備えて貴重品を管理しましょう。', 'https://www.gov.uk/foreign-travel-advice/croatia/safety-and-security'],
      ['두브로브니크 구시가지에서는 수영복 차림이나 상의를 벗고 걸으면 벌금을 물릴 수 있습니다.', 'In Dubrovnik’s Old Town, walking in swimwear or without a shirt can result in a fine.', 'ドゥブロヴニク旧市街では、水着姿や上半身裸で歩くと罰金を科されることがあります。', 'https://www.dubrovnik.hr/vijesti/nedolicno-odjeveni-posjetitelji-novcano-kaznjeni-15940'],
    ],
  },
  'United States': {
    tips: [
      ['미국에서는 지역과 상품에 따라 표시 가격에 판매세가 더해질 수 있습니다. 식당의 추가 요금은 주문 전에 메뉴에서 확인하세요.', 'In the US, sales tax may be added to the displayed price depending on the place and product. Check a restaurant menu for extra charges before ordering.', '米国では地域や商品によって表示価格に売上税が加わることがあります。飲食店の追加料金は注文前にメニューで確認しましょう。', 'https://oag.ca.gov/hiddenfees'],
      ['LA에서는 대중교통과 차량 호출을 모두 이용할 수 있습니다. 명소 간 이동 전에 메트로 노선과 차량 호출 승차 위치를 확인하세요.', 'In LA, both public transit and ride-hailing are available. Check Metro routes and ride-hail pickup points before moving between sights.', 'ロサンゼルスでは公共交通と配車サービスの両方を利用できます。名所間の移動前に地下鉄路線と配車の乗車場所を確認しましょう。', 'https://www.discoverlosangeles.com/travel/smart-travel-tips-information'],
    ],
    cautions: [
      ['차 안에 가방·물건을 보이게 두면 차량 털이가 잦으니 아무것도 남기지 마세요.', 'Car break-ins are common; never leave bags or anything visible in a parked car.', '車上荒らしが多いので、駐車した車内に荷物を見える状態で置かないように。', 'https://www.0404.go.kr/ntnSafetyInfo/69/detail'],
      ['미국의 낯선 지역에서는 특히 밤에 한적한 곳을 혼자 걷지 마세요.', 'In unfamiliar parts of the US, avoid walking alone through quiet areas, especially at night.', '米国の不慣れな地域では、特に夜間に人通りの少ない場所を一人で歩かないようにしましょう。', 'https://www.gov.uk/foreign-travel-advice/usa/safety-and-security'],
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
      ['이탈리아 바에서 커피를 마실 때는 카운터와 테이블 이용 가격이 다를 수 있으니 주문 전에 메뉴를 확인하세요.', 'At an Italian café, counter and table-service prices may differ; check the menu before ordering.', 'イタリアのバールではカウンターとテーブルで料金が異なる場合があるため、注文前にメニューを確認しましょう。', 'https://www.mimit.gov.it/images/stories/Bandi/Appendice_Capitolato_LISTINO2013_PREZZI_ASSOBAR.pdf'],
      ['트레니탈리아 지역열차 종이 1회권은 출발 전 역 검표기에서 개찰해야 합니다. 디지털 지역열차표는 종류에 따라 자동으로 유효화됩니다.', 'Validate a Trenitalia regional paper single ticket at the station before departure. Digital regional tickets are validated automatically according to their type.', 'トレニタリアの地域列車の紙の1回券は発車前に駅で刻印が必要です。デジタルの地域列車券は種類に応じて自動的に有効になります。', 'https://www.trenitalia.com/en/information/travelling-on-regional-trains.html'],
    ],
    cautions: [
      ['로마·피렌체·베네치아 관광지와 대중교통에서는 소매치기가 매우 잦습니다.', 'Pickpocketing is very common at sights and on transit in Rome, Florence and Venice.', 'ローマ・フィレンツェ・ヴェネツィアの観光地や公共交通ではスリが非常に多いです。', 'https://www.0404.go.kr/ntnSafetyInfo/179/detail'],
      ['이탈리아 여러 도시의 역사 지구에는 차량 제한 구역(ZTL)이 있습니다. 렌터카로 진입하기 전에 표지와 허가 조건을 확인하세요.', 'Many Italian historic centres have limited-traffic zones (ZTL). Check signs and permit rules before driving in with a rental car.', 'イタリアの多くの歴史地区には車両進入制限区域（ZTL）があります。レンタカーで入る前に標識と許可条件を確認しましょう。', 'https://www.gov.uk/foreign-travel-advice/italy/safety-and-security'],
    ],
  },
  Spain: {
    tips: [
      ['스페인은 다른 여러 나라보다 식사 시간이 늦은 편이지만 식당별 영업시간은 다르므로 방문 전에 확인하세요.', 'Meal times in Spain tend to be later than in many countries, but opening hours vary by restaurant; check before visiting.', 'スペインでは食事の時間が他国より遅い傾向がありますが、店によって営業時間は異なります。訪問前に確認しましょう。', 'https://www.spain.info/en/about-spain/'],
      ['그라나다 알함브라 궁전은 공식 예매 사이트에서 방문 날짜와 입장 시간을 선택해 예매하세요.', 'For Granada’s Alhambra, select your visit date and entry time on its official ticket site.', 'グラナダのアルハンブラ宮殿は公式予約サイトで訪問日と入場時間を選んで予約しましょう。', 'https://tickets.alhambra-patronato.es/en/'],
    ],
    cautions: [
      ['바르셀로나 람블라스 거리·지하철과 마드리드 솔 광장 주변은 소매치기가 매우 많습니다.', 'Pickpockets are rife on Las Ramblas and the Barcelona metro, and around Madrid’s Puerta del Sol.', 'バルセロナのランブラス通りや地下鉄、マドリードのソル広場周辺はスリが非常に多いです。', 'https://www.0404.go.kr/ntnSafetyInfo/128/detail'],
      ['테라스 자리에서 휴대폰을 테이블 위에 두면 순식간에 가져가는 경우가 있습니다.', 'Phones left on terrace tables can vanish in seconds.', 'テラス席でテーブルに携帯を置くと、一瞬で盗られることがあります。', 'https://www.gov.uk/foreign-travel-advice/spain/safety-and-security'],
    ],
  },
  Kazakhstan: {
    tips: [
      ['현지 차량 호출 앱(Yandex Go 등)으로 택시를 부르면 요금이 미리 정해져 편합니다.', 'Local ride-hailing apps such as Yandex Go give fixed fares upfront.', '現地の配車アプリ（Yandex Goなど）を使うと料金が事前に決まり便利です。', 'https://www.airporttransferportal.com/es/airport-guides/ala/taxi-vs-transfer'],
      ['카자흐스탄에서는 카자흐어와 러시아어가 쓰입니다. 메뉴·표지판을 읽을 수 있도록 번역 수단을 준비하세요.', 'Kazakh and Russian are used in Kazakhstan. Prepare a way to translate menus and signs.', 'カザフスタンではカザフ語とロシア語が使われます。メニューや標識を読めるよう翻訳手段を用意しましょう。', 'https://www.gov.kz/org/mfa-london/press/article/details/8509?lang=en'],
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
      ['트빌리시에서는 Bolt·Yandex 같은 차량 호출 앱을 이용할 수 있습니다. 길에서 택시를 잡으면 출발 전에 목적지와 요금을 정하세요.', 'In Tbilisi, taxi apps such as Bolt and Yandex are available. If hailing a street taxi, agree the destination and fare before departure.', 'トビリシではBoltやYandexなどの配車アプリが使えます。流しのタクシーに乗る場合は出発前に行き先と料金を決めましょう。', 'https://georgia.travel/travel-tips-for-exploring-tbilisi'],
      ['조지아의 교회 등 종교시설을 방문할 때는 단정한 복장을 하고 시설별 안내를 따르세요.', 'Dress modestly when visiting churches and other religious sites in Georgia, and follow each site’s guidance.', 'ジョージアの教会など宗教施設を訪れる際は控えめな服装にし、施設ごとの案内に従いましょう。', 'https://www.gov.uk/foreign-travel-advice/georgia/safety-and-security'],
    ],
    cautions: [
      ['트빌리시 구시가지에는 구불구불한 돌길이 있으니 걷기 편한 신발을 준비하세요.', 'Old Tbilisi has winding cobbled streets, so wear comfortable walking shoes.', 'トビリシ旧市街には曲がりくねった石畳の道があるため、歩きやすい靴を用意しましょう。', 'https://georgia.travel/cities-towns/tbilisi'],
      ['운전이 거칠어 길을 건널 때는 신호가 있어도 차를 확인하세요.', 'Driving can be aggressive; check for cars even at a green crossing.', '運転が荒いので、信号があっても車を確認して渡りましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/332/detail'],
    ],
  },
  Mexico: {
    tips: [
      ['식당에서는 팁을 남기는 것이 관례입니다. 계산서에 이미 포함됐는지 확인하세요.', 'Tipping in restaurants is customary; check whether it is already included on the bill.', 'レストランでチップを渡すのは慣例です。会計にすでに含まれていないか確認しましょう。', 'https://mexicocity.cdmx.gob.mx/e/basics-for-mexico-city-travel/'],
      ['멕시코의 법정 화폐는 페소입니다. 가격표의 통화를 확인하고 페소 기준 금액을 살피세요.', 'The peso is Mexico’s legal currency. Check the currency shown on price labels and the amount in pesos.', 'メキシコの法定通貨はペソです。値札の通貨を確認し、ペソ建ての金額を確かめましょう。', 'https://www.banxico.org.mx/regulations-and-supervision/d/%7B502F01D8-F5FA-E8AF-9D10-E1B70FE04830%7D.pdf'],
    ],
    cautions: [
      ['멕시코에서는 생수를 마시고, 수돗물은 마시지 않는 편이 안전합니다.', 'Drink bottled water in Mexico; it is safer not to drink tap water.', 'メキシコではボトル入りの水を飲み、水道水は飲まないほうが安全です。', 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/mexico'],
      ['지역별 치안 상황이 다르므로 야간 이동 전에는 외교부의 지역별 안전 안내를 확인하고 이동 수단을 미리 정하세요.', 'Safety conditions vary by area. Check official regional advice before travelling at night and plan your transport in advance.', '地域によって治安状況が異なるため、夜間の移動前に外務省の地域別安全情報を確認し、移動手段を決めておきましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/58/detail'],
    ],
  },
  Denmark: {
    tips: [
      ['대부분 카드로 결제해 현금이 거의 필요 없습니다.', 'Almost everything is paid by card, so you rarely need cash.', 'ほぼカード払いなので、現金はほとんど必要ありません。', 'https://www.travelgo.gr/en/travel-tips/502239/10-things-you-need-know-visiting-copenhagen'],
      ['코펜하겐에서는 수돗물을 마실 수 있고 공공 식수대에서 물병을 채울 수 있습니다.', 'In Copenhagen, tap water is safe to drink and you can refill a bottle at public drinking fountains.', 'コペンハーゲンでは水道水を飲めます。公共の給水所でボトルに補充できます。', 'https://www.hofor.dk/english/hofor-utilities/water-supply/free-drinking-water-in-copenhagen/'],
    ],
    cautions: [
      ['코펜하겐에서는 자전거 도로와 보행로를 구분해 걷고, 자전거 도로를 건널 때 오가는 자전거를 살피세요.', 'In Copenhagen, keep to pedestrian paths and watch for cyclists when crossing a cycle lane.', 'コペンハーゲンでは歩道と自転車道を見分けて歩き、自転車道を横切るときは自転車を確認しましょう。', 'https://international.kk.dk/live/transport-and-parking/cycling-in-copenhagen'],
      ['코펜하겐은 겨울에 낮이 짧으므로 야외 관광 시간을 미리 계획하세요.', 'Winter days are short in Copenhagen, so plan outdoor sightseeing around daylight.', 'コペンハーゲンは冬の日照時間が短いため、屋外観光を明るい時間に計画しましょう。', 'https://www.visitcopenhagen.com/copenhagen/this-is-copenhagen/seasons/the-changing-seasons-of-copenhagen'],
      ['코펜하겐 중심가·공항·중앙역과 혼잡한 대중교통에서는 소매치기를 조심하고 소지품을 눈에 띄게 두지 마세요.', 'Watch for pickpockets in central Copenhagen, the airport, the central station and crowded public transport; keep valuables out of sight.', 'コペンハーゲン中心部・空港・中央駅や混雑した公共交通ではスリに注意し、貴重品を見える所に置かないでください。', 'https://www.0404.go.kr/ntnSafetyInfo/31/detail'],
    ],
  },
  Sweden: {
    tips: [
      ['스웨덴에서는 카드 결제가 널리 쓰이지만 현금을 받지 않는 곳도 있습니다. 결제 수단을 미리 확인하세요.', 'Card payment is widespread in Sweden, but some places do not accept cash. Check payment options in advance.', 'スウェーデンではカード決済が広く使われますが、現金を受け付けない店もあります。事前に支払い方法を確認しましょう。', 'https://www.riksbank.se/en-gb/payments--cash/payments-in-sweden/payments-report-2025/trends-on-the-payments-market/the-swedish-payments-market-is-almost-entirely-digital/'],
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
      ['폴란드 식당에서 팁은 의무는 아니지만 좋은 서비스에 감사 표시로 남길 수 있습니다.', 'A restaurant tip in Poland is not required, but you may leave one to thank staff for good service.', 'ポーランドのレストランでチップは義務ではありませんが、良いサービスへの感謝として渡すことができます。', 'https://herway.poland.travel/travel-tips-for-poland/'],
      ['크라쿠프의 종이 승차권은 버스·트램에 타자마자 개찰하세요. 앱으로 산 표는 구매 때 유효화되는 종류가 있습니다.', 'Validate a Kraków paper ticket immediately after boarding a bus or tram. Some app tickets are validated when purchased.', 'クラクフの紙の乗車券はバス・トラムに乗ったらすぐ刻印しましょう。アプリ券には購入時に有効になる種類もあります。', 'https://ztp.krakow.pl/en/kmk-public-transport/buy-a-kmk-ticket'],
    ],
    cautions: [
      ['길에서 환전을 권하는 사람이나 환율이 크게 좋다는 환전소는 수수료가 높은 경우가 많습니다.', 'Street money changers and booths with “great rates” often hide steep fees.', '路上の両替や「好レート」をうたう両替所は手数料が高いことが多いです。', 'https://www.isitsafetovisit.com/cities/krakow'],
      ['일부 바·클럽에서 계산서에 터무니없는 금액이 붙는 사기가 있으니 주문 전에 가격을 확인하세요.', 'Some bars inflate bills; confirm prices before ordering.', '一部のバーで法外な会計を請求する詐欺があるので、注文前に値段を確認しましょう。', 'https://www.isitsafetovisit.com/cities/krakow'],
    ],
  },
  Ireland: {
    tips: [
      ['아일랜드 날씨는 변덕스럽고 비가 올 수 있으니 방수 겉옷을 챙기세요.', 'Ireland’s weather can change and bring rain, so pack a waterproof jacket.', 'アイルランドは天気が変わりやすく雨も降るため、防水の上着を用意しましょう。', 'https://www.ireland.com/en/help-and-advice/practical-information/weather/'],
    ],
    cautions: [
      ['아일랜드는 차량이 왼쪽으로 다니므로 길을 건널 때 오른쪽과 왼쪽을 모두 확인하세요.', 'Traffic drives on the left in Ireland; look right and left before crossing.', 'アイルランドの車は左側通行です。道路を渡るときは右と左の両方を確認しましょう。', 'https://www.rsa.ie/road-safety/road-users/tourists'],
      ['해안 절벽 산책로는 바람이 강하고 가장자리가 무너질 수 있어 안전선 안쪽으로 다니세요.', 'Cliff paths are windy and edges can crumble; stay behind the barriers.', '海岸の崖の遊歩道は風が強く縁が崩れることがあるので、柵の内側を歩きましょう。', 'https://www.travelextra.ie/an-branan-mor-sea-stack-collapses-at-cliffs-of-moher/'],
    ],
  },
  Belgium: {
    tips: [
      ['벨기에는 지역마다 언어가 다릅니다. 브뤼셀에서는 프랑스어·네덜란드어 지명이 함께 쓰이므로 두 표기를 확인하세요.', 'Languages vary by region in Belgium. In Brussels, check both French and Dutch place names.', 'ベルギーでは地域によって言語が異なります。ブリュッセルではフランス語とオランダ語の地名を確認しましょう。', 'https://www.visit.brussels/en/visitors/plan-your-trip/practical-info/about-brussels'],
      ['벨기에 식당에서는 서비스가 계산에 포함되지만, 마음에 들면 팁을 더 남길 수 있습니다.', 'Service is included in Belgian restaurant bills, but you may leave an additional tip if you wish.', 'ベルギーの飲食店ではサービス料が会計に含まれますが、希望すれば追加でチップを渡せます。', 'https://www.visit.brussels/it/visitatori/organizza-il-tuo-viaggio/practical-info/money-currency-and-change'],
    ],
    cautions: [
      ['브뤼셀 중앙역·남역 주변과 지하철에서는 소매치기를 조심하세요.', 'Watch for pickpockets around Brussels Central and Midi stations and on the metro.', 'ブリュッセル中央駅・南駅周辺や地下鉄ではスリに注意しましょう。', 'https://brusselstimes.com/209360/brussels-police-warns-of-pickpocketing-in-city-centre'],
    ],
  },
  Iceland: {
    tips: [
      ['아이슬란드에서는 카드 결제가 널리 가능하지만, 무인 주유소에서는 카드 PIN이 필요한 곳이 많으니 확인하세요.', 'Card payments are widely accepted in Iceland, but many self-service petrol stations require a card PIN.', 'アイスランドではカード決済が広く使えますが、セルフ給油所では暗証番号が必要な所が多いため確認しましょう。', 'https://www.visiticeland.com/article/driving-in-iceland/'],
      ['아이슬란드의 수돗물은 마실 수 있으니 물병을 채워 다니세요.', 'Icelandic tap water is safe to drink; refill your bottle as you travel.', 'アイスランドの水道水は飲めます。ボトルに水を補充して持ち歩きましょう。', 'https://visitreykjavik.is/icelandic-tap-water'],
    ],
    cautions: [
      ['검은 모래 해변(레이니스피아라 등)은 갑자기 큰 파도가 덮쳐 사고가 나니 바다에 가까이 가지 마세요.', 'Sneaker waves at black-sand beaches like Reynisfjara are deadly; keep well back from the water.', 'レイニスファラなどの黒砂海岸は突然大波が来て事故が起きるので、海に近づかないように。', 'https://www.visiticeland.com/article/reynisfjara-black-sand-beach-is-dangerous/'],
      ['날씨와 도로 상황이 빠르게 바뀌니 운전·트레킹 전에 공식 기상·도로 정보를 확인하세요.', 'Weather and road conditions change fast; check official forecasts and road status before driving or hiking.', '天気や道路状況が急変するので、運転やトレッキング前に公式の気象・道路情報を確認しましょう。', 'https://www.visitreykjavik.is/safe-travel'],
    ],
  },
  Türkiye: {
    tips: [
      ['이스탄불카드는 버스·메트로·트램·페리 등 대중교통 결제에 쓰입니다. 이용 노선의 현장 안내를 확인하세요.', 'Istanbulkart can pay for buses, metro, trams and ferries. Check the guidance for your route.', 'イスタンブールカードはバス・地下鉄・トラム・フェリーなどの公共交通で使えます。利用路線の案内を確認しましょう。', 'https://www.istanbulkart.istanbul/blog/detay?id=2376'],
      ['튀르키예의 모스크나 종교시설을 방문할 때는 단정하게 입고 시설별 방문 규칙을 확인하세요.', 'Dress modestly when visiting a mosque or religious shrine in Türkiye, and check the site’s visitor rules.', 'トルコのモスクや宗教施設を訪れる際は控えめな服装にし、施設ごとの見学ルールを確認しましょう。', 'https://www.gov.uk/foreign-travel-advice/turkey/safety-and-security'],
    ],
    cautions: [
      ['친근하게 말을 걸며 바·카펫 가게로 데려가는 사람은 바가지 수법일 수 있습니다.', 'Friendly strangers who lead you to a bar or carpet shop may be setting up a rip-off.', '親しげに話しかけてバーや絨毯店に連れて行く人は、ぼったくりの手口のことがあります。', 'https://www.0404.go.kr/ntnSafetyInfo/228/detail'],
      ['택시는 미터기를 켰는지 확인하고, 가능하면 차량 호출 앱을 쓰세요.', 'Make sure taxis run the meter, or use a ride-hailing app where possible.', 'タクシーはメーターが動いているか確認し、できれば配車アプリを使いましょう。', 'https://0404.go.kr/bbs/embsyNtc/1347211/detail?ntnCd=228'],
    ],
  },
  'Hong Kong': {
    tips: [
      ['옥토퍼스 카드 하나로 지하철·버스·페리와 편의점 결제를 모두 할 수 있습니다.', 'One Octopus card covers MTR, buses, ferries and convenience stores.', 'オクトパスカード1枚で地下鉄・バス・フェリーやコンビニ払いができます。', 'https://www.octopus.com.hk/en/consumer/customer-service/faq/get-your-octopus/about-octopus.html'],
      ['홍콩 식당 대부분은 봉사료를 더하지만 차찬텡 같은 식당은 그렇지 않을 수 있으니 계산서를 확인하세요.', 'Most Hong Kong restaurants add a service charge, but some diners such as cha chaan tengs do not; check the bill.', '香港の多くのレストランはサービス料を加算しますが、茶餐廳などでは加算しない場合もあるため、会計を確認しましょう。', 'https://www.discoverhongkong.com/eng/travel-guide/traveller-essentials.html'],
    ],
    cautions: [
      ['여름~가을에는 태풍이 오면 교통·관광지가 멈출 수 있으니 기상청 경보를 확인하세요.', 'Typhoons in summer and autumn can halt transport and attractions; follow Observatory signals.', '夏から秋は台風で交通や観光地が止まることがあるので、天文台の警報を確認しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/377/detail'],
      ['홍콩 MTR의 유료 구역과 열차에서는 음식·음료를 먹거나 마시지 마세요.', 'Do not eat or drink in the paid area or on trains of Hong Kong’s MTR.', '香港MTRの改札内や車内では飲食しないでください。', 'https://www.mtr.com.hk/en/customer/main/mtr_by_laws.html'],
    ],
  },
  Indonesia: {
    tips: [
      ['발리 사원에 들어갈 때는 허리에 두르는 천(사롱)이 필요하며, 입구에서 빌려주는 곳이 많습니다.', 'Bali temples require a sarong around the waist; many lend one at the gate.', 'バリの寺院では腰に巻く布（サロン）が必要で、入口で貸してくれる所が多いです。', 'https://www.indonesia.travel/gb/en/trip-ideas/a-guide-to-the-holy-springs-of-tirta-empul-bali'],
      ['인도네시아에서 앱으로 차량을 부르면 탑승 전 기사·차량 정보가 앱과 일치하는지 확인하고 이동 경로를 지인과 공유하세요.', 'When booking a car by app in Indonesia, check the driver and vehicle against the app and share your journey with someone you trust.', 'インドネシアでアプリ配車を使う際は、乗車前に運転手と車両がアプリの表示と一致するか確認し、移動情報を知人と共有しましょう。', 'https://www.gov.uk/foreign-travel-advice/indonesia/safety-and-security'],
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
      ['탈린 버스·트램에서는 차 안 단말기에 비접촉 카드를 대고 1시간권을 살 수 있습니다. 공항에도 승차권 발매기가 있습니다.', 'On Tallinn buses and trams, tap a contactless card at an onboard validator to buy a one-hour ticket. There is also a ticket machine at the airport.', 'タリンのバス・トラムでは車内の端末にタッチ決済カードをかざして1時間券を買えます。空港にも券売機があります。', 'https://www.visittallinn.ee/eng/visitor/plan/transport/arrival'],
      ['유료 명소를 3곳 이상 갈 계획이면 탈린 카드가 유리할 수 있습니다.', 'If you plan to visit three or more paid attractions, the Tallinn Card can pay off.', '有料の名所を3か所以上回るなら、タリンカードがお得になることがあります。', 'https://www.visittallinn.ee/eng/visitor/tallinncard'],
    ],
    cautions: [
      ['구시가지의 붐비는 곳과 술집에서는 여럿이 짜고 하는 소매치기가 있으니 소지품을 잘 챙기세요.', 'Pickpockets, sometimes working in teams, target crowded parts of the Old Town and its bars; keep valuables secure.', '旧市街の混雑した場所や酒場では、グループでのスリがあるので持ち物に注意しましょう。', 'https://gov.uk/foreign-travel-advice/estonia/safety-and-security'],
      ['일부 술집에서 관광객에게 터무니없는 술값을 받는 경우가 있으니 주문 전에 가격을 확인하세요.', 'Some bars charge tourists exorbitant drink prices; check prices before ordering.', '一部のバーでは観光客に法外な酒代を請求することがあるので、注文前に値段を確認しましょう。', 'https://gov.uk/foreign-travel-advice/estonia/safety-and-security'],
    ],
  },
  Latvia: {
    tips: [
      ['리가 구시가지는 좁고 자갈이 깔린 길이 많으니 편한 신발을 신고 천천히 걸어보세요.', 'Riga’s Old Town has narrow cobbled streets, so wear comfortable shoes and take your time exploring on foot.', 'リガ旧市街には狭い石畳の道が多いので、歩きやすい靴でゆっくり散策しましょう。', 'https://www.latvia.travel/en/sight/old-town-riga'],
      ['구시가지와 함께 알베르타 거리 일대의 아르누보 건축도 둘러보면 리가의 서로 다른 도시 풍경을 볼 수 있습니다.', 'Pair the Old Town with the Art Nouveau buildings around Alberta iela to see another side of Riga’s cityscape.', '旧市街とあわせてアルベルタ通り周辺のアール・ヌーヴォー建築も巡ると、リガの異なる街並みを楽しめます。', 'https://www.latvia.travel/en/10-must-see-riga'],
    ],
    cautions: [
      ['구시가지·중앙시장·중앙 기차역과 버스 터미널에서는 소매치기와 가방 날치기에 특히 주의하고, 밤에는 불이 어두운 거리와 공원을 피하세요.', 'Watch for pickpockets and bag snatching in the Old Town, Central Market, and central train and bus stations; avoid unlit streets and parks at night.', '旧市街・中央市場・中央駅やバスターミナルではスリやひったくりに特に注意し、夜は暗い通りや公園を避けてください。', 'https://www.gov.uk/foreign-travel-advice/latvia/safety-and-security'],
      ['일부 관광객이 술값 과다 청구와 카드 부정 결제를 겪었습니다. 결제는 눈앞에서 처리되는지 확인하고, PIN 재입력을 요구하면 경계하세요. 술을 자리에 두고 떠나지 마세요.', 'Some tourists have faced inflated drink charges or fraudulent card transactions. Keep card payments in sight, be wary if asked to re-enter your PIN, and do not leave drinks unattended.', '飲み物の高額請求やカードの不正利用に遭った旅行者もいます。カード決済は目の前で行われるか確認し、暗証番号の再入力を求められたら警戒してください。飲み物を置いたまま席を離れないでください。', 'https://www.gov.uk/foreign-travel-advice/latvia/safety-and-security'],
    ],
  },
  Egypt: {
    tips: [
      ['이집트 관광지에서 바가지 요금이나 비공식 서비스가 의심되면 현장 관광경찰에 도움을 요청하고, 피해가 생기면 출국 전에 신고하세요.', 'At Egyptian tourist sites, seek help from the tourist police if you suspect overcharging or unofficial services; report any crime before leaving the country.', 'エジプトの観光地で高額請求や非公式サービスが疑われる場合は観光警察に相談し、被害に遭ったら出国前に届け出ましょう。', 'https://www.gov.uk/foreign-travel-advice/egypt/safety-and-security'],
      ['이집트에서는 수돗물 대신 밀봉된 생수를 마시고, 얼음도 여과수나 생수로 만든 것인지 확인하세요.', 'In Egypt, drink sealed bottled water rather than tap water, and check that ice is made from filtered or bottled water.', 'エジプトでは水道水ではなく未開封のボトル水を飲み、氷もろ過水かボトル水から作られたか確認しましょう。', 'https://www.gov.uk/government/news/phe-issues-advice-to-people-travelling-to-egypt'],
    ],
    cautions: [
      ['피라미드 등 유적지에서는 끈질긴 호객과 비공식 서비스를 경계하세요. 무료 선물도 나중에 돈을 요구할 수 있으니 이용 조건을 먼저 확인하세요.', 'At the pyramids and other archaeological sites, beware of aggressive touts and unregulated services. A “free” gift can lead to a demand for money; confirm terms first.', 'ピラミッドなどの遺跡では、強引な客引きや無許可のサービスに注意しましょう。「無料」の贈り物でも後から代金を求められることがあるため、条件を先に確認してください。', 'https://travel.state.gov/en/international-travel/travel-advisories/egypt.html'],
      ['일부 지역은 여행 자제·금지 경보가 있으니 출발 전에 정부 해외안전 안내를 확인하세요.', 'Some regions carry advice against travel; check official government travel advice before you go.', '一部地域には渡航中止・自粛の勧告があるので、出発前に政府の海外安全情報を確認しましょう。', 'https://www.gov.uk/foreign-travel-advice/egypt/safety-and-security'],
    ],
  },
};

