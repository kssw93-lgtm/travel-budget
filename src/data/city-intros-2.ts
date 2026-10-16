/** 도시 소개 2 — 한국 (형식은 city-intros-1.ts) */
import type { Intro } from './city-intros-1';

export const INTROS_2: Record<string, Intro> = {
  seoul: {
    o: ['궁궐과 한옥 골목, 시장과 최신 쇼핑 거리가 지하철로 촘촘히 이어진 도시입니다. 강북(궁궐·북촌·명동)과 강남·성수를 나눠 보면 동선이 깔끔합니다.', 'Palaces and hanok lanes, markets and trend-setting shopping streets, all tied together by a dense subway. Split days between the north (palaces, Bukchon, Myeongdong) and Gangnam/Seongsu.', '王宮と韓屋の路地、市場と最新の買い物街が地下鉄で細かくつながる街です。江北（王宮・北村・明洞）と江南・聖水に分けて回ると動線がすっきりします。'],
    d: [3, 4],
    s: [
      ['명동·을지로', 'Myeongdong / Euljiro', '明洞・乙支路', '공항버스가 닿고 궁궐·남산까지 가까워 첫 방문에 무난합니다.', 'Airport buses stop here and palaces and Namsan are close; easy for first-timers.', '空港バスが着き、王宮や南山にも近く初めてに無難です。'],
      ['홍대·연남', 'Hongdae / Yeonnam', '弘大・延南', '공항철도로 바로 오고 카페·공연·밤 문화가 활발합니다.', 'Direct by airport rail, with cafés, live music and nightlife.', '空港鉄道で直行でき、カフェやライブ、夜遊びが活発です。'],
      ['강남·잠실', 'Gangnam / Jamsil', '江南・蚕室', '쇼핑몰과 대형 호텔이 많고 롯데월드 등 실내 명소가 가깝습니다.', 'Big malls and hotels near indoor sights such as Lotte World.', '大型モールやホテルが多く、ロッテワールドなど屋内の名所に近いです。'],
    ],
  },
  busan: {
    o: ['바다와 산이 맞닿은 항구 도시로, 해운대·광안리 해변과 자갈치 시장, 감천문화마을이 대표 코스입니다. 해안선을 따라 명소가 퍼져 있어 지역을 묶어 다니면 이동이 줄어듭니다.', 'A port city where mountains meet the sea: Haeundae and Gwangalli beaches, Jagalchi fish market and Gamcheon Culture Village. Sights spread along the coast, so group them by area.', '海と山が接する港町で、海雲台・広安里のビーチ、チャガルチ市場、甘川文化村が定番。名所が海岸沿いに散らばるので、エリアごとにまとめて回ると移動が減ります。'],
    d: [2, 3],
    s: [
      ['해운대', 'Haeundae', '海雲台', '해변과 호텔이 모여 있어 바다 위주 여행에 좋습니다.', 'Beachfront hotels for a sea-focused stay.', 'ビーチとホテルが集まり、海中心の旅に向いています。'],
      ['서면·부산역', 'Seomyeon / Busan Station', '西面・釜山駅', 'KTX와 지하철 환승이 편하고 남포동·자갈치가 가깝습니다.', 'Easy KTX and subway links, close to Nampo-dong and Jagalchi.', 'KTXや地下鉄の乗り換えが便利で、南浦洞やチャガルチに近いです。'],
    ],
  },
  jeju: {
    o: ['화산섬 특유의 오름과 해안 절경, 올레길이 있는 섬입니다. 섬이 넓어 동쪽(성산)과 서쪽(협재·애월)을 나눠 다니는 일정이 일반적이며, 렌터카가 가장 편합니다.', 'A volcanic island of craters, dramatic coastline and Olle walking trails. It is big, so most trips split east (Seongsan) and west (Hyeopjae, Aewol), usually by rental car.', '火山島ならではのオルム（寄生火山）や海岸の絶景、オルレ道がある島。広いので東（城山）と西（挟才・涯月）に分けて回るのが一般的で、レンタカーが便利です。'],
    d: [3, 4],
    s: [
      ['제주시', 'Jeju City', '済州市', '공항과 가깝고 식당·시장이 많아 첫날·마지막 날 숙소로 좋습니다.', 'Near the airport with markets and restaurants; good for first and last nights.', '空港に近く市場や飲食店が多いので、初日と最終日の宿に向いています。'],
      ['서귀포·중문', 'Seogwipo / Jungmun', '西帰浦・中文', '남쪽 해안 리조트와 폭포, 올레길이 가깝습니다.', 'South-coast resorts close to waterfalls and Olle trails.', '南海岸のリゾートで、滝やオルレ道に近いです。'],
    ],
  },
  gangneung: {
    o: ['동해 바다와 커피 거리, 경포호가 있는 해안 도시입니다. KTX로 서울에서 2시간 남짓이라 1박 2일 바다 여행지로 인기가 많습니다.', 'An east-coast city of beaches, a coffee street and Gyeongpo Lake, about two hours from Seoul by KTX — a favourite overnight seaside trip.', '東海の海とコーヒー通り、鏡浦湖がある海辺の街。ソウルからKTXで2時間ほどで、1泊2日の海旅として人気です。'],
    d: [2, 2],
    s: [
      ['경포', 'Gyeongpo', '鏡浦', '해변과 호수가 가까운 숙소가 많습니다.', 'Hotels by the beach and the lake.', 'ビーチと湖に近い宿が多いです。'],
      ['강릉역·중앙시장', 'Gangneung Station / Jungang Market', '江陵駅・中央市場', 'KTX 이동이 편하고 시장 먹거리가 가깝습니다.', 'Handy for the KTX and the market food stalls.', 'KTXでの移動が便利で、市場グルメに近いです。'],
    ],
  },
  gyeongju: {
    o: ['신라 천 년의 수도로, 도시 전체가 「지붕 없는 박물관」이라 불립니다. 불국사·석굴암과 대릉원·동궁과 월지 야경을 이틀에 나눠 보면 여유롭습니다.', 'The thousand-year capital of Silla, called a “museum without walls”. Spread Bulguksa and Seokguram and the tumuli and Donggung Palace night views over two days.', '新羅千年の都で、街全体が「屋根のない博物館」と呼ばれます。仏国寺・石窟庵と大陵苑・東宮と月池の夜景を2日に分けるとゆとりがあります。'],
    d: [2, 2],
    s: [
      ['황리단길·대릉원', 'Hwangnidan-gil / Daereungwon', '皇理団通り・大陵苑', '한옥 숙소와 카페가 많고 야경 명소를 걸어서 다닙니다.', 'Hanok stays and cafés, with the night-view sights within walking distance.', '韓屋の宿やカフェが多く、夜景スポットへ歩いて行けます。'],
      ['보문단지', 'Bomun Lake Resort', '普門団地', '호숫가 리조트가 모여 있어 가족 여행에 좋습니다.', 'Lakeside resorts, good for families.', '湖畔のリゾートが集まり、家族旅行に向いています。'],
    ],
  },
  yeosu: {
    o: ['「여수 밤바다」로 알려진 남해안 항구 도시로, 해상 케이블카와 돌산 야경, 해산물 요리가 매력입니다.', 'A south-coast port known for its night sea, with a sea cable car, views from Dolsan and plenty of seafood.', '「麗水の夜の海」で知られる南海岸の港町。海上ケーブルカーや突山の夜景、海鮮料理が魅力です。'],
    d: [2, 2],
    s: [
      ['돌산·오동도 주변', 'Dolsan / Odongdo area', '突山・梧桐島周辺', '케이블카와 야경 명소가 가까운 바다 전망 숙소가 많습니다.', 'Sea-view stays near the cable car and night-view spots.', 'ケーブルカーや夜景スポットに近い海の見える宿が多いです。'],
      ['여수엑스포역', 'Yeosu Expo Station', '麗水エキスポ駅', 'KTX로 도착해 바로 움직이기 편합니다.', 'Convenient right off the KTX.', 'KTXで到着してすぐ動けて便利です。'],
    ],
  },
  jeonju: {
    o: ['700채가 넘는 한옥이 모인 한옥마을과 비빔밥·콩나물국밥으로 유명한 맛의 도시입니다. 한복을 입고 골목을 걷는 여행자가 많습니다.', 'Famous for its hanok village of over 700 traditional houses and for bibimbap and bean-sprout soup; many visitors stroll the lanes in hanbok.', '700軒を超える韓屋が集まる韓屋村と、ビビンバやコンナムルクッパで有名な食の街。韓服を着て路地を歩く旅行者が多いです。'],
    d: [1, 2],
    s: [
      ['전주 한옥마을', 'Jeonju Hanok Village', '全州韓屋村', '한옥 숙소에서 하룻밤 묵는 경험 자체가 여행의 일부입니다.', 'Staying a night in a hanok is part of the experience.', '韓屋の宿に泊まること自体が旅の一部です。'],
      ['객사·전주역', 'Gaeksa / Jeonju Station', '客舎・全州駅', '식당가와 교통이 편한 일반 호텔이 많습니다.', 'Regular hotels near the dining streets and transport.', '飲食街や交通に便利な一般的なホテルが多いです。'],
    ],
  },
  sokcho: {
    o: ['설악산과 동해 바다를 함께 즐길 수 있는 도시로, 갯배와 중앙시장 닭강정, 오징어순대가 유명합니다. 가을 단풍철에는 설악산 등산객으로 붐빕니다.', 'A city combining Seoraksan and the east sea, known for its hand-pulled ferry and market fried chicken and squid sundae; autumn foliage brings hikers in crowds.', '雪岳山と東海の海を一緒に楽しめる街で、渡し船や中央市場のタッカンジョン、イカスンデが有名。秋の紅葉期は登山客で混みます。'],
    d: [2, 2],
    s: [
      ['속초해변·엑스포', 'Sokcho Beach / Expo', '束草ビーチ・エキスポ', '바다 전망 숙소가 많고 시장까지 가깝습니다.', 'Sea-view stays close to the market.', '海の見える宿が多く、市場にも近いです。'],
      ['설악동', 'Seorak-dong', '雪岳洞', '설악산 입구라 이른 아침 등산에 좋습니다.', 'At the park entrance, ideal for early hikes.', '雪岳山の入口で、早朝の登山に向いています。'],
    ],
  },
  tongyeong: {
    o: ['「한국의 나폴리」로 불리는 섬과 바다의 도시입니다. 케이블카, 동피랑 벽화마을, 섬으로 가는 배편과 굴·충무김밥이 대표 즐길 거리입니다.', 'Called “Korea’s Naples”, a town of islands and sea: a cable car, the Dongpirang mural village, island ferries, oysters and Chungmu gimbap.', '「韓国のナポリ」と呼ばれる島と海の街。ケーブルカー、東ピラン壁画村、島へ行く船、牡蠣や忠武キンパが定番です。'],
    d: [2, 2],
    s: [
      ['강구안·중앙시장', 'Gangguan / Jungang Market', '江口岸・中央市場', '항구와 벽화마을, 시장을 걸어서 다닐 수 있습니다.', 'Walk to the harbour, mural village and market.', '港や壁画村、市場へ歩いて行けます。'],
      ['미륵도', 'Mireukdo', '弥勒島', '케이블카와 리조트, 바다 전망 숙소가 있습니다.', 'Cable car, resorts and sea-view stays.', 'ケーブルカーやリゾート、海の見える宿があります。'],
    ],
  },
  daegu: {
    o: ['근대 골목과 서문시장 야시장, 막창 같은 먹거리로 알려진 내륙 대도시입니다. 팔공산과 앞산 전망대에서 도시 야경을 볼 수 있습니다.', 'An inland city known for its modern-history alleys, the Seomun night market and grilled tripe, with city views from Palgongsan and Apsan.', '近代の路地や西門市場の夜市、マクチャンなどで知られる内陸の大都市。八公山や前山展望台から夜景が見られます。'],
    d: [1, 2],
    s: [
      ['동성로·중앙로', 'Dongseong-ro / Jungang-ro', '東城路・中央路', '쇼핑가와 근대골목, 시장이 모두 가깝습니다.', 'Close to shopping, the heritage alleys and the markets.', '買い物街や近代路地、市場がすべて近いです。'],
      ['동대구역', 'Dongdaegu Station', '東大邱駅', 'KTX 이동이 편합니다.', 'Convenient for the KTX.', 'KTXでの移動が便利です。'],
    ],
  },
  incheon: {
    o: ['공항 도시이자 차이나타운과 개항장 거리, 송도의 현대적인 풍경이 공존하는 도시입니다. 출국 전후 하루를 보내거나 섬 여행의 출발지로 많이 찾습니다.', 'An airport city where Chinatown and the old open-port streets sit beside modern Songdo; popular for a day before or after flights or as a jumping-off point for islands.', '空港の街であり、チャイナタウンや開港場の街並み、松島の近代的な景観が共存します。出国前後の1日や島旅の出発地として訪れる人が多いです。'],
    d: [1, 2],
    s: [
      ['송도', 'Songdo', '松島', '깔끔한 호텔과 공원이 많고 공항버스가 다닙니다.', 'Modern hotels and parks with airport buses.', 'きれいなホテルや公園が多く、空港バスが走ります。'],
      ['인천역·차이나타운', 'Incheon Station / Chinatown', '仁川駅・チャイナタウン', '개항장 거리와 차이나타운을 걸어서 봅니다.', 'Walk to the open-port district and Chinatown.', '開港場の街並みやチャイナタウンを歩いて回れます。'],
    ],
  },
};
