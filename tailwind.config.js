/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        saffron: {
          500: '#FF9933',
          600: '#E68A2E',
        },
        tirangaGreen: {
          500: '#138808',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
