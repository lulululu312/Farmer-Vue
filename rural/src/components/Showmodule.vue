<template>
  <div>
    <div class="title">基本资料</div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.title{
  text-align: center;
  font-size: 30px;
  width: 150px;
  height: 40px;
  border: 1px solid rgba(169, 170, 169, 0.298);
}
.content{
  width: 98%;
  height: 520px;
  border: 2px solid ;
}
</style>