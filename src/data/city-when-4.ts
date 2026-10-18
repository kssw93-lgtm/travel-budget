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
};
