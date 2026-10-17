/**
 * 겨울 크리스마스 마켓 안내(도시 가이드의 「크리스마스 마켓」 칸, 가이드 목록의 겨울 도시 모음).
 * 날짜는 해마다 바뀌므로 「11월 말~12월 24일 무렵」처럼 일반적인 기간만 쓰고, 그해 일정은 url(공식 우선)에서 확인하게 한다.
 * 금액은 쓰지 않는다. 각 항목 [ko, en, ja]
 */
export type L3 = readonly [string, string, string];
export interface ChristmasMarket {
  name: L3;
  place: L3;
  period: L3;
  /** 볼거리·먹을거리 한두 줄 */
  note: L3;
  url: string;
}

export const CHRISTMAS_MARKETS: Record<string, ChristmasMarket> = {
  dresden: {
    name: ['슈트리첼마르크트', 'Striezelmarkt', 'シュトリーツェルマルクト'],
    place: ['알트마르크트 광장', 'Altmarkt square', 'アルトマルクト広場'],
    period: ['11월 말~12월 24일 무렵', 'Late November to around 24 December', '11月末〜12月24日頃'],
    note: ['1434년 기록이 남은 독일 최고(最古)급 마켓. 드레스덴 슈톨렌과 대형 크리스마스 피라미드가 명물입니다.', 'One of Germany’s oldest markets, first recorded in 1434, famous for Dresden Stollen and a giant Christmas pyramid.', '1434年の記録が残るドイツ最古級のマーケット。ドレスデンのシュトレンと巨大なクリスマスピラミッドが名物です。'],
    url: 'https://striezelmarkt.dresden.de/de/',
  },
  nuremberg: {
    name: ['크리스트킨들레스마르크트', 'Christkindlesmarkt', 'クリストキンドレスマルクト'],
    place: ['중앙 광장(하웁트마르크트)', 'Hauptmarkt', '中央広場（ハウプトマルクト）'],
    period: ['대림절 직전 금요일~12월 24일', 'Friday before Advent to 24 December', 'アドベント直前の金曜日〜12月24日'],
    note: ['금빛 옷의 「크리스트킨트」가 교회 발코니에서 개막을 알립니다. 뉘른베르크 소시지와 렙쿠헨이 대표 먹거리입니다.', 'Opened by the golden-robed Christkind from the church balcony; Nuremberg sausages and Lebkuchen are the treats.', '金色の衣装の「クリストキント」が教会のバルコニーから開幕を告げます。ニュルンベルク・ソーセージとレープクーヘンが名物です。'],
    url: 'https://tourismus.nuernberg.de/en/traveltrade/nuremberg-christkindlesmarkt/at-a-glance/',
  },
  cologne: {
    name: ['쾰른 대성당 크리스마스 마켓', 'Christmas Market at Cologne Cathedral', 'ケルン大聖堂のクリスマスマーケット'],
    place: ['대성당 앞 로칼리 광장', 'Roncalliplatz by the cathedral', '大聖堂前のロンカリ広場'],
    period: ['11월 중순~12월 23일 무렵', 'Mid-November to around 23 December', '11月中旬〜12月23日頃'],
    note: ['대성당을 배경으로 한 대표 마켓이고, 시내에 여러 마켓이 함께 열려 하루에 몇 곳을 이어 볼 수 있습니다.', 'The flagship market beneath the cathedral, with several more across the centre to combine in a day.', '大聖堂を背景にした代表的なマーケットで、市内の複数のマーケットを1日で巡れます。'],
    url: 'https://www.cologne-tourism.com/experiences-lifestyle/events/detail/christmas-market-at-cologne-cathedral?partner_id=513',
  },
  strasbourg: {
    name: ['크리스킨델스메리크', 'Christkindelsmärik', 'クリストキンデルスメリック'],
    place: ['대성당·브로글리 광장 등 구시가지 섬 곳곳', 'Around the cathedral, Place Broglie and the old-town island', '大聖堂やブロイ広場など旧市街の島の各所'],
    period: ['11월 말~12월 24일 무렵', 'Late November to around 24 December', '11月末〜12月24日頃'],
    note: ['도시 전체가 「크리스마스의 수도」로 꾸며지고, 클레베르 광장의 대형 트리가 상징입니다. 마켓 기간에는 구시가지 입구에서 보안 검색을 합니다.', 'The whole city dresses up as the “Capital of Christmas”, with a giant tree on Place Kléber; security checks operate at the old-town entrances.', '街全体が「クリスマスの首都」として飾られ、クレベール広場の大きなツリーが象徴です。期間中は旧市街の入口で保安検査があります。'],
    url: 'https://www.visitstrasbourg.fr/en/discover/the-capital-of-christmas/',
  },
  colmar: {
    name: ['콜마르 크리스마스 마켓', 'Colmar Christmas Markets', 'コルマールのクリスマスマーケット'],
    place: ['구시가지 광장 여러 곳', 'Several squares across the old town', '旧市街のいくつもの広場'],
    period: ['11월 말~12월 말', 'Late November to late December', '11月末〜12月末'],
    note: ['동화 같은 목조 가옥 사이에 작은 마켓 여러 개가 열리고, 근처 에기스하임 등 알자스 마을 마켓과 묶어 다니기 좋습니다.', 'Several small markets among fairy-tale houses, easy to pair with nearby Alsace village markets such as Eguisheim.', 'おとぎ話のような木組みの家の間に小さなマーケットが点在し、近くのエギスハイムなどアルザスの村のマーケットと一緒に巡れます。'],
    url: 'https://www.tourisme-colmar.com/en/whats-on?rCH=-2',
  },
  salzburg: {
    name: ['잘츠부르크 크리스트킨들마르크트', 'Salzburg Christkindlmarkt', 'ザルツブルクのクリストキンドルマルクト'],
    place: ['대성당 광장·레지덴츠 광장', 'Domplatz and Residenzplatz', '大聖堂広場・レジデンツ広場'],
    period: ['11월 중순~1월 1일 무렵', 'Mid-November to around 1 January', '11月中旬〜1月1日頃'],
    note: ['바로크 대성당 앞 마켓으로, 근교 오베른도르프의 「고요한 밤」 기념 예배당과 함께 둘러보기 좋습니다.', 'A market in front of the Baroque cathedral; pair it with the Silent Night Chapel in nearby Oberndorf.', 'バロックの大聖堂前のマーケットで、近郊オーベルンドルフの「きよしこの夜」記念礼拝堂と一緒に訪ねるのがおすすめです。'],
    url: 'https://www.salzburg.info/en/events/events-calendar/salzburg-christkindlmarket-on-dom-and-residenzplatz-square_event_42164450',
  },
  zagreb: {
    name: ['어드벤트 자그레브', 'Advent in Zagreb', 'アドベント・イン・ザグレブ'],
    place: ['반 옐라치치 광장 등 시내 곳곳', 'Ban Jelačić Square and venues across the city', 'イェラチッチ総督広場など市内各所'],
    period: ['11월 말~1월 초', 'Late November to early January', '11月末〜1月初め'],
    note: ['도시 전체가 조명과 공연으로 꾸며지는 축제형 마켓으로, 유럽 최고 크리스마스 마켓 투표에서 여러 번 1위를 했습니다.', 'A citywide festival of lights and concerts, voted Europe’s best Christmas market several times.', '街中が光とコンサートで彩られる祭り型のマーケットで、ヨーロッパ最高のクリスマスマーケット投票で何度も1位になりました。'],
    url: 'https://www.adventzagreb.hr/',
  },
  rovaniemi: {
    name: ['산타클로스 마을', 'Santa Claus Village', 'サンタクロース村'],
    place: ['북극권 선 위 산타클로스 마을', 'Santa Claus Village on the Arctic Circle', '北極圏の線上のサンタクロース村'],
    period: ['일 년 내내(겨울이 성수기)', 'Open all year (winter is peak season)', '通年（冬がハイシーズン）'],
    note: ['마켓보다 「산타를 만나는 곳」으로, 산타 사무실 방문은 무료이고 산타 우체국에서 크리스마스 편지를 보낼 수 있습니다.', 'Less a market than Santa’s home: visiting his office is free, and the post office sends Christmas mail.', 'マーケットというより「サンタに会える場所」で、サンタの事務所訪問は無料、サンタ郵便局からクリスマスの手紙を送れます。'],
    url: 'https://www.visitrovaniemi.fi/attraction/santa-claus-office/',
  },
  tallinn: {
    name: ['탈린 크리스마스 마켓', 'Tallinn Christmas Market', 'タリンのクリスマスマーケット'],
    place: ['중세 시청 광장', 'Medieval Town Hall Square', '中世の市庁舎広場'],
    period: ['11월 하순~1월 6일 무렵', 'Late November to around 6 January', '11月下旬〜1月6日頃'],
    note: ['중세 시청 건물 앞 광장 한가운데 큰 트리가 서고, 구시가지 성벽과 어우러진 풍경이 아름답습니다.', 'A tall tree stands in the medieval square before the Town Hall, framed by the old-town walls.', '中世の市庁舎前の広場の中央に大きなツリーが立ち、旧市街の城壁と調和した景色が美しいです。'],
    url: 'https://www.visittallinn.ee/eng/visitor/see-do/events/events/14270/tallinn-christmas-market',
  },
  edinburgh: {
    name: ['에든버러 크리스마스', 'Edinburgh’s Christmas', 'エディンバラのクリスマス'],
    place: ['이스트 프린스 스트리트 가든', 'East Princes Street Gardens', 'イースト・プリンセス・ストリート・ガーデンズ'],
    period: ['11월 중순~1월 초', 'Mid-November to early January', '11月中旬〜1月初め'],
    note: ['성 아래 정원에 마켓과 놀이기구가 들어서고, 연말에는 새해맞이 축제 호그머네이가 이어집니다. 마켓 입장은 무료이고 놀이기구는 따로 표를 삽니다.', 'A market and fairground in the gardens below the castle, followed by Hogmanay at New Year; the market is free, rides are ticketed.', '城の下の庭園にマーケットと遊具が並び、年末は新年祭ホグマニーに続きます。マーケットは入場無料、遊具は別料金です。'],
    url: 'https://www.edinburgh.gov.uk/news/article/13870/edinburgh-s-christmas-steps-into-december-and-looks-ahead-to-hogmanay',
  },
  munich: {
    name: ['뮌헨 크리스트킨들마르크트', 'Munich Christkindlmarkt', 'ミュンヘンのクリストキンドルマルクト'],
    place: ['마리엔 광장과 보행자 거리', 'Marienplatz and the pedestrian zone', 'マリエン広場と歩行者天国'],
    period: ['11월 하순~12월 24일', 'Late November to 24 December', '11月下旬〜12月24日'],
    note: ['신시청사 앞 대형 트리 아래 마켓이 열리고, 근처 성 베드로 교회 옆에는 성탄 인형을 파는 크리펄마르크트가 있습니다.', 'Held below a huge tree in front of the New Town Hall, with a nativity-figure market by St Peter’s Church.', '新市庁舎前の大きなツリーの下で開かれ、近くの聖ペーター教会の横にはキリスト降誕の人形市があります。'],
    url: 'https://www.muenchen.de/christkindlmarkt',
  },
  vienna: {
    name: ['빈 크리스마스 마켓(시청 광장)', 'Vienna Christmas Market (Rathausplatz)', 'ウィーンのクリスマスマーケット（市庁舎広場）'],
    place: ['시청 앞 광장', 'Rathausplatz', '市庁舎前広場'],
    period: ['11월 중순~12월 26일 무렵', 'Mid-November to around 26 December', '11月中旬〜12月26日頃'],
    note: ['시청 건물을 배경으로 한 빈의 대표 마켓이고, 쇤브룬 궁전과 벨베데레 궁전 앞에도 마켓이 열립니다.', 'Vienna’s flagship market before the City Hall, with more at Schönbrunn and the Belvedere.', '市庁舎を背景にしたウィーン代表のマーケットで、シェーンブルン宮殿やベルヴェデーレ宮殿前にも立ちます。'],
    url: 'https://www.wien.info/en/now-on/christmas-new-year/christmas-markets',
  },
  prague: {
    name: ['프라하 크리스마스 마켓', 'Prague Christmas Markets', 'プラハのクリスマスマーケット'],
    place: ['구시가지 광장·바츨라프 광장', 'Old Town Square and Wenceslas Square', '旧市街広場・ヴァーツラフ広場'],
    period: ['11월 말~1월 6일 무렵', 'Late November to around 6 January', '11月末〜1月6日頃'],
    note: ['틴 성당과 천문시계를 배경으로 큰 트리가 서는 구시가지 광장 마켓이 대표적입니다.', 'The Old Town Square market, with a big tree before the Týn Church and astronomical clock, is the highlight.', 'ティーン教会と天文時計を背景に大きなツリーが立つ旧市街広場のマーケットが代表的です。'],
    url: 'https://www.prague.eu/en',
  },
  budapest: {
    name: ['부다페스트 크리스마스 마켓', 'Budapest Christmas Markets', 'ブダペストのクリスマスマーケット'],
    place: ['뵈뢰슈마르티 광장·성 이슈트반 대성당 앞', 'Vörösmarty Square and St Stephen’s Basilica', 'ヴルシュマルティ広場・聖イシュトヴァーン大聖堂前'],
    period: ['11월 중순~12월 말', 'Mid-November to late December', '11月中旬〜12月末'],
    note: ['대성당 앞 마켓은 정면에 비추는 조명 쇼로 유명하고, 2024년 유럽 최고 크리스마스 마켓 투표 1위를 했습니다.', 'The basilica market is known for light projections on the façade and won the 2024 European Best Christmas Market vote.', '大聖堂前のマーケットは正面に映すライトショーで有名で、2024年のヨーロッパ最高のクリスマスマーケット投票で1位になりました。'],
    url: 'https://www.budapestinfo.hu/en',
  },
  copenhagen: {
    name: ['티볼리 크리스마스', 'Christmas in Tivoli', 'チボリ公園のクリスマス'],
    place: ['티볼리 공원', 'Tivoli Gardens', 'チボリ公園'],
    period: ['11월 중순~1월 초(12월 24일 휴무)', 'Mid-November to early January (closed 24 December)', '11月中旬〜1月初め（12月24日休み）'],
    note: ['놀이공원 전체가 조명으로 꾸며지고 약 60개 노점이 열립니다. 코펜하겐 마켓 중 유일하게 입장료가 있습니다. 덴마크식 팬케이크 에블레스키버가 명물입니다.', 'The whole amusement park is lit up with about 60 stalls; it is the only Copenhagen market that charges admission. Try æbleskiver.', '遊園地全体がイルミネーションで飾られ約60の屋台が並びます。コペンハーゲンで唯一入場料が必要なマーケット。名物はエーブルスキーヴァー。'],
    url: 'https://www.visitcopenhagen.com/copenhagen/planning/christmas-tivoli-gardens-gdk1096403',
  },
  brussels: {
    name: ['윈터 원더스(플레지르 디베르)', 'Winter Wonders (Plaisirs d’Hiver)', 'ウィンター・ワンダーズ'],
    place: ['그랑플라스·증권거래소·생트카트린 광장 일대', 'Grand-Place, the Bourse and Sainte-Catherine', 'グランプラス・証券取引所・サント・カトリーヌ広場一帯'],
    period: ['11월 말~1월 초', 'Late November to early January', '11月末〜1月初め'],
    note: ['그랑플라스의 빛과 소리 쇼, 대관람차와 스케이트장이 함께 열리는 축제형 마켓입니다.', 'A festival market with a sound-and-light show on the Grand-Place, a Ferris wheel and an ice rink.', 'グランプラスの光と音のショー、観覧車やスケートリンクがある祭り型のマーケットです。'],
    url: 'https://map.plaisirsdhiver.be/en/?p=2106',
  },
  krakow: {
    name: ['크라쿠프 크리스마스 마켓', 'Kraków Christmas Market', 'クラクフのクリスマスマーケット'],
    place: ['중앙 시장 광장(리네크 그우브니)', 'Main Market Square (Rynek Główny)', '中央市場広場'],
    period: ['11월 마지막 금요일 무렵~1월 초', 'From around the last Friday of November to early January', '11月最終金曜日頃〜1月初め'],
    note: ['중세 광장의 직물회관 앞에 목조 노점이 늘어서고, 입장은 무료입니다.', 'Wooden stalls line the medieval square before the Cloth Hall; entry is free.', '中世の広場の織物会館前に木の屋台が並び、入場は無料です。'],
    url: 'https://convention.krakow.pl/english/news_from_krakow/301316,251,komunikat,christmas_market_at_the_main_square_starting_friday.html',
  },
  stockholm: {
    name: ['스톡홀름 크리스마스 마켓', 'Stockholm Christmas Markets', 'ストックホルムのクリスマスマーケット'],
    place: ['감라스탄 스토르토리에트 광장·스칸센', 'Stortorget in Gamla stan and Skansen', 'ガムラスタンのストールトリエット広場・スカンセン'],
    period: ['11월 하순~12월 23일 무렵', 'Late November to around 23 December', '11月下旬〜12月23日頃'],
    note: ['구시가지에서 가장 오래된 광장의 마켓과, 1903년부터 이어진 야외 박물관 스칸센의 주말 마켓이 대표적입니다.', 'The market on the old town’s oldest square, and Skansen’s weekend market held since 1903.', '旧市街で最も古い広場のマーケットと、1903年から続く野外博物館スカンセンの週末マーケットが代表的です。'],
    url: 'https://www.visitstockholm.com/',
  },
  helsinki: {
    name: ['성 토마스 크리스마스 마켓', 'St Thomas Christmas Market', '聖トーマスのクリスマスマーケット'],
    place: ['원로원 광장(대성당 앞)', 'Senate Square below the cathedral', '元老院広場（大聖堂前）'],
    period: ['12월 초~12월 22일 무렵', 'Early December to around 22 December', '12月初め〜12月22日頃'],
    note: ['흰 대성당 아래에 핀란드 공예품 노점이 늘어서는 마켓으로, 입장은 무료입니다.', 'Finnish craft stalls beneath the white cathedral; entry is free.', '白い大聖堂の下にフィンランドの工芸品の屋台が並ぶマーケットで、入場無料です。'],
    url: 'https://www.myhelsinki.fi/',
  },
  paris: {
    name: ['파리 크리스마스 마켓', 'Paris Christmas Markets', 'パリのクリスマスマーケット'],
    place: ['노트르담 옆 르네 비비아니 광장·튈르리 정원 등', 'Square René Viviani by Notre-Dame, the Tuileries and more', 'ノートルダム横のルネ・ヴィヴィアニ広場、チュイルリー庭園など'],
    period: ['11월 말~12월 말(장소마다 다름)', 'Late November to late December (varies by site)', '11月末〜12月末（場所により異なる）'],
    note: ['노트르담 대성당 옆의 작은 마켓과 튈르리 정원의 대관람차·스케이트장이 있는 마켓이 인기입니다.', 'The small market beside Notre-Dame and the Tuileries market with its Ferris wheel and rink are favourites.', 'ノートルダム大聖堂横の小さなマーケットと、観覧車やスケートリンクのあるチュイルリー庭園のマーケットが人気です。'],
    url: 'https://parisjetaime.com/eng/',
  },
  // ↓ 가격 조사 중인 도시(공개되면 보인다)
  frankfurt: {
    name: ['프랑크푸르트 크리스마스 마켓', 'Frankfurt Christmas Market', 'フランクフルトのクリスマスマーケット'],
    place: ['뢰머베르크 광장과 구시가지', 'Römerberg and the old town', 'レーマー広場と旧市街'],
    period: ['11월 하순~12월 22일 무렵', 'Late November to around 22 December', '11月下旬〜12月22日頃'],
    note: ['옛 시청(뢰머) 앞 대형 트리가 상징이고, 교회 발코니에서 관악대가 캐럴을 연주하는 날이 있습니다.', 'A huge tree before the old Römer town hall, with brass bands playing carols from a church gallery on some days.', '旧市庁舎（レーマー）前の大きなツリーが象徴で、教会のバルコニーから楽団がキャロルを演奏する日があります。'],
    url: 'https://visitfrankfurt.travel/en/event/christmas-market',
  },
  berlin: {
    name: ['베를린 크리스마스 마켓', 'Berlin Christmas Markets', 'ベルリンのクリスマスマーケット'],
    place: ['젠다르멘마르크트·샤를로텐부르크 궁전 앞 등', 'Gendarmenmarkt, Charlottenburg Palace and more', 'ジャンダルメンマルクト、シャルロッテンブルク宮殿前など'],
    period: ['11월 하순~12월 말(장소마다 다름)', 'Late November to late December (varies by site)', '11月下旬〜12月末（場所により異なる）'],
    note: ['도시 곳곳에 수십 개 마켓이 열리고, 젠다르멘마르크트 마켓은 소액 입장료가 있습니다.', 'Dozens of markets across the city; the Gendarmenmarkt one charges a small entry fee.', '市内各所に数十のマーケットが開かれ、ジャンダルメンマルクトは少額の入場料があります。'],
    url: 'https://www.visitberlin.de/de/tipps-fuer-die-berliner-weihnachtsmaerkte',
  },
  zurich: {
    name: ['취리히 크리스마스 마켓', 'Zurich Christmas Markets', 'チューリッヒのクリスマスマーケット'],
    place: ['중앙역 홀·오페라하우스 앞 광장 등', 'Main station hall, the square by the opera house and more', '中央駅構内・オペラハウス前の広場など'],
    period: ['11월 말~12월 24일 무렵', 'Late November to around 24 December', '11月末〜12月24日頃'],
    note: ['중앙역 홀 안의 실내 마켓에 크리스털로 장식한 대형 트리가 서고, 합창단이 노래하는 「노래하는 트리」도 볼거리입니다.', 'An indoor market in the main station hall with a crystal-decked tree, plus the choir-filled “Singing Christmas Tree”.', '中央駅構内の屋内マーケットにクリスタルで飾った大きなツリーが立ち、合唱団が歌う「歌うツリー」も見どころです。'],
    url: 'https://www.zuerich.com/en',
  },
  basel: {
    name: ['바젤 크리스마스 마켓', 'Basel Christmas Market', 'バーゼルのクリスマスマーケット'],
    place: ['바르퓌서 광장·뮌스터 광장', 'Barfüsserplatz and Münsterplatz', 'バルフュッサー広場・ミュンスター広場'],
    period: ['11월 말~12월 23일 무렵', 'Late November to around 23 December', '11月末〜12月23日頃'],
    note: ['스위스에서 가장 큰 축에 드는 마켓으로, 두 광장에 목조 샬레 노점이 늘어섭니다.', 'One of Switzerland’s largest, with wooden chalets on two squares.', 'スイス最大級のマーケットで、二つの広場に木のシャレーの屋台が並びます。'],
    url: 'https://www.basel.com/en',
  },
  riga: {
    name: ['리가 크리스마스 마켓', 'Riga Christmas Market', 'リガのクリスマスマーケット'],
    place: ['돔 광장', 'Dome Square', 'ドーム広場'],
    period: ['11월 말~1월 초', 'Late November to early January', '11月末〜1月初め'],
    note: ['리가는 1510년 시청 광장에 처음 크리스마스트리를 세웠다는 기록을 내세우며, 그 자리에 기념 표지가 있습니다.', 'Riga claims the first decorated Christmas tree, on Town Hall Square in 1510, marked by a plaque.', 'リガは1510年に市庁舎広場で初めてクリスマスツリーを飾ったとされ、その場所に記念の目印があります。'],
    url: 'https://www.liveriga.com/en',
  },
  gdansk: {
    name: ['그단스크 크리스마스 마켓', 'Gdańsk Christmas Market', 'グダニスクのクリスマスマーケット'],
    place: ['타르그 벵글로비 광장', 'Targ Węglowy', 'タルグ・ヴェングロヴィ広場'],
    period: ['11월 하순~12월 23일 무렵', 'Late November to around 23 December', '11月下旬〜12月23日頃'],
    note: ['2025년 유럽 최고 크리스마스 마켓 투표 1위. 입장은 무료이고 대관람차와 회전목마가 함께 열립니다.', 'Voted Europe’s Best Christmas Market 2025; free entry, with a Ferris wheel and carousel.', '2025年ヨーロッパ最高のクリスマスマーケット投票で1位。入場無料で観覧車やメリーゴーラウンドもあります。'],
    url: 'https://amberexpo.pl/en/gdansk-christmas-market-best-in-europe-best-christmas-markets-2025/',
  },
  bruges: {
    name: ['브뤼헤 윈터 글로', 'Bruges Winter Glow', 'ブルージュ・ウィンターグロー'],
    place: ['마르크트 광장·시몬 스테빈 광장', 'Markt and Simon Stevinplein', 'マルクト広場・シモン・ステヴィン広場'],
    period: ['11월 하순~1월 초', 'Late November to early January', '11月下旬〜1月初め'],
    note: ['종탑 아래 마르크트 광장의 마켓과 빛 산책로, 공원 스케이트장이 함께 열립니다.', 'A market beneath the Belfry plus a light trail and a park ice rink.', '鐘楼の下のマルクト広場のマーケットに、光の散策路や公園のスケートリンクが加わります。'],
    url: 'https://www.visitbruges.be/en',
  },
};
