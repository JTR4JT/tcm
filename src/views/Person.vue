<template>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
            <span style="text-shadow: 5px 5px 5px aqua;">欢迎你的到来</span>
        </div>
        <div class="persecond">
            <!-- 头像 -->
            <el-avatar :src="avatar" style="background-color: white; box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1)"
                :size="80"></el-avatar>
            <div class="inavatar">
                <span>昵称：{{ user.uname }}</span>
                <br>
                <span>手机号码：{{ user.uphoneNumber }}</span>
                <br>
                <span>地址信息：{{user.uaddress}}</span>
            </div>
        </div>
        <div class="perthird">
            <el-link :underline="false" href="/persondetial" style="font-size: 12px;">个人中心<i class="el-icon-view el-icon--right"></i> </el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" href="/personalhealthy" style="font-size: 12px;">健康档案<i class="el-icon-view el-icon--right"></i> </el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link :underline="false" style="font-size: 12px;" @click="loginout()">退出登录<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
    </el-card>
</template>

<script>
import avatar from "@/assets/logo.png"
export default {
    data() {
        return {
            user: '',
            avatar: avatar
        }
    },
    created() {
        this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的
    },
    methods: {
        loginout(){
            window.sessionStorage.clear();
            this.$router.push("/")
        }
    }
}

</script>
<style lang="less" >
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.clearfix {
    text-align: center;
}

.box-card {
    width: 240px;
    height: 230px;
    margin: auto;
    padding: 0;

}

.persecond {
    display: flex;
    width: 100%;
    height: 120px;
    margin-top: 2px;


}

.inavatar {
    margin-left: 2px;
    width: 66%;
    height: 100%;
    // border: 1px solid rgb(175, 175, 175);
    // background-color: cornflowerblue;
    span{
        font-size: 10px;
        font-style: italic;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 100;
        word-break: break-all;
        
    }
}

.perthird {
    width: 100%;
    height: 90px;
    margin-top: 2px;
    background-color: aqua;
}
</style>