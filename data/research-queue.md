# 조사 요청 목록 (자동 생성)

> `npm run data:convert` 가 `travel_cost_research_pilot_v0.4_2026-10-03.xlsx` (v0.4) 로부터 만든 파일입니다. 직접 고치지 마세요.
> 기준: 바스켓마다 **독립 표본 3건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).
> 수치는 가격 원장과 계산 코드로 다시 만든 것입니다. 엑셀의 "도시 초안"·"다음 조사 큐" 시트 수치는 쓰지 않습니다(작성 시점이 달라 오래된 값이 있을 수 있음).

## 1. 계산을 막는 부족 바스켓

| 도시 | 바스켓 | 현재 독립 표본 | 필요 | 필요한 자료 |
| --- | --- | --- | --- | --- |
| 오사카 | 식사 | 2 | 1건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 방콕 | 기념품 | 2 | 1건 더 | 다른 상품의 기념품 공식 판매가(같은 상품의 용량 차이는 1건으로 셈) |
| 다낭 | 식사 | 1 | 2건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 타이베이 | 식사 | 1 | 2건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 싱가포르 | 식사 | 0 | 3건 더 | 다른 식당의 한 끼 식사 공식 메뉴 가격 |
| 싱가포르 | 기념품 | 2 | 1건 더 | 다른 상품의 기념품 공식 판매가(같은 상품의 용량 차이는 1건으로 셈) |
| 파리 | 기념품 | 2 | 1건 더 | 다른 상품의 기념품 공식 판매가(같은 상품의 용량 차이는 1건으로 셈) |

## 2. 보강하면 좋은 바스켓(계산은 가능)

| 도시 | 바스켓 | 현재 독립 표본 | 메모 |
| --- | --- | --- | --- |
| 도쿄 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 도쿄 | 간식·음료 | 0 | 간식·음료 공식 메뉴 가격(선택 바스켓) |
| 오사카 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
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
| SEL-TR-001 | 서울 | 서울 지하철 기본요금 (카드) | 1400 KRW | A | 예 | 재검증, 검수: 요금 개정 확인 필요 | [서울교통공사](http://www.seoulmetro.co.kr/kr/page.do?menuIdx=354) |
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
