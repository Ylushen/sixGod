<template>
  <div class="about">
    <button @click="visible=!visible">阿三水水水水水水</button>
    <yls-dialog :visible.sync="visible"></yls-dialog>
  </div>
</template>
<script>
  import Children from './children';
  import ylsDialog from '../../ylsComponents/ylsDialog';

  export default {
    components: {Children, ylsDialog},
    data() {
      return {
        visible: true
      };
    }

  };
</script>
