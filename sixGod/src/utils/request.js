import axios from 'axios';
import store from '../store';
import {Message} from 'element-ui';
import {getToken} from './auth';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/admin' : '/api',
  timeout: 2000
});

// 请求发出时拦截器
service.interceptors.request.use(config => {
      if (store.getters.token) {
        config.headers['Authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config;
    },
    error => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    }
);

// 请求后拦截器
service.interceptors.response.use(response => {
      const res = response.data;
      if (Number(res.code) === 200) {
        return Promise.resolve(res.data);
      } else {
        Message.error(res.message);
        return Promise.reject(res);
      }
    },
    error => {
      console.log('err' + error); // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }
);
export default service;
