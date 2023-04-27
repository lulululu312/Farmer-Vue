<template>
  <div class="main">
    <div class="content">
      <div class="title">用户地址</div>
      <div>
        <el-button type="primary" @click="dialogVisible = true"
          >添加收货地址</el-button
        >
        <el-dialog
          title="请输入新增地址信息"
          :visible.sync="dialogVisible"
          width="60%"
          :before-close="handleClose"
        >
          <div class="addressAdd">
            <!-- <el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">姓名</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">电话</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">省</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">市</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">县/区</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">小区</template> </el-input
            ><el-input placeholder="请输入内容" v-model="input1">
              <template slot="prepend">具体位置</template>
            </el-input> -->
            <el-form>
              <el-form-item label="收件人姓名" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="省" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="市" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="区/县">
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="镇" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="具体地址" >
                <el-input autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
      <div class="addresslist">
        <ul>
          <li v-for="(item, index) in addresslist" :key="index">
            <el-card style="width: 95%; margin: 5px 0 0 15px">
              <div>
                收货人：<el-input
                  style="width: 30%; height: 10px; margin: 0 50px 0 0"
                  v-model="item.username"
                  :disabled="arrtibute"
                  >{{ item.username }}</el-input
                ><span
                  >联系方式:<el-input
                    type
                    style="width: 30%; height: 10px; margin: 0 0 0 10px"
                    v-model="item.userPhone"
                    :disabled="arrtibute"
                    >{{ item.userPhone }}</el-input
                  ></span
                >
              </div>
              <div>
                地址:<el-input
                  style="width: 40%; height: 10px; margin: 20px 20% 0 30px"
                  v-model="item.address"
                  :disabled="arrtibute"
                  >{{ item.address }}</el-input
                >
                <span
                  ><el-button
                    type="danger"
                    size="mini"
                    style="margin: 0 10px 0 0"
                    @click="edit(index)"
                    >修改</el-button
                  ></span
                >
                <span
                  ><el-button type="success" size="mini" @click="save(index)"
                    >保存</el-button
                  ></span
                >
              </div>
            </el-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrtibute: true,
      dialogVisible: false,
      addresslist: [
        {
          addressId: 1,
          username: "陆陆",
          userPhone: "231232142",
          address: "陕西延安安飒飒",
        },
        {
          addressId: 2,
          username: "路路",
          userPhone: "21312421",
          address: "陕西西安市",
        },
        {
          addressId: 2,
          username: "路路",
          userPhone: "21312421",
          address: "陕西西安市",
        },
        {
          addressId: 2,
          username: "路路",
          userPhone: "21312421",
          address: "陕西西安市",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("退出将不保存内容，确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    edit(index) {
      var lis=document.getElementsByTagName('el-input')
      console.log(lis)
      lis[index].setAttribute('disabled',false)
    },
    save(index) {
      
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  width: 150px;
  height: 40px;
  color: rgb(109, 109, 109);
}
.content {
  width: 98%;
  height: 520px;
  border: 2px solid rgb(225, 225, 225);
  margin: -17px 0 0 -7px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.addresslist ul {
  list-style: none;
  height: 100%;
}
.addressAdd {
  display: flex;
}
</style>