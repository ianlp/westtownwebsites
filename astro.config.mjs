import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://www.westtownwebsites.com/",
  integrations: [],
  output: "static",
  adapter: vercel(),
});
