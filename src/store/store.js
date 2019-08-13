import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null,
    loginError: null
  },
  mutations: {
    loginStop: (state, errorMessage) => {
    state.loginError = errorMessage;
    },
  },
  actions: {
    doLogin({ commit }, loginData) {
    axios.post('https://reqres.in/api/login', {
      ...loginData 
    })
    .then(response => {
      localStorage.setItem('userToken', response.data.token);
      commit('loginStop', null);
      router.push('/users')
    })
    .catch(error => {
      commit('loginStop', error.response.data.error);
    })
    },
  }
})
