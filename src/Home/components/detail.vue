<template>
    <div class="artical">
        <img :src=pic class="back">
        <div class="exit" :style="op">
            <router-link tag="div" to="/news" class="icon iconfont exiticon">&#xe658;</router-link>
        </div>
        <div class="main-a">
            <div class="time">{{time}}</div>
            <div class="title">{{title}}</div>
            <div class="vent"><div>{{vent}}</div></div>
            <div class="content">{{content}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'detail',
    data(){
        return{
            title:"",
            type:"",
            time:"",
            pic:"",
            content:"",
            vent:"",
            op:{
                background:"rgba(238,238,238,0)"
            }
        }
    },
    watch:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            console.log(top)
            if(top>233){
                this.op={
                background:"rgba(0,0,0,1)"
            }
            }else{
            }
        }
    },
    created(){
        let params={
                id:this.$route.params.id         
            }
            axios.post('http://localhost:3000/api/artical/getById',params).then((res)=>{
               const data=res.data[0]
               this.title=data.title
               this.content=data.content
               this.time=data.time
               this.pic=data.pic
               this.type=data.type
               this.vent=data.vent
            })
    }
}
</script>

<style lang="stylus" scoped>
.artical
    background #fff
    .back
        position absolute
        width 100%
        z-index -1
        top 0
    .exit
        width 100%
        margin-bottom 3rem
        position fixed
        top 0
        .exiticon
            font-size 0.7rem
    .main-a
        background #f1f1f1
        width 100%
        margin-top 5rem
        border-top-left-radius 0.5rem
        border-top-right-radius 0.5rem
        box-shadow 1px -1px #ccc
        text-align center
        height 20rem
        .time
            padding 0.2rem 0.5rem
            color #999
        .title
            width 100%
            text-align center
            font-size 24px
            margin 0.4rem 0rem
        .vent
            width 100%
            padding 0.1rem 0
            text-align center
            color #eee
        .content
            text-align left 
            font-size 16px
            line-height 0.5rem
            padding 0rem 0.4rem 
        
</style>