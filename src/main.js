import Vue from 'vue'
import App from './App.vue'
import animate from "animate.css";
import './plugins/element.js'

//index.js是默认不写的
import store from './store'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import mock from '../mock/index'


Vue.use(mock)
Vue.use(VideoPlayer,axios)
Vue.use(animate)
Vue.use(VueApexCharts)
Vue.component('apexchart',VueApexCharts)
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueAxios,axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
