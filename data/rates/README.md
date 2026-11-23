# 환율 (조사 고정값)

계산기는 외부 환율 API를 호출하지 않고 이 폴더의 **조사한 환율표**를 사용합니다. 현재 값은 `rates-2026-11-23.json`이며, ECB가 공표한 2026-11-20 기준 환율 29개와 통화별 공식 기관의 최신 확인값을 반영했습니다. 조사일은 2026-11-23이며, 각 통화의 실제 고시일은 JSON의 `perUSD.*.date`에 따로 기록합니다.

- ECB 기준표의 1 EUR당 원값을 ECB EUR/USD로 나누어 1 USD당 값으로 계산하고, EUR는 역수로 계산합니다.
- ECB 표에 없는 통화는 해당 중앙은행·공식 금융기관이 게시한 값으로 계산합니다. 마카오 파타카(MOP)는 ECB HKD/USD 값과 AMCM의 고정 관계(HKD 1 = MOP 1.03)를 적용했습니다. 우즈베키스탄 솜(UZS)은 우즈베키스탄 중앙은행이 직접 공표한 USD/UZS 환율을 사용합니다.
- 공식 기관이 아직 최신 일일값을 게시하지 않았거나 페이지가 제공하지 않은 통화는 확인 가능한 마지막 공식 기준일을 유지합니다. 근거 페이지와 날짜는 각 행에 있습니다.
- 2026-11-23 확인: ECB 기준일 2026-11-20의 29개 통화와 각 기관의 최신 공식값을 확인했습니다. 통화별 값·고시일·출처와 미갱신 사유는 아래 최신 갱신 기록에 적었습니다.
- 기준 환율은 여행 예산의 참고값이며 은행·환전소의 실제 매매 환율이나 수수료를 보장하지 않습니다.

## 주간 갱신

환율은 자동 적용되지 않는 고정표입니다. 매주 한 번 공식 출처의 최신값을 확인해 새 `rates-YYYY-MM-DD.json`을 만들고, `src/core/rates/static.ts`의 import를 바꿉니다. 이전 JSON은 기록으로 보존하고, 번역 안내문과 날짜 테스트도 새 기준일로 맞춘 뒤 `npm run verify`가 통과한 변경만 main에 올립니다. 주간 작업은 Codex 반복 작업으로 예약합니다.

이전 기준표: `rates-2026-11-16.json`, `rates-2026-11-06.json`, `rates-2026-11-04.json`, `rates-2026-10-28.json`, `rates-2026-10-16.json`, `rates-2026-10-06.json`.

### 2026-11-23 주간 갱신 확인
- ECB 최신 공개표는 2026-11-20 기준 29개 통화입니다. ECB가 공개한 EUR 기준 원값을 JSON에 그대로 보존했으며, 계산기는 이 값을 EUR/USD로 나누어 USD 기준으로 사용합니다. ECB는 기준환율을 영업일 약 16:00 CET에 갱신한다고 안내합니다.
- 비ECB 공식값(1 USD당): TWD 32.936 (대만 중앙은행, 11-20 은행간 마감), VND 25,659 (베트남 NCB, 11-20 평균 은행간), AED 3.6725 (UAE 중앙은행, 11-20 VAT 공시 중간환율), MNT 3,607.00 (몽골 중앙은행, 11-22), LAK 22,446 (라오스 중앙은행 기준환율, 11-20), KZT 455 (카자흐스탄 국립은행, 11-23), UZS 11,971.64 (우즈베키스탄 중앙은행, 11-20), GEL 2.5933 (조지아 국립은행, 11-19), EGP 54.4330 (이집트 중앙은행의 11-22 시장 가중평균환율).
- MOP 8.074112829845314는 ECB의 11-20 EUR/HKD 8.6150·EUR/USD 1.0990과 마카오 금융관리국(AMCM)의 HKD 1 = MOP 1.03 관계를 적용해 계산했습니다. SAR는 새 일별 게시값이 확인되지 않았습니다. SAMA 페이지의 최신 확인 가능 날짜는 2026-10-29이며 USD/SAR 3.750000을 게시해, 공식 고정 환율을 유지하고 최신 일별 자료가 없다는 사유를 JSON에도 남겼습니다.
- 공식 출처: [ECB 기준환율](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) ([11-20 PDF](https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2026/11/20261120.pdf)), [대만 중앙은행](https://www.cbc.gov.tw/en/lp-700-2-1-40.html), [베트남 NCB](https://www.ncb-bank.vn/en/exchange-rates), [UAE 중앙은행 11-20 자료](https://centralbank.ae/umbraco/Surface/Exchange/GetExchangeRateAllCurrencyDate?dateTime=2026-11-20), [몽골 중앙은행](https://www.mongolbank.mn/en/currency-rates), [라오스 중앙은행](https://bol.gov.la/en/index), [카자흐스탄 국립은행](https://nationalbank.kz/en/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut), [우즈베키스탄 중앙은행](https://cbu.uz/en/?INVERT=Y), [조지아 국립은행](https://nbg.gov.ge/en/currency-rates), [이집트 중앙은행](https://www.cbe.org.eg/en/markets/foreign-exchange), [사우디 중앙은행](https://sama.gov.sa/en-US/Currency/FinExc/Pages/Currency.aspx), [마카오 금융관리국](https://cdn.amcm.gov.mo/uploads/media/research_and_stats/annual_reports/2024/annual_report_2024_en_web.pdf).

### 2026-11-16 주간 갱신 확인
- ECB 최신 고시일 2026-11-13의 29개 통화를 원값 그대로 반영했습니다. ECB 표는 기준환율을 통상 영업일 16:00 CET 무렵 갱신한다고 안내합니다.
- 대만 중앙은행은 2026-11-13 USD/TWD 32.838, 베트남 NCB는 평균 은행간 USD/VND 25,637, 라오스 중앙은행은 USD/LAK 22,408, 몽골 중앙은행은 2026-11-15 USD/MNT 3,603.46, 카자흐스탄 국립은행은 2026-11-16 USD/KZT 444.3을 게시했습니다.
- UAE 중앙은행은 2026-11-13 USD/AED 3.6725, 조지아 국립은행은 2026-11-15 USD/GEL 2.5934 및 1,000 UZS/GEL 0.2158을 게시했습니다. 이집트 중앙은행의 2026-11-15 공식 USD 매입·매도 값 중간값은 EGP 53.79275입니다. 사우디 리얄은 SAMA의 최신 확인 가능 페이지에서 2026-10-27 기준 USD/SAR 3.750000을 확인했습니다. 마카오 파타카는 ECB의 11-13 EUR/HKD·EUR/USD와 AMCM의 HKD 1 = MOP 1.03 관계로 계산했습니다.
- 확인한 공식 출처: [ECB](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html), [대만 중앙은행](https://www.cbc.gov.tw/en/lp-700-2-1-40.html), [베트남 NCB](https://www.ncb-bank.vn/vi/ty-gia-tien-te), [몽골 중앙은행](https://www.mongolbank.mn/en/currency-rates), [라오스 중앙은행](https://www.bol.gov.la/en/referenceRate), [UAE 중앙은행](https://centralbank.ae/en/forex-eibor/exchange-rates/), [카자흐스탄 국립은행](https://nationalbank.kz/en/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut), [조지아 국립은행](https://nbg.gov.ge/en/monetary-policy/currency), [이집트 중앙은행](https://www.cbe.org.eg/en/economic-research/statistics/cbe-exchange-rates), [사우디 중앙은행](https://sama.gov.sa/en-US/Currency/FinExc/Pages/Currency.aspx), [마카오 금융관리국](https://cdn.amcm.gov.mo/uploads/files/research_and_stats/research_and_publication/quarterly_report/issue_no_14/mfs_en.pdf).

### 2026-11-09 주간 갱신 확인
- ECB 표에서 최신 고시일 2026-11-06의 29개 통화를 반영했습니다. ECB EUR/USD는 1.1165입니다.
- 대만 중앙은행은 2026-11-06 은행간 종가 USD/TWD 32.768, 베트남 NCB는 2026-11-06 평균 은행간 USD/VND 25,615, 몽골 중앙은행은 USD/MNT 3,600.44, 라오스 중앙은행은 USD/LAK 22,394를 게시했습니다.
- UAE 중앙은행은 2026-11-06 USD/AED 3.6725, 카자흐스탄 국립은행은 2026-11-09 USD/KZT 447.14를 게시했습니다. 조지아 국립은행 2026-11-08 USD/GEL·UZS/GEL, 이집트 중앙은행 2026-11-05 USD 매입·매도 값과 마카오 고정 관계로 계산한 값은 각각 JSON의 이름·날짜에 산출 방법을 기록했습니다.
- 확인한 공식 출처: [ECB](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html), [대만 중앙은행](https://www.cbc.gov.tw/en/lp-700-2.html), [베트남 NCB](https://www.ncb-bank.vn/en/exchange-rates), [몽골 중앙은행](https://www.mongolbank.mn/en/currency-rates), [라오스 중앙은행](https://www.bol.gov.la/en/referenceRate), [UAE 중앙은행](https://centralbank.ae/umbraco/Surface/Exchange/GetExchangeRateAllCurrency), [카자흐스탄 국립은행](https://nationalbank.kz/en/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut), [조지아 국립은행](https://nbg.gov.ge/en/monetary-policy/currency), [이집트 중앙은행](https://www.cbe.org.eg/en/economic-research/statistics/exchange-rates).

### 2026-11-05 주간 갱신 확인
- ECB 표에서 최신 고시일 2026-11-04의 29개 통화를 원값 그대로 반영했습니다. 여기에는 새로 확인된 ILS가 포함됩니다.
- 대만 중앙은행은 2026-11-04 은행간 종가 USD/TWD 32.821, 베트남 NCB는 2026-11-04 평균 은행간 USD/VND 25,627, 몽골 중앙은행은 USD/MNT 3,600.04를 게시했습니다. 카자흐스탄 국립은행은 2026-11-05 USD/KZT 452.91을 게시했습니다.
- UAE·조지아·라오스·이집트·마카오의 새 값을 직접 확인할 수 없었던 이유는 위에 기록했고, 그 통화의 이전 확인값은 그대로 유지했습니다.
- 출처: [ECB](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html), [대만 중앙은행](https://www.cbc.gov.tw/tw/lp-645-1-1-40.html), [베트남 NCB](https://www.ncb-bank.vn/en/exchange-rates), [몽골 중앙은행](https://www.mongolbank.mn/en/), [카자흐스탄 국립은행](https://nationalbank.kz/en/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut).

## 외부 제공 자료 검토 기록

### 2026-10-04 · `global_exchange_rates_latest.xlsx` (운영자가 받은 원화 매매기준율 34개 통화, 출처 표기 없음) — **채택하지 않음**

2026-10-04 당시 표(ECB 기준)와 1 USD 당 값으로 바꿔 비교했다. 26개 통화는 0.5% 안에서 일치했지만 아래는 차이가 커서 별도 출처로 확인했다.

| 통화 | 받은 자료 | 당시 표 | 별도 확인 | 판정 |
| --- | --- | --- | --- | --- |
| NOK | 10.358 | 9.649 | USD/NOK 9.6378 (2026-10-02, 노르웨이 중앙은행 중간값 보도) | 받은 자료 오류(+7.3%) |
| BRL | 5.412 | 5.221 | 브라질 중앙은행 PTAX 5.2232/5.2238 (2026-10-02) | 받은 자료 오류(+3.7%) |
| EUR | 0.8826 (EUR/USD 1.1330) | 0.8909 (1.1225) | EUR/USD 종가 1.1252, 유로 매매기준율 1,520.64원 (2026-10-02) | 받은 자료 오류(약 +0.9%) |
| PLN·DKK·MXN | 2.7%·1.1%·0.9% 차이 | | 받은 자료에 출처가 없어 확인 불가 | ECB 값 유지 |

받은 자료에만 있는 KWD·BHD·QAR·ILS·RUB·EGP 는 화면 통화 목록에 없어 넣지 않았다.
