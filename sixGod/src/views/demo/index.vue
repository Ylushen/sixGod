<template>
  <div id="webgl-output" ref="webglOutput" class="yls-page">
  </div>
</template>

<script>
  import domElement from './Three';

  export default {
    name: 'Demo',
    mounted() {
      this.$refs.webglOutput.appendChild(domElement);
    }
  };
</script>

<style scoped>
  .yls-page {
    padding-top: 0;
  }
</style>
