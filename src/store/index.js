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
    musicTypeList: [{
      id: 2152376407,
      title: '我喜欢的音乐 🎵',
    },
    {
      id: 19723756,
      title: '飙升榜 🎵',
    },
    {
      id: 3779629,
      title: '新歌榜 🎵',
    },
    {
      id: 2884035,
      title: '原创榜 🎵',
    }], // 0:我喜欢的音乐 2152376407 1:飙升榜 19723756 2:新歌榜 3779629 3:原创榜 2884035
    musicIndex: 0,
    productList: [
      {
        type: 'iPhone',
        img: '/static/apple-touch-icon-next.png',
        title: '项目标题 111',
        intro: '<p>项目介绍 111: </p><p>使用Vue的脚手架搭建的移动端页面，利用了Vuex实现状态的管理，路由器实现页面的切换，还利用Html5的本地存储服务存储收藏的歌曲。（瞎编的）</p>',
        url: 'http://www.baidu.com',
      },
      {
        type: 'iPhone',
        img: '/static/apple-touch-icon-next.png',
        title: '项目标题 222',
        intro: '<p>项目介绍 222: </p><p>使用Vue的脚手架搭建的移动端页面，利用了Vuex实现状态的管理，路由器实现页面的切换，还利用Html5的本地存储服务存储收藏的歌曲。（瞎编的）</p>',
        url: 'http://www.baidu.com',
      },
    ],
    productIndex: 0,
    productInfo: null,
    clickFlag: true,
  },
  modules: {
    Index,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    M_SET_USERINFO(state, res) {
      Object.keys(res).forEach((key) => {
        storage.set(key, res[key]);
      });
    },
    SET_MUSIC_INDEX(state) {
      if (state.musicIndex < 3) {
        state.musicIndex += 1;
      } else {
        state.musicIndex = 0;
      }
    },
    SET_PRODUCT_INDEX(state, type) {
      if (state.clickFlag) {
        state.clickFlag = false;
        state.productInfo = null;
        if (type === 'prev') {
          if (state.productIndex === 0) {
            state.productIndex = state.productList.length - 1;
          } else {
            state.productIndex -= 1;
          }
        } else if (type === 'next') {
          if (state.productIndex === state.productList.length - 1) {
            state.productIndex = 0;
          } else {
            state.productIndex += 1;
          }
        }
        setTimeout(() => {
          state.productInfo = state.productList[state.productIndex];
          state.clickFlag = true;
        }, 300);
      }
    },
    SET_PRODUCT_INFO(state, info) {
      state.productInfo = info;
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
