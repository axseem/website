// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://axseem.me",
  markdown: {
    shikiConfig: {
      theme: "vesper",
    },
  },
  redirects: {
    "/diary": "/journal",
  },

  integrations: [mdx()],
});
