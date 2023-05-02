<template>
  <div>
    <el-container>
      <!-- 加入 position: fixed;后防止塌陷而加的 -->
      <div style="height: 110px;">
      </div>
      <el-header>

        <Head></Head>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <div class="cmdetailmain">
            <div class="cmimage">
              <el-image style=" height: 300px" :src="cm.mimage" :preview-src-list="srcList">
              </el-image>
            </div>
            <div class="cmmsg">
              <div class="cmconect">
                <div style="padding-top: 30px;">
                  <span style="font-size: 30px;">{{ cm.mname }}</span>
                  <el-divider content-position="left">{{ cm.mtype }}</el-divider>
                </div>
                <div>
                  <div class="work">作用: {{ cm.mwork }}</div>
                  <div style="word-break: break-all;">介绍:{{ cm.mintroduction }}</div>
                </div>
                <div style="padding-top: 50px;">
                  <span style="font-size: 25px;">价格：{{ cm.mprice }}元</span>
                  <span style="font-size: 25px;margin-left: 300px;">库存：{{ cm.minventory }}份</span>
                </div>
              </div>
              <el-input-number style="margin-left: 300px;" v-model="addForm.snumber" @change="handleChange" :min="1"
                :max="100" label="描述文字"></el-input-number>
              <div class="cmdetialbutton">
                <el-button type="info" @click="addcart()">加入购物车</el-button>
                <el-button type="danger" @click="addshop()">购买</el-button>
              </div>
            </div>


          </div>
        </el-card>

      </el-main>
    </el-container>

  </div>
</template>
        
<script>
import axios from 'axios';
import Head from "../views/Head.vue"


export default {

  components: {
    Head,

  },
  data() {
    return {
      user: '',
      userID: '',
      cm: '',
      addForm: {
        sid: '',
        uid: '',
        mid: '',
        snumber: 1,
        saddress: '',
        sprice: '',
        stime: '',
        sstate: '0',
      },
      addShopForm: {
        sid: '',
        uid: '',
        mid: '',
        snumber: 1,
        saddress: '',
        sprice: '',
        stime: '',
        sstate: '0',
      },
    };
  },
  created() {
    var _this = this
    var id = this.$route.query.id
    this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的user
    this.userID = this.user.uid;
    axios.get("http://localhost:8081/cm/findmbyid/" + id).then(function (res) {
      _this.cm = res.data
    })


  },
  methods: {
    async addcart() {
      this.addForm.uid = this.userID
      this.addForm.mid = this.cm.mid
      this.addForm.saddress = this.user.uaddress
      this.addForm.sprice = Number(this.cm.mprice) * this.addForm.snumber
      // 发起请求
      const { data: res } = await axios.post("http://localhost:8081/shop/addShop", this.addForm);
      if (res != "success") {
        return this.$message.error("操作失败！！！");
      }
      this.$message.success("操作成功,请到购物车查看！！！");
    },
     async addshop() {
      this.addShopForm.uid = this.userID
      this.addShopForm.mid = this.cm.mid
      this.addShopForm.saddress = this.user.uaddress
      this.addShopForm.sprice = Number(this.cm.mprice) * this.addForm.snumber
      this.addShopForm.sstate = "1"
      console.log(this.addShopForm)
      // 发起请求
      const { data: res } = await axios.post("http://localhost:8081/shop/addShop", this.addShopForm);
      if (res != "success") {
        return this.$message.error("操作失败！！！");
      }
      this.$message.success("操作成功！！！");
    }
  },
  
  

}
</script>
        
<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 90%;
  height: 500px;

}

.template {
  width: 100px;
}



.el-main {
  height: auto !important;
}

.cmdetailmain {
  display: -webkit-flex;
  display: flex;
}

.cmimage {

  width: 400px;
  height: 400px;
  background-color: aqua;
}

.cmmsg {
  width: 900px;
  height: 400px;
  background-color: rgb(248, 56, 56);
}

.cmconect {
  width: 100%;
  height: 300px;
  background-color: rgb(71, 183, 105);
}

.work {
  width: 100%;
  height: 50px;
  background-color: aquamarine;
}

.cmdetialbutton {
  margin-top: 10px;
  margin-left: 550px;
  width: 600px;
  height: 100px;
}
</style>