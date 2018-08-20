import Vue from 'vue';
import Vuex from 'vuex';
import * as storage from '../utils/storage';
import request from '../utils/request';
import Index from '../views/Index/store';

Vue.use(Vuex);

const login = payload => request('/rest_auth/auth/password_login/', {
  method: 'POST',
  data: payload,
});

const rootStore = new Vuex.Store({
  state: {
    loading: false,
  },
  modules: {
    Index,
  },
  mutations: {
    M_SET_USERINFO(state, res) {
      Object.keys(res).forEach((key) => {
        storage.set(key, res[key]);
      });
    },
  },
  actions: {
    A_LOGIN({ commit }, payload) {
      return login(payload).then((res) => {
        if (res) {
          storage.set('userName', payload.username);
          commit('M_SET_USERINFO', res);
          return true;
        }
        return false;
      });
    },
  },
});

export default rootStore;
