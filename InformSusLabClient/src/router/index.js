// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),

  },
  {
    path: '/home',
    component: () => import('@/layouts/auth/Home.vue'),
    children: [
      {
        path: '/home/u',
        name: 'user',
              
        component: () => import('@/views/user.vue'),
      },
      {
        path: '/home/freands',
        name: 'freands',

        component: () => import('@/views/freands.vue'),
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

//children: [
//{
//  path: '',
//    name: 'Home',
//      // route level code-splitting
//      // this generates a separate chunk (about.[hash].js) for this route
//      // which is lazy-loaded when the route is visited.
//      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//  },
//],