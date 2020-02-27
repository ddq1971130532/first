import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import FastClick from 'fastclick'
import { Lazyload } from 'vant'
Vue.use(Lazyload)

Vue.config.productionTip = false

FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
