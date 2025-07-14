<template>
  <div class="cat">
    <RouterLink :to="dynamicPath" @click.native="setCategoryUi">
      <div class="cat_img lg:aspect-auto aspect-square">
        <img :src="cat.acf.img" class="w-full h-full object-cover" />
      </div>
      <div class="cat__content">
        <h3 class="lg:text-20 text-12">{{ cat.name }}</h3>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useProjectsStore } from "@/stores/useProjectStore";
const props = defineProps<{
  cat: any;
}>();

const route = useRoute();
const { setCategory } = useProjectsStore();

const dynamicPath = computed(() => {
  if (route.name === "shop-list" || route.name === "shop-category") {
    return `/shop/category/${props.cat.slug}?cat_id=${props.cat.id}`;
  }
  if (route.name === "news-list" || route.name === "news-category") {
    return `/news/category/${props.cat.slug}?cat_id=${props.cat.id}`;
  }
  //
  return `/category/${props.cat.slug}?cat_id=${props.cat.id}`;
});

const setCategoryUi = () => {
  setCategory(props.cat);
};
</script>

<style scoped lang="scss">
.cat {
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  color: #fff;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  a {
    color: inherit;
  }
}
.cat_img {
  @include bp($point_2, $direction: min) {
    height: 30rem;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
}

.cat__content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 22;
  padding: 2rem;
  background-color: #4242429a;

  @include bp($point_2) {
    padding: 1rem;
  }
}
</style>
