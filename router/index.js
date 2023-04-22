import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/VillaList.vue"),
  },
  {
    path: "/iletisim",
    name: "iletisim",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/kiralik-villalar",
    name: "kiralık villalar",
    component: () => import("../views/VillaList.vue"),
  },
  {
    path: "/villa-detay",
    name: "villa detay",
    component: () => import("../views/DetayPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
