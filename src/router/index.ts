import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/announcements'
  },
  {
    path: '/announcements',
    component: () => import ('../views/AnnouncementsPage.vue')
  },
  {
    path: '/polls',
    component: () => import ('../views/PollsPage.vue')
  },
  {
    path: '/db',
    component: () => import ('../views/DatabasePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
