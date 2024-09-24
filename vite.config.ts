import { defineConfig } from "vite"

import path from "path"
import { svelte } from "@sveltejs/vite-plugin-svelte"

export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve("./"),
      "@public": path.resolve("./public"),
      "@src": path.resolve("./src"),
      $components: path.resolve("./src/components"),
      "@componnents": path.resolve("./src/components"),
    },
  },
  build: {
    outDir: path.join(__dirname, "build"),
  },
})
