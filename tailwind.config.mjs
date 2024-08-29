/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const tailwind_theme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Readex Pro", ...tailwind_theme.fontFamily.sans],
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["cupcake", "dim", "cmyk"],
  },
};
