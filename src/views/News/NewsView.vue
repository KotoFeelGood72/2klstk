<template>
  <div class="shop">
    <div class="section_in">
      <div class="shop_head">
        <h1>Новости</h1>
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
      <div class="shop_seo">
        <h3>
          Проекты домов по технологии МСБК — комфортное и надежное решение для вашего
          будущего
        </h3>
        <p>
          Наша компания предлагает широкий каталог проектов домов, выполненных с
          использованием современной технологии МСБК (мелкоштучная сборно-блочная
          конструкция). Это инновационный подход к малоэтажному строительству,
          обеспечивающий высокую энергоэффективность, экологичность и долговечность
          зданий.
        </p>
        <p>
          Проекты включают разнообразные архитектурные стили — от классики до хай-тека,
          что позволяет каждому клиенту найти дом по вкусу и бюджету. МСБК обеспечивает
          быструю сборку и минимальные теплопотери, что делает такие дома особенно
          актуальными в российских климатических условиях.
        </p>
        <p>Выбирая наш каталог, вы получаете:</p>
        <ul>
          <li>продуманные планировки и эстетичный внешний вид,</li>
          <li>сокращённые сроки строительства,</li>
          <li>прочную и теплую конструкцию,</li>
          <li>возможность адаптации проекта под ваши пожелания.</li>
        </ul>
        <p>
          Ознакомьтесь с представленными решениями и выберите идеальный дом, который
          станет основой для комфортной жизни вашей семьи.
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
