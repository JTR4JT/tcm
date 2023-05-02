<template>
    <div class="con">
      <div class="now-data-myself">
        <div class="now-data-myself-time">{{ date }}</div>
        <div class="now-data-myself-week">{{ week }}</div>
      </div>
      <Calendar
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
        v-on:isToday="clickToday"
      ></Calendar>
    </div>
  </template>
   
  <script>
  /* eslint-disable */
  import Calendar from 'vue-calendar-component';
  export default {
    components: {
      Calendar
    },
    data() {
      return {
        date: "",
        week: ""
      };
    },
    created() {
      var now = new Date();
      this.date = now.getDate();//得到日期
      var day = now.getDay();//得到周几
      var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
      this.week = arr_week[day];
    },
    methods: {
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); // 跳到了本月
      }
    },
  };
  </script>
   
  <style>
  .now-data-myself {
    width: 40%;
    position: absolute;
    /* border-right: 1px solid rgba(227, 227, 227, 0.6); */
    /* 因为vue而强制改的 */
    margin-left: 25px;
    /* margin-top: -80px; */
  }
  .con {
    position: relative;
    display: flex;
    max-width: 280px;
    margin: auto;
    /* margin-top: -10px; */
    
  }
  .con .wh_content_all {
    background: transparent !important;
  }
  .wh_top_changge li {
    color: #000000 !important;
    font-size: 10px !important;
  }
  .wh_content_item, .wh_content_item_tag {
    color: #303133 !important;
  }
  .wh_content_item .wh_isToday {
    background: #00d985  !important;
    color: #fff  !important;
  }
  .wh_content_item .wh_chose_day {
    background: #409EFF  !important;
    color: #ffff  !important;
  }
  .wh_item_date:hover {
      background: rgb(217, 236, 255) !important;
      border-radius: 100px !important;
      color: rgb(102, 177, 255)  !important;
  }
  .wh_jiantou1[data-v-2ebcbc83] {
      border-top: 2px solid #909399;
      border-left: 2px solid #909399;
      width: 7px;
      height: 7px;
  }
  .wh_jiantou2[data-v-2ebcbc83] {
      border-top: 2px solid #909399;
      border-right: 2px solid #909399;
      width: 7px;
      height: 7px;
  }
  .wh_top_tag[data-v-2ebcbc83] {
    color: #409EFF;
    border-top: 1px solid rgba(227, 227, 227, 0.6);
    border-bottom: 1px solid rgba(227, 227, 227, 0.6);
  }
  .wh_container[data-v-2ebcbc83] {
      max-width: 280px;
  }
  .wh_top_changge[data-v-2ebcbc83] {
      display: flex;
      width: 50%;
      margin-left: 43%;
  }
  .now-data-myself-time {
    color: #F56C6C;
    font-size: 18px;
    height: 18px;
    font-family: "Helvetica Neue";
  }
  .now-data-myself-week {
    font-size: 8px;
    color: #909399;
  }
  .wh_top_changge .wh_content_li[data-v-2ebcbc83] {
    font-family: Helvetica;
  }
  .wh_item_date[data-v-2ebcbc83], .wh_top_tag[data-v-2ebcbc83]{
    width: 15px;
    height: 15px;
  }
  .wh_content_item[data-v-2ebcbc83]{
    height: 30px;
  }
  </style>