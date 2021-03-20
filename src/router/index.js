import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomePage from '@/views/Home'
import AboutPage from '@/views/About'
import PortofolioPage from '@/views/Portofolio'
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
    path: '/portofolio',
    name: PortofolioPage.name,
    component: PortofolioPage
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
