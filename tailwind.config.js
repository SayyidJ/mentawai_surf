/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/@fortawesome/**/*.js",
    "./node_modules/@fortawesome/**/*.jsx",
    "./node_modules/@fortawesome/**/*.ts",
    "./node_modules/@fortawesome/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
