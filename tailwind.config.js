/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        blueberry: {
          50: '#f5f7ff',
          100: '#ebeeff',
          200: '#d6ddff',
          300: '#b3c1ff',
          400: '#a5b4fc',
          500: '#5b7fff',
          600: '#4a5899',
          700: '#2d3e7c',
          800: '#1e2951',
          900: '#131a33',
          950: '#0a0f1f',
        }
      }
    }
  },
  plugins: [],
}
