/** 도시 가이드 초안 8 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_8: Record<string, Compact> = {
  copenhagen: {
    h: [
      ['인어공주 동상', 'The Little Mermaid', '人魚姫の像', '안데르센 동화를 기리는 바닷가의 작은 동상입니다.', 'The small seaside statue honouring Hans Christian Andersen’s tale.', 'アンデルセン童話にちなんだ海辺の小さな像です。'],
      ['뉘하운', 'Nyhavn', 'ニューハウン', '알록달록한 집들이 늘어선 운하 항구. 운하 보트 투어가 여기서 출발합니다.', 'The colourful canal harbour where canal tours start.', 'カラフルな家が並ぶ運河の港。運河ツアーの出発地です。'],
      ['티볼리 공원', 'Tivoli Gardens', 'チボリ公園', '1843년에 문을 연 시내 한복판의 놀이공원입니다.', 'The city-centre amusement park that opened in 1843.', '1843年開園の市中心の遊園地です。'],
      ['로센보르 궁전', 'Rosenborg Castle', 'ローゼンボー城', '왕실 보물(왕관 보석)을 전시하는 르네상스 궁전입니다.', 'A Renaissance castle displaying the crown jewels.', '王室の宝物（王冠）を展示するルネサンス様式の城です。'],
      ['덴마크 국립박물관', 'National Museum of Denmark', 'デンマーク国立博物館', '바이킹 시대부터 근대까지 덴마크 역사를 한곳에서 볼 수 있는 박물관으로, 시청 광장과 가깝습니다.', 'Danish history from the Vikings onward under one roof, near City Hall Square.', 'ヴァイキング時代から近代までのデンマーク史を一か所で見られる博物館で、市庁舎広場の近くです。'],
    ],
    t: [
      ['공항에서 시내까지 지하철(메트로)이 24시간 다녀 늦은 도착에도 이동이 편합니다. 탈 때 존 구분을 확인하세요.', 'The metro runs 24 hours from the airport to the centre; check the fare zones when you board.', '空港から市内へは地下鉄が24時間運行しているので、遅い到着でも安心です。乗車時にゾーンを確認しましょう。'],
      ['스트뢰에 거리는 걷기 좋은 긴 보행자 쇼핑 거리라 시청 광장에서 뉘하운까지 걸어가기 좋습니다.', 'Strøget, a long pedestrian shopping street, links City Hall Square toward Nyhavn on foot.', '長い歩行者天国の商店街ストロイエを歩いて、市庁舎前広場からニューハウン方面へ行けます。'],
      ['자전거 도시라 자전거 도로를 걷거나 막지 않도록 조심하세요.', 'It is a cycling city; never walk in or block the bike lanes.', '自転車の街なので、自転車道を歩いたりふさいだりしないように。'],
      ['코펜하겐의 호텔·상점·카페·식당에서는 주요 신용카드를 널리 받습니다. 카드 사용 전 가맹점의 결제 조건을 확인하세요.', 'Major credit cards are widely accepted at Copenhagen\'s hotels, shops, cafés and restaurants. Check the payment terms before using your card.', 'コペンハーゲンのホテル、店、カフェ、レストランでは主要なクレジットカードが広く使えます。利用前に支払い条件を確認しましょう。'],
    ],
  },
  stockholm: {
    h: [
      ['시청사', 'Stockholm City Hall', 'ストックホルム市庁舎', '노벨상 만찬이 열리는 건물. 탑에 오르면 감라스탄이 내려다보입니다.', 'Where the Nobel banquet is held; its tower overlooks Gamla stan.', 'ノーベル賞晩餐会の会場。塔からガムラスタンが見渡せます。'],
      ['감라스탄', 'Gamla stan', 'ガムラスタン', '좁은 골목과 알록달록한 건물이 모인 구시가지. 왕궁도 이곳에 있습니다.', 'The old town of narrow lanes and colourful facades, home to the Royal Palace.', '細い路地とカラフルな建物が集まる旧市街。王宮もここにあります。'],
      ['바사 박물관', 'Vasa Museum', 'ヴァーサ号博物館', '1628년 첫 항해에서 가라앉은 군함을 거의 그대로 인양해 전시합니다.', 'A 17th-century warship that sank on its maiden voyage, almost fully preserved.', '1628年の処女航海で沈んだ軍艦をほぼ完全な姿で展示しています。'],
      ['스칸센', 'Skansen', 'スカンセン', '스웨덴 전통 가옥과 동물을 볼 수 있는 야외 박물관입니다.', 'An open-air museum of traditional houses and Nordic animals.', 'スウェーデンの伝統家屋と北欧の動物が見られる野外博物館です。'],
      ['아바 더 뮤지엄', 'ABBA The Museum', 'ABBAザ・ミュージアム', '유르고르덴섬에 있는 아바 체험 박물관으로, 무대 의상과 노래 체험 코너가 있습니다.', 'An interactive ABBA museum on Djurgården, with stage costumes and sing-along booths.', 'ユールゴーデン島にあるABBAの体験型博物館で、ステージ衣装や歌の体験コーナーがあります。'],
    ],
    t: [
      ['섬으로 이뤄진 도시라 시내 페리도 대중교통 요금으로 탈 수 있는 노선이 있습니다.', 'The city sits on islands, and some commuter ferries run on the regular transit fare.', '島々からなる街で、一部のフェリーは市内交通の運賃で乗れます。'],
      ['스톡홀름 지하철은 여러 역에서 벽화·조각을 볼 수 있어 \'세계에서 가장 긴 미술 전시\'로 불립니다. T-센트랄렌과 쿵스트레드고르덴 역도 둘러보세요.', 'Art at many Stockholm metro stations has earned the network the nickname \'the world\'s longest art exhibition.\' Look out for T-Centralen and Kungsträdgården.', 'ストックホルムの地下鉄には壁画や彫刻がある駅が多く、「世界一長い美術展」とも呼ばれます。Tセントラーレン駅とクングストレードゴーデン駅も見てみましょう。'],
      ['커피와 시나몬번을 곁들여 쉬는 \'피카\'는 스웨덴의 일상적인 문화입니다. 스톡홀름 카페에서도 경험할 수 있습니다.', 'Fika, a break over coffee and often a cinnamon bun, is part of everyday Swedish life. You can try it in Stockholm cafés.', 'コーヒーとシナモンロールを楽しむ休憩「フィーカ」はスウェーデンの日常文化です。ストックホルムのカフェでも体験できます。'],
      ['공항에서 시내: 알란다 공항에서 알란다 익스프레스를 타면 스톡홀름 중앙역까지 약 20분입니다. 통근열차(펜델톡)와 공항버스도 있습니다.', 'Airport to city: the Arlanda Express reaches Stockholm Central in about 20 minutes; commuter trains and airport coaches are alternatives.', '空港から市内へ：アーランダ空港からアーランダ・エクスプレスでストックホルム中央駅まで約20分です。通勤列車や空港バスもあります。'],
    ],
  },
  helsinki: {
    h: [
      ['암석 교회(템펠리아우키오)', 'Temppeliaukio Church', 'テンペリアウキオ教会', '바위를 파내 만든 교회. 자연 암벽이 그대로 실내 벽이 됩니다.', 'A church carved into solid rock, its walls the natural stone.', '岩をくり抜いて造った教会。自然の岩肌がそのまま内壁です。'],
      ['수오멘린나 요새', 'Suomenlinna', 'スオメンリンナ要塞', '페리로 가는 섬 요새로 유네스코 세계유산입니다. 시내 교통권으로 페리를 탈 수 있습니다.', 'A UNESCO island fortress; the ferry runs on a regular transit ticket.', 'フェリーで行く世界遺産の島の要塞。市内交通の切符でフェリーに乗れます。'],
      ['헬싱키 대성당·원로원 광장', 'Helsinki Cathedral and Senate Square', 'ヘルシンキ大聖堂・元老院広場', '흰 벽과 초록 돔의 대성당이 광장 위 계단에 서 있습니다.', 'The white, green-domed cathedral above the steps of Senate Square.', '白い壁と緑のドームの大聖堂が広場の階段の上に建っています。'],
      ['마켓 광장·올드 마켓 홀', 'Market Square and Old Market Hall', 'マーケット広場・オールドマーケットホール', '항구 앞 시장. 연어 수프와 생선 요리를 맛볼 수 있습니다.', 'The harbourside market for salmon soup and fish dishes.', '港の前の市場。サーモンスープや魚料理が味わえます。'],
      ['오디 중앙도서관', 'Oodi Helsinki Central Library', 'オーディ・ヘルシンキ中央図書館', '중앙역 앞 국회의사당 맞은편의 목조 곡면 건축 도서관으로, 누구나 들어가 쉬어 갈 수 있습니다.', 'A curving timber library opposite Parliament near the station, open for anyone to drop in.', '中央駅近く国会議事堂の向かいにある木造曲面建築の図書館で、誰でも立ち寄って休めます。'],
    ],
    t: [
      ['여름에는 해가 밤늦게까지 지지 않아 저녁 시간을 길게 쓸 수 있습니다.', 'In summer the sun sets very late, leaving long evenings for sightseeing.', '夏は夜遅くまで日が沈まないので、夕方の時間を長く使えます。'],
      ['핀란드식 사우나는 공공 사우나에서도 체험할 수 있어 여행자에게 인기가 많습니다.', 'Public saunas let visitors try a real Finnish sauna.', '公衆サウナでフィンランド式サウナを体験でき、旅行者に人気です。'],
      ['공항에서 시내까지 기차가 다니며, 시내 교통권(ABC 구역)으로 탈 수 있습니다.', 'Trains run from the airport to the centre on a regular ABC-zone ticket.', '空港から市内まで電車が走り、市内交通の切符（ABCゾーン）で乗れます。'],
    ],
  },
  dublin: {
    h: [
      ['킬메이넘 감옥', 'Kilmainham Gaol', 'キルメイナム刑務所', '아일랜드 독립운동의 역사가 남은 옛 감옥. 가이드 투어로 봅니다.', 'The old prison central to Irish independence history, seen by guided tour.', 'アイルランド独立運動の歴史が残る旧刑務所。ガイドツアーで見学します。'],
      ['트리니티 칼리지·켈스의 서', 'Trinity College and the Book of Kells', 'トリニティ・カレッジとケルズの書', '중세 복음서 필사본과 웅장한 옛 도서관(롱 룸)을 볼 수 있습니다.', 'The medieval gospel manuscript and the grand Long Room library.', '中世の福音書写本と壮大な旧図書館（ロングルーム）が見られます。'],
      ['기네스 스토어하우스', 'Guinness Storehouse', 'ギネス・ストアハウス', '기네스 양조의 역사를 보고 꼭대기 바에서 시내를 내려다봅니다.', 'Guinness brewing history, finishing at a rooftop bar with city views.', 'ギネス醸造の歴史を見て、最上階のバーから街を見渡します。'],
      ['템플 바', 'Temple Bar', 'テンプル・バー', '저녁마다 펍에서 아일랜드 전통 음악 연주가 열리는 거리입니다.', 'A district of pubs with live traditional Irish music every evening.', '毎晩パブでアイルランド伝統音楽の演奏がある通りです。'],
      ['아일랜드 국립미술관', 'National Gallery of Ireland', 'アイルランド国立美術館', '메리언 스퀘어 옆 미술관으로, 카라바조와 아일랜드 화가 작품을 볼 수 있으며 상설 전시는 무료입니다.', 'Beside Merrion Square, with Caravaggio and Irish painters; the permanent collection is free.', 'メリオン・スクエアの隣の美術館で、カラヴァッジョやアイルランドの画家の作品を所蔵。常設展は無料です。'],
    ],
    t: [
      ['더블린 버스는 현금으로 탈 때 거스름돈을 주지 않으므로 잔돈을 준비하거나 리프 카드를 사용하세요. 공항버스 등 다른 운영사는 결제 방법을 따로 확인하세요.', 'Dublin Bus does not give change for cash fares, so carry exact change or use a Leap Card. Check the payment method separately for airport and other operators.', 'ダブリンバスで現金払いをする場合、お釣りは出ません。小銭を用意するか、リープカードを使いましょう。空港バスなど別の事業者は支払い方法を個別に確認してください。'],
      ['식당 팁은 의무가 아니지만, 서비스가 좋았다면 10% 안팎을 남기는 경우가 많습니다.', 'Tipping is not required, but around 10% is common for good service.', 'チップは義務ではありませんが、良いサービスには10%前後を置くことが多いです。'],
      ['템플 바 밖에도 탈벗 스트리트와 캠든 스트리트 등에서 전통 음악을 들을 수 있는 펍이 있습니다.', 'You can hear traditional music beyond Temple Bar, including at pubs on Talbot Street and Camden Street.', 'テンプルバー地区以外でも、タルボット通りやカムデン通りのパブで伝統音楽を聴けます。'],
      ['비가 자주 오고 날씨가 빨리 바뀌니 우산이나 방수 겉옷을 챙기세요.', 'Rain is frequent and changeable; carry an umbrella or waterproof.', '雨が多く天気が変わりやすいので、傘や防水の上着を。'],
    ],
  },
};
