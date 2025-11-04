// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Blueberry Team - 전문 앱 개발',
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '블루베리 팀은 Flutter 기반 iOS/Android 앱 개발 전문 회사입니다. 무료 태블릿 주문 앱 Foodimo를 개발했습니다.'
        },
        { name: 'format-detection', content: 'telephone=no' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blueberry-team.com/' },
        { property: 'og:title', content: 'Blueberry Team - 전문 앱 개발' },
        {
          property: 'og:description',
          content: '블루베리 팀은 Flutter 기반 iOS/Android 앱 개발 전문 회사입니다. 무료 태블릿 주문 앱 Foodimo를 개발했습니다.'
        },
        { property: 'og:image', content: 'https://blueberry-team.com/app-icon-complete.png' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://blueberry-team.com/' },
        { property: 'twitter:title', content: 'Blueberry Team - 전문 앱 개발' },
        {
          property: 'twitter:description',
          content: '블루베리 팀은 Flutter 기반 iOS/Android 앱 개발 전문 회사입니다. 무료 태블릿 주문 앱 Foodimo를 개발했습니다.'
        },
        { property: 'twitter:image', content: 'https://blueberry-team.com/app-icon-complete.png' },

        // Keywords
        { name: 'keywords', content: 'Flutter, 앱 개발, iOS, Android, 모바일 앱, Foodimo, 블루베리 팀, app development' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})