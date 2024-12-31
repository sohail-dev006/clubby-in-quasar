<template>
  <q-expansion-item
    :key="category.id"
    :label="category.title"
    :default-expanded="false"
    icon="fas fa-caret-right"
  >
    <!-- Recursively render active children of the category -->
    <category-expansion
      v-for="child in category.active_childrens"
      :key="child.id"
      :category="child"
    />
  </q-expansion-item>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props to accept a category object
const props = defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>
