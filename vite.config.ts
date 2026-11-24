import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: {
    build: { outDir: ".tanstack/build" },
    environments: {
      client: { build: { outDir: "dist" } },
    },
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
    pages: [{ path: "/" }],
  },
});
