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
};
