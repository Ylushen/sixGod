<template>
  <div class="home">
    <div class="searchBox">
      <search-box></search-box>
    </div>
    <div class="urlTabs">
      <el-tabs type="border-card">
        <el-tab-pane v-for="pane in urlBoxArr" :label="pane.label">
          <div class="urlsBox">
            <urlBox v-for="(item,index) in pane.data" :key="index" :urlData=item></urlBox>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import urlBox from '../components/urlBox';
  import searchBox from '../components/searchBox';

  export default {
    name: 'Home',
    components: {urlBox, searchBox},
    data() {
      return {
        urlBoxArr: [
          {
            label: '直播游戏',
            data: [
              {
                '_id': '5c8f5f80f76f670270db9748',
                'label': '斗鱼TV',
                'url': 'https://www.douyu.com/directory/all',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/1125_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9745',
                'label': '龙珠TV',
                'url': 'http://longzhu.com/channels/all',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0980_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9746',
                'label': '虎牙TV',
                'url': 'https://www.huya.com/l',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/1007_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9744',
                'label': '企鹅电竞',
                'url': 'https://egame.qq.com/livelist',
                'img': './img/qieTV.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9738',
                'label': 'ECMA6.0',
                'url': 'http://es6.ruanyifeng.com/#README',
                'img': './img/ES6.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9737',
                'label': 'ThreeJS',
                'url': 'http://techbrood.com/threejs/docs/',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9736',
                'label': 'Python',
                'url': 'https://www.oschina.net/project/lang/25/python',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9735',
                'label': 'NodeJS',
                'url': 'https://www.runoob.com/nodejs/nodejs-http-server.html',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db973d',
                'label': '淘宝购物',
                'url': 'https://www.taobao.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0002_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973c',
                'label': '京东购物',
                'url': 'https://www.jd.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0023_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973b',
                'label': '微博购物',
                'url': 'https://weibo.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0011_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973a',
                'label': '4399小游戏',
                'url': 'http://www.4399.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0015_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9734',
                'label': '优酷视频',
                'url': 'http://youku.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0018_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9733',
                'label': '搜狐视频',
                'url': 'https://tv.sohu.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0230_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9732',
                'label': '平安银行',
                'url': 'http://bank.pingan.com/',
                'img': './img/pingan.png'
              }]
          },
          {
            label: '乱七八糟',
            data: [
              {
                '_id': '5c8f5f80f76f670270db9745',
                'label': '龙珠TV',
                'url': 'http://longzhu.com/channels/all',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0980_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9748',
                'label': '斗鱼TV',
                'url': 'https://www.douyu.com/directory/all',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/1125_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9746',
                'label': '虎牙TV',
                'url': 'https://www.huya.com/l',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/1007_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9744',
                'label': '企鹅电竞',
                'url': 'https://egame.qq.com/livelist',
                'img': './img/qieTV.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9738',
                'label': 'ECMA6.0',
                'url': 'http://es6.ruanyifeng.com/#README',
                'img': './img/ES6.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9737',
                'label': 'ThreeJS',
                'url': 'http://techbrood.com/threejs/docs/',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9736',
                'label': 'Python',
                'url': 'https://www.oschina.net/project/lang/25/python',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db9735',
                'label': 'NodeJS',
                'url': 'https://www.runoob.com/nodejs/nodejs-http-server.html',
                'img': './img/china.jpg'
              },
              {
                '_id': '5c8f5f80f76f670270db973d',
                'label': '淘宝购物',
                'url': 'https://www.taobao.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0002_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973c',
                'label': '京东购物',
                'url': 'https://www.jd.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0023_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973b',
                'label': '微博购物',
                'url': 'https://weibo.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0011_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db973a',
                'label': '4399小游戏',
                'url': 'http://www.4399.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0015_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9734',
                'label': '优酷视频',
                'url': 'http://youku.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0018_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9733',
                'label': '搜狐视频',
                'url': 'https://tv.sohu.com/',
                'img': 'http://stdl.qq.com/stdl/newtabcms/icon/0230_100.png'
              },
              {
                '_id': '5c8f5f80f76f670270db9732',
                'label': '平安银行',
                'url': 'http://bank.pingan.com/',
                'img': './img/pingan.png'
              }]
          }
        ],
        page: {
          total: 30,
          size: 15
        }
      };
    },
    methods: {}
  };
</script>
<style scoped lang="less">
  .el-tabs--border-card {
    box-shadow: 0 0 ;
  }
  .home, .searchBox, .urlsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .urlsBox {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
  }


  @media screen and (min-width: 1401px) {

    .home {
      width: 100%;
      height: auto;

      .searchBox {
        width: 100%;
        height: 150px;
        margin-top: 2vh;
      }

      .urlTabs {
        width: 850px;
        height: 500px;
        margin-top: 2vh;
      }
    }
  }

  @media screen and (max-width: 1400px) {

    .home {
      width: 100%;
      height: auto;

      .searchBox {
        width: 100%;
        height: 100px;
        margin-top: 2vh;
      }

      .urlTabs {
        width: 650px;
        height: 400px;
        margin-top: 2vh;
      }
    }
  }
</style>
