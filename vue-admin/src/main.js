import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select, Checkbox, Table, TableColumn, Pagination } from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
