/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16cols': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

