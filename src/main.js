import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import Vuetify from 'vuetify'

Vue.config.productionTip = false

var Vuetify = require("vuetify");
Vue.use(Vuetify);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')