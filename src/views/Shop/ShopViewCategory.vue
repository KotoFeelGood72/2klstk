<template>
  <div class="shop">
    <div class="container">
      <div class="shop_head">
        <h1>{{ currentCategory?.name }}</h1>
        <p>
          {{ currentCategory?.description }}
        </p>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <CardProject
          v-for="(item, i) in projects"
          :project="item"
          :key="'projects-item-' + i"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore, useProjectsStoreRefs } from "@/stores/useProjectStore";
import CardProject from "@/components/cards/CardProject.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useBreadcrumbs } from "@/composables/useBreadcrumbs";

const { fetchProjectsByCategorySlug } = useProjectsStore();
const { currentCategory } = useProjectsStoreRefs();
const { setCustomBreadcrumbs } = useBreadcrumbs();
const route = useRoute();

const projects = ref<any>();

onMounted(async () => {
  projects.value = await fetchProjectsByCategorySlug(route.query.cat_id);

  // console.log(projects.value);

  setCustomBreadcrumbs([
    { name: "Проекты", path: "/shop" },
    { name: currentCategory?.value?.name, path: "" },
  ]);
});
</script>

<style scoped lang="scss">
.shop_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 2rem;
}

.shop {
  padding: 2rem 0 6rem 0;
}

.shop_head {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100rem;
  margin-bottom: 6rem;
  h1 {
    font-size: 4rem;
    @include bp($point_2) {
      font-size: 2.2rem;
    }
  }
}
</style>
