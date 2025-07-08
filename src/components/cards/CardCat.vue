<template>
  <div class="cat">
    <RouterLink :to="`shop/category/${cat.slug}?cat_id=${cat.id}`">
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
defineProps<{
  cat: any;
}>();
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
