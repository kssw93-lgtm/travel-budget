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
    ],
    tips: [
      {
        ko: '쿠시카쓰 가게의 소스는 여러 손님이 함께 쓰기 때문에 한 번 베어 문 꼬치를 다시 찍지 않는 것이 규칙입니다.',
        en: 'At kushikatsu shops the dipping sauce is shared, so the rule is no double-dipping.',
        ja: '串カツ店のソースは共用なので、二度づけは禁止がルールです。',
      },
      {
        ko: '오사카에서는 에스컬레이터 오른쪽에 서고 왼쪽을 비워 둡니다(도쿄와 반대).',
        en: 'In Osaka people stand on the right of escalators and leave the left free, the opposite of Tokyo.',
        ja: '大阪ではエスカレーターの右側に立ち、左側を空けます（東京と逆）。',
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
          ko: '주말에만 열리는 대형 시장. 옷·잡화·길거리 음식 가게가 수천 곳 모여 있습니다.',
          en: 'A huge weekend-only market with thousands of stalls selling clothes, crafts and street food.',
          ja: '週末だけ開く巨大市場。服や雑貨、屋台料理の店が数千軒集まります。',
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
    ],
  },
};

const expand = (c: Compact): CityGuideNote => ({
  highlights: c.h.map(([nk, ne, nj, tk, te, tj]) => ({ name: { ko: nk, en: ne, ja: nj }, text: { ko: tk, en: te, ja: tj } })),
  tips: c.t.map(([ko, en, ja]) => ({ ko, en, ja })),
});

const compact: Record<string, Compact> = { ...NOTES_1, ...NOTES_2, ...NOTES_3, ...NOTES_4, ...NOTES_5, ...NOTES_6, ...NOTES_7, ...NOTES_8 };
for (const [id, extra] of Object.entries(NOTES_EXTRA)) {
  const base = compact[id];
  compact[id] = base ? { h: [...base.h, ...extra.h], t: [...base.t, ...extra.t] } : extra;
}
export const CITY_GUIDES: Record<string, CityGuideNote> = {
  ...BASE,
  ...Object.fromEntries(Object.entries(compact).map(([id, c]) => [id, expand(c)])),
};
