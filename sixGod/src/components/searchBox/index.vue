<template>
  <div class="yls-search">
    <el-input size="medium"
              @keydown.enter.native="toSearch"
              v-model="search.word"
              class="yls-search-input"
              v-bind="$attrs"
              v-on="$listeners">
      <el-select style="width: 90px" slot="prepend" v-model="search.type">
        <el-option
          v-for="item in searchType"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <i
        class="el-icon-search el-input__icon"
        slot="suffix"
        @click="toSearch">
      </i>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'searchBox',
    data() {
      return {
        search: {
          word: '',
          type: 'baidu'
        }
      };
    },
    computed: {
      searchType() {
        let result = null;
        const searchType = this.$globalConstants.searchType;
        result = Object.keys(searchType).map(item => ({label: searchType[item].label, value: item}));
        return result;
      }
    },
    methods: {
      toSearch() {
        const searchType = this.$globalConstants.searchType;
        switch (this.search.type) {
          case 'sogou':
            window.open(searchType.sogou.url + this.search.word, '_blank');
            break;
          default:
            window.open(searchType.baidu.url + this.search.word, '_blank');
            break;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .yls-search {
    width: 50%;
    min-width: 500px;
    max-width: 700px;
  }
</style>