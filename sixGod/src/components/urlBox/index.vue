<template>
  <div class="box" v-bind="$attrs" v-on="$listeners">
    <div class="image" @click="open(urlData.url)" :style="{backgroundImage:'url('+urlData.img+')'}"></div>
    <div class="title">{{urlData.label}}</div>
  </div>
</template>

<script>
  export default {
    name: 'urlBox',
    props: {
      urlData: {
        type: Object
      }
    },
    methods: {
      open(url) {
        window.open(url, '_blank');
      }
    }
  };
</script>

<style lang="less" scoped>
  .box {
    width: 20%;
    height: 33%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    .image {
      @widthAndHeight: 40%;
      width: @widthAndHeight;
      height: 0;
      padding-top: @widthAndHeight;
      margin-top: 15%;
      border-radius: 20%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: .2s;
    }

    .image:hover {
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer
    }

    .image:hover {
      background-size: 120% 120%;
    }

    .image:hover + .title {
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.8);
    }

    .title {
      width: 100%;
      margin-top: 10px;
      font-size: 13pt;
      line-height: 20pt;
      text-align: center;
      transition: .2s;
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
</style>
