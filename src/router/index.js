import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageNameNosotros',
      component: HomeView
    },
    {
      path: '/products',
      name: 'pageNameProductos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/projects',
      name: 'pageNameProyectos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'pageNameContacto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactsView.vue')
    },
    // will match everything and put it under `$route.params.pathMatch`
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue')
    },
  ]
})

export default router
