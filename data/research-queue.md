# 조사 요청 목록 (자동 생성)

> `npm run data:convert` 가 `travel_cost_research_pilot_v0.3_2026-10-02.xlsx` (v0.3) 로부터 만든 파일입니다. 직접 고치지 마세요.
> 기준: 바스켓마다 **독립 표본 3건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).

## 1. 계산을 막는 부족 바스켓

| 도시 | 바스켓 | 현재 독립 표본 | 필요 | 필요한 자료 |
| --- | --- | --- | --- | --- |
| - | - | - | - | 없음: 모든 파일럿 도시 계산 가능 |

## 2. 보강하면 좋은 바스켓(계산은 가능)

| 도시 | 바스켓 | 현재 독립 표본 | 메모 |
| --- | --- | --- | --- |
| 도쿄 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 도쿄 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 오사카 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 오사카 | 간식·음료 | 1 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 방콕 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 방콕 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 다낭 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 다낭 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 타이베이 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 타이베이 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 싱가포르 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 싱가포르 | 간식·음료 | 2 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 파리 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 파리 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 런던 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 런던 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |

## 3. 공식 재검증이 필요한 표본

계산 대상 바스켓에 들어가는 표본 중 출처가 공식(A)이 아니거나, 모델 사용이 "조건부"이거나, 재검증·시작가·세금 별도 표기인 표본입니다.
공식 판매 주체 페이지에서 같은 가격을 확인하면 엑셀에서 등급·모델 사용·상태를 올려 주세요.

| ID | 도시 | 항목 | 가격 | 등급 | 모델 사용 | 사유 | 출처 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TYO-AT-001 | 도쿄 | 도쿄 스카이트리 콤보권 | 3000 JPY | A | 조건부 | 조건부, 재검증 | [Tokyo Skytree](https://www.tokyo-skytree.jp/en/ticket/individual/) |
| OSA-AT-001 | 오사카 | 우메다 스카이빌딩 전망대 | 2000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-002 | 오사카 | HEP FIVE 관람차 | 1000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-003 | 오사카 | 산타마리아 데이크루즈 | 2000 JPY | B | 조건부 | B등급, 조건부 | [Osaka e-Pass](https://www.e-pass.osaka-info.jp/en/facility/free) |
| OSA-FD-001 | 오사카 | 타코야키 6개 | 630 JPY | C | 조건부 | C등급, 조건부, 재검증 | [Takohachi menu](https://www.takohachi.jp/) |
| OSA-FD-002 | 오사카 | 오사카 튀김 정식 | 1980 JPY | C | 조건부 | C등급, 조건부, 재검증 | [Restaurant menu PDF](https://www.osaka-info.jp/en/gourmet/) |
| OSA-SV-003 | 오사카 | 리쿠로 선물 파이 8개 | 980 JPY | A | 조건부 | 조건부, 재검증 | [Rikuro](https://www.rikuro.co.jp/newsitem/1647.html) |
| BKK-AT-002 | 방콕 | 왓 아룬 입장권 | 200 THB | B | 조건부 | B등급, 조건부 | [Tourism Authority of Thailand](https://www.tourismthailand.org/Attraction/wat-arun-or-temple-of-dawn) |
| BKK-FD-003 | 방콕 | 강새우 팟타이 | 450 THB | A | 예 | 세금·서비스료 별도 | [ChomSindh at Amari Bangkok](https://www.amari.com/bangkok/dine/chomsindh) |
| DAD-AT-001 | 다낭 | 선월드 바나힐 입장권 | 950000 VND | A | 조건부 | 조건부, 재검증 | [Sun World Ba Na Hills](https://banahills.sunworld.vn/en/ticket-price) |
| DAD-AT-002 | 다낭 | 오행산 입장권 | 40000 VND | C | 조건부 | C등급, 조건부, 재검증 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| DAD-AT-003 | 다낭 | 오행산 엘리베이터 왕복 | 30000 VND | C | 조건부 | C등급, 조건부, 재검증 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| DAD-FD-001 | 다낭 | 미꽝/반깐 길거리 한그릇 | 30000~50000 VND | B | 조건부 | B등급, 조건부 | [Vietnam Tourism](https://www.vietnamtourism.com/en/da-nang-food-scene-what-and-where-to-eat) |
| DAD-FD-002 | 다낭 | 미꽝 개구리 전문점 | 34000~97000 VND | C | 조건부 | C등급, 조건부 | [Da Nang Food Tour Directory](https://www.foodtourdanang.vn/en/my-quang-ech-bep-trang-bach-dang?food=52) |
| TPE-FD-001 | 타이베이 | 딘타이펑 돼지고기 샤오롱바오 10개 | 290 TWD | C | 조건부 | C등급, 조건부, 재검증 | [Current delivery menu capture](https://www.ubereats.com/tw-en/brand-city/taipei-tpe/dintaifung) |
| TPE-FD-002 | 타이베이 | 고기 없는 우육면 국물면 | 180 TWD | C | 조건부 | C등급, 조건부, 재검증 | [Current delivery menu capture](https://www.ubereats.com/tw-en/brand-city/taipei-tpe/dintaifung) |
| TPE-SV-001 | 타이베이 | 치아더 펑리수 6개 | 228 TWD | C | 조건부 | C등급, 조건부, 재검증 | [Taiwan Souvenirs retailer](https://taiwan-souvenirs.com/en/products) |
| TPE-SV-002 | 타이베이 | 치아더 펑리수 12개 | 456 TWD | C | 조건부 | C등급, 조건부, 재검증 | [Taiwan Souvenirs retailer](https://taiwan-souvenirs.com/en/products) |
| SIN-TR-001 | 싱가포르 | 싱가포르 투어리스트 패스 | 17 SGD | A | 예 | 시작가 표기 | [SimplyGo](https://simplygo.com.sg/locations/singapore-tourist-pass-sales-channels/) |
| SIN-FD-001 | 싱가포르 | 전통 카야토스트 | 6 SGD | C | 조건부 | C등급, 조건부, 재검증 | [Toast Box store listing](https://gobugis.com/shop/toast-box-bugis-junction) |
| SIN-FD-002 | 싱가포르 | 락사 | 10 SGD | C | 조건부 | C등급, 조건부, 재검증 | [Toast Box store listing](https://gobugis.com/shop/toast-box-bugis-junction) |
| SIN-FD-003 | 싱가포르 | 커리치킨 라이스 | 10.3 SGD | C | 조건부 | C등급, 조건부, 재검증 | [Toast Box store listing](https://gobugis.com/shop/toast-box-bugis-junction) |
| SIN-FD-004 | 싱가포르 | 코피 O | 2.2 SGD | C | 조건부 | C등급, 조건부, 재검증 | [Toast Box store listing](https://gobugis.com/shop/toast-box-bugis-junction) |
| SIN-SV-001 | 싱가포르 | 판단 카야 케이크 레귤러 | 31.8 SGD | C | 조건부 | C등급, 조건부, 재검증 | [Bengawan Solo store listing](https://makaneast.com/shop/bengawan-solo) |
| PAR-FD-001 | 파리 | 부용 샤르티에 메인 시작가 | 7 EUR | A | 조건부 | 조건부, 재검증, 시작가 표기 | [Bouillon Chartier](https://www.bouillon-chartier.com/) |
| PAR-SV-003 | 파리 | 마카롱 낱개 | 3.2~3.7 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Paris shop menu sample](https://parisjetaime.com/eng/article/what-to-eat-in-paris-a954) |
| LON-AT-005 | 런던 | 대영박물관 상설 관람 | 0 GBP | A | 예 | 재검증 | [British Museum](https://www.britishmuseum.org/visit) |
| LON-SV-001 | 런던 | 대영박물관 숍 소형 굿즈 시작가 | 6.99 GBP | C | 조건부 | C등급, 조건부, 재검증, 시작가 표기 | [British Museum Shop](https://www.britishmuseumshoponline.org/) |
