import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import TableBase from './components/table/TableBase'
import TableUpdate from './components/table/TableUpdate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tablebase',
      name: 'tableBase',
      component: TableBase
    },
    {
      path: '/tableupdate/*',
      name: 'tableUpdate',
      component: TableUpdate
    }
  ]
})
