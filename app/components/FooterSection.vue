<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-blueberry-600 to-blueberry-500 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Blueberry Team</h3>
          </div>
          <p class="text-slate-400 mb-6 leading-relaxed max-w-md">
            전문적인 앱 개발로 여러분의 비즈니스를 완성합니다.<br>
            블루베리 팀과 함께 성공적인 앱을 만들어보세요.
          </p>
          <div class="flex space-x-4">
            <!-- GitHub Link -->
            <a href="https://github.com/blueberry-team" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blueberry-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="hover:text-blueberry-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#portfolio" class="hover:text-blueberry-400 transition-colors">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="hover:text-blueberry-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sonjungwoo9@gmail.com" class="hover:text-blueberry-400 transition-colors">
                sonjungwoo9@gmail.com
              </a>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+818096986357" class="hover:text-blueberry-400 transition-colors">+81 80-9698-6357</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-slate-800 pt-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
          <p class="text-slate-500 text-sm">
            &copy; {{ currentYear }} Blueberry Team. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-slate-500 hover:text-blueberry-400 transition-colors">개인정보처리방침</a>
            <a href="#" class="text-slate-500 hover:text-blueberry-400 transition-colors">이용약관</a>
          </div>
        </div>

        <!-- Business Info -->
        <div class="border-t border-slate-800 pt-6">
          <div class="text-slate-600 text-xs leading-relaxed space-y-1">
            <p class="font-semibold text-slate-500">블루베리스토어 (BLUEBERRY STORE)</p>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              <span>대표: 손정우</span>
              <span class="hidden md:inline">|</span>
              <span>사업자등록번호: 705-28-01729</span>
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              <span>주소: 대구광역시 서구 서대구로 25, 3동 403호(내당동, 삼익맨션)</span>
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              <span>이메일: sonjungwoo9@gmail.com</span>
              <span class="hidden md:inline">|</span>
              <span>전화: +81 80-9698-6357</span>
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              <span>업태: 도매 및 소매업</span>
              <span class="hidden md:inline">|</span>
              <span>종목: 전자상거래 소매업, 해외직구대행업</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
