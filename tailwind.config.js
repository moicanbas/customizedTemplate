/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': {
          DEFAULT: '#283845',
          dark: '#3B82F6'
        },
        'breadcrumb-color': '#89A7A7',
        'secondary-gray': '#F7FFF6',
        'custom-gray': '#EDF1E9'
      },
      fontFamily: {
        monserrat: ['Monserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
