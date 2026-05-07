/** @type {import('tailwindcss').Config} */
const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    Icons(() => ({
      ri: {
        includeAll: true,
      },
      simpleIcons: {
        includeAll: true,
      },
      tabler: {
        includeAll: true,
      },
    })),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["autumn", "dracula"],
    logs: false,
  },
};
