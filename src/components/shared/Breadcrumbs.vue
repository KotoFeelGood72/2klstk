<template>
  <div class="breadcrums">
    <div class="container">
      <nav aria-label="breadcrumb" class="breadcrumbs_main">
        <ul>
          <!-- Корневая ссылка -->
          <li class="breadcrumb__item">
            <RouterLink to="/" class="breadcrumb__link">
              {{ homeLabel }}
            </RouterLink>
          </li>

          <!-- Динамически или вручную переданные «крошки» -->
          <li
            v-for="(crumb, index) in breadcrumbs"
            :key="crumb.path + index"
            class="breadcrumb__item"
          >
            <span v-if="index === breadcrumbs.length - 1" class="breadcrumb__current">
              {{ crumb.name }}
            </span>
            <RouterLink v-else :to="crumb.path" class="breadcrumb__link">
              {{ crumb.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useBreadcrumbs } from "@/composables/useBreadcrumbs";

export interface Props {
  homeLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  homeLabel: "Главная",
});

const { homeLabel } = toRefs(props);

const { breadcrumbs } = useBreadcrumbs();
</script>

<style scoped lang="scss">
.breadcrumbs_main {
  padding: 2rem 0;
  ul {
    @include flex-start;
    gap: 1rem;
    li {
      &:not(:last-child) {
        &:after {
          padding-left: 1rem;
          content: "/";
        }
      }
    }
    a {
      color: $green;
    }
  }
}
</style>
