<template>
  <MainHeader />
  <div class="wrapper">
    <div class="base">
      <Breadcrumbs v-if="!isHomeRoute" />
      <slot />
    </div>
  </div>
  <notification />
  <MainFooter />
</template>

<script setup lang="ts">
import MainFooter from "@/components/shared/MainFooter.vue";
import MainHeader from "@/components/shared/MainHeader.vue";
import notification from "@/components/shared/notification.vue";
import Breadcrumbs from "@/components/shared/Breadcrumbs.vue";

import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isHomeRoute = computed(() => {
  return route.name === "home";
});
</script>

<style scoped lang="scss"></style>
