import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import compression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Portfolio Abbas",
        short_name: "Portfolio Abbas",
        description:
          "Portfolio untuk menampilkan project yang telah saya kerjakan",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/profile192x192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/profile512x512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
