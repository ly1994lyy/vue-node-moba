<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2">
      <div class="iconfont icon-fanhui"></div>
      <strong class="flex-1">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">2019-6-25</div>
    </div>
    <div v-html="model.body"></div>
  </div>
</template>

<script>
export default {
  props:{
    id:{required:true}
  },
  data(){
    return{
      model:null
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>
