<template>
  <div class="sidebar">
    <el-row class="tac">
      <div class="logo"></div>
      <el-menu class="el-menu-vertical-demo" :router="true">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="clickHome">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>管理</span>
          </template>
          <el-menu-item-group
            v-for="item in menuItems"
            :key="item.id"
            @click="clickMenu(item)"
          >
            <el-menu-item :index="item.route">{{ item.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item> -->
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 2, title: "用户管理", route: "/admin/users" },
        { id: 3, title: "商品管理", route: "/admin/products" },
        { id: 4, title: "文章管理", route: "/admin/artical" },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.route,
      });
    },
    },
};
</script>

<style scoped>
.logo {
  width: 200px;
  height: 150px;
  background-color: aquamarine;
}
.tac {
  height: 100vh;
}
</style>
