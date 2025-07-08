<template>
  <div class="shop">
    <div class="section_in">
      <div class="shop_head">
        <h1>{{ news?.category?.name }}</h1>
        <p>{{ news?.category?.description }}</p>
      </div>
      <div class="shop_grid">
        <CardNews v-for="(item, i) in news" :news="item" :key="'news-item-' + i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from "@/stores/useProjectStore";
import CardNews from "@/components/cards/CardNews.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/useNewsStore";

const { fetchPostsByCategoryId } = useNewsStore();

const route = useRoute();

const news = ref<any>();

onMounted(async () => {
  news.value = await fetchPostsByCategoryId(route.query.cat_id);
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
