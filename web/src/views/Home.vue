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
</style>
