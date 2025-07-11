import { defineStore, storeToRefs } from "pinia";
import { url } from "@/api/axios"; // достаточно одной axios-инстанции

/** Замените BASE на ваш домен */
const BASE = "https://2klstk.ru/wp-json/wp/v2";

export const useNewsStore = defineStore("news", {
  state: () => ({
    /** Все полученные записи */
    posts: null as any,
    /** Категории WordPress */
    categories: null as any,
    /** Быстрый объект-передатчик, если нужно что-то «вытащить» во внешние компоненты */
    sendObject: {
      image: null as string | null, // featured media URL
      title: null as string | null,
      excerpt: null as string | null, // короткое описание / excerpt
    },
  }),

  actions: {
    /** Получаем N последних записей (по умолчанию — 100) */
    async getPosts(perPage: number = 100) {
      try {
        const { data } = await url.get(
          `${BASE}/posts?per_page=${perPage}&_embed`
        );
        this.posts = data;
      } catch (error) {
        console.error("Ошибка при получении постов:", error);
      }
    },

    /** Все WP-категории */
    async getCategories() {
      try {
        const { data } = await url.get(`${BASE}/categories?per_page=100`);
        this.categories = data;
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    },

    /** Возврат уже загруженного поста по ID (без запроса к серверу) */
    getPostById(id: number) {
      return this.posts?.find((post: any) => post.id === id) ?? null;
    },

    /** Загружаем одну запись по slug */
    async fetchPostBySlug(slug: string) {
      try {
        const { data } = await url.get(`${BASE}/posts?slug=${slug}&_embed`);
        return data[0] ?? null;
      } catch (error) {
        console.error("Ошибка при получении поста по slug:", error);
        return null;
      }
    },
    async fetchPostsByCategoryId(id: any, perPage: number = 100) {
      try {
        // 1) Получаем категорию по ID
        const { data: category } = await url.get(`/categories/${id}`);
        if (!category || !category.id) return [];

        // 2) Получаем посты по категории
        const { data: posts } = await url.get(
          `/posts?categories=${category.id}&per_page=${perPage}&_embed`
        );

        return {
          category,
          posts,
        };
      } catch (error) {
        console.error("Ошибка при получении категории и постов:", error);
        return {
          category: null,
          posts: [],
        };
      }
    },
    /** Случайные записи (без отдельного плагина) */
    async fetchRandomPosts(count: number = 4) {
      try {
        /* Шаг 1: быстро берём только id всех постов (без веса картинок и content) */
        const { data: ids } = await url.get(
          `${BASE}/posts?per_page=100&_fields=id`
        );

        if (!ids.length) return [];

        /* Шаг 2: перемешиваем, отбираем count штук, подставляем в include[]= */
        const randomIds = ids
          .map((p: any) => p.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, count)
          .map((id: any) => `include[]=${id}`)
          .join("&");

        /* Шаг 3: грузим уже полноценные записи */
        const { data } = await url.get(`${BASE}/posts?${randomIds}&_embed`);
        return data;
      } catch (error) {
        console.error("Ошибка при получении случайных постов:", error);
        return [];
      }
    },

    /** Обновляем вспомогательный объект отправки */
    setSendObject(image: string, title: string, excerpt: string) {
      this.sendObject.image = image;
      this.sendObject.title = title;
      this.sendObject.excerpt = excerpt;
    },
  },
});

/** Удобные refs для компонентов */
export const useNewsStoreRefs = () => storeToRefs(useNewsStore());
