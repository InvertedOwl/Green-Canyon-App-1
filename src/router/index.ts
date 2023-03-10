import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/gctv',
    component: () => import ('../views/GCTVPage.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/polls',
    component: () => import ('../views/PollsPage.vue')
  },
  {
    path: '/announcements',
    component: () => import ('../views/AnnouncementsPage.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
