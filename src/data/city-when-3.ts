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
    x: ['8월에는 연차 휴가로 쉬는 작은 상점이 있으니, 가려는 가게·식당의 영업일을 미리 확인하세요.', 'Some small shops close for annual holidays in August, so check the opening days of any shops or restaurants you plan to visit.', '8月は夏休みで休業する小規模な店もあるため、訪問予定の店やレストランの営業日を事前に確認しましょう。'],
  },
  nice: {
    p: [
      ['2월 니스 카니발', 'February (Nice Carnival)', '2月（ニース・カーニバル）', '거대한 인형 수레 퍼레이드와 꽃 전투가 열리는 세계적인 카니발입니다.', 'A world-famous carnival of giant float parades and flower battles.', '巨大な山車のパレードと花合戦がある世界的なカーニバルです。'],
      ['5~6월·9월', 'May–June and September', '5～6月・9月', '한여름보다 비교적 차분하게 니스 해변과 근교 마을을 둘러보기 좋습니다. 바다 수온과 혼잡도는 방문 시기에 따라 확인하세요.', 'Good months to explore Nice\'s beaches and nearby towns with a generally calmer feel than midsummer. Check sea conditions and crowd levels for your dates.', '真夏より比較的落ち着いてニースの海岸や近郊の町を巡りやすい時期です。海水温と混雑状況は訪問日に合わせて確認してください。'],
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
      ['5~9월', 'May–September', '5〜9月', '더블린은 비교적 온화하고 야외 행사가 많습니다. 모허 절벽은 더블린에서 먼 편이니 별도 이동 시간을 충분히 잡으세요.', 'May–September brings milder weather and outdoor events in Dublin. Allow substantial travel time if visiting the Cliffs of Moher from the city.', '5～9月のダブリンは比較的穏やかな気候で、屋外イベントも多い時期です。モハーの断崖へ行く場合は移動時間を十分に見込みましょう。'],
    ],
    x: ['3월 성 패트릭 축제 기간에는 더블린에 방문객이 몰리므로 숙소를 일찍 예약하세요.', 'Dublin attracts many visitors during the St Patrick\'s Festival in March, so book accommodation early.', '3月のセント・パトリックス・フェスティバル期間はダブリンに多くの人が訪れるため、宿泊先は早めに予約しましょう。'],
  },
  amsterdam: {
    p: [
      ['4월 중순~5월 초 튤립', 'Mid-April–early May (tulips)', '4月中旬〜5月初め（チューリップ）', '근교 쾨켄호프 정원과 튤립 밭이 절정을 이룹니다.', 'Keukenhof and the bulb fields reach their peak.', '近郊のキューケンホフ公園やチューリップ畑が見頃です。'],
      ['4월 27일 왕의 날', '27 April (King’s Day)', '4月27日（国王の日）', '도시 전체가 오렌지색 옷과 운하 위 파티로 들썩입니다.', 'The city turns orange with street markets and canal parties.', '街全体がオレンジ色の服と運河のパーティーで盛り上がります。'],
    ],
    x: ['왕의 날이나 봄 튤립 시즌에 방문한다면 숙소와 인기 활동을 일찍 예약하세요.', 'If visiting for King\'s Day or the spring tulip season, book accommodation and popular activities early.', '国王の日や春のチューリップシーズンに訪れるなら、宿泊先や人気の体験を早めに予約しましょう。'],
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
    x: ['옥토버페스트 기간에는 중심가 숙소가 일찍 예약되고 객실료가 오를 수 있으니 미리 확인하세요.', 'City-centre accommodation can book out early and rates may rise during Oktoberfest, so check options well ahead.', 'オクトーバーフェストの期間は中心部の宿泊施設が早く埋まり、宿泊料金が上がることがあります。早めに確認しましょう。'],
  },
  interlaken: {
    p: [
      ['6~9월 여름', 'June–September (summer)', '6〜9月（夏）', '6~9월에는 고지대 하이킹과 계절 운행 산악 철도를 즐기기 좋습니다. 융프라우요흐 전망은 계절보다 당일 날씨에 좌우되므로 웹캠과 운행 정보를 확인하세요.', 'June to September is a good time for high-altitude hikes and seasonal mountain railways. Views from Jungfraujoch depend on the day\'s weather more than the season, so check webcams and operating information.', '6～9月は高地のハイキングや季節運行の登山鉄道を楽しみやすい時期です。ユングフラウヨッホの眺望は季節より当日の天候に左右されるため、ウェブカメラと運行情報を確認しましょう。'],
      ['12~3월 겨울', 'December–March (winter)', '12〜3月（冬）', '그린델발트·벵겐 일대에서 스키와 썰매를 즐길 수 있습니다.', 'Skiing and sledging around Grindelwald and Wengen.', 'グリンデルワルトやヴェンゲン一帯でスキーやそりが楽しめます。'],
    ],
    x: ['봄·가을에는 일부 산악 철도가 계절 운행 종료나 정비로 쉬는 시기가 있습니다. 이동 전 노선별 운행 일정을 확인하세요.', 'Some mountain railways pause for seasonal closure or maintenance in spring and autumn. Check the operating dates for each route before travelling.', '春と秋には、季節運休や整備のため一部の登山鉄道が休む時期があります。移動前に路線ごとの運行日程を確認しましょう。'],
  },
  vienna: {
    p: [
      ['1~2월 무도회 시즌', 'January–February (ball season)', '1〜2月（舞踏会シーズン）', '오페라 무도회 등 수백 개의 무도회가 열리는 빈 고유의 겨울 문화입니다.', 'Hundreds of balls, including the Opera Ball — a uniquely Viennese winter tradition.', 'オペラ座舞踏会など数百の舞踏会が開かれる、ウィーン独特の冬の文化です。'],
      ['11월 중순~12월 크리스마스 마켓', 'Mid-November–December (Christmas markets)', '11月中旬〜12月（クリスマスマーケット）', '시청 광장을 비롯한 여러 광장에 크리스마스 마켓과 조명이 펼쳐집니다(아래 「크리스마스 마켓」 칸 참고).', 'Christmas markets and lights fill Rathausplatz and several other squares (see the Christmas market section).', '市庁舎広場をはじめ各地の広場にクリスマスマーケットと光の装飾が広がります（「クリスマスマーケット」欄参照）。'],
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
      ['5월~6월 초 프라하의 봄 음악제', 'May–early June (Prague Spring music festival)', '5月〜6月初め（プラハの春音楽祭）', '오랜 전통의 클래식 음악제가 열립니다.', 'The Prague Spring music festival runs from May into early June, bringing a long-standing classical music tradition to the city.', '5月から6月上旬にかけて「プラハの春」音楽祭が開かれ、伝統あるクラシック音楽を楽しめます。'],
      ['봄·가을', 'Spring and autumn', '春・秋', '여름 성수기보다 덜 붐벼 카를교와 구시가지를 걷기 좋습니다.', 'Spring and autumn are generally less crowded than the summer peak, making them good times to walk across Charles Bridge and through Old Town.', '春と秋は夏の繁忙期より比較的混雑が少なく、カレル橋や旧市街の散策に向いています。'],
    ],
  },
  krakow: {
    p: [
      XMAS,
      ['5~6월·9~10월', 'May–June and September–October', '5〜6月・9〜10月', '크라쿠프 구시가지를 걷고 근교 비엘리치카 소금광산과 아우슈비츠 박물관 방문을 계획해 보세요.', 'Walk Kraków\'s Old Town and plan visits to the nearby Wieliczka Salt Mine and Auschwitz museum.', '春と秋はクラクフ旧市街を歩き、近郊のヴィエリチカ岩塩坑やアウシュヴィッツ博物館を訪れる計画を立てましょう。'],
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
      ['6~8월 백야', 'June–August (white nights)', '6〜8月（白夜）', '밤까지 밝은 날에 섬을 둘러보고 사우나와 야외 테라스를 즐기기 좋습니다.', 'Long, light evenings suit island trips, saunas and outdoor terraces.', '6～8月の夏は夜まで明るく、島巡りやサウナ、屋外テラスを楽しめます。'],
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
      ['9월 24일 무렵 라 메르세', 'Around 24 September (La Mercè)', '9月24日頃（ラ・メルセ祭）', '카스텔과 코레폭 등 전통 행사가 열리는 바르셀로나의 대표 축제입니다.', 'Around September 24, La Mercè brings traditional events such as castells and correfoc to Barcelona.', '9月24日ごろのラ・メルセ祭では、カステルやコレフォックなどの伝統行事が行われます。'],
      ['5~6월', 'May–June', '5〜6月', '한여름보다 기온이 온화해 바닷가와 시내를 둘러보기 좋습니다.', 'May–June offers milder temperatures than midsummer for exploring the coast and city.', '5〜6月は真夏より気温が穏やかで、海辺や街歩きを楽しみやすい時期です。'],
    ],
    x: ['7~8월은 기온이 높으니 한낮 야외 일정을 조절하세요.', 'July and August are hot, so plan outdoor activities around the midday heat.', '7〜8月は暑いため、日中の屋外予定を調整しましょう。'],
  },
  rome: {
    p: [
      ['부활절 무렵', 'Around Easter', '復活祭の頃', '바티칸 성베드로 광장에서 교황이 주례하는 부활절 미사가 열립니다. 방문 전 행사 일정을 확인하세요.', 'Around Easter, the pope celebrates Easter Mass in St. Peter’s Square. Check the event schedule before visiting.', '復活祭の時期には、バチカンのサン・ピエトロ広場で教皇によるミサが行われます。訪問前に日程を確認してください。'],
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '유적을 걸어서 둘러보기 좋은 날씨입니다.', 'The best weather for walking between ancient sites.', '遺跡を歩いて巡るのに最適な気候です。'],
    ],
    x: ['7~8월은 더위가 강해 한낮 유적지 도보 관광이 힘들 수 있습니다.', 'July and August bring strong heat, which can make midday walking tours of archaeological sites tiring.', '7〜8月は暑さが厳しく、日中の遺跡巡りは負担になることがあります。'],
  },
  florence: {
    p: [
      ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '미술관과 두오모, 토스카나 근교 여행에 날씨가 가장 좋습니다(가을은 와인 수확철).', 'Ideal for museums, the Duomo and Tuscan day trips (autumn is harvest time).', '美術館やドゥオーモ、トスカーナ近郊の旅に最適です（秋はワインの収穫期）。'],
    ],
    x: ['7~8월은 피렌체 시내가 매우 더울 수 있어 한낮 야외 관람에 주의하세요.', 'Florence can be very hot in July and August, so take care with outdoor sightseeing around midday.', '7～8月のフィレンツェ市内は非常に暑くなることがあるため、日中の屋外観光に注意してください。'],
  },
  venice: {
    p: [
      ['2월 베네치아 카니발', 'February (Venice Carnival)', '2月（ヴェネツィア・カーニバル）', '가면과 화려한 의상의 사람들이 거리를 채우는 세계적인 축제입니다.', 'A world-famous festival of masks and elaborate costumes.', '仮面と豪華な衣装の人々が街を埋める世界的な祭りです。'],
      ['4~6월·9~10월', 'April–June and September–October', '4～6月・9～10月', '베네치아를 걷기 좋은 계절이지만 인기 날짜에는 여전히 혼잡할 수 있습니다. 방문일의 행사와 혼잡 정보를 확인하세요.', 'Pleasant seasons for exploring Venice on foot, though popular dates can still be crowded. Check events and crowd information for your visit.', 'ベネチアを歩いて巡りやすい季節ですが、人気の日程は混雑することもあります。訪問日の行事や混雑情報を確認してください。'],
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
      ['5~6월·9~10월', 'May–June and September–October', '5～6月・9～10月', '한여름보다 여행객이 적고 날씨가 대체로 온화해 구시가지 산책에 좋습니다. 수영 가능 여부는 방문 시기와 해수 상태에 따라 확인하세요.', 'Visitor numbers are lower than in midsummer and the weather is generally pleasant for walking the Old Town. Check sea conditions if you plan to swim.', '真夏より旅行者が少なく、旧市街の散策に適した穏やかな天候の日が多い時期です。泳ぐ予定なら、その時期の海の状態を確認してください。'],
    ],
  },
  istanbul: {
    p: [
      ['4월 튤립 축제', 'April (Tulip Festival)', '4月（チューリップ祭り）', '귈하네 공원을 비롯한 이스탄불 곳곳에서 튤립을 볼 수 있습니다.', 'April\'s Tulip Festival brings tulips to Gülhane Park and other parts of Istanbul.', '4月のチューリップ祭では、ギュルハネ公園をはじめ市内各地でチューリップを楽しめます。'],
      ['9~10월', 'September–October', '9〜10月', '선선해 걷기 좋고 보스포루스 크루즈가 쾌적합니다.', 'Cool walking weather and pleasant Bosphorus cruises.', '涼しく歩きやすく、ボスポラス・クルーズも快適です。'],
    ],
  },
  edinburgh: {
    p: [
      ['8월 축제의 달', 'August (festival month)', '8月（フェスティバルの月）', '프린지·국제 페스티벌·밀리터리 타투 등 여러 축제가 한꺼번에 열려 도시 전체가 무대가 됩니다.', 'The Fringe, International Festival, Military Tattoo and more turn the city into a stage.', 'フリンジや国際フェスティバル、ミリタリー・タトゥーなどが同時に開かれ、街全体が舞台になります。'],
      ['12월 31일 호그머네이', '31 December (Hogmanay)', '12月31日（ホグマニー）', '성 아래 거리 파티와 불꽃놀이로 새해를 맞는 스코틀랜드식 연말 축제입니다.', 'Scotland’s New Year street party and fireworks below the castle.', '城の下のストリートパーティーと花火で新年を迎えるスコットランド流の年越し祭りです。'],
      XMAS,
    ],
    x: ['8월은 에든버러의 주요 축제가 겹치는 성수기입니다. 숙소는 일찍 예약하세요.', 'August is a busy festival season in Edinburgh. Book accommodation early.', '8月のエディンバラは主要な祭典が重なる繁忙期です。宿泊先は早めに予約しましょう。'],
  },
  dresden: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '엘베강 변을 걷고 드레스덴 근교 작센 스위스의 하이킹 코스를 둘러보기 좋습니다.', 'Walk by the Elbe and explore hiking routes in Saxon Switzerland near Dresden.', '晩春から初秋は、エルベ川沿いを歩き、ドレスデン近郊のザクセン・スイスでハイキングを楽しめます。']] },
  nuremberg: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '뉘른베르크 구시가지와 성벽 주변을 산책하고 야외 비어가르텐에 들르기 좋습니다.', 'Walk around Nuremberg\'s Old Town and city walls, then stop at an outdoor beer garden.', '夏はニュルンベルク旧市街と城壁の周辺を散策し、屋外のビアガーデンに立ち寄れます。']] },
  cologne: {
    p: [
      XMAS,
      ['2월 또는 3월 쾰른 카니발', 'February or March (Cologne Carnival)', '2月または3月（ケルン・カーニバル）', '해마다 2월 또는 3월에 열리며 \'장미의 월요일\' 퍼레이드가 대표 행사입니다. 정확한 날짜는 해당 연도 일정을 확인하세요.', 'Cologne Carnival takes place in February or March depending on the year, with the Rose Monday parade as a main event. Check that year\'s dates.', 'ケルンのカーニバルは年によって2月または3月に開かれ、「バラの月曜日」のパレードが主要行事です。その年の日程を確認しましょう。'],
    ],
  },
  strasbourg: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '스트라스부르의 운하 보트를 타고 근교 알자스 와인길 마을을 둘러보세요.', 'In warmer months, take a canal boat in Strasbourg and explore villages along the nearby Alsace Wine Route.', '暖かい季節はストラスブールで運河クルーズを楽しみ、近郊のアルザス・ワイン街道の村々を巡れます。']] },
  colmar: { p: [XMAS, ['9~10월 포도 수확', 'September–October (grape harvest)', '9〜10月（ブドウ収穫）', '알자스 포도 수확철 풍경을 보며 콜마르 근교 와인 마을을 둘러보세요. 와인 축제 날짜는 마을별로 확인하세요.', 'Explore wine villages near Colmar during the Alsace grape harvest. Check each village\'s wine-festival dates.', '9～10月はアルザスのブドウ収穫期の風景を見ながら、コルマール近郊のワイン村を巡れます。ワイン祭りの日程は村ごとに確認しましょう。']] },
  salzburg: { p: [XMAS, ['7~8월 잘츠부르크 음악제', 'July–August (Salzburg Festival)', '7〜8月（ザルツブルク音楽祭）', '세계적인 클래식 음악·오페라 축제입니다(공연 예매 필수).', 'A world-class festival of music and opera (book performances ahead).', '世界的なクラシック音楽・オペラの祭典です（公演の予約必須）。']] },
  zagreb: { p: [XMAS, ['4~6월·9~10월', 'April–June and September–October', '4〜6月・9〜10月', '자그레브의 카페 테라스를 즐기고 플리트비체 국립공원으로 별도 여행을 계획해 보세요.', 'Enjoy Zagreb\'s café terraces and plan a separate trip to Plitvice Lakes National Park.', '春と秋はザグレブのカフェテラスを楽しみ、プリトヴィツェ湖群国立公園への別の行程も計画できます。']] },
  rovaniemi: {
    p: [
      ['12월 크리스마스', 'December (Christmas)', '12月（クリスマス）', '로바니에미의 산타클로스 마을에서 크리스마스 장식과 겨울 활동을 즐길 수 있습니다. 숙소와 체험은 미리 예약하세요.', 'Enjoy Christmas decorations and winter activities at Santa Claus Village in Rovaniemi. Book accommodation and activities ahead.', '12月はロヴァニエミのサンタクロース村でクリスマスの装飾や冬の体験を楽しめます。宿泊と体験は早めに予約しましょう。'],
      ['1~3월 오로라·설원', 'January–March (aurora and snow)', '1〜3月（オーロラ・雪原）', '설원에서 허스키 썰매를 즐기고, 맑고 어두운 밤에는 오로라 관측을 시도해 보세요.', 'Try a husky sled ride in the snow and look for the northern lights on clear, dark nights.', '1～3月は雪原でハスキーそりを楽しみ、晴れて暗い夜にはオーロラ観測を試せます。'],
    ],
  },
  tallinn: { p: [XMAS, ['6~8월', 'June–August', '6〜8月', '낮이 길고 구시가지 축제와 야외 테라스가 활기찹니다.', 'Long days, old-town festivals and lively terraces.', '日が長く、旧市街の祭りや屋外テラスがにぎわいます。']] },
  frankfurt: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '마인강 변을 산책하고 야외에서 프랑크푸르트의 사과 와인을 즐겨 보세요.', 'In warmer months, walk along the Main River and try Frankfurt apple wine outdoors.', '暖かい季節はマイン川沿いを散策し、屋外でフランクフルトのアップルワインを楽しめます。']] },
  berlin: { p: [XMAS, ['5~9월', 'May–September', '5〜9月', '베를린의 공원과 슈프레강 변 야외 공간을 즐기기 좋습니다.', 'In warmer months, enjoy Berlin\'s parks and outdoor spots along the River Spree.', '暖かい季節はベルリンの公園やシュプレー川沿いの屋外スポットを楽しめます。']] },
  zurich: { p: [['11월 말~12월 크리스마스 마켓', 'Late November–December (Christmas markets)', '11月末〜12月（クリスマスマーケット）', '중앙역 홀 안의 실내 마켓을 비롯해 시내 곳곳에 크리스마스 마켓이 열리고 도시가 조명으로 빛납니다(아래 「크리스마스 마켓」 칸 참고).', 'An indoor market fills the main station hall and more markets and lights spread through town (see the Christmas market section).', '中央駅構内の屋内マーケットをはじめ市内各所にクリスマスマーケットが開かれ、街が光に包まれます（「クリスマスマーケット」欄参照）。'], ['6~9월', 'June–September', '6〜9月', '취리히 호수와 강변 수영장을 즐기고, 날씨와 교통편을 확인해 근교 산악 여행을 계획하세요.', 'Swim at Lake Zurich or the riverside pools, and check weather and transport before a mountain outing.', '夏はチューリヒ湖や川沿いの水浴場を楽しめます。近郊の山へ行く際は天候と交通を確認しましょう。']] },
  basel: { p: [XMAS, ['2월 또는 3월 바젤 파스나흐트', 'February or March (Basel Fasnacht)', '2月または3月（バーゼル・ファスナハト）', '해마다 2월 또는 3월에 열리며 월요일 새벽 4시 \'모르게슈트라이히\'로 시작합니다. 유네스코 무형유산에도 등재돼 있습니다.', 'Basel Fasnacht falls in February or March, depending on the year, and begins with the 4 a.m. Monday Morgestraich. It is UNESCO-listed intangible heritage.', 'バーゼルのファスナハトは年によって2月または3月に開かれ、月曜の午前4時に「モルゲシュトライヒ」で始まります。ユネスコ無形文化遺産にも登録されています。']] },
  riga: { p: [XMAS, ['6월 하지(야니)', 'June (Midsummer, Jāņi)', '6月（夏至祭ヤーニ）', '라트비아 최대 명절로 화관을 쓰고 모닥불을 피웁니다.', 'Latvia’s biggest holiday, with flower crowns and bonfires.', 'ラトビア最大の祝日で、花冠をかぶりかがり火を焚きます。']] },
  gdansk: { p: [XMAS, ['7~8월 성 도미니크 시장', 'July–August (St Dominic’s Fair)', '7〜8月（聖ドミニク市）', '수백 년 전통의 대형 여름 시장이 구시가지에 열립니다.', 'A centuries-old summer fair fills the old town.', '数百年の伝統がある大規模な夏市が旧市街に開かれます。']] },
  bruges: { p: [XMAS, ['4~9월', 'April–September', '4〜9月', '브뤼헤 운하 보트가 정기 운항하며, 자전거로 근교 담머 같은 마을을 둘러볼 수 있습니다.', 'Canal boats run regularly in Bruges, and you can cycle to nearby villages such as Damme.', '春から秋はブルージュの運河ボートが定期運航し、自転車で近郊のダンメなどの村を巡れます。']] },
  lyon: {
    p: [
      ['12월 5~8일 빛의 축제(2026)', '5–8 December (Festival of Lights, 2026)', '12月5〜8日（光の祭典、2026年）', '대성당과 광장, 강변 건물에 빛 작품이 펼쳐지고, 창가에 촛불을 켜는 리옹의 전통 축제입니다.', 'Light installations cover the cathedral, squares and riverfronts in Lyon’s traditional festival of candles in the windows.', '大聖堂や広場、川沿いの建物に光の作品が広がり、窓辺にろうそくを灯すリヨン伝統の祭りです。'],
      ['봄·가을', 'Spring and autumn', '春・秋', '구시가지와 푸르비에르 언덕을 걷고 부숑에서 리옹 요리를 즐기기 좋은 날씨입니다.', 'Good weather for walking the old town and Fourvière hill and eating at a bouchon.', '旧市街やフルヴィエールの丘を歩き、ブションでリヨン料理を楽しむのに向いた気候です。'],
    ],
    x: ['빛의 축제 기간에는 숙소가 일찍 차고 중심가가 매우 붐비니 미리 예약하세요.', 'During the Festival of Lights rooms fill early and the centre is very crowded; book ahead.', '光の祭典の期間は宿が早く埋まり中心部は大変混むので、早めに予約しましょう。'],
  },
};
