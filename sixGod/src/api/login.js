import request from '../utils/request';

export function login(data) {
  data = {
    ...data,
    sysId: '123',
    userType: '1'
  };
  return request.post('/user/login', {}, {
    data: data
  });
}

export function logout(data) {
  data = {token: data};
  return request.post('/user/logout', {}, {
    data: data
  });
}

export function registered(data) {
  data = {
    ...data,
    sysId: '123',
    userType: '1'
  };
  return request.post('/user/registered', {}, {
    data: data
  });
}

export function getInfo(data) {
  data = {
    ...data,
    sysId: '123',
    userType: '1'
  };
  return request.post('/user/info', {}, {
    data: data
  });
}
