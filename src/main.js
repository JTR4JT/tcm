import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import * as echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from "vue-axios"
import $ from "jquery";

Vue.use(ElementUI)
Vue.use(axios,VueAxios)

// Vue.prototype.$axios =axios
Vue.prototype.$echarts = echarts
Vue.prototype.$ = $
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

