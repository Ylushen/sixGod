// 重置对象方法
const resetObj = (obj) => {
  const result = {};
  if (obj instanceof Object) {
    for (const item in obj) {
      const type = Object.prototype.toString.call(obj[item]).
      match(/^\[object (\w+)]$/)[1];
      switch (type) {
        case 'Undefined':
          result[item] = void 0;
          break;
        case 'Null':
          result[item] = null;
          break;
        default:
          result[item] = eval(`${type}()`);
      }
    }
    return result;
  } else {
    throw new Error('请传入正确的值');
  }
};
export default {
  resetObj
};
