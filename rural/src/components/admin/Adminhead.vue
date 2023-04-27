<template>
  <div>
    <div class="container">
    <el-page-header @back="goBack" content="管理主页" class="detaikHead"></el-page-header>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      
    }
  }
}
</script>

<style scoped>
.container{
  width:100%;
  padding-top: 15px;
  height: 45px;
  background-color: #f1f1f1;
  box-sizing: content-box;
}

</style>