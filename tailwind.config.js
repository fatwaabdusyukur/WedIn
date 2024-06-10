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
    },
  },
  plugins: [],
};
