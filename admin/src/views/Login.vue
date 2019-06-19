<template>
    <div class="login-container">
        <el-card header="请先登录" class="login-card">
            <el-form @submit.native.prevent="login">
                <el-form-item v-model="model.username" label="用户名">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item v-model="model.password" label="密码">
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{}
        }
    },
    methods:{
        login(){
            console.log(this.model)
        }
    }
}
</script>


<style scoped>
.login-card{
    width: 25rem;
    margin: 10rem auto;
}
</style>