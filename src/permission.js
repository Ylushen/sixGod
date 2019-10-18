import router from './router';
import store from './store';
import {getToken} from './utils/auth';
import {Message} from 'element-ui';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条样式

// 简单配置
NProgress.inc(0.2);
NProgress.configure({easing: 'ease', speed: 500, showSpinner: false});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.admin && !store.getters.userInfo.admin) {
    router.push('/404');
  } else next();
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
