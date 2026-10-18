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
};
