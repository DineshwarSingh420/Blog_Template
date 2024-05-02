/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Lobster"', 'cursive'], // Replace 'Lobster' with your chosen cursive font name
      },
    },
  },
  plugins: [require('daisyui'),],
}

