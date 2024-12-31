<template>
    <div v-for=" (side, index) in sidebtn"  @click="joinbtn(side)"  :class="side.color" class="text-center rounded-10  q-mb-lg">
      <q-btn :href="side.href"  flat dense class="py-12  text-white text-capitalize"  :style="{backgroundColor : props.bgcolor}" >
        <template v-if="side.image">
          <q-img :width="side.width" class="q-mr-sm"  :src="side.image" />
          <span :class="side.textcolor" class="f-16 font-SSP600  q-ml-xs">{{ side.text }}</span>
        </template>
        <template v-else-if="side.icon" >
          <q-icon :class="side.textcolor" width="27.44px" class="q-mr-sm f-16 " style="padding: 2px 0px;" :name="side.icon" />
          <span  class="font-SSP600 f-16 font-source-family q-ml-xs" :class="side.textcolor">{{ side.text }}</span>
        </template>
      </q-btn>
    </div>
    <q-dialog v-model="joinpopup">
      <q-card class="q-card pa-30 q-mt-xl rounded-16 w-520 full-width">
        <q-card-section class="q-px-none q-pt-none">
          <div class="f-24 text-3F4354 font-SSP600">Join Club</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-px-none q-mt-md q-mb-sm">
          <div class="f-18 text-3F4354 font-SSP600">
            Club Code
          </div>
        </q-card-section>
        <q-form>
          <q-field class="f-14 font-M700">
            <q-input filled square v-model="text"  class="full-width" :dense="dense" />
          </q-field>
          <div class="q-card__actions justify-start q-card__actions--horiz row q-pt-lg q-pl-none">
            <q-btn class="bg-primary text-capitalize   text-white f-18 rounded-6 font-SSP600" >
              <span class="q-px-xl q-my-xs"  v-close-popup>Join</span>
            </q-btn>
            <q-btn flat dense class="bg-white text-capitalize  f-18 rounded-6 font-SSP600" >
              <span class="q-px-xl q-py-sm q-my-xs text-3F4354"  v-close-popup>Cancel</span>
            </q-btn>
          </div>
        </q-form>
      </q-card>
    </q-dialog>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
let joinpopup = ref(false)
let props = defineProps(['sidebtn','bgcolor' ])
// let props =  defineProps({
//   bgcolor : String,
//   sidebtn : String
// })
let bgColor = props.bgcolor


// let bgcolor = defineProps(['bgCo'])
function joinbtn(side){
  if(side.text === 'Join Club'){
    joinpopup.value = true;
  }
  else if (side.text === 'Create Club') {
    // Navigate to the "Create Club" page
    this.$router.push({ name: 'create' }); // Ensure "CreateClub" matches the route name
  }
}


</script>


<style scoped>


</style>
