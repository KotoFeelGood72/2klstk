import { defineStore, storeToRefs } from "pinia";
import { api } from "@/api/axios";

export const useHomeStore = defineStore("home", {
  state: () => ({
    home: null as any,
  }),
  actions: {
    async getHome() {
      try {
        const response = await api.get("/page/post-9.json");
        this.home = response.data;
      } catch (error) {}
    },
  },
});

export const useHomeStoreRefs = () => storeToRefs(useHomeStore());
