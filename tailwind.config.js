/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],

  theme: {
     screens: {
      md: "744px",     // tablet (Figma)
      lg: "1280px",    // desktop (Figma)
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },

  plugins: [],
};
