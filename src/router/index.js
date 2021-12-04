import { createRouter, createWebHistory } from 'vue-router'
import baner from '../views/baner.vue'
import cart from '../views/cart.vue'
import sigin from '../views/sigin.vue'
import register from '../views/register.vue'
import Prodect from '../views/Prodect.vue'
import Search from '../views/search.vue'
// import notpage from '../views/notpage.vue'

const routes = [
  {
    path: '/',
    name: 'baner',
    component: baner
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/sigin',
    name: 'sigin',
    component: sigin
  },
   {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/prodect/:id',
    name: 'Prodect',
    component: Prodect
  },
    {
    path: '/search',
    name: 'Search',
    component: Search
  },
  

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
