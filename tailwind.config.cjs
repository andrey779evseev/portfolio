/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        min: "320px",
        md: "880px",
        ss: "780px",
        sm: "680px",
        s: "500px",
      },
    },
    colors: {
      background: "#282C33",
      gray: "#ABB2BF",
      white: "#FFFFFF",
      primary: "#C778DD",
    },
  },
  plugins: [],
};
