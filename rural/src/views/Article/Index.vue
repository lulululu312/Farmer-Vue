<template>
  <div>
    <Headers class="homehead"></Headers>
    <div class="article-detail-container">
      <div class="main">
        <h1>{{ articalData.title }}</h1>
        <div class="article-meta">
          <span>{{ articalData.createTime }}</span
          ><span>{{ articalData.author }}</span>
        </div>
        <div v-for="item in paragraphs" :key="item.paragraphId">
          <p>
            {{item.content}}
          </p>
          <img :src=item.paragraphImageUrl alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "../../components/Homehead.vue";

export default {
  data() {
    return {
      Id: "",
      articalData: [],
      paragraphs: [],
    };
  },
  components: {
    Headers,
  },
  methods: {
    open() {
      console.log(this.articalData);
      console.log(this.paragraphs);
    },
  },
  created() {},
  mounted() {
    this.Id = this.$route.query.articleid;
    this.axios.get(`api/article/index/info/${this.Id}`).then(
      (res) => {
        if (res.data.code == 200) {
          console.log(res.data.data.articleId);
          this.articalData = res.data.data;
          this.paragraphs = res.data.data.paragraphs;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style scoped>
.homehead {
  background-color: rgba(49, 147, 171, 0.448);
}
/* .article-detail-container{
  padding: 20px 20px 0 20px;
} */
.main {
  margin: 50px 130px 0 230px;
  width: 700px;
}
.main p {
  text-indent: 2em;
  font-size: 21px;
  color: rgb(58, 58, 58);
  line-height: 35px;
}
.main .article-meta {
  margin: 10px 0 20px 0;
}
.main .article-meta span {
  color: rgb(113, 114, 114);
}
.main img {
  width: 100%;
}
</style>