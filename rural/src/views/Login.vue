<template>
  <div class="login">
    <div class="login-title"><p>欢迎欢迎欢迎</p></div>
    <div class="login-card">
      <div class="login-choice">
        <div class="login-button" @click="loginButton">登录</div>
        <div class="enroll-button" @click="enrollButton">注册</div>
      </div>
      <div class="login-message" v-if="showTag == 'login'">
        <el-form ref="form" label-width="60px" size="mini" class="login-form">
          <el-form-item label="手机号">
            <el-input v-model="form.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-button type="primary" style="margin-left: 100px" @click="login"
            >登录</el-button
          >
        </el-form>
      </div>
      <div class="enroll-message" v-if="showTag == 'enroll'">
        <el-form ref="form" label-width="80px" size="mini" class="enroll-form">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码">
            <el-input type="password" v-model="ruleForm.checkPass"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="enroll" @click="submitForm"
          >注册</el-button
        >
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        phoneNumber: "",
        password: "",
      },
      ruleForm: {
        phoneNumber: "",
        password: "",
        checkPass: "",
      },
      showTag: "login",
    };
  },
  methods: {
    loginButton() {
      this.showTag = "login";
    },
    enrollButton() {
      this.showTag = "enroll";
    },
    login() {
      if (this.form.phoneNumber == "" || this.form.password == "") {
        this.$message.error("请输入用户名和密码");
        return false;
      }
      this.axios.post("api/user/login", this.form).then((res) => {
        console.log(res);
        window.localStorage.setItem(
          "user",
          JSON.stringify(res.data.data.token)
        );
        this.$message.success("登录成功");
        this.$router.push("/");
        this.saveId({userId:res.data.data.userId})
        console.log(this.$store.state.userId)
      });
    },
    submitForm() {
      if (this.ruleForm.password !== this.ruleForm.checkPass) {
        this.$message.error("密码不一致");
      } else {
        this.axios.post("api/user/signup", this.ruleForm).then((res) => {
          // console.log(res);
          if (res.data.code == 400) {
            alert(res.data.msg);
          } else {
            window.localStorage.setItem("user", res.data.data.token);
            this.$router.push("/users");
            this.saveId({userId:res.data.data.userId})
            console.log(this.$store.state.userId)
          }
        });
      }
    },
    ...mapMutations(['saveId']),
  },
};
</script>

<style scoped>
.login {
  height: 740px;
  background-image: url("../assets/img/img5.jpg");
  position: relative;
}
.login-title {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -150px;
  font-size: 50px;
  color: rgb(188, 237, 115);
}
.login .login-card {
  border-radius: 5px;
  width: 300px;
  height: 300px;
  background-color: rgb(237, 238, 239);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  box-shadow: 12px 12px 2px 1px rgba(63, 141, 237, 0.2);
}
.login-choice {
  display: flex;
  flex: 1;
  align-items: center;
  height: 50px;
  /* border-bottom: 2px solid rgb(67, 67, 67); */
  border-radius: 5px;
}
.login-choice .login-button,
.enroll-button {
  width: 50%;
  height: 100%;
  text-align: center;
  border-radius: 0 2px 2px 0;
  line-height: 50px;
  font-size: 19px;
  font-weight: 600;
}
.login-choice .login-button:hover {
  background-color: rgba(143, 141, 141, 0.202);
  border-radius: 5px;
  border-bottom: 0;
  cursor: pointer;
}
.login-choice .enroll-button:hover {
  background-color: rgba(143, 141, 141, 0.212);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.login-message {
  padding: 20px;
  height: 200px;
}
.login-message .login-form {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.enroll-message {
  padding: 20px;
  height: 200px;
}
.enroll {
  margin-left: 100px;
}
</style>


