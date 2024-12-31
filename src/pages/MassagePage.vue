<template>
  <q-page class=" q-page q-pa-lg background-grey" :class="$q.screen.gt.md ? 'container' : ''">
      <div class="q-py-lg row" :class="$q.screen.gt.sm ? 'q-col-gutter-lg':''">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2">
          <div class="q-mb-lg">
            <YourClubs :clubs="clubs" />
          </div>
          <div class="q-mb-lg">
            <YourClubs :clubs="office" />
          </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-7">
        <div class="bg-white mesg-body rounded-12 q-mb-lg">
         <div class="titlebar bg-gray-4 rounded-top-8">
          <q-item class=" q-py-xs bg-black-light">
            <q-avatar style="border: 1px solid black;" class="text-white q-pr-sm  q-chip--colored bg-black-foreground">
              <q-img  style="width: 35px;" src="src/assets/Cluby-C.svg" />
            </q-avatar>
            <q-item-section class="q-ml-md">
              <q-item-label class="f-20 font-ssp600 text-grey-9">
                sohail
              </q-item-label>
            </q-item-section>
          </q-item>
          </div>
          <div class="" style="height: 48vh;">
       </div>
      <div class="q-px-none q-pb-md messagesend border-bottom-10 rounded-10">
        <div class="q-px-xs">
          <q-item class="q-mb-none q-pb-none">
            <q-avatar class="text-white q-mr-sm q-chip--colored bg-black-light">
              <q-img style="width: 32px;" src="src/assets/Cluby-C.svg" />
            </q-avatar>
            <q-avatar class="text-3F4354 q-mr-md q-chip--colored">
              <q-icon name="add"  />
            </q-avatar>
            <q-item-section class="bg-black-light  rounded-8">
              <input class="q-field__native q-pl-md q-placeholder" tabindex="0" placeholder="Type Message Here"  type="text">
            </q-item-section>
              <PublishBtn :publish="send" />
          </q-item>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 col-xl-3">
        <OfficeCard :officeCard="CardData"/>
      <div class="col-12">
        <ActiveMasge :ActiveData="activeArray"/>
      </div>
      <div class="col-12">
      </div>
    </div>
  </div>
 </q-page>
</template>
<script setup>
import ActiveMasge from 'src/components/ActiveMasge.vue';
import OfficeCard from 'src/components/OfficeCard.vue';
import PublishBtn from 'src/components/PublishBtn.vue';
import YourClubs from 'src/components/YourClubs.vue';
import { ref } from 'vue';
const clubs = [
  {
    head: "Club Messages",
    image: "src/assets/Cluby-C.svg",
    name: "sohail",
    code:"coding"
  }
];
const office = [
  {
    head: "Officer Messages ",
    image: "src/assets/Cluby-C.svg",
    name: "sohail",
    code:"coding"
  }
];
const CardData = [
  {
    title: "Officers",
    img1: "src/assets/Cluby-C.svg",
    name: "Sohail Ahmed",
    img2: "src/assets/admin.svg",
    admin: "admin",
    member: "Members (0)"
  }
]
const activeArray = [
  {
    title: " Active Poll",
    active: "No Active Polls"
  },
  {
    title: "Message Media",
    active: "No Media"
  },
];
let send = [
  {
    text: "Send",
    class: "bg-primary"
  }
];
</script>
<style>
.mesg-body {
    position: relative;
    z-index: 100;
}
.titlebar {
    position: sticky;
    top: 0px;
    z-index: 999;
}
.bg-gray-4 {
    background: #F0F0F0;
}
.rounded-top-8{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.hidden{
  display: none
}
.font-SSP700{
  font-weight: 700;
}
.font-family-none {
    font-family: none !important;
}
.bg-black-foreground {
    background-color: #bfbfbf !important;
}
.rounded-50 {
    border-radius: 50px;
}
.overflow-hidden {
    overflow: hidden !important;
}
.scroll-area-laptop[data-v-1b2a0b24] {
    height: calc(-310px + 100vh);
}
</style>
