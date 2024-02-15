/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['"Protest Strike"', 'sans-serif']
      },
      colors: {
        orange: '#E96025',
        green: '#73953D',
        brown: '#462917',
        yellow: '#F5CF1A',
      },
    },
  },
  plugins: [],
}

