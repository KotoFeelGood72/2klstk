<template>
  <footer class="footer">
    <div class="footer__in">
      <div class="footer__row">
        <div class="footer__col footer__col--logo">
          <div class="footer__logo_row">
            <RouterLink class="footer__logo" to="/">
              <img src="https://2klstk.ru/wp-content/uploads/2024/09/logo.png" />
            </RouterLink>
            <div class="footer__logo_cta">
              <h2 class="footer__logo_title">Технологии комфорта</h2>
              <div class="footer__logo_descr">Строительство качественных домов</div>
            </div>
          </div>
          <div class="footer__row_icon">
            <span class="contact__icon">
              <Icons icon="clarity:envelope-solid" :size="30" /> </span
            ><a href="mailto:2klstk@mail.ru">2klstk@mail.ru</a>
          </div>
          <div class="footer__row_icon">
            <span class="contact__icon">
              <Icons icon="rivet-icons:map-pin-solid" :size="30" /></span
            ><span>г. Краснодар, ул.Соколова, д. 66/2, офис 1</span>
          </div>
        </div>
        <div class="footer__col footer__col--info">
          <div class="footer__date">Рабочие: ПН-ПТ 9:00-18:00 <br />СБ-ВС Выходные</div>
          <a class="footer__phone" href="tel:+79282755456">+7 928 275-54-56</a
          ><a class="footer__call_us" @click="openModal('form')">Заказать звонок</a>
          <ul class="footer__social_list">
            <li
              class="footer__social_item"
              v-for="(item, i) in socials"
              :key="'footer-social-item' + i"
            >
              <a class="footer__social_link" :href="item.link"><img :src="item.img" /></a>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--logo">
          <nav class="footer__nav">
            <ul class="footer__nav_list">
              <li
                class="menu-item"
                v-for="(item, i) in menu"
                :key="'footer-menu-item' + i"
              >
                <RouterLink :to="item.link">{{ item.name }}</RouterLink>
              </li>
            </ul>
          </nav>
          <div class="footer__rights_row">
            <div class="footer__rights_link_w">
              <RouterLink to="/privacy/" class="footer__politic">
                Политика конфиденциальности
              </RouterLink>

              <div class="footer__inn">ИНН 2311188415</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "@/stores/useModalStore";
import { menu } from "@/data/Menu";
import { socials } from "@/data/Socials";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss">
.footer__nav_list {
  a {
    color: $dark;
  }
}
</style>
