/**
 * 일본어 도시·나라 이름. 데이터(엑셀)에는 한글·영문 이름만 있어 화면용으로 여기서 보탠다.
 * 표기는 일본 외무성·관광청·각 관광청 일본어 사이트에서 쓰는 이름을 따랐다(docs/i18n-ja-glossary.md).
 */
export const CITY_JA: Record<string, string> = {
  tokyo: '東京', osaka: '大阪', fukuoka: '福岡', sapporo: '札幌',
  bangkok: 'バンコク', 'da-nang': 'ダナン', 'nha-trang': 'ニャチャン', 'phu-quoc': 'フーコック',
  taipei: '台北', singapore: 'シンガポール', 'hong-kong': '香港', 'kuala-lumpur': 'クアラルンプール', bali: 'バリ島',
  paris: 'パリ', london: 'ロンドン', barcelona: 'バルセロナ', rome: 'ローマ', 'new-york': 'ニューヨーク',
  istanbul: 'イスタンブール', dubai: 'ドバイ', shanghai: '上海', cebu: 'セブ',
  seoul: 'ソウル', busan: '釜山', jeju: '済州島',
};

/** 영문 나라 이름 → 일본어 */
export const COUNTRY_JA: Record<string, string> = {
  Japan: '日本', Thailand: 'タイ', Vietnam: 'ベトナム', Taiwan: '台湾', Singapore: 'シンガポール', France: 'フランス',
  'United Kingdom': 'イギリス', Indonesia: 'インドネシア', 'Hong Kong': '香港', Malaysia: 'マレーシア',
  'United Arab Emirates': 'アラブ首長国連邦', Spain: 'スペイン', Italy: 'イタリア', 'United States': 'アメリカ',
  Türkiye: 'トルコ', China: '中国', 'South Korea': '韓国', Philippines: 'フィリピン',
};
