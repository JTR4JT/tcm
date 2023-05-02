<template>
    <div id="myChart" :style="{ width: '800px', height: '600px' }"></div>
</template>
<script>
import * as echarts from "echarts";
import $ from "jquery";
import man from '../assets/人体.svg'

export default {
    data() {
        return {};
    },
    mounted() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('myChart'));
        var option;
        // 绘制图表
        $.get(
            man,
            function (svg) {
                echarts.registerMap('organ_diagram', { svg: svg });
                option = {
                    title: {
                        text: '人体内脏图',
                        left: 'center',
                        top: 20,
                        
                    },
                    tooltip: {},
                    geo: {
                        left: 10,
                        right: '50%',
                        map: 'organ_diagram',
                        selectedMode: 'multiple',
                        emphasis: {
                            focus: 'self',
                            itemStyle: {
                                color: null
                            },
                            label: {
                                position: 'bottom',
                                distance: 0,
                                textBorderColor: '#fff',
                                textBorderWidth: 2
                            }
                        },
                        blur: {},
                        select: {
                            itemStyle: {
                                color: '#b50205'
                            },
                            label: {
                                show: false,
                                textBorderColor: '#fff',
                                textBorderWidth: 2
                            }
                        }
                    },
                    grid: {
                        left: '60%',
                        top: '20%',
                        bottom: '20%'
                    },
                    xAxis: {},
                    yAxis: {
                        data: [
                            '心脏',
                            '大肠',
                            '小肠',
                            '脾',
                            '肾脏',
                            '肺',
                            '肝脏'
                        ]
                    },
                    series: [
                        {
                            type: 'bar',
                            emphasis: {
                                focus: 'self'
                            },
                            data: [121, 321, 141, 52, 198, 289, 139]
                        }
                    ]
                };
                myChart.setOption(option);
                myChart.on('mouseover', { seriesIndex: 0 }, function (event) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        geoIndex: 0,
                        name: event.name
                    });
                });
                myChart.on('mouseout', { seriesIndex: 0 }, function (event) {
                    myChart.dispatchAction({
                        type: 'downplay',
                        geoIndex: 0,
                        name: event.name
                    });
                });
            }
        );
    }
}



</script>