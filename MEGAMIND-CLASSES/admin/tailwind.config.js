/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#c5e6ff',
          300: '#9ed3ff',
          400: '#5fafff',
          500: '#1186d8',
          600: '#0b68b5',
          700: '#0d5592',
          800: '#0f4778',
          900: '#12324f',
        },
        success: {
          50: '#ecfdf3',
          500: '#16a34a',
          600: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        danger: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        soft: '0 10px 45px -20px rgba(2, 6, 23, 0.35)',
        card: '0 20px 60px -24px rgba(15, 23, 42, 0.28)',
        glow: '0 0 0 1px rgba(17, 134, 216, 0.18), 0 10px 50px -20px rgba(17, 134, 216, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

