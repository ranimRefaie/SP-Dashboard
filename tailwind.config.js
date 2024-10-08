

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(0,163,255,1)',
        customBlack: 'rgba(66, 66, 66, 1)',
        customgray:'#a9a9a9'
      }
    },
  },
  plugins: [
  ],
}