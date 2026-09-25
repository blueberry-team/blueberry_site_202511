# 팀 도메인의 포트폴리오 경로

- 홈페이지: `https://blueberry-team.com/`
- 사업 소개서: `https://blueberry-team.com/portfolio`
- LIMBO 소개서: `https://blueberry-team.com/portfolio/limbo`

`vercel.json`은 `/portfolio`와 하위 요청을 portfolio 프로젝트의 같은 경로로 전달한다. 포트폴리오는 Nuxt `app.baseURL=/portfolio/`로 빌드하며, 이미지·스크립트·다운로드도 해당 경로에 포함한다. 홈페이지의 루트 정적 파일과 충돌하지 않는다.

배포 순서: `jwson-automation/portfolio`의 `/portfolio` 지원 배포 → 이 저장소의 `blueberry-site` 배포. 각 저장소는 feature 브랜치/PR을 거쳐 반영한다. 별도 시크릿이나 마이그레이션은 없다.

## DNS 복구 기록 (2026-09-25)

Cloudflare zone의 루트/www 레코드가 없음을 확인했다. Vercel `blueberry-site` 프로젝트의 domain config API가 반환한 추천 대상에 다음 레코드만 추가했다. 기존 11개 레코드는 유지했다.

| 이름 | 유형 | 대상 | 프록시 | TTL |
|---|---|---|---|---|
| @ | CNAME | ec7d9b6de4ab4664.vercel-dns-017.com | DNS only | Auto |
| www | CNAME | ec7d9b6de4ab4664.vercel-dns-017.com | DNS only | Auto |

Vercel domain config에서 `misconfigured=false`를 확인했다. 루트 CNAME은 Cloudflare에서 평탄화한다. 기존 도메인 소유 프로젝트는 `blueberry-site`로 유지한다.

## 빌드 복구

기존 lockfile의 미사용 `@nuxt/content`가 만료된 `pkg.pr.new/nuxt-component-meta@e3eb2c4`에 의존해 `npm ci`가 404로 실패했다. 앱 코드와 Nuxt modules에서 사용하지 않는 것을 확인 후 해당 직접 의존성 및 전이 패키지를 제거했다. 실제 홈페이지 컴포넌트와 화면 구성은 변경하지 않았다.

참고: [Vercel rewrites](https://vercel.com/docs/routing/rewrites), [Cloudflare DNS 관리](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/).
