import { defineConfig } from "astro/config";

//import preact from "@astrojs/preact";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.westtownwebsites.com/",
  integrations: [icon()],
  output: "static",
  adapter: vercel(),
});
