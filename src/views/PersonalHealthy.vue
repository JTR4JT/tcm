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
          <div class="text item">
            <el-descriptions title="个人健康档案" :column="3" border>
              <el-descriptions-item label="编号" :contentStyle="{ 'text-align': 'center' }">{{ health.hid
              }}</el-descriptions-item>
              <el-descriptions-item label="身高" :contentStyle="{ 'text-align': 'center' }">{{ health.hheight
              }}cm</el-descriptions-item>
              <el-descriptions-item label="体重" :contentStyle="{ 'text-align': 'center' }">{{ health.hweight
              }}kg</el-descriptions-item>
              <el-descriptions-item label="血压" :contentStyle="{ 'text-align': 'center' }">{{ health.hbpress }}mmHg
              </el-descriptions-item>
              <el-descriptions-item label="血糖" :contentStyle="{ 'text-align': 'center' }">{{ health.hbsugar
              }}mmol/L</el-descriptions-item>
              <el-descriptions-item label="睡眠时间" :contentStyle="{ 'text-align': 'center' }">{{ health.hsleep }}h
              </el-descriptions-item>
              <el-descriptions-item label="体温" :contentStyle="{ 'text-align': 'center' }">{{ health.htemperature
              }}℃</el-descriptions-item>
              <el-descriptions-item label="心率" :contentStyle="{ 'text-align': 'center' }"> {{ health.hheartRate
              }}次/分钟</el-descriptions-item>
              <el-descriptions-item label="操作" :contentStyle="{ 'text-align': 'center' }">

                <el-button v-if="!health.hid" type="success" size="mini" @click="addDialogVisible = true">新增</el-button>
                <el-button v-if="health.hid" type="warning" size="mini" @click="centerDialogVisible = true">修改</el-button>
              </el-descriptions-item> </el-descriptions>
          </div>
        </el-card>

      </el-main>
    </el-container>
    <!-- 增加 -->
    <el-dialog title="健康档案信息增加" :visible.sync="addDialogVisible" width="30%" center>
      <el-form :model="addhealth" status-icon ref="addhealth" label-position="left">
        <el-form-item label="身高" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hheight">
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体重" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hweight">
            <template slot="append">kg</template>
          </el-input>
        </el-form-item>
        <el-form-item label="血压" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hbpress">
            <template slot="append">mmHg</template>
          </el-input>
        </el-form-item>
        <el-form-item label="血糖" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hbsugar">
            <template slot="append">mmol/L</template>
          </el-input>
        </el-form-item>
        <el-form-item label="睡眠时间" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hsleep">
            <template slot="append">h</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体温" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.htemperature">
            <template slot="append">℃</template>
          </el-input>
        </el-form-item>
        <el-form-item label="心率" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="addhealth.hheartRate">
            <template slot="append">次/分钟</template>
          </el-input>
        </el-form-item>
      </el-form>


      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addHealth()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="健康档案信息" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :model="health" status-icon ref="health" label-position="left">
        <el-form-item label="身高" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hheight">
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体重" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hweight">
            <template slot="append">kg</template>
          </el-input>
        </el-form-item>
        <el-form-item label="血压" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hbpress">
            <template slot="append">mmHg</template>
          </el-input>
        </el-form-item>
        <el-form-item label="血糖" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hbsugar">
            <template slot="append">mmol/L</template>
          </el-input>
        </el-form-item>
        <el-form-item label="睡眠时间" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hsleep">
            <template slot="append">h</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体温" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.htemperature">
            <template slot="append">℃</template>
          </el-input>
        </el-form-item>
        <el-form-item label="心率" label-width="80px" prop="uaccount">
          <el-input type="text" v-model="health.hheartRate">
            <template slot="append">次/分钟</template>
          </el-input>
        </el-form-item>
      </el-form>


      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editHealth()">确 定</el-button>
      </span>
    </el-dialog>

    <div class="healthecharts">

      <div class="pie">
        <ComparePie></ComparePie>
      </div>
      <div class="height_view">
        <Compare></Compare>
      </div>

    </div>
  </div>
</template>
      
<script>
import axios from 'axios';
import Head from "../views/Head.vue"

import Compare from "../views/echartsview/Compare.vue"
import ComparePie from "../views/echartsview/ComparePie.vue"

export default {

  components: {
    Head,
    Compare,
    ComparePie
  },
  data() {
    return {
      health: {
        hid: '',
        uid: '',
        hheight: '',
        hweight: '',
        hbpress: '',
        hbsugar: '',
        hheartRate: '',
        hsleep: '',
        htemperature: ''
      },
      addhealth: {
        hid: '',
        uid: '',
        hheight: '',
        hweight: '',
        hbpress: '',
        hbsugar: '',
        hheartRate: '',
        hsleep: '',
        htemperature: ''
      },
      user: '',
      userID: '',
      centerDialogVisible: false,
      addDialogVisible: false
    };
  },
  created() {
    var _this = this
    this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的user
    this.userID = this.user.uid;
    this.addhealth.uid = this.userID
    axios.get("http://localhost:8081/healthy/getHByUserId/" + this.userID).then(function (res) {
      _this.health = res.data
      window.sessionStorage.setItem('hid', JSON.stringify(_this.health.hid));
    })


  },
  methods: {
    editHealth() {
      var _this = this;
      axios.put("http://localhost:8081/healthy/editHealth", _this.health).then(function (res) {
        console.log(res);
      })
      this.centerDialogVisible = false
      location.reload()
    },
    addHealth() {
      this.$refs.addhealth.validate(async valid => {
        if (!valid) return; console.log(this.addhealth);
        // 发起请求
        const { data: res } = await axios.post("http://localhost:8081/healthy/addHealth", this.addhealth);

        if (res != "success") {
          typeinfo.state = !typeinfo.state;
          return this.$message.error("操作失败！！！");
        }
        this.$message.success("操作成功！！！");
        //隐藏
        this.addDialogVisible = false;

        location.reload()
      })
    }
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
}

.template {
  width: 100px;
}

.healthecharts {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 900px;
}

.el-main {
  height: auto !important;
}

.pie {
  width: 100%;
  height: 650px;
  background-color: antiquewhite;
}
</style>