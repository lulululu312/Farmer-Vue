<template>
  <div class="main">
    <div class="content">
      <div class="title">基本资料</div>
      <div >
        <el-input
          placeholder="请输入用户名"
          v-model="userInfo.username"
          maxlength="10"
        >
          <template slot="prepend">用户名</template>
        </el-input>
        <el-input placeholder="请输入性别" v-model="userInfo.sex" maxlength="1">
          <template slot="prepend">性别</template>
        </el-input>
        <el-button style="width: 100%" @click="add"
          >点击进入用户收货地址管理</el-button
        >
        <el-button type="success " class="save" @click="edit">修改</el-button>
        <el-button type="success " class="save" @click="save">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  data() {
    return {
      imgUrl: "",
      userInfo: {
        userId: "",
        phoneNumber: "",
        username: "",
        sex: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    edit() {},
    save() {
      this.axios.put("api/user/update", this.userInfo).then((res) => {
        console.log(res);
      });
    },
    changeAvater() {
      this.axios.get("api/user/avatarUpload").then((res) => {
        console.log(res);
      });
    },
    info() {
      this.$router.push("/users/info");
    },
    address() {
      this.$router.push("/users/address");
    },
    pwdRevise() {
      this.$router.push("/users/pwdrevise");
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  width: 150px;
  height: 40px;
  color: rgb(109, 109, 109);
}
.content {
  display: flex;
  width: 98%;
  height: 520px;
  border: 2px solid rgb(225, 225, 225);
  margin: -17px 0 0 -7px;
}
</style>