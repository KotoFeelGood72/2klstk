<template>
  <section class="py-10 px-4 container mx-auto">
    <article v-if="post" class="prose lg:prose-lg max-w-none flex flex-col gap-6">
      <h1
        class="text-3xl lg:text-40 font-bold max-w-screen-xl leading-[145%] mb-10"
        v-html="post.title.rendered"
      />
      <img
        v-if="post._embedded?.['wp:featuredmedia']?.[0]?.source_url"
        :src="post._embedded['wp:featuredmedia'][0].source_url"
        :alt="post.title.rendered"
        class="w-full h-auto rounded-xl max-h-[500px] object-cover aspect-video"
      />
      <div class="post-content" v-html="post.content.rendered" />

      <div
        class="mt-10 flex gap-4 flex-wrap items-center lg:justify-start lg:bg-primary/35 lg:px-10 lg:py-6 justify-between"
      >
        <span class="text-gray-500 lg:text-18 font-medium text-16">Поделиться:</span>

        <a
          :href="`https://vk.com/share.php?url=${encodeURIComponent(post.link)}`"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center px-6 py-2 font-semibold bg-blue-600 text-white rounded-lg gap-4"
        >
          <Icons icon="basil:vk-solid" />
          <p class="lg:block hidden">ВКонтакте</p>
        </a>

        <a
          :href="`https://t.me/share/url?url=${encodeURIComponent(post.link)}`"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center px-6 py-2 font-semibold bg-slate-600 text-white rounded-lg gap-4"
        >
          <Icons icon="basil:telegram-solid" />
          <p class="lg:block hidden">Telegram</p>
        </a>

        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            post.link
          )}`"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center px-6 py-2 font-semibold bg-blue-800 text-white rounded-lg gap-4"
        >
          <Icons icon="basil:facebook-solid" />
          <p class="lg:block hidden">Facebook</p>
        </a>

        <a
          :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            post.link
          )}&text=${encodeURIComponent(post.title.rendered)}`"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center px-6 py-2 font-semibold bg-indigo-600 text-white rounded-lg gap-4"
        >
          <Icons icon="basil:twitter-solid" />
          <p class="lg:block hidden">Twitter</p>
        </a>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/useNewsStore";

const route = useRoute();
const slug = route.params.slug as string;
const post = ref<any>(null);
const { fetchPostBySlug } = useNewsStore();

onMounted(async () => {
  post.value = await fetchPostBySlug(slug);
});
</script>

<style lang="scss">
.wp-block-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  gap: 2rem;
  img {
    aspect-ratio: 1/1;
  }
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.8rem;
}

.wp-block-separator {
  opacity: 0.3;
}

.wp-block-heading {
  font-size: 3rem;
  font-weight: 500;
  @include bp($point_2) {
    font-size: 2.2rem;
  }
}
</style>
