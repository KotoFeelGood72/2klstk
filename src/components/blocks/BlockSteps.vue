<template>
  <section class="section step js-step-slider-w">
    <div class="section_in step__in">
      <h2 class="step__title">Как мы <strong> работаем</strong></h2>
      <div class="step__list_w">
        <Swiper
          :slides-per-view="4"
          :modules="[Navigation, Pagination]"
          :space-between="40"
          :speed="700"
          class="step__list"
          :pagination="{ el: '.sys_slider__pag', clickable: true }"
          :breakpoints="{
            1200: { slidesPerView: 4, spaceBetween: 40 },
            992: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            320: { slidesPerView: 1.2, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="(item, i) in steps" :key="'works-item-slide-' + item.id">
            <li class="step__card">
              <div class="step__card_info">
                <div class="step__card_title">{{ item.title }}</div>
                <div class="step__card_descr">{{ item.txt }}</div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { ref } from "vue";
const steps = ref<any>([
  {
    title: "Дом за 3 месяца",
    txt: "Ваш дом будет готов без необходимости в доработках и покраске",
  },
  {
    title: "Поэтапная оплата",
    txt: "Платите только после проверки завершенного этапа",
  },
  {
    title: "Штатные проектировщики",
    txt: "Работаем с нуля или дорабатываем проект по вашему выбору",
  },
  {
    title: "Лучшие цены за материалы",
    txt: "Закупаем материалы напрямую у поставщиков",
  },
]);
</script>

<style scoped lang="scss"></style>
