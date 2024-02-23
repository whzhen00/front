<template>
  <div class="login-container">
    <el-container>
      <el-header class="header-warpped">
        <div class="header-content">
          <h3>后台管理系统</h3>
        </div>
      </el-header>
      <el-main class="login-warpped">
        <div class="login-content">
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="login-tabs" stretch>
              <el-tab-pane label="登录" name="first">
                <el-form>
                  <el-form-item label="账号">
                    <el-input
                      v-model="loginData.account"
                      placeholder="请输入账号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="loginData.password"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <div class="footer-warpped">
                    <div class="forget-password">
                      <span class="forget-password-btn">忘记密码</span>
                    </div>
                    <div class="footer-button">
                      <el-button type="primary" @click="Login">登录</el-button>
                    </div>
                    <div class="footer-go-register">
                      还没有账号?<span class="go-register">马上注册</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="注册" name="second">
                <el-form>
                  <el-form-item label="账号">
                    <el-input
                      v-model="registerData.account"
                      placeholder="请输入账号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="registerData.password"
                      placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input
                      v-model="registerData.repassword"
                      placeholder="请再次输入密码"
                    ></el-input>
                  </el-form-item>
                  <div class="footer-button">
                    <el-button type="primary" @click="Register">注册</el-button>
                  </div>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { login, register } from "@/api/login";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const activeName = ref("first");
const router = useRouter();
interface formData {
  account: string;
  password: string;
  repassword?: string;
}
const loginData: formData = reactive({
  account: "",
  password: "",
});
//登录
const Login = () => {
  login(loginData).then((res) => {
    console.log(res);
    const { token } = res.data;
    if (res.data.status == 0) {
      ElMessage.success(res.data.msg);
      localStorage.setItem("token", token);
      router.push("/home");
    } else {
      ElMessage.error(res.data.msg);
    }
  });
};
const registerData: formData = reactive({
  account: "",
  password: "",
});
const Register = () => {
  if (registerData.repassword !== registerData.password) {
    register(registerData).then((res) => {
      console.log(res);
      if (res.data.status === 0) {
        ElMessage({
          message: "注册成功",
          type: "success",
        });
        activeName.value = "first";
      } else {
        ElMessage({
          message: res.data.msg,
          type: "error",
        });
      }
    });
  } else {
    ElMessage.error("两次密码不一致");
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url("../../assets/Default.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
}
.header-warpped {
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.login-warpped {
  height: 600px;
  --el-main-padding: 0;
  // overflow: hidden;
  .login-content {
    width: 1200px;
    margin: 0 auto;
    height: 600px;
    .box-card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;
      .footer-warpped {
        display: flex;
        flex-direction: column;
        .forget-password {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px 0;

          .forget-password-btn {
            font-size: 12px;
            color: #409eff;
            cursor: pointer;
          }
        }
        .footer-go-register {
          font-size: 12px;
          margin: 12px 0;
          display: flex;
          justify-content: center;
          span {
            font-size: 12px;
            color: #409eff;
            cursor: pointer;
          }
        }
      }

      .footer-button {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 8px;
      }
    }
  }
}
.el-form {
  margin-top: 30px;
}
:deep(.el-input__inner) {
  height: 40px;
}
:deep(.el-tabs__item) {
  color: #333;
  font-size: 18px;
}
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
:deep(.el-button) {
  width: 300px;
  height: 45px;
  font-size: 16px;
}
</style>
