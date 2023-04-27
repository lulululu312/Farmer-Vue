<template>
  <div>
    <div class="home-container">
      <div class="main-content">
        <div class="left-container">
          <div>
            <div
              class="feed-card-article-wrapper"
              v-for="item in article"
              :key="item.articleId"
              @click="jump(item.articleId)"
            >
              <p class="title">{{ item.title }}</p>
              <ul class="cover-list">
                <li class="cover-list-li">
                  <div class="feed-card-cover">
                    <img :src="item.imageUrl[0]" alt="1" />
                  </div>
                </li>
                <li class="cover-list-li">
                  <div class="feed-card-cover">
                    <img :src="item.imageUrl[1]" alt="2" />
                  </div>
                </li>
                <li class="cover-list-li">
                  <div class="feed-card-cover">
                    <img :src="item.imageUrl[2]" alt="2" />
                  </div>
                </li>
                <li class="cover-list-li">
                  <div class="feed-card-cover">
                    <img :src="item.imageUrl[3]" alt="2" />
                  </div>
                </li>
              </ul>
              <div class="feed-card-footer-cmp">
                <div class="left-tools">
                  <div class="feed-card-footer-cmp-author">
                    <p>{{ item.author }}</p>
                  </div>
                  <div class="feed-card-footer-time-cmp">
                    <p>{{ item.createTime }}</p>
                  </div>
                </div>
                <div class="right-tools"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="hot-title">
            <span><img src="../assets/img/热门.png" alt="" /></span>热榜
          </div>
          <div>
            <ol class="hot-list">
              <li v-for="item in article" :key="item.articleId">
                <span @click="jump(item.articleId)">{{ item.title }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/ax";
export default {
  data() {
    return {
      article: {},
    };
  },
  created() {
    this.axios
      .get("api/article/index/list")
      .then(
        (res) => {
          if (res.data.code == 200) {
            console.log(res.data.data[0].title);
            this.article = res.data.data;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    // request.get("/article/index/list").then((res) => {
    //   if (res.code === "200") {
    //     console.log('数据',res)
    //     // this.$message.success("注册成功,为您自动登录,已跳转至个人信息界面");
    //     // request.post("/user/login", this.registerForm).then((res) => {
    //     //   if (res.code === "200") {
    //     //     localStorage.setItem("user", JSON.stringify(res.data));
    //     //     this.$router.push("/person");
    //     //   } else {
    //     //     this.$message.error(res.msg);
    //     //   }
    //     // });
    //   } else {
    //     this.$message.error(res.msg);
    //   }
    // });
  },
  methods: {
    title() {
      console.log(this.article);
    },
    jump(articleId) {
      this.$router.push({ name: "article", query: { articleid: articleId } });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.home-container {
  position: relative;
  min-width: 1280px;
}
.home-container .main-content {
  width: 1066px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0px 16px 0;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.home-container .main-content .left-container {
  margin-top: 20px;
  width: 676px;
}
.home-container .main-content .left-container .feed-card-article-wrapper {
  display: block;
  margin-bottom: 20px;
}
.home-container
  .main-content
  .left-container
  .feed-card-article-wrapper
  .title {
  color: black;
  font-size: 23px;
  cursor: pointer;
}
.home-container
  .main-content
  .left-container
  .feed-card-article-wrapper
  .cover-list {
  list-style: none;
  display: flex;
}

.feed-card-article-wrapper .cover-list .cover-list-li {
  display: flex;
  flex: 1;
}
.feed-card-cover {
  position: relative;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #f2f2f2;
  width: 140px;
  height: 140px;
  cursor: pointer;
}
.feed-card-cover img {
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s ease 0.1s;
  -moz-transition: all 0.5s ease 0.1s;
  transition: all 0.5s ease 0.1s;
}
.feed-card-footer-dislike-cmp .dislike-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: aqua;
  cursor: pointer;
}
.home-container .main-content .right-container {
  -ms-flex-item-align: start;
  /* align-self: flex-start; */
  width: 318px;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  /* background-color: aqua; */
  overflow: hidden;
  white-space: nowrap;
}
.feed-card-footer-cmp-author {
  display: inline-block;
  margin-right: 20px;
  color: #999;
}
.feed-card-footer-comment-cmp {
  display: inline-block;
  margin-right: 20px;
}
.feed-card-footer-time-cmp {
  display: inline-block;
  margin-right: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #999;
  cursor: default;
}
.hot-title img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
}
.hot-title {
  margin-top: 15px;
  font-size: 35px;
  margin-bottom: 20px;

}
.hot-list li {
  color: rgb(186, 36, 66);
  font-size: 18px;
  margin: 0 20px 20px 20px;
  /* list-style: none; */
  cursor: pointer;
}
.hot-list li span {
  color: rgb(53, 51, 51);
  font-size: 17px;
  text-overflow: inherit;
}
</style>