import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL_ASSET),
  scrollBehavior(to, from, savedPosition) {
    // Не скроллить при изменении только query (например, открытие модалки проекта)
    if (to.path === from.path && !to.hash) {
      return undefined;
    }

    // Прокрутка к якорю
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Если есть сохранённая позиция (при переходе назад/вперёд)
    if (savedPosition) {
      return savedPosition;
    }

    // Прокрутка вверх по умолчанию
    return { top: 0 };
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
      meta: {
        title: "Политика конфиденциальности",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsView.vue"),
      meta: {
        title: "Контакты",
      },
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
            title: "Категория",
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
            title: "Новости",
          },
        },
        {
          path: ":slug",
          name: "news-single",
          component: () => import("../views/News/NewsSingle.vue"),
          meta: {
            title: "Детали новости",
          },
        },
        {
          path: "category/:slug",
          name: "news-category",
          component: () => import("../views/News/NewsViewCategory.vue"),
          meta: {
            title: "Категория",
          },
        },
      ],
    },
  ],
});

export default router;
