<template>
  <section class="sys_slider js-sys-slider-w">
    <div class="container sys_slider__in">
      <h2 class="sys_slider__title" v-html="title ? title : ''"></h2>
      <div class="sys_slider__pag"></div>
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :modules="[Navigation, Pagination]"
        :speed="700"
        class="sys_slider__slider js-sys-slider"
        :navigation="{
          prevEl: '.js-sys-navigation-prev',
          nextEl: '.js-sys-navigation-next',
        }"
        :pagination="{ el: '.sys_slider__pag', clickable: true }"
      >
        <SwiperSlide v-for="(item, i) in systems" :key="'works-item-slide-' + item.id">
          <div class="sys_slider__item">
            <div class="sys_slider__row">
              <div class="sys_slider__col sys_slider__col--img">
                <h3 v-html="item.dedline" class="sys_slider__item_title"></h3>

                <div class="sys_slider__img_box">
                  <div class="sys_slider__img_w">
                    <img
                      class="sys_slider__img lg:aspect-auto aspect-square"
                      :src="item.img"
                    />
                  </div>
                </div>
              </div>
              <div class="sys_slider__col sys_slider__col--info">
                <div class="sys_slider__info_img_box">
                  <div
                    class="sys_slider__info_img_w"
                    v-for="(subitem, i) in item.gallery"
                    :key="'subitem-gallery-item-' + i"
                  >
                    <img
                      class="sys_slider__info_img lg:aspect-auto aspect-video"
                      :src="subitem.img"
                    />
                  </div>
                </div>
                <div class="sys_slider__info_about">
                  <div class="sys_slider__info_about_title">
                    {{ item.name }}
                  </div>
                  <div class="sys_slider__info_about_subtitle">
                    {{ item.subtitle }}
                  </div>
                  <div class="sys_slider__info_about_descr">
                    {{ item.txt }}
                  </div>
                  <div class="sys_slider__info_about_subtitle">
                    Стоимость строительства
                    <strong> {{ item.price }} ₽ </strong>
                  </div>
                </div>
                <div class="sys_slider__info_review">
                  <div class="sys_slider__manager_img_w">
                    <img class="sys_slider__manager_img" :src="item.review_img" />
                  </div>
                  <div class="sys_slider__info_review_info">
                    <div class="sys_slider__info_review_info_in">
                      <div class="sys_slider__info_review_info_subtitle">
                        Отзыв заказчика
                      </div>
                      <div class="sys_slider__info_review_info_title">
                        {{ item.rev_name }}
                      </div>
                      <div class="sys_slider__info_review_info_descr">
                        {{ item.review }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="sys_slider__nav js-sys-nav-w">
        <button
          class="sys_slider__navigation sys_slider__navigation--prev_mod js-sys-navigation-prev flex items-center justify-center"
          type="button"
        >
          <Icons icon="fluent:chevron-left-28-regular" :size="30" />
        </button>
        <button
          class="sys_slider__navigation sys_slider__navigation--next_mod js-sys-navigation-next flex items-center justify-center"
          type="button"
          aria-label="Next slide"
        >
          <Icons icon="fluent:chevron-right-28-regular" :size="30" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

defineProps<{
  systems: any;
  title: string;
}>();
</script>

<style scoped lang="scss">
.sys_slider__img_w {
  @media (max-width: 767px) {
    position: static;
  }
}

.sys_slider__info_about_descr {
  @media (min-width: 768px) {
    max-width: 75%;
  }
}
</style>
