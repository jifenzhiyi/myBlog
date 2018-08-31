import '@/styles/app.less';
import Vue from 'vue';
import charming from 'charming';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

/* Vue.prototype.$feedback = feedback; */
window.timeout = null;
window.store = store;
window.charming = charming;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
