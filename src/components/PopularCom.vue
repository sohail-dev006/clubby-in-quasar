<template>
   <q-item-section>
      <q-item-label class="">
        <span v-for="pop in props" class="float-right">
          <q-btn  tag="button" :class="$q.screen.lt.sm ? 'q-px-sm ' : 'q-px-md q-mx-sm'" flat dense  class="rounded-6  bg-black-light  q-py-sm q-mr-xs">
            <q-img  style="width: 24px; height: 14px;" class="text-black  q-mr-sm" :src="pop.img" />
            <span class="f-14 text-757575 font-ssp600  text-capitalize"> {{ pop.text }}</span>
          </q-btn>
        </span>
      </q-item-label>
    </q-item-section>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['props'])
</script>
