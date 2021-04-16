import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import Error from '../views/404.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path:'/labels',
    name:'labels',
    component: Labels
  },
  {
    path:'/statistics',
    name:'statistics',
    component:Statistics
  },
  {
    path:'*',
    name:'error',
    component:Error
  },
]

const router = new VueRouter({
  routes
})

export default router
