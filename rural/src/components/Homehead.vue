
<template>
  <div class="homehead">
    <div class="left-title">
      <a href="/">助农平台</a>
      <span><a href="/detail">农产品商城</a></span>
      <span><a href="/traval">旅游信息</a></span>
      <span><a href="/agriculture">农业学习</a></span>
    </div>
    <div class="right-user">
      <el-dropdown>
        <el-avatar icon="el-icon-user-solid"> </el-avatar>
        <el-dropdown-menu slot="dropdown">
          <div v-if="hastoken">
            <el-dropdown-item @click.native="userInfo">个人主页</el-dropdown-item>
            <el-dropdown-item>订单详情</el-dropdown-item>
            <el-dropdown-item>购物车</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </div>
          <div v-else>
            <el-dropdown-item @click.native="jumplogin">登录</el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import request from '../utils/ax'
export default {
  name: "Homehead",
  data: () => {
    return {
      hastoken: "",
    };
  },
  created() {
    this.hastoken = window.localStorage.getItem("user") == null ? false : true;
  },
  methods: {
    userInfo(){
      this.$router.push('/users')
    },
    jumplogin(){
      this.$router.push({path:'/login'})
    },
    logout() {
      request.get("api/user/logout").then((res) => {
        if (res.code == 200) {
          this.$message.success("退出成功")
          window.localStorage.removeItem("user");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
  color: white;
}
.homehead {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0 0;
}
.homehead .left-title {
  font-size: 30px;
  padding: 0 20px 15px 20px;
  color: white;
}
.homehead .left-title span {
  margin-left: 30px;
  font-size: 20px;
}
.homehead .left-title span img {
  width: 20px;
  height: 10px;
}
</style>
