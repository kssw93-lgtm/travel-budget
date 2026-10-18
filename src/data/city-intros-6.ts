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
};
