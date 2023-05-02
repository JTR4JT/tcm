<template>
  <div class="headerdiv">
    <div class="headup">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
        <el-menu-item index="/about">首页</el-menu-item>
        <el-menu-item index="/cart">购物车</el-menu-item>
        <el-menu-item index="/shoporder">订单</el-menu-item>
        <el-menu-item index="/reservation">预约信息</el-menu-item>
        <el-submenu index="2">
          <template slot="title">网站导航</template>
          <el-submenu index="2-4">
            <template slot="title">排行榜</template>
            <el-menu-item index="/alldoctor">医生业务榜</el-menu-item>
            <el-menu-item index="/allcm">药材销售榜</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <div class="headdown">
      <el-input placeholder="请输入内容" v-model="searchMsg" class="input-with-select">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="医生" value="1"></el-option>
          <el-option label="药材" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default{
  data (){
    return {
      searchType: '1',
      searchMsg:''
    }
  },
  methods:{
    search()
    {
      if(this.searchType == 1){
        this.$router.push('/doctorsearch?msg=' + this.searchMsg)
      }
      else{
        this.$router.push('/cmsearch?msg=' + this.searchMsg)
      }
      
    }
  }
}
</script>
<style lang="less">
.headerdiv {
  display: block;
  // background-color: rgba(69, 49, 57, 0.623);
  width: 100%;
  height: 100%;

}

.headup {
  // background-color: #fff;
  width: 100%;
  height: 40%;
}

.headdown {
  margin: auto;
  // background-color: rgb(223, 33, 33);
  width: 100%;
  height: 60%;
}
</style>