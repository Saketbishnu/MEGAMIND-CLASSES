/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          500: '#1186d8',
          600: '#0b68b5',
          900: '#12324f',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
    },
  },
  plugins: [],
};

