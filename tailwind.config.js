/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu Mono', 'monospace'],
        overlock: ['Overlock', 'cursive'],
        barlow: ['Barlow', 'sans-serif'],
        poiret: ['Poiret One', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },

      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        button: '0 0 20px #fff, -10px 0 30px #f0f, 10px 0 30px #0ff;',
      },
      screens: {
        xs: '450px',
      },

      animation: { text: 'text 3s ease infinite', bgGround: 'text 8s ease infinite' },
      keyframes: {
        text: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
}
