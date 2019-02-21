import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios';

//axios.defaults.baseURL = 'https://axios-4c744.firebaseio.com/';
axios.defaults.baseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
