import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomePage from '@/views/Home'
import AboutPage from '@/views/About'
import PortfolioPage from '@/views/Portfolio'
import ContactPage from '@/views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: HomePage.name,
    component: HomePage
  },
  {
    path: '/about',
    name: AboutPage.name,
    component: AboutPage
  },
  {
    path: '/portfolio',
    name: PortfolioPage.name,
    component: PortfolioPage
  },
  {
    path: '/contact',
    name: ContactPage.name,
    component: ContactPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.routeProgress) next()
})

export default router
