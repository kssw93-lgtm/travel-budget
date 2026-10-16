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
};
