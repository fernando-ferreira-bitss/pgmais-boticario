import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  // Adicione mais rotas aqui conforme exportar novas telas do Figma
  // Exemplo:
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: () => import("@/views/Dashboard/Dashboard.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
