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
        <div>
          <el-row :gutter="20">
            <el-col :span="6" v-for="item in cmList" :key="item">
              <div class="grid-content bg-purple">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.mimage" class="cmimage">
                  <div style="padding: 14px;">
                    <span>{{ item.mname }}</span>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button" @click="learnmoreallcm(item.mid)">了解更多</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>

          </el-row>
        </div>

      </el-main>
    </el-container>
  </div>
</template>
    
<script>
import axios from 'axios';
import Head from "../views/Head.vue"

export default {

  components: {

    Head
  },
  data() {
    return {
      cmList: []
    };
  },
  created() {
    var _this = this
    axios.get('http://localhost:8081/cm/getcmasc/0').then(function (res) {
      _this.cmList = res.data
    })
  },
  methods: {
    learnmoreallcm(id) {
      this.$router.push('/cmdetail?id=' + id)
    }
  }
}
</script>
    
<style lang="less" >
/*头部部分 */
// .headerdiv {
//   display: block;
//   background-color: rgba(69, 49, 57, 0.623);
//   width: 100%;
//   height: 100%;

// }

// .headup {
//   background-color: #fff;
//   width: 100%;
//   height: 40%;
// }

// .headdown {
//   margin: auto;
//   background-color: rgb(234, 20, 20);
//   width: 100%;
//   height: 60%;
// }

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-header {
  // background-color: #B3C0D1;
  // color: #333;
  // text-align: center;
  // line-height: 60px;
  height: 110px !important;
  width: 100%;
  margin: 0;
  padding: 0 !important;
  z-index: 999;
  position: fixed;

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
  height: 652px;
  margin: 0;
  padding: 0;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>