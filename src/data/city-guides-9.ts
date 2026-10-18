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
};
