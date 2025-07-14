<template>
  <div class="container">
    <div class="grid lg:grid-cols-2 gap-5">
      <div v-for="(item, i) in complects" :key="'complect-item-' + i">
        <h3
          class="lg:text-24 font-medium py-6 px-6 bg-primary flex items-center text-white mb-10 rounded-md"
        >
          {{ item.nazvanie_kmoplektaczii }}
        </h3>

        <ul class="flex flex-col gap-5">
          <li
            v-for="(subitem, j) in item.spisok_v_komplektaczii"
            :key="'list-item-block-complect-' + j"
            class="flex flex-col gap-2 bg-primary/30 px-4 py-6 rounded-md"
          >
            <div
              class="flex items-center justify-between cursor-pointer"
              @click="toggleDropdown(i, j)"
            >
              <div class="text-20 font-medium">{{ subitem.nazvanie }}</div>
              <Icons :icon="isOpen(i, j) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
            </div>
            <div
              v-if="isOpen(i, j)"
              v-html="subitem.znachenie"
              class="transition-all duration-300 ease-in-out"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  complects: any;
}>();

const openItems = ref<Record<string, boolean>>({});

const makeKey = (groupIndex: number, itemIndex: number) => `${groupIndex}-${itemIndex}`;

const toggleDropdown = (groupIndex: number, itemIndex: number) => {
  const key = makeKey(groupIndex, itemIndex);
  openItems.value[key] = !openItems.value[key];
};

const isOpen = (groupIndex: number, itemIndex: number) => {
  return !!openItems.value[makeKey(groupIndex, itemIndex)];
};

// ✅ Следим за появлением complects
watch(
  () => props.complects,
  (newVal) => {
    if (Array.isArray(newVal)) {
      newVal.forEach((item: any, groupIndex: number) => {
        const first = 0;
        const last = item?.spisok_v_komplektaczii?.length - 1;

        if (item?.spisok_v_komplektaczii?.length > 0) {
          openItems.value[makeKey(groupIndex, first)] = true;
          if (first !== last) {
            openItems.value[makeKey(groupIndex, last)] = true;
          }
        }
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss"></style>
