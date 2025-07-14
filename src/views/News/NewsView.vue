<template>
  <div class="shop">
    <div class="container">
      <div class="shop_head">
        <h1>Новости</h1>
        <p>Актуальные темы и полезные материалы для будущих домовладельцев</p>
      </div>
      <div class="grid lg:grid-cols-4 gap-4 grid-cols-2">
        <CardCat
          v-for="(item, i) in categories"
          :cat="item"
          :key="'categories-item-' + i"
        />
      </div>
      <div class="shop_seo">
        <h3>
          Новости и советы по малоэтажному строительству — всё, что важно знать перед
          началом строительства дома
        </h3>
        <p>
          В этом разделе мы делимся актуальными новостями, архитектурными трендами,
          полезными советами и юридической информацией, связанной с покупкой земли,
          проектированием и строительством частных домов.
        </p>
        <p>
          Мы рассказываем о современных технологиях строительства, лучших решениях для
          энергоэффективности, примерах реализации проектов и реальных историях клиентов.
          Также вы узнаете об акциях, специальных предложениях и нововведениях в компании.
        </p>
        <p>Читая наши новости, вы получаете:</p>
        <ul>
          <li>актуальную информацию о рынке малоэтажного строительства,</li>
          <li>инсайты по выбору проектов и материалов,</li>
          <li>юридические нюансы и рекомендации экспертов,</li>
          <li>полезный опыт других застройщиков и клиентов.</li>
        </ul>
        <p>
          Следите за обновлениями, чтобы быть в курсе трендов, избежать ошибок и принять
          взвешенные решения при строительстве собственного дома.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardCat from "@/components/cards/CardCat.vue";
import { useNewsStore, useNewsStoreRefs } from "@/stores/useNewsStore";
import { onMounted } from "vue";

const { getCategories } = useNewsStore();
const { categories } = useNewsStoreRefs();

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
    @include bp($point_2) {
      font-size: 2.2rem;
    }
  }
}

.shop_seo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 4rem 0;

  h3 {
    font-size: 3.2rem;
  }

  ul {
    padding-left: 2rem;
    list-style: disc;
    li {
      list-style: disc;
    }
  }
}
</style>
