<template>
  <div>
    <p-header></p-header>
    <p-footer></p-footer>
    <idcard></idcard>
  </div>
</template>

<script>
import pHeader from '@/headers/p-header.vue'
import pFooter from '@/footers/p-footer.vue'
import idcard from './compoents/idcard.vue'
export default {
  name:'community',
  components:{
    pHeader,
    pFooter,
    idcard
  }
}
</script>

<style lang="stylus" scoped>

</style>