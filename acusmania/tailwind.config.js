/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#B3E5EA',
        'text-main': '#24748D',
        'text-dark': '#184C5D',
        hover: '#29AFB1',
        'card-bg': '#E6EEEF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
