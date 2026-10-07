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
          50: '#fff9f2',
          100: '#ffedd6',
          500: '#FF9933', // Primary Saffron
          600: '#E68A2E',
          700: '#cc7a29',
        },
        indiaGreen: {
          50: '#f2fbf4',
          100: '#e0f5e5',
          500: '#138808', // Primary Green
          600: '#107a07',
          700: '#0d6606',
        },
        deepNavy: {
          50: '#f4f6f8',
          100: '#e3e8ee',
          500: '#1e3a8a',
          800: '#0f172a', // Slate 900 equivalent
          900: '#0b1120', // Very Deep Institutional Navy
          950: '#060a13',
        }
      },
      boxShadow: {
        'institutional': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'institutional-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
