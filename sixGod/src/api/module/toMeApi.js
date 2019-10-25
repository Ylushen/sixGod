import BaseApi from '../base/BaseApi';

class ToMeApi extends BaseApi {
  constructor() {
    super('toMe');
  }
  
  getPage(data) {
    return new Promise(resolve => {
      const resData = [];
      for (let i = 0; i < data.size; i++) {
        resData.push({
          userId: 'liuliuliu',
          imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          message: '你是真的牛',
          sort: 100 - data.size * (data.count - 1) - i,
          time: '2019-10-24 16:55'
        });
      }
      
      resolve({page: resData, total: 100});
    });
    // return this.post('page', data);
  }
  
  submitMessage(data) {
    return new Promise(resolve => {
      resolve({
        ...data || {},
        time: Date.now()
      });
    });
    // return this.post('submit', data)
  }
}

export default new ToMeApi();
