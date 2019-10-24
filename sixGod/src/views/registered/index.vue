<template>
  <div class="yls-page">
    <!--    注册表单-->
    <div class="registeredForm">
      <div class="header"><p class="yls-title">注 册</p></div>
      <el-form ref="registeredForm" :model="registeredForm" :rules="registeredFormRules"
               label-width="0">
        <el-form-item prop="userId">
          <el-input v-model="registeredForm.userId" size="medium" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="registeredForm.password"
            size="medium"
            maxlength="20"
            show-password
            prefix-icon="el-icon-lock"
            type="password"></el-input>
        </el-form-item>
        <!--        <el-form-item prop="newPassword2">-->
        <!--          <el-input-->
        <!--            v-model="registeredForm.newPassword2"-->
        <!--            size="medium"-->
        <!--            show-password-->
        <!--            prefix-icon="el-icon-lock"-->
        <!--            type="password"></el-input>-->
        <!--        </el-form-item>-->
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
          <el-button :loading="loading" size="medium" type="success" @click="handleLogin">
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
          password: '',
					email: '',
					phone: ''
				},
				registeredFormRules: {
					userId: [{required: true, message: '请输入账号', trigger: 'blur'}],
					password: [
						{required: true, validator: this.$validator.confirmPasswordRule, trigger: 'blur'},
						{min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur'}],
					// newPassword2: [
					//   {required: true, validator: confirmPasswordRule, trigger: 'blur'},
					//   {min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur'}],
					email: [{required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}],
					phone: [{required: true, validator: this.$validator.confirmPhoneRule, trigger: 'blur'}]
				}
			};
		},
		methods: {
			reset() {
				this.registeredForm = this.$commons.resetObj(this.registeredForm);
				this.$refs.registeredForm.resetFields();
			},
			// 注册
			handleLogin() {
				this.$refs.registeredForm.validate(async valid => {
					// 格式验证正确后回调
					if (valid) {
						this.loading = true;
						try {
							await this.$store.dispatch('Registered', this.registeredForm);
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
  @import "../../styles/globalVar.less";

  @contentHeight: 100vh;
  .yls-page {
    background: url("../../assets/images/login_upBG.jpg") no-repeat center;
    background-size: auto @contentHeight;

    .el-button--medium {
      height: 50px;
      width: 100%;
      border-radius: 25px;
      background-color: #2ec66d !important;
      font-size: 14pt;
    }

    .el-button--medium :active {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .15) inset, 0 0 6px rgba(0, 0, 0, .2) inset;
    }

    .el-input--medium .el-input__inner {
      border-radius: 10px !important;
    }

    .registeredForm {
      box-sizing: border-box;
      padding: 0 30px 20px;
      border-radius: 3%;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
      position: absolute;
      top: calc(10vh + @menuHeight);
      width: 400px;
      background-color: rgba(255, 255, 255, 1);

      .header {
        height: 60px;
        width: 100%;
        line-height: 60px;
      }
    }
  }
</style>
