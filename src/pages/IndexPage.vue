<template>
  <q-page class="background-grey q-pa-lg clubmessages" :class="$q.screen.gt.md ? 'container' : ''" >
    <div class="q-py-lg row" :class="$q.screen.gt.sm ? 'q-col-gutter-lg' : ''">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2" v-if="$q.screen.gt.sm" >
        <SideBtn :sidebtn="sidebtn" />
        <div class="q-mt-lg">
          <YourClubs :clubs="clubs" />
        </div>
      </div>
      <!-- For only less then md screen  -->
     <div class="col-6 q-pa-sm q-pb-md q-mb-sm" v-if="$q.screen.lt.md" :class="$q.screen.lt.sm ? 'padd-left' : 'padd-left-sm'">
       <q-btn @click="drawer = !drawer" class="bg-white shadow-4 q-px-sm q-py-sm" style="border-radius: 8px" >
         <q-icon class="text-0070B2" name="arrow_forward_ios" />
       </q-btn>
       <q-drawer v-model="drawer" :width="310" :breakpoint="1024" show-if-above overlay bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" >
         <div class="q-ma-md col-md-3 col-xs-12">
           <div class="q-pa-sm">
             <SideBtn :sidebtn="sidebtn" />
             <div class="q-mt-lg">
               <YourClubs :clubs="clubs" />
             </div>
           </div>
         </div>
       </q-drawer>
     </div>
     <div class="col-6 q-pa-sm q-pb-md q-mb-sm text-right" v-if="$q.screen.lt.md" >
       <q-btn @click="drawerRight = !drawerRight" class="bg-white shadow-4 q-pl-sm q-pr-xs q-py-sm text-center" style="border-radius: 8px">
         <q-icon class="text-0070B2 q-ml-xs" name="arrow_back_ios" /></q-btn>
           <q-drawer side="right" v-model="drawerRight" :width="300" :breakpoint="1024" show-if-above overlay bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" >
             <div class="q-ma-md col-md-3 col-xs-12">
               <div class="bg-white rounded-10">
                 <div class="q-pa-md q-px-lg">
                   <div class="text-capitalize text-left q-mb-sm q-mt-xs lh-24 f-16 font-ssp600 text-grey-9">
                     about
                   </div>
                   <div class="font-family2 font-style-normal f-14 lineH-24">
                     <div class="q-mb-sm text-left text-grey-9">coding</div>
                   </div>
                 </div>
               </div>
               <div class="q-mt-lg">
                 <OfficeCard :officeCard="cardArray" />
               </div>
               <div class="q-mt-lg">
                 <EventComp :Events="EventData" />
               </div>
               <div class="bg-white rounded-10 q-mt-lg">
                 <div class="q-pa-lg">
                   <div class="text-capitalize text-left font-SSP600 f-16 text-grey-9">
                     Budget Goals
                     <span class="float-right">
                       <q-toggle
                         style="padding-right: 0px; height: 20px"
                         class="q-pa-none f-14 togg q-ma-none"
                         v-model="value"
                         color="green"
                         label="Show Public"
                         left-label
                       />
                     </span>
                   </div>
                 </div>
                 <div class="q-mt-sm q-pt-md rounded-10">
                   <div class="text-center rounded-10 bg-black-light">
                     <div
                     class="q-py-md text-3F4354 text-capitalize f-15 font-ssp600"
                     >
                     No Upcoming Events
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </q-drawer>
      </div>
 <!-- For less then md is end here  -->
  <div class="col-md-6 col-lg-7 col-sm-12 col-xs-12">
    <div class="row bg-white rounded-10">
      <div class="col-md-12 col-sm-12 col-xs-12 text-center">
        <div class="bg-black-light rounded-10 q-py-lg q-px-sm" :class="$q.screen.gt.sm ? 'q-ma-lg' : 'q-ma-md'"
        >
        <div class="border-color-black bg-black-foreground circle" data-v-d983eb34="" >
          <img src="src/assets/Cluby-C.svg" class="overflow-hidden" data-v-d983eb34="" style="height: 100px; width: 100px; border-radius: 100px"/>
        </div>
        <div class="text-center">
          <div class="">
            <p class="text-black font-SSP600 q-mb-none q-pt-sm business-club">sohail</p>
          </div>
          <div class="">
            <div class="business-club-created font-SSP600 f-14 text-grey-8" >
              Created by Sohail Ahmed </div>
            </div>
            <div class="q-py-md">
              <span class="text-1B1B1B f-16 text-700">113AA7</span>
              <span class="q-pa-xs">
                <q-btn class="text-3F4354" dense flat icon="content_copy" />
              </span>
            </div>
            <div class="row justify-center">
              <CenterBtn :btns="btns" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$q.screen.gt.xs" class="q-mt-lg q-pt-md q-pb-sm q-px-lg rounded-10 bg-white" >
      <q-item class="q-px-none q-py-xs">
        <q-avatar class="text-white q-mr-md q-chip--colored bg-black-light">
          <q-img style="width: 40px" src="src/assets/Cluby-C.svg" />
        </q-avatar>
        <q-item-section class="bg-black-light q-px-md rounded-8">
          <input
              class="q-field__native q-placeholder"
              tabindex="0"
              placeholder="Announcement"
              type="text"
          />
        </q-item-section>
        <PublishBtn :publish="PubBtn" />
      </q-item>
      <q-item class="q-px-none">
        <div v-if="$q.screen.gt.md" class="mt-6 f-16 font-ssp-600 text-grey-9">
          <div class="q-pt-sm">
            <span> Relate announcement to</span>
          </div>
        </div>
        <q-item-section>
          <div class="q-item__label">
            <ThreeIcon :icons="icons" />
          </div>
        </q-item-section>
      </q-item>
    </div>
    <div v-if="$q.screen.lt.sm" class="q-mt-lg q-py-sm q-px-lg rounded-10 bg-white" >
      <q-item class="q-px-none">
        <q-avatar class="text-white q-mr-md q-chip--colored bg-black-light">
          <q-img style="width: 40px" src="src/assets/Cluby-C.svg" />
        </q-avatar>
        <q-item-section class="bg-black-light q-px-md rounded-8">
          <input
              class="q-field__native q-placeholder"
              tabindex="0"
              placeholder="Announcement"
              type="text"
          />
        </q-item-section>
        <div v-if="$q.screen.gt.xs" class="q-ml-sm bg-black rounded-10">
          <q-btn class="text-capitalize text-white q-mt-xs" label="Publish" />
        </div>
      </q-item>
    </div>
    <div class="q-mt-lg q-py-sm rounded-10 bg-white" :class="$q.screen.lt.sm ? 'q-pl-sm' : 'q-px-lg'" >
      <q-item class="q-px-none">
        <div class="mt-6 text-grey-9">
          <div class="q-pt-xs">
            <span class="font-SSP600" :class="$q.screen.lt.sm ? 'f-12' : 'f-16'">
              Announcements
            </span>
          </div>
        </div>
        <PopularCom :props="Popular" />
      </q-item>
    </div>
  </div>
  <div class="col-md-3 col-xs-12" v-if="$q.screen.gt.sm">
    <div class="bg-white rounded-10">
      <div class="q-pa-md q-px-lg">
        <div class="text-capitalize q-mb-sm q-mt-xs lh-24 f-16 font-ssp600 text-grey-9" >
          about
        </div>
        <div class="font-family2 font-style-normal f-14 lineH-24">
          <div class="q-mb-sm font-ssp400 text-grey-9">coding</div>
        </div>
      </div>
    </div>
    <div class="q-mt-lg">
      <OfficeCard :officeCard="cardArray" />
    </div>
    <EventComp :Events="EventData" />
    <div class="bg-white rounded-10 q-mt-lg">
      <div class="q-py-lg q-pr-xs" :class="$q.screen.lt.lg ? 'q-pl-md' : 'q-pl-lg'" >
        <div class="text-capitalize font-SSP600 f-16 text-grey-9">
          Budget Goals
          <span class="float-right">
            <q-toggle
                style="padding-right: 0px; height: 20px"
                class="q-pa-none f-16 togg q-ma-none"
                v-model="value"
                color="black"
                label="Show Public"
                left-label
            />
          </span>
        </div>
      </div>
      <div class="q-px-md q-pt-sm q-pb-lg rounded-10">
        <div class="text-center rounded-10 bg-black-light">
          <div class="q-py-md text-3F4354 text-capitalize f-15 font-ssp600">
            No Upcoming Events
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</q-page>
</template>

<script setup>
import CenterBtn from "src/components/CenterBtn.vue";
import EventComp from "src/components/EventComp.vue";
import OfficeCard from "src/components/OfficeCard.vue";
import PopularCom from "src/components/PopularCom.vue";
import PublishBtn from "src/components/PublishBtn.vue";
import SideBtn from "src/components/SideBtn.vue";
import ThreeIcon from "src/components/ThreeIcon.vue";
import YourClubs from "src/components/YourClubs.vue";
import { ref } from "vue";
let value = ref(false);
let drawer = ref(false);
let drawerRight = ref(false);

const btns = [
  {
    icon: "share",
    text: "Share Club",
  },
  {
    image: "src/assets/exit.svg",
    text: "Leave",
  },
  {
    icon: "border_color",
    text: "Edit Club",
  },
];
const sidebtn = [
  {
    image: "src/assets/join.svg",
    width: "27.44px",
    color: "bg-primary",
    text: "Join Club",
  },
  {
    icon: "add",
    text: "Create a Club",
    color: "bg-white",
    href: "create",
    textcolor: "text-3F4354",
  },
];
const clubs = [
  {
    head: "Your Club",
    image: "src/assets/Cluby-C.svg",
    name: "sohail",
    code: "coding",
  },
];
const icons = [
  {
    icon: "notifications",
    text: " No members will be notified",
  },
  {
    image: "src/assets/jul-17.svg",
    text: " Upcoming Event",
  },
  {
    image: "src/assets/teerr.svg",
    text: " Budget Goal",
  },
];
const cardArray = [
  {
    title: "Officers",
    img1: "src/assets/Cluby-C.svg",
    name: "Sohail Ahmed",
    img2: "src/assets/admin.svg",
    admin: "admin",
    member: "Members (0)",
  },
];
let EventData = [
  {
    title: "Upcoming Events",
    image: "src/assets/right-arrow.svg",
    text: "No Upcoming Events",
  },
];
let Popular = [
  {
    img: "src/assets/poplur.svg",
    text: "Popular",
  },
  {
    img: "src/assets/new.svg",
    text: "New",
  },
];
let PubBtn = [
  {
    text: "Publish",
    class: "bg-black",
  },
];

defineOptions({
  name: "IndexPage",
});
</script>
<style scoped>
.q-item__label {
  line-height: 1.2em !important;
  max-width: 100%;
}

.f-15 {
  font-size: 15px;
}
.q-toggle {
  vertical-align: middle;
}
.togg .q-toggle__inner {
  padding: 0px !important;
}
.font-SSP600 {
  font-weight: 600 !important;
}
.font-SSP400 {
  font-weight: 400;
}
.bg-primary {
  --q-primary: linear-gradient(
    175.39deg,
    #0070b2 -0.65%,
    #0079b6 20.32%,
    #0092c3 45.57%,
    #00a3cb 85.07%
  );
  background: var(--q-primary) !important;
}
</style>
