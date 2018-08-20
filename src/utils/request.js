import axios from 'axios';
/* eslint-disable */
import store from '@/store';

const client = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const SERVER_ERROR_CODE = {
  KeyError: 999,
  ObjectDoesNotExist: 998,
  MultipleObjectsReturned: 997,
  ParameterTypeError: 992,
  ParameterError: 993,
  ParameterForSerializerError: 993,
  NotAuthenticated: 995,
  PermissionDenied: 994,
  AuthenticationFailed: 990,
  MethodNotAllowed: 996,
  NotFound: 991,
  Throttled: 989,
  OtherError: 911,
};

function handleResponse(response) {
  if ('error_code' in response.data) {
    const error = response.data.error_code;
    if (error === SERVER_ERROR_CODE.AuthenticationFailed ||
      error === SERVER_ERROR_CODE.NotAuthenticated) {
      // 处理登录失效的 case
      store.commit('CLEAR_USER_AUTH');
      return window.location.reload();
    } else if (error === SERVER_ERROR_CODE.ObjectDoesNotExist) {
      // 处理资源不存在的 case
      response.data = null;
      return response;
    }

    let displayMessage;
    if (process.env.NODE_ENV !== 'production') {
      displayMessage = response.data.error_reason;
    } else {
      displayMessage = '服务器正忙, 请稍候重试';
    }

    // 其他错误
    return Promise.reject({
      response,
      error: ERROR.SERVER_ERROR,
      displayMessage,
      message: response.data.error_reason,
    });
  }
  return response;
}

client.interceptors.response.use(handleResponse, error => {
  if (error.response) {
    return handleResponse(error.response);
  }

  return Promise.reject({
    error: ERROR.NETWORK_FAILED,
    displayMessage: '网络不给力, 请稍候重试',
    message: error.message,
  });
});

const originGet = client.get;
client.get = function clientGet(url, config) {
  return originGet.call(client, url, config).then(resp => {
    return resp;
  });
};

const originPost = client.post;
client.post = function clientPost(...args) {
  return originPost.apply(this, args);
};

export default client;
/* eslint-enable */
