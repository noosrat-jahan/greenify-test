/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },

  plugins: [],
};
