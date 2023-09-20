/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "str": "#B62B24",
        "agi": "#5BEF36",
        "int": "#36ACEF",
        "deg": "#757575",
        "hgray": "#3F3F3F",
      },
      transitionDelay:{
        "30": "30ms",
        "50": "50ms",
        "5s" : "5000ms"
      },
    },
  },
  plugins: [],
}
