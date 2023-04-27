<template>
  <div class="home">
    <div class="backimg">
    <Homehead />
    <!-- <div class="homehead"><Homehead /></div> -->
    <Search />
    </div>
    <Index />
    <div class="backtop"><a href="/"><el-button type="primary">回到顶部</el-button></a></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Homehead from "@/components/Homehead";
import Search from "@/components/Search"
import Index from "@/components/Index"
import Footer from "@/components/Footer"

export default {
  name: "Home",
  components: {
    Homehead,
    Search,
    Index,
    Footer
  },
};
</script>

<style scoped>
.backimg{
  background-image: url("../assets/img/img5.jpg");
  background-size:100% 100%;
}
.home{
  position: relative;
}

.backtop{
  position: fixed;
  bottom: 100px;
  right: 80px;
}
</style>