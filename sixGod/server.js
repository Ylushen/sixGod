const express = require('express'); // 引入express
const app = express(); // 实例化express
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'));

const responseLogin = {
  code: '200',
  token: '1774a12df-5409-43d3-8b43-aba1557c0a17',
  message: '登录成功',
  resultData: {
    sysId: '00000184',
    orgId: '17847',
    username: '喻蕗燊',
    roles: 'admin',
    userId: '32010012',
    deptName: '支付清算部/国内支付团队',
    authList: [
      {
        roleId: '2',
        authIds: '2001,2002,2003,2101,3000'
      }],
    perIds: [
      '2001,2002,2003,2101,3000'
    ]
  }
};

const responseToken = {
  'code': 1,
  'message': '操作成功',
  'data': {
    'id': '1907061429173612086',
    'loginName': null,
    'phone': '13434444444',
    'departmentId': null,
    'orgId': '1',
    'orgBank': true,
    'username': 'yhadmin',
    'password': null,
    'roles': ['admin11'],
    'authorityList': [],
    'channelCorpDTO': null
  }
};
// 模拟用户登录信息
const users = [
  {userId: 'liuliuliu', password: 'a123123'},
  {userId: 'yls666', password: 'a123123'},
  {userId: 'yhadmin', password: 'a123123'}];

// POST method route
app.post('/user/login', upload.array(), function(req, res) {
  const data = req.body;
  console.log(data);
  const userId = data.userId;
  const password = data.password;
  const sysId = data.sysId;
  const userType = parseInt(data.userType);
  const limitIp = data.limitIp;
  if (isString(userId) && isString(password) && isString(sysId) &&
    isInt(userType)) {
    console.log(!!users.find(
      item => item.userId === userId && item.password === password));
    if (!!users.find(
      item => item.userId === userId && item.password === password)) {
      res.json(resJson(200, '登录成功', responseLogin));
    } else {
      res.json(resJson(500, '账号或密码错误'));
    }
  } else {
    res.json(resJson(500, '参数不全或参数格式不正确'));
  }
});

app.post('/user/logout', upload.array(), function(req, res) {
  const token = req.body.token;
  console.log(req.body);
  if (isString(token) && token === responseLogin.token) res.json(
    resJson(200, '登出成功'));
  else res.json(resJson(500, '登出失败'));
});

function resJson(code, message, data) {
  const result = {code: code, message: message, data};
  if (data) delete data.data;
  return result;
}

function isString(obj) {
  return typeof obj === 'string';
}

function isInt(obj) {
  return typeof obj === 'number';
}

app.listen('999', () => {
  console.log('监听端口 999');
});
