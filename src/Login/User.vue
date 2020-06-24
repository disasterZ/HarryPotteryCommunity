<template>
    <div class="user" :style='screenHeight'>
        <img src="../assets/Hogwarts/SchoolBadge.png" class="badge">
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'user',
    data(){
        return{
            screenHeight:{
                height:document.documentElement.clientHeight+"px"
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.user
    width 100%
    background #e2b7a4
    text-align center
    .badge
        width 5rem
        margin-top 1.5rem
</style>