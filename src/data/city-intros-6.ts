/** 도시 소개 6 — 겨울 크리스마스 마켓 도시 (형식은 city-intros-1.ts) */
import type { Intro } from './city-intros-1';

export const INTROS_6: Record<string, Intro> = {
  dresden: {
    o: ['엘베강 변의 바로크 도시로, 전쟁 뒤 다시 지은 프라우엔 교회와 츠빙거 궁전이 대표 명소입니다. 겨울에는 독일에서 가장 오래된 크리스마스 마켓 중 하나인 슈트리첼마르크트가 열립니다.', 'A Baroque city on the Elbe, with the rebuilt Frauenkirche and the Zwinger. In winter it hosts the Striezelmarkt, one of Germany’s oldest Christmas markets.', 'エルベ川沿いのバロックの街で、再建された聖母教会やツヴィンガー宮殿が代表的。冬にはドイツ最古級のクリスマスマーケット、シュトリーツェルマルクトが開かれます。'],
    d: [2, 2],
    s: [['구시가지(알트슈타트)', 'Altstadt', '旧市街（アルトシュタット）', '마켓과 명소를 모두 걸어서 다닙니다.', 'Walk to the market and every major sight.', 'マーケットや名所へすべて歩いて行けます。']],
  },
  nuremberg: {
    o: ['성벽에 둘러싸인 중세 구시가지와 황제의 성이 있는 도시로, 세계적으로 유명한 크리스트킨들레스마르크트가 열립니다. 손가락만 한 소시지와 렙쿠헨이 명물입니다.', 'A walled medieval town crowned by the Imperial Castle, home to the world-famous Christkindlesmarkt; tiny sausages and Lebkuchen are local specialities.', '城壁に囲まれた中世の旧市街と皇帝の城がある街で、世界的に有名なクリストキンドレスマルクトが開かれます。小さなソーセージとレープクーヘンが名物です。'],
    d: [2, 2],
    s: [['구시가지', 'Old Town', '旧市街', '마켓 광장과 성까지 걸어서 갑니다.', 'Walk to the market square and the castle.', 'マーケット広場や城まで歩いて行けます。']],
  },
  cologne: {
    o: ['거대한 고딕 대성당이 중앙역 바로 옆에 서 있는 라인강 도시입니다. 겨울에는 대성당 앞을 비롯해 시내 곳곳에 여러 크리스마스 마켓이 열려 하루에 몇 곳을 이어서 둘러볼 수 있습니다.', 'A Rhine city whose huge Gothic cathedral stands right beside the main station. In winter several Christmas markets open across the centre, so you can visit a few in one day.', '巨大なゴシック大聖堂が中央駅のすぐ隣にそびえるライン川の街。冬は大聖堂前をはじめ市内各所に複数のクリスマスマーケットが開かれ、1日で何か所も巡れます。'],
    d: [1, 2],
    s: [['대성당·구시가지', 'Cathedral / Old Town', '大聖堂・旧市街', '기차역과 마켓이 모두 가깝습니다.', 'Close to the station and the markets.', '駅やマーケットにすべて近いです。']],
  },
  strasbourg: {
    o: ['프랑스와 독일 문화가 섞인 알자스의 중심 도시로, 쁘띠 프랑스의 목조 가옥과 분홍빛 대성당이 아름답습니다. 겨울에는 「크리스마스의 수도」라 불릴 만큼 도시 전체가 마켓과 장식으로 꾸며집니다.', 'The capital of Alsace, blending French and German culture, with half-timbered Petite France and a pink-sandstone cathedral. In winter it calls itself the “Capital of Christmas”.', 'フランスとドイツの文化が混ざるアルザスの中心都市で、プティット・フランスの木組みの家やピンク色の大聖堂が美しいです。冬は「クリスマスの首都」と呼ばれるほど街中が飾られます。'],
    d: [2, 2],
    s: [['그랑딜(구시가지 섬)', 'Grande Île', 'グラン・ディル（旧市街の島）', '마켓과 명소 한가운데입니다.', 'In the middle of the markets and sights.', 'マーケットと名所の真ん中です。']],
  },
  colmar: {
    o: ['운하와 알록달록한 목조 가옥이 동화 같은 알자스의 작은 도시입니다. 겨울에는 구시가지 곳곳에 작은 마켓이 열리고, 주변 와인 마을과 함께 둘러보기 좋습니다.', 'A small Alsace town of canals and colourful half-timbered houses. In winter little markets fill the old town, and the surrounding wine villages are close by.', '運河とカラフルな木組みの家がおとぎ話のようなアルザスの小さな街。冬は旧市街のあちこちに小さなマーケットが開かれ、周辺のワイン村と一緒に巡れます。'],
    d: [1, 2],
    s: [['구시가지', 'Old Town', '旧市街', '마켓과 쁘띠 베니스를 걸어서 다닙니다.', 'Walk to the markets and Little Venice.', 'マーケットやプティット・ヴニーズへ歩いて行けます。']],
  },
  salzburg: {
    o: ['모차르트의 고향이자 「사운드 오브 뮤직」의 무대인 음악의 도시입니다. 요새 아래 바로크 구시가지에서 대림절 마켓이 열리고, 근교 할슈타트와 함께 묶는 여행이 많습니다.', 'Mozart’s birthplace and the setting of The Sound of Music. Advent markets fill the Baroque old town below the fortress, and many combine it with nearby Hallstatt.', 'モーツァルトの故郷で「サウンド・オブ・ミュージック」の舞台となった音楽の街。城塞の下のバロックの旧市街でアドベントのマーケットが開かれ、近郊のハルシュタットと組み合わせる旅が多いです。'],
    d: [2, 2],
    s: [['구시가지·신시가지', 'Altstadt / Neustadt', '旧市街・新市街', '마켓과 명소를 걸어서 다닙니다.', 'Walk to the markets and sights.', 'マーケットや名所へ歩いて行けます。']],
  },
  zagreb: {
    o: ['크로아티아의 수도로, 언덕 위 구시가지와 독특한 박물관, 카페 문화가 있습니다. 겨울의 「어드벤트 자그레브」는 유럽 최고의 크리스마스 마켓으로 여러 번 꼽혔습니다.', 'Croatia’s capital, with a hilltop upper town, quirky museums and café culture; its winter “Advent in Zagreb” has repeatedly been voted among Europe’s best Christmas markets.', 'クロアチアの首都で、丘の上の旧市街や個性的な博物館、カフェ文化があります。冬の「アドベント・イン・ザグレブ」はヨーロッパ最高のクリスマスマーケットに何度も選ばれています。'],
    d: [2, 2],
    s: [['도니 그라드(시내 중심)', 'Donji Grad (centre)', 'ドニ・グラード（中心部）', '광장과 마켓, 트램이 모두 가깝습니다.', 'Near the squares, markets and trams.', '広場やマーケット、トラムにすべて近いです。']],
  },
  rovaniemi: {
    o: ['북극권 바로 위의 라플란드 중심 도시로, 산타클로스 마을과 오로라, 허스키·순록 썰매로 유명한 겨울 여행지입니다. 헬싱키에서 비행기나 야간열차로 갑니다.', 'Lapland’s main town just above the Arctic Circle, famous for Santa Claus Village, the northern lights and husky or reindeer sleigh rides; reached from Helsinki by plane or night train.', '北極圏のすぐ上にあるラップランドの中心都市で、サンタクロース村やオーロラ、ハスキー・トナカイのそりで有名な冬の旅先。ヘルシンキから飛行機か夜行列車で行きます。'],
    d: [3, 4],
    s: [
      ['시내 중심', 'City centre', '市中心部', '식당과 투어 픽업이 편합니다.', 'Handy for restaurants and tour pickups.', '飲食店やツアーの送迎に便利です。'],
      ['산타클로스 마을 주변', 'Around Santa Claus Village', 'サンタクロース村周辺', '눈 덮인 숲속 오두막·유리 이글루 숙소가 있습니다.', 'Cabins and glass igloos in the snowy forest.', '雪の森のコテージやガラスイグルーの宿があります。'],
    ],
  },
  tallinn: {
    o: ['중세 성벽과 탑이 고스란히 남은 에스토니아의 수도로, 구시가지가 유네스코 세계유산입니다. 헬싱키에서 페리로 2시간 남짓이라 두 도시를 함께 여행하기 좋습니다.', 'Estonia’s capital, whose medieval walls and towers survive almost intact in a UNESCO-listed old town; about two hours by ferry from Helsinki, so easy to combine.', '中世の城壁と塔がほぼそのまま残るエストニアの首都で、旧市街は世界遺産です。ヘルシンキからフェリーで2時間ほどなので、2都市を一緒に旅しやすいです。'],
    d: [2, 2],
    s: [['구시가지', 'Old Town', '旧市街', '마켓과 성벽, 전망대를 걸어서 다닙니다.', 'Walk to the market, walls and viewpoints.', 'マーケットや城壁、展望台へ歩いて行けます。']],
  },
  edinburgh: {
    o: ['스코틀랜드의 수도로, 중세 구시가지와 계획적으로 조성된 조지 왕조 시대의 신시가지가 나란히 있습니다. 성에서 홀리루드하우스 궁전까지 이어지는 역사 지구를 걸으며 둘러볼 수 있습니다.', 'Scotland’s capital pairs a medieval Old Town with a planned Georgian New Town. You can explore the historic district on foot from the castle towards the Palace of Holyroodhouse.', 'スコットランドの首都で、中世の旧市街と計画的につくられたジョージアン様式の新市街が並びます。城からホリールードハウス宮殿へ続く歴史地区を歩いて巡れます。'],
    d: [2, 3],
    s: [
      ['구시가지·로열 마일', 'Old Town / Royal Mile', '旧市街・ロイヤル・マイル', '에든버러성부터 홀리루드하우스 궁전까지 이어지는 역사 지구를 도보로 둘러보고 싶다면 이 주변을 살펴보세요.', 'Consider this area if you want to explore the historic route between Edinburgh Castle and the Palace of Holyroodhouse on foot.', 'エディンバラ城からホリールードハウス宮殿まで続く歴史地区を歩いて巡りたい人に向いています。'],
      ['뉴타운·프린스 스트리트', 'New Town / Princes Street', 'ニュータウン・プリンシズ・ストリート', '조지 왕조 시대 건축과 쇼핑·식당을 즐기고 싶다면 뉴타운을 살펴보세요. 버스·기차·트램 거점도 걸어서 닿는 도심 구역입니다.', 'Consider New Town for Georgian architecture, shopping and dining. Bus, rail and tram hubs are within walking distance in the city centre.', 'ジョージアン様式の建築やショッピング、食事を楽しみたい人はニュータウンを検討できます。バス・鉄道・トラムの拠点も徒歩圏内にある中心地区です。'],
    ],
  },
  cairo: {
    o: ['피라미드와 고대 이집트 유물, 이슬람 구시가지의 모스크와 시장이 한 도시에 있는 이집트의 수도입니다. 교통이 매우 혼잡해 지역별로 하루씩 묶어 다니는 일정이 편합니다.', 'Egypt’s capital, home to the pyramids, ancient treasures and the mosques and bazaars of Islamic Cairo. Traffic is intense, so plan a day per area.', 'ピラミッドと古代エジプトの遺物、イスラーム地区のモスクや市場が一つの街にあるエジプトの首都。交通がとても混むので、エリアごとに1日ずつ回るのが楽です。'],
    d: [3, 4],
    s: [
      ['다운타운·자말렉', 'Downtown / Zamalek', 'ダウンタウン・ザマレク', '박물관과 지하철이 가깝고 나일강 섬 자말렉은 비교적 조용합니다.', 'Close to the museum and metro; Zamalek, a Nile island, is calmer.', '博物館や地下鉄に近く、ナイル川の中州ザマレクは比較的静かです。'],
      ['기자', 'Giza', 'ギザ', '피라미드가 보이는 숙소가 많아 이른 아침 관람에 좋습니다.', 'Pyramid-view hotels, ideal for an early start at the site.', 'ピラミッドが見える宿が多く、早朝の見学に便利です。'],
    ],
  },
  frankfurt: {
    o: ['금융가의 고층 빌딩과 복원된 구시가지가 마인강을 사이에 두고 마주 보는 도시입니다. 겨울에는 뢰머베르크 광장을 비롯한 시내 여러 광장을 잇는 크리스마스 마켓이 열립니다.', 'A city where the financial district’s towers face the rebuilt old town across the Main; in winter a Christmas market links Römerberg and several other central squares.', '金融街の高層ビルと復元された旧市街がマイン川を挟んで向かい合う街です。冬はレーマーベルク広場をはじめ市内の広場をつなぐクリスマスマーケットが開かれます。'],
    d: [1, 2],
    s: [
      ['구시가지·대성당 주변', 'Old Town / Cathedral', '旧市街・大聖堂周辺', '마켓과 명소를 걸어서 다닙니다.', 'Walk to the market and sights.', 'マーケットや名所へ歩いて行けます。'],
      ['중앙역 주변', 'Hauptbahnhof area', '中央駅周辺', '공항 열차와 기차 이동이 편합니다(밤에는 주의).', 'Handy for airport and long-distance trains (take care at night).', '空港線や長距離列車の移動が便利です（夜は注意）。'],
    ],
  },
  berlin: {
    o: ['분단과 통일의 흔적이 곳곳에 남은 독일의 수도로, 박물관과 예술 공간이 많습니다. 크리스마스 시즌에는 여러 구역에서 저마다 다른 마켓이 열립니다.', 'Germany’s capital, with traces of division and reunification everywhere and a wide museum and arts scene; at Christmas, markets open in many districts.', '分断と統一の痕跡が随所に残るドイツの首都で、博物館や芸術スペースが豊富です。クリスマスシーズンには各地区でそれぞれ異なるマーケットが開かれます。'],
    d: [3, 4],
    s: [
      ['미테', 'Mitte', 'ミッテ', '주요 명소와 박물관 섬이 가깝습니다.', 'Close to the main sights and Museum Island.', '主要な名所や博物館島に近いです。'],
      ['프렌츨라우어 베르크·크로이츠베르크', 'Prenzlauer Berg / Kreuzberg', 'プレンツラウアーベルク・クロイツベルク', '카페와 식당이 많은 동네입니다.', 'Neighbourhoods full of cafés and restaurants.', 'カフェや飲食店が多いエリアです。'],
    ],
  },
  zurich: {
    o: ['호수와 리마트강, 구시가지가 도심 가까이 모여 있는 스위스의 큰 도시입니다. 겨울에는 중앙역 홀의 실내 마켓을 비롯해 시내 곳곳에 크리스마스 마켓이 열립니다.', 'A major Swiss city where the Old Town, the Limmat and the lake sit close to the centre; in winter Christmas markets open around town, including one inside the main station hall.', '湖とリマト川、旧市街が都心近くに集まるスイスの大都市です。冬は中央駅構内の屋内マーケットをはじめ、市内各所にクリスマスマーケットが開かれます。'],
    d: [2, 3],
    s: [
      ['구시가지·중앙역 주변', 'Old Town / Hauptbahnhof', '旧市街・中央駅周辺', '공항 열차와 트램이 편하고 마켓이 가깝습니다.', 'Easy airport trains and trams, close to the markets.', '空港列車やトラムが便利で、マーケットに近いです。'],
    ],
  },
  basel: {
    o: ['라인강이 도시를 가로지르는 스위스의 문화 도시로, 미술관이 많고 프랑스·독일과 국경을 맞댑니다. 겨울에는 스위스에서 가장 큰 축에 드는 크리스마스 마켓이 열립니다.', 'A Swiss culture city split by the Rhine, full of museums and bordering France and Germany; in winter it hosts one of Switzerland’s biggest Christmas markets.', 'ライン川が街を横切るスイスの文化都市で、美術館が多くフランス・ドイツと国境を接します。冬はスイス最大級のクリスマスマーケットが開かれます。'],
    d: [1, 2],
    s: [
      ['구시가지(대 바젤)', 'Old Town (Grossbasel)', '旧市街（グロースバーゼル）', '마켓 광장과 대성당을 걸어서 다닙니다.', 'Walk to the market squares and the minster.', 'マーケットの広場や大聖堂へ歩いて行けます。'],
    ],
  },
  riga: {
    o: ['발트 3국에서 가장 큰 도시로, 유네스코 세계유산인 구시가지와 알베르타 거리 일대의 아르누보 건축이 유명합니다. 겨울에는 구시가지 돔 광장에 크리스마스 마켓이 열립니다.', 'The largest Baltic city, with a UNESCO-listed Old Town and Art Nouveau architecture around Alberta iela; in winter a Christmas market fills Dome Square.', 'バルト三国最大の都市で、世界遺産の旧市街とアルベルタ通り周辺のアール・ヌーヴォー建築が有名です。冬は旧市街のドーム広場にクリスマスマーケットが開かれます。'],
    d: [2, 3],
    s: [
      ['구시가지', 'Old Town', '旧市街', '마켓과 명소를 걸어서 다닙니다.', 'Walk to the market and sights.', 'マーケットや名所へ歩いて行けます。'],
    ],
  },
  gdansk: {
    o: ['알록달록한 상인 가옥이 늘어선 발트해의 옛 한자 동맹 항구 도시로, 강변 산책과 제2차 세계대전 관련 역사 유적이 있습니다. 겨울에는 구시가지 여러 구역에 무료 크리스마스 마켓이 열립니다.', 'A former Hanseatic port on the Baltic with colourful merchant houses, waterfront walks and Second World War history; in winter a free Christmas market spreads across the old town.', 'カラフルな商人の家が並ぶバルト海の旧ハンザ同盟の港町で、川沿いの散策や第二次世界大戦の史跡があります。冬は旧市街の複数エリアで入場無料のクリスマスマーケットが開かれます。'],
    d: [2, 3],
    s: [
      ['구시가지(중앙 지구)', 'Main Town', '旧市街（中央地区）', '마켓과 명소를 걸어서 다닙니다.', 'Walk to the market and sights.', 'マーケットや名所へ歩いて行けます。'],
    ],
  },
  bruges: {
    o: ['운하와 중세 건물이 그대로 남은 벨기에의 작은 도시로, 「브뤼헤 역사 지구」가 유네스코 세계유산입니다. 겨울에는 종탑 아래 마르크트 광장과 시몬 스테빈 광장에 크리스마스 마켓이 열립니다.', 'A small Belgian city of canals and medieval buildings whose Historic Centre is UNESCO-listed; in winter Christmas markets fill the Markt below the Belfry and Simon Stevinplein.', '運河と中世の建物が残るベルギーの小さな街で、「ブルージュ歴史地区」は世界遺産です。冬は鐘楼の下のマルクト広場とシモン・ステヴィン広場にクリスマスマーケットが開かれます。'],
    d: [1, 2],
    s: [
      ['구시가지', 'Historic centre', '旧市街', '운하와 명소를 걸어서 다닙니다.', 'Walk to the canals and sights.', '運河や名所へ歩いて行けます。'],
    ],
  },
};
