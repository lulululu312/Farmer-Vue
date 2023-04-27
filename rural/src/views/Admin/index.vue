<template>
  <div class="container">
    <el-container>
      <el-aside width="200px"><Adminleft></Adminleft></el-aside>
      <el-container>
        <el-header><AdminHead></AdminHead></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Adminleft from "../../components/admin/Adminleft.vue";
import AdminHead from "../../components/admin/Adminhead.vue";
export default {
  name: "index",
  components: {
    Adminleft,
    AdminHead,
  },
};
</script>

<style scoped>
*{
  padding: 0;
}
.container {
  height: 100vh;
}
</style>