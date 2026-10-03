# 조사 요청 목록 (자동 생성)

> `npm run data:convert` 가 `travel_cost_research_pilot_v0.4_2026-10-03.xlsx` (v0.4) 로부터 만든 파일입니다. 직접 고치지 마세요.
> 기준: 바스켓마다 **독립 표본 3건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).
> 수치는 가격 원장과 계산 코드로 다시 만든 것입니다. 엑셀의 "도시 초안"·"다음 조사 큐" 시트 수치는 쓰지 않습니다(작성 시점이 달라 오래된 값이 있을 수 있음).

## 1. 계산을 막는 부족 바스켓

| 도시 | 바스켓 | 현재 독립 표본 | 필요 | 필요한 자료 |
| --- | --- | --- | --- | --- |
| 다낭 | 식사 | 2 | 1건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 타이베이 | 식사 | 1 | 2건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 싱가포르 | 식사 | 2 | 1건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |

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
| 타이베이 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 싱가포르 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 파리 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 파리 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 런던 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 런던 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 서울 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
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
| SEL-TR-001 | 서울 | 서울 지하철 기본요금 (카드) | 1550 KRW | A | 예 | 재검증 | [서울교통공사](http://www.seoulmetro.co.kr/kr/page.do?menuIdx=354) |
| SEL-TR-002 | 서울 | 서울 간선/지선버스 기본요금 (카드) | 1500 KRW | A | 예 | 재검증 | [서울특별시 대중교통 요금안내](https://news.seoul.go.kr/traffic/archives/508682) |
| SEL-TR-003 | 서울 | 서울 순환/차등버스 기본요금 (카드) | 1400 KRW | A | 예 | 재검증 | [서울특별시 대중교통 요금안내](https://news.seoul.go.kr/traffic/archives/508682) |
| SEL-TR-004 | 서울 | 기후동행카드 관광권 1일권 | 5000 KRW | A | 예 | 재검증 | [서울교통공사 기후동행카드 안내](http://www.seoulmetro.co.kr/kr/page.do?menuIdx=914) |
| SEL-FD-001 | 서울 | 이삭토스트 햄치즈 토스트 | 3300 KRW | A | 예 | 재검증 | [이삭토스트 공식홈페이지](https://www.isaac-toast.co.kr/bbs/board.php?bo_table=menu) |
| SEL-FD-002 | 서울 | 바르다김선생 바른 김밥 | 4500 KRW | A | 예 | 재검증 | [바르다김선생 공식홈페이지](https://www.teacherkim.co.kr/menu/view.php?idx=1) |
| SEL-FD-003 | 서울 | 놀부부대찌개 (1인분) | 10500 KRW | A | 예 | 재검증 | [놀부부대찌개 공식홈페이지](https://www.nolboo.co.kr/brand/menu.asp?b_code=BUDAE) |
| SEL-FD-004 | 서울 | 백암순대국밥 | 10000 KRW | A | 예 | 재검증 | [조암골백암순대 공식홈페이지](http://www.baegam.co.kr/sub/sub02_01.php) |
| SEL-FD-005 | 서울 | 원할머니보쌈 1인 보쌈세트 | 12000 KRW | A | 예 | 재검증 | [원할머니보쌈족발 공식홈페이지](https://bossam.co.kr/menu/one_person/) |
| SEL-FD-006 | 서울 | 이디야커피 아메리카노 (라지) | 3200 KRW | A | 예 | 재검증 | [이디야커피 공식홈페이지](https://www.ediya.com/contents/drink.html) |
| SEL-FD-007 | 서울 | 메가MGC커피 아메리카노 (HOT) | 1500 KRW | A | 예 | 재검증 | [메가MGC커피 공식홈페이지](https://www.mega-mgccoffee.com/menu/menu.php?menu_category1=1) |
| SEL-FD-008 | 서울 | 설빙 인절미설빙 | 9500 KRW | A | 예 | 재검증 | [설빙 공식홈페이지](https://sulbing.com/bbs/board.php?bo_table=menu&sca=SULBING) |
| SEL-FD-009 | 서울 | CU 편의점 카스 후레쉬 캔 | 2800 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| SEL-FD-010 | 서울 | CU 편의점 참이슬 후레쉬 | 1950 KRW | A | 예 | 재검증 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| SEL-FD-011 | 서울 | 교촌치킨 생맥주 | 5000 KRW | A | 예 | 재검증 | [교촌치킨 공식 웹주문 페이지](https://www.kyochon.com/menu/drink.asp) |
| SEL-SV-001 | 서울 | 정관장 활기력 (20ml x 10병) | 30000 KRW | A | 예 | 재검증 | [정관장 공식몰 케이지씨몰](https://www.kgc.co.kr/goods/detail.do?gno=201506040003) |
| SEL-SV-002 | 서울 | 오리온 마켓오 리얼브라우니 (8개입) | 3600 KRW | A | 예 | 재검증 | [오리온 공식 직영스토어](https://smartstore.naver.com/orion_store/products/5679549323) |
| SEL-SV-003 | 서울 | 국립중앙박물관 뮤지엄숍 뮷즈 자개 마그넷 | 7000 KRW | A | 예 | 재검증 | [국립박물관문화재단 뮷즈(MU:DS) 공식몰](https://www.museumshop.or.kr/shop/goods/goods_view.php?goodsno=3619) |
| SEL-AT-001 | 서울 | 경복궁 관람권 (성인) | 3000 KRW | A | 예 | 재검증 | [문화재청 경복궁관리소](https://www.royalpalace.go.kr/content/guide/guide01_tab01.asp) |
| SEL-AT-002 | 서울 | 창덕궁 관람권 (성인) | 3000 KRW | A | 예 | 재검증 | [문화재청 창덕궁관리소](http://www.cdg.go.kr/default/menu/menu.do?flg=K0101) |
| SEL-AT-003 | 서울 | 덕수궁 관람권 (성인) | 1000 KRW | A | 예 | 재검증 | [문화재청 덕수궁관리소](https://www.deoksugung.go.kr/c/schedule/info/1) |
| SEL-AT-004 | 서울 | N서울타워 전망대 입장권 (대인) | 21000 KRW | A | 예 | 재검증 | [N서울타워 공식홈페이지](https://www.nseoultower.co.kr/visit/floor.asp) |
| SEL-AT-005 | 서울 | N서울타워 전망대 입장권 (소인) | 16000 KRW | A | 예 | 재검증 | [N서울타워 공식홈페이지](https://www.nseoultower.co.kr/visit/floor.asp) |
| SEL-AT-006 | 서울 | 서울스카이 일반티켓 (어른) | 31000 KRW | A | 예 | 재검증 | [롯데월드타워 서울스카이 공식홈페이지](https://seoulsky.lotteworld.com/ko/ticket/charge/index.do) |
| SEL-AT-007 | 서울 | 서울스카이 일반티켓 (어린이) | 27000 KRW | A | 예 | 재검증 | [롯데월드타워 서울스카이 공식홈페이지](https://seoulsky.lotteworld.com/ko/ticket/charge/index.do) |
| SEL-AT-008 | 서울 | 롯데월드 어드벤처 1일 종합이용권 (어른) | 62000 KRW | A | 예 | 재검증 | [롯데월드 어드벤처 공식홈페이지](https://adventure.lotteworld.com/kor/price/ticket/information/index.do) |
| SEL-AT-009 | 서울 | 롯데월드 어드벤처 1일 종합이용권 (어린이) | 47000 KRW | A | 예 | 재검증 | [롯데월드 어드벤처 공식홈페이지](https://adventure.lotteworld.com/kor/price/ticket/information/index.do) |
| SEL-AT-010 | 서울 | 국립중앙박물관 상설전시 | 0 KRW | A | 예 | 재검증 | [국립중앙박물관 공식홈페이지](https://www.museum.go.kr/site/main/content/tour_guide) |

## 4. 교차 검수 현황

`data/reviews/*.csv` 에서 읽은 판정: 일치 0건 · 불일치 0건 · 확인불가 0건.
아직 "일치" 판정이 없는 표본은 `data/cross-check-queue.csv` 에 모여 있습니다(교차 검수 담당에게 그대로 전달).
