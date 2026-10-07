# Cloudflare 배포 (Workers Builds, GitHub 연결)

GitHub 저장소를 Cloudflare 에 연결하면 `main` 에 올릴 때마다 자동으로 빌드·배포된다.

| 설정 | 값 |
| --- | --- |
| 저장소 | `kssw93-lgtm/travel-budget` |
| 프로덕션 브랜치 | `main` |
| 빌드 명령 | `npm run build` |
| 배포 명령 | `npx wrangler deploy` |
| Node 버전 | `.node-version`(22) 을 따른다 |

빌드 변수(선택, 도메인 연결 뒤): `SITE_URL=https://도메인`, `ADSENSE_PUBLISHER_ID=pub-…`, `VITE_CONTACT_EMAIL=…`.
무료 주소 `travel-budget.<계정>.workers.dev` 는 확인용이며, AdSense 신청은 자체 도메인을 연결한 뒤에 한다.
