<template>
  <q-page class=" background-grey q-pa-lg" :class="$q.screen.gt.md ? 'container' : ''">
    <div class="  q-py-lg row" :class="$q.screen.gt.sm ? 'q-col-gutter-lg':''">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
        <SideBtn :sidebtn="sidebtn"/>
        <div  class="q-mt-lg">
          <YourClubs :clubs="clubs"/>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7 col-sm-12 col-xl-7">
        <div class="row q-mb-lg">
          <q-card class="full-width budget-bg rounded-11 text-white">
            <q-card-section>
              <div class="q-pl-xs q-pt-xs f-18 font-SSP600">
                Total Balance
                <span class="q-pl-sm">(sohail)</span>
              </div>
            </q-card-section>
            <q-card-section class="q-pb-none q-pt-lg">
              <div class="text-bold font-M800 monrope f-40"> $0</div>
            </q-card-section>
              <q-card-section class="q-pt-md">
                <div class="f-20 font-ssp400 text-white q-pl-xs">
                  November 26, 2024
                </div>
              </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-md q-mb-lg row">
          <div class="col-12">
            <q-card class="rounded-11">
              <q-tabs v-model="tab" dense flat class="bg-grey-2 text-grey-7 no-tab-indicator" align="justify" indicator-color="transparent">
                <q-tab class="text-3F4354 text-capitalize font-SSP600 f-16 font-source-family" name="mails" label="Activity" /> <q-tab class="text-3F4354 text-capitalize font-SSP600 f-16 font-source-family" name="alarms" label="Stats" /> <q-tab class="text-3F4354 text-capitalize font-SSP600 f-16 font-source-family" name="movies" label="Goals" />
              </q-tabs>
              <q-tab-panels v-model="tab" animated class="">
                <q-tab-panel name="mails">
                  <div class="font-SSP600 q-pb-sm font-source-family q-pl-sm text-grey-9 q-pl-md f-18" data-v-0eba3091="">Budget Activity </div>
                  <div class="f-18 text-center q-py-md text-3F4354 font-source-family" data-v-0eba3091=""> Budget Activity Not Found </div>
                </q-tab-panel>
                <q-tab-panel name="alarms">
                  <div class="q-tab-panels q-panel-parent" data-v-0eba3091="">
                    <div class="q-panel scroll" role="tabpanel" style="--q-transition-duration: 300ms;">
                      <div class="q-tab-panel" role="tabpanel" data-v-0eba3091="">
                        <div class="q-item q-item-type row no-wrap" role="listitem" data-v-0eba3091="">
                          <div class="q-item__section column q-item__section--main justify-center" data-v-0eba3091="">
                            <div class="q-item__label text-3F4354 f-20 font-SSP600" data-v-0eba3091="">Total Balance ( Dollar ) </div>
                          </div>
                          <div class="q-item__section column q-item__section--side justify-center" data-v-0eba3091="">
                            <div class="rounded-30" data-v-0eba3091="">
                              <label class="q-field row no-wrap items-start q-field--filled q-select q-field--auto-height q-select--without-input q-select--without-chips q-select--single q-field--float rounded-8 w-117 f-14 font-SSP600" for="f_60248d44-d77d-41dc-ad20-c9a4bad68641" data-v-0eba3091="">
                                <div class="q-field__inner relative-position col self-stretch">
                                  <div class="q-field__control relative-position row no-wrap" tabindex="-1">
                                    <div class="q-field__control-container col relative-position row no-wrap q-anchor--skip">
                                      <div class="q-field__native row items-center">
                                        <span>1 Week</span>
                                        <input class="q-select__focus-target" id="f_60248d44-d77d-41dc-ad20-c9a4bad68641" readonly="" tabindex="0" role="combobox" aria-readonly="false" aria-autocomplete="none" aria-expanded="false" aria-controls="f_60248d44-d77d-41dc-ad20-c9a4bad68641_lb">
                                      </div>
                                    </div>
                                    <div class="q-field__append q-field__marginal row no-wrap items-center q-anchor--skip">
                                      <i class="q-icon notranslate material-icons q-select__dropdown-icon" aria-hidden="true" role="presentation">arrow_drop_down</i>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-tab-panel>
              <q-tab-panel name="movies">
                <q-panel>
                  <q-tab-panel class="q-pa-none">
                    <div class="q-pl-lg text-3F4354 font-source-family f-18 font-SSP600 q-pb-sm">
                      Goals
                    </div>
                    <div class="f-16 text-center text-3F4354 font-source-family q-py-md">
                          Budget Goal Not Found
                    </div>
                  </q-tab-panel>
                </q-panel>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
   <div class="col-12 col-md-3 col-lg-3 col-xl-3">
    <div class="row">
      <div class="col-12">
        <div class="q-mb-lg bg-white rounded-11 q-px-md q-py-md">
          <div class="q-pa-none">
            <q-item class="q-pa-none">
              <q-item-section class="column font-SSP600 f-16 q-pl-sm"> Officers</q-item-section>
              <q-item-section>
                <q-btn flat dense class="text-capitalize text-light-blue fund-btn font-ssp600">
                  <div class="q-mr-md" style="width: 16px; height: 20px">
                    <img class="q-pt-xs  text-light-blue"   src="src/assets/Vectortest.svg" alt="">
                  </div>
                  <span class="">send funds</span>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-btn flat dense  @click="officerbtn = true">
            <q-item  class="q-px-sm q-py-xs">
              <div class="q-pr-md">
                <q-img class="q-mt-sm " style="width: 29px; height: 30px" src="src/assets/Cluby-C.svg" />
              </div>
              <q-item-section class="q-pt-none">
                <q-item-label style="height: 24px;" class="f-14 font-SSP600 text-capitalize text-3F4354">
                  Sohail Ahmed
                  <span>
                    <q-btn class="q-pt-none" flat dense>
                      <q-img style="width: 15.42px; height: 15.42px;" src="src/assets/admin.svg"/>
                    </q-btn>
                  </span>
                </q-item-label>
                  <q-item-label class="text-capitalize text-757575" style="margin-right: 70px;">
                    <span class="q-pl-xs">admin</span>
                  </q-item-label>
              </q-item-section>
            </q-item>
          </q-btn>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="q-mb-lg bg-white rounded-11 q-px-sm q-py-md">
          <div class="q-pa-none q-px-lg">
            <q-item class="q-pa-none">
              <q-item-section class="column font-SSP600 f-16 text-grey-10"> Budget Goals </q-item-section>
              <q-item-section class="q-pl-md q-pt-none q-pb-sm q-pr-none">
                <q-btn flat dense class="text-capitalize text-light-blue  fund-btn font-ssp600" :class="$q.screen.gt.md ? 'q-pl-sm':'q-pl-xs'">
                  <div class="q-mr-md" style="width: 16px; height: 20px">
                    <q-icon name="add" />
                  </div>
                  <span class="q-pt-xs">Create Goal</span>
                </q-btn>
              </q-item-section>
            </q-item>
            <div class="">
              <div class="bg-white q-mt-sm rounded-10">
                <div class="text-center rounded-10 q-mt-md bg-black-light">
                  <div class="q-py-md text-capitalize f-15 font-ssp600 text-grey-8">
                    No Budget Goals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>

  </q-page>
</template>
<script setup>
import SideBtn from 'src/components/SideBtn.vue';
import YourClubs from 'src/components/YourClubs.vue';
import { ref } from 'vue';
let  tab = ref('mails')
const clubs = [
  {
    head: "Your Club",
    image: "src/assets/Cluby-C.svg",
    name: "sohail",
    code:"coding"
  }
];
const sidebtn =[
  {
    icon: "add",
    color: "bg-primary",
    text: "Send Funds",
  },
  {
    image: "src/assets/Vectortest.svg",
    width: "18.44px",
    text: "Send Funds",
    color: "bg-white",
    textcolor: "text-3F4354",
    href: "create"
  },

]
</script>
<style>
.budget-bg {
    background-image: url(src/assets/budget-bg.png), linear-gradient(266.22deg, #00a3cb 2.06%, #0073b3 97.4%);
    background-size: cover;
}
.font-M800 {
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
}
.f-40 {
    font-size: 40px;
}
.rounded-30 {
  border-radius: 30px !important;
}
.w-117 {
    width: 117px;
}
.no-tab-indicator .q-tabs__content .q-tab .q-tab__content .q-tabs__indicator {
   display: none !important;
}
.no-tab-indicator{
  padding: 24px 0px;
}
.no-tab-indicator .q-tab{
  border-radius: 8px !important;
  margin: 0px 24px;
  background: #e5f0f7 !important;
  color: #0d47a1 !important;
  padding: 0 16px;
  min-height: 48px;
}
.text-light-blue {
    color: #00a3cb !important;
}

  .q-tabs .q-tabs__indicator {
    display: none !important;
  }

  /* Remove active tab shadow and other focus-related effects */
  .q-tabs .q-tab--active,
  .q-tabs .q-tab:focus {
    box-shadow: none !important;
  }

</style>
