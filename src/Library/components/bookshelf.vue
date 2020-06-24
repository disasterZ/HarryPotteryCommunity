<template>
    <div class="shelf">
        <img src="../../assets/bookshelf.jpg" class="bookshelf">
        <div class="book">
            <router-link tag="div" :to="{name:'book',params:{id:1}}"><img src="../../assets/pdf/1.jpg"></router-link>
        </div>
    </div>
</template>

<script>
import shelf from "@/assets/bookshelf.jpg"
export default {
    name:'bookshelf',
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus" scoped>
.shelf
    .bookshelf
        width 120%
        position absolute
        z-index -1
        top 0
    .book
        width 1.5rem
        margin 2.3rem 0.5rem
        img
            width 1.5rem
</style>