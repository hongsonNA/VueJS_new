import Vue from 'vue';
import 'bootstrap';
import App from './App.vue';
import {router} from './routers';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
