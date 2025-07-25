<template>
  <section class="system" id="about">
    <div class="container system__in">
      <div class="system__row">
        <div class="system__col system__col--img">
          <h2 class="system__title">Технология строительства "МСБК"©</h2>
          <div class="system__img_box lg:block hidden">
            <div class="system__img_w">
              <img
                class="system__img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/scale_1200.jpeg"
              />
            </div>
          </div>
        </div>
        <div class="system__col system__col--info">
          <div class="system__info_img_box">
            <div class="system__info_img_w">
              <img
                class="system__info_img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/5eb8a5df64b8ca6bb8a47149f6bc3eb2.jpg"
              />
            </div>
            <div class="system__info_img_w">
              <img
                class="system__info_img"
                src="http://2klstk.ru/wp-content/uploads/2025/07/729d9aaa24e2649e4b6bd7e4a123dea4.jpg"
              />
            </div>
          </div>
          <div class="system__info_about">
            <div class="system__info_about_title">
              Проектирование и изготовление металлических каркасов домов
            </div>
            <div class="system__info_about_descr">
              Возведение каркаса здания из металлоконструкции, собранной из оцинкованной
              стали, произведенного автоматической линией с технологическими отверстиями и
              пазами. Каркас с обеих сторон обшивается плитным материалом, который
              является несъемной опалубкой, полости заполняются полистиролбетоном, который
              делает конструкцию монолитной и теплой
            </div>
            <div style="display: inline-flex">
              <btn @click.prevent="openModal('form')" name="Получить консультацию" />
            </div>
          </div>
          <div class="system__info_about system__info_about--green">
            <div class="system__info_about_title">МСБК</div>
            <div class="system__info_about_descr">
              Иновационная технология строительства жилых домов и коммерческих зданий
              комфорт-класса
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss"></style>
