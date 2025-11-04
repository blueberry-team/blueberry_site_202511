<template>
  <section id="portfolio" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="mb-4">
          <span class="text-blueberry-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Projects
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          블루베리 팀이 개발한 앱들을 만나보세요
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- App Card 1 -->
        <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div class="aspect-[9/16] bg-gradient-to-br from-blueberry-100 to-blueberry-200 relative overflow-hidden">
            <!-- Placeholder for app screenshot -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center p-8">
                <svg class="w-20 h-20 text-blueberry-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-blueberry-600 font-medium">앱 스크린샷</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-2">앱 이름 #1</h3>
            <p class="text-slate-600 mb-4 text-sm">
              앱에 대한 간단한 설명과 주요 기능을 소개합니다.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blueberry-100 text-blueberry-700 rounded-full text-xs font-medium">Flutter</span>
              <span class="px-3 py-1 bg-blueberry-100 text-blueberry-700 rounded-full text-xs font-medium">iOS</span>
              <span class="px-3 py-1 bg-blueberry-100 text-blueberry-700 rounded-full text-xs font-medium">Android</span>
            </div>
            <button class="w-full py-2 text-blueberry-600 hover:bg-blueberry-50 rounded-lg transition-colors flex items-center justify-center">
              자세히 보기
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- App Card 2 -->
        <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div class="aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center p-8">
                <svg class="w-20 h-20 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-purple-600 font-medium">앱 스크린샷</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-2">앱 이름 #2</h3>
            <p class="text-slate-600 mb-4 text-sm">
              앱에 대한 간단한 설명과 주요 기능을 소개합니다.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Flutter</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">iOS</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Android</span>
            </div>
            <button class="w-full py-2 text-blueberry-600 hover:bg-blueberry-50 rounded-lg transition-colors flex items-center justify-center">
              자세히 보기
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- App Card 3 -->
        <div class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div class="aspect-[9/16] bg-gradient-to-br from-indigo-100 to-indigo-200 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center p-8">
                <svg class="w-20 h-20 text-indigo-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-indigo-600 font-medium">앱 스크린샷</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-2">앱 이름 #3</h3>
            <p class="text-slate-600 mb-4 text-sm">
              앱에 대한 간단한 설명과 주요 기능을 소개합니다.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Flutter</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">iOS</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Android</span>
            </div>
            <button class="w-full py-2 text-blueberry-600 hover:bg-blueberry-50 rounded-lg transition-colors flex items-center justify-center">
              자세히 보기
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
