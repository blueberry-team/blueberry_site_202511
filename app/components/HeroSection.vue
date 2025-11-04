<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blueberry-50 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-blueberry-200/30 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blueberry-300/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
      <!-- Logo/Brand -->
      <div class="mb-8 inline-flex items-center justify-center">
        <div class="w-16 h-16 bg-gradient-to-br from-blueberry-600 to-blueberry-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blueberry-500/30">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
        Blueberry Team
      </h1>

      <p class="text-xl md:text-2xl text-slate-600 mb-4 font-light">
        앱으로 비즈니스를 완성합니다
      </p>

      <p class="text-lg md:text-xl text-blueberry-600 mb-12 font-medium">
        Professional App Development Studio
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="scrollToContact"
          class="px-8 py-4 text-lg font-semibold bg-blueberry-600 text-white rounded-lg shadow-lg shadow-blueberry-500/30 hover:bg-blueberry-700 hover:shadow-xl hover:shadow-blueberry-500/40 transition-all duration-300"
        >
          상담 신청하기
        </button>

        <button
          @click="scrollToPortfolio"
          class="px-8 py-4 text-lg font-semibold border-2 border-blueberry-600 text-blueberry-600 rounded-lg hover:bg-blueberry-50 transition-all duration-300"
        >
          포트폴리오 보기
        </button>
      </div>
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-blueberry-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToPortfolio = () => {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
