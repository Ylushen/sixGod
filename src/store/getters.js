const getters = {
  loginDialogActive: state => state.app.loginDialogActive,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  username: state => state.user.userInfo.username
};

export default getters;
