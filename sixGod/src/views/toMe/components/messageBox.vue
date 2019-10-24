<template>
  <div class="messageBox">
    <div class="messageTitle">留言板</div>
    <textarea id="messageInput" name="messageInput" cols="20" rows="5"></textarea>
    <div class="messageFloor">
      <el-button type="success" size="mini">发表留言</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessageBox',
    data() {
      return {
        messageObj: {
          message: '',
          name: '',
          email: ''
        }
      };
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
