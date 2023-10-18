import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import UploadView from "../views/UploadView.vue";

const routes = [
  {
    path: "/",
    name: "firstpage",
    component: IndexView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/upload",
    name: "upload",
    component: UploadView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
