type Lang = 'ko' | 'en' | 'ja';

const LABELS: Record<Lang, Array<[RegExp, string]>> = {
  ko: [],
  en: [
    [/성인 1인/g, '1 adult'], [/아동 1인|어린이 1인|소인 1인/g, '1 child'], [/외국인 1인/g, '1 foreign visitor'],
    [/외국인/g, 'foreign visitor'], [/비거주/g, 'non-resident'], [/미성년자/g, 'minor'], [/초등학생/g, 'elementary school student'], [/청소년/g, 'teen'],
    [/어린이|아동|소인/g, 'child'], [/성인|대인/g, 'adult'], [/영아/g, 'infant'], [/유아/g, 'toddler'],
    [/학생/g, 'student'], [/우대/g, 'concession'], [/일반/g, 'standard'], [/경로/g, 'senior'],
    [/인원수 미표기/g, 'party size not stated'], [/용량 표기 없음|용량 미표기/g, 'size not stated'],
    [/개수 미표기/g, 'quantity not stated'], [/한 끼|식사|끼/g, 'meal'], [/입장권|입장/g, 'admission'],
    [/시작가/g, 'starting price'], [/기본 운임|기본요금|기본 요금/g, 'base fare'], [/미터/g, 'meter'], [/초기요금/g, 'initial fare'],
    [/승차/g, 'ride'], [/영업종료까지/g, 'until closing'], [/당일/g, 'same day'], [/종일/g, 'full day'],
    [/순환/g, 'round trip'], [/왕복/g, 'round trip'], [/편도|한 방향/g, 'one way'], [/케이블카 이용권/g, 'cable-car ticket'],
    [/차량 1대/g, 'per vehicle'], [/택시 1회 최소 운임/g, 'minimum taxi fare (one ride)'], [/최소/g, 'minimum'],
    [/adult 1 person/g, '1 adult'], [/child 1 person/g, '1 child'], [/foreign visitor 1 person/g, '1 foreign visitor'],
    [/택시/g, 'taxi'], [/운임/g, 'fare'], [/구간/g, 'segment'], [/첫 /g, 'first '], [/포함/g, 'included'], [/또는/g, 'or'], [/일부/g, 'partial'],
    [/약 /g, 'about '], [/전(?=\s|$)/g, 'before'], [/방문/g, 'visit'], [/투어/g, 'tour'], [/이용권/g, 'pass'], [/환산/g, 'equivalent to '],
    [/주문/g, 'order'], [/메뉴/g, 'menu item'], [/싱글/g, 'single'], [/스몰|소\)/g, 'small'], [/중\)/g, 'medium'],
    [/사이즈/g, 'size'], [/세 /g, ' years '], [/세\)/g, ' years old)'], [/세$/g, ' years'], [/구역/g, 'zone'],
    [/피스/g, 'pieces'], [/조각/g, 'piece'], [/봉/g, 'bag'], [/장/g, 'sheets'], [/잔/g, 'glass'], [/병/g, 'bottle'], [/알/g, 'pieces'],
    [/차량/g, 'vehicle'], [/세트/g, 'set'], [/전 주문/g, 'before ordering'], [/최대/g, 'up to'], [/탑승/g, 'ride'], [/이내/g, 'or less'],
    [/입도/g, 'island entry'], [/출도/g, 'island departure'], [/콤보/g, 'combo'], [/파인트/g, 'pint'], [/글라스/g, 'glass'],
    [/샌드위치/g, 'sandwich'], [/시작요금/g, 'starting fare'], [/최저가/g, 'lowest price'], [/바퀴/g, 'loop'], [/컵/g, 'cup'],
    [/용량 미확인/g, 'size unconfirmed'], [/학령/g, 'school-age'], [/작은/g, 'small'], [/큰/g, 'large'],
    [/(?<!\d)대(?=\)|\s|$)/g, 'large'], [/소(?=\)|\s|$)/g, 'small'],
    [/(\d+)glass/g, '$1 glass'], [/(\d+)bottle/g, '$1 bottle'],
    [/(\d+)일권/g, '$1-day pass'], [/(\d+)시간/g, '$1 hours'], [/(\d+)분/g, '$1 min'],
    [/(\d+)회권/g, '$1-ride ticket'], [/(\d+)인분/g, '$1 serving'], [/(\d+)인/g, '$1 person'], [/(\d+)회/g, '$1 ride'],
    [/(\d+)잔/g, '$1 glass'], [/(\d+)병/g, '$1 bottle'], [/(\d+)캔/g, '$1 can'], [/(\d+)개/g, '$1 item'], [/(\d+)대/g, '$1 vehicle'],
    [/(\d+)그릇/g, '$1 bowl'], [/(\d+)접시/g, '$1 plate'], [/(\d+)세트/g, '$1 set'], [/(\d+)상자/g, '$1 box'],
    [/(\d+)팩|팩/g, '$1 pack'], [/(\d+)판/g, '$1 pie'], [/(\d+)마리/g, '$1 whole'], [/(\d+)꼬치/g, '$1 skewers'],
    [/(\d+)일/g, '$1 day'],
  ],
  ja: [
    [/외국인/g, '外国人'], [/비거주/g, '非居住者'], [/미성년자/g, '未成年者'], [/초등학생/g, '小学生'], [/청소년/g, '青少年'],
    [/어린이|아동|소인/g, '子ども'], [/성인|대인/g, '大人'], [/영아/g, '乳児'], [/유아/g, '幼児'],
    [/학생/g, '学生'], [/우대/g, '割引対象'], [/일반/g, '通常'], [/경로/g, 'シニア'],
    [/인원수 미표기/g, '人数の記載なし'], [/용량 표기 없음|용량 미표기/g, '容量の記載なし'],
    [/개수 미표기/g, '個数の記載なし'], [/한 끼|식사|끼/g, '食'], [/입장권|입장/g, '入場券'],
    [/시작가/g, '開始価格'], [/기본 운임|기본요금|기본 요금/g, '基本運賃'], [/미터/g, 'メーター'], [/초기요금/g, '初乗り運賃'],
    [/승차/g, '乗車'], [/영업종료까지/g, '営業終了まで'], [/당일/g, '当日'], [/종일/g, '終日'],
    [/순환/g, '循環'], [/왕복/g, '往復'], [/편도|한 방향/g, '片道'], [/케이블카 이용권/g, 'ケーブルカー乗車券'],
    [/차량 1대/g, '車両1台分'], [/택시 1회 최소 운임/g, 'タクシー最低運賃（1回）'], [/최소/g, '最低'],
    [/택시/g, 'タクシー'], [/운임/g, '運賃'], [/구간/g, '区間'], [/첫 /g, '最初の'], [/포함/g, '含む'], [/또는/g, 'または'], [/일부/g, '一部'],
    [/약 /g, '約'], [/전(?=\s|$)/g, '前'], [/방문/g, '訪問'], [/투어/g, 'ツアー'], [/이용권/g, '乗車券'], [/환산/g, '換算'],
    [/주문/g, '注文'], [/메뉴/g, 'メニュー'], [/싱글/g, 'シングル'], [/스몰|소\)/g, '小'], [/중\)/g, '中'],
    [/사이즈/g, 'サイズ'], [/세 /g, '歳 '], [/세\)/g, '歳)'], [/세$/g, '歳'], [/구역/g, 'エリア'],
    [/피스/g, 'ピース'], [/조각/g, '切れ'], [/봉/g, '袋'], [/장/g, '枚'], [/잔/g, '杯'], [/병/g, '本'], [/알/g, '個'],
    [/차량/g, '車両'], [/세트/g, 'セット'], [/전 주문/g, '注文前'], [/최대/g, '最大'], [/탑승/g, '乗車'], [/이내/g, '以内'],
    [/입도/g, '島への入島'], [/출도/g, '島からの出島'], [/콤보/g, 'コンボ'], [/파인트/g, 'パイント'], [/글라스/g, 'グラス'],
    [/샌드위치/g, 'サンドイッチ'], [/시작요금/g, '初乗り運賃'], [/최저가/g, '最安値'], [/바퀴/g, '周'], [/컵/g, 'カップ'],
    [/용량 미확인/g, '容量未確認'], [/학령/g, '学齢'], [/작은/g, '小'], [/큰/g, '大'],
    [/(?<!\d)대(?=\)|\s|$)/g, '大'], [/소(?=\)|\s|$)/g, '小'],
    [/(\d+)glass/g, '$1杯'], [/(\d+)bottle/g, '$1本'],
    [/(\d+)일권/g, '$1日券'], [/(\d+)시간/g, '$1時間'], [/(\d+)분/g, '$1分'],
    [/(\d+)회권/g, '$1回券'], [/(\d+)인분/g, '$1人前'], [/(\d+)인/g, '$1人'], [/(\d+)회/g, '$1回'],
    [/(\d+)잔/g, '$1杯'], [/(\d+)병/g, '$1本'], [/(\d+)캔/g, '$1缶'], [/(\d+)개/g, '$1個'], [/(\d+)대/g, '$1台'],
    [/(\d+)그릇/g, '$1杯'], [/(\d+)접시/g, '$1皿'], [/(\d+)세트/g, '$1セット'], [/(\d+)상자/g, '$1箱'],
    [/(\d+)팩|팩/g, '$1パック'], [/(\d+)판/g, '$1枚'], [/(\d+)마리/g, '$1尾'], [/(\d+)꼬치/g, '$1串'],
    [/(\d+)일/g, '$1日'],
  ],
};

/** Localize the Korean source unit while preserving its numbers, sizes, and fare conditions. */
export function localizeUnit(lang: Lang, unit: string): string {
  if (lang === 'ko') return unit;
  const localized = LABELS[lang].reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), unit)
    .replace(/\s*\/\s*/g, ' / ')
    .replace(/\b1 hours\b/g, '1 hour')
    .replace(/\s+/g, ' ')
    .trim();
  return lang === 'ja' ? localized.replace(/([\u3040-\u30ff\u3400-\u9fff])\s+(?=\d)/g, '$1') : localized;
}
