<template>
  <div>
    <c-header></c-header>
    <swiper></swiper>
    <c-footer></c-footer>
  </div>
</template>

<script>
import cHeader from '@/headers/c-header.vue'
import cFooter from '@/footers/c-footer.vue'
import swiper from '@/Home/components/swiper.vue'
export default {
  name:'community',
  components:{
    cHeader,
    cFooter,
    swiper,
  }
}
</script>

<style lang="stylus" scoped>

</style>