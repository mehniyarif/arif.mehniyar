import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layouts/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:   [
  {
    path: "/",
    name: "main-layout",
    redirect: "/home",
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/technologies',
        name: 'technologies',
        component: () => import('../views/TechnologyView.vue')
      }
    ]
  }]



})

export default router
