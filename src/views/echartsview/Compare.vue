<template>
    <div id="myChart" :style="{ width: '800px', height: '600px' }"></div>
</template>
<script>
import axios from 'axios';

export default {

    name: 'Bar',
    mounted() {
        let _this = this
        this.hid = JSON.parse(window.sessionStorage.getItem('hid'));//取出session里面的user
        axios.get('http://localhost:8081/healthy/healthBar/' + _this.hid).then(function (res) {
            let myChart = _this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                legend: {},
                tooltip: {
                    top: '50%',
                    left: 'center',
                },
                dataset: {
                    dimensions: ['product', 'average', 'yourself'],
                    source: res.data.data
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' },]


            }
            )
        })


    },
    data() {
        return {
            hid: '',
        }
    }
}
</script>