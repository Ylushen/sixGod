// 校验密码格式
export const regexPassword = /^[a-zA-Z0-9_.~!@#$%^&*]{6,20}$/;
export const regexPhone = /^1[345789][0-9]{9}$/;

const str = 'a123123';

(function test(str) {
  console.log(regexPassword.test(str))
}(str));