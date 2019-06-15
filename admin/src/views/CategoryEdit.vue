<template>
    <div>
        <h2>{{id ? '编辑':'新建'}}分类</h2>
        <el-form @submit.native.prevent="save">
            <el-form-item label='上级名称'>
                <el-select v-model="model.parent">
                    <el-option></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='名称'>
                <el-input v-model="model.name"></el-input>
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
            model:{}
        }
    },
    methods: {
        async save() {
            let res
            if (this.id){
                res = await this.$http.put(`categories/${this.id}`,this.model)
            }else{
                res = await this.$http.post('categories',this.model)
            }
            this.$router.push('/categories/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch() {
            const res = await this.$http.get(`categories/${this.id}`)
            this.model = res.data
        }
    },
    created(){
        this.id&&this.fetch()
    }
}
</script>

