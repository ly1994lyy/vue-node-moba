<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}铭文</h2>
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
            <el-form-item label="属性">
                <el-button @click="model.property.push({})">
                    <i class="el-icon-plus"></i>添加属性
                </el-button>
            </el-form-item>
            <el-row type="flex" style="flex-wrap:wrap">
                <el-col :md="12" v-for="(item,i) in model.property" :key="i">
                <el-form-item :label="'属性'+(i+1)">
                    <el-input v-model="item.body" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="danger" @click="model.property.splice(i,1)">删除</el-button>
                </el-form-item>
                </el-col>
            </el-row> 
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
            model:{
                property:[]
            },
        }
    },
    methods: {
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
        },
        async save() {
            let res
            if (this.id){
                res = await this.$http.put(`/rest/runes/${this.id}`,this.model)
            }else{
                res = await this.$http.post('/rest/runes',this.model)
            }
            this.$router.push('/runes/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch() {
            const res = await this.$http.get(`/rest/runes/${this.id}`)
            this.model = res.data
        },
    },
    created(){
        this.id&&this.fetch()
    }
}
</script>

