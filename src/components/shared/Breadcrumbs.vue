<template>
  <div class="breadcrums">
    <div class="section_in">
      <nav aria-label="breadcrumb" class="breadcrumbs_main">
        <ul>
          <!-- Корневая ссылка -->
          <li class="breadcrumb__item">
            <RouterLink to="/" class="breadcrumb__link">
              {{ homeLabel }}
            </RouterLink>
          </li>

          <!-- Динамически построенные «крошки» -->
          <li
            v-for="(crumb, index) in breadcrumbs"
            :key="crumb.path"
            class="breadcrumb__item"
          >
            <!-- Последний элемент — текущее положение, без ссылки -->
            <span v-if="index === breadcrumbs.length - 1" class="breadcrumb__current">
              {{ crumb.name }}
            </span>

            <!-- Остальные элементы — обычные ссылки -->
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
import { computed, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { RouteLocationMatched } from "vue-router";

export interface Props {
  homeLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  homeLabel: "Главная",
});

const { homeLabel } = toRefs(props);

// Текущий маршрут и инстанс роутера
const route = useRoute();
const router = useRouter();

interface Crumb {
  name: string;
  path: string;
}

const breadcrumbs = computed<Crumb[]>(() =>
  route.matched
    .filter((record) => record.meta.breadcrumb !== false)
    .map(
      (record: RouteLocationMatched): Crumb => {
        const name =
          typeof record.meta.breadcrumb === "string"
            ? (record.meta.breadcrumb as string)
            : typeof record.meta.title === "string"
            ? (record.meta.title as string)
            : (record.name as string | undefined) ?? "";

        const path = router.resolve({
          name: record.name,
          params: route.params,
        }).path;

        return { name, path };
      }
    )
    .filter((crumb) => crumb.name && crumb.path && crumb.path !== "")
);
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
