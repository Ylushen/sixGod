<template>
  <div class="yls-page">
    <div class="page-mid">
      <message-box></message-box>
      <message-list></message-list>
    </div>
  </div>
</template>

<script>
  import messageBox from './components/messageBox';
  import messageList from './components/messageList';

  export default {
    name: 'ToMe',
    components: {messageBox, messageList},
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
  @import "../../styles/globalVar.less";
  @messageWidth: 600px;
  .yls-page {
    padding-top: calc(@menuHeight + 10px);
    align-items: flex-start;

    .page-mid {
      width: @messageWidth;
    }

    .buttons {
      margin: 0;
      padding: 0;
    }

  }
</style>
