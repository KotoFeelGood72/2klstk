<template>
  <div class="calc__form_col_about">
    <div class="calc__about_img_w">
      <img
        class="calc__about_img"
        src="https://2klstk.ru/wp-content/themes/comfort/assets/images/system/0.jpg"
      />
    </div>
    <div class="calc__about_heading">
      <div class="calc__about_title">Роман</div>
      <div class="calc__about_subtitle">Руководитель компании</div>
    </div>
    <div class="calc__about_info">
      <div class="calc__about_info_title">Ответив на вопросы вы получите:</div>
      <ul class="calc__about_info_list">
        <li class="calc__about_info_item">
          Приблизительную стоимость строительств
        </li>
        <li class="calc__about_info_item">
          Подарок на выбор при заказе строительства у нас
        </li>
        <li class="calc__about_info_item">
          Индивидуальная подборка проектов согласно вашим ответам или новый
          проект
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.calc__form_col_about {
  @media (max-width: 1200px) {
    display: none;
  }
}
</style>
