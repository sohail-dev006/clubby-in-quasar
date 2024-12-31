<template>
    <q-expansion-item v-for="club in clubs" :label="club.head" class="bg-white font-SSP600 q-pa-sm text-3F4354 f-16 rounded-11">
      <q-list>
        <q-item class="q-py-md rounded-10 bg-black-light">
          <div class="q-pr-md border-color-black  circle-side ">
            <q-img class="q-mt-xs" style="width: 25px; height: 25px" :src="club.image" />
          </div>
          <q-item-section class="q-pt-none q-pl-sm">
            <q-item-label class="f-14 text-3F4354">
              {{club.name}}
              <q-item-label class=" text-757575">
                {{club.code}}
              </q-item-label>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
</template>
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
let props = defineProps(['clubs'])
</script>
