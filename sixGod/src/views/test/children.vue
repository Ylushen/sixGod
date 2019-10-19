<template>
  <div>我是子组件</div>
</template>

<script>
  // 传入三个参数
  import Popup from 'element-ui/src/utils/popup';

  export default {
    name: 'children',
    mixins: [Popup],

    watch: {
      visible(val) {
        if (val) {
          this.open();
        } else {
          this.close();
        }
      }
    },
    mounted() {
      if (this.visible) {
        this.rendered = true;
        this.open();
      }
    }
  };

</script>

<style scoped>

</style>
