/**
 * 나라별 "알아둘 것(tips)·조심할 것(cautions)" 1 — Claude 초안(금액·자주 바뀌는 입국 규정은 쓰지 않는다).
 * 키는 cities.json 의 countryEn. 각 항목 [ko, en, ja]
 */
export type L3 = readonly [string, string, string];
export interface CountryNote {
  tips: readonly L3[];
  cautions: readonly L3[];
}

export const COUNTRY_1: Record<string, CountryNote> = {
  Japan: {
    tips: [
      ['길거리에 쓰레기통이 거의 없어 작은 비닐봉지를 들고 다니면 편합니다. 편의점 앞 쓰레기통을 쓸 수 있습니다.', 'Public bins are rare; carry a small bag for rubbish or use the bins outside convenience stores.', '街中にゴミ箱が少ないので、小さな袋を持ち歩くと便利です。コンビニ前のゴミ箱も使えます。'],
      ['카드가 많이 되지만 작은 식당·신사·시장은 현금만 받는 곳이 아직 있습니다.', 'Cards are widely accepted, but small eateries, shrines and markets may be cash-only.', 'カードは広く使えますが、小さな飲食店や神社、市場は現金のみの所もあります。'],
    ],
    cautions: [
      ['지진이 나면 건물 안에서는 머리를 보호하고, 휴대폰 긴급 알림과 안내 방송을 따르세요.', 'In an earthquake, protect your head indoors and follow phone alerts and announcements.', '地震の際は室内で頭を守り、携帯の緊急速報と案内放送に従いましょう。'],
      ['지하철·기차 안에서는 통화를 삼가는 것이 예절이고, 우선석 근처에서는 휴대폰 사용을 자제합니다.', 'Avoid phone calls on trains, and keep phone use down near priority seats.', '電車内では通話を控えるのがマナーで、優先席付近では携帯の使用を控えます。'],
    ],
  },
  Thailand: {
    tips: [
      ['편의점과 쇼핑몰은 카드가 되지만 노점·시장·썽태우는 현금이 필요합니다. 작은 지폐를 챙기세요.', 'Malls and convenience stores take cards, but stalls, markets and songthaews need small notes.', 'コンビニやモールはカード可ですが、屋台・市場・ソンテウは現金が必要です。小額紙幣を用意しましょう。'],
      ['사원에서는 어깨·무릎을 가리고, 불상보다 머리를 높이 두거나 발로 가리키지 않습니다.', 'At temples cover shoulders and knees, and never point your feet at Buddha images.', '寺院では肩と膝を隠し、仏像に足を向けないようにします。'],
    ],
    cautions: [
      ['"오늘 왕궁 문 닫았다"며 다른 곳으로 데려가려는 사람은 흔한 사기 수법입니다. 공식 입구에서 직접 확인하세요.', 'Strangers saying “the palace is closed today” and offering a ride are a common scam; check at the official gate.', '「今日は王宮が閉まっている」と別の場所へ誘うのはよくある詐欺です。公式入口で直接確認を。'],
      ['왕실을 비방하는 말이나 행동은 법으로 처벌될 수 있으니 조심하세요.', 'Criticising the monarchy is a criminal offence; be careful what you say and post.', '王室を批判する言動は法律で処罰されることがあるので注意しましょう。'],
    ],
  },
  Vietnam: {
    tips: [
      ['화폐 단위가 커서 0의 개수를 헷갈리기 쉽습니다. 계산할 때 지폐 색과 숫자를 한 번 더 보세요.', 'With so many zeros, notes are easy to mix up; double-check colours and digits when paying.', '桁が大きく0の数を間違えやすいので、支払い時に紙幣の色と数字を確認しましょう。'],
      ['차량 호출 앱(그랩 등)을 쓰면 요금이 미리 정해져 택시 흥정이 필요 없습니다.', 'Ride-hailing apps such as Grab fix the fare upfront, so no haggling with taxis.', 'Grabなどの配車アプリなら料金が事前に決まり、交渉不要です。'],
    ],
    cautions: [
      ['오토바이 날치기가 있으니 길가 쪽 손으로 휴대폰을 들고 다니지 마세요.', 'Motorbike snatch thefts happen; don’t hold your phone on the street side.', 'バイクでのひったくりがあるので、車道側の手で携帯を持たないように。'],
      ['길을 건널 때 뛰지 말고 일정한 속도로 걸으면 오토바이가 피해 갑니다.', 'When crossing, walk at a steady pace rather than running so traffic can avoid you.', '道を渡るときは走らず一定の速さで歩くと、バイクが避けてくれます。'],
    ],
  },
  Taiwan: {
    tips: [
      ['교통카드(이지카드·아이패스)로 지하철·버스와 편의점 결제까지 할 수 있습니다.', 'An EasyCard or iPASS works on trains and buses and in convenience stores.', '悠遊カードやiPASSで電車・バスやコンビニの支払いができます。'],
      ['야시장은 현금 위주라 작은 지폐와 동전을 챙기세요.', 'Night markets are mostly cash; bring small notes and coins.', '夜市は現金中心なので小額紙幣と小銭を用意しましょう。'],
    ],
    cautions: [
      ['지하철역·차량 안에서는 물을 포함해 먹고 마시는 것이 금지되어 벌금이 있습니다.', 'Eating and drinking, even water, is banned in MRT stations and trains, with fines.', 'MRTの駅と車内では水も含め飲食禁止で、罰金があります。'],
      ['여름~가을 태풍 시즌에는 항공·배편이 결항될 수 있으니 일기예보를 확인하세요.', 'Typhoons in summer and autumn can cancel flights and ferries; watch the forecast.', '夏〜秋の台風シーズンは飛行機や船が欠航することがあるので、天気予報を確認しましょう。'],
    ],
  },
  Singapore: {
    tips: [
      ['지하철·버스는 비접촉 카드로 바로 탈 수 있습니다.', 'Tap a contactless card to ride trains and buses.', '電車・バスはタッチ決済でそのまま乗れます。'],
      ['호커 센터에서는 휴지 한 묶음을 자리에 올려 두면 자리를 맡았다는 표시입니다.', 'A packet of tissues on a hawker-centre seat means it is taken.', 'ホーカーセンターで席にティッシュを置くのは席取りの印です。'],
    ],
    cautions: [
      ['쓰레기 무단 투기, 지하철 안 음식물 섭취 등에 벌금이 엄격하게 부과됩니다.', 'Littering and eating on trains are fined strictly.', 'ポイ捨てや電車内での飲食などに厳しい罰金があります。'],
      ['전자담배는 반입과 사용 모두 불법입니다.', 'E-cigarettes and vapes are illegal to bring in or use.', '電子たばこは持ち込みも使用も違法です。'],
    ],
  },
  France: {
    tips: [
      ['식당 계산서에 봉사료가 포함되어 있어 팁은 선택입니다.', 'Service is included on restaurant bills, so tipping is optional.', 'レストランの会計にサービス料が含まれているので、チップは任意です。'],
      ['일요일에는 문을 닫는 상점이 많으니 쇼핑은 평일에 계획하세요.', 'Many shops close on Sundays; plan shopping for weekdays.', '日曜は閉まる店が多いので、買い物は平日に。'],
    ],
    cautions: [
      ['관광지와 지하철에서 소매치기가 많으니 가방은 앞으로 메세요.', 'Pickpockets work tourist sites and the metro; wear your bag in front.', '観光地や地下鉄はスリが多いので、バッグは前に。'],
      ['서명 운동·팔찌를 내밀며 다가오는 사람은 피하는 것이 좋습니다.', 'Avoid people pushing petitions or friendship bracelets on you.', '署名やミサンガを差し出して近づく人は避けましょう。'],
    ],
  },
  'United Kingdom': {
    tips: [
      ['대부분의 결제가 비접촉 카드로 되고, 지하철도 카드로 바로 탈 수 있습니다.', 'Almost everything takes contactless, including the Tube.', 'ほとんどの支払いがタッチ決済でき、地下鉄もカードで乗れます。'],
      ['식당 계산서에 봉사료(서비스 차지)가 붙어 있으면 팁을 따로 낼 필요가 없습니다.', 'If a service charge is on the bill, no extra tip is needed.', '会計にサービス料が含まれていれば、別にチップは不要です。'],
    ],
    cautions: [
      ['차가 왼쪽으로 다녀 길을 건널 때 오른쪽을 먼저 보세요. 바닥에 "LOOK RIGHT" 안내가 있습니다.', 'Traffic drives on the left; look right first when crossing.', '車は左側通行なので、道を渡るときはまず右を確認しましょう。'],
      ['붐비는 거리와 지하철에서 휴대폰 날치기가 잦으니 길가에서 휴대폰을 꺼내 들고 있지 마세요.', 'Phone snatching is common in busy streets; don’t hold your phone out at the kerb.', '人混みや地下鉄で携帯のひったくりが多いので、道端で携帯を手に持たないように。'],
    ],
  },
  Philippines: {
    tips: [
      ['섬 사이 이동은 배편이 날씨에 따라 자주 바뀌니 일정에 여유를 두세요.', 'Inter-island ferries are often changed by weather; leave slack in your plans.', '島間の船は天候で変更されやすいので、日程に余裕を持ちましょう。'],
      ['큰 지폐는 거스름돈이 없는 곳이 많아 작은 지폐를 챙기세요.', 'Many places lack change for large notes; carry small bills.', '高額紙幣はお釣りがない所が多いので、小額紙幣を。'],
    ],
    cautions: [
      ['태풍 시즌(대략 6~11월)에는 결항·결항 후 숙박 연장에 대비하세요.', 'In typhoon season (roughly June–November), be ready for cancellations.', '台風シーズン（おおむね6〜11月）は欠航に備えましょう。'],
      ['환전은 공항·은행·공식 환전소에서 하고, 길거리 환전은 피하세요.', 'Change money at banks or licensed exchangers, not on the street.', '両替は銀行や公認両替所で行い、路上両替は避けましょう。'],
    ],
  },
  'South Korea': {
    tips: [
      ['교통카드 하나로 지하철·버스를 갈아타면 환승 할인이 됩니다.', 'Transfers between subway and bus are discounted with one transit card.', '交通カード1枚で地下鉄とバスを乗り換えると割引になります。'],
      ['주말·연휴 KTX와 인기 숙소는 일찍 매진되니 미리 예약하세요.', 'KTX trains and popular stays sell out on weekends and holidays; book ahead.', '週末や連休のKTXと人気の宿は早く売り切れるので予約を。'],
    ],
    cautions: [
      ['여름 장마·태풍 때는 섬·산 일정(배편·탐방로)이 통제될 수 있습니다.', 'Monsoon and typhoon weather can close island ferries and mountain trails.', '梅雨や台風の時期は島の船便や登山道が規制されることがあります。'],
      ['지역 축제 기간에는 숙소 값과 교통 혼잡이 커지니 날짜를 먼저 확인하세요.', 'Local festivals push up room prices and traffic; check dates first.', '地域の祭り期間は宿泊料と混雑が増すので、日程を確認しましょう。'],
    ],
  },
  Guam: {
    tips: [
      ['미국령이라 식당·택시에서 팁 문화가 있습니다.', 'As a US territory, tipping is customary in restaurants and taxis.', 'アメリカ領なので、レストランやタクシーでチップの習慣があります。'],
      ['대중교통이 적어 렌터카나 쇼핑몰 셔틀을 많이 이용합니다.', 'Public transport is limited; most visitors rent a car or use shopping shuttles.', '公共交通が少なく、レンタカーやショッピングシャトルを使うのが一般的です。'],
    ],
    cautions: [
      ['자외선이 매우 강해 선크림과 모자가 필수입니다.', 'The sun is intense; sunscreen and a hat are essential.', '紫外線がとても強いので、日焼け止めと帽子は必須です。'],
      ['산호초 해변에서는 맨발로 걷다 다칠 수 있어 물놀이 신발이 있으면 좋습니다.', 'Reef shallows can cut bare feet; water shoes help.', 'サンゴ礁の浅瀬は素足だとけがをしやすいので、マリンシューズがあると安心です。'],
    ],
  },
  Australia: {
    tips: [
      ['대부분의 결제가 카드로 되고, 대중교통도 비접촉 카드로 탈 수 있습니다.', 'Card payment is nearly universal, including tapping on public transport.', 'ほとんどの支払いがカードで、公共交通もタッチ決済で乗れます。'],
      ['식당 팁은 의무가 아니며, 서비스가 좋았을 때만 남기는 편입니다.', 'Tipping is not expected; leave one only for great service.', 'チップは義務ではなく、良いサービスのときに置く程度です。'],
    ],
    cautions: [
      ['해변에서는 노란·빨간 깃발 사이에서만 수영하세요. 이안류가 위험합니다.', 'Swim only between the red and yellow flags; rip currents are dangerous.', 'ビーチでは赤と黄色の旗の間だけで泳ぎましょう。離岸流が危険です。'],
      ['음식·식물 반입 검역이 매우 엄격하니 입국 신고서에 정직하게 신고하세요.', 'Biosecurity is strict; declare all food and plant items on arrival.', '食品・植物の検疫が非常に厳しいので、入国時に正直に申告しましょう。'],
    ],
  },
  Czechia: {
    tips: [
      ['체코 화폐는 코루나입니다. 유로를 받는 곳도 있지만 환율이 불리한 경우가 많습니다.', 'The currency is the koruna; euros are sometimes taken but at poor rates.', '通貨はコルナ。ユーロ可の店もありますが、レートが不利なことが多いです。'],
      ['대중교통 표는 처음 탈 때 개찰기에 찍어야 유효합니다.', 'Validate transit tickets when you first board.', '公共交通の切符は最初の乗車時に刻印して有効になります。'],
    ],
    cautions: [
      ['"수수료 0%" 환전소라도 환율이 나쁠 수 있으니 실제 받는 금액을 먼저 확인하세요.', 'Even “0% commission” exchanges can have bad rates; check the amount you’ll receive.', '「手数料0%」の両替所でもレートが悪いことがあるので、受取額を先に確認しましょう。'],
      ['구시가지 관광지 주변 소매치기를 조심하세요.', 'Watch for pickpockets around the Old Town sights.', '旧市街の観光地周辺ではスリに注意しましょう。'],
    ],
  },
  Macau: {
    tips: [
      ['대형 리조트의 무료 셔틀버스로 국경·페리 터미널과 시내를 오갈 수 있습니다.', 'Free resort shuttles link the border, ferry terminals and town.', '大型リゾートの無料シャトルで国境やフェリーターミナルと市内を移動できます。'],
      ['홍콩달러를 받지만 거스름돈은 파타카로 받는 경우가 많습니다.', 'Hong Kong dollars are accepted, but change usually comes in patacas.', '香港ドルも使えますが、お釣りはパタカのことが多いです。'],
    ],
    cautions: [
      ['카지노 구역은 21세 미만 출입이 금지됩니다.', 'Casino floors are off-limits to anyone under 21.', 'カジノフロアは21歳未満の入場が禁止です。'],
      ['주말·연휴에는 국경과 페리가 매우 붐비니 시간을 넉넉히 잡으세요.', 'Borders and ferries are packed on weekends and holidays; allow extra time.', '週末や連休は国境とフェリーがとても混むので、時間に余裕を。'],
    ],
  },
  Hawaii: {
    tips: [
      ['식당·택시·호텔 청소 등에 팁을 주는 것이 일반적입니다.', 'Tipping is standard for restaurants, taxis and housekeeping.', 'レストランやタクシー、ホテルの清掃にチップを渡すのが一般的です。'],
      ['인기 명소(다이아몬드 헤드, 하나우마 베이)는 예약제라 미리 예약하세요.', 'Popular spots like Diamond Head and Hanauma Bay require advance reservations.', '人気スポット（ダイヤモンドヘッド、ハナウマ湾）は予約制なので事前予約を。'],
    ],
    cautions: [
      ['렌터카 안에 귀중품을 두지 마세요. 차량 털이가 있습니다.', 'Never leave valuables in rental cars; break-ins happen.', 'レンタカーの中に貴重品を置かないでください。車上荒らしがあります。'],
      ['산호초 보호를 위해 규정에 맞는 선크림을 쓰고, 바다거북 등 야생동물에 다가가지 마세요.', 'Use reef-safe sunscreen and keep your distance from sea turtles and other wildlife.', 'サンゴ保護のため規定に合う日焼け止めを使い、ウミガメなどの野生動物に近づかないで。'],
    ],
  },
  Saipan: {
    tips: [
      ['미국령이라 팁 문화가 있고, 메뉴 가격에 팁이 빠져 있는 경우가 많습니다.', 'As a US territory, tipping is customary and usually not included.', 'アメリカ領のためチップ文化があり、メニュー価格には含まれないことが多いです。'],
      ['대중교통이 거의 없어 렌터카나 호텔 셔틀을 이용합니다.', 'There is almost no public transport; rent a car or use hotel shuttles.', '公共交通がほとんどないので、レンタカーかホテルのシャトルを使います。'],
    ],
    cautions: [
      ['파도가 센 해변은 수영 금지 구역이 있으니 안내판을 확인하세요.', 'Some beaches with strong surf are no-swim zones; check the signs.', '波の強いビーチは遊泳禁止区域があるので、看板を確認しましょう。'],
      ['자외선이 매우 강해 한낮 야외 활동 때 물과 선크림을 챙기세요.', 'Midday sun is fierce; carry water and sunscreen.', '日中の紫外線が非常に強いので、水と日焼け止めを。'],
    ],
  },
  Mongolia: {
    tips: [
      ['도시 밖은 카드가 안 되는 곳이 많아 현금을 챙기세요.', 'Outside the city cards are often not accepted; carry cash.', '都市の外ではカードが使えない所が多いので、現金を持ちましょう。'],
      ['초원 투어는 길이 험해 이동 시간이 길니 일정에 여유를 두세요.', 'Countryside roads are rough and slow; leave slack in tours.', '草原ツアーは道が悪く移動に時間がかかるので、日程に余裕を。'],
    ],
    cautions: [
      ['게르에 들어갈 때 문지방을 밟지 않는 것이 예절입니다.', 'Do not step on the threshold when entering a ger.', 'ゲルに入るときは敷居を踏まないのがマナーです。'],
      ['겨울 울란바토르는 대기오염이 심한 날이 많아 마스크를 챙기세요.', 'Winter air pollution in Ulaanbaatar can be severe; bring a mask.', '冬のウランバートルは大気汚染がひどい日が多いので、マスクを。'],
    ],
  },
  Austria: {
    tips: [
      ['일요일과 공휴일에는 대부분의 상점이 문을 닫습니다.', 'Most shops close on Sundays and public holidays.', '日曜・祝日はほとんどの店が閉まります。'],
      ['식당에서는 계산할 때 금액을 조금 올려 말하는 방식으로 팁을 줍니다.', 'Tip by rounding up when you pay at the table.', 'レストランでは支払い時に金額を少し上乗せしてチップを渡します。'],
    ],
    cautions: [
      ['대중교통은 개찰구가 없지만 검표원이 불시에 확인하며 무임승차 벌금이 큽니다.', 'There are no gates, but inspectors check tickets and fines are steep.', '改札はありませんが、抜き打ち検札があり罰金が高額です。'],
      ['자전거 도로를 걷지 않도록 조심하세요.', 'Keep out of the bike lanes when walking.', '歩くときは自転車道に入らないように。'],
    ],
  },
  Hungary: {
    tips: [
      ['화폐는 포린트입니다. 카드 결제 시 원화·유로 대신 현지 통화로 결제하면 유리한 경우가 많습니다.', 'The currency is the forint; when paying by card, choose forints rather than conversion.', '通貨はフォリント。カード払いでは現地通貨を選ぶ方が有利なことが多いです。'],
      ['온천 갈 때는 수영복과 슬리퍼를 챙기세요.', 'Bring swimwear and flip-flops for the thermal baths.', '温泉には水着とサンダルを持参しましょう。'],
    ],
    cautions: [
      ['대중교통 표는 탈 때마다 개찰해야 하며, 검표원 확인이 잦습니다.', 'Validate your ticket on every ride; inspectors check often.', '公共交通の切符は乗るたびに刻印が必要で、検札がよくあります。'],
      ['메뉴판 없이 주문받는 바·식당은 가격을 먼저 확인하세요.', 'At bars that won’t show a menu, confirm prices first.', 'メニューを見せない店では、先に価格を確認しましょう。'],
    ],
  },
  Germany: {
    tips: [
      ['카드가 늘었지만 작은 식당·빵집은 현금만 받는 곳이 아직 있습니다.', 'Cards are spreading, but small eateries and bakeries can be cash-only.', 'カードは増えましたが、小さな飲食店やパン屋は現金のみの所もあります。'],
      ['빈 병·캔은 마트 회수기에 넣으면 보증금(판트)을 돌려받습니다.', 'Return bottles and cans to supermarket machines to get the deposit (Pfand).', '空き瓶・缶はスーパーの回収機に入れるとデポジット（パント）が戻ります。'],
    ],
    cautions: [
      ['일요일에는 대부분의 상점이 문을 닫습니다.', 'Most shops close on Sundays.', '日曜はほとんどの店が閉まります。'],
      ['대중교통은 개찰구가 없지만 검표가 있고, 표를 개찰하지 않으면 벌금입니다.', 'No gates, but tickets are checked; unvalidated tickets are fined.', '改札はありませんが検札があり、刻印していない切符は罰金です。'],
    ],
  },
  Switzerland: {
    tips: [
      ['스위스 트래블 패스·지역 패스로 기차·유람선·산악 교통을 할인받을 수 있습니다.', 'Swiss Travel Pass and regional passes cut costs on trains, boats and mountain lifts.', 'スイストラベルパスや地域パスで鉄道・遊覧船・登山交通が割引になります。'],
      ['수돗물과 공공 식수대 물을 그대로 마실 수 있습니다.', 'Tap water and public fountains are safe to drink.', '水道水や公共の水飲み場の水はそのまま飲めます。'],
    ],
    cautions: [
      ['높은 산은 여름에도 춥고 날씨가 빨리 바뀌니 겉옷을 챙기세요.', 'High mountains are cold even in summer and change fast; bring layers.', '高い山は夏でも寒く天気が変わりやすいので、上着を。'],
      ['일요일에는 상점이 대부분 닫고, 역 안 상점 정도만 엽니다.', 'Most shops close on Sundays except those in stations.', '日曜はほとんどの店が閉まり、駅の店くらいしか開いていません。'],
    ],
  },
  Portugal: {
    tips: [
      ['식당에서 처음 나오는 빵·올리브(쿠베르트)는 먹으면 요금이 붙습니다.', 'Bread and olives brought to the table (couvert) are charged if eaten.', '最初に出てくるパンやオリーブ（クーヴェール）は食べると料金がかかります。'],
      ['커피는 "비카"(에스프레소)를 서서 마시면 저렴합니다.', 'A bica (espresso) at the counter is the cheap local way.', 'コーヒーはカウンターで「ビカ」（エスプレッソ）を飲むのが安くて地元流です。'],
    ],
    cautions: [
      ['언덕과 미끄러운 돌길이 많아 밑창이 좋은 신발을 신으세요.', 'Hills and slippery cobbles call for grippy shoes.', '坂と滑りやすい石畳が多いので、滑りにくい靴を。'],
      ['트램 28번 등 붐비는 노선에서 소매치기를 조심하세요.', 'Watch for pickpockets on crowded lines like Tram 28.', '28番トラムなど混雑する路線ではスリに注意しましょう。'],
    ],
  },
  Cambodia: {
    tips: [
      ['달러와 리엘을 함께 쓰며, 달러로 내면 거스름돈을 리엘로 받는 경우가 많습니다.', 'US dollars and riel are both used; change often comes in riel.', '米ドルとリエルの両方が使われ、お釣りはリエルのことが多いです。'],
      ['찢어지거나 낡은 달러 지폐는 받지 않는 곳이 많아 깨끗한 지폐를 챙기세요.', 'Torn or worn dollar bills are often refused; bring clean notes.', '破れたり古いドル紙幣は受け取ってもらえないことが多いので、きれいな紙幣を。'],
    ],
    cautions: [
      ['유적 사원에서는 어깨·무릎을 가려야 하며, 일부 계단은 경사가 매우 급합니다.', 'Cover shoulders and knees at temples; some stairs are very steep.', '寺院では肩と膝を隠し、一部の階段はとても急です。'],
      ['한낮 더위가 심하니 유적은 이른 아침·늦은 오후에 보는 것이 좋습니다.', 'Midday heat is intense; visit temples early or late.', '日中は非常に暑いので、遺跡は早朝か夕方に。'],
    ],
  },
};
