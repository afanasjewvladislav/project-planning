import '@babel/polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(Vuetify);
Vue.use(Vuex);


window.$vue = new Vue({
  debug: true,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

store.dispatch('project/loadAll');
