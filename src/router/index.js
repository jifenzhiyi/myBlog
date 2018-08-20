import Vue from 'vue';
import Router from 'vue-router';

import frame from './frame';
import notFound from './404';
import * as storage from '@/utils/storage';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'index',
    },
  },
  ...frame,
  ...notFound,
];

const rootRouter = new Router({
  mode: 'history',
  routes,
});

rootRouter.beforeEach((to, from, next) => {
  /**
   * 登陆之后的路由全是嵌套在父级路由中
   * 只在父级路由及其同级路由定义 meta.login
   * 那么登陆之后的路由 meta.login === 'undefined'，变相继承父级路由 meta.login = true
   */
  const requiresAuth = to.meta.login === undefined ? true : to.meta.login;
  const isLogin = storage.getUserID() !== ''; // 是否登陆过，登陆过会有存储信息
  if (requiresAuth) {
    if (!isLogin) {
      storage.clear();
      next({
        name: 'login',
        query: {
          target: to.fullPath,
        },
      });
    }
  }

  next();
});

export default rootRouter;
