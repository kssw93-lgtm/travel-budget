# AdSense 승인 준비 체크리스트

사이트에 들어간 것(코드로 끝난 일)과 운영자가 직접 해야 하는 일을 나눠 적습니다.
실제 광고 코드·게시자 ID 는 저장소에 넣지 않았습니다.

## 사이트에 이미 반영된 것

- [x] **사이트 소개** `/about`, **개인정보처리방침** `/privacy`(한/영). 헤더·푸터에서 모든 페이지로 연결
  - 개인정보처리방침에 Google 광고 쿠키, 맞춤 광고 해제(adssettings.google.com), aboutads.info,
    EEA·영국·스위스 동의 안내, 시행일(2026-10-02) 포함
- [x] 정적 HTML(`about.html`, `privacy.html`)도 자체 제목·설명·JSON-LD 를 가짐(JS 실행 전 크롤러용)
- [x] `robots.txt` 항상 생성, `SITE_URL` 이 있으면 `sitemap.xml`·canonical·hreflang 생성
- [x] `ADSENSE_PUBLISHER_ID=pub-16자리` 를 주고 빌드하면 `ads.txt` 생성(형식이 틀리면 빌드 실패)
- [x] `public/_headers`: 해시가 붙은 `/assets/*` 1년 캐시, nosniff·Referrer-Policy·Permissions-Policy·X-Frame-Options
- [x] 광고 자리는 결과·출처를 가리지 않고, 비어 있어도 레이아웃 이동(CLS)이 없게 높이를 고정
- [x] 접근성(axe WCAG 2.1 AA)·모바일 320px 가로 스크롤 없음 테스트
- [x] 도시별 가이드 `/guide/<도시>` 와 목록 `/guides`: 실제 가격 자료로 만든 도시별 고유 콘텐츠, 정적 HTML·sitemap 포함
- [x] 방법론 페이지는 운영자 판단으로 제거(가격 출처는 결과 화면의 "가격 근거·출처·경고 보기"에 표시)

## 운영자가 해야 할 일

1. **도메인 연결**: 자체 도메인(서브도메인 아닌 루트 권장)을 Cloudflare 에 연결
2. **빌드 환경변수** (Cloudflare 빌드 설정 또는 CI)
   - `SITE_URL=https://도메인` → sitemap·canonical
   - `VITE_CONTACT_EMAIL=연락처@도메인` → 소개·개인정보처리방침의 문의처(없으면 "준비 중" 문구가 보임. 승인 전 꼭 설정)
   - `ADSENSE_PUBLISHER_ID=pub-…` → ads.txt (AdSense 계정 생성 후)
3. **Google Search Console** 에 사이트 등록, `sitemap.xml` 제출
4. **AdSense 신청** 후 받은 사이트 확인 코드를 `index.html`·`about.html`·`privacy.html` 의 `<head>` 에 넣기
   (계정 ID 가 생긴 다음 별도 작업으로 요청해 주세요)
5. **동의 관리(CMP)**: EEA·영국·스위스 방문자에게 광고를 보이려면 Google 인증 CMP 필요.
   AdSense 의 "개인정보 보호 및 메시지" 에서 Google 제공 CMP 를 켜는 것이 가장 간단합니다
6. 광고 코드 연결은 `src/ui/AdSlot.tsx` 한 곳에서. 채워지면 레일이 광고 높이만큼 늘어나는 것까지 테스트되어 있음

## 승인 가능성을 높이려면

- 도시 가이드는 데이터가 늘수록 내용이 풍부해집니다(관광지·대표 음식·도시 메모). 도시 수와 가이드 내용이 많을수록 유리합니다.
- 신청 전 사이트를 공개 상태로 두고 몇 주간 운영 기록(Search Console 색인)을 쌓는 것이 좋습니다.
