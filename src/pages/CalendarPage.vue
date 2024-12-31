<template>
  <q-page class="q-page background-grey q-pa-lg "  :class="$q.screen.gt.md ? 'container': ''">
    <div class="row q-col-gutter-lg  q-py-lg ">
      <div class="col-md-3 col-sm-12 col-xs-12">
        <SideBtn
        :sidebtn="sidebtn"/>
        <EventComp :Events="EventData"/>
      </div>
    <div class="col-md-9 col-sm-12 col-xs-12">
       <div class="rounded-11 bg-white q-pa-lg">
        <div class="row ">
          <div class="col-md-5 col-xs-12">
              <q-item>
                <q-item-section v-if="$q.screen.gt.xs" class="text-3F4354 font-source-family f-14" style="flex: 3000 1 0%;">
                  Filter  Club  Events
                </q-item-section>
                <q-item-section>
                  <q-btn-dropdown
                  flat
                  dense
                  class="flex justify-content-between maxW-210 text-capitalize q-pl-sm font-source-family justt f-14 text-000000DE"
                  label="All Clubs"
                  style="font-weight: 300;"
                  >
                    <template v-slot:append>
                      <q-icon name="menu" />
                    </template>
                    <q-list class="" style=" border-radius: 12px !important; margin-top: 5px !important;">
                      <q-item class="q-pb-none" clickable v-close-popup @click="onItemClick('photos')">
                        <q-item-section>
                          <q-item-label>sohail</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item class="q-pt-none" clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label class="text-blue">All Clubs</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-item-section>
              </q-item>
            </div>
          <div class="justify-center col-md-7 col-xs-12 q-pr-md">
            <q-tabs class="text-grey  float-right">
              <q-tabs-content class="flex">
                <q-tab class="column bg-blue-2 text-blue rounded-8 q-mx-sm cursor-pointer">
                  <q-tab-content class="f-14 text-capitalize font-source-family">
                    Month
                  </q-tab-content>
                </q-tab>
                <q-tab class="column bg-blue-2 rounded-8 q-focusable q-mx-sm q-hoverable cursor-pointer">
                  <q-tab-content class="f-14 text-capitalize font-source-family text-9E9E9E">
                    Week
                  </q-tab-content>
                </q-tab>
                <q-tab class="column bg-blue-2 rounded-8 q-focusable q-mx-sm q-hoverable cursor-pointer">
                  <q-tab-content class="f-14 text-capitalize font-source-family text-9E9E9E">
                    Day
                  </q-tab-content>
                </q-tab>
              </q-tabs-content>
            </q-tabs>
          </div>
          <div class="col-md-10 col-sm-3 col-xs-4 q-pt-lg q-pl-sm">
            <div class="text-3F4354 font-source-family q-pl-sm text-bold q-py-sm" :class="$q.screen.gt.md ? 'f-24' : 'f-18'">
              Nov 2024
            </div>
          </div>
          <div class="col-md-2 col-sm-9 col-xs-8 q-pt-lg">
            <div class="float-right">
              <q-btn flat dense class="bg-grey-3 q-mr-md q-px-md f-10 rounded-6 q-py-sm">
                <span>
                  <img width="17.4px"  src="src/assets/backward.svg" />
                </span>
              </q-btn>
              <q-btn flat dense class="bg-grey-3 q-mr-md q-px-md f-10 rounded-6 q-py-sm">
                <span>
                  <img width="17.4px"  src="src/assets/right-arrow.svg" />
                </span>
              </q-btn>
            </div>
          </div>
      <div v-if="$q.screen.gt.xs"class="q-gutter-md row items-start">
      <q-date
       class="full-width calendar-cell"
        v-model="date"
        minimal
      />
    </div>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EventComp from "src/components/EventComp.vue";
import SideBtn from "src/components/SideBtn.vue";
import { ref, computed } from "vue";
let tab = ref("");
let sidebtn = [
  {
    icon: "add",
    color: "bg-primary text-white",
    text: "Add Event"
  }
]
let EventData = [
  {
    title: "Upcoming Events",
    image: "src/assets/right-arrow.svg",
    width: "27.44px",
    text: "No Upcoming Events"
  }
]
</script>


<style>
.column {
    flex-direction: column;
}
.text-blue {
    color: #0070b2 !important;
}
.bg-blue-2 {
    background: #e5f0f7 !important;
}
.bg-grey-3 {
    background: #eeeeee !important;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* Adjust as needed */
  gap: 0px;
}
.calendar-cell .q-date__calendar-days-container .q-date__calendar-days .q-date__calendar-item {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 80px !important;
}
.calendar-cell .q-date__calendar-weekdays{
  height: 36px;
  background-color: #e8e8e8;
  border: 1px solid #ddd;
}
.calendar-cell .q-date__navigation{
  display: none
}
.calendar-cell .q-date__view {
  padding-left: 30px;
}
.calendar-cell{
  box-shadow: none !important;
  background: none !important;
}
.date-number {
  font-size: 16px;
  font-weight: bold;
}
.today {
  background: #1976d2;
  color: white;
}
.maxW-210 {
    min-width: 210px !important;
}
.justt .q-btn__content{
  justify-content: space-between;
}
.justt{
  border: 1px solid rgba(0, 0, 0, .24);
  min-height: 40px;
}
</style>


