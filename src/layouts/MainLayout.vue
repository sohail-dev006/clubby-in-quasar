<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class=" text-grey-8 bg-white " :class="$q.screen.gt.md ? 'container q-py-md': 'q-py-sm'">
        <q-img class="cursor-pointer  q-mr-xl full-logo" src="src/assets/Clubbylogo.svg" :class="$q.screen.lt.md ? 'q-ml-sm': ''"  />
         <TopMenu v-if="$q.screen.gt.sm" :tabs="tabs" />
         <q-space/>
         <q-btn flat class=" relative-position q-pl-none q-pr-sm q-py-sm rounded-8 bell-hover" :class="$q.screen.lt.md ? 'q-mr-sm':''">
          <q-icon name="notifications" class="q-icon-28 text-616161"/>
              <!-- <q-icon class="q-icon-28 text-616161" :class="$q.screen.gt.sm ? '' : ($q.screen.gt.xs ? '' : '')" name="notifications" /> -->
          <q-menu v-if="$q.screen.gt.xs" class="q-mt-xl rounded-8 q-pb-xl  q-pa-lg w-520" style=" border-radius: 12px !important;  max-height: 475px; visibility: visible; min-width: 444px !important; top: 77px; left: 773.094px;"
          :offset="[450, 15]">
          <q-list style="min-width: 444px">
              <q-item class="q-pa-none">
                <q-item-section class="f-24 font-SSP600 text-3F4354 ">
                  Notifications
                </q-item-section>
                <q-item-section>
                  <q-btn class="f-16 full-width  text-757575 bg-gray-4 text-capitalize" flat dense tag="a" role="a">
                    View All Notifications
                  </q-btn>
                </q-item-section>
              </q-item>
            </q-list>
              <q-separator />
            <div class="q-card__section q-card__section--vert q-px-none" data-v-4f789ae0="" style="max-height: 375px; overflow-y: auto;">
            </div>
            </q-menu>
           <q-menu v-if="$q.screen.lt.sm" class="q-mt-xl rounded-8" :class="$q.screen.lt.sm ? 'q-pa-sm': 'q-pa-lg q-pb-xl'" style=" border-radius: 12px !important;  max-height: 475px; visibility: visible; min-width: 4px !important; top: 77px; left: 773.094px;"
          :offset="[450, 15]">
           <q-list >
              <q-item class="q-pa-none">
                <q-item-section class="f-24 font-SSP600 text-3F4354">
                  Notifications
                </q-item-section>
                <q-item-section :class="$q.screen.lt.sm ? 'q-px-none': ''">
                  <q-btn class="f-16 full-width  text-757575 bg-gray-4 text-capitalize" flat dense tag="a" role="a">
                    View All Notifications
                  </q-btn>
                </q-item-section>
              </q-item>
            </q-list>
              <q-separator />
            <div class="q-card__section q-card__section--vert q-px-none" data-v-4f789ae0="" style="max-height: 375px; overflow-y: auto;">
            </div>
              </q-menu>
            </q-btn>
          <div>
          <div class="user-set rounded-8">
            <q-btn class="btn-icon-right-margin" v-if="$q.screen.gt.sm" dense flat @click="icon1 = !icon1"
                :icon-right="icon1 ? 'arrow_drop_up' : 'arrow_drop_down' ">
                <q-btn-content class="row">
                  <div class="row items-center no-wrap" data-v-4f789ae0="">
                    <div class="q-mr-md first rounded-100" data-v-4f789ae0="" style="">
                      <span class="q-icon q-pr-xs" aria-hidden="true" role="presentation" data-v-4f789ae0="">
                        <img class="" src="src/assets/Cluby-C.svg">
                      </span>
                    </div>
                    <div class="text-black q-pr-xs text-capitalize font-SSP600 f-16" data-v-4f789ae0="">
                      Sohail Ahmed</div>
                    </div>
                  </q-btn-content>
                  <q-menu style="border-radius: 12px !important;"
                      :offset="[-10, 15]">
                      <q-item class="q-pr-lg q-py-none"  v-close-popup>
                        <q-item-label class="font-SSP600 f-16 q-pt-md q-pb-xs q-pr-xl">
                          <q-icon class="text-black" name="settings" style="font-size: 20px;" />
                          &nbsp;Settings
                        </q-item-label>
                      </q-item>
                      <q-item class="q-pr-lg q-py-none">
                        <q-item-label class="font-SSP600 f-16 q-py-sm q-pl-xs q-pr-xl">
                          <q-img  src="src/assets/logout.svg" class="text-red "  style="font-size: 20px; width: 20px; height: 20px;" />
                          &nbsp;
                          <span class="text-red font-ssp600 f-16">
                            Logout
                          </span>
                        </q-item-label>
                      </q-item>
                    </q-menu>
                  </q-btn>
                <q-btn v-else="$q.screen.lt.md" dense flat >
                  <q-img  class="q-mr-md" width="24px" height="24px"  src="src/assets/Cluby-C.svg" alt=""/>
                  <q-menu style="border-radius: 12px !important;"
                  :offset="[-10, 5]" >
                  <q-item  clickable v-close-popup>
                    <q-item-label class="font-SSP600 f-16 q-py-sm ">
                      <q-icon class="text-black" name="settings" style="font-size: 20px;" />
                      &nbsp;Settings
                    </q-item-label>
                  </q-item>
                  <q-item>
                    <q-item-label class="font-SSP600 f-16 q-py-sm q-pr-xl">
                      <q-img  src="src/assets/logout.svg" class="text-red"  style="font-size: 20px; width: 20px; height: 20px;" />
                      &nbsp;
                      <span class="text-red font-ssp600 f-16">
                        Logout
                      </span>
                    </q-item-label>
                  </q-item>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-toolbar>
      </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
<q-footer v-if="$q.screen.lt.md" class="bg-white shadow-up-3">
  <FooterMenu :foot="foot"/>
</q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink,useRoute } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue'
import TopMenu from 'src/components/TopMenu.vue';
import FooterMenu from 'src/components/FooterMenu.vue';
let icon1 = ref(false)
const activeTab = ref(0);
const route = useRoute()
const tabs = [
  {
    icon: 'home',
    href: '/',
    active: route.path == "/"
  },
  {
    icon: 'calendar_month',
    href: '/celendar',
    active: route.path == "/celendar"
  },
  {
    icon: 'account_balance_wallet',
    href: '/account',
    active: route.path == "/account"
  },
  {
    icon: 'question_answer',
    href: '/massage',
    active: route.path == "/massage"
  },
]
const foot = [
  {
    icon: 'home',
    href: '/',
    active: route.path == "/"
  },
  {
    icon: 'calendar_month',
    href: '/celendar',
    active: route.path == "/celendar"
  },
  {
    icon: 'account_balance_wallet',
    href: '/account',
    active: route.path == "/account"
  },
  {
    icon: 'question_answer',
    href: '/massage',
    active: route.path == "/massage"
  },
]


console.log(route.path)
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped>
  .full-logo {
    width: 141px;
    height: 30px;
}
.container {
    padding-left: 40px;
    padding-right: 40px;
}
.q-icon-28{
  font-size: 28px;
}
.text-616161{
  color: #616161;
}
.bg-primary{
  --q-primary: linear-gradient(175.39deg, #0070B2 -.65%, #0079B6 20.32%, #0092C3 45.57%, #00A3CB 85.07%);
}
.rounded-8 {
  border-radius: 8px !important;
}
.bell-hover:hover {
    background-color: #eee;
}
.f-16{
  font-size: 16px;
}
.text-black {
    color: #1b1b1b !important;
}
.w-520{
  max-width: 520px !important;
}
.f-24 {
    font-size: 24px;
}
.bg-gray-4 {
    background: #F0F0F0;
}
.no-indicator-tabs .q-tabs__indicator {
  display: none;
}
.btn-icon-right-margin .q-icon .notranslate .material-icons{
  margin-left: 12px; /* Adds margin to the right side of the icon */
}
.btn-icon-right-margin .q-btn__content {
  display: flex;
  justify-content: space-between;
}
.q-btn .q-icon {
  margin-left: 12px; /* Apply left margin to the icon */
}
</style>
