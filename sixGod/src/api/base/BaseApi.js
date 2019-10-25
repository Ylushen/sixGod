// 模块拓展方法
import request from '../../utils/request';

export default class BaseApi {
  constructor(url1, url2 = '') {
    this.baseUrl = `/${url1}${url2 && ('/' + url2)}`;
  }
  
  post(url, data) {
    return request.post(this.baseUrl + url, data);
  }
}
