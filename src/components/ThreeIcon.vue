<template>
    <div class="q-item__label">
      <span v-for="icon in icons" class="float-right">
        <q-btn tag="button" flat dense  class="rounded-6  q-px-sm q-py-xs text-capitalize q-pt-sm q-mr-md">
          <template v-if="icon.icon">
            <q-icon @click="BudgtPopUP(icon)" v-if="$q.screen.gt.xs" :name="icon.icon" style="width: 24px; height: 24px;" class="text-black q-mr-sm" />
            <span @click="BudgtPopUP(icon)" class="text-3F4354 f-14 q-pt-sm font-source-family" v-if="$q.screen.gt.sm">{{ icon.text }}</span>
          </template>
          <template v-else-if="icon.image">
            <q-img @click="BudgtPopUP(icon)" v-if="$q.screen.gt.xs"  style="width: 24px; height: 24px;" class="text-black q-mr-sm" :src="icon.image" />
            <span @click="BudgtPopUP(icon)"  class="text-3F4354 f-14 q-pt-sm font-source-family" v-if="$q.screen.gt.sm">{{ icon.text }}</span>
          </template>
        </q-btn>
      </span>
    </div>
    <q-dialog v-model="Budgt">
      <q-card class="rounded-16 q-pt-none q-pb-sm pa-30 q-mt-xl full-width" >
        <q-card-section class="text-center q-pt-none">
          <div class="f-24 font-SSP600 q-pl-sm">
            Add Budget Goals  to Announcement
          </div>
        </q-card-section>
        <q-separator/>
        <q-card-section class="q-px-none q-pt-lg">
          <div class="f-18 font-SSP600 q-pl-sm">
            Select budget goal
          </div>
       </q-card-section>
       <q-card-section class="q-px-none"></q-card-section>
       <q-card-section class="q-pl-sm q-pb-xs q-pt-lg">
        <q-btn class="bg-primary text-capitalize text-white f-18 rounded-6 font-SSP600" >
            <span class="q-px-xl"  v-close-popup> Add </span>
        </q-btn>
        <q-btn flat dense class="f-18 rounded-6 font-SSP600 text-blue-grey-4 bg-lightgray" >
            <span class="q-px-xl"  v-close-popup>Cancel</span>
        </q-btn>
       </q-card-section>
    </q-card>
   </q-dialog>
   <q-dialog v-model="UpcomePopup">
      <q-card class="rounded-16 q-pt-none q-pb-sm pa-30 q-mt-xl w-520 full-width" >
        <q-card-section class="text-center q-pt-none">
          <div class="f-24 font-SSP600 ">
            Add Budget Goals  to Announcement
          </div>
        </q-card-section>
        <q-separator/>
        <q-card-section class="q-px-none q-pt-lg">
          <q-input
            debounce="500"
            filled
            placeholder="Search"
            />
       </q-card-section>
       <q-card-section class="q-px-none">
        <q-item class="justify-between q-px-none">
          <q-btn dense flat>
            <q-btn-content class="items-center">
              <q-icon class="text-3F4354" name="calendar_month"/>
              <span class="text-weight-bold q-pt-sm text-3F4354 f-18 q-pl-sm">05, Dec 2024</span>
            </q-btn-content>
          </q-btn>
          <q-spinner
                 color="black"
                 size="3em"
               />
          <div>
            <q-btn icon="event" round color="primary">
          <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="proxyDate">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>
           <div class="float-right">
              <q-btn flat dense class="q-mx-md f-10 rounded-6 q-py-sm">
                <span>
                  <img width="17.4px"  src="src/assets/backward.svg" />
                </span>
              </q-btn>
              <q-btn flat dense class="f-10 q-mx-md rounded-6 q-py-sm">
                <span>
                  <img width="17.4px"  src="src/assets/right-arrow.svg" />
                </span>
              </q-btn>
            </div>
          </div>
        </q-item>
       </q-card-section>
       <q-card-section class="q-pl-sm q-pb-xs q-pt-lg">
        <q-btn class="bg-primary text-capitalize text-white f-18 rounded-6 font-SSP600" >
            <span class="q-px-xl"  v-close-popup> Add </span>
        </q-btn>
        <q-btn flat dense class="f-18 rounded-6 font-SSP600 text-blue-grey-4 bg-lightgray" >
            <span class="q-px-xl"  v-close-popup>Cancel</span>
        </q-btn>
       </q-card-section>
    </q-card>
   </q-dialog>
   <q-dialog v-model="NotifyPop">
      <q-card class="rounded-16 q-pt-none q-pb-sm pa-30 q-mt-xl w-520 full-width" >
          <div class="q-px-none q-pt-sm text-center">
            <div class="f-24 font-SSP600">
              Notify
            </div>
          </div>
        <q-card-section class="q-px-none text-center">
          <div class="f-18">
            Are you sure you want to notify
            <span class="font-SSP600">everyone</span>
            about this announcement ?
          </div>
       </q-card-section>
       <q-card-section class="q-pt-lg q-pl-none text-center justify-center">
        <q-btn class="bg-primary text-capitalize text-white f-18 rounded-6 font-SSP600" >
            <span class="q-px-xl"  v-close-popup> Confirm </span>
        </q-btn>
        <q-btn flat dense class="f-18 rounded-6 font-SSP600 text-blue-grey-4 bg-lightgray" >
            <span class="q-px-xl"  v-close-popup>Cancel</span>
        </q-btn>
       </q-card-section>
    </q-card>
   </q-dialog>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
let props =defineProps(['icons'])
let Budgt = ref(false);
let UpcomePopup = ref(false)
let NotifyPop = ref(false)
function BudgtPopUP(icon){
  if(icon.text === 'Budget Goal' || icon.image === "src/assets/teerr.svg"){
    Budgt.value = true;
  }else if(icon.text === 'Upcoming Event' || icon.image === 'src/assets/jul-17.svg'){
    UpcomePopup.value = true;
  }else if(icon.text === 'No members will be notified' || icon.icon === 'notifications'){
    NotifyPop.value = true;
  }
}
</script>
