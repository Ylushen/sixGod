<template>
  <div class="content">
    <!--    注册表单-->
    <div class="registeredForm">
      <div class="header"><p class="yls-title">注册</p></div>
      <el-form ref="registeredForm" :model="registeredForm" :rules="registeredFormRules"
               label-width="0px">
        <el-form-item prop="userId">
          <el-input v-model="registeredForm.userId" size="medium" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input
            v-model="registeredForm.newPassword"
            size="medium"
            show-password
            prefix-icon="el-icon-lock"
            type="password"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword2">
          <el-input
            v-model="registeredForm.newPassword2"
            size="medium"
            show-password
            prefix-icon="el-icon-lock"
            type="password"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            v-model="registeredForm.email"
            size="medium"
            prefix-icon="el-icon-message"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            v-model="registeredForm.phone"
            size="medium"
            maxlength="11"
            prefix-icon="el-icon-mobile-phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" style="width: 100%" size="medium" type="primary" @click="handleLogin">
            注册
          </el-button>
        </el-form-item>
        <el-link type="primary" @click="reset">重置</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link type="primary">忘记密码</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {Mixins} from '../../mixins/mixins';

  export default {
    name: 'LoginDialog',
    mixins: [Mixins],
    data() {
      const confirmPasswordRule = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registeredForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // 按钮加载
        loading: false,
        registeredForm: {
          userId: '',
          newPassword: '',
          newPassword2: '',
          name: '',
          email: '',
          phone: ''
        },
        registeredFormRules: {
          userId: [{required: true, message: '请输入账号', trigger: 'blur'}],
          newPassword: [
            {required: true, validator: this.$validator.confirmPasswordRule, trigger: 'blur'},
            {min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur'}],
          newPassword2: [
            {required: true, validator: confirmPasswordRule, trigger: 'blur'},
            {min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur'}],
          email: [{required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}],
          phone: [{required: true, validator: this.$validator.confirmPhoneRule, trigger: 'blur'}]
        }
      };
    },
    methods: {
      reset() {
        this.registeredForm = this.$commons.resetObj(this.registeredForm);
      },
      // 注册
      handleLogin() {
        this.$refs.registeredForm.validate(async valid => {
          // 格式验证正确后回调
          if (valid) {
            this.loading = true;
            try {
              await this.$store.dispatch('Registered', this.loginForm);
              this.$store.commit('CLOSE_LOGIN');
            } catch (e) {

            }
            this.loading = false;
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .content {
    box-sizing: border-box;
    height: calc(100vh - 61px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .registeredForm {
      box-sizing: border-box;
      padding: 0 30px 20px;
      border: 1px solid black;
      position: absolute;
      top: 10vh;
      width: 400px;
      background-color: rgba(0, 0, 0, 0.1);

      .header {
        height: 60px;
        width: 100%;
        line-height: 60px;
      }
    }
  }
</style>
