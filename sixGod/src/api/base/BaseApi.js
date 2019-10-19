// 模块拓展方法
import request from '../../utils/request'

export class BaseApi {
  constructor(url1, url2) {
    this.url = `/${url1}/${url2}`
  }
  
  post(data) {
    return request.post(this.url, data)
  }
}
