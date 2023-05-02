<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in cmList" :key="item">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.mimage"
              class="cmimage">
            <div style="padding: 14px;">
              <span>{{ item.mname }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="learnmore(item.mid)">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      cmList: [],
      addForm: {
                sid: '',
                uid: '',
                mid: '',
                snumber: '',
                saddress: '',
                sprice: '',
                stime: '',
                sstate: '0',
            },
    };
  },
  created() {
    var _this = this
    axios.get('http://localhost:8081/cm/getcmasc/8').then(function (res) {
      _this.cmList = res.data
    })
  },
  methods: {
    learnmore(id) {
      this.$router.push('/cmdetail?id=' + id)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  height: 2000px;
}



.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.cmimage {
  width: 100%;
  height: 280px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>