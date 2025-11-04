<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="mb-4">
          <span class="text-blueberry-600 font-semibold text-sm uppercase tracking-wider">Services</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          What We Do
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          전문적인 앱 개발 서비스를 제공합니다
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Service 1: App Development -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-blueberry-500 to-blueberry-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <div class="relative bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-blueberry-200 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blueberry-500 to-blueberry-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blueberry-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">앱 개발</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
              iOS와 Android를 동시에 지원하는 크로스플랫폼 앱 개발
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blueberry-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">Flutter 크로스플랫폼</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blueberry-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">네이티브 성능 최적화</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blueberry-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">백엔드 연동 및 API 개발</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 2: UI/UX Design -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <div class="relative bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">UI/UX 디자인</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
              사용자 중심의 직관적이고 아름다운 인터페이스 설계
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">사용자 경험 분석</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">프로토타입 제작</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">디자인 시스템 구축</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 3: Launch Support -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <div class="relative bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-indigo-200 transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">런칭 지원</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
              앱 스토어 등록부터 운영까지 전 과정 지원
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">앱스토어 등록 대행</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">심사 통과 가이드</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-600 text-sm">유지보수 및 업데이트</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
