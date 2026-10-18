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
  harbin: {
    o: ['중국 북동부 헤이룽장성의 중심 도시로, 러시아풍 건물이 남은 거리와 겨울 얼음 축제로 유명합니다. 1~2월에는 거대한 얼음 건축물로 꾸민 빙설대세계와 눈 조각 전시가 열립니다.', 'The capital of Heilongjiang in northeast China, known for its Russian-era streets and its winter ice festival; in January–February the Ice and Snow World and snow-sculpture shows fill the city.', '中国東北部・黒竜江省の中心都市で、ロシア風の建物が残る街並みと冬の氷祭りで知られます。1〜2月には巨大な氷の建築が並ぶ氷雪大世界や雪像の展示が開かれます。'],
    d: [3, 4],
    s: [
      ['중앙대가 주변', 'Central Street area', '中央大街周辺', '러시아풍 거리와 성 소피아 성당, 쑹화강이 가까워 걸어서 다닙니다.', 'Walk to the Russian-era street, St Sophia Cathedral and the Songhua River.', 'ロシア風の街並みや聖ソフィア大聖堂、松花江へ歩いて行けます。'],
    ],
  },
  lyon: {
    o: ['론강과 손강이 만나는 프랑스 제3의 도시로, 구시가지가 유네스코 세계유산이며 미식의 도시로 불립니다. 12월 초에는 도시 전체가 빛으로 물드는 「빛의 축제」가 열립니다.', 'France’s third city, where the Rhône meets the Saône, with a UNESCO-listed historic centre and a reputation as a food capital; in early December the whole city glows for the Festival of Lights.', 'ローヌ川とソーヌ川が合流するフランス第3の都市で、旧市街は世界遺産、美食の街とも呼ばれます。12月初めには街全体が光に包まれる「光の祭典」が開かれます。'],
    d: [2, 3],
    s: [
      ['프레스킬(벨쿠르 광장 주변)', 'Presqu’île (around Place Bellecour)', 'プレスキル（ベルクール広場周辺）', '두 강 사이 중심가로, 구시가지와 쇼핑가를 걸어서 다닙니다.', 'The centre between the two rivers, walkable to the old town and shops.', '二つの川に挟まれた中心部で、旧市街や繁華街へ歩いて行けます。'],
      ['구시가지(비유 리옹)', 'Vieux Lyon', '旧市街（ヴュー・リヨン）', '르네상스 건물과 부숑(전통 식당)이 모인 곳으로 푸르비에르 언덕이 가깝습니다.', 'Renaissance lanes and bouchons, right below Fourvière hill.', 'ルネサンス様式の建物とブション（伝統的な食堂）が集まり、フルヴィエールの丘も近いです。'],
    ],
  },
  'quebec-city': {
    o: ['성벽으로 둘러싸인 구시가지가 유네스코 세계유산인 캐나다 퀘벡주의 주도로, 프랑스어를 쓰는 유럽풍 도시입니다. 겨울에는 독일식 크리스마스 마켓과 2월의 윈터 카니발로 눈 속의 축제가 이어집니다.', 'Quebec’s French-speaking capital, whose walled old town is a UNESCO World Heritage Site; winter brings a German-style Christmas market and the February Winter Carnival.', 'カナダ・ケベック州の州都で、城壁に囲まれた旧市街は世界遺産、フランス語を話すヨーロッパ風の街です。冬はドイツ風クリスマスマーケットや2月のウィンターカーニバルで雪の中の祭りが続きます。'],
    d: [2, 3],
    s: [
      ['구시가지(성벽 안)', 'Old Québec (inside the walls)', '旧市街（城壁内）', '샤토 프롱트낙과 마켓, 쁘띠 샹플랭 거리를 걸어서 다닙니다.', 'Walk to the Château Frontenac, the market and Petit-Champlain.', 'シャトー・フロンテナックやマーケット、プチ・シャンプラン通りへ歩いて行けます。'],
    ],
  },
  porto: {
    o: ['도루강 하구 언덕에 자리한 포르투갈 제2의 도시로, 리베이라 강변 구시가지가 유네스코 세계유산입니다. 강 건너 빌라 노바 드 가이아의 와인 저장고에서 포트와인을 맛볼 수 있습니다.', 'Portugal’s second city, climbing the hills at the mouth of the Douro, with a UNESCO-listed riverside old town; across the river, the Vila Nova de Gaia cellars pour port wine.', 'ドウロ川の河口の丘に広がるポルトガル第2の都市で、川沿いのリベイラ旧市街は世界遺産です。対岸のヴィラ・ノヴァ・デ・ガイアのワイン貯蔵庫でポートワインを味わえます。'],
    d: [2, 3],
    s: [
      ['리베이라·바이샤', 'Ribeira / Baixa', 'リベイラ・バイシャ', '강변 구시가지와 중심가로, 주요 명소를 걸어서 다닙니다. 언덕이 많아 짐이 크면 엘리베이터 있는 숙소가 편합니다.', 'The riverside old town and centre, walkable to the sights; it is hilly, so a lift helps with big luggage.', '川沿いの旧市街と中心部で、主な名所へ歩いて行けます。坂が多いので荷物が大きければエレベーター付きの宿が便利です。'],
      ['볼사우·트린다드', 'Bolhão / Trindade', 'ボリャオン・トリンダーデ', '메트로 환승역 트린다드 주변으로, 공항 메트로가 바로 닿습니다.', 'Around the Trindade metro hub, with direct airport metro trains.', '地下鉄の乗換駅トリンダーデ周辺で、空港へのメトロが直通です。'],
    ],
  },
  seville: {
    o: ['안달루시아의 중심 도시로, 대성당·알카사르·인디아스 고문서관이 유네스코 세계유산입니다. 플라멩코와 타파스의 본고장이며, 봄에는 성주간과 4월 축제(페리아)로 도시가 가장 화려합니다.', 'Andalusia’s capital, whose cathedral, Alcázar and Archive of the Indies are UNESCO-listed; the home of flamenco and tapas, at its most festive in spring with Holy Week and the April Fair.', 'アンダルシアの中心都市で、大聖堂・アルカサル・インディアス古文書館は世界遺産です。フラメンコとタパスの本場で、春は聖週間と4月の春祭り（フェリア）で街が最も華やぎます。'],
    d: [2, 3],
    s: [
      ['산타크루스', 'Santa Cruz', 'サンタ・クルス', '대성당과 알카사르 바로 옆 옛 유대인 지구로, 골목이 좁아 택시가 숙소 앞까지 못 들어가기도 합니다.', 'The old Jewish quarter beside the cathedral and Alcázar; lanes are narrow and taxis may not reach the door.', '大聖堂とアルカサルのすぐ隣の旧ユダヤ人街で、路地が狭くタクシーが宿の前まで入れないこともあります。'],
      ['센트로(엔카르나시온 주변)', 'Centro (around Encarnación)', 'セントロ（エンカルナシオン周辺）', '쇼핑가와 메트로폴 파라솔이 있는 중심가로, 공항버스 정류장이 가깝습니다.', 'The shopping centre around the Metropol Parasol, close to airport-bus stops.', 'ショッピング街とメトロポル・パラソルのある中心部で、空港バスの停留所が近いです。'],
    ],
  },
  milan: {
    o: ['이탈리아 북부의 경제·패션 중심지로, 고딕 대성당 두오모와 다빈치의 「최후의 만찬」이 있습니다. 코모 호수·베네치아로 가는 기차가 많아 북부 여행의 거점이 됩니다.', 'Northern Italy’s business and fashion capital, home to the Gothic Duomo and Leonardo’s Last Supper, and a rail hub for Lake Como and Venice.', 'イタリア北部の経済とファッションの中心地で、ゴシック様式のドゥオーモとダ・ヴィンチの「最後の晩餐」があります。コモ湖やヴェネツィアへの列車が多く、北部旅行の拠点になります。'],
    d: [2, 3],
    s: [
      ['두오모 주변', 'Around the Duomo', 'ドゥオーモ周辺', '대성당·갤러리아·스칼라 극장을 걸어서 다니는 중심가입니다.', 'The centre, walkable to the cathedral, the Galleria and La Scala.', '大聖堂・ガッレリア・スカラ座へ歩いて行ける中心部です。'],
      ['중앙역 주변', 'Around Milano Centrale', 'ミラノ中央駅周辺', '고속열차와 공항버스가 출발해 다른 도시로 이동하기 편합니다.', 'Handy for high-speed trains and airport buses to other cities.', '高速列車や空港バスが発着し、他の都市への移動に便利です。'],
    ],
  },
  lucerne: {
    o: ['루체른 호숫가의 중세 도시로, 나무 다리 카펠교와 구시가지 벽화가 아름답습니다. 필라투스·리기 같은 산에 배와 산악 열차로 오를 수 있어 스위스 중부 여행의 거점이 됩니다.', 'A medieval lakeside town known for the wooden Chapel Bridge and painted old-town facades, and a base for boat-and-cogwheel trips up Pilatus and Rigi.', 'ルツェルン湖畔の中世の街で、木造のカペル橋と旧市街の壁画が美しいです。ピラトゥスやリギへ船と登山鉄道で登れ、スイス中部旅行の拠点になります。'],
    d: [2, 3],
    s: [
      ['구시가지·호숫가', 'Old town / lakefront', '旧市街・湖畔', '카펠교와 선착장, 기차역이 모두 걸어서 닿는 중심가입니다.', 'The centre, walkable to the Chapel Bridge, the boat piers and the station.', 'カペル橋や船着き場、駅へすべて歩いて行ける中心部です。'],
    ],
  },
  granada: {
    o: ['시에라 네바다 산자락의 안달루시아 도시로, 이슬람 왕조의 궁전 알람브라와 옛 무어인 마을 알바이신이 유네스코 세계유산입니다. 술 한 잔에 타파스가 곁들여 나오는 문화로도 유명합니다.', 'An Andalusian city below the Sierra Nevada, whose Alhambra palace and old Moorish Albaicín quarter are UNESCO-listed; famous for free tapas with every drink.', 'シエラ・ネバダ山麓のアンダルシアの街で、イスラム王朝の宮殿アルハンブラと旧ムーア人地区アルバイシンは世界遺産です。飲み物1杯ごとにタパスが付く文化でも知られます。'],
    d: [2, 3],
    s: [
      ['센트로(대성당·누에바 광장)', 'Centro (Cathedral / Plaza Nueva)', 'セントロ（大聖堂・ヌエバ広場）', '대성당과 타파스 거리가 가깝고 알람브라행 미니버스가 지나갑니다.', 'Close to the cathedral and tapas streets, on the Alhambra minibus route.', '大聖堂やタパス街に近く、アルハンブラ行きのミニバスが通ります。'],
      ['알바이신', 'Albaicín', 'アルバイシン', '하얀 집과 좁은 골목의 언덕 마을로, 알람브라 전망이 좋지만 언덕이 가파릅니다.', 'The hillside quarter of whitewashed lanes with Alhambra views, but steep.', '白い家と細い路地の丘の街で、アルハンブラの眺めが良い一方、坂は急です。'],
    ],
  },
  valencia: {
    o: ['지중해에 면한 스페인 제3의 도시로, 파에야의 고향입니다. 미래적인 예술과학도시, 유네스코 세계유산 실크 거래소, 3월의 불꽃 축제 파야스로 유명합니다.', 'Spain’s third city on the Mediterranean and the home of paella, known for the futuristic City of Arts and Sciences, the UNESCO-listed Silk Exchange and the March Fallas festival.', '地中海に面したスペイン第3の都市で、パエリアの故郷です。未来的な芸術科学都市、世界遺産のラ・ロンハ、3月の火祭りファジャスで知られます。'],
    d: [2, 3],
    s: [
      ['시우타트 베야(구시가지)', 'Ciutat Vella (old town)', 'シウタット・ベリャ（旧市街）', '대성당·중앙시장·실크 거래소를 걸어서 다닐 수 있는 중심가입니다.', 'The centre, walkable to the cathedral, Central Market and Silk Exchange.', '大聖堂・中央市場・ラ・ロンハへ歩いて行ける中心部です。'],
      ['루사파', 'Ruzafa', 'ルサファ', '식당과 카페가 많은 동네로, 북역과 가깝습니다.', 'A lively quarter of restaurants and cafés near Nord station.', '飲食店やカフェが多い地区で、北駅に近いです。'],
    ],
  },
  bordeaux: {
    o: ['가론강을 따라 18세기 석조 건물이 늘어선 프랑스 남서부의 와인 도시로, \'달의 항구\'라 불리는 구시가지가 유네스코 세계유산입니다. 생테밀리옹 등 와이너리 당일 여행의 거점이기도 합니다.', 'South-west France’s wine capital, lined with 18th-century stone facades along the Garonne; its “Port of the Moon” centre is UNESCO-listed, and it is a base for day trips to vineyards such as Saint-Émilion.', 'ガロンヌ川沿いに18世紀の石造りの建物が並ぶフランス南西部のワインの街で、「月の港」と呼ばれる旧市街は世界遺産です。サンテミリオンなどワイナリーへの日帰り旅行の拠点にもなります。'],
    d: [2, 3],
    s: [
      ['생트카트린 거리·캥콩스 광장 주변', 'Rue Sainte-Catherine / Quinconces', 'サント・カトリーヌ通り・カンコンス広場周辺', '쇼핑가와 트램이 모이는 중심가로, 걸어서 대부분의 명소에 닿습니다.', 'The shopping and tram hub, walkable to most sights.', 'ショッピング街とトラムが集まる中心部で、主な名所へ歩いて行けます。'],
      ['샤르트롱', 'Chartrons', 'シャルトロン', '옛 와인 상인 거리로, 앤티크 가게와 카페가 많고 시테 뒤 뱅과 가깝습니다.', 'The old wine merchants’ quarter of antique shops and cafés, near the Cité du Vin.', 'かつてのワイン商人の街で、骨董店やカフェが多く、シテ・デュ・ヴァンに近いです。'],
    ],
  },
  hamburg: {
    o: ['엘베강 하구의 독일 제2의 도시이자 큰 항구 도시로, 붉은 벽돌 창고 거리 슈파이허슈타트가 유네스코 세계유산입니다. 유리 파도 모양의 콘서트홀 엘프필하모니와 세계 최대 철도 모형 전시장이 있습니다.', 'Germany’s second city and great port on the Elbe, whose red-brick Speicherstadt warehouse district is UNESCO-listed; home to the wave-topped Elbphilharmonie and the world’s largest model railway.', 'エルベ川河口にあるドイツ第2の都市で大きな港町です。赤れんが倉庫街シュパイヒャーシュタットは世界遺産で、波形のガラス屋根のコンサートホール、エルプフィルハーモニーや世界最大の鉄道模型展示があります。'],
    d: [2, 3],
    s: [
      ['중앙역·알스터 호수 주변', 'Around the Hauptbahnhof / Alster', '中央駅・アルスター湖周辺', '공항 S반과 장거리 열차가 서고, 시청과 쇼핑가가 가깝습니다.', 'Airport S-Bahn and long-distance trains stop here, near the town hall and shops.', '空港へのSバーンや長距離列車が停まり、市庁舎や繁華街に近いです。'],
      ['장크트 파울리·항구 주변', 'St. Pauli / harbour', 'ザンクト・パウリ・港周辺', '란둥스브뤼켄 선착장과 레퍼반 거리가 가까운 활기찬 동네입니다.', 'A lively area near the Landungsbrücken piers and the Reeperbahn.', 'ランドゥングスブリュッケンの桟橋やレーパーバーンに近いにぎやかな地区です。'],
    ],
  },
  queenstown: {
    o: ['와카티푸 호수와 서던 알프스에 둘러싸인 뉴질랜드 남섬의 휴양 도시로, 번지점프와 제트보트 같은 액티비티의 본고장입니다. 겨울에는 스키, 여름에는 하이킹과 와이너리 투어를 즐깁니다.', 'A resort town on the South Island ringed by Lake Wakatipu and the Southern Alps, the home of bungy and jet boats; ski in winter, hike and tour wineries in summer.', 'ワカティプ湖とサザンアルプスに囲まれたニュージーランド南島のリゾート地で、バンジージャンプやジェットボートの本場です。冬はスキー、夏はハイキングやワイナリー巡りを楽しめます。'],
    d: [3, 4],
    s: [
      ['퀸스타운 시내', 'Queenstown town centre', 'クイーンズタウン中心部', '호숫가 상점가와 곤돌라 승강장이 걸어서 닿는 중심가로, 투어 버스 대부분이 여기서 출발합니다.', 'The lakefront centre, walkable to the gondola, where most tour buses depart.', '湖畔の商店街やゴンドラ乗り場へ歩いて行ける中心部で、ツアーバスの多くがここから出発します。'],
    ],
  },
  innsbruck: {
    o: ['알프스 산자락의 티롤주 주도로, 시내에서 케이블카를 타면 바로 2,000m대 산 위에 오를 수 있습니다. 황금 지붕이 있는 구시가지와 근교 스와로브스키 크리스털 월드가 인기입니다.', 'Tyrol’s capital in the Alps, where cable cars lift you from town to peaks above 2,000 m in minutes; known for the Golden Roof old town and nearby Swarovski Crystal Worlds.', 'アルプス山麓にあるチロル州の州都で、市内からケーブルカーに乗るとすぐ標高2,000m級の山の上に行けます。黄金の小屋根のある旧市街と近郊のスワロフスキー・クリスタルワールドが人気です。'],
    d: [2, 3],
    s: [
      ['구시가지·중앙역 주변', 'Old town / main station', '旧市街・中央駅周辺', '황금 지붕과 노르트케테 케이블카 승강장, 공항버스 F선이 모두 가깝습니다.', 'Close to the Golden Roof, the Nordkette cable car and airport bus F.', '黄金の小屋根やノルトケッテのケーブルカー乗り場、空港バスF線がすべて近いです。'],
    ],
  },
  marseille: {
    o: ['2,600년 역사의 프랑스 최대 항구 도시로, 구항구와 언덕 위 노트르담 드 라 가르드 대성당이 상징입니다. 하얀 석회암 절벽과 푸른 바다가 이어지는 칼랑크 국립공원이 가깝습니다.', 'France’s great 2,600-year-old port, symbolised by the Vieux-Port and the hilltop Notre-Dame de la Garde, close to the white cliffs and turquoise coves of the Calanques National Park.', '2,600年の歴史を持つフランス最大の港町で、旧港と丘の上のノートルダム・ド・ラ・ギャルド寺院が象徴です。白い石灰岩の断崖と青い海が続くカランク国立公園が近くにあります。'],
    d: [2, 3],
    s: [
      ['구항구 주변', 'Vieux-Port', '旧港周辺', '식당과 유람선 선착장이 모인 중심가로, 지하철 1호선이 지납니다.', 'The centre of restaurants and boat piers, on Metro line 1.', '飲食店や遊覧船乗り場が集まる中心部で、地下鉄1号線が通ります。'],
      ['생샤를역 주변', 'Around Saint-Charles station', 'サン・シャルル駅周辺', 'TGV와 공항 셔틀이 서는 역 주변으로 이동이 편합니다.', 'Handy for TGVs and the airport shuttle.', 'TGVや空港シャトルが発着し移動に便利です。'],
    ],
  },
  tainan: {
    o: ['대만에서 가장 오래된 도시로, 네덜란드·청나라 시대의 요새와 사당이 곳곳에 남아 있습니다. 새벽 소고기탕부터 단자이면까지 대만 먹거리의 본고장으로 불립니다.', 'Taiwan’s oldest city, dotted with Dutch- and Qing-era forts and temples, and celebrated as the capital of Taiwanese street food — from dawn beef soup to danzai noodles.', '台湾で最も古い都市で、オランダ・清朝時代の要塞や廟が各地に残っています。早朝の牛肉スープから担仔麺まで、台湾グルメの本場と呼ばれます。'],
    d: [2, 3],
    s: [
      ['중서구(츠칸러우 주변)', 'West Central District (around Chihkan Tower)', '中西区（赤崁楼周辺）', '사당과 오래된 골목, 노포 먹거리가 모인 구시가지 중심입니다.', 'The old core of temples, lanes and long-running food stalls.', '廟や古い路地、老舗グルメが集まる旧市街の中心です。'],
      ['타이난역 주변', 'Around Tainan Station', '台南駅周辺', '타이완철도 역과 버스가 모여 고속철·근교 이동이 편합니다.', 'The TRA station and buses make HSR and day trips easy.', '台湾鉄道の駅とバスが集まり、高速鉄道や近郊への移動に便利です。'],
    ],
  },
  warsaw: {
    o: ['폴란드의 수도로, 2차 대전 때 파괴된 뒤 옛 모습 그대로 재건한 구시가지가 유네스코 세계유산입니다. 바르샤바 봉기 박물관·폴린 박물관 등 역사 박물관이 충실하고, 쇼팽의 도시로도 알려져 있습니다.', 'Poland’s capital, whose Old Town — rebuilt as it was after WWII — is UNESCO-listed; strong on history museums such as the Warsaw Uprising Museum and POLIN, and known as Chopin’s city.', 'ポーランドの首都で、第二次大戦で破壊された後に元の姿どおり再建された旧市街は世界遺産です。ワルシャワ蜂起博物館やポーリン博物館など歴史博物館が充実し、ショパンの街としても知られます。'],
    d: [2, 3],
    s: [
      ['중앙역·문화과학궁전 주변', 'Around Centralna / Palace of Culture', '中央駅・文化科学宮殿周辺', '공항버스와 지하철이 모이는 중심가로 이동이 편합니다.', 'The transport hub for airport buses and the metro.', '空港バスや地下鉄が集まる中心部で移動に便利です。'],
      ['구시가지·신세계 거리', 'Old Town / Nowy Świat', '旧市街・ノヴィ・シフィアト通り', '왕궁과 구시장 광장, 카페 거리를 걸어서 다닙니다.', 'Walk to the Royal Castle, Old Town Market Square and café streets.', '王宮や旧市街広場、カフェ通りへ歩いて行けます。'],
    ],
  },
  ghent: {
    o: ['운하를 따라 중세 길드 건물이 늘어선 플랑드르의 대학 도시로, 브뤼헤보다 덜 붐비면서 활기가 있습니다. 성 바보 대성당의 반에이크 형제 「헨트 제단화」가 유명합니다.', 'A Flemish university city of medieval guildhouses along canals — livelier and less crowded than Bruges — famous for the van Eyck brothers’ Ghent Altarpiece in St Bavo’s Cathedral.', '運河沿いに中世のギルドハウスが並ぶフランドルの大学都市で、ブルッヘより混雑が少なく活気があります。聖バーフ大聖堂のファン・エイク兄弟による「ヘントの祭壇画」が有名です。'],
    d: [1, 2],
    s: [
      ['구시가지(코렌레이·흐라슬레이 주변)', 'Old centre (Korenlei / Graslei)', '旧市街（コーレンレイ・グラスレイ周辺）', '운하 풍경과 대성당·성이 모두 걸어서 닿는 중심가입니다.', 'The canal-side heart, walkable to the cathedral and castle.', '運河の景色と大聖堂・城へすべて歩いて行ける中心部です。'],
    ],
  },
  geneva: {
    o: ['레만 호숫가의 국제도시로, 유엔 유럽본부와 국제적십자, 입자물리연구소 CERN이 있습니다. 호수 위로 140m 높이로 솟는 분수 제토가 상징입니다.', 'An international city on Lake Geneva, home to the UN’s European headquarters, the Red Cross and CERN, symbolised by the 140 m Jet d’Eau fountain.', 'レマン湖畔の国際都市で、国連欧州本部や国際赤十字、素粒子物理学研究所CERNがあります。湖上に140mの高さで噴き上がる噴水ジェ・ドーが象徴です。'],
    d: [2, 3],
    s: [
      ['코르나뱅역 주변', 'Around Cornavin station', 'コルナヴァン駅周辺', '공항열차와 장거리 열차가 서는 역 앞으로, 호숫가까지 걸어갈 수 있습니다.', 'By the station for airport and intercity trains, walkable to the lake.', '空港への列車や長距離列車が発着する駅前で、湖畔まで歩けます。'],
      ['구시가지', 'Old Town', '旧市街', '생피에르 대성당과 골목 카페가 있는 언덕 위 동네입니다.', 'The hilltop quarter of St Pierre Cathedral and café lanes.', 'サン・ピエール大聖堂や路地のカフェがある丘の上の地区です。'],
    ],
  },
  antwerp: {
    o: ['벨기에 제2의 도시이자 유럽 큰 항구로, 화가 루벤스가 살았던 도시입니다. 성모 대성당의 루벤스 제단화와 아름다운 중앙역, 다이아몬드 거리로 유명합니다.', 'Belgium’s second city and a major European port, home of the painter Rubens; famous for the Rubens altarpieces in the Cathedral of Our Lady, its grand Central Station and the diamond quarter.', 'ベルギー第2の都市でヨーロッパ有数の港町、画家ルーベンスが暮らした街です。聖母大聖堂のルーベンスの祭壇画や美しい中央駅、ダイヤモンド街で知られます。'],
    d: [1, 2],
    s: [
      ['구시가지(흐로테 마르크트 주변)', 'Old town (Grote Markt)', '旧市街（グローテ・マルクト周辺）', '대성당과 시청, 강변이 걸어서 닿는 중심가입니다.', 'The heart of town, walkable to the cathedral, town hall and riverfront.', '大聖堂や市庁舎、川沿いへ歩いて行ける中心部です。'],
      ['중앙역 주변', 'Around Antwerpen-Centraal', '中央駅周辺', '국제 열차가 서는 역 앞으로, 브뤼셀·암스테르담 이동이 편합니다.', 'By the international train station, handy for Brussels and Amsterdam.', '国際列車が停まる駅前で、ブリュッセルやアムステルダムへの移動に便利です。'],
    ],
  },
  turin: {
    o: ['알프스를 배경으로 한 피에몬테주 주도로, 이탈리아 최초의 수도였던 사보이 왕가의 도시입니다. 세계적인 이집트 박물관과 몰레 안토넬리아나의 영화 박물관, 초콜릿·카페 문화로 유명합니다.', 'Piedmont’s capital against the Alps and Italy’s first capital under the House of Savoy, famous for its world-class Egyptian Museum, the cinema museum in the Mole Antonelliana and its chocolate and café culture.', 'アルプスを背にしたピエモンテ州の州都で、イタリア最初の首都だったサヴォイア家の街です。世界有数のエジプト博物館やモーレ・アントネッリアーナの映画博物館、チョコレートとカフェの文化で知られます。'],
    d: [2, 3],
    s: [
      ['중심가(카스텔로 광장·포르타 누오바)', 'Centre (Piazza Castello / Porta Nuova)', '中心部（カステッロ広場・ポルタ・ヌオーヴァ）', '왕궁과 박물관, 아케이드 거리를 걸어서 다니고 공항버스도 이 근처에서 탑니다.', 'Walk to the royal palaces, museums and arcades; airport buses leave nearby.', '王宮や博物館、アーケード街へ歩いて行け、空港バスもこの近くから出ます。'],
    ],
  },
  'gold-coast': {
    o: ['70km 가까이 이어지는 해변과 서핑, 테마파크로 유명한 호주 퀸즐랜드의 휴양 도시입니다. 내륙으로 조금만 가면 세계유산 곤드와나 열대우림의 스프링브룩 국립공원이 있습니다.', 'Queensland’s resort city of near-endless beaches, surf and theme parks, with the World Heritage Gondwana rainforest of Springbrook National Park a short drive inland.', '約70km続くビーチとサーフィン、テーマパークで知られるオーストラリア・クイーンズランド州のリゾート都市です。少し内陸へ行くと世界遺産ゴンドワナ雨林のスプリングブルック国立公園があります。'],
    d: [3, 4],
    s: [
      ['서퍼스 파라다이스', 'Surfers Paradise', 'サーファーズ・パラダイス', '해변과 식당, 트램(G:link)이 모인 중심가로 이동이 편합니다.', 'The beachfront hub of restaurants and G:link tram stops.', 'ビーチや飲食店、トラム（G:link）が集まる中心地で移動に便利です。'],
      ['브로드비치', 'Broadbeach', 'ブロードビーチ', '서퍼스 파라다이스보다 조금 조용하고, 공항버스와 트램이 만나는 곳입니다.', 'A little calmer than Surfers, where the airport bus meets the tram.', 'サーファーズ・パラダイスより少し落ち着いていて、空港バスとトラムが接続する場所です。'],
    ],
  },
  brisbane: {
    o: ['브리즈번강을 따라 펼쳐진 퀸즐랜드의 주도로, 1년 내내 따뜻한 날씨와 강변 공원이 매력입니다. 박물관·미술관 대부분이 무료이고, 대중교통도 50센트 균일 요금이라 경비 부담이 적습니다.', 'Queensland’s riverside capital, with warm weather year-round and parklands along the Brisbane River; most museums and galleries are free and public transport costs a flat 50 cents.', 'ブリスベン川沿いに広がるクイーンズランド州の州都で、一年中温暖な気候と川沿いの公園が魅力です。博物館・美術館の多くが無料で、公共交通も一律50セントなので費用を抑えられます。'],
    d: [2, 3],
    s: [
      ['시티(CBD)', 'City (CBD)', 'シティ（CBD）', '쇼핑 거리와 페리·버스·기차가 모이는 중심가입니다.', 'The centre of shops, ferries, buses and trains.', 'ショッピング街とフェリー・バス・列車が集まる中心部です。'],
      ['사우스 뱅크', 'South Bank', 'サウスバンク', '강 건너 공원과 무료 박물관·미술관이 모인 문화 지구입니다.', 'Across the river: parklands and the free museums and galleries.', '川向こうの公園と無料の博物館・美術館が集まる文化地区です。'],
    ],
  },
  'washington-dc': {
    o: ['미국의 수도로, 국회의사당에서 링컨 기념관까지 이어지는 내셔널 몰에 기념물과 박물관이 모여 있습니다. 스미스소니언 박물관 대부분이 무료라 볼거리에 비해 경비 부담이 적습니다.', 'The US capital, where the National Mall links the Capitol to the Lincoln Memorial past monuments and museums; most Smithsonian museums are free, so sightseeing costs little.', 'アメリカの首都で、議事堂からリンカーン記念堂まで続くナショナル・モールに記念碑や博物館が集まっています。スミソニアン博物館の多くが無料なので、見どころの割に費用を抑えられます。'],
    d: [3, 4],
    s: [
      ['내셔널 몰 북쪽(다운타운·펜 쿼터)', 'Downtown / Penn Quarter', 'ダウンタウン・ペン・クォーター', '박물관과 지하철역이 가까워 걸어서 다니기 좋습니다.', 'Close to the museums and Metro stations, good for walking.', '博物館や地下鉄駅に近く、歩いて回りやすいです。'],
      ['듀폰 서클', 'Dupont Circle', 'デュポン・サークル', '식당과 카페가 많은 동네로, 지하철 레드라인이 지납니다.', 'A lively area of restaurants and cafés on the Red Line.', '飲食店やカフェが多い地区で、地下鉄レッドラインが通ります。'],
    ],
  },
  boston: {
    o: ['미국 독립혁명의 무대가 된 뉴잉글랜드의 중심 도시로, 붉은 벽돌 선을 따라 걷는 프리덤 트레일에 역사 유적이 이어집니다. 하버드·MIT가 있는 대학 도시이자 클램차우더와 랍스터 롤의 본고장입니다.', 'New England’s hub and stage of the American Revolution, where the red-brick Freedom Trail links historic sites; a university city of Harvard and MIT, and home of clam chowder and lobster rolls.', 'アメリカ独立革命の舞台となったニューイングランドの中心都市で、赤れんがの線をたどるフリーダム・トレイルに史跡が続きます。ハーバードやMITがある大学都市で、クラムチャウダーとロブスターロールの本場です。'],
    d: [3, 4],
    s: [
      ['백베이', 'Back Bay', 'バックベイ', '고급 주택가와 쇼핑 거리가 있는 지역으로, 지하철 그린라인이 지납니다.', 'Elegant streets and shopping on the Green Line.', '高級住宅街とショッピング街がある地区で、地下鉄グリーンラインが通ります。'],
      ['다운타운·패뉴얼 홀 주변', 'Downtown / Faneuil Hall', 'ダウンタウン・ファニエル・ホール周辺', '프리덤 트레일과 퀸시 마켓이 가깝고, 공항 실버라인 연결이 편합니다.', 'Near the Freedom Trail and Quincy Market, with easy Silver Line links to the airport.', 'フリーダム・トレイルやクインシー・マーケットに近く、空港へのシルバーラインも便利です。'],
    ],
  },
  toronto: {
    o: ['캐나다 최대 도시로, 호숫가에 CN 타워가 솟아 있고 세계 각국 이민자 동네와 음식이 한데 모여 있습니다. 차로 약 1시간 반 거리의 나이아가라 폭포를 다녀오는 관문이기도 합니다.', 'Canada’s largest city, where the CN Tower rises over Lake Ontario and neighbourhoods from around the world bring their food; also the gateway to Niagara Falls, about 1.5 hours away.', 'カナダ最大の都市で、湖畔にCNタワーがそびえ、世界各地からの移民の街と料理が集まっています。車で約1時間半のナイアガラの滝へ向かう玄関口でもあります。'],
    d: [3, 4],
    s: [
      ['다운타운(유니언역 주변)', 'Downtown (around Union Station)', 'ダウンタウン（ユニオン駅周辺）', 'CN 타워·호숫가와 가깝고, 공항철도 UP 익스프레스가 도착하는 역입니다.', 'Close to the CN Tower and waterfront, and the terminus of the UP Express airport train.', 'CNタワーや湖畔に近く、空港鉄道UPエクスプレスが到着する駅です。'],
      ['요크빌·블루어 거리', 'Yorkville / Bloor Street', 'ヨークビル・ブロア通り', '왕립 온타리오 박물관이 가깝고 지하철 1·2호선이 만나는 쇼핑 지역입니다.', 'A shopping area near the Royal Ontario Museum where subway Lines 1 and 2 meet.', 'ロイヤル・オンタリオ博物館に近く、地下鉄1・2号線が交わるショッピング地区です。'],
    ],
  },
  chicago: {
    o: ['미시간 호숫가의 미국 3대 도시로, 근대 고층 건축의 발상지답게 강을 따라 이름난 빌딩들이 늘어서 있습니다. 시카고 미술관과 밀레니엄 파크, 딥디시 피자로 유명합니다.', 'America’s third city on Lake Michigan and birthplace of the modern skyscraper, with landmark towers along the river; famous for the Art Institute, Millennium Park and deep-dish pizza.', 'ミシガン湖畔にあるアメリカ第3の都市で、近代高層建築の発祥地らしく川沿いに名建築が並びます。シカゴ美術館やミレニアム・パーク、ディープディッシュ・ピザで有名です。'],
    d: [3, 4],
    s: [
      ['루프(다운타운)', 'The Loop (Downtown)', 'ループ（ダウンタウン）', '고가철도 L이 둘러싼 중심가로, 미술관·밀레니엄 파크·윌리스 타워가 걸어서 닿습니다.', 'The centre ringed by the elevated L, within walking distance of the Art Institute, Millennium Park and Willis Tower.', '高架鉄道Lに囲まれた中心街で、美術館やミレニアム・パーク、ウィリス・タワーへ歩いて行けます。'],
      ['리버 노스·매그니피선트 마일', 'River North / Magnificent Mile', 'リバー・ノース・マグニフィセント・マイル', '식당과 쇼핑가가 모인 지역으로, 시카고강 건축 크루즈 출발지와 가깝습니다.', 'Restaurants and shopping, close to the river architecture cruises.', '飲食店やショッピング街が集まる地区で、シカゴ川の建築クルーズ乗り場に近いです。'],
    ],
  },
  montreal: {
    o: ['프랑스어를 쓰는 퀘벡주 최대 도시로, 돌길이 깔린 구시가지와 노트르담 대성당에서 유럽 분위기를 느낄 수 있습니다. 베이글·훈제 고기·푸틴 같은 먹거리로도 유명합니다.', 'Québec’s largest, French-speaking city, with a cobbled Old Montréal and Notre-Dame Basilica that feel European; famous too for bagels, smoked meat and poutine.', 'フランス語圏のケベック州最大の都市で、石畳の旧市街やノートルダム大聖堂にヨーロッパの雰囲気が漂います。ベーグルやスモークミート、プーティンなどの食べ物でも有名です。'],
    d: [3, 4],
    s: [
      ['구시가지(비유 몽레알)', 'Old Montréal (Vieux-Montréal)', '旧市街（ヴュー・モンレアル）', '노트르담 대성당과 옛 항구가 걸어서 닿는 역사 지구입니다.', 'The historic quarter, a walk from Notre-Dame Basilica and the Old Port.', 'ノートルダム大聖堂や旧港へ歩いて行ける歴史地区です。'],
      ['다운타운·플라토', 'Downtown / Plateau', 'ダウンタウン・プラトー', '지하철역이 많고, 플라토 지구에는 베이글 가게와 카페가 모여 있습니다.', 'Well served by the métro; the Plateau is full of bagel shops and cafés.', '地下鉄駅が多く、プラトー地区にはベーグル店やカフェが集まっています。'],
    ],
  },
  seattle: {
    o: ['미국 서북부의 항구 도시로, 스페이스 니들과 파이크 플레이스 마켓이 상징입니다. 바다와 호수, 레이니어 산에 둘러싸여 있고 커피 문화와 해산물로 유명합니다.', 'The Pacific Northwest’s harbour city, symbolised by the Space Needle and Pike Place Market; ringed by water and Mount Rainier, and known for coffee and seafood.', 'アメリカ北西部の港町で、スペース・ニードルとパイク・プレイス・マーケットがシンボルです。海と湖、レーニア山に囲まれ、コーヒー文化と海産物で知られています。'],
    d: [3, 4],
    s: [
      ['다운타운·파이크 플레이스 주변', 'Downtown / Pike Place', 'ダウンタウン・パイク・プレイス周辺', '마켓과 해안가가 걸어서 닿고, 공항 경전철역이 가깝습니다.', 'A walk to the market and waterfront, near light-rail stations to the airport.', 'マーケットや海沿いへ歩いて行け、空港へのライトレール駅も近いです。'],
      ['사우스 레이크 유니언·시애틀 센터 주변', 'South Lake Union / Seattle Center', 'サウス・レイク・ユニオン・シアトル・センター周辺', '스페이스 니들과 치훌리 가든 앤드 글라스가 가깝습니다.', 'Close to the Space Needle and Chihuly Garden and Glass.', 'スペース・ニードルやチフーリ・ガーデン・アンド・グラスに近いです。'],
    ],
  },
  perth: {
    o: ['호주 서해안 서호주주의 주도로, 맑은 날이 많고 시내 가까이에 해변과 넓은 킹스 파크가 있습니다. 항구 도시 프리맨틀과 쿼카가 사는 로트네스트섬을 함께 둘러보기 좋습니다.', 'The sunny capital of Western Australia, with beaches and the vast Kings Park close to the centre; pair it with the port of Fremantle and quokka-filled Rottnest Island.', 'オーストラリア西海岸、西オーストラリア州の州都で、晴れの日が多く、市内の近くにビーチや広大なキングス・パークがあります。港町フリーマントルやクオッカが住むロットネスト島と合わせて巡るのに良い街です。'],
    d: [3, 4],
    s: [
      ['퍼스 시내(CBD)', 'Perth CBD', 'パース中心部（CBD）', '퍼스역과 강변이 가깝고, 공항 열차로 바로 연결됩니다.', 'Close to Perth Station and the river, with a direct airport train.', 'パース駅や川沿いに近く、空港行きの列車ですぐ行けます。'],
      ['프리맨틀', 'Fremantle', 'フリーマントル', '항구와 시장, 수제 맥주로 유명한 옛 항구 도시로, 로트네스트섬 페리가 출발합니다.', 'The historic port of markets and craft beer, and a Rottnest ferry departure point.', '港や市場、クラフトビールで知られる古い港町で、ロットネスト島へのフェリーが出ています。'],
    ],
  },
  manchester: {
    o: ['세계 최초의 산업 도시로 불리는 잉글랜드 북서부의 중심지로, 붉은 벽돌 공장과 운하가 남아 있습니다. 맨체스터 유나이티드·시티의 축구 도시이자 무료 박물관이 많은 곳입니다.', 'The hub of north-west England, often called the world’s first industrial city, with red-brick mills and canals; home of Manchester United and City, and of many free museums.', '世界初の工業都市とも呼ばれるイングランド北西部の中心地で、赤れんがの工場や運河が残ります。マンチェスター・ユナイテッドとシティのサッカーの街で、無料の博物館も多いです。'],
    d: [2, 3],
    s: [
      ['시티 센터(피카딜리 주변)', 'City Centre (around Piccadilly)', 'シティ・センター（ピカデリー周辺）', '기차역과 트램이 모이는 중심가로, 공항 트램·열차 연결이 편합니다.', 'The central hub of trains and trams, with easy airport links.', '鉄道駅とトラムが集まる中心街で、空港へのトラムや列車が便利です。'],
      ['노던 쿼터', 'Northern Quarter', 'ノーザン・クォーター', '개성 있는 카페·식당·바가 모인 지역입니다.', 'Independent cafés, restaurants and bars.', '個性的なカフェや飲食店、バーが集まる地区です。'],
    ],
  },
  christchurch: {
    o: ['뉴질랜드 남섬 최대 도시로, 에이번강과 넓은 해글리 공원이 있는 ‘정원의 도시’입니다. 남극 탐험의 출발지였고, 남섬 렌터카 여행과 알프스 열차 여행의 시작점이기도 합니다.', 'The South Island’s largest city, a “Garden City” on the Avon River with vast Hagley Park; a historic gateway to Antarctica and the start of many South Island road and rail trips.', 'ニュージーランド南島最大の都市で、エイボン川と広いハグレー公園がある「ガーデンシティ」です。南極探検の出発地で、南島のレンタカー旅行や山岳鉄道の旅の起点でもあります。'],
    d: [2, 3],
    s: [
      ['시티 센터', 'City Centre', 'シティ・センター', '트램 노선과 버스 환승 센터가 있어 걸어서 둘러보기 좋습니다.', 'Compact and walkable, with the heritage tram loop and bus interchange.', 'トラムの路線とバスの乗り換えセンターがあり、歩いて回りやすいです。'],
      ['해글리 공원 주변', 'Around Hagley Park', 'ハグレー公園周辺', '식물원과 박물관이 가까운 조용한 지역입니다.', 'A quiet area close to the Botanic Gardens and museum.', '植物園や博物館に近い静かな地区です。'],
    ],
  },
  glasgow: {
    o: ['스코틀랜드 최대 도시로, 빅토리아 시대 건축과 찰스 레니 매킨토시의 디자인이 곳곳에 남아 있습니다. 켈빈그로브 미술관 등 무료 박물관이 많고, 에든버러와 기차로 약 1시간 거리입니다.', 'Scotland’s largest city, rich in Victorian architecture and Charles Rennie Mackintosh design; many museums such as Kelvingrove are free, and Edinburgh is about an hour by train.', 'スコットランド最大の都市で、ヴィクトリア朝の建築やチャールズ・レニー・マッキントッシュのデザインが各地に残ります。ケルヴィングローヴ美術館など無料の博物館が多く、エディンバラまで列車で約1時間です。'],
    d: [2, 3],
    s: [
      ['시티 센터(조지 스퀘어 주변)', 'City Centre (around George Square)', 'シティ・センター（ジョージ・スクエア周辺）', '기차역과 지하철역이 가깝고, 공항버스가 서는 곳입니다.', 'Near the main stations and Subway, served by the airport bus.', '鉄道駅や地下鉄駅に近く、空港バスが停まります。'],
      ['웨스트 엔드', 'West End', 'ウエスト・エンド', '켈빈그로브 미술관과 글래스고 대학이 있는 지역으로, 카페와 식당이 많습니다.', 'Home to Kelvingrove and the University, with plenty of cafés and restaurants.', 'ケルヴィングローヴ美術館やグラスゴー大学がある地区で、カフェや飲食店が多いです。'],
    ],
  },
  'san-diego': {
    o: ['멕시코 국경과 가까운 캘리포니아 남부의 해안 도시로, 일 년 내내 온화한 날씨와 해변이 매력입니다. 세계적인 샌디에이고 동물원과 발보아 파크, 피시 타코로 유명합니다.', 'A Southern California coastal city near the Mexican border, with mild weather and beaches year-round; famous for the San Diego Zoo, Balboa Park and fish tacos.', 'メキシコ国境に近い南カリフォルニアの海辺の街で、一年中穏やかな気候とビーチが魅力です。世界的なサンディエゴ動物園やバルボア・パーク、フィッシュタコスで有名です。'],
    d: [3, 4],
    s: [
      ['다운타운·개슬램프 쿼터', 'Downtown / Gaslamp Quarter', 'ダウンタウン・ガスランプ・クォーター', '식당과 바가 모인 중심가로, 공항버스와 트롤리가 가깝습니다.', 'The dining and nightlife centre, close to the airport bus and trolley.', '飲食店やバーが集まる中心街で、空港バスやトロリーに近いです。'],
      ['리틀 이탈리아', 'Little Italy', 'リトル・イタリー', '공항과 가장 가까운 동네로, 식당과 주말 시장이 있습니다.', 'Closest to the airport, with restaurants and a weekend market.', '空港に最も近い地区で、飲食店や週末のマーケットがあります。'],
    ],
  },
  adelaide: {
    o: ['남호주주의 주도로, 공원에 둘러싸인 반듯한 시내에 무료 박물관과 미술관이 모여 있습니다. 바로사 밸리 등 와인 산지와 캥거루섬으로 가는 관문이며, 센트럴 마켓이 유명합니다.', 'South Australia’s capital, a grid city ringed by parklands with free museums and galleries; gateway to wine regions like the Barossa and to Kangaroo Island, and home of the Central Market.', '南オーストラリア州の州都で、公園に囲まれた碁盤目の市内に無料の博物館や美術館が集まっています。バロッサ・バレーなどのワイン産地やカンガルー島への玄関口で、セントラル・マーケットが有名です。'],
    d: [3, 4],
    s: [
      ['시내(CBD)', 'Adelaide CBD', 'アデレード中心部（CBD）', '노스 테라스의 박물관·미술관과 센트럴 마켓이 걸어서 닿습니다.', 'Walk to the North Terrace museums and the Central Market.', 'ノース・テラスの博物館や美術館、セントラル・マーケットへ歩いて行けます。'],
      ['글레넬그', 'Glenelg', 'グレネルグ', '시내에서 트램으로 가는 해변 마을입니다.', 'The beachside suburb at the end of the tram line.', '市内からトラムで行けるビーチの街です。'],
    ],
  },
  liverpool: {
    o: ['비틀스의 고향으로 알려진 잉글랜드 북서부의 항구 도시로, 머지강 변의 로열 앨버트 독과 붉은 벽돌 창고가 상징입니다. 국립박물관이 모두 무료이고, 리버풀·에버턴의 축구 도시이기도 합니다.', 'The north-west port city famed as the Beatles’ home, symbolised by the Royal Albert Dock on the Mersey; all its national museums are free, and it is the city of Liverpool and Everton football.', 'ビートルズの故郷として知られるイングランド北西部の港町で、マージー川沿いのロイヤル・アルバート・ドックと赤れんがの倉庫がシンボルです。国立博物館はすべて無料で、リバプールとエバートンのサッカーの街でもあります。'],
    d: [2, 3],
    s: [
      ['시티 센터(라임 스트리트·리버풀 원 주변)', 'City Centre (Lime Street / Liverpool ONE)', 'シティ・センター（ライム・ストリート・リバプール・ワン周辺）', '기차역과 쇼핑가, 공항버스 정류장이 가깝습니다.', 'Near the main station, shopping streets and airport buses.', '鉄道駅やショッピング街、空港バスの乗り場に近いです。'],
      ['워터프런트(앨버트 독 주변)', 'Waterfront (around Albert Dock)', 'ウォーターフロント（アルバート・ドック周辺）', '비틀스 스토리와 해양박물관이 걸어서 닿습니다.', 'A walk to The Beatles Story and the Maritime Museum.', 'ビートルズ・ストーリーや海洋博物館へ歩いて行けます。'],
    ],
  },
  heidelberg: {
    o: ['네카어강 변의 독일에서 가장 오래된 대학 도시로, 언덕 위 붉은 사암 고성과 옛 다리가 어우러진 낭만적인 풍경으로 유명합니다. 프랑크푸르트에서 기차로 약 1시간 거리라 당일 여행으로도 많이 찾습니다.', 'Germany’s oldest university town on the Neckar, famed for its red-sandstone castle above the Old Bridge; about an hour by train from Frankfurt, it is a popular day trip.', 'ネッカー川沿いにあるドイツ最古の大学都市で、丘の上の赤砂岩の古城と古い橋が織りなすロマンチックな風景で有名です。フランクフルトから列車で約1時間なので日帰り旅行でも人気です。'],
    d: [1, 2],
    s: [
      ['구시가지(알트슈타트)', 'Old Town (Altstadt)', '旧市街（アルトシュタット）', '고성 케이블카와 옛 다리, 대학 건물이 걸어서 닿습니다.', 'A walk to the castle funicular, Old Bridge and university buildings.', '古城のケーブルカーや古い橋、大学の建物へ歩いて行けます。'],
      ['중앙역 주변', 'Around the Main Station', '中央駅周辺', '기차 이동이 편하고, 트램·버스로 구시가지까지 금방입니다.', 'Handy for trains, with quick trams and buses to the Old Town.', '列車の移動に便利で、トラムやバスで旧市街まですぐです。'],
    ],
  },
  bilbao: {
    o: ['스페인 북부 바스크 지방의 중심 도시로, 티타늄 곡선의 구겐하임 미술관이 도시를 바꾼 상징이 되었습니다. 구시가지 바에서 핀초(한입 요리)를 골라 먹는 문화와 바스크 요리로 유명합니다.', 'The Basque Country’s main city in northern Spain, transformed by the titanium curves of the Guggenheim; famous for pintxo-hopping in the old town bars and Basque cooking.', 'スペイン北部バスク地方の中心都市で、チタンの曲線が印象的なグッゲンハイム美術館が街を変えたシンボルです。旧市街のバルでピンチョス（一口料理）を選んで食べる文化とバスク料理で有名です。'],
    d: [2, 3],
    s: [
      ['구시가지(카스코 비에호)', 'Old Town (Casco Viejo)', '旧市街（カスコ・ビエホ）', '핀초 바가 모인 일곱 거리(시에테 카예스)가 있는 지역입니다.', 'The Siete Calles, packed with pintxo bars.', 'ピンチョスのバルが集まる「7つの通り」がある地区です。'],
      ['아반도·구겐하임 주변', 'Abando / around the Guggenheim', 'アバンド・グッゲンハイム周辺', '미술관과 강변 산책로가 가깝고, 공항버스가 서는 곳입니다.', 'Near the museum and riverside promenade, served by the airport bus.', '美術館や川沿いの遊歩道に近く、空港バスが停まります。'],
    ],
  },
  toulouse: {
    o: ['붉은 벽돌 건물이 많아 ‘장밋빛 도시’로 불리는 프랑스 남서부의 중심 도시로, 에어버스 본사가 있는 항공우주 산업의 수도입니다. 카술레와 툴루즈 소시지 같은 남서부 요리로 유명합니다.', 'South-west France’s “Pink City” of rosy brick, capital of the aerospace industry and home of Airbus; famous for cassoulet and Toulouse sausage.', '赤れんがの建物が多く「バラ色の街」と呼ばれるフランス南西部の中心都市で、エアバス本社がある航空宇宙産業の都です。カスレやトゥールーズ・ソーセージなど南西部の料理で有名です。'],
    d: [2, 3],
    s: [
      ['카피톨 광장 주변', 'Around Place du Capitole', 'キャピトル広場周辺', '시청이 있는 중심 광장으로, 지하철 A선이 지나고 구시가지 관광에 편합니다.', 'The main square by the town hall, on Metro line A and handy for the old town.', '市庁舎がある中心広場で、地下鉄A線が通り旧市街の観光に便利です。'],
      ['마타비오역 주변', 'Around Matabiau Station', 'マタビオ駅周辺', '기차역과 공항 셔틀 버스 정류장이 있어 이동이 편합니다.', 'The train station and airport shuttle stop.', '鉄道駅と空港シャトルバスの乗り場があり移動に便利です。'],
    ],
  },
  cairns: {
    o: ['호주 퀸즐랜드 북부의 열대 도시로, 그레이트 배리어 리프와 데인트리 열대우림으로 가는 관문입니다. 바닷가 산책로 에스플러네이드와 무료 수영 라군이 있고, 열대 과일과 해산물이 풍부합니다.', 'A tropical city in far north Queensland and gateway to the Great Barrier Reef and Daintree Rainforest, with the Esplanade boardwalk and free swimming lagoon, plus abundant tropical fruit and seafood.', 'オーストラリア・クイーンズランド州北部の熱帯の街で、グレートバリアリーフやデインツリー熱帯雨林への玄関口です。海沿いの遊歩道エスプラネードと無料の遊泳ラグーンがあり、熱帯フルーツや海産物が豊富です。'],
    d: [3, 4],
    s: [
      ['에스플러네이드·시내', 'Esplanade / City', 'エスプラネード・市内', '바닷가 산책로와 라군, 리프 투어 선착장이 걸어서 닿습니다.', 'A walk to the boardwalk, lagoon and reef-tour terminal.', '海沿いの遊歩道やラグーン、リーフツアーの桟橋へ歩いて行けます。'],
      ['노던 비치', 'Northern Beaches', 'ノーザン・ビーチ', '팜 코브 등 조용한 해변 마을로, 휴양에 좋습니다.', 'Quieter beach villages such as Palm Cove, for a resort stay.', 'パーム・コーブなど静かなビーチの町で、リゾート滞在に向いています。'],
    ],
  },
  verona: {
    o: ['로미오와 줄리엣의 무대로 알려진 이탈리아 북부 도시로, 시내 한가운데에 로마 시대 원형극장 아레나가 남아 있습니다. 여름 오페라 축제와 아마로네 와인, 리소토로 유명합니다.', 'The northern Italian city of Romeo and Juliet, with the Roman Arena at its heart; famous for its summer opera festival, Amarone wine and risotto.', 'ロミオとジュリエットの舞台として知られるイタリア北部の街で、市の中心にローマ時代の円形闘技場アレーナが残ります。夏のオペラ祭やアマローネワイン、リゾットで有名です。'],
    d: [1, 2],
    s: [
      ['구시가지(브라 광장·에르베 광장)', 'Old Town (Piazza Bra / Piazza delle Erbe)', '旧市街（ブラ広場・エルベ広場）', '아레나와 줄리엣의 집이 걸어서 닿는 중심지입니다.', 'The heart of town, a walk from the Arena and Juliet’s House.', 'アレーナやジュリエットの家へ歩いて行ける中心地です。'],
      ['포르타 누오바역 주변', 'Around Porta Nuova Station', 'ポルタ・ヌオーヴァ駅周辺', '기차역과 공항버스가 있어 이동이 편합니다.', 'Handy for trains and the airport bus.', '鉄道駅と空港バスがあり移動に便利です。'],
    ],
  },
  thessaloniki: {
    o: ['그리스 북부의 항구 도시이자 제2의 도시로, 바닷가의 화이트 타워와 유네스코 세계유산인 비잔틴 교회들이 남아 있습니다. 비잔틴·오스만·소아시아 문화가 섞인 음식으로 유명하며, 2024년 지하철이 개통했습니다.', 'Greece’s second city and northern port, with the seafront White Tower and UNESCO-listed Byzantine churches; famous for food shaped by Byzantine, Ottoman and Asia Minor influences, and served by a metro since 2024.', 'ギリシャ北部の港町で第2の都市です。海沿いのホワイトタワーやユネスコ世界遺産のビザンチン教会が残ります。ビザンチン・オスマン・小アジアの文化が混ざった料理で有名で、2024年に地下鉄が開通しました。'],
    d: [2, 3],
    s: [
      ['시내 중심(아리스토텔레스 광장 주변)', 'City Centre (around Aristotelous Square)', '中心部（アリストテレス広場周辺）', '바닷가 산책로와 시장, 지하철역이 가까운 중심지입니다.', 'Close to the waterfront, markets and metro.', '海沿いの遊歩道や市場、地下鉄駅に近い中心地です。'],
      ['아노 폴리(윗마을)', 'Ano Poli (Upper Town)', 'アノ・ポリ（旧市街の高台）', '성벽과 오래된 골목이 남은 언덕 위 동네로, 시내 전망이 좋습니다.', 'The hilltop old quarter of walls and lanes with city views.', '城壁や古い路地が残る丘の上の地区で、市内の眺めが良いです。'],
    ],
  },
  chengdu: {
    o: ['중국 서남부 쓰촨성의 성도로, 자이언트 판다 번식 연구기지가 있는 ‘판다의 도시’입니다. 얼얼하게 매운 쓰촨 요리와 훠궈의 본고장이며, 느긋한 찻집 문화로도 유명합니다.', 'Capital of Sichuan in south-west China and “City of the Giant Panda”, home to the panda breeding base; the birthplace of numbing-spicy Sichuan cooking and hotpot, and famous for its relaxed teahouse culture.', '中国西南部・四川省の省都で、ジャイアントパンダ繁育研究基地がある「パンダの街」です。しびれる辛さの四川料理と火鍋の本場で、のんびりした茶館文化でも有名です。'],
    d: [3, 4],
    s: [
      ['춘시루·타이구리 주변', 'Chunxi Road / Taikoo Li', '春熙路・太古里周辺', '쇼핑가와 식당이 모인 중심가로, 지하철 2·3호선이 지납니다.', 'The central shopping and dining district on Metro Lines 2 and 3.', 'ショッピング街や飲食店が集まる中心街で、地下鉄2・3号線が通ります。'],
      ['콴자이샹쯔(넓고 좁은 골목) 주변', 'Around Kuanzhai Xiangzi', '寛窄巷子周辺', '옛 골목을 복원한 거리로, 찻집과 쓰촨 간식 가게가 많습니다.', 'Restored old lanes with teahouses and Sichuan snacks.', '昔の路地を復元した通りで、茶館や四川の軽食の店が多いです。'],
    ],
  },
  'mexico-city': {
    o: ['해발 약 2,240m 고원에 자리한 멕시코의 수도로, 아스테카 유적 위에 세운 역사지구와 세계적인 국립인류학박물관이 있습니다. 타코 알 파스토르 같은 길거리 음식과 5페소 지하철로 경비 부담이 적은 편입니다.', 'Mexico’s high-altitude capital (about 2,240 m), with a historic centre built on Aztec ruins and the world-class National Museum of Anthropology; street food like tacos al pastor and a 5-peso metro keep costs low.', '標高約2,240mの高原にあるメキシコの首都で、アステカの遺跡の上に築かれた歴史地区や世界的な国立人類学博物館があります。タコス・アル・パストールなどの屋台料理や5ペソの地下鉄で、費用を抑えやすい街です。'],
    d: [3, 4],
    s: [
      ['역사지구(센트로)', 'Historic Centre (Centro Histórico)', '歴史地区（セントロ）', '소칼로 광장과 대성당, 템플로 마요르가 걸어서 닿습니다.', 'Walk to the Zócalo, the cathedral and Templo Mayor.', 'ソカロ広場や大聖堂、テンプロ・マヨールへ歩いて行けます。'],
      ['로마·콘데사', 'Roma / Condesa', 'ローマ・コンデサ', '공원과 카페, 식당이 많은 지역으로 비교적 조용합니다.', 'Leafy neighbourhoods of parks, cafés and restaurants.', '公園やカフェ、飲食店が多い比較的落ち着いた地区です。'],
    ],
  },
  philadelphia: {
    o: ['미국 독립선언과 헌법이 탄생한 도시로, 독립기념관과 자유의 종이 있는 역사 지구가 무료로 열려 있습니다. 영화 〈록키〉의 계단으로 유명한 미술관과 치즈스테이크의 본고장입니다.', 'Birthplace of the Declaration of Independence and the Constitution, with a free historic district around Independence Hall and the Liberty Bell; home of the art museum’s “Rocky Steps” and of the cheesesteak.', 'アメリカ独立宣言と合衆国憲法が生まれた街で、独立記念館や自由の鐘がある歴史地区は無料で見学できます。映画「ロッキー」の階段で有名な美術館と、チーズステーキの本場です。'],
    d: [2, 3],
    s: [
      ['올드 시티·센터 시티 동쪽', 'Old City / east Center City', 'オールド・シティ・センター・シティ東側', '독립기념관과 리딩 터미널 마켓이 걸어서 닿습니다.', 'A walk to Independence Hall and Reading Terminal Market.', '独立記念館やリーディング・ターミナル・マーケットへ歩いて行けます。'],
      ['리튼하우스 광장 주변', 'Around Rittenhouse Square', 'リッテンハウス広場周辺', '공원과 식당이 모인 조용한 지역입니다.', 'A leafy area of restaurants around the square.', '公園と飲食店が集まる落ち着いた地区です。'],
    ],
  },
};
