const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  // We provide the app's title in Webpack's name field, so that
  // it can be accessed in index.html to inject the correct title.
  name: 'e分惠运营管理平台',
  externals: {
    'vue': 'Vue',
    'element-ui': 'ELEMENT',
    'axios': 'axios',
    'echarts': 'echarts',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
