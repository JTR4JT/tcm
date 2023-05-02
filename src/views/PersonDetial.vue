<template>
    <div class="persondetial">
        <div class="grzx">个人中心</div>
        <el-form :model="user" :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
            <el-form-item label="编号" prop="uid">
                <el-input v-model="user.uid" readonly></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="user.uname"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="name">
                <el-input v-model="user.uaccount"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input v-model="user.upassword"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="name">
                <el-input v-model="user.uage"></el-input>
            </el-form-item>
            <el-form-item label="身份证" prop="name">
                <el-input v-model="user.uidcard"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="name">
                <el-input v-model="user.uphoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="resource">
                <el-radio-group v-model="user.usex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('user')">确定修改</el-button>
                <el-button @click="resetForm('user')">置空</el-button>
                <el-button @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import avatar from "@/assets/logo.png"
import axios from "axios";
export default {
    data() {
        return {
            // user: '',
            avatar: avatar,
            user: {
                uid: '',
                uname: '',
                uaccount: '',
                upassword: '',
                uage: '',
                uidcard: '',
                uphoneNumber: '',
                usex: ''
            },
        }
    },
    created() {
        this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的
     
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let _this = this
                    axios.put('http://localhost:8081/user/updateUser', this.user).then(function (response) {
                        if (response.data) {
                            _this.$alert( '修改成功！退出登录重新登录', '修改数据', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    window.sessionStorage.clear();
                                    _this.$router.push('/')
                                }
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            console.log(1);
            this.user = ''
            this.$refs[formName].resetFields();
        },
        back(){
            this.$router.push("/about")
        }
    }
}


</script>
<style lang="less" >
.persondetial {
    width: 600px;
    margin: auto;
    padding: 0;
    height: auto;
}

.grzx {
    width: 150px;
    height: auto;
    margin: auto;
    padding: 0;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: burlywood;
}
</style>