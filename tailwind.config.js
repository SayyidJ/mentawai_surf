/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "krona": ['Krona One', 'sans-serif'],
        "lato": ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

