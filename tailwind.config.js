/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matte: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#111113',
          800: '#17171a',
          700: '#26262b',
          600: '#38383f',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'matte-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.8)',
        'matte-md': '0 4px 12px 0 rgba(0, 0, 0, 0.9)',
        'matte-elevated': '0 12px 30px -4px rgba(0, 0, 0, 0.95)',
      }
    },
  },
  plugins: [],
}
