// 全局混入，一般方法
export const Mixins = {
  data() {
  },
  methods: {
    openLogin() {
      this.$store.commit('OPEN_LOGIN')
    }
  }
}
