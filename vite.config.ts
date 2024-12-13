import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  build: {
    minify: "terser",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
