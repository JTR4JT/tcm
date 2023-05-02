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
          <div class="doctordetailmain">
            <div class="doctorimage">
              <el-image style=" height: 400px" :src="doctor.dimage" :preview-src-list="srcList">
              </el-image>
            </div>
            <div class="doctormsg">
              <div class="doctorconect">
                <div style="padding-top: 30px;">
                  <span style="font-size: 30px;">{{ doctor.dname }}</span>
                  <el-divider content-position="left"></el-divider>
                </div>
                <div>
                  <el-descriptions class="margin-top" :column="3" direction="vertical" border>
                    <el-descriptions-item label="性别">{{ doctor.dsex }}</el-descriptions-item>
                    <el-descriptions-item label="年龄">{{ doctor.dage }}</el-descriptions-item>
                    <el-descriptions-item label="介绍" :span="2">{{ doctor.dintroduce }}</el-descriptions-item>
                    <el-descriptions-item label="电话号码">
                      {{ doctor.dphone }}
                    </el-descriptions-item>
                    <el-descriptions-item label="就诊次数">{{ doctor.dservice }}</el-descriptions-item>
                    <el-descriptions-item label="上班时间">{{ doctor.dtime }}</el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
              <div class="doctordetialbutton">
                <el-button type="info" @click="showaddDialogVisible(doctor)">预约</el-button>

              </div>
            </div>


          </div>
        </el-card>

      </el-main>
    </el-container>

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
      doctor: '',
      addDialogVisible: false,//对话框状态
      addForm: {
        rid: '',
        uid: '',
        did: '',
        rtime: '',
        rstate: '',
      },
    };
  },
  created() {
    var _this = this
    var id = this.$route.query.id

    this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的user
    this.userID = this.user.uid;
    axios.get("http://localhost:8081/doctor/getUpdateDoctor?id=" + id).then(function (res) {
      _this.doctor = res.data
      console.log(res)
    })


  },
  methods: {
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
  }

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

.doctordetailmain {
  display: -webkit-flex;
  display: flex;
}

.doctorimage {

  width: 400px;
  height: 400px;
  background-color: aqua;
}

.doctormsg {
  width: 900px;
  height: 400px;
  background-color: rgb(248, 56, 56);
}

.doctorconect {
  width: 100%;
  height: 300px;
  background-color: rgb(71, 183, 105);
}

.work {
  width: 100%;
  height: 50px;
  background-color: aquamarine;
}

.doctordetialbutton {
  margin-top: 50px;
  margin-left: 750px;
  width: 600px;
  height: 100px;
}
</style>