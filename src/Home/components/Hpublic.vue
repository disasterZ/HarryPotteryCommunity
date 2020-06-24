<template>
    <div>
        <div class="pass" v-if="open">
            <img src="../../assets/Hufflepuff/Badge.png">
            <input type="text" placeholder="通关密语？" v-model="password">
        </div>
        <div v-else>
        <div v-for="(news,index) in Hnews" :key=index class="article">
            <div class="info">
                <div class="title">{{news.title}}</div>
                <p class="type">{{news.type}}</p>
                <p class="time">{{news.time}}</p>
                <p class="disscuss">{{news.disscuss}}</p>
            </div>
            <div class="a-img">
                <img :src="news.pic">
            </div>
        </div>
        <div class="article">
            <div class="info"></div>
            <div class="a-img"></div>
        </div>
        </div>
    </div>
</template>

<script>
import Hufflepuff from '@/assets/Hufflepuff/Badge.png'
export default {
    name:"hpublic",
    data(){
        return{
            password:"",
            open:true,
            Hnews:[
            {title:"獾院欢迎你",type:"新闻",time:"1小时前",disscuss:259,pic:Hufflepuff},
        ]
      }
    },
    watch:{
        password(){
            if(this.password==this.$store.getters.hPassword){
                this.open=false
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.pass
    text-align center
    input
        width 3rem
        text-align center
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
            left 10%
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
                text-align center
            .time
                width 1rem
                font-size 12px
                float left
                padding .05rem .05rem
                margin-top 1rem
            .disscuss
                width 1rem
                font-size 12px
                float left
                padding .05rem .05rem
                margin-top 1rem
</style>