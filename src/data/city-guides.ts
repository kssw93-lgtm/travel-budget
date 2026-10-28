/**
 * 도시 가이드의 "볼거리·현지 팁"(가격이 아닌 안내 글). 도시마다 그 도시에만 있는 것을 짧게 적는다.
 * 원칙: 관광청·운영사 공식 안내를 근거로 하고(source), 금액은 쓰지 않는다(금액은 가격 원장에서만 나온다).
 * 근거 URL 이 없는 항목은 Claude 초안이며, GPT 할 일 R 에서 공식 출처로 확인·교체한다.
 * 데이터가 없는 도시는 화면에서 이 구역을 그리지 않는다.
 */
import { NOTES_1, type Compact } from './city-guides-1';
import { NOTES_2 } from './city-guides-2';
import { NOTES_3 } from './city-guides-3';
import { NOTES_4, NOTES_EXTRA } from './city-guides-4';
import { NOTES_5 } from './city-guides-5';
import { NOTES_6 } from './city-guides-6';
import { NOTES_7 } from './city-guides-7';
import { NOTES_8 } from './city-guides-8';
import { NOTES_9 } from './city-guides-9';
export interface Localized {
  ko: string;
  en: string;
  ja: string;
}

export interface CityGuideNote {
  /** 놓치지 말 볼거리(장소 이름 + 한 줄) */
  highlights: Array<{ name: Localized; text: Localized }>;
  /** 그 도시에서만 통하는 실용 팁 */
  tips: Localized[];
  /** 근거(관광청·운영사 공식 안내). 없으면 초안 */
  source?: { name: string; url: string };
}

const BASE: Record<string, CityGuideNote> = {
  tokyo: {
    highlights: [
      {
        name: { ko: '아사쿠사 센소지', en: 'Senso-ji, Asakusa', ja: '浅草・浅草寺' },
        text: {
          ko: '도쿄에서 가장 오래된 절. 가미나리몬에서 본당까지 이어지는 나카미세 거리에 군것질거리가 모여 있습니다.',
          en: "Tokyo's oldest temple, reached through the snack stalls of Nakamise Street from the Kaminarimon gate.",
          ja: '東京最古の寺。雷門から本堂まで続く仲見世通りに食べ歩きの店が並びます。',
        },
      },
      {
        name: { ko: '시부야 스크램블 교차로', en: 'Shibuya Scramble Crossing', ja: '渋谷スクランブル交差点' },
        text: {
          ko: '신호가 바뀌면 사방에서 사람이 한꺼번에 건너는 교차로. 주변 건물 위층에서 내려다보면 더 잘 보입니다.',
          en: 'Crowds cross from every direction at once when the lights change; best seen from the buildings above.',
          ja: '信号が変わると四方から一斉に人が渡る交差点。周りのビルの上から見下ろすのがおすすめです。',
        },
      },
      {
        name: { ko: '쓰키지 장외시장', en: 'Tsukiji Outer Market', ja: '築地場外市場' },
        text: {
          ko: '시장 기능이 도요스로 옮겨 간 뒤에도 남은 상점가. 해산물 덮밥과 달걀말이 같은 길거리 음식을 맛볼 수 있습니다.',
          en: 'The shopping streets that stayed after the wholesale market moved to Toyosu; good for seafood bowls and street snacks.',
          ja: '卸売市場が豊洲へ移った後も残る商店街。海鮮丼や玉子焼きなどの食べ歩きが楽しめます。',
        },
      },
      {
        name: { ko: '메이지 신궁', en: 'Meiji Jingu', ja: '明治神宮' },
        text: {
          ko: '하라주쿠역 바로 옆, 전국에서 기증한 나무로 만든 넓은 숲속의 신사입니다. 도심 한가운데서 조용히 산책하기 좋습니다.',
          en: 'A shrine in a vast forest of trees donated from across Japan, right beside Harajuku Station — a quiet walk in the middle of the city.',
          ja: '原宿駅のすぐそば、全国から献木された広大な森の中にある神社です。都心で静かに散策できます。',
        },
      },
      {
        name: { ko: '신주쿠교엔', en: 'Shinjuku Gyoen National Garden', ja: '新宿御苑' },
        text: {
          ko: '영국식 풍경 정원·프랑스식 정원·일본 정원이 한곳에 모인 국민 정원으로, 봄 벚꽃과 가을 단풍 명소입니다.',
          en: 'A national garden combining English landscape, French formal and Japanese gardens — a favourite for spring blossoms and autumn colour.',
          ja: 'イギリス風景式・フランス整形式・日本庭園が一つになった国民公園で、春の桜と秋の紅葉の名所です。',
        },
      },
    ],
    tips: [
      {
        ko: '도쿄 메트로와 도에이 지하철은 운영사가 달라서 서로 갈아타면 요금이 따로 붙습니다. 하루에 여러 번 타면 두 회사 공통 1일권이 유리합니다.',
        en: 'Tokyo Metro and Toei Subway are separate operators, so transferring between them adds a fare. If you ride a lot, a combined day pass usually pays off.',
        ja: '東京メトロと都営地下鉄は運営会社が違うため、乗り継ぐと運賃が別にかかります。たくさん乗る日は共通1日券がお得です。',
      },
      {
        ko: '교통카드(Suica·PASMO)는 지하철·버스뿐 아니라 편의점과 자판기 결제에도 쓸 수 있습니다.',
        en: 'IC cards (Suica, PASMO) also work at convenience stores and vending machines, not just on trains and buses.',
        ja: '交通系ICカード（Suica・PASMO）は電車やバスだけでなく、コンビニや自販機の支払いにも使えます。',
      },
      {
        ko: '나리타공항 철도역은 제1터미널 지하 1층과 제2터미널 본관 지하 1층에 있습니다. 제3터미널에서는 제2·3터미널역까지 연결 통로나 무료 셔틀을 이용하세요. 스카이라이너는 닛포리·우에노, 나리타 익스프레스는 도쿄·시부야·신주쿠 방면으로 갑니다.',
        en: 'Narita rail stations are on B1 at Terminal 1 and the main building of Terminal 2. From Terminal 3, use the access corridor or free shuttle to the Terminal 2·3 station. The Skyliner serves Nippori and Ueno; the Narita Express serves Tokyo, Shibuya and Shinjuku.',
        ja: '成田空港の鉄道駅は第1ターミナルと第2ターミナル本館の地下1階にあります。第3ターミナルから第2・3ターミナル駅へは連絡通路または無料シャトルを利用します。スカイライナーは日暮里・上野、成田エクスプレスは東京・渋谷・新宿方面へ向かいます。',
      },
      {
        ko: '하네다공항에서는 도착층의 안내 표지를 따라 게이큐선 또는 도쿄 모노레일 역으로 이동하세요. 모노레일은 하마마쓰초역까지 가며, 역 안내도에서 제1·2·3터미널 승강장 위치를 확인할 수 있습니다.',
        en: 'At Haneda, follow the arrival-level signs to the Keikyu Line or Tokyo Monorail station. The monorail runs to Hamamatsucho; its station guide shows the platforms for Terminals 1, 2 and 3.',
        ja: '羽田空港では到着階の案内に従い、京急線または東京モノレールの駅へ進みます。モノレールは浜松町駅へ運行し、駅案内図で第1・2・3ターミナルの乗り場を確認できます。',
      },
      {
        ko: '나리타 제3터미널에서 철도를 탈 때는 공항 표지의 「철도역」을 따라 제2터미널 본관 지하 1층의 역으로 이동하세요. 걷기 어려우면 터미널 셔틀 승강장 안내를 확인하세요.',
        en: 'To take a train from Narita Terminal 3, follow the airport signs for the railway station to the B1 station in Terminal 2’s main building. If you prefer not to walk, check the terminal shuttle stop information.',
        ja: '成田第3ターミナルから鉄道に乗る場合は、空港内の「鉄道駅」案内に従い、第2ターミナル本館地下1階の駅へ向かいます。歩くのが難しい場合はターミナルシャトルの乗り場を確認してください。',
      },
      {
        ko: '노선 구조: 도쿄의 전철은 JR(야마노테선 등), 도쿄 메트로, 도에이 지하철, 사철이 각각 다른 회사입니다. 교통카드 한 장으로 모두 탈 수 있고, 역마다 노선 기호와 번호(예: G09)가 붙어 있어 이를 보고 갈아타면 헷갈리지 않습니다.',
        en: 'How the network works: JR (including the Yamanote loop), Tokyo Metro, Toei Subway and private railways are separate companies. One IC card works on all of them, and every station has a line letter and number (e.g. G09) to follow when transferring.',
        ja: '路線のしくみ：東京の電車はJR(山手線など)、東京メトロ、都営地下鉄、私鉄がそれぞれ別の会社です。交通系ICカード1枚ですべて乗れ、駅ごとに路線記号と番号(例：G09)が付いているので、それを見て乗り換えると迷いません。',
      },
      {
        ko: '도시 간 이동: 도쿄역·시나가와역에서 도카이도 신칸센을 타면 나고야 1시간 40분 안팎, 교토 2시간 15분 안팎, 신오사카 2시간 30분 안팎입니다(가장 빠른 노조미 기준).',
        en: 'Between cities: the Tokaido Shinkansen from Tokyo or Shinagawa reaches Nagoya in about 1 hr 40, Kyoto in about 2 hr 15 and Shin-Osaka in about 2 hr 30 (fastest Nozomi).',
        ja: '都市間の移動：東京駅・品川駅から東海道新幹線で名古屋まで約1時間40分、京都まで約2時間15分、新大阪まで約2時間30分です(最速ののぞみ)。',
      },
      {
        ko: '도쿄국립박물관은 월요일에 휴관하며, 월요일이 공휴일이면 다음 평일에 쉽니다. 방문 전 공식 운영일을 확인하세요.',
        en: 'The Tokyo National Museum is usually closed on Mondays; when Monday is a public holiday, it closes on the following weekday. Check its official calendar before visiting.',
        ja: '東京国立博物館は通常月曜日が休館日です。月曜日が祝日の場合は翌平日が休館となるため、来館前に公式カレンダーを確認してください。',
      },
    ],
  },
  osaka: {
    highlights: [
      {
        name: { ko: '도톤보리', en: 'Dotonbori', ja: '道頓堀' },
        text: {
          ko: '글리코 간판과 운하를 따라 타코야키·오코노미야키 가게가 줄지어 있는 오사카 먹거리 거리입니다.',
          en: "Osaka's food street along the canal, lined with takoyaki and okonomiyaki shops under the Glico sign.",
          ja: 'グリコの看板と運河沿いに、たこ焼きやお好み焼きの店が並ぶ大阪の食い倒れの街です。',
        },
      },
      {
        name: { ko: '오사카성', en: 'Osaka Castle', ja: '大阪城' },
        text: {
          ko: '넓은 공원 안에 천수각이 서 있습니다. 공원 산책은 무료이고, 천수각 안 전시관만 입장료가 있습니다.',
          en: 'The main tower stands in a large park; walking the park is free and only the tower museum charges admission.',
          ja: '広い公園の中に天守閣がそびえます。公園の散策は無料で、天守閣の展示だけが有料です。',
        },
      },
      {
        name: { ko: '신세카이·쓰텐카쿠', en: 'Shinsekai and Tsutenkaku', ja: '新世界・通天閣' },
        text: {
          ko: '쓰텐카쿠 타워 아래 옛 번화가. 쿠시카쓰 가게가 모여 있어 저녁에 가기 좋습니다.',
          en: 'An old entertainment district below Tsutenkaku Tower, packed with kushikatsu shops; best in the evening.',
          ja: '通天閣の下に広がる昔ながらの繁華街。串カツ店が集まり、夜に訪れるのがおすすめです。',
        },
      },
      {
        name: { ko: '우메다 스카이빌딩 공중정원', en: 'Umeda Sky Building Floating Garden', ja: '梅田スカイビル 空中庭園' },
        text: {
          ko: '두 빌딩을 잇는 꼭대기 전망대로, 옥상 회랑을 한 바퀴 돌며 오사카 야경을 볼 수 있습니다.',
          en: 'The rooftop observatory linking two towers; walk the open-air ring for night views over Osaka.',
          ja: '二つのビルをつなぐ屋上展望台で、屋外回廊を一周しながら大阪の夜景を楽しめます。',
        },
      },
      {
        name: { ko: '구로몬 시장', en: 'Kuromon Market', ja: '黒門市場' },
        text: {
          ko: '「오사카의 부엌」으로 불리는 오래된 시장으로, 해산물·과일을 그 자리에서 맛볼 수 있습니다.',
          en: 'The old market known as “Osaka’s kitchen”, where you can eat seafood and fruit on the spot.',
          ja: '「大阪の台所」と呼ばれる歴史ある市場で、海鮮や果物をその場で味わえます。',
        },
      },
    ],
    tips: [
      {
        ko: '쿠시카쓰 가게의 소스는 여러 손님이 함께 쓰기 때문에 한 번 베어 문 꼬치를 다시 찍지 않는 것이 규칙입니다.',
        en: 'At kushikatsu shops the dipping sauce is shared, so the rule is no double-dipping.',
        ja: '串カツ店のソースは共用なので、二度づけは禁止がルールです。',
      },
      {
        ko: '오사카에서는 에스컬레이터 오른쪽에 서는 관행이 있지만, 안전 안내에 따라 한쪽을 비우려고 걷지 말고 손잡이를 잡고 서서 이용하세요.',
        en: 'In Osaka, standing on the right of escalators is customary, but safety guidance asks everyone to stand still, hold the handrail and avoid walking to keep one side clear.',
        ja: '大阪ではエスカレーターの右側に立つ習慣がありますが、安全のため片側を空けようとして歩かず、手すりにつかまって立ち止まって利用してください。',
      },
      {
        ko: '간사이공항 제1터미널에서는 2층 바깥 연결통로로 JR·난카이 간사이공항역에 바로 갈 수 있습니다. 난카이 라피트는 난바, JR 하루카는 덴노지·신오사카 방면으로 가므로 숙소와 가까운 역을 기준으로 고르세요.',
        en: 'At Kansai Airport Terminal 1, the outside passage on the second floor connects directly to JR and Nankai Kansai Airport Station. Nankai Rapi:t serves Namba; JR Haruka serves Tennoji and Shin-Osaka, so choose by the station nearest your stay.',
        ja: '関西空港第1ターミナルでは、2階の外側連絡通路からJR・南海の関西空港駅へ直結しています。南海ラピートはなんば、JRはるかは天王寺・新大阪方面へ向かうため、宿泊先に近い駅で選びましょう。',
      },
      {
        ko: '간사이공항 제2터미널에는 철도역이 없습니다. 아에로플라자 승강장의 무료 셔틀로 제1터미널·간사이공항역까지 이동한 뒤 열차를 타세요.',
        en: 'There is no railway station at Kansai Airport Terminal 2. Take the free shuttle from Aeroplaza to Terminal 1 and Kansai Airport Station before boarding a train.',
        ja: '関西空港第2ターミナルに鉄道駅はありません。アエロプラザの乗り場から無料シャトルで第1ターミナル・関西空港駅へ移動してから乗車してください。',
      },
      {
        ko: '노선 구조: 오사카에는 JR(오사카 순환선 등), 오사카 메트로, 한큐·한신·게이한·난카이·긴테쓰 같은 사철이 함께 다닙니다. 같은 \'난바\'나 \'우메다\'라도 회사마다 역이 따로 있으니 탈 노선의 역 이름을 확인하세요. 교통카드는 모두 쓸 수 있습니다.',
        en: 'How the network works: Osaka has JR (including the Loop Line), Osaka Metro and private railways such as Hankyu, Hanshin, Keihan, Nankai and Kintetsu. Each company has its own \'Namba\' or \'Umeda\' station, so check which one your line uses; IC cards work on all.',
        ja: '路線のしくみ：大阪にはJR(大阪環状線など)、大阪メトロ、阪急・阪神・京阪・南海・近鉄などの私鉄が走っています。同じ「難波」「梅田」でも会社ごとに駅が別なので、乗る路線の駅名を確認しましょう。交通系ICカードはすべてで使えます。',
      },
      {
        ko: '도시 간 이동: 오사카에서 교토는 JR 신쾌속으로 30분 안팎(한큐·게이한선도 있음), 고베 산노미야는 JR로 20~30분, 히로시마는 신오사카에서 신칸센으로 1시간 반 안팎입니다.',
        en: 'Between cities: Kyoto is about 30 minutes by JR Special Rapid (or by Hankyu or Keihan), Kobe Sannomiya 20–30 minutes by JR, and Hiroshima about 1.5 hours by Shinkansen from Shin-Osaka.',
        ja: '都市間の移動：大阪から京都へはJR新快速で30分ほど(阪急・京阪もあり)、神戸三宮へはJRで20～30分、広島へは新大阪から新幹線で1時間半ほどです。',
      },
      {
        ko: '오사카성 천수각 박물관은 12월 28일~1월 1일 휴관하며 전시 교체나 시설 정비로도 임시 휴관할 수 있으니, 방문 전 공식 공지를 확인하세요.',
        en: 'Osaka Castle Museum is closed from 28 December to 1 January and may also close for exhibition changes or maintenance, so check its official notice before visiting.',
        ja: '大阪城天守閣は12月28日〜1月1日が休館日です。展示替えや施設整備で臨時休館することもあるため、来館前に公式のお知らせを確認してください。',
      },
    ],
  },
  bangkok: {
    highlights: [
      {
        name: { ko: '왕궁·왓 프라깨우', en: 'Grand Palace and Wat Phra Kaew', ja: '王宮・ワット・プラケオ' },
        text: {
          ko: '에메랄드 불상을 모신 왕실 사원과 옛 왕궁이 한 구역에 있는 방콕 대표 명소입니다.',
          en: "Bangkok's landmark complex: the former royal palace and the temple of the Emerald Buddha.",
          ja: 'エメラルド仏を祀る王室寺院と旧王宮が一つの敷地にある、バンコクを代表する名所です。',
        },
      },
      {
        name: { ko: '왓 아룬', en: 'Wat Arun', ja: 'ワット・アルン' },
        text: {
          ko: '짜오프라야강 서쪽 강변의 사원. 강 건너편에서 보는 해 질 녘 풍경이 유명합니다.',
          en: 'The riverside temple on the west bank of the Chao Phraya, famous for its sunset view from across the river.',
          ja: 'チャオプラヤー川西岸の寺院。対岸から眺める夕暮れの景色が有名です。',
        },
      },
      {
        name: { ko: '짜뚜짝 주말시장', en: 'Chatuchak Weekend Market', ja: 'チャトゥチャック・ウィークエンドマーケット' },
        text: {
          ko: '토·일요일에 전체 구역이 열리는 대형 시장. 옷·잡화·길거리 음식 가게가 수천 곳 모이고, 일부 구역은 평일에도 엽니다.',
          en: 'A huge market fully open on Saturdays and Sundays, with thousands of clothing, craft and street-food stalls; some sections also open on weekdays.',
          ja: '土・日曜に全区画が開く大規模な市場。衣類・雑貨・屋台が数千軒集まり、一部の区画は平日も営業します。',
        },
      },
      {
        name: { ko: '왓 포', en: 'Wat Pho', ja: 'ワット・ポー' },
        text: {
          ko: '길이 46m의 금빛 와불로 유명한 사원으로, 왕궁 바로 남쪽에 있어 함께 둘러보기 좋습니다.',
          en: 'Home of the 46-metre golden Reclining Buddha, just south of the Grand Palace — easy to combine.',
          ja: '全長46mの金色の寝釈迦仏で知られる寺院で、王宮のすぐ南にあり一緒に回れます。',
        },
      },
      {
        name: { ko: '야오와랏(차이나타운)', en: 'Yaowarat (Chinatown)', ja: 'ヤワラート（チャイナタウン）' },
        text: {
          ko: '네온사인이 켜지는 저녁에 길거리 음식 노점이 줄지어 서는 방콕의 차이나타운입니다.',
          en: 'Bangkok’s Chinatown, where street-food stalls line the neon-lit road in the evening.',
          ja: 'ネオンが灯る夕方に屋台がずらりと並ぶバンコクのチャイナタウンです。',
        },
      },
    ],
    tips: [
      {
        ko: '왕궁과 사원은 어깨와 무릎을 가리는 옷을 입어야 들어갈 수 있습니다.',
        en: 'The palace and temples require clothing that covers shoulders and knees.',
        ja: '王宮や寺院は、肩と膝が隠れる服装でないと入れません。',
      },
      {
        ko: '강변 명소끼리는 짜오프라야 수상 보트로 이동하면 차가 막히는 시간을 피할 수 있습니다.',
        en: 'Use the Chao Phraya river boats between riverside sights to skip traffic jams.',
        ja: '川沿いの名所間はチャオプラヤー・エクスプレス・ボートで移動すると渋滞を避けられます。',
      },
      {
        ko: '수완나품공항 에어포트 레일 링크 역은 여객터미널 지하 1층(B1)에 있습니다. 파야타이행 열차를 타면 종점에서 BTS 스카이트레인으로 갈아탈 수 있습니다.',
        en: 'The Suvarnabhumi Airport Rail Link station is on B1 of the passenger terminal. Take a train to Phaya Thai, where you can transfer to the BTS Skytrain.',
        ja: 'スワンナプーム空港のエアポート・レール・リンク駅は旅客ターミナル地下1階(B1)にあります。パヤタイ行きに乗り、終点でBTSスカイトレインに乗り換えられます。',
      },
      {
        ko: '돈므앙공항에서 SRT 레드라인을 탈 때는 공항 앞 깜팽펫 6 도로의 돈므앙역으로 이동하세요. 역 안내도에서 공항과 역 사이 출입구를 확인하고, 시내 방면은 끄룽텝 아피왓행 열차를 이용합니다.',
        en: 'For the SRT Red Line from Don Mueang Airport, go to Don Mueang Station on Kamphaeng Phet 6 Road in front of the airport. Check the station map for the airport-side entrances and take a train toward Krung Thep Aphiwat for the city.',
        ja: 'ドンムアン空港からSRTレッドラインに乗る場合は、空港前のカンペーンペット6通りにあるドンムアン駅へ向かいます。駅案内図で空港側の出入口を確認し、市内方面はクルンテープ・アピワット行きに乗ります。',
      },
    ],
  },
  paris: {
    highlights: [
      {
        name: { ko: '루브르 박물관', en: 'Louvre Museum', ja: 'ルーヴル美術館' },
        text: {
          ko: '모나리자를 비롯한 소장품이 많아 하루로는 다 보기 어렵습니다. 보고 싶은 전시관을 미리 정해 두는 것이 좋습니다.',
          en: 'Home of the Mona Lisa and far too much to see in a day; pick the wings you want before you go.',
          ja: 'モナ・リザをはじめ所蔵品が膨大で1日では回りきれません。見たい展示室を先に決めておきましょう。',
        },
      },
      {
        name: { ko: '에펠탑', en: 'Eiffel Tower', ja: 'エッフェル塔' },
        text: {
          ko: '밤에는 매시 정각에 몇 분 동안 반짝이는 조명이 켜집니다. 샹드마르스 공원이나 트로카데로에서 보기 좋습니다.',
          en: 'At night it sparkles for a few minutes on the hour; watch from the Champ de Mars or Trocadéro.',
          ja: '夜は毎正時に数分間きらめくライトアップがあります。シャン・ド・マルス公園やトロカデロから眺めましょう。',
        },
      },
      {
        name: { ko: '몽마르트르 언덕', en: 'Montmartre', ja: 'モンマルトルの丘' },
        text: {
          ko: '사크레쾨르 대성당이 있는 언덕. 화가들이 모이는 테르트르 광장과 파리 시내 전망이 유명합니다.',
          en: 'The hill topped by Sacré-Cœur, known for the painters of Place du Tertre and views over Paris.',
          ja: 'サクレ・クール寺院が建つ丘。画家が集まるテルトル広場とパリ市内の眺めが有名です。',
        },
      },
      {
        name: { ko: '오르세 미술관', en: 'Musée d’Orsay', ja: 'オルセー美術館' },
        text: {
          ko: '옛 기차역을 고친 미술관으로, 모네·르누아르·반 고흐 등 인상파 작품이 모여 있습니다.',
          en: 'A former railway station housing the great Impressionists — Monet, Renoir, Van Gogh and more.',
          ja: '旧駅舎を改装した美術館で、モネ・ルノワール・ゴッホなど印象派の作品が集まっています。',
        },
      },
      {
        name: { ko: '노트르담 대성당', en: 'Notre-Dame de Paris', ja: 'ノートルダム大聖堂' },
        text: {
          ko: '2019년 화재 뒤 복원을 마치고 2024년 12월 다시 문을 연 고딕 대성당입니다. 입장은 무료이며 대기 줄이 생길 수 있습니다.',
          en: 'The Gothic cathedral reopened in December 2024 after restoration following the 2019 fire; entry is free, though queues can form.',
          ja: '2019年の火災後の修復を終え、2024年12月に再開したゴシック様式の大聖堂です。入場は無料ですが行列ができることもあります。',
        },
      },
    ],
    tips: [
      {
        ko: '프랑스 식당 계산서에는 봉사료가 이미 포함(service compris)되어 있어 팁은 선택입니다.',
        en: 'French restaurant bills already include service (service compris), so tipping is optional.',
        ja: 'フランスのレストランの会計にはサービス料が含まれている（service compris）ので、チップは任意です。',
      },
      {
        ko: '식당에서 물은 수돗물(carafe d’eau)을 달라고 하면 무료로 나옵니다.',
        en: 'Ask for a carafe d’eau (tap water) at restaurants and it comes free.',
        ja: 'レストランで水道水（carafe d’eau）を頼むと無料で出てきます。',
      },
      {
        ko: '샤를 드골공항은 RER B선 「Aéroport CDG 1」역이 제1·3터미널을, 「Aéroport CDG 2–TGV」역이 제2터미널 구역을 담당합니다. 오를리공항은 메트로 14호선 종점 「Aéroport d’Orly」에서 탈 수 있습니다. 숙소에서 가까운 RER B역이나 14호선 역을 목적지로 정하세요.',
        en: 'At Charles de Gaulle, RER B’s Aéroport CDG 1 station serves Terminals 1 and 3, while Aéroport CDG 2–TGV serves the Terminal 2 area. At Orly, board Metro Line 14 at its Aéroport d’Orly terminus. Choose the RER B or Line 14 stop nearest your accommodation.',
        ja: 'シャルル・ド・ゴール空港では、RER B線の「Aéroport CDG 1」駅が第1・3ターミナル、「Aéroport CDG 2–TGV」駅が第2ターミナル地区に対応します。オルリー空港ではメトロ14号線の終点「Aéroport d’Orly」から乗車できます。宿泊先に近いRER Bまたは14号線の駅を目的地にしましょう。',
      },
      {
        ko: '2026년 3월 1일부터 루아시버스 운행이 종료됐습니다. 샤를 드골공항은 RER B나 생드니 플레옐 출발 9517번 급행버스, 파리 시내에서는 350·351번 버스를 이용할 수 있습니다. 출발 정류장과 운행 여부는 당일 공식 안내에서 확인하세요.',
        en: 'Roissybus service ended on 1 March 2026. For Charles de Gaulle, alternatives include RER B, express bus 9517 from Saint-Denis–Pleyel, and Paris buses 350 and 351. Check the official service information for your departure stop and operating status.',
        ja: 'ロワシーバスは2026年3月1日に運行を終了しました。シャルル・ド・ゴール空港へはRER B線、サン・ドニ・プレイエル発の急行9517番、パリ市内発の350・351番バスを利用できます。出発停留所と運行状況は当日の公式案内で確認してください。',
      },
      {
        ko: '도시 간 이동: 리옹역에서 TGV를 타면 리옹 2시간 안팎, 동역에서 스트라스부르 2시간 안팎입니다. 출발역이 목적지마다 다르니 표의 역 이름을 확인하세요.',
        en: 'Between cities: TGVs from Gare de Lyon reach Lyon in about two hours, and from Gare de l\'Est reach Strasbourg in about two. Departure stations differ by destination, so check your ticket.',
        ja: '都市間の移動：リヨン駅からTGVでリヨンまで約2時間、東駅からストラスブールまで約2時間です。行き先ごとに出発駅が違うので切符の駅名を確認しましょう。',
      },
      {
        ko: '루브르 박물관은 매주 화요일과 1월 1일·5월 1일·12월 25일에 닫습니다. 임시 휴관도 있을 수 있으니 공식 운영 일정을 확인하세요.',
        en: 'The Louvre is closed every Tuesday and on 1 January, 1 May and 25 December. Check its official opening calendar for any exceptional closures.',
        ja: 'ルーヴル美術館は毎週火曜日と1月1日・5月1日・12月25日が休館日です。臨時休館もあるため、公式の開館カレンダーを確認してください。',
      },
    ],
  },
};

const expand = (c: Compact): CityGuideNote => ({
  highlights: c.h.map(([nk, ne, nj, tk, te, tj]) => ({ name: { ko: nk, en: ne, ja: nj }, text: { ko: tk, en: te, ja: tj } })),
  tips: c.t.map(([ko, en, ja]) => ({ ko, en, ja })),
});

const compact: Record<string, Compact> = { ...NOTES_1, ...NOTES_2, ...NOTES_3, ...NOTES_4, ...NOTES_5, ...NOTES_6, ...NOTES_7, ...NOTES_8, ...NOTES_9 };
for (const [id, extra] of Object.entries(NOTES_EXTRA)) {
  const base = compact[id];
  compact[id] = base ? { h: [...base.h, ...extra.h], t: [...base.t, ...extra.t] } : extra;
}
export const CITY_GUIDES: Record<string, CityGuideNote> = {
  ...BASE,
  ...Object.fromEntries(Object.entries(compact).map(([id, c]) => [id, expand(c)])),
};
