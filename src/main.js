import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import globalMixin from "./mixins/global.mixin";
Vue.mixin(globalMixin);

import SlideAuspiciantes from "./components/SlideAuspiciantes.vue";
Vue.component('SlideAuspiciantes', SlideAuspiciantes);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
