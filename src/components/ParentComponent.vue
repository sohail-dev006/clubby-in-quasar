<template>
  <q-page class="q-pa-md">
    <!-- Show loading spinner while data is being fetched -->
     <q-spinner v-if="loading" size="50px" class="q-ma-md" />

    <!-- Display categories as expandable items -->
    <q-expansion-item
      v-for="category in categories"
      :key="category.id"
      :label="category.title"
      :default-expanded="false"
      icon="fas fa-cogs"
    >
      <!-- Recursively render children categories -->
      <category-expansion
        v-for="child in category.active_childrens"
        :key="child.id"
        :category="child"
      />
    </q-expansion-item>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import CategoryExpansion from './CategoryExpansion.vue'; // Import the recursive component

const categories = ref([]);
const loading = ref(false);

// Fetch categories from the API
onMounted(async () => {
  loading.value = true;
  await fetchCategories();
  loading.value = false;
});

const fetchCategories = async () => {
  try {
    const response = await axios.get('https://api.ishopeco.com/api/categories');
    console.log("here is api ", response.data.data)
    categories.value = response.data.data.categories || [];
    console.log("Fetched categories:", categories.value); // Log the data to check structure

  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

</script>
