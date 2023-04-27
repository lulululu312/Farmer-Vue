<template>
  <div class="main">
    <div class="left">
      <a href="">加入我们</a>
      <a href="">用户协议</a>
      <a href="">广告合作</a>
    </div>
    <div class="right">
      <a href="">举报邮箱:123134654@qq.com</a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
a{
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    color: #999;
    padding: 12px 0;
    margin-right: 12px;
}
.main{
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
.left{
  display: flex;
  justify-content:space-around;
}
</style>