/** 언제 가면 좋을까 3 — 유럽·튀르키예 (형식은 city-when-1.ts) */
import type { When } from './city-when-1';

const XMAS: readonly [string, string, string, string, string, string] = ['11월 말~12월 크리스마스 마켓', 'Late November–December (Christmas market)', '11月末〜12月（クリスマスマーケット）', '광장에 크리스마스 마켓이 열리고 도시가 조명으로 빛나는, 겨울 여행의 이유가 되는 시기입니다(아래 「크리스마스 마켓」 칸 참고).', 'The square fills with a Christmas market and the city glows with lights — the reason to come in winter (see the Christmas market section).', '広場にクリスマスマーケットが開かれ街が光に包まれる、冬に訪れる理由になる時期です（「クリスマスマーケット」欄参照）。'];

export const WHEN_3: Record<string, When> = {
  paris: {
    p: [
      ['4~6월 봄', 'April–June (spring)', '4〜6月（春）', '공원과 센강 변이 푸르고 테라스 카페가 활기를 띠는 파리의 가장 아름다운 계절입니다.', 'Parks and the Seine turn green and café terraces come alive — Paris at its loveliest.', '公園やセーヌ河岸が緑に包まれ、テラスカフェがにぎわうパリで最も美しい季節です。'],
      ['7월 14일 혁명기념일', '14 July (Bastille Day)', '7月14日（革命記念日）', '샹젤리제 퍼레이드가 열립니다. 에펠탑 불꽃놀이 날짜는 해마다 달라질 수 있으니 확인하세요.', 'The Champs-Élysées parade takes place; the Eiffel Tower fireworks date can vary, so check each year.', 'シャンゼリゼのパレードがあります。エッフェル塔の花火の日付は年により変わるので確認を。'],
      ['12월 연말', 'December (festive season)', '12月（年末）', '샹젤리제 조명과 백화점 쇼윈도, 크리스마스 마켓이 겨울 파리를 빛냅니다.', 'Champs-Élysées lights, department-store windows and Christmas markets.', 'シャンゼリゼのイルミネーション、百貨店のショーウィンドウ、クリスマスマーケットが冬のパリを彩ります。'],
    ],
    x: ['8월에는 문을 닫는 현지 상점·식당이 많습니다.', 'Many local shops and restaurants close in August.', '8月は休業する地元の店や飲食店が多いです。'],
  },
  nice: {
    p: [
      ['2월 니스 카니발', 'February (Nice Carnival)', '2月（ニース・カーニバル）', '거대한 인형 수레 퍼레이드와 꽃 전투가 열리는 세계적인 카니발입니다.', 'A world-famous carnival of giant float parades and flower battles.', '巨大な山車のパレードと花合戦がある世界的なカーニバルです。'],
      ['5~6월·9월', 'May–June and September', '5〜6月・9月', '바다가 따뜻하면서 한여름보다 덜 붐벼 해변과 근교 마을을 즐기기 좋습니다.', 'Warm sea and fewer crowds than midsummer for beaches and Riviera villages.', '海が温かく真夏より空いていて、ビーチや近郊の村を楽しめます。'],
    ],
    x: ['7~8월은 가장 붐비고 숙박비가 높습니다.', 'July–August is the busiest and priciest.', '7〜8月は最も混み、宿泊費も高いです。'],
  },
  london: {
    p: [
      ['5~9월', 'May–September', '5〜9月', '낮이 길어 공원과 야외 공연, 템스강 산책을 즐기기 좋습니다.', 'Long days for parks, outdoor shows and Thames walks.', '日が長く、公園や野外公演、テムズ川の散策を楽しめます。'],
      ['8월 노팅힐 카니발', 'August (Notting Hill Carnival)', '8月（ノッティングヒル・カーニバル）', '8월 마지막 주말에 열리는 유럽 최대급 거리 축제입니다.', 'One of Europe’s biggest street festivals, on the August bank-holiday weekend.', '8月最後の週末に開かれるヨーロッパ最大級のストリートフェスティバルです。'],
      ['12월 연말', 'December (festive season)', '12月（年末）', '옥스퍼드 스트리트 조명과 윈터 원더랜드, 새해 템스강 불꽃놀이가 유명합니다.', 'Oxford Street lights, Winter Wonderland and the New Year fireworks on the Thames.', 'オックスフォード通りのイルミネーション、ウィンター・ワンダーランド、テムズ川の年越し花火が有名です。'],
    ],
  },
  dublin: {
    p: [
      ['3월 17일 성 패트릭의 날', '17 March (St Patrick’s Day)', '3月17日（セント・パトリックス・デー）', '도시 전체가 초록색으로 물드는 아일랜드 최대 축제로 퍼레이드가 열립니다.', 'Ireland’s biggest celebration, with a parade and the city turned green.', '街全体が緑に染まるアイルランド最大の祭りで、パレードがあります。'],
      ['5~9월', 'May–September', '5〜9月', '낮이 길고 비교적 따뜻해 근교 투어(모허 절벽 등)에 좋습니다.', 'Long, milder days for tours such as the Cliffs of Moher.', '日が長く比較的暖かく、モハーの断崖などのツアーに最適です。'],
    ],
    x: ['성 패트릭의 날 전후 숙소는 매우 비쌉니다.', 'Hotels are very expensive around St Patrick’s Day.', 'セント・パトリックス・デー前後は宿が非常に高いです。'],
  },
  amsterdam: {
    p: [
      ['4월 중순~5월 초 튤립', 'Mid-April–early May (tulips)', '4月中旬〜5月初め（チューリップ）', '근교 쾨켄호프 정원과 튤립 밭이 절정을 이룹니다.', 'Keukenhof and the bulb fields reach their peak.', '近郊のキューケンホフ公園やチューリップ畑が見頃です。'],
      ['4월 27일 왕의 날', '27 April (King’s Day)', '4月27日（国王の日）', '도시 전체가 오렌지색 옷과 운하 위 파티로 들썩입니다.', 'The city turns orange with street markets and canal parties.', '街全体がオレンジ色の服と運河のパーティーで盛り上がります。'],
    ],
    x: ['왕의 날과 튤립 시즌 주말은 숙소가 매우 빨리 찹니다.', 'King’s Day and tulip weekends book out fast.', '国王の日やチューリップの週末は宿がすぐ埋まります。'],
  },
  brussels: {
    p: [
      ['8월 플라워 카펫(짝수 해)', 'August (Flower Carpet, even years)', '8月（フラワーカーペット、偶数年）', '그랑플라스를 수십만 송이 꽃으로 덮는 행사로 2년마다 열립니다.', 'Hundreds of thousands of flowers carpet the Grand-Place every other year.', '数十万本の花でグランプラスを覆う行事で、2年に一度開かれます。'],
      XMAS,
    ],
  },
  munich: {
    p: [
      ['9월 말~10월 초 옥토버페스트', 'Late September–early October (Oktoberfest)', '9月末〜10月初め（オクトーバーフェスト）', '세계 최대 맥주 축제로, 대형 맥주 텐트와 전통 의상 행렬이 열립니다.', 'The world’s biggest beer festival, with giant beer tents and a costume parade.', '世界最大のビール祭りで、大きなビールテントや民族衣装のパレードがあります。'],
      XMAS,
      ['5~9월 비어가르텐', 'May–September (beer gardens)', '5〜9月（ビアガーデン）', '영국정원 등 야외 비어가르텐을 즐기기 좋습니다.', 'Perfect for outdoor beer gardens such as the English Garden’s.', '英国庭園などの屋外ビアガーデンを楽しむのに最適です。'],
    ],
    x: ['옥토버페스트 기간에는 숙박비가 몇 배로 오르니 일찍 예약하세요.', 'Hotel prices soar during Oktoberfest; book early.', 'オクトーバーフェスト期間は宿泊費が数倍になるので早めの予約を。'],
  },
  interlaken: {
    p: [
      ['6~9월 여름', 'June–September (summer)', '6〜9月（夏）', '하이킹 길과 산악 열차가 모두 열리고 융프라우요흐 전망이 가장 맑을 확률이 높습니다.', 'All hiking trails and mountain railways are open, with the best odds of clear views.', 'ハイキング道や登山鉄道がすべて開き、ユングフラウヨッホの眺めも晴れやすいです。'],
      ['12~3월 겨울', 'December–March (winter)', '12〜3月（冬）', '그린델발트·벵겐 일대에서 스키와 썰매를 즐길 수 있습니다.', 'Skiing and sledging around Grindelwald and Wengen.', 'グリンデルワルトやヴェンゲン一帯でスキーやそりが楽しめます。'],
    ],
    x: ['4~5월·11월에는 일부 산악 교통이 정비로 쉽니다.', 'Some mountain lifts close for maintenance in April–May and November.', '4〜5月・11月は一部の山岳交通が点検で運休します。'],
  },
  vienna: {
    p: [
      ['1~2월 무도회 시즌', 'January–February (ball season)', '1〜2月（舞踏会シーズン）', '오페라 무도회 등 수백 개의 무도회가 열리는 빈 고유의 겨울 문화입니다.', 'Hundreds of balls, including the Opera Ball — a uniquely Viennese winter tradition.', 'オペラ座舞踏会など数百の舞踏会が開かれる、ウィーン独特の冬の文化です。'],
      XMAS,
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '궁전 정원과 와인 선술집(호이리거)을 즐기기 좋습니다.', 'Lovely for palace gardens and wine taverns (Heuriger).', '宮殿の庭園やワイン酒場（ホイリゲ）を楽しむのに最適です。'],
    ],
  },
  budapest: {
    p: [
      XMAS,
      ['8월 시게트 페스티벌', 'August (Sziget Festival)', '8月（シゲト・フェスティバル）', '도나우강 섬에서 열리는 유럽 최대급 음악 축제입니다.', 'One of Europe’s biggest music festivals, on a Danube island.', 'ドナウ川の島で開かれるヨーロッパ最大級の音楽祭です。'],
      ['겨울 온천', 'Winter (thermal baths)', '冬（温泉）', '추운 날 야외 온천(세체니 등)에 몸을 담그는 경험이 특별합니다.', 'Soaking in outdoor thermal pools such as Széchenyi on a cold day is special.', '寒い日に屋外温泉（セーチェーニなど）に浸かる体験は格別です。'],
    ],
  },
  prague: {
    p: [
      XMAS,
      ['5월 프라하의 봄 음악제', 'May (Prague Spring music festival)', '5月（プラハの春音楽祭）', '오랜 전통의 클래식 음악제로 도시가 음악으로 채워집니다.', 'A long-standing classical music festival fills the city with concerts.', '長い伝統のクラシック音楽祭で、街が音楽に包まれます。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '여름보다 덜 붐벼 카를교와 구시가지를 여유롭게 걸을 수 있습니다.', 'Fewer crowds than summer on Charles Bridge and in the old town.', '夏より空いていて、カレル橋や旧市街をゆっくり歩けます。'],
    ],
  },
  krakow: {
    p: [
      XMAS,
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '쾌적한 날씨에 구시가지와 근교 소금광산·아우슈비츠를 둘러보기 좋습니다.', 'Pleasant weather for the old town and day trips to the salt mine and Auschwitz.', '快適な気候で、旧市街や近郊の岩塩坑・アウシュヴィッツを巡れます。'],
    ],
  },
  copenhagen: {
    p: [
      XMAS,
      ['6~8월 여름', 'June–August (summer)', '6〜8月（夏）', '밤늦게까지 밝아 운하 수영과 야외 생활을 즐기는 코펜하겐의 활기찬 계절입니다.', 'Light late into the night for harbour swimming and outdoor life.', '夜遅くまで明るく、運河での水泳や屋外の暮らしを楽しむ季節です。'],
    ],
  },
  stockholm: {
    p: [
      ['6월 하지 축제', 'June (Midsummer)', '6月（夏至祭）', '꽃으로 장식한 기둥 주위에서 춤추는 스웨덴 최대 명절로, 스칸센 등에서 체험할 수 있습니다.', 'Sweden’s biggest holiday of dancing around a flower-decked pole, celebrated at Skansen and elsewhere.', '花で飾った柱の周りで踊るスウェーデン最大の祝日で、スカンセンなどで体験できます。'],
      ['12월 13일 루치아 축일', '13 December (St Lucia)', '12月13日（聖ルシア祭）', '촛불 관을 쓴 행렬이 노래하는 어두운 겨울의 빛 축제입니다.', 'Candle-crowned processions sing in the depth of winter.', 'ろうそくの冠をかぶった行列が歌う、暗い冬の光の祭りです。'],
      XMAS,
    ],
  },
  helsinki: {
    p: [
      ['6~8월 백야', 'June–August (white nights)', '6〜8月（白夜）', '밤까지 밝아 섬 투어와 사우나, 야외 테라스를 즐기기 좋습니다.', 'Light all evening for island trips, saunas and terraces.', '夜まで明るく、島巡りやサウナ、屋外テラスを楽しめます。'],
      XMAS,
    ],
  },
  reykjavik: {
    p: [
      ['9~3월 오로라', 'September–March (northern lights)', '9〜3月（オーロラ）', '어둡고 맑은 밤에 오로라를 볼 기회가 있습니다.', 'Chances to see the aurora on dark, clear nights.', '暗く晴れた夜にオーロラを見るチャンスがあります。'],
      ['6~7월 백야', 'June–July (midnight sun)', '6〜7月（白夜）', '해가 거의 지지 않아 남부 해안·골든 서클 투어를 길게 즐길 수 있습니다.', 'Near-endless daylight for long south-coast and Golden Circle days.', 'ほとんど日が沈まず、南海岸やゴールデンサークルを長く楽しめます。'],
    ],
    x: ['한겨울에는 해가 매우 짧고 도로가 얼 수 있습니다.', 'Midwinter days are very short and roads can ice over.', '真冬は日が非常に短く、道路が凍ることがあります。'],
  },
  lisbon: {
    p: [
      ['6월 성 안토니오 축제', 'June (Santo António festivities)', '6月（聖アントニオ祭）', '골목마다 정어리 구이 냄새와 음악이 가득한 리스본 최대 축제로, 12~13일 밤이 절정입니다.', 'Lisbon’s biggest party of grilled sardines and music in every alley, peaking on the night of 12–13 June.', '路地ごとにイワシの炭火焼きと音楽があふれるリスボン最大の祭りで、12〜13日の夜が最高潮です。'],
      ['3~5월·9~10월', 'March–May and September–October', '3〜5月・9〜10月', '덥지 않아 언덕길과 전망대를 걷기 좋습니다.', 'Not too hot for the hills and viewpoints.', '暑すぎず、坂道や展望台を歩くのに最適です。'],
    ],
  },
  madrid: {
    p: [
      ['5월 산 이시드로 축제', 'May (San Isidro)', '5月（サン・イシドロ祭）', '마드리드 수호성인 축제로 전통 의상과 거리 공연을 볼 수 있습니다.', 'The city’s patron-saint festival with traditional dress and street events.', 'マドリードの守護聖人の祭りで、伝統衣装や街頭イベントが見られます。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '미술관과 공원, 테라스를 즐기기 좋은 날씨입니다.', 'Ideal weather for museums, parks and terraces.', '美術館や公園、テラスを楽しむのに最適な気候です。'],
    ],
    x: ['7~8월은 매우 덥습니다.', 'July–August is very hot.', '7〜8月は非常に暑いです。'],
  },
  barcelona: {
    p: [
      ['9월 24일 무렵 라 메르세', 'Around 24 September (La Mercè)', '9月24日頃（ラ・メルセ祭）', '인간 탑 쌓기(카스텔)와 불꽃 행진(코레폭)이 열리는 바르셀로나 최대 축제입니다.', 'Barcelona’s biggest festival, with human towers and fire-runs.', '人間の塔（カステル）や火の行進（コレフォック）がある、バルセロナ最大の祭りです。'],
      ['5~6월', 'May–June', '5〜6月', '바다가 따뜻해지기 시작하고 한여름보다 덜 붐빕니다.', 'The sea warms up, with fewer crowds than midsummer.', '海が温かくなり始め、真夏より空いています。'],
    ],
    x: ['7~8월은 가장 붐비고 덥습니다.', 'July–August is the busiest and hottest.', '7〜8月は最も混雑し暑いです。'],
  },
  rome: {
    p: [
      ['부활절 무렵', 'Around Easter', '復活祭の頃', '바티칸에서 교황 미사가 열리는 등 로마의 가장 큰 종교 행사 시기입니다(매우 붐빔).', 'Rome’s biggest religious season, with papal Masses at the Vatican (very crowded).', 'バチカンで教皇ミサが行われるなど、ローマ最大の宗教行事の時期です（大混雑）。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '유적을 걸어서 둘러보기 좋은 날씨입니다.', 'The best weather for walking between ancient sites.', '遺跡を歩いて巡るのに最適な気候です。'],
    ],
    x: ['7~8월은 매우 덥고 붐빕니다.', 'July–August is very hot and crowded.', '7〜8月は非常に暑く混雑します。'],
  },
  florence: {
    p: [
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '미술관과 두오모, 토스카나 근교 여행에 날씨가 가장 좋습니다(가을은 와인 수확철).', 'Ideal for museums, the Duomo and Tuscan day trips (autumn is harvest time).', '美術館やドゥオーモ、トスカーナ近郊の旅に最適です（秋はワインの収穫期）。'],
    ],
    x: ['7~8월은 분지라 매우 덥습니다.', 'July–August is very hot in the river basin.', '7〜8月は盆地で非常に暑いです。'],
  },
  venice: {
    p: [
      ['2월 베네치아 카니발', 'February (Venice Carnival)', '2月（ヴェネツィア・カーニバル）', '가면과 화려한 의상의 사람들이 거리를 채우는 세계적인 축제입니다.', 'A world-famous festival of masks and elaborate costumes.', '仮面と豪華な衣装の人々が街を埋める世界的な祭りです。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '날씨가 좋고 한여름보다 덜 붐빕니다.', 'Fine weather and fewer crowds than midsummer.', '天気が良く、真夏より空いています。'],
    ],
    x: ['한여름 낮은 당일 관광객으로 매우 붐비고, 늦가을~겨울에는 아쿠아 알타(침수)가 생길 수 있습니다.', 'Midsummer days are packed with day-trippers, and acqua alta flooding can occur from late autumn to winter.', '真夏の日中は日帰り客で大混雑し、晩秋〜冬はアックア・アルタ（冠水）が起こることがあります。'],
  },
  athens: {
    p: [
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '유적 관람에 알맞은 날씨이고, 에게해 섬 여행을 붙이기 좋습니다.', 'Good weather for ancient sites and for adding the Aegean islands.', '遺跡見学に適した気候で、エーゲ海の島旅を組み合わせやすいです。'],
      ['그리스 정교회 부활절', 'Greek Orthodox Easter', 'ギリシャ正教の復活祭', '촛불 행렬과 자정 예배가 열리는 그리스 최대 명절입니다.', 'Greece’s biggest holiday, with candlelit processions and midnight services.', 'ろうそくの行列や真夜中の礼拝が行われるギリシャ最大の祝日です。'],
    ],
    x: ['7~8월은 폭염이 잦습니다.', 'Heatwaves are common in July–August.', '7〜8月は猛暑が多いです。'],
  },
  dubrovnik: {
    p: [
      ['7월 중순~8월 두브로브니크 여름 축제', 'Mid-July–August (Dubrovnik Summer Festival)', '7月中旬〜8月（ドゥブロヴニク夏祭り）', '성벽과 광장을 무대로 연극·음악 공연이 열립니다.', 'Theatre and music staged on the walls and squares.', '城壁や広場を舞台に演劇や音楽の公演が行われます。'],
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '바다는 따뜻하고 크루즈 인파는 한여름보다 적습니다.', 'Warm sea with fewer cruise crowds than midsummer.', '海は温かく、クルーズ客は真夏より少なめです。'],
    ],
  },
  istanbul: {
    p: [
      ['4월 튤립 축제', 'April (Tulip Festival)', '4月（チューリップ祭り）', '귈하네 공원 등 도시 곳곳이 수백만 송이 튤립으로 물듭니다.', 'Millions of tulips bloom in Gülhane Park and across the city.', 'ギュルハネ公園など街中が数百万本のチューリップに彩られます。'],
      ['9~10월', 'September–October', '9〜10月', '선선해 걷기 좋고 보스포루스 크루즈가 쾌적합니다.', 'Cool walking weather and pleasant Bosphorus cruises.', '涼しく歩きやすく、ボスポラス・クルーズも快適です。'],
    ],
  },
  edinburgh: {
    p: [
      ['8월 축제의 달', 'August (festival month)', '8月（フェスティバルの月）', '프린지·국제 페스티벌·밀리터리 타투 등 여러 축제가 한꺼번에 열려 도시 전체가 무대가 됩니다.', 'The Fringe, International Festival, Military Tattoo and more turn the city into a stage.', 'フリンジや国際フェスティバル、ミリタリー・タトゥーなどが同時に開かれ、街全体が舞台になります。'],
      ['12월 31일 호그머네이', '31 December (Hogmanay)', '12月31日（ホグマニー）', '성 아래 거리 파티와 불꽃놀이로 새해를 맞는 스코틀랜드식 연말 축제입니다.', 'Scotland’s New Year street party and fireworks below the castle.', '城の下のストリートパーティーと花火で新年を迎えるスコットランド流の年越し祭りです。'],
      XMAS,
    ],
    x: ['8월에는 숙소가 매우 비싸고 빨리 찹니다.', 'Accommodation is very expensive and scarce in August.', '8月は宿が非常に高く、すぐ埋まります。'],
  },
  dresden: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '엘베강 변 산책과 근교 작센 스위스 국립공원 하이킹에 좋습니다.', 'Elbe riverside walks and hikes in nearby Saxon Switzerland.', 'エルベ川沿いの散策や近郊のザクセン・スイス国立公園のハイキングに最適です。']] },
  nuremberg: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '성벽 위 산책과 야외 비어가르텐을 즐기기 좋습니다.', 'Walks along the walls and outdoor beer gardens.', '城壁の散策や屋外ビアガーデンを楽しめます。']] },
  cologne: {
    p: [
      XMAS,
      ['2월 쾰른 카니발', 'February (Cologne Carnival)', '2月（ケルン・カーニバル）', '「장미의 월요일」 퍼레이드가 절정인 독일 최대급 카니발입니다.', 'One of Germany’s biggest carnivals, peaking with the Rose Monday parade.', '「バラの月曜日」のパレードが最高潮のドイツ最大級のカーニバルです。'],
    ],
  },
  strasbourg: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '운하 보트와 알자스 와인 마을 드라이브에 좋습니다.', 'Canal boats and drives through the Alsace wine villages.', '運河ボートやアルザスのワイン村のドライブに最適です。']] },
  colmar: { p: [XMAS, ['9~10월 포도 수확', 'September–October (grape harvest)', '9〜10月（ブドウ収穫）', '알자스 와인 마을의 수확철 풍경과 와인 축제를 즐길 수 있습니다.', 'Harvest scenes and wine festivals in the Alsace villages.', 'アルザスのワイン村の収穫風景やワイン祭りを楽しめます。']] },
  salzburg: { p: [XMAS, ['7~8월 잘츠부르크 음악제', 'July–August (Salzburg Festival)', '7〜8月（ザルツブルク音楽祭）', '세계적인 클래식 음악·오페라 축제입니다(공연 예매 필수).', 'A world-class festival of music and opera (book performances ahead).', '世界的なクラシック音楽・オペラの祭典です（公演の予約必須）。']] },
  zagreb: { p: [XMAS, ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '카페 테라스와 근교 플리트비체 국립공원 여행에 좋습니다.', 'Café terraces and trips to Plitvice Lakes National Park.', 'カフェのテラスや近郊のプリトヴィツェ湖群国立公園への旅に最適です。']] },
  rovaniemi: {
    p: [
      ['12월 크리스마스', 'December (Christmas)', '12月（クリスマス）', '「산타의 고향」에서 맞는 크리스마스로, 산타 마을이 가장 활기찹니다(숙소 매우 일찍 마감).', 'Christmas in “Santa’s hometown”, when the village is at its liveliest (rooms sell out very early).', '「サンタの故郷」で迎えるクリスマスで、サンタ村が最もにぎわいます（宿は非常に早く埋まる）。'],
      ['1~3월 오로라·설원', 'January–March (aurora and snow)', '1〜3月（オーロラ・雪原）', '눈이 깊고 낮이 조금씩 길어져 허스키 썰매와 오로라 투어에 좋습니다.', 'Deep snow and lengthening days for husky safaris and aurora hunts.', '雪が深く日も少しずつ長くなり、犬ぞりやオーロラツアーに最適です。'],
    ],
  },
  tallinn: { p: [XMAS, ['6~8월', 'June–August', '6〜8月', '낮이 길고 구시가지 축제와 야외 테라스가 활기찹니다.', 'Long days, old-town festivals and lively terraces.', '日が長く、旧市街の祭りや屋外テラスがにぎわいます。']] },
  frankfurt: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '마인강 변 산책과 사과 와인 주점의 야외 자리를 즐기기 좋습니다.', 'Main riverside walks and apple-wine tavern gardens.', 'マイン川沿いの散策やアップルワイン酒場の屋外席を楽しめます。']] },
  berlin: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '공원과 야외 바, 슈프레강 변 생활을 즐기기 좋습니다.', 'Parks, open-air bars and life along the Spree.', '公園や屋外バー、シュプレー川沿いの暮らしを楽しめます。']] },
  zurich: { p: [XMAS, ['6~9월', 'June–September', '6〜9月', '호수 수영과 근교 알프스 여행에 좋습니다.', 'Lake swimming and Alpine day trips.', '湖での水泳や近郊のアルプス旅行に最適です。']] },
  basel: { p: [XMAS, ['2~3월 바젤 파스나흐트', 'February–March (Basel Fasnacht)', '2〜3月（バーゼル・ファスナハト）', '새벽 4시 「모르게슈트라이히」로 시작하는 스위스 최대 카니발로, 유네스코 무형유산입니다.', 'Switzerland’s biggest carnival, starting at 4am with the Morgestraich; UNESCO-listed.', '午前4時の「モルゲシュトライヒ」で始まるスイス最大のカーニバルで、ユネスコ無形文化遺産です。']] },
  riga: { p: [XMAS, ['6월 하지(야니)', 'June (Midsummer, Jāņi)', '6月（夏至祭ヤーニ）', '라트비아 최대 명절로 화관을 쓰고 모닥불을 피웁니다.', 'Latvia’s biggest holiday, with flower crowns and bonfires.', 'ラトビア最大の祝日で、花冠をかぶりかがり火を焚きます。']] },
  gdansk: { p: [XMAS, ['7~8월 성 도미니크 시장', 'July–August (St Dominic’s Fair)', '7〜8月（聖ドミニク市）', '수백 년 전통의 대형 여름 시장이 구시가지에 열립니다.', 'A centuries-old summer fair fills the old town.', '数百年の伝統がある大規模な夏市が旧市街に開かれます。']] },
  bruges: { p: [XMAS, ['4~9월', 'April–September', '4〜9月', '운하 보트와 자전거로 근교 마을을 다니기 좋습니다.', 'Canal boats and cycling to nearby villages.', '運河ボートや自転車で近郊の村を巡るのに最適です。']] },
};
