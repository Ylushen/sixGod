import {getToken, setToken, removeToken} from '../../utils/auth';
import {login, registered, getInfo, logout} from '../../api/login';

const user = {
  state: {
    token: getToken(),
    userInfo: {},
    roles: []
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = data;
    },
    SET_INFO(state, data) {
      state.userInfo = data;
    },
    SET_ROLES(state, data) {
      state.roles = data;
    }
  },

  actions: {
    // 登录
    Login({commit}, userform) {
      return new Promise((resolve, reject) => {
        login(userform).then(res => {
          const data = res.data;
          const token = data.token;
          const roles = data.roles || [];
          setToken(token);
          commit('SET_TOKEN', token);
          commit('SET_ROLES', roles);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // todo 权限控制
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        // getInfo({token: state.token}).then(response => {
        //   const data = response.data;
        //   commit('SET_INFO', data);
        //   resolve();
        // }).catch(error => {
        //   reject(error);
        // });
        const data = {username: 'yls', roles: ['admin']};
        commit('SET_ROLES', data.roles);
        commit('SET_INFO', data);
        resolve();
      });
    },
    // 注册账号
    Registered({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        registered(userInfo).then(response => {
          const token = response.token;
          setToken(token);
          commit('SET_TOKEN', token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    LoginOut({commit}) {
      return new Promise((resolve, reject) => {
        logout(getToken()).then(response => {
          removeToken();
          commit('SET_TOKEN', '');
          commit('SET_INFO', {});
          commit('SET_ROLES', '');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};

export default user;
