import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Orders from '../components/Orders.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'orders',
    component: Orders
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
