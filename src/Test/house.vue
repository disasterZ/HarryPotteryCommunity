<template>
    <div class="user" :style='screenHeight'>
        <img src="../assets/Hogwarts/SchoolBadge.png" class="badge">
        <div class="appear" :class="{'animated fadeOut':starts}" v-show="ss">
            <div class="animated fadeIn apps">尊敬的{{name}}{{sex}}：</div>
            <div class="animated fadeIn delay-2s apps">欢迎您来到霍格沃兹魔法学校</div>
            <div class="animated fadeIn delay-2s apps">在这里，你将学习使用魔法</div>
            <div class="animated fadeIn delay-3s apps">但在这之前</div>
            <div class="animated fadeIn delay-4s apps">你需要通过一些测试</div>
            <div class="animated fadeIn delay-4s apps">来决定你的学院</div>
            <button class="animated fadeIn slower delay-5s start" @click="starttest()">开始测试</button>
        </div>
        <div v-show="starts" class="qanda">
            <div class="animated fadeIn">{{qa.question}}</div>
            <div class="answers animated fadeIn delay-1s">
                <button v-for="(an,key) in qa.answer" :key="key" class="answer" @click="changeq(an.to)">
                    {{key}} {{an.text}}
                </button>
            </div>
        </div>
        <div class="final" v-show="final">
            <div class="final-title">您的学院为:</div>
            <img :src="housepic">
            <div class="final-house" :style="housecolor">{{qa.house}}</div>
            <router-link to="/" class="tomain">返回登录页</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import test from '@/assets/json/house.json'
import Gryffindor from '@/assets/Gryffindor/Badge.png'
import Slytherin from '@/assets/Slytherin/Badge.png'
import Hufflepuff from '@/assets/Hufflepuff/Badge.png'
import Ravenclaw from '@/assets/Ravenclaw/Badge.png'
export default {
    name:'housetest',
    data(){
        return{
            screenHeight:{
                height:document.documentElement.clientHeight+"px"
            },
            ss:true,
            name:"",
            sex:"",
            starts:false,
            test:test,
            to:"1",
            qa:{},
            housepic:Gryffindor,
            final:false,
            housecolor:{

            },
            id:""
        }
    },
    methods:{
        starttest(){
            this.starts=true
            this.ss=false
        },
        changeq(que){
            console.log(que)
            this.to=que
            this.qa=this.test[this.to]
            if(que=="G"){
                this.starts=false,
                this.final=true,
                this.housepic=Gryffindor
                this.housecolor={color:"#c19451",background:"#d02126"}
                this.$store.dispatch('setHouse','Gryffindor')
                let params={
                    id:this.id,
                    house:'Gryffindor'          
                }
                axios.post('http://localhost:3000/api/user/addhouse',params).then((res)=>{
                    console.log(res.data)
                })
            }else if(que=="S"){
                this.starts=false,
                this.final=true,
                this.housepic=Slytherin
                this.housecolor={color:"#b2b2b2",background:"#249e47"}
                this.$store.dispatch('setHouse','Slytherin')
                let params={
                    id:this.id,
                    house:'Slytherin'          
                }
                axios.post('http://localhost:3000/api/user/addhouse',params).then((res)=>{
                    console.log(res.data)
                })
            }else if(que=="L"){
                this.starts=false,
                this.final=true,
                this.housepic=Ravenclaw
                this.housecolor={color:"#a37456",background:"#0199c2"}
                this.$store.dispatch('setHouse','Ravenclaw')
                let params={
                    id:this.id,
                    house:'Ravenclaw'          
                }
                axios.post('http://localhost:3000/api/user/addhouse',params).then((res)=>{
                    console.log(res.data)
                })
                
            }else if(que=="H"){
                this.starts=false,
                this.final=true,
                this.housepic=Hufflepuff
                this.housecolor={color:"#1f1e1a",background:"#f5d40d"}
                this.$store.dispatch('setHouse','Hufflepuff')
                let params={
                    id:this.id,
                    house:'Hufflepuff'          
                }
                axios.post('http://localhost:3000/api/user/addhouse',params).then((res)=>{
                    console.log(res.data)
                })
            }
        },
    },
    created(){
        this.qa=this.test[this.to]
        this.id=this.$route.params.id
        console.log(this.id)
        this.name=this.$route.params.name
        if(this.$route.params.sex=="女"){
            this.sex="小姐"
        }else{
            this.sex="先生"
        }
    }
}
</script>

<style lang="stylus" scoped>
.user
    width 100%
    background #e2b7a4
    text-align center
    font-family ch
    .badge
        width 5rem
    .appear
        width 70%
        color #341206
        text-align left
        margin 0 auto
        font-size 20px
        .apps
            margin 0.5rem 0rem
    .start
        font-size 20px
        background #e2b7a4
        border 0px
        font-family ch
        padding 0.2rem 0.2rem
    .qanda
        width 70%
        color #341206
        text-align center
        margin 0 auto
        font-size 24px
        margin-top 1rem
    .answers    
        .answer
            text-align left
            width 70%
            display block
            background #e2b7a4
            color #341206
            font-size 20px
            font-family ch
            margin 0.2rem 0.4rem
    .final
        text-align center
        font-size 24px
        margin-top 1rem
        .final-title
            margin-bottom 0.2rem
        .final-house
            margin 0 auto
            margin-top 0.5rem
            font-weight bold
            font-size 40px
            margin-bottom 0.5rem
            width 50%
        .tomain
            font-family hei
            font-size 16px
    
</style>