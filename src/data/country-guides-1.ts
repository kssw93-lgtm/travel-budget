/**
 * 나라별 "알아둘 것(tips)·조심할 것(cautions)" 1 — Claude 초안을 GPT 가 공식 출처로 검증(2026-10-17)하고, 남은 항목은 Claude 가 여행 안내·후기로 확인해 근거 URL 을 붙였다(근거를 못 찾은 항목은 삭제). 금액·자주 바뀌는 입국 규정은 쓰지 않는다.
 * 키는 cities.json 의 countryEn. 각 항목 [ko, en, ja]
 */
/** [ko, en, ja, 근거 URL(공식 출처로 확인한 항목만)] */
export type L3 = readonly [string, string, string, string?];
export interface CountryNote {
  tips: readonly L3[];
  cautions: readonly L3[];
}

export const COUNTRY_1: Record<string, CountryNote> = {
  Japan: {
    tips: [
      ['길거리에 쓰레기통이 거의 없어 작은 비닐봉지를 들고 다니면 편합니다. 편의점 앞 쓰레기통을 쓸 수 있습니다.', 'Public bins are rare; carry a small bag for rubbish or use the bins outside convenience stores.', '街中にゴミ箱が少ないので、小さな袋を持ち歩くと便利です。コンビニ前のゴミ箱も使えます。', 'https://www.cnn.com/travel/japan-trash-cans-explainer-intl-hnk'],
      ['비현금 결제가 널리 쓰이지만 이용할 수 없는 곳도 있으므로 현금을 예비로 준비하세요.', 'Cashless payment is common, but some places may not accept it; carry cash as a backup.', '非接触決済は広く使えますが、決済できない場所もあるため、現金を予備として用意しましょう。', 'https://www.japan.travel/en/plan/cashless-payments-in-japan/'],
    ],
    cautions: [
      ['지진이 나면 건물 안에서는 머리를 보호하고, 휴대폰 긴급 알림과 안내 방송을 따르세요.', 'In an earthquake, protect your head indoors and follow phone alerts and announcements.', '地震の際は室内で頭を守り、携帯の緊急速報と案内放送に従いましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/183/detail'],
      ['전철 안에서는 통화를 삼가고 휴대폰을 무음으로 두는 것이 예절입니다. 급한 전화는 다음 역에서 내려 받으세요.', 'On trains, keep your phone on silent and avoid calls; for an urgent call, get off at the next stop.', '電車内では通話を控え、携帯はマナーモードにするのが礼儀です。急ぎの電話は次の駅で降りてから。', 'https://www.japan.travel/en/plan/custom-manners/'],
      ['관광지·역·숙소처럼 사람이 붐비는 곳에서는 소매치기와 날치기를 경계하고, 휴대전화와 가방을 몸 가까이 두세요.', 'Watch for pickpocketing and bag snatching in crowded attractions, stations and accommodation areas; keep phones and bags close.', '観光地・駅・宿泊施設など人混みでは、スリやひったくりに注意し、携帯電話やバッグを身近に保管しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/183/detail'],
    ],
  },
  Thailand: {
    tips: [
      ['현지에서는 모바일 결제·카드·현금을 함께 사용하므로 시장과 소규모 매장에 대비해 현금도 조금 준비하세요.', 'Mobile payments, cards and cash are all used; keep some cash for markets and smaller merchants.', '現地ではモバイル決済、カード、現金など複数の支払い方法が使われています。市場や小規模店に備えて少額の現金も用意しましょう。', 'https://www.am2026thailand.go.th/means-of-payment'],
      ['사원에서는 어깨·무릎을 가리고, 불상보다 머리를 높이 두거나 발로 가리키지 않습니다.', 'At temples cover shoulders and knees, and never point your feet at Buddha images.', '寺院では肩と膝を隠し、仏像に足を向けないようにします。', 'https://www.tourismthailand.org/Articles/dressing-to-visit-royal-palaces-in-thailand'],
    ],
    cautions: [
      ['"오늘 왕궁 문 닫았다"며 다른 곳으로 데려가려는 사람은 흔한 사기 수법입니다. 공식 입구에서 직접 확인하세요.', 'Strangers saying “the palace is closed today” and offering a ride are a common scam; check at the official gate.', '「今日は王宮が閉まっている」と別の場所へ誘うのはよくある詐欺です。公式入口で直接確認を。', 'https://thailand.tripcanvas.co/bangkok/scams-tourist-traps/'],
      ['왕실을 비방하는 말이나 행동은 법으로 처벌될 수 있으니 조심하세요.', 'Criticising the monarchy is a criminal offence; be careful what you say and post.', '王室を批判する言動は法律で処罰されることがあるので注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/260/detail'],
      ['낯선 사람이 시내 안내나 짐 운반을 제안해도 동행하거나 물건을 맡기지 마세요.', 'Do not follow strangers offering transport or city guidance, or agree to carry their belongings.', '見知らぬ人から移動や街案内を申し出られても同行せず、荷物を預からないでください。', 'https://www.0404.go.kr/ntnSafetyInfo/260/detail'],
    ],
  },
  Vietnam: {
    tips: [
      ['화폐 단위가 커서 0의 개수를 헷갈리기 쉽습니다. 계산할 때 지폐 색과 숫자를 한 번 더 보세요.', 'With so many zeros, notes are easy to mix up; double-check colours and digits when paying.', '桁が大きく0の数を間違えやすいので、支払い時に紙幣の色と数字を確認しましょう。', 'https://www.vietnamtourism.com/en/the-vietnamese-dong-explained-notes-zeros-and-how-not-to-overpay'],
      ['차량 호출 앱(그랩 등)을 쓰면 요금이 미리 정해져 택시 흥정이 필요 없습니다.', 'Ride-hailing apps such as Grab fix the fare upfront, so no haggling with taxis.', 'Grabなどの配車アプリなら料金が事前に決まり、交渉不要です。', 'https://www.vietnamtourism.com/en/does-grab-work-in-vietnam-complete-guide-2026'],
    ],
    cautions: [
      ['오토바이 날치기가 있으니 길가 쪽 손으로 휴대폰을 들고 다니지 마세요.', 'Motorbike snatch thefts happen; don’t hold your phone on the street side.', 'バイクでのひったくりがあるので、車道側の手で携帯を持たないように。', 'https://www.0404.go.kr/ntnSafetyInfo/86/detail'],
      ['오토바이 통행이 많은 도로에서는 횡단보도와 신호를 이용하고, 차량이 멈출 것이라고 가정하지 마세요.', 'Use marked crossings and signals on busy motorbike roads; do not assume vehicles will stop for you.', 'バイクの多い道路では横断歩道と信号を使い、車が止まってくれると思い込まないでください。', 'https://www.0404.go.kr/ntnSafetyInfo/86/detail'],
      ['오토바이 사고 위험이 있으므로 가능하면 이륜차 이용을 피하고, 차량에 탈 때 안전벨트를 착용하세요.', 'Motorbike crashes are a serious risk; avoid riding two-wheelers where possible and wear a seat belt in cars.', 'バイク事故の危険があるため、可能なら二輪車の利用を避け、車ではシートベルトを着用してください。', 'https://www.0404.go.kr/ntnSafetyInfo/86/detail'],
    ],
  },
  Taiwan: {
    tips: [
      ['이지카드는 대만의 여러 지하철·버스와 제휴 매장에서 사용할 수 있습니다. 이용처 표지를 확인하세요.', 'EasyCard works on many Taiwanese metro and bus services and at participating shops. Check for the acceptance sign.', '悠遊カードは台湾の多くの地下鉄・バスや加盟店で使えます。利用可能の表示を確認しましょう。', 'https://www.easycard.com.tw/en/use-range'],
      ['야시장은 현금 위주라 작은 지폐와 동전을 챙기세요.', 'Night markets are mostly cash; bring small notes and coins.', '夜市は現金中心なので小額紙幣と小銭を用意しましょう。', 'https://www.taipeitourism.org/tipping-in-taipei/'],
    ],
    cautions: [
      ['지하철역·차량 안에서는 물을 포함해 먹고 마시는 것이 금지되어 벌금이 있습니다.', 'Eating and drinking, even water, is banned in MRT stations and trains, with fines.', 'MRTの駅と車内では水も含め飲食禁止で、罰金があります。', 'https://www.0404.go.kr/ntnSafetyInfo/372/detail'],
      ['여름~가을 태풍 시즌에는 항공·배편이 결항될 수 있으니 일기예보를 확인하세요.', 'Typhoons in summer and autumn can cancel flights and ferries; watch the forecast.', '夏〜秋の台風シーズンは飛行機や船が欠航することがあるので、天気予報を確認しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/372/detail'],
    ],
  },
  Singapore: {
    tips: [
      ['지하철·버스는 비접촉 카드로 바로 탈 수 있습니다.', 'Tap a contactless card to ride trains and buses.', '電車・バスはタッチ決済でそのまま乗れます。', 'https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/plan_your_journey.html'],
      ['호커 센터에서는 휴지 한 묶음을 자리에 올려 두면 자리를 맡았다는 표시입니다.', 'A packet of tissues on a hawker-centre seat means it is taken.', 'ホーカーセンターで席にティッシュを置くのは席取りの印です。', 'https://www.visitsingapore.com/content/dam/desktop/global/about-singapore/traveller-information/tos_SingaporeLBBB-Full.pdf'],
    ],
    cautions: [
      ['쓰레기 무단 투기, 지하철 안 음식물 섭취 등에 벌금이 엄격하게 부과됩니다.', 'Littering and eating on trains are fined strictly.', 'ポイ捨てや電車内での飲食などに厳しい罰金があります。', 'https://www.0404.go.kr/ntnSafetyInfo/134/detail'],
      ['전자담배는 반입과 사용 모두 불법입니다.', 'E-cigarettes and vapes are illegal to bring in or use.', '電子たばこは持ち込みも使用も違法です。', 'https://www.0404.go.kr/ntnSafetyInfo/134/detail'],
    ],
  },
  France: {
    tips: [
      ['프랑스 식당은 봉사료 포함 표시를 쓰며 팁은 의무가 아닙니다. 결제 전에 계산서 표시를 확인하세요.', 'French restaurants use service-included pricing, and tipping is not mandatory; check the bill before paying.', 'フランスのレストランではサービス料込みの表示が使われ、チップは義務ではありません。会計前に表示を確認しましょう。', 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/pourboire'],
      ['일요일에는 문을 닫는 상점이 많지만 관광지 등에는 영업하는 곳도 있으므로 방문 전 영업시간을 확인하세요.', 'Many shops close on Sundays, while some in tourist areas open; check opening hours before visiting.', '日曜日は休業する店が多い一方、観光地などには営業する店もあります。訪問前に営業時間を確認しましょう。', 'https://www.france.fr/en/article/open-shops-sunday/'],
    ],
    cautions: [
      ['관광지와 지하철에서 소매치기가 많으니 가방은 앞으로 메세요.', 'Pickpockets work tourist sites and the metro; wear your bag in front.', '観光地や地下鉄はスリが多いので、バッグは前に。', 'https://www.0404.go.kr/ntnSafetyInfo/248/detail'],
      ['서명 운동·팔찌를 내밀며 다가오는 사람은 피하는 것이 좋습니다.', 'Avoid people pushing petitions or friendship bracelets on you.', '署名やミサンガを差し出して近づく人は避けましょう。', 'https://www.thelocal.fr/20220809/paris-police-warn-tourists-about-petition-scam'],
    ],
  },
  'United Kingdom': {
    tips: [
      ['런던 TfL 대중교통은 지원되는 비접촉 카드로 결제할 수 있습니다. 노선별 지원 여부를 확인하세요.', 'On London TfL services, accepted contactless cards can be used to pay; check acceptance for each route.', 'ロンドンのTfL公共交通では対応する非接触カードで乗車できます。利用路線ごとの対応状況を確認してください。', 'https://tfl.gov.uk/fares/ways-to-pay?intcmp=80091'],
      ['계산서에 서비스 차지가 있는지 확인하고, 자율 항목이면 별도 팁을 낼지 직접 결정하세요.', 'Check whether a service charge is on the bill; if it is optional, you can decide whether to add anything.', '会計にサービス料が含まれているか確認し、任意の場合は追加するか自分で判断しましょう。', 'https://www.gov.uk/government/publications/e24-tips-gratuities-service-charges-and-troncs/guidance-on-tips-gratuities-service-charges-and-troncs'],
    ],
    cautions: [
      ['차량은 왼쪽으로 통행합니다. 길을 건널 때 횡단보도와 신호를 따르고, 양쪽 차를 모두 확인하세요.', 'Traffic drives on the left. Use crossings and signals, and check both directions before crossing.', '車は左側通行です。横断歩道や信号を使い、渡る前に左右両方を確認しましょう。', 'https://www.gov.uk/guidance/the-highway-code/rules-for-pedestrians-1-to-35'],
      ['붐비는 거리와 대중교통에서는 휴대전화와 가방을 단단히 챙기세요.', 'Keep phones and bags secure on busy streets and public transport.', '人通りの多い道路や公共交通では、携帯電話やバッグをしっかり管理しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/159/detail'],
    ],
  },
  Philippines: {
    tips: [
      ['섬 사이 여객선은 기상과 운항 공지를 확인하고, 일정에 여유를 두세요.', 'Check weather and operator notices for inter-island ferries, and leave flexibility in your schedule.', '島間のフェリーは天候と運航会社のお知らせを確認し、日程に余裕を持たせましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/252/detail'],
      ['트라이시클·시장·입장료를 낼 때는 작은 지폐를 준비하세요.', 'Carry small bills for tricycle rides, markets and entrance fees.', 'トライシクルや市場、入場料の支払いには小額紙幣を用意しましょう。', 'https://philippines.travel/destinations/puerto-princesa/index'],
    ],
    cautions: [
      ['태풍이 예보되면 항공·배편 결항 가능성을 확인하고 일정 변경에 대비하세요.', 'When a typhoon is forecast, check for flight and ferry cancellations and be ready to adjust your plans.', '台風の予報が出たら、航空便やフェリーの欠航情報を確認し、日程変更に備えましょう。', 'https://www.pna.gov.ph/articles/1254885'],
      ['환전은 BSP 등록 은행·환전업체를 이용하고, 등록 여부는 BSP Verifier에서 확인하세요.', 'Use BSP-registered banks or money changers, and check their registration in the BSP Verifier.', '両替はBSP登録の銀行・両替業者を利用し、BSP Verifierで登録状況を確認しましょう。', 'https://www.bsp.gov.ph/SitePages/FinancialStability/BSPVerifier.aspx'],
      ['지역별 안전 상황이 크게 다를 수 있으므로 이동 전에 외교부의 국가·지역별 여행경보와 안전공지를 확인하세요.', 'Safety conditions can differ substantially by area; check the foreign ministry’s country and regional advisories before travelling.', '地域によって安全状況が大きく異なるため、移動前に外務省の国・地域別の渡航情報と安全通知を確認してください。', 'https://www.0404.go.kr/ntnSafetyInfo/252/detail'],
    ],
  },
  'South Korea': {
    tips: [
      ['교통카드 하나로 지하철·버스를 갈아타면 환승 할인이 됩니다.', 'Transfers between subway and bus are discounted with one transit card.', '交通カード1枚で地下鉄とバスを乗り換えると割引になります。', 'https://english1.visitkorea.or.kr/enu/TRP/TP_ENG_8_1_1.jsp'],
      ['명절 등 특별 수송 기간에는 코레일의 공식 예매 일정과 좌석 현황을 미리 확인하세요.', 'During major holiday travel periods, check KORAIL’s official booking dates and seat availability in advance.', '祝祭日などの繁忙期は、KORAILの公式予約日程と空席状況を早めに確認しましょう。', 'https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&key=911&nttNo=26019&pageIndex=8&searchCnd=all'],
    ],
    cautions: [
      ['태풍특보 때는 선박 출항이 통제될 수 있고 산간 계곡은 위험하므로, 기상특보와 운항 공지를 확인하세요.', 'Typhoon warnings can restrict boat departures and make mountain valleys dangerous; check weather alerts and operator notices.', '台風警報・注意報の際は船の出航が制限され、山間の渓谷も危険です。気象情報と運航案内を確認しましょう。', 'https://www.weather.go.kr/w/typhoon/ko/weather/typhoon_02_popup02.jsp'],
    ],
  },
  Guam: {
    tips: [
      ['식당에 따라 봉사료가 추가되기도 하니 메뉴와 계산서를 확인하세요.', 'Some restaurants add a service charge; check the menu and bill.', '店によってはサービス料が加算されるため、メニューと会計を確認しましょう。', 'https://www.visitguam.com/listing/islander-terrace/357/'],
      ['공공 버스는 노선과 운행 요일이 제한적이라 렌터카나 쇼핑몰 셔틀을 많이 이용합니다.', 'Public buses run limited routes and days, so most visitors rent a car or use shopping shuttles.', '路線バスは路線や運行日が限られるため、レンタカーやショッピングシャトルを使う人が多いです。', 'https://www.visitguam.com/planning/transportation/buses/'],
    ],
    cautions: [
      ['자외선이 매우 강해 선크림과 모자가 필수입니다.', 'The sun is intense; sunscreen and a hat are essential.', '紫外線がとても強いので、日焼け止めと帽子は必須です。', 'https://www.visitguam.com/about-guam/safety-tips/sun-safety/'],
      ['산호초 해변에서는 맨발로 걷다 다칠 수 있어 물놀이 신발이 있으면 좋습니다.', 'Reef shallows can cut bare feet; water shoes help.', 'サンゴ礁の浅瀬は素足だとけがをしやすいので、マリンシューズがあると安心です。', 'https://www.visitguam.com/about-guam/safety-tips/water-safety/'],
      ['태풍·열대폭풍 경보가 있으면 해안가를 피하고 현지 당국과 기상기관의 안전 지침을 따르세요.', 'During typhoon or tropical-storm warnings, stay away from the coast and follow local authorities’ and weather services’ safety instructions.', '台風・熱帯暴風雨の警報時は海岸を避け、現地当局や気象機関の安全指示に従ってください。', 'https://www.visitguam.com/about-guam/safety-tips/storms-typhoons/'],
    ],
  },
  Australia: {
    tips: [
      ['시드니에서는 은행 카드나 휴대전화로 대중교통 승차·하차를 태그할 수 있습니다. 다른 도시에서는 운영사 안내를 확인하세요.', 'In Sydney you can tap on and off public transport with a bank card or phone. Check the operator’s guidance in other cities.', 'シドニーでは銀行カードやスマートフォンで公共交通の乗車・降車時にタッチできます。他の都市では運行事業者の案内を確認しましょう。', 'https://transportnsw.info/tickets-fares/contactless-payments'],
      ['식당 팁은 의무가 아니며, 서비스가 좋았을 때만 남기는 편입니다.', 'Tipping is not expected; leave one only for great service.', 'チップは義務ではなく、良いサービスのときに置く程度です。', 'https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html'],
    ],
    cautions: [
      ['해변에서는 구명요원이 배치된 해변의 적·황색 깃발 사이에서 수영하고 표지와 안내를 따르세요.', 'At patrolled beaches, swim between the red and yellow flags and follow local signs and lifeguard advice.', '監視員のいる海水浴場では赤と黄色の旗の間で泳ぎ、標識やライフセーバーの案内に従いましょう。', 'https://beachsafe.org.au/surf-safety/flags-and-signs'],
    ],
  },
  Czechia: {
    tips: [
      ['체코의 공식 통화는 체코 코루나(Kč/CZK)입니다. 유로 결제 가능 여부와 환율은 매장별로 확인하세요.', 'The official currency of Czechia is the Czech koruna (Kč/CZK). Check euro acceptance and exchange rates with each business.', 'チェコの公式通貨はチェコ・コルナ（Kč/CZK）です。ユーロの使用可否や換算レートは店ごとに確認してください。', 'https://www.visitczechia.com/en-us/travel-info/currency-payments-prices-and-tips'],
      ['종이 승차권은 처음 탈 때 한 번 개찰기에 찍어야 합니다(차내 단말기·앱으로 산 표는 제외).', 'Paper tickets must be validated once when you first board (tickets from on-board terminals or the app are exempt).', '紙の乗車券は最初に乗るときに一度刻印が必要です（車内端末やアプリで買った券は不要）。', 'https://pid.cz/en/tickets-and-fare/how-to-buy-ticket/'],
    ],
    cautions: [
      ['"수수료 0%" 환전소라도 환율이 나쁠 수 있으니 실제 받는 금액을 먼저 확인하세요.', 'Even “0% commission” exchanges can have bad rates; check the amount you’ll receive.', '「手数料0%」の両替所でもレートが悪いことがあるので、受取額を先に確認しましょう。', 'https://www.visitczechia.com/en-us/news/2019/04/n-money-exchange'],
      ['구시가지 관광지 주변 소매치기를 조심하세요.', 'Watch for pickpockets around the Old Town sights.', '旧市街の観光地周辺ではスリに注意しましょう。', 'https://www.gov.uk/foreign-travel-advice/czech-republic/safety-and-security'],
    ],
  },
  Macau: {
    tips: [
      ['일부 대형 리조트는 페리 터미널·공항 등에서 무료 셔틀을 운행합니다. 노선과 조건은 리조트 공식 안내에서 확인하세요.', 'Some major resorts run free shuttles from terminals and the airport; check each resort’s official route and conditions.', '一部の大型リゾートは、フェリーターミナルや空港などから無料シャトルを運行しています。運行先と条件は各リゾートの公式案内で確認してください。', 'https://www.mgm.mo/en/visit/operating-hours'],
      ['마카오의 공식 화폐는 파타카이며, 공항·선착장·호텔과 은행에서 환전할 수 있습니다.', 'Macao’s official currency is the pataca; you can exchange money at airports, ferry terminals, hotels and banks.', 'マカオの公式通貨はパタカで、空港、フェリーターミナル、ホテル、銀行で両替できます。', 'https://www.macaotourism.gov.mo/en/travelessential/before-you-travel/practical-info'],
    ],
    cautions: [
      ['카지노 구역은 21세 미만 출입이 금지됩니다.', 'Casino floors are off-limits to anyone under 21.', 'カジノフロアは21歳未満の入場が禁止です。', 'https://www.macaotourism.gov.mo/en/shows-and-entertainment/gaming'],
      ['중국 국경절 연휴에는 마카오 방문객과 국경 통과 인원이 크게 늘어나므로 이동 시간에 여유를 두세요.', 'During China’s National Day holiday, visitor arrivals and border traffic in Macao rise sharply; allow extra travel time.', '中国の国慶節連休中はマカオへの訪問者と出入境者が大幅に増えるため、移動時間に余裕を持ちましょう。', 'https://www.gcs.gov.mo/news/detail/zh-hant/N26JHk2YOn'],
    ],
  },
  Hawaii: {
    tips: [
      ['식당·택시·호텔 청소 등에 팁을 주는 것이 일반적입니다.', 'Tipping is standard for restaurants, taxis and housekeeping.', 'レストランやタクシー、ホテルの清掃にチップを渡すのが一般的です。', 'https://www.hawaii-guide.com/blog/tipping-in-hawaii-visitor-guide'],
      ['인기 명소(다이아몬드 헤드, 하나우마 베이)는 예약제라 미리 예약하세요.', 'Popular spots like Diamond Head and Hanauma Bay require advance reservations.', '人気スポット（ダイヤモンドヘッド、ハナウマ湾）は予約制なので事前予約を。', 'https://www.gohawaii.com/experiences/sightseeing'],
    ],
    cautions: [
      ['렌터카 안에 귀중품을 두지 마세요. 차량 털이가 있습니다.', 'Never leave valuables in rental cars; break-ins happen.', 'レンタカーの中に貴重品を置かないでください。車上荒らしがあります。', 'https://beatofhawaii.com/terrible-mistakes-hawaii-visitors-should-never-make/'],
      ['하와이는 산호에 해로운 성분(옥시벤존 등)이 든 선크림 판매를 금지합니다. 산호초에 안전한 선크림을 쓰고, 바다거북은 만지지 말고 거리를 두고 보세요.', 'Hawaii bans the sale of sunscreens with coral-harming chemicals such as oxybenzone; use reef-safe sunscreen and never touch sea turtles.', 'ハワイではオキシベンゾンなどサンゴに有害な成分を含む日焼け止めの販売が禁止されています。リーフセーフの日焼け止めを使い、ウミガメには触らず距離を保ちましょう。', 'https://media.gohawaii.com/statewide/media-support/media-tips'],
    ],
  },
  Saipan: {
    tips: [
      ['팁은 의무는 아니지만 식당에서는 10~15% 정도 남기는 경우가 많습니다.', 'Tipping is not mandatory, but 10–15% is common in restaurants.', 'チップは義務ではありませんが、レストランでは10〜15%程度置くことが多いです。', 'https://guide.travellerspoint.com/Saipan/'],
      ['대중교통이 거의 없어 렌터카나 호텔 셔틀을 이용합니다.', 'There is almost no public transport; rent a car or use hotel shuttles.', '公共交通がほとんどないので、レンタカーかホテルのシャトルを使います。', 'https://www.iexplore.com/articles/travel-guides/australia-and-south-pacific/northern-mariana-islands/transportation'],
    ],
    cautions: [
      ['사이판 해변에서는 이안류·높은 파도 경보를 확인하고, 위험 경보가 있으면 바다에 들어가지 마세요.', 'Check rip-current and high-surf warnings for Saipan beaches, and stay out of the water when conditions are dangerous.', 'サイパンの海岸では離岸流や高波の警報を確認し、危険な状況では海に入らないでください。', 'https://www.weather.gov/media/gum/safety/High%20Surf%20Advisory%20Brochure.pdf'],
      ['태풍·열대폭풍 경보가 있으면 해안가를 피하고 현지 당국과 기상기관의 안전 지침을 따르세요.', 'During typhoon or tropical-storm warnings, stay away from the coast and follow local authorities’ and weather services’ safety instructions.', '台風・熱帯暴風雨の警報時は海岸を避け、現地当局や気象機関の安全指示に従ってください。', 'https://www.weather.gov/gum/activeHazards'],
    ],
  },
  Mongolia: {
    tips: [
      ['도시 밖은 카드가 안 되는 곳이 많아 현금을 챙기세요.', 'Outside the city cards are often not accepted; carry cash.', '都市の外ではカードが使えない所が多いので、現金を持ちましょう。', 'https://www.smartraveller.gov.au/destinations/asia/mongolia'],
      ['몽골은 도시 밖에 비포장도로가 많아 이동 시간이 길어질 수 있습니다. 도로 상황과 이동 일정을 미리 확인하세요.', 'Outside cities, unpaved roads are common and journeys can take longer; check road conditions and plan ahead.', 'モンゴルでは都市部の外に未舗装道路が多く、移動に時間がかかることがあります。道路状況と移動日程を事前に確認しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/68/detail'],
    ],
    cautions: [
      ['게르에 들어갈 때 문지방을 밟지 않는 것이 예절입니다.', 'Do not step on the threshold when entering a ger.', 'ゲルに入るときは敷居を踏まないのがマナーです。', 'https://www.0404.go.kr/ntnSafetyInfo/68/detail'],
      ['겨울 울란바토르는 대기오염이 심한 날이 많아 마스크를 챙기세요.', 'Winter air pollution in Ulaanbaatar can be severe; bring a mask.', '冬のウランバートルは大気汚染がひどい日が多いので、マスクを。', 'https://mongolia.embassy.gov.au/ulnb/Mongolia.html'],
      ['울란바토르 밖에서는 비포장도로와 장거리 운전이 많으므로, 도로 상태를 확인하고 현지 운전 안전 안내를 따르세요.', 'Outside Ulaanbaatar, unpaved roads and long drives are common; check road conditions and follow local driving-safety advice.', 'ウランバートル以外では未舗装道路や長距離運転が多いため、道路状況を確認し、現地の安全案内に従ってください。', 'https://www.0404.go.kr/ntnSafetyInfo/68/detail'],
    ],
  },
  Austria: {
    tips: [
      ['오스트리아에서는 일요일·공휴일 상점 영업이 제한되지만 역·공항 등 예외도 있습니다. 방문할 곳의 영업시간을 확인하세요.', 'Shop opening on Sundays and public holidays is restricted in Austria, with exceptions such as some station and airport shops; check local hours.', 'オーストリアでは日曜・祝日の店舗営業に制限がありますが、駅や空港など例外もあります。訪問先の営業時間を確認しましょう。', 'https://www.bmwet.gv.at/en/Topics/Enterprise/Trades/Businesshours.html'],
      ['식당에서는 서비스가 좋았다면 팁을 주는 것이 관례입니다. 계산서에 이미 포함됐는지 확인하세요.', 'Tipping for good service is customary in restaurants; check whether it is already included in the bill.', 'レストランでは良いサービスへのチップが慣例です。会計に含まれていないか確認しましょう。', 'https://www.wien.info/en/travel-info/tourist-info/money-needs-352200'],
    ],
    cautions: [
      ['빈 대중교통에는 개찰구가 없어도 검표가 있으니 유효한 승차권을 목적지까지 보관하세요.', 'Vienna public transport has no ticket barriers, but tickets are inspected; keep a valid ticket until your destination.', 'ウィーンの公共交通には改札がなくても検札があります。有効な乗車券を目的地まで保管しましょう。', 'https://www.wien.info/en/travel-info/transport/viennas-public-transportation-system-435356'],
      ['빈에서 걸을 때는 자전거 전용도로와 보행로를 구분해 이동하세요.', 'In Vienna, keep to pedestrian paths and watch for dedicated cycle lanes.', 'ウィーンでは歩道と自転車専用道を見分けて歩きましょう。', 'https://www.wien.gv.at/en/transportation/cycling-traffic-rules'],
    ],
  },
  Hungary: {
    tips: [
      ['화폐는 포린트입니다. 카드 결제나 ATM 출금 때 원화·유로로 즉시 환산할지 묻는다면 적용 환율을 확인하세요.', 'Hungary uses the forint. If a card terminal or ATM offers conversion into won or euros, check the exchange rate before choosing.', 'ハンガリーの通貨はフォリントです。カード決済やATMでウォン・ユーロへの換算を提案されたら、選ぶ前に適用レートを確認しましょう。', 'https://www.mnb.hu/felugyelet/felugyeleti-keretrendszer/felugyeleti-hirek/hirek-ujdonsagok/helyszini-atvaltassal-dragabb-lehet-a-kulfoldi-bankkartyahasznalat'],
      ['온천 갈 때는 수영복과 슬리퍼를 챙기세요.', 'Bring swimwear and flip-flops for the thermal baths.', '温泉には水着とサンダルを持参しましょう。', 'https://www.szechenyibath.hu/en/faq'],
    ],
    cautions: [
      ['부다페스트의 종이 1회권은 지하철에서는 승차 전, 버스·트램에서는 탑승 직후 개찰하세요.', 'Validate a Budapest paper single ticket before entering the metro or immediately after boarding a bus or tram.', 'ブダペストの紙の1回券は地下鉄では乗車前、バス・トラムでは乗車直後に刻印しましょう。', 'https://bkk.hu/en/tickets-and-passes/validation-of-paper-tickets/guide-for-tourists-on-how-to-use-tickets-travelcards-and-passes-in-budapest.12402/'],
      ['헝가리에서는 택시 기사가 수수료를 받고 특정 바·식당을 추천하는 사기가 있습니다. 메뉴 가격을 먼저 확인하세요.', 'In Hungary, some taxi drivers receive a commission for recommending certain bars and restaurants. Check menu prices first.', 'ハンガリーでは一部のタクシー運転手が手数料を受けて特定のバーや飲食店を勧める詐欺があります。先にメニューの価格を確認しましょう。', 'https://www.gov.uk/foreign-travel-advice/hungary/safety-and-security'],
    ],
  },
  Germany: {
    tips: [
      ['독일에서는 카드 결제가 안 되는 매장·식당도 있으므로 현금을 조금 준비하세요.', 'Some shops and restaurants in Germany still do not accept cards, so carry some cash.', 'ドイツではカードを使えない店舗や飲食店もあるため、現金を少し用意しましょう。', 'https://www.bundesbank.de/en/tasks/topics/clear-majority-in-favour-of-mandatory-cashless-payment-acceptance-966848'],
      ['독일에서 판트 표시가 있는 빈 음료 용기는 회수처에 반납하면 보증금을 돌려받을 수 있습니다.', 'In Germany, return empty drink containers marked with a Pfand deposit to an eligible collection point for a refund.', 'ドイツではPfandの表示がある空の飲料容器を回収場所へ返すと、デポジットの返金を受けられます。', 'https://www.bundesumweltministerium.de/themen/kreislaufwirtschaft/abfallarten-und-abfallstroeme/verpackungsabfaelle/pfandflasche-mehrwegflasche'],
    ],
    cautions: [
      ['일요일에는 대부분의 상점이 문을 닫습니다.', 'Most shops close on Sundays.', '日曜はほとんどの店が閉まります。', 'https://www.visitberlin.de/en/frequently-asked-questions'],
      ['대중교통은 개찰구가 없지만 검표가 있고, 표를 개찰하지 않으면 벌금입니다.', 'No gates, but tickets are checked; unvalidated tickets are fined.', '改札はありませんが検札があり、刻印していない切符は罰金です。', 'https://www.bvg.de/en/subscriptions-and-tickets/ticket-control'],
    ],
  },
  Switzerland: {
    tips: [
      ['스위스 트래블 패스로 적용 구간의 기차·버스·유람선을 이용할 수 있고, 일부 산악 교통은 할인됩니다. 이용 구간을 확인하세요.', 'The Swiss Travel Pass covers eligible trains, buses and boats, while some mountain excursions are discounted. Check the area of validity.', 'スイストラベルパスでは対象の鉄道・バス・船を利用でき、一部の登山交通は割引になります。適用区間を確認しましょう。', 'https://www.sbb.ch/en/offers/swiss-travel-pass'],
      ['스위스 수돗물은 마실 수 있습니다. 식수대에서는 음용 가능 표시를 확인하세요.', 'Swiss tap water is safe to drink; check that a public fountain is marked as drinking water.', 'スイスの水道水は飲めます。公共の泉では飲用可能の表示を確認しましょう。', 'https://www.myswitzerland.com/en-se/planning/about-switzerland/general-facts/general-information/drinking-water/'],
    ],
    cautions: [
      ['높은 산은 여름에도 춥고 날씨가 빨리 바뀌니 겉옷을 챙기세요.', 'High mountains are cold even in summer and change fast; bring layers.', '高い山は夏でも寒く天気が変わりやすいので、上着を。', 'https://www.0404.go.kr/ntnSafetyInfo/127/detail'],
      ['일요일에는 상점이 대부분 닫고, 역 안 상점 정도만 엽니다.', 'Most shops close on Sundays except those in stations.', '日曜はほとんどの店が閉まり、駅の店くらいしか開いていません。', 'https://www.myswitzerland.com/en-ca/planning/about-switzerland/general-facts/money-and-shopping/business-hours/'],
    ],
  },
  Portugal: {
    tips: [
      ['포르투갈 식당에서는 빵·올리브 같은 쿠베르 가격을 메뉴에서 확인하세요. 요청하지 않았고 먹지도 않은 음식은 청구할 수 없습니다.', 'At Portuguese restaurants, check the menu price for bread, olives or other couvert. Food you neither requested nor consumed cannot be charged.', 'ポルトガルの飲食店ではパンやオリーブなどのクヴェールの価格をメニューで確認しましょう。注文せず食べてもいない品目は請求できません。', 'https://www.asae.gov.pt/perguntas-frequentes1/area-economica/precos/precos-em-servicos-de-restauracao.aspx'],
      ['커피는 "비카"(에스프레소)를 서서 마시면 저렴합니다.', 'A bica (espresso) at the counter is the cheap local way.', 'コーヒーはカウンターで「ビカ」（エスプレッソ）を飲むのが安くて地元流です。', 'https://www.lisbontourism.org/lisbon-coffee-cafes/'],
    ],
    cautions: [
      ['언덕과 미끄러운 돌길이 많아 밑창이 좋은 신발을 신으세요.', 'Hills and slippery cobbles call for grippy shoes.', '坂と滑りやすい石畳が多いので、滑りにくい靴を。', 'https://lisbontourism.org/lisbon-packing-list/'],
      ['트램 28번 등 붐비는 노선에서 소매치기를 조심하세요.', 'Watch for pickpockets on crowded lines like Tram 28.', '28番トラムなど混雑する路線ではスリに注意しましょう。', 'https://www.0404.go.kr/ntnSafetyInfo/244/detail'],
    ],
  },
  Cambodia: {
    tips: [
      ['캄보디아에서는 미국 달러와 리엘이 모두 쓰입니다. 결제 전 표시 통화와 거스름돈을 확인하세요.', 'Both US dollars and riel are used in Cambodia; check the quoted currency and your change when paying.', 'カンボジアでは米ドルとリエルの両方が使われます。支払い前に表示通貨とお釣りを確認しましょう。', 'https://www.nbc.gov.kh/english/payment_systems/overview_of_payments_instruments.php'],
      ['캄보디아에서는 낡거나 손상된 미국 달러 지폐가 거절될 수 있습니다. 결제할 때 리엘이나 디지털 결제도 고려하세요.', 'Old or damaged US dollar notes may be refused in Cambodia. Consider paying in riel or digitally.', 'カンボジアでは古い米ドル札や傷んだ札を断られることがあります。リエルやデジタル決済も検討しましょう。', 'https://www.tourismcambodia.org/public/index.php/official-activities/tourists-urged-to-use-riel-digital-payments'],
    ],
    cautions: [
      ['유적 사원에서는 어깨·무릎을 가려야 하며, 일부 계단은 경사가 매우 급합니다.', 'Cover shoulders and knees at temples; some stairs are very steep.', '寺院では肩と膝を隠し、一部の階段はとても急です。', 'https://fulltimeexplorer.com/visiting-cambodia-guide-tips/'],
      ['한낮 더위가 심하니 유적은 이른 아침·늦은 오후에 보는 것이 좋습니다.', 'Midday heat is intense; visit temples early or late.', '日中は非常に暑いので、遺跡は早朝か夕方に。', 'https://www.lonelyplanet.com/articles/best-time-to-visit-siem-reap-cambodia'],
    ],
  },
};
