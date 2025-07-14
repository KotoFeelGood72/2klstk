<template>
  <div class="shop">
    <div class="container">
      <div class="shop_head">
        <h1>{{ news?.category?.name }}</h1>
        <p>{{ news?.category?.description }}</p>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <CardNews v-for="(item, i) in news?.posts" :news="item" :key="'news-item-' + i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardNews from "@/components/cards/CardNews.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/useNewsStore";
import { useBreadcrumbs } from "@/composables/useBreadcrumbs";

const { fetchPostsByCategoryId } = useNewsStore();

const route = useRoute();

const news = ref<any>();

const { setCustomBreadcrumbs } = useBreadcrumbs();

onMounted(async () => {
  news.value = await fetchPostsByCategoryId(route.query.cat_id);
  setCustomBreadcrumbs([
    { name: "Новости", path: "/news" },
    { name: news.value.category.name, path: "" },
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
