import { defineConfig } from "astro/config";

//import preact from "@astrojs/preact";
import icon from "astro-icon";

export default defineConfig({
  //integrations: [icon(), preact()],
  integrations: [icon()],
});
