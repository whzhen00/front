import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{}];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      //重定向
      path: "/",
      redirect: "login",
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/login/login.vue"),
    },
    {
      name: "menu",
      path: "/menu",
      component: () => import("../views/menu/menu.vue"),
      children: [
        {
          name: "home",
          path: "/home",
          component: () => import("../views/home/home.vue"),
        },
      ],
    },
  ],
});

export default router;
