import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
const pathResolve = (path) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        // "src/assets/scss/_variables.scss",
        // "src/assets/scss/_mixins.scss",
      ],
    },
  },
  server: {
    port: 8080,
    open: true, //自动打开浏览器
    cors: true, //允许跨域
  },
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
});
