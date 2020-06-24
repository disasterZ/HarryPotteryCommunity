<template>
    <div class="load">
        <router-link class="break" to="/news">跳过 {{count}}</router-link>
        <img :src="background" class="bg">
        <div class="word">欢迎返校</div>
        <div class="user">{{$route.params.name}}</div>
    </div>
</template>
<script>
import axios from 'axios'
import g from "@/assets/Gryffindor/Public.jpg"
import s from "@/assets/Slytherin/Public.jpg"
import h from "@/assets/Hufflepuff/Public.jpg"
import r from "@/assets/Ravenclaw/Public.jpg"
export default {
    name:"load",
    data(){
        return{
            background:"",
            count:3,
        }
    },
    methods:{
        tonews(){
            const TIME_COUNT = 3;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    //跳转的页面写在此处
                    this.$router.push({
                      path: "/news"
                    });
                  }
                }, 1000);
              }
        },
        backchose(){
            const house=this.$store.getters.house
            if(house=="Gryffindor"){
                this.background=g
            }else if(house=="Slytherin"){
                this.background=s
            }else if(house=="Hufflepuff"){
                this.background=h
            }else if(house=="Ravenclaw"){
                this.background=r
            }
        }

    },
    created(){
        this.backchose()
        axios.post('http://localhost:3000/api/password/get').then((res)=>{
            const data=res.data
            this.$store.dispatch('setg',data[0].password)
            this.$store.dispatch('seth',data[1].password)
            this.$store.dispatch('setr',data[2].password)
            this.$store.dispatch('sets',data[3].password)
        })
        this.tonews()
    }
}
</script>
<style lang="stylus" scoped>
.load
    width 100%
    .break
        position absolute
        background rgba(255,255,255,0.6)
        padding 0.1rem
        border-radius 0.2rem
        right 0.1rem
        top 0.1rem
        color #fff
    .bg
        width 140%
    .word
        width 40%
        font-family ch
        font-size 36px
        font-weight bold
        margin 0.4rem 18%
    .user
        width 40%
        font-family ch
        font-size 36px
        font-weight bold
        margin 0.2rem 45%
</style>