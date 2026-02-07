<template>
  <section class="popular" v-if="projects" id="projects">
    <div class="container popular__in">
      <h2 class="popular__title"><strong>Популярные проекты</strong> и цены</h2>
      <div class="popular__list_w">
        <div class="popular__list">
          <CardProject
            v-for="(item, i) in visibleProjects"
            :key="'popular-projects-item' + i"
            :project="item"
            :open-in-modal="true"
            @open="openModalForProject(item)"
          />
        </div>

        <div class="projects__bottom">
          <btn
          v-if="visibleProjects.length < projects.length"
            name="Загрузить еще"
            size="large"
            class="btn_base_s"
            @click="loadMore"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import btn from "../ui/btn.vue";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useModalStore } from "@/stores/useModalStore";
import { useProjectsStore, useProjectsStoreRefs } from "@/stores/useProjectStore";
import CardProject from "../cards/CardProject.vue";

const { openModal, closeModal } = useModalStore();
const { getProjects } = useProjectsStore();
const { projects } = useProjectsStoreRefs();
const router = useRouter();

// Управление видимыми проектами (тип с id для открытия модалки)
const visibleProjects = ref<Array<{ id: number }>>([]);
const itemsPerPage = 6; // Количество проектов на странице
let currentPage = 1; // Текущая страница

// Открытие модального окна с добавлением query
const opeModalProject = (id: number) => {
  router.push({ query: { project: id } }).then(() => {
    openModal("project");
  });
};
const openModalForProject = (item: { id: number }) => opeModalProject(item.id);

// Функция для загрузки проектов по страницам
const loadMore = () => {
  const nextPageItems = projects.value.slice(0, currentPage * itemsPerPage);
  visibleProjects.value = nextPageItems;
  currentPage++;
};

// Следим за изменениями в параметрах URL и автоматически открываем/закрываем модальное окно
watch(
  () => router.currentRoute.value.query.project,
  (newValue) => {
    if (newValue) {
      openModal("project");
    } else {
      closeModal("project");
    }
  }
);

onMounted(() => {
  // Загружаем проекты и отображаем первую страницу
  getProjects().then(() => {
    loadMore(); // Показать первые 6 проектов
  });
});

</script>

<style scoped lang="scss">
.popular__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.load-more-btn {
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background-color: #bde977;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: #a9d669;
  }
}
.projects__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.card__decor {
  position: absolute;
  top: -4rem;
  left: -2rem;
  width: 20rem;
  height: 20rem;
  z-index: 22;
}

.card__img_w {
  position: relative;
}

.popular__card {
  .card {
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 2rem 0 #0000003d;
      transform: translateY(-0.5rem);
    }
  }
}

.btn-project {
  padding: 3rem 1rem 2rem 3rem;
}
</style>
