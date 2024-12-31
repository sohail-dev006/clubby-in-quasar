<template>
    <q-btn  v-for="btn in btns" @click="ShowPopup(btn)" :class="btn.text === 'Leave' ? 'bg-black text-white ' : 'bg-white text-1B1B1B'" flat dense class="text-1B1B1B rounded-6  text-capitalize f-14 text-1B1B1B text-bold q-py-sm q-px-md" style="font-size: 13px; border-radius: 3px;" :style="btn.text === 'Leave' ? 'margin: 0px 8px;' : ''"  >
      <template v-if="btn.icon">
        <q-icon @click="ShowPopup(btn)" class="q-icon-7 q-mr-sm" :name="btn.icon" />
      </template>
      <template v-else-if="btn.image">
        <img @click="ShowPopup(btn)" :src="btn.image" alt="Button Image" class="q-icon-7 q-mr-sm" />
      </template>
      <span v-if="$q.screen.gt.sm" >{{ btn.text }}</span>
    </q-btn>
    <q-dialog v-model="sharbtn">
      <q-card class="rounded-16 mx-w450 bg-grey-3 q-pb-sm full-width" style="border: 5px solid rgb(207, 207, 207);">
        <q-toolbar class="bg-white q-py-sm q-mb-none">
          <q-toolbar-title>
            <span class="font-SSP600 text-3F4354">
              Share to friends
            </span>
          </q-toolbar-title>
          <q-btn flat dense v-close-popup icon="close" name="close" />
        </q-toolbar>
        <q-card-section class="text-center q-pb-none">
          <div class="f-16 text-3F4354">
            Select how do you want to share
            <br>
            sohail Club
          </div>
        </q-card-section>
        <q-card-section class="text-center q-my-none">
          <q-btn dense flat  class="f-30 bg-white text-blue-6 deep-font-size-desktop text-capitalize font-SSP500 bg-white q-pa-md" style="font-size: 18px;">
            <span class="column">
              <q-icon class="" name="textsms" />
              <span>SMS</span>
            </span>
          </q-btn>
          <q-btn dense flat  class="f-30 bg-white text-blue-6 q-mx-sm deep-font-size-desktop text-capitalize font-SSP500 bg-white q-pa-md" style="font-size: 18px;">
            <span class="column">
              <q-icon class="q-ml-sm" name="mail" />
              <span>Email</span>
            </span>
          </q-btn>
          <q-btn dense flat  class="f-30 bg-white text-blue-6 deep-font-size-desktop text-capitalize font-SSP500 bg-white q-pa-md" style="font-size: 18px;">
            <span class="column text-center">
              <q-icon class="q-ml-md" name="qr_code_2" />
              <span>QR Code</span>
            </span>
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  <q-dialog v-model="leavebtn">
    <q-card class="rounded-16 q-pt-none q-pb-sm pa-30 q-mt-xl" >
      <q-card-section class="text-center q-pt-none">
        <div class="f-24 font-SSP600 text-center">
          Leave sohail
        </div>
      </q-card-section>
        <q-card-section class="q-px-none">
          <div class="f-14 font-SSP600 text-center">
            Are you sure you want to leave
            <span class="text-black text-bold">
              sohail ?
            </span>
          </div>
        </q-card-section>
        <q-card-section class="q-px-xs flex q-pt-lg q-pb-xs justify-center">
          <q-btn class="bg-primary text-capitalize text-white f-18 rounded-6 font-SSP600" >
            <span class="q-px-xl q-py-xs"  v-close-popup>confirm</span>
          </q-btn>
          <q-btn flat dense class="f-18 rounded-6 font-SSP600 text-blue-grey-4 bg-lightgray" >
            <span class="q-px-xl q-py-xs"  v-close-popup>Cancel</span>
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="editbtn">
      <q-card class="pa-30 rounded-16 w-520 full-width">
        <q-card-section class="q-px-none q-pt-none flex items-center justify-between">
          <div class="f-24 font-SSP600">Club Settings</div>
          <q-btn dense flat class="bg-grey-3 text-grey-8 rounded-6">
            <q-icon name="delete" />
            Delete Club
          </q-btn>
        </q-card-section>
        <q-separator class="" />
        <q-card-section class="q-px-none">
          <div class="f-18 q-pb-md font-SSP600">
            Club Icon
          </div>
          <q-form>
            <div class="w-145 relative-position">
              <q-icon class="bg-black-light circle-club-preview"  style="font-size: 58px;height: 100px;width: 100px;"/>
              <div style="position: absolute; left: 68px; bottom: -1px; margin-bottom: -39px;">
                <span style="font-size: 50px;"  >
                  <img src="src/assets/emoji01.svg" alt="">
                </span>
              </div>
            </div>
            <q-card-section class="">
              <div class="f-18 q-py-md  font-SSP600">Club Name</div>
              <q-input class="full-width" filled v-model="text" :dense="dense" />
            </q-card-section>
            <q-card-section class="">
              <div class="f-18 q-py-md  font-SSP600">Club Description</div>
              <q-input v-model="text" filled type="textarea" />
            </q-card-section>
            <q-card-section class="">
              <div class="f-18 q-py-md q-px-none font-SSP600">Goal Color</div>
              <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button">
                <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="25" fill="#1B1B1B"></circle>
                </svg>
              </q-btn>
              <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button"
              >
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#462AAB"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button" >
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#2D6FAD"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button" >
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#47A1C7"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button" >
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#FBE64D"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button">
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#55B447"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button" >
              <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#D8504A"></circle>
              </svg>
            </q-btn>
            <q-btn class="q-btn--dense q-ma-xs shadow-2" style="font-size: 14px; border-radius: 50px;" size="lg" rounded aria-label="Icon button" > <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#F3A83B"></circle>
            </svg>
          </q-btn>
        </q-card-section>
        <div class="row">
          <div class="f-18 q-py-md font-SSP600 col-9">
            Show budget to all members
          </div>
          <div class="f-18 q-py-md font-SSP600 col-3 text-right">
            <q-toggle v-model="value" />
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-card-section class="row q-pl-none q-pt-lg">
      <q-btn class="text-white background-color text-capitalize rounded f-18 rounded-6 font-SSP600" v-close-popup>
        <span class="q-px-xl">  Save  </span>
      </q-btn>
      <q-btn dense flat  class="f-28  rounded-6 font-SSP600 q-ml-md text-lightgrey" v-close-popup>
        <span class="q-px-xl">Cancel</span>
      </q-btn>
    </q-card-section>
  </q-card>
  </q-dialog>
</template>
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
let value = ref(false);
let sharbtn = ref(false)
let leavebtn =ref(false)
let editbtn = ref(false)
let props = defineProps(['btns']);
function ShowPopup(btn){
  if((btn.text === 'Share Club' || btn.icon === 'share') && btn.text !== ""){
    sharbtn.value = true;
  }else if(btn.text === 'Leave' || btn.image === 'src/assets/exit.svg'){
    leavebtn.value = true;
  }else if(btn.text === 'Edit Club' || btn.icon === 'border_color'){
    editbtn.value = true;
  }
}
</script>
