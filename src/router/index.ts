import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL_ASSET),
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (to.path === from.path && to.fullPath !== from.fullPath) {
      return null;
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PolicyView.vue"),
    },
    {
      path: "/shop",

      children: [
        {
          path: "",
          name: "shop-list",
          component: () => import("../views/Shop/ShopView.vue"),
          meta: {
            title: "Каталог проектов",
          },
        },
        {
          path: ":slug",
          name: "shop-single",
          component: () => import("../views/Shop/ShopSingle.vue"),
          meta: {
            title: "Детали проекта 1",
          },
        },
        {
          path: "category/:slug",
          name: "shop-category",
          component: () => import("../views/Shop/ShopViewCategory.vue"),
          meta: {
            title: "Детали проекта 1",
          },
        },
      ],
    },
    {
      path: "/news",

      children: [
        {
          path: "",
          name: "news-list",
          component: () => import("../views/News/NewsView.vue"),
          meta: {
            title: "Каталог проектов",
          },
        },
        {
          path: ":slug",
          name: "news-single",
          component: () => import("../views/News/NewsSingle.vue"),
          meta: {
            title: "Детали проекта 1",
          },
        },
        {
          path: "category/:slug",
          name: "news-category",
          component: () => import("../views/News/NewsViewCategory.vue"),
          meta: {
            title: "Детали проекта 1",
          },
        },
      ],
    },
  ],
});

export default router;
