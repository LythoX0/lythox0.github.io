import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://lythox0.github.io",
  base: "/",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
