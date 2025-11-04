<template>
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Section title -->
        <div class="mb-4">
          <span class="text-blueberry-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          블루베리스토어 / Blueberry Team
        </h2>

        <div class="w-24 h-1 bg-gradient-to-r from-blueberry-500 to-blueberry-400 mx-auto mb-8 rounded-full"></div>

        <p class="text-xl text-slate-600 mb-8 leading-relaxed">
          심플하지만 강력한 앱 개발
        </p>

        <p class="text-lg text-slate-600 mb-12 leading-relaxed">
          사용자 경험을 최우선으로 하는 전문 개발팀입니다.<br>
          기획부터 디자인, 개발, 런칭까지 모든 과정을 함께합니다.
        </p>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div class="p-6 rounded-2xl bg-slate-50 hover:bg-blueberry-50 transition-colors duration-300 group">
            <div class="w-12 h-12 bg-blueberry-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blueberry-200 transition-colors duration-300">
              <svg class="w-6 h-6 text-blueberry-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Flutter 크로스 플랫폼</h3>
            <p class="text-slate-600 text-sm">
              하나의 코드로 iOS와 Android 동시 개발
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 hover:bg-blueberry-50 transition-colors duration-300 group">
            <div class="w-12 h-12 bg-blueberry-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blueberry-200 transition-colors duration-300">
              <svg class="w-6 h-6 text-blueberry-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">UI/UX 기획</h3>
            <p class="text-slate-600 text-sm">
              사용자 중심의 직관적인 디자인
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 hover:bg-blueberry-50 transition-colors duration-300 group">
            <div class="w-12 h-12 bg-blueberry-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blueberry-200 transition-colors duration-300">
              <svg class="w-6 h-6 text-blueberry-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">런칭까지</h3>
            <p class="text-slate-600 text-sm">
              스토어 등록부터 운영까지 전 과정 지원
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
