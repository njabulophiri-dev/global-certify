/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          100: '#d7e4e8',
          700: '#38677a',
          800: '#27566a',
          900: '#173b50',
          950: '#102a43',
        },
        cream: {
          50: '#fff9f1',
          100: '#fff0d9',
        },
        coral: {
          50: '#fff0eb',
          100: '#ffe0d6',
          200: '#ffc2af',
          300: '#ff9d80',
          400: '#fb7a5d',
          500: '#f15a3a',
          600: '#d94529',
          700: '#b93420',
        },
        lime: {
          50: '#f4fbe6',
          100: '#ebf8ce',
          200: '#d9f49d',
          300: '#caf074',
          400: '#a9d84a',
        },
        navy: {
          50: '#f0f7f6',
          100: '#dcebe8',
          200: '#c1d8d5',
          300: '#a3c2bf',
          400: '#83a9a7',
          500: '#638d8d',
          600: '#486f73',
          700: '#365961',
          800: '#244652',
          900: '#173b50',
          950: '#102a43',
        },
        gold: {
          50: '#fff0eb',
          100: '#ffe0d6',
          200: '#ffc2af',
          300: '#ff9d80',
          400: '#fb7a5d',
          500: '#f15a3a',
          600: '#d94529',
          700: '#b93420',
          800: '#922b1d',
          900: '#75251c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
