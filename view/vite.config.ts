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
  plugins: [vue()],
  server: {
    open: false, //自动打开
    base: "./ ", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      "^/api": {
        target: "http://127.0.0.1:"+config.port.eco_express, // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
