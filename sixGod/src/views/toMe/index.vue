<template>
  <div class="yls-page">
    <div class="messageBox">
      <textarea id="messageInput" name="messageInput" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'ToMe',
    data() {
			return {
        messageObj: {
					message: ''
        }
      };
    }
	};
</script>

<style lang="less" scoped>
  @import "../../styles/globalVar.less";
  .yls-page {
    padding-top: @menuHeight;
    border: 10px solid red;
    align-content: flex-start;
    #messageInput {
      width: 800px;
      padding: 10px;
      border: 1px solid rgba(200,200,200,1);
    }
  }
</style>
