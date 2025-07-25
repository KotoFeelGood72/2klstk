<template>
  <section class="section contact" id="contacts">
    <div class="container contact__in">
      <div class="contact__row">
        <div class="contact__col contact__col--map">
          <h2 class="contact__title">Мы на карте</h2>
          <div class="contact__row_icon">
            <span class="contact__icon">
              <svg class="icon icon_marker icon--size_mod">
                <use
                  xlink:href="@/assets/images/sprite/sprite.svg#marker"
                ></use></svg></span
            ><span>г. Краснодар, ул.Соколова, д. 66/2, офис 1</span>
          </div>
          <div class="contact__map aspect-video">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4da2c5bba387fa2568380d887aae1c794786c9dac056a25f477cf46cd181a543&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="contact__col contact__col--info">
          <h2 class="contact__title">Наши контакты</h2>
          <div class="contact__day">Рабочие: ПН-ПТ 9:00-18:00 <br />СБ-ВС Выходные</div>
          <a class="contact__phone" href="tel:+79282755456">+7 928 275 54 56</a>
          <h3 class="contact__subtitle">Отвечаем мгновенно</h3>
          <ul class="contact__social_list">
            <li class="contact__social_item">
              <a class="contact__social_link" href="https://t.me/masternavse2"
                ><img
                  src="https://2klstk.ru/wp-content/themes/comfort/assets/images/contact/telegram.svg"
              /></a>
            </li>
            <li class="contact__social_item">
              <a class="contact__social_link" href="https://wtsp.cc/79282755456"
                ><img
                  src="https://2klstk.ru/wp-content/themes/comfort/assets/images/contact/whatsapp.svg"
              /></a>
            </li>
          </ul>
          <div class="contact__row_icon contact__row_icon--wheight">
            <span class="contact__icon">
              <Icons icon="clarity:envelope-solid" :size="30" /> </span
            ><a href="mailto:2klstk@mail.ru">2klstk@mail.ru</a>
          </div>
          <div class="contact__btn_w">
            <btn
              style="justify-content: center"
              name="Заказать звонок"
              size="large"
              @click="openModal('form')"
            />
          </div>
        </div>
        <!-- <div class="contacts-col">
          <h2 class="contact__title">Наши акции</h2>
          <div class="contact__col--img sales-list" @click="openModal('sale')">
            <div class="contact__img_w">
              <img
                class="contact__img"
                src="http://2klstk.ru/wp-content/uploads/2024/11/000.png"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss">
.contact__row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 6rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}
</style>
