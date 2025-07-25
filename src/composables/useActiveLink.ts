import { useRoute } from "vue-router";

export function useActiveLink() {
  const route = useRoute();

  const isActive = (link: string): boolean => {
    const currentFullPath = `${route.path}${route.hash}`;

    // Якорные ссылки
    if (link.startsWith("#")) {
      return route.hash === link;
    }

    if (link.startsWith("/#")) {
      return currentFullPath === link;
    }

    // Главная не активна, если есть hash
    if (link === "/" && route.path === "/" && route.hash) {
      return false;
    }

    return route.path === link;
  };

  return { isActive };
}
