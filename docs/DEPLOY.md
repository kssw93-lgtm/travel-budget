# Cloudflare 배포 (Workers Builds, GitHub 연결)

GitHub 저장소를 Cloudflare 에 연결하면 `main` 에 올릴 때마다 자동으로 빌드·배포된다.

| 설정 | 값 |
| --- | --- |
| 저장소 | `kssw93-lgtm/travel-budget` |
| 프로덕션 브랜치 | `main` |
| 빌드 명령 | `npm run build` |
| 배포 명령 | `npx wrangler deploy` |
| Node 버전 | `.node-version`(22) 을 따른다 |

**자체 도메인: `https://howmuchthere.com`** (2026-10-16, Cloudflare 등록). `wrangler.jsonc` 의 `routes`(custom_domain)로 배포 때 자동 연결되고, `SITE_URL` 기본값도 이 주소다(canonical·사이트맵·OG). Google Search Console·네이버 서치어드바이저 확인 메타태그는 `index.html` 에 있다(모든 정적 페이지에 복사됨).
`www.howmuchthere.com` 은 Cloudflare 대시보드 → 도메인 → 규칙 → 리디렉션 규칙으로 apex 로 301 보내면 된다.

빌드 변수(선택): `SITE_URL`(기본 howmuchthere.com), `ADSENSE_PUBLISHER_ID=pub-…`, `VITE_CONTACT_EMAIL=…`.
무료 주소 `travel-budget.<계정>.workers.dev` 는 확인용이며, AdSense 신청은 자체 도메인을 연결한 뒤에 한다.
