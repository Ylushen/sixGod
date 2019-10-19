import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          meta: {title: '注册'},
          component: resolve => require(['../views/Home'], resolve)
        },
        {
          path: '/about',
          name: 'About',
          meta: {admin: ['admin'], title: '关于'},
          component: resolve => require(['../views/test/test'], resolve)
        },
        {
          path: '/registered',
          name: 'Registered',
          meta: {title: '首页'},
          component: resolve => require(['../views/registered'], resolve)
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['../views/test'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: resolve => require(['../views/404'], resolve)
    },
    // 如果是没监听的页面，就转到404
    {path: '*', redirect: '/404', hidden: true}
  ]
});
