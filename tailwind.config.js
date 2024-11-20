/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
        fontFamily: {
            'heading': ['Figtree', 'sans-serif']
        },
        colors: {
            custom1: '#b4b9d6',
            custom2: '#bebccf',
            custom3: '#b9a8ba',
        },
    },
  },
  plugins: [],
}

