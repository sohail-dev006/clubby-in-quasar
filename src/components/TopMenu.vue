<template>
  <q-tabs v-for="(tab, index) of tabs" :key="index"
  :style="{
        marginLeft: index === 0 ? '48px' : '0px',
        paddingRight: index === 1 ? '10px' : '10px',
      }" indicator-color="transparent" v-model="activeTab" class=" no-indicator-tabs">
      <q-tab :class="tab.active ? 'bg-primary text-white' : 'bg-white'"  class="q-pl-sm" style="border-radius: 8px;   padding-left: 7px; padding-right: 7px" tag="a">
        <a :href="tab.href" :class="tab.active ? 'bg-primary text-white' : 'bg-white text-3F4354'" >
          <q-icon :class="tab.active ? 'text-white' : 'text-616161'" class="q-icon-28 text-3F4354" :name="tab.icon" />
        </a>
      </q-tab>
  </q-tabs>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
let props = defineProps(['tabs']);
</script>
