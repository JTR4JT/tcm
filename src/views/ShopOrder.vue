<template>
    <div>
        <el-container>
            <!-- 加入 position: fixed;后防止塌陷而加的 -->
            <div style="height: 110px;">
            </div>
            <el-header>

                <Head></Head>
            </el-header>
            <el-main>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="font-size:20px">订单信息</span>
                        
                    </div>
                    <div style="padding-top: 30px;">
                        <el-table :data="cart" border style="width: 71.3%;top:-50px">
                        <el-table-column fixed prop="uid" label="用户信息" width="100">
                        </el-table-column>
                        <el-table-column prop="mid" label="药材信息" width="120">
                        </el-table-column>
                        <el-table-column prop="snumber" label="数量" width="120">
                        </el-table-column>
                        <el-table-column prop="sprice" label="价格" width="100">
                        </el-table-column>
                        <el-table-column prop="saddress" label="收货地址" width="100">
                        </el-table-column>
                        <el-table-column prop="stime" label="交易时间" width="200">
                        </el-table-column>
                        <el-table-column label="操作" width="190">
                            <template slot-scope="scope">
                                <el-button type="danger" @click="del(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    </div>

                </el-card>

            </el-main>
        </el-container>

    </div>
</template>
          
<script>
import axios from 'axios';
import Head from "../views/Head.vue"


export default {

    components: {
        Head,

    },
    data() {
        return {
            user: '',
            cart: '',
            cm: ''
        };
    },
    created() {
        this.user = JSON.parse(window.sessionStorage.getItem('user'));//取出session里面的user
        var _this = this
        axios.get(`http://localhost:8081/shop/getShopTypeCO?id=${_this.user.uid}&type=1`).then(function (res) {
            _this.cart = res.data.data
            console.log(_this.cart)
        })

    },
    methods: {
        handleChange(shop) {
            var _this = this
            axios.get("http://localhost:8081/cm/findmbyid/" + shop.mid).then(function (res) {
                _this.cm = res.data
                shop.sprice = _this.cm.mprice * shop.snumber
                axios.put("http://localhost:8081/shop/editShop", shop).then(function (res2) {
                    if (res2.data != "success") {
                        return _this.$message.error("操作失败！！！");
                    }
                    _this.$message.success("操作成功！！！");

                });

            })
        },


        async del(shop) {
            const confirmResult = await this.$confirm('操作会删除该条信息,是否继续', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(err => err)
            if (confirmResult != 'confirm') {
                return this.$message.info("已取消删除");
            }
            const { data: res } = await axios.delete("http://localhost:8081/shop/deleteShop/" + shop.sid);
            if (!res) {
                return this.$message.error("删除失败！！！");
            }
            this.$message.success("删除成功！！！");
            location.reload()
        },
    },



}
</script>
          
<style lang="less" scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 90%;
    height: 500px;

}

.template {
    width: 100px;
}



.el-main {
    height: auto !important;
}

.cmdetailmain {
    display: -webkit-flex;
    display: flex;
}

.cmimage {

    width: 400px;
    height: 400px;
    background-color: aqua;
}

.cmmsg {
    width: 900px;
    height: 400px;
    background-color: rgb(248, 56, 56);
}

.cmconect {
    width: 100%;
    height: 300px;
    background-color: rgb(71, 183, 105);
}

.work {
    width: 100%;
    height: 50px;
    background-color: aquamarine;
}

.cmdetialbutton {
    margin-top: 10px;
    margin-left: 550px;
    width: 600px;
    height: 100px;
}
</style>