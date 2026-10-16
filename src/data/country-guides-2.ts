/** 나라별 알아둘 것·조심할 것 2 — 형식은 country-guides-1.ts 와 같다 */
import type { CountryNote } from './country-guides-1';

export const COUNTRY_2: Record<string, CountryNote> = {
  Canada: {
    tips: [
      ['메뉴판·가격표 가격에는 판매세가 빠져 있어 계산할 때 더해집니다. 식당에서는 팁을 따로 남기는 것이 일반적입니다.', 'Menu and shelf prices exclude sales tax, which is added at the till; tipping in restaurants is customary.', 'メニューや値札の価格には売上税が含まれず、会計時に加算されます。レストランではチップを置くのが一般的です。'],
      ['대부분의 상점·대중교통에서 비접촉 카드 결제가 됩니다.', 'Contactless card payment works in most shops and on public transit.', 'ほとんどの店や公共交通でタッチ決済が使えます。'],
    ],
    cautions: [
      ['국립공원이나 산길에서는 곰 같은 야생동물을 만날 수 있으니 안내판 규칙을 지키고 음식을 밖에 두지 마세요.', 'In parks and on trails you may meet bears and other wildlife; follow posted rules and never leave food out.', '国立公園や山道ではクマなどの野生動物に出会うことがあります。掲示のルールを守り、食べ物を外に置かないように。'],
      ['도심 일부 구역은 밤에 분위기가 험할 수 있어, 늦은 시간에는 큰길과 사람이 많은 곳으로 다니세요.', 'Some downtown blocks feel rough at night; stick to busy main streets late in the evening.', '都心の一部は夜に治安が悪く感じることがあるので、遅い時間は人通りの多い大通りを歩きましょう。'],
    ],
  },
  'New Zealand': {
    tips: [
      ['자외선이 매우 강해 흐린 날에도 선크림과 모자를 챙기세요.', 'UV is very strong, even on cloudy days; bring sunscreen and a hat.', '紫外線がとても強いので、曇りの日も日焼け止めと帽子を。'],
      ['차는 왼쪽으로 다니므로 길을 건널 때 오른쪽을 먼저 보세요.', 'Traffic drives on the left, so look right first when crossing.', '車は左側通行なので、道を渡るときはまず右を確認しましょう。'],
    ],
    cautions: [
      ['입국할 때 음식·식물·흙 묻은 신발 같은 물품은 반드시 신고해야 하며, 신고하지 않으면 벌금을 물 수 있습니다.', 'You must declare food, plants and muddy footwear on arrival; undeclared items can bring an on-the-spot fine.', '入国時は食品・植物・泥のついた靴などを必ず申告する必要があり、申告しないと罰金の対象になります。'],
      ['산과 바다의 날씨가 빨리 바뀌니 트레킹 전에는 기상 정보를 확인하고 방수 옷을 준비하세요.', 'Mountain and coastal weather changes fast; check forecasts before hikes and carry waterproofs.', '山や海の天気は変わりやすいので、トレッキング前に天気を確認し、防水の服を用意しましょう。'],
    ],
  },
  China: {
    tips: [
      ['현지 결제는 알리페이·위챗페이가 기본이라 출국 전에 해외 카드를 연결해 두면 편합니다. 현금도 조금 챙기세요.', 'Payment runs on Alipay and WeChat Pay; link a foreign card before you fly and carry some cash too.', '支払いはアリペイ・WeChat Payが基本なので、出発前に海外カードを登録しておくと便利です。現金も少し用意を。'],
      ['구글·카카오톡 등 일부 해외 앱이 막혀 있어 지도는 현지 지도 앱을 미리 받아 두는 것이 좋습니다.', 'Many foreign apps such as Google are blocked, so download a local map app in advance.', 'Googleなど一部の海外アプリは使えないので、地図は現地の地図アプリを事前に入れておきましょう。'],
    ],
    cautions: [
      ['지하철과 관광지 입구에서 보안 검색을 하고, 기차표·입장권 예매에는 여권이 필요합니다. 여권을 항상 지니세요.', 'Metro stations and sights run security checks, and train or ticket bookings need your passport; always carry it.', '地下鉄や観光地の入口で保安検査があり、切符や入場券の予約にはパスポートが必要です。常に携帯しましょう。'],
      ['관광지 주변에서 먼저 말을 걸며 찻집이나 미술 전시로 데려가는 사람은 바가지 수법일 수 있습니다.', 'Friendly strangers near sights inviting you to a tea house or art show may be running a rip-off.', '観光地で話しかけて茶館や美術展へ誘う人は、ぼったくりの手口のことがあります。'],
    ],
  },
  Netherlands: {
    tips: [
      ['기차·트램·버스 모두 비접촉 카드로 탈 때와 내릴 때 단말기에 찍으면 됩니다.', 'Trains, trams and buses accept contactless cards; tap in and tap out every time.', '電車・トラム・バスはタッチ決済カードで乗れます。乗るときと降りるときに必ずタッチを。'],
      ['많은 가게가 카드만 받고 현금을 받지 않는 경우도 있습니다.', 'Many places are card-only and some refuse cash altogether.', 'カードのみで現金を受け付けない店も多くあります。'],
    ],
    cautions: [
      ['자전거 도로(붉은색 길)는 걷지 마세요. 자전거가 빠르게 지나가 사고가 잦습니다.', 'Never walk on the red-paved cycle lanes; bikes come fast and collisions are common.', '赤い自転車道を歩かないように。自転車が速く走り、事故がよく起きます。'],
      ['관광객이 많은 역과 트램 안에서는 소매치기가 잦으니 가방을 앞으로 메세요.', 'Pickpockets work busy stations and trams; wear your bag in front.', '観光客の多い駅やトラムではスリが多いので、バッグは前に持ちましょう。'],
    ],
  },
  Greece: {
    tips: [
      ['여름 한낮에는 매우 더워 유적지는 아침 일찍이나 늦은 오후에 가는 것이 좋습니다. 물을 꼭 챙기세요.', 'Summer middays are scorching; visit ancient sites early or late, and carry water.', '夏の日中はとても暑いので、遺跡は朝早くか夕方に。水を必ず持ちましょう。'],
      ['식당에서 빵과 물이 자리 요금처럼 계산서에 붙는 경우가 있으니 메뉴판을 확인하세요.', 'Bread and water can appear on the bill as a cover; check the menu.', 'パンや水が席料のように会計に加わることがあるので、メニューを確認しましょう。'],
    ],
    cautions: [
      ['아테네 지하철, 특히 공항·관광지 노선에서는 소매치기를 조심하세요.', 'Watch for pickpockets on the Athens metro, especially the airport and tourist lines.', 'アテネの地下鉄、特に空港や観光地の路線ではスリに注意しましょう。'],
      ['유적지의 대리석 길은 매우 미끄러우니 밑창이 단단한 신발을 신으세요.', 'Marble paths at ancient sites are very slippery; wear shoes with good grip.', '遺跡の大理石の道はとても滑りやすいので、滑りにくい靴を履きましょう。'],
    ],
  },
  Croatia: {
    tips: [
      ['성수기(여름)에는 구시가지가 크루즈 관광객으로 붐비니 이른 아침이나 저녁에 둘러보세요.', 'In summer the old towns fill with cruise crowds; explore early morning or evening.', '夏の繁忙期は旧市街がクルーズ客で混むので、早朝か夕方に回りましょう。'],
      ['해변은 자갈이 많아 물놀이 신발이 있으면 편합니다.', 'Beaches are mostly pebbly, so water shoes help.', 'ビーチは小石が多いので、マリンシューズがあると便利です。'],
    ],
    cautions: [
      ['구시가지 성벽과 돌계단은 그늘이 적고 미끄러워, 한낮 더위와 발밑을 조심하세요.', 'City walls and stone steps have little shade and get slippery; mind the midday heat and your footing.', '城壁や石段は日陰が少なく滑りやすいので、日中の暑さと足元に注意を。'],
      ['일부 해변·성당은 수영복 차림으로 시내를 다니거나 들어가는 것을 금지합니다.', 'Walking around town or entering churches in swimwear is banned in some places.', '一部の街では水着姿で市内を歩いたり教会に入ったりすることが禁止されています。'],
    ],
  },
  'United States': {
    tips: [
      ['가격표에는 판매세가 빠져 있고, 식당에서는 팁을 따로 남기는 것이 관행입니다.', 'Shelf prices exclude sales tax, and leaving a tip in restaurants is expected.', '値札には売上税が含まれず、レストランではチップを置くのが慣習です。'],
      ['도시가 넓어 지역마다 교통이 크게 다르니, 대중교통이 약한 곳은 차량 호출 앱을 미리 받아 두세요.', 'Cities are spread out and transit varies a lot; install a ride-hailing app where buses are sparse.', '都市が広く交通事情が地域で大きく違うので、公共交通が弱い所では配車アプリを入れておきましょう。'],
    ],
    cautions: [
      ['차 안에 가방·물건을 보이게 두면 차량 털이가 잦으니 아무것도 남기지 마세요.', 'Car break-ins are common; never leave bags or anything visible in a parked car.', '車上荒らしが多いので、駐車した車内に荷物を見える状態で置かないように。'],
      ['도심 일부 구역은 밤에 위험할 수 있으니 숙소 주변 분위기를 미리 알아보고 늦은 시간에는 이동 수단을 정해 두세요.', 'Some downtown areas can be unsafe at night; research your neighbourhood and plan late-night rides.', '都心の一部は夜に危険なことがあるので、宿の周辺を事前に調べ、夜の移動手段を決めておきましょう。'],
    ],
  },
  Malaysia: {
    tips: [
      ['차량 호출 앱(Grab)이 널리 쓰여 택시 요금 흥정 없이 이동할 수 있습니다.', 'Ride-hailing (Grab) is widespread, so you can skip taxi haggling.', '配車アプリ（Grab）が広く使われ、タクシーの値段交渉なしで移動できます。'],
      ['이슬람 사원에 들어갈 때는 긴 옷을 입고, 입구에서 빌려주는 가운을 쓸 수 있습니다.', 'Dress modestly for mosques; robes are often lent at the entrance.', 'モスクに入るときは肌を隠す服装で。入口でローブを貸してくれることもあります。'],
    ],
    cautions: [
      ['오토바이 날치기가 있으니 가방은 차도 반대쪽으로 메고 다니세요.', 'Bag snatching from motorbikes happens; carry your bag on the side away from traffic.', 'バイクによるひったくりがあるので、バッグは車道と反対側に持ちましょう。'],
      ['오후에 갑자기 쏟아지는 열대성 소나기가 잦아 우산을 늘 챙기세요.', 'Sudden tropical downpours are common in the afternoon; always carry an umbrella.', '午後に突然のスコールが多いので、傘を常に持ちましょう。'],
    ],
  },
  Italy: {
    tips: [
      ['바에서 서서 마시는 커피와 테이블에 앉아 마시는 커피는 값이 다를 수 있습니다.', 'Coffee drunk standing at the bar can cost less than at a table.', 'バールで立って飲むコーヒーと席で飲むコーヒーは値段が違うことがあります。'],
      ['기차표는 탑승 전에 개찰(검인)이 필요한 종류가 있으니 표에 적힌 안내를 확인하세요.', 'Some paper train tickets must be validated before boarding; check what your ticket says.', '一部の紙の切符は乗車前に刻印が必要なので、切符の案内を確認しましょう。'],
    ],
    cautions: [
      ['로마·피렌체·베네치아 관광지와 대중교통에서는 소매치기가 매우 잦습니다.', 'Pickpocketing is very common at sights and on transit in Rome, Florence and Venice.', 'ローマ・フィレンツェ・ヴェネツィアの観光地や公共交通ではスリが非常に多いです。'],
      ['일부 도시 중심부는 허가 차량만 들어갈 수 있는 구역(ZTL)이라 렌터카로 들어가면 벌금이 나옵니다.', 'Many historic centres are limited-traffic zones (ZTL); driving in with a rental car brings fines.', '多くの歴史地区は進入制限区域（ZTL）で、レンタカーで入ると罰金になります。'],
    ],
  },
  Spain: {
    tips: [
      ['점심은 오후 2시 전후, 저녁은 밤 9시 이후가 보통이라 그 사이에는 문을 닫는 식당이 많습니다.', 'Lunch is around 2pm and dinner after 9pm; many kitchens close in between.', '昼食は14時前後、夕食は21時以降が普通で、その間は閉まる店が多いです。'],
      ['주요 성당·궁전은 시간 지정 예약제라 온라인 공식 판매처에서 미리 사 두는 것이 좋습니다.', 'Major monuments use timed entry; buy ahead from the official site.', '主要な聖堂や宮殿は時間指定制なので、公式サイトで事前購入がおすすめです。'],
    ],
    cautions: [
      ['바르셀로나 람블라스 거리·지하철과 마드리드 솔 광장 주변은 소매치기가 매우 많습니다.', 'Pickpockets are rife on Las Ramblas and the Barcelona metro, and around Madrid’s Puerta del Sol.', 'バルセロナのランブラス通りや地下鉄、マドリードのソル広場周辺はスリが非常に多いです。'],
      ['테라스 자리에서 휴대폰을 테이블 위에 두면 순식간에 가져가는 경우가 있습니다.', 'Phones left on terrace tables can vanish in seconds.', 'テラス席でテーブルに携帯を置くと、一瞬で盗られることがあります。'],
    ],
  },
  Kazakhstan: {
    tips: [
      ['현지 차량 호출 앱(Yandex Go 등)으로 택시를 부르면 요금이 미리 정해져 편합니다.', 'Local ride-hailing apps such as Yandex Go give fixed fares upfront.', '現地の配車アプリ（Yandex Goなど）を使うと料金が事前に決まり便利です。'],
      ['러시아어가 널리 쓰여 번역 앱을 준비하면 메뉴와 표지판을 읽기 쉽습니다.', 'Russian is widely used; a translation app helps with menus and signs.', 'ロシア語が広く使われるので、翻訳アプリがあるとメニューや標識が読みやすくなります。'],
    ],
    cautions: [
      ['겨울에는 영하로 크게 내려가고 길이 얼어 미끄러우니 미끄럼 방지 신발과 방한복을 챙기세요.', 'Winters drop well below freezing with icy pavements; bring grippy boots and warm layers.', '冬は氷点下を大きく下回り道が凍るので、滑りにくい靴と防寒着を。'],
      ['산악 지역에 갈 때는 고도와 날씨 변화에 대비하고, 공식 투어나 등록된 가이드를 이용하세요.', 'For mountain trips, prepare for altitude and weather swings and use official tours or registered guides.', '山岳地帯へは高度と天候の変化に備え、公式ツアーや登録ガイドを利用しましょう。'],
    ],
  },
  Uzbekistan: {
    tips: [
      ['도시 간 이동은 고속열차가 편하지만 성수기에는 표가 빨리 매진되니 미리 예매하세요.', 'High-speed trains link the cities but sell out in peak season; book early.', '都市間は高速鉄道が便利ですが、繁忙期は早く売り切れるので事前予約を。'],
      ['모스크와 성지에서는 어깨·무릎을 가리고, 여성은 스카프를 준비하면 좋습니다.', 'At mosques and shrines cover shoulders and knees; women may want a scarf.', 'モスクや聖地では肩と膝を隠し、女性はスカーフがあると安心です。'],
    ],
    cautions: [
      ['시장과 택시는 가격을 미리 확인하거나 흥정하고, 미터기 없는 택시는 출발 전에 요금을 정하세요.', 'Agree prices at markets and fix taxi fares before setting off if there is no meter.', '市場やタクシーは事前に値段を確認し、メーターのないタクシーは出発前に料金を決めましょう。'],
      ['여름 한낮 기온이 매우 높아 오후 야외 관광은 피하고 물을 자주 마시세요.', 'Summer afternoons are extremely hot; avoid outdoor sightseeing then and drink plenty of water.', '夏の日中は非常に暑いので、午後の屋外観光は避け、水をこまめに飲みましょう。'],
    ],
  },
  Georgia: {
    tips: [
      ['현지 차량 호출 앱(Bolt 등)을 쓰면 택시 요금을 흥정하지 않아도 됩니다.', 'Ride-hailing apps such as Bolt save you from haggling taxi fares.', '配車アプリ（Boltなど）を使えばタクシー料金の交渉が不要です。'],
      ['교회에 들어갈 때 여성은 머리를 가리고 치마를 두르는 것이 예절이며, 입구에서 빌려주는 곳도 있습니다.', 'Women cover their hair and wear a skirt in churches; wraps are often lent at the door.', '教会では女性は髪を覆いスカートを着用するのが礼儀で、入口で貸してくれる所もあります。'],
    ],
    cautions: [
      ['트빌리시 구시가지는 언덕과 울퉁불퉁한 돌길이 많아 편한 신발이 필요합니다.', 'Tbilisi’s old town is hilly with uneven cobbles; wear comfortable shoes.', 'トビリシ旧市街は坂と凸凹の石畳が多いので、歩きやすい靴が必要です。'],
      ['운전이 거칠어 길을 건널 때는 신호가 있어도 차를 확인하세요.', 'Driving can be aggressive; check for cars even at a green crossing.', '運転が荒いので、信号があっても車を確認して渡りましょう。'],
    ],
  },
  Mexico: {
    tips: [
      ['식당에서는 팁을 따로 남기는 것이 일반적이니 계산서에 포함됐는지 확인하세요.', 'Tipping in restaurants is customary; check whether it is already on the bill.', 'レストランではチップを置くのが一般的なので、会計に含まれているか確認しましょう。'],
      ['환전·결제할 때 페소와 달러 표시가 같은 $ 기호를 쓰니 어느 통화인지 꼭 확인하세요.', 'Pesos and dollars share the $ sign; always confirm which currency a price is in.', 'ペソとドルは同じ$記号を使うので、どちらの通貨か必ず確認しましょう。'],
    ],
    cautions: [
      ['수돗물은 마시지 말고 생수를 사 드세요.', 'Do not drink tap water; buy bottled water.', '水道水は飲まず、ミネラルウォーターを買いましょう。'],
      ['밤늦게 혼자 다니지 말고, 택시는 길에서 잡기보다 호텔에서 부르거나 공식 승차장을 이용하세요.', 'Avoid walking alone late at night, and use hotel-called or official-rank taxis rather than street hails.', '夜遅くの一人歩きは避け、タクシーは流しより、ホテルで呼ぶか公式乗り場を利用しましょう。'],
    ],
  },
  Denmark: {
    tips: [
      ['대부분 카드로 결제해 현금이 거의 필요 없습니다.', 'Almost everything is paid by card, so you rarely need cash.', 'ほぼカード払いなので、現金はほとんど必要ありません。'],
      ['수돗물이 깨끗해 그냥 마셔도 됩니다. 물병을 채워 다니세요.', 'Tap water is safe and good; refill a bottle as you go.', '水道水は安全なので、ボトルに入れて持ち歩きましょう。'],
    ],
    cautions: [
      ['자전거가 많아 자전거 도로를 걷거나 갑자기 멈추면 위험합니다.', 'Bikes are everywhere; walking in or stopping suddenly on cycle lanes is dangerous.', '自転車が多いので、自転車道を歩いたり急に止まったりすると危険です。'],
      ['겨울에는 해가 짧아 오후 일찍 어두워지니 일정을 낮 시간에 맞추세요.', 'Winter days are short and dark by mid-afternoon; plan sights around daylight.', '冬は日が短く午後早くに暗くなるので、日中に予定を組みましょう。'],
    ],
  },
  Sweden: {
    tips: [
      ['현금을 받지 않는 가게가 많아 카드나 모바일 결제를 준비하세요.', 'Many places refuse cash; have a card or mobile payment ready.', '現金不可の店が多いので、カードかモバイル決済を用意しましょう。'],
      ['상점과 약국에서 번호표를 뽑고 차례를 기다리는 문화가 있습니다.', 'Take a queue ticket in shops and pharmacies and wait to be called.', '店や薬局では番号札を取って順番を待つ文化があります。'],
    ],
    cautions: [
      ['술은 국영 전문점(Systembolaget)에서만 팔고 영업시간이 짧으니 미리 확인하세요.', 'Alcohol is sold only at state Systembolaget stores with short hours; check before you go.', 'お酒は国営の専門店（Systembolaget）でしか売っておらず、営業時間が短いので注意を。'],
      ['관광객이 많은 역과 시내 중심에서는 소지품을 잘 챙기세요.', 'Keep an eye on belongings at busy stations and in the city centre.', '観光客の多い駅や中心街では持ち物に注意しましょう。'],
    ],
  },
  Finland: {
    tips: [
      ['사우나는 수영복 없이 이용하는 곳도 있으니 이용 규칙을 미리 확인하세요.', 'Some saunas are used without swimwear; check the house rules first.', '水着なしで利用するサウナもあるので、ルールを事前に確認しましょう。'],
      ['수돗물이 깨끗해 그대로 마실 수 있습니다.', 'Tap water is clean and drinkable.', '水道水はきれいでそのまま飲めます。'],
    ],
    cautions: [
      ['겨울에는 매우 춥고 길이 얼어 미끄러우니 미끄럼 방지 신발과 장갑·모자를 챙기세요.', 'Winters are very cold with icy streets; bring grippy shoes, gloves and a hat.', '冬はとても寒く道が凍るので、滑りにくい靴と手袋・帽子を。'],
      ['술은 국영 상점(Alko)에서 사야 하는 종류가 있고, 늦은 시간에는 살 수 없습니다.', 'Stronger alcohol is sold only at state Alko shops, and not late in the evening.', '強いお酒は国営のAlkoでしか買えず、夜遅くは買えません。'],
    ],
  },
  Poland: {
    tips: [
      ['식당 팁은 의무가 아니지만, 서비스가 좋았다면 조금 남기는 경우가 많습니다.', 'Tipping is not required, but leaving a little for good service is common.', 'チップは義務ではありませんが、良いサービスには少し置くことが多いです。'],
      ['트램·버스표는 탄 뒤 안의 단말기에서 개찰해야 하는 종류가 있습니다.', 'Some tram and bus tickets must be validated in the machine once on board.', 'トラムやバスの切符は、乗車後に車内の機械で刻印が必要なものがあります。'],
    ],
    cautions: [
      ['길에서 환전을 권하는 사람이나 환율이 크게 좋다는 환전소는 수수료가 높은 경우가 많습니다.', 'Street money changers and booths with “great rates” often hide steep fees.', '路上の両替や「好レート」をうたう両替所は手数料が高いことが多いです。'],
      ['일부 바·클럽에서 계산서에 터무니없는 금액이 붙는 사기가 있으니 주문 전에 가격을 확인하세요.', 'Some bars inflate bills; confirm prices before ordering.', '一部のバーで法外な会計を請求する詐欺があるので、注文前に値段を確認しましょう。'],
    ],
  },
  Ireland: {
    tips: [
      ['펍에서는 바에서 직접 주문하고 그 자리에서 계산하는 것이 일반적입니다.', 'In pubs you order and pay at the bar.', 'パブではバーで直接注文し、その場で支払うのが一般的です。'],
      ['날씨가 자주 바뀌니 하루에도 여러 번 비가 올 수 있다고 생각하고 방수 겉옷을 챙기세요.', 'Weather changes constantly; expect showers several times a day and pack a waterproof.', '天気がよく変わるので、1日に何度も雨が降ると思って防水の上着を。'],
    ],
    cautions: [
      ['차는 왼쪽으로 다니므로 길을 건널 때 오른쪽을 먼저 보세요.', 'Traffic drives on the left; look right first when crossing.', '車は左側通行なので、道を渡るときはまず右を確認しましょう。'],
      ['해안 절벽 산책로는 바람이 강하고 가장자리가 무너질 수 있어 안전선 안쪽으로 다니세요.', 'Cliff paths are windy and edges can crumble; stay behind the barriers.', '海岸の崖の遊歩道は風が強く縁が崩れることがあるので、柵の内側を歩きましょう。'],
    ],
  },
  Belgium: {
    tips: [
      ['프랑스어와 네덜란드어를 함께 쓰는 나라라 같은 곳도 이름이 두 가지로 표시됩니다.', 'Signs use both French and Dutch, so the same place can have two names.', 'フランス語とオランダ語を併用する国なので、同じ場所でも名前が二つ表示されます。'],
      ['식당 계산서에는 봉사료가 포함되어 팁은 선택입니다.', 'Service is included in restaurant bills, so tipping is optional.', 'レストランの会計にはサービス料が含まれるので、チップは任意です。'],
    ],
    cautions: [
      ['브뤼셀 중앙역·남역 주변과 지하철에서는 소매치기를 조심하세요.', 'Watch for pickpockets around Brussels Central and Midi stations and on the metro.', 'ブリュッセル中央駅・南駅周辺や地下鉄ではスリに注意しましょう。'],
      ['그랑플라스 주변 일부 식당은 호객 행위와 비싼 세트 메뉴가 많아 메뉴판 가격을 먼저 확인하세요.', 'Some restaurants near the Grand-Place tout for business with pricey set menus; check the menu first.', 'グランプラス周辺の一部レストランは客引きと高いセットメニューが多いので、先にメニューを確認しましょう。'],
    ],
  },
  Iceland: {
    tips: [
      ['거의 모든 곳에서 카드를 받아 현금이 거의 필요 없습니다.', 'Cards are accepted almost everywhere, so cash is rarely needed.', 'ほぼどこでもカードが使え、現金はほとんど不要です。'],
      ['수돗물이 깨끗해 생수를 살 필요가 없습니다.', 'Tap water is excellent; no need to buy bottled water.', '水道水がきれいなので、ミネラルウォーターを買う必要はありません。'],
    ],
    cautions: [
      ['검은 모래 해변(레이니스피아라 등)은 갑자기 큰 파도가 덮쳐 사고가 나니 바다에 가까이 가지 마세요.', 'Sneaker waves at black-sand beaches like Reynisfjara are deadly; keep well back from the water.', 'レイニスファラなどの黒砂海岸は突然大波が来て事故が起きるので、海に近づかないように。'],
      ['날씨와 도로 상황이 빠르게 바뀌니 운전·트레킹 전에 공식 기상·도로 정보를 확인하세요.', 'Weather and road conditions change fast; check official forecasts and road status before driving or hiking.', '天気や道路状況が急変するので、運転やトレッキング前に公式の気象・道路情報を確認しましょう。'],
    ],
  },
  Türkiye: {
    tips: [
      ['교통카드(이스탄불카트)를 사면 지하철·트램·페리를 하나로 탈 수 있습니다.', 'An İstanbulkart covers metro, tram and ferry in one card.', '交通カード（イスタンブールカート）で地下鉄・トラム・フェリーに乗れます。'],
      ['모스크에서는 신발을 벗고, 여성은 머리를 가리며 기도 시간에는 관람이 제한됩니다.', 'At mosques remove shoes, women cover their hair, and visits pause at prayer times.', 'モスクでは靴を脱ぎ、女性は髪を覆い、礼拝の時間は見学が制限されます。'],
    ],
    cautions: [
      ['친근하게 말을 걸며 바·카펫 가게로 데려가는 사람은 바가지 수법일 수 있습니다.', 'Friendly strangers who lead you to a bar or carpet shop may be setting up a rip-off.', '親しげに話しかけてバーや絨毯店に連れて行く人は、ぼったくりの手口のことがあります。'],
      ['택시는 미터기를 켰는지 확인하고, 가능하면 차량 호출 앱을 쓰세요.', 'Make sure taxis run the meter, or use a ride-hailing app where possible.', 'タクシーはメーターが動いているか確認し、できれば配車アプリを使いましょう。'],
    ],
  },
  'Hong Kong': {
    tips: [
      ['옥토퍼스 카드 하나로 지하철·버스·페리와 편의점 결제를 모두 할 수 있습니다.', 'One Octopus card covers MTR, buses, ferries and convenience stores.', 'オクトパスカード1枚で地下鉄・バス・フェリーやコンビニ払いができます。'],
      ['식당 계산서에 봉사료가 붙는 곳이 많아 따로 팁을 줄 필요는 거의 없습니다.', 'Many restaurants add a service charge, so extra tipping is rarely needed.', '多くのレストランはサービス料を加算するので、別途チップはほぼ不要です。'],
    ],
    cautions: [
      ['여름~가을에는 태풍이 오면 교통·관광지가 멈출 수 있으니 기상청 경보를 확인하세요.', 'Typhoons in summer and autumn can halt transport and attractions; follow Observatory signals.', '夏から秋は台風で交通や観光地が止まることがあるので、天文台の警報を確認しましょう。'],
      ['지하철 안에서는 음식·음료 섭취가 금지되어 있어 벌금을 물 수 있습니다.', 'Eating and drinking on the MTR is banned and can be fined.', '地下鉄車内での飲食は禁止で、罰金の対象になります。'],
    ],
  },
  Indonesia: {
    tips: [
      ['발리 사원에 들어갈 때는 허리에 두르는 천(사롱)이 필요하며, 입구에서 빌려주는 곳이 많습니다.', 'Bali temples require a sarong around the waist; many lend one at the gate.', 'バリの寺院では腰に巻く布（サロン）が必要で、入口で貸してくれる所が多いです。'],
      ['차량 호출 앱(Grab·Gojek)을 쓰면 요금 흥정 없이 이동할 수 있지만, 일부 지역은 호출 차량 진입을 막기도 합니다.', 'Grab and Gojek avoid haggling, though some areas restrict app pickups.', '配車アプリ（Grab・Gojek）で交渉なしに移動できますが、一部地域では乗車が制限されます。'],
    ],
    cautions: [
      ['수돗물은 마시지 말고 생수를 드세요. 얼음과 날음식도 조심하는 것이 좋습니다.', 'Do not drink tap water; take care with ice and raw food too.', '水道水は飲まず、ミネラルウォーターを。氷や生ものにも注意しましょう。'],
      ['원숭이가 많은 사원·숲에서는 안경·모자·휴대폰을 낚아채 가니 가방에 넣어 두세요.', 'Monkeys at temples and forests snatch glasses, hats and phones; keep them in your bag.', 'サルの多い寺院や森では眼鏡・帽子・携帯を奪われるので、バッグにしまいましょう。'],
    ],
  },
  'United Arab Emirates': {
    tips: [
      ['메트로에는 여성·어린이 전용 칸과 프리미엄 칸이 따로 있으니 표지판을 확인하세요.', 'The metro has women-and-children and premium carriages; check the signs.', '地下鉄には女性・子ども専用車両とプレミアム車両があるので、表示を確認しましょう。'],
      ['한낮 야외 활동은 무척 더워, 쇼핑몰과 실내 명소를 낮에, 야외는 저녁에 배치하세요.', 'Midday heat is intense; plan malls and indoor sights for daytime and outdoors for evening.', '日中はとても暑いので、昼はモールや屋内、屋外は夕方に回しましょう。'],
    ],
    cautions: [
      ['공공장소에서의 지나친 애정 표현, 음주 후 소란, 허락 없는 사진 촬영은 법적 문제가 될 수 있습니다.', 'Public displays of affection, drunken behaviour and photographing people without permission can lead to legal trouble.', '公共の場での過度な愛情表現、飲酒後の騒ぎ、無断での人物撮影は法的な問題になることがあります。'],
      ['메트로 안 음식·음료 섭취는 금지되어 벌금을 물 수 있습니다.', 'Eating and drinking on the metro is prohibited and fined.', '地下鉄内での飲食は禁止で、罰金の対象です。'],
    ],
  },
};
