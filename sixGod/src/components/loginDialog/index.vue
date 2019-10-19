<template>
  <el-dialog v-bind="$attrs" :close-on-click-modal="false" v-on="$listeners" title="登录" width="300px"
             :beforeClose="loginDialogClose" :show-btn-no="false">
    <!--    注册表单-->
    <div class="loginForm">
      <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules"
               label-width="0px">
        <el-form-item prop="userId">
          <el-input v-model="loginForm.userId" size="medium" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            size="medium"
            show-password
            prefix-icon="el-icon-lock"
            type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" style="width: 260px" size="medium" type="primary" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <el-link type="primary" @click="toPath">注册</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link type="primary">忘记密码</el-link>
    </div>
  </el-dialog>
</template>

<script>
  import {Mixins} from '../../mixins/mixins';

  export default {
    name: 'LoginDialog',
    mixins: [Mixins],
    data() {
      return {
        // 按钮加载
        loading: false,
        loginForm: {
          userId: '',
          password: ''
        },
        loginFormRules: {
          userId: [{required: true, message: '请输入账号', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}, {min: 6, message: '密码不少于六位', trigger: 'blur'}]
        }
      };
    },
    methods: {
      // 关闭操作
      loginDialogClose(done) {
        this.loginForm = this.$commons.resetObj(this.loginForm);
        this.$store.commit('CLOSE_LOGIN');
      },
      // 登录
      handleLogin() {
        this.$refs.loginForm.validate(async valid => {
          // 格式验证正确后回调
          if (valid) {
            this.loading = true;
            try {
              await this.$store.dispatch('Login', this.loginForm);
              this.$store.commit('CLOSE_LOGIN');
            } finally {
              this.loading = false;
            }
          }
        });
      },
      toPath() {
        this.loginDialogClose();
        if (this.$route.fullPath !== '/registered') this.$router.push('/registered');
      }
    }
  };
</script>

<style lang="less" scoped>
  .loginForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
