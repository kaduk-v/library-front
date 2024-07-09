import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/main.layout.vue'
import LoginLayout from '@/layout/login.layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginLayout,
    },
    {
      path: '/',
      name: 'main',
      component: MainLayout,
    },
    {
      path: '/user/:id',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MainLayout,
    },
    {
      path: '/book/:id',
      name: 'book',
      component: MainLayout,
    },
    {
      path: '/author/:id',
      name: 'author',
      component: MainLayout,
    },
  ],
})

export default router
