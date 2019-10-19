<template>
  <transition name="dialog-fade">
    <div class="yls-dialog" v-if="visible" :style="{width:width}" :class="divClass">
      <div class="dialog-header">
        <p class="yls-title">{{title}}</p>
        <i class="el-icon-circle-close closeIcon" @click="handleClose"></i>
      </div>
      <div class="dialog-content">
        <slot></slot>
      </div>
      <div class="dialog-floor">
        <slot name="dialogFloor"></slot>
        <el-button v-if="showBtnNo" @click="handleClose">{{btnNo}}</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup';
  export default {
    name: 'YlsDialog',
    mixins:[Popup],
    watch: {
      visible(val) {
        val ? this.open() : this.close()
      }
    },
    props: {
      // 额外添加的类名
      divClass: {
        type: String,
        default: null
      },
      // 取消按钮显示
      showBtnNo: {
        type: Boolean,
        default: true
      },
      // 取消按钮
      btnNo: {
        type: String,
        default: '取消'
      },
      // 弹窗宽度
      width: {
        type: String,
        default: '300px'
      },
      title: {
        type: String,
        default: '信息'
      },
      visible: {
        type: Boolean,
        default: false
      },
      beforeClose: Function,
      // 是否带入遮罩
      modal: {
        type: Boolean,
        default: true
      },
      // 是否将遮罩插入body
      modalAppendToBody: {
        type: Boolean,
        default: true
      },
    },

    methods: {
      // 关闭操作
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
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

<style lang="less" scoped>
  @padding10_20: 10px 20px;
  // 基础样式
  .yls-dialog, .dialog-content, .dialog-header, .dialog-floor {
    box-sizing: border-box;
  }

  .dialog-content, .dialog-header, .dialog-floor {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  // 个性化样式
  .yls-dialog {
    position: fixed;
    top: 15vh;
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 2020;
    left: 0;
    right: 0;
    margin: 0 auto 50px;

    .dialog-header {
      width: 100%;
      height: 40px;
      padding: 0 10px;
      // 关闭按钮
      .closeIcon {
        position: absolute;
        right: 10px;
        background-color: #ff8269;
        color: #ff8269;
        font-size: 14pt;
        border-radius: 50%;
        transition: .2s;
      }

      .closeIcon:hover {
        background-color: #ffffff;
        color: #000000;
        transform: scale(1.1, 1.1);
      }

      .closeIcon:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .dialog-content {
      padding: @padding10_20;
    }

    .dialog-floor {
      padding: @padding10_20;
    }
  }

  // 开关闭动画
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    width: 0;
    height: 0;
    opacity: 0;
  }
</style>
