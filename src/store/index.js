import Vue from 'vue';
import Vuex from 'vuex';
import app from './module/app';
import user from './module/user';
import getters from './getters';

Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })],
  modules: {
    app,
    user
  },
  getters
});
