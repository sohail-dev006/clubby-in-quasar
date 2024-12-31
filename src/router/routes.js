const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'create', component: () => import('pages/CreatePage.vue') },
      { path: 'celendar', component: () => import('pages/CalendarPage.vue') },
      { path: 'account', component: () => import('pages/AccountPage.vue') },
      { path: 'massage', component: () => import('pages/MassagePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
