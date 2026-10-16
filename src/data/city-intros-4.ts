/** 도시 소개 4 — 유럽·튀르키예 (형식은 city-intros-1.ts) */
import type { Intro } from './city-intros-1';

export const INTROS_4: Record<string, Intro> = {
  paris: {
    o: ['미술관과 대성당, 센강 산책과 카페 문화가 어우러진 도시입니다. 큰 미술관은 시간 지정 예약이 필요한 경우가 많아, 보고 싶은 곳을 먼저 정해 날짜별로 배치하면 편합니다.', 'Museums and cathedrals, Seine-side walks and café culture. Big museums often need timed reservations, so fix your must-sees first and plan days around them.', '美術館と大聖堂、セーヌ川の散歩とカフェ文化が調和する街。大きな美術館は時間指定予約が必要なことが多いので、見たい所を先に決めて日ごとに配置すると楽です。'],
    d: [4, 5],
    s: [
      ['마레·생제르맹', 'Le Marais / Saint-Germain', 'マレ・サンジェルマン', '걸어서 명소를 다니기 좋고 카페·식당이 많습니다.', 'Walkable to the sights, full of cafés and bistros.', '歩いて名所を回りやすく、カフェやビストロが多いです。'],
      ['오페라·생라자르', 'Opéra / Saint-Lazare', 'オペラ・サン・ラザール', '공항버스와 지하철 노선이 많아 이동이 편합니다.', 'Airport buses and many metro lines.', '空港バスと多くの地下鉄路線があり便利です。'],
    ],
  },
  nice: {
    o: ['지중해를 따라 영국인 산책로가 이어지는 프렌치 리비에라의 중심 도시입니다. 모나코·에즈·앙티브 같은 근교 마을을 기차·버스로 당일치기하기 좋습니다.', 'The heart of the French Riviera, with the Promenade des Anglais along the Mediterranean; easy day trips by train or bus to Monaco, Èze and Antibes.', '地中海沿いにイギリス人の遊歩道が続くフレンチ・リヴィエラの中心都市。モナコやエズ、アンティーブへ電車やバスで日帰りしやすいです。'],
    d: [3, 4],
    s: [
      ['구시가지(비유 니스)', 'Old Town (Vieux Nice)', '旧市街（ヴィユー・ニース）', '골목 시장과 해변을 걸어서 다닙니다.', 'Walk to the markets and the beach.', '路地の市場やビーチへ歩いて行けます。'],
      ['니스 빌역 주변', 'Nice-Ville Station area', 'ニース・ヴィル駅周辺', '근교 기차 여행에 편리합니다.', 'Convenient for Riviera day trips by train.', '近郊への列車旅に便利です。'],
    ],
  },
  london: {
    o: ['대영박물관 등 무료 국립 박물관과 공원, 뮤지컬, 시장이 가득한 도시입니다. 동네가 넓게 퍼져 있어 지역별로 묶어 다니고, 비접촉 카드로 지하철을 타면 하루 요금 상한이 적용됩니다.', 'Free national museums like the British Museum, parks, West End shows and markets. The city is vast, so group sights by area; tapping a contactless card on the Tube applies a daily fare cap.', '大英博物館などの無料の国立博物館、公園、ミュージカル、マーケットが詰まった街。広いのでエリアごとにまとめて回り、タッチ決済で地下鉄に乗ると1日の上限運賃が適用されます。'],
    d: [4, 5],
    s: [
      ['사우스 켄싱턴·빅토리아', 'South Kensington / Victoria', 'サウスケンジントン・ヴィクトリア', '박물관과 하이드파크가 가깝고 교통이 편합니다.', 'Near the museums and Hyde Park with good transport.', '博物館やハイドパークに近く、交通が便利です。'],
      ['코벤트 가든·소호', 'Covent Garden / Soho', 'コヴェント・ガーデン・ソーホー', '뮤지컬 극장과 식당이 모인 중심가입니다.', 'Theatreland and dining in the centre.', '劇場と飲食店が集まる中心地です。'],
    ],
  },
  dublin: {
    o: ['펍 음악과 문학, 기네스로 유명한 아일랜드의 수도입니다. 시내가 작아 걸어서 다닐 수 있고, 모허 절벽이나 위클로 산 투어를 하루 붙이는 일정이 많습니다.', 'Ireland’s capital of pub music, literature and Guinness. The centre is walkable, and many add a day tour to the Cliffs of Moher or the Wicklow Mountains.', 'パブ音楽と文学、ギネスで知られるアイルランドの首都。市内は歩いて回れ、モハーの断崖やウィックロー山地へのツアーを1日加える旅程が多いです。'],
    d: [3, 4],
    s: [
      ['템플 바·트리니티 칼리지 주변', 'Temple Bar / Trinity College', 'テンプル・バー・トリニティ・カレッジ周辺', '명소와 펍을 걸어서 다닙니다(템플 바 바로 옆은 밤에 시끄러울 수 있음).', 'Walk to sights and pubs (right on Temple Bar can be noisy at night).', '名所やパブへ歩いて行けます（テンプル・バーの真横は夜うるさいことも）。'],
    ],
  },
  amsterdam: {
    o: ['운하와 좁은 박공 집들, 반 고흐 미술관과 안네 프랑크의 집으로 유명한 도시입니다. 인기 미술관·명소는 미리 온라인 예약이 필수에 가깝고, 자전거와 트램으로 다니기 좋습니다.', 'Canals, narrow gabled houses, the Van Gogh Museum and the Anne Frank House. Top museums practically require booking ahead, and bikes and trams make getting around easy.', '運河と細長い切妻屋根の家、ゴッホ美術館やアンネ・フランクの家で有名な街。人気の美術館や名所は事前のオンライン予約がほぼ必須で、自転車やトラムで動きやすいです。'],
    d: [3, 4],
    s: [
      ['운하 지구(그라흐텐고르덜)', 'Canal Ring', '運河地区', '분위기 있는 운하 숙소가 많고 명소가 가깝습니다.', 'Atmospheric canal-side stays near the sights.', '雰囲気ある運河沿いの宿が多く、名所に近いです。'],
      ['뮤지엄 지구·드 파이프', 'Museum Quarter / De Pijp', 'ミュージアム地区・デ・パイプ', '미술관과 시장, 현지 식당이 가깝습니다.', 'Near the museums, the Albert Cuyp market and local eateries.', '美術館や市場、地元の飲食店に近いです。'],
    ],
  },
  brussels: {
    o: ['그랑플라스와 오줌싸개 동상, 와플·초콜릿·감자튀김·맥주의 도시입니다. 기차로 1시간 안팎인 브뤼헤·겐트를 함께 도는 일정이 인기입니다.', 'The city of the Grand-Place and Manneken Pis, waffles, chocolate, fries and beer. Bruges and Ghent, about an hour by train, make popular day trips.', 'グランプラスや小便小僧、ワッフル・チョコレート・フライドポテト・ビールの街。電車で1時間前後のブルージュやゲントを一緒に巡る旅程が人気です。'],
    d: [2, 3],
    s: [
      ['그랑플라스 주변', 'Around the Grand-Place', 'グランプラス周辺', '명소와 식당을 걸어서 다닐 수 있습니다.', 'Walk to the sights and restaurants.', '名所や飲食店へ歩いて行けます。'],
      ['브뤼셀 중앙역 주변', 'Brussels-Central area', 'ブリュッセル中央駅周辺', '브뤼헤·겐트 당일치기에 편리합니다.', 'Convenient for day trips to Bruges and Ghent.', 'ブルージュやゲントへの日帰りに便利です。'],
    ],
  },
  munich: {
    o: ['맥주홀과 바로크 궁전, 영국정원이 있는 바이에른의 중심 도시입니다. 노이슈반슈타인 성과 잘츠부르크를 당일치기로 다녀오는 거점으로도 좋습니다.', 'Bavaria’s capital of beer halls, Baroque palaces and the English Garden, and a base for day trips to Neuschwanstein and Salzburg.', 'ビアホールとバロック宮殿、英国庭園があるバイエルンの中心都市。ノイシュヴァンシュタイン城やザルツブルクへの日帰りの拠点にも最適です。'],
    d: [3, 4],
    s: [
      ['중앙역 주변', 'Hauptbahnhof area', '中央駅周辺', '근교 기차·공항 열차 이동이 가장 편합니다.', 'The easiest base for day trips and airport trains.', '近郊列車や空港線での移動が最も便利です。'],
      ['구시가지(마리엔 광장)', 'Old Town (Marienplatz)', '旧市街（マリエン広場）', '명소와 맥주홀을 걸어서 다닙니다.', 'Walk to the sights and beer halls.', '名所やビアホールへ歩いて行けます。'],
    ],
  },
  interlaken: {
    o: ['두 호수 사이에 있는 스위스 알프스 여행의 거점입니다. 융프라우요흐·그린델발트·라우터브루넨 같은 산악 명소를 날씨에 맞춰 고르는 것이 핵심이라, 일정에 여유를 두는 것이 좋습니다.', 'The base for the Swiss Alps between two lakes. Choosing Jungfraujoch, Grindelwald or Lauterbrunnen according to the weather is key, so leave some slack in the plan.', '二つの湖に挟まれたスイス・アルプス観光の拠点。ユングフラウヨッホやグリンデルワルト、ラウターブルンネンなどの山を天気に合わせて選ぶのが大事なので、日程に余裕を持たせましょう。'],
    d: [3, 4],
    s: [
      ['인터라켄 오스트역', 'Interlaken Ost', 'インターラーケン・オスト駅', '융프라우 방면 산악 열차가 출발해 가장 편합니다.', 'Mountain trains to the Jungfrau region start here.', 'ユングフラウ方面の登山鉄道が出発し、最も便利です。'],
      ['그린델발트', 'Grindelwald', 'グリンデルワルト', '산속 마을에서 알프스 풍경을 가까이 즐길 수 있습니다.', 'A mountain village with the Alps on your doorstep.', '山の村でアルプスの景色を間近に楽しめます。'],
    ],
  },
  vienna: {
    o: ['합스부르크 왕가의 궁전과 미술관, 클래식 음악과 카페 문화의 도시입니다. 오페라·콘서트는 입석이나 당일권으로도 즐길 수 있고, 트램으로 링 도로를 따라 다니면 편합니다.', 'Habsburg palaces and galleries, classical music and coffee-house culture. Opera and concerts are possible with standing or same-day tickets, and trams along the Ring make getting around easy.', 'ハプスブルク家の宮殿と美術館、クラシック音楽とカフェ文化の街。オペラやコンサートは立ち見や当日券でも楽しめ、リンク通り沿いをトラムで回ると便利です。'],
    d: [3, 4],
    s: [
      ['내부 시가지(1구)', 'Innere Stadt (1st district)', '旧市街（1区）', '주요 명소와 카페를 걸어서 다닙니다.', 'Walk to the main sights and cafés.', '主要な名所やカフェへ歩いて行けます。'],
      ['서역·마리아힐퍼 거리', 'Westbahnhof / Mariahilfer Strasse', '西駅・マリアヒルファー通り', '쇼핑 거리와 기차역이 가깝고 숙소가 많습니다.', 'Near the shopping street and station, with many hotels.', '買い物通りや駅に近く、宿が多いです。'],
    ],
  },
  budapest: {
    o: ['도나우강을 사이에 둔 부다와 페스트로 이뤄진 도시로, 국회의사당 야경과 온천, 폐허 바가 유명합니다. 강변 야경은 유람선이나 어부의 요새에서 보기 좋습니다.', 'Buda and Pest face each other across the Danube: the Parliament lit up at night, thermal baths and ruin bars. Enjoy the river at night from a cruise or Fisherman’s Bastion.', 'ドナウ川を挟んだブダとペストからなる街で、国会議事堂の夜景、温泉、廃墟バーが有名。川の夜景はクルーズや漁夫の砦から楽しめます。'],
    d: [3, 3],
    s: [
      ['페스트 중심(5구·7구)', 'Central Pest (5th/7th districts)', 'ペスト中心（5区・7区）', '명소·식당·폐허 바를 걸어서 다닙니다.', 'Walk to sights, restaurants and ruin bars.', '名所や飲食店、廃墟バーへ歩いて行けます。'],
    ],
  },
  prague: {
    o: ['중세 구시가지와 카를교, 프라하성이 그대로 남은 「동화 같은」 도시입니다. 명소가 가까이 모여 있어 걸어서 다니기 좋고, 이른 아침의 카를교가 가장 한산합니다.', 'A fairy-tale city of a medieval old town, Charles Bridge and Prague Castle. Sights are close together and walkable, and Charles Bridge is quietest early in the morning.', '中世の旧市街とカレル橋、プラハ城がそのまま残る「おとぎ話のような」街。名所が近くに集まり歩きやすく、早朝のカレル橋が最も空いています。'],
    d: [3, 3],
    s: [
      ['구시가지·신시가지', 'Old Town / New Town', '旧市街・新市街', '명소를 걸어서 다니고 교통도 편합니다.', 'Walkable to the sights with good transport.', '名所へ歩いて行け、交通も便利です。'],
      ['말라 스트라나', 'Malá Strana', 'マラー・ストラナ', '프라하성 아래 조용하고 아름다운 동네입니다.', 'A quiet, beautiful quarter below the castle.', 'プラハ城の下にある静かで美しい地区です。'],
    ],
  },
  krakow: {
    o: ['전쟁 피해를 거의 입지 않은 중세 구시가지와 바벨성이 있는 폴란드의 옛 수도입니다. 아우슈비츠-비르케나우 기념관과 비엘리치카 소금광산을 하루씩 다녀오는 일정이 일반적입니다.', 'Poland’s former royal capital, with a medieval old town and Wawel Castle largely spared in the war. Most trips add days to the Auschwitz-Birkenau Memorial and the Wieliczka Salt Mine.', '戦禍をほとんど受けなかった中世の旧市街とヴァヴェル城があるポーランドの古都。アウシュヴィッツ＝ビルケナウ博物館とヴィエリチカ岩塩坑へ1日ずつ出かけるのが一般的です。'],
    d: [3, 3],
    s: [
      ['구시가지', 'Old Town', '旧市街', '중앙 광장과 바벨성을 걸어서 다닙니다.', 'Walk to the Main Square and Wawel.', '中央広場やヴァヴェル城へ歩いて行けます。'],
      ['카지미에시', 'Kazimierz', 'カジミエシュ', '옛 유대인 지구로 카페와 식당이 많습니다.', 'The old Jewish quarter, full of cafés and restaurants.', '旧ユダヤ人地区で、カフェや飲食店が多いです。'],
    ],
  },
  copenhagen: {
    o: ['뉘하운의 알록달록한 항구와 티볼리 공원, 북유럽 디자인과 자전거 문화의 도시입니다. 시내가 평탄하고 작아 걷거나 자전거로 다니기 좋습니다.', 'Colourful Nyhavn, Tivoli Gardens, Nordic design and bike culture. The centre is flat and compact, ideal on foot or by bike.', 'カラフルなニューハウンの港、チボリ公園、北欧デザインと自転車文化の街。市内は平らでコンパクトなので、徒歩や自転車で回りやすいです。'],
    d: [2, 3],
    s: [
      ['인데뷔(시내 중심)', 'Indre By (centre)', 'インナー・シティ（中心部）', '명소와 쇼핑 거리를 걸어서 다닙니다.', 'Walk to sights and shopping streets.', '名所や買い物通りへ歩いて行けます。'],
      ['베스테르브로', 'Vesterbro', 'ヴェスターブロ', '중앙역과 가깝고 식당이 많은 젊은 동네입니다.', 'Near the central station, with a young dining scene.', '中央駅に近く、飲食店が多い若者の街です。'],
    ],
  },
  stockholm: {
    o: ['14개의 섬 위에 세워진 「북유럽의 베네치아」로, 감라스탄 구시가지와 바사 박물관이 대표 명소입니다. 페리로 군도 섬을 다녀오는 것도 인기입니다.', 'The “Venice of the North” built on 14 islands, with the Gamla stan old town and the Vasa Museum; ferry trips into the archipelago are popular.', '14の島の上に築かれた「北欧のヴェネツィア」で、旧市街ガムラスタンやヴァーサ号博物館が代表的な名所。フェリーで群島へ出かけるのも人気です。'],
    d: [2, 3],
    s: [
      ['노르말름(중앙역 주변)', 'Norrmalm (Central Station)', 'ノルマルム（中央駅周辺）', '공항 열차와 지하철이 모여 이동이 편합니다.', 'Airport trains and the metro meet here.', '空港列車や地下鉄が集まり、移動が便利です。'],
      ['감라스탄·쇠데르말름', 'Gamla stan / Södermalm', 'ガムラスタン・セーデルマルム', '구시가지 분위기와 전망 좋은 언덕 동네입니다.', 'Old-town charm and hilly, view-filled neighbourhoods.', '旧市街の雰囲気と眺めの良い丘の街です。'],
    ],
  },
  helsinki: {
    o: ['발트해에 면한 핀란드의 수도로, 디자인 거리와 사우나, 수오멘린나 요새섬이 매력입니다. 탈린까지 페리로 2시간 남짓이라 함께 묶는 여행자가 많습니다.', 'Finland’s capital on the Baltic: a design district, saunas and the island fortress of Suomenlinna. Tallinn is about two hours by ferry, so many combine the two.', 'バルト海に面したフィンランドの首都で、デザイン地区やサウナ、スオメンリンナ要塞が魅力。タリンまでフェリーで2時間ほどなので、一緒に巡る旅行者が多いです。'],
    d: [2, 3],
    s: [
      ['헬싱키 중앙역·클루비', 'Central Station / Kluuvi', '中央駅・クルーヴィ', '공항 열차와 트램, 항구까지 가깝습니다.', 'Near airport trains, trams and the harbour.', '空港列車やトラム、港に近いです。'],
      ['디자인 디스트릭트', 'Design District', 'デザイン・ディストリクト', '디자인숍과 카페가 모인 동네입니다.', 'Design shops and cafés.', 'デザインショップやカフェが集まる地区です。'],
    ],
  },
  reykjavik: {
    o: ['아이슬란드 여행의 출발점으로, 시내는 작지만 골든 서클·블루 라군·남부 해안 투어와 겨울 오로라 투어가 모두 여기서 출발합니다. 날씨 변화가 커서 투어 날짜에 여유를 두세요.', 'The starting point for Iceland: the town is small, but Golden Circle, Blue Lagoon, south-coast and winter northern-lights tours all leave from here. Weather changes fast, so keep tour dates flexible.', 'アイスランド旅行の出発点。街は小さいものの、ゴールデンサークルやブルーラグーン、南海岸、冬のオーロラツアーがすべてここから出ます。天候の変化が大きいのでツアー日程に余裕を。'],
    d: [3, 5],
    s: [
      ['시내 중심(라우가베구르 주변)', 'Downtown (Laugavegur)', '中心部（ロイガヴェーグル周辺）', '식당과 투어 픽업 정류장이 가깝습니다.', 'Close to restaurants and tour pickup stops.', '飲食店やツアーの送迎場所に近いです。'],
    ],
  },
  lisbon: {
    o: ['일곱 언덕 위에 노란 트램이 오르내리는 도시로, 전망대(미라도루)와 에그타르트, 파두 음악이 매력입니다. 근교 신트라와 카스카이스를 기차로 당일치기하기 좋습니다.', 'Yellow trams climb its seven hills; viewpoints (miradouros), custard tarts and fado are the draws. Sintra and Cascais are easy day trips by train.', '七つの丘を黄色いトラムが上り下りする街で、展望台（ミラドウロ）やエッグタルト、ファドが魅力。近郊のシントラやカスカイスへ電車で日帰りしやすいです。'],
    d: [3, 4],
    s: [
      ['바이샤·시아두', 'Baixa / Chiado', 'バイシャ・シアード', '평지에 가까워 다니기 편하고 명소가 가깝습니다.', 'Mostly flat and close to the sights.', '平地が多く動きやすく、名所に近いです。'],
      ['알파마', 'Alfama', 'アルファマ', '골목과 파두 식당이 있는 옛 동네(언덕이 가파름).', 'The old quarter of lanes and fado houses (steep hills).', '路地とファド酒場がある古い地区（坂が急）。'],
    ],
  },
  madrid: {
    o: ['프라도 미술관 등 세계적인 미술관과 왕궁, 늦은 저녁 식사와 타파스 문화의 도시입니다. 톨레도·세고비아를 당일치기로 다녀오기 좋습니다.', 'World-class museums like the Prado, the Royal Palace, late dinners and tapas. Toledo and Segovia make easy day trips.', 'プラド美術館などの世界的な美術館と王宮、遅い夕食とタパス文化の街。トレドやセゴビアへ日帰りしやすいです。'],
    d: [3, 4],
    s: [
      ['솔·그란 비아', 'Sol / Gran Vía', 'ソル・グラン・ビア', '중심 광장 주변이라 어디든 걸어서 갑니다.', 'Central squares within walking distance of everything.', '中心の広場周辺で、どこへでも歩いて行けます。'],
      ['라 라티나·우에르타스', 'La Latina / Huertas', 'ラ・ラティーナ・ウエルタス', '타파스 바가 모인 동네입니다.', 'Neighbourhoods full of tapas bars.', 'タパスバーが集まる地区です。'],
    ],
  },
  barcelona: {
    o: ['가우디의 사그라다 파밀리아와 구엘 공원, 지중해 해변이 함께 있는 도시입니다. 가우디 건축물은 시간 지정 예약이 필요하니 먼저 표를 잡고 일정을 짜세요.', 'Gaudí’s Sagrada Família and Park Güell alongside Mediterranean beaches. Gaudí sites need timed tickets, so book them first and plan around them.', 'ガウディのサグラダ・ファミリアやグエル公園と地中海のビーチがある街。ガウディ建築は時間指定予約が必要なので、先にチケットを取って日程を組みましょう。'],
    d: [3, 4],
    s: [
      ['에이샴플레', 'Eixample', 'アシャンプラ', '가우디 건축물과 가깝고 비교적 조용합니다.', 'Close to Gaudí buildings and relatively calm.', 'ガウディ建築に近く、比較的静かです。'],
      ['고딕 지구·보른', 'Gothic Quarter / El Born', 'ゴシック地区・ボルン', '골목 분위기가 좋지만 소매치기에 주의하세요.', 'Atmospheric lanes, but watch for pickpockets.', '路地の雰囲気が良いですが、スリに注意しましょう。'],
    ],
  },
  rome: {
    o: ['콜로세움과 포로 로마노, 바티칸, 트레비 분수까지 도시 전체가 유적인 곳입니다. 바티칸과 콜로세움은 예약이 필수에 가까워 날짜를 먼저 정하고, 나머지는 걸어서 엮으면 효율적입니다.', 'The whole city is an open-air museum: the Colosseum, the Forum, the Vatican and the Trevi Fountain. Book the Vatican and Colosseum first, then link the rest on foot.', 'コロッセオやフォロ・ロマーノ、バチカン、トレヴィの泉まで街全体が遺跡。バチカンとコロッセオは予約がほぼ必須なので先に日程を決め、残りは歩いてつなぐと効率的です。'],
    d: [3, 4],
    s: [
      ['테르미니역 주변', 'Termini area', 'テルミニ駅周辺', '공항 열차와 지하철이 모여 이동이 편합니다(밤에는 주의).', 'Airport trains and the metro meet here (be careful at night).', '空港線や地下鉄が集まり便利です（夜は注意）。'],
      ['판테온·나보나 광장 주변', 'Pantheon / Piazza Navona', 'パンテオン・ナヴォーナ広場周辺', '명소를 걸어서 다니기 가장 좋습니다.', 'The best base for walking between sights.', '名所を歩いて回るのに最適です。'],
    ],
  },
  florence: {
    o: ['르네상스 미술의 중심지로, 두오모와 우피치 미술관, 아카데미아의 다비드상이 대표 명소입니다. 시내가 작아 걸어서 다니고, 피사·시에나·키안티를 당일치기하기 좋습니다.', 'The cradle of Renaissance art: the Duomo, the Uffizi and Michelangelo’s David. The centre is walkable, with easy day trips to Pisa, Siena and Chianti.', 'ルネサンス美術の中心地で、ドゥオーモやウフィツィ美術館、アカデミア美術館のダビデ像が代表的。市内は歩いて回れ、ピサやシエナ、キャンティへ日帰りしやすいです。'],
    d: [2, 3],
    s: [
      ['두오모 주변', 'Around the Duomo', 'ドゥオーモ周辺', '명소를 모두 걸어서 다닐 수 있습니다.', 'Every sight within walking distance.', 'すべての名所へ歩いて行けます。'],
      ['산타 마리아 노벨라역 주변', 'Santa Maria Novella Station', 'サンタ・マリア・ノヴェッラ駅周辺', '근교 기차 이동이 편합니다.', 'Handy for day trips by train.', '近郊への列車移動が便利です。'],
    ],
  },
  venice: {
    o: ['차가 없는 운하 위의 도시로, 수상버스(바포레토)와 걷기로만 다닙니다. 낮에는 당일 관광객으로 붐비니 하룻밤 묵으며 이른 아침과 저녁을 즐기는 것을 추천합니다.', 'A car-free city of canals, explored only by vaporetto and on foot. Daytime crowds are heavy, so stay overnight to enjoy the early mornings and evenings.', '車のない運河の街で、水上バス（ヴァポレット）と徒歩だけで移動します。日中は日帰り客で混むので、1泊して早朝と夜を楽しむのがおすすめです。'],
    d: [2, 2],
    s: [
      ['카나레조', 'Cannaregio', 'カンナレージョ', '기차역과 가깝고 비교적 조용한 현지인 동네입니다.', 'Near the station, quieter and more local.', '駅に近く、比較的静かな地元の地区です。'],
      ['산 마르코 주변', 'San Marco area', 'サン・マルコ周辺', '명소 한가운데지만 숙박비가 높은 편입니다.', 'In the middle of the sights, but pricier.', '名所の真ん中ですが、宿泊費は高めです。'],
    ],
  },
  athens: {
    o: ['아크로폴리스와 고대 아고라 등 고대 그리스 유적이 도심에 있는 도시입니다. 플라카 골목과 전망 좋은 루프탑을 즐기고, 에게해 섬으로 가는 페리의 출발점이기도 합니다.', 'Ancient Greek sites like the Acropolis and the Agora sit in the city centre. Enjoy the Plaka lanes and rooftop views, and catch ferries to the Aegean islands.', 'アクロポリスや古代アゴラなど古代ギリシャの遺跡が都心にある街。プラカの路地や眺めの良いルーフトップを楽しみ、エーゲ海の島へのフェリーの出発点でもあります。'],
    d: [2, 3],
    s: [
      ['플라카·모나스티라키', 'Plaka / Monastiraki', 'プラカ・モナスティラキ', '아크로폴리스와 가깝고 골목 식당이 많습니다.', 'Below the Acropolis, with tavernas in the lanes.', 'アクロポリスに近く、路地のタベルナが多いです。'],
      ['신타그마', 'Syntagma', 'シンタグマ', '공항 지하철·버스가 닿아 이동이 편합니다.', 'Airport metro and buses arrive here.', '空港からの地下鉄やバスが着き、便利です。'],
    ],
  },
  dubrovnik: {
    o: ['아드리아해에 면한 성벽 도시로, 성벽 위를 한 바퀴 걷는 것과 스르지산 케이블카 전망이 대표 코스입니다. 크루즈 관광객이 몰리는 낮을 피해 아침·저녁에 구시가지를 걷는 것이 좋습니다.', 'A walled city on the Adriatic: walk the city walls and ride the Mount Srđ cable car for the view. Explore the old town early or late to avoid the cruise crowds.', 'アドリア海に面した城壁の街で、城壁の上を一周歩くことやスルジ山のケーブルカーからの眺めが定番。クルーズ客が集まる日中を避け、朝夕に旧市街を歩きましょう。'],
    d: [2, 3],
    s: [
      ['구시가지(성벽 안)', 'Old Town (inside the walls)', '旧市街（城壁内）', '분위기는 최고지만 계단이 많고 짐 옮기기가 힘듭니다.', 'Unbeatable atmosphere, but many steps for luggage.', '雰囲気は最高ですが、階段が多く荷物の運搬が大変です。'],
      ['플로체·라파드', 'Ploče / Lapad', 'プロチェ・ラパド', '바다 전망 숙소와 해변이 있고 버스로 구시가지에 갑니다.', 'Sea-view stays and beaches, a bus ride from the old town.', '海の見える宿やビーチがあり、バスで旧市街へ行けます。'],
    ],
  },
  istanbul: {
    o: ['유럽과 아시아에 걸친 도시로, 아야 소피아와 블루 모스크, 그랜드 바자르, 보스포루스 해협 페리가 대표 경험입니다. 구시가지와 신시가지를 하루씩 나눠 보면 동선이 편합니다.', 'A city spanning Europe and Asia: Hagia Sophia, the Blue Mosque, the Grand Bazaar and Bosphorus ferries. Split days between the historic peninsula and Beyoğlu.', 'ヨーロッパとアジアにまたがる街で、アヤソフィアやブルーモスク、グランドバザール、ボスポラス海峡のフェリーが定番。旧市街と新市街を1日ずつ分けると回りやすいです。'],
    d: [3, 4],
    s: [
      ['술탄아흐메트', 'Sultanahmet', 'スルタンアフメット', '주요 유적을 걸어서 다닐 수 있습니다.', 'Walk to the major historic sights.', '主要な遺跡へ歩いて行けます。'],
      ['베이오을루·카라쾨이', 'Beyoğlu / Karaköy', 'ベイオール・カラキョイ', '탁심 광장과 식당·카페가 많은 신시가지입니다.', 'The modern side near Taksim, full of cafés and restaurants.', 'タクシム広場や飲食店・カフェが多い新市街です。'],
    ],
  },
};
