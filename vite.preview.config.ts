import { defineConfig } from "vite";

// Preview the prerendered page and assets from the Nitro build output.
export default defineConfig({
  build: { outDir: ".output/public" },
});
