<template>
  <q-tabs  indicator-color="transparent" v-model="activeTab" class=" no-indicator-tabs">
      <q-tab v-for="(tab, index) of foot" :key="index"  :class="tab.active ? 'bg-primary text-white' : 'bg-white'"  class="q-pl-sm" style="border-radius: 8px; margin: 6px 10px;   padding-left: 7px; padding-right: 7px" tag="a">
        <a :href="tab.href" :class="tab.active ? 'bg-primary text-white' : 'bg-white text-3F4354'" >
          <q-icon :class="tab.active ? 'text-white' : 'text-616161'" class="q-icon-28 text-3F4354" :name="tab.icon" />
        </a>
      </q-tab>
  </q-tabs>
</template>

<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
let props = defineProps(['foot']);
</script>
