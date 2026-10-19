/** 도시 가이드 초안 9 — 겨울 크리스마스 마켓 도시 (Claude 초안, 금액 없음). 형식은 city-guides-1.ts 와 같다 */
import type { Compact } from './city-guides-1';

export const NOTES_9: Record<string, Compact> = {
  dresden: {
    h: [
      ['슈트리첼마르크트', 'Striezelmarkt', 'シュトリーツェルマルクト', '1434년부터 이어진 독일에서 가장 오래된 크리스마스 마켓 중 하나. 대림절 기간 알트마르크트 광장에서 열립니다.', 'One of Germany’s oldest Christmas markets, held since 1434 on the Altmarkt during Advent.', '1434年から続くドイツ最古級のクリスマスマーケット。アドベント期間にアルトマルクト広場で開かれます。'],
      ['프라우엔 교회', 'Frauenkirche', '聖母教会（フラウエン教会）', '전쟁으로 무너졌다가 2005년 다시 지어진 바로크 교회. 돔 전망대에서 구시가지가 내려다보입니다.', 'The Baroque church destroyed in the war and rebuilt in 2005; its dome offers views over the old town.', '戦争で崩れ2005年に再建されたバロック様式の教会。ドームの展望台から旧市街が見渡せます。'],
      ['츠빙거 궁전', 'Zwinger', 'ツヴィンガー宮殿', '바로크 양식의 궁전. 안의 미술관에 라파엘로의 「시스티나 성모」가 있습니다.', 'A Baroque palace complex whose gallery holds Raphael’s Sistine Madonna.', 'バロック様式の宮殿。中の美術館にラファエロの「システィーナの聖母」があります。'],
      ['군주의 행렬', 'Procession of Princes', '君主の行列', '102m 길이의 벽에 마이센 도자기 타일로 작센 군주들을 그린 벽화입니다.', 'A 102-metre mural of Saxon rulers made from Meissen porcelain tiles.', '長さ102mの壁にマイセン磁器のタイルで歴代ザクセン君主を描いた壁画です。'],
      ['녹색 금고', 'Green Vault (Grünes Gewölbe)', '緑の丸天井', '작센 왕가의 보물을 모은 레지덴츠 궁전 안 보물관으로, 역사 녹색 금고는 시간 지정 입장권이 필요합니다.', 'The Saxon royal treasury in the Residenzschloss; the Historic Green Vault needs a timed ticket.', 'ザクセン王家の宝物を集めたレジデンツ城内の宝物館で、歴史的緑の丸天井は時間指定券が必要です。'],
    ],
    t: [
      ['드레스덴의 명물 과자 슈톨렌(Stollen)은 크리스마스 시즌의 대표 간식이라 마켓에서 꼭 맛볼 만합니다.', 'Dresden Stollen, the city’s famous fruit loaf, is the classic Christmas treat to try at the market.', 'ドレスデン名物のシュトレンはクリスマスシーズンの定番菓子なので、マーケットでぜひ味わいましょう。'],
      ['공항에서 시내: 드레스덴 공항 지하역에서 S반 S2를 타면 노이슈타트역과 중앙역까지 20분 안팎입니다.', 'Airport to city: S-Bahn S2 from the station beneath Dresden Airport reaches Dresden-Neustadt and the Hauptbahnhof in about 20 minutes.', '空港から市内へ：ドレスデン空港の地下駅からSバーンS2でノイシュタット駅・中央駅まで20分ほどです。'],
      ['도시 간 이동: 드레스덴 중앙역에서 기차를 타면 베를린 2시간 안팎, 프라하 2시간 반 안팎입니다.', 'Between cities: trains from Dresden Hbf reach Berlin in about two hours and Prague in about 2.5.', '都市間の移動：ドレスデン中央駅から列車でベルリンまで約2時間、プラハまで約2時間半です。'],
    ],
  },
  nuremberg: {
    h: [
      ['크리스트킨들레스마르크트', 'Christkindlesmarkt', 'クリストキンドレスマルクト', '세계적으로 유명한 크리스마스 마켓. 개막일에 금빛 옷을 입은 「크리스트킨트」가 개막을 알립니다.', 'The world-famous Christmas market, opened each year by the golden-robed “Christkind”.', '世界的に有名なクリスマスマーケット。毎年金色の衣装の「クリストキント」が開幕を告げます。'],
      ['뉘른베르크 성', 'Imperial Castle', 'ニュルンベルク城（カイザーブルク）', '구시가지 언덕 위의 중세 황제 성. 성벽에서 붉은 지붕의 구시가지가 한눈에 보입니다.', 'The medieval imperial castle above the old town, with views over its red rooftops.', '旧市街の丘に建つ中世の皇帝の城。城壁から赤い屋根の旧市街が一望できます。'],
      ['아름다운 분수', 'Schöner Brunnen', '美しの泉', '중앙 광장의 고딕 분수. 철망의 황동 고리를 돌리면 행운이 온다는 전승이 있습니다.', 'A Gothic fountain on the main square. Local lore says turning its brass ring brings good luck.', '中央広場にあるゴシック様式の噴水。柵の真鍮の輪を回すと幸運が訪れるという言い伝えがあります。'],
      ['나치 전당대회장 기록관', 'Documentation Center Nazi Party Rally Grounds', 'ナチ党大会会場記録センター', '옛 나치 전당대회장의 미완공 의회관 건물 안에 있는 기록관으로, 그 역사를 보여줍니다.', 'A documentation centre inside the unfinished Congress Hall of the former Nazi rally grounds.', '旧ナチ党大会会場の未完成の議会ホールの中にある記録センターで、その歴史を伝えます。'],
      ['게르만 국립박물관', 'Germanisches Nationalmuseum', 'ゲルマン国立博物館', '독일어권 최대 규모의 문화사 박물관으로, 뒤러의 작품과 세계에서 가장 오래된 지구본 중 하나가 있습니다.', 'The largest museum of German cultural history, with Dürer works and one of the oldest globes.', 'ドイツ語圏最大の文化史博物館で、デューラーの作品や現存最古級の地球儀があります。'],
    ],
    t: [
      ['손가락만 한 뉘른베르크 소시지 3개를 빵에 끼운 「드라이 임 베클라」가 대표 길거리 음식입니다.', '“Drei im Weggla”, three small Nuremberg sausages in a roll, is the classic street snack.', '小さなニュルンベルク・ソーセージ3本をパンに挟んだ「ドライ・イム・ヴェクラ」が定番の屋台グルメです。'],
      ['향신료 과자 렙쿠헨(Lebkuchen)이 이 도시의 명물이라 선물용으로 인기가 많습니다.', 'Lebkuchen, spiced gingerbread, is the city’s speciality and a popular gift.', 'スパイス菓子のレープクーヘンが街の名物で、お土産として人気です。'],
      ['공항에서 시내: 뉘른베르크 공항에서 지하철 U2를 타면 중앙역까지 약 12분입니다.', 'Airport to city: the U2 underground runs from Nuremberg Airport to the Hauptbahnhof in about 12 minutes.', '空港から市内へ：ニュルンベルク空港から地下鉄U2線で中央駅まで約12分です。'],
      ['도시 간 이동: 뉘른베르크 중앙역에서 ICE를 타면 뮌헨까지 1시간 안팎이라 당일치기로도 다녀옵니다.', 'Between cities: ICE trains from Nuremberg reach Munich in about an hour, so it works as a day trip either way.', '都市間の移動：ニュルンベルク中央駅からICEでミュンヘンまで約1時間なので、日帰りでも行き来できます。'],
    ],
  },
  cologne: {
    h: [
      ['쾰른 대성당', 'Cologne Cathedral', 'ケルン大聖堂', '유네스코 세계유산인 고딕 대성당. 계단으로 남쪽 탑에 오를 수 있습니다.', 'The UNESCO-listed Gothic cathedral; you can climb the south tower by stairs.', '世界遺産のゴシック大聖堂。階段で南塔に登れます。'],
      ['대성당 앞 크리스마스 마켓', 'Christmas Market at the Cathedral', '大聖堂前のクリスマスマーケット', '대성당을 배경으로 열리는 쾰른의 대표 마켓. 시내에 여러 개의 마켓이 함께 열립니다.', 'The city’s signature market set against the cathedral, one of several across town.', '大聖堂を背景に開かれるケルンを代表するマーケット。市内には複数のマーケットが同時に開かれます。'],
      ['호엔촐레른 다리', 'Hohenzollern Bridge', 'ホーエンツォレルン橋', '난간에 사랑의 자물쇠가 가득한 철교. 강 건너편에서 보는 대성당 야경이 유명합니다.', 'The railway bridge covered in love locks, with famous night views of the cathedral from across the river.', '欄干に愛の南京錠が並ぶ鉄道橋。対岸から見る大聖堂の夜景が有名です。'],
      ['초콜릿 박물관', 'Chocolate Museum', 'チョコレート博物館', '라인강 변에 있는 초콜릿 제조 과정 전시관입니다.', 'A riverside museum showing how chocolate is made.', 'ライン川沿いにあるチョコレート製造の展示館です。'],
      ['루트비히 미술관', 'Museum Ludwig', 'ルートヴィヒ美術館', '대성당 바로 옆 현대미술관으로, 피카소와 팝아트 컬렉션이 유명합니다.', 'A modern art museum right next to the cathedral, known for Picasso and Pop Art.', '大聖堂のすぐ隣の現代美術館で、ピカソとポップアートのコレクションが有名です。'],
    ],
    t: [
      ['쾰른 맥주 쾰슈(Kölsch)는 작은 잔에 나오고, 잔 위에 코스터를 올려 두면 그만 마시겠다는 뜻입니다.', 'Kölsch beer comes in small glasses; put your coaster on top to signal you are done.', 'ケルンのビール「ケルシュ」は小さなグラスで出され、コースターをグラスの上に置くと「もう十分」の合図です。'],
      ['중앙역이 대성당 바로 옆이라 기차로 도착하면 바로 관광을 시작할 수 있습니다.', 'The main station is right next to the cathedral, so you can start sightseeing straight off the train.', '中央駅が大聖堂のすぐ隣なので、列車で着いてすぐ観光を始められます。'],
      ['공항에서 시내: 쾰른/본 공항 역에서 S반이나 지역 열차를 타면 쾰른 중앙역까지 15분 안팎입니다.', 'Airport to city: S-Bahn and regional trains from Cologne Bonn Airport station reach Köln Hbf in about 15 minutes.', '空港から市内へ：ケルン・ボン空港駅からSバーンや地域列車でケルン中央駅まで15分ほどです。'],
      ['도시 간 이동: 쾰른 중앙역에서 ICE를 타면 프랑크푸르트 1시간 남짓이고, 암스테르담·브뤼셀로 가는 국제 열차도 다닙니다.', 'Between cities: ICE trains from Köln Hbf reach Frankfurt in just over an hour, and international trains run to Amsterdam and Brussels.', '都市間の移動：ケルン中央駅からICEでフランクフルトまで1時間あまりです。アムステルダム・ブリュッセルへの国際列車もあります。'],
    ],
  },
  strasbourg: {
    h: [
      ['크리스마스 마켓(크리스킨델스메리크)', 'Christkindelsmärik', 'クリストキンデルスメリック', '유럽에서 가장 오래된 크리스마스 마켓 중 하나. 도시 전체가 「크리스마스의 수도」로 꾸며집니다.', 'One of Europe’s oldest Christmas markets, in the self-styled “Capital of Christmas”.', 'ヨーロッパ最古級のクリスマスマーケットの一つ。街全体が「クリスマスの首都」として飾られます。'],
      ['스트라스부르 대성당', 'Strasbourg Cathedral', 'ストラスブール大聖堂', '분홍빛 사암으로 지은 고딕 대성당. 안에 정교한 천문시계가 있습니다.', 'A pink-sandstone Gothic cathedral with an intricate astronomical clock inside.', 'ピンク色の砂岩で造られたゴシック大聖堂。中に精巧な天文時計があります。'],
      ['쁘띠 프랑스', 'Petite France', 'プティット・フランス', '운하를 따라 목조 가옥이 늘어선 옛 동네로, 유네스코 세계유산 구역에 속합니다.', 'The canal-side quarter of half-timbered houses, part of the UNESCO-listed old town.', '運河沿いに木組みの家が並ぶ古い地区で、世界遺産地区に含まれます。'],
      ['운하 보트 투어', 'Canal boat tour', '運河ボートツアー', '일 강을 따라 구시가지와 유럽 의회 지구를 도는 유람선입니다.', 'River cruises on the Ill circle the old town and the European Parliament district.', 'イル川に沿って旧市街と欧州議会地区を巡る遊覧船です。'],
      ['유럽의회', 'European Parliament', '欧州議会', '유럽의회 본회의장이 있는 곳으로, 방문자 센터인 파를라멘타리움에서 EU 이야기를 볼 수 있습니다.', 'Home of the Parliament\'s plenary chamber, with the Parlamentarium visitor centre.', '欧州議会の本会議場がある所で、ビジターセンター「パーラメンタリウム」でEUについて学べます。'],
    ],
    t: [
      ['알자스의 대표 음식으로 슈크루트와 타르트 플랑베를 맛보고, 지역 와인도 함께 즐겨 보세요.', 'Try Alsatian specialities such as choucroute and tarte flambée, along with local wines.', 'アルザスの名物料理、シュークルートやタルト・フランベを、地元のワインと一緒に味わってみましょう。'],
      ['크리스마스 마켓 기간에는 그랑드 일의 차량 통행과 출입이 제한될 수 있습니다. 트램·도보·P+R 이용 안내를 확인하세요.', 'During the Christmas market, vehicle access to Grande Île is restricted and entry checks may apply. Check the official advice on trams, walking and park-and-ride.', 'クリスマスマーケット期間中はグラン・ディルへの車両通行が制限され、入口で検査が行われる場合があります。トラム・徒歩・パーク＆ライドの公式案内を確認しましょう。'],
      ['스트라스부르와 콜마르는 기차로 연결되어 있어 두 도시를 함께 둘러보는 일정을 짤 수 있습니다.', 'Strasbourg and Colmar are connected by train, so you can plan a visit to both cities.', 'ストラスブールとコルマールは鉄道で結ばれているため、両方を訪れる旅程を組めます。'],
      ['공항에서 시내: 스트라스부르 엔츠하임 공항역에서 셔틀 열차를 타면 스트라스부르역까지 약 9분입니다. 파리에서 오면 TGV로 바로 스트라스부르역에 내리는 경우가 많습니다.', 'Airport to city: the shuttle train from Entzheim Airport station reaches Strasbourg station in about 9 minutes; many visitors arrive straight from Paris by TGV instead.', '空港から市内へ：ストラスブール・エンツハイム空港駅からシャトル列車でストラスブール駅まで約9分です。パリからはTGVで直接ストラスブール駅に着く人も多いです。'],
    ],
  },
  colmar: {
    h: [
      ['쁘띠 베니스', 'Little Venice', 'プティット・ヴニーズ', '운하를 따라 알록달록한 목조 가옥이 늘어선 콜마르의 대표 풍경입니다.', 'Colmar’s signature scene of colourful half-timbered houses along the canal.', '運河沿いにカラフルな木組みの家が並ぶ、コルマールを代表する風景です。'],
      ['콜마르 크리스마스 마켓', 'Colmar Christmas Markets', 'コルマールのクリスマスマーケット', '구시가지 곳곳에 작은 마켓 여러 개가 열려 동화 같은 분위기를 만듭니다.', 'Several small markets spread through the old town, creating a fairy-tale atmosphere.', '旧市街のあちこちに小さなマーケットが開かれ、おとぎ話のような雰囲気になります。'],
      ['운터린덴 미술관', 'Unterlinden Museum', 'ウンターリンデン美術館', '옛 수도원 건물의 미술관으로 「이젠하임 제단화」가 유명합니다.', 'A museum in a former convent, famous for the Isenheim Altarpiece.', '旧修道院の美術館で、「イーゼンハイム祭壇画」が有名です。'],
      ['바르톨디 박물관', 'Bartholdi Museum', 'バルトルディ美術館', '자유의 여신상을 만든 조각가 바르톨디의 생가로, 여신상 제작 과정 자료를 전시합니다.', 'The birthplace of Statue of Liberty sculptor Bartholdi, with models and documents of the statue.', '自由の女神像を制作した彫刻家バルトルディの生家で、女神像の制作資料を展示します。'],
      ['오쾨닉스부르 성', 'Haut-Kœnigsbourg Castle', 'オー・クニグスブール城', '알자스 평야를 내려다보는 산 위의 중세 성으로, 콜마르에서 당일로 다녀오기 좋습니다.', 'A medieval castle high above the Alsace plain, a good day trip from Colmar.', 'アルザス平野を見下ろす山上の中世の城で、コルマールから日帰りに向きます。'],
    ],
    t: [
      ['콜마르 구시가지에는 운하와 목조 가옥이 모여 있어 도보로 둘러보기 좋습니다.', 'Colmar’s old town has canal-side streets and half-timbered houses that are easy to explore on foot.', 'コルマールの旧市街には運河沿いの通りや木組みの家が集まり、徒歩で散策しやすいです。'],
      ['콜마르 인근 에기스하임에서도 크리스마스 마켓이 열려 알자스 마을의 계절 장식을 즐길 수 있습니다.', 'Nearby Eguisheim also holds a Christmas market, offering a chance to see seasonal decorations in an Alsatian village.', '近郊のエギスハイムでもクリスマスマーケットが開かれ、アルザスの村の季節の飾りを楽しめます。'],
      ['공항에서 시내: 콜마르에서 가까운 큰 공항은 바젤-뮐루즈 유로에어포트입니다. 공항버스로 생루이역에 가서 콜마르행 열차를 타거나, 스트라스부르에서 기차로 30분 안팎이면 닿습니다.', 'Airport to city: the nearest major airport is EuroAirport Basel-Mulhouse; take the airport bus to Saint-Louis station and a train to Colmar, or come by train from Strasbourg in about 30 minutes.', '空港から市内へ：コルマールに近い大きな空港はバーゼル・ミュルーズ・ユーロエアポートです。空港バスでサン・ルイ駅へ行きコルマール行きの列車に乗るか、ストラスブールから列車で30分ほどです。'],
    ],
  },
  salzburg: {
    h: [
      ['잘츠부르크 크리스마스 마켓', 'Salzburg Christkindlmarkt', 'ザルツブルクのクリスマスマーケット', '대성당 광장과 레지던츠 광장에서 열리는 대림절 마켓입니다.', 'The Advent market on Cathedral Square and Residence Square.', '大聖堂広場とレジデンツ広場で開かれるアドベントのマーケットです。'],
      ['호엔잘츠부르크 요새', 'Hohensalzburg Fortress', 'ホーエンザルツブルク城', '언덕 위의 거대한 중세 요새. 푸니쿨라로 올라가 시내를 내려다볼 수 있습니다.', 'A huge medieval fortress above the city, reached by funicular, with sweeping views.', '丘の上の巨大な中世の城塞。ケーブルカーで上り、街を見下ろせます。'],
      ['모차르트 생가', 'Mozart’s Birthplace', 'モーツァルトの生家', '게트라이데 거리에 있는 모차르트가 태어난 집으로 지금은 박물관입니다.', 'The house on Getreidegasse where Mozart was born, now a museum.', 'ゲトライデガッセにあるモーツァルトが生まれた家で、現在は博物館です。'],
      ['미라벨 정원', 'Mirabell Gardens', 'ミラベル庭園', '영화 「사운드 오브 뮤직」 촬영지로 알려진 정원입니다.', 'Gardens known as a filming location of The Sound of Music.', '映画「サウンド・オブ・ミュージック」のロケ地として知られる庭園です。'],
      ['헬브룬 궁전', 'Hellbrunn Palace', 'ヘルブルン宮殿', '물을 뿜는 장난 분수로 유명한 대주교의 여름 궁전으로, 시내 남쪽에 있습니다. 분수 투어는 계절 운영입니다.', 'The prince-archbishop\'s summer palace south of town, famous for its trick fountains (seasonal tours).', '仕掛け噴水で知られる大司教の夏の離宮で、市の南にあります。噴水ツアーは季節営業です。'],
    ],
    t: [
      ['「고요한 밤」이 1818년 처음 공연된 근교 오베른도르프의 기념 예배당을 방문해 보세요.', 'Visit the memorial chapel in nearby Oberndorf, where “Silent Night” was first performed in 1818.', '「きよしこの夜」が1818年に初演された、近郊オーベルンドルフの記念礼拝堂を訪ねてみましょう。'],
      ['구시가지는 걸어서 다닐 수 있을 만큼 작고, 잘츠부르크 카드가 있으면 여러 명소와 교통을 함께 이용할 수 있습니다.', 'The old town is compact and walkable, and the Salzburg Card bundles many sights with transport.', '旧市街は歩いて回れるほどコンパクトで、ザルツブルクカードで多くの名所と交通をまとめて利用できます。'],
      ['공항에서 시내: 잘츠부르크 공항에서 트롤리버스(2·10번 등)를 타면 중앙역과 구시가지 방면으로 갑니다.', 'Airport to city: trolleybuses (lines 2 and 10, among others) run from Salzburg Airport to the main station and towards the old town.', '空港から市内へ：ザルツブルク空港からトロリーバス(2番・10番など)で中央駅や旧市街方面へ行けます。'],
    ],
  },
  zagreb: {
    h: [
      ['어드벤트 자그레브', 'Advent in Zagreb', 'アドベント・イン・ザグレブ', '대림절 기간 도시 곳곳이 조명과 마켓으로 꾸며지는 축제입니다.', 'An Advent festival that fills the city with lights and market stalls.', 'アドベント期間に街中が光とマーケットで彩られるお祭りです。'],
      ['성 마르코 성당', 'St. Mark’s Church', '聖マルコ教会', '알록달록한 타일 지붕에 문장이 그려진 교회로 자그레브의 상징입니다.', 'The church with a colourful tiled roof showing coats of arms, a symbol of the city.', 'カラフルなタイル屋根に紋章が描かれた教会で、ザグレブの象徴です。'],
      ['반 옐라치치 광장', 'Ban Jelačić Square', 'イェラチッチ総督広場', '시내 중심 광장으로 트램과 사람들이 모이는 곳입니다.', 'The main square where trams and people converge.', '街の中心の広場で、トラムと人が集まる場所です。'],
      ['실연 박물관', 'Museum of Broken Relationships', '失恋博物館', '헤어진 연인들이 기증한 물건과 사연을 전시하는 독특한 박물관입니다.', 'A quirky museum of objects and stories donated by former lovers.', '別れた恋人たちが寄贈した品物とエピソードを展示するユニークな博物館です。'],
      ['플리트비체 호수 국립공원', 'Plitvice Lakes National Park', 'プリトヴィツェ湖群国立公園', '계단식 호수와 폭포가 이어지는 유네스코 세계유산으로, 자그레브에서 버스로 약 2시간 반이라 당일로 다녀옵니다.', 'UNESCO-listed terraced lakes and waterfalls, about 2.5 hours by bus from Zagreb as a day trip.', '階段状の湖と滝が続く世界遺産で、ザグレブからバスで約2時間半、日帰りで行けます。'],
    ],
    t: [
      ['구시가지(고르니 그라드)까지는 짧은 푸니쿨라가 다녀 언덕을 쉽게 오를 수 있습니다.', 'A short funicular climbs to the Upper Town, saving you the uphill walk.', '旧市街（グォルニ・グラード）までは短いケーブルカーで上れます。'],
      ['시내 이동은 트램이 편하고, 표는 탈 때 개찰기에 찍어야 합니다.', 'Trams are the easiest way around; validate your ticket when you board.', '市内移動はトラムが便利で、乗車時に刻印が必要です。'],
      ['크로아티아는 유로를 쓰니 따로 환전할 필요가 없습니다.', 'Croatia uses the euro, so no separate currency is needed.', 'クロアチアはユーロを使うので、別途両替は不要です。'],
      ['공항에서 시내: 자그레브 공항에서 공항버스를 타면 시내 버스터미널까지 갑니다. 터미널에서 트램으로 중심가로 이어집니다.', 'Airport to city: the airport bus runs from Zagreb Airport to the main bus station, where trams continue to the centre.', '空港から市内へ：ザグレブ空港から空港バスで市内のバスターミナルへ行き、トラムで中心部へ向かえます。'],
    ],
  },
  rovaniemi: {
    h: [
      ['산타클로스 마을', 'Santa Claus Village', 'サンタクロース村', '북극권 선 위에 있는 산타 마을. 산타를 만나고 산타 우체국에서 편지를 보낼 수 있습니다.', 'Santa’s village on the Arctic Circle, where you can meet Santa and send mail from his post office.', '北極圏の線上にあるサンタの村。サンタに会えて、サンタ郵便局から手紙を出せます。'],
      ['아르크티쿰', 'Arktikum', 'アルクティクム', '북극 지역의 자연과 사람들의 삶을 보여주는 과학관·박물관입니다.', 'A science centre and museum about Arctic nature and life.', '北極圏の自然と人々の暮らしを紹介する科学館・博物館です。'],
      ['오로라·허스키 썰매 체험', 'Northern lights and husky safaris', 'オーロラ・ハスキー犬ぞり体験', '겨울에는 오로라 투어, 허스키·순록 썰매 같은 체험 프로그램이 많습니다.', 'Winter brings northern-lights tours and husky or reindeer sleigh rides.', '冬はオーロラツアーやハスキー・トナカイのそり体験が豊富です。'],
      ['산타파크', 'SantaPark', 'サンタパーク', '동굴 안에 꾸민 산타 테마파크로, 엘프 학교와 얼음 갤러리 등이 있습니다. 운영 기간이 정해져 있으니 공식 사이트에서 확인하세요.', 'A Santa theme park built inside a cave, with an elf school and ice gallery; open in set seasons.', '洞窟の中に造られたサンタのテーマパークで、エルフの学校や氷のギャラリーがあります。営業期間は公式サイトで確認を。'],
      ['라누아 야생동물원', 'Ranua Wildlife Park', 'ラヌア動物園', '북극곰 등 북극권 동물을 볼 수 있는 동물원으로, 로바니에미에서 차로 약 1시간 거리입니다.', 'A park of Arctic animals including polar bears, about an hour\'s drive from Rovaniemi.', 'ホッキョクグマなど北極圏の動物が見られる動物園で、ロヴァニエミから車で約1時間です。'],
    ],
    t: [
      ['한겨울은 매우 추우니 방한복·장갑·모자를 겹겹이 준비하세요. 투어 업체가 방한복을 빌려주기도 합니다.', 'Midwinter is extremely cold; dress in layers with gloves and a hat. Tour operators often lend thermal suits.', '真冬は非常に寒いので、防寒着・手袋・帽子を重ね着しましょう。ツアー会社が防寒服を貸してくれることもあります。'],
      ['12월은 해가 거의 뜨지 않는 극야라 낮 시간이 매우 짧습니다. 일정은 밝은 시간에 맞춰 짜세요.', 'In December the polar night leaves only a short spell of daylight; plan around it.', '12月は極夜で日中がとても短いので、明るい時間に合わせて予定を組みましょう。'],
      ['오로라는 늦은 8월부터 4월 초까지 어둡고 구름 없는 밤에 관측될 수 있어, 여러 밤을 두면 기회를 늘릴 수 있습니다.', 'The Northern Lights may appear from late August to early April on dark, cloudless nights; staying several nights gives you more opportunities.', 'オーロラは8月下旬から4月上旬まで、暗く雲のない夜に見られることがあります。複数泊すると観測の機会を増やせます。'],
    ],
  },
  tallinn: {
    h: [
      ['탈린 크리스마스 마켓', 'Tallinn Christmas Market', 'タリンのクリスマスマーケット', '중세 시청 광장에서 열리는 마켓으로, 광장 한가운데 큰 크리스마스트리가 세워집니다.', 'Held on the medieval Town Hall Square, with a large Christmas tree at its centre.', '中世の市庁舎広場で開かれるマーケットで、広場の中央に大きなクリスマスツリーが立ちます。'],
      ['탈린 구시가지', 'Tallinn Old Town', 'タリン旧市街', '성벽과 탑이 잘 남아 있는 중세 도시로 유네스코 세계유산입니다.', 'A well-preserved medieval town of walls and towers, listed by UNESCO.', '城壁と塔がよく残る中世の街で、世界遺産です。'],
      ['톰페아 언덕 전망대', 'Toompea viewing platforms', 'トームペア丘の展望台', '구시가지의 붉은 지붕과 바다가 한눈에 보이는 전망대입니다.', 'Viewpoints over the old town’s red roofs and the sea.', '旧市街の赤い屋根と海が一望できる展望台です。'],
      ['알렉산드르 넵스키 대성당', 'Alexander Nevsky Cathedral', 'アレクサンドル・ネフスキー大聖堂', '양파 모양 돔이 있는 러시아 정교회 대성당입니다.', 'An onion-domed Russian Orthodox cathedral on Toompea hill.', '玉ねぎ型のドームを持つロシア正教の大聖堂です。'],
      ['수상비행기 항구(에스토니아 해양박물관)', 'Seaplane Harbour (Estonian Maritime Museum)', '水上飛行機格納庫(エストニア海洋博物館)', '옛 수상비행기 격납고를 개조한 해양박물관으로, 잠수함 내부에 들어가 볼 수 있습니다.', 'A maritime museum in old seaplane hangars, where you can climb inside a submarine.', 'かつての水上飛行機格納庫を改装した海洋博物館で、潜水艦の内部に入れます。'],
    ],
    t: [
      ['헬싱키와 탈린은 페리로 약 2시간 거리입니다. 두 도시를 함께 여행한다면 공식 운항 시간표를 확인하세요.', 'Ferries between Helsinki and Tallinn take about two hours. Check the operators’ schedules if visiting both cities.', 'ヘルシンキとタリンはフェリーで約2時間です。両方を訪れる場合は運航会社の時刻表を確認しましょう。'],
      ['에스토니아에서는 대부분의 가게가 직불·신용카드와 비접촉 결제를 받습니다.', 'Most businesses in Estonia accept debit and credit cards, including contactless payments.', 'エストニアでは多くの店舗がデビットカードやクレジットカード、非接触決済に対応しています。'],
      ['공항에서 시내: 탈린 공항에서 트램 4번을 타면 구시가지 근처까지 20분 안팎입니다.', 'Airport to city: tram 4 runs from Tallinn Airport to near the old town in about 20 minutes.', '空港から市内へ：タリン空港からトラム4番で旧市街の近くまで20分ほどです。'],
    ],
  },
  edinburgh: {
    h: [
      ['에든버러성', 'Edinburgh Castle', 'エディンバラ城', '성 바위 위에 자리한 에든버러의 대표 명소입니다. 스코틀랜드의 왕실·군사 역사를 전시와 유적을 통해 만날 수 있습니다.', 'Set on Castle Rock, Edinburgh Castle is one of the city’s defining landmarks, with displays and historic sites linked to Scotland’s royal and military past.', 'キャッスル・ロックに建つエディンバラを代表する名所です。展示や史跡を通じて、スコットランドの王室と軍事の歴史に触れられます。'],
      ['로열 마일', 'The Royal Mile', 'ロイヤル・マイル', '에든버러성과 홀리루드하우스 궁전을 잇는 구시가지의 역사 거리입니다. 골목길과 교회, 상점과 식당을 따라 걸어보세요.', 'This historic Old Town route links Edinburgh Castle with the Palace of Holyroodhouse. Walk it for its closes, churches, shops and places to eat.', 'エディンバラ城とホリールードハウス宮殿を結ぶ旧市街の歴史ある通りです。路地や教会、店、飲食店をたどって歩いてみましょう。'],
      ['홀리루드하우스 궁전', 'Palace of Holyroodhouse', 'ホリールードハウス宮殿', '왕궁의 접견실과 메리 여왕의 방, 홀리루드 수도원 유적을 둘러볼 수 있습니다. 로열 마일의 동쪽 끝에 있습니다.', 'Explore the State Apartments, rooms associated with Mary, Queen of Scots, and the ruins of Holyrood Abbey at the eastern end of the Royal Mile.', 'ロイヤル・マイルの東端にあり、公式居室、メアリー女王ゆかりの部屋、ホリールード修道院の遺跡を見学できます。'],
      ['아서스 시트', 'Arthur’s Seat', 'アーサーズ・シート', '시내 옆 옛 화산 언덕. 정상에 오르면 도시와 바다가 한눈에 보입니다.', 'An extinct volcano beside the city; the summit views take in the city and the sea.', '街のすぐ横にある死火山の丘。頂上から街と海が一望できます。'],
      ['스코틀랜드 국립박물관', 'National Museum of Scotland', 'スコットランド国立博物館', '스코틀랜드 역사와 자연사, 세계 문화를 다루는 박물관으로, 옥상 테라스에서 성이 보입니다.', 'Scottish history, natural history and world cultures, with a rooftop terrace facing the castle.', 'スコットランドの歴史と自然史、世界の文化を扱う博物館で、屋上テラスから城が見えます。'],
    ],
    t: [
      ['8월에는 에든버러에서 여섯 개 축제가 열립니다. 여름 일정은 약 6개월 전부터 계획하라는 공식 안내가 있으니 행사와 숙소를 미리 살펴보세요.', 'Six festivals take place in Edinburgh in August. The official advice is to plan summer trips about six months ahead, so check events and accommodation early.', '8月のエディンバラでは6つのフェスティバルが開催されます。夏の旅行は約6か月前から計画するよう公式に案内されているため、催しや宿泊先を早めに確認しましょう。'],
      ['에든버러성은 여름철을 중심으로 표가 일찍 매진될 수 있습니다. 공식 안내에 따라 방문일을 정하면 온라인으로 미리 예매하세요.', 'Edinburgh Castle tickets can sell out well in advance, especially in summer. Once you have a date, book through the official site.', 'エディンバラ城の入場券は、特に夏は早く売り切れることがあります。訪問日が決まったら公式サイトで事前に予約しましょう。'],
      ['구시가지 명소를 한 번에 많이 넣기보다 로열 마일을 중심으로 성과 궁전, 주변 골목을 묶어 걷는 동선으로 계획하세요.', 'Rather than cramming in every Old Town sight, plan a walking route around the Royal Mile that groups the castle, palace and nearby closes.', '旧市街の名所を詰め込みすぎず、ロイヤル・マイルを軸に城や宮殿、周辺の路地をまとめて歩くルートを組みましょう。'],
      ['공항에서 시내: 에든버러 공항에서는 트램이나 에어링크 100번 버스로 시내 중심(프린세스 스트리트)까지 갑니다.', 'Airport to city: take the tram or the Airlink 100 bus from Edinburgh Airport to the city centre around Princes Street.', '空港から市内へ：エディンバラ空港からはトラムかエアリンク100番バスで中心部(プリンセス・ストリート)へ行けます。'],
    ],
  },
  cairo: {
    h: [
      ['기자 피라미드와 스핑크스', 'The Giza Pyramids and Sphinx', 'ギザのピラミッドとスフィンクス', '쿠푸왕의 대피라미드는 고대 세계 7대 불가사의 가운데 유일하게 남았습니다. 기자 고원에서 다른 피라미드와 스핑크스도 함께 볼 수 있습니다.', 'Khufu\'s Great Pyramid is the only surviving Wonder of the Ancient World. The plateau also holds other pyramids and the Sphinx.', 'クフ王の大ピラミッドは古代世界七不思議で唯一現存する建造物です。ギザ台地ではほかのピラミッドやスフィンクスも見られます。'],
      ['이집트 박물관(타흐리르)', 'Egyptian Museum (Tahrir)', 'エジプト考古学博物館（タハリール）', '타흐리르 광장의 박물관으로 고대 이집트 유물이 가득합니다.', 'The museum on Tahrir Square, packed with ancient Egyptian treasures.', 'タハリール広場の博物館で、古代エジプトの遺物が詰まっています。'],
      ['살라딘 성채', 'Citadel of Saladin', 'サラディンの城塞', '언덕 위 중세 요새로, 안의 무함마드 알리 모스크에서 시내가 내려다보입니다.', 'A medieval hilltop fortress whose Muhammad Ali Mosque overlooks the city.', '丘の上の中世の要塞で、中のムハンマド・アリー・モスクから市内が見渡せます。'],
      ['칸 엘 칼릴리 시장', 'Khan el-Khalili', 'ハーン・ハリーリ市場', '이슬람 구시가지의 오래된 시장 골목입니다.', 'The historic bazaar lanes of Islamic Cairo.', 'イスラーム地区にある歴史ある市場の路地です。'],
    ],
    t: [
      ['카이로 지하철은 도로 정체를 피할 수 있는 이동 수단입니다. 택시나 차량 호출 서비스를 이용할 때는 탑승 전 요금 방식과 승차 지점을 확인하세요.', 'Cairo\'s metro is an option for avoiding road traffic. For taxis or ride-hailing, check the fare method and pickup point before you ride.', 'カイロの地下鉄は道路の渋滞を避ける移動手段です。タクシーや配車サービスでは、乗車前に料金方式と乗車場所を確認しましょう。'],
      ['카이로의 유적·박물관은 외국인과 이집트인 요금을 구분하는 곳이 있습니다. 방문 전 각 시설의 공식 요금과 온라인 예매 안내를 확인하세요.', 'Some Cairo monuments and museums have separate foreign and Egyptian admission categories. Check each site\'s official rates and online booking instructions before visiting.', 'カイロの遺跡や博物館には、外国人とエジプト人で入場区分が異なる施設があります。訪問前に各施設の公式料金とオンライン予約案内を確認しましょう。'],
    ],
  },
  frankfurt: {
    h: [
      ['뢰머베르크', 'Römerberg', 'レーマーベルク', '계단식 박공지붕의 옛 시청(뢰머)과 목조 가옥이 둘러싼 구시가지 광장입니다.', 'The old-town square framed by the stepped gables of the Römer town hall and half-timbered houses.', '階段状の切妻屋根の旧市庁舎（レーマー）と木組みの家に囲まれた旧市街の広場です。'],
      ['프랑크푸르트 대성당', 'Frankfurt Cathedral', 'フランクフルト大聖堂', '신성 로마 제국 황제의 대관식이 열렸던 고딕 대성당으로, 탑에 오를 수 있습니다.', 'The Gothic cathedral where Holy Roman emperors were crowned; you can climb the tower.', '神聖ローマ皇帝の戴冠式が行われたゴシック大聖堂で、塔に登れます。'],
      ['마인강 변 박물관 거리', 'Museumsufer', '博物館通り（ムゼウムスウーファー）', '마인강 남쪽 강변에 미술관·박물관이 줄지어 있습니다.', 'A row of museums and galleries along the south bank of the Main.', 'マイン川の南岸に美術館や博物館が並んでいます。'],
      ['마인 타워', 'Main Tower', 'マインタワー', '고층 빌딩 전망대에서 「마인해튼」 스카이라인을 볼 수 있습니다.', 'A skyscraper viewing platform over the “Mainhattan” skyline.', '高層ビルの展望台から「マインハッタン」のスカイラインが見られます。'],
      ['슈테델 미술관', 'Städel Museum', 'シュテーデル美術館', '마인강변 박물관 거리의 대표 미술관으로, 중세부터 현대까지 유럽 회화를 소장합니다.', 'The flagship of the riverside Museumsufer, with European art from the Middle Ages to today.', 'マイン川沿いの博物館通りを代表する美術館で、中世から現代までのヨーロッパ絵画を所蔵します。'],
    ],
    t: [
      ['뢰머베르크·대성당·마인 타워는 가까이 모여 있어 하루 도심 동선으로 묶어 다니기 좋습니다.', 'Römerberg, the cathedral and the Main Tower are close together, so they make an easy one-day city-centre route.', 'レーマーベルク・大聖堂・マインタワーは近くに集まっているので、1日の市内ルートにまとめやすいです。'],
      ['사과 와인(아펠바인)이 이 지역 명물이라 작센하우젠 지구의 전통 주점에서 맛볼 수 있습니다.', 'Apple wine (Apfelwein) is the local drink, served in the traditional taverns of Sachsenhausen.', 'アップルワイン（アプフェルヴァイン）が名物で、ザクセンハウゼン地区の伝統的な酒場で味わえます。'],
      ['공항에서 시내: 프랑크푸르트 공항 제1터미널 지역역에서 S반 S8·S9를 타면 중앙역까지 15분 안팎입니다.', 'Airport to city: S-Bahn S8 and S9 from the regional station at Terminal 1 reach the Hauptbahnhof in about 15 minutes.', '空港から市内へ：フランクフルト空港第1ターミナルの近郊駅からSバーンS8・S9で中央駅まで15分ほどです。'],
      ['도시 간 이동: 프랑크푸르트 중앙역에서 ICE를 타면 쾰른 1시간 남짓, 뮌헨 3시간 남짓입니다.', 'Between cities: ICE trains from Frankfurt Hbf reach Cologne in just over an hour and Munich in just over three.', '都市間の移動：フランクフルト中央駅からICEでケルンまで1時間あまり、ミュンヘンまで3時間あまりです。'],
    ],
  },
  berlin: {
    h: [
      ['브란덴부르크 문', 'Brandenburg Gate', 'ブランデンブルク門', '분단과 통일의 상징인 신고전주의 문입니다.', 'The neoclassical gate that symbolises Germany’s division and reunification.', '分断と統一の象徴である新古典主義の門です。'],
      ['박물관 섬', 'Museum Island', '博物館島', '슈프레강의 섬에 다섯 개 박물관이 모인 유네스코 세계유산입니다.', 'A UNESCO-listed island in the Spree with five major museums.', 'シュプレー川の島に5つの博物館が集まる世界遺産です。'],
      ['이스트 사이드 갤러리', 'East Side Gallery', 'イーストサイドギャラリー', '남아 있는 베를린 장벽 위에 그려진 대형 야외 벽화 전시입니다.', 'Murals painted on the longest surviving stretch of the Berlin Wall.', '残されたベルリンの壁に描かれた大きな屋外壁画です。'],
      ['제국 의회 의사당 돔', 'Reichstag dome', '連邦議会議事堂のドーム', '유리 돔에 올라 시내를 볼 수 있으며 사전 등록이 필요합니다.', 'Climb the glass dome for city views; advance registration is required.', 'ガラスのドームに上って市内を眺められ、事前登録が必要です。'],
      ['베를린 장벽 기념관', 'Berlin Wall Memorial', 'ベルリンの壁記念館', '베르나우어 거리에 장벽과 감시 구역이 남아 있는 야외 기념관으로, 전망대에서 옛 경계선을 내려다볼 수 있습니다.', 'An open-air memorial on Bernauer Strasse preserving a stretch of wall and death strip, with a viewing tower.', 'ベルナウアー通りに壁と緩衝地帯が残る屋外記念館で、展望台からかつての境界を見下ろせます。'],
    ],
    t: [
      ['명소가 여러 구역에 흩어져 있으니 하루 동선을 구역별로 묶고, 교통권은 BVG 공식 안내에서 일정에 맞게 고르세요.', 'Sights are spread across several districts, so group each day by area and pick the right ticket from BVG’s official guide.', '名所が複数の地区に散らばっているので、1日の動線を地区ごとにまとめ、乗車券はBVGの公式案内で日程に合わせて選びましょう。'],
      ['대부분의 일반 상점은 일요일에 문을 닫으니 쇼핑은 토요일까지 마치는 편이 좋습니다.', 'Most regular shops close on Sundays, so plan shopping for Saturday or earlier.', 'ほとんどの一般の店は日曜日に閉まるので、買い物は土曜日までに済ませるのがおすすめです。'],
      ['공항에서 시내: 베를린 브란덴부르크 공항(BER)에서는 FEX 공항 급행열차나 지역 열차로 중앙역까지 갑니다. S반 S9·S45도 다닙니다.', 'Airport to city: from BER take the FEX Airport Express or regional trains to the Hauptbahnhof; S-Bahn lines S9 and S45 also serve the airport.', '空港から市内へ：ベルリン・ブランデンブルク空港(BER)からはFEX空港特急や地域列車で中央駅へ行けます。SバーンS9・S45もあります。'],
      ['도시 간 이동: 베를린 중앙역에서 기차를 타면 드레스덴 2시간 안팎, 뮌헨 4시간 안팎입니다.', 'Between cities: trains from Berlin Hbf reach Dresden in about two hours and Munich in about four.', '都市間の移動：ベルリン中央駅から列車でドレスデンまで約2時間、ミュンヘンまで約4時間です。'],
    ],
  },
  zurich: {
    h: [
      ['취리히 구시가지', 'Old Town (Altstadt)', '旧市街', '리마트강 양쪽에 좁은 골목과 교회가 모인 구시가지입니다.', 'Narrow lanes and churches on both banks of the Limmat.', 'リマト川の両岸に細い路地と教会が集まる旧市街です。'],
      ['그로스뮌스터', 'Grossmünster', 'グロスミュンスター', '두 개의 탑이 상징인 대성당으로, 탑에 오르면 시내와 호수가 보입니다.', 'The twin-towered church; climb a tower for views of the city and lake.', '2本の塔が象徴の大聖堂で、塔に登ると街と湖が見えます。'],
      ['반호프 거리', 'Bahnhofstrasse', 'バーンホフ通り', '중앙역에서 호수까지 이어지는 고급 쇼핑 거리입니다.', 'The upmarket shopping street from the main station to the lake.', '中央駅から湖まで続く高級ショッピング街です。'],
      ['취리히 호수', 'Lake Zurich', 'チューリッヒ湖', '호숫가 산책로와 유람선이 있습니다.', 'Lakeside promenades and boat trips.', '湖畔の遊歩道や遊覧船があります。'],
      ['스위스 국립박물관', 'Swiss National Museum', 'スイス国立博物館', '중앙역 바로 옆 성 모양 건물의 박물관으로, 스위스 역사와 문화를 다룹니다.', 'A castle-like museum right beside the main station, covering Swiss history and culture.', '中央駅のすぐ隣にある城のような建物の博物館で、スイスの歴史と文化を紹介します。'],
    ],
    t: [
      ['트램·버스는 목적지에 따라 필요한 ZVV 구역과 표가 달라지니 운영사 공식 안내에서 확인하세요.', 'The ZVV zone and ticket you need depend on your destination; check the operator’s official guide.', 'トラムやバスは目的地によって必要なZVVのゾーンと乗車券が変わるので、公式案内で確認しましょう。'],
      ['호숫가 산책과 유람선을 같은 날 묶어 즐기기 좋습니다. 유람선 운항 시즌과 시간은 미리 확인하세요.', 'Pair a lakeside walk with a boat trip on the same day; check the cruise season and times in advance.', '湖畔の散策と遊覧船を同じ日に組み合わせるのがおすすめです。遊覧船の運航時期と時間は事前に確認を。'],
      ['공항에서 시내: 취리히 공항 기차역에서 열차를 타면 취리히 중앙역까지 10여 분입니다. 스위스 다른 도시로 가는 열차도 공항에서 바로 탑니다.', 'Airport to city: trains from Zurich Airport station reach Zürich HB in just over 10 minutes, and many intercity trains depart straight from the airport.', '空港から市内へ：チューリッヒ空港駅から列車でチューリッヒ中央駅まで10分あまりです。スイス各地への列車も空港から直接出ています。'],
    ],
  },
  basel: {
    h: [
      ['바젤 대성당(뮌스터)', 'Basel Minster', 'バーゼル大聖堂', '붉은 사암과 색 기와 지붕의 대성당으로, 뒤편 테라스에서 라인강이 내려다보입니다.', 'A red-sandstone cathedral with coloured roof tiles; the terrace behind overlooks the Rhine.', '赤い砂岩と色瓦の屋根の大聖堂で、裏のテラスからライン川が見下ろせます。'],
      ['바젤 시청', 'Basel Town Hall', 'バーゼル市庁舎', '붉은 외벽과 벽화가 인상적인 시장 광장의 시청입니다.', 'The striking red town hall with painted walls on the Marktplatz.', '赤い外壁と壁画が印象的なマルクト広場の市庁舎です。'],
      ['바젤 시립 미술관', 'Kunstmuseum Basel', 'バーゼル市立美術館', '세계에서 오래된 공공 미술관 중 하나로 꼽히는 미술관입니다.', 'Counted among the world’s oldest public art collections.', '世界で最も古い公共美術館の一つとされる美術館です。'],
      ['바이엘러 재단 미술관', 'Fondation Beyeler', 'バイエラー財団美術館', '렌초 피아노가 설계한 건물에서 근현대 미술 컬렉션과 기획전을 볼 수 있는 미술관입니다.', 'A Renzo Piano–designed museum showing modern art and major exhibitions.', 'レンゾ・ピアノ設計の建物で近現代美術のコレクションと企画展が見られる美術館です。'],
      ['바젤 동물원', 'Basel Zoo', 'バーゼル動物園', '현지에서 \'졸리\'라 불리는 스위스에서 가장 오래된 동물원으로, 시내 중심에서 걸어갈 수 있습니다.', 'Switzerland\'s oldest zoo, known locally as \'Zolli\', within walking distance of the centre.', '地元で「ツォリ」と呼ばれるスイス最古の動物園で、中心部から歩いて行けます。'],
    ],
    t: [
      ['라인강을 건너는 작은 나룻배(페리)는 강물의 흐름만으로 움직이는 바젤의 명물입니다.', 'Basel’s little Rhine ferries cross the river powered only by the current.', 'ライン川を渡る小さな渡し船は川の流れだけで動くバーゼルの名物です。'],
      ['프랑스·독일과 맞닿은 국경 도시라 이웃 나라 마을까지 대중교통으로 갈 수 있지만, 노선과 운행은 바젤 관광청 안내에서 확인하세요.', 'A border city with France and Germany; public transport reaches neighbouring towns, but check routes and schedules on Basel Tourism’s guide.', 'フランス・ドイツと接する国境の街で隣国の町まで公共交通で行けますが、路線と運行はバーゼル観光局の案内で確認を。'],
      ['공항에서 시내: 바젤-뮐루즈 유로에어포트의 스위스 쪽 출구에서 50번 버스를 타면 바젤 SBB역까지 약 20분입니다.', 'Airport to city: bus 50 from the Swiss side of EuroAirport Basel-Mulhouse runs to Basel SBB station in about 20 minutes.', '空港から市内へ：バーゼル・ミュルーズ・ユーロエアポートのスイス側出口から50番バスでバーゼルSBB駅まで約20分です。'],
      ['도시 간 이동: 바젤 SBB역에서 기차를 타면 취리히 1시간 안팎, 인터라켄 2시간 안팎입니다. 바젤 SBB역에는 프랑스행 열차 승강장도 함께 있습니다.', 'Between cities: trains from Basel SBB reach Zurich in about an hour and Interlaken in about two; the station also has platforms for French trains.', '都市間の移動：バーゼルSBB駅から列車でチューリッヒまで約1時間、インターラーケンまで約2時間です。駅にはフランス行き列車のホームもあります。'],
    ],
  },
  riga: {
    h: [
      ['리가 구시가지', 'Riga Old Town', 'リガ旧市街', '유네스코 세계유산으로, 중세 골목과 교회 탑이 모여 있습니다.', 'A UNESCO-listed old town of medieval lanes and church spires.', '世界遺産で、中世の路地や教会の塔が集まっています。'],
      ['검은 머리 전당', 'House of the Blackheads', 'ブラックヘッドの会館', '시청 광장에 있는 화려한 길드 건물로, 리가 구시가지를 대표하는 역사 건축물입니다.', 'The ornate guild house on Town Hall Square, one of the Old Town’s landmark historic buildings.', '市庁舎広場にある豪華なギルド会館で、リガ旧市街を代表する歴史的建築です。'],
      ['아르누보 거리', 'Art Nouveau District', 'アール・ヌーヴォー地区', '알베르타 거리를 중심으로 장식이 화려한 아르누보 건물이 늘어서 있습니다.', 'Alberta iela and nearby streets are lined with ornate Art Nouveau facades.', 'アルベルタ通りを中心に装飾豊かなアール・ヌーヴォー建築が並びます。'],
      ['리가 중앙시장', 'Riga Central Market', 'リガ中央市場', '옛 비행선 격납고를 개조한 대형 시장입니다.', 'A huge market housed in former Zeppelin hangars.', '旧ツェッペリン格納庫を改装した大きな市場です。'],
      ['라트비아 국립미술관', 'Latvian National Museum of Art', 'ラトビア国立美術館', '에스플라나데 공원 옆 미술관으로, 라트비아와 발트 지역의 미술을 볼 수 있습니다.', 'Beside Esplanade Park, showing Latvian and Baltic art.', 'エスプラナーデ公園の隣にある美術館で、ラトビアとバルト地域の美術を展示します。'],
    ],
    t: [
      ['구시가지는 작아서 걸어서 둘러보기 좋습니다.', 'The Old Town is compact and easy to explore on foot.', '旧市街は小さく、歩いて回りやすいです。'],
      ['구시가지와 중앙시장은 가까워 한 번에 묶어 둘러볼 수 있습니다. 탈린·빌뉴스로 가는 버스는 운행일과 시간을 운영사에서 확인하세요.', 'The Old Town and Central Market are close enough to combine; check dates and times with the bus operator for trips to Tallinn or Vilnius.', '旧市街と中央市場は近いので一緒に回れます。タリンやヴィリニュスへのバスは運行日と時間を運行会社で確認を。'],
      ['공항에서 시내: 리가 공항에서 22번 버스를 타면 구시가지 근처까지 갑니다. 택시는 공항 공식 승차장에서 타세요.', 'Airport to city: bus 22 runs from Riga Airport to near the old town; take taxis from the official rank.', '空港から市内へ：リガ空港から22番バスで旧市街の近くまで行けます。タクシーは空港の公式乗り場から乗りましょう。'],
    ],
  },
  gdansk: {
    h: [
      ['드우기 타르크(긴 시장 거리)', 'Long Market (Długi Targ)', 'ドゥーギ・タルク（長い市場）', '알록달록한 상인 가옥과 넵튠 분수가 있는 구시가지 중심 거리입니다.', 'The old-town main street of colourful merchant houses and the Neptune Fountain.', 'カラフルな商人の家とネプチューンの噴水がある旧市街の目抜き通りです。'],
      ['모트와바강 변 크레인', 'Gdańsk Crane (Żuraw)', 'クレーン（ジュラフ）', '중세 항구 크레인으로, 강변 산책로의 상징입니다.', 'A medieval port crane, the symbol of the riverside promenade.', '中世の港のクレーンで、川沿いの遊歩道の象徴です。'],
      ['제2차 세계대전 박물관', 'Museum of the Second World War', '第二次世界大戦博物館', '제2차 세계대전의 역사를 폭넓게 보여주는 대형 박물관입니다.', 'A major museum presenting the history of the Second World War.', '第二次世界大戦の歴史を幅広く伝える大きな博物館です。'],
      ['유럽 연대 센터', 'European Solidarity Centre', 'ヨーロッパ連帯センター', '자유노조 \'연대\'가 탄생한 그단스크 조선소 옆에 있는 박물관으로, 폴란드 민주화 과정을 전시합니다.', 'A museum beside the Gdańsk Shipyard telling the story of Solidarity and Poland\'s road to democracy.', '「連帯」が生まれたグダニスク造船所の隣にある博物館で、ポーランド民主化の歩みを展示します。'],
      ['말보르크성', 'Malbork Castle', 'マルボルク城', '튜턴 기사단이 세운 세계 최대 규모의 벽돌 성으로, 유네스코 세계유산입니다. 기차로 당일 왕복이 가능합니다.', 'The Teutonic Order\'s vast brick castle, a UNESCO site and an easy day trip by train.', 'ドイツ騎士団が築いた世界最大級のれんがの城で、世界遺産です。列車で日帰りできます。'],
    ],
    t: [
      ['발트해 연안이라 날씨가 날마다 달라지니, 출발 직전에 일기예보를 확인하세요.', 'Weather on the Baltic coast changes day to day, so check the forecast just before you go.', 'バルト海沿岸は日によって天気が変わるので、出発直前に天気予報を確認しましょう。'],
      ['소폿·그디니아와 함께 「트리시티」로 불리며 근교 열차로 오갈 수 있습니다. 운행 정보는 지역 열차 운영사에서 확인하세요.', 'With Sopot and Gdynia it forms the “Tricity”, linked by local trains; check the regional operator’s timetable.', 'ソポト・グディニャとともに「三連都市」と呼ばれ、近郊列車で行き来できます。運行情報は地域鉄道会社で確認を。'],
      ['공항에서 시내: 그단스크 공항역에서 PKM 열차를 타면 그단스크 브제슈치역에 닿고, 여기서 근교열차로 구시가지 쪽 중앙역까지 이어집니다.', 'Airport to city: PKM trains from Gdańsk Airport station run to Gdańsk Wrzeszcz, where suburban trains continue to Gdańsk Główny by the old town.', '空港から市内へ：グダニスク空港駅からPKM列車でグダニスク・ヴジェシュチ駅へ行き、近郊列車で旧市街近くの中央駅へ向かえます。'],
    ],
  },
  bruges: {
    h: [
      ['마르크트 광장과 종탑', 'Markt and Belfry', 'マルクト広場と鐘楼', '중세 종탑이 서 있는 중앙 광장으로, 종탑에 오르면 시내가 내려다보입니다.', 'The main square under the medieval Belfry, which you can climb for views.', '中世の鐘楼が立つ中央広場で、鐘楼に登ると街を見渡せます。'],
      ['운하 보트', 'Canal boat tour', '運河ボート', '운하를 따라 도는 보트에서 중세 도시 풍경을 봅니다.', 'See the medieval city from a canal boat.', '運河を巡るボートから中世の街並みを眺めます。'],
      ['성혈 성당', 'Basilica of the Holy Blood', '聖血礼拝堂', '부르크 광장에 있는 예배당으로, 성혈 유물과 관련된 전승으로 알려져 있습니다.', 'A chapel on Burg Square associated with the relic of the Holy Blood.', 'ブルク広場にある礼拝堂で、聖血の聖遺物にまつわる伝承で知られます。'],
      ['흐루닝어 미술관', 'Groeningemuseum', 'グルーニング美術館', '얀 반 에이크 등 플랑드르 초기 회화를 대표하는 작품을 모은 브뤼헤 시립 미술관입니다.', 'Bruges\' city art museum, home to Flemish Primitives such as Jan van Eyck.', 'ヤン・ファン・エイクら初期フランドル絵画の名品を集めたブルッヘ市立美術館です。'],
      ['베긴회 수도원(베햐인호프)', 'Beguinage (Begijnhof)', 'ベギン会修道院', '흰 집들과 나무가 둘러싼 조용한 안뜰로, 유네스코 세계유산 플랑드르 베긴회 수도원 중 하나입니다.', 'A quiet courtyard of whitewashed houses, part of the UNESCO-listed Flemish Béguinages.', '白い家並みと木々に囲まれた静かな中庭で、世界遺産のフランドル地方のベギン会修道院群の一つです。'],
    ],
    t: [
      ['브뤼셀에서 기차로 당일치기가 가능하지만, 저녁의 조용한 운하를 보려면 1박을 추천합니다. 소요 시간은 SNCB 시간표에서 확인하세요.', 'Bruges is an easy train day trip from Brussels, but stay a night to see the quiet canals in the evening; check journey times on the SNCB timetable.', 'ブリュッセルから電車で日帰りもできますが、夜の静かな運河を見るなら1泊がおすすめです。所要時間はSNCBの時刻表で確認を。'],
      ['구시가지는 걸어서 충분히 다닐 수 있습니다.', 'The historic centre is easily walkable.', '旧市街は歩いて十分に回れます。'],
      ['공항에서 시내: 브뤼헤에는 큰 공항이 없어 보통 브뤼셀 공항에서 기차를 탑니다. 브뤼셀에서 갈아타면 1시간 반 안팎입니다.', 'Airport to city: Bruges has no major airport, so most travellers take the train from Brussels Airport, changing in Brussels — about 1.5 hours.', '空港から市内へ：ブルッヘには大きな空港がないため、ブリュッセル空港から列車で向かうのが一般的です。ブリュッセルで乗り換えて1時間半ほどです。'],
    ],
  },
  harbin: {
    h: [
      ['빙설대세계', 'Harbin Ice and Snow World', '氷雪大世界', '쑹화강의 얼음으로 지은 거대한 성과 미끄럼틀이 밤마다 조명으로 빛나는 겨울 테마파크입니다.', 'A winter theme park of giant castles and slides carved from Songhua River ice, lit up every night.', '松花江の氷で造った巨大な城や滑り台が毎晩ライトアップされる冬のテーマパークです。'],
      ['중앙대가', 'Central Street', '中央大街', '20세기 초 바로크·비잔틴 양식 건물이 늘어선 약 1.4km의 돌길 보행자 거리입니다.', 'A 1.4 km cobbled pedestrian street lined with early-1900s Baroque and Byzantine buildings.', '20世紀初めのバロック・ビザンチン様式の建物が並ぶ約1.4kmの石畳の歩行者天国です。'],
      ['성 소피아 성당', 'St Sophia Cathedral', '聖ソフィア大聖堂', '1907년에 지은 비잔틴 양식의 옛 러시아 정교회 성당으로, 하얼빈의 상징입니다.', 'A Byzantine-style former Russian Orthodox church built in 1907, the city’s landmark.', '1907年に建てられたビザンチン様式の旧ロシア正教会で、ハルビンの象徴です。'],
      ['태양도 눈 조각 박람회', 'Sun Island Snow Sculpture Expo', '太陽島雪像博覧会', '1988년부터 해마다 열리는 눈 조각 전시로, 낮에 보기 좋습니다.', 'An annual snow-sculpture show since 1988, best seen by day.', '1988年から毎年開かれる雪像の展示で、昼間の見学がおすすめです。'],
    ],
    t: [
      ['빙설대세계는 해 질 무렵부터 조명이 켜지므로 오후 늦게 들어가 낮과 밤 풍경을 함께 보는 일정이 좋습니다.', 'The Ice and Snow World lights up at dusk, so arrive in late afternoon to see it by day and night.', '氷雪大世界は日没ごろから点灯するので、午後遅めに入って昼と夜の景色を両方見るのがおすすめです。'],
      ['혹한에서는 휴대폰 배터리가 빨리 닳으니 보조 배터리를 안주머니에 넣어 두세요. 결제는 알리페이·위챗페이를 준비하면 편합니다.', 'Phone batteries drain fast in the deep cold, so keep a power bank in an inner pocket; Alipay or WeChat Pay makes paying easy.', '厳寒ではスマートフォンの電池が早く減るので、モバイルバッテリーを内ポケットに入れておきましょう。支払いはアリペイ・ウィーチャットペイがあると便利です。'],
    ],
  },
  lyon: {
    h: [
      ['푸르비에르 대성당', 'Basilica of Notre-Dame de Fourvière', 'フルヴィエールのノートルダム大聖堂', '언덕 위의 대성당으로, 푸니쿨라를 타고 올라가면 리옹 시내가 한눈에 보입니다.', 'The hilltop basilica; ride the funicular up for a view over the whole city.', '丘の上の大聖堂で、ケーブルカーで上ると市内が一望できます。'],
      ['비유 리옹과 트라불', 'Vieux Lyon and the traboules', 'ヴュー・リヨンとトラブール', '유럽에서 손꼽히는 르네상스 구시가지로, 건물 사이를 잇는 비밀 통로(트라불) 일부를 걸어 볼 수 있습니다.', 'One of Europe’s great Renaissance quarters, with some of its hidden passageways (traboules) open to walk.', 'ヨーロッパ有数のルネサンス期の旧市街で、建物の間を抜ける抜け道（トラブール）の一部を歩けます。'],
      ['레 알 폴 보퀴즈', 'Les Halles de Lyon Paul Bocuse', 'レ・アール・ド・リヨン ポール・ボキューズ', '치즈·샤퀴테리·빵 가게가 모인 실내 시장으로, 리옹 미식을 맛보기 좋습니다.', 'An indoor food market of cheesemongers, butchers and bakers — a taste of Lyon’s cuisine.', 'チーズやシャルキュトリー、パンの店が集まる屋内市場で、リヨンの美食を味わえます。'],
      ['콩플뤼앙스 박물관', 'Musée des Confluences', 'コンフリュアンス博物館', '론강과 손강이 만나는 곳의 해체주의 건축 박물관으로, 자연사와 인류 문화를 함께 다룹니다.', 'A deconstructivist museum where the Rhône and Saône meet, covering natural history and human cultures.', 'ローヌ川とソーヌ川の合流点に立つ脱構築主義建築の博物館で、自然史と人類の文化を扱います。'],
    ],
    t: [
      ['부숑(bouchon)은 리옹 전통 요리를 내는 소박한 식당입니다. 인기 있는 곳은 저녁 예약을 해 두세요.', 'Bouchons are casual restaurants serving traditional Lyon dishes; book popular ones for dinner.', 'ブションはリヨンの伝統料理を出す気取らない食堂です。人気店は夕食を予約しておきましょう。'],
      ['빛의 축제 기간에는 중심가 일부가 보행자 전용이 되고 대중교통이 붐비니 걸어서 다닐 계획을 세우세요.', 'During the Festival of Lights parts of the centre become pedestrian-only and transit is packed, so plan to walk.', '光の祭典の期間は中心部の一部が歩行者専用になり公共交通も混むので、歩いて回る計画を立てましょう。'],
      ['공항에서 시내: 리옹 생텍쥐페리 공항에서 론익스프레스 트램을 타면 파르디외역까지 30분이 채 안 걸립니다.', 'Airport to city: the Rhônexpress tram runs from Lyon Saint-Exupéry Airport to Part-Dieu station in under 30 minutes.', '空港から市内へ：リヨン・サンテグジュペリ空港からローヌエクスプレスのトラムでパールデュー駅まで30分かかりません。'],
    ],
  },
  'quebec-city': {
    h: [
      ['샤토 프롱트낙과 뒤프랭 테라스', 'Château Frontenac and Dufferin Terrace', 'シャトー・フロンテナックとデュフラン・テラス', '구시가지를 내려다보는 성 모양 호텔과, 겨울이면 썰매장이 들어서는 강변 산책로입니다.', 'The castle-like hotel above the old town and the riverside boardwalk that gets a toboggan run in winter.', '旧市街を見下ろす城のようなホテルと、冬にはそり滑りができる川沿いの遊歩道です。'],
      ['쁘띠 샹플랭 거리', 'Rue du Petit-Champlain', 'プチ・シャンプラン通り', '북미에서 손꼽히게 오래된 상점가로, 겨울에는 눈 덮인 거리를 조명 트리가 밝힙니다.', 'One of North America’s oldest shopping streets, lit with illuminated trees in the snow.', '北米有数の古い商店街で、冬は雪の通りをライトアップされたツリーが照らします。'],
      ['몽모랑시 폭포', 'Montmorency Falls', 'モンモランシー滝', '나이아가라보다 높은 폭포로, 겨울에는 얼어붙은 절벽과 얼음 언덕을 볼 수 있습니다.', 'Falls taller than Niagara; in winter the cliffs freeze over into ice walls.', 'ナイアガラより高い滝で、冬は凍りついた崖や氷の丘が見られます。'],
      ['퀘벡 국립미술관', 'Musée national des beaux-arts du Québec', 'ケベック国立美術館', '아브라함 평원 공원 안에 있는 미술관으로, 퀘벡 미술과 이누이트 미술 컬렉션이 있습니다.', 'Inside the Plains of Abraham park, with Quebec and Inuit art collections.', 'アブラハム平原公園内にある美術館で、ケベック美術とイヌイット美術のコレクションがあります。'],
    ],
    t: [
      ['프랑스어가 공용어지만 관광지에서는 영어도 잘 통합니다. 인사로 「봉주르」를 건네면 좋아합니다.', 'French is the official language, but English works fine in tourist areas; a “bonjour” goes down well.', 'フランス語が公用語ですが、観光地では英語もよく通じます。「ボンジュール」と挨拶すると喜ばれます。'],
      ['구시가지는 언덕과 계단이 많아, 아래 동네와 위 동네 사이는 푸니쿨라를 타면 편합니다.', 'The old town is hilly; the funicular links the Lower and Upper Town.', '旧市街は坂や階段が多く、下町と上町の間はケーブルカーが便利です。'],
    ],
  },
  porto: {
    h: [
      ['리베이라와 동 루이스 1세 다리', 'Ribeira and the Dom Luís I Bridge', 'リベイラとドン・ルイス1世橋', '강변의 알록달록한 집들과 2층 철교가 유네스코 세계유산 구역입니다. 다리 위층을 걸어 건너면 강 건너 전망이 좋습니다.', 'Colourful riverside houses and the double-decker iron bridge form the UNESCO-listed core; walk the upper deck for views.', '川沿いのカラフルな家並みと2層の鉄橋が世界遺産の中心です。橋の上層を歩いて渡ると眺めが抜群です。'],
      ['빌라 노바 드 가이아 와인 저장고', 'Port wine cellars, Vila Nova de Gaia', 'ヴィラ・ノヴァ・デ・ガイアのワイン貯蔵庫', '강 건너편에 포트와인 회사들의 저장고가 모여 있어 견학과 시음을 할 수 있습니다.', 'Across the river, port houses open their lodges for tours and tastings.', '対岸にポートワイン会社の貯蔵庫が集まり、見学や試飲ができます。'],
      ['렐루 서점', 'Livraria Lello', 'レロ書店', '붉은 곡선 계단으로 유명한 1906년 개업 서점입니다. 입장권을 미리 예약하면 줄을 덜 섭니다.', 'A bookshop from 1906 famous for its curving red staircase; book entry ahead to cut the queue.', '赤い曲線の階段で有名な1906年創業の書店です。入場券を予約すると並ぶ時間が減ります。'],
    ],
    t: [
      ['구시가지는 가파른 언덕이 많아 편한 신발이 필수입니다. 강변과 윗동네 사이는 푸니쿨라(기다 푸니쿨라)를 타면 편합니다.', 'The old town is steep, so wear comfortable shoes; the Guindais funicular links the river to the upper town.', '旧市街は急な坂が多いので歩きやすい靴が必須です。川沿いと上の街の間はギンダイスのケーブルカーが便利です。'],
      ['공항에서 시내: 포르투 공항에서 메트로 E선(보라색)을 타면 시내 트린다드역까지 30분 안팎입니다.', 'Airport to city: Metro line E (violet) runs from Porto Airport to Trindade in the centre in about 30 minutes.', '空港から市内へ：ポルト空港から地下鉄E線（紫）で中心部のトリンダーデ駅まで30分ほどです。'],
    ],
  },
  seville: {
    h: [
      ['세비야 대성당과 히랄다 탑', 'Seville Cathedral and the Giralda', 'セビリア大聖堂とヒラルダの塔', '세계에서 손꼽히게 큰 고딕 성당으로, 경사로를 따라 히랄다 탑에 오르면 시내가 내려다보입니다.', 'One of the largest Gothic cathedrals in the world; ramps lead up the Giralda tower for city views.', '世界有数の大きさのゴシック大聖堂で、スロープを上ってヒラルダの塔から市内を見渡せます。'],
      ['세비야 알카사르', 'Real Alcázar of Seville', 'セビリアのアルカサル', '이슬람 양식이 어우러진 왕궁과 넓은 정원으로, 시간 지정 입장권을 미리 사 두는 것이 좋습니다.', 'A royal palace in Mudéjar style with vast gardens; buy timed tickets in advance.', 'イスラム様式が融合した王宮と広い庭園で、時間指定券を事前に買っておくのがおすすめです。'],
      ['스페인 광장', 'Plaza de España', 'スペイン広場', '1929년 박람회 때 지은 반원형 광장으로, 스페인 각 지방을 그린 타일 벤치와 운하가 있습니다. 무료로 들어갈 수 있습니다.', 'The semicircular plaza built for the 1929 exposition, with a canal and tiled benches for each Spanish province; free to enter.', '1929年の博覧会のために造られた半円形の広場で、運河とスペイン各地方を描いたタイルのベンチがあります。入場無料です。'],
    ],
    t: [
      ['플라멩코는 타블라오(전문 공연장)나 플라멩코 박물관 공연으로 보는 것이 일반적입니다. 인기 공연은 예약하세요.', 'Flamenco is usually seen at a tablao or the flamenco museum’s shows; book popular ones ahead.', 'フラメンコはタブラオ（専門の劇場）やフラメンコ博物館の公演で見るのが一般的です。人気の公演は予約を。'],
      ['공항에서 시내: 세비야 공항에서 EA 공항버스를 타면 산타후스타역을 거쳐 시내(플라사 데 아르마스)까지 35분 안팎입니다.', 'Airport to city: the EA airport bus runs via Santa Justa station to Plaza de Armas in about 35 minutes.', '空港から市内へ：セビリア空港からEA空港バスでサンタ・フスタ駅を経て市内（プラサ・デ・アルマス）まで35分ほどです。'],
    ],
  },
  milan: {
    h: [
      ['밀라노 대성당(두오모)', 'Milan Cathedral (Duomo)', 'ミラノ大聖堂（ドゥオーモ）', '수많은 첨탑이 솟은 고딕 대성당으로, 계단이나 엘리베이터로 지붕 테라스에 올라가 첨탑 사이를 걸을 수 있습니다.', 'A Gothic cathedral bristling with spires; climb or take the lift to walk among them on the roof terraces.', '無数の尖塔がそびえるゴシック大聖堂で、階段かエレベーターで屋上テラスに上り、尖塔の間を歩けます。'],
      ['최후의 만찬(산타 마리아 델레 그라치에)', 'The Last Supper (Santa Maria delle Grazie)', '最後の晩餐（サンタ・マリア・デッレ・グラツィエ）', '레오나르도 다빈치의 벽화로, 소수 인원만 짧게 들어가 볼 수 있어 입장권이 금방 매진됩니다. 판매 시작일에 맞춰 예약하세요.', 'Leonardo’s mural, seen in small groups for a short slot; tickets sell out fast, so book when sales open.', 'レオナルド・ダ・ヴィンチの壁画で、少人数で短時間しか入れず入場券はすぐ売り切れます。販売開始に合わせて予約を。'],
      ['스포르체스코성', 'Sforza Castle', 'スフォルツェスコ城', '르네상스 시대 성 안에 여러 박물관이 있으며, 미켈란젤로의 마지막 조각 「론다니니의 피에타」를 볼 수 있습니다.', 'A Renaissance castle housing several museums, including Michelangelo’s last sculpture, the Rondanini Pietà.', 'ルネサンス期の城の中に複数の博物館があり、ミケランジェロ最後の彫刻「ロンダニーニのピエタ」が見られます。'],
      ['비토리오 에마누엘레 2세 갤러리아', 'Galleria Vittorio Emanuele II', 'ヴィットリオ・エマヌエーレ2世のガッレリア', '두오모 광장과 스칼라 극장을 잇는 유리 지붕 아케이드로, 바닥의 황소 모자이크가 유명합니다.', 'The glass-roofed arcade linking the Duomo square and La Scala, known for its bull mosaic.', 'ドゥオーモ広場とスカラ座を結ぶガラス屋根のアーケードで、床の雄牛のモザイクが有名です。'],
    ],
    t: [
      ['저녁 식사 전 아페리티보 문화가 있어, 바에서 음료를 시키면 간단한 안주가 함께 나오는 곳이 많습니다.', 'Milan loves aperitivo: many bars serve snacks with your pre-dinner drink.', '夕食前のアペリティーヴォ文化があり、バーで飲み物を頼むと軽いおつまみが付く店が多いです。'],
      ['공항에서 시내: 말펜사 공항에서 말펜사 익스프레스를 타면 카도르나역이나 중앙역까지 50분 안팎입니다. 리나테 공항은 지하철 M4선으로 시내와 연결됩니다.', 'Airport to city: the Malpensa Express runs to Cadorna or Centrale in about 50 minutes; Linate Airport is on Metro line M4.', '空港から市内へ：マルペンサ空港からマルペンサ・エクスプレスでカドルナ駅か中央駅まで50分ほどです。リナーテ空港は地下鉄M4線で市内とつながっています。'],
    ],
  },
  lucerne: {
    h: [
      ['카펠교', 'Chapel Bridge (Kapellbrücke)', 'カペル橋', '지붕 덮인 나무 다리로, 천장에 그려진 판화와 물 위의 팔각 급수탑이 루체른의 상징입니다.', 'The covered wooden bridge with painted roof panels and its octagonal water tower — the symbol of Lucerne.', '屋根付きの木造橋で、天井の板絵と水上の八角形の給水塔がルツェルンの象徴です。'],
      ['필라투스산', 'Mount Pilatus', 'ピラトゥス山', '세계에서 가장 가파른 톱니바퀴 열차(여름)와 곤돌라로 오르는 산으로, 정상에서 알프스와 호수가 내려다보입니다.', 'Climbed by the world’s steepest cogwheel railway (summer) and by gondola, with views over the Alps and the lake.', '世界一急勾配の登山鉄道（夏）とゴンドラで登る山で、山頂からアルプスと湖を見渡せます。'],
      ['스위스 교통박물관', 'Swiss Museum of Transport', 'スイス交通博物館', '기차·배·비행기·우주까지 스위스 교통의 역사를 직접 만져 보며 보는 대형 박물관입니다.', 'A large hands-on museum of Swiss transport, from trains and boats to planes and space.', '鉄道・船・飛行機から宇宙までスイスの交通史を体験しながら見られる大型博物館です。'],
      ['리기산', 'Mount Rigi', 'リギ山', '\'산들의 여왕\'으로 불리는 산으로, 호수 유람선과 유럽 최초의 산악 열차를 이어 타고 오를 수 있습니다.', 'The “Queen of the Mountains”, reached by lake steamer and Europe’s first mountain railway.', '「山の女王」と呼ばれる山で、湖の遊覧船とヨーロッパ最初の登山鉄道を乗り継いで登れます。'],
    ],
    t: [
      ['스위스 트래블 패스가 있으면 호수 유람선과 일부 산악 교통이 포함되거나 할인되니 조건을 확인하세요.', 'A Swiss Travel Pass covers lake boats and gives discounts on some mountain transport; check the terms.', 'スイストラベルパスがあれば湖の遊覧船が含まれ、一部の山岳交通は割引になるので条件を確認しましょう。'],
      ['가는 법: 취리히 중앙역에서 기차로 50분 안팎, 취리히 공항역에서 1시간 남짓입니다. 인터라켄과는 골든패스 노선으로 2시간 안팎입니다.', 'Getting there: trains take about 50 minutes from Zürich HB and just over an hour from Zurich Airport; Interlaken is about two hours on the GoldenPass line.', '行き方：チューリッヒ中央駅から列車で50分ほど、チューリッヒ空港駅から1時間あまりです。インターラーケンへはゴールデンパス路線で2時間ほどです。'],
    ],
  },
  granada: {
    h: [
      ['알람브라와 헤네랄리페', 'Alhambra and Generalife', 'アルハンブラ宮殿とヘネラリーフェ', '나스르 왕조 궁전의 섬세한 장식과 정원을 볼 수 있는 그라나다의 상징입니다. 나스르 궁전은 입장 시간이 지정됩니다.', 'Granada’s icon, with the intricate Nasrid Palaces and gardens; the Nasrid Palaces have a timed entry slot.', 'ナスル朝宮殿の繊細な装飾と庭園が見られるグラナダの象徴です。ナスル朝宮殿は入場時間が指定されます。'],
      ['알바이신과 산 니콜라스 전망대', 'Albaicín and the Mirador de San Nicolás', 'アルバイシンとサン・ニコラス展望台', '옛 무어인 마을의 골목을 올라가면 알람브라와 시에라 네바다가 한눈에 보이는 전망대가 나옵니다. 해 질 녘이 인기입니다.', 'Climb the old Moorish lanes to the viewpoint facing the Alhambra and Sierra Nevada, most popular at sunset.', '旧ムーア人街の路地を上ると、アルハンブラとシエラ・ネバダを望む展望台に着きます。夕暮れ時が人気です。'],
      ['왕실 예배당', 'Royal Chapel of Granada', 'グラナダ王室礼拝堂', '이사벨 여왕과 페르난도 왕이 잠든 예배당으로, 대성당 바로 옆에 있습니다.', 'Resting place of Queen Isabella and King Ferdinand, right beside the cathedral.', 'イサベル女王とフェルナンド王が眠る礼拝堂で、大聖堂のすぐ隣にあります。'],
      ['과학 공원', 'Parque de las Ciencias', '科学公園', '체험형 전시와 천문관, 열대 동물관 바이오돔이 있는 대형 과학관입니다.', 'A large hands-on science museum with a planetarium and the BioDomo tropical zoo.', '体験型展示やプラネタリウム、熱帯の動物館バイオドームがある大型科学館です。'],
    ],
    t: [
      ['그라나다 바에서는 대부분 음료를 시키면 타파스가 무료로 함께 나옵니다. 한 곳에 오래 있기보다 여러 바를 옮겨 다니는 것이 현지식입니다.', 'In most Granada bars a free tapa comes with each drink; locals hop between bars rather than staying in one.', 'グラナダのバーでは飲み物を頼むとたいていタパスが無料で付きます。一軒に長居せず何軒もはしごするのが地元流です。'],
      ['공항에서 시내: 그라나다 공항에서는 항공편 도착에 맞춰 출발하는 ALSA 공항버스로 시내(그란비아 등)까지 45분 안팎입니다.', 'Airport to city: ALSA airport buses timed to flight arrivals reach the centre (Gran Vía and others) in about 45 minutes.', '空港から市内へ：グラナダ空港からは到着便に合わせて出るALSAの空港バスで中心部（グラン・ビアなど）まで45分ほどです。'],
    ],
  },
  valencia: {
    h: [
      ['예술과학도시', 'City of Arts and Sciences', '芸術科学都市', '칼라트라바가 설계한 미래적인 건물들에 유럽 최대급 수족관 오세아노그라픽과 과학관이 모여 있습니다.', 'Calatrava’s futuristic complex, home to the Oceanogràfic aquarium and a science museum.', 'カラトラバ設計の未来的な建物群に、ヨーロッパ最大級の水族館オセアノグラフィックや科学館が集まっています。'],
      ['실크 거래소(라 론하)', 'Silk Exchange (La Lonja de la Seda)', 'ラ・ロンハ（絹の取引所）', '나선형 기둥이 늘어선 후기 고딕 양식 상업 건물로, 유네스코 세계유산입니다. 일요일·공휴일은 무료입니다.', 'A late-Gothic merchants’ hall of twisted columns, UNESCO-listed; free on Sundays and holidays.', 'ねじれた柱が並ぶ後期ゴシック様式の商業建築で、世界遺産です。日曜・祝日は無料です。'],
      ['발렌시아 대성당', 'Valencia Cathedral', 'バレンシア大聖堂', '성배로 전해지는 \'성스러운 잔\'을 모신 대성당으로, 미겔레테 종탑에 오르면 구시가지가 내려다보입니다.', 'Home to a chalice venerated as the Holy Grail; climb the Micalet tower for old-town views.', '聖杯と伝わる「聖なる杯」を祀る大聖堂で、ミゲレテの鐘楼に上ると旧市街を見渡せます。'],
      ['알부페라 자연공원', 'Albufera Natural Park', 'アルブフェラ自然公園', '파에야용 쌀을 키우는 논과 석호가 펼쳐진 곳으로, 배를 타고 보는 일몰이 유명합니다.', 'Rice paddies and a lagoon where paella rice grows, famous for sunset boat rides.', 'パエリア用の米を育てる田んぼと潟湖が広がり、舟から見る夕日が有名です。'],
    ],
    t: [
      ['진짜 발렌시아 파에야는 닭·토끼·콩을 넣고 점심에 먹는 음식입니다. 해산물 파에야와는 다른 요리입니다.', 'Authentic paella valenciana uses chicken, rabbit and beans and is eaten at lunch; seafood paella is a different dish.', '本場のパエリア・バレンシアーナは鶏・ウサギ・豆を使い、昼に食べる料理です。シーフードパエリアとは別物です。'],
      ['공항에서 시내: 발렌시아 공항역에서 메트로 3·5호선을 타면 갈아타지 않고 시내 중심까지 갑니다. 공항 구간은 요금이 더 붙습니다.', 'Airport to city: Metro lines 3 and 5 run from the airport station straight into the centre; the airport zone costs extra.', '空港から市内へ：バレンシア空港駅から地下鉄3・5号線で乗り換えなしに中心部へ行けます。空港区間は運賃が加算されます。'],
    ],
  },
  bordeaux: {
    h: [
      ['부르스 광장과 물의 거울', 'Place de la Bourse and the Water Mirror', 'ブルス広場と水の鏡', '18세기 광장 앞 얕은 물판에 건물이 비치는 보르도의 대표 풍경으로, 저녁 조명이 특히 아름답습니다.', 'Bordeaux’s signature view: the 18th-century square reflected in a shallow water mirror, especially lovely when lit at night.', '18世紀の広場が浅い水盤に映るボルドーを代表する風景で、夜のライトアップが特に美しいです。'],
      ['시테 뒤 뱅', 'La Cité du Vin', 'シテ・デュ・ヴァン', '세계 와인 문화를 체험하는 전시관으로, 꼭대기 전망대에서 와인 한 잔이 입장권에 포함됩니다.', 'An interactive museum of world wine culture; the ticket includes a glass at the rooftop belvedere.', '世界のワイン文化を体験できる施設で、入場券に最上階展望台でのワイン1杯が含まれます。'],
      ['페이베를랑 탑', 'Pey-Berland Tower', 'ペイ・ベルラン塔', '생탕드레 대성당 옆 종탑으로, 계단을 올라가면 보르도 시내가 내려다보입니다. 시간 지정 예약제입니다.', 'The cathedral’s bell tower; climb the stairs for city views, with timed booking.', 'サンタンドレ大聖堂の鐘楼で、階段を上るとボルドー市内を見渡せます。時間指定の予約制です。'],
      ['아키텐 박물관', 'Musée d’Aquitaine', 'アキテーヌ博物館', '선사 시대부터 근대 항구 도시까지 보르도와 남서부 프랑스의 역사를 다룹니다.', 'Bordeaux and south-west France from prehistory to the port city’s modern era.', '先史時代から近代の港町までボルドーと南西フランスの歴史を紹介します。'],
    ],
    t: [
      ['구시가지와 강변 명소는 트램으로 이어져 1시간 동안 갈아탈 수 있는 1회권 하나로 대부분 다닐 수 있습니다.', 'Trams link the old town and riverside sights, and a one-hour single ticket covers transfers.', '旧市街と川沿いの名所はトラムで結ばれ、1時間乗り換え自由の1回券でほとんど回れます。'],
      ['공항에서 시내: 보르도 메리냐크 공항은 트램 A선 공항 정류장에서 시내로 갈 수 있고, 일반 1회권으로 탑니다.', 'Airport to city: tram line A runs from the Aéroport stop at Bordeaux-Mérignac into town on a standard single ticket.', '空港から市内へ：ボルドー・メリニャック空港のトラムA線「空港」停留所から市内へ行け、通常の1回券で乗れます。'],
    ],
  },
  hamburg: {
    h: [
      ['엘프필하모니 플라자', 'Elbphilharmonie Plaza', 'エルプフィルハーモニーのプラザ', '콘서트홀 중간층의 둘레 전망대로, 항구와 시내가 360도로 보입니다. 2026년 10월부터 유료(시간 지정권)입니다.', 'The wraparound viewing deck halfway up the concert hall, with 360° harbour views; ticketed since October 2026.', 'コンサートホール中層の周回展望デッキで、港と市内を360度見渡せます。2026年10月から有料（時間指定券）です。'],
      ['슈파이허슈타트', 'Speicherstadt', 'シュパイヒャーシュタット', '운하를 따라 붉은 벽돌 창고가 늘어선 유네스코 세계유산 지구로, 저녁 조명이 특히 아름답습니다.', 'UNESCO-listed red-brick warehouses along canals, especially beautiful when lit at night.', '運河沿いに赤れんがの倉庫が並ぶ世界遺産の地区で、夜のライトアップが特に美しいです。'],
      ['미니어처 원더랜드', 'Miniatur Wunderland', 'ミニチュア・ワンダーランド', '슈파이허슈타트 창고 안에 만든 세계 최대 규모의 철도 모형 전시장으로, 공항 모형에서 비행기가 뜨고 내립니다.', 'The world’s largest model railway inside a Speicherstadt warehouse, where even model planes take off.', 'シュパイヒャーシュタットの倉庫内にある世界最大級の鉄道模型展示で、空港模型では飛行機が離着陸します。'],
      ['함부르크 미술관(쿤스트할레)', 'Hamburger Kunsthalle', 'ハンブルク美術館', '중앙역 옆의 대형 미술관으로, 중세부터 현대까지 컬렉션을 갖추고 있습니다. 18세 미만은 무료입니다.', 'A major art museum beside the main station spanning the Middle Ages to today; free for under-18s.', '中央駅の隣にある大型美術館で、中世から現代までのコレクションがあります。18歳未満は無料です。'],
    ],
    t: [
      ['항구 페리(62번 등)는 일반 대중교통 승차권으로 탈 수 있어 저렴한 항구 유람 대신 이용하기 좋습니다.', 'Harbour ferries (such as line 62) take regular transit tickets — a cheap way to tour the port.', '港のフェリー（62番など）は通常の公共交通の乗車券で乗れるので、安く港を巡る方法としておすすめです。'],
      ['공항에서 시내: 함부르크 공항역에서 S반 S1을 타면 중앙역까지 25분 안팎이며, 시내 일반 1회권(AB)으로 탈 수 있습니다.', 'Airport to city: S-Bahn S1 runs from the airport station to the Hauptbahnhof in about 25 minutes on a regular Hamburg AB ticket.', '空港から市内へ：ハンブルク空港駅からSバーンS1で中央駅まで25分ほどで、市内の通常1回券（AB）で乗れます。'],
    ],
  },
  queenstown: {
    h: [
      ['스카이라인 곤돌라', 'Skyline Gondola', 'スカイライン・ゴンドラ', '곤돌라로 밥스 피크에 올라 호수와 리마커블스산맥을 내려다보고, 루지도 탈 수 있습니다.', 'Ride up Bob’s Peak for views over the lake and The Remarkables, with a luge track at the top.', 'ゴンドラでボブズピークに上り、湖とリマーカブルズ山脈を見下ろせます。リュージュもあります。'],
      ['TSS 언슬로 증기선', 'TSS Earnslaw', 'TSSアーンズロー号', '1912년부터 와카티푸 호수를 운항하는 증기선으로, 건너편 월터 피크 농장 투어와 묶을 수 있습니다.', 'A steamship sailing Lake Wakatipu since 1912, combinable with a Walter Peak farm tour.', '1912年からワカティプ湖を運航する蒸気船で、対岸のウォルターピーク農場ツアーと組み合わせられます。'],
      ['애로타운', 'Arrowtown', 'アロータウン', '골드러시 시대 거리 풍경이 남은 작은 마을로, 가을(4~5월) 단풍이 특히 아름답습니다.', 'A gold-rush-era village, especially beautiful in autumn colours (April–May).', 'ゴールドラッシュ時代の街並みが残る小さな町で、秋（4〜5月）の紅葉が特に美しいです。'],
    ],
    t: [
      ['시내버스는 비카드(Bee Card)로 내면 현금보다 훨씬 쌉니다. 버스에서는 신용카드를 받지 않습니다.', 'Buses are far cheaper with a Bee Card than cash, and bank cards are not accepted on board.', '市バスはビーカード（Bee Card）で払うと現金よりずっと安くなります。車内ではクレジットカードが使えません。'],
      ['공항에서 시내: 퀸스타운 공항에서 시내까지는 오버스(Orbus) 버스나 택시로 20분 안팎입니다. 버스는 현금이나 비카드로만 냅니다.', 'Airport to city: Orbus buses or taxis take about 20 minutes into town; buses accept cash or Bee Card only.', '空港から市内へ：クイーンズタウン空港から市内まではオーバス（Orbus）のバスかタクシーで20分ほどです。バスは現金かビーカードのみです。'],
    ],
  },
  innsbruck: {
    h: [
      ['노르트케테 케이블카', 'Nordkette cable cars', 'ノルトケッテのケーブルカー', '시내에서 푸니쿨라와 케이블카를 갈아타고 해발 2,256m 하펠레카르까지 오르는 인스브루크의 대표 명소입니다.', 'Funicular and cable cars from the city up to Hafelekar at 2,256 m — Innsbruck’s signature trip.', '市内からケーブルカーを乗り継ぎ、標高2,256mのハーフェレカールまで上るインスブルックの代表的な名所です。'],
      ['황금 지붕', 'Golden Roof (Goldenes Dachl)', '黄金の小屋根', '금박 구리 기와 2,600여 장으로 덮은 구시가지의 발코니로, 인스브루크의 상징입니다.', 'The old-town balcony roofed with some 2,600 gilded copper tiles, symbol of Innsbruck.', '約2,600枚の金メッキの銅瓦で覆われた旧市街のバルコニーで、インスブルックの象徴です。'],
      ['암브라스 성', 'Ambras Castle', 'アンブラス城', '르네상스 시대 대공의 성으로, 세계에서 가장 오래된 박물관으로 불리는 수집품 전시실이 있습니다. 19세 미만은 무료입니다.', 'A Renaissance archduke’s castle with what is called the world’s oldest museum collection; free under 19.', 'ルネサンス期の大公の城で、世界最古の博物館と呼ばれる収集品の展示室があります。19歳未満は無料です。'],
      ['스와로브스키 크리스털 월드', 'Swarovski Crystal Worlds', 'スワロフスキー・クリスタルワールド', '근교 바텐스의 크리스털 테마 전시관으로, 시내에서 셔틀버스로 갈 수 있습니다.', 'A crystal-themed attraction in nearby Wattens, reached by shuttle bus from town.', '近郊ヴァッテンスにあるクリスタルをテーマにした施設で、市内からシャトルバスで行けます。'],
    ],
    t: [
      ['시내버스·트램 1회권은 미리 사면 차내 구매보다 쌉니다. 차내에서 사면 추가 요금이 붙습니다.', 'Buy single bus and tram tickets in advance; buying on board costs extra.', '市バスやトラムの1回券は事前に買うと車内購入より安くなります。車内で買うと追加料金がかかります。'],
      ['공항에서 시내: 인스브루크 공항에서 F번 버스를 타면 시내와 중앙역까지 20분 안팎입니다.', 'Airport to city: bus F runs from Innsbruck Airport to the centre and main station in about 20 minutes.', '空港から市内へ：インスブルック空港からF番バスで市内・中央駅まで20分ほどです。'],
    ],
  },
  marseille: {
    h: [
      ['노트르담 드 라 가르드 대성당', 'Notre-Dame de la Garde', 'ノートルダム・ド・ラ・ギャルド寺院', '시내 가장 높은 언덕 위 성당으로, 마르세유 항구와 바다가 한눈에 보입니다. 입장은 무료입니다.', 'The basilica on the city’s highest hill, with sweeping views of the port and sea; free to enter.', '市内で一番高い丘の上の聖堂で、港と海が一望できます。入場無料です。'],
      ['뮈셈(유럽·지중해 문명 박물관)', 'Mucem', 'ミュセム（ヨーロッパ地中海文明博物館）', '항구 입구의 격자 외벽 건물과 옛 요새를 다리로 이은 박물관으로, 옥상 테라스에서 바다가 보입니다.', 'A lattice-clad museum linked by footbridge to the old fort at the harbour mouth, with a sea-view roof terrace.', '港の入口にある格子状の外壁の建物と古い要塞を橋で結んだ博物館で、屋上テラスから海が見えます。'],
      ['이프 성', 'Château d’If', 'イフ城', '소설 「몬테크리스토 백작」의 무대로 알려진 섬의 요새 감옥으로, 구항구에서 배로 갑니다. 배 요금은 따로입니다.', 'The island fortress-prison of The Count of Monte Cristo, reached by boat from the Vieux-Port (fare extra).', '小説『モンテ・クリスト伯』の舞台として知られる島の要塞監獄で、旧港から船で行きます。船代は別です。'],
      ['칼랑크 국립공원', 'Calanques National Park', 'カランク国立公園', '석회암 절벽 사이로 푸른 바다가 들어온 만이 이어지는 국립공원으로, 하이킹이나 유람선으로 둘러봅니다.', 'Limestone cliffs and turquoise coves, explored on foot or by boat.', '石灰岩の断崖の間に青い入り江が続く国立公園で、ハイキングか遊覧船で巡ります。'],
    ],
    t: [
      ['구항구 양쪽을 잇는 작은 페리(페리 보트)는 짧지만 마르세유의 오래된 명물입니다.', 'The tiny Ferry Boat crossing the Vieux-Port is short but a Marseille institution.', '旧港の両岸を結ぶ小さなフェリーボートは短い航路ですが、マルセイユの古い名物です。'],
      ['공항에서 시내: 마르세유 공항에서 공항 셔틀버스를 타면 생샤를역까지 30분 안팎입니다. 시내 대중교통 1회권을 묶은 할인권도 있습니다.', 'Airport to city: the airport shuttle bus reaches Saint-Charles station in about 30 minutes; combined tickets with city transit are available.', '空港から市内へ：マルセイユ空港から空港シャトルバスでサン・シャルル駅まで30分ほどです。市内交通の1回券を組み合わせた割引券もあります。'],
    ],
  },
  tainan: {
    h: [
      ['츠칸러우', 'Chihkan Tower', '赤崁楼', '네덜란드 시대 요새 터에 세운 누각과 사당으로, 타이난 구시가지의 상징입니다.', 'Pavilions and shrines on the site of a Dutch-era fort, symbol of old Tainan.', 'オランダ時代の要塞跡に建てられた楼閣と廟で、台南旧市街の象徴です。'],
      ['안핑 고성', 'Anping Old Fort', '安平古堡', '17세기 네덜란드가 세운 질란디아 요새 터로, 전망대에서 안핑 일대가 내려다보입니다.', 'The site of the 17th-century Dutch Fort Zeelandia, with views over Anping from its lookout.', '17世紀にオランダが築いたゼーランディア城の跡で、展望台から安平一帯を見渡せます。'],
      ['안핑 트리하우스', 'Anping Tree House', '安平樹屋', '옛 무역 회사 창고를 반얀나무 뿌리가 감싸 버린 독특한 공간입니다.', 'An old trading company warehouse engulfed by banyan roots.', 'かつての貿易会社の倉庫をガジュマルの根が覆い尽くした独特の空間です。'],
    ],
    t: [
      ['츠칸러우·안핑 고성 등 시가 운영하는 고적은 대부분 오전 8시 반에 문을 열어, 더위를 피해 아침 일찍 둘러보기 좋습니다.', 'Most city-run historic sites, such as Chihkan Tower and Anping Old Fort, open at 8:30 a.m., so go early to beat the heat.', '赤崁楼や安平古堡など市が運営する古跡の多くは朝8時半に開くので、暑さを避けて朝早く回るのがおすすめです。'],
      ['가는 법: 고속철 타이난역은 시내에서 떨어져 있어, 연결된 사룬역에서 타이완철도 사룬선으로 갈아타 타이난역까지 갑니다. 국제선은 보통 가오슝 공항을 이용합니다.', 'Getting there: the HSR Tainan station is outside town; change at the linked Shalun station to the TRA Shalun Line for Tainan Station. International flights usually use Kaohsiung Airport.', '行き方：高鉄台南駅は市街から離れているため、連絡通路でつながる沙崙駅で台鉄沙崙線に乗り換えて台南駅へ。国際線はふつう高雄空港を使います。'],
    ],
  },
  warsaw: {
    h: [
      ['구시가지와 왕궁', 'Old Town and the Royal Castle', '旧市街と王宮', '전쟁 뒤 옛 그림과 자료를 바탕으로 재건한 구시가지로, 왕궁에서는 왕의 거처와 미술품을 볼 수 있습니다.', 'The Old Town rebuilt after the war from old paintings and records; the Royal Castle shows the royal apartments and art.', '戦後に古い絵画や資料をもとに再建された旧市街で、王宮では王の居室や美術品が見られます。'],
      ['바르샤바 봉기 박물관', 'Warsaw Uprising Museum', 'ワルシャワ蜂起博物館', '1944년 나치 점령에 맞선 시민 봉기를 체험형 전시로 보여 주는 박물관입니다. 목요일은 무료입니다.', 'An immersive museum of the 1944 uprising against Nazi occupation; free on Thursdays.', '1944年のナチス占領に抗した市民蜂起を体験型展示で伝える博物館です。木曜は無料です。'],
      ['폴린 폴란드 유대인 역사박물관', 'POLIN Museum of the History of Polish Jews', 'ポーリン・ポーランドユダヤ人歴史博物館', '폴란드 유대인 천 년의 역사를 다루는 박물관으로, 최소 2시간은 잡는 것이 좋습니다.', 'A thousand years of Polish Jewish history; allow at least two hours.', 'ポーランドのユダヤ人の千年の歴史を扱う博物館で、少なくとも2時間は見ておきましょう。'],
      ['와지엔키 공원', 'Łazienki Park', 'ワジェンキ公園', '물 위의 궁전과 쇼팽 동상이 있는 넓은 왕실 공원으로, 여름 일요일에는 무료 쇼팽 연주회가 열립니다.', 'A royal park with the Palace on the Isle and the Chopin monument, hosting free summer Sunday recitals.', '水上宮殿とショパン像がある広い王室庭園で、夏の日曜には無料のショパン演奏会が開かれます。'],
    ],
    t: [
      ['대중교통은 20분권과 75분권이 있어, 갈아탈 일이 있으면 75분권을 사는 것이 안전합니다.', 'Transit tickets come in 20- and 75-minute versions; buy the 75-minute ticket if you need to change.', '公共交通には20分券と75分券があり、乗り換えがあるなら75分券を買うのが安心です。'],
      ['공항에서 시내: 쇼팽 공항에서 S2·S3 열차나 175번 버스를 타면 시내 중심까지 30분 안팎이며, 75분권을 사면 됩니다.', 'Airport to city: S2/S3 trains or bus 175 reach the centre in about 30 minutes from Chopin Airport; buy a 75-minute ticket.', '空港から市内へ：ショパン空港からS2・S3線の列車か175番バスで中心部まで30分ほどで、75分券を買えば大丈夫です。'],
    ],
  },
  ghent: {
    h: [
      ['헨트 제단화(성 바보 대성당)', 'Ghent Altarpiece (St Bavo’s Cathedral)', 'ヘントの祭壇画（聖バーフ大聖堂）', '반에이크 형제의 「신비한 어린양」을 방문자 센터에서 볼 수 있고, 증강현실 투어로 제단화의 역사를 따라갑니다.', 'See the van Eycks’ Adoration of the Mystic Lamb in the visitor centre, with an AR tour of its history.', 'ファン・エイク兄弟の「神秘の子羊」を見学センターで鑑賞でき、ARツアーで祭壇画の歴史をたどれます。'],
      ['그라벤스틴 성', 'Gravensteen (Castle of the Counts)', 'フランドル伯居城', '도심 한가운데의 중세 성으로, 성벽 위에서 겐트 시내가 내려다보입니다. 12세 미만은 무료입니다.', 'A medieval castle in the middle of town with views from its ramparts; free under 12.', '街の真ん中にある中世の城で、城壁の上からヘント市内を見渡せます。12歳未満は無料です。'],
      ['흐라슬레이와 코렌레이', 'Graslei and Korenlei', 'グラスレイとコーレンレイ', '운하 양쪽에 길드 건물이 늘어선 겐트의 대표 풍경으로, 운하 보트가 여기서 출발합니다.', 'Guildhouses lining both banks of the canal — Ghent’s signature view, where canal boats depart.', '運河の両岸にギルドハウスが並ぶヘントを代表する風景で、運河ボートがここから出発します。'],
    ],
    t: [
      ['트램·버스는 De Lijn 1회권이나 비접촉 카드로 탑니다. 1회권은 일정 시간 안에 갈아탈 수 있습니다.', 'Trams and buses take a De Lijn single ticket or contactless card, with transfers allowed within the time limit.', 'トラムやバスはDe Lijnの1回券か非接触カードで乗れます。1回券は一定時間内なら乗り換えできます。'],
      ['가는 법: 겐트에는 큰 공항이 없어 브뤼셀 공항이나 브뤼셀에서 기차로 갑니다. 겐트 신트피터르스역에서 구시가지까지는 트램으로 15분 안팎입니다.', 'Getting there: Ghent has no major airport; take the train from Brussels Airport or Brussels. From Gent-Sint-Pieters station, a tram reaches the old centre in about 15 minutes.', '行き方：ヘントには大きな空港がないため、ブリュッセル空港かブリュッセルから列車で行きます。ヘント・シント・ピータース駅から旧市街まではトラムで15分ほどです。'],
    ],
  },
  geneva: {
    h: [
      ['제토 분수', 'Jet d’Eau', 'ジェ・ドー（大噴水）', '호수 위로 140m까지 물을 뿜어 올리는 제네바의 상징으로, 방파제 끝까지 걸어가 가까이서 볼 수 있습니다.', 'Geneva’s icon, shooting water 140 m above the lake; walk out along the jetty for a close look.', '湖上140mまで水を噴き上げるジュネーブの象徴で、防波堤の先まで歩いて近くで見られます。'],
      ['국제적십자·적신월 박물관', 'International Red Cross and Red Crescent Museum', '国際赤十字・赤新月博物館', '인도주의 활동의 역사를 체험형 전시로 보여 주는 박물관으로, 유엔 유럽본부 맞은편에 있습니다.', 'An immersive museum of humanitarian action, opposite the UN’s Palais des Nations.', '人道支援の歴史を体験型展示で伝える博物館で、国連欧州本部の向かいにあります。'],
      ['CERN 사이언스 게이트웨이', 'CERN Science Gateway', 'CERNサイエンス・ゲートウェイ', '세계 최대 입자물리연구소의 과학 체험관으로, 입장은 무료지만 등록이 필요합니다. 16세 미만은 보호자 동반이어야 합니다.', 'The science centre of the world’s largest particle physics lab — free, but registration is required; under-16s need an adult.', '世界最大の素粒子物理学研究所の科学体験施設で、入場無料ですが登録が必要です。16歳未満は保護者同伴です。'],
      ['구시가지와 생피에르 대성당', 'Old Town and St Pierre Cathedral', '旧市街とサン・ピエール大聖堂', '종교개혁가 칼뱅이 설교한 대성당으로, 탑에 오르면 호수와 시내가 내려다보입니다.', 'The cathedral where Calvin preached; climb the towers for lake and city views.', '宗教改革者カルヴァンが説教した大聖堂で、塔に上ると湖と市内を見渡せます。'],
    ],
    t: [
      ['제네바 숙소에 묵으면 체류 기간 동안 시내 대중교통을 무료로 탈 수 있는 「제네바 교통카드」를 받을 수 있습니다. 숙소에 확인하세요.', 'Staying in Geneva accommodation usually gets you a free Geneva Transport Card for city transit during your stay; ask your host.', 'ジュネーブの宿に泊まると、滞在中の市内交通が無料になる「ジュネーブ交通カード」がもらえます。宿に確認しましょう。'],
      ['공항에서 시내: 제네바 공항역에서 열차를 타면 코르나뱅역까지 7분 안팎입니다. 예전의 공항 무료 승차권은 2022년에 없어져, 10구역 1회권을 사야 합니다(숙소 교통카드가 있으면 무료).', 'Airport to city: trains from the airport reach Cornavin in about 7 minutes. The old free arrivals ticket ended in 2022, so buy a zone 10 ticket (free with a Geneva Transport Card).', '空港から市内へ：ジュネーブ空港駅から列車でコルナヴァン駅まで7分ほどです。以前の空港無料乗車券は2022年に廃止されたので、ゾーン10の1回券を買います（宿の交通カードがあれば無料）。'],
    ],
  },
  antwerp: {
    h: [
      ['성모 대성당', 'Cathedral of Our Lady', '聖母大聖堂', '루벤스의 제단화 「십자가에서 내려지심」 등 4점이 걸린 고딕 대성당입니다. 18세 미만은 무료입니다.', 'A Gothic cathedral hung with four Rubens altarpieces including The Descent from the Cross; free under 18.', 'ルーベンスの祭壇画「キリスト降架」など4点が掛かるゴシック大聖堂です。18歳未満は無料です。'],
      ['루벤스의 집', 'Rubens House', 'ルーベンスの家', '루벤스가 살며 작업하던 저택과 정원으로, 새로 단장한 정원과 체험관이 있습니다.', 'The house, studio and garden where Rubens lived and worked, with a renewed garden and visitor centre.', 'ルーベンスが暮らし制作した邸宅と庭園で、新しく整備された庭と体験施設があります。'],
      ['MAS 박물관', 'MAS (Museum aan de Stroom)', 'MAS（ミュージアム・アーン・デ・ストローム）', '항구와 도시의 역사를 다루는 박물관으로, 옥상 전망대는 입장권 없이 무료로 올라갈 수 있습니다.', 'A museum of the port and city; the rooftop panorama is free without a ticket.', '港と街の歴史を扱う博物館で、屋上の展望台はチケットなしで無料で上れます。'],
      ['안트베르펜 중앙역', 'Antwerpen-Centraal station', 'アントワープ中央駅', '대리석과 철골 돔이 웅장한 기차역으로, 세계에서 가장 아름다운 역 중 하나로 꼽힙니다.', 'A marble-and-iron domed station often ranked among the world’s most beautiful.', '大理石と鉄骨のドームが壮麗な駅で、世界で最も美しい駅の一つに数えられます。'],
    ],
    t: [
      ['트램·버스는 De Lijn 1회권이나 비접촉 카드로 탑니다. 구시가지는 대부분 걸어서 다닐 수 있습니다.', 'Trams and buses take a De Lijn ticket or contactless card, though most of the old town is walkable.', 'トラムやバスはDe Lijnの1回券か非接触カードで乗れますが、旧市街はほとんど歩いて回れます。'],
      ['가는 법: 브뤼셀 공항이나 브뤼셀 시내에서 기차로 40분 안팎이면 안트베르펜 중앙역에 닿습니다.', 'Getting there: trains from Brussels Airport or central Brussels reach Antwerpen-Centraal in about 40 minutes.', '行き方：ブリュッセル空港やブリュッセル市内から列車で40分ほどでアントワープ中央駅に着きます。'],
    ],
  },
  turin: {
    h: [
      ['이집트 박물관', 'Museo Egizio', 'エジプト博物館', '카이로 다음가는 규모의 이집트 유물 박물관으로, 미라와 석상, 파피루스 컬렉션이 방대합니다.', 'One of the largest collections of Egyptian antiquities outside Cairo, with mummies, statues and papyri.', 'カイロに次ぐ規模のエジプト遺物の博物館で、ミイラや石像、パピルスのコレクションが膨大です。'],
      ['몰레 안토넬리아나와 영화 박물관', 'Mole Antonelliana and the Cinema Museum', 'モーレ・アントネッリアーナと映画博物館', '토리노의 상징인 탑 안에 영화 박물관이 있고, 유리 엘리베이터로 전망대에 올라갑니다.', 'Turin’s landmark tower houses the cinema museum, with a glass lift to the viewing deck.', 'トリノの象徴の塔の中に映画博物館があり、ガラスのエレベーターで展望台に上れます。'],
      ['토리노 왕궁(무세이 레알리)', 'Royal Museums of Turin', 'トリノ王宮（ムゼイ・レアーリ）', '사보이 왕가의 궁전과 무기고, 미술관을 묶은 복합 박물관으로, 18세 미만은 무료입니다.', 'The Savoy royal palace, armoury and gallery combined; free under 18.', 'サヴォイア家の宮殿や武器庫、美術館をまとめた複合博物館で、18歳未満は無料です。'],
    ],
    t: [
      ['오래된 카페에서 에스프레소·초콜릿·크림을 층층이 담은 음료 비체린을 맛보세요. 토리노에서 시작된 음료입니다.', 'Try a bicerin — layered espresso, chocolate and cream — in a historic café; it was born in Turin.', '老舗カフェで、エスプレッソ・チョコレート・クリームを層にした飲み物ビチェリンを味わってみましょう。トリノ発祥の飲み物です。'],
      ['공항에서 시내: 토리노 공항에서 아리바 공항버스를 타면 시내(포르타 누오바 근처)까지 45~50분입니다.', 'Airport to city: the Arriva airport bus reaches the centre near Porta Nuova in 45–50 minutes.', '空港から市内へ：トリノ空港からアリーヴァの空港バスで中心部（ポルタ・ヌオーヴァ付近）まで45〜50分です。'],
    ],
  },
  'gold-coast': {
    h: [
      ['서퍼스 파라다이스 해변', 'Surfers Paradise Beach', 'サーファーズ・パラダイス・ビーチ', '고층 빌딩을 등지고 펼쳐진 골드코스트의 대표 해변으로, 안전요원 탑이 세 곳 있습니다.', 'The Gold Coast’s signature beach backed by high-rises, with three patrol towers.', '高層ビルを背に広がるゴールドコーストを代表するビーチで、監視塔が3か所あります。'],
      ['벌리 헤즈', 'Burleigh Heads', 'バーレイ・ヘッズ', '곶 위 국립공원 산책로와 서핑 포인트가 있는 해변 마을로, 해 질 녘 풍경이 아름답습니다.', 'A beach village with a headland national-park walk and surf breaks, lovely at sunset.', '岬の上の国立公園の遊歩道とサーフポイントがあるビーチの町で、夕暮れの景色が美しいです。'],
      ['드림월드', 'Dreamworld', 'ドリームワールド', '호주 최대급 테마파크로, 놀이기구와 호주 동물 구역이 함께 있습니다.', 'One of Australia’s biggest theme parks, combining rides with Australian wildlife.', 'オーストラリア最大級のテーマパークで、アトラクションとオーストラリアの動物エリアがあります。'],
      ['스프링브룩 국립공원', 'Springbrook National Park', 'スプリングブルック国立公園', '세계유산 열대우림 속 폭포와 동굴의 반딧불이(글로웜)를 볼 수 있습니다. 동굴에서는 불빛을 반딧불이에 비추지 마세요.', 'World Heritage rainforest with waterfalls and a glow-worm cave; never shine lights on the glow-worms.', '世界遺産の熱帯雨林で滝や洞窟の土ボタル（グローワーム）が見られます。洞窟では土ボタルに光を当てないように。'],
    ],
    t: [
      ['퀸즐랜드 대중교통(버스·트램)은 거리와 상관없이 1회 50센트입니다. 고카드나 비접촉 카드를 탈 때와 내릴 때 모두 찍으세요. 공항철도 에어트레인은 예외입니다.', 'Queensland buses and trams cost a flat 50 cents per journey; tap on and off with a go card or contactless card. Airtrain is the exception.', 'クイーンズランドの公共交通（バス・トラム）は距離に関係なく1回50セントです。ゴーカードか非接触カードで乗車時と降車時の両方タッチを。空港鉄道エアトレインは例外です。'],
      ['공항에서 시내: 골드코스트 공항에서 777번 버스를 타고 브로드비치 사우스에서 트램(G:link)으로 갈아타면 서퍼스 파라다이스로 갑니다. 같은 50센트 요금이 적용됩니다.', 'Airport to city: bus 777 from Gold Coast Airport connects with the G:link tram at Broadbeach South for Surfers Paradise, on the same 50-cent fare.', '空港から市内へ：ゴールドコースト空港から777番バスに乗り、ブロードビーチ・サウスでトラム（G:link）に乗り換えるとサーファーズ・パラダイスへ行けます。同じ50セント運賃です。'],
    ],
  },
  brisbane: {
    h: [
      ['사우스 뱅크와 스트리츠 비치', 'South Bank and Streets Beach', 'サウスバンクとストリーツ・ビーチ', '강변 공원 안의 무료 인공 해변으로, 안전요원이 상주합니다.', 'A free man-made beach in the riverside parklands, patrolled by lifeguards.', '川沿いの公園の中にある無料の人工ビーチで、監視員が常駐しています。'],
      ['퀸즐랜드 박물관', 'Queensland Museum Kurilpa', 'クイーンズランド博物館', '공룡 전시 등 자연사·문화 전시를 무료로 볼 수 있는 박물관입니다(일부 기획전 유료).', 'Natural history and culture, including dinosaurs, free to enter (some exhibitions ticketed).', '恐竜展示など自然史・文化の展示を無料で見られる博物館です（一部の企画展は有料）。'],
      ['QAGOMA(퀸즐랜드 미술관·현대미술관)', 'QAGOMA', 'QAGOMA（クイーンズランド美術館・近代美術館）', '사우스 뱅크의 두 미술관으로, 소장품 전시 대부분이 무료입니다.', 'Two galleries at South Bank where most collection displays are free.', 'サウスバンクにある2つの美術館で、所蔵品展示の多くが無料です。'],
      ['스토리 브리지 클라임', 'Story Bridge Adventure Climb', 'ストーリー・ブリッジ・アドベンチャー・クライム', '강 위의 철교 꼭대기까지 올라가 시내를 내려다보는 가이드 등반 체험입니다.', 'A guided climb to the top of the steel bridge for views over the city.', '川に架かる鉄橋の頂上まで登って市内を見下ろすガイド付きのクライム体験です。'],
    ],
    t: [
      ['버스·기차·페리·트램은 거리와 상관없이 1회 50센트입니다. 강을 오가는 시티캣 페리를 타면 저렴하게 시내를 둘러볼 수 있습니다.', 'Buses, trains, ferries and trams cost a flat 50 cents; the CityCat ferry makes a cheap river tour.', 'バス・列車・フェリー・トラムは距離に関係なく1回50セントです。川を行き来するシティキャット・フェリーで安く市内を巡れます。'],
      ['공항에서 시내: 브리즈번 공항에서 에어트레인을 타면 시내 역까지 20분 안팎입니다. 에어트레인은 50센트 균일 요금이 적용되지 않습니다.', 'Airport to city: the Airtrain reaches the city stations in about 20 minutes; the 50-cent fare does not apply to Airtrain.', '空港から市内へ：ブリスベン空港からエアトレインで市内の駅まで20分ほどです。エアトレインには50セント運賃が適用されません。'],
    ],
  },
  'washington-dc': {
    h: [
      ['스미스소니언 박물관', 'Smithsonian museums', 'スミソニアン博物館', '자연사·항공우주·미국사 등 내셔널 몰의 국립 박물관들로, 대부분 무료입니다. 항공우주박물관 등 일부는 무료 시간 지정권이 필요합니다.', 'The national museums on the Mall — natural history, air and space, American history — mostly free; some, like Air and Space, need free timed passes.', '自然史・航空宇宙・アメリカ史などナショナル・モールの国立博物館で、ほとんどが無料です。航空宇宙博物館など一部は無料の時間指定券が必要です。'],
      ['링컨 기념관과 내셔널 몰', 'Lincoln Memorial and the National Mall', 'リンカーン記念堂とナショナル・モール', '국회의사당에서 링컨 기념관까지 이어지는 넓은 공원으로, 기념물들을 걸어서 둘러봅니다.', 'The great park from the Capitol to the Lincoln Memorial, explored on foot.', '議事堂からリンカーン記念堂まで続く広い公園で、記念碑を歩いて巡ります。'],
      ['국립문서보관소', 'National Archives Museum', '国立公文書館', '독립선언서와 헌법 원본을 볼 수 있으며, 입장은 무료입니다.', 'See the original Declaration of Independence and Constitution; admission is free.', '独立宣言と合衆国憲法の原本が見られ、入場は無料です。'],
      ['워싱턴 기념탑', 'Washington Monument', 'ワシントン記念塔', '내셔널 몰 한가운데의 오벨리스크로, 전망대에서 시내가 내려다보입니다. 입장권은 무료이고 온라인 예약 시 수수료가 붙습니다.', 'The obelisk at the heart of the Mall with a city-view deck; tickets are free, with a small online booking fee.', 'ナショナル・モール中央のオベリスクで、展望台から市内を見渡せます。入場券は無料で、オンライン予約には手数料がかかります。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(10%)과 팁이 빠져 있습니다. 계산할 때 팁 18~20%를 더하는 것이 일반적입니다.', 'Menu prices exclude the 10% meals tax and tip; adding 18–20% for tip is usual.', '飲食店のメニュー価格には税（10%）とチップが含まれていません。会計時に18〜20%のチップを加えるのが一般的です。'],
      ['공항에서 시내: 로널드 레이건 공항은 지하철(메트로) 역과 바로 연결되고, 덜레스 공항도 실버라인 지하철로 시내까지 갑니다. 요금은 거리에 따라 달라집니다.', 'Airport to city: Reagan National connects straight to the Metro, and Dulles is on the Silver Line; fares vary by distance.', '空港から市内へ：ロナルド・レーガン空港は地下鉄（メトロ）駅と直結し、ダレス空港もシルバーラインで市内へ行けます。運賃は距離によって変わります。'],
    ],
  },
  boston: {
    h: [
      ['프리덤 트레일', 'Freedom Trail', 'フリーダム・トレイル', '보스턴 커먼에서 찰스타운 해군 기지까지 붉은 벽돌 선을 따라 약 4km를 걷는 역사 산책로로, 걷기는 무료입니다.', 'A 2.5-mile red-brick trail of historic sites from Boston Common to the Charlestown Navy Yard — free to walk.', 'ボストン・コモンからチャールズタウン海軍工廠まで、赤れんがの線をたどる約4kmの歴史散策路で、歩くのは無料です。'],
      ['보스턴 미술관', 'Museum of Fine Arts, Boston', 'ボストン美術館', '고대 이집트부터 인상파, 일본 미술까지 아우르는 미국 대표 미술관입니다.', 'One of America’s great art museums, from ancient Egypt to the Impressionists and Japanese art.', '古代エジプトから印象派、日本美術までそろうアメリカを代表する美術館です。'],
      ['뉴잉글랜드 수족관', 'New England Aquarium', 'ニューイングランド水族館', '항구 앞 수족관으로, 4층 높이의 원통형 대형 수조가 명물입니다.', 'A harbourfront aquarium famous for its four-storey Giant Ocean Tank.', '港の前にある水族館で、4階分の高さの円筒形の大水槽が名物です。'],
      ['하버드 대학', 'Harvard University', 'ハーバード大学', '지하철 레드라인으로 가는 케임브리지의 대학으로, 캠퍼스와 하버드 스퀘어를 둘러볼 수 있습니다.', 'Across the river in Cambridge on the Red Line; stroll the campus and Harvard Square.', '地下鉄レッドラインで行けるケンブリッジの大学で、キャンパスやハーバード・スクエアを散策できます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금과 팁이 빠져 있습니다. 매사추세츠 식사세는 7%(주 6.25%+지역 0.75%)이고, 팁은 18~20%가 일반적입니다.', 'Menu prices exclude tax and tip: Massachusetts meals tax is 7% (6.25% state + 0.75% local), and an 18–20% tip is usual.', '飲食店のメニュー価格には税とチップが含まれていません。マサチューセッツの飲食税は7%（州6.25%＋地方0.75%）で、チップは18〜20%が一般的です。'],
      ['공항에서 시내: 로건 공항에서 실버라인 SL1 버스를 타면 사우스역까지 가며, 공항에서 출발할 때는 무료입니다. 공항 무료 셔틀로 블루라인 공항역에 가서 지하철을 탈 수도 있습니다.', 'Airport to city: the Silver Line SL1 runs from Logan to South Station and is free from the airport; a free shuttle also links to the Blue Line’s Airport station.', '空港から市内へ：ローガン空港からシルバーラインSL1バスでサウス駅へ行け、空港発は無料です。無料シャトルでブルーラインの空港駅へ行き地下鉄に乗ることもできます。'],
    ],
  },
  toronto: {
    h: [
      ['CN 타워', 'CN Tower', 'CNタワー', '높이 553m의 토론토 상징으로, 전망대와 유리 바닥에서 온타리오 호수와 시내가 내려다보입니다.', 'Toronto’s 553 m landmark, with lookouts and a glass floor over Lake Ontario and the city.', '高さ553mのトロントのシンボルで、展望台やガラスの床からオンタリオ湖と市内を見渡せます。'],
      ['카사 로마', 'Casa Loma', 'カサ・ロマ', '20세기 초에 지어진 고딕 양식의 성으로, 탑과 비밀 통로, 정원을 둘러볼 수 있습니다.', 'An early-20th-century Gothic Revival castle with towers, secret passages and gardens.', '20世紀初めに建てられたゴシック様式の城で、塔や秘密の通路、庭園を見学できます。'],
      ['세인트 로렌스 마켓', 'St. Lawrence Market', 'セント・ローレンス・マーケット', '토론토 대표 식료품 시장으로, 명물 피밀 베이컨 샌드위치를 맛볼 수 있습니다.', 'Toronto’s landmark food market and home of the peameal bacon sandwich.', 'トロントを代表する食品市場で、名物のピーミール・ベーコン・サンドイッチが味わえます。'],
      ['왕립 온타리오 박물관', 'Royal Ontario Museum', 'ロイヤル・オンタリオ博物館', '공룡 화석부터 세계 문화까지 아우르는 캐나다 최대급 박물관으로, 매달 셋째 화요일 저녁은 사전 예약 시 무료입니다.', 'One of Canada’s largest museums, from dinosaurs to world cultures; free on third-Tuesday evenings with a pre-booked slot.', '恐竜の化石から世界の文化までそろうカナダ最大級の博物館で、毎月第3火曜の夜は事前予約で無料です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 HST(13%)와 팁이 빠져 있습니다. 팁은 15~18%가 일반적입니다.', 'Menu prices exclude 13% HST and tip; a 15–18% tip is usual.', '飲食店のメニュー価格にはHST（13%）とチップが含まれていません。チップは15〜18%が一般的です。'],
      ['공항에서 시내: 피어슨 공항에서 UP 익스프레스를 타면 유니언역까지 약 25분입니다. 프레스토(PRESTO) 카드나 신용카드 탭으로 타면 종이 승차권보다 쌉니다.', 'Airport to city: the UP Express runs from Pearson to Union Station in about 25 minutes; paying with PRESTO or a contactless card is cheaper than a paper ticket.', '空港から市内へ：ピアソン空港からUPエクスプレスでユニオン駅まで約25分です。PRESTOカードやクレジットカードのタッチ決済で乗ると紙の乗車券より安くなります。'],
    ],
  },
  chicago: {
    h: [
      ['시카고 미술관', 'Art Institute of Chicago', 'シカゴ美術館', '쇠라의 〈그랑드자트 섬의 일요일 오후〉 등 인상파 명작으로 유명한 미술관입니다. 입장료는 거주지에 따라 다르고, 14세 미만은 무료입니다.', 'Renowned for Impressionist masterpieces like Seurat’s A Sunday on La Grande Jatte; prices depend on where you live, and under-14s are free.', 'スーラの「グランド・ジャット島の日曜日の午後」など印象派の名作で有名な美術館です。入場料は居住地によって異なり、14歳未満は無料です。'],
      ['스카이덱(윌리스 타워)', 'Skydeck Chicago (Willis Tower)', 'スカイデッキ（ウィリス・タワー）', '103층 전망대로, 건물 밖으로 튀어나온 유리 상자 ‘레지’에 서 볼 수 있습니다.', 'The 103rd-floor observatory with The Ledge, glass boxes jutting out from the tower.', '103階の展望台で、ビルの外に突き出たガラスの箱「レッジ」に立てます。'],
      ['밀레니엄 파크', 'Millennium Park', 'ミレニアム・パーク', '거울 같은 조각 ‘클라우드 게이트(더 빈)’가 있는 도심 공원으로, 무료입니다.', 'The downtown park with the mirrored Cloud Gate (“The Bean”) — free.', '鏡のような彫刻「クラウド・ゲート（ザ・ビーン）」がある都心の公園で、無料です。'],
      ['딥디시 피자', 'Deep-dish pizza', 'ディープディッシュ・ピザ', '1940년대 시카고에서 탄생한 두툼한 피자로, 치즈·소스·토핑을 그릇 모양 도우에 차례로 채웁니다.', 'Born in 1940s Chicago: a bowl-shaped crust filled with cheese, sauce, then toppings.', '1940年代にシカゴで生まれた分厚いピザで、器のような生地にチーズ・ソース・具を順に詰めます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금과 팁이 빠져 있습니다. 시카고의 식당 세금은 약 10.75%(판매세 10.25%+식당세 0.5%)이고, 팁은 18~20%가 일반적입니다.', 'Menu prices exclude tax and tip: restaurant tax in Chicago is about 10.75% (10.25% sales tax + 0.5% restaurant tax), and an 18–20% tip is usual.', '飲食店のメニュー価格には税とチップが含まれていません。シカゴの飲食税は約10.75%（売上税10.25%＋飲食店税0.5%）で、チップは18〜20%が一般的です。'],
      ['공항에서 시내: 오헤어 공항에서 지하철 블루라인을 타면 루프까지 약 45분입니다. 오헤어역에서 탈 때만 요금이 5달러이고, 다른 역은 2.5달러입니다.', 'Airport to city: the Blue Line runs from O’Hare to the Loop in about 45 minutes; boarding at O’Hare costs $5, other stations $2.50.', '空港から市内へ：オヘア空港から地下鉄ブルーラインでループまで約45分です。オヘア駅から乗る場合のみ運賃が5ドルで、他の駅は2.5ドルです。'],
    ],
  },
  montreal: {
    h: [
      ['노트르담 대성당', 'Notre-Dame Basilica', 'ノートルダム大聖堂', '푸른 빛의 화려한 내부로 유명한 구시가지의 대성당으로, 저녁에는 빛 공연 ‘오라(AURA)’가 열립니다.', 'Old Montréal’s basilica, famed for its deep-blue interior, with the AURA light show in the evening.', '青く輝く華やかな内部で知られる旧市街の大聖堂で、夜には光のショー「AURA」が行われます。'],
      ['구시가지와 옛 항구', 'Old Montréal and the Old Port', '旧市街と旧港', '17세기부터 이어진 돌길과 건물이 남아 있는 지역으로, 강변 항구까지 걸어서 둘러봅니다.', 'Cobbled streets and buildings dating back to the 17th century, down to the riverside port.', '17世紀から続く石畳と建物が残る地区で、川沿いの港まで歩いて巡ります。'],
      ['몬트리올 베이글', 'Montréal bagels', 'モントリオール・ベーグル', '꿀물에 데친 뒤 장작 화덕에 구워 달콤하고 쫄깃하며, 생비아퇴르·페어마운트 가게는 24시간 엽니다.', 'Boiled in honey water and baked in wood-fired ovens; St-Viateur and Fairmount bake around the clock.', 'はちみつ入りの湯でゆでてから薪窯で焼くため甘くもちもちしており、サン・ヴィアトゥールとフェアマウントは24時間営業です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(GST 5%+QST 9.975%)과 팁이 빠져 있습니다. 팁은 세전 금액의 15% 이상이 일반적입니다.', 'Menu prices exclude tax (5% GST + 9.975% QST) and tip; at least 15% of the pre-tax amount is usual.', '飲食店のメニュー価格には税（GST5%＋QST9.975%）とチップが含まれていません。チップは税抜き金額の15%以上が一般的です。'],
      ['공항에서 시내: 747번 공항버스는 24시간 운행하며, 요금 11.25달러로 24시간 동안 버스와 지하철을 탈 수 있습니다. 버스에서 낼 때는 동전으로 정확한 금액만 받습니다.', 'Airport to city: the 24-hour 747 bus costs $11.25 and doubles as a 24-hour bus and métro pass; on board it takes exact change in coins only.', '空港から市内へ：24時間運行の747番空港バスは11.25ドルで、24時間バスと地下鉄に乗れます。車内で払う場合は硬貨でちょうどの金額のみです。'],
    ],
  },
  seattle: {
    h: [
      ['스페이스 니들', 'Space Needle', 'スペース・ニードル', '1962년 세계박람회 때 세운 시애틀의 상징으로, 회전하는 유리 바닥 전망대가 있습니다. 시간대와 계절에 따라 요금이 달라집니다.', 'Seattle’s icon from the 1962 World’s Fair, with a rotating glass floor; prices vary by time and season.', '1962年の万博で建てられたシアトルのシンボルで、回転するガラスの床の展望台があります。料金は時間帯や季節で変わります。'],
      ['파이크 플레이스 마켓', 'Pike Place Market', 'パイク・プレイス・マーケット', '생선 던지기로 유명한 해안가 시장으로, 해산물과 수공예품 가게가 모여 있습니다.', 'The waterfront market famous for its flying fish, full of seafood and craft stalls.', '魚を投げるパフォーマンスで有名な海沿いの市場で、海産物や手工芸品の店が集まっています。'],
      ['치훌리 가든 앤드 글라스', 'Chihuly Garden and Glass', 'チフーリ・ガーデン・アンド・グラス', '스페이스 니들 옆에 있는 유리 공예가 데일 치훌리의 작품 전시관과 정원입니다.', 'Dale Chihuly’s glass art galleries and garden beside the Space Needle.', 'スペース・ニードルの隣にあるガラス作家デイル・チフーリの作品展示館と庭園です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(시애틀 10.55%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude tax (10.55% in Seattle) and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（シアトル10.55%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: 시택 공항에서 경전철 1호선(링크)을 타면 다운타운까지 약 40분이며, 요금은 거리와 관계없이 3달러입니다.', 'Airport to city: Link light rail Line 1 runs from Sea-Tac to downtown in about 40 minutes for a flat $3.', '空港から市内へ：シータック空港からライトレール1号線（リンク）でダウンタウンまで約40分、運賃は距離に関係なく3ドルです。'],
    ],
  },
  perth: {
    h: [
      ['킹스 파크', 'Kings Park', 'キングス・パーク', '시내 서쪽 언덕의 넓은 공원으로, 스완강과 시내 고층 빌딩이 한눈에 보이며 무료입니다.', 'A huge park on a hill west of the CBD, overlooking the Swan River and skyline — free.', '市内西側の丘にある広い公園で、スワン川と市内の高層ビルを一望でき、無料です。'],
      ['프리맨틀', 'Fremantle', 'フリーマントル', '열차로 약 30분 거리의 항구 도시로, 어항에서 피시 앤드 칩스를 먹고 수제 맥주 양조장을 둘러봅니다.', 'The port town about 30 minutes by train: fish and chips at the Fishing Boat Harbour and craft breweries.', '列車で約30分の港町で、漁港でフィッシュ・アンド・チップスを食べ、クラフトビールの醸造所を巡ります。'],
      ['퍼스 동물원', 'Perth Zoo', 'パース動物園', '스완강 건너 사우스 퍼스에 있는 동물원으로, 캥거루·코알라 등 호주 동물을 볼 수 있습니다.', 'Across the Swan River in South Perth, with kangaroos, koalas and other Australian animals.', 'スワン川の対岸サウス・パースにある動物園で、カンガルーやコアラなどオーストラリアの動物が見られます。'],
    ],
    t: [
      ['공항에서 시내: 퍼스 공항의 에어포트 센트럴역에서 열차를 타면 퍼스역까지 약 18분이며, 3시간 동안 환승할 수 있는 ‘고 애니웨어’ 요금이 적용됩니다.', 'Airport to city: trains from Airport Central reach Perth Station in about 18 minutes on the Go Anywhere fare, valid for three hours of transfers.', '空港から市内へ：パース空港のエアポート・セントラル駅から列車でパース駅まで約18分で、3時間乗り継ぎできる「ゴー・エニウェア」運賃が適用されます。'],
    ],
  },
  manchester: {
    h: [
      ['과학산업박물관', 'Science and Industry Museum', '科学産業博物館', '세계 최초의 여객 철도역 자리에 있는 박물관으로, 산업혁명 시대 기계를 볼 수 있습니다. 입장은 무료이며 무료 시간 지정권 예약을 권합니다.', 'On the site of the world’s first passenger railway station, with Industrial Revolution machines; free, with free timed tickets recommended.', '世界初の旅客鉄道駅の跡地にある博物館で、産業革命時代の機械が見られます。入場は無料で、無料の時間指定券の予約がおすすめです。'],
      ['올드 트래퍼드 투어', 'Old Trafford Tour & Museum', 'オールド・トラッフォード・ツアー', '맨체스터 유나이티드 홈구장의 라커룸과 선수 입장 통로, 박물관을 둘러보는 투어입니다.', 'Tour Manchester United’s dressing room, players’ tunnel and museum.', 'マンチェスター・ユナイテッドの本拠地のロッカールームや選手入場通路、博物館を巡るツアーです。'],
      ['무료 박물관과 미술관', 'Free museums and galleries', '無料の博物館・美術館', '맨체스터 박물관 등 시내의 많은 박물관과 미술관이 무료로 열려 있습니다.', 'Many city museums and galleries, including Manchester Museum, are free.', 'マンチェスター博物館など市内の多くの博物館や美術館が無料で公開されています。'],
    ],
    t: [
      ['공항에서 시내: 맨체스터 공항에서 메트로링크 트램을 타면 시내까지 갈 수 있으며, 4개 구간 단일권이 필요합니다.', 'Airport to city: Metrolink trams run from Manchester Airport into the city on a four-zone single.', '空港から市内へ：マンチェスター空港からメトロリンクのトラムで市内まで行け、4ゾーンの片道券が必要です。'],
    ],
  },
  christchurch: {
    h: [
      ['국제 남극센터', 'International Antarctic Centre', '国際南極センター', '공항 옆에 있는 체험관으로, 남극 폭풍 체험과 펭귄, 설상차 체험을 할 수 있습니다.', 'Beside the airport: an Antarctic storm room, penguins and Hägglund rides.', '空港の隣にある体験施設で、南極の嵐体験やペンギン、雪上車の体験ができます。'],
      ['크라이스트처치 트램', 'Christchurch Tram', 'クライストチャーチ・トラム', '시내를 한 바퀴 도는 옛 트램으로, 해설을 들으며 하루 동안 자유롭게 타고 내릴 수 있습니다.', 'A heritage tram loop through the centre with commentary; hop on and off all day.', '市内を一周するレトロなトラムで、解説を聞きながら一日自由に乗り降りできます。'],
      ['캔터베리 식재료', 'Canterbury produce', 'カンタベリーの食材', '캔터베리 양고기와 아카로아 연어 등 지역 식재료를 쓰는 식당이 많습니다.', 'Restaurants showcase Canterbury lamb, Akaroa salmon and other local produce.', 'カンタベリーのラム肉やアカロア産サーモンなど、地元の食材を使う店が多いです。'],
    ],
    t: [
      ['공항에서 시내: 크라이스트처치 공항에서 29번 메트로 버스를 타면 시내 버스 환승 센터까지 갈 수 있으며, 일반 버스 요금이 적용됩니다.', 'Airport to city: Metro route 29 runs from the airport to the central bus interchange at the standard bus fare.', '空港から市内へ：クライストチャーチ空港からメトロの29番バスで市内のバス乗り換えセンターまで行け、通常のバス運賃が適用されます。'],
    ],
  },
  glasgow: {
    h: [
      ['켈빈그로브 미술관·박물관', 'Kelvingrove Art Gallery and Museum', 'ケルヴィングローヴ美術館・博物館', '달리의 〈십자가의 성 요한의 그리스도〉 등을 소장한 붉은 사암 건물의 미술관으로, 입장은 무료입니다.', 'A red-sandstone gallery holding Dalí’s Christ of St John of the Cross — free to enter.', 'ダリの「十字架の聖ヨハネのキリスト」などを所蔵する赤砂岩の美術館で、入場は無料です。'],
      ['글래스고 과학센터', 'Glasgow Science Centre', 'グラスゴー科学センター', '클라이드강 변의 체험형 과학관으로, 플라네타리움과 아이맥스 영화관이 있습니다.', 'A hands-on science centre on the Clyde with a planetarium and IMAX.', 'クライド川沿いの体験型科学館で、プラネタリウムやIMAXシアターがあります。'],
      ['글래스고 지하철', 'Glasgow Subway', 'グラスゴー地下鉄', '시내와 웨스트 엔드를 원형으로 잇는 세계에서 세 번째로 오래된 지하철입니다.', 'The world’s third-oldest underground, a circle linking the centre and West End.', '市内とウエスト・エンドを環状に結ぶ、世界で3番目に古い地下鉄です。'],
    ],
    t: [
      ['공항에서 시내: 글래스고 공항에서 500번 공항버스(24시간 운행)를 타면 약 15~25분이면 시내에 닿습니다. 요금은 최근 바뀌었으니 운영사 사이트에서 확인하세요.', 'Airport to city: the 24-hour Airport Express 500 bus reaches the centre in about 15–25 minutes; fares changed recently, so check the operator’s site.', '空港から市内へ：グラスゴー空港から24時間運行の500番空港バスで約15〜25分で市内に着きます。運賃は最近変わったので運行会社のサイトで確認しましょう。'],
    ],
  },
  'san-diego': {
    h: [
      ['샌디에이고 동물원', 'San Diego Zoo', 'サンディエゴ動物園', '발보아 파크 안의 세계적인 동물원으로, 1일권에 가이드 버스 투어와 케이블카(스카이파리)가 포함됩니다.', 'The world-famous zoo in Balboa Park; the 1-Day Pass includes the guided bus tour and Skyfari aerial tram.', 'バルボア・パーク内の世界的な動物園で、1日券にガイド付きバスツアーとロープウェイ（スカイファリ）が含まれます。'],
      ['발보아 파크', 'Balboa Park', 'バルボア・パーク', '스페인풍 건물과 박물관, 정원이 모인 넓은 공원으로, 공원과 식물관·대부분의 정원은 무료입니다.', 'A vast park of Spanish-style buildings, museums and gardens; the park, Botanical Building and most gardens are free.', 'スペイン風の建物や博物館、庭園が集まる広い公園で、公園と植物館、ほとんどの庭園は無料です。'],
      ['USS 미드웨이 박물관', 'USS Midway Museum', 'USSミッドウェイ博物館', '항구에 정박한 퇴역 항공모함으로, 비행갑판의 전투기와 함내를 둘러봅니다.', 'A retired aircraft carrier on the harbour: aircraft on the flight deck and life below decks.', '港に停泊する退役した空母で、飛行甲板の戦闘機や艦内を見学できます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(7.75%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 7.75% sales tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（7.75%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: 공항 터미널에서 MTS 992번 버스를 타면 약 15분 만에 다운타운 산타페역 근처에 닿습니다. 요금은 일반 버스와 같습니다.', 'Airport to city: MTS Route 992 runs from the terminals to downtown near Santa Fe Depot in about 15 minutes at the regular fare.', '空港から市内へ：空港ターミナルからMTSの992番バスで約15分、ダウンタウンのサンタフェ駅近くに着きます。運賃は通常のバスと同じです。'],
    ],
  },
  adelaide: {
    h: [
      ['애들레이드 센트럴 마켓', 'Adelaide Central Market', 'アデレード・セントラル・マーケット', '1869년에 문을 연 시장으로, 70곳이 넘는 가게에서 남호주 식재료와 먹거리를 팝니다.', 'Open since 1869, with 70-plus traders selling South Australian produce and food.', '1869年に開業した市場で、70を超える店が南オーストラリアの食材や食べ物を売っています。'],
      ['남호주 박물관', 'South Australian Museum', '南オーストラリア博物館', '호주 원주민 문화 전시로 유명한 노스 테라스의 박물관으로, 입장은 무료입니다.', 'North Terrace museum renowned for its Aboriginal cultures gallery — free entry.', 'オーストラリア先住民の文化展示で知られるノース・テラスの博物館で、入場は無料です。'],
      ['남호주 미술관', 'Art Gallery of South Australia', '南オーストラリア美術館', '호주 미술 소장품이 풍부한 미술관으로, 일반 입장은 무료입니다(일부 특별전 유료).', 'A strong collection of Australian art; general entry is free (some exhibitions charge).', 'オーストラリア美術の所蔵が豊富な美術館で、一般入場は無料です（一部の特別展は有料）。'],
    ],
    t: [
      ['공항에서 시내: 애들레이드 공항 10번 정류장에서 시내버스(J 노선)를 타면 시내까지 갈 수 있으며, 일반 버스 요금(평일 피크와 오프피크가 다름)이 적용됩니다.', 'Airport to city: Adelaide Metro J-route buses leave from Stop 10 at the airport at the regular fare, which differs between peak and off-peak.', '空港から市内へ：アデレード空港の10番乗り場から市バス（J系統）で市内へ行け、通常のバス運賃（ピークとオフピークで異なる）が適用されます。'],
    ],
  },
  liverpool: {
    h: [
      ['비틀스 스토리', 'The Beatles Story', 'ビートルズ・ストーリー', '앨버트 독에 있는 비틀스 박물관으로, 캐번 클럽 재현 등으로 밴드의 역사를 따라갑니다.', 'The Beatles museum at Albert Dock, tracing the band’s story with a recreated Cavern Club.', 'アルバート・ドックにあるビートルズの博物館で、キャバーン・クラブの再現などでバンドの歴史をたどります。'],
      ['리버풀 국립박물관', 'National Museums Liverpool', 'リバプール国立博物館', '리버풀 박물관, 머지사이드 해양박물관, 국제노예제박물관 등이 모두 무료입니다.', 'The Museum of Liverpool, Merseyside Maritime Museum, International Slavery Museum and more — all free.', 'リバプール博物館、マージーサイド海洋博物館、国際奴隷博物館などがすべて無料です。'],
      ['스카우스', 'Scouse', 'スカウス', '뱃사람 음식 ‘롭스카우스’에서 온 리버풀 대표 스튜로, 붉은 비트 절임과 빵을 곁들여 먹습니다.', 'Liverpool’s signature stew, from the sailors’ “lobscouse”, served with pickled beetroot and bread.', '船乗りの料理「ロブスカウス」に由来するリバプールの名物シチューで、赤かぶの酢漬けとパンを添えて食べます。'],
    ],
    t: [
      ['시내버스는 어느 회사 버스든 1회 2파운드 상한 요금이 적용됩니다. 공항에서 시내까지는 500번 버스가 약 30분 간격으로 운행합니다.', 'City buses are capped at £2 a single on any operator; from the airport, bus 500 runs to the centre about every 30 minutes.', '市内バスはどの会社のバスでも1回2ポンドの上限運賃が適用されます。空港から市内へは500番バスが約30分間隔で運行しています。'],
    ],
  },
  heidelberg: {
    h: [
      ['하이델베르크 고성', 'Heidelberg Castle', 'ハイデルベルク城', '언덕 위의 붉은 사암 성으로, 입장권에 케이블카와 거대한 술통, 독일 약학박물관이 포함됩니다.', 'The red-sandstone castle on the hill; the ticket covers the funicular, the Great Tun and the German Apothecary Museum.', '丘の上の赤砂岩の城で、入場券にケーブルカーや大樽、ドイツ薬事博物館が含まれます。'],
      ['하이델베르크 학생의 키스', 'Heidelberger Studentenkuss', 'ハイデルベルクの学生のキス', '19세기에 시내 초콜릿 가게에서 만든 누가 트뤼플 초콜릿으로, 지금도 원래 제조법으로 만듭니다.', 'A nougat-truffle chocolate created in the 19th century by a local chocolatier, still made to the original recipe.', '19世紀に市内のショコラティエが作ったヌガー・トリュフのチョコレートで、今も当時のレシピで作られています。'],
      ['바덴·팔츠 향토 요리', 'Baden and Palatinate cooking', 'バーデン・プファルツの郷土料理', '슈페츨레를 곁들인 자우어브라텐과 팔츠식 소시지 모둠 등 지역 요리를 맛볼 수 있습니다.', 'Try Sauerbraten with Spätzle or a hearty Palatinate sausage platter.', 'シュペッツレを添えたザウアーブラーテンや、プファルツ風のソーセージ盛り合わせなどの郷土料理が味わえます。'],
    ],
    t: [
      ['시내 대중교통 1회권(시내 요금)은 90분 동안 유효합니다. 정류장 몇 개만 타면 더 싼 단거리권(쿠르츠슈트레케)을 쓸 수 있습니다.', 'A city single (Stadttarif HD) is valid for 90 minutes; for just a few stops, the cheaper short-hop ticket (Kurzstrecke) works.', '市内の公共交通の1回券（市内料金）は90分間有効です。数駅だけ乗るなら安い短距離券（クルツシュトレッケ）が使えます。'],
    ],
  },
  bilbao: {
    h: [
      ['구겐하임 미술관 빌바오', 'Guggenheim Museum Bilbao', 'グッゲンハイム美術館ビルバオ', '프랭크 게리가 설계한 티타늄 건물의 현대미술관으로, 입장권에 오디오 가이드가 포함되고 18세 미만은 무료입니다.', 'Frank Gehry’s titanium-clad modern art museum; the ticket includes an audio guide, and under-18s are free.', 'フランク・ゲーリー設計のチタンの建物の現代美術館で、入場券に音声ガイドが含まれ、18歳未満は無料です。'],
      ['구시가지 핀초 바', 'Old Town pintxo bars', '旧市街のピンチョス・バル', '바 카운터에 놓인 핀초를 골라 먹으며 여러 바를 돌아다니는 것이 빌바오식입니다.', 'Pick pintxos from the counters and hop from bar to bar, Bilbao-style.', 'カウンターに並ぶピンチョスを選んで食べ、何軒もバルを巡るのがビルバオ流です。'],
      ['바스크 전통 요리', 'Basque classics', 'バスクの伝統料理', '바칼라오 알 필필(대구 요리)과 오징어 먹물 요리 등 바스크 전통 요리를 맛볼 수 있습니다.', 'Taste bacalao al pil-pil, squid in its ink and other Basque classics.', 'バカラオ・アル・ピルピル（タラ料理）やイカの墨煮などバスクの伝統料理が味わえます。'],
    ],
    t: [
      ['시내버스(빌보부스) 1회권은 1.70유로이며, 교통카드 바릭(Barik)을 쓰면 훨씬 싸고 45분 안에 무료 환승이 됩니다. 공항에서는 비스카이부스 A3247번이 시내까지 갑니다.', 'A Bilbobus single costs €1.70; a Barik card is much cheaper and gives free transfers within 45 minutes. Bizkaibus A3247 links the airport to the city.', '市内バス（ビルボブス）の1回券は1.70ユーロで、交通カード「バリック（Barik）」を使うとずっと安く、45分以内の乗り換えが無料です。空港からはビスカイブスA3247番で市内へ行けます。'],
    ],
  },
  toulouse: {
    h: [
      ['시테 드 레스파스', 'Cité de l’espace', 'シテ・ドゥ・レスパス', '실물 크기 로켓과 우주정거장 모형, 플라네타리움이 있는 우주 테마 과학관입니다.', 'A space theme park with a full-size rocket, space-station mock-ups and a planetarium.', '実物大のロケットや宇宙ステーションの模型、プラネタリウムがある宇宙テーマの科学館です。'],
      ['카술레', 'Cassoulet', 'カスレ', '흰콩과 오리 콩피, 툴루즈 소시지를 질그릇에 오래 익힌 툴루즈 대표 요리입니다.', 'Toulouse’s classic of white beans, duck confit and Toulouse sausage slow-cooked in an earthenware cassole.', '白いんげん豆と鴨のコンフィ、トゥールーズ・ソーセージを土鍋でじっくり煮込んだトゥールーズの代表料理です。'],
      ['제비꽃(비올레트)', 'Toulouse violets', 'スミレ（ヴィオレット）', '도시의 상징 꽃으로, 미디 운하에 떠 있는 배 ‘제비꽃의 집’에서 사탕과 기념품을 살 수 있습니다.', 'The city’s emblem flower; find violet sweets and gifts at the Maison de la Violette, a barge on the Canal du Midi.', '街のシンボルの花で、ミディ運河に浮かぶ船「スミレの家」でお菓子やお土産が買えます。'],
    ],
    t: [
      ['공항에서 시내: 툴루즈-블라냐크 공항에서 공항 셔틀을 타면 약 15분 간격으로 마타비오역까지 가며, 시간은 20~45분 걸립니다. 공항 승차권 1장으로 시내 교통도 이어서 탈 수 있습니다.', 'Airport to city: the airport shuttle runs to Matabiau station about every 15 minutes, taking 20–45 minutes; the airport ticket also covers onward Tisséo travel.', '空港から市内へ：トゥールーズ・ブラニャック空港から空港シャトルで約15分間隔でマタビオ駅へ行け、所要20〜45分です。空港の乗車券1枚で市内の交通にも乗り継げます。'],
    ],
  },
  cairns: {
    h: [
      ['케언스 아쿠아리움', 'Cairns Aquarium', 'ケアンズ水族館', '열대 북퀸즐랜드의 강과 산호초 생물을 모아 놓은 수족관입니다.', 'Showcases the rivers and reefs of tropical north Queensland.', '熱帯の北クイーンズランドの川やサンゴ礁の生き物を集めた水族館です。'],
      ['러스티스 마켓', 'Rusty’s Markets', 'ラスティーズ・マーケット', '약 180개 가게에서 람부탄·용과·망고스틴 같은 열대 과일을 파는 시장입니다.', 'About 180 stalls of tropical fruit like rambutan, dragon fruit and mangosteen.', '約180の店でランブータンやドラゴンフルーツ、マンゴスチンなどの熱帯フルーツを売る市場です。'],
      ['그레이트 배리어 리프', 'Great Barrier Reef', 'グレートバリアリーフ', '시내 선착장에서 출발하는 투어 배로 산호초 스노클링과 다이빙을 즐깁니다.', 'Reef boats leave from the city terminal for snorkelling and diving.', '市内の桟橋から出るツアー船でサンゴ礁のシュノーケリングやダイビングを楽しめます。'],
    ],
    t: [
      ['시내버스는 1회 50센트이며 2시간 안에 환승할 수 있습니다. 11월 23일부터는 공항과 시내를 잇는 100번 버스도 50센트에 운행합니다.', 'City buses cost 50 cents a trip with two hours of transfers; from 23 November, route 100 links the airport and city for 50 cents too.', '市内バスは1回50セントで、2時間以内なら乗り換えできます。11月23日からは空港と市内を結ぶ100番バスも50セントで運行します。'],
    ],
  },
  verona: {
    h: [
      ['아레나 디 베로나', 'Arena di Verona', 'アレーナ・ディ・ヴェローナ', '1세기에 지어진 로마 원형극장으로, 지금도 여름 오페라 공연장으로 쓰입니다. 14세 미만은 보호자 동반 시 무료입니다.', 'A 1st-century Roman amphitheatre still used for summer opera; under-14s accompanied by an adult enter free.', '1世紀に建てられたローマの円形闘技場で、今も夏のオペラ会場として使われています。14歳未満は保護者同伴で無料です。'],
      ['줄리엣의 집', 'Juliet’s House', 'ジュリエットの家', '유명한 발코니가 있는 중세 저택으로, 온라인 예약이 필수입니다.', 'The medieval house with the famous balcony; online booking is required.', '有名なバルコニーがある中世の邸宅で、オンライン予約が必須です。'],
      ['아마로네 리소토', 'Risotto all’Amarone', 'アマローネのリゾット', '발폴리첼라의 아마로네 와인으로 지은 베로나 대표 리소토입니다.', 'Verona’s signature risotto made with Valpolicella’s Amarone wine.', 'ヴァルポリチェッラのアマローネワインで作るヴェローナを代表するリゾットです。'],
    ],
    t: [
      ['공항에서 시내: 베로나 공항에서 에어링크 버스(199번)를 타면 약 15분 만에 포르타 누오바역에 닿으며, 버스 안에서 카드로 낼 수 있습니다. 시내버스 1회권은 버스 안에서 사면 더 비쌉니다.', 'Airport to city: the Airlink bus (line 199) reaches Porta Nuova station in about 15 minutes, with card payment on board; city bus singles cost more when bought on board.', '空港から市内へ：ヴェローナ空港からエアリンクバス（199番）で約15分でポルタ・ヌオーヴァ駅に着き、車内でカード払いができます。市内バスの1回券は車内で買うと高くなります。'],
    ],
  },
  thessaloniki: {
    h: [
      ['테살로니키 고고학 박물관', 'Archaeological Museum of Thessaloniki', 'テッサロニキ考古学博物館', '마케도니아 왕국의 금 장신구 등 북부 그리스의 고대 유물을 전시합니다.', 'Ancient treasures of northern Greece, including Macedonian gold.', 'マケドニア王国の金細工など北部ギリシャの古代の遺物を展示しています。'],
      ['화이트 타워', 'White Tower', 'ホワイトタワー', '바닷가에 선 도시의 상징으로, 내부는 도시 역사 전시관입니다. 동시 입장 인원이 제한됩니다.', 'The city’s seafront symbol, housing a city-history exhibition; visitor numbers inside are limited.', '海沿いに立つ街のシンボルで、内部は街の歴史の展示館です。同時に入れる人数が限られています。'],
      ['부가차', 'Bougatsa', 'ブガツァ', '필로 반죽에 세몰리나 크림이나 치즈를 넣어 구운 테살로니키의 아침 빵입니다.', 'Thessaloniki’s breakfast pastry of phyllo filled with semolina cream or cheese.', 'フィロ生地にセモリナのクリームやチーズを包んで焼いたテッサロニキの朝食パイです。'],
    ],
    t: [
      ['공항에서 시내: 마케도니아 공항 1번 터미널 4번 출구 앞에서 01X번(심야 01N번) 버스를 타면 시내와 기차역을 거쳐 시외버스 터미널까지 갑니다. 공항 노선은 일반 승차권이 아닌 전용 1회권이 필요합니다.', 'Airport to city: bus 01X (night 01N) leaves from Exit 4 of Terminal 1 for the centre, the railway station and the intercity bus terminal; it needs its own single ticket, not a standard one.', '空港から市内へ：マケドニア空港第1ターミナル4番出口前から01X番（深夜は01N番）バスで市内や鉄道駅を経て長距離バスターミナルまで行けます。空港路線は通常の乗車券ではなく専用の1回券が必要です。'],
    ],
  },
  chengdu: {
    h: [
      ['청두 판다 번식 연구기지', 'Chengdu Research Base of Giant Panda Breeding', '成都ジャイアントパンダ繁育研究基地', '숲속 넓은 부지에서 자이언트 판다와 레서판다를 볼 수 있는 연구기지로, 온라인 사전 예약이 필요합니다.', 'See giant and red pandas in leafy grounds; online booking required.', '緑豊かな広い敷地でジャイアントパンダやレッサーパンダが見られる研究基地で、オンラインでの事前予約が必要です。'],
      ['쓰촨 훠궈', 'Sichuan hotpot', '四川火鍋', '맵고 얼얼한 국물에 소고기·내장 등을 데쳐 먹으며, 처음이라면 맑은 국물과 반반인 원앙 냄비를 고르세요.', 'Cook beef, tripe and more in a numbing-spicy broth; first-timers should try the half-and-half “yuan-yang” pot.', 'しびれる辛さのスープで牛肉や内臓などをしゃぶしゃぶして食べます。初めてなら辛いスープと白湯が半分ずつの鴛鴦鍋を選びましょう。'],
      ['청두 간식', 'Chengdu snacks', '成都の軽食', '단단면, 종 만두, 촨촨샹 꼬치 등 저렴한 쓰촨 간식을 골목과 야시장에서 맛볼 수 있습니다.', 'Dandan noodles, Zhong dumplings and chuan chuan skewers in lanes and night markets.', '担担麺や鍾水餃、串串香など手頃な四川の軽食を路地や夜市で味わえます。'],
    ],
    t: [
      ['지하철은 거리에 따라 2위안부터 요금이 오르며, 1일권(20위안)으로 하루 동안 무제한 탈 수 있습니다. 톈푸 국제공항은 18호선 급행으로 시내 남역까지 약 37분 걸립니다.', 'The metro starts at ¥2 and rises with distance; a ¥20 day ticket gives unlimited rides. From Tianfu International Airport, Line 18 express reaches South Railway Station in about 37 minutes.', '地下鉄は2元から距離に応じて運賃が上がり、1日券（20元）で一日乗り放題です。天府国際空港からは18号線の快速で成都南駅まで約37分です。'],
    ],
  },
  'mexico-city': {
    h: [
      ['국립인류학박물관', 'National Museum of Anthropology', '国立人類学博物館', '아스테카 태양의 돌 등 멕시코 고대 문명 유물을 모은 박물관입니다. 13세 미만은 무료입니다.', 'Home to the Aztec Sun Stone and treasures of Mexico’s ancient civilisations; under-13s are free.', 'アステカの太陽の石など、メキシコの古代文明の遺物を集めた博物館です。13歳未満は無料です。'],
      ['역사지구와 소칼로', 'Historic Centre and the Zócalo', '歴史地区とソカロ', '세계에서 가장 큰 광장 중 하나인 소칼로를 중심으로 대성당과 아스테카 신전 유적이 모여 있습니다.', 'The vast Zócalo, ringed by the cathedral and the Aztec Templo Mayor.', '世界最大級の広場ソカロを中心に、大聖堂やアステカの神殿跡が集まっています。'],
      ['타코 알 파스토르', 'Tacos al pastor', 'タコス・アル・パストール', '회전 꼬치에 구운 양념 돼지고기를 얹은 멕시코시티 대표 길거리 타코입니다.', 'Mexico City’s signature street taco of spit-roasted marinated pork.', '回転する串で焼いた味付け豚肉をのせた、メキシコシティを代表する屋台のタコスです。'],
    ],
    t: [
      ['지하철은 거리와 환승에 관계없이 1회 5페소이며, 교통카드나 신용카드 탭으로 탈 수 있습니다. 공항에서 시내까지는 메트로부스 공항 노선(30페소)을 타면 되고, 현금은 받지 않습니다.', 'The metro costs 5 pesos per trip regardless of distance or transfers, paid by transit card or contactless card; from the airport, the Metrobús airport service costs 30 pesos and takes no cash.', '地下鉄は距離や乗り換えに関係なく1回5ペソで、交通カードやクレジットカードのタッチ決済で乗れます。空港から市内へはメトロブスの空港路線（30ペソ）が便利で、現金は使えません。'],
    ],
  },
  philadelphia: {
    h: [
      ['필라델피아 미술관', 'Philadelphia Museum of Art', 'フィラデルフィア美術館', '영화 〈록키〉의 계단으로 유명한 대형 미술관으로, 입장권으로 로댕 박물관도 이틀간 볼 수 있습니다.', 'The great museum atop the “Rocky Steps”; admission also covers the Rodin Museum for two days.', '映画「ロッキー」の階段で有名な大規模な美術館で、入場券でロダン美術館も2日間見学できます。'],
      ['리딩 터미널 마켓', 'Reading Terminal Market', 'リーディング・ターミナル・マーケット', '로스트 포크 샌드위치와 소프트 프레첼 등 필라델피아 명물을 한곳에서 맛볼 수 있는 실내 시장입니다.', 'An indoor market for roast pork sandwiches, soft pretzels and other Philly classics.', 'ローストポーク・サンドイッチやソフトプレッツェルなど、フィラデルフィアの名物を一度に味わえる屋内市場です。'],
      ['치즈스테이크', 'Cheesesteak', 'チーズステーキ', '얇게 썬 소고기와 치즈를 빵에 끼운 필라델피아 대표 샌드위치로, 1930년에 처음 만들어졌다고 합니다.', 'Thin-sliced beef and cheese on a roll, said to date from 1930.', '薄切り牛肉とチーズをパンに挟んだフィラデルフィア名物のサンドイッチで、1930年に生まれたといわれます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(8%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 8% sales tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（8%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: SEPTA 공항선 열차로 센터 시티까지 갈 수 있으며, 교통카드(SEPTA Key)나 신용카드 탭으로 내면 차내 현금 요금보다 쌉니다.', 'Airport to city: the SEPTA Airport Line runs to Center City; paying with SEPTA Key or a contactless card is cheaper than paying on board.', '空港から市内へ：SEPTA空港線でセンター・シティまで行けます。交通カード（SEPTA Key）やクレジットカードのタッチ決済で払うと車内での支払いより安くなります。'],
    ],
  },
  'new-orleans': {
    h: [
      ['국립 2차 세계대전 박물관', 'The National WWII Museum', '国立第二次世界大戦博物館', '미국의 2차 세계대전 참전 역사를 체험형 전시로 보여 주는 대형 박물관입니다.', 'A vast, immersive museum of America’s role in the Second World War.', 'アメリカの第二次世界大戦の歴史を体験型展示で伝える大規模な博物館です。'],
      ['카페 뒤 몽드의 베녜', 'Beignets at Café du Monde', 'カフェ・デュ・モンドのベニエ', '1862년부터 프렌치 마켓에서 슈거파우더를 뿌린 튀긴 빵 베녜와 카페오레를 팔고 있습니다.', 'Powdered-sugar beignets and café au lait at the French Market since 1862.', '1862年からフレンチ・マーケットで粉砂糖をかけた揚げパン「ベニエ」とカフェオレを出しています。'],
      ['세인트찰스 노면전차', 'St. Charles streetcar', 'セント・チャールズ線の路面電車', '오래된 저택이 늘어선 가든 디스트릭트를 지나는 노면전차로, 일반 버스와 같은 요금입니다.', 'Historic streetcars through the mansion-lined Garden District at the regular bus fare.', '古い邸宅が並ぶガーデン・ディストリクトを走る路面電車で、運賃は通常のバスと同じです。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(10%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 10% sales tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（10%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: RTA 202번 공항 급행버스를 타면 다운타운까지 가며, 요금은 일반 버스와 같은 1.25달러입니다.', 'Airport to city: RTA Airport Express route 202 runs downtown for the regular $1.25 fare.', '空港から市内へ：RTAの202番空港急行バスでダウンタウンまで行け、運賃は通常のバスと同じ1.25ドルです。'],
    ],
  },
  ottawa: {
    h: [
      ['캐나다 역사박물관', 'Canadian Museum of History', 'カナダ歴史博物館', '오타와강 건너편에 있는 박물관으로, 원주민 토템 기둥이 늘어선 그랜드 홀이 유명합니다.', 'Across the Ottawa River, famed for its Grand Hall of Indigenous totem poles.', 'オタワ川の対岸にある博物館で、先住民のトーテムポールが並ぶグランドホールが有名です。'],
      ['캐나다 국립미술관', 'National Gallery of Canada', 'カナダ国立美術館', '거대한 거미 조각 ‘마망’이 있는 유리 건물의 미술관으로, 11세 이하는 무료입니다.', 'The glass gallery guarded by the giant spider sculpture Maman; children 11 and under are free.', '巨大なクモの彫刻「ママン」がいるガラス張りの美術館で、11歳以下は無料です。'],
      ['비버테일', 'BeaverTails', 'ビーバーテイル', '1979년 바이워드 마켓에서 시작된 비버 꼬리 모양 튀긴 빵으로, 계피 설탕 맛이 기본입니다.', 'The beaver-tail-shaped fried pastry born in the ByWard Market in 1979; cinnamon sugar is the classic.', '1979年にバイワード・マーケットで生まれたビーバーの尾の形の揚げパンで、シナモンシュガー味が定番です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 HST(13%)와 팁이 빠져 있습니다. 팁은 15~18%가 일반적입니다.', 'Menu prices exclude 13% HST and tip; a 15–18% tip is usual.', '飲食店のメニュー価格にはHST（13%）とチップが含まれていません。チップは15〜18%が一般的です。'],
      ['공항에서 시내: O-트레인 4호선으로 사우스 키스역까지 간 뒤 2호선으로 갈아타 시내로 갑니다. 일반 1회 요금으로 환승 시간 안에 이어서 탈 수 있습니다.', 'Airport to city: take O-Train Line 4 to South Keys and change to Line 2; the regular single fare covers the transfer.', '空港から市内へ：Oトレイン4号線でサウス・キーズ駅まで行き、2号線に乗り換えます。通常の1回運賃で乗り換え時間内なら続けて乗れます。'],
    ],
  },
  calgary: {
    h: [
      ['헤리티지 파크·가솔린 앨리 박물관', 'Heritage Park / Gasoline Alley Museum', 'ヘリテージ・パーク／ガソリン・アレー博物館', '캐나다 서부 개척 시대 마을을 재현한 공원으로, 클래식카 박물관인 가솔린 앨리는 일 년 내내 엽니다(마을은 계절 운영).', 'A recreated pioneer village of western Canada; the Gasoline Alley vintage-car museum is open year-round (the village is seasonal).', 'カナダ西部開拓時代の村を再現した公園で、クラシックカーの博物館ガソリン・アレーは一年中開いています（村は季節営業）。'],
      ['진저 비프', 'Ginger beef', 'ジンジャービーフ', '1970년대 캘거리의 중식당에서 처음 만든 바삭한 소고기 튀김 요리입니다.', 'Crispy sweet-spicy beef, created in a Calgary Chinese restaurant in the 1970s.', '1970年代にカルガリーの中華料理店で生まれた、カリッと揚げた甘辛い牛肉料理です。'],
      ['앨버타 소고기 스테이크', 'Alberta beef steak', 'アルバータ牛のステーキ', '캐나다 소고기의 절반을 생산하는 앨버타의 스테이크를 1972년부터 영업한 스테이크 하우스 등에서 맛볼 수 있습니다.', 'Alberta produces half of Canada’s beef — try it at long-running steakhouses.', 'カナダの牛肉の半分を生産するアルバータのステーキを、老舗ステーキハウスなどで味わえます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 GST(5%)와 팁이 빠져 있습니다. 앨버타는 주 판매세가 없어 세금 부담이 적은 편이고, 팁은 15~18%가 일반적입니다.', 'Menu prices exclude 5% GST and tip; Alberta has no provincial sales tax, and a 15–18% tip is usual.', '飲食店のメニュー価格にはGST（5%）とチップが含まれていません。アルバータ州は州の売上税がないため税負担が軽めで、チップは15〜18%が一般的です。'],
    ],
  },
  portland: {
    h: [
      ['포틀랜드 일본 정원', 'Portland Japanese Garden', 'ポートランド日本庭園', '언덕 위에 조성된 일본식 정원으로, 날씨가 맑으면 후드산이 보입니다. 입장권은 온라인으로 판매합니다.', 'A hillside Japanese garden with Mount Hood views on clear days; tickets are sold online.', '丘の上に造られた日本庭園で、晴れた日にはフッド山が見えます。入場券はオンラインで販売しています。'],
      ['푸드 카트', 'Food carts', 'フードカート', '500곳이 넘는 푸드 카트가 모인 ‘포드’에서 세계 각국 음식을 저렴하게 맛볼 수 있습니다.', '500-plus carts gathered in “pods” serving affordable food from around the world.', '500を超えるフードカートが集まる「ポッド」で、世界各国の料理を手頃に味わえます。'],
      ['판매세 없는 쇼핑', 'Tax-free shopping', '売上税のない買い物', '오리건주에는 판매세가 없어 표시된 가격 그대로 계산합니다.', 'Oregon has no sales tax, so you pay the price on the tag.', 'オレゴン州には売上税がないため、表示価格のまま支払います。'],
    ],
    t: [
      ['오리건주에는 판매세가 없어 식당 메뉴 가격에 세금이 붙지 않습니다. 다만 팁 18~20%는 따로 냅니다.', 'Oregon has no sales tax, so menus carry no tax — but an 18–20% tip is still expected.', 'オレゴン州には売上税がないため、飲食店のメニュー価格に税はかかりません。ただしチップ18〜20%は別に払います。'],
      ['공항에서 시내: 포틀랜드 공항에서 MAX 레드 라인을 타면 다운타운까지 갈 수 있으며, 2시간 반 동안 환승할 수 있는 일반 요금 2.80달러가 적용됩니다. 신용카드 탭으로 바로 탈 수 있습니다.', 'Airport to city: the MAX Red Line runs from PDX to downtown on the standard $2.80 fare, valid 2½ hours; tap a contactless card to ride.', '空港から市内へ：ポートランド空港からMAXレッドラインでダウンタウンまで行け、2時間半乗り継ぎできる通常運賃2.80ドルが適用されます。クレジットカードのタッチで乗れます。'],
    ],
  },
  victoria: {
    h: [
      ['부차트 가든', 'The Butchart Gardens', 'ブッチャート・ガーデン', '옛 석회암 채석장을 꽃 정원으로 바꾼 세계적인 정원으로, 시내에서 차로 약 30분입니다.', 'A world-famous garden created in a former limestone quarry, about 30 minutes from downtown.', 'かつての石灰岩の採石場を花の庭園に変えた世界的な庭園で、市内から車で約30分です。'],
      ['로열 BC 박물관', 'Royal BC Museum', 'ロイヤルBC博物館', '브리티시컬럼비아의 자연과 원주민 역사를 보여 주는 이너 하버의 박물관입니다.', 'The Inner Harbour museum of BC’s natural history and Indigenous heritage.', 'ブリティッシュコロンビアの自然や先住民の歴史を伝えるインナー・ハーバーの博物館です。'],
      ['애프터눈 티', 'Afternoon tea', 'アフタヌーンティー', '영국풍 도시답게 호텔과 찻집에서 지역 해산물을 곁들인 애프터눈 티를 즐길 수 있습니다.', 'True to its British style, hotels and tea rooms serve afternoon tea, some with local seafood.', 'イギリス風の街らしく、ホテルや喫茶店で地元の海産物を添えたアフタヌーンティーを楽しめます。'],
    ],
    t: [
      ['식당 메뉴 가격에는 GST(5%)와 팁이 빠져 있고, 술에는 주 판매세(PST)가 더 붙습니다. 팁은 15~18%가 일반적입니다. 버스는 1회 3달러이며 거스름돈을 주지 않습니다.', 'Menu prices exclude 5% GST and tip, with provincial tax added on alcohol; tip 15–18%. Buses cost $3 a ride, exact fare only.', '飲食店のメニュー価格にはGST（5%）とチップが含まれず、酒類には州税（PST）がさらにかかります。チップは15〜18%が一般的です。バスは1回3ドルで、おつりは出ません。'],
    ],
  },
  austin: {
    h: [
      ['불럭 텍사스 주 역사박물관', 'Bullock Texas State History Museum', 'ブロック・テキサス州歴史博物館', '주 의사당 근처에서 텍사스의 역사를 보여 주는 박물관으로, 5세 이하는 무료입니다.', 'Texas history near the Capitol; free for children five and under.', '州議事堂の近くでテキサスの歴史を紹介する博物館で、5歳以下は無料です。'],
      ['텍사스 바비큐', 'Texas barbecue', 'テキサス・バーベキュー', '오랜 시간 훈연한 브리스킷이 대표 메뉴로, 이름난 가게에는 아침부터 줄이 섭니다.', 'Slow-smoked brisket is the star; famous joints draw lines from the morning.', '長時間燻製したブリスケットが代表メニューで、有名店には朝から行列ができます。'],
      ['아침 타코', 'Breakfast tacos', '朝食タコス', '달걀·베이컨·콩 등을 토르티야에 싼 오스틴식 아침 식사입니다.', 'Austin’s breakfast of eggs, bacon or beans wrapped in tortillas.', '卵やベーコン、豆などをトルティーヤで包んだオースティン流の朝食です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(8.25%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 8.25% sales tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（8.25%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: 오스틴 공항에서 캡메트로 20번 버스를 타면 다운타운까지 1.25달러이며, 카드 탭으로 내면 하루 2회 요금까지만 청구됩니다. 요금은 2027년 1월 10일에 오를 예정입니다.', 'Airport to city: CapMetro route 20 runs downtown for $1.25, with tap-to-pay capped at two rides a day; fares rise on 10 January 2027.', '空港から市内へ：オースティン空港からキャップメトロ20番バスでダウンタウンまで1.25ドルで、カードのタッチ決済なら1日2回分までしか請求されません。運賃は2027年1月10日に値上げ予定です。'],
    ],
  },
  hobart: {
    h: [
      ['MONA(구신 미술관)', 'Mona (Museum of Old and New Art)', 'MONA（ミュージアム・オブ・オールド・アンド・ニュー・アート）', '강변 절벽을 파고 지은 개인 미술관으로, 고대 유물과 도발적인 현대미술을 함께 전시합니다. 시내에서 페리로 갈 수 있습니다.', 'A private museum carved into a riverside cliff, mixing antiquities with provocative contemporary art; reachable by ferry.', '川沿いの崖を掘って造られた個人美術館で、古代の遺物と挑発的な現代美術を一緒に展示しています。市内からフェリーで行けます。'],
      ['살라만카 마켓', 'Salamanca Market', 'サラマンカ・マーケット', '매주 토요일 오전 8시 반~오후 3시에 열리는 시장으로, 브루니섬 굴과 지역 치즈를 맛볼 수 있습니다.', 'Every Saturday 8:30am–3pm, with Bruny Island oysters and local cheeses.', '毎週土曜日の8時半〜15時に開かれる市場で、ブルーニー島のカキや地元のチーズを味わえます。'],
      ['태즈메이니아 굴', 'Tasmanian oysters', 'タスマニアのカキ', '달콤한 퍼시픽 굴과 버터 향이 진한 토종 앤가시 굴을 비교해 보세요.', 'Compare sweet Pacific oysters with rich, buttery native Angasi oysters.', '甘みのあるパシフィック・オイスターと、バターのような濃厚な在来種アンガシ・オイスターを食べ比べてみましょう。'],
    ],
    t: [
      ['메트로 태즈메이니아 버스는 2027년 6월 30일까지 무료로 운행합니다. 공항에서 시내까지는 스카이버스(약 30분)를 타며, 운전기사에게는 신용카드로만 낼 수 있습니다.', 'Metro Tasmania buses are free until 30 June 2027. From the airport, SkyBus takes about 30 minutes; drivers accept card only.', 'メトロ・タスマニアのバスは2027年6月30日まで無料です。空港から市内へはスカイバス（約30分）が便利で、運転手にはクレジットカードでのみ支払えます。'],
    ],
  },
  nashville: {
    h: [
      ['컨트리 음악 명예의 전당·박물관', 'Country Music Hall of Fame and Museum', 'カントリー音楽殿堂・博物館', '컨트리 음악의 역사와 스타들의 의상·악기를 전시하는 박물관으로, 5세 미만은 무료입니다.', 'The story of country music, with stars’ costumes and instruments; under-fives are free.', 'カントリー音楽の歴史やスターの衣装・楽器を展示する博物館で、5歳未満は無料です。'],
      ['내슈빌 핫 치킨', 'Nashville hot chicken', 'ナッシュビル・ホットチキン', '고추 양념을 듬뿍 바른 매운 프라이드치킨으로, 약 100년 전 한 가게에서 시작되었다고 합니다.', 'Fried chicken slathered in cayenne paste, said to date back nearly a century.', '唐辛子ペーストをたっぷり塗った辛いフライドチキンで、約100年前にある店で生まれたといわれます。'],
      ['미트 앤드 스리', 'Meat-and-three', 'ミート・アンド・スリー', '고기 요리 하나와 곁들이 세 가지를 고르는 남부식 가정식 식당입니다.', 'Southern diners where you pick one meat and three sides.', '肉料理を1品とおかずを3品選ぶ南部の家庭料理の食堂です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(9.75%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 9.75% sales tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（9.75%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: 위고(WeGo) 18번 버스를 타면 다운타운 환승센터까지 가며, 요금은 2달러(2시간 유효)입니다. 주말 운행 시간은 시간표를 확인하세요.', 'Airport to city: WeGo route 18 runs to the downtown transit centre for $2 (valid 2 hours); check weekend times.', '空港から市内へ：WeGoの18番バスでダウンタウンの乗り換えセンターまで行け、運賃は2ドル（2時間有効）です。週末の運行時間は時刻表で確認しましょう。'],
    ],
  },
  edmonton: {
    h: [
      ['로열 앨버타 박물관', 'Royal Alberta Museum', 'ロイヤル・アルバータ博物館', '앨버타의 자연사와 원주민 역사를 다루는 서부 캐나다 최대 박물관입니다.', 'Western Canada’s largest museum of natural and human history.', 'アルバータの自然史や先住民の歴史を扱う西カナダ最大の博物館です。'],
      ['그린 어니언 케이크', 'Green onion cakes', 'グリーンオニオンケーキ', '1980년 에드먼턴의 중식당에서 인기를 끈 파전 같은 음식으로, 도시 공식 음식으로 하자는 운동까지 있었습니다.', 'Pan-fried scallion cakes made famous by a local restaurateur in 1980 — once proposed as Edmonton’s official dish.', '1980年にエドモントンの中華料理店で人気になったネギ餅で、市の公式料理にしようという運動まで起きました。'],
      ['우크라이나 피로기', 'Ukrainian perogies', 'ウクライナのピエロギ', '우크라이나계 이민 역사가 깊은 지역답게 감자·치즈를 채운 만두 피로기 가게가 많습니다.', 'Reflecting deep Ukrainian roots, many spots serve potato-and-cheese perogies.', 'ウクライナ系移民の歴史が深い地域らしく、じゃがいもやチーズを詰めたピエロギの店が多いです。'],
    ],
    t: [
      ['식당 메뉴 가격에는 GST(5%)와 팁이 빠져 있습니다. 앨버타는 주 판매세가 없고, 팁은 15~18%가 일반적입니다. 버스·경전철은 아크(Arc) 카드나 신용카드 탭이 현금보다 쌉니다.', 'Menu prices exclude 5% GST and tip; Alberta has no provincial sales tax, and a 15–18% tip is usual. Arc or contactless card fares are cheaper than cash.', '飲食店のメニュー価格にはGST（5%）とチップが含まれていません。アルバータ州は州の売上税がなく、チップは15〜18%が一般的です。バスやLRTはArcカードやタッチ決済の方が現金より安いです。'],
    ],
  },
  winnipeg: {
    h: [
      ['캐나다 인권박물관', 'Canadian Museum for Human Rights', 'カナダ人権博物館', '인권을 주제로 한 세계 최초의 국립박물관으로, 꼭대기 유리 탑에서 시내가 내려다보입니다.', 'The world’s first national museum devoted to human rights, with city views from its glass tower.', '人権をテーマにした世界初の国立博物館で、最上部のガラスの塔から市内を見渡せます。'],
      ['더 포크스 마켓', 'The Forks Market', 'ザ・フォークス・マーケット', '두 강이 만나는 곳의 옛 철도 창고를 고친 시장으로, 피로기와 훈제 생선 가게가 있습니다.', 'A market in old rail buildings where the rivers meet, with perogy and smoked-fish stalls.', '二つの川が合流する場所にある鉄道倉庫を改装した市場で、ピエロギや燻製魚の店があります。'],
      ['훈제 골드아이', 'Smoked goldeye', '燻製ゴールドアイ', '매니토바 호수에서 잡은 생선을 훈제한 위니펙 명물입니다.', 'Winnipeg’s smoked local freshwater fish.', 'マニトバの湖でとれた魚を燻製にしたウィニペグ名物です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 GST(5%)와 매니토바 소매판매세(7%)가 빠져 있고, 팁은 15~18%가 일반적입니다. 버스는 피고(peggo) 카드로 내면 현금보다 쌉니다.', 'Menu prices exclude 5% GST and Manitoba’s 7% retail sales tax; tip 15–18%. Bus fares are cheaper on a peggo card than in cash.', '飲食店のメニュー価格にはGST（5%）とマニトバ州小売売上税（7%）が含まれず、チップは15〜18%が一般的です。バスはpeggoカードで払うと現金より安くなります。'],
    ],
  },
  halifax: {
    h: [
      ['피어 21 캐나다 이민 박물관', 'Canadian Museum of Immigration at Pier 21', 'ピア21カナダ移民博物館', '1928~1971년 약 100만 명의 이민자가 도착한 부두 건물을 박물관으로 꾸몄습니다.', 'The pier building where about a million immigrants arrived between 1928 and 1971.', '1928〜1971年に約100万人の移民が到着した埠頭の建物を博物館にしています。'],
      ['핼리팩스 시타델', 'Halifax Citadel', 'ハリファックス・シタデル', '시내 언덕 위의 별 모양 요새로, 18세 미만은 무료입니다.', 'The star-shaped fort above downtown; under-18s are free.', '市内の丘の上にある星形の要塞で、18歳未満は無料です。'],
      ['핼리팩스 도네어', 'Halifax donair', 'ハリファックス・ドネア', '양념한 고기를 피타에 싸고 달콤한 소스를 뿌린 노바스코샤 대표 길거리 음식입니다.', 'Nova Scotia’s signature street food: spiced meat in pita with a sweet sauce.', '味付け肉をピタで包み甘いソースをかけた、ノバスコシアを代表する屋台料理です。'],
    ],
    t: [
      ['식당 메뉴 가격에는 HST(14%)와 팁이 빠져 있습니다. 팁은 15~18%가 일반적입니다. 공항에서는 320번 급행버스를 타며, 일반 버스보다 요금이 높습니다.', 'Menu prices exclude 14% HST and tip (15–18% usual). From the airport, Regional Express route 320 costs more than a regular bus.', '飲食店のメニュー価格にはHST（14%）とチップが含まれていません。チップは15〜18%が一般的です。空港からは320番急行バスを使い、通常のバスより運賃が高めです。'],
    ],
  },
  phoenix: {
    h: [
      ['사막 식물원', 'Desert Botanical Garden', 'デザート・ボタニカル・ガーデン', '선인장과 사막 식물 수만 그루가 자라는 식물원으로, 날짜별로 요금이 달라집니다.', 'Tens of thousands of cacti and desert plants; prices vary by date.', '数万株のサボテンや砂漠の植物が育つ植物園で、日付によって料金が変わります。'],
      ['소노란 핫도그', 'Sonoran hot dog', 'ソノラン・ホットドッグ', '베이컨으로 감싼 소시지에 콩·토마토·양파·마요네즈를 얹은 국경 지역 핫도그입니다.', 'A bacon-wrapped frank topped with beans, tomato, onion and mayo, from the borderlands.', 'ベーコンで巻いたソーセージに豆・トマト・玉ねぎ・マヨネーズをのせた国境地域のホットドッグです。'],
      ['치미창가', 'Chimichanga', 'チミチャンガ', '속을 채운 부리토를 기름에 튀긴 요리로, 1970년 문을 연 피닉스 식당이 원조를 자처합니다.', 'A deep-fried burrito; a Phoenix restaurant opened in 1970 calls itself its home.', '具を詰めたブリトーを油で揚げた料理で、1970年創業のフェニックスの店が元祖を名乗っています。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(9.1%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다.', 'Menu prices exclude 9.1% tax and tip; an 18–20% tip is usual.', '飲食店のメニュー価格には税（9.1%）とチップが含まれていません。チップは18〜20%が一般的です。'],
      ['공항에서 시내: 피닉스 공항의 무료 스카이 트레인을 타고 44번가역으로 가서 경전철로 갈아타면 시내까지 갈 수 있습니다.', 'Airport to city: ride the free PHX Sky Train to 44th Street and change to Valley Metro Rail.', '空港から市内へ：フェニックス空港の無料スカイトレインで44番街駅へ行き、ライトレールに乗り換えます。'],
    ],
  },
  'san-antonio': {
    h: [
      ['알라모', 'The Alamo', 'アラモ', '1836년 텍사스 독립 전쟁의 격전지로, 교회 내부는 무료 예약제로 입장합니다.', 'The 1836 battle site of the Texas Revolution; the church is free with a reserved ticket.', '1836年のテキサス独立戦争の激戦地で、教会内部は無料の予約制で入場できます。'],
      ['샌안토니오 미션 국립역사공원', 'San Antonio Missions', 'サンアントニオ・ミッションズ', '18세기 스페인 선교 시설 네 곳이 남은 유네스코 세계유산으로, 모두 무료입니다.', 'Four 18th-century Spanish missions, a UNESCO World Heritage Site — all free.', '18世紀のスペイン伝道所4か所が残るユネスコ世界遺産で、すべて無料です。'],
      ['퍼피 타코', 'Puffy tacos', 'パフィータコス', '튀겨서 부풀린 토르티야에 속을 채운 샌안토니오 발상 타코입니다.', 'San Antonio’s own taco in a fried, puffed tortilla shell.', '揚げて膨らませたトルティーヤに具を詰めた、サンアントニオ発祥のタコスです。'],
    ],
    t: [
      ['식당 메뉴 가격에는 세금(8.25%)과 팁이 빠져 있습니다. 팁은 18~20%가 일반적입니다. 공항에서 시내까지는 VIA 5번 버스가 다닙니다.', 'Menu prices exclude 8.25% sales tax and tip (18–20% usual). VIA route 5 links the airport and downtown.', '飲食店のメニュー価格には税（8.25%）とチップが含まれていません。チップは18〜20%が一般的です。空港から市内へはVIAの5番バスが走っています。'],
    ],
  },
  bath: {
    h: [
      ['로마 목욕탕', 'The Roman Baths', 'ローマ浴場', '2,000년 전 로마인이 온천 위에 지은 목욕탕 유적으로, 6세 미만은 무료입니다.', 'Roman bathing complex built over hot springs 2,000 years ago; under-sixes are free.', '2,000年前にローマ人が温泉の上に造った浴場の遺跡で、6歳未満は無料です。'],
      ['샐리 런 번', 'Sally Lunn bun', 'サリー・ラン・バン', '바스에서 가장 오래된 건물 중 하나에서 파는 브리오슈 같은 큰 빵입니다.', 'A light, brioche-style bun served in one of Bath’s oldest houses.', 'バースで最も古い建物の一つで出される、ブリオッシュのような大きなパンです。'],
      ['애프터눈 티', 'Afternoon tea', 'アフタヌーンティー', '조지 왕조 시대 분위기의 찻집과 호텔에서 애프터눈 티를 즐길 수 있습니다.', 'Afternoon tea in Georgian tea rooms and hotels.', 'ジョージ王朝時代の雰囲気の喫茶店やホテルでアフタヌーンティーを楽しめます。'],
    ],
    t: [
      ['시내버스는 어디서 타고 내리든 같은 요금(1회 2.60파운드)입니다. 가까운 공항은 브리스틀 공항입니다.', 'City buses are a flat fare across the Bath zone (£2.60 single); the nearest airport is Bristol.', '市内バスはどこで乗り降りしても同じ運賃（1回2.60ポンド）です。最寄りの空港はブリストル空港です。'],
    ],
  },
  york: {
    h: [
      ['요크 민스터', 'York Minster', 'ヨーク・ミンスター', '북유럽 최대급의 고딕 성당으로, 17세 이하는 보호자 동반 시 무료입니다. 중앙 탑에 오르려면 따로 표가 필요합니다.', 'One of northern Europe’s largest Gothic cathedrals; under-18s go free with a paying adult, and the Central Tower costs extra.', '北ヨーロッパ最大級のゴシック大聖堂で、17歳以下は有料の大人と一緒なら無料です。中央塔に登るには別のチケットが必要です。'],
      ['베티스 카페 티 룸', 'Bettys Café Tea Rooms', 'ベティーズ・カフェ・ティールーム', '1919년 문을 연 찻집으로, 요크셔 팻 래스컬과 애프터눈 티가 유명합니다.', 'Tea rooms founded in 1919, famous for the Yorkshire Fat Rascal and afternoon tea.', '1919年創業のティールームで、ヨークシャー・ファット・ラスカルやアフタヌーンティーが有名です。'],
      ['성벽 산책', 'City walls walk', '城壁の散策', '시내를 둘러싼 중세 성벽 위를 걸으며 구시가지를 내려다볼 수 있습니다.', 'Walk the medieval walls for views over the old town.', '市内を囲む中世の城壁の上を歩き、旧市街を見下ろせます。'],
    ],
    t: [
      ['퍼스트 요크 버스는 카드를 탈 때와 내릴 때 찍으면 거리에 따라 1.50~3파운드가 나오고, 하루 최대 6파운드까지만 청구됩니다.', 'First York buses use tap-on, tap-off: singles cost £1.50–£3.00 by distance, capped at £6 a day.', 'ファースト・ヨークのバスは乗車時と降車時にカードをタッチする方式で、距離に応じて1.50〜3ポンド、1日最大6ポンドまでしか請求されません。'],
    ],
  },
  leipzig: {
    h: [
      ['전투 기념비(푈커슐라흐트덴크말)', 'Monument to the Battle of the Nations', '諸国民戦争記念碑', '1813년 나폴레옹 전쟁 전투를 기리는 높이 91m의 거대한 기념비로, 입장료에 박물관이 포함됩니다.', 'A colossal 91 m monument to the 1813 battle against Napoleon; admission includes the museum.', '1813年のナポレオン戦争の戦いを記念する高さ91mの巨大な記念碑で、入場料に博物館が含まれます。'],
      ['라이프치히 레르헤', 'Leipziger Lerche', 'ライプツィガー・レルヒェ', '1876년 종다리 사냥이 금지되자 제과점들이 대신 만든 마지팬·잼 과자입니다.', 'A marzipan-and-jam pastry created after lark hunting was banned in 1876.', '1876年にヒバリの狩猟が禁止された後、パン屋が代わりに作ったマジパンとジャムのお菓子です。'],
      ['라이프치히 고제', 'Leipziger Gose', 'ライプツィガー・ゴーゼ', '소금과 고수를 넣은 상면 발효 맥주로, 시내 양조 레스토랑에서 맛볼 수 있습니다.', 'A top-fermented beer brewed with salt and coriander, served at a city brewpub.', '塩とコリアンダーを入れた上面発酵ビールで、市内の醸造レストランで味わえます。'],
    ],
    t: [
      ['시내 대중교통 1회권은 1시간 동안 유효합니다. 공항은 S반 S5·S5X로 중앙역까지 약 14분이며, 공항은 시내 구역 밖이라 요금이 더 비쌉니다.', 'A city single is valid for one hour. S-Bahn S5/S5X runs from the airport to the Hauptbahnhof in about 14 minutes; the airport lies outside the city zone, so the fare is higher.', '市内の公共交通の1回券は1時間有効です。空港からはSバーンS5・S5Xで中央駅まで約14分ですが、空港は市内ゾーンの外なので運賃が高くなります。'],
    ],
  },
  canberra: {
    h: [
      ['호주 전쟁기념관', 'Australian War Memorial', 'オーストラリア戦争記念館', '호주의 전쟁사를 다루는 기념관이자 박물관으로, 입장은 무료이고 예약이 필요 없습니다.', 'Memorial and museum of Australia’s wartime history — free, no tickets needed.', 'オーストラリアの戦争の歴史を伝える記念館兼博物館で、入場は無料、予約も不要です。'],
      ['호주 국립 미술관', 'National Gallery of Australia', 'オーストラリア国立美術館', '원주민 미술부터 현대미술까지 아우르는 국립 미술관으로, 일반 입장은 무료입니다(일부 특별전 유료).', 'From Indigenous to modern art; general admission is free (some exhibitions charge).', '先住民美術から現代美術までそろう国立美術館で、一般入場は無料です（一部の特別展は有料）。'],
      ['송로버섯 요리', 'Truffle dishes', 'トリュフ料理', '6~8월 제철에 근교 농장의 송로버섯 사냥과 식당의 송로버섯 메뉴를 즐길 수 있습니다.', 'In June–August, join a truffle hunt or try seasonal truffle menus.', '6〜8月の旬には、近郊の農園でのトリュフ狩りや飲食店のトリュフメニューを楽しめます。'],
    ],
    t: [
      ['공항에서 시내: 래피드 3번 버스가 공항 터미널과 시티 환승센터를 약 20분에 잇고, 일반 버스 요금이 적용됩니다. 공항 도착 홀에 승차권 자판기가 있습니다.', 'Airport to city: Rapid 3 links the terminal to the City interchange in under 20 minutes at the normal bus fare; there is a ticket machine in arrivals.', '空港から市内へ：ラピッド3番バスが空港ターミナルとシティ乗り換えセンターを約20分で結び、通常のバス運賃が適用されます。到着ロビーに乗車券の自動販売機があります。'],
    ],
  },
  wellington: {
    h: [
      ['테 파파 국립박물관', 'Te Papa Tongarewa', 'テ・パパ・トンガレワ（国立博物館）', '뉴질랜드의 자연과 마오리 문화를 보여 주는 국립박물관으로, 외국인 성인은 유료이고 16세 미만은 무료입니다.', 'New Zealand’s national museum of nature and Māori culture; international adults pay, under-16s free.', 'ニュージーランドの自然やマオリ文化を紹介する国立博物館で、外国人の大人は有料、16歳未満は無料です。'],
      ['웰링턴 커피', 'Wellington coffee', 'ウェリントンのコーヒー', '로스터리와 카페가 많은 ‘커피 수도’로, 플랫 화이트를 꼭 마셔 보세요.', 'A “coffee capital” of roasteries and cafés — order a flat white.', 'ロースターやカフェが多い「コーヒーの都」で、フラットホワイトをぜひ。'],
      ['수제 맥주 양조장', 'Craft breweries', 'クラフトビール醸造所', '워터프런트에서 걸어갈 수 있는 거리에 수제 맥주 양조장이 여럿 있습니다.', 'Several craft breweries a short walk from the waterfront.', 'ウォーターフロントから歩いて行ける距離にクラフトビールの醸造所がいくつもあります。'],
    ],
    t: [
      ['공항에서 시내: 에어포트 익스프레스(AX) 버스가 10~20분 간격으로 웰링턴역까지 가며, 스내퍼 카드가 현금보다 쌉니다. 일반 버스 정기권은 쓸 수 없습니다.', 'Airport to city: the Airport Express (AX) runs to Wellington Station every 10–20 minutes; Snapper is cheaper than cash, and regular passes are not valid.', '空港から市内へ：エアポート・エクスプレス（AX）バスが10〜20分間隔でウェリントン駅まで走り、スナッパーカードの方が現金より安いです。通常の定期券は使えません。'],
    ],
  },
  graz: {
    h: [
      ['에겐베르크 성', 'Schloss Eggenberg', 'エッゲンベルク城', '바로크 양식의 궁전과 정원으로, 고고학 박물관과 옛 미술관이 함께 있습니다.', 'A baroque palace and park with archaeology and old-masters galleries.', 'バロック様式の宮殿と庭園で、考古学博物館や古典絵画館も併設されています。'],
      ['슐로스베르크', 'Schlossberg', 'シュロスベルク', '시계탑이 있는 시내 한가운데 언덕으로, 구시가지의 붉은 지붕이 내려다보입니다.', 'The clock-tower hill in the city centre, overlooking the red roofs.', '時計塔がある市の中心の丘で、旧市街の赤い屋根を見下ろせます。'],
      ['호박씨 기름', 'Pumpkin-seed oil', 'パンプキンシードオイル', '짙은 녹색의 슈타이어마르크 특산 기름으로, 샐러드와 수프에 뿌려 먹습니다.', 'Styria’s dark-green pumpkin-seed oil, drizzled on salads and soups.', '濃い緑色のシュタイアーマルク特産のオイルで、サラダやスープにかけて食べます。'],
    ],
    t: [
      ['그라츠 공항도 시내 요금 구역(101)에 속해 시내 1시간권으로 갈 수 있습니다. 중앙역에서 S반 S1을 타거나, 트램 5번 종점에서 630번 버스로 갈아탑니다.', 'Graz Airport is inside the city fare zone (101), so a city hourly ticket works: take S-Bahn S1 from the Hauptbahnhof, or tram 5 then bus 630.', 'グラーツ空港も市内の運賃ゾーン（101）に含まれるため、市内の1時間券で行けます。中央駅からSバーンS1に乗るか、トラム5番の終点で630番バスに乗り換えます。'],
    ],
  },
  lausanne: {
    h: [
      ['올림픽 박물관', 'The Olympic Museum', 'オリンピック博物館', '호숫가 공원에 있는 올림픽 역사 박물관으로, 15세 이하는 무료입니다.', 'The lakeside museum of Olympic history; children up to 15 are free.', '湖畔の公園にあるオリンピックの歴史博物館で、15歳以下は無料です。'],
      ['라보 포도밭', 'Lavaux vineyards', 'ラヴォーのブドウ畑', '호수를 향해 계단식으로 펼쳐진 세계유산 포도밭으로, 로잔에서 기차로 금방 갑니다.', 'UNESCO-listed terraced vineyards above the lake, a short train ride away.', '湖に向かって段々に広がる世界遺産のブドウ畑で、ローザンヌから列車ですぐです。'],
      ['파페 보두아', 'Papet vaudois', 'パペ・ヴォードワ', '대파와 감자를 크림·화이트와인으로 익혀 양배추 소시지를 곁들인 보 지방 요리입니다.', 'Leeks and potatoes with cream and white wine, served with cabbage sausage.', 'ネギとじゃがいもをクリームと白ワインで煮て、キャベツ入りソーセージを添えたヴォー地方の料理です。'],
    ],
    t: [
      ['로잔 호텔·유스호스텔·캠핑장 투숙객은 머무는 동안(최대 15일) 대중교통을 무료로 타는 로잔 교통카드를 받습니다. 개인 숙소(아파트·방 임대)는 해당되지 않습니다.', 'Guests in Lausanne hotels, hostels and campsites get a free Lausanne Transport Card for their stay (up to 15 days); private rentals are excluded.', 'ローザンヌのホテル・ユースホステル・キャンプ場の宿泊者は、滞在中（最大15日）公共交通に無料で乗れるローザンヌ交通カードがもらえます。個人宅の貸し部屋などは対象外です。'],
    ],
  },
  bremen: {
    h: [
      ['브레멘 시청과 롤란트', 'Town Hall and Roland', 'ブレーメン市庁舎とローラント像', '고딕·르네상스 양식의 시청과 거대한 롤란트 석상이 함께 유네스코 세계유산입니다.', 'The Gothic–Renaissance Town Hall and giant Roland statue form a UNESCO World Heritage Site.', 'ゴシック・ルネサンス様式の市庁舎と巨大なローラント像がともにユネスコ世界遺産です。'],
      ['유니버숨 브레멘', 'Universum Bremen', 'ウニヴェルズム・ブレーメン', '직접 만지고 체험하는 과학관으로, 6세 미만은 무료입니다.', 'A hands-on science centre; under-sixes are free.', '実際に触れて体験できる科学館で、6歳未満は無料です。'],
      ['브레멘 커피 문화', 'Bremen coffee culture', 'ブレーメンのコーヒー文化', '1673년 독일어권 최초의 커피하우스가 문을 연 도시로, 버터·설탕·계피를 바른 빵을 커피에 적셔 먹습니다.', 'Home of the first coffee house in the German-speaking world (1673); dunk buttered cinnamon-sugar bread in your coffee.', '1673年にドイツ語圏初のコーヒーハウスが開いた街で、バター・砂糖・シナモンを塗ったパンをコーヒーに浸して食べます。'],
    ],
    t: [
      ['공항에서 시내: 트램 6번을 타면 약 11분 만에 중앙역·시내에 닿으며, 브레멘 시내 1회권(3시간 유효)으로 탈 수 있습니다.', 'Airport to city: tram 6 reaches the centre and Hauptbahnhof in about 11 minutes on a Bremen city single (valid 3 hours).', '空港から市内へ：トラム6番で約11分で中央駅・市内に着き、ブレーメン市内の1回券（3時間有効）で乗れます。'],
    ],
  },
  gothenburg: {
    h: [
      ['페스케쾨르카', 'Feskekôrka', 'フィスケコルカ', '1874년에 세운 ‘생선 교회’ 모양의 수산 시장으로, 새우 샌드위치와 굴을 맛볼 수 있습니다.', 'The 1874 “fish church” market hall for shrimp sandwiches and oysters.', '1874年に建てられた「魚の教会」のような水産市場で、エビのサンドイッチやカキが味わえます。'],
      ['예테보리 미술관', 'Gothenburg Museum of Art', 'ヨーテボリ美術館', '북유럽 미술 소장품이 풍부한 미술관으로, 20세 미만은 무료입니다.', 'Strong in Nordic art; free for visitors under 20.', '北欧美術の所蔵が豊富な美術館で、20歳未満は無料です。'],
      ['하가 시나몬롤', 'Haga cinnamon bun', 'ハーガのシナモンロール', '하가 지구의 카페에서 파는 얼굴만 한 크기의 시나몬롤(하가불레)입니다.', 'The face-sized Hagabullen cinnamon bun from a Haga café.', 'ハーガ地区のカフェで売られる顔ほどの大きさのシナモンロール（ハーガブッレ）です。'],
    ],
    t: [
      ['공항에서 시내: 플뤼그부사르나 공항버스가 최대 20분 간격으로 란드베테르 공항과 중앙역을 잇습니다.', 'Airport to city: Flygbussarna buses link Landvetter Airport and the central station up to every 20 minutes.', '空港から市内へ：フリューグブッサルナの空港バスが最短20分間隔でランドヴェッテル空港と中央駅を結んでいます。'],
    ],
  },
  aarhus: {
    h: [
      ['아로스 오르후스 미술관', 'ARoS Aarhus Art Museum', 'アロス・オーフス美術館', '옥상의 무지개색 원형 통로 ‘유어 레인보 파노라마’로 유명한 미술관으로, 18세 미만은 무료입니다.', 'Famed for its rooftop rainbow walkway, Your Rainbow Panorama; free for under-18s.', '屋上の虹色の円形通路「ユア・レインボー・パノラマ」で有名な美術館で、18歳未満は無料です。'],
      ['덴 갬레 뷔(옛 마을 박물관)', 'Den Gamle By', 'デン・ガムレ・ビュ', '덴마크 각지의 옛 건물을 옮겨 와 거리를 재현한 야외 박물관으로, 18세 미만은 무료입니다.', 'An open-air museum of historic Danish townhouses; under-18s are free.', 'デンマーク各地の古い建物を移築して街並みを再現した野外博物館で、18歳未満は無料です。'],
      ['오르후스 길거리 음식 시장', 'Aarhus Street Food', 'オーフス・ストリートフード', '옛 버스 차고에 30곳이 넘는 가게가 모인 길거리 음식 시장입니다.', '30-plus kitchens and bars in a former bus garage.', '古いバスの車庫に30を超える店が集まる屋台市場です。'],
    ],
    t: [
      ['버스·경전철 요금은 구역 수로 정해지며, 시내 이동도 최소 2구간 요금이 적용됩니다.', 'Bus and light-rail fares depend on zones, with a minimum two-zone fare even within the city.', 'バスやライトレールの運賃はゾーン数で決まり、市内の移動でも最低2ゾーンの運賃がかかります。'],
    ],
  },
  cork: {
    h: [
      ['잉글리시 마켓', 'The English Market', 'イングリッシュ・マーケット', '18세기부터 이어진 실내 시장으로, 스파이스드 비프와 드리신 같은 코크 전통 음식을 맛볼 수 있습니다.', 'The covered market since the 18th century, for Cork classics like spiced beef and drisheen.', '18世紀から続く屋内市場で、スパイスドビーフやドリシーンなどコークの伝統料理を味わえます。'],
      ['블라니 성', 'Blarney Castle', 'ブラーニー城', '입을 맞추면 말솜씨가 좋아진다는 ‘블라니 스톤’이 있는 성으로, 시내에서 버스로 갑니다.', 'Kiss the Blarney Stone for the gift of the gab; reachable by bus from the city.', '口づけすると話がうまくなるという「ブラーニー・ストーン」がある城で、市内からバスで行けます。'],
      ['코크 시티 감옥', 'Cork City Gaol', 'コーク・シティ監獄', '19세기 감옥을 그대로 보존한 박물관으로, 3세 미만은 무료입니다.', 'A preserved 19th-century prison museum; under-threes free.', '19世紀の監獄をそのまま保存した博物館で、3歳未満は無料です。'],
    ],
    t: [
      ['공항에서 시내: 버스 에런 225·226번이 30분 간격으로 공항과 파넬 플레이스 버스터미널·켄트역을 잇습니다. 택시는 시내까지 약 20유로입니다.', 'Airport to city: Bus Éireann 225 and 226 run every 30 minutes to Parnell Place and Kent Station; a taxi is about €20.', '空港から市内へ：バス・エアラン225・226番が30分間隔で空港とパーネル・プレイス・バスターミナル、ケント駅を結んでいます。タクシーは市内まで約20ユーロです。'],
    ],
  },
  galway: {
    h: [
      ['골웨이 시립 박물관', 'Galway City Museum', 'ゴールウェイ市立博物館', '스페인 아치 옆에 있는 도시 역사 박물관으로, 입장은 무료입니다(기부 권장).', 'The city-history museum by the Spanish Arch; free entry (donation suggested).', 'スパニッシュ・アーチの隣にある街の歴史博物館で、入場は無料です（寄付を推奨）。'],
      ['골웨이 대성당', 'Galway Cathedral', 'ゴールウェイ大聖堂', '1965년 완공된 돔 성당으로, 입장료는 없고 기부를 권합니다.', 'A domed cathedral completed in 1965; no charge, donation suggested.', '1965年に完成したドームのある大聖堂で、入場料はなく寄付を勧めています。'],
      ['골웨이 굴', 'Galway oysters', 'ゴールウェイのカキ', '레몬을 짜서 날로 먹고 흑맥주를 곁들이는 것이 골웨이식입니다.', 'Eaten raw with lemon and a pint of stout, Galway-style.', 'レモンを搾って生で食べ、黒ビールを合わせるのがゴールウェイ流です。'],
    ],
    t: [
      ['시내버스 요금은 립 카드 기준 1.35~1.50유로로 공식 안내가 엇갈리니, 탈 때 단말기 금액을 확인하세요.', 'Official Leap fares for city buses are listed as €1.35–€1.50; check the reader when you tap.', '市内バスの運賃はリープカードで1.35〜1.50ユーロと公式案内が分かれているので、乗車時に端末の金額を確認しましょう。'],
    ],
  },
  turku: {
    h: [
      ['투르쿠 성', 'Turku Castle', 'トゥルク城', '13세기 말에 지은 핀란드 최대의 중세 성으로, 성 안이 역사 박물관입니다.', 'Finland’s largest medieval castle, begun in the late 13th century, now a history museum.', '13世紀末に建てられたフィンランド最大の中世の城で、城内が歴史博物館になっています。'],
      ['투르쿠 실내 시장', 'Turku Market Hall', 'トゥルク・マーケットホール', '1896년 문을 연 핀란드에서 두 번째로 오래된 실내 시장으로, 생선·순록 고기·빵을 팝니다.', 'Finland’s second-oldest market hall (1896), with fish, reindeer and baked goods.', '1896年開業のフィンランドで2番目に古い屋内市場で、魚やトナカイ肉、パンを売っています。'],
      ['아우라강변', 'Aura riverside', 'アウラ川沿い', '대성당과 성 사이 강을 따라 카페와 배 레스토랑이 늘어서 있습니다.', 'Cafés and boat restaurants line the river between the cathedral and the castle.', '大聖堂と城の間の川沿いにカフェや船のレストランが並んでいます。'],
    ],
    t: [
      ['버스는 미리 사거나 신용카드를 대면 1회 3.15유로이고, 버스 안에서 현금으로 내면 4.50유로입니다. 2시간 안에 갈아탈 수 있습니다.', 'Bus singles cost €3.15 bought in advance or by contactless card, €4.50 in cash on board; transfers are valid for 2 hours.', 'バスは事前購入かクレジットカードのタッチ決済で1回3.15ユーロ、車内で現金だと4.50ユーロです。2時間以内なら乗り換えできます。'],
    ],
  },
  tartu: {
    h: [
      ['에스토니아 국립박물관', 'Estonian National Museum (ERM)', 'エストニア国立博物館', '옛 비행장 활주로에서 이어지듯 지은 건물에 에스토니아 민속과 역사를 전시합니다.', 'Estonian folk culture and history in a building that extends from an old runway.', '旧飛行場の滑走路から続くように建てられた建物で、エストニアの民俗と歴史を展示しています。'],
      ['타르투 실내 시장', 'Tartu Market Hall', 'タルトゥ・マーケットホール', '남부 에스토니아에서 가장 큰 신선 식품 시장으로, 생선과 저장 식품이 다양합니다.', 'South Estonia’s largest fresh-food market, strong on fish and preserves.', '南エストニア最大の生鮮食品市場で、魚や保存食が豊富です。'],
      ['에스토니아 흑빵', 'Estonian black bread', 'エストニアの黒パン', '호밀로 만든 흑빵(무스트 레입)은 에스토니아 식탁의 기본입니다.', 'Dark rye bread (must leib) is the staple of the Estonian table.', 'ライ麦で作る黒パン（ムスト・レイプ）はエストニアの食卓の基本です。'],
    ],
    t: [
      ['시내버스 1시간권은 미리 사면 싸고, 버스 기사에게 사면 더 비쌉니다. 2026년 7월에 요금이 올랐습니다.', 'City-bus hourly tickets are cheaper bought in advance than from the driver; fares rose in July 2026.', '市内バスの1時間券は事前に買うと安く、運転手から買うと高くなります。2026年7月に運賃が値上げされました。'],
    ],
  },
  stuttgart: {
    h: [
      ['메르세데스벤츠 박물관', 'Mercedes-Benz Museum', 'メルセデス・ベンツ博物館', '130년이 넘는 자동차 역사를 나선형 전시 공간에서 보여 주는 박물관입니다.', 'More than 130 years of car history along a double-helix gallery.', '130年を超える自動車の歴史をらせん状の展示空間で紹介する博物館です。'],
      ['베젠 와인 주점', 'Besen wine taverns', 'ベーゼン（ワイン居酒屋）', '와인 농가가 자기 와인을 직접 내놓는 임시 주점으로, 슈바벤 가정식을 곁들입니다.', 'Winemakers’ pop-up taverns pouring their own wine with Swabian home cooking.', 'ワイン農家が自家製ワインを直接出す期間限定の居酒屋で、シュヴァーベンの家庭料理を添えます。'],
      ['마울타셴', 'Maultaschen', 'マウルタッシェン', '고기와 시금치를 채운 큰 슈바벤식 만두로, 시내 식당 곳곳에서 맛볼 수 있습니다.', 'Large Swabian pasta pockets of meat and spinach, served across town.', '肉とほうれん草を詰めた大きなシュヴァーベン風の餃子で、市内の多くの店で味わえます。'],
    ],
    t: [
      ['공항에서 시내: S반 S2·S3이 15분 간격으로 공항과 중앙역을 약 27분에 잇습니다. 시내 1구간 1회권은 휴대폰 티켓으로 사면 약 5% 쌉니다.', 'Airport to city: S-Bahn S2/S3 run every 15 minutes to the main station in about 27 minutes; zone-1 singles are about 5% cheaper as mobile tickets.', '空港から市内へ：SバーンS2・S3が15分間隔で空港と中央駅を約27分で結んでいます。市内1ゾーンの1回券はスマホチケットで買うと約5%安くなります。'],
    ],
  },
  dusseldorf: {
    h: [
      ['알트슈타트 양조장', 'Altstadt brewhouses', '旧市街の醸造所', '작은 잔에 따르는 갈색 맥주 알트비어와 라인 지방 요리를 맛볼 수 있습니다.', 'Dark Altbier in small glasses with Rhineland dishes.', '小さなグラスで注ぐ褐色のアルトビールとライン地方の料理を味わえます。'],
      ['K20 미술관', 'K20 (Kunstsammlung NRW)', 'K20（ノルトライン・ヴェストファーレン州立美術館）', '피카소·클레 등 20세기 미술을 소장한 주립 미술관으로, 18세 미만은 무료입니다.', 'State gallery of 20th-century art from Picasso to Klee; under-18s free.', 'ピカソやクレーなど20世紀美術を所蔵する州立美術館で、18歳未満は無料です。'],
      ['뒤셀도르프 겨자', 'Düsseldorf mustard', 'デュッセルドルフ・マスタード', '1726년부터 맷돌로 갈아 만든 겨자로, 네 가지가 EU 원산지 보호를 받습니다.', 'Stone-ground since 1726; four varieties hold EU protected-origin status.', '1726年から石臼で挽いて作られるマスタードで、4種類がEUの原産地保護を受けています。'],
    ],
    t: [
      ['공항에서 시내: S반 S11이 터미널 지하역에서 중앙역까지 가며, 시내 요금(A단계, 90분)으로 탈 수 있습니다.', 'Airport to city: S-Bahn S11 runs from the station beneath the terminal to the Hauptbahnhof on a city (level A, 90-minute) ticket.', '空港から市内へ：SバーンS11がターミナル地下の駅から中央駅まで走り、市内運賃（Aランク、90分）で乗れます。'],
    ],
  },
  'san-sebastian': {
    h: [
      ['산텔모 박물관', 'San Telmo Museoa', 'サン・テルモ博物館', '16세기 수도원 건물에 바스크 사회와 역사를 전시하는 박물관입니다.', 'Basque society and history in a 16th-century convent.', '16世紀の修道院の建物で、バスクの社会と歴史を展示する博物館です。'],
      ['핀초 바 순례', 'Pintxo crawl', 'ピンチョス巡り', '바마다 한두 가지 핀초를 맛보며 여러 곳을 도는 것이 산세바스티안 방식입니다.', 'Try one or two pintxos per bar and move on — the San Sebastián way.', '1軒につき1〜2品のピンチョスを味わいながら何軒も巡るのがサン・セバスティアン流です。'],
      ['라 콘차 해변', 'La Concha beach', 'ラ・コンチャ海岸', '조개껍데기 모양의 만에 펼쳐진 도시 해변으로, 산책로가 이어집니다.', 'The city beach on a shell-shaped bay, lined by a promenade.', '貝殻の形の湾に広がる街のビーチで、遊歩道が続いています。'],
    ],
    t: [
      ['시내버스(디버스)는 1회 1.95유로이고, 신용카드 탭도 같은 요금입니다. 밤 버스는 더 비쌉니다.', 'City buses (Dbus) cost €1.95 per ride, the same by contactless card; night buses cost more.', '市内バス（Dバス）は1回1.95ユーロで、クレジットカードのタッチ決済も同じ料金です。夜行バスは高くなります。'],
    ],
  },
  funchal: {
    h: [
      ['푼샬 케이블카', 'Funchal Cable Car', 'フンシャル・ケーブルカー', '구시가지에서 몬테 언덕까지 약 15분 동안 시내와 바다를 내려다보며 오릅니다. 7세 미만은 무료입니다.', 'Rise from the Old Town to Monte in about 15 minutes over city and sea; under-sevens free.', '旧市街からモンテの丘まで約15分、市街と海を見下ろしながら上ります。7歳未満は無料です。'],
      ['에스페타다', 'Espetada', 'エスペターダ', '월계수 가지에 소고기를 꽂아 구운 마데이라 대표 요리로, 볼루 두 카쿠 빵을 곁들입니다.', 'Beef grilled on a bay-laurel stick, served with bolo do caco bread.', '月桂樹の枝に牛肉を刺して焼いたマデイラの代表料理で、ボロ・ド・カコのパンを添えます。'],
      ['마데이라 와인', 'Madeira wine', 'マデイラワイン', '오래 숙성해도 맛이 변하지 않는 강화 와인으로, 시내 와인 저장고에서 시음할 수 있습니다.', 'The famously long-lived fortified wine, tasted at Funchal’s wine lodges.', '長期熟成でも味が変わらない酒精強化ワインで、市内のワインセラーで試飲できます。'],
    ],
    t: [
      ['공항에서 시내: 에어로버스나 택시로 약 20~25분 걸립니다.', 'Airport to city: the Aerobus or a taxi takes about 20–25 minutes.', '空港から市内へ：エアロバスかタクシーで約20〜25分です。'],
    ],
  },
};
