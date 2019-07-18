<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}召唤师技能</h2>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label='名称'>
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label='图标'>
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :headers="getAuthHeader()"
                :on-success="afterUpload">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data (){
        return{
            model:{},
            parents:{}
        }
    },
    methods: {
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
        },
        async save() {
            let res
            if (this.id){
                res = await this.$http.put(`/rest/skills/${this.id}`,this.model)
            }else{
                res = await this.$http.post('/rest/skills',this.model)
            }
            this.$router.push('/skills/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch() {
            const res = await this.$http.get(`/rest/skills/${this.id}`)
            this.model = res.data
        },
    },
    created(){
        this.id&&this.fetch()
    }
}
</script>

