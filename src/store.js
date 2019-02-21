import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signUp ({commit}, authData) {
      axios.post('/signupNewUser?key=AIzaSyADBToZSMZAsw6mpGib4chEhOkTvHUJ87M', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then((res) => {
          console.log(res);
       })
      .catch((error) => {
            console.log(error);
      });
    },
    signin ({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyADBToZSMZAsw6mpGib4chEhOkTvHUJ87M', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then((res) => {
          console.log(res);
      })
      .catch((error) => {
            console.log(error);
      });
    }
  },
  getters: {

  }
})