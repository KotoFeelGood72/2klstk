<template>
  <div class="cat">
    <RouterLink :to="dynamicPath">
      <div class="cat_img">
        <img :src="cat.acf.img" />
      </div>
      <div class="cat__content">
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.description }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = defineProps<{
  cat: any;
}>();

const route = useRoute();

console.log(route);

const dynamicPath = computed(() => {
  if (route.name === "shop-list" || route.name === "shop-category") {
    return `/shop/category/${props.cat.slug}?cat_id=${props.cat.id}`;
  }
  if (route.name === "news-list" || route.name === "news-category") {
    return `/news/category/${props.cat.slug}?cat_id=${props.cat.id}`;
  }
  // fallback
  return `/category/${props.cat.slug}?cat_id=${props.cat.id}`;
});
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
  height: 30rem;
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
}
</style>
