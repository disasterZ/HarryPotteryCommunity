<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide ><img :src="Hogwarts" class="swiper-pic"></swiper-slide>
            <swiper-slide ><img :src="Hogwarts" class="swiper-pic"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <router-link tag="div" v-for="(news,index) in Hnews" :key=index class="article" :to="{name:'detail',params:{id:news.id}}">
            <div class="info">
                <div class="title">{{news.title}}</div>
                <p class="type">{{news.type}}</p>
                <p class="time">{{news.time}}</p>
            </div>
            <div class="a-img">
                <img :src="news.pic">
            </div>
        </router-link>
        <div class="article">
            <div class="info"></div>
            <div class="a-img"></div>
        </div>
    </div>
</template>

<script>
import Hogwarts from '@/assets/Hogwarts.gif'
import Gryffindor from '@/assets/Gryffindor/Badge.png'
import Slytherin from '@/assets/Slytherin/Badge.png'
import Hufflepuff from '@/assets/Hufflepuff/Badge.png'
import Ravenclaw from '@/assets/Ravenclaw/Badge.png'
import axios from 'axios'
export default {
    name:"news",
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        Hogwarts:Hogwarts,
        Hnews:[]
      }
    },
    created(){
         axios.post('http://localhost:3000/api/artical/get').then((res)=>{
            this.Hnews=res.data.reverse()
        })
    }
}
</script>

<style lang="stylus" scoped>
.swiper
    width 100%
    text-align center
    .swiper-pic
        width 90%
        border-radius 0.2rem
    .article
        display flex
        overflow hidden
        width 85%
        margin 0.2rem 0.3rem
        padding 0.2rem 0.2rem
        border-bottom 2px solid #eee
        .a-img
            width 3rem
            height 2rem
            overflow hidden
            position relative
            left 18%
            img 
                width 3rem
        .info
            .title
                color #000
                font-size 18px
                margin-top 0.3rem
                text-align left
            .type
                width 0.8rem
                font-size 12px
                background #888
                color white
                padding .05rem .05rem
                border-radius .5rem
                float left
                margin-top 1rem
            .time
                width 1.5rem
                font-size 12px
                float left
                padding .05rem .05rem
                margin-top 1rem
            
        
        
</style>