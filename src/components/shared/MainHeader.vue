<template>
  <header class="header js-header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__row">
        <div class="header__logo_row">
          <RouterLink class="header__logo" to="/">
            <img src="https://2klstk.ru/wp-content/uploads/2024/09/logo.png" />
          </RouterLink>
          <div class="header__logo_cta">
            <h2 class="header__logo_title">Технологии комфорта</h2>
            <div class="header__logo_descr">Строительство качественных домов</div>
          </div>
        </div>
        <YandexStar />
        <div class="header__contact">
          <ul class="header__social_list">
            <li
              class="header__social_item"
              v-for="(item, i) in socials"
              :key="'mobile-socials-item' + i"
            >
              <a class="header__social_link" :href="item.link" target="_blank">
                <img :src="item.img" />
              </a>
            </li>
          </ul>
          <btn name="Отправить проект на просчет" @click="openModal('form', 'price')" />
          <div class="header__work_time">
            <div class="header__date">Рабочие: ПН-ПТ 9:00-18:00 <br />СБ-ВС Выходные</div>
            <a class="header__phone" href="tel:+79282755456">+7 928 275-54-56</a>
            <!-- <a class="header__call_us" @click="openModal('form')">Заказать звонок</a> -->
          </div>
        </div>
        <button
          class="header__menu_trigger js-header-menu-trigger"
          type="button"
          aria-label="Toggle menu"
          @click="openModal('burger')"
        >
          <span></span>
        </button>
      </div>
    </div>
    <div class="header_bottom lg:flex hidden">
      <div class="container">
        <div class="header_bottom__main">
          <div class="header_shop">
            <RouterLink to="/shop">Проекты и цены</RouterLink>
          </div>
          <ul class="header__nav_list">
            <li
              v-for="(item, i) in menu"
              :key="'menu-item-' + i"
              :class="['menu-item uppercase', { 'is-active ': isActive(item.link) }]"
            >
              <template v-if="item.link.startsWith('#')">
                <a :href="item.link">{{ item.name }}</a>
              </template>
              <template v-else>
                <RouterLink :to="item.link">{{ item.name }}</RouterLink>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import btn from "../ui/btn.vue";
import { ref, onMounted, onUnmounted } from "vue";
import YandexStar from "../promo/YandexStar.vue";
import { menu } from "@/data/Menu";
import { socials } from "@/data/Socials";
import { useActiveLink } from "@/composables/useActiveLink";

import { useModalStore } from "@/stores/useModalStore";
const { isActive } = useActiveLink();
const isScrolled = ref(false);

const { openModal } = useModalStore();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.header {
  background-color: #ffffffc2;
  overflow: hidden;
  .header__in {
    position: relative;
    z-index: 2;
  }
}

.header_bottom {
  background-color: #b2c593;
}
.header--scrolled {
  backdrop-filter: blur(0.5rem);
  // transform: translateY(-10rem);

  .header__nav_list {
    // padding: 0;
  }
}

.header__btn_calc {
  @media (min-width: 1372px) and (max-width: 1500px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1372px) {
    display: none;
  }
}

.header__social_list {
  @media (max-width: 1502px) {
    display: none;
  }
}

.header__social_item {
  @media (max-width: 1500px) {
    width: 4rem;
    height: 4rem;
  }
}

.header__contact {
  @include flex-start;
  gap: 2rem;
}

.header__social_list {
  @include bp($point_1) {
    display: none;
  }
}

.header__nav_list {
  font-size: 1.6rem;
  padding: 2rem 0;
  // color: white;
  justify-content: flex-start;
  a {
    color: inherit;
  }
}

.header__logo {
  position: relative;
}

.header__in {
  position: relative;
}

.header__row {
  // background-color: #ffffff8f;

  :deep(.yandex-star) {
    @include bp($point_1) {
      display: none;
    }
  }
  @include bp($point_1) {
    gap: 2rem;
  }

  .btn {
    @include bp($point_1) {
      display: none;
    }
  }

  @include bp($point_2) {
    @include flex-start;
    height: 100%;
  }
}

.header__in {
  @include bp($point_2) {
    height: 100%;
  }
}

.header__date,
.header__call_us {
  @include bp($point_1) {
    display: none;
  }
}

.header__logo_row {
  @include bp($point_1) {
    margin-right: 0;
  }
}

.header__phone {
  @include bp($point_1) {
    // font-size: 1.6rem;
    margin: 0;
  }
}

.header__logo_cta {
  @include bp($point_2) {
    display: none;
  }
}

.header__nav_list {
  @include bp($point_2) {
    display: none;
  }
}

.header_bottom__main {
  @include flex-start;
  gap: 2rem;
}

.header_shop {
  color: #fff;
  background-color: #444;
  font-size: 1.8rem;
  text-transform: uppercase;
  height: 100%;
  a {
    padding: 1.8rem 3rem;
    color: inherit;
    @include flex-center;
    text-decoration: none;
  }
}
</style>
