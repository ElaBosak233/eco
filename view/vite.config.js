import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import config from "../eco.config.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  plugins: [vue({
    script: {
      refSugar: true
    }
  })],
  server: {
    open: false,
    base: "./",
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:"+config.port.eco_express,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
