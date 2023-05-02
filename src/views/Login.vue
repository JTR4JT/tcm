<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix" style="text-align: center;">
                <span>中医药健康管理平台</span>
            </div>
            <el-tabs v-model="currentIndex" stretch @tab-click="handleTabsClick">
                <el-tab-pane label="登陆" name="login">
                    <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm">
                        <el-form-item label="账号" label-width="80px" prop="uaccount">
                            <el-input type="text" v-model="loginForm.uaccount" />
                        </el-form-item>
                        <el-form-item label="密码" label-width="80px" prop="upassword">
                            <el-input type="password" v-model="loginForm.upassword" />
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                            <el-button type="warning" @click="submitForm('loginForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm">
                        <el-form-item label="用户名" label-width="80px" prop="uname">
                            <el-input type="text" v-model="registerForm.uname" />
                        </el-form-item>
                        <el-form-item label="账号" label-width="80px" prop="uaccount">
                            <el-input type="text" v-model="registerForm.uaccount" />
                        </el-form-item>
                        <el-form-item label="密码" label-width="80px" prop="upassword">
                            <el-input type="password" v-model="registerForm.upassword" />
                        </el-form-item>
                        <el-form-item label="确认密码" label-width="80px" prop="configurePassword">
                            <el-input type="password" v-model="registerForm.configurePassword" />
                        </el-form-item>
                        <el-form-item label="身份证号" label-width="80px" prop="uidcard">
                            <el-input v-model="registerForm.uidcard"></el-input>
                        </el-form-item>
                        <el-form-item label="电话号码" label-width="80px" prop="uphoneNumber">
                            <el-input v-model="registerForm.uphoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="地址" label-width="80px">
                            <el-input v-model="registerForm.uaddress"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" label-width="80px" prop="uage">
                            <el-input v-model.number="registerForm.uage"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" label-width="80px">
                            <el-radio-group v-model="registerForm.usex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                            <el-button type="warning"  @click="submitForm('registerForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        // 验证规则
        var validateConfigurePassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (value !== this.registerForm.upassword) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        var checkuphoneNumber = (rule, value, callback) => {
            const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (value == '' || value == undefined || value == null) {
                callback();
            } else {
                if ((!reg.test(value)) && value != '') {
                    callback(new Error('请输入正确的电话号码'));
                } else {
                    callback();
                }
            }
        };
        var checkuName = (rule, value, callback) => {
            //验证名字的正则表达式
            /**
             * 1、不能有特殊字符和数字；
             * 2、可以输入英文，可以有空格，可以输入英文名字中的点；
             * 3、可以输入汉字；
             * 4、中文英文不能同时出现；
             * 5、长度在1-20；
             */
            const realnameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/
            setTimeout(() => {
                if (!realnameReg.test(value)) {
                    return callback(new Error('请输入1-20个汉字'))
                } else {
                    callback()
                }
            }, 100)
        };
        var checkIdCard = (rule, value, callback) => {
            /*
            *[1-9]\d{5}                 前六位地区，非0打头
            *(18|19|([23]\d))\d{2}      出生年份，覆盖范围为 1800-3999 年
            *((0[1-9])|(10|11|12))      月份，01-12月
            *(([0-2][1-9])|10|20|30|31) 日期，01-31天
            *\d{3}[0-9Xx]：              顺序码三位 + 一位校验码
            */
            const idNumberReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            if (!value) {
                return callback(new Error('请输入身份证号码'))
            }
            setTimeout(() => {
                if (!idNumberReg.test(value)) {
                    return callback(new Error('请输入正确格式的身份证号码'))
                } else {
                    callback()
                }
            }, 100)
        };
        var checkAge = (rule, value, callback) => {
            if (value < 0) {
                return callback(new Error('请输入合法的年龄'))
            }
            setTimeout(() => {
                callback()
            })
        }
        return {
            currentIndex: "login",
            loginForm: {
                upassword: '123456',
                uaccount: '123456',
            },
            registerForm: {
                uid: '',
                uname: '',
                uaccount: '',
                upassword: '',
                uidcard: '',
                uphoneNumber: '',
                uaddress: '',
                uage: '',
                usex: '男'
            },
            activeTab: "login",
            rules: {
                uname: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { validator: checkuName, trigger: "blur" }
                ],
                upassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" },
                ],
                uidcard: [
                    { required: true, message: '请输入身份证', trigger: 'blur' },
                    { validator: checkIdCard, trigger: "blur" }
                ],
                uphoneNumber: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { validator: checkuphoneNumber, trigger: "blur" }
                ],
                uaccount: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 5, max: 10, message: "长度在 5 到 10个字符", trigger: "blur" },
                ],
                uage: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    { type: 'number', message: '年龄需要为数字值' },
                    { validator: checkAge, trigger: "blur" }
                ],
                configurePassword: [
                    {
                        validator: validateConfigurePassword,
                        trigger: "blur",
                    },
                ],

            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.activeTab === "login") {
                        // 登陆
                        let _this = this
                        axios.put('http://localhost:8081/user/userLogin', _this.loginForm).then(function (resp) {
                            if (resp.data.code == -1) {
                                _this.$alert('账号不存在', '提示', {
                                    confirmButtonText: '确定'
                                })
                            }
                            if (resp.data.code == -2) {
                                _this.$alert('密码错误', '提示', {
                                    confirmButtonText: '确定'
                                })
                            }
                            if (resp.data.code == 0) {
                                //跳转到SystemAdmin
                                //展示当前登录用户信息
                                console.log(resp.data);
                                _this.$alert('登录成功', '提示', {
                                    confirmButtonText: '确定'
                                })
                                // window.sessionStorage.setItem("user",resp.data.data.aname);
                                window.sessionStorage.setItem('user', JSON.stringify(resp.data.data));
                                _this.$router.push({ path: "/about" })
                            }
                        })
                    }
                    if (this.activeTab === "register") {
                        let _this = this
                        axios.put('http://localhost:8081/user/userRegister', _this.registerForm).then(function (resp) {
                            if (resp.data.code == -1) {
                                _this.$alert('账号被占用', '提示', {
                                    confirmButtonText: '确定'
                                })
                            }
                            if (resp.data.code == -2) {
                                _this.$alert('该身份证已经注册过了', '提示', {
                                    confirmButtonText: '确定'
                                })
                            }
                            if (resp.data.code == 0) {
                                _this.$alert('注册成功请登录', '提示', {
                                    confirmButtonText: '确定'
                                })
                                setTimeout(() => {
                                    location.reload()
                                }, 2000)

                            }
                        })
                    }
                } else {
                    return;
                }
            });
        },
        handleTabsClick(tab) {
            this.activeTab = tab.name;
        },
    },
};
</script>

<style scoped lang="less">
.login {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url("https://5b0988e595225.cdn.sohucs.com/images/20171028/9c7114322b0f400a8ba3c9e5539eee45.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    
    // background-image:  radial-gradient( #eababaf7, #f9da87) ;
    
    .box-card {
        width: 500px;
        height: auto;
        background-color: rgb(234, 187, 125);
        opacity: 0.9!important;
    }
}

</style>