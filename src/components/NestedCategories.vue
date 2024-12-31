<template>
  <q-expansion-item
    :key="category.id"
    :label="category.title"
    :default-expanded="false"
    icon="fas fa-cogs"
  >
    <template v-if="category.active_childrens && category.active_childrens.length > 0">
      <NestedCategories
        v-for="child in category.active_childrens"
        :key="child.id"
        :category="child"
      />
    </template>
  </q-expansion-item>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  category: Object,
});
</script>
