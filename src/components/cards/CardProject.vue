<template>
  <div class="popular__card">
    <div class="card js-popular-card-popup">
      <div class="card__img_w">
        <img class="card__img" :src="project.img" />
      </div>
      <div class="card__info">
        <div class="card__title">{{ project.title }}</div>
        <ul class="card__list">
          <li
            class="card__item"
            v-for="(character, i) in project.character"
            :key="'character-item' + i"
          >
            <div class="card__item_icon">
              <Icons :icon="getIcon(character.icon)" />
            </div>
            <div class="card__item_title">{{ character.name }}:</div>
            <div class="card__item_descr">{{ character.value }}</div>
          </li>
        </ul>
        <div class="card__price">
          Стоимость <strong>{{ project.price }}</strong>
        </div>
        <div class="btn-project">
          <btn style="display: inline-flex" name="Подробнее" size="medium" :caps="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: any;
}>();

const getIcon = (icon: string) => {
  switch (icon) {
    case "size-1":
      return "ph:resize-thin";
    case "room":
      return "fluent:conference-room-20-regular";
    case "square":
      return "tabler:meter-square";
    case "bad":
      return "material-symbols-light:bedroom-child-outline-rounded";
  }
};
</script>

<style scoped lang="scss"></style>
