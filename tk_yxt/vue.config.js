// 用于vuecli的一些配置，官方有文档
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
  configureWebpack: config => {
    return {
      // We provide the app's title in Webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      name: 'yls',
			// 懒加载
      externals: {
        'vue': 'Vue',
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
