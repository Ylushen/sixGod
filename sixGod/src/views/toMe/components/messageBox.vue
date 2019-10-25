<template>
  <div class="messageBox" ref="messageBox">
    <div class="messageTitle">留言板</div>
    <textarea v-model="messageObj.message" id="messageInput" name="messageInput" cols="20" rows="5"></textarea>
    <div class="messageFloor">
      <el-button type="success" :loading="this.submitLoading" :disabled="!messageObj.message" size="mini"
                 @click="submit">发表留言
      </el-button>
    </div>
  </div>
</template>

<script>
  import toMeApi from '@/api/module/toMeApi';
  import {Message} from 'element-ui';

  export default {
    name: 'MessageBox',
    data() {
      return {
        messageObj: {
          message: ''
          // name: '',
          // email: ''
        },
        submitLoading: false
      };
    },
    methods: {
      async submit() {
        try {
          this.submitLoading = true;
          await toMeApi.submitMessage(this.messageObj);
          this.$bus.$emit('messageBox');
          this.messageObj = this.$commons.resetObj(this.messageObj);
          Message.success({center: true, message: '留言成功'});
        } finally {
          this.submitLoading = false;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .messageBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    @titleHeight: 30px;

    .messageTitle {
      width: calc(100% - 2px);
      height: @titleHeight;
      position: absolute;
      top: 1px;
      background-color: rgba(240, 240, 240, 1);
      border-radius: 5px 5px 0 0;
      box-shadow: 0 1px 1px rgba(200, 200, 200, 1);
      padding-left: 10px;
      line-height: @titleHeight;
    }

    .messageFloor {
      padding-top: 5px;
      width: 100%;
      text-align: right;
    }

    #messageInput {
      outline: none;
      width: 100%;
      padding: calc(@titleHeight + 5px) 10px 0;
      border-radius: 5px 5px 0 0;
      box-shadow: 0 0 1px rgba(200, 200, 200, 1);
    }
  }

</style>
