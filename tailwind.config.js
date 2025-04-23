/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#183956',
      },
    },
  },
  plugins: [],
} 