/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-color': '#243c5a'
      }
    },
  },
  plugins: [require("daisyui")],
}
