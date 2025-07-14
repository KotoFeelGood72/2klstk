import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { RouteLocationMatched } from "vue-router";

export interface Crumb {
  name: string;
  path: string;
}

const customCrumbs = ref<Crumb[] | null>(null);

export function useBreadcrumbs() {
  const route = useRoute();
  const router = useRouter();

  // Сброс кастомных крошек при переходе на другой путь
  watch(
    () => route.fullPath,
    () => {
      customCrumbs.value = null;
    }
  );

  const breadcrumbs = computed<Crumb[]>(() => {
    if (customCrumbs.value?.length) return customCrumbs.value;

    return route.matched
      .filter((record) => record.meta.breadcrumb !== false)
      .map((record: RouteLocationMatched): Crumb => {
        const name =
          typeof record.meta.breadcrumb === "string"
            ? record.meta.breadcrumb
            : typeof record.meta.title === "string"
            ? record.meta.title
            : (record.name as string | undefined) ?? "";

        const path = router.resolve({
          name: record.name,
          params: route.params,
        }).path;

        return { name, path };
      })
      .filter((crumb) => crumb.name && crumb.path && crumb.path !== "");
  });

  const setCustomBreadcrumbs = (crumbs: Crumb[]) => {
    customCrumbs.value = crumbs;
  };

  const clearCustomBreadcrumbs = () => {
    customCrumbs.value = null;
  };

  return {
    breadcrumbs,
    setCustomBreadcrumbs,
    clearCustomBreadcrumbs,
  };
}
