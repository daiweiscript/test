import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index/main.vue'
import TvList from './pages/tv-list/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/tv-list/:id',
      name: 'tv-list',
      component:TvList
    }
  ]
})
