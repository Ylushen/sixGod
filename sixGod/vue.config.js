const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  /**
   * You can set by yourself according to actual condition
   * You will need to set this if you plan to deploy your site under a sub path,
   * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then assetsPublicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail https://cli.vuejs.org/config/#baseurl
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // 代码控制 error 导致编译错误，要符合eslint规则
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 888,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    // 代理，将/API代理到 http://vipmp.test/admin
    proxy: {
      '/api': {
        target: 'http://localhost:999/admin',
        // 上面的参数列表中有一个changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
        changeOrigin: true,
        // 重写API。/api/xxx 现在会被代理到请求 http://localhost:8080/xxx,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    return {
      // We provide the app's title in Webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      name: 'yls',
      externals: {
        'vue': 'Vue',
        'element-ui': 'ELEMENT',
        'axios': 'axios',
        // 'echarts': 'echarts',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex'
      },
      resolve: {
        alias: {
          '@': resolve('src')
        }
      },
      plugins: [
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      ]
    };
  }
};
