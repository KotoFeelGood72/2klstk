<template>
  <div class="section_in">
    <div class="grid lg:grid-cols-2 gap-10">
      <div class="" v-for="(item, i) in complects" :key="'complect-item-' + i">
        <h3
          class="lg:text-24 font-medium py-6 px-6 bg-primary flex items-center text-white mb-10 rounded-md"
        >
          {{ item.nazvanie_kmoplektaczii }}
        </h3>

        <ul class="flex flex-col gap-10">
          <li
            v-for="(subitem, i) in item.spisok_v_komplektaczii"
            :key="'list-item-block-complect-' + i"
            class="flex gap-5 bg-primary/30 px-8 py-10 rounded-md"
          >
            <div class="mb-4 min-w-80 max-w-80">{{ subitem.nazvanie }}</div>
            <div v-html="subitem.znachenie"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  complects: any;
}>();
</script>

<style scoped lang="scss"></style>
