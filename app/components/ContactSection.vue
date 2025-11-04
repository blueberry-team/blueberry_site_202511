<template>
  <section id="contact" class="py-24 bg-gradient-to-br from-slate-50 via-white to-blueberry-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="mb-4">
          <span class="text-blueberry-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Start Your Project
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          프로젝트 상담이 필요하신가요? 언제든 문의해주세요
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <h3 class="text-2xl font-bold text-slate-900 mb-6">상담 신청하기</h3>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 mb-2">
                이름 *
              </label>
              <input
                id="name"
                v-model="formData.name"
                placeholder="홍길동"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-transparent"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 mb-2">
                이메일 *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="example@email.com"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-transparent"
              />
            </div>

            <!-- Phone Input -->
            <div>
              <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">
                연락처
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                placeholder="010-0000-0000"
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-transparent"
              />
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 mb-2">
                프로젝트 설명 *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="프로젝트에 대해 간단히 설명해주세요"
                rows="6"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blueberry-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-4 bg-blueberry-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blueberry-500/30 hover:bg-blueberry-700 hover:shadow-xl hover:shadow-blueberry-500/40 transition-all duration-300"
            >
              상담 신청하기
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blueberry-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blueberry-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-slate-900 mb-1">이메일</h4>
                <a href="mailto:contact@blueberrystore.com" class="text-blueberry-600 hover:text-blueberry-700 transition-colors">
                  contact@blueberrystore.com
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-slate-900 mb-1">전화</h4>
                <a href="tel:010-0000-0000" class="text-purple-600 hover:text-purple-700 transition-colors">
                  010-XXXX-XXXX
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-slate-900 mb-1">운영 시간</h4>
                <p class="text-slate-600">평일 09:00 - 18:00</p>
                <p class="text-slate-500 text-sm mt-1">주말 및 공휴일 휴무</p>
              </div>
            </div>
          </div>

          <!-- Quick Response Note -->
          <div class="bg-gradient-to-br from-blueberry-500 to-blueberry-600 rounded-3xl p-8 text-white">
            <div class="flex items-start space-x-4">
              <svg class="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="text-lg font-semibold mb-2">빠른 응답</h4>
                <p class="text-blueberry-100 text-sm leading-relaxed">
                  문의 주시면 영업일 기준 24시간 내 답변드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: 실제 폼 제출 로직 구현
  console.log('Form submitted:', formData)
  alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')

  // Reset form
  formData.name = ''
  formData.email = ''
  formData.phone = ''
  formData.message = ''
}
</script>
