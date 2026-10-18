/**
 * 겨울 크리스마스 마켓 안내(도시 가이드의 「크리스마스 마켓」 칸, 가이드 목록의 겨울 도시 모음).
 * period 는 2026/27 시즌 공식 일정(2026-10-17 GPT 검증)이다. 공식 발표 전인 곳은 「보통 ~」으로 쓴다. 시즌이 끝나면 다음 해 일정으로 바꾼다.
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
  /** 2026/27 공식 일정(시작일, 확인된 경우 종료일). 검색엔진 행사 정보(JSON-LD Event)에 쓴다. 발표 전·장소마다 다른 곳은 없음 */
  dates?: readonly [string, string?];
}

export const CHRISTMAS_MARKETS: Record<string, ChristmasMarket> = {
  dresden: {
    name: ['슈트리첼마르크트', 'Striezelmarkt', 'シュトリーツェルマルクト'],
    place: ['알트마르크트 광장', 'Altmarkt square', 'アルトマルクト広場'],
    period: ['2026년 11월 25일~12월 24일', '25 November–24 December 2026', '2026年11月25日〜12月24日'],
    note: ['1434년 기록이 남은 독일 최고(最古)급 마켓. 드레스덴 슈톨렌과 대형 크리스마스 피라미드가 명물입니다.', 'One of Germany’s oldest markets, first recorded in 1434, famous for Dresden Stollen and a giant Christmas pyramid.', '1434年の記録が残るドイツ最古級のマーケット。ドレスデンのシュトレンと巨大なクリスマスピラミッドが名物です。'],
    url: 'https://striezelmarkt.dresden.de/de/',
    dates: ['2026-11-25', '2026-12-24'],
  },
  nuremberg: {
    name: ['크리스트킨들레스마르크트', 'Christkindlesmarkt', 'クリストキンドレスマルクト'],
    place: ['중앙 광장(하웁트마르크트)', 'Hauptmarkt', '中央広場（ハウプトマルクト）'],
    period: ['2026년 11월 27일~12월 24일', '27 November–24 December 2026', '2026年11月27日〜12月24日'],
    note: ['금빛 옷의 「크리스트킨트」가 교회 발코니에서 개막을 알립니다. 뉘른베르크 소시지와 렙쿠헨이 대표 먹거리입니다.', 'Opened by the golden-robed Christkind from the church balcony; Nuremberg sausages and Lebkuchen are the treats.', '金色の衣装の「クリストキント」が教会のバルコニーから開幕を告げます。ニュルンベルク・ソーセージとレープクーヘンが名物です。'],
    url: 'https://tourismus.nuernberg.de/en/experience/christkindlesmarkt/',
    dates: ['2026-11-27', '2026-12-24'],
  },
  cologne: {
    name: ['쾰른 대성당 크리스마스 마켓', 'Christmas Market at Cologne Cathedral', 'ケルン大聖堂のクリスマスマーケット'],
    place: ['대성당 앞 론칼리 광장', 'Roncalliplatz in front of the cathedral', '大聖堂前のロンカリ広場'],
    period: ['2026년 11월 16일 개막(폐막일은 공식 안내 확인)', 'Opens 16 November 2026 (check the official page for the closing date)', '2026年11月16日開幕（終了日は公式案内で確認）'],
    note: ['대성당 옆에 큰 트리가 서고, 론칼리 광장 위로 별빛 조명 지붕이 펼쳐집니다. 시내 다른 마켓과 이어서 둘러보기 좋습니다.', 'A large tree stands by the cathedral beneath a canopy of lights over Roncalliplatz; easy to combine with other markets in the centre.', '大聖堂のそばに大きなツリーが立ち、ロンカリ広場の上に光の天蓋が広がります。市内の他のマーケットと合わせて巡れます。'],
    url: 'https://www.cologne-tourism.com/experiences-lifestyle/events/detail/christmas-market-at-cologne-cathedral',
    dates: ['2026-11-16'],
  },
  strasbourg: {
    name: ['크리스킨델스메리크', 'Christkindelsmärik', 'クリストキンデルスメリック'],
    place: ['대성당·브로글리 광장 등 구시가지 섬 곳곳', 'Around the cathedral, Place Broglie and the old-town island', '大聖堂やブロイ広場など旧市街の島の各所'],
    period: ['2026년 11월 27일 개막(폐막일은 공식 안내 확인)', 'Opens 27 November 2026 (check the official page for the closing date)', '2026年11月27日開幕（終了日は公式案内で確認）'],
    note: ['도시 전체가 「크리스마스의 수도」로 꾸며지고, 클레베르 광장의 대형 트리와 구시가지 여러 광장의 마켓이 이어집니다.', 'The city dresses up as the “Capital of Christmas”: a giant tree on Place Kléber and markets across several old-town squares.', '街全体が「クリスマスの首都」として飾られ、クレベール広場の大きなツリーと旧市街の各広場のマーケットが続きます。'],
    url: 'https://www.visitstrasbourg.fr/en/discover/the-capital-of-christmas/',
    dates: ['2026-11-27'],
  },
  colmar: {
    name: ['콜마르 크리스마스 마켓', 'Colmar Christmas Markets', 'コルマールのクリスマスマーケット'],
    place: ['구시가지 광장 여러 곳(장소별 일정은 공식 안내 확인)', 'Several old-town squares (check each venue on the official listing)', '旧市街のいくつもの広場（会場ごとに公式案内で確認）'],
    period: ['2026년 11월 23일~12월 29일(일부 행사는 2027년 1월 3일까지)', '23 November–29 December 2026 (some events until 3 January 2027)', '2026年11月23日〜12月29日（一部は2027年1月3日まで）'],
    note: ['목조 가옥이 이어지는 구시가지의 여러 광장에 서로 다른 테마의 마켓이 열립니다. 근처 알자스 마을 마켓과 묶어 다니기 좋습니다.', 'Themed markets fill several old-town squares among the half-timbered houses; easy to pair with nearby Alsace village markets.', '木組みの家が並ぶ旧市街の各広場にテーマの異なるマーケットが開かれます。近くのアルザスの村のマーケットとも組み合わせやすいです。'],
    url: 'https://www.tourisme-colmar.com/en/whats-on',
    dates: ['2026-11-23', '2026-12-29'],
  },
  salzburg: {
    name: ['잘츠부르크 크리스트킨들마르크트', 'Salzburg Christkindlmarkt', 'ザルツブルクのクリストキンドルマルクト'],
    place: ['대성당 광장·레지덴츠 광장', 'Domplatz and Residenzplatz', '大聖堂広場・レジデンツ広場'],
    period: ['2026년 11월 19일~2027년 1월 1일', '19 November 2026–1 January 2027', '2026年11月19日〜2027年1月1日'],
    note: ['유네스코 세계유산 구시가지의 대성당 광장과 레지덴츠 광장에 열리는 전통 마켓입니다.', 'A traditional market on Domplatz and Residenzplatz in Salzburg’s UNESCO-listed Old Town.', 'ユネスコ世界遺産の旧市街、大聖堂広場とレジデンツ広場で開かれる伝統的なマーケットです。'],
    url: 'https://www.salzburg.info/en/salzburg/advent/salzburg-christmas-market',
    dates: ['2026-11-19', '2027-01-01'],
  },
  zagreb: {
    name: ['어드벤트 자그레브', 'Advent in Zagreb', 'アドベント・イン・ザグレブ'],
    place: ['반 옐라치치 광장 등 시내 곳곳', 'Ban Jelačić Square and venues across the city', 'イェラチッチ総督広場など市内各所'],
    period: ['2026년 11월 28일~2027년 1월 7일', '28 November 2026–7 January 2027', '2026年11月28日〜2027年1月7日'],
    note: ['도시 곳곳이 조명과 공연으로 꾸며지는 축제형 연말 행사입니다.', 'A citywide winter festival of lights and performances across many venues.', '街の各所が光と公演で彩られる祭り型の年末イベントです。'],
    url: 'https://www.adventzagreb.hr/en',
    dates: ['2026-11-28', '2027-01-07'],
  },
  rovaniemi: {
    name: ['산타클로스 마을(계절 마켓이 아닌 관광지)', 'Santa Claus Village (an attraction, not a seasonal market)', 'サンタクロース村（季節のマーケットではなく観光地）'],
    place: ['로바니에미 도심 북쪽, 북극권 선 위', 'On the Arctic Circle, north of central Rovaniemi', 'ロヴァニエミ中心部の北、北極圏の線上'],
    period: ['일 년 내내(일부 체험은 계절 운영)', 'Open year-round (some activities are seasonal)', '通年（一部の体験は季節営業）'],
    note: ['일 년 내내 크리스마스 분위기를 즐기고 산타를 만날 수 있는 곳입니다. 산타 우체국에서 크리스마스 편지를 보낼 수 있습니다.', 'A year-round Christmas attraction where you can meet Santa and send mail from his post office.', '一年中クリスマス気分を楽しみ、サンタに会える場所です。サンタ郵便局から手紙を送れます。'],
    url: 'https://www.visitrovaniemi.fi/attraction/santa-claus-village/',
  },
  tallinn: {
    name: ['탈린 크리스마스 마켓', 'Tallinn Christmas Market', 'タリンのクリスマスマーケット'],
    place: ['중세 시청 광장', 'Medieval Town Hall Square', '中世の市庁舎広場'],
    period: ['2026년 11월 20일~2027년 1월 6일', '20 November 2026–6 January 2027', '2026年11月20日〜2027年1月6日'],
    note: ['중세 시청 광장 한가운데 큰 트리가 서고, 에스토니아 음식과 수공예품 노점이 늘어섭니다.', 'A tall tree in the medieval Town Hall Square, with Estonian food and craft stalls.', '中世の市庁舎広場の中央に大きなツリーが立ち、エストニアの料理や手工芸品の屋台が並びます。'],
    url: 'https://www.visittallinn.ee/eng/visitor/see-do/events/events/14270/tallinn-christmas-market',
    dates: ['2026-11-20', '2027-01-06'],
  },
  edinburgh: {
    name: ['에든버러 크리스마스', 'Edinburgh’s Christmas', 'エディンバラのクリスマス'],
    place: ['이스트·웨스트 프린스 스트리트 가든과 조지 스트리트', 'East and West Princes Street Gardens, and George Street', 'イースト／ウェスト・プリンセス・ストリート・ガーデンズとジョージ・ストリート'],
    period: ['2026년 11월 14일~2027년 1월 3일', '14 November 2026–3 January 2027', '2026年11月14日〜2027年1月3日'],
    note: ['성 아래 정원에 마켓과 축제가 열리고, 새해 무렵에는 별도 행사인 호그머네이가 이어집니다.', 'The market and festivities fill the gardens below the castle; the separate Hogmanay programme follows at New Year.', '城の下の庭園でマーケットと祭りが開かれ、新年には別イベントのホグマニーが続きます。'],
    url: 'https://edinburgh.org/festivals/edinburghs-christmas/',
    dates: ['2026-11-14', '2027-01-03'],
  },
  munich: {
    name: ['뮌헨 크리스트킨들마르크트', 'Munich Christkindlmarkt', 'ミュンヘンのクリストキンドルマルクト'],
    place: ['마리엔 광장과 린더마르크트', 'Marienplatz and Rindermarkt', 'マリエン広場とリンダーマルクト'],
    period: ['2026년 11월 20일~12월 24일', '20 November–24 December 2026', '2026年11月20日〜12月24日'],
    note: ['신시청사 앞 대형 트리 아래 마켓이 열리고, 근처 성 베드로 교회 옆에는 성탄 인형을 파는 크리펄마르크트가 있습니다.', 'Held below a huge tree in front of the New Town Hall, with a nativity-figure market by St Peter’s Church.', '新市庁舎前の大きなツリーの下で開かれ、近くの聖ペーター教会の横にはキリスト降誕の人形市があります。'],
    url: 'https://www.muenchen.de/en/events/munich-christkindlmarkt-info-about-christmas-market',
    dates: ['2026-11-20', '2026-12-24'],
  },
  vienna: {
    name: ['빈 시청 광장 크리스마스 마켓', 'Viennese Christmas Market at Rathausplatz', 'ウィーン市庁舎広場のクリスマスマーケット'],
    place: ['시청 앞 광장', 'Rathausplatz', '市庁舎前広場'],
    period: ['2026년 11월 13일~12월 26일', '13 November–26 December 2026', '2026年11月13日〜12月26日'],
    note: ['시청 건물을 배경으로 한 빈의 대표 마켓이고, 쇤브룬 궁전과 벨베데레 궁전 앞에도 마켓이 열립니다.', 'Vienna’s flagship market before the City Hall, with more at Schönbrunn and the Belvedere.', '市庁舎を背景にしたウィーン代表のマーケットで、シェーンブルン宮殿やベルヴェデーレ宮殿前にも立ちます。'],
    url: 'https://www.wien.info/en/now-on/christmas/christmas-markets-342664',
    dates: ['2026-11-13', '2026-12-26'],
  },
  prague: {
    name: ['프라하 크리스마스 마켓', 'Prague Christmas Markets', 'プラハのクリスマスマーケット'],
    place: ['구시가지 광장·바츨라프 광장', 'Old Town Square and Wenceslas Square', '旧市街広場・ヴァーツラフ広場'],
    period: ['보통 11월 말~1월 초(2026년 일정은 11월 말 공식 발표)', 'Usually late November to early January (2026 dates announced in late November)', '通常11月末〜1月初め（2026年の日程は11月末に公式発表）'],
    note: ['틴 성당과 천문시계를 배경으로 큰 트리가 서는 구시가지 광장 마켓이 대표적입니다.', 'The Old Town Square market, with a big tree before the Týn Church and astronomical clock, is the highlight.', 'ティーン教会と天文時計を背景に大きなツリーが立つ旧市街広場のマーケットが代表的です。'],
    url: 'https://prague.eu/en/christmas-in-prague/',
  },
  budapest: {
    name: ['부다페스트 크리스마스 마켓', 'Budapest Christmas Markets', 'ブダペストのクリスマスマーケット'],
    place: ['뵈뢰슈마르티 광장·성 이슈트반 대성당 앞', 'Vörösmarty Square and St Stephen’s Basilica', 'ヴルシュマルティ広場・聖イシュトヴァーン大聖堂前'],
    period: ['성 이슈트반 대성당 앞 2026년 11월 13일~2027년 1월 1일, 뵈뢰슈마르티 광장도 11월 13일부터 새해까지', 'St Stephen’s Basilica: 13 November 2026–1 January 2027; Vörösmarty Square also from 13 November into the New Year', '聖イシュトヴァーン大聖堂前は2026年11月13日〜2027年1月1日、ヴルシュマルティ広場も11月13日から新年まで'],
    note: ['대성당 앞 마켓은 정면에 비추는 조명 쇼로 유명합니다. 두 마켓은 운영 주체가 달라 일정을 따로 확인하세요.', 'The basilica market is known for light projections on the façade; the two markets are run separately, so check each schedule.', '大聖堂前のマーケットは正面に映すライトショーで有名です。二つのマーケットは運営が別なので日程は個別に確認を。'],
    url: 'https://adventbazilika.hu/en/opening-hours/',
    dates: ['2026-11-13', '2027-01-01'],
  },
  copenhagen: {
    name: ['티볼리 공원의 크리스마스', 'Christmas in Tivoli Gardens', 'チボリ公園のクリスマス'],
    place: ['티볼리 공원', 'Tivoli Gardens', 'チボリ公園'],
    period: ['2026년 11월 13일~2027년 1월 3일', '13 November 2026–3 January 2027', '2026年11月13日〜2027年1月3日'],
    note: ['공원 전체가 조명과 장식으로 꾸며지고 크리스마스 노점과 음식이 들어섭니다. 공원 입장권이 필요합니다.', 'The whole park glows with lights and decorations, with festive stalls and food; park admission applies.', '公園全体が光と飾りで彩られ、クリスマスの屋台や料理が並びます。公園の入場券が必要です。'],
    url: 'https://www.tivoli.dk/en/opening-hours-and-seasons/christmas-in-tivoli',
    dates: ['2026-11-13', '2027-01-03'],
  },
  brussels: {
    name: ['윈터 원더스', 'Winter Wonders', 'ウィンター・ワンダーズ'],
    place: ['그랑플라스·모네 광장·증권거래소·생트카트린·생선시장·드브루케르 광장 일대', 'Grand-Place, Place de la Monnaie, the Bourse, Sainte-Catherine, the Fish Market and Place de Brouckère', 'グランプラス、モネ広場、証券取引所、サント・カトリーヌ、魚市場、ド・ブルケール広場一帯'],
    period: ['2026년 11월 27일~2027년 1월 3일', '27 November 2026–3 January 2027', '2026年11月27日〜2027年1月3日'],
    note: ['그랑플라스의 빛과 소리 쇼, 대관람차와 스케이트장이 함께 열리는 축제형 마켓입니다.', 'A festival market with a sound-and-light show on the Grand-Place, a Ferris wheel and an ice rink.', 'グランプラスの光と音のショー、観覧車やスケートリンクがある祭り型のマーケットです。'],
    url: 'https://www.brussels.be/winter-wonders',
    dates: ['2026-11-27', '2027-01-03'],
  },
  krakow: {
    name: ['크라쿠프 크리스마스 마켓', 'Kraków Christmas Market', 'クラクフのクリスマスマーケット'],
    place: ['중앙 시장 광장(리네크 그우브니)', 'Main Market Square (Rynek Główny)', '中央市場広場'],
    period: ['보통 11월 말~1월 초(2026년 일정은 공식 발표 전)', 'Usually late November to early January (2026 dates not yet announced)', '通常11月末〜1月初め（2026年の日程は未発表）'],
    note: ['중앙 시장 광장에서 해마다 열리는 마켓으로, 중세 직물회관 앞에 목조 노점이 늘어섭니다.', 'The annual market on the Main Market Square, with wooden stalls before the medieval Cloth Hall.', '中央市場広場で毎年開かれ、中世の織物会館前に木の屋台が並びます。'],
    url: 'https://turystykakrakow.pl/kalendarium/276421,object,0,37605,,jarmark-bozonarodzeniowy--christmas-market.html',
  },
  stockholm: {
    name: ['스톡홀름 크리스마스 마켓', 'Stockholm Christmas Markets', 'ストックホルムのクリスマスマーケット'],
    place: ['감라스탄 스토르토리에트 광장·스칸센', 'Stortorget in Gamla stan and Skansen', 'ガムラスタンのストールトリエット広場・スカンセン'],
    period: ['11월 하순~12월(마켓마다 일정이 다름)', 'Late November to December (dates differ by market)', '11月下旬〜12月（マーケットごとに異なる）'],
    note: ['구시가지 감라스탄의 스토르토리에트 광장과 야외 박물관 스칸센의 마켓이 대표적입니다.', 'Stortorget in Gamla stan and the open-air museum Skansen host the best-known markets.', '旧市街ガムラスタンのストールトリエット広場と野外博物館スカンセンのマーケットが代表的です。'],
    url: 'https://www.visitstockholm.com/see-do/attractions/christmas-markets-in-stockholm/',
  },
  helsinki: {
    name: ['헬싱키 크리스마스 마켓(성 토마스 마켓)', 'Helsinki Christmas Market (St Thomas Market)', 'ヘルシンキのクリスマスマーケット（聖トーマス・マーケット）'],
    place: ['원로원 광장(대성당 앞)', 'Senate Square below the cathedral', '元老院広場（大聖堂前）'],
    period: ['2026년 11월 27일~12월 22일', '27 November–22 December 2026', '2026年11月27日〜12月22日'],
    note: ['흰 대성당 아래 원로원 광장에 열리는 야외 마켓으로, 공예품·음식 노점과 회전목마가 있습니다.', 'An outdoor market on Senate Square below the white cathedral, with crafts, food and a carousel.', '白い大聖堂の下の元老院広場で開かれる屋外マーケットで、工芸品や料理の屋台、メリーゴーラウンドがあります。'],
    url: 'https://www.myhelsinki.fi/events/helsinki-christmas-market-2026/',
    dates: ['2026-11-27', '2026-12-22'],
  },
  paris: {
    name: ['파리 크리스마스 마켓', 'Paris Christmas Markets', 'パリのクリスマスマーケット'],
    place: ['노트르담 건너편 르네 비비아니 광장, 샹젤리제 거리 등', 'Square René Viviani opposite Notre-Dame, the Champs-Élysées and more', 'ノートルダム向かいのルネ・ヴィヴィアニ広場、シャンゼリゼ通りなど'],
    period: ['노트르담 마켓 2026년 11월 26일~12월 27일, 샹젤리제 마켓 2027년 1월 4일까지(장소마다 다름)', 'Notre-Dame market 26 November–27 December 2026; Champs-Élysées market until 4 January 2027 (varies by venue)', 'ノートルダムのマーケットは2026年11月26日〜12月27日、シャンゼリゼは2027年1月4日まで（会場により異なる）'],
    note: ['파리는 장소마다 크기와 주제가 다른 마켓이 열립니다. 노트르담 옆 마켓은 프랑스 공예품과 음식이 중심입니다.', 'Paris markets vary by venue and theme; the one by Notre-Dame focuses on French crafts and food.', 'パリは会場ごとに規模やテーマが異なります。ノートルダム横のマーケットはフランスの工芸品と料理が中心です。'],
    url: 'https://parisjetaime.com/eng/article/what-to-do-in-paris-in-december-a1584',
    dates: ['2026-11-26', '2026-12-27'],
  },
  // ↓ 가격 조사 중인 도시(공개되면 보인다)
  frankfurt: {
    name: ['프랑크푸르트 크리스마스 마켓', 'Frankfurt Christmas Market', 'フランクフルトのクリスマスマーケット'],
    place: ['로스마르크트·하우프트바헤·파울스플라츠·뢰머베르크에서 마인 강변까지', 'From Roßmarkt via Hauptwache, Paulsplatz and Römerberg to the Mainkai', 'ロスマルクト、ハウプトヴァッヘ、パウルス広場、レーマーベルクからマイン河岸まで'],
    period: ['2026년 11월 23일~12월 22일', '23 November–22 December 2026', '2026年11月23日〜12月22日'],
    note: ['옛 시청(뢰머) 앞 뢰머베르크 광장의 대형 트리가 상징이고, 시내 여러 광장을 따라 마켓이 이어집니다.', 'The giant tree on Römerberg before the old town hall is the symbol, with stalls running through several central squares.', '旧市庁舎（レーマー）前のレーマーベルク広場の大きなツリーが象徴で、市内の広場に沿ってマーケットが続きます。'],
    url: 'https://www.visitfrankfurt.travel/en/experience/festival-and-events/frankfurt-christmas-market',
    dates: ['2026-11-23', '2026-12-22'],
  },
  berlin: {
    name: ['베를린 크리스마스 마켓', 'Berlin Christmas Markets', 'ベルリンのクリスマスマーケット'],
    place: ['젠다르멘마르크트·샤를로텐부르크 궁전 앞 등', 'Gendarmenmarkt, Charlottenburg Palace and more', 'ジャンダルメンマルクト、シャルロッテンブルク宮殿前など'],
    period: ['마켓마다 다름(2026년 예: 젠다르멘마르크트 11월 23일~12월 31일, 카이저 빌헬름 기념교회 앞 11월 23일~2027년 1월 3일)', 'Varies by market (2026: Gendarmenmarkt 23 November–31 December; Kaiser Wilhelm Memorial Church 23 November–3 January 2027)', 'マーケットごとに異なる（2026年例：ジャンダルメンマルクト11月23日〜12月31日、カイザー・ヴィルヘルム記念教会前11月23日〜2027年1月3日）'],
    note: ['젠다르멘마르크트 등 도시 곳곳에서 마켓이 열립니다. 입장료·운영시간은 마켓별 공식 안내를 확인하세요.', 'Markets run at venues across the city, including Gendarmenmarkt; check each market’s page for admission and hours.', 'ジャンダルメンマルクトなど市内各所でマーケットが開かれます。入場料や営業時間はマーケットごとに確認を。'],
    url: 'https://www.visitberlin.de/en/christmas-markets-berlin',
  },
  zurich: {
    name: ['취리히 크리스마스 마켓', 'Zurich Christmas Markets', 'チューリッヒのクリスマスマーケット'],
    place: ['중앙역 홀·오페라하우스 앞 광장 등', 'Main station hall, the square by the opera house and more', '中央駅構内・オペラハウス前の広場など'],
    period: ['2026년 11월 19일~12월 23·24일(장소마다 다름)', '19 November–23/24 December 2026 (varies by venue)', '2026年11月19日〜12月23・24日（会場により異なる）'],
    note: ['중앙역 홀 안에 100여 개 노점과 대형 트리가 있는 실내 마켓이 열립니다. 합창단이 노래하는 「노래하는 트리」는 다른 장소의 행사입니다.', 'An indoor market with over 100 stalls and a huge tree fills the main station hall; the choir-filled “Singing Christmas Tree” is a separate event.', '中央駅構内に100余りの屋台と大きなツリーがある屋内マーケットが開かれます。合唱団の「歌うツリー」は別会場のイベントです。'],
    url: 'https://www.zuerich.com/en/sightseeing-activities/shopping/christmas-markets',
    dates: ['2026-11-19', '2026-12-24'],
  },
  basel: {
    name: ['바젤 크리스마스 마켓', 'Basel Christmas Market', 'バーゼルのクリスマスマーケット'],
    place: ['바르퓌서 광장·뮌스터 광장', 'Barfüsserplatz and Münsterplatz', 'バルフュッサー広場・ミュンスター広場'],
    period: ['2026년 11월 26일~12월 23일', '26 November–23 December 2026', '2026年11月26日〜12月23日'],
    note: ['바르퓌서 광장과 뮌스터 광장 두 곳에 목조 노점이 늘어섭니다.', 'Wooden stalls line two squares, Barfüsserplatz and Münsterplatz.', 'バルフュッサー広場とミュンスター広場の二か所に木の屋台が並びます。'],
    url: 'https://www.bs.ch/en/pd/marketing/messenundmaerkte/basel-christmas',
    dates: ['2026-11-26', '2026-12-23'],
  },
  riga: {
    name: ['리가 크리스마스 마켓', 'Riga Christmas Market', 'リガのクリスマスマーケット'],
    place: ['돔 광장', 'Dome Square', 'ドーム広場'],
    period: ['2026년 11월 27일~2027년 1월 3일', '27 November 2026–3 January 2027', '2026年11月27日〜2027年1月3日'],
    note: ['구시가지 돔 광장에 열리는 마켓입니다. 리가 시청 광장에는 1510년 크리스마스트리 전승을 기념하는 표지가 있어 함께 들러볼 만합니다.', 'The market fills Dome Square in the Old Town; Town Hall Square nearby has a marker for the 1510 Christmas-tree tradition.', '旧市街のドーム広場で開かれます。近くの市庁舎広場には1510年のクリスマスツリーの伝承を記念する目印があります。'],
    url: 'https://www.liveriga.com/en/2795-old-town-christmas-fair',
    dates: ['2026-11-27', '2027-01-03'],
  },
  gdansk: {
    name: ['그단스크 크리스마스 마켓', 'Gdańsk Christmas Market', 'グダニスクのクリスマスマーケット'],
    place: ['타르그 벵글로비 광장·왕의 길·보구스와프스키 거리 등', 'Targ Węglowy, the Royal Route, Bogusławskiego Street and more', 'タルグ・ヴェングロヴィ広場、王の道、ボグスワフスキ通りなど'],
    period: ['2026년 11월 20일~12월 23일', '20 November–23 December 2026', '2026年11月20日〜12月23日'],
    note: ['입장은 무료이고, 구시가지 여러 구역에 노점과 놀이기구가 들어섭니다.', 'Free entry, with stalls and rides across several old-town areas.', '入場無料で、旧市街の複数のエリアに屋台や乗り物が並びます。'],
    url: 'https://bozonarodzeniowy.pl/en/',
    dates: ['2026-11-20', '2026-12-23'],
  },
  bruges: {
    name: ['브뤼헤 윈터 글로', 'Bruges Winter Glow', 'ブルージュ・ウィンターグロー'],
    place: ['마르크트 광장·시몬 스테빈 광장', 'Markt and Simon Stevinplein', 'マルクト広場・シモン・ステヴィン広場'],
    period: ['마켓 2026년 11월 20일~2027년 1월 3일(윈터 글로 행사는 1월 31일까지)', 'Markets 20 November 2026–3 January 2027 (Winter Glow continues to 31 January)', 'マーケットは2026年11月20日〜2027年1月3日（ウィンターグローは1月31日まで）'],
    note: ['종탑 아래 마르크트 광장과 시몬 스테빈 광장에 마켓이 열리고, 겨울 축제 「윈터 글로」가 도시 곳곳으로 이어집니다.', 'Markets on the Markt beneath the Belfry and on Simon Stevinplein, with the wider Winter Glow festival around town.', '鐘楼の下のマルクト広場とシモン・ステヴィン広場にマーケットが開かれ、冬の祭り「ウィンターグロー」が街中に広がります。'],
    url: 'https://www.visitbruges.be/en/winter-glow/christmas-markets',
    dates: ['2026-11-20', '2027-01-03'],
  },
  'quebec-city': {
    name: ['퀘벡 독일식 크리스마스 마켓', 'Québec City German Christmas Market', 'ケベック・ドイツ風クリスマスマーケット'],
    place: ['구시가지 시청 주변 등 여러 곳', 'Several sites around City Hall in Old Québec', '旧市街の市庁舎周辺など複数の会場'],
    period: ['2026년 11월 19일~12월 23일(목~일 운영, 12월 21~23일 매일)', '19 November–23 December 2026 (Thursday–Sunday, plus daily 21–23 December)', '2026年11月19日〜12月23日（木〜日曜、12月21〜23日は毎日）'],
    note: ['입장은 무료이고, 눈 덮인 성벽 도시에 목조 노점과 조명이 늘어섭니다.', 'Free entry, with wooden stalls and lights across the snowy walled city.', '入場無料で、雪の城壁都市に木の屋台と光の装飾が並びます。'],
    url: 'https://www.quebec-cite.com/en/what-to-do-quebec-city/events/german-christmas-market',
    dates: ['2026-11-19', '2026-12-23'],
  },
};
