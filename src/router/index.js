import Vue from 'vue'
import Router from 'vue-router'
// import list from '@/components/list'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: index
    }
  ]
})
