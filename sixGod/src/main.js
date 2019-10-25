import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import elementUI from 'element-ui';

import './styles/index.less';

// 获取自己封装的方法
import commons from './utils/common';
import constants from './constants';
// 引入格式校验方法
import validator from './utils/validator';
import './permission';

Vue.config.productionTip = false;

Vue.use(elementUI, {size: 'mini'});
// Vue原型添加方法
Vue.prototype.$bus = new Vue();
Vue.prototype.$commons = commons;
Vue.prototype.$globalConstants = constants;
Vue.prototype.$validator = validator;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
