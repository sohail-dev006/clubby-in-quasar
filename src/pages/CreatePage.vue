<template>
  <q-page class="background-grey q-pa-md " :class="$q.screen.gt.md ? 'container': ''">
    <div class="row q-col-gutter-lg  q-py-lg">
      <div class="col-12 col-md-5 q-pb-lg">
        <q-form>
          <q-card class="q-pa-lg card-shad rounded-16">
            <q-card-section class="q-px-none q-pt-none">
              <div class="f-24 font-SSP600 text-3F4354">Club Details</div>
              <q-separator />
            </q-card-section>
              <q-card-section class="q-pl-none">
                <div class="f-18 text-3F4354 font-SSP600">Choose Club Icon</div>
              </q-card-section>
              <div class="w-145 relative-position">
                <q-img class="bg-grey-5 circle-club-preview" style="height: 100px; width: 100px;" src="src/assets/Cluby-C.svg"  alt=""/>
                <div class=""style="position: absolute; left: 62px; bottom: -22px; margin-bottom: -9px;">
                  <q-icon style="font-size: 50px;">
                    <img src="src/assets/emoji01.svg" alt="">
                  </q-icon>
                </div>
              </div>
              <q-card-section class="q-px-none q-pb-none">
                <div class="f-18 text-3F4354 font-SSP600">
                  Club Name
                </div>
              </q-card-section>
              <q-card-section class="q-px-none">
                <q-input class=" text-3F4354 rounded-8" filled v-model="ph" placeholder="Club Name Here"  />
              </q-card-section>
              <div class="f-18 text-3F4354 font-SSP600">
                Club Description
                <span class="f-12 text-3F4354">(Optional)</span>
              </div>
              <q-card-section class="q-px-none">
                <q-input v-model="text" filled type="textarea"   placeholder="Put your club description here. Tell the people what you're all about!" />
              </q-card-section>
              <div class="row">
                <div class="f-18 text-3F4354 q-py-md font-SSP600 col-9">
                  Club Show budget to all members
                </div>
                <div class="f-18 q-py-md font-SSP600 col-3 text-right">
                  <q-toggle v-model="value" />
                </div>
              </div>
              <q-card-section class="q-px-none q-pb-sm q-pt-none">
                <div class="f-18 text-3F4354 font-SSP600 q-px-none">
                  Club Color
                </div>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#1B1B1B"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#462AAB"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#2D6FAD"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#47A1C7"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#FBE64D"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#55B447"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#D8504A"></circle>
                    </svg>
                  </q-btn>
                  <q-btn
                    class="q-btn--dense q-ma-xs shadow-2"
                    style="font-size: 14px; border-radius: 50px;"
                    size="lg"
                    rounded
                    aria-label="Icon button"
                  >
                  <svg slot="icon" width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#F3A83B"></circle>
                    </svg>
                  </q-btn>
              </q-card-section>
              <q-card-section class="row q-pl-none q-pt-lg">
                <q-btn class="text-white background-color text-capitalize rounded f-18 rounded-6 font-SSP600">
                  <span class="q-px-xl"> Create a Club </span>
                </q-btn>
                <q-btn dense flat  class="f-28  rounded-6 font-SSP600 q-ml-md text-lightgrey">
                  <span class="q-px-xl text-3F4354">Cancel</span>
                </q-btn>
              </q-card-section>
          </q-card>
        </q-form>
      </div>
    <div class="col-12 col-md-7">
      <q-card class="rounded-16 q-pa-lg">
        <q-card-section class="q-px-none q-pt-none q-pb-lg">
          <div class="f-24 text-3F4354 font-SSP600 text-center">
              Club Preview
          </div>
        </q-card-section>
          <q-card-section class="bg--light text-center rounded-16 bg-black-light">
            <div class="q-pt-md icon-border">
              <div class="border-color- bg--foreground circle border-color-black bg-grey-4" style="overflow: hidden; width: 100px; height: 100px; padding: 0px;">
                <img class="text-center" style="height: 88px; width: 89px; padding-top: 5px;" src="src/assets/Cluby-C.svg" alt="">
              </div>
            </div>
            <div class="text-1B1B1B q-pt-md q-pb-xs font-SSP600 f-22">
              Club Name Here
            </div>
            <span class="text-3F4354 font-source-family">Created by Sohail Ahmed</span>
            <div class="q-px-none q-pt-lg justify-center">
              <q-btn dense flat class="f-18  bg-black text-white rounded-6 q-px-md q-mr-sm font-SSP500">
                <q-icon width="30px" class="q-mr-sm" name="person_add_alt" />
                <span v-if="$q.screen.gt.sm" class="f-16 q-ml-xs text-capitalize q-py-xs font-source-family">Join</span>
              </q-btn>
              <q-btn dense flat class="f-18 bg-white text-black rounded-6 q-pl-sm q-pr-md q-ml-sm">
                <q-icon class="q-mr-sm" name="share" />
                <span v-if="$q.screen.gt.sm" class="f-16 text-capitalize font-SSP600 q-py-xs text-1B1B1B">Share Club</span>
              </q-btn>
            </div>
          </q-card-section>
          <q-card-section class="q-px-none">
            <div class="text-1B1B1B f-18  font-ssp400 q-pt-sm">
              Descriptions
            </div>
          </q-card-section>
          <q-card-section class="q-pa-none font-source-family text-1B1B1B f-16">
            Put your club description here. Tell the people what you're all about!
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- <PracticeCom/> -->
    <!-- <ParentComponent/> -->
    <!-- <RecursiveCom/> -->
  </q-page>
</template>
<script setup>
import ParentComponent from 'src/components/ParentComponent.vue';
import PracticeCom from 'src/components/PracticeCom.vue';
import RecursiveCom from 'src/components/RecursiveCom.vue';
import { ref } from 'vue';
let ph = ref('')
let value = ref(false)
</script>
<style scoped>
.circle-club-preview {
    padding: 15px;
    display: inline-flex;
    border-radius: 60px;
}
.w-145{
  width: 145px !important;
}
.card-shad{
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f !important;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
}
/* .font-SSP600, .font-ssp600 {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
} */
</style>
