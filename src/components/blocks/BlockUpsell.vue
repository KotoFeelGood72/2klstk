<template>
  <div class="mb-32">
    <div class="section_in">
      <div>
        <div>
          <h4 class="lg:text-40 font-medium">Похожие предложения</h4>
          <div>
            <div class="prev">
              <Icons name="mynaui:arrow-left" />
            </div>
            <div class="next">
              <Icons name="mynaui:arrow-right" />
            </div>
          </div>
        </div>
        <Swiper
          :slides-per-view="1"
          :modules="[Navigation, Pagination]"
          :space-between="20"
          :speed="700"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }"
          :navigation="{
            prevEl: '.prev',
            nextEl: '.next',
          }"
        >
          <SwiperSlide v-for="(item, i) in upsell" :key="'upsell-item-' + i">
            <CardProject :project="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardProject from "../cards/CardProject.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

defineProps<{
  upsell: any;
}>();

const sliderOptions = {
  slider: {
    spaceBetween: 10,
    speed: 700,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  },
};
</script>

<style scoped lang="scss"></style>
