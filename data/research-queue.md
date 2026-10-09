# 조사 요청 목록 (자동 생성)

> `npm run data:convert` 가 `travel_cost_research_pilot_v0.9i_2026-10-04.xlsx` (v0.9i) 로부터 만든 파일입니다. 직접 고치지 마세요.
> 기준: 바스켓마다 **독립 표본 3건 이상**(같은 출처·같은 상품의 용량·기간·요일 변형, 같은 명소의 관람 옵션은 1건).
> 수치는 가격 원장과 계산 코드로 다시 만든 것입니다. 엑셀의 "도시 초안"·"다음 조사 큐" 시트 수치는 쓰지 않습니다(작성 시점이 달라 오래된 값이 있을 수 있음).

## 1. 계산을 막는 부족 바스켓

| 도시 | 바스켓 | 현재 독립 표본 | 필요 | 필요한 자료 |
| --- | --- | --- | --- | --- |
| - | - | - | - | 없음: 모든 파일럿 도시 계산 가능 |

## 2. 보강하면 좋은 바스켓(계산은 가능)

| 도시 | 바스켓 | 현재 독립 표본 | 메모 |
| --- | --- | --- | --- |
| 오사카 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 방콕 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 다낭 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 타이베이 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 싱가포르 | 1일 이용권 | 2 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 파리 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 런던 | 1일 이용권 | 2 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 세부 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 바르셀로나 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 로마 | 1일 이용권 | 2 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 뉴욕 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 이스탄불 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 상하이 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 후쿠오카 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 서울 | 1일 이용권 | 2 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 부산 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 제주 | 1일 이용권 | 0 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |
| 삿포로 | 1일 이용권 | 1 | 다른 운영사·다른 상품의 1일(24시간) 이용권 공식 가격 |

## 3. 공식 재검증이 필요한 표본

계산 대상 바스켓에 들어가는 표본 중 출처가 공식(A)이 아니거나, 모델 사용이 "조건부"이거나, 재검증·시작가·세금 별도 표기인 표본입니다.
공식 판매 주체 페이지에서 같은 가격을 확인하면 엑셀에서 등급·모델 사용·상태를 올려 주세요.

| ID | 도시 | 항목 | 가격 | 등급 | 모델 사용 | 사유 | 출처 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TYO-AT-001 | 도쿄 | 도쿄 스카이트리 콤보권 | 3000~4800 JPY | A | 조건부 | 조건부 | [Tokyo Skytree](https://www.tokyo-skytree.jp/datas/files/2026/03/19/da1ebeff3b1d6bbfa26f052f2d6a99c9a33b8143.pdf) |
| OSA-AT-001 | 오사카 | 우메다 스카이빌딩 전망대 | 2000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-002 | 오사카 | HEP FIVE 관람차 | 1000 JPY | B | 조건부 | B등급, 조건부 | [Osaka Amazing Pass](https://osaka-amazing-pass.com/en/service_free.html) |
| OSA-AT-003 | 오사카 | 산타마리아 데이크루즈 | 2000 JPY | A | 조건부 | 조건부 | [Osaka Suijyo Bus](https://suijo-bus.osaka/cruiselist/santamaria/) |
| OSA-FD-001 | 오사카 | 타코야키 6개 | 630 JPY | A | 예 | 검수: 원문 확인 불가 | [Takohachi](https://www.takohachi.jp/wp-content/uploads/2025/03/f9d7c787c113f386cc64c16c2608abb4.pdf) |
| OSA-SV-003 | 오사카 | 리쿠로 선물 파이 8개 | 980 JPY | A | 조건부 | 조건부, 재검증 | [Rikuro](https://www.rikuro.co.jp/newsitem/1647.html) |
| BKK-TR-001 | 방콕 | BTS 1일권 | 150 THB | A | 예 | 검수: 원문 확인 불가 | [BTS](https://www.bts.co.th/eng/tickets/ticket-daypass.html) |
| BKK-AT-002 | 방콕 | 왓 아룬 입장권 | 200 THB | B | 조건부 | B등급, 조건부, 검수: 원문 확인 불가 | [Tourism Authority of Thailand](https://www.tourismthailand.org/Attraction/wat-arun-or-temple-of-dawn) |
| BKK-FD-003 | 방콕 | 강새우 팟타이 | 450 THB | A | 예 | 세금·서비스료 별도 | [ChomSindh at Amari Bangkok](https://www.amari.com/bangkok/dine/chomsindh) |
| DAD-AT-001 | 다낭 | 선월드 바나힐 입장권 | 1000000 VND | A | 조건부 | 조건부, 재검증 | [Sun World Ba Na Hills](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-002 | 다낭 | 오행산 입장권 | 40000 VND | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| DAD-AT-003 | 다낭 | 오행산 엘리베이터 왕복 | 30000 VND | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Marble Mountains visitor guide](https://nguhanhson.org/) |
| TPE-SV-001 | 타이베이 | 치아더 펑리수 6개 | 252 TWD | A | 예 | 검수: 원문 확인 불가 | [Chia Te Bakery](https://chiate88.com.tw/Product/%E6%98%A5%E7%AF%80%E5%8F%AF%E9%A0%90%E8%A8%82%E7%9A%84%E5%95%86%E5%93%81/%E9%B3%B3%E9%BB%83%E9%85%A5) |
| TPE-SV-002 | 타이베이 | 치아더 펑리수 12개 | 504 TWD | A | 예 | 검수: 원문 확인 불가 | [Chia Te Bakery](https://chiate88.com.tw/Product/%E6%98%A5%E7%AF%80%E5%8F%AF%E9%A0%90%E8%A8%82%E7%9A%84%E5%95%86%E5%93%81/%E9%B3%B3%E9%BB%83%E9%85%A5) |
| SIN-TR-001 | 싱가포르 | 싱가포르 투어리스트 패스 | 17 SGD | A | 예 | 시작가 표기 | [SimplyGo](https://simplygo.com.sg/locations/singapore-tourist-pass-sales-channels/) |
| PAR-FD-001 | 파리 | 부용 샤르티에 메인 시작가 | 7 EUR | A | 조건부 | 조건부, 시작가 표기 | [Bouillon Chartier](https://www.bouillon-chartier.com/chartier_medias/2025/10/Anglais.pdf) |
| LON-AT-005 | 런던 | 대영박물관 상설 관람 | 0 GBP | A | 예 | 재검증, 검수: 원문 확인 불가 | [British Museum](https://www.britishmuseum.org/visit) |
| OSA-FD-004 | 오사카 | 치보 도톤보리야키 | 1480 JPY | A | 예 | 검수: 원문 확인 불가 | [Chibo](https://www.chibo.com/menu/) |
| BKK-TR-002 | 방콕 | BTS 단일 여정 요금 | 17~47 THB | A | 예 | 검수: 원문 확인 불가 | [BTS](https://www.bts.co.th/eng/tickets/ticket-journey.html) |
| BKK-TR-004 | 방콕 | 레드라인 단일 여정 요금 | 12~42 THB | A | 예 | 검수: 원문 확인 불가 | [SRT Electrified Train](https://www.srtet.co.th/en/fare-timetable) |
| DAD-TR-007 | 다낭 | 다낭 공항-바나힐 03번 버스 | 15000~30000 VND | A | 예 | 검수: 원문 확인 불가 | [Danabus](https://www.danangbus.vn/tin-tuc/tin-tuc/cung-danabus-du-lich-ba-na-hills-5445.html) |
| PAR-TR-004 | 파리 | 나비고 리베르테 플러스 메트로-기차-RER | 2.04 EUR | A | 예 | 검수: 원문 확인 불가 | [Île-de-France Mobilités](https://www.iledefrance-mobilites.fr/en/titres-et-tarifs/detail/navigo-liberte-plus) |
| PAR-FD-003 | 파리 | 부용 서비스 3코스 세트 | 10 EUR | A | 예 | 검수: 원문 확인 불가 | [Bouillon Service](https://bouillonlesite.com/) |
| DAD-AT-004 | 다낭 | 다낭 참조각박물관 일반 입장권 | 60000 VND | A | 예 | 검수: 원문 미확인 | [Da Nang Museum of Cham Sculpture](https://chammuseum.vn/view.aspx?ID=45) |
| BKK-SV-006 | 방콕 | 왓 아룬 디자인 자석 | 195 THB | A | 예 | 검수: 원문 확인 불가 | [SIAM MAGNET](https://siammagnet.co.th/en/products/12) |
| SIN-FD-008 | 싱가포르 | 티옹바루 하이난 치킨라이스 | 14 SGD | A | 예 | 세금·서비스료 별도 | [Tiong Bahru Hainanese Chicken Rice](https://www.tiongbahruchickenrice.sg/menu/) |
| SEL-SV-004 | 서울 | 오설록 차의 정원 9종 27입 | 54000 KRW | A | 예 | 검수: 교차 검수 불일치 | [오설록 공식몰](https://www.osulloc.com/kr/ko/shop/item/teashop/21773) |
| IST-FD-003 | 이스탄불 | Pino Gare Tavuk Şiş | 975 TRY | A | 예 | 검수: 원문 확인 불가 | [Pino Gare Rooftop Restaurant](https://pinogareroofrestaurant.com/tr/menu) |
| IST-AT-001 | 이스탄불 | Topkapı Sarayı 복합 입장권 외국인 성인 | 2750 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en) |
| IST-AT-002 | 이스탄불 | Dolmabahçe Sarayı 통합 입장권 외국인 성인 | 2000 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/3/Dolmabahce-Sarayi) |
| IST-AT-003 | 이스탄불 | Beylerbeyi Sarayı 외국인 성인 입장 | 800 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/4/Beylerbeyi-Sarayi) |
| IST-AT-004 | 이스탄불 | Yıldız Sarayı 외국인 성인 입장 | 900 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/5/Yildiz-Sarayi?culture=en) |
| IST-AT-009 | 이스탄불 | Topkapı Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/2/Topkapi-Sarayi?culture=en) |
| IST-AT-010 | 이스탄불 | Dolmabahçe Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/3/Dolmabahce-Sarayi) |
| IST-AT-011 | 이스탄불 | Beylerbeyi Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://millisaraylar.gov.tr/Lokasyon/4/Beylerbeyi-Sarayi) |
| IST-AT-012 | 이스탄불 | Yıldız Sarayı 0–6세 무료 입장 | 0 TRY | B | 예 | B등급 | [Millî Saraylar](https://www.millisaraylar.gov.tr/Lokasyon/5/Yildiz-Sarayi?culture=en) |
| IST-AT-014 | 이스탄불 | 예레바탄 사르느즈 주간 외국인 입장권 | 1950 TRY | B | 예 | B등급, 검수: 원문 확인 불가 | [KÜLTÜR.İSTANBUL](https://kultur.istanbul/yerebatan-sarnici-muzesi/) |
| SHA-TR-001 | 상하이 | 상하이 지하철 기본운임 0~6km | 3 CNY | B | 예 | B등급 | [上海市发展和改革委员会](https://fgw.sh.gov.cn/fgw_zcjd/20260819/546a7d3b27914f4db2e81fdc0510b164.html) |
| SHA-TR-002 | 상하이 | 상하이 일반 시내버스 편도 | 2 CNY | B | 예 | B등급 | [Shanghai Municipal Government](https://english.shanghai.gov.cn/en-Transportation/20240102/44f499a17b324b25996f2d58fcbf5f23.html) |
| SHA-TR-003 | 상하이 | 황푸강 페리 보행자 편도 | 2 CNY | B | 예 | B등급 | [Shanghai Municipal Administration of Culture and Tourism](https://cmp.whlyj.sh.gov.cn/CMPEN/trf_init.ac?type=2) |
| SHA-SV-002 | 상하이 | Lao Xiang Zhai 버터 아몬드 슬라이스 500g | 33 CNY | A | 예 | 검수: 원문 확인 불가 | [上海老香斋官方店](https://detail.youzan.com/show/goods?alias=27bh5qgpwriqk&from_source=gbox_seo) |
| SHA-SV-003 | 상하이 | 중국항해박물관 해도 메모지 | 18 CNY | A | 예 | 검수: 원문 확인 불가 | [China Maritime Museum](https://www.shmmc.com.cn/Home/WcspDetail?condition=7) |
| SHA-AT-001 | 상하이 | 상하이 자연박물관 성인 입장권 | 30 CNY | B | 예 | B등급 | [Shanghai Natural History Museum](https://www.snhm.org.cn/cgfw/cgzx.htm) |
| SHA-AT-004 | 상하이 | 상하이 세계박람회박물관 일반 입장 | 0 CNY | B | 예 | B등급 | [World Expo Museum](https://www.expo-museum.cn/sbbwg/n55/n266/n267/index.html) |
| SHA-AT-005 | 상하이 | 상하이 천문관 성인 입장권 | 30 CNY | B | 예 | B등급, 검수: 원문 확인 불가 | [Shanghai Municipal People's Government](https://www.shanghai.gov.cn/pudong/index.html) |
| SHA-AT-006 | 상하이 | 상하이 자연박물관 1.3m 이하 또는 만 6세 이하 무료 | 0 CNY | B | 예 | B등급 | [Shanghai Natural History Museum](https://www.snhm.org.cn/cgfw/cgzx.htm) |
| SHA-AT-009 | 상하이 | 상하이 천문관 1.3m 이하 또는 만 6세 이하 무료 | 0 CNY | B | 예 | B등급, 검수: 원문 확인 불가 | [Shanghai Municipal People's Government](https://www.shanghai.gov.cn/pudong/index.html) |
| TYO-AT-004 | 도쿄 | 시부야 스카이 입장권(성인, 14:59까지 입장) | 2700 JPY | A | 예 | 검수: 원문 확인 불가 | [SHIBUYA SKY](https://www.shibuya-scramble-square.com/sky/ticket/) |
| TYO-AT-005 | 도쿄 | 도쿄 디즈니랜드 1데이 패스포트(성인, 2026-10-03) | 10900 JPY | A | 예 | 검수: 원문 확인 불가 | [Tokyo Disney Resort](https://www.tokyodisneyresort.jp/en/ticket/index/202610/) |
| TYO-AT-006 | 도쿄 | 팀랩 플래닛 입장 패스(성인, 공식 최저 게시가) | 3800 JPY | A | 예 | 시작가 표기 | [teamLab Planets / DMM Official Ticket Store](https://teamlabplanets.dmm.com/en?dmmref=lp&i3_ref=cm2020) |
| TYO-AT-008 | 도쿄 | 신주쿠 교엔 일반 입장권 | 500 JPY | B | 예 | B등급 | [Ministry of the Environment, Japan](https://policies.env.go.jp/national-garden/shinjukugyoen/english/guide/information/) |
| TYO-AT-009 | 도쿄 | 하마리큐 은사정원 일반 입장권 | 300 JPY | B | 예 | B등급 | [Tokyo Metropolitan Park Association](https://www.tokyo-park.or.jp/park/hama-rikyu/index.html) |
| TYO-AT-010 | 도쿄 | 우에노 동물원 일반 입장권 | 600 JPY | B | 예 | B등급 | [Tokyo Zoological Park Society](https://www.tokyo-zoo.net/en/ueno/visitor-info/tickets/index.html) |
| TYO-AT-011 | 도쿄 | 국립서양미술관 상설전시 입장권 | 500 JPY | B | 예 | B등급 | [The National Museum of Western Art](https://www.nmwa.go.jp/en/visit/index.html) |
| TYO-AT-012 | 도쿄 | 도쿄도청 전망실 | 0 JPY | B | 예 | B등급, 검수: 원문 확인 불가 | [Tokyo Metropolitan Government](https://www.english.metro.tokyo.lg.jp/w/000-101-000542) |
| TYO-AT-013 | 도쿄 | 시부야 스카이 입장권(아동) | 1200 JPY | A | 예 | 검수: 원문 확인 불가 | [SHIBUYA SKY](https://www.shibuya-scramble-square.com/sky/ticket/) |
| TYO-AT-014 | 도쿄 | 도쿄 디즈니랜드 1데이 패스포트(아동, 2026년 10월 최저 게시가) | 5300 JPY | A | 예 | 시작가 표기 | [Tokyo Disney Resort](https://www.tokyodisneyresort.jp/en/ticket/index/202610/) |
| TYO-AT-018 | 도쿄 | 신주쿠 교엔 중학생 이하 무료 입장 | 0 JPY | B | 예 | B등급 | [Ministry of the Environment, Japan](https://policies.env.go.jp/national-garden/shinjukugyoen/english/guide/information/) |
| TYO-AT-019 | 도쿄 | 하마리큐 은사정원 초등학생 이하 무료 입장 | 0 JPY | B | 예 | B등급 | [Tokyo Metropolitan Park Association](https://www.tokyo-park.or.jp/park/hama-rikyu/index.html) |
| TYO-AT-020 | 도쿄 | 우에노 동물원 12세 이하 무료 입장 | 0 JPY | B | 예 | B등급, 검수: 교차 검수 불일치 | [Tokyo Zoological Park Society](https://www.tokyo-zoo.net/en/ueno/visitor-info/tickets/index.html) |
| TYO-AT-021 | 도쿄 | 국립서양미술관 상설전시 18세 미만 무료 입장 | 0 JPY | B | 예 | B등급, 검수: 원문 확인 불가 | [The National Museum of Western Art](https://www.nmwa.go.jp/en/visit/index.html) |
| OSA-AT-004 | 오사카 | 오사카성 박물관 천수각 입장권 | 1200 JPY | B | 예 | B등급 | [Osaka Castle Museum](https://www.osakacastle.net/guide/?lang=en) |
| OSA-AT-007 | 오사카 | 오사카 역사박물관 상설전시 입장권 | 600 JPY | B | 예 | B등급 | [Osaka Museum of History](https://www.osakamushis.jp/eng/index.html) |
| OSA-AT-010 | 오사카 | 오사카 시립미술관 기획전시 일반 입장권 | 500 JPY | B | 예 | B등급 | [Osaka City Museum of Fine Arts](https://www.osaka-art-museum.jp/information) |
| OSA-AT-011 | 오사카 | 오사카성 공원 입장 | 0 JPY | B | 예 | B등급, 검수: 원문 확인 불가 | [Osaka Castle Park Center](https://www.osakacastlepark.jp/images/flowers/flowermap/flowermap5/map2026.pdf) |
| OSA-AT-013 | 오사카 | 오사카성 니시노마루 정원 입장권 | 300 JPY | B | 예 | B등급, 검수: 원문 확인 불가 | [Osaka Castle Park Center](https://www.osakacastlepark.jp/articles/detail.html?id=3) |
| OSA-AT-014 | 오사카 | 오사카성 박물관 중학생 이하 무료 입장 | 0 JPY | B | 예 | B등급 | [Osaka Castle Museum](https://www.osakacastle.net/guide/?lang=en) |
| OSA-AT-018 | 오사카 | 오사카 역사박물관 중학생 이하 무료 입장 | 0 JPY | B | 예 | B등급 | [Osaka Museum of History](https://www.osakamushis.jp/eng/index.html) |
| OSA-AT-023 | 오사카 | 오사카 시립미술관 기획전시 고등학생·대학생 입장권 | 200 JPY | B | 예 | B등급 | [Osaka City Museum of Fine Arts](https://www.osaka-art-museum.jp/information) |
| OSA-AT-024 | 오사카 | 오사카 시립미술관 기획전시 중학생 이하 무료 입장 | 0 JPY | B | 예 | B등급 | [Osaka City Museum of Fine Arts](https://www.osaka-art-museum.jp/information) |
| OSA-AT-026 | 오사카 | 오사카성 니시노마루 정원 중학생 이하 무료 입장 | 0 JPY | B | 예 | B등급, 검수: 원문 확인 불가 | [Osaka Castle Park Center](https://www.osakacastlepark.jp/articles/detail.html?id=3) |
| BKK-AT-009 | 방콕 | 방콕 국립박물관 외국인 개인 입장권 | 200 THB | B | 예 | B등급, 검수: 원문 확인 불가 | [Fine Arts Department, Ministry of Culture](https://www.finearts.go.th/museumnationalgallery/view/10005-%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%A1%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4) |
| BKK-AT-010 | 방콕 | 방콕 국립미술관 외국인 개인 입장권 | 200 THB | B | 예 | B등급, 검수: 원문 확인 불가 | [Fine Arts Department, Ministry of Culture](https://www.finearts.go.th/museumnationalgallery/view/10005-%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%A1%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%97%E0%B%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4) |
| BKK-AT-013 | 방콕 | 방콕 플라네타리움 성인 입장권 | 50 THB | B | 예 | B등급, 검수: 원문 확인 불가 | [Science Centre for Education, Thailand](https://sciplanet.org/wp-content/uploads/2026/01/%E0%B8%AD-%E0%B9%80%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A-21-%E0%B8%A1.%E0%B8%84.69-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2569-%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94.pdf) |
| BKK-AT-014 | 방콕 | 방콕 플라네타리움 어린이 입장권 | 30 THB | B | 예 | B등급, 검수: 원문 확인 불가 | [Science Centre for Education, Thailand](https://sciplanet.org/wp-content/uploads/2026/01/%E0%B8%AD-%E0%B9%80%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A-21-%E0%B8%A1.%E0%B8%84.69-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2569-%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94.pdf) |
| BKK-AT-016 | 방콕 | 룸피니 공원 입장 | 0 THB | B | 예 | B등급 | [Bangkok Metropolitan Administration, Greener Bangkok](https://greener.bangkok.go.th/en/park/suan-lumpini/) |
| DAD-AT-005 | 다낭 | 다낭 박물관 일반 입장권 | 50000 VND | B | 예 | B등급 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/news/from-july-3-danang-museum-to-implement-new-admission-fees-and-opening-hours) |
| DAD-AT-006 | 다낭 | 다낭 미술관 일반 입장권 | 20000 VND | B | 예 | B등급 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/new-tourism-products-in-da-nang-2026) |
| DAD-AT-007 | 다낭 | 군구 5 박물관 국제 방문객 입장권 | 60000 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-012 | 다낭 | 오행산 암푸 동굴 입장권 | 20000 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-013 | 다낭 | 껌탄 코코넛 숲 입장료 | 30000 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-014 | 다낭 | 탄하 도자기 마을 입장권 | 35000 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-015 | 다낭 | 다낭 박물관 만 16세 미만 무료 입장 | 0 VND | B | 예 | B등급 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/news/from-july-3-danang-museum-to-implement-new-admission-fees-and-opening-hours) |
| DAD-AT-016 | 다낭 | 다낭 미술관 학생 무료 입장 | 0 VND | B | 예 | B등급 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/new-tourism-products-in-da-nang-2026) |
| DAD-AT-020 | 다낭 | 암푸 동굴 학생 입장료 | 7000 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| DAD-AT-021 | 다낭 | 암푸 동굴 만 6세 미만 무료 입장 | 0 VND | B | 예 | B등급, 검수: 원문 확인 불가 | [Da Nang City Tourism Information Portal](https://danangfantasticity.com/en/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites) |
| TPE-AT-005 | 타이베이 | 스린 관저 본관 일반 입장권 | 100 TWD | B | 예 | B등급 | [Taipei City Government Department of Cultural Affairs](https://culture.gov.taipei/cp.aspx?n=5FB2672C1EFD7588) |
| TPE-AT-006 | 타이베이 | 타이베이 천문관 전시관 일반 입장권 | 40 TWD | B | 예 | B등급 | [Taipei Astronomical Museum](https://en.tam.gov.taipei/cp.aspx?n=1E87B50585DEAB2D) |
| TPE-AT-007 | 타이베이 | 베이터우 온천박물관 무료 관람 | 0 TWD | B | 예 | B등급 | [Taipei City Government Department of Cultural Affairs](https://culture.gov.taipei/cp.aspx?n=680DE22A4F00B25F) |
| TPE-AT-008 | 타이베이 | 룽산사 무료 입장 | 0 TWD | B | 예 | B등급 | [Taiwan Religious Culture Map, Ministry of the Interior](https://taiwangods.moi.gov.tw/html/landscape_en/1_0011.aspx?i=15) |
| TPE-AT-009 | 타이베이 | 국립대만과학교육관 상설전시 일반 입장권 | 120 TWD | B | 예 | B등급 | [National Taiwan Science Education Center](https://www.ntsec.gov.tw/article/detail.aspx?a=23&print=1) |
| TPE-AT-010 | 타이베이 | 타이베이 어린이신락원 입장권(시설 별도) | 30 TWD | B | 예 | B등급 | [Taipei Children's Amusement Park](https://www.tcap.taipei/cp.aspx?n=EE083F2DED91AB99&s=8611B230461F0250) |
| TPE-AT-011 | 타이베이 | 국립 228 기념박물관 무료 입장 | 0 TWD | B | 예 | B등급 | [Taipei City Tourism Information](https://www.travel.taipei/en/attraction/details/2007) |
| TPE-AT-012 | 타이베이 | 손윤선 기념관 일반 입장권 | 50 TWD | B | 예 | B등급 | [Taipei City Government Department of Cultural Affairs](https://culture.gov.taipei/cp.aspx?n=7F5537B1FD015C40) |
| TPE-AT-015 | 타이베이 | 스린 관저 본관 학생 우대 입장권 | 50 TWD | B | 예 | B등급 | [Taipei City Government Department of Cultural Affairs](https://culture.gov.taipei/cp.aspx?n=5FB2672C1EFD7588) |
| TPE-AT-016 | 타이베이 | 스린 관저 본관 미취학 아동 무료 입장 | 0 TWD | B | 예 | B등급 | [Taipei City Government Department of Cultural Affairs](https://culture.gov.taipei/cp.aspx?n=5FB2672C1EFD7588) |
| TPE-AT-017 | 타이베이 | 타이베이 천문관 전시관 아동 할인 입장권 | 20 TWD | B | 예 | B등급 | [Taipei Astronomical Museum](https://en.tam.gov.taipei/cp.aspx?n=1E87B50585DEAB2D) |
| TPE-AT-018 | 타이베이 | 타이베이 천문관 만 6세 미만 무료 입장 | 0 TWD | B | 예 | B등급 | [Taipei Astronomical Museum](https://en.tam.gov.taipei/cp.aspx?n=1E87B50585DEAB2D) |
| TPE-AT-019 | 타이베이 | 국립대만과학교육관 학생 할인 상설전시권 | 90 TWD | B | 예 | B등급 | [National Taiwan Science Education Center](https://www.ntsec.gov.tw/article/detail.aspx?a=23&print=1) |
| TPE-AT-020 | 타이베이 | 국립대만과학교육관 만 6세 이하 무료 입장 | 0 TWD | B | 예 | B등급 | [National Taiwan Science Education Center](https://www.ntsec.gov.tw/article/detail.aspx?a=23&print=1) |
| TPE-AT-021 | 타이베이 | 타이베이 어린이신락원 어린이 입장권(시설 별도) | 15 TWD | B | 예 | B등급 | [Taipei Children's Amusement Park](https://www.tcap.taipei/cp.aspx?n=EE083F2DED91AB99&s=8611B230461F0250) |
| TPE-AT-022 | 타이베이 | 타이베이 어린이신락원 만 6세 이하 무료 입장 | 0 TWD | B | 예 | B등급 | [Taipei Children's Amusement Park](https://www.tcap.taipei/cp.aspx?n=EE083F2DED91AB99&s=8611B230461F0250) |
| SIN-AT-010 | 싱가포르 | 싱가포르 오셔나리움 성인 1일 입장권(시작가) | 55 SGD | A | 예 | 시작가 표기 | [Resorts World Sentosa - Singapore Oceanarium](https://www.rwsentosa.com/en/play/singapore-oceanarium/) |
| SIN-AT-024 | 싱가포르 | 싱가포르 오셔나리움 어린이 1일 입장권(시작가) | 43 SGD | A | 예 | 시작가 표기 | [Resorts World Sentosa - Singapore Oceanarium](https://www.rwsentosa.com/en/play/singapore-oceanarium/) |
| PAR-AT-012 | 파리 | 카르나발레 박물관 상설전시 무료 입장 | 0 EUR | B | 예 | B등급 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-013 | 파리 | 쁘띠 팔레 상설전시 무료 입장 | 0 EUR | B | 예 | B등급 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-014 | 파리 | 파리 시립현대미술관 상설전시 무료 입장 | 0 EUR | B | 예 | B등급 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-015 | 파리 | 빅토르 위고의 집 상설전시 무료 입장 | 0 EUR | B | 예 | B등급 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| BCN-AT-003 | 바르셀로나 | 몬주익 성 일반 입장권 | 12 EUR | B | 예 | B등급 | [Castell de Montjuïc / Barcelona City Council](https://guia.barcelona.cat/en/detall/castell-de-montjuic_99077121755.html) |
| BCN-AT-004 | 바르셀로나 | 산트 파우 모더니즘 건축단지 일반 자유관람 | 18 EUR | A | 예 | 검수: 교차 검수 불일치 | [Recinte Modernista de Sant Pau](https://santpaubarcelona.org/en/prepara-la-teva-visita/) |
| BCN-AT-008 | 바르셀로나 | 피카소 미술관 일반 온라인 입장권 | 12 EUR | B | 예 | B등급 | [Museu Picasso Barcelona](https://museupicassobcn.cat/index.php/en/plan-your-visit/buy-tickets-and-opening-hours) |
| BCN-AT-011 | 바르셀로나 | 몬주익 성 만 8~12세 입장권 | 8 EUR | B | 예 | B등급 | [Castell de Montjuïc / Barcelona City Council](https://guia.barcelona.cat/en/detall/castell-de-montjuic_99077121755.html) |
| BCN-AT-012 | 바르셀로나 | 몬주익 성 만 8세 미만 무료 입장 | 0 EUR | B | 예 | B등급 | [Castell de Montjuïc / Barcelona City Council](https://guia.barcelona.cat/en/detall/castell-de-montjuic_99077121755.html) |
| BCN-AT-013 | 바르셀로나 | 산트 파우 만 12~24세 감면 입장권 | 12.6 EUR | A | 예 | 검수: 교차 검수 불일치 | [Recinte Modernista de Sant Pau](https://santpaubarcelona.org/en/prepara-la-teva-visita/) |
| BCN-AT-018 | 바르셀로나 | 피카소 미술관 만 18세 미만 무료 입장 | 0 EUR | B | 예 | B등급 | [Museu Picasso Barcelona](https://museupicassobcn.cat/index.php/en/plan-your-visit/buy-tickets-and-opening-hours) |
| NYC-AT-001 | 뉴욕 | 서밋 원 밴더빌트 일반 입장권(최저 온라인가) | 44 USD | A | 예 | 시작가 표기 | [SUMMIT One Vanderbilt](https://summitov.com/tickets/) |
| NYC-AT-003 | 뉴욕 | 브롱크스 동물원 일반 입장권(최저 Flex 요금) | 37.7 USD | A | 예 | 시작가 표기 | [Bronx Zoo](https://bronxzoo.com/plan-your-visit/hours-and-rates) |
| NYC-AT-006 | 뉴욕 | 구겐하임 미술관 일반 입장권 | 30 USD | A | 예 | 검수: 원문 확인 불가 | [Solomon R. Guggenheim Museum](https://www.guggenheim.org/plan-your-visit) |
| NYC-AT-007 | 뉴욕 | 프릭 컬렉션 일반 입장권 | 30 USD | A | 예 | 검수: 원문 확인 불가 | [The Frick Collection](https://www.frick.org/tickets) |
| NYC-AT-008 | 뉴욕 | 서밋 원 밴더빌트 만 6~12세 입장권(최저 온라인가) | 39 USD | A | 예 | 시작가 표기 | [SUMMIT One Vanderbilt](https://tickets.summitov.com/Webstore/shop/viewitems.aspx?C=adm&CG=sum) |
| NYC-AT-012 | 뉴욕 | 브롱크스 동물원 만 3~12세 입장권(최저 Flex 요금) | 27.7 USD | A | 예 | 시작가 표기 | [Bronx Zoo](https://bronxzoo.com/plan-your-visit/hours-and-rates) |
| NYC-AT-016 | 뉴욕 | 구겐하임 미술관 만 12세 미만 무료 입장 | 0 USD | A | 예 | 검수: 원문 확인 불가 | [Solomon R. Guggenheim Museum](https://www.guggenheim.org/plan-your-visit) |
| NYC-AT-017 | 뉴욕 | 프릭 컬렉션 만 10~18세 무료 입장 | 0 USD | A | 예 | 검수: 원문 확인 불가 | [The Frick Collection](https://www.frick.org/tickets) |
| IST-AT-101 | 이스탄불 | 미니아튀르크 외국인 입장권 (성인) | 900 TRY | A | 예 | 재검증 | [Miniatürk 공식 입장료](https://miniaturk.com.tr/Home/Index) |
| IST-AT-102 | 이스탄불 | 페라 박물관 입장권 (성인) | 450 TRY | A | 예 | 재검증 | [Pera Museum 공식 방문 안내](https://peramuseum.org/Home/Visit) |
| IST-AT-111 | 이스탄불 | 페라 박물관 입장권 (만 12세 이하) | 0 TRY | A | 예 | 재검증 | [Pera Museum 공식 방문 안내](https://peramuseum.org/Home/Visit) |
| IST-AT-103 | 이스탄불 | 라흐미 M. 코치 박물관 입장권 (성인) | 1000 TRY | A | 예 | 재검증 | [Rahmi M. Koç Museum 공식 요금 안내](https://rmk-museum.org.tr/istanbul/en/visit-us/hours-and-prices) |
| IST-AT-104 | 이스탄불 | 참르자 타워 전망대 입장권 (외국인 성인) | 900 TRY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Çamlıca Tower 공식 티켓 페이지](https://camlicakule.istanbul/en/observation-deck-ticket) |
| IST-AT-112 | 이스탄불 | 참르자 타워 전망대 (만 0~6세) | 0 TRY | A | 예 | 재검증 | [Çamlıca Tower 공식 티켓 페이지](https://camlicakule.istanbul/en/observation-deck-ticket) |
| IST-AT-105 | 이스탄불 | 파노라마 1453 역사박물관 입장권 (외국인 성인) | 900 TRY | A | 예 | 재검증 | [KÜLTÜR.İSTANBUL 공식 요금 안내](https://kultur.istanbul/panorama-1453-muzesi/) |
| IST-AT-106 | 이스탄불 | İBB 디지털 체험센터 입장권 (외국인 성인) | 900 TRY | A | 예 | 재검증 | [KÜLTÜR.İSTANBUL 공식 요금 안내](https://www.dijitaldeneyimmerkezi.com/Eng/Tickets) |
| IST-AT-113 | 이스탄불 | İBB 디지털 체험센터 입장 (만 7세 미만) | 0 TRY | A | 예 | 재검증, 검수: 원문 확인 불가 | [KÜLTÜR.İSTANBUL 공식 요금 안내](https://kultur.istanbul/ibb-kultur-as-dijital-deneyim-merkezi/) |
| SHA-AT-101 | 상하이 | 상하이 동물원 입장권 (성인) | 40 CNY | A | 예 | 재검증 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-102 | 상하이 | 마담 투소 상하이 입장권 (성인) | 210 CNY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-103 | 상하이 | 상하이 영화파크 입장권 (성인) | 80 CNY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-104 | 상하이 | 중국 해양박물관 입장권 (성인) | 30 CNY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-105 | 상하이 | 상하이 월호 조각공원 입장권 (성인) | 100 CNY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-106 | 상하이 | 상하이 화훼항 입장권 (성인) | 100 CNY | A | 예 | 재검증 | [Shanghai Municipal Government Services](https://www.shanghai.gov.cn/nw17239/20260519/b4cc7db33efe486b83f02e1b9dc4b712.html) |
| SHA-AT-111 | 상하이 | 상하이 화훼항 입장권 (아동) | 50 CNY | A | 예 | 재검증 | [Shanghai Municipal Government Services](https://www.shanghai.gov.cn/nw17239/20260519/b4cc7db33efe486b83f02e1b9dc4b712.html) |
| SHA-AT-107 | 상하이 | 상하이 다관원 입장권 (성인) | 55 CNY | A | 예 | 재검증 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SHA-AT-112 | 상하이 | 상하이 다관원 입장권 (아동) | 27 CNY | A | 예 | 재검증 | [Shanghai Municipal Government Services](https://service.shanghai.gov.cn/sheninfo/specialdetail.aspx?Id=2ab707d3-5c68-40c3-9a54-87f96f8dedf0) |
| SEL-AT-101 | 서울 | 창경궁 입장권 (외국인 성인) | 1000 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-102 | 서울 | 종묘 입장권 (외국인 성인) | 1000 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-103 | 서울 | 서울 선릉과 정릉 입장권 (외국인 성인) | 1000 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-104 | 서울 | 서울 헌릉과 인릉 입장권 (외국인 성인) | 1000 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-111 | 서울 | 창경궁 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-112 | 서울 | 종묘 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-113 | 서울 | 서울 선릉과 정릉 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-114 | 서울 | 서울 헌릉과 인릉 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부 관람요금·무료개방 공지](https://royal.cha.go.kr/ROYAL/contents/R703000000.do; https://royal.cha.go.kr/ROYAL/contents/R402000000.do?id=20260528103040963660&schBcid=normal1&schM=view) |
| SEL-AT-105 | 서울 | 서대문형무소역사관 입장권 (성인) | 3000 KRW | A | 예 | 재검증 | [Seoul Metropolitan Government](https://english.seoul.go.kr/seodaemun-prison/) |
| SEL-AT-115 | 서울 | 서대문형무소역사관 입장권 (아동) | 1000 KRW | A | 예 | 재검증 | [Seoul Metropolitan Government](https://english.seoul.go.kr/seodaemun-prison/) |
| PUS-AT-101 | 부산 | 태종대 다누비열차 순환권 (성인) | 4000 KRW | A | 예 | 재검증 | [부산광역시 부산지오파크](https://www.busan.go.kr/geopark/taejongdae) |
| PUS-AT-111 | 부산 | 태종대 다누비열차 순환권 (소인) | 1500 KRW | A | 예 | 재검증 | [부산광역시 부산지오파크](https://www.busan.go.kr/geopark/taejongdae) |
| PUS-AT-102 | 부산 | 부산타워 전망대 입장권 (성인) | 12000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=84864) |
| PUS-AT-112 | 부산 | 부산타워 전망대 입장권 (아동) | 9000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=84864) |
| PUS-AT-103 | 부산 | 부산영화체험박물관 입장권 (성인) | 10000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=194989) |
| PUS-AT-113 | 부산 | 부산영화체험박물관 입장권 (아동) | 7000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=194989) |
| PUS-AT-104 | 부산 | 금강공원 케이블카 왕복권 (성인) | 9000 KRW | A | 예 | 재검증 | [부산광역시 부산지오파크](https://www.busan.go.kr/geopark/geumjeongsan) |
| PUS-AT-114 | 부산 | 금강공원 케이블카 왕복권 (소인) | 6000 KRW | A | 예 | 재검증 | [부산광역시 부산지오파크](https://www.busan.go.kr/geopark/geumjeongsan) |
| PUS-AT-105 | 부산 | 국립부산과학관 상설전시관 입장권 (성인) | 3000 KRW | A | 예 | 재검증 | [국립부산과학관](https://www.sciport.or.kr/kor/CMS/Contents/Contents.do?mCode=MN129) |
| CJU-AT-101 | 제주 | 제주민속촌 입장권 (성인) | 15000 KRW | A | 예 | 재검증 | [제주민속촌 공식 요금 안내](https://jejufolk.com/m/pages.php?p=3_1_1_1) |
| CJU-AT-111 | 제주 | 제주민속촌 입장권 (어린이) | 11000 KRW | A | 예 | 재검증 | [제주민속촌 공식 요금 안내](https://jejufolk.com/m/pages.php?p=3_1_1_1) |
| CJU-AT-102 | 제주 | 아르떼뮤지엄 제주 입장권 (성인) | 18000 KRW | A | 예 | 재검증 | [아르떼뮤지엄 제주 공식 요금 안내](https://kr.artemuseum.com/jeju) |
| CJU-AT-103 | 제주 | 김창열미술관 입장권 (성인) | 2000 KRW | A | 예 | 재검증 | [제주특별자치도 김창열미술관](https://kimtschang-yeul.jeju.go.kr/cnt/cntManagerView.do?idx=12&menuNum=7200) |
| CJU-AT-114 | 제주 | 김창열미술관 입장권 (어린이) | 500 KRW | A | 예 | 재검증 | [제주특별자치도 김창열미술관](https://kimtschang-yeul.jeju.go.kr/cnt/cntManagerView.do?idx=12&menuNum=7200) |
| CJU-AT-104 | 제주 | 제주돌문화공원 입장권 (성인) | 5000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=76736) |
| CJU-AT-105 | 제주 | 제주 유리의성 입장권 (성인) | 11000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=97532) |
| CJU-AT-116 | 제주 | 제주 유리의성 입장권 (어린이) | 8000 KRW | A | 예 | 재검증 | [한국관광공사 VISITKOREA](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=97532) |
| CJU-AT-106 | 제주 | 제주목관아 입장권 (성인) | 1500 KRW | A | 예 | 재검증 | [제주관광공사 VISITJEJU](https://www.visitjeju.net/kr/themtour/view?contentsid=CNTS_300000000013313&menuId=DOM_000002000000000227) |
| CJU-AT-117 | 제주 | 제주목관아 입장권 (어린이) | 400 KRW | A | 예 | 재검증 | [제주관광공사 VISITJEJU](https://www.visitjeju.net/kr/themtour/view?contentsid=CNTS_300000000013313&menuId=DOM_000002000000000227) |
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
| BCN-SV-001 | 바르셀로나 | FC 바르셀로나 키링 | 6.99~14.99 EUR | A | 예 | 재검증 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-SV-002 | 바르셀로나 | FC 바르셀로나 머그컵 | 12.99 EUR | A | 예 | 재검증 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-SV-003 | 바르셀로나 | FC 바르셀로나 초콜릿 | 19.99 EUR | A | 예 | 재검증, 검수: 원문 확인 불가 | [FC Barcelona Official Store](https://store.fcbarcelona.com/collections/souvenirs) |
| BCN-AT-101 | 바르셀로나 | 사그라다 파밀리아 기본 입장권 | 26 EUR | A | 예 | 재검증 | [Sagrada Familia Official Website](https://sagradafamilia.org/en/prices) |
| BCN-AT-102 | 바르셀로나 | 사그라다 파밀리아 탑 포함 입장권 | 36 EUR | A | 예 | 재검증 | [Sagrada Familia Official Website](https://sagradafamilia.org/en/prices) |
| BCN-AT-103 | 바르셀로나 | 구엘 공원 일반 입장권 | 18 EUR | A | 예 | 재검증 | [Park Guell Official Website](https://parkguell.barcelona/en/planning-your-visit/prices-and-times) |
| BCN-AT-104 | 바르셀로나 | 카사 밀라 라 페드레라 일반 입장권 | 29 EUR | A | 예 | 재검증 | [La Pedrera Official Website](https://www.lapedrera.com/en/tickets/) |
| BCN-AT-105 | 바르셀로나 | 카사 바트요 일반 입장권 | 29 EUR | A | 예 | 재검증 | [Casa Batllo Official Website](https://www.casabatllo.es/en/online-tickets/) |
| PUS-FD-760 | 부산 | 해목 히츠마부시 | 39000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해목 해운대점](https://map.naver.com/p/search/%ED%95%B4%EB%AA%A9%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90) |
| PUS-FD-761 | 부산 | 해목 카이센동 | 37000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해목 해운대점](https://map.naver.com/p/search/%ED%95%B4%EB%AA%A9%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90) |
| PUS-FD-762 | 부산 | 해목 참치+네기도로 덮밥 | 23000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해목 해운대점](https://map.naver.com/p/search/%ED%95%B4%EB%AA%A9%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90) |
| PUS-FD-763 | 부산 | 해목 어린이 장어 덮밥 | 11000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해목 해운대점](https://map.naver.com/p/search/%ED%95%B4%EB%AA%A9%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90) |
| PUS-FD-764 | 부산 | 수변최고돼지국밥 고기국밥 | 11000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 수변최고돼지국밥 민락](https://map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5%20%EB%AF%BC%EB%9D%BD) |
| PUS-FD-765 | 부산 | 수변최고돼지국밥 항정국밥 | 13000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 수변최고돼지국밥 민락](https://map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5%20%EB%AF%BC%EB%9D%BD) |
| PUS-FD-766 | 부산 | 신발원 쿵푸면 | 5900 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 신발원](https://map.naver.com/p/search/%EC%8B%A0%EB%B0%9C%EC%9B%90%20%EB%B6%80%EC%82%B0) |
| PUS-SN-767 | 부산 | 신발원 고기만두 (1인분 4개) | 4800 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 신발원](https://map.naver.com/p/search/%EC%8B%A0%EB%B0%9C%EC%9B%90%20%EB%B6%80%EC%82%B0) |
| PUS-SN-768 | 부산 | 신발원 수제찐빵 | 3800 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 신발원](https://map.naver.com/p/search/%EC%8B%A0%EB%B0%9C%EC%9B%90%20%EB%B6%80%EC%82%B0) |
| PUS-SN-776 | 부산 | 해운대명품호떡 씨앗호떡 | 2500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해운대명품호떡](https://map.naver.com/p/search/%ED%95%B4%EC%9A%B4%EB%8C%80%EB%AA%85%ED%92%88%ED%98%B8%EB%96%A1) |
| PUS-SN-777 | 부산 | 해운대명품호떡 꿀호떡 | 2000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 해운대명품호떡](https://map.naver.com/p/search/%ED%95%B4%EC%9A%B4%EB%8C%80%EB%AA%85%ED%92%88%ED%98%B8%EB%96%A1) |
| PUS-SN-778 | 부산 | 부곡분식 쌀떡볶이 | 3000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 부곡분식](https://map.naver.com/p/search/%EB%B6%80%EA%B3%A1%EB%B6%84%EC%8B%9D) |
| PUS-SN-779 | 부산 | 부곡분식 오뎅 (4개) | 2000~4000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 부곡분식](https://map.naver.com/p/search/%EB%B6%80%EA%B3%A1%EB%B6%84%EC%8B%9D) |
| PUS-SN-780 | 부산 | 스탠다드번 아메리카노 | 5500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 스탠다드번 해운대](https://map.naver.com/p/search/%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C%EB%B2%88%20%ED%95%B4%EC%9A%B4%EB%8C%80) |
| PUS-SN-781 | 부산 | 스탠다드번 상하이 버터떡 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 스탠다드번 해운대](https://map.naver.com/p/search/%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C%EB%B2%88%20%ED%95%B4%EC%9A%B4%EB%8C%80) |
| PUS-TR-001 | 부산 | 부산 도시철도 1구간 (교통카드) | 1600 KRW | A | 예 | 재검증 | [부산교통공사](https://www.humetro.busan.kr/default/main.do) |
| PUS-TR-002 | 부산 | 부산 도시철도 2구간 (교통카드) | 1800 KRW | A | 예 | 재검증 | [부산교통공사](https://www.humetro.busan.kr/default/main.do) |
| PUS-TR-003 | 부산 | 부산 시내버스 일반 (교통카드) | 1550 KRW | A | 예 | 재검증 | [부산광역시 버스정보관리시스템](https://bus.busan.go.kr/) |
| PUS-TR-004 | 부산 | 부산 급행버스 (교통카드) | 2100 KRW | A | 예 | 재검증 | [부산광역시 버스정보관리시스템](https://bus.busan.go.kr/) |
| PUS-TR-005 | 부산 | 부산 도시철도 1일권 | 6000 KRW | A | 예 | 재검증 | [부산교통공사](https://work.humetro.busan.kr/homepage/default/page/subLocation.do?menu_no=1001010501) |
| PUS-FD-001 | 부산 | 본전돼지국밥 돼지국밥 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 본전돼지국밥 매장 공식 메뉴](https://map.naver.com/p/entry/place/11568285) |
| PUS-FD-002 | 부산 | 초량밀면 물밀면 (소) | 7000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 초량밀면 매장 공식 메뉴](https://map.naver.com/p/entry/place/11603507) |
| PUS-FD-003 | 부산 | 개미집 낙곱새볶음 (1인분) | 14000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [개미집 공식 매장 메뉴판](https://map.naver.com/p/entry/place/11628169) |
| PUS-FD-004 | 부산 | 고래사어묵 어우동 | 8000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [고래사어묵 해운대점 매장 메뉴](https://map.naver.com/p/entry/place/36737521) |
| PUS-FD-005 | 부산 | 수변최고돼지국밥 고기국밥 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [수변최고돼지국밥 매장 공식 메뉴](https://map.naver.com/p/entry/place/12836262) |
| PUS-FD-006 | 부산 | 컴포즈커피 아메리카노 (HOT/ICE) | 1500 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [컴포즈커피 공식홈페이지](https://composecoffee.com/menu_coffee) |
| PUS-FD-007 | 부산 | 모모스커피 오늘의 드립커피 | 6000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [모모스커피 온천장 본점 메뉴](https://map.naver.com/p/entry/place/12108752) |
| PUS-FD-008 | 부산 | BIFF거리 씨앗호떡 | 2000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [남포동 BIFF거리 노점 공통 가격게시](https://map.naver.com/p/entry/place/12134547) |
| PUS-FD-009 | 부산 | 대선주조 대선소주 | 1950 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| PUS-FD-010 | 부산 | CU 편의점 켈리 캔맥주 | 2800 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| PUS-FD-011 | 부산 | 식당 일반 소주/맥주 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [본전돼지국밥 매장 공식 주류 메뉴](https://map.naver.com/p/entry/place/11568285) |
| PUS-SV-001 | 부산 | 삼진어묵 1953세트 1호 | 35000 KRW | A | 예 | 재검증 | [삼진어묵 공식 온라인 직영몰](https://www.samjinfood.com/goods/goods_view.php?goodsNo=1000000968) |
| PUS-SV-002 | 부산 | 부산바다샌드 1상자 (9개입) | 17500 KRW | C | 조건부 | C등급, 조건부, 재검증 | [부산바다샌드 공식 매장 메뉴](https://map.naver.com/p/entry/place/1694939243) |
| PUS-SV-003 | 부산 | 부산관광기념품점 광안대교 자개 마그넷 | 8000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [부산관광기념품점 공식 안내](https://map.naver.com/p/entry/place/1971758950) |
| PUS-AT-001 | 부산 | 부산엑스 더 스카이 전망대 (대인) | 29000 KRW | A | 예 | 재검증 | [부산엑스더스카이 공식홈페이지](https://www.busanxthesky.com/sub/sub02_01.php) |
| PUS-AT-002 | 부산 | 부산엑스 더 스카이 전망대 (소인) | 26000 KRW | A | 예 | 재검증 | [부산엑스더스카이 공식홈페이지](https://www.busanxthesky.com/sub/sub02_01.php) |
| PUS-AT-005 | 부산 | 송도해상케이블카 에어크루즈 왕복 (대인) | 19000 KRW | A | 예 | 재검증 | [송도해상케이블카 공식홈페이지](https://busanaircruise.co.kr/info/price?rank=1) |
| PUS-AT-006 | 부산 | 송도해상케이블카 에어크루즈 왕복 (소인) | 14000 KRW | A | 예 | 재검증 | [송도해상케이블카 공식홈페이지](https://busanaircruise.co.kr/info/price?rank=1) |
| PUS-AT-007 | 부산 | 롯데월드 어드벤처 부산 종일 종합이용권 (어른) | 49000 KRW | A | 예 | 재검증 | [롯데월드 어드벤처 부산 공식홈페이지](https://adventurebusan.lotteworld.com/price/price) |
| PUS-AT-008 | 부산 | 스카이라인 루지 부산 스카이라이드+루지 3회 콤보 (1인) | 36000 KRW | A | 예 | 재검증 | [스카이라인루지 부산 공식홈페이지](https://busan.skylineluge.kr/hyfly/pricing-packages) |
| PUS-AT-009 | 부산 | SEA LIFE 부산아쿠아리움 입장권 (대인) | 30000 KRW | A | 예 | 재검증 | [씨라이프 부산아쿠아리움 공식홈페이지](https://www.visitsealife.com/busan/tickets-passes/book-tickets/admission-qr/) |
| PUS-AT-010 | 부산 | 부산시립박물관 상설전시 | 0 KRW | A | 예 | 재검증 | [부산박물관 공식홈페이지](https://museum.busan.go.kr/busan/viewinfo01) |
| CEB-TR-201 | 세부 | MyBus BDO 푸엔테–SM 시사이드 노선 | 30 PHP | A | 예 | 재검증 | [SM Seaside City Cebu (Official) 페이스북](https://www.facebook.com/smsscitycebu/posts/smannouncements-starting-august-1-2026-thebdo-fuente-sm-seaside-free-mybus-ride-/1464930125660351/) |
| CEB-TR-202 | 세부 | MyBus 1번 노선 파크몰–SM 시사이드 | 30 PHP | A | 조건부 | 조건부, 재검증 | [MyBus 공식 페이스북](https://www.facebook.com/MyBusPH/posts/hello-mybusers-regular-bus-operations-resume-check-out-passenger-fare-schedules-/841015011159123/) |
| CEB-AT-201 | 세부 | 무세오 수그보 일반 입장료 | 50 PHP | A | 예 | 재검증 | [Cebu Province 공식 페이스북](https://www.facebook.com/cebugovph/posts/museo-sugbo-reopens-on-august-29-2025-and-were-ready-to-welcome/1183292743825210/) |
| CEB-AT-202 | 세부 | 무세오 수그보 학생·경로·장애인 입장료 | 25 PHP | A | 예 | 재검증 | [Cebu Province 공식 페이스북](https://www.facebook.com/cebugovph/posts/museo-sugbo-reopens-on-august-29-2025-and-were-ready-to-welcome/1183292743825210/) |
| CEB-AT-203 | 세부 | 카사 고로르도 박물관 일반(앱 기반 투어) | 100 PHP | A | 예 | 재검증 | [Casa Gorordo Museum 공식 페이스북](https://www.facebook.com/casagorordomuseum/posts/uncover-the-beauty-of-cebus-heritage-at-casa-gorordo-museum-choose-between-guide/1225711243072090/) |
| CEB-AT-204 | 세부 | 카사 고로르도 박물관 학생(앱 기반 투어) | 50 PHP | A | 예 | 재검증 | [Casa Gorordo Museum 공식 페이스북](https://www.facebook.com/casagorordomuseum/posts/uncover-the-beauty-of-cebus-heritage-at-casa-gorordo-museum-choose-between-guide/1225711243072090/) |
| CEB-AT-101 | 세부 | 세부 오션파크 입장권(정가) | 800~1000 PHP | A | 예 | 재검증 | [Cebu Ocean Park](https://www.cebuoceanpark.com/tickets-and-hours/) |
| CEB-AT-102 | 세부 | 세부 사파리 투어 익스피리언스 | 1200 PHP | A | 예 | 재검증 | [Cebu Safari & Adventure Park](https://www.cebusafari.ph/) |
| CEB-FD-101 | 세부 | 카사 베르데 미트소스 스파게티 | 265 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-FD-102 | 세부 | 카사 베르데 브라이언스 립(솔로) | 328 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-FD-103 | 세부 | 카사 베르데 포크 스테이크 | 464 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-SN-201 | 세부 | 카사 베르데 캔 탄산음료 | 90 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-SN-202 | 세부 | 카사 베르데 생수 | 55 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-SN-203 | 세부 | 카사 베르데 아메리카노 | 110 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-AL-301 | 세부 | 카사 베르데 산미구엘 페일 필젠 | 90 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-AL-302 | 세부 | 카사 베르데 산미구엘 라이트 | 100 PHP | A | 예 | 재검증 | [Casa Verde](https://www.casaverde.ph/menu) |
| CEB-TR-101 | 세부 | 지프니(일반형) 기본요금(첫 4km) | 14 PHP | A | 조건부 | 조건부, 재검증 | [LTFRB(필리핀 육상교통규제위원회) PUJ 요금표](https://ltfrb.gov.ph/fare-rates) |
| CEB-TR-102 | 세부 | 지프니(에어컨·전기 모던형) 기본요금(첫 4km) | 17 PHP | A | 조건부 | 조건부, 재검증 | [LTFRB(필리핀 육상교통규제위원회) PUJ 요금표](https://ltfrb.gov.ph/fare-rates) |
| CEB-FD-104 | 세부 | 세븐 파레스 소고기 파레스 라이스 | 95 PHP | A | 조건부 | 조건부, 재검증 | [7 Pares Cebu](https://www.7pares.com/) |
| CEB-FD-105 | 세부 | 세븐 파레스 파레스 오버로드 | 155 PHP | A | 조건부 | 조건부, 재검증 | [7 Pares Cebu](https://www.7pares.com/) |
| CEB-FD-106 | 세부 | 이파르스 파에야 네그라 (싱글) | 500 PHP | A | 조건부 | 조건부, 재검증 | [Ipar's Authentic Spanish Restaurant](https://www.ipars.com.ph/menu/) |
| CEB-FD-107 | 세부 | 이파르스 하우스 파에야 (싱글) | 650 PHP | A | 조건부 | 조건부, 재검증 | [Ipar's Authentic Spanish Restaurant](https://www.ipars.com.ph/menu/) |
| CEB-SN-303 | 세부 | 7 파레스 생수 500ml | 30 PHP | A | 예 | 재검증 | [7 Pares Cebu](https://www.7pares.com/) |
| DAD-SN-904 | 다낭 | 하이랜드 커피 반미 꿰(파테) | 19000 VND | A | 예 | 재검증 | [Highlands Coffee](https://www.highlandscoffee.com.vn/vn/banh-mi-que.html) |
| DAD-SN-905 | 다낭 | 하이랜드 커피 핀 쓰어 다(S) | 29000 VND | A | 예 | 재검증 | [Highlands Coffee](https://www.highlandscoffee.com.vn/vn/phin-sua.html) |
| NYC-SN-906 | 뉴욕 | 그레이스 파파야 핫도그 | 3.25 USD | A | 예 | 재검증 | [Gray's Papaya](https://grayspapaya.nyc/uptown-menu/) |
| NYC-SN-907 | 뉴욕 | 그레이스 파파야 트로피컬 드링크 미디엄 | 3 USD | A | 예 | 재검증 | [Gray's Papaya](https://grayspapaya.nyc/uptown-menu/) |
| NYC-SN-908 | 뉴욕 | 그레이스 파파야 생수 | 1.5 USD | A | 예 | 재검증 | [Gray's Papaya](https://grayspapaya.nyc/uptown-menu/) |
| NYC-SN-910 | 뉴욕 | 로스 타코스 No.1 칩스 이 살사 | 4.75 USD | A | 예 | 재검증 | [Los Tacos No. 1](https://www.lostacos1.com/menus/) |
| TYO-SN-830 | 도쿄 | 스타벅스 카페 아메리카노 Tall | 490 JPY | A | 예 | 재검증 | [스타벅스 커피 재팬](https://menu.starbucks.co.jp/4524785000315) |
| TYO-SN-831 | 도쿄 | 스타벅스 라테 Tall | 500 JPY | A | 예 | 재검증 | [스타벅스 커피 재팬](https://menu.starbucks.co.jp/4524785000223) |
| TYO-SN-832 | 도쿄 | 털리스 카페 아메리카노 Tall | 450 JPY | A | 예 | 재검증 | [털리스 커피 재팬](https://www.tullys.co.jp/menu/drink/coffee/es_americano.html) |
| TYO-SN-833 | 도쿄 | 털리스 카페라테 Tall | 510 JPY | A | 예 | 재검증 | [털리스 커피 재팬](https://www.tullys.co.jp/menu/drink/coffee/cafe_latte.html) |
| TYO-SN-834 | 도쿄 | 도토루 블렌드 커피 S | 300 JPY | A | 예 | 재검증 | [도토루 커피숍](https://www.doutor.co.jp/dcs/menu/detail/20110907153810.html) |
| TYO-SN-835 | 도쿄 | 도토루 카페라테 S | 400 JPY | A | 예 | 재검증 | [도토루 커피숍](https://www.doutor.co.jp/dcs/menu/detail/20110907154342.html) |
| TYO-SN-836 | 도쿄 | 패밀리마트 블렌드 커피 S | 158 JPY | A | 예 | 재검증 | [패밀리마트](https://www.family.co.jp/goods/cafe.html) |
| TYO-SN-837 | 도쿄 | 패밀리마트 카페라테 M | 255 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [패밀리마트](https://www.family.co.jp/goods/cafe.html) |
| TYO-SN-838 | 도쿄 | 로손 커피 S | 160 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/coffee/) |
| TYO-SN-839 | 도쿄 | 로손 카페라테 M | 230 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/coffee/) |
| TYO-SN-840 | 도쿄 | 패밀리마트 생수 600ml | 118 JPY | A | 예 | 재검증 | [패밀리마트](https://www.family.co.jp/goods/drink/4251934.html) |
| OSA-SN-841 | 오사카 | 스타벅스 카페 아메리카노 Tall | 490 JPY | A | 예 | 재검증 | [스타벅스 커피 재팬](https://menu.starbucks.co.jp/4524785000315) |
| OSA-SN-842 | 오사카 | 스타벅스 라테 Tall | 500 JPY | A | 예 | 재검증 | [스타벅스 커피 재팬](https://menu.starbucks.co.jp/4524785000223) |
| OSA-SN-843 | 오사카 | 털리스 카페 아메리카노 Tall | 450 JPY | A | 예 | 재검증 | [털리스 커피 재팬](https://www.tullys.co.jp/menu/drink/coffee/es_americano.html) |
| OSA-SN-844 | 오사카 | 털리스 카페라테 Tall | 510 JPY | A | 예 | 재검증 | [털리스 커피 재팬](https://www.tullys.co.jp/menu/drink/coffee/cafe_latte.html) |
| OSA-SN-845 | 오사카 | 도토루 블렌드 커피 S | 300 JPY | A | 예 | 재검증 | [도토루 커피숍](https://www.doutor.co.jp/dcs/menu/detail/20110907153810.html) |
| OSA-SN-846 | 오사카 | 도토루 카페라테 S | 400 JPY | A | 예 | 재검증 | [도토루 커피숍](https://www.doutor.co.jp/dcs/menu/detail/20110907154342.html) |
| OSA-SN-847 | 오사카 | 패밀리마트 블렌드 커피 S | 158 JPY | A | 예 | 재검증 | [패밀리마트](https://www.family.co.jp/goods/cafe.html) |
| OSA-SN-848 | 오사카 | 패밀리마트 카페라테 M | 255 JPY | A | 예 | 재검증 | [패밀리마트](https://www.family.co.jp/goods/cafe.html) |
| OSA-SN-849 | 오사카 | 로손 커피 S | 160 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/coffee/) |
| OSA-SN-850 | 오사카 | 로손 카페라테 M | 230 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/coffee/) |
| OSA-SN-851 | 오사카 | 패밀리마트 생수 600ml | 118 JPY | A | 예 | 재검증 | [패밀리마트](https://www.family.co.jp/goods/drink/4251934.html) |
| SEL-FD-852 | 서울 | 한솥 치킨마요 | 3900 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| SEL-FD-853 | 서울 | 한솥 돈까스도련님 | 5200 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| SEL-FD-854 | 서울 | 한솥 묵은지 김치찌개 | 6000 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| PUS-FD-855 | 부산 | 한솥 치킨마요 | 3900 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| PUS-FD-856 | 부산 | 한솥 돈까스도련님 | 5200 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| PUS-FD-857 | 부산 | 한솥 묵은지 김치찌개 | 6000 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| CJU-FD-858 | 제주 | 한솥 치킨마요 | 3900 KRW | A | 조건부 | 조건부, 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| CJU-FD-859 | 제주 | 한솥 돈까스도련님 | 5200 KRW | A | 조건부 | 조건부, 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| CJU-FD-860 | 제주 | 한솥 묵은지 김치찌개 | 6000 KRW | A | 조건부 | 조건부, 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_list) |
| TYO-AL-861 | 도쿄 | 쿠시카츠 다나카 짐빔 하이볼 | 319 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-862 | 도쿄 | 쿠시카츠 다나카 레몬사워 | 319 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-863 | 도쿄 | 쿠시카츠 다나카 생맥주(프리미엄 몰츠 카오루 에일) | 605 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-864 | 도쿄 | 쿠시카츠 다나카 사케 180ml | 550 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-865 | 도쿄 | 쿠시카츠 다나카 본격 소주 | 550 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-866 | 도쿄 | 쿠시카츠 다나카 우메슈 | 495 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-867 | 오사카 | 쿠시카츠 다나카 짐빔 하이볼 | 319 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-868 | 오사카 | 쿠시카츠 다나카 레몬사워 | 319 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-869 | 오사카 | 쿠시카츠 다나카 생맥주(프리미엄 몰츠 카오루 에일) | 605 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-870 | 오사카 | 쿠시카츠 다나카 사케 180ml | 550 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-871 | 오사카 | 쿠시카츠 다나카 본격 소주 | 550 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| OSA-AL-872 | 오사카 | 쿠시카츠 다나카 우메슈 | 495 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [串カツ田中 공식 드링크 메뉴](https://kushi-tanaka.com/img/files/up/20260910_drink.png) |
| TYO-AL-873 | 도쿄 | 로손 PB 맥주류 캔 350ml | 171 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/liquor/) |
| OSA-AL-874 | 오사카 | 로손 PB 맥주류 캔 350ml | 171 JPY | A | 예 | 재검증 | [로손](https://www.lawson.co.jp/recommend/original/liquor/) |
| TYO-SN-875 | 도쿄 | 교자노오쇼 교자 | 363 JPY | A | 예 | 재검증 | [餃子の王将](https://www.ohsho.co.jp/menu/east/) |
| TYO-FD-876 | 도쿄 | 교자노오쇼 라멘(극왕) | 980 JPY | A | 예 | 재검증 | [餃子の王将](https://www.ohsho.co.jp/menu/east/) |
| OSA-SN-877 | 오사카 | 교자노오쇼 교자 | 341 JPY | A | 예 | 재검증 | [餃子の王将](https://www.ohsho.co.jp/menu/west/) |
| OSA-FD-878 | 오사카 | 교자노오쇼 라멘(극왕) | 980 JPY | A | 예 | 재검증 | [餃子の王将](https://www.ohsho.co.jp/menu/west/) |
| TYO-TR-879 | 도쿄 | 도쿄메트로 24시간권 | 700 JPY | A | 예 | 재검증 | [도쿄메트로](https://www.tokyometro.jp/ticket/value/1day/index.html) |
| TYO-TR-880 | 도쿄 | 도쿄메트로·도에이 지하철 공통 1일 승차권 | 1100 JPY | A | 예 | 재검증 | [도쿄메트로](https://www.tokyometro.jp/ticket/value/1day/index.html) |
| LON-TR-885 | 런던 | 런던 버스·트램 1일 패스 | 6 GBP | A | 예 | 재검증 | [Transport for London](https://tfl.gov.uk/fares/find-fares/bus-and-tram-fares) |
| BCN-TR-889 | 바르셀로나 | 바르셀로나 T-casual 10회권 1회 환산(1존) | 1.3 EUR | A | 예 | 재검증, 검수: 교차 검수 불일치 | [TMB](https://www.tmb.cat/en/barcelona-fares-metro-bus/single-and-integrated/t-casual) |
| LON-FD-893 | 런던 | 디슘 치킨 루비(커리) | 18.9 GBP | A | 예 | 재검증 | [Dishoom](https://www.dishoom.com/menu/all-day-main/) |
| LON-FD-894 | 런던 | 디슘 파우 바지 | 8.7 GBP | A | 예 | 재검증 | [Dishoom](https://www.dishoom.com/menu/all-day-main/) |
| LON-FD-895 | 런던 | 디슘 하우스 블랙 달 | 11.5 GBP | A | 예 | 재검증 | [Dishoom](https://www.dishoom.com/menu/all-day-main/) |
| SEL-TR-896 | 서울 | 기후동행카드 관광권 2일권 | 8000 KRW | A | 예 | 재검증 | [티머니 카드&페이](https://pay.tmoney.co.kr/ncs/pct/tmnyintd/ReadClmtAcmpCardGd.dev) |
| SEL-TR-897 | 서울 | 기후동행카드 관광권 3일권 | 10000 KRW | A | 예 | 재검증 | [티머니 카드&페이](https://pay.tmoney.co.kr/ncs/pct/tmnyintd/ReadClmtAcmpCardGd.dev) |
| SEL-TR-898 | 서울 | 기후동행카드 관광권 5일권 | 15000 KRW | A | 예 | 재검증 | [티머니 카드&페이](https://pay.tmoney.co.kr/ncs/pct/tmnyintd/ReadClmtAcmpCardGd.dev) |
| SEL-TR-899 | 서울 | 기후동행카드 관광권 7일권 | 20000 KRW | A | 예 | 재검증 | [티머니 카드&페이](https://pay.tmoney.co.kr/ncs/pct/tmnyintd/ReadClmtAcmpCardGd.dev) |
| LON-SN-900 | 런던 | 세인즈버리 에비앙 생수 500ml | 1.55 GBP | A | 예 | 재검증 | [Sainsbury's](https://www.sainsburys.co.uk/gol-ui/product/evian-natural-bottled-mineral-still-water-500ml) |
| LON-SN-901 | 런던 | 세인즈버리 코카콜라 500ml | 2.15 GBP | A | 예 | 재검증 | [Sainsbury's](https://www.sainsburys.co.uk/gol-ui/product/coca-cola-original-taste-500ml) |
| IST-SN-902 | 이스탄불 | 미그로스 에리클리 생수 500ml | 23.95 TRY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Migros](https://www.migros.com.tr/erikli-su-500-ml-p-7b04f9) |
| IST-SN-903 | 이스탄불 | 미그로스 코카콜라 캔 330ml | 55 TRY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Migros](https://www.migros.com.tr/coca-cola-orijinal-tat-kutu-330-ml-p-7a3911) |
| PAR-SN-901 | 파리 | 에비앙 생수 50cL (카르푸) | 1.39 EUR | A | 예 | 재검증 | [Carrefour](https://www.carrefour.fr/p/eau-minerale-naturelle-plate-evian-3068320124377) |
| PAR-SN-902 | 파리 | 코카콜라 50cL 페트 (카르푸) | 1.45 EUR | A | 예 | 재검증 | [Carrefour](https://www.carrefour.fr/p/soda-au-cola-gout-original-coca-cola-3174780000363) |
| PAR-SN-903 | 파리 | 트윅스 초코바 50g (카르푸) | 1.09 EUR | A | 예 | 재검증 | [Carrefour](https://www.carrefour.fr/p/barres-chocolatees-biscuits-enrobes-de-chocolat-et-caramel-twix-5900951313592) |
| BKK-SN-901 | 방콕 | 환타 오렌지 캔 325ml (빅C) | 16 THB | A | 예 | 재검증 | [Big C Online](https://www.bigc.co.th/en/product/fanta-orange-flavored-soft-drink-can-325-ml-8851959132166.13206) |
| BKK-SN-902 | 방콕 | 펩시 캔 325ml (빅C) | 16 THB | A | 예 | 재검증 | [Big C Online](https://www.bigc.co.th/en/product/pepsi-soft-drink-original-flavor-can-325-ml.1181643) |
| NYC-AL-901 | 뉴욕 | 휴스턴 홀 필스너 스몰 | 10 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| BCN-AL-901 | 바르셀로나 | 파브리카 모리츠 라거 에스페시알 생맥주 25cl | 2.65 EUR | A | 예 | 재검증 | [Fàbrica Moritz Barcelona](https://fabricamoritzbarcelona.com/wp-content/uploads/2026/05/fmb_cartes-begudes_maig26_cat.pdf) |
| FUK-TR-001 | 후쿠오카 | 후쿠오카시 지하철 1회권(1~4구간) | 210~340 JPY | A | 예 | 재검증 | [福岡市地下鉄](https://subway.city.fukuoka.lg.jp/fare/futuken/) |
| FUK-TR-002 | 후쿠오카 | 후쿠오카시 지하철 1회권 소아(1~4구간) | 110~170 JPY | A | 예 | 재검증 | [福岡市地下鉄](https://subway.city.fukuoka.lg.jp/fare/futuken/) |
| FUK-TR-003 | 후쿠오카 | 니시테츠 버스 후쿠오카 도심 균일 운임 | 150 JPY | A | 예 | 재검증 | [西鉄グループ](https://www.nishitetsu.jp/bus/rosen/150/) |
| FUK-TR-004 | 후쿠오카 | 니시테츠 버스 후쿠오카 도심 균일 운임 소아 | 80 JPY | A | 예 | 재검증 | [西鉄グループ](https://www.nishitetsu.jp/bus/rosen/150/) |
| FUK-TR-005 | 후쿠오카 | 후쿠오카시 지하철 1일 승차권 | 640 JPY | A | 예 | 재검증 | [福岡市地下鉄](https://subway.city.fukuoka.lg.jp/fare/card/oneday.php) |
| FUK-TR-006 | 후쿠오카 | 후쿠오카시 지하철 1일 승차권 소아 | 320 JPY | A | 예 | 재검증 | [福岡市地下鉄](https://subway.city.fukuoka.lg.jp/fare/card/oneday.php) |
| FUK-FD-001 | 후쿠오카 | 마키노 우동 고보텐 우동 | 490 JPY | A | 예 | 재검증 | [釜揚げ牧のうどん](https://www.makinoudon.jp/cont1/main.html) |
| FUK-FD-002 | 후쿠오카 | 라쿠텐치 모쓰나베 1인분 | 1771 JPY | A | 예 | 재검증 | [元祖もつ鍋 楽天地](https://rakutenti.com/menu/) |
| FUK-FD-003 | 후쿠오카 | 마에다야 모쓰나베 1인분 | 2068 JPY | A | 예 | 재검증 | [博多もつ鍋 前田屋](https://motsunabe-maedaya.com/menu/) |
| FUK-SN-001 | 후쿠오카 | 패밀리마트 블렌드 커피 S | 158 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| FUK-SN-002 | 후쿠오카 | 패밀리마트 카페라테 M | 255 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| FUK-SN-003 | 후쿠오카 | 패밀리마트 아이스커피 S | 158 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| FUK-AL-001 | 후쿠오카 | 마에다야 생맥주(삿포로 쿠로라벨) | 693 JPY | A | 예 | 재검증 | [博多もつ鍋 前田屋](https://motsunabe-maedaya.com/menu/) |
| FUK-AL-002 | 후쿠오카 | 마에다야 가쿠 하이볼 | 594 JPY | A | 예 | 재검증 | [博多もつ鍋 前田屋](https://motsunabe-maedaya.com/menu/) |
| FUK-AL-003 | 후쿠오카 | 마에다야 소주 구로키리시마 | 528 JPY | A | 예 | 재검증 | [博多もつ鍋 前田屋](https://motsunabe-maedaya.com/menu/) |
| FUK-AT-001 | 후쿠오카 | 후쿠오카 타워 전망 요금(성인) | 1000 JPY | A | 예 | 재검증 | [福岡タワー](https://www.fukuokatower.co.jp/charge/) |
| FUK-AT-002 | 후쿠오카 | 후쿠오카 타워 전망 요금(초중학생) | 500 JPY | A | 예 | 재검증 | [福岡タワー](https://www.fukuokatower.co.jp/charge/) |
| FUK-AT-003 | 후쿠오카 | 후쿠오카시 미술관 컬렉션전(일반) | 200 JPY | A | 예 | 재검증 | [福岡市美術館](https://www.fukuoka-art-museum.jp/guide/) |
| FUK-AT-004 | 후쿠오카 | 후쿠오카시 미술관 컬렉션전(중학생 이하 무료) | 0 JPY | A | 예 | 재검증 | [福岡市美術館](https://www.fukuoka-art-museum.jp/guide/) |
| FUK-AT-005 | 후쿠오카 | 후쿠오카시 박물관 상설전(일반) | 200 JPY | A | 예 | 재검증 | [福岡市博物館](https://museum.city.fukuoka.jp/sp/about/) |
| FUK-AT-006 | 후쿠오카 | 후쿠오카시 박물관 상설전(중학생 이하 무료) | 0 JPY | A | 예 | 재검증 | [福岡市博物館](https://museum.city.fukuoka.jp/sp/about/) |
| FUK-AT-007 | 후쿠오카 | 마린월드 우미노나카미치 입장료(성인) | 2500 JPY | A | 예 | 재검증 | [マリンワールド海の中道](https://marine-world.jp/general-guide/regular-fees/) |
| FUK-AT-008 | 후쿠오카 | 마린월드 우미노나카미치 입장료(초중학생) | 1200 JPY | A | 예 | 재검증 | [マリンワールド海の中道](https://marine-world.jp/general-guide/regular-fees/) |
| FUK-AT-009 | 후쿠오카 | 우미노나카미치 해변공원 입장료(성인) | 450 JPY | A | 예 | 재검증 | [国営海の中道海浜公園](https://uminaka-park.jp/guide/open-hour/) |
| FUK-AT-010 | 후쿠오카 | 우미노나카미치 해변공원 입장료(중학생 이하 무료) | 0 JPY | A | 예 | 재검증 | [国営海の中道海浜公園](https://uminaka-park.jp/guide/open-hour/) |
| FUK-TR-007 | 후쿠오카 | JR규슈 보통 운임 기본(초승) | 200 JPY | A | 예 | 재검증 | [JR九州](https://www.jrkyushu.co.jp/news/__icsFiles/afieldfile/2024/07/19/240719_fare_revision.pdf) |
| TYO-AT-206 | 도쿄 | 도쿄타워 메인데크 초등학생 입장권 | 900 JPY | A | 예 | 재검증 | [TOKYO TOWER](https://en.tokyotower.co.jp/fee/) |
| OSA-AT-201 | 오사카 | 산타마리아 데이크루즈 초등학생 요금 | 1000 JPY | A | 예 | 재검증 | [大阪水上バス](https://suijo-bus.osaka/cruiselist/santamaria/) |
| BKK-AT-201 | 방콕 | 방콕 예술문화센터 일반 전시 아동 관람 | 0 THB | A | 예 | 재검증 | [Bangkok Art and Culture Centre](https://www.bacc.or.th/en/plan-your-visit) |
| BKK-AT-202 | 방콕 | 룸피니 공원 입장 아동 | 0 THB | A | 예 | 재검증 | [Greener Bangkok](https://greener.bangkok.go.th/en/park/suan-lumpini/) |
| SHA-AT-201 | 상하이 | 상하이 세계박람회박물관 아동 입장 | 0 CNY | A | 예 | 재검증 | [World Expo Museum](https://www.expo-museum.cn/sbbwg/n55/n266/n267/index.html) |
| SEL-AT-204 | 서울 | 국립중앙박물관 상설전시 아동 관람 | 0 KRW | A | 예 | 재검증 | [국립중앙박물관](https://vcm.museum.go.kr/MUSEUM/contents/M0201010000.do) |
| PAR-AT-202 | 파리 | 루브르 비EEA 방문객 아동 입장 (만 18세 미만) | 0 EUR | A | 예 | 재검증 | [Musée du Louvre](https://www.louvre.fr/en/visit/hours-admission/tickets-and-prices) |
| PAR-AT-203 | 파리 | 개선문 아동 입장권 (만 18세 미만) | 0 EUR | A | 예 | 재검증 | [Centre des monuments nationaux](https://www.paris-arc-de-triomphe.fr/en/visit/practical-information) |
| LON-AT-201 | 런던 | 내셔널 갤러리 일반 관람 아동 | 0 GBP | A | 예 | 재검증 | [The National Gallery](https://www.nationalgallery.org.uk/visiting/plan-your-visit) |
| LON-AT-202 | 런던 | 자연사박물관 일반 갤러리 아동 입장 | 0 GBP | A | 예 | 재검증 | [Natural History Museum](https://www.nhm.ac.uk/visit.html) |
| LON-AT-203 | 런던 | 과학박물관 일반 관람 아동 입장 | 0 GBP | A | 예 | 재검증 | [Science Museum](https://www.sciencemuseum.org.uk/visit) |
| TPE-AT-201 | 타이베이 | 베이터우 온천박물관 아동 관람 | 0 TWD | A | 예 | 재검증 | [臺北市政府文化局](https://culture.gov.taipei/cp.aspx?n=680DE22A4F00B25F) |
| TPE-AT-202 | 타이베이 | 룽산사 아동 참배 | 0 TWD | A | 예 | 재검증 | [Taiwan Religious Culture Map (Ministry of the Interior)](https://taiwangods.moi.gov.tw/html/landscape_en/1_0011.aspx?i=15) |
| PAR-AT-204 | 파리 | 카르나발레 박물관 상설전시 아동 입장 | 0 EUR | A | 예 | 재검증 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-205 | 파리 | 쁘띠 팔레 상설전시 아동 입장 | 0 EUR | A | 예 | 재검증 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-206 | 파리 | 파리 시립현대미술관 상설전시 아동 입장 | 0 EUR | A | 예 | 재검증 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| PAR-AT-207 | 파리 | 빅토르 위고의 집 상설전시 아동 입장 | 0 EUR | A | 예 | 재검증 | [Paris Musées](https://parismusees.paris.fr/fr/votre-visite/tarifs) |
| BCN-AT-201 | 바르셀로나 | 구엘 공원 아동 입장권 (만 7~12세) | 13.5 EUR | A | 예 | 재검증 | [Park Güell](https://parkguell.barcelona/en/planning-your-visit/prices-and-times) |
| SIN-AT-201 | 싱가포르 | 싱가포르 국립 난초 정원 12세 미만 입장 | 0 SGD | A | 예 | 재검증 | [Singapore Botanic Gardens / NParks](https://sbg.nparks.gov.sg/attractions/national-orchid-garden/) |
| NYC-AT-201 | 뉴욕 | 뉴욕 현대미술관 16세 이하 입장 | 0 USD | A | 예 | 재검증 | [The Museum of Modern Art (MoMA)](https://www.moma.org/visit/tips) |
| BCN-AT-202 | 바르셀로나 | 카사 밀라 일반 관람 아동 입장 | 0 EUR | A | 예 | 재검증 | [La Pedrera - Casa Milà](https://www.lapedrera.com/en/tickets/) |
| BCN-AT-203 | 바르셀로나 | 카사 바트요 일반 관람 아동 입장 | 0 EUR | A | 예 | 재검증 | [Casa Batlló](https://www.casabatllo.es/en/online-tickets/) |
| ROM-AT-201 | 로마 | 산탄젤로 성 만 18세 미만 입장 | 0 EUR | A | 예 | 재검증 | [Direzione Musei nazionali della città di Roma](http://castelsantangelo.beniculturali.it/getFile.php?id=538) |
| ROM-AT-202 | 로마 | 바티칸 박물관 7~12세 아동 입장권 | 10 EUR | A | 예 | 재검증 | [Vatican Museums](https://www.museivaticani.va/content/museivaticani/en/organizza-visita/tariffe-e-biglietti.html) |
| NYC-AT-202 | 뉴욕 | 자유의 여신상·엘리스섬 그라운드 티켓 아동 4~12세 | 12 USD | A | 예 | 재검증 | [Statue of Liberty-Ellis Island Foundation / Statue Cruises](https://www.statueofliberty.org/visit/faq-2/) |
| PAR-AT-209 | 파리 | 에펠탑 2층 계단 아동 4~11세 | 3.8 EUR | A | 예 | 재검증 | [Eiffel Tower](https://www.toureiffel.paris/en/rates-opening-times) |
| PAR-AT-210 | 파리 | 에펠탑 2층 엘리베이터 아동 4~11세 | 6 EUR | A | 예 | 재검증 | [Eiffel Tower](https://www.toureiffel.paris/en/rates-opening-times) |
| PAR-AT-211 | 파리 | 에펠탑 정상 엘리베이터 아동 4~11세 | 9.2 EUR | A | 예 | 재검증 | [Eiffel Tower](https://www.toureiffel.paris/en/rates-opening-times) |
| OSA-AT-205 | 오사카 | 우메다 스카이빌딩 전망대 초등학생 입장권 | 500 JPY | A | 예 | 재검증 | [OSAKA AMAZING PASS](https://osaka-amazing-pass.com/en/service_free.html) |
| TYO-AT-201 | 도쿄 | 도쿄 스카이트리 전망대 세트권 (아동 6~14세) | 1500~2400 JPY | A | 예 | 재검증 | [TOKYO SKYTREE](https://www.tokyo-skytree.jp/datas/files/2026/03/19/da1ebeff3b1d6bbfa26f052f2d6a99c9a33b8143.pdf) |
| TYO-AT-204 | 도쿄 | 도쿄국립박물관 컬렉션 전시 (고등학생 이하·만 18세 미만 무료) | 0 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [도쿄국립박물관](https://www.tnm.jp/modules/r_free_page/index.php?id=113) |
| SEL-AT-201 | 서울 | 경복궁 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부](https://royal.khs.go.kr/ROYAL/contents/R703000000.do) |
| SEL-AT-202 | 서울 | 창덕궁 전각관람 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부](https://royal.khs.go.kr/ROYAL/contents/R703000000.do) |
| SEL-AT-203 | 서울 | 덕수궁 입장권 (외국인 만 18세 이하) | 0 KRW | A | 예 | 재검증 | [궁능유적본부](https://royal.khs.go.kr/ROYAL/contents/R703000000.do) |
| PUS-AT-201 | 부산 | 해운대 해변열차 1회 탑승권 (어린이) | 5600~7000 KRW | A | 예 | 재검증 | [해운대블루라인파크](https://www.bluelinepark.com/fare.do) |
| PUS-AT-203 | 부산 | 해운대 해변열차 1회 탑승권 (성인) | 8000~10000 KRW | A | 예 | 재검증 | [해운대블루라인파크](https://www.bluelinepark.com/fare.do) |
| OSA-TR-801 | 오사카 | 오사카 어메이징 패스 기본형 1일권 | 3500 JPY | A | 예 | 재검증 | [SURUTTO KANSAI / OSAKA AMAZING PASS](https://osaka-amazing-pass.com/en/howto_about_1day.html?amazingPass=) |
| SIN-TR-802 | 싱가포르 | 싱가포르 투어리스트 패스 참(머라이언 원형) 1일권 | 22 SGD | A | 예 | 재검증 | [Singapore Tourist Pass / SimplyGo](https://thesingaporetouristpass.com.sg/type-of-passes/) |
| ROM-TR-801 | 로마 | ATAC BIRG 로마 구역 A 지역 통합 1일권 | 7.2 EUR | A | 예 | 재검증 | [ATAC](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| SIN-SN-801 | 싱가포르 | FairPrice 오리지널 감자칩 60g | 1.2 SGD | A | 예 | 재검증 | [NTUC FairPrice](https://www.fairprice.com.sg/product/fairprice-potato-chips-original-60g-13207660) |
| SIN-SN-802 | 싱가포르 | Mitsuya 맛 비스킷 스틱 40g | 1.9 SGD | A | 예 | 재검증 | [NTUC FairPrice](https://www.fairprice.com.sg/product/491837) |
| CJU-FD-760 | 제주 | 소산도 우도흑돼지 안심카츠 | 17000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 소산도](https://map.naver.com/p/search/%EC%86%8C%EC%82%B0%EB%8F%84) |
| CJU-FD-761 | 제주 | 소산도 흑돼지 우도 등심카츠 | 16000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 소산도](https://map.naver.com/p/search/%EC%86%8C%EC%82%B0%EB%8F%84) |
| CJU-FD-762 | 제주 | 제주식 고사리해장국 | 11000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 제주고사리해장국 중문](https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B3%A0%EC%82%AC%EB%A6%AC%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EC%A4%91%EB%AC%B8) |
| CJU-FD-763 | 제주 | 제주 몸국 | 11000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 제주고사리해장국 중문](https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B3%A0%EC%82%AC%EB%A6%AC%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EC%A4%91%EB%AC%B8) |
| CJU-FD-764 | 제주 | 제주 접짝뼈국 | 12000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 제주고사리해장국 중문](https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B3%A0%EC%82%AC%EB%A6%AC%ED%95%B4%EC%9E%A5%EA%B5%AD%20%EC%A4%91%EB%AC%B8) |
| CJU-FD-765 | 제주 | 성산바다풍경 해물뚝배기 | 16000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 성산바다풍경 제주성산](https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%EB%B0%94%EB%8B%A4%ED%92%8D%EA%B2%BD%20%EC%A0%9C%EC%A3%BC%EC%84%B1%EC%82%B0) |
| CJU-FD-766 | 제주 | 성산바다풍경 오분자기뚝배기 | 19000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 성산바다풍경 제주성산](https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%EB%B0%94%EB%8B%A4%ED%92%8D%EA%B2%BD%20%EC%A0%9C%EC%A3%BC%EC%84%B1%EC%82%B0) |
| CJU-FD-767 | 제주 | 금돗 묵은지 흑돼지 김치찌개 | 7000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 금돗 성산흑돼지](https://map.naver.com/p/search/%EA%B8%88%EB%8F%97%20%EC%84%B1%EC%82%B0%ED%9D%91%EB%8F%BC%EC%A7%80) |
| CJU-FD-768 | 제주 | 금돗 열무국수 | 7000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 금돗 성산흑돼지](https://map.naver.com/p/search/%EA%B8%88%EB%8F%97%20%EC%84%B1%EC%82%B0%ED%9D%91%EB%8F%BC%EC%A7%80) |
| SEL-FD-760 | 서울 | 청돈옥 묵은지김치찌개 | 8000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 청돈옥 홍대본점](https://map.naver.com/p/search/%EC%B2%AD%EB%8F%88%EC%98%A5%20%ED%99%8D%EB%8C%80%EB%B3%B8%EC%A0%90) |
| SEL-FD-761 | 서울 | 청돈옥 수육비빔면 | 8000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 청돈옥 홍대본점](https://map.naver.com/p/search/%EC%B2%AD%EB%8F%88%EC%98%A5%20%ED%99%8D%EB%8C%80%EB%B3%B8%EC%A0%90) |
| SEL-AL-762 | 서울 | 청돈옥 하이볼 | 8000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 청돈옥 홍대본점](https://map.naver.com/p/search/%EC%B2%AD%EB%8F%88%EC%98%A5%20%ED%99%8D%EB%8C%80%EB%B3%B8%EC%A0%90) |
| SEL-FD-763 | 서울 | 박만배아리랑보쌈 점심 보쌈정식 (평일) | 12000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 박만배아리랑보쌈 방이점](https://map.naver.com/p/search/%EB%B0%95%EB%A7%8C%EB%B0%B0%EC%95%84%EB%A6%AC%EB%9E%91%EB%B3%B4%EC%8C%88%20%EB%B0%A9%EC%9D%B4%EC%A0%90) |
| SEL-AL-764 | 서울 | 송탄진대광부대찌개 소주 1병 | 4000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 송탄진대광부대찌개](https://map.naver.com/p/search/%EC%86%A1%ED%83%84%EC%A7%84%EB%8C%80%EA%B4%91%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C) |
| SEL-AL-765 | 서울 | 송탄진대광부대찌개 맥주 1병 | 5000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 송탄진대광부대찌개](https://map.naver.com/p/search/%EC%86%A1%ED%83%84%EC%A7%84%EB%8C%80%EA%B4%91%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C) |
| SEL-SN-766 | 서울 | 송탄진대광부대찌개 탄산음료 1캔 | 2000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 송탄진대광부대찌개](https://map.naver.com/p/search/%EC%86%A1%ED%83%84%EC%A7%84%EB%8C%80%EA%B4%91%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C) |
| CJU-SN-770 | 제주 | 미르오메기떡 오메기떡 낱개 | 900 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 미르오메기떡](https://map.naver.com/p/search/%EB%AF%B8%EB%A5%B4%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| CJU-SN-771 | 제주 | 춘심이네 오메기떡 낱개 | 1200 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 춘심이네오메기떡](https://map.naver.com/p/search/%EC%B6%98%EC%8B%AC%EC%9D%B4%EB%84%A4%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| CJU-SN-772 | 제주 | 할머니떡집 감귤모찌 1팩 | 5000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 할머니떡집 오메기떡](https://map.naver.com/p/search/%ED%95%A0%EB%A8%B8%EB%8B%88%EB%96%A1%EC%A7%91%20%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| CJU-SV-773 | 제주 | 미르오메기떡 혼합 30알 | 27000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 미르오메기떡](https://map.naver.com/p/search/%EB%AF%B8%EB%A5%B4%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| CJU-SV-774 | 제주 | 춘심이네 오메기떡 40개 | 39000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 춘심이네오메기떡](https://map.naver.com/p/search/%EC%B6%98%EC%8B%AC%EC%9D%B4%EB%84%A4%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| CJU-SV-775 | 제주 | 할머니떡집 오메기떡 11개 (4종류) | 10000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 할머니떡집 오메기떡](https://map.naver.com/p/search/%ED%95%A0%EB%A8%B8%EB%8B%88%EB%96%A1%EC%A7%91%20%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1) |
| SEL-SN-782 | 서울 | 루프 베이커리 카페 아메리카노 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · LOOOP 루프 베이커리 카페 성수](https://map.naver.com/p/search/LOOOP%20%EB%A3%A8%ED%94%84%20%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC%20%EC%B9%B4%ED%8E%98%20%EC%84%B1%EC%88%98) |
| SEL-SN-783 | 서울 | 아쿠아산타 1인용 딸기 프레지에 | 12900 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 아쿠아산타 성수카페](https://map.naver.com/p/search/%EC%95%84%EC%BF%A0%EC%95%84%EC%82%B0%ED%83%80%20%EC%84%B1%EC%88%98%EC%B9%B4%ED%8E%98) |
| SEL-SN-784 | 서울 | 아쿠아산타 수박주스 | 8500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 아쿠아산타 성수카페](https://map.naver.com/p/search/%EC%95%84%EC%BF%A0%EC%95%84%EC%82%B0%ED%83%80%20%EC%84%B1%EC%88%98%EC%B9%B4%ED%8E%98) |
| SEL-FD-785 | 서울 | 성수다락 다락 오므라이스 | 17000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 성수다락](https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%8B%A4%EB%9D%BD) |
| SEL-FD-786 | 서울 | 성수다락 다락 로제 파스타 | 19000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 성수다락](https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%8B%A4%EB%9D%BD) |
| SEL-FD-787 | 서울 | 꾸띠자르당 에그 베네딕트 런치 세트 | 17000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 꾸띠자르당](https://map.naver.com/p/search/%EA%BE%B8%EB%9D%A0%EC%9E%90%EB%A5%B4%EB%8B%B9) |
| SEL-FD-788 | 서울 | 이태원사랑채 충무김밥 | 13000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 이태원사랑채](https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%82%AC%EB%9E%91%EC%B1%84) |
| SEL-AL-789 | 서울 | 이태원사랑채 장수막걸리 1병 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 이태원사랑채](https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%82%AC%EB%9E%91%EC%B1%84) |
| SEL-AL-790 | 서울 | 이태원사랑채 소주 1병 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 이태원사랑채](https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%82%AC%EB%9E%91%EC%B1%84) |
| SEL-AL-791 | 서울 | 이태원사랑채 맥주 1병 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 이태원사랑채](https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%82%AC%EB%9E%91%EC%B1%84) |
| SEL-SN-792 | 서울 | 이태원사랑채 콜라·사이다 | 3000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 이태원사랑채](https://map.naver.com/p/search/%EC%9D%B4%ED%83%9C%EC%9B%90%EC%82%AC%EB%9E%91%EC%B1%84) |
| SEL-FD-793 | 서울 | 올바른스시 올바른초밥 (10피스) | 15000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 올바른스시 홍대역 직영점](https://map.naver.com/p/search/%EC%98%AC%EB%B0%94%EB%A5%B8%EC%8A%A4%EC%8B%9C%20%ED%99%8D%EB%8C%80%EC%97%AD%20%EC%A7%81%EC%98%81%EC%A0%90) |
| SEL-FD-794 | 서울 | 올바른스시 어린이초밥 (10피스) | 14500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 올바른스시 홍대역 직영점](https://map.naver.com/p/search/%EC%98%AC%EB%B0%94%EB%A5%B8%EC%8A%A4%EC%8B%9C%20%ED%99%8D%EB%8C%80%EC%97%AD%20%EC%A7%81%EC%98%81%EC%A0%90) |
| SEL-AL-795 | 서울 | 올바른스시 참이슬 1병 | 5500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 올바른스시 홍대역 직영점](https://map.naver.com/p/search/%EC%98%AC%EB%B0%94%EB%A5%B8%EC%8A%A4%EC%8B%9C%20%ED%99%8D%EB%8C%80%EC%97%AD%20%EC%A7%81%EC%98%81%EC%A0%90) |
| SEL-AL-796 | 서울 | 올바른스시 카스 1병 | 5500 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 올바른스시 홍대역 직영점](https://map.naver.com/p/search/%EC%98%AC%EB%B0%94%EB%A5%B8%EC%8A%A4%EC%8B%9C%20%ED%99%8D%EB%8C%80%EC%97%AD%20%EC%A7%81%EC%98%81%EC%A0%90) |
| SEL-AL-797 | 서울 | 올바른스시 매화수 1병 | 6000 KRW | C | 예 | C등급, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 · 올바른스시 홍대역 직영점](https://map.naver.com/p/search/%EC%98%AC%EB%B0%94%EB%A5%B8%EC%8A%A4%EC%8B%9C%20%ED%99%8D%EB%8C%80%EC%97%AD%20%EC%A7%81%EC%98%81%EC%A0%90) |
| CJU-TR-001 | 제주 | 제주 간선/지선버스 기본요금 (카드) | 1150 KRW | A | 예 | 재검증 | [제주버스정보시스템](http://bus.jeju.go.kr/guide/fare) |
| CJU-TR-002 | 제주 | 제주 급행버스 기본/구간요금 (카드) | 2000~3000 KRW | A | 예 | 재검증 | [제주버스정보시스템](http://bus.jeju.go.kr/guide/fare) |
| CJU-TR-003 | 제주 | 제주 관광지순환버스 1회권 (카드) | 1150 KRW | A | 예 | 재검증 | [제주관광지순환버스 공식홈페이지](http://www.jejutourbus.com/sub02/sub01.php) |
| CJU-FD-001 | 제주 | 자매국수 고기국수 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 자매국수 공식 메뉴판](https://map.naver.com/p/entry/place/13570691) |
| CJU-FD-002 | 제주 | 올래국수 고기국수 | 10000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 올래국수 공식 메뉴판](https://map.naver.com/p/entry/place/11728283) |
| CJU-FD-003 | 제주 | 숙성도 숙성 흑돼지 (1인분 200g) | 22000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [숙성도 노형본관 매장 공식 메뉴판](https://map.naver.com/p/entry/place/1070809277) |
| CJU-FD-004 | 제주 | 오조해녀의집 전복죽 | 13000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 오조해녀의집 공식 메뉴판](https://map.naver.com/p/entry/place/11831417) |
| CJU-FD-005 | 제주 | 진두강정 전복해물뚝배기 | 15000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 삼보식당 공식 메뉴판](https://map.naver.com/p/entry/place/11831343) |
| CJU-FD-006 | 제주 | 에이바우트커피 아메리카노 (모닝할인/일반) | 1900~2900 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [에이바우트커피 공식홈페이지](https://aboutcoffee.co.kr/) |
| CJU-FD-007 | 제주 | 동문시장 착즙 한라봉주스 (1병) | 4000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [동문시장 공식 판매처 가격표시](https://map.naver.com/p/entry/place/11624838) |
| CJU-FD-008 | 제주 | 동문시장 원조 오메기떡 (낱개 1개) | 1000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [네이버 플레이스 진아떡집 공식 메뉴](https://map.naver.com/p/entry/place/11831418) |
| CJU-FD-009 | 제주 | 한라산 21도 소주 | 1950 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| CJU-FD-010 | 제주 | 제주맥주 제주위트에일 캔 | 4500 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [CU 공식홈페이지(포켓CU)](https://cu.bgfretail.com/product/product.do?category=04) |
| CJU-FD-011 | 제주 | 식당 한라산 소주/카스 맥주 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [자매국수 매장 공식 주류 메뉴판](https://map.naver.com/p/entry/place/13570691) |
| CJU-SV-001 | 제주 | 제주 마음샌드 (10개입) | 16000 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [파리바게뜨 파바앱 공식 예약](https://www.paris.co.kr/) |
| CJU-SV-002 | 제주 | 제주 감귤 초콜릿 선물세트 | 10000 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [이제주숍 공식 특산물 온라인몰](https://mall.ejeju.net/) |
| CJU-SV-003 | 제주 | 돌하르방 현무암 감귤 마그넷 | 5000 KRW | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [제주기념품점 공식 안내](https://map.naver.com/p/entry/place/11624838) |
| CJU-AT-001 | 제주 | 성산일출봉 유료관람권 (성인) | 5000 KRW | A | 예 | 재검증 | [제주세계유산축전 성산일출봉 공식안내](https://www.jeju.go.kr/heritage/heritage/seongsan.htm) |
| CJU-AT-002 | 제주 | 성산일출봉 유료관람권 (어린이) | 2500 KRW | A | 예 | 재검증 | [제주세계유산축전 성산일출봉 공식안내](https://www.jeju.go.kr/heritage/heritage/seongsan.htm) |
| CJU-AT-003 | 제주 | 만장굴 입장료 (어른) | 4000 KRW | A | 예 | 재검증 | [제주세계자연유산센터 공식안내](https://www.jeju.go.kr/wnhcenter/geology/manjang.htm) |
| CJU-AT-004 | 제주 | 만장굴 입장료 (어린이) | 2000 KRW | A | 예 | 재검증 | [제주세계자연유산센터 공식안내](https://www.jeju.go.kr/wnhcenter/geology/manjang.htm) |
| CJU-AT-005 | 제주 | 아쿠아플라넷 제주 종합권 (대인) | 45500 KRW | A | 예 | 재검증 | [아쿠아플라넷 제주 공식홈페이지](https://www.aquaplanet.co.kr/jeju/information/use_price.do;https://www.aquaplanet.co.kr/jeju/eng/information/use_price.do) |
| CJU-AT-006 | 제주 | 아쿠아플라넷 제주 종합권 (어린이) | 41400 KRW | A | 예 | 재검증 | [아쿠아플라넷 제주 공식홈페이지](https://www.aquaplanet.co.kr/jeju/information/use_price.do;https://www.aquaplanet.co.kr/jeju/eng/information/use_price.do) |
| CJU-AT-007 | 제주 | 신화테마파크 자유이용권 (1인) | 30000 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [제주신화월드 공식홈페이지](https://www.shinhwaworld.com/park.php?url_lang=ko_KR) |
| CJU-AT-008 | 제주 | 오설록 티뮤지엄 본관 관람 | 0 KRW | A | 예 | 재검증 | [오설록 공식홈페이지 티뮤지엄 안내](https://www.osulloc.com/kr/ko/museum) |
| CJU-AT-009 | 제주 | 천지연폭포 관람료 (어른) | 2000 KRW | A | 예 | 재검증 | [서귀포시 공영관광지 관람안내](https://www.seogwipo.go.kr/) |
| CJU-AT-010 | 제주 | 천지연폭포 관람료 (어린이) | 1000 KRW | A | 예 | 재검증 | [서귀포시 공영관광지 관람안내](https://www.seogwipo.go.kr/) |
| NYC-TR-001 | 뉴욕 | 지하철·시내버스 기본 요금 | 3 USD | A | 예 | 재검증 | [MTA](https://www.mta.info/fares-tolls/subway-bus) |
| NYC-TR-002 | 뉴욕 | 급행버스 기본 요금 | 7.25 USD | A | 예 | 재검증 | [MTA](https://www.mta.info/fares-tolls/subway-bus) |
| NYC-TR-003 | 뉴욕 | NYC 페리 성인 편도 | 4.5 USD | A | 예 | 재검증 | [NYC Ferry](https://www.ferry.nyc/ticketing-info/) |
| NYC-TR-004 | 뉴욕 | LIRR 시티티켓 비혼잡 시간 | 5.25 USD | A | 예 | 재검증 | [MTA LIRR](https://www.mta.info/fares-tolls/lirr-metro-north) |
| NYC-FD-101 | 뉴욕 | 셰이크쉑 쉑버거 | 7.69 USD | A | 예 | 재검증, 검수: 원문 확인 불가 | [Shake Shack](https://shakeshack.com/location/theater-district-ny) |
| NYC-FD-102 | 뉴욕 | 주니어스 체리 치즈케이크 1조각 | 9.75 USD | A | 예 | 재검증 | [Junior's Cheesecake](https://cdn.shopify.com/s/files/1/0694/7517/2609/files/45th_Main_Menu_3.1.26.pdf) |
| NYC-FD-103 | 뉴욕 | 휴스턴 홀 버거와 감자튀김 | 21.95 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-FD-202 | 뉴욕 | 휴스턴 홀 골든 라거 스몰 | 9.5 USD | A | 예 | 재검증, 검수: 원문 확인 불가 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-FD-203 | 뉴욕 | 휴스턴 홀 소비뇽 블랑 1잔 | 14.5 USD | A | 예 | 재검증 | [Houston Hall](https://www.houstonhallny.com/menus/) |
| NYC-SV-101 | 뉴욕 | 메트 로고 비닐 토트백 | 55 USD | A | 예 | 재검증 | [The Met Store](https://store.metmuseum.org/met-logo-vinyl-tote-logovinyltote) |
| NYC-AT-101 | 뉴욕 | 자유의 여신상·엘리스섬 그라운드 티켓 | 23.5 USD | A | 예 | 재검증 | [Statue of Liberty & Ellis Island Foundation](https://www.statueofliberty.org/visit/faq-2/) |
| NYC-AT-102 | 뉴욕 | 엠파이어 스테이트 빌딩 86층 전망대 | 46 USD | A | 예 | 재검증 | [Empire State Building](https://www.esbnyc.com/buy-tickets) |
| NYC-AT-103 | 뉴욕 | 엠파이어 스테이트 빌딩 102층·86층 | 81 USD | A | 예 | 재검증 | [Empire State Building](https://www.esbnyc.com/buy-tickets) |
| NYC-AT-104 | 뉴욕 | 메트로폴리탄 미술관 성인 입장권 | 30 USD | A | 예 | 재검증 | [The Metropolitan Museum of Art](https://www.metmuseum.org/visit-guides/membership) |
| NYC-AT-105 | 뉴욕 | MoMA 성인 입장권 | 30 USD | A | 예 | 재검증 | [MoMA](https://www.moma.org/visit/tips) |
| NYC-AT-106 | 뉴욕 | 9/11 메모리얼 박물관 성인 입장권 | 36 USD | A | 예 | 재검증 | [9/11 Memorial & Museum](https://visit.911memorial.org/WebStore/shop/ViewItems.aspx?C=museum&CG=tickets) |
| NYC-SV-111 | 뉴욕 | 메트 로고 접이식 우산 | 25 USD | A | 예 | 재검증 | [The Met Store](https://store.metmuseum.org/met-logo-folding-umbrella-80056083) |
| NYC-FD-121 | 뉴욕 | 카츠 델리 파스트라미 샌드위치 | 28.95 USD | A | 예 | 재검증 | [Katz's Delicatessen](https://katzsdelicatessen.com/) |
| NYC-SV-121 | 뉴욕 | 자유의 여신상 공식 숍 문서 홀더 소형 | 25 USD | A | 예 | 재검증 | [Statue of Liberty & Ellis Island Foundation](https://www.statueofliberty.org/product/logo-embossed-leatherette-eight-corner-document-holder-small/) |
| OSA-FD-901 | 오사카 | 이치란 돈코츠 라멘 | 1180 JPY | A | 예 | 재검증, 검수: 원문 확인 불가 | [一蘭 心斎橋店](https://ichiran.com/shop/kinki/shinsaibashi/) |
| OSA-FD-902 | 오사카 | 호텔 뉴오타니 오사카 SATSUKI 연어 허브버터 구이 | 3800 JPY | A | 예 | 재검증 | [ホテルニューオータニ大阪 SATSUKI](https://www.newotani.co.jp/en/osaka/restaurant/satsuki/) |
| BKK-SV-901 | 방콕 | 짐 톰슨 코끼리 실크 스카프 52인치 | 8500 THB | A | 예 | 재검증 | [Jim Thompson Official Shop](https://www.jimthompson.com/products/elephant-bath-silk-scarf-52-green) |
| DAD-FD-901 | 다낭 | 인더스 베지 파코라 | 119000 VND | A | 예 | 재검증 | [Indus Indian Restaurant Da Nang](https://www.indus.vn/menu/) |
| DAD-FD-902 | 다낭 | 인더스 치킨 티카 마살라 | 149000 VND | A | 예 | 재검증 | [Indus Indian Restaurant Da Nang](https://www.indus.vn/menu/) |
| SIN-FD-901 | 싱가포르 | 야쿤 카야토스트 버터 세트 | 5.6 SGD | A | 예 | 재검증, 검수: 원문 확인 불가 | [Ya Kun Kaya Toast](https://yakun.com.sg/) |
| SIN-FD-902 | 싱가포르 | 이치란 돈코츠 라멘 (싱가포르) | 11.8 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [一蘭 ICHIRAN Singapore](https://en.ichiran.com/np/shop/singapore/) |
| SIN-FD-903 | 싱가포르 | 올드창키 커리퍼프 | 2.2 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [Old Chang Kee](https://www.oldchangkee.com/dipngo.com.sg/menu.html) |
| SIN-SV-901 | 싱가포르 | 올드창키 커리퍼프 10개 상자 | 22 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [Old Chang Kee](https://www.oldchangkee.com/dipngo.com.sg/menu.html) |
| PAR-SV-901 | 파리 | 루브르 사모트라케의 니케 마그넷 | 4.9 EUR | A | 예 | 재검증 | [Louvre Official Boutique](https://boutique.louvre.fr/en/product/19430-magnet-victory-of-samothrace.html) |
| TYO-FD-701 | 도쿄 | 모리소바 | 900 JPY | A | 예 | 재검증 | [Maruyamacho Wadatsumi](https://maruyamachowadatsumi.com/en/menu-shibuya-authentic-japanese/lunch-menu) |
| TYO-FD-702 | 도쿄 | 라멘 곱빼기 | 1050 JPY | A | 예 | 재검증 | [Tokyo Ramen Yokocho Ramen Butayama](https://tokyo-ramenyokocho.com/assets/img/top/store/ramenbutayama/en/menu.pdf?20260601) |
| OSA-FD-703 | 오사카 | 돼지고기 오코노미야키 | 980 JPY | A | 예 | 재검증 | [Osaka Botejyu](https://osaka-botejyu.com/en/menu-en/) |
| TYO-FD-711 | 도쿄 | 이치란 클래식 돈코츠 라멘 | 1180 JPY | A | 예 | 재검증 | [ICHIRAN Asakusa](https://en.ichiran.com/shop/tokyo/asakusa/) |
| TYO-AL-712 | 도쿄 | 이치란 생맥주 (중) | 650 JPY | A | 예 | 재검증 | [ICHIRAN Asakusa](https://en.ichiran.com/shop/tokyo/asakusa/) |
| BKK-FD-714 | 방콕 | MK 채식 완탕 똠얌 수프 | 89 THB | A | 예 | 재검증 | [MK Restaurants](https://www.mkrestaurant.com/en/mk-menu/single-dish) |
| TPE-SN-715 | 타이베이 | 85도씨 아메리카노 (대) | 75 TWD | A | 예 | 재검증 | [85度C](https://www.85cafe.com/Product.php?datatid=9) |
| TPE-SN-716 | 타이베이 | 85도씨 오디 아이스 아메리카노 (중) | 65 TWD | A | 예 | 재검증 | [85度C](https://www.85cafe.com/Product.php?datatid=9) |
| PUS-FD-720 | 부산 | 본죽 팥칼국수 | 10000 KRW | A | 예 | 재검증 | [본죽&비빔밥](https://m.bonif.co.kr/brand/menu?brdCd=BF102) |
| PAR-FD-721 | 파리 | 셰 폴 양파수프 | 13.5 EUR | A | 예 | 재검증 | [Chez Paul](https://chezpaul.com/tarifs-chez-paul/) |
| PAR-FD-722 | 파리 | 셰 폴 점심 세트(전채+메인 또는 메인+디저트) | 21 EUR | A | 예 | 재검증 | [Chez Paul](https://chezpaul.com/tarifs-chez-paul/) |
| LON-FD-723 | 런던 | 웨더스푼 스테이크 앤 에일 푸딩 | 9.12 GBP | A | 예 | 재검증 | [J D Wetherspoon](https://www.jdwetherspoon.com/wp-content/uploads/menus/currentmenus/MENU_2060.pdf) |
| LON-SN-730 | 런던 | 에비앙 생수 500ml (테스코) | 1.5 GBP | A | 예 | 재검증 | [Tesco Groceries](https://www.tesco.com/shop/en-GB/products/252168830) |
| BCN-FD-740 | 바르셀로나 | 콜롬 치킨 파에야 | 10.8 EUR | A | 예 | 재검증 | [COLOM Restaurant Barcelona](https://www.colomrestaurant.com/) |
| NYC-SN-741 | 뉴욕 | 조스 피자 한 조각 | 4.25 USD | A | 예 | 재검증, 세금·서비스료 별도 | [Joe's New York Pizzeria](https://joesnewyorkpizzeria.com/wp-content/uploads/2025/12/JNYP_11.pdf) |
| IST-FD-742 | 이스탄불 | 뮌하스르 가든 되네르 샌드위치 (70g) | 420 TRY | A | 예 | 재검증 | [Münhasır Garden Döner & Kebap](https://www.munhasirgarden.istanbul/en/menu) |
| SEL-SN-800 | 서울 | 삼다수 생수 500ml (이마트몰) | 480 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [이마트몰](https://emart.ssg.com/search.ssg?query=%EB%AC%BC500ml) |
| SEL-SN-801 | 서울 | 아이시스8.0 생수 500ml (이마트몰) | 380~470 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [이마트몰](https://emart.ssg.com/search.ssg?query=%EB%AC%BC500ml) |
| SEL-AL-806 | 서울 | 참이슬 후레쉬 소주 360ml (이마트 에브리데이) | 1410 KRW | A | 예 | 재검증 | [이마트 에브리데이](https://emile.emarteveryday.co.kr/product/ProductList?lCode=025&mCode=22000139) |
| BKK-SN-802 | 방콕 | 아쿠아 파나 생수 500ml (로터스) | 59 THB | A | 예 | 재검증 | [Lotus's Shop Online](https://www.lotuss.com/th/category/milk-and-beverages-1/milk-and-beverages-water) |
| TPE-SN-803 | 타이베이 | 롯데 광천수 500ml (전련) | 23 TWD | A | 예 | 재검증 | [全聯 PX Mart 온라인](https://pxbox.es.pxmart.com.tw/category/500/501/502) |
| TYO-AL-804 | 도쿄 | 세븐프리미엄 더 브루 350ml (세븐일레븐) | 172.7 JPY | A | 예 | 재검증, 세금·서비스료 별도 | [세븐일레븐 재팬](https://www.sej.co.jp/products/a/7premium/alcohol/) |
| IST-SN-805 | 이스탄불 | 아반트 생수 500ml (미그로스) | 6.95 TRY | A | 예 | 재검증, 검수: 원문 확인 불가 | [Migros Sanal Market](https://www.migros.com.tr/su-c-84) |
| TYO-FD-810 | 도쿄 | 요시노야 규동 보통 | 498 JPY | A | 예 | 재검증, 세금·서비스료 별도 | [요시노야](https://www.yoshinoya.com/menu/gyudon/) |
| TYO-FD-812 | 도쿄 | 마쓰야 규메시 보통 | 460 JPY | A | 예 | 재검증 | [마쓰야](https://www.matsuyafoods.co.jp/matsuya/menu/gyumeshi/gyumeshi_hp_250422.html) |
| TYO-SN-813 | 도쿄 | 도토루 아이스커피 M | 350 JPY | A | 예 | 재검증 | [도토루 커피숍](https://www.doutor.co.jp/dcs/menu/detail/20110912122047.html) |
| TYO-FD-820 | 도쿄 | 사이제리야 밀라노풍 도리아 | 300 JPY | A | 예 | 재검증, 세금·서비스료 별도 | [사이제리야](https://www.saizeriya.co.jp/menu-popular/2101/) |
| SEL-FD-821 | 서울 | 한솥 메가치킨마요 도시락 | 6600 KRW | A | 예 | 재검증 | [한솥도시락](https://www.hsd.co.kr/menu/menu_view/250?cate1=4&cate2=12) |
| TYO-SN-822 | 도쿄 | 엑셀시오르 카페 블렌드커피 | 390 JPY | A | 예 | 재검증 | [엑셀시오르 카페(도토루 니치레스)](https://www.doutor.co.jp/news/2026priceEXC.pdf) |
| TYO-FD-951 | 도쿄 | 생맥주 아사히 슈퍼드라이·기린 하트랜드 (호텔 레스토랑) | 1000 JPY | A | 예 | 재검증 | [Hotel Metropolitan Edmont Tokyo Beltempo](https://edmont-tokyo.hotel-metropolitan.com/restaurant/list/beltempo/index.html) |
| TYO-FD-952 | 도쿄 | 생맥주 프리미엄 몰츠 (와카도리 마루노우치) | 630 JPY | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Wakadori Marunouchi (restaurants-guide.tokyo)](https://restaurants-guide.tokyo/restaurants/drink/?id=95) |
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
| TPE-FD-911 | 타이베이 | 광표우육면 홍소 우육면 | 169 TWD | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [광표우육면 (foodpanda)](https://www.foodpanda.com.tw/en/restaurant/sjcf/kuang-biao-niu-rou-mian) |
| TPE-FD-912 | 타이베이 | 문가우육면 삼보 우육면 | 210 TWD | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [문가우육면 (foodpanda)](https://www.foodpanda.com.tw/restaurant/r2nr/wen-jia-niu-rou-mian) |
| SIN-FD-911 | 싱가포르 | 맥도날드 빅맥 | 7.95 SGD | A | 예 | 재검증, 검수: 출처 확인 필요 | [McDonald's Singapore](https://www.mcdonalds.com.sg/full-menu) |
| ROM-TR-101 | 로마 | 로마 48시간권 | 15 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-TR-102 | 로마 | 로마 72시간권 | 22 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-TR-103 | 로마 | 트레니탈리아 지역열차 편도 성인 | 1.9~9 EUR | A | 예 | 재검증, 검수: 원문 확인 불가 | [Trenitalia](https://www.trenitalia.com/en/connections/regionale-trains.html) |
| ROM-SV-101 | 로마 | 바티칸 박물관 공식 숍 아테네 학당 머그컵 | 9 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/QuickSearch.do) |
| ROM-SV-102 | 로마 | 바티칸 박물관 공식 숍 시스티나 천장 퍼즐 540조각 | 11 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/ALTRI-PRODOTTI/Puzzle/Opera-Sillabe/Puzzle-540-Pezzi-%E2%80%93-Volta-Cappella-Sistina/E757/2_630.do) |
| ROM-SV-103 | 로마 | 바티칸 박물관 공식 숍 2027 다이어리 | 10 EUR | A | 예 | 재검증 | [Vatican Museums Official Shop](https://shop.museivaticani.va/kkshop/Musei-Vaticani/Agenda-2026-Musei-Vaticani/E010/2_1539.do) |
| ROM-TR-201 | 로마 | 트레니탈리아 로마 시내(Anello) 지역열차 1회권 | 1 EUR | A | 예 | 재검증 | [Trenitalia](https://www.trenitalia.com/content/dam/trenitalia/allegati/info/condizioni-generali-di-trasporto/parte-iii-trasporto-regionale/tariffe-14/Tariffa_14_RM.pdf) |
| ROM-TR-001 | 로마 | BIT 통합 100분권 | 1.5 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/bit) |
| ROM-TR-004 | 로마 | 로마 24시간권 | 8.5 EUR | A | 예 | 재검증 | [ATAC Roma](https://www.atac.roma.it/en/tickets-and-passes/birg) |
| ROM-FD-101 | 로마 | 단테스 바 토마토 바질 파스타 | 8 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-102 | 로마 | 카페 리페타 아마트리차나 | 10 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Caffe Ripetta (quandoo)](https://www.quandoo.it/en/place/caffe-ripetta-95692/menu) |
| ROM-FD-103 | 로마 | 단테스 바 피자 마르게리타 | 10 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-104 | 로마 | 그란 카페 로시 마르티니 리가토니 카르보나라 | 15 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Gran Caffe Rossi Martini (quandoo)](https://www.quandoo.it/en/place/gran-caffe-rossi-martini-48508/menu) |
| ROM-FD-105 | 로마 | 단테스 바 고기 세트 메뉴 | 22 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Dante's Bar Caffe (quandoo)](https://www.quandoo.it/en/place/dantes-bar-caffe-95556/menu) |
| ROM-FD-201 | 로마 | 지올리티 젤라토 컵 | 3~3.5 EUR | A | 예 | 재검증, 검수: 출처 확인 필요 | [Giolitti](https://www.giolitti.it/en/) |
| ROM-FD-202 | 로마 | 카페 참피니 에스프레소 | 1.2 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Caffe Ciampini (quandoo)](https://www.quandoo.it/en/place/caffe-ciampini-21378/menu) |
| ROM-FD-203 | 로마 | 카페 참피니 카푸치노 | 1.5 EUR | C | 조건부 | C등급, 조건부, 재검증, 검수: 원문 확인 불가 | [Caffe Ciampini (quandoo)](https://www.quandoo.it/en/place/caffe-ciampini-21378/menu) |
| ROM-FD-301 | 로마 | 라 사피엔자 대학 바 병맥주 33cl | 2.05~3.1 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-FD-302 | 로마 | 라 사피엔자 대학 바 레드 와인 1잔 | 2.2 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-FD-303 | 로마 | 라 사피엔자 대학 바 프로세코 1잔 | 2.5 EUR | A | 예 | 재검증 | [La Sapienza Bar Marco Polo](https://www.uniroma1.it/sites/default/files/user/531/listino_prezzi_bar_marco_polo.pdf) |
| ROM-AT-101 | 로마 | 콜로세움·포로 로마노·팔라티노 통합 입장권 | 18 EUR | A | 예 | 재검증, 검수: 요금 확인 필요 | [CoopCulture](https://colosseo.it/en/tickets/colosseum-roman-forum-palatine/) |
| ROM-AT-102 | 로마 | 바티칸 박물관·시스티나 성당 입장권 | 20~25 EUR | A | 예 | 재검증 | [Vatican Museums](https://www.museivaticani.va/content/museivaticani/en/organizza-visita/tariffe-e-biglietti.html) |
| ROM-AT-104 | 로마 | 보르게세 미술관 입장권 | 16 EUR | A | 예 | 재검증 | [Galleria Borghese](https://galleriaborghese.cultura.gov.it/en/visita/info-biglietti/) |
| ROM-AT-105 | 로마 | 산탄젤로 성 입장권 | 18 EUR | A | 예 | 재검증 | [Castel Sant'Angelo](http://castelsantangelo.beniculturali.it/getFile.php?id=538) |
| SPK-TR-001 | 삿포로 | 삿포로시 지하철 1회권(1~6구간) | 210~380 JPY | A | 예 | 재검증 | [札幌市交通局](https://www.city.sapporo.jp/st/josyaken/ryokin/ryoukin.html) |
| SPK-TR-002 | 삿포로 | 삿포로시 지하철 1회권 어린이(1~6구간) | 110~190 JPY | A | 예 | 재검증 | [札幌市交通局](https://www.city.sapporo.jp/st/josyaken/ryokin/ryoukin.html) |
| SPK-TR-003 | 삿포로 | 삿포로 시덴(노면전차) 1회 승차 | 230 JPY | A | 예 | 재검증 | [札幌市交通局](https://www.city.sapporo.jp/st/josyaken/ryokin/ryoukin.html) |
| SPK-TR-004 | 삿포로 | 삿포로 시덴(노면전차) 1회 승차 어린이 | 120 JPY | A | 예 | 재검증 | [札幌市交通局](https://www.city.sapporo.jp/st/josyaken/ryokin/ryoukin.html) |
| SPK-TR-005 | 삿포로 | 삿포로 시내 노선버스 특수구간 1구 | 240 JPY | A | 예 | 재검증 | [ジェイ・アール北海道バス](https://www.jrhokkaidobus.com/wp/wp-content/uploads/2024/06/2406281410uuu.pdf) |
| SPK-TR-006 | 삿포로 | 삿포로시 지하철 전용 1일 승차권 | 830 JPY | A | 예 | 재검증 | [札幌市交通局](https://www.city.sapporo.jp/st/josyaken/card.html) |
| SPK-FD-001 | 삿포로 | 가라쿠 수프카레 부드러운 치킨레그와 채소 | 1480 JPY | A | 예 | 재검증 | [スープカレーGARAKU](https://s-garaku.com/menu.php) |
| SPK-FD-002 | 삿포로 | 트레저 수프카레 치킨레그 | 1690 JPY | A | 예 | 재검증 | [Soup Curry TREASURE](https://s-treasure.jp/menu.php) |
| SPK-FD-003 | 삿포로 | 피칸티 치킨레그와 채소 수프카레 | 1490 JPY | A | 예 | 재검증 | [Picante](https://www.picante-curry.com/menu) |
| SPK-FD-004 | 삿포로 | 스키야 규동 보통 | 480 JPY | A | 예 | 재검증 | [すき家](https://www.sukiya.jp/menu/in/gyudon/100100/) |
| SPK-SN-001 | 삿포로 | 패밀리마트 블렌드 커피 S | 158 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| SPK-SN-002 | 삿포로 | 패밀리마트 카페라테 M | 255 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| SPK-SN-003 | 삿포로 | 패밀리마트 아이스커피 S | 158 JPY | A | 예 | 재검증 | [ファミリーマート](https://www.family.co.jp/goods/cafe.html) |
| SPK-AL-001 | 삿포로 | 트레저 생맥주 삿포로 클래식 | 660 JPY | A | 예 | 재검증 | [Soup Curry TREASURE](https://s-treasure.jp/menu.php) |
| SPK-AL-002 | 삿포로 | 트레저 오타루 맥주 필스너 | 660 JPY | A | 예 | 재검증 | [Soup Curry TREASURE](https://s-treasure.jp/menu.php) |
| SPK-AL-003 | 삿포로 | 트레저 하이볼 | 550 JPY | A | 예 | 재검증 | [Soup Curry TREASURE](https://s-treasure.jp/menu.php) |
| SPK-AT-001 | 삿포로 | 삿포로 TV타워 전망대(성인) | 1200 JPY | A | 예 | 재검증 | [さっぽろテレビ塔](https://www.tv-tower.co.jp/pricetime.html) |
| SPK-AT-002 | 삿포로 | 삿포로 TV타워 전망대(초중학생) | 600 JPY | A | 예 | 재검증 | [さっぽろテレビ塔](https://www.tv-tower.co.jp/pricetime.html) |
| SPK-AT-003 | 삿포로 | 모이와야마 로프웨이+미니 케이블카 왕복(성인) | 2100 JPY | A | 예 | 재검증 | [札幌もいわ山ロープウェイ](https://mt-moiwa.jp/guide/) |
| SPK-AT-004 | 삿포로 | 모이와야마 로프웨이+미니 케이블카 왕복(어린이) | 1050 JPY | A | 예 | 재검증 | [札幌もいわ山ロープウェイ](https://mt-moiwa.jp/guide/) |
| SPK-AT-005 | 삿포로 | 삿포로시 시계탑 입관료(성인) | 350 JPY | A | 예 | 재검증 | [札幌市時計台](https://sapporoshi-tokeidai.jp/) |
| SPK-AT-006 | 삿포로 | 삿포로시 시계탑 입관료(중학생 이하 무료) | 0 JPY | A | 예 | 재검증 | [札幌市時計台](https://sapporoshi-tokeidai.jp/) |
| SEL-FD-101 | 서울 | 한솥 제육 비빔밥 | 6500 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [HANSOT 한솥](https://en.hsd.co.kr/Menu) |
| SEL-FD-102 | 서울 | 한솥 김치볶음밥 | 4400 KRW | A | 예 | 재검증, 검수: 원문 확인 불가 | [HANSOT 한솥](https://en.hsd.co.kr/Menu) |
| SEL-FD-103 | 서울 | 골드참치 점심 코스 B | 35000 KRW | A | 예 | 재검증 | [Goldtuna 골드참치](https://www.goldtuna.co.kr/en) |
| SEL-SV-101 | 서울 | 서울마이소울 리본 모자 | 53000 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://english.seoul.go.kr/the-cap-with-2-7-million-views-on-japanese-social-media-seoul-merch-wins-over-international-visitors/) |
| SEL-SV-102 | 서울 | 서울굿즈 서울라면·서울짜장 4개 번들 | 5450 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://love.seoul.go.kr/articles/10473) |
| SEL-SV-103 | 서울 | 서울굿즈 픽토그램 에코백 | 34500 KRW | A | 예 | 재검증 | [서울특별시 (Seoul My Soul Shop)](https://love.seoul.go.kr/articles/10473) |

## 4. 교차 검수 현황

`data/reviews/*.csv` 에서 읽은 판정: 일치 591건 · 불일치 42건 · 확인불가 184건.
아직 "일치" 판정이 없는 표본은 `data/cross-check-queue.csv` 에 모여 있습니다(교차 검수 담당에게 그대로 전달).
