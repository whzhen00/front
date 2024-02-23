import { createApp } from "vue";
import App from "./App.vue";
//引入路由
import router from "./router";
//导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//导入图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//配置国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router).mount("#app");
