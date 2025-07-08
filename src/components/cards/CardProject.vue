<template>
  <RouterLink :to="`/shop/${project.slug}`">
    <div class="popular__card">
      <div class="card js-popular-card-popup">
        <div class="card__img_w">
          <img
            v-if="project?.acf?.photos"
            class="card__img"
            :src="project?.acf.photos[0]?.url"
          />
        </div>
        <div class="card__info">
          <div class="card__title">{{ project.acf.title }}</div>
          <ul class="card__list">
            <li
              class="card__item"
              v-for="(character, i) in project.acf.character"
              :key="'character-item' + i"
            >
              <div class="card__item_icon">
                <Icons :icon="character.icon" />
              </div>
              <div class="card__item_title">{{ character.name }}:</div>
              <div class="card__item_descr">{{ character.value }}</div>
            </li>
          </ul>
          <div class="card__price">
            Стоимость <strong>{{ project.acf.price }}</strong>
          </div>
          <div class="btn-project">
            <btn style="display: inline-flex" name="Подробнее" size="medium" />
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import btn from "../ui/btn.vue";
import { useRoute } from "vue-router";
defineProps<{
  project: any;
}>();
</script>

<style scoped lang="scss">
.card__price {
  margin-bottom: 2rem;
}
</style>
