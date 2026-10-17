/** 언제 가면 좋을까 4 — 미주·대양주·태평양 섬 (형식은 city-when-1.ts) */
import type { When } from './city-when-1';

export const WHEN_4: Record<string, When> = {
  'new-york': {
    p: [
      ['11월 말~12월 연말', 'Late November–December (holiday season)', '11月末〜12月（ホリデーシーズン）', '추수감사절 퍼레이드, 록펠러 센터 트리와 스케이트장, 타임스스퀘어 새해 카운트다운까지 이어지는 가장 유명한 시즌입니다.', 'The Thanksgiving parade, the Rockefeller Center tree and rink, and the Times Square countdown.', '感謝祭のパレード、ロックフェラーセンターのツリーとスケートリンク、タイムズスクエアのカウントダウンまで続く最も有名なシーズンです。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '센트럴 파크가 푸르거나 단풍이 들어 걷기 가장 좋은 계절입니다.', 'Central Park is green or golden — the best walking seasons.', 'セントラルパークが緑や紅葉に染まり、最も歩きやすい季節です。'],
    ],
    x: ['연말 주간은 숙박비가 가장 높고, 1~2월은 매우 춥습니다.', 'Holiday weeks are the priciest, and January–February is bitterly cold.', '年末の週は宿泊費が最も高く、1〜2月は非常に寒いです。'],
  },
  'los-angeles': {
    p: [
      ['9~11월', 'September–November', '9〜11月', '여름 인파가 빠지고 해변은 여전히 따뜻한, 현지인이 꼽는 좋은 시기입니다.', 'Summer crowds thin while beaches stay warm — a local favourite.', '夏の混雑が落ち着き、ビーチはまだ暖かい、地元の人が勧める時期です。'],
      ['3~5월', 'March–May', '3〜5月', '맑고 온화해 테마파크와 시내 관광에 좋습니다.', 'Sunny, mild weather for theme parks and city sights.', '晴れて穏やかで、テーマパークや市内観光に最適です。'],
    ],
    x: ['5~6월 아침에는 바닷가 안개(메이 그레이·준 글룸)가 잦습니다.', 'May–June mornings often bring coastal fog (“May Gray”, “June Gloom”).', '5〜6月の朝は海沿いに霧（メイグレー・ジューングルーム）が多いです。'],
  },
  'las-vegas': {
    p: [
      ['3~5월·9~11월', 'March–May and September–November', '3〜5月・9〜11月', '그랜드캐니언 등 국립공원 투어와 수영장을 쾌적하게 즐길 수 있습니다.', 'Comfortable for Grand Canyon tours and the pools.', 'グランドキャニオンなど国立公園ツアーやプールを快適に楽しめます。'],
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
      ['6~9월', 'June–September', '6〜9月', '맑고 건조해 스탠리 공원 자전거와 근교 산·섬 여행에 가장 좋습니다.', 'Dry, sunny weather for cycling Stanley Park and mountain or island trips.', '晴れて乾燥し、スタンレーパークのサイクリングや近郊の山・島の旅に最適です。'],
      ['12~3월 스키', 'December–March (skiing)', '12〜3月（スキー）', '시내 근처 그라우스산과 휘슬러에서 스키를 즐길 수 있습니다.', 'Ski on Grouse Mountain near town or at Whistler.', '市内近くのグラウス山やウィスラーでスキーが楽しめます。'],
    ],
    x: ['11~3월 시내는 비가 잦습니다.', 'November–March is rainy in the city.', '11〜3月の市内は雨が多いです。'],
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
      ['4~5월·9~10월', 'April–May and September–October', '4〜5月・9〜10月', '날씨는 일 년 내내 좋지만 이 시기가 덜 붐비고 숙박비가 낮은 편입니다.', 'The weather is good year-round, but these months are quieter and cheaper.', '気候は一年中良いですが、この時期は空いていて宿泊費も安めです。'],
      ['9월 알로하 페스티벌', 'September (Aloha Festivals)', '9月（アロハ・フェスティバル）', '하와이 문화를 기념하는 퍼레이드와 거리 축제가 열립니다.', 'Parades and street parties celebrating Hawaiian culture.', 'ハワイ文化を祝うパレードや街のお祭りがあります。'],
      ['11~2월 겨울 파도', 'November–February (winter surf)', '11〜2月（冬の大波）', '오아후 북쪽 해안의 거대한 파도와 서핑 대회를 구경할 수 있습니다(수영은 주의).', 'Watch giant North Shore waves and surf contests (swim with caution).', 'オアフ島北海岸の大波やサーフィン大会を見物できます（遊泳は注意）。'],
    ],
  },
  guam: {
    p: [
      ['12~6월 건기', 'December–June (dry season)', '12〜6月（乾季）', '맑고 습도가 낮아 스노클링과 해변 휴식에 좋습니다.', 'Clear, drier days for snorkelling and beach time.', '晴れて湿度が低く、シュノーケリングやビーチでの休息に最適です。'],
      ['7월 해방 기념일', 'July (Liberation Day)', '7月（解放記念日）', '7월 21일 무렵 퍼레이드와 축제가 열리는 괌 최대 행사입니다.', 'Guam’s biggest celebration, with a parade around 21 July.', '7月21日頃にパレードや祭りが開かれるグアム最大の行事です。'],
    ],
    x: ['7~11월은 비가 잦고 태풍 가능성이 있습니다.', 'July–November is wetter with typhoon risk.', '7〜11月は雨が多く台風の可能性があります。'],
  },
  saipan: {
    p: [
      ['12~6월 건기', 'December–June (dry season)', '12〜6月（乾季）', '바다가 맑아 마나가하섬과 그로토 다이빙에 좋습니다.', 'Clear water for Managaha Island and diving the Grotto.', '海が澄み、マニャガハ島やグロットのダイビングに最適です。'],
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
      ['3~5월 가을', 'March–May (autumn)', '3〜5月（秋）', '날씨가 안정적이라 그레이트 오션 로드 여행에 좋습니다.', 'Settled weather for the Great Ocean Road.', '天気が安定し、グレートオーシャンロードの旅に最適です。'],
    ],
  },
  auckland: {
    p: [
      ['12~3월 여름', 'December–March (summer)', '12〜3月（夏）', '해변·섬 여행과 와이헤케섬 와이너리를 즐기기 좋습니다.', 'Beaches, island trips and Waiheke’s wineries.', 'ビーチや島巡り、ワイヘケ島のワイナリーを楽しめます。'],
    ],
    x: ['남반구라 6~8월이 겨울이고 비가 잦습니다.', 'June–August is winter in the southern hemisphere and often wet.', '南半球で6〜8月は冬で雨が多いです。'],
  },
};
