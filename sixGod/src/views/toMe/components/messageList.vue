<template>
  <div class="messageList">
    <div class="messageListTitle">留言({{total}})</div>
    <div v-for="item in pageData" class="aMessage borderTop">
      <div class="left">
        <el-avatar :size="60"
                   :src="item.imageUrl"></el-avatar>
      </div>
      <div class="right">
        <div class="title">
          <div class="titleLeft">{{item.userId}}</div>
          <div class="titleRight">{{item.time}}<span class="sort">{{' '+(item.sort)+'楼'}}</span></div>
        </div>
        <div class="content">{{item.message}}</div>
      </div>
    </div>
    <div class="borderBottom"></div>
    <div class="pagination">
      <el-pagination
        background
        @current-change="updatePage"
        layout="prev, pager, next"
        :total="total"
        :page-size="pageObj.size"
        :current-page="pageObj.count"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import toMeApi from '@/api/module/toMeApi';

  export default {
    name: 'MessageList',
    data() {
      return {
        pageObj: {
          size: 7,
          count: 1
        },
        pageData: [],
        total: 0
      };
    },
    created() {
      this.updatePage();
      this.$bus.$on('messageBox', () => {
        this.updatePage();
      });
    },
    methods: {
      async updatePage(count) {
        count && (this.pageObj.count = count);
        const resData = await toMeApi.getPage(this.pageObj);
        this.pageData = resData.page;
        this.total = resData.total;
      }
    }
  };
</script>

<style lang="less" scoped>
  @border: 1px solid rgba(200, 200, 200, 1);
  .messageListTitle {
    margin-bottom: 10px;
  }

  .pagination {
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .borderBottom {
    border-bottom: @border;
  }

  .borderTop {
    border-top: @border;
  }

  .aMessage {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2px 0;

    /*.left, .right {*/
    /*  border: 1px solid black;*/
    /*}*/

    .left {
      width: 60px;
      display: flex;
      align-items: center;
    }

    .right {
      width: calc(100% - 60px);
      position: relative;
      padding: 5px 0 0 18px;

      .title, .content {
        width: 100%;
      }

      .title {
        height: 25px;
        line-height: 25px;
        display: flex;
        justify-content: space-between;

        .titleLeft, .titleRight {
          line-height: 20px;
        }

        .titleLeft {
          font-size: 14px;
          font-weight: bold;
        }

        .titleRight {
          font-size: 12px;

          .sort {
            color: rgb(21, 105, 151);
          }
        }
      }

      .content {
        min-height: 50px;
        font-size: 12px;
        color: #666666;
      }
    }
  }
</style>
