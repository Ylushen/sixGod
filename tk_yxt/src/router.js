import Vue from 'vue'
import Router from 'vue-router'

// 要懒加载，按需加载就要用component作为一个方法去加载

// import Home from './views/home/index.vue'
//
// import Films from './views/home/films.vue'
// import Cinemas from './views/home/cinemas.vue'
// import Center from './views/home/center.vue'
//
// import Login from './views/login/index.vue'
// import City from './views/city/index.vue'
// import Film from './views/film/index.vue'
// import Particulars from './views/particulars/index.vue'
// import CinmeasDetails from './views/cinmasdetails/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:()=> import('./views/home/index.vue'),
      children: [
        {
          path: 'films',
          component: ()=> import('./views/home/films.vue')
        },
        {
          path: 'cinemas',
          component: ()=> import('./views/home/cinemas.vue')
        },
        {
          path: 'center',
          component:()=> import('./views/home/center.vue')
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/login',
      component: ()=> import('./views/login/index.vue')
    },
    {
      path: '/city',
      component: ()=> import('./views/city/index.vue')
    },
    {
      path: '/film/:id',
      component: ()=> import('./views/film/index.vue')
    },
    {
      path: '/particulars/:id',
      component: ()=> import('./views/particulars/index.vue')
    },
    {
      path: '/cinemas/:id',
      component: ()=> import('./views/cinmasdetails/index.vue')
    }
  ]
})
