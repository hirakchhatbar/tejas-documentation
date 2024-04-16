import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import applyChunkRule from "./chunk.rules.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          return applyChunkRule(id);
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
