<template>
  <div>
    <el-container>
      <!-- 加入 position: fixed;后防止塌陷而加的 -->
      <div style="height: 110px;">
      </div>
      <el-header>

        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <span style="font-size: 30px;">关于我们</span>
          <div class="abouttcm">
            <p>尊敬的用户您好，感谢你使用本系统,中医药健康管理平台是由本人独立开发的基于springboot、vue技术的系统</p>
          </div>
            
         
         
        </el-aside>
        <el-container>
          <el-main>
            <div class="maindiv">
              <Swiper></Swiper>
            </div>
            <div class="maindiv2">
              <el-image style="width: 80%;" :src="this.firstcm.mimage" :fit="fit"></el-image>
              <div class="m3f">
                <span>销量第一</span>
              </div>
            </div>
            <div class="maindiv3">
              <el-image style="width: 80%;" :src="this.firstdoctor.dimage" :fit="fit"></el-image>
              <div class="m3f">
                <span>能力最强</span>
                
              </div>
              
            </div>
          </el-main>
        </el-container>
        <el-aside width="250px">
          <div class="asiderdiv1">
            <!-- 个人中心 -->
            <Person></Person>
          </div>
          <div style="background-color: aqua;" class="asiderdiv2">
            <Date></Date>
          </div>

          <div class="asiderdiv3" style="word-break: break-all;">
            <div style="width: 100%;height: 30px;text-align: center;font-weight: 800;">公告栏</div>

            <div style="width: 100%;height: 30px;">
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中医药文化是中国传统优秀文化的重要组成部分,中医文化促进健康事业发展。
              </span>
            </div>
          </div>
        </el-aside>

      </el-container>




      <div style="width: 100%;height:652px;">
        <el-container>

          <el-aside width="180px">中药</el-aside>
          <el-main class="cm">
            <Cm></Cm>
            <div class="cmmsg">
              <router-link to="/allcm">cmdata</router-link>
            </div>
          </el-main>

        </el-container>
      </div>

      <div style="width: 100%;height:800px;margin-top: 160px;">
        1213212
        <el-container>
          <el-container>
            <el-aside width="200px">医生</el-aside>
            <el-main class="doctor">
              <Doctor></Doctor>
              <div class="doctormsg">
                <router-link to="/alldoctor">doctordata</router-link>
              </div>

            </el-main>

          </el-container>

        </el-container>
      </div>

    </el-container>
  </div>
</template>

<script>
import Date from "./Date.vue"
import Swiper from "./swiper.vue"
import Person from "../views/Person.vue"
import Cm from "../views/Cm.vue"
import Doctor from "../views/Doctor.vue"
import Head from "../views/Head.vue"
import axios from 'axios';

export default {
  components: {
    Date,
    Swiper,
    Person,
    Cm,
    Doctor,
    Head
  },
  data() {
    return {
      firstcm: '',
      firstdoctor: ''
    };
  },
  created() {
    var _this = this
    axios.get('http://localhost:8081/doctor/getdoctordesc/1').then(function (res) {
      _this.firstdoctor = res.data[0]
    })
    axios.get('http://localhost:8081/cm/getcmasc/1').then(function (res) {
      _this.firstcm = res.data[0]
    })
    console.log(this.firstcm.mimage)
  },
}
</script>

<style lang="less" scoped>
.abouttcm{
  letter-spacing:2px;
  p{ text-indent:2em; padding:0px; margin:0px; }

}
.maindiv {
  // display: flex;

  background-color: aqua;
  width: 98%;
  height: 450px;
  margin: auto;

}

.maindiv2 {
  display: flex;
  background-color: rgb(240, 19, 19);
  width: 536px;
  height: 245px;
  margin: auto;
  position: absolute;
  margin-top: 5px;
  margin-left: 572px;
  overflow: hidden;
}

.maindiv3 {
  display: flex;
  background-color: rgb(0, 127, 127);
  width: 550px;
  height: 245px;
  margin: auto;
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
  overflow: hidden;
   
}
.m3f{
  width: 20px;    
    margin: 0 auto;    
    line-height: 50px;    
    font-size: 30px; 
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.cm {
  // background-color: rgb(4, 4, 74) !important;
  height: 1000px !important;
}

.doctor {
  height: 1000px !important;
}

.cmmsg {
  // display: flex;
  position: relative;
  width: 150px;
  height: auto;
  background-color: aqua;
  margin-top: 2%;
  float: right;
}

.doctormsg {
  // display: flex;
  position: relative;
  width: 150px;
  height: auto;
  background-color: aqua;
  margin-top: 2%;
  float: right;
}

/*头部部分 */


.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}


.asiderdiv1 {
  display: flex;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 252, 252);
  width: 100%;
  height: 236px;
}

.asiderdiv2 {
  display: flex;
  background-color: rgb(0, 255, 94);
  width: 100%;
  height: 243px;
}

.asiderdiv3 {
  background-color: rgb(142, 135, 228);
  width: 100%;
  height: 236px;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;

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


.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  // line-height: 200px;
  margin: 0;
  padding: 0;
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

// 药材部分
</style>