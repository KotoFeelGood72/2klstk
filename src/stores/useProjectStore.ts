import { defineStore, storeToRefs } from "pinia";
import { api, apiOr, url, custom } from "@/api/axios";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: null as any,
    categories: null as any,
    sendObject: {
      image: null as string | null,
      title: null as string | null,
      complectation: null as string | null,
    },
  }),
  actions: {
    async getProjects() {
      try {
        const response = await api.get("/projects/all-projects.json");
        this.projects = response.data;
        this.addIconNamesToCharacters(); // Вызываем метод для добавления иконок
      } catch (error) {
        console.error("Ошибка при получении проектов:", error);
      }
    },
    async fetchProjectsByCategorySlug(id: any) {
      const { data } = await apiOr.get(
        `/projects?project_cat=${id}&per_page=100`
      );
      return data;
    },

    async getCategories() {
      try {
        const { data } = await apiOr.get("/project_cat?per_page=100");
        this.categories = data;
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    },
    getProjectById(id: any) {
      if (this.projects) {
        return this.projects.find((project: any) => project.id === id);
      }
      return null;
    },
    async fetchProjectBySlug(slug: any) {
      try {
        const response = await url.get(
          `https://2klstk.ru/wp-json/wp/v2/projects?slug=${slug}`
        );
        return response.data[0];
      } catch (err) {}
    },

    async fetchRandomProjects(count: number = 4) {
      try {
        const { data } = await custom.get(`/random-projects?count=${count}`);
        return data;
      } catch (error) {
        console.error("Ошибка при получении случайных проектов:", error);
        return [];
      }
    },
    addIconNamesToCharacters() {
      if (this.projects && Array.isArray(this.projects)) {
        this.projects.forEach((project: any) => {
          if (project.characters && Array.isArray(project.characters)) {
            project.acf.characters = project.acf.characters.map(
              (character: any) => {
                character.iconName = `icon-${character.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`;
                return character;
              }
            );
          }
        });
      }
    },
    // Метод для обновления объекта sendObject
    setSendObject(image: string, title: string, complectation: string) {
      this.sendObject.image = image;
      this.sendObject.title = title;
      this.sendObject.complectation = complectation;
    },
  },
});

export const useProjectsStoreRefs = () => storeToRefs(useProjectsStore());
