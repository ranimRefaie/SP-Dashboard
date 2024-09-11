/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(0,163,255,1)',
        customBlack: 'rgba(66, 66, 66, 1)',

      }
    },
  },
  plugins: [ require('preline/plugin')],
}