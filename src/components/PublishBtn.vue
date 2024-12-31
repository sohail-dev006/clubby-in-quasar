<template>
   <div v-for="btn in publish" v-if="$q.screen.gt.xs" :class="btn.class" :style="btn.style"class="q-ml-sm rounded-10">
      <q-btn flat class="text-capitalize text-white  q-mt-xs" :label="btn.text" />
   </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['publish']);
</script>
