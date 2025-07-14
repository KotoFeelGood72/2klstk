<template>
  <RouterLink :to="`/news/${news.slug}`">
    <div class="popular__card">
      <div class="card js-popular-card-popup">
        <div class="card__img_w">
          <img
            class="card__img"
            :src="news?._embedded['wp:featuredmedia'][0].source_url"
          />
        </div>
        <div class="card__info">
          <div class="line-clamp-2 text-22 mb-4">{{ news.title.rendered }}</div>
          <div v-html="news.content.rendered" class="line-clamp-3 mb-4"></div>
          <div
            class="text-primary text-16 font-medium flex items-center justify-start gap-5"
          >
            <p>Читать</p>
            <Icons icon="pajamas:long-arrow" class="flex items-center justify-center" />
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  news: any;
}>();
</script>
