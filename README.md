# 여행 경비 계산

도시·방문일·숙박 수·인원·여행 스타일·표시 통화를 고르면 **현지 체류비(외식·교통·관광지·기념품)** 를 최소~최대 범위로 알려주는 사이트입니다.
한국어/영어 지원, 언어와 통화는 독립 선택. 항공권·숙박은 실시간 조회하지 않고 사용자가 직접 입력한 금액만 합산합니다.

- 스택: TypeScript · React + Vite(정적 사이트) · Cloudflare Workers(환율 API + 정적 에셋)
- 데이터베이스 없음: 가격은 정적 JSON, 환율은 Worker 가 호출해 약 24시간 캐시
- 1차 화면에는 조사 단계가 `파일럿`인 8개 도시만 노출(도쿄·오사카·방콕·다낭·타이베이·싱가포르·파리·런던)

## 실행

```bash
npm install
npm run dev            # 화면 개발 서버 (http://localhost:5173)
npm run dev:worker     # /api/rates 용 Worker (8787, dev 서버가 /api 를 여기로 프록시)
```

검증 · 빌드:

```bash
npm run lint
npm run typecheck
npm test               # 계산식·환율 Worker·입력 검증·데이터 무결성 단위 테스트
npm run build
npm run test:e2e       # Playwright: 데스크톱+모바일 핵심 흐름 (환율은 모킹)
npm run verify         # 위 전부 순서대로
npm run deploy:check   # 빌드 + wrangler deploy --dry-run (실제 배포 안 함)
```

실제 배포는 준비만 해 두었습니다. 배포할 때: `npx wrangler deploy`

## 가격 데이터 교체 방법

1. 새 `조사자료.xlsx` 를 `data/source/` 에 덮어씁니다. (원본 엑셀은 읽기만 하며 수정하지 않습니다.)
2. `npm run data:convert` — 머리글 이름으로 열을 찾아 `src/data/generated/*.json` 을 다시 만듭니다.
   형식 오류(숫자 아닌 가격, 알 수 없는 도시, 없는 연결 가격 ID 등)가 있으면 실패하고, 분류하지 못한 세부유형은 경고로 알려줍니다.
3. 코드 수정 없이 결과가 바뀝니다. 영어 음식 추천 이유는 `data/overlays/food-reasons-en.json` 에 있습니다.

## 구조

| 경로 | 역할 |
| --- | --- |
| `src/core/` | 계산 엔진(순수 함수). `model-config.ts` 에 이용 횟수·최소 표본 수·예비비 등 모델 가정이 모여 있음 |
| `src/data/` | 생성된 JSON 로더. 가격은 여기로만 들어옴 |
| `scripts/convert-xlsx.ts` | 엑셀 → JSON 변환 |
| `src/i18n/` | 한/영 문구 (`ko.ts` 가 기준, `en.ts` 는 타입으로 구조 강제) |
| `src/ui/` | 계산기·결과·대표 음식·방법론 페이지·광고 자리 |
| `worker/` | `/api/rates` — 교체 가능한 환율 제공자, 캐시, 장애 시 마지막 정상값(stale) |
| `tests/` | 단위 테스트, Worker 테스트, e2e |

## 계산 요약

- 여행일 수 = 숙박 수 + 1일, 첫날·마지막 날 식비·활동비는 일반 하루의 60%
- 단위가 다른 가격은 **유형별 바스켓**(1일 이용권 / 1회권 / 식사 / 간식·음료 / 입장권 / 기념품)으로 나눠 각각 계산 후 합산. 서로 섞어 분위수를 내지 않음
- 필수 바스켓은 표본 **3건 이상**이어야 금액을 냄(`MODEL.minSamplesPerCategory`). 부족하면 금액 대신 부족 항목을 표시
- 음식 + 교통 + 관광 + 기념품 합계에 예비비 10%
- 방문일은 요일별 요금·판매 기간이 있는 항목에만 반영, 전체 성수기 배수 없음
- 자세한 규칙은 사이트의 `/methodology` 페이지에 공개

## 환율

`worker/rates/providers.ts` 의 `defaultProviders` 순서대로 무료 API 를 호출합니다(ExchangeRate-API 오픈 엔드포인트 → Frankfurter).
24시간 캐시, 실패 시 마지막 정상값을 `stale` 로 표시, 값이 전혀 없으면 임의 환율 없이 현지 통화만 표시합니다.
제공자를 바꾸려면 `RateProvider` 인터페이스를 구현해 배열에 넣으면 됩니다.

## 광고

`AdSlot` 으로 입력 아래·결과 아래·음식 추천 아래 3곳의 자리만 확보했습니다. 실제 Google 광고 코드는 광고 ID 를 받은 뒤 `src/ui/AdSlot.tsx` 에서만 추가합니다.
