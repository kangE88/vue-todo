import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'


Vue.config.productionTip = false

var Vuetify = require("vuetify");
Vue.use(Vuetify);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
