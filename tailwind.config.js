/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/frontend/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", "serif"],
        roboto: ["Roboto Mono", "monospace", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        lumanosimo: ["Lumanosimo", "serif"],
      },
      colors: {
        shade: {
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#B6B6B6",
          400: "#858585",
          500: "#575757",
          600: "#2D2D2D",
        },
      },
    },
  },
  plugins: [],
};
