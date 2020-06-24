<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide><router-link to="/news">新闻</router-link></swiper-slide>
            <swiper-slide><router-link to="/gpublic">格兰芬多休息室</router-link></swiper-slide>
            <swiper-slide><router-link to="/spublic">斯莱特林休息室</router-link></swiper-slide>
            <swiper-slide><router-link to="/lpublic">拉文克劳休息室</router-link></swiper-slide>
            <swiper-slide><router-link to="/hpublic">赫夫帕夫休息室</router-link></swiper-slide>
        </swiper>
        <router-view/>
    </div>
</template>

<script>
export default {
    name:"Hswiper",
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      }
    }
    
}
</script>

<style lang="stylus" scoped>
.swiper
    margin 0.2rem 0.2rem
    font-size 16px
    color #888
    text-align center
</style>