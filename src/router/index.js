import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Trashcan from '../views/Trashcan.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trashcan',
    name: 'Trashcan',
    component: Trashcan
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
