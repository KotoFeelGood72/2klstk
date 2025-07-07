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
        <CardCat
          v-for="(item, i) in categories"
          :cat="item"
          :key="'categories-item-' + i"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardCat from "@/components/cards/CardCat.vue";
import { useProjectsStore, useProjectsStoreRefs } from "@/stores/useProjectStore";
import { onMounted } from "vue";

const { getCategories } = useProjectsStore();
const { categories } = useProjectsStoreRefs();

onMounted(async () => {
  await getCategories();
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
