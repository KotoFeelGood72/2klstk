<template>
  <div class="burger">
    <Close />
    <div class="burger-logo">
      <RouterLink class="max-w-28" to="/">
        <img src="https://2klstk.ru/wp-content/uploads/2024/09/logo.png" />
      </RouterLink>
    </div>
    <ul class="header__nav_list flex flex-col gap-4">
      <li
        class="menu-item"
        v-for="(item, i) in menu"
        :key="'menu-item-' + i"
        @click="closeModal('burger')"
      >
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
    <div class="burger__contact">
      <YandexStar />
      <ul class="burger-social">
        <li class="" v-for="(item, i) in socials" :key="'mobile-socials-item' + i">
          <a
            class="flex items-center justify-center w-14 h-14"
            :href="item.link"
            target="_blank"
          >
            <img :src="item.img" class="w-full h-full object-cover" />
          </a>
        </li>
      </ul>
      <div class="header__work_time">
        <div class="header__date">Рабочие: ПН-ПТ 9:00-18:00 <br />СБ-ВС Выходные</div>
        <a class="header__phone" href="tel:+79282755456">+7 928 275-54-56</a
        ><a class="header__call_us" @click="openForm()">Заказать звонок</a>
      </div>
    </div>
    <btn name="Отправить проект на просчет" @click="openForm('price')" />
  </div>
</template>

<script setup lang="ts">
import btn from "../ui/btn.vue";
import { ref } from "vue";
import Close from "../ui/Close.vue";
import YandexStar from "../promo/YandexStar.vue";
import { useModalStore } from "@/stores/useModalStore";
import { menu } from "@/data/Menu";
import { socials } from "@/data/Socials";

const { openModal, closeModal } = useModalStore();

const openForm = (mode?: string) => {
  closeModal("burger");
  openModal("form", mode);
};
</script>

<style scoped lang="scss">
.burger {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  background-color: #fff;
  z-index: 101;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 80rem;
  width: 100%;
  // max-height: 90dvh;
  overflow-y: auto;

  @media (max-width: 767px) {
    max-width: 100%;
    justify-content: center;
  }

  :deep(.header__social_list) {
    justify-content: center;
  }
  //   :deep(.header__logo_row) {
  //     justify-content: center;
  //   }
}

.burger__contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.header__nav_list {
  .menu-item {
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
  a {
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
}

.burger-logo {
  @include flex-center;
}

.burger-social {
  @include flex-center;
  padding: 2rem 0;
  gap: 1.5rem;
}
</style>
