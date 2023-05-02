<template>
  <div class="lbt">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in images" :key="item">
        <el-image style="width: 100%; height: 450px" :src="item.iaddress" ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return {
      images:[],
    }
  },
  created() {
        var _this = this
        console.log(123)
        axios.get('http://localhost:8081/image/getImage/1').then(function (resp) {
        
            _this.images = resp.data;  console.log(_this.images[0].iaddress);
        })
    }
}

</script>

<style>
.lbt {
  width: 100%;
  height: 450px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>