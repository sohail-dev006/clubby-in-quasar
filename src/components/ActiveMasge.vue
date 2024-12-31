<template>
  <div v-for="data in ActiveData" class="rounded-10 q-px-lg q-pt-sm bg-white q-mt-lg">
    <q-item class="q-px-none">
      <q-item-section>
        <h5 class="q-ma-none text-3F4354 font-source-family q-mb-xs f-16 font-grey-9 font-SSP700">
          {{ data.title }}
        </h5>
      </q-item-section>
    </q-item>
    <div class="q-pb-md">
      <div class="q-py-xs text-center rounded-10 bg-black-light">
        <div class="q-py-md q-ml-md text-capitalize f-16 font-ssp600 text-grey-9">
          {{ data.active }}
        </div>
      </div>
    </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
let props = defineProps(['ActiveData']);
</script>
