import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Monitoreo'
import Historial from '../views/Historial'
import Graficas from '../views/Tablas'
import Tablas from '../views/Graficas'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/historial',
    name: 'Historial',
    component: Historial
  },
  {
    path:'/tablas',
    name: 'Tablas',
    component: Tablas
  },
  {
    path:'/graficas',
    name: 'Graficas',
    component: Graficas
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
