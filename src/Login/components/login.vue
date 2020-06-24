<template>
    <div class="login">
        <div class="allput">
            <input type="text" class="put" v-model="name" placeholder="你的名字">
            <input type="password" class="put" v-model="password" placeholder="密码">
        </div>
        <p class="me">{{ mes }}</p>
        <br>
        <router-link to="/register" class="jump">
            点击注册
        </router-link>
        <br>
        <button @click="onSubmit()">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return{
            name:"",
            password:"",
            mes:""
        }
    },
    methods:{
        onSubmit(){
            let params={
                name:this.name           
            }
            axios.post('http://localhost:3000/api/user/getUser',params).then((res)=>{
                const data = res.data[0]
                if(data==undefined){
                    this.mes="此用户不存在"
                }else if(data.password!=this.password){
                    this.mes="密码不正确"
                }else{
                    this.$store.dispatch('setHouse',data.house)
                    this.$store.state.id=data.id
                    if(this.$store.getters.house==null){
                        this.$router.push({name:'housetest',params:{id:data.id,name:data.name,sex:data.sex}})
                    }else{
                        this.$router.push({name:'loading',params:{name:data.name}})
                    }
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.login
    text-align center
    .allput
        margin-top 0.6rem
        .put
            width 70%
            height 0.8rem
            margin 0.4rem 0.5rem
            border-radius 0.2rem
            padding-left 0.3rem
            font-size 16px
    .jump
        margin-left 1.8rem
    button 
        width 40%
        height 1rem
        border-radius 0.3rem
        background #341206
        color #e2b9a7
        font-size 20px
        text-align center
        margin-top 0.2rem
    .me
        text-align left
        width 70%
        margin 0.2rem auto
        color red
        font-size 16px

</style>