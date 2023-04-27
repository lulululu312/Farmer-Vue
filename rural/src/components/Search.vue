<template>
  <div class="headsearch">
    <div class="search-input">
      <!-- <el-input
        class="input"
        v-model="input"
        placeholder="请输入搜索内容"
      ></el-input>
      <el-button type="dark" icon="el-icon-search">搜索</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods:{
    
  }
};
</script>


<style scoped>
.headsearch{
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input{
  width:500px;
  border-radius: 8px 0 0 8px;
}
</style>