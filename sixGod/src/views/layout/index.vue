<template>
  <div class="yls-layout" @mousewheel.stop="updateMenu">
    <transition name="fade">
      <head-menu v-show="menuShow"></head-menu>
    </transition>
    <router-view :menuActive="menuShow"></router-view>
    <login-dialog
      v-if="loginDialogActive"
      :visible.sync="loginDialogActive"></login-dialog>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import headMenu from '../../components/headMenu';
  import loginDialog from '../../components/loginDialog';

  export default {
    name: 'Layout',
    components: {loginDialog, headMenu},
    data() {
      return {
        menuShow: true,
        activeIndex: '1'
      };
    },
    computed: {
      ...mapGetters([
        'loginDialogActive'
      ])
    },
    methods: {
      updateMenu(e) {
        if ((e.wheelDelta > 0 && !this.menuShow) || (e.wheelDelta < 0 && this.menuShow)) this.menuShow = !this.menuShow;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/globalVar.less";

  .yls-layout {
    padding-top: @menuHeight;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-60px);
    opacity: 0;
  }
</style>
