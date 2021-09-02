import Vue from 'vue'
import App from './App.vue'
import animate from "animate.css";
import './plugins/element.js'

//index是默认不写的
import store from './store'
import router from './router'
import VueApexCharts from 'vue-apexcharts'

Vue.use(animate)
Vue.use(VueApexCharts)
Vue.component('apexchart',VueApexCharts)
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
