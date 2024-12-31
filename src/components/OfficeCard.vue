<template>
    <div v-for="office in officeCard" class="bg-white rounded-10 clubmessages">
      <div class="q-py-md q-px-sm">
        <div class="q-mb-none q-pt-sm q-pl-md f-16 text-left font-ssp600 text-grey-9">{{ office.title }} </div>
        <q-btn flat dense  @click="CardBtn(office)" >
          <q-item  class="q-pt-sm justify-start" style="margin-right: 52px;">
            <div class="q-pr-md">
              <q-img class="q-mt-sm " style="width: 29px; height: 30px" :src="office.img1" />
            </div>
            <q-item-section class="q-pt-none">
              <q-item-label class="f-14 text-capitalize q-pl-xs font-ssp600 text-3F4354">
                <span class="q-pt-xs">{{ office.name }}</span>
                <span>
                  <q-btn class="q-pt-none" flat dense>
                    <q-img style="width: 15.42px; height: 15.42px;" :src="office.img2"/>
                  </q-btn>
                </span>
                <q-item-label class="text-capitalize " style="margin-right: 70px;">
                  <span class="text-757575 f-14">{{ office.admin }}</span>
                </q-item-label>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-dialog v-model="officerbtn">
            <q-card class="py-20 q-px-lg rounded-16 w-520 full-width">
              <q-card-section class=" q-pt-none">
                <div class="f-24 text-3F4354 font-SSP600">All Members</div>
              </q-card-section>
              <q-separator />
              <q-card-section class="q-px-none q-pb-none q-mb-none">
                <q-input class="q-py-none" filled  v-model="text" label="Label" :dense="dense">
                  <template class="q-py-none q-my-none" v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </q-card-section>
              <q-card-section class="q-pb-sm">
                <div class="f-18 text-3F4354 font-SSP600">
                  Officers (1)
                </div>
              </q-card-section>
              <q-card-section class="q-py-none q-pr-none">
                <q-item class="q-pt-sm q-pl-none q-pr-none">
                  <div class="q-pr-md q-pt-xs">
                    <q-img class="q-mt-sm " style="width: 29px; height: 30px" src="src/assets/Cluby-C.svg" />
                  </div>
                  <q-item-section class="q-pt-none">
                    <q-item-label class="f-14 font-ssp600 text-3F4354">
                      Sohail Ahmed
                      <span>
                        <q-btn class="q-pt-none" flat dense>
                          <q-img style="width: 15.42px; height: 15.42px;" src="src/assets/admin.svg"/>
                        </q-btn>
                      </span>
                      <q-item-label class="text-capitalize text-757575" style="margin-right: 80px;">
                        admin
                      </q-item-label>
                    </q-item-label>
                  </q-item-section>
                  <q-btn flat dense class="bg-black-light  q-py-md q-px-md" style="border-radius: 30px;"
                  >
                  <q-icon style="font-size: 1.715em;" name="more_horiz" />
                  <q-menu>
                    <q-list style="min-width: 120px;">
                      <q-item clickable>
                        <q-item-section>New tab</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>New incognito tab</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable>
                        <q-item-section>Recent tabs</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>History</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Downloads</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable>
                        <q-item-section>Settings</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable>
                        <q-item-section>Help &amp; Feedback</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item>
            </q-card-section>
          <q-card-section class="q-pl-sm q-pt-sm">
            <div class="f-18 text-3F4354 font-SSP600">
              Members (0)
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-btn>
    <div class="q-pa-none">
      <div class="q-pb-sm q-pl-md q-pt-sm">
        <div class="q-ma-none text-3F4354 text-left q-pt-xs font-SSP600 f-16">
          {{ office.member }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
let props = defineProps(['officeCard'])
let officerbtn = ref(false)
function CardBtn(){
  officerbtn.value = true;
}
</script>
