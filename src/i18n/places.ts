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
  kyoto: '京都', okinawa: '沖縄', nagoya: '名古屋', gangneung: '江陵', gyeongju: '慶州', yeosu: '麗水', jeonju: '全州',
  hanoi: 'ハノイ', 'ho-chi-minh-city': 'ホーチミン', 'chiang-mai': 'チェンマイ', guam: 'グアム', sydney: 'シドニー', prague: 'プラハ',
  macau: 'マカオ', honolulu: 'ホノルル', saipan: 'サイパン', ulaanbaatar: 'ウランバートル', vienna: 'ウィーン', budapest: 'ブダペスト',
  munich: 'ミュンヘン', interlaken: 'インターラーケン', lisbon: 'リスボン',
  'siem-reap': 'シェムリアップ', 'luang-prabang': 'ルアンパバーン', vancouver: 'バンクーバー', harbin: 'ハルビン', lyon: 'リヨン', 'quebec-city': 'ケベック・シティ', porto: 'ポルト', seville: 'セビリア', milan: 'ミラノ', lucerne: 'ルツェルン', granada: 'グラナダ', valencia: 'バレンシア', bordeaux: 'ボルドー', hamburg: 'ハンブルク', queenstown: 'クイーンズタウン', innsbruck: 'インスブルック', marseille: 'マルセイユ', tainan: '台南', warsaw: 'ワルシャワ', ghent: 'ヘント', geneva: 'ジュネーブ', antwerp: 'アントワープ', turin: 'トリノ', 'gold-coast': 'ゴールドコースト', brisbane: 'ブリスベン', 'washington-dc': 'ワシントンD.C.', boston: 'ボストン', toronto: 'トロント', chicago: 'シカゴ', montreal: 'モントリオール', seattle: 'シアトル', perth: 'パース', manchester: 'マンチェスター', christchurch: 'クライストチャーチ', glasgow: 'グラスゴー', 'san-diego': 'サンディエゴ', adelaide: 'アデレード', liverpool: 'リバプール', heidelberg: 'ハイデルベルク', bilbao: 'ビルバオ', toulouse: 'トゥールーズ', cairns: 'ケアンズ', verona: 'ヴェローナ', thessaloniki: 'テッサロニキ', chengdu: '成都', 'mexico-city': 'メキシコシティ', philadelphia: 'フィラデルフィア', 'new-orleans': 'ニューオーリンズ', auckland: 'オークランド',
  sokcho: '束草', tongyeong: '統営', daegu: '大邱', incheon: '仁川', kobe: '神戸', hiroshima: '広島', kanazawa: '金沢', hakodate: '函館',
  phuket: 'プーケット', pattaya: 'パタヤ', 'da-lat': 'ダラット', kaohsiung: '高雄', boracay: 'ボラカイ島', qingdao: '青島', beijing: '北京',
  amsterdam: 'アムステルダム', athens: 'アテネ', dubrovnik: 'ドゥブロヴニク', 'los-angeles': 'ロサンゼルス', 'las-vegas': 'ラスベガス',
  nara: '奈良', taichung: '台中', 'kota-kinabalu': 'コタキナバル', zhangjiajie: '張家界', melbourne: 'メルボルン', florence: 'フィレンツェ',
  venice: 'ヴェネツィア', madrid: 'マドリード', nice: 'ニース', 'san-francisco': 'サンフランシスコ', almaty: 'アルマトイ', tashkent: 'タシケント',
  tbilisi: 'トビリシ', cancun: 'カンクン',
  copenhagen: 'コペンハーゲン', stockholm: 'ストックホルム', helsinki: 'ヘルシンキ', krakow: 'クラクフ', dublin: 'ダブリン', brussels: 'ブリュッセル', cairo: 'カイロ', reykjavik: 'レイキャビク',
  dresden: 'ドレスデン', nuremberg: 'ニュルンベルク', cologne: 'ケルン', strasbourg: 'ストラスブール', colmar: 'コルマール', salzburg: 'ザルツブルク', zagreb: 'ザグレブ', rovaniemi: 'ロヴァニエミ', tallinn: 'タリン', edinburgh: 'エディンバラ', frankfurt: 'フランクフルト', berlin: 'ベルリン', zurich: 'チューリッヒ', basel: 'バーゼル', riga: 'リガ', gdansk: 'グダニスク', bruges: 'ブルージュ',
};

/** 영문 나라 이름 → 일본어 */
export const COUNTRY_JA: Record<string, string> = {
  Japan: '日本', Thailand: 'タイ', Vietnam: 'ベトナム', Taiwan: '台湾', Singapore: 'シンガポール', France: 'フランス',
  'United Kingdom': 'イギリス', Indonesia: 'インドネシア', 'Hong Kong': '香港', Malaysia: 'マレーシア',
  'United Arab Emirates': 'アラブ首長国連邦', Spain: 'スペイン', Italy: 'イタリア', 'United States': 'アメリカ',
  Türkiye: 'トルコ', China: '中国', 'South Korea': '韓国', Philippines: 'フィリピン',
  Australia: 'オーストラリア', Czechia: 'チェコ', Guam: 'グアム',
  Macau: 'マカオ', Hawaii: 'ハワイ', Saipan: 'サイパン', Mongolia: 'モンゴル', Austria: 'オーストリア', Hungary: 'ハンガリー',
  Germany: 'ドイツ', Switzerland: 'スイス', Portugal: 'ポルトガル', Cambodia: 'カンボジア', Laos: 'ラオス', Canada: 'カナダ', 'New Zealand': 'ニュージーランド', Netherlands: 'オランダ', Greece: 'ギリシャ', Croatia: 'クロアチア', Kazakhstan: 'カザフスタン', Uzbekistan: 'ウズベキスタン', Georgia: 'ジョージア', Mexico: 'メキシコ', Denmark: 'デンマーク', Sweden: 'スウェーデン', Finland: 'フィンランド', Poland: 'ポーランド', Ireland: 'アイルランド', Belgium: 'ベルギー', Egypt: 'エジプト', Iceland: 'アイスランド', Estonia: 'エストニア', Latvia: 'ラトビア',
};
