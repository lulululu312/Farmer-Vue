<template>
  <div>
    <Headers class="homehead"></Headers>
    <div class="allrow">
      <el-row>
        <el-col :span="16">
          <div class="show">
            <el-carousel :interval="4000" type="card" height="250px">
              <el-carousel-item v-for="item in contentImg" :key="item.key">
                <img :src="item.src" :alt="item.title" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="shop-car">
            <h2>购物车</h2>
            <hr />
            <div class="car-content">
              <ul class="car-list">
                <li>1.111</li>
                <li>2.111</li>
                <li>3.111</li>
                <li>4.111</li>
                <li>5.111</li>
                <li>6.111</li>
                <li>7.111</li>
                <li>8.111</li>
                <li>9.111</li>
                <li>10.111</li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <div class="details-list">
            <div>
              <h3>商品列表</h3>
              <hr />
            </div>
            <div>
              <ul class="details">
                <li v-for="item in shoplist" :key="item.shopId">
                  <el-card>
                    <img
                      :src="item.image"
                      class="image"
                    />
                    <div style="overflow:hidden;text-overflow:ellipsis;">
                      <span style="white-space:nowrap;">{{item.name}}</span>
                      <div class="bottom clearfix">
                        <p class="price">￥Price</p>
                        <el-button size="mini" @click="decs(index)">-</el-button>
                        <input v-model="count" style="width:25px;height:20px;outline: none;margin:0 5px">
                        <el-button size="mini" @click="add(index)">+</el-button>
                        <el-button type="pramary" class="button"
                          size="mini" style="margin:5px 0 0 0" plain >加入购物车</el-button
                        >
                      </div>
                    </div>
                  </el-card>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="backtop">
        <a href="/detail"><el-button type="primary">回到顶部</el-button></a>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../../components/Homehead.vue";
export default {
  name: "detail",
  components: {
    Headers,
  },
  data: () => {
    return {
      contentImg: [
        { title: "图片1", src: require("../../assets/img/img1.jpg"), key: 0 },
        { title: "图片2", src: require("../../assets/img/img2.png"), key: 1 },
        { title: "图片3", src: require("../../assets/img/img3.jpg"), key: 2 },
        { title: "图片4", src: require("../../assets/img/img4.jpg"), key: 3 },
        { title: "图片5", src: require("../../assets/img/img5.jpg"), key: 4 },
        { title: "图片6", src: require("../../assets/img/img6.jpg"), key: 5 },
      ],
      shoplist:[
        {shopId:1,name:'东西',image:require('../../assets/img/img3.jpg')},
        {shopId:2,name:'sdfsd ',image:require('../../assets/img/img4.jpg')},
        {shopId:3,name:'阿萨德',image:require('../../assets/img/img1.jpg')},
        {shopId:4,name:'阿萨德',image:require('../../assets/img/img1.jpg')},
      ],
      count:0
    };
  },
  methods:{
    add(index){
      this.count++
    },
    decs(index){
      if(this.count>=1){
        this.count--
      }
    }
  }
};
</script>

<style scoped>
body {
  padding-top: 24px;
  height: 100%;
  overflow: auto;
}
.homehead {
  background-color: rgba(49, 147, 171, 0.448);
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  border-radius: 5px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #a8b1ba;
  border-radius: 5px;
}
.allrow {
  padding: 50px 100px 0 100px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.192);
}
.show {
  /* border: 1px solid black; */
  height: 300px;
  overflow: hidden;
  box-sizing: content-box;
  margin: 0 40px;
}
.show img {
  height: 100%;
  width: 100%;
}
.allrow .shop-car {
  border: 1px solid black;
  margin: 0 20% 0 15%;
  height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  position: sticky;
  top: 20px;
  width: 250px;
}
.car-list {
  list-style: none;
  padding: 5px;
}
.car-list li {
  height: 20px;
  border-bottom: 1px solid black;
  margin-top: 10px;
}

.shop-suggest {
  border: 1px solid black;
  margin-left: 15%;
  width: 300px;
}
.suggest-list {
  list-style: none;
  padding: 5px;
}
.suggest-list li {
  height: 100px;
  border: 1px solid black;
  margin-bottom: 5px;
}
.details {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.details li {
  width: 200px;
  height: 250px;
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: rgba(228, 229, 229, 0.545);
  margin: 20px 0;
}
.backtop {
  position: fixed;
  bottom: 100px;
  right: 120px;
}
.image{
  height: 150px;
  width: 100%;
}
.price{
  color: crimson;
}
</style>