/** 도시 가이드 초안 8 (Claude 초안, 금액 없음) — 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_8: Record<string, Compact> = {
  copenhagen: {
    h: [
      ['인어공주 동상', 'The Little Mermaid', '人魚姫の像', '안데르센 동화를 기리는 바닷가의 작은 동상입니다.', 'The small seaside statue honouring Hans Christian Andersen’s tale.', 'アンデルセン童話にちなんだ海辺の小さな像です。'],
      ['뉘하운', 'Nyhavn', 'ニューハウン', '알록달록한 집들이 늘어선 운하 항구. 운하 보트 투어가 여기서 출발합니다.', 'The colourful canal harbour where canal tours start.', 'カラフルな家が並ぶ運河の港。運河ツアーの出発地です。'],
      ['티볼리 공원', 'Tivoli Gardens', 'チボリ公園', '1843년에 문을 연 시내 한복판의 놀이공원입니다.', 'The city-centre amusement park that opened in 1843.', '1843年開園の市中心の遊園地です。'],
      ['로센보르 궁전', 'Rosenborg Castle', 'ローゼンボー城', '왕실 보물(왕관 보석)을 전시하는 르네상스 궁전입니다.', 'A Renaissance castle displaying the crown jewels.', '王室の宝物（王冠）を展示するルネサンス様式の城です。'],
    ],
    t: [
      ['공항에서 시내까지 지하철(메트로)이 24시간 다녀 늦은 도착에도 이동이 편합니다. 탈 때 존 구분을 확인하세요.', 'The metro runs 24 hours from the airport to the centre; check the fare zones when you board.', '空港から市内へは地下鉄が24時間運行しているので、遅い到着でも安心です。乗車時にゾーンを確認しましょう。'],
      ['스트뢰에 거리는 걷기 좋은 긴 보행자 쇼핑 거리라 시청 광장에서 뉘하운까지 걸어가기 좋습니다.', 'Strøget, a long pedestrian shopping street, links City Hall Square toward Nyhavn on foot.', '長い歩行者天国の商店街ストロイエを歩いて、市庁舎前広場からニューハウン方面へ行けます。'],
      ['자전거 도시라 자전거 도로를 걷거나 막지 않도록 조심하세요.', 'It is a cycling city; never walk in or block the bike lanes.', '自転車の街なので、自転車道を歩いたりふさいだりしないように。'],
      ['대부분의 상점·식당이 카드만 받아 현금이 거의 필요 없습니다.', 'Most shops and restaurants are card-only, so cash is rarely needed.', 'ほとんどの店がカード払いのみで、現金はほぼ不要です。'],
    ],
  },
  stockholm: {
    h: [
      ['시청사', 'Stockholm City Hall', 'ストックホルム市庁舎', '노벨상 만찬이 열리는 건물. 탑에 오르면 감라스탄이 내려다보입니다.', 'Where the Nobel banquet is held; its tower overlooks Gamla stan.', 'ノーベル賞晩餐会の会場。塔からガムラスタンが見渡せます。'],
      ['감라스탄', 'Gamla stan', 'ガムラスタン', '좁은 골목과 알록달록한 건물이 모인 구시가지. 왕궁도 이곳에 있습니다.', 'The old town of narrow lanes and colourful facades, home to the Royal Palace.', '細い路地とカラフルな建物が集まる旧市街。王宮もここにあります。'],
      ['바사 박물관', 'Vasa Museum', 'ヴァーサ号博物館', '1628년 첫 항해에서 가라앉은 군함을 거의 그대로 인양해 전시합니다.', 'A 17th-century warship that sank on its maiden voyage, almost fully preserved.', '1628年の処女航海で沈んだ軍艦をほぼ完全な姿で展示しています。'],
      ['스칸센', 'Skansen', 'スカンセン', '스웨덴 전통 가옥과 동물을 볼 수 있는 야외 박물관입니다.', 'An open-air museum of traditional houses and Nordic animals.', 'スウェーデンの伝統家屋と北欧の動物が見られる野外博物館です。'],
    ],
    t: [
      ['섬으로 이뤄진 도시라 시내 페리도 대중교통 요금으로 탈 수 있는 노선이 있습니다.', 'The city sits on islands, and some commuter ferries run on the regular transit fare.', '島々からなる街で、一部のフェリーは市内交通の運賃で乗れます。'],
      ['지하철역마다 벽화와 조각이 있어 "세계에서 가장 긴 미술관"이라 불립니다. T-센트랄렌·쿵스트레드고르덴 역이 유명합니다.', 'Metro stations are decorated with art; T-Centralen and Kungsträdgården are highlights.', '地下鉄の駅ごとにアートがあり「世界一長い美術館」と呼ばれます。T-セントラーレン駅などが有名です。'],
      ['오후에 커피와 빵을 즐기는 피카(fika) 문화가 있어 카페마다 시나몬번을 팝니다.', 'Fika, the coffee-and-pastry break, means every café sells cinnamon buns.', 'コーヒーと菓子でひと休みする「フィーカ」の文化があり、どのカフェにもシナモンロールがあります。'],
    ],
  },
  helsinki: {
    h: [
      ['암석 교회(템펠리아우키오)', 'Temppeliaukio Church', 'テンペリアウキオ教会', '바위를 파내 만든 교회. 자연 암벽이 그대로 실내 벽이 됩니다.', 'A church carved into solid rock, its walls the natural stone.', '岩をくり抜いて造った教会。自然の岩肌がそのまま内壁です。'],
      ['수오멘린나 요새', 'Suomenlinna', 'スオメンリンナ要塞', '페리로 가는 섬 요새로 유네스코 세계유산입니다. 시내 교통권으로 페리를 탈 수 있습니다.', 'A UNESCO island fortress; the ferry runs on a regular transit ticket.', 'フェリーで行く世界遺産の島の要塞。市内交通の切符でフェリーに乗れます。'],
      ['헬싱키 대성당·원로원 광장', 'Helsinki Cathedral and Senate Square', 'ヘルシンキ大聖堂・元老院広場', '흰 벽과 초록 돔의 대성당이 광장 위 계단에 서 있습니다.', 'The white, green-domed cathedral above the steps of Senate Square.', '白い壁と緑のドームの大聖堂が広場の階段の上に建っています。'],
      ['마켓 광장·올드 마켓 홀', 'Market Square and Old Market Hall', 'マーケット広場・オールドマーケットホール', '항구 앞 시장. 연어 수프와 생선 요리를 맛볼 수 있습니다.', 'The harbourside market for salmon soup and fish dishes.', '港の前の市場。サーモンスープや魚料理が味わえます。'],
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
    ],
    t: [
      ['공항버스와 시내버스는 현금을 받지 않거나 거스름돈을 주지 않는 경우가 있어, 교통카드(리프 카드)나 비접촉 결제를 준비하세요.', 'Buses may not give change or take cash; use a Leap Card or contactless payment.', 'バスは現金不可やお釣りが出ないことがあるので、交通カード（Leap Card）かタッチ決済を用意しましょう。'],
      ['식당 팁은 의무가 아니지만, 서비스가 좋았다면 10% 안팎을 남기는 경우가 많습니다.', 'Tipping is not required, but around 10% is common for good service.', 'チップは義務ではありませんが、良いサービスには10%前後を置くことが多いです。'],
      ['템플 바 거리 펍은 관광객이 많아 비싼 편이라, 조금 벗어난 펍에서도 전통 음악을 들을 수 있습니다.', 'Temple Bar pubs are touristy and pricey; pubs nearby also host trad sessions.', 'テンプル・バーのパブは観光客が多く高めなので、少し外れたパブでも伝統音楽が聴けます。'],
      ['비가 자주 오고 날씨가 빨리 바뀌니 우산이나 방수 겉옷을 챙기세요.', 'Rain is frequent and changeable; carry an umbrella or waterproof.', '雨が多く天気が変わりやすいので、傘や防水の上着を。'],
    ],
  },
};
