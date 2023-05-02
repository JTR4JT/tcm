<template>
  <div id="myChart2" :style="{ width: '100%', height: '700px' }"></div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Bar',
  mounted() {
    let _this = this
    this.hid = JSON.parse(window.sessionStorage.getItem('hid'));//取出session里面的user
    axios.get('http://localhost:8081/healthy/healthPie/'+_this.hid).then(function (res) {  
      let myChart2 = _this.$echarts.init(document.getElementById('myChart2'))
      myChart2.setOption({
        title: {
          text: '健康档案',
          subtext: '与标准值的对比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '身高',
            type: 'pie',
            radius: '20%',
            center: ['25%', '30%'],
            data: res.data.data[0],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '体重',
            type: 'pie',
            radius: '20%',
            center: ['50%', '30%'],
            data: res.data.data[1],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '血压',
            type: 'pie',
            radius: '20%',
            center: ['75%', '30%'],
            data: res.data.data[2],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '血糖',
            type: 'pie',
            radius: '20%',
            center: ['25%', '55%'],
            data: res.data.data[3],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '心率',
            type: 'pie',
            radius: '20%',
            center: ['50%', '55%'],
            data: res.data.data[4],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '体温',
            type: 'pie',
            radius: '20%',
            center: ['75%', '55%'],
            data: res.data.data[5],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '睡眠时间',
            type: 'pie',
            radius: '20%',
            center: ['25%', '80%'],
            data: res.data.data[6],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },

        ]
      });
    })



  },
  data(){
            return{
                hid:'',
            }
        }


}
</script>