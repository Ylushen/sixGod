const app = {
  state: {
    loginDialogActive: false
  },
  actions: {
    openLogin({commit}) {
      commit('OPEN_LOGIN');
    },
    closeLogin({commit}) {
      commit('CLOSE_LOGIN');
    }
  },
  mutations: {
    OPEN_LOGIN(state) {
      state.loginDialogActive = true;
    },
    CLOSE_LOGIN(state) {
      state.loginDialogActive = false;
    }
  }
};

export default app;
