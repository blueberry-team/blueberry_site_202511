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

      <!-- Portfolio Grid - Single App Centered -->
      <div class="flex justify-center">
        <!-- Foodimo App -->
        <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-md w-full">
          <div class="aspect-square bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden flex items-center justify-center p-12">
            <img src="/app-icon-complete.png" alt="Foodimo" class="w-full h-full object-contain" />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-2xl font-bold text-slate-900">Foodimo</h3>
              <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-bold">NEW</span>
            </div>
            <p class="text-slate-600 mb-6 text-base leading-relaxed">
              무료 태블릿 주문 앱<br/>
              수수료 0원, 월액료 0원으로 음식점 운영을 더 쉽게
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Flutter</span>
              <span class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">iOS</span>
              <span class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Android</span>
            </div>
            <div class="flex gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.blueberry.foodimo" target="_blank" rel="noopener noreferrer" class="flex-1">
                <img src="/play_store_button.png" alt="Google Play" class="w-full h-12 object-contain hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://apps.apple.com/app/foodimo/id6748911908" target="_blank" rel="noopener noreferrer" class="flex-1">
                <img src="/app_store_button.png" alt="App Store" class="w-full h-12 object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
