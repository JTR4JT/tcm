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
        <div >
          <el-row :gutter="20">
            <el-col :span="6" v-for="item in doctorList" :key="item">
              <div class="grid-content bg-purple">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.dimage" class="image">
                  <div style="padding: 14px;word-break: break-all;">
                    <span>姓名：{{ item.dname }}</span>&nbsp;||
                    <span>性别：{{ item.dsex }}</span>&nbsp;||
                    <span>年龄：{{ item.dage }}</span>
                    <br><br>
                    <span>介绍:{{ item.dintroduce }}</span>
                    <div class="bottom clearfix">
                      <el-button type="primary" @click="showaddDialogVisible(item)">预约问诊</el-button>
                      <el-button type="text" class="button" @click="learnmoreall(item.did)">了解更多</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>

          </el-row>

          <!-- 预约对话框 -->
          <el-dialog title="添加预约订单" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <!-- 内容主体区域 -->
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="150px">
              <el-form-item label="选择就诊时间" prop="rtime">
                <div class="block">
                  <el-date-picker v-model="addForm.rtime" value-format="yyyy年MM月dd日 HH:mm:ss" type="datetime"
                    placeholder="选择日期时间" :picker-options="pickerOptions">
                  </el-date-picker>
                </div>
              </el-form-item>

            </el-form>
            <!-- 内容底部区域 -->
            <span slot="footer" class="dialog-footer">
              <el-button @click="addDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="addReservation">确 定</el-button>
            </span>
          </el-dialog>
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
      user: '11',
      doctorList: [],
      addDialogVisible: false,//对话框状态
      addForm: {
        rid: '',
        uid: '',
        did: '',
        rtime: '',
        rstate: '',
      },
      addFormRules: {
        rtime: [
          { required: true, message: "请选择时间", trigger: "blur" }
        ],
      },

    };
  },
  created() {
    var _this = this
    axios.get('http://localhost:8081/doctor/getdoctordesc/0').then(function (res) {
      _this.doctorList = res.data
    })
  },
  methods: {
    learnmoreall(id) {
      this.$router.push('/doctordetail?id=' + id)
    },
    showaddDialogVisible(item) {
      this.addForm.did = item.did;
      this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的user
      this.addForm.uid = this.user.uid
      this.addDialogVisible = true;
    },
    addReservation() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return;
        console.log(this.addForm);
        // 发起请求
        const { data: res } = await axios.post("http://localhost:8081/reservation/addReservation", this.addForm);

        if (res != "success") {
          reservationinfo.state = !reservationinfo.state;
          return this.$message.error("操作失败！！！");
        }
        this.$message.success("操作成功！！！");
        //隐藏
        this.addDialogVisible = false;

      })
    },
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();// 重置表单项
    },
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
// .headup{
//   background-color: #fff;
//   width: 100%;
//   height: 40%;
// }
// .headdown{
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