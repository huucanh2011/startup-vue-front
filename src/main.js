import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import './components/global-components'

// plugins
import './plugins/vue-axios';
import './plugins/vue-notification';
import './plugins/vue-progressbar';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
