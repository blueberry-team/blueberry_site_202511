# Blueberry Team Website

블루베리 팀 공식 홈페이지

## 기술 스택

- Nuxt 4.2.0
- Vue 3.5.22
- Tailwind CSS
- TypeScript

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 미리보기
npm run preview
```

## 프로젝트 구조

```
blueberry_site/
├── app/
│   ├── components/        # Vue 컴포넌트
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── PortfolioSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   └── app.vue           # 메인 앱
├── public/               # 정적 파일
├── nuxt.config.ts        # Nuxt 설정
├── tailwind.config.js    # Tailwind 설정
└── package.json
```

## 주요 기능

- 반응형 디자인 (모바일/태블릿/데스크톱)
- 블루베리 커스텀 컬러 테마
- 포트폴리오 섹션
- 상담 신청 폼
- 부드러운 스크롤 애니메이션

## 라이선스

© 2025 Blueberry Team. All rights reserved.
