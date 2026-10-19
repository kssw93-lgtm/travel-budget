/** 언제 가면 좋을까 4 — 미주·대양주·태평양 섬 (형식은 city-when-1.ts) */
import type { When } from './city-when-1';

export const WHEN_4: Record<string, When> = {
  'new-york': {
    p: [
      ['11월 말~12월 연말', 'Late November–December (holiday season)', '11月末〜12月（ホリデーシーズン）', '추수감사절 퍼레이드부터 연말 장식과 새해맞이 행사까지 이어집니다.', 'From late November through year-end, the Thanksgiving parade leads into holiday decorations and New Year\'s events.', '11月下旬から年末にかけて、感謝祭パレードに続き、ホリデーの装飾や年越し行事が楽しめます。'],
      ['봄·가을', 'Spring and autumn', '春・秋', '센트럴 파크의 봄꽃과 가을 단풍을 보며 걷기 좋습니다.', 'Spring and fall are good times to walk through Central Park for blossoms and foliage.', '春と秋は、セントラルパークの花や紅葉を見ながら散歩するのに向いています。'],
    ],
    x: ['1~2월에는 추위와 눈에 대비하세요. 연말에는 숙소를 일찍 확인하는 편이 좋습니다.', 'Prepare for cold and possible snow in January and February. Check lodging early for year-end travel.', '1〜2月は寒さや雪に備えましょう。年末の旅行では宿泊先を早めに確認すると安心です。'],
  },
  'los-angeles': {
    p: [
      ['9~10월', 'September–October', '9〜10月', '여름 성수기가 지나도 해변 날씨가 이어지고 맑고 온화한 날이 많습니다.', 'Beach weather lasts beyond the summer peak, with many clear, mild days.', '夏の繁忙期が過ぎてもビーチ日和が続き、晴れて穏やかな日が多いです。'],
      ['3~5월', 'March–May', '3〜5月', '맑고 온화해 테마파크와 시내 관광에 좋습니다.', 'Sunny, mild weather for theme parks and city sights.', '晴れて穏やかで、テーマパークや市内観光に最適です。'],
    ],
    x: ['5~6월 아침에는 바닷가 안개(메이 그레이·준 글룸)가 잦습니다.', 'May–June mornings often bring coastal fog (“May Gray”, “June Gloom”).', '5〜6月の朝は海沿いに霧（メイグレー・ジューングルーム）が多いです。'],
  },
  'las-vegas': {
    p: [
      ['봄·가을', 'Spring and fall', '春・秋', '라스베이거스의 여름 폭염을 피해 그랜드캐니언 등 야외 명소를 계획하기 좋습니다. 수영장 운영 기간은 숙소마다 확인하세요.', 'These seasons are better for planning outdoor sights such as the Grand Canyon away from Las Vegas\'s extreme summer heat. Check each hotel\'s pool season separately.', 'ラスベガスの夏の猛暑を避けて、グランドキャニオンなどの屋外観光を計画しやすい時期です。プールの営業期間は宿泊先ごとに確認してください。'],
      ['12월 31일 새해', '31 December (New Year’s Eve)', '12月31日（年越し）', '스트립 거리를 막고 호텔들이 함께 쏘아 올리는 새해 불꽃놀이가 유명합니다.', 'The Strip closes to traffic for rooftop fireworks from the resorts.', 'ストリップが歩行者天国になり、ホテルが一斉に打ち上げる年越し花火が有名です。'],
    ],
    x: ['6~8월 한낮은 매우 뜨겁고, 큰 행사·연휴 주말은 숙박비가 크게 오릅니다.', 'June–August afternoons are scorching, and big-event weekends push rates up.', '6〜8月の日中は非常に暑く、大型イベントや連休の週末は宿泊費が大きく上がります。'],
  },
  'san-francisco': {
    p: [
      ['9~10월', 'September–October', '9〜10月', '안개가 걷혀 일 년 중 가장 맑고 따뜻한 시기로, 금문교 전망이 가장 잘 보입니다.', 'The fog lifts for the year’s warmest, clearest days and the best Golden Gate views.', '霧が晴れ一年で最も暖かく澄んだ時期で、ゴールデンゲートブリッジが最もよく見えます。'],
    ],
    x: ['6~8월은 안개와 바람으로 의외로 쌀쌀합니다.', 'June–August is surprisingly chilly with fog and wind.', '6〜8月は霧と風で意外と肌寒いです。'],
  },
  vancouver: {
    p: [
      ['6~9월(특히 7~8월)', 'June–September (especially July–August)', '6〜9月（特に7〜8月）', '6~9월, 특히 7~8월은 비교적 건조한 여름입니다. 스탠리 공원 자전거와 근교 산·섬 여행을 즐기기 좋습니다.', 'June to September, especially July and August, brings a relatively dry summer suited to biking in Stanley Park and exploring nearby mountains and islands.', '6～9月、特に7～8月は比較的雨の少ない夏です。スタンレーパークのサイクリングや近郊の山・島への旅に向いています。'],
      ['12~3월 스키', 'December–March (skiing)', '12〜3月（スキー）', '시내 근처 그라우스산과 휘슬러에서 스키를 즐길 수 있습니다.', 'Ski on Grouse Mountain near town or at Whistler.', '市内近くのグラウス山やウィスラーでスキーが楽しめます。'],
    ],
    x: ['10월~3월 밴쿠버 시내는 비가 잦은 편입니다. 방수 겉옷을 준비하세요.', 'Rain is relatively frequent in Vancouver from October to March. Bring a waterproof outer layer.', 'バンクーバー市内では10～3月に雨が比較的多くなります。防水の上着を用意しましょう。'],
  },
  cancun: {
    p: [
      ['12~4월 건기', 'December–April (dry season)', '12〜4月（乾季）', '맑고 습도가 낮아 바다와 마야 유적·세노테 투어에 가장 좋습니다.', 'Sunny, less humid days for the sea, Mayan ruins and cenotes.', '晴れて湿度が低く、海やマヤ遺跡、セノーテのツアーに最適です。'],
      ['3월 춘분 치첸이트사', 'March equinox (Chichén Itzá)', '3月の春分（チチェン・イッツァ）', '피라미드 계단에 뱀 모양 그림자가 나타나는 현상을 보러 많은 사람이 모입니다.', 'Crowds gather to see the serpent-shaped shadow on the pyramid’s steps.', 'ピラミッドの階段に蛇の形の影が現れる現象を見に多くの人が集まります。'],
    ],
    x: ['6~11월은 허리케인 시기이고 여름에는 해초가 밀려오기도 합니다.', 'June–November is hurricane season, and summer can bring sargassum.', '6〜11月はハリケーンの時期で、夏は海藻が漂着することもあります。'],
  },
  honolulu: {
    p: [
      ['9~10월', 'September–October', '9〜10月', '날씨는 일 년 내내 좋지만, 여름·겨울 휴가철보다 비교적 한산합니다.', 'The weather is good year-round, but this is quieter than the summer and winter holidays.', '気候は一年中良いですが、夏や冬の休暇シーズンより比較的空いています。'],
      ['9월 알로하 페스티벌', 'September (Aloha Festivals)', '9月（アロハ・フェスティバル）', '하와이 문화를 기념하는 퍼레이드와 거리 축제가 열립니다.', 'Parades and street parties celebrating Hawaiian culture.', 'ハワイ文化を祝うパレードや街のお祭りがあります。'],
      ['11~2월 겨울 파도', 'November–February (winter surf)', '11〜2月（冬の大波）', '오아후 북쪽 해안의 거대한 파도와 서핑 대회를 구경할 수 있습니다(수영은 주의).', 'Watch giant North Shore waves and surf contests (swim with caution).', 'オアフ島北海岸の大波やサーフィン大会を見物できます（遊泳は注意）。'],
    ],
  },
  guam: {
    p: [
      ['1~5월 건기', 'January–May (dry season)', '1〜5月（乾季）', '비가 비교적 적어 투몬 해변과 스노클링을 즐기기 좋습니다.', 'January to May is the dry season, with relatively less rain for enjoying Tumon Beach and snorkeling.', '1～5月は乾季で、比較的雨が少なく、タモンビーチやシュノーケリングを楽しみやすい時期です。'],
      ['7월 해방 기념일', 'July (Liberation Day)', '7月（解放記念日）', '7월 21일 무렵 퍼레이드와 축제가 열리는 괌 최대 행사입니다.', 'Guam’s biggest celebration, with a parade around 21 July.', '7月21日頃にパレードや祭りが開かれるグアム最大の行事です。'],
    ],
    x: ['7~11월은 비가 잦고 태풍 가능성이 있습니다.', 'July–November is wetter with typhoon risk.', '7〜11月は雨が多く台風の可能性があります。'],
  },
  saipan: {
    p: [
      ['1~5월 건기', 'January–May (dry season)', '1〜5月（乾季）', '1~5월은 사이판의 비교적 건조한 시기입니다. 그로토 다이빙이나 마나가하섬 방문 전에는 해상 상황과 명소 운영 여부를 공식 안내에서 확인하세요.', 'January to May is Saipan\'s relatively dry season. Before planning a Grotto dive or a visit to Managaha Island, check sea conditions and the official status of each site.', '1～5月はサイパンで比較的雨の少ない時期です。グロットでのダイビングやマナガハ島への訪問を計画する前に、海の状況と施設の公式な営業情報を確認しましょう。'],
    ],
    x: ['7~11월은 비가 잦고 태풍 가능성이 있습니다.', 'July–November is wetter with typhoon risk.', '7〜11月は雨が多く台風の可能性があります。'],
  },
  sydney: {
    p: [
      ['12월 31일 새해 불꽃', '31 December (New Year’s Eve)', '12月31日（年越し花火）', '하버브리지와 오페라하우스를 배경으로 한 세계적인 새해 불꽃놀이가 열립니다.', 'World-famous fireworks over the Harbour Bridge and Opera House.', 'ハーバーブリッジとオペラハウスを背景にした世界的な年越し花火があります。'],
      ['5~6월 비비드 시드니', 'May–June (Vivid Sydney)', '5〜6月（ビビッド・シドニー）', '오페라하우스 등 도시 곳곳에 빛 조형과 프로젝션이 펼쳐지는 빛 축제입니다.', 'A festival of light projections across the Opera House and the city.', 'オペラハウスなど街中に光のアートが広がる光の祭典です。'],
      ['9~11월 봄', 'September–November (spring)', '9〜11月（春）', '날씨가 온화해 해안 산책로와 블루마운틴 여행에 좋습니다.', 'Mild weather for coastal walks and the Blue Mountains.', '穏やかな気候で、海岸遊歩道やブルーマウンテンズに最適です。'],
    ],
    x: ['남반구라 계절이 한국과 반대입니다. 새해 전후 숙박비는 매우 높습니다.', 'Seasons are reversed; New Year rates are very high.', '南半球で季節が日本と逆です。年越し前後は宿泊費が非常に高いです。'],
  },
  melbourne: {
    p: [
      ['1월 호주 오픈 테니스', 'January (Australian Open)', '1月（全豪オープン）', '세계 4대 테니스 대회로 도시 전체가 축제 분위기입니다.', 'A Grand Slam tennis tournament that gives the city a festival mood.', 'テニス四大大会の一つで、街全体がお祭りムードになります。'],
      ['3~5월 가을', 'March–May autumn', '3～5月の秋', '그레이트 오션 로드의 해안 풍경을 즐길 수 있지만 날씨는 자주 바뀌므로 출발 전 예보를 확인하세요.', 'A good time to enjoy the Great Ocean Road\'s coastal scenery, but the weather can change quickly, so check the forecast before leaving.', 'グレート・オーシャン・ロードの海岸風景を楽しめますが、天候は変わりやすいため、出発前に予報を確認してください。'],
    ],
  },
  auckland: {
    p: [
      ['12~2월 여름', 'December–February (summer)', '12〜2月（夏）', '12~2월 여름은 해변·섬 여행을 즐기기 좋습니다. 와이헤케섬의 와이너리도 함께 둘러볼 수 있고, 3월은 초가을입니다.', 'December to February is summer for beach and island trips, including visits to Waiheke Island wineries; March is early autumn.', '12～2月の夏はビーチや島巡りに向き、ワイヘキ島のワイナリーも楽しめます。3月は初秋です。'],
    ],
    x: ['남반구라 6~8월이 겨울이고 비가 잦습니다.', 'June–August is winter in the southern hemisphere and often wet.', '南半球で6〜8月は冬で雨が多いです。'],
  },
  'quebec-city': {
    p: [
      ['11월 19일~12월 23일 크리스마스 마켓(2026)', '19 November–23 December (Christmas market, 2026)', '11月19日〜12月23日（クリスマスマーケット、2026年）', '구시가지 여러 곳에 독일식 크리스마스 마켓이 열려 눈 덮인 성벽 도시가 더욱 동화 같아집니다(아래 「크리스마스 마켓」 칸 참고).', 'A German-style Christmas market spreads across the old town, making the snowy walled city even more storybook (see the Christmas market section).', '旧市街の各所にドイツ風クリスマスマーケットが開かれ、雪の城壁都市がいっそう童話のようになります（「クリスマスマーケット」欄参照）。'],
      ['2월 윈터 카니발(2027년 2월 5~14일)', 'February Winter Carnival (5–14 February 2027)', '2月のウィンターカーニバル（2027年2月5〜14日）', '눈사람 마스코트 「봉옴」과 함께 야간 퍼레이드와 눈 조각, 겨울 놀이가 열리는 세계적인 겨울 축제입니다.', 'Night parades, snow sculptures and winter games with the snowman mascot Bonhomme.', '雪だるまのマスコット「ボノム」とともに夜のパレードや雪像、冬の遊びが楽しめる冬の祭りです。'],
      ['6~8월 여름', 'June–August (summer)', '6〜8月（夏）', '구시가지 산책과 몽모랑시 폭포, 여름 축제를 즐기기 좋은 계절입니다.', 'The season for old-town walks, Montmorency Falls and summer festivals.', '旧市街の散策やモンモランシー滝、夏祭りを楽しめる季節です。'],
    ],
    x: ['12~2월은 영하 20도 안팎까지 내려가는 날이 있어 방한복과 미끄럼 방지 신발이 필요합니다.', 'December–February can drop to around −20 °C; bring warm layers and non-slip shoes.', '12〜2月は氷点下20度前後まで下がる日もあり、防寒着と滑りにくい靴が必要です。'],
  },
  porto: {
    p: [
      ['6월 23~24일 상주앙 축제', '23–24 June (São João festival)', '6月23〜24日（サン・ジョアン祭）', '포르투의 수호성인 축제로, 23일 밤 도루강 불꽃놀이와 거리 축제가 이어집니다. 공식 프로그램은 대부분 무료입니다.', 'Porto’s patron-saint festival, with fireworks over the Douro and street parties on the night of the 23rd; most official events are free.', 'ポルトの守護聖人の祭りで、23日の夜はドウロ川の花火と街の祭りが続きます。公式プログラムの多くは無料です。'],
      ['9~10월 포도 수확철', 'September–October (grape harvest)', '9〜10月（ブドウの収穫期）', '도루 계곡의 포도 수확철로, 와이너리 투어와 강 크루즈를 즐기기 좋습니다.', 'Harvest time in the Douro Valley, good for winery tours and river cruises.', 'ドウロ渓谷のブドウ収穫期で、ワイナリー巡りや川のクルーズに向いています。'],
    ],
    x: ['11~2월은 비가 잦고 강바람이 차니 우산과 겉옷을 챙기세요.', 'November–February brings frequent rain and chilly river winds, so pack an umbrella and a jacket.', '11〜2月は雨が多く川風が冷たいので、傘と上着を用意しましょう。'],
  },
  seville: {
    p: [
      ['성주간(부활절 전 주)', 'Holy Week (the week before Easter)', '聖週間（復活祭前の週）', '성당의 성상 행렬이 밤낮으로 거리를 지나는 세비야 최대의 종교 행사입니다. 날짜는 해마다 부활절에 따라 바뀝니다.', 'Seville’s biggest religious event, with processions carrying sacred images through the streets day and night; dates follow Easter each year.', '聖像を担いだ行列が昼夜を問わず街を練り歩くセビリア最大の宗教行事です。日付は毎年復活祭によって変わります。'],
      ['4월 봄 축제(페리아)', 'April Fair (Feria de Abril)', '春祭り（フェリア・デ・アブリル）', '성주간 2주쯤 뒤 일주일 동안 축제장에 천막(카세타)이 늘어서고 플라멩코 드레스와 마차 행렬이 이어집니다.', 'About two weeks after Holy Week, a week of casetas (marquees), flamenco dresses and horse-drawn carriages at the fairground.', '聖週間の約2週間後の1週間、会場に小屋（カセタ）が並び、フラメンコドレスや馬車の行列が続きます。'],
    ],
    x: ['7~8월 한낮은 매우 더워 박물관·성당 실내 관람이나 이른 아침·저녁 일정으로 짜는 것이 좋습니다.', 'Midday in July–August is extremely hot; plan indoor sights or early-morning and evening outings.', '7〜8月の日中は非常に暑いので、屋内の見学か早朝・夕方の予定にするのがおすすめです。'],
  },
  milan: {
    p: [
      ['12월 초 오베이 오베이 마켓', 'Early December (Oh Bej! Oh Bej! market)', '12月初め（オ・ベイ・オ・ベイ市）', '밀라노의 수호성인 성 암브로시오 축일(12월 7일) 무렵 스포르체스코성 주변에 열리는 오래된 크리스마스 장터입니다.', 'Milan’s old Christmas fair, held around Sforza Castle near the feast of its patron Sant’Ambrogio (7 December).', 'ミラノの守護聖人・聖アンブロジウスの祝日（12月7日）の頃、スフォルツェスコ城周辺で開かれる伝統あるクリスマス市です。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '시내 산책과 코모 호수 당일치기에 좋은 날씨입니다.', 'Good weather for city walks and day trips to Lake Como.', '街歩きやコモ湖への日帰りに向いた気候です。'],
    ],
    x: ['8월 중순에는 휴가로 문을 닫는 식당·상점이 많으니 미리 영업일을 확인하세요.', 'Around mid-August many restaurants and shops close for holidays, so check opening days.', '8月中旬は休暇で閉まる飲食店や店が多いので、営業日を確認しましょう。'],
  },
  lucerne: {
    p: [
      ['2월 카니발(파스나흐트, 2027년 2월 4~9일)', 'February carnival (Fasnacht, 4–9 February 2027)', '2月のカーニバル（ファスナハト、2027年2月4〜9日）', '새벽 굉음과 함께 시작해 가면과 브라스밴드 행렬이 며칠 동안 이어지는 루체른 최대의 축제입니다.', 'Lucerne’s biggest festival, starting with a dawn bang and days of masked parades and brass bands.', '早朝の号砲で始まり、仮面とブラスバンドの行列が数日続くルツェルン最大の祭りです。'],
      ['6~9월 산악 시즌', 'June–September (mountain season)', '6〜9月（山のシーズン）', '배와 톱니바퀴 열차로 필라투스를 한 바퀴 도는 코스 등 산악 교통이 모두 운행합니다.', 'All mountain transport runs, including the boat-and-cogwheel loop over Pilatus.', '船と登山鉄道でピラトゥスを一周するコースなど、山岳交通がすべて運行します。'],
    ],
    x: ['겨울에는 필라투스 톱니바퀴 열차 등 일부 산악 교통이 운휴하니 운행 여부를 미리 확인하세요.', 'In winter some mountain transport, such as the Pilatus cogwheel railway, does not run; check before you go.', '冬はピラトゥスの登山鉄道など一部の山岳交通が運休するので、運行状況を事前に確認しましょう。'],
  },
  granada: {
    p: [
      ['봄(3~5월)', 'Spring (March–May)', '春（3〜5月）', '알람브라 정원 헤네랄리페에 꽃이 피고 걷기 좋은 날씨입니다. 성주간 행렬도 열립니다.', 'The Generalife gardens bloom and the weather suits walking; Holy Week processions take place too.', 'アルハンブラのヘネラリーフェ庭園に花が咲き、歩きやすい気候です。聖週間の行列も行われます。'],
      ['가을(9~11월)', 'Autumn (September–November)', '秋（9〜11月）', '더위가 물러가 알바이신 언덕과 타파스 거리를 다니기 좋습니다.', 'The heat eases, good for the Albaicín hills and tapas bars.', '暑さが和らぎ、アルバイシンの丘やタパス街を巡るのに向いています。'],
    ],
    x: ['알람브라 입장권은 하루 인원이 정해져 있어 성수기에는 몇 주 전에 매진됩니다. 공식 판매처에서 미리 예약하세요.', 'Alhambra tickets are capped daily and sell out weeks ahead in high season; book on the official site.', 'アルハンブラの入場券は1日の人数が決まっていて、繁忙期は数週間前に売り切れます。公式販売サイトで早めに予約を。'],
  },
  valencia: {
    p: [
      ['3월 15~19일 파야스', '15–19 March (Fallas)', '3月15〜19日（ファジャス）', '거리에 거대한 인형 조형물이 세워지고 폭죽 행사가 이어지다 마지막 밤에 모두 태우는 유네스코 무형유산 축제입니다.', 'A UNESCO-listed festival of giant satirical figures and firecrackers, all burned on the final night.', '巨大な人形の造形物が街に並び、爆竹の行事が続き、最終夜にすべて燃やすユネスコ無形文化遺産の祭りです。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '말바로사 해변과 투리아 공원 산책, 알부페라 호수 일몰을 즐기기 좋은 날씨입니다.', 'Good weather for Malvarrosa beach, Turia gardens walks and Albufera sunsets.', 'マルバロサ海岸やトゥリア公園の散歩、アルブフェラ湖の夕日を楽しむのに向いた気候です。'],
    ],
    x: ['파야스 기간(3월 중순)에는 숙소 요금이 크게 오르고 폭죽 소리가 아침부터 이어지니 미리 알고 일정을 잡으세요.', 'During Fallas (mid-March) room rates soar and firecrackers go off from morning, so plan accordingly.', 'ファジャスの期間（3月中旬）は宿泊料金が大きく上がり、朝から爆竹が鳴り続けるので、承知の上で日程を組みましょう。'],
  },
  bordeaux: {
    p: [
      ['9~10월 포도 수확철', 'September–October (grape harvest)', '9〜10月（ブドウの収穫期）', '생테밀리옹·메독 등 근교 와이너리 투어가 가장 활기를 띠는 시기입니다.', 'The liveliest time for winery tours in Saint-Émilion, the Médoc and beyond.', 'サンテミリオンやメドックなど近郊ワイナリー巡りが最もにぎわう時期です。'],
      ['5~6월', 'May–June', '5〜6月', '강변 산책로와 물의 거울에서 산책하기 좋은 날씨입니다.', 'Good weather for the riverside quays and the Water Mirror.', '川沿いの遊歩道や水の鏡を散策するのに向いた気候です。'],
    ],
    x: ['11~2월은 비가 잦으니 우산을 챙기고 실내 명소(시테 뒤 뱅·박물관)를 섞어 일정을 짜세요.', 'November–February is often rainy; bring an umbrella and mix in indoor sights like the Cité du Vin and museums.', '11〜2月は雨が多いので傘を持ち、シテ・デュ・ヴァンや博物館など屋内の名所も組み合わせましょう。'],
  },
  hamburg: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '강변 산책로와 항구 유람선, 일요일 아침 어시장을 즐기기 좋은 계절입니다.', 'The season for riverside walks, harbour cruises and the Sunday-morning fish market.', '川沿いの散策や港の遊覧船、日曜朝の魚市場を楽しむのに良い季節です。'],
      ['11월 말~12월 크리스마스 마켓', 'Late November–December (Christmas markets)', '11月末〜12月（クリスマスマーケット）', '시청 광장을 비롯해 시내 곳곳에 크리스마스 마켓이 들어섭니다.', 'Christmas markets fill the town hall square and other spots across the centre.', '市庁舎広場をはじめ市内各地にクリスマスマーケットが立ちます。'],
    ],
    x: ['미니어처 원더랜드는 날에 따라 대기가 몇 시간까지 길어지니 시간 지정 입장권을 미리 사 두세요.', 'Miniatur Wunderland can mean hours of queuing on busy days; buy a timed ticket in advance.', 'ミニチュア・ワンダーランドは日によって数時間待ちになるので、時間指定券を事前に買っておきましょう。'],
  },
  queenstown: {
    p: [
      ['12~2월(여름)', 'December–February (summer)', '12〜2月（夏）', '해가 길어 하이킹·호수 유람·와이너리 투어를 하루에 여러 개 즐길 수 있습니다.', 'Long days for hiking, lake cruises and winery tours in a single day.', '日が長く、ハイキングや湖の遊覧、ワイナリー巡りを一日に何本も楽しめます。'],
      ['6~9월(겨울)', 'June–September (winter)', '6〜9月（冬）', '코로넷 피크·리마커블스 등 근교 스키장 시즌입니다.', 'Ski season at nearby fields such as Coronet Peak and The Remarkables.', 'コロネットピークやリマーカブルズなど近郊のスキー場のシーズンです。'],
    ],
    x: ['밀퍼드 사운드 투어는 날씨로 취소되는 일이 있으니 여행 앞쪽 날짜에 잡아 두면 다시 시도할 여유가 생깁니다.', 'Milford Sound trips can be cancelled for weather, so book one early in your stay to leave room for a retry.', 'ミルフォード・サウンドのツアーは天候で中止になることがあるので、旅程の前半に入れておくと再挑戦の余裕ができます。'],
  },
  innsbruck: {
    p: [
      ['6~9월 산악 시즌', 'June–September (mountain season)', '6〜9月（山のシーズン）', '노르트케테 정상 하펠레카르까지 올라 알프스 전망과 하이킹을 즐기기 좋습니다.', 'The best time to ride up to Hafelekar on the Nordkette for Alpine views and hikes.', 'ノルトケッテ山頂のハーフェレカールまで上り、アルプスの眺めやハイキングを楽しむのに最適です。'],
      ['11월 중순~12월 크리스마스 마켓', 'Mid-November–December (Christmas markets)', '11月中旬〜12月（クリスマスマーケット）', '황금 지붕 앞 구시가지를 중심으로 크리스마스 마켓이 열립니다.', 'Christmas markets centre on the old town in front of the Golden Roof.', '黄金の小屋根前の旧市街を中心にクリスマスマーケットが開かれます。'],
    ],
    x: ['산악 케이블카는 날씨와 정기 점검으로 운휴할 수 있으니 운행 여부를 확인하고 올라가세요.', 'Mountain cable cars can pause for weather or maintenance; check before heading up.', '山のケーブルカーは天候や定期点検で運休することがあるので、運行状況を確認してから上りましょう。'],
  },
  marseille: {
    p: [
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '칼랑크 하이킹과 바다 수영, 구항구 산책 모두 좋은 날씨입니다.', 'Good weather for Calanques hikes, swimming and Vieux-Port strolls.', 'カランクのハイキングや海水浴、旧港の散策にちょうど良い気候です。'],
      ['2월 2일 무렵 성촉절', 'Around 2 February (Candlemas)', '2月2日頃（聖燭祭）', '생빅토르 수도원에서 행사가 열리고, 배 모양 과자 나베트를 먹는 마르세유의 전통이 있습니다.', 'Celebrated at the Abbey of Saint-Victor, when Marseillais eat boat-shaped navette biscuits.', 'サン・ヴィクトール修道院で行事があり、舟形の焼き菓子ナヴェットを食べるマルセイユの伝統があります。'],
    ],
    x: ['여름철 칼랑크는 산불 위험에 따라 당일 출입이 제한될 수 있으니 전날 공식 안내를 확인하세요.', 'In summer the Calanques may close at short notice for fire risk; check the official notice the day before.', '夏のカランクは山火事の危険度によって当日立入が制限されることがあるので、前日に公式案内を確認しましょう。'],
  },
  tainan: {
    p: [
      ['11~3월', 'November–March', '11〜3月', '고적과 골목을 걸으며 먹거리를 즐기기 좋은 선선한 계절입니다.', 'The cool season for walking the historic sites and food lanes.', '古跡や路地を歩きながら食べ歩くのに向いた涼しい季節です。'],
      ['음력 설 전후 원소절 무렵', 'Around the Lantern Festival after Lunar New Year', '旧正月明けの元宵節の頃', '인근 옌수이의 벌집 폭죽 축제 등 남부 대만의 큰 행사가 열립니다.', 'Southern Taiwan’s big events, such as the nearby Yanshui beehive fireworks, take place.', '近郊の塩水の蜂炮祭など、台湾南部の大きな行事が開かれます。'],
    ],
    x: ['여름(6~9월)에는 한낮 더위가 심하고 태풍으로 일정이 바뀔 수 있으니 실내 명소와 아침·저녁 일정을 섞으세요.', 'Summer (June–September) middays are very hot and typhoons can disrupt plans; mix in indoor sights and early or late outings.', '夏（6〜9月）は日中の暑さが厳しく台風で予定が変わることもあるので、屋内の名所や朝夕の予定を組み合わせましょう。'],
  },
  warsaw: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '공원과 비스와 강변 산책, 야외 행사가 많은 계절입니다.', 'The season for parks, Vistula riverside walks and outdoor events.', '公園やヴィスワ川沿いの散策、野外イベントが多い季節です。'],
      ['사순절 전 「기름진 목요일」', 'Fat Thursday (before Lent)', '脂の木曜日（四旬節前）', '폴란드 사람들이 도넛 퉁치키를 먹는 날로, 유명 빵집 앞에 긴 줄이 섭니다.', 'The day Poles eat pączki doughnuts, with long queues at famous bakeries.', 'ポーランドの人々がドーナツ「ポンチキ」を食べる日で、有名店の前に長い列ができます。'],
    ],
    x: ['바르샤바 봉기 박물관·폴린 박물관은 목요일에 무료라 그날은 특히 붐빕니다. 여유롭게 보려면 다른 요일이 낫습니다.', 'The Warsaw Uprising Museum and POLIN are free on Thursdays, so they get crowded then; pick another day for a calmer visit.', 'ワルシャワ蜂起博物館とポーリン博物館は木曜が無料のため特に混みます。ゆっくり見るなら別の曜日がおすすめです。'],
  },
  ghent: {
    p: [
      ['7월 중순 겐트 축제', 'Mid-July (Gentse Feesten)', '7月中旬（ヘント祭）', '열흘 동안 음악·거리 공연이 이어지는 유럽 최대급 도심 축제입니다.', 'One of Europe’s biggest city festivals, ten days of music and street theatre.', '10日間にわたり音楽や路上公演が続く、ヨーロッパ最大級の街の祭りです。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '운하 보트와 성곽, 대성당을 여유 있게 둘러보기 좋습니다.', 'A relaxed time for canal boats, the castle and the cathedral.', '運河ボートや城、大聖堂をゆったり見て回るのに向いています。'],
    ],
    x: ['겐트 축제 기간에는 숙소 요금이 오르고 구시가지가 매우 붐비니 조용한 여행을 원하면 피하세요.', 'During the Gentse Feesten rooms cost more and the centre is packed; avoid it if you want a quiet trip.', 'ヘント祭の期間は宿泊料金が上がり旧市街が非常に混むので、静かな旅をしたいなら避けましょう。'],
  },
  geneva: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '호숫가 산책로와 파키 수영장, 유람선을 즐기기 좋은 계절입니다.', 'The season for lakeside promenades, the Bains des Pâquis and boat trips.', '湖畔の遊歩道やパキの水浴場、遊覧船を楽しむのに良い季節です。'],
      ['12월 중순 에스칼라드', 'Mid-December (Escalade)', '12月中旬（エスカラード）', '1602년 사보이 공국의 기습을 막아 낸 일을 기념하는 축제로, 초콜릿 냄비를 깨는 풍습이 있습니다.', 'Celebrates repelling the 1602 Savoyard attack, with the custom of smashing a chocolate cauldron.', '1602年のサヴォイア公国の奇襲を退けたことを記念する祭りで、チョコレートの鍋を割る風習があります。'],
    ],
    x: ['국제회의가 몰리는 시기에는 호텔 요금이 크게 오르니 일정이 정해지면 숙소를 일찍 잡으세요.', 'Hotel rates soar during big international conferences, so book early once your dates are set.', '大きな国際会議が重なる時期はホテル料金が大きく上がるので、日程が決まったら早めに宿を押さえましょう。'],
  },
  antwerp: {
    p: [
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '강변 산책과 MAS 옥상 전망, 미술관 관람을 함께 즐기기 좋습니다.', 'Good for riverside walks, the MAS rooftop view and museum visits.', '川沿いの散策やMASの屋上展望、美術館巡りを一緒に楽しめます。'],
      ['12월 겨울 장터', 'December (winter fair)', '12月（冬の市）', '흐로테 마르크트와 주변 광장에 크리스마스 장터와 스케이트장이 들어섭니다.', 'Christmas stalls and skating fill the Grote Markt and nearby squares.', 'グローテ・マルクトや周辺の広場にクリスマスの屋台やスケートリンクが立ちます。'],
    ],
    x: ['비 오는 날이 많으니 미술관·박물관 같은 실내 일정을 섞어 두면 좋습니다.', 'Rain is common, so mix in indoor plans such as museums.', '雨の日が多いので、美術館や博物館など屋内の予定を組み合わせておくと安心です。'],
  },
  turin: {
    p: [
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '아케이드 거리와 포 강변 산책, 박물관 관람을 함께 즐기기 좋습니다.', 'Good for the arcades, Po riverside walks and museums.', 'アーケード街やポー川沿いの散策、博物館巡りを一緒に楽しめます。'],
      ['가을 트러플 철', 'Autumn truffle season', '秋のトリュフの季節', '근교 알바의 흰 트러플 시즌으로, 피에몬테 요리를 맛보기 좋은 때입니다.', 'White-truffle season in nearby Alba, a great time for Piedmontese food.', '近郊アルバの白トリュフのシーズンで、ピエモンテ料理を味わうのに良い時期です。'],
    ],
    x: ['이집트 박물관은 공식 사이트 온라인 판매가 유일한 공식 경로이니 미리 예약하세요.', 'The Egyptian Museum sells tickets only through its official online shop; book ahead.', 'エジプト博物館は公式サイトのオンライン販売が唯一の正規ルートなので、事前に予約しましょう。'],
  },
  'gold-coast': {
    p: [
      ['9~11월·3~5월', 'September–November and March–May', '9〜11月・3〜5月', '물놀이와 하이킹, 테마파크를 무리 없이 즐길 수 있는 날씨입니다.', 'Comfortable weather for swimming, hikes and theme parks alike.', '海遊びやハイキング、テーマパークを無理なく楽しめる気候です。'],
      ['여름(12~2월)', 'Summer (December–February)', '夏（12〜2月）', '해변 시즌이 절정이고, 스프링브룩의 반딧불이(글로웜)도 겨울보다 잘 보입니다.', 'Peak beach season, and Springbrook’s glow-worms shine brighter than in winter.', 'ビーチシーズンの最盛期で、スプリングブルックの土ボタル（グローワーム）も冬より多く見られます。'],
    ],
    x: ['바다 수영은 빨강·노랑 깃발 사이, 안전요원이 있는 구역에서만 하세요. 이안류가 강한 날이 많습니다.', 'Swim only between the red-and-yellow flags at patrolled beaches; rip currents are common.', '海で泳ぐのは赤と黄色の旗の間、監視員がいる区域だけにしましょう。離岸流が強い日が多いです。'],
  },
  brisbane: {
    p: [
      ['4~10월', 'April–October', '4〜10月', '맑고 선선해 강변 산책과 다리 등반, 근교 여행에 좋은 시기입니다.', 'Clear and mild — ideal for riverside walks, the bridge climb and day trips.', '晴れて涼しく、川沿いの散策や橋のクライム、近郊への旅に最適な時期です。'],
      ['여름(12~2월)', 'Summer (December–February)', '夏（12〜2月）', '사우스 뱅크의 무료 인공 해변 스트리츠 비치에서 더위를 식히기 좋습니다.', 'Cool off at Streets Beach, South Bank’s free man-made beach.', 'サウスバンクの無料人工ビーチ、ストリーツ・ビーチで涼むのに良い季節です。'],
    ],
    x: ['스트리츠 비치는 겨울철 정비 기간에 문을 닫는 때가 있으니 방문 전에 확인하세요.', 'Streets Beach closes for maintenance for a period each winter; check before you go.', 'ストリーツ・ビーチは冬に整備のため閉まる期間があるので、訪れる前に確認しましょう。'],
  },
  'washington-dc': {
    p: [
      ['3월 말~4월 초 벚꽃', 'Late March–early April (cherry blossoms)', '3月末〜4月初め（桜）', '타이들 베이슨 호수 둘레의 벚꽃이 피는 시기로, 가장 붐비는 때이기도 합니다.', 'Cherry trees bloom around the Tidal Basin — also the busiest time.', 'タイダル・ベイスンの湖の周りの桜が咲く時期で、最も混雑する時期でもあります。'],
      ['9~10월', 'September–October', '9〜10月', '더위가 가라앉아 내셔널 몰 산책과 박물관 관람이 편합니다.', 'The heat eases, making Mall walks and museum days comfortable.', '暑さが和らぎ、ナショナル・モールの散策や博物館巡りが快適です。'],
    ],
    x: ['워싱턴 기념탑은 시간 지정 입장권이 필요하고, 엘리베이터 정비로 닫는 때가 있으니 미리 확인하세요.', 'The Washington Monument needs a timed ticket and sometimes closes for elevator work; check ahead.', 'ワシントン記念塔は時間指定券が必要で、エレベーター整備で閉まることがあるので事前に確認しましょう。'],
  },
  boston: {
    p: [
      ['9~10월', 'September–October', '9〜10月', '선선한 날씨에 프리덤 트레일을 걷고, 10월에는 근교 단풍을 즐기기 좋습니다.', 'Cool weather for the Freedom Trail, with foliage nearby in October.', '涼しい気候でフリーダム・トレイルを歩け、10月は近郊の紅葉を楽しめます。'],
      ['5~6월', 'May–June', '5〜6月', '공원과 항구 산책, 야외 식사를 즐기기 좋은 계절입니다.', 'A pleasant season for parks, the harbour and outdoor dining.', '公園や港の散策、屋外での食事を楽しむのに良い季節です。'],
    ],
    x: ['겨울(12~3월)에는 눈과 강추위로 야외 일정이 어려울 수 있으니 실내 박물관 일정을 함께 준비하세요.', 'Winter (December–March) snow and cold can derail outdoor plans; keep museum days in reserve.', '冬（12〜3月）は雪と厳しい寒さで屋外の予定が難しいことがあるので、屋内の博物館の予定も用意しましょう。'],
  },
  toronto: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '호숫가 산책과 토론토 아일랜드 페리, 나이아가라 당일 여행에 가장 좋은 날씨입니다.', 'The best weather for the waterfront, Toronto Island ferries and Niagara day trips.', '湖畔の散策やトロント・アイランドへのフェリー、ナイアガラへの日帰り旅行に最適な気候です。'],
      ['9월 말~10월', 'Late September–October', '9月末〜10月', '선선한 날씨에 단풍을 즐기기 좋습니다.', 'Cool days and autumn colour.', '涼しい気候で紅葉を楽しめます。'],
    ],
    x: ['겨울(12~3월)에는 영하의 추위가 이어지니, 실내 지하 보행로(PATH)와 박물관 위주로 일정을 짜세요.', 'Winter (December–March) is sub-zero; plan around the underground PATH walkway and museums.', '冬（12〜3月）は氷点下の日が続くので、地下歩行者通路（PATH）や博物館を中心に予定を組みましょう。'],
  },
  chicago: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '호숫가 산책과 강 건축 크루즈, 야외 축제를 즐기기 좋습니다.', 'Great for the lakefront, river architecture cruises and outdoor festivals.', '湖畔の散策やシカゴ川の建築クルーズ、屋外フェスティバルを楽しめます。'],
      ['9~10월', 'September–October', '9〜10月', '더위가 가라앉아 걸어서 건축 투어를 하기 좋습니다.', 'The heat eases — good for walking architecture tours.', '暑さが和らぎ、歩いて建築ツアーをするのに良い時期です。'],
    ],
    x: ['겨울(12~3월)에는 호수 바람으로 체감 온도가 크게 떨어지니, 미술관 등 실내 일정을 함께 준비하세요.', 'In winter (December–March) the lake wind makes it feel far colder; keep indoor days like the Art Institute in reserve.', '冬（12〜3月）は湖からの風で体感温度が大きく下がるので、美術館など屋内の予定も用意しましょう。'],
  },
  montreal: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '야외 축제와 구시가지 산책, 몽루아얄 공원을 즐기기 좋은 계절입니다.', 'Outdoor festivals, Old Montréal strolls and Mount Royal Park.', '屋外の祭りや旧市街の散策、モン・ロワイヤル公園を楽しめる季節です。'],
      ['9월 말~10월', 'Late September–October', '9月末〜10月', '몽루아얄 공원의 단풍이 아름다운 시기입니다.', 'Autumn colour on Mount Royal.', 'モン・ロワイヤル公園の紅葉が美しい時期です。'],
    ],
    x: ['겨울(12~3월)에는 영하의 추위가 이어지니, 지하도시(RÉSO)와 실내 일정을 함께 준비하세요.', 'Winter (December–March) is sub-zero; plan around the underground city (RÉSO) and indoor sights.', '冬（12〜3月）は氷点下の日が続くので、地下街（RÉSO）や屋内の予定も用意しましょう。'],
  },
  seattle: {
    p: [
      ['7~9월', 'July–September', '7〜9月', '비가 적고 맑은 날이 많아 해안가와 전망대에서 레이니어 산을 보기 좋습니다.', 'Dry, clear days for the waterfront and views of Mount Rainier from the observation decks.', '雨が少なく晴れの日が多く、海沿いや展望台からレーニア山を眺めるのに最適です。'],
    ],
    x: ['10~4월은 비가 잦으니 우산과 방수 겉옷을 챙기고, 전망대는 맑은 날을 골라 가세요.', 'October–April is wet; pack a rain jacket and save the observation deck for a clear day.', '10〜4月は雨が多いので傘や防水の上着を持ち、展望台は晴れた日を選びましょう。'],
  },
  perth: {
    p: [
      ['9~11월', 'September–November', '9〜11月', '봄꽃이 피어 킹스 파크 산책과 해변을 즐기기 좋습니다.', 'Spring wildflowers in Kings Park and pleasant beach days.', '春の花が咲き、キングス・パークの散策やビーチを楽しめます。'],
      ['3~5월', 'March–May', '3〜5月', '여름 더위가 가라앉아 프리맨틀과 로트네스트섬을 다니기 좋습니다.', 'The summer heat eases — good for Fremantle and Rottnest.', '夏の暑さが和らぎ、フリーマントルやロットネスト島を巡りやすい時期です。'],
    ],
    x: ['12~2월에는 40도 가까운 더위가 오기도 하니, 한낮 야외 활동을 피하고 자외선 차단에 신경 쓰세요.', 'December–February can approach 40°C; avoid midday outdoors and protect against strong sun.', '12〜2月は40度近くになることもあるので、日中の屋外活動を避け、紫外線対策をしましょう。'],
  },
  manchester: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '낮이 길고 따뜻해 운하 산책과 야외 시장을 즐기기 좋습니다.', 'Long, mild days for canal walks and outdoor markets.', '日が長く暖かいので、運河の散策や屋外マーケットを楽しめます。'],
    ],
    x: ['축구 시즌(8~5월) 경기일에는 경기장 투어가 없거나 짧아지니, 투어는 경기 없는 날로 예약하세요.', 'During the football season (August–May) stadium tours are limited on match days; book on a non-match day.', 'サッカーシーズン（8〜5月）の試合日はスタジアムツアーがないか短くなるので、試合のない日に予約しましょう。'],
  },
  christchurch: {
    p: [
      ['12~2월', 'December–February', '12〜2月', '낮이 길고 따뜻해 에이번강 펀팅과 근교 여행을 즐기기 좋습니다.', 'Long warm days for punting on the Avon and day trips.', '日が長く暖かいので、エイボン川のパンティングや近郊への旅行を楽しめます。'],
      ['3~4월', 'March–April', '3〜4月', '해글리 공원과 식물원의 단풍이 아름다운 시기입니다.', 'Autumn colour in Hagley Park and the Botanic Gardens.', 'ハグレー公園や植物園の紅葉が美しい時期です。'],
    ],
    x: ['11월 23일부터 메트로카드와 현금을 받지 않으니, 버스는 신용카드 탭(컨택리스)으로 타세요.', 'From 23 November Metrocard and cash are no longer accepted; tap a contactless card to ride the bus.', '11月23日からメトロカードと現金が使えなくなるので、バスはクレジットカードのタッチ決済で乗りましょう。'],
  },
  glasgow: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '낮이 길어 시내 산책과 스코틀랜드 근교 여행을 함께 하기 좋습니다.', 'Long days for city walks and trips into the Scottish countryside.', '日が長く、市内の散策とスコットランド近郊への旅行を組み合わせやすいです。'],
    ],
    x: ['비가 잦은 도시라, 켈빈그로브 같은 무료 실내 명소를 일정에 넉넉히 넣어 두면 좋습니다.', 'It rains often, so keep free indoor sights like Kelvingrove in your plans.', '雨の多い街なので、ケルヴィングローヴのような無料の屋内スポットを予定に入れておくと安心です。'],
  },
  'san-diego': {
    p: [
      ['9~11월', 'September–November', '9〜11月', '여름 인파가 줄고 바다가 따뜻해 해변과 야외 일정을 즐기기 좋습니다.', 'Summer crowds thin and the ocean is warm — good for beaches and outdoor days.', '夏の人出が減り海も暖かく、ビーチや屋外の予定を楽しめます。'],
      ['3~5월', 'March–May', '3〜5月', '선선하고 맑은 날이 많아 동물원과 발보아 파크를 걷기 좋습니다.', 'Cool, clear days for the zoo and Balboa Park.', '涼しく晴れの日が多く、動物園やバルボア・パークを歩くのに良い時期です。'],
    ],
    x: ['10월 한 달은 동물원과 미드웨이 박물관에 어린이 무료 행사가 열리기도 하니, 가족 여행이면 공식 사이트를 확인하세요.', 'In October the zoo and USS Midway have run kids-free offers; families should check the official sites.', '10月は動物園やミッドウェイ博物館で子ども無料の企画が行われることがあるので、家族旅行なら公式サイトを確認しましょう。'],
  },
  adelaide: {
    p: [
      ['3~5월', 'March–May', '3〜5月', '포도 수확기로, 근교 와이너리 여행을 즐기기 좋습니다.', 'Vintage season — ideal for winery trips nearby.', 'ブドウの収穫期で、近郊のワイナリー巡りに最適です。'],
      ['9~11월', 'September–November', '9〜11月', '선선한 봄 날씨에 시내 공원과 해변을 다니기 좋습니다.', 'Mild spring days for the parklands and beach.', '穏やかな春の気候で、市内の公園やビーチを巡りやすい時期です。'],
    ],
    x: ['대중교통 요금은 평일 출퇴근 시간(피크)에 더 비싸니, 시간 여유가 있으면 한낮(오프피크)에 이동하세요.', 'Transit fares are higher at peak times; travel off-peak in the middle of the day when you can.', '公共交通の運賃は平日のピーク時間に高くなるので、余裕があれば日中のオフピークに移動しましょう。'],
  },
  liverpool: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '강변 산책과 야외 식사를 즐기기 좋은 계절입니다.', 'The season for waterfront walks and outdoor dining.', '川沿いの散策や屋外での食事を楽しめる季節です。'],
    ],
    x: ['축구 경기일에는 시내 숙소 값이 오르고 붐비니, 일정을 정하기 전에 경기 일정을 확인하세요.', 'Match days push up hotel prices and crowds; check the fixtures before you book.', 'サッカーの試合日は市内の宿が高くなり混雑するので、予定を決める前に試合日程を確認しましょう。'],
  },
  heidelberg: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '강변 산책과 철학자의 길 산책을 즐기기 좋은 계절입니다.', 'The season for riverside walks and the Philosophers’ Walk.', '川沿いや哲学者の道の散策を楽しめる季節です。'],
      ['11월 말~12월', 'Late November–December', '11月末〜12月', '구시가지 광장 곳곳에 크리스마스 마켓이 열립니다.', 'Christmas markets fill the Old Town squares.', '旧市街の広場のあちこちでクリスマスマーケットが開かれます。'],
    ],
    x: ['고성 입장권(슐로스티켓)에 케이블카 왕복이 포함되니, 케이블카를 따로 사지 마세요.', 'The castle ticket (Schlossticket) includes the funicular, so don’t buy a separate ride.', '古城の入場券（シュロスチケット）にケーブルカーが含まれるので、別に買わないようにしましょう。'],
  },
  bilbao: {
    p: [
      ['5~6월', 'May–June', '5〜6月', '따뜻하고 비교적 맑아 강변 산책과 핀초 바 순례를 즐기기 좋습니다.', 'Warm and relatively dry — good for riverside walks and pintxo crawls.', '暖かく比較的晴れが多く、川沿いの散策やピンチョスのバル巡りを楽しめます。'],
      ['9~10월', 'September–October', '9〜10月', '여름 인파가 빠지고 선선해 미술관과 시내 관광에 좋습니다.', 'Summer crowds fade; cool days for museums and the city.', '夏の人出が落ち着き、涼しく美術館や市内観光に向いています。'],
    ],
    x: ['18세 미만은 구겐하임 미술관 입장이 무료이니, 가족 여행이면 성인 입장권만 준비하면 됩니다.', 'Under-18s enter the Guggenheim free, so families only need adult tickets.', '18歳未満はグッゲンハイム美術館の入場が無料なので、家族旅行なら大人の入場券だけ用意すれば大丈夫です。'],
  },
  toulouse: {
    p: [
      ['4~6월', 'April–June', '4〜6月', '미디 운하 산책과 테라스 식사를 즐기기 좋은 계절입니다.', 'A lovely season for Canal du Midi walks and terrace dining.', 'ミディ運河の散策やテラスでの食事を楽しめる季節です。'],
      ['9~10월', 'September–October', '9〜10月', '더위가 가라앉아 시내 관광과 시테 드 레스파스 방문에 좋습니다.', 'The heat eases — good for the city and the Cité de l’espace.', '暑さが和らぎ、市内観光やシテ・ドゥ・レスパスを訪れるのに良い時期です。'],
    ],
    x: ['공항 셔틀은 일반 1회권으로 탈 수 없고 공항 전용 승차권이 필요합니다.', 'The airport shuttle needs its own airport ticket; a standard single isn’t valid.', '空港シャトルは通常の1回券では乗れず、空港専用の乗車券が必要です。'],
  },
  cairns: {
    p: [
      ['5~10월', 'May–October', '5〜10月', '맑고 건조해 리프 투어와 열대우림 여행에 가장 좋은 시기입니다.', 'Clear, dry weather — the best time for reef trips and the rainforest.', '晴れて乾燥しており、リーフツアーや熱帯雨林の旅に最適な時期です。'],
    ],
    x: ['11~4월에는 바다에 독성 해파리가 나오니, 그물이 쳐진 해변에서만 수영하고 시내에서는 무료 라군을 이용하세요.', 'November–April brings stingers; swim only inside netted areas, or use the free city lagoon.', '11〜4月は海に毒のあるクラゲが出るので、ネットが張られたビーチだけで泳ぎ、市内では無料のラグーンを利用しましょう。'],
  },
  verona: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '로마 원형극장에서 열리는 아레나 오페라 축제를 볼 수 있습니다.', 'See the Arena opera festival in the Roman amphitheatre.', 'ローマ時代の円形闘技場で開かれるアレーナのオペラ祭を観られます。'],
      ['9~10월', 'September–October', '9〜10月', '발폴리첼라 포도 수확기로, 와인과 함께 지역 요리를 즐기기 좋습니다.', 'Valpolicella harvest time — good for local food and wine.', 'ヴァルポリチェッラのブドウ収穫期で、ワインと郷土料理を楽しむのに良い時期です。'],
    ],
    x: ['줄리엣의 집은 온라인 사전 예약이 필수이니 미리 표를 사 두세요.', 'Juliet’s House requires online booking — buy tickets in advance.', 'ジュリエットの家はオンラインでの事前予約が必須なので、前もってチケットを買っておきましょう。'],
  },
  thessaloniki: {
    p: [
      ['4~6월', 'April–June', '4〜6月', '바닷가 산책로와 유적지를 걷기 좋은 날씨입니다.', 'Pleasant weather for the waterfront and historic sites.', '海沿いの遊歩道や遺跡を歩くのに良い気候です。'],
      ['9~10월', 'September–October', '9〜10月', '더위가 가라앉고 바다가 따뜻해 근교 할키디키 해변도 다녀오기 좋습니다.', 'The heat eases and the sea is warm — good for a trip to the Halkidiki beaches.', '暑さが和らぎ海も暖かいので、近郊のハルキディキのビーチへ行くのにも良い時期です。'],
    ],
    x: ['11~3월에는 매달 첫째·셋째 일요일에 고고학 박물관 등 국립 유적지 입장이 무료입니다.', 'From November to March, national sites such as the Archaeological Museum are free on the first and third Sunday of each month.', '11〜3月は毎月第1・第3日曜日に考古学博物館など国立の遺跡が入場無料です。'],
  },
  chengdu: {
    p: [
      ['3~5월', 'March–May', '3〜5月', '선선한 날씨에 판다 기지와 시내 골목을 둘러보기 좋습니다.', 'Mild weather for the panda base and the old lanes.', '穏やかな気候で、パンダ基地や市内の路地を巡るのに良い時期です。'],
      ['9~11월', 'September–November', '9〜11月', '더위가 가라앉아 훠궈와 야시장을 즐기기 좋습니다.', 'The heat fades — perfect hotpot and night-market weather.', '暑さが和らぎ、火鍋や夜市を楽しむのに良い時期です。'],
    ],
    x: ['판다 기지는 오전에 판다가 가장 활발하니 개장 시간에 맞춰 가고, 입장권은 미리 온라인으로 예약하세요(60세 이상 제외).', 'Pandas are most active in the morning, so arrive at opening; book tickets online in advance (except visitors 60+).', 'パンダは午前中が最も活発なので開園時間に合わせて行き、入場券は事前にオンラインで予約しましょう（60歳以上を除く）。'],
  },
  'mexico-city': {
    p: [
      ['10~11월', 'October–November', '10〜11月', '우기가 끝나고, 11월 초에는 ‘죽은 자의 날’ 행사가 열립니다.', 'The rains end, and early November brings Day of the Dead celebrations.', '雨季が終わり、11月初めには「死者の日」の行事が行われます。'],
      ['2~4월', 'February–April', '2〜4月', '맑고 따뜻한 날이 많아 시내와 근교 유적을 다니기 좋습니다.', 'Clear, warm days for the city and nearby ruins.', '晴れて暖かい日が多く、市内や近郊の遺跡を巡るのに良い時期です。'],
    ],
    x: ['고도가 높아 도착 첫날에는 숨이 차거나 피곤할 수 있으니, 첫날 일정은 가볍게 잡으세요.', 'The altitude can leave you breathless on day one; keep the first day light.', '標高が高いため到着初日は息切れや疲れを感じることがあるので、初日の予定は軽めにしましょう。'],
  },
  philadelphia: {
    p: [
      ['4~6월', 'April–June', '4〜6月', '역사 지구 산책과 야외 식사를 즐기기 좋은 계절입니다.', 'Great for walking the historic district and outdoor dining.', '歴史地区の散策や屋外での食事を楽しめる季節です。'],
      ['9~10월', 'September–October', '9〜10月', '선선한 날씨에 미술관과 시내 관광을 즐기기 좋습니다.', 'Cool days for museums and sightseeing.', '涼しい気候で美術館や市内観光を楽しめます。'],
    ],
    x: ['미술관은 매달 첫째 일요일에 원하는 만큼 내고 입장할 수 있고, 18세 이하는 항상 무료입니다.', 'The art museum is pay-what-you-wish on the first Sunday of each month, and visitors 18 and under are always free.', '美術館は毎月第1日曜日に好きな金額で入場でき、18歳以下はいつでも無料です。'],
  },
  'new-orleans': {
    p: [
      ['2~5월', 'February–May', '2〜5月', '마디 그라와 봄 음악 축제가 이어지고, 1~6월은 크로피시 제철입니다.', 'Mardi Gras and spring music festivals, plus crawfish season (roughly January–June).', 'マルディグラや春の音楽祭が続き、1〜6月はザリガニの旬です。'],
      ['10~11월', 'October–November', '10〜11月', '더위가 가라앉아 프렌치 쿼터 산책과 야외 음악을 즐기기 좋습니다.', 'The heat breaks — ideal for French Quarter strolls and outdoor music.', '暑さが和らぎ、フレンチ・クォーターの散策や屋外の音楽を楽しめます。'],
    ],
    x: ['6~11월은 허리케인 시즌이니 여행 전 날씨 예보를 꼭 확인하세요.', 'June–November is hurricane season; check the forecast before you go.', '6〜11月はハリケーンの季節なので、旅行前に天気予報を必ず確認しましょう。'],
  },
  ottawa: {
    p: [
      ['5~6월', 'May–June', '5〜6月', '튤립이 피고 운하 산책을 즐기기 좋은 계절입니다.', 'Tulips bloom and the canal paths are perfect for walking.', 'チューリップが咲き、運河沿いの散策を楽しめる季節です。'],
      ['1~2월', 'January–February', '1〜2月', '리도 운하가 스케이트장으로 바뀌고, 얼음 위에서 비버테일을 먹는 것이 오타와식입니다.', 'The Rideau Canal Skateway opens — eat a BeaverTail on skates, Ottawa-style.', 'リドー運河がスケートリンクになり、氷の上でビーバーテイルを食べるのがオタワ流です。'],
    ],
    x: ['국립미술관은 매주 목요일 오후 5~8시에 무료로 입장할 수 있습니다.', 'The National Gallery is free every Thursday from 5 to 8 p.m.', '国立美術館は毎週木曜の17〜20時に無料で入場できます。'],
  },
  calgary: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '밴프·레이크 루이스 등 로키산맥 당일 여행에 가장 좋은 계절입니다.', 'The best season for day trips to Banff, Lake Louise and the Rockies.', 'バンフやレイク・ルイーズなどロッキー山脈への日帰り旅行に最適な季節です。'],
    ],
    x: ['7월 초 스탬피드 기간에는 숙소가 빨리 차고 값이 오르니 일찍 예약하세요.', 'Book early for the early-July Stampede, when hotels fill and prices jump.', '7月初めのスタンピード期間は宿がすぐ埋まり料金も上がるので、早めに予約しましょう。'],
  },
  portland: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '장미 정원이 피고 맑은 날이 많아 야외 푸드 카트와 근교 여행을 즐기기 좋습니다.', 'Roses bloom and clear days suit food-cart pods and trips out of town.', 'バラが咲き晴れの日が多く、屋外のフードカートや近郊への旅行を楽しめます。'],
      ['10~11월', 'October–November', '10〜11月', '일본 정원의 단풍이 아름다운 시기입니다.', 'Autumn colour at the Japanese Garden.', '日本庭園の紅葉が美しい時期です。'],
    ],
    x: ['10~5월에는 비가 잦으니 방수 겉옷을 챙기고, 실내 푸드 홀을 일정에 넣어 두세요.', 'October–May is wet; pack a rain jacket and plan around indoor food halls.', '10〜5月は雨が多いので防水の上着を持ち、屋内のフードホールを予定に入れておきましょう。'],
  },
  victoria: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '부차트 가든의 꽃이 절정이고, 항구 산책과 고래 관찰 투어를 즐기기 좋습니다.', 'Peak bloom at Butchart Gardens, plus harbour strolls and whale-watching.', 'ブッチャート・ガーデンの花が見頃で、港の散策やホエールウォッチングを楽しめます。'],
      ['12월 말~1월 초', 'Late December–early January', '12月末〜1月初め', '부차트 가든이 크리스마스 조명으로 꾸며지고 저녁에 문을 엽니다.', 'Butchart Gardens opens in the evenings with Christmas lights.', 'ブッチャート・ガーデンがクリスマスのイルミネーションで彩られ、夕方から開園します。'],
    ],
    x: ['부차트 가든 입장료는 계절마다 달라지니(봄·여름이 가장 비쌈) 방문 날짜의 요금을 확인하세요.', 'Butchart Gardens prices change by season (highest in spring and summer); check the rate for your date.', 'ブッチャート・ガーデンの入場料は季節ごとに変わる（春・夏が最も高い）ので、訪問日の料金を確認しましょう。'],
  },
  austin: {
    p: [
      ['10~11월', 'October–November', '10〜11月', '더위가 가라앉아 야외 음악 공연과 바비큐를 즐기기 좋습니다.', 'The heat breaks — great for outdoor music and barbecue.', '暑さが和らぎ、屋外のライブやバーベキューを楽しめます。'],
      ['3~5월', 'March–May', '3〜5月', '따뜻한 봄 날씨로, 3월에는 SXSW 축제가 열립니다.', 'Warm spring days, with SXSW in March.', '暖かい春の気候で、3月にはSXSWが開かれます。'],
    ],
    x: ['유명 바비큐 가게는 오전부터 줄이 길고 고기가 떨어지면 문을 닫으니 일찍 가세요.', 'Famous barbecue joints draw morning lines and close when the meat sells out — go early.', '有名なバーベキュー店は朝から行列ができ、肉が売り切れると閉店するので早めに行きましょう。'],
  },
  hobart: {
    p: [
      ['12~3월', 'December–March', '12〜3月', '따뜻한 날씨에 살라만카 마켓과 근교 브루니섬 여행을 즐기기 좋습니다.', 'Warm days for Salamanca Market and trips to Bruny Island.', '暖かい気候でサラマンカ・マーケットや近郊のブルーニー島への旅行を楽しめます。'],
    ],
    x: ['MONA는 시간 지정 입장권을 미리 예약하고, 10월 22일부터 입장료가 오르니 방문일 요금을 확인하세요.', 'Book MONA timed entry ahead; prices rise from 22 October, so check the rate for your date.', 'MONAは時間指定の入場券を事前に予約しましょう。10月22日から入場料が上がるので、訪問日の料金を確認してください。'],
  },
  nashville: {
    p: [
      ['9~10월', 'September–October', '9〜10月', '더위가 가라앉아 브로드웨이 라이브 음악과 야외 식사를 즐기기 좋습니다.', 'The heat eases — great for Broadway live music and outdoor dining.', '暑さが和らぎ、ブロードウェイのライブ音楽や屋外での食事を楽しめます。'],
      ['4~5월', 'April–May', '4〜5月', '따뜻한 봄 날씨로 시내 관광에 좋습니다.', 'Warm spring days for sightseeing.', '暖かい春の気候で市内観光に向いています。'],
    ],
    x: ['주말 브로드웨이는 매우 붐비니, 조용히 즐기려면 평일 저녁에 가 보세요.', 'Broadway gets packed at weekends; try a weeknight for a calmer evening.', '週末のブロードウェイは非常に混むので、落ち着いて楽しむなら平日の夜に行きましょう。'],
  },
  edmonton: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '강 골짜기 공원 산책과 여름 축제, 재스퍼 여행을 즐기기 좋습니다.', 'River-valley trails, summer festivals and trips to Jasper.', '川の渓谷の公園散策や夏の祭り、ジャスパーへの旅行を楽しめます。'],
    ],
    x: ['공항에서 시내로 가는 747번 버스는 일반 요금이 아닌 공항 전용 요금이고, 센추리 파크역에서 경전철로 갈아탑니다.', 'Airport bus 747 has its own airport fare and runs to Century Park, where you change to the LRT.', '空港から市内へ向かう747番バスは通常運賃ではなく空港専用運賃で、センチュリー・パーク駅でLRTに乗り換えます。'],
  },
  winnipeg: {
    p: [
      ['6~9월', 'June–September', '6〜9月', '강변 산책과 포크스의 야외 식사, 여름 축제를 즐기기 좋습니다.', 'Riverside walks, outdoor dining at The Forks and summer festivals.', '川沿いの散策やザ・フォークスでの屋外の食事、夏の祭りを楽しめます。'],
    ],
    x: ['인권박물관은 매달 첫째 일요일에 무료로 입장할 수 있습니다.', 'The Human Rights museum is free on the first Sunday of every month.', '人権博物館は毎月第1日曜日に無料で入場できます。'],
  },
  halifax: {
    p: [
      ['7~9월', 'July–September', '7〜9月', '바닷가 산책과 랍스터, 근교 페기스 코브 여행에 좋은 계절입니다.', 'The season for the waterfront, lobster and trips to Peggy’s Cove.', '海沿いの散策やロブスター、近郊のペギーズ・コーブへの旅行に良い季節です。'],
    ],
    x: ['날씨가 자주 바뀌니 비와 바람에 대비한 겉옷을 챙기세요.', 'The weather changes quickly; pack a wind- and rain-proof layer.', '天気が変わりやすいので、雨や風に備えた上着を持ちましょう。'],
  },
  phoenix: {
    p: [
      ['11~4월', 'November–April', '11〜4月', '따뜻하고 맑아 사막 식물원과 하이킹, 그랜드캐니언 여행에 좋습니다.', 'Warm and clear — ideal for the desert garden, hiking and Grand Canyon trips.', '暖かく晴れており、砂漠植物園やハイキング、グランドキャニオンへの旅に最適です。'],
    ],
    x: ['여름(6~9월)에는 아침 일찍이나 해 진 뒤에 움직이고, 물을 충분히 챙기세요.', 'In summer (June–September) go out early or after dark and carry plenty of water.', '夏（6〜9月）は朝早くか日没後に行動し、水を十分に持ちましょう。'],
  },
  'san-antonio': {
    p: [
      ['10~11월', 'October–November', '10〜11月', '선선한 날씨에 리버워크와 미션 트레일을 걷기 좋습니다.', 'Cool weather for the River Walk and the Mission Trail.', '涼しい気候でリバーウォークやミッション・トレイルを歩くのに良い時期です。'],
      ['3~5월', 'March–May', '3〜5月', '따뜻한 봄으로, 4월에는 도시 전체가 축제 분위기입니다.', 'Warm spring days, with the city in festival mode in April.', '暖かい春で、4月は街全体が祭りの雰囲気になります。'],
    ],
    x: ['알라모 교회는 무료지만 무료 시간 지정권을 미리 예약해야 합니다.', 'The Alamo Church is free, but you must reserve a free timed ticket in advance.', 'アラモ教会は無料ですが、無料の時間指定券を事前に予約する必要があります。'],
  },
  bath: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '도시 산책과 근교 코츠월드 여행을 함께 하기 좋습니다.', 'Ideal for city walks combined with trips to the Cotswolds.', '街歩きと近郊のコッツウォルズ旅行を組み合わせやすい時期です。'],
    ],
    x: ['로마 목욕탕은 주말 요금이 평일보다 비싸니, 평일 사전 예약이 가장 저렴합니다.', 'Roman Baths tickets cost more at weekends; a weekday advance booking is cheapest.', 'ローマ浴場は週末料金が平日より高いので、平日の事前予約が最も安くなります。'],
  },
  york: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '성벽 위 산책과 골목 탐방을 즐기기 좋은 계절이며, 9월에는 음식 축제가 열립니다.', 'Great for walking the walls and lanes, with a food festival in September.', '城壁の上の散策や路地巡りを楽しめる季節で、9月には食の祭りが開かれます。'],
    ],
    x: ['요크 민스터 입장권은 12개월 동안 유효하니, 다시 방문할 계획이면 버리지 마세요.', 'York Minster tickets are valid for 12 months — keep yours if you plan to return.', 'ヨーク・ミンスターの入場券は12か月有効なので、再訪する予定があれば捨てずに持っておきましょう。'],
  },
  leipzig: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '야외 카페와 공원, 운하 산책을 즐기기 좋은 계절입니다.', 'The season for café terraces, parks and canal walks.', '屋外のカフェや公園、運河の散策を楽しめる季節です。'],
    ],
    x: ['라이프치히 레르헤는 이름이 보호된 과자라 인증받은 제과점에서만 만들 수 있습니다.', 'The Leipziger Lerche is a protected name, made only by licensed bakeries.', 'ライプツィガー・レルヒェは名称が保護されたお菓子で、認められたパン屋だけが作れます。'],
  },
  canberra: {
    p: [
      ['9~11월', 'September–November', '9〜11月', '봄꽃 축제와 와이너리 여행을 즐기기 좋습니다.', 'Spring flowers and winery visits.', '春の花祭りやワイナリー巡りを楽しめます。'],
      ['6~8월', 'June–August', '6〜8月', '추운 겨울이지만 송로버섯 사냥 체험과 송로버섯 요리를 즐길 수 있습니다.', 'Cold, but the season for truffle hunts and truffle menus.', '寒い冬ですが、トリュフ狩りの体験やトリュフ料理を楽しめます。'],
    ],
    x: ['버스와 경전철은 평일 출퇴근 시간(피크)에 더 비싸니, 낮 시간이나 주말에 움직이면 아낄 수 있습니다.', 'Bus and light-rail fares are higher at weekday peaks; travel middays or at weekends to save.', 'バスやライトレールは平日のピーク時間に高くなるので、日中や週末に移動すると節約できます。'],
  },
  wellington: {
    p: [
      ['12~3월', 'December–March', '12〜3月', '해변 브런치와 해안 산책, 남섬행 페리 여행을 즐기기 좋습니다.', 'Beachside brunch, coastal walks and ferry trips south.', 'ビーチでのブランチや海沿いの散策、南島行きのフェリー旅行を楽しめます。'],
    ],
    x: ['현금 승차는 2027년 3월까지 단계적으로 없어지니, 스내퍼 카드나 신용카드 탭으로 타세요.', 'Cash fares are being phased out by March 2027; use a Snapper card or contactless card.', '現金での乗車は2027年3月までに段階的に廃止されるので、スナッパーカードかクレジットカードのタッチ決済で乗りましょう。'],
  },
  graz: {
    p: [
      ['9~10월', 'September–October', '9〜10月', '포도 수확 철로, 남부 슈타이어마르크 와인 산지와 함께 둘러보기 좋습니다.', 'Harvest time — pair the city with the South Styrian wine country.', 'ブドウの収穫期で、南シュタイアーマルクのワイン産地と合わせて巡るのに良い時期です。'],
    ],
    x: ['19세 미만은 요아네움 박물관(에겐베르크 성 포함)에 무료로 입장할 수 있습니다.', 'Visitors under 19 enter Joanneum museums, including Schloss Eggenberg, free.', '19歳未満はヨアネウム博物館（エッゲンベルク城を含む）に無料で入場できます。'],
  },
  lausanne: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '호숫가 산책과 유람선, 라보 포도밭 하이킹을 즐기기 좋습니다.', 'Lakeside walks, boat trips and Lavaux vineyard hikes.', '湖畔の散策や遊覧船、ラヴォーのブドウ畑のハイキングを楽しめます。'],
    ],
    x: ['파페 보두아(감자·대파 요리)는 주로 9~4월에 먹는 겨울 음식입니다.', 'Papet vaudois (leek and potato with sausage) is mostly a September–April dish.', 'パペ・ヴォードワ（ネギとじゃがいもの料理）は主に9〜4月に食べる冬の料理です。'],
  },
  bremen: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '베저강 변 산책과 야외 카페를 즐기기 좋은 계절입니다.', 'The season for Weser riverside walks and outdoor cafés.', 'ヴェーザー川沿いの散策や屋外のカフェを楽しめる季節です。'],
      ['11~2월', 'November–February', '11〜2月', '첫서리 뒤 케일 요리(콜 운트 핀켈) 제철이고, 12월에는 크리스마스 마켓이 열립니다.', 'After the first frost, kale-and-Pinkel season; Christmas markets in December.', '初霜の後はケール料理（コール・ウント・ピンケル）の旬で、12月にはクリスマスマーケットが開かれます。'],
    ],
    x: ['시청 내부는 가이드 투어로만 볼 수 있고, 투어 일정은 약 한 달 전에 정해지며 갑자기 취소되기도 합니다.', 'The Town Hall interior is by guided tour only; dates are set about a month ahead and can be cancelled at short notice.', '市庁舎の内部はガイドツアーでのみ見学でき、日程は約1か月前に決まり、急に中止されることもあります。'],
  },
  gothenburg: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '트램과 배로 군도 섬을 돌고, 해산물을 즐기기 좋은 계절입니다.', 'The season for island-hopping by tram and boat, and for seafood.', 'トラムと船で群島の島々を巡り、海産物を楽しむのに良い季節です。'],
    ],
    x: ['시내 트램과 버스는 신용카드를 단말기에 대면(블리프) 구역 A 90분권이 바로 결제됩니다.', 'Tap a bank card on trams and buses to buy a 90-minute zone A ticket.', '市内のトラムやバスはクレジットカードを端末にかざすと、ゾーンAの90分券がすぐに決済されます。'],
  },
  aarhus: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '항구 수영장과 야외 식사, 길거리 음식 시장을 즐기기 좋습니다.', 'Harbour bathing, outdoor dining and the street-food market.', '港の海水プールや屋外での食事、屋台市場を楽しめます。'],
    ],
    x: ['18세 미만은 아로스 미술관과 옛 마을 박물관(덴 갬레 뷔)에 무료로 입장할 수 있습니다.', 'Under-18s enter ARoS and the Old Town museum (Den Gamle By) free.', '18歳未満はアロス美術館と旧市街博物館（デン・ガムレ・ビュ）に無料で入場できます。'],
  },
  cork: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '블라니 성 정원과 근교 킨세일 등 해안 마을을 함께 둘러보기 좋습니다.', 'Good for Blarney’s gardens and coastal towns like Kinsale.', 'ブラーニー城の庭園や近郊のキンセールなど海辺の町を巡るのに良い時期です。'],
    ],
    x: ['시내버스는 립(Leap) 카드로 내면 현금보다 훨씬 싸고, 90분 안에 갈아탈 수 있습니다.', 'City buses are much cheaper with a Leap card, which also gives 90-minute transfers.', '市内バスはリープ（Leap）カードで払うと現金よりずっと安く、90分以内なら乗り換えできます。'],
  },
  galway: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '애런 제도와 모허 절벽 당일 여행, 거리 축제를 즐기기 좋습니다.', 'Day trips to the Aran Islands and Cliffs of Moher, plus street festivals.', 'アラン諸島やモハーの断崖への日帰り旅行、街の祭りを楽しめます。'],
      ['9~4월', 'September–April', '9〜4月', '토종 골웨이 굴(에둘리스)의 제철입니다.', 'Season for native Galway oysters (Edulis).', '在来種のゴールウェイ・オイスター（エデュリス）の旬です。'],
    ],
    x: ['시내버스는 립 카드로 내면 현금보다 약 30% 쌉니다.', 'City buses are about 30% cheaper with a Leap card than with cash.', '市内バスはリープカードで払うと現金より約30%安くなります。'],
  },
  turku: {
    p: [
      ['6~8월', 'June–August', '6〜8月', '군도 섬 여행과 아우라강변 산책에 가장 좋은 계절입니다.', 'The best season for the archipelago and Aura riverside walks.', '群島巡りやアウラ川沿いの散策に最適な季節です。'],
    ],
    x: ['밤 11시~새벽 4시에 버스를 타면 1회권에 심야 요금이 더 붙습니다.', 'Buses between 23:00 and 04:00 add a night surcharge to single tickets.', '23時〜4時にバスに乗ると、1回券に深夜料金が加算されます。'],
  },
  tartu: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '강변 산책과 야외 카페, 시장 구경을 즐기기 좋습니다.', 'Riverside walks, outdoor cafés and market browsing.', '川沿いの散策や屋外のカフェ、市場巡りを楽しめます。'],
    ],
    x: ['국립박물관은 매달 둘째 일요일에 입장료가 절반입니다.', 'The National Museum is half price on the second Sunday of each month.', '国立博物館は毎月第2日曜日に入場料が半額になります。'],
  },
  stuttgart: {
    p: [
      ['9~10월', 'September–October', '9〜10月', '포도 수확철로, 맥주 축제와 와인 농가 주점(베젠)을 즐기기 좋습니다.', 'Harvest season, with the beer festival and Besen wine taverns.', 'ブドウの収穫期で、ビール祭りやワイン農家の居酒屋（ベーゼン）を楽しめます。'],
    ],
    x: ['베젠은 와인 농가가 1년에 최대 넉 달만 여는 주점이니, 방문 전에 지금 연 곳을 확인하세요.', 'Besen taverns open at most four months a year — check which are open before you go.', 'ベーゼンはワイン農家が年に最大4か月だけ開く居酒屋なので、訪れる前に営業中の店を確認しましょう。'],
  },
  dusseldorf: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '라인강변 산책로와 야외 비어가든을 즐기기 좋습니다.', 'The Rhine promenade and outdoor beer gardens.', 'ライン川沿いの遊歩道や屋外のビアガーデンを楽しめます。'],
    ],
    x: ['양조장에서는 잔을 비우면 종업원(쾨베스)이 새 잔을 계속 가져다주니, 그만 마시려면 잔 위에 컵받침을 올려 두세요.', 'In the brewhouses waiters (Köbes) keep bringing fresh glasses — put your beer mat on top to stop.', '醸造所ではグラスが空くと店員（ケーベス）が次々に新しいグラスを持ってくるので、やめたいときはグラスの上にコースターを置きましょう。'],
  },
  'san-sebastian': {
    p: [
      ['6~9월', 'June–September', '6〜9月', '라 콘차 해변에서 수영하고 저녁에는 핀초 바를 도는 여행에 좋습니다.', 'Swim at La Concha, then hop the pintxo bars in the evening.', 'ラ・コンチャ海岸で泳ぎ、夜はピンチョス・バルを巡る旅にぴったりです。'],
    ],
    x: ['산텔모 박물관은 매주 화요일 무료이고, 25세 미만도 무료입니다.', 'The San Telmo Museum is free every Tuesday and for visitors under 25.', 'サン・テルモ博物館は毎週火曜日が無料で、25歳未満も無料です。'],
  },
  funchal: {
    p: [
      ['4~5월', 'April–May', '4〜5月', '꽃 축제가 열리고 산길 하이킹(레바다)을 즐기기 좋은 계절입니다.', 'Flower festival season, great for levada hikes.', '花祭りが開かれ、山道（レヴァダ）のハイキングを楽しめる季節です。'],
      ['9~10월', 'September–October', '9〜10月', '바다가 따뜻하고 포도 수확 축제가 열립니다.', 'Warm sea and the wine-harvest festival.', '海が暖かく、ブドウの収穫祭が開かれます。'],
    ],
    x: ['시내버스는 미리 산 승차권이 버스 안에서 사는 것보다 쌉니다.', 'City-bus tickets bought in advance are cheaper than buying on board.', '市内バスは事前に買った乗車券の方が車内で買うより安くなります。'],
  },
  cordoba: {
    p: [
      ['5월', 'May', '5月', '꽃으로 꾸민 개인 안뜰을 공개하는 파티오 축제가 열립니다.', 'The Patios festival opens private flower-filled courtyards.', '花で飾られた個人の中庭を公開するパティオ祭りが開かれます。'],
      ['10~11월', 'October–November', '10〜11月', '더위가 가라앉아 메스키타와 골목 산책을 즐기기 좋습니다.', 'The heat eases — ideal for the Mezquita and the lanes.', '暑さが和らぎ、メスキータや路地の散策を楽しめます。'],
    ],
    x: ['메스키타 대성당은 월~토요일 아침(8시 반~9시 반)에 무료로 개인 입장할 수 있습니다.', 'The Mosque-Cathedral is free for individual visits Monday–Saturday 8:30–9:30 am.', 'メスキータ大聖堂は月〜土曜の朝（8時半〜9時半）に個人で無料入場できます。'],
  },
  montpellier: {
    p: [
      ['4~6월', 'April–June', '4〜6月', '구시가지 테라스와 근교 해안 마을 여행을 즐기기 좋습니다.', 'Old-town terraces and trips to the coastal towns.', '旧市街のテラスや近郊の海辺の町への旅を楽しめます。'],
      ['9~10월', 'September–October', '9〜10月', '바다가 따뜻하고 토 석호의 굴과 지역 와인을 즐기기 좋습니다.', 'Warm sea, Thau oysters and local wines.', '海が暖かく、トー潟のカキや地元のワインを楽しめます。'],
    ],
    x: ['몽펠리에 메트로폴 주민은 대중교통이 무료지만, 여행자는 승차권을 사야 합니다.', 'Public transport is free for metropolitan residents, but visitors need a ticket.', 'モンペリエ都市圏の住民は公共交通が無料ですが、旅行者は乗車券が必要です。'],
  },
  malmo: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '해변 산책로와 코펜하겐 당일 여행을 함께 즐기기 좋습니다.', 'Beach promenades and day trips to Copenhagen.', '海辺の遊歩道やコペンハーゲンへの日帰り旅行を楽しめます。'],
    ],
    x: ['19세 이하는 말뫼 박물관(성·수족관·미술관)에 무료로 입장할 수 있습니다.', 'Visitors aged 0–19 enter the Malmö Museums (castle, aquarium, art museum) free.', '19歳以下はマルメ博物館（城・水族館・美術館）に無料で入場できます。'],
  },
};
