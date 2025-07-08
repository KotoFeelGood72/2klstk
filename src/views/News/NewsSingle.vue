<template>
  <div>
    <div class="singles" v-i="project && project?.acf">
      <div class="section_in">
        <div class="singles__header">
          <h1 class="lg:text-40 font-bold mb-10">{{ project?.acf.title }}</h1>
          <ProjectSingleSlider
            :slides="project?.acf.photos"
            id="projects-slider"
            class="mb-10"
          />
          <div class="grid lg:grid-cols-4 gap-5 mb-20">
            <btn name="Заказать проект" size="medium" />
            <btn name="Ипотека" size="medium" />
            <btn name="Задать вопрос" size="medium" />
            <btn name="Поделиться" size="medium" />
          </div>
          <div class="grid lg:grid-cols-2 mb-20">
            <div class="flex flex-col gap-6">
              <h3 class="lg:text-26 font-medium">Характеристики проекта</h3>
              <div class="flex items-center justify-start gap-4 flex-wrap">
                <div
                  class="flex items-center justify-start gap-4"
                  v-for="(character, i) in project?.acf.character"
                >
                  <div class="singles_info__character__icon">
                    <Icons :icon="character.icon" />
                  </div>
                  <p>{{ character.name }} {{ character.value }}</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <h3 class="lg:text-26 font-medium">Особенности</h3>
              <ul class="flex items-center justify-start gap-4 flex-wrap">
                <li v-for="(item, i) in project?.acf.features" :key="'features-' + i">
                  {{ item.el }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-10 mb-10">
          <div class="bg-slate-200 flex items-center gap-4 px-10 py-4 border">
            <div class="flex items-center justify-center">
              <Icons
                icon="material-symbols-light:info-outline"
                class="text-red-700"
                :size="30"
              />
            </div>
            <p class="text-18">
              Возможно внесение любых изменений в проект и базовую комплектацию по Вашему
              желанию
            </p>
          </div>
        </div>
        <div class="block__price">
          <h3 class="lg:text-36 font-medium mb-10">Цены</h3>
          <ul class="flex flex-col gap-10">
            <li v-for="item in project?.acf.complects" class="flex flex-col gap-4">
              <div class="w-2/3 lg:text-20">{{ item.item }}</div>
              <div class="flex-grow">{{ item.description }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BlockSteps />
    <BlockComplect :complects="project?.acf.komlpektaczii" class="mb-20" />
    <BlockUpsell :upsell="upsell" />
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from "@/stores/useProjectStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BlockSteps from "@/components/blocks/BlockSteps.vue";
import BlockComplect from "@/components/blocks/BlockComplect.vue";
import BlockUpsell from "@/components/blocks/BlockUpsell.vue";
import btn from "@/components/ui/btn.vue";
import ProjectSingleSlider from "@/components/blocks/ProjectSingleSlider.vue";

const mainSwiper = ref<any>(null);
const thumbsSwiper = ref<any>(null);

const { fetchProjectBySlug, fetchRandomProjects } = useProjectsStore();
const route = useRoute();
const project = ref<any>();
const upsell = ref<any>();

onMounted(async () => {
  project.value = await fetchProjectBySlug(route.params.slug);
  upsell.value = await fetchRandomProjects(4);

  console.log(project.value);
});
</script>

<style scoped lang="scss">
.singles_button__group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 1rem;
}
</style>
