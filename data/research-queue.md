# 조사 요청 목록 (자동 생성)

> `npm run data:convert` 가 `travel_cost_research_pilot_v0.7_2026-10-03.xlsx` (v0.7) 로부터 만든 파일입니다. 직접 고치지 마세요.
> 기준: 바스켓마다 **독립 표본 3건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).
> 수치는 가격 원장과 계산 코드로 다시 만든 것입니다. 엑셀의 "도시 초안"·"다음 조사 큐" 시트 수치는 쓰지 않습니다(작성 시점이 달라 오래된 값이 있을 수 있음).

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
| 다낭 | 간식·음료 | 1 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 타이베이 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 타이베이 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 싱가포르 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 싱가포르 | 간식·음료 | 1 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 파리 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 파리 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 런던 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 런던 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 바르셀로나 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 로마 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 뉴욕 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 뉴욕 | 간식·음료 | 1 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 이스탄불 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 서울 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 서울 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 부산 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 제주 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |

## 3. 공식 재검증이 필요한 표본

계산 대상 바스켓에 들어가는 표본 중 출처가 공식(A)이 아니거나, 모델 사용이 "조건부"이거나, 재검증·시작가·세금 별도 표기인 표본입니다.
공식 판매 주체 페이지에서 같은 가격을 확인하면 엑셀에서 등급·모델 사용·상태를 올려 주세요.

| ID | 도시 | 항목 | 가격 | 등급 | 모델 사용 | 사유 | 출처 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TYO-AT-001 | 도쿄 | 도쿄 스카이트리 콤보권 | 3000~4800 JPY | A | 조건부 | 조건부 | [Tokyo Skytree](https://www.tokyo-skytree.jp/datas/files/2026/03/19/da1ebeff3b1d6bbfa26f052f2d6a99c9a33b8143.pdf) |
| OSA-AT-001 | 오사카 | 우메다 스카이빌딩 전망대 | 2000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-002 | 오사카 | HEP FIVE 관람차 | 1000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-003 | 오사카 | 산타마리아 데이크루즈 | 2000 JPY | A | 조건부 | 조건부 | [Osaka Suijyo Bus](https://suijo-bus.osaka/cruiselist/santamaria/) |
| OSA-SV-003 | 오사카 | 리쿠로 선물 파이 8개 | 980 JPY | A | 조건부 | 조건부, 재검증 | [Rikuro](https://www.rikuro.co.jp/newsitem/1647.html) |
| BKK-AT-002 | 방콕 | 왓 아룬 입장권 | 200 THB | B | 조건부 | B등급, 조건부 | [Tourism Authority of Thailand](https://www.tourismthailand.org/Attraction/wat-arun-or-temple-of-dawn) |
| BKK-FD-003 | 방콕 | 강새우 팟타이 | 450 THB | A | 예 | 세금·서비스료 별도 | [ChomSindh at Amari Bangkok](https://www.amari.com/bangkok/dine/chomsindh) |
| DAD-AT-001 | 다낭 | 선월드 바나힐 입장권 | 950000 VND | A | 조건부 | 조건부, 재검증 | [Sun World Ba Na Hills](https://banahills.sunworld.vn/en/ticket-price) |
| DAD-AT-002 | 다낭 | 오행산 입장권 | 40000 VND | C | 조건부 | C등급, 조건부, 재검증 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| DAD-AT-003 | 다낭 | 오행산 엘리베이터 왕복 | 30000 VND | C | 조건부 | C등급, 조건부, 재검증 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| SIN-TR-001 | 싱가포르 | 싱가포르 투어리스트 패스 | 17 SGD | A | 예 | 시작가 표기 | [SimplyGo](https://simplygo.com.sg/locations/singapore-tourist-pass-sales-channels/) |
| PAR-FD-001 | 파리 | 부용 샤르티에 메인 시작가 | 7 EUR | A | 조건부 | 조건부, 시작가 표기 | [Bouillon Chartier](https://www.bouillon-chartier.com/chartier_medias/2025/10/Anglais.pdf) |
| LON-AT-005 | 런던 | 대영박물관 상설 관람 | 0 GBP | A | 예 | 재검증 | [British Museum](https://www.britishmuseum.org/visit) |
| DAD-AT-004 | 다낭 | 다낭 참조각박물관 일반 입장권 | 60000 VND | A | 예 | 검수: 원문 미확인 | [Da Nang Museum of Cham Sculpture](https://chammuseum.vn/view.aspx?ID=45) |
| SIN-FD-008 | 싱가포르 | 티옹바루 하이난 치킨라이스 | 14 SGD | A | 예 | 세금·서비스료 별도 | [Tiong Bahru Hainanese Chicken Rice](https://www.tiongbahruchickenrice.sg/menu/) |
| IST-AT-001 | 이스탄불 | Topkapı Sarayı 복합 입장권 외국인 성인 | 2750 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en) |
| IST-AT-002 | 이스탄불 | Dolmabahçe Sarayı 통합 입장권 외국인 성인 | 2000 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/3/Dolmabahce-Sarayi) |
| IST-AT-003 | 이스탄불 | Beylerbeyi Sarayı 외국인 성인 입장 | 800 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/4/Beylerbeyi-Sarayi) |
| IST-AT-004 | 이스탄불 | Yıldız Sarayı 외국인 성인 입장 | 900 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/5/Yildiz-Sarayi?culture=en) |
| IST-AT-009 | 이스탄불 | Topkapı Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en) |
| IST-AT-010 | 이스탄불 | Dolmabahçe Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/3/Dolmabahce-Sarayi) |
| IST-AT-011 | 이스탄불 | Beylerbeyi Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/4/Beylerbeyi-Sarayi) |
| IST-AT-012 | 이스탄불 | Yıldız Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/5/Yildiz-Sarayi?culture=en) |
| BCN-FD-101 | 바르셀로나 | 바르사 카페 점심 메뉴 | 23.95 EUR | A | 예 | 재검증 | [FC Barcelona Barca Cafe](https://www.fcbarcelona.es/es/entradas/camp-nou-experience/planifica-tu-visita/2554523/barca-cafe) |
| BCN-FD-102 | 바르셀로나 | 아네마 에 코레 점심 세트 | 14.9 EUR | A | 예 | 재검증 | [Restaurante Anema e Core Barcelona](https://www.anemaecorebcn.es/en/menus_grupo) |
| BCN-FD-103 | 바르셀로나 | 아네마 에 코레 피자 점심 세트 | 12.9 EUR | A | 예 | 재검증 | [Restaurante Anema e Core Barcelona](https://www.anemaecorebcn.es/en/menus_grupo) |
| BCN-FD-104 | 바르셀로나 | 7 포르테스 전통 해산물 파에야 | 29.8 EUR | A | 예 | 재검증 | [Restaurant 7 Portes](https://7portes.com/en/restaurant-7-portes-menu/) |
| BCN-FD-105 | 바르셀로나 | 티비다보 바 피라타 슈퍼프랑크푸르트 | 10.95 EUR | A | 예 | 재검증 | [Tibidabo Bar Piratta](https://tibidabo.cat/sites/default/files/2026-04/Bar%20Piratta%20(Carta%20web%202026)%20(CAT).pdf) |
| BCN-FD-201 | 바르셀로나 | 킹 커피 미니 크루아상 | 2 EUR | A | 예 | 재검증 | [King Coffee Barcelona](https://kingcoffee.es/es_es/) |
| BCN-FD-202 | 바르셀로나 | 킹 커피 크림치즈 크루아상 | 3.75 EUR | A | 예 | 재검증 | [King Coffee Barcelona](https://kingcoffee.es/es_es/) |
| BCN-FD-203 | 바르셀로나 | 킹 커피 에스프레소 | 1.6 EUR | A | 예 | 재검증 | [King Coffee Barcelona](https://kingcoffee.es/es_es/) |
| BCN-FD-204 | 바르셀로나 | 킹 커피 카페 콘 레체 | 1.95 EUR | A | 예 | 재검증 | [King Coffee Barcelona](https://kingcoffee.es/es_es/) |
| BCN-FD-205 | 바르셀로나 | 킹 커피 카푸치노 | 3.2 EUR | A | 예 | 재검증 | [King Coffee Barcelona](https://kingcoffee.es/es_es/) |
| BCN-TR-001 | 바르셀로나 | 지하철 단일 승차권 | 2.9 EUR | A | 예 | 재검증 | [TMB Transports Metropolitans de Barcelona](https://www.tmb.cat/en/barcelona-fares-metro-bus/transport-ticket-fares) |
| BCN-TR-002 | 바르셀로나 | 버스 단일 승차권 | 2.9 EUR | A | 예 | 재검증 | [TMB Transports Metropolitans de Barcelona](https://www.tmb.cat/en/barcelona-fares-metro-bus/transport-ticket-fares) |
| BCN-TR-003 | 바르셀로나 | 트램 단일 승차권 | 2.9 EUR | A | 예 | 재검증 | [TMB Transports Metropolitans de Barcelona](https://www.tmb.cat/en/barcelona-fares-metro-bus/transport-ticket-fares) |
| BCN-TR-004 | 바르셀로나 | T-dia 1일 무제한 승차권 | 12 EUR | A | 예 | 재검증 | [TMB Transports Metropolitans de Barcelona](https://www.tmb.cat/en/barcelona-fares-metro-bus/transport-ticket-fares) |
| BCN-FD-008 | 바르셀로나 | 가라지 바 스페인 와인 1잔 | 6 EUR | A | 예 | 재검증 | [Garage Bar Barcelona](https://garagebar.cat/natural-wines-menu3/) |
| BCN-FD-009 | 바르셀로나 | 카사 모리츠 와인 상그리아 1잔 | 5.75 EUR | A | 예 | 재검증 | [Casa Moritz Barcelona](https://casamoritz.cat/wp-content/uploads/2025/09/AF-CM_CARTES-BEGUDES_JUN25_ENG_compressed.pdf) |
| BCN-SV-001 | 바르셀로나 | FC 바르셀로나 키링 | 12.99 EUR | A | 예 | 재검증 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-SV-002 | 바르셀로나 | FC 바르셀로나 머그컵 | 24.99 EUR | A | 예 | 재검증 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-SV-003 | 바르셀로나 | FC 바르셀로나 초콜릿 | 19.99 EUR | A | 예 | 재검증 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-AT-001 | 바르셀로나 | 사그라다 파밀리아 기본 입장권 | 26 EUR | A | 예 | 재검증 | [Sagrada Familia Official Website](https://sagradafamilia.org/en/prices) |
| BCN-AT-002 | 바르셀로나 | 사그라다 파밀리아 탑 포함 입장권 | 36 EUR | A | 예 | 재검증 | [Sagrada Familia Official Website](https://sagradafamilia.org/en/prices) |
| BCN-AT-003 | 바르셀로나 | 구엘 공원 일반 입장권 | 18 EUR | A | 예 | 재검증 | [Park Guell Official Website](https://parkguell.barcelona/en/planning-your-visit/prices-and-times) |
| BCN-AT-004 | 바르셀로나 | 카사 밀라 라 페드레라 일반 입장권 | 29~35 EUR | A | 예 | 재검증 | [La Pedrera Official Website](https://www.lapedrera.com/en/tickets/) |
| BCN-AT-005 | 바르셀로나 | 카사 바트요 일반 입장권 | 29~37 EUR | A | 예 | 재검증 | [Casa Batllo Official Website](https://www.casabatllo.es/en/online-tickets/) |
| PUS-TR-001 | 부산 | 부산 도시철도 1구간 (교통카드) | 1600 KRW | A | 예 | 재검증 | [부산교통공사](https://www.humetro.busan.kr/default/main.do) |
| PUS-TR-002 | 부산 | 부산 도시철도 2구간 (교통카드) | 1800 KRW | A | 예 | 재검증 | [부산교통공사](https://www.humetro.busan.kr/default/main.do) |
| PUS-TR-003 | 부산 | 부산 시내버스 일반 (교통카드) | 1550 KRW | A | 예 | 재검증 | [부산광역시 버스정보관리시스템](https://bus.busan.go.kr/) |
| PUS-TR-004 | 부산 | 부산 급행버스 (교통카드) | 2100 KRW | A | 예 | 재검증 | [부산광역시 버스정보관리시스템](https://bus.busan.go.kr/) |
| PUS-TR-005 | 부산 | 부산 도시철도 1일권 | 5000 KRW | A | 예 | 재검증 | [부산교통공사](https://www.humetro.busan.kr/default/main.do) |
| PUS-FD-001 | 부산 | 본전돼지국밥 돼지국밥 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 본전돼지국밥 매장 공식 메뉴](https://map.naver.com/p/entry/place/11568285) |
| PUS-FD-002 | 부산 | 초량밀면 물밀면 (소) | 7000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 초량밀면 매장 공식 메뉴](https://map.naver.com/p/entry/place/11603507) |
| PUS-FD-003 | 부산 | 개미집 낙곱새볶음 (1인분) | 14000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [개미집 공식 매장 메뉴판](https://map.naver.com/p/entry/place/11628169) |
| PUS-FD-004 | 부산 | 고래사어묵 어우동 | 8000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [고래사어묵 해운대점 매장 메뉴](https://map.naver.com/p/entry/place/36737521) |
| PUS-FD-005 | 부산 | 수변최고돼지국밥 고기국밥 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [수변최고돼지국밥 매장 공식 메뉴](https://map.naver.com/p/entry/place/12836262) |
| PUS-FD-006 | 부산 | 컴포즈커피 아메리카노 (HOT/ICE) | 1500 KRW | A | 예 | 재검증 | [컴포즈커피 공식홈페이지](https://composecoffee.com/menu_coffee) |
| PUS-FD-007 | 부산 | 모모스커피 오늘의 드립커피 | 6000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [모모스커피 온천장 본점 메뉴](https://map.naver.com/p/entry/place/12108752) |
| PUS-FD-008 | 부산 | BIFF거리 씨앗호떡 | 2000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [남포동 BIFF거리 노점 공통 가격게시](https://map.naver.com/p/entry/place/12134547) |
| PUS-FD-009 | 부산 | 대선주조 대선소주 | 1950 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| PUS-FD-010 | 부산 | CU 편의점 켈리 캔맥주 | 2800 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| PUS-FD-011 | 부산 | 식당 일반 소주/맥주 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [본전돼지국밥 매장 공식 주류 메뉴](https://map.naver.com/p/entry/place/11568285) |
| PUS-SV-001 | 부산 | 삼진어묵 1953세트 1호 | 23000 KRW | A | 예 | 재검증 | [삼진어묵 공식 온라인 직영몰](https://www.samjinfood.com/goods/goods_view.php?goodsNo=1000000301) |
| PUS-SV-002 | 부산 | 부산바다샌드 1상자 (9개입) | 17500 KRW | C | 조건부 | C등급, 조건부, 재검증 | [부산바다샌드 공식 매장 메뉴](https://map.naver.com/p/entry/place/1694939243) |
| PUS-SV-003 | 부산 | 부산관광기념품점 광안대교 자개 마그넷 | 8000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [부산관광기념품점 공식 안내](https://map.naver.com/p/entry/place/1971758950) |
| PUS-AT-001 | 부산 | 부산엑스 더 스카이 전망대 (대인) | 27000 KRW | A | 예 | 재검증 | [부산엑스더스카이 공식홈페이지](https://www.busanxthesky.com/sub/sub02_01.php) |
| PUS-AT-002 | 부산 | 부산엑스 더 스카이 전망대 (소인) | 24000 KRW | A | 예 | 재검증 | [부산엑스더스카이 공식홈페이지](https://www.busanxthesky.com/sub/sub02_01.php) |
| PUS-AT-003 | 부산 | 해운대 블루라인파크 해변열차 편도 (성인) | 7000 KRW | A | 예 | 재검증 | [해운대블루라인파크 공식홈페이지](https://www.bluelinepark.com/fareInfo.do) |
| PUS-AT-005 | 부산 | 송도해상케이블카 에어크루즈 왕복 (대인) | 17000 KRW | A | 예 | 재검증 | [송도해상케이블카 공식홈페이지](http://busanaircruise.co.kr/main/sub.html?Mode=view&BoardID=fare) |
| PUS-AT-006 | 부산 | 송도해상케이블카 에어크루즈 왕복 (소인) | 12000 KRW | A | 예 | 재검증 | [송도해상케이블카 공식홈페이지](http://busanaircruise.co.kr/main/sub.html?Mode=view&BoardID=fare) |
| PUS-AT-007 | 부산 | 롯데월드 어드벤처 부산 종일 종합이용권 (어른) | 47000 KRW | A | 예 | 재검증 | [롯데월드 어드벤처 부산 공식홈페이지](https://adventurebusan.lotteworld.com/kor/price/ticket/information/index.do) |
| PUS-AT-008 | 부산 | 스카이라인 루지 부산 3회권 (1인) | 30000 KRW | A | 예 | 재검증 | [스카이라인루지 부산 공식홈페이지](https://www.skylineluge.kr/busan/prices/) |
| PUS-AT-009 | 부산 | SEA LIFE 부산아쿠아리움 입장권 (대인) | 31000 KRW | A | 예 | 재검증 | [씨라이프 부산아쿠아리움 공식홈페이지](https://www.visitsealife.com/busan/tickets/) |
| PUS-AT-010 | 부산 | 부산시립박물관 상설전시 | 0 KRW | A | 예 | 재검증 | [부산박물관 공식홈페이지](https://museum.busan.go.kr/busan/viewinfo01) |
| CJU-TR-001 | 제주 | 제주 간선/지선버스 기본요금 (카드) | 1150 KRW | A | 예 | 재검증 | [제주버스정보시스템](http://bus.jeju.go.kr/guide/fare) |
| CJU-TR-002 | 제주 | 제주 급행버스 기본/구간요금 (카드) | 2000~3000 KRW | A | 예 | 재검증 | [제주버스정보시스템](http://bus.jeju.go.kr/guide/fare) |
| CJU-TR-003 | 제주 | 제주 관광지순환버스 1회권 (카드) | 1150 KRW | A | 예 | 재검증 | [제주관광지순환버스 공식홈페이지](http://www.jejutourbus.com/sub02/sub01.php) |
| CJU-FD-001 | 제주 | 자매국수 고기국수 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 자매국수 공식 메뉴판](https://map.naver.com/p/entry/place/13570691) |
| CJU-FD-002 | 제주 | 올래국수 고기국수 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 올래국수 공식 메뉴판](https://map.naver.com/p/entry/place/11728283) |
| CJU-FD-003 | 제주 | 숙성도 숙성 흑돼지 (1인분 200g) | 22000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [숙성도 노형본관 매장 공식 메뉴판](https://map.naver.com/p/entry/place/1070809277) |
| CJU-FD-004 | 제주 | 오조해녀의집 전복죽 | 13000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 오조해녀의집 공식 메뉴판](https://map.naver.com/p/entry/place/11831417) |
| CJU-FD-005 | 제주 | 진두강정 전복해물뚝배기 | 15000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 삼보식당 공식 메뉴판](https://map.naver.com/p/entry/place/11831343) |
| CJU-FD-006 | 제주 | 에이바우트커피 아메리카노 (모닝할인/일반) | 1900~2900 KRW | A | 예 | 재검증 | [에이바우트커피 공식홈페이지](https://aboutcoffee.co.kr/) |
| CJU-FD-007 | 제주 | 동문시장 착즙 한라봉주스 (1병) | 4000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [동문시장 공식 판매처 가격표시](https://map.naver.com/p/entry/place/11624838) |
| CJU-FD-008 | 제주 | 동문시장 원조 오메기떡 (낱개 1개) | 1000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [네이버 플레이스 진아떡집 공식 메뉴](https://map.naver.com/p/entry/place/11831418) |
| CJU-FD-009 | 제주 | 한라산 21도 소주 | 1950 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| CJU-FD-010 | 제주 | 제주맥주 제주위트에일 캔 | 4500 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| CJU-FD-011 | 제주 | 식당 한라산 소주/카스 맥주 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [자매국수 매장 공식 주류 메뉴판](https://map.naver.com/p/entry/place/13570691) |
| CJU-SV-001 | 제주 | 제주 마음샌드 (10개입) | 16000 KRW | A | 예 | 재검증 | [파리바게뜨 파바앱 공식 예약](https://www.paris.co.kr/) |
| CJU-SV-002 | 제주 | 제주 감귤 초콜릿 선물세트 | 10000 KRW | A | 예 | 재검증 | [이제주숍 공식 특산물 온라인몰](https://mall.ejeju.net/) |
| CJU-SV-003 | 제주 | 돌하르방 현무암 감귤 마그넷 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증 | [제주기념품점 공식 안내](https://map.naver.com/p/entry/place/11624838) |
| CJU-AT-001 | 제주 | 성산일출봉 유료관람권 (성인) | 5000 KRW | A | 예 | 재검증 | [제주세계유산축전 성산일출봉 공식안내](https://www.jeju.go.kr/heritage/heritage/seongsan.htm) |
| CJU-AT-002 | 제주 | 성산일출봉 유료관람권 (어린이) | 2500 KRW | A | 예 | 재검증 | [제주세계유산축전 성산일출봉 공식안내](https://www.jeju.go.kr/heritage/heritage/seongsan.htm) |
| CJU-AT-003 | 제주 | 만장굴 입장료 (어른) | 4000 KRW | A | 예 | 재검증 | [제주세계자연유산센터 공식안내](https://www.jeju.go.kr/wnhcenter/geology/manjang.htm) |
| CJU-AT-004 | 제주 | 만장굴 입장료 (어린이) | 2000 KRW | A | 예 | 재검증 | [제주세계자연유산센터 공식안내](https://www.jeju.go.kr/wnhcenter/geology/manjang.htm) |
| CJU-AT-005 | 제주 | 아쿠아플라넷 제주 종합권 (대인) | 42400 KRW | A | 예 | 재검증 | [아쿠아플라넷 제주 공식홈페이지](https://www.aquaplanet.co.kr/jeju/index.do) |
| CJU-AT-006 | 제주 | 아쿠아플라넷 제주 종합권 (어린이) | 38500 KRW | A | 예 | 재검증 | [아쿠아플라넷 제주 공식홈페이지](https://www.aquaplanet.co.kr/jeju/index.do) |
| CJU-AT-007 | 제주 | 신화테마파크 자유이용권 (1인) | 30000 KRW | A | 예 | 재검증 | [제주신화월드 공식홈페이지](https://www.shinhwaworld.com/park.php?url_lang=ko_KR) |
| CJU-AT-008 | 제주 | 오설록 티뮤지엄 본관 관람 | 0 KRW | A | 예 | 재검증 | [오설록 공식홈페이지 티뮤지엄 안내](https://www.osulloc.com/kr/ko/museum) |
| CJU-AT-009 | 제주 | 천지연폭포 관람료 (어른) | 2000 KRW | A | 예 | 재검증 | [서귀포시 공영관광지 관람안내](https://www.seogwipo.go.kr/) |
| CJU-AT-010 | 제주 | 천지연폭포 관람료 (어린이) | 1000 KRW | A | 예 | 재검증 | [서귀포시 공영관광지 관람안내](https://www.seogwipo.go.kr/) |
| NYC-TR-001 | 뉴욕 | 지하철·시내버스 기본 요금 | 3 USD | A | 예 | 재검증 | [MTA](https://www.mta.info/fares-tolls/subway-bus) |
| NYC-TR-002 | 뉴욕 | 급행버스 기본 요금 | 7.25 USD | A | 예 | 재검증 | [MTA](https://www.mta.info/fares-tolls/subway-bus) |
| NYC-TR-003 | 뉴욕 | NYC 페리 성인 편도 | 4.5 USD | A | 예 | 재검증 | [NYC Ferry](https://www.ferry.nyc/ticketing-info/) |
| NYC-TR-004 | 뉴욕 | LIRR 시티티켓 비혼잡 시간 | 5.25 USD | A | 예 | 재검증 | [MTA LIRR](https://www.mta.info/fares-tolls/lirr-metro-north) |
| NYC-FD-101 | 뉴욕 | 셰이크쉑 쉑버거 | 7.69 USD | A | 예 | 재검증 | [Shake Shack](https://shakeshack.com/location/theater-district-ny) |
| NYC-FD-102 | 뉴욕 | 주니어스 체리 치즈케이크 1조각 | 9.95 USD | A | 예 | 재검증 | [Junior's Cheesecake](https://www.juniorscheesecake.com) |
| NYC-FD-103 | 뉴욕 | 휴스턴 홀 버거와 감자튀김 | 21.95 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-FD-202 | 뉴욕 | 휴스턴 홀 골든 라거 스몰 | 9.5 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-FD-203 | 뉴욕 | 휴스턴 홀 소비뇽 블랑 1잔 | 14.5 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-SV-101 | 뉴욕 | 메트 로고 비닐 토트백 | 55 USD | A | 예 | 재검증 | [The Met Store](https://store.metmuseum.org/met-logo-vinyl-tote-logovinyltote) |
| NYC-AT-001 | 뉴욕 | 자유의 여신상·엘리스섬 그라운드 티켓 | 23.5 USD | A | 예 | 재검증 | [Statue of Liberty & Ellis Island Foundation](https://www.statueofliberty.org/visit/faq-2/) |
| NYC-AT-002 | 뉴욕 | 엠파이어 스테이트 빌딩 86층 전망대 | 46 USD | A | 예 | 재검증 | [Empire State Building](https://www.esbnyc.com/buy-tickets) |
| NYC-AT-003 | 뉴욕 | 엠파이어 스테이트 빌딩 102층·86층 | 81 USD | A | 예 | 재검증 | [Empire State Building](https://www.esbnyc.com/buy-tickets) |
| NYC-AT-004 | 뉴욕 | 메트로폴리탄 미술관 성인 입장권 | 30 USD | A | 예 | 재검증 | [The Metropolitan Museum of Art](https://www.metmuseum.org/visit-guides/membership) |
| NYC-AT-005 | 뉴욕 | MoMA 성인 입장권 | 30 USD | A | 예 | 재검증 | [MoMA](https://www.moma.org/visit/tips) |
| NYC-AT-006 | 뉴욕 | 9/11 메모리얼 박물관 성인 입장권 | 33 USD | A | 예 | 재검증 | [9/11 Memorial & Museum](https://www.911memorial.org/visit/museum) |
| NYC-SV-111 | 뉴욕 | 메트 로고 접이식 우산 | 25 USD | A | 예 | 재검증 | [The Met Store](https://store.metmuseum.org/met-logo-folding-umbrella-80056083) |
| NYC-FD-121 | 뉴욕 | 카츠 델리 파스트라미 샌드위치 | 28.95 USD | A | 예 | 재검증 | [Katz's Delicatessen](https://katzsdelicatessen.com/) |
| NYC-SV-121 | 뉴욕 | 자유의 여신상 공식 숍 문서 홀더 소형 | 25 USD | A | 예 | 재검증 | [Statue of Liberty & Ellis Island Foundation](https://www.statueofliberty.org/product/logo-embossed-leatherette-eight-corner-document-holder-small/) |
| OSA-FD-901 | 오사카 | 이치란 돈코츠 라멘 | 1180 JPY | A | 예 | 재검증 | [一蘭 心斎橋店](https://ichiran.com/shop/kinki/shinsaibashi/) |
| OSA-FD-902 | 오사카 | 호텔 뉴오타니 오사카 SATSUKI 연어 허브버터 구이 | 3800 JPY | A | 예 | 재검증 | [ホテルニューオータニ大阪 SATSUKI](https://www.newotani.co.jp/en/osaka/restaurant/satsuki/) |
| BKK-SV-901 | 방콕 | 짐 톰슨 코끼리 실크 스카프 52인치 | 8500 THB | A | 예 | 재검증 | [Jim Thompson Official Shop](https://www.jimthompson.com/products/elephant-bath-silk-scarf-52-green) |
| DAD-FD-901 | 다낭 | 인더스 베지 파코라 | 119000 VND | A | 예 | 재검증 | [Indus Indian Restaurant Da Nang](https://www.indus.vn/menu/) |
| DAD-FD-902 | 다낭 | 인더스 치킨 티카 마살라 | 149000 VND | A | 예 | 재검증 | [Indus Indian Restaurant Da Nang](https://www.indus.vn/menu/) |
| SIN-FD-901 | 싱가포르 | 야쿤 카야토스트 버터 세트 | 5.6 SGD | A | 예 | 재검증 | [Ya Kun Kaya Toast](https://yakun.com.sg/) |
| SIN-FD-902 | 싱가포르 | 이치란 돈코츠 라멘 (싱가포르) | 11.8 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [一蘭 ICHIRAN Singapore](https://en.ichiran.com/np/shop/singapore/) |
| SIN-FD-903 | 싱가포르 | 올드창키 커리퍼프 | 2.2 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [Old Chang Kee](https://www.oldchangkee.com/dipngo.com.sg/menu.html) |
| SIN-SV-901 | 싱가포르 | 올드창키 커리퍼프 10개 상자 | 22 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [Old Chang Kee](https://www.oldchangkee.com/dipngo.com.sg/menu.html) |
| PAR-SV-901 | 파리 | 루브르 사모트라케의 니케 마그넷 | 4.9 EUR | A | 예 | 재검증 | [Louvre Official Boutique](https://boutique.louvre.fr/en/product/19430-magnet-victory-of-samothrace.html) |
| TYO-FD-951 | 도쿄 | 생맥주 아사히 슈퍼드라이·기린 하트랜드 (호텔 레스토랑) | 1000 JPY | A | 예 | 재검증 | [Hotel Metropolitan Edmont Tokyo Beltempo](https://edmont-tokyo.hotel-metropolitan.com/restaurant/list/beltempo/index.html) |
| TYO-FD-952 | 도쿄 | 생맥주 프리미엄 몰츠 (와카도리 마루노우치) | 630 JPY | C | 조건부 | C등급, 조건부, 재검증 | [Wakadori Marunouchi (restaurants-guide.tokyo)](https://restaurants-guide.tokyo/restaurants/drink/?id=95) |
| TYO-FD-953 | 도쿄 | 브루클린 라거 레귤러 (게이오 플라자 호텔) | 1850 JPY | A | 예 | 재검증, 세금·서비스료 별도 | [Keio Plaza Hotel Aurora](https://www.keioplaza.co.jp/en/restaurant/list/aurora/) |
| OSA-FD-951 | 오사카 | 프리미엄 몰츠 향기로운 에일 생맥주 소 | 550 JPY | A | 예 | 재검증 | [Shinsaibashi Kagura](https://www.kaguraosaka.com/en/menu/tabs/UQRGHn9cYQdfrsVJZDLa/) |
| OSA-FD-952 | 오사카 | 프리미엄 몰츠 중병 | 850 JPY | A | 예 | 재검증 | [Shinsaibashi Kagura](https://www.kaguraosaka.com/en/menu/tabs/UQRGHn9cYQdfrsVJZDLa/) |
| BKK-FD-951 | 방콕 | 창 클래식 맥주 330ml (루프톱 바) | 240 THB | A | 예 | 재검증 | [Rooftop Bar Sala Hospitality](https://www.salahospitality.com/rattanakosin-bangkok/wp-content/uploads/sites/4/2025/12/Rooftop-Bar-Drink-Menu-DEC.pdf) |
| BKK-FD-952 | 방콕 | 싱하 맥주 320ml (루프톱 바) | 240 THB | A | 예 | 재검증 | [Rooftop Bar Sala Hospitality](https://www.salahospitality.com/rattanakosin-bangkok/wp-content/uploads/sites/4/2025/12/Rooftop-Bar-Drink-Menu-DEC.pdf) |
| BKK-FD-953 | 방콕 | 하이네켄 320ml (루프톱 바) | 240 THB | A | 예 | 재검증 | [Rooftop Bar Sala Hospitality](https://www.salahospitality.com/rattanakosin-bangkok/wp-content/uploads/sites/4/2025/12/Rooftop-Bar-Drink-Menu-DEC.pdf) |
| DAD-FD-951 | 다낭 | 후다 생맥주 소 | 25000 VND | A | 예 | 재검증 | [The Mad Den Irish Bar Da Nang](https://themaddenirishbardanang.com/menu/) |
| DAD-FD-952 | 다낭 | 산미구엘 생맥주 대 | 50000 VND | A | 예 | 재검증 | [The Mad Den Irish Bar Da Nang](https://themaddenirishbardanang.com/menu/) |
| DAD-FD-953 | 다낭 | 이스트웨스트 퍼시픽 필스너 (루프톱) | 115000 VND | A | 예 | 재검증 | [The Roof Da Nang](https://www.theroofdanang.com/menu) |
| TPE-FD-951 | 타이베이 | 아사히 맥주 (호텔 라운지) | 250 TWD | A | 예 | 재검증, 세금·서비스료 별도 | [Courtyard by Marriott Taipei Lobby Lounge](https://www.courtyardtaipei.com.tw/uploads/restaurant_menu_pdf/39/5bf94d51756936d36a6a847dcbb71c97.pdf) |
| TPE-FD-952 | 타이베이 | 코로나 맥주 (호텔 라운지) | 250 TWD | A | 예 | 재검증, 세금·서비스료 별도 | [Courtyard by Marriott Taipei Lobby Lounge](https://www.courtyardtaipei.com.tw/uploads/restaurant_menu_pdf/39/5bf94d51756936d36a6a847dcbb71c97.pdf) |
| TPE-FD-953 | 타이베이 | 타이완 골드 맥주 (호텔 라운지) | 220 TWD | A | 예 | 재검증, 세금·서비스료 별도 | [Courtyard by Marriott Taipei Lobby Lounge](https://www.courtyardtaipei.com.tw/uploads/restaurant_menu_pdf/39/5bf94d51756936d36a6a847dcbb71c97.pdf) |
| SIN-FD-951 | 싱가포르 | 하이네켄 (리퍼블릭 바) | 18 SGD | A | 예 | 재검증, 세금·서비스료 별도 | [Republic Bar Singapore](https://www.republicbar.com.sg/resourcefiles/pdf/republic-vol-4-menu.pdf) |
| SIN-FD-952 | 싱가포르 | 아사히 (리퍼블릭 바) | 18 SGD | A | 예 | 재검증, 세금·서비스료 별도 | [Republic Bar Singapore](https://www.republicbar.com.sg/resourcefiles/pdf/republic-vol-4-menu.pdf) |
| SIN-FD-953 | 싱가포르 | 타이거 (리퍼블릭 바) | 18 SGD | A | 예 | 재검증, 세금·서비스료 별도 | [Republic Bar Singapore](https://www.republicbar.com.sg/resourcefiles/pdf/republic-vol-4-menu.pdf) |
| PAR-FD-951 | 파리 | 크로넨부르 1664 25cl | 6.9 EUR | A | 예 | 재검증 | [Le Do Ré Mi Paris](https://www.ledoremiparis.fr/en/menus/) |
| PAR-FD-952 | 파리 | 브라스리 리프 블롱드 25cl | 7 EUR | A | 예 | 재검증 | [Brasserie Lipp](https://www.brasserielipp.fr/en/menus/) |
| PAR-FD-953 | 파리 | 드모리 IPA 25cl | 6.9 EUR | A | 예 | 재검증 | [Le Do Ré Mi Paris](https://www.ledoremiparis.fr/en/menus/) |
| LON-FD-951 | 런던 | 런던 프라이드 1파인트 (풀러스 펍) | 5.5 GBP | A | 예 | 재검증, 검수: 출처 확인 필요 | [Fuller's Pubs London](https://www.fullers.co.uk/pubs/pub-finder/london) |
| LON-FD-952 | 런던 | 기네스 1파인트 (풀러스 펍) | 6.2 GBP | A | 예 | 재검증, 검수: 출처 확인 필요 | [Fuller's Pubs London](https://www.fullers.co.uk/pubs/pub-finder/london) |
| LON-FD-953 | 런던 | 페로니 1파인트 (풀러스 펍) | 6 GBP | A | 예 | 재검증, 검수: 출처 확인 필요 | [Fuller's Pubs London](https://www.fullers.co.uk/pubs/pub-finder/london) |
| DAD-FD-911 | 다낭 | 쿠치나 루카 해산물 스파게티 | 310000 VND | A | 예 | 재검증 | [Cucina Luca Da Nang](https://cucinaluca.vn/) |
| TPE-FD-911 | 타이베이 | 광표우육면 홍소 우육면 | 169 TWD | C | 조건부 | C등급, 조건부, 재검증 | [광표우육면 (foodpanda)](https://www.foodpanda.com.tw/en/restaurant/sjcf/kuang-biao-niu-rou-mian) |
| TPE-FD-912 | 타이베이 | 문가우육면 삼보 우육면 | 210 TWD | C | 조건부 | C등급, 조건부, 재검증 | [문가우육면 (foodpanda)](https://www.foodpanda.com.tw/restaurant/r2nr/wen-jia-niu-rou-mian) |
| SIN-FD-911 | 싱가포르 | 맥도날드 빅맥 | 7.95 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [McDonald's Singapore](https://www.mcdonalds.com.sg/full-menu) |
| ROM-TR-101 | 로마 | 로마 48시간권 | 15 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-TR-102 | 로마 | 로마 72시간권 | 22 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-TR-103 | 로마 | 트레니탈리아 지역열차 편도 성인 | 1.9~9 EUR | A | 예 | 재검증 | [Trenitalia](https://www.trenitalia.com/en/connections/regionale-trains.html) |
| ROM-SV-101 | 로마 | 바티칸 박물관 공식 숍 아테네 학당 머그컵 | 9 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/QuickSearch.do) |
| ROM-SV-102 | 로마 | 바티칸 박물관 공식 숍 시스티나 천장 퍼즐 540조각 | 15 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/ALTRI-PRODOTTI/Puzzle/Opera-Sillabe/Puzzle-540-Pezzi-%E2%80%93-Volta-Cappella-Sistina/E757/2_630.do) |
| ROM-SV-103 | 로마 | 바티칸 박물관 공식 숍 2026 다이어리 | 10 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/Musei-Vaticani/Agenda-2026-Musei-Vaticani/E010/2_1539.do) |
| ROM-TR-201 | 로마 | 트레니탈리아 로마 시내(Anello) 지역열차 1회권 | 1 EUR | A | 예 | 재검증 | [Trenitalia](https://www.trenitalia.com/content/dam/trenitalia/allegati/info/condizioni-generali-di-trasporto/parte-iii-trasporto-regionale/tariffe-14/Tariffa_14_RM.pdf) |
| ROM-TR-001 | 로마 | BIT 통합 100분권 | 1.5 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/bit) |
| ROM-TR-004 | 로마 | 로마 24시간권 | 8.5 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-FD-101 | 로마 | 단테스 바 토마토 바질 파스타 | 8 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-102 | 로마 | 카페 리페타 아마트리차나 | 10 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Caffe Ripetta (quandoo)](https://www.quandoo.it/en/place/caffe-ripetta-95692/menu) |
| ROM-FD-103 | 로마 | 단테스 바 피자 마르게리타 | 10 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-104 | 로마 | 그란 카페 로시 마르티니 리가토니 카르보나라 | 15 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Gran Caffe Rossi Martini (quandoo)](https://www.quandoo.it/en/place/gran-caffe-rossi-martini-48508/menu) |
| ROM-FD-105 | 로마 | 단테스 바 고기 세트 메뉴 | 22 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-201 | 로마 | 지올리티 젤라토 컵 | 3~3.5 EUR | A | 예 | 재검증, 검수: 출처 확인 필요 | [Giolitti](https://www.giolitti.it/en/) |
| ROM-FD-202 | 로마 | 카페 참피니 에스프레소 | 1.2 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Caffe Ciampini (quandoo)](https://www.quandoo.it/en/place/caffe-ciampini-21378/menu) |
| ROM-FD-203 | 로마 | 카페 참피니 카푸치노 | 1.5 EUR | C | 조건부 | C등급, 조건부, 재검증 | [Caffe Ciampini (quandoo)](https://www.quandoo.it/en/place/caffe-ciampini-21378/menu) |
| ROM-FD-301 | 로마 | 라 사피엔자 대학 바 병맥주 33cl | 2.05~3.1 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-FD-302 | 로마 | 라 사피엔자 대학 바 레드 와인 1잔 | 2.2 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-FD-303 | 로마 | 라 사피엔자 대학 바 프로세코 1잔 | 2.5 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-AT-001 | 로마 | 콜로세움·포로 로마노·팔라티노 통합 입장권 | 16 EUR | A | 예 | 재검증, 검수: 요금 확인 필요 | [CoopCulture](https://www.coopculture.it/en/tickets/) |
| ROM-AT-002 | 로마 | 바티칸 박물관·시스티나 성당 입장권 | 20~25 EUR | A | 예 | 재검증 | [Vatican Museums](https://www.museivaticani.va/content/museivaticani/en/organizza-visita/tariffe-e-biglietti.html) |
| ROM-AT-004 | 로마 | 보르게세 미술관 입장권 | 15 EUR | A | 예 | 재검증 | [Galleria Borghese](https://galleriaborghese.beniculturali.it/en/) |
| ROM-AT-005 | 로마 | 산탄젤로 성 입장권 | 12~16 EUR | A | 예 | 재검증 | [Castel Sant'Angelo](http://castelsantangelo.beniculturali.it/getFile.php?id=538) |
| SEL-FD-101 | 서울 | 한솥 제육 비빔밥 | 6500 KRW | A | 예 | 재검증 | [HANSOT 한솥](https://en.hsd.co.kr/Menu) |
| SEL-FD-102 | 서울 | 한솥 김치볶음밥 | 4400 KRW | A | 예 | 재검증 | [HANSOT 한솥](https://en.hsd.co.kr/Menu) |
| SEL-FD-103 | 서울 | 골드참치 점심 코스 B | 35000 KRW | A | 예 | 재검증 | [Goldtuna 골드참치](https://www.goldtuna.co.kr/en) |
| SEL-SV-101 | 서울 | 서울마이소울 리본 모자 | 49000 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://english.seoul.go.kr/the-cap-with-2-7-million-views-on-japanese-social-media-seoul-merch-wins-over-international-visitors/) |
| SEL-SV-102 | 서울 | 서울굿즈 쌀과자 4개 묶음 | 5450 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://love.seoul.go.kr/articles/10473) |
| SEL-SV-103 | 서울 | 서울굿즈 에코백 | 15000 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://love.seoul.go.kr/articles/10473) |

## 4. 교차 검수 현황

`data/reviews/*.csv` 에서 읽은 판정: 일치 0건 · 불일치 0건 · 확인불가 0건.
아직 "일치" 판정이 없는 표본은 `data/cross-check-queue.csv` 에 모여 있습니다(교차 검수 담당에게 그대로 전달).
