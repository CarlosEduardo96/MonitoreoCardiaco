import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router' 
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
Vue.config.productionTip = false
Vue.component("apexchart", VueApexCharts);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
