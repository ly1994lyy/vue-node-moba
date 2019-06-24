<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/cf472f06627e131168b925685f6ff292.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/a05ce9c0264ba30a9d0892e733bc6874.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/ce7c7cb7fed83a9f657ee914a53e3f20.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-drak-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-shop"></i>
          <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-tiyanfu"></i>
          <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-newpeople"></i>
          <div class="py-2">新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-rongyao"></i>
          <div class="py-2">荣耀·传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-tongren"></i>
          <div class="py-2">同人社区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-yingdi"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gongzhonghao"></i>
          <div class="py-2">公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-story"></i>
          <div class="py-2">版本介绍</div>
        </div>
      </div>  
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>  
      </div>   
    </div> 
    <m-list-card icon="caidan1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      swiperOption: {
        pagination: {
            el: '.pagination-home'
          }
      },
      newsCats:[
        {
          name:"热门",
          newList:new Array(5).fill({}).map(v=>(
            {
              categoryName:'公告',
              title:'部分安卓用户强制更新公告',
              date:'06/16'
            }
          ))
        },
        {
          name:"新闻",
          newlist:new Array(5).fill({}).map(v=>(
            {
              categoryName:'新闻',
              title:'部分安卓用户强制更新公告',
              date:'06/16'
            }
          ))
        },
        {
          name:"新闻",
          newlist:new Array(5).fill({}).map(v=>(
            {
              categoryName:'新闻',
              title:'部分安卓用户强制更新公告',
              date:'06/16'
            }
          ))
        },
        {
          name:"新闻",
          newlist:new Array(5).fill({}).map(v=>(
            {
              categoryName:'新闻',
              title:'部分安卓用户强制更新公告',
              date:'06/16'
            }
          ))
        },
        
      ]
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home{
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active{
      background: map-get($colors , 'info');
    }
  }
}

.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item{
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>
