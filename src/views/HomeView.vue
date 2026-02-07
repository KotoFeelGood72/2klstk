<template>
  <div class="lg:space-y-16 space-y-10 lg:pt-20 lg:pb-40">
    <section class="hero" v-if="home">
      <div class="container hero__in">
        <div class="hero__row">
          <div class="hero__col hero__col--info">
            <div class="hero__info">
              <h1 class="hero__title year-cap" v-html="home.acf.hero_title"></h1>
              <div class="hero__descr" v-html="home.acf.hero_txt"></div>
              <div class="hero__btn_w gap-4">
                <btn
                  name="Получить консультацию"
                  size="large"
                  @click.prevent="openModal('form', 'call')"
                />
                <btn
                  name="Отправить проект на просчет"
                  size="large"
                  @click.prevent="openModal('form', 'price')"
                />
              </div>
            </div>
          </div>
          <div class="hero__col hero__col--img">
            <div class="hero__img_w">
              <img class="hero__img" :src="home.acf.hero_img.url" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <PromoSlider />
    <QuizForm />
    <SystemsBlock />
    <AdvBlock />
    <Projects />
    <section class="imagine">
      <div class="container imagine__in">
        <h2 class="imagine__title">
          <strong>Представьте, как уже завтра</strong> <br />
          вы просыпаетесь в доме вашей мечты
        </h2>
        <ul class="imagine__list">
          <li class="imagine__item">
            <div class="imagine__img_w">
              <img
                class="imagine__img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_20_41.png"
                alt="Семейный вечер на террасе"
              />
            </div>
            <div class="imagine__info">
              <div class="imagine__item_title">Тёплые вечера на собственной террасе</div>
              <div class="imagine__item_descr">
                Наслаждайтесь барбекю, ароматом цветов и разговорами до поздней ночи под
                звёздным небом в кругу семьи.
              </div>
            </div>
          </li>

          <li class="imagine__item">
            <div class="imagine__img_w">
              <img
                class="imagine__img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_17_59.png"
                alt="Вид на летний участок"
              />
            </div>
            <div class="imagine__info">
              <div class="imagine__item_title">Живописный участок и собственный сад</div>
              <div class="imagine__item_descr">
                Выращивайте фрукты и овощи, ухаживайте за цветами и отдыхайте в тени
                деревьев рядом со своим домом в Краснодаре.
              </div>
            </div>
          </li>

          <li class="imagine__item">
            <div class="imagine__img_w">
              <img
                class="imagine__img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/chatgpt-image-8-iyul.-2025-g.-16_23_34.png"
                alt="Дети играют во дворе"
              />
            </div>
            <div class="imagine__info">
              <div class="imagine__item_title">Безопасное детство на свежем воздухе</div>
              <div class="imagine__item_descr">
                Постройте дом, где дети будут играть во дворе, кататься на велосипедах и
                проводить лето с пользой и радостью.
              </div>
            </div>
          </li>
        </ul>

        <!-- <div class="btn-bottom" style="text-align: center">
          <btn
            name="Зафиксировать цену"
            size="large"
            style="display: inline-flex"
            @click.stop="openModal('sale')"
          />
        </div> -->
      </div>
    </section>
    <SystemsSlider :systems="home?.acf.case_list" :title="home?.acf?.case_title" />
    <BlockSteps />
    <section class="stage js-sys-slider-w" id="steps">
      <div class="container stage__in">
        <h2 class="stage__title">
          <strong>4 шага к вашему </strong> идеальному дому — всё просто!
        </h2>
        <div class="sys_slider__pag js-sys-pag-w"></div>
        <div class="stage__slider_w">
          <div class="stage__slider js-sys-slider">
            <Swiper
              :slides-per-view="1"
              :modules="[Navigation, Pagination]"
              :space-between="40"
              :speed="700"
              :navigation="{
                prevEl: '.js-bigstep-navigation-prev',
                nextEl: '.js-bigstep-navigation-next',
              }"
            >
              <SwiperSlide v-for="item in home?.acf.steps_list">
                <div class="stage__slide">
                  <div class="stage__row">
                    <div class="stage__col stage__col--info">
                      <div class="stage__info">
                        <div class="stage__info_title">
                          {{ item.title }}
                        </div>
                        <div class="stage__info_subtitle">Включено:</div>
                        <ul class="stage__info_list">
                          <li class="stage__info_item" v-for="subitem in item.list">
                            <span class="stage__info_item_icon">
                              <svg class="icon icon_checked icon--size_mod">
                                <use
                                  xlink:href="@/assets/images/sprite/sprite.svg#checked"
                                ></use></svg></span
                            ><span>{{ subitem.title }}</span>
                          </li>
                        </ul>
                      </div>
                      <div class="stage__info_about">
                        <div class="stage__info_about_item">
                          <span class="stage__info_about_item_icon">
                            <svg class="icon icon_clock icon--size_mod">
                              <use
                                xlink:href="@/assets/images/sprite/sprite.svg#clock"
                              ></use></svg></span
                          ><span>Срок: </span><strong> {{ item.dedline }}</strong>
                        </div>
                        <div class="stage__info_about_item">
                          <span class="stage__info_about_item_icon">
                            <svg class="icon icon_rub icon--size_mod">
                              <use
                                xlink:href="@/assets/images/sprite/sprite.svg#rub"
                              ></use></svg></span
                          ><span>Стоимость: </span><strong> {{ item.price }}</strong>
                        </div>
                      </div>
                    </div>
                    <div class="stage__col stage__col--img">
                      <div class="stage__img_w">
                        <img class="stage__img" :src="item.img" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="sys_slider__nav sys_slider__nav--step js-sys-nav-w">
            <button
              class="sys_slider__navigation sys_slider__navigation--prev_mod js-bigstep-navigation-prev"
              type="button"
              aria-label="Prev slide"
            >
              <Icons icon="fluent:chevron-left-28-regular" :size="30" />
            </button>
            <button
              class="sys_slider__navigation sys_slider__navigation--next_mod js-bigstep-navigation-next"
              type="button"
              aria-label="Next slide"
            >
              <Icons icon="fluent:chevron-right-28-regular" :size="30" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="excursion">
      <div class="container excursion__in">
        <div class="excursion__row">
          <div class="excursion__col excursion__col--info">
            <div class="excursion__info_in">
              <h2 class="excursion__title">
                Приглашаем на <strong>бесплатную экскурсию</strong> по строящимся объектам
              </h2>
              <div class="excursion__subtitle">
                Поговорите с нашими строителями, узнайте больше о процессе
              </div>
              <ul class="excursion__list">
                <li class="excursion__item">
                  <strong>Исследуйте</strong> используемые технологии строительства
                </li>
                <li class="excursion__item">
                  <strong>Оцените</strong> качество стройматериалов
                </li>
                <li class="excursion__item">
                  <strong>Задайте</strong> вопросы нашему прорабу
                </li>
              </ul>
              <ExcursionForm />
            </div>
          </div>
          <div class="excursion__col excursion__col--img">
            <div class="excursion__img_w">
              <img
                class="excursion__img"
                src="https://2klstk.ru/wp-content/uploads/2024/09/a40026533b53cfc61db1f98d9f031307.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BlockSteps from "@/components/blocks/BlockSteps.vue";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import btn from "@/components/ui/btn.vue";
import PromoSlider from "@/components/blocks/PromoSlider.vue";
import QuizForm from "@/components/QuizForm.vue";
import Projects from "@/components/home/Projects.vue";
import SystemsSlider from "@/components/home/SystemsSlider.vue";
import SystemsBlock from "@/components/blocks/SystemsBlock.vue";
import ExcursionForm from "@/components/ExcursionForm.vue";
import { useModalStore } from "@/stores/useModalStore";
import { useHomeStore, useHomeStoreRefs } from "@/stores/useHomeStore";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import AdvBlock from "@/components/blocks/AdvBlock.vue";
gsap.registerPlugin(ScrollTrigger);

const { getHome } = useHomeStore();
const { home } = useHomeStoreRefs();
const { openModal } = useModalStore();

onMounted(async () => {
  await getHome();

  // Анимация при скролле для всех секций с классом '.section'
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Запуск анимации, когда секция видна на 80%
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  opacity: 0;
}

.step__card {
  .step__card_title {
    &:before {
      content: attr(data-num);
    }
  }
}

.contact__col--img {
  // max-width: 45rem;
  display: flex;
  align-items: flex-start;
  img {
    border-radius: 2rem;
    width: 100%;
    // height: 100%;
    object-fit: contain;
  }
}

.contact__row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 6rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.sales-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 1rem;

  div {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-0.5rem);
    }
  }
}

.btn-bottom {
  padding: 4rem 0;
}

.sys_slider__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
