<template>
  <div class="q-mt-lg">
    <q-expansion-item v-for="event of Events" class="bg-white text-left text-grey-9 q-pa-sm font-SSP900 f-16 rounded-11">
      <template v-slot:header>
        <q-section class="font-SSP600">
          {{ event.title }}
        </q-section>
          <q-item-section class="q-pl-md q-pb-sm">
          <q-img style="width: 16px; height: 16px;" :src="event.image" />
        </q-item-section>
      </template>
      <q-list>
       <q-item>
        <q-item-section class="q-py-none">
          <span class="flex cursor-pointer f-16 font-SSP600 text-grey-9"></span>
          <div class="">
            <div class="q-py-sm rounded-10">
              <div class="text-center rounded-10 bg-black-light">
                <div class="q-py-md text-center text-3F4354 text-capitalize f-15 font-ssp600">
                  {{ event.text }}
                </div>
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
     </q-list>
    </q-expansion-item>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['Events']);
</script>
