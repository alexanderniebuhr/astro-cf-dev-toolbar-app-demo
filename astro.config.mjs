import cloudflare from "@astrojs/cloudflare";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "advanced",
    runtime: {
      mode: "local",
      type: "pages",
    }
  }),
  integrations: [expressiveCode(), mdx()]
});
