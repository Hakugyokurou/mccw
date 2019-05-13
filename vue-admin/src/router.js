import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import TableBase from './components/table/TableBase'
import TableUpdate from './components/table/TableUpdate'
import TableSort from './components/table/TableSort'
import Charts from './components/echarts/Finds'

import Land from './components/Land.vue'
import Index from './data/index.vue'

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
      component: Home,
      children: [
        {
          path: '/home/tablebase',
          name: 'tableBase',
          component: TableBase
        },
        {
          path: '/home/tableupdate/*',
          name: 'tableUpdate',
          component: TableUpdate
        },
        {
          path: '/home/tablesort',
          name: 'tableSort',
          component: TableSort
        },
        {
          path: '/home/charts',
          name: 'Charts',
          component: Charts
        },

      ]
    },
    {
      path: '/land',
      name: 'land',
      component: Land
    },
    {
      path:'/',
      component:Index,
      name:'index'
    }
  ]
})
