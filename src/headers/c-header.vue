<template>
    <div class="header" :style="cha">
        <img src="../assets/logo.png" class="iconhead">
        <div class="header-middle">
            <div>输入关键词</div>
        </div>
        <div class="word">本周口令:{{password}}</div>
        <img :src='camera' class="camera">
    </div>
</template>
<script>
import g_camera_img from '@/assets/Gryffindor/camera.png'
import s_camera_img from '@/assets/Slytherin/camera.png'
import r_camera_img from '@/assets/Ravenclaw/camera.png'
import h_camera_img from '@/assets/Hufflepuff/camera.png'
import camera_img from '@/assets/Hogwarts/camera.png'
export default {
    name:'cHeader',
    data(){
        return{
            iconhead:"../assets/logo.png",
            password:"",
            camera:"",
            cha:{}
        }
    },
    created(){
        const house=this.$store.getters.house
        if(house=="Gryffindor"){
            this.password=this.$store.getters.gPassword
            this.camera=g_camera_img
            this.cha={
                color:"#c19451",
                background:"#d02126"
            }
        }else if(house=="Hufflepuff"){
            this.password=this.$store.getters.hPassword
            this.camera=h_camera_img
            this.cha={
                color:"#1f1e1a",
                background:"#f5d40d"
            }
        }else if(house=="Ravenclaw"){
            this.password=this.$store.getters.rPassword
            this.camera=r_camera_img
            this.cha={
                color:"#a37456",
                background:"#0199c2"
            }
        }else if(house=="Slytherin"){
            this.password=this.$store.getters.sPassword
            this.camera=s_camera_img
            this.cha={
                color:"#b2b2b2",
                background:"#249e47"
            }
        }else{
            this.password="无"
            this.camera=camera_img
            this.cha={
                color:"#341206",
                background:"#e2b9a7"
            }
        }
    }
    
}
</script>
<style lang="stylus" scoped>
.header
    display :flex
    line-height: .72rem
    width :100%
    .iconhead
        margin-top :.12rem
        width 0.40rem
        height 0.40rem
        border 0.04rem solid black 
        border-radius:50%
        margin-left :.2rem
    .header-middle
        flex:1
        width 50%
        height :.44rem
        line-height :.44rem
        margin-top :.14rem
        margin-left :.2rem
        padding-left :.2rem
        background:#eee
        border-radius:.4rem
        color :#999
    .word
        margin-left :.2rem
        font-family:ch
        font-size :16px
    .camera
        height 0.70rem
        margin-left :.2rem
        margin-right :.2rem
        margin-top -0.05rem

</style>