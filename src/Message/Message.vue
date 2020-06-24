<template>
  <div>
    <c-header></c-header>
    <m-footer></m-footer>
  </div>
</template>

<script>
import cHeader from '@/headers/c-header.vue'
import mFooter from '@/footers/m-footer.vue'
export default {
  name:'community',
  components:{
    cHeader,
    mFooter,
  }
}
</script>

<style lang="stylus" scoped>

</style>