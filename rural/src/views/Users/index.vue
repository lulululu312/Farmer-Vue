<template>
  <div>
    <Homehead class="homehead"></Homehead>
    <div class="main">
      <div class="left-user">
        <div class="avatar" @click="changeAvater">
          <img src="../../assets/img/img6.jpg" alt="" />
        </div>
        <div class="module">
          <ul class="modile-list">
            <li>
              <span><img src="../../assets/icon/yonghu.png" alt="" /></span>
              用户名:<span>{{ userInfo.username }}</span>
            </li>
            <li>
              <span><img src="../../assets/icon/shouji.png" alt="" /></span
              >手机号:<span>{{ userInfo.phoneNumber }}</span>
            </li>
            <li>
              <span><img src="../../assets/icon/xingbie.png" alt="" /></span
              >性别:<span> {{ userInfo.sex }}</span>
            </li>
            <li>
              <span><img src="../../assets/icon/youxiang.png" alt="" /></span
              >用户邮箱:<span>{{ userInfo.email }}</span>
            </li>
            <li>
              <span
                ><img src="../../assets/icon/daohangdizhi.png" alt="" /></span
              >地址:<span>{{ userInfo.address }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-show">
        <el-button @click="info">基本资料</el-button>
        <el-button @click="address">地址管理</el-button>
        <el-button @click="pwdRevise">密码更改</el-button>
        <!-- <div class="title">基本资料</div>
        <div class="content"> -->
          <router-view></router-view>
         
        </div>
      </div>
    </div>
</template>

<script>
import request from '../../utils/ax'
import Homehead from "@/components/Homehead";
// import Showmodule from "@/components/Showmodule";
export default {
  name: "Users",
  components: {
    Homehead,
  },
  created() {
    request.get("api/user/userInfo").then((res) => {
        this.userInfo=res.data
    });
  },
  data() {
    return {
      imgUrl: "",
      userInfo: {
        userId:"",
        phoneNumber: "",
        username: "",
        sex: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    save() {
      this.axios.put("api/user/update",this.userInfo).then((res) => {
        console.log(res);
      });
    },
    changeAvater(){
      this.axios.get("api/user/avatarUpload").then(res=>{
        console.log(res)
      })
    },
    info(){
      this.$router.push('/users/info')
    },
    address(){
      this.$router.push('/users/address')
    },
    pwdRevise(){
      this.$router.push('/users/pwdrevise')
    }
  },
};
</script>

<style scoped>
.homehead {
  background-color: rgba(49, 147, 171, 0.448);
}
.main {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.main .left-user {
  width: 30%;
  height: 565px;
  position: relative;
  background-color: rgba(31, 174, 31, 0.298);
  overflow: hidden;
  border-radius: 10px 0 0 10px;
}
.main .left-user .avatar {
  position: absolute;
  top: 40px;
  left: 36%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.main .left-user .avatar img{
  width: 100%;
  height: 100%;
}

.main .left-user .module {
  display: flex;
  position: absolute;
  top: 160px;
  left: 16%;
  width: 300px;
  height: 300px;
  /* background-color: brown; */
  justify-content: center;
}
.modile-list {
  list-style: none;
  font-size: 18px;
  width: 100%;
}
.modile-list li {
  margin: 30px 0;
  width: 100%;
  height: 30px;
  color: rgb(107, 105, 105);
  border-bottom: 2px solid rgb(79, 79, 79);
  word-wrap: normal;
}
.modile-list li span:last-child {
  float: right;
}
.modile-list li span img {
  width: 16px;
  height: 16px;
}
.main .right-show {
  box-sizing: border-box;
  width: 60%;
  height: 600px;
  /* background-color: beige; */
  overflow: hidden;
}
.title {
  text-align: center;
  font-size: 30px;
  width: 150px;
  height: 40px;
  border: 1px solid rgba(169, 170, 169, 0.298);
}
.content {
  display: flex;
  width: 98%;
  height: 520px;
  border: 2px solid rgb(225, 225, 225);
  box-sizing: border-box;
  padding: 60px 100px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.save {
  width: 100px;
}
</style>
