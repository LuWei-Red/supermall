import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import category from'../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import profile from '../views/profile/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
