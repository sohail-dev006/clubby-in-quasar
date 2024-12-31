<template>
  <q-page class="q-pa-md">
    <!-- Show loading spinner while the data is being fetched -->
    <q-spinner v-if="loading" size="50px" class="q-ma-md" />

    <!-- Display categories as expandable items -->
    <NestedCategories
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NestedCategories from './NestedCategories.vue'; // Adjust the path as necessary

// Reactive data
const categories = ref([]);
const loading = ref(false);

// Fetch categories from the API on component mount
onMounted(async () => {
  loading.value = true;
  await fetchCategories();
  loading.value = false;
});

// Function to fetch categories from the API
const fetchCategories = async () => {
  try {
    const response = await axios.get('https://api.ishopeco.com/api/categories');
    categories.value = response.data.data.categories || []; // Store the fetched categories with children
    console.log("Fetched categories:", categories.value); // Log the data to check structure

    // Recursively process categories and their active children
    categories.value = categories.value.map(category => {
      processCategory(category);
      return category;
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const processCategory = (category) => {
  if (category.active_childrens && category.active_childrens.length > 0) {
    // Filter active children
    category.active_childrens = category.children.filter(child => child.is_active);
    console.log("Active child is here", category.active_childrens);
    // Recursively process each child and their active children
    category.active_childrens.forEach(child => {
      processCategory(child); // Recursively call for each child to fetch its own active children
    });
  } else {
    category.active_childrens = []; // Ensure `active_childrens` exists even for categories without children
  }
};
</script>
