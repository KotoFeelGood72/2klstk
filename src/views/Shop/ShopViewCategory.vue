<template>
  <div class="shop">
    <div class="section_in">
      <div class="shop_head">
        <h1>Каталог проектов строительства домов</h1>
        <p>
          Готовые разработки домов, пользующихся заслуженной популярностью — отличный
          способ быстро определиться с архитектурой строения, без лишних вложений на
          эксклюзивное проектирование.
        </p>
      </div>
      <div class="shop_grid">
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

const { fetchProjectsByCategorySlug } = useProjectsStore();

const route = useRoute();

const projects = ref<any>();

onMounted(async () => {
  projects.value = await fetchProjectsByCategorySlug(route.query.cat_id);
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
  }
}
</style>
