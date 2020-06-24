<template>
  <div>
    <c-header></c-header>
    <bookshelf></bookshelf>
    <l-footer></l-footer>
  </div>
</template>

<script>
import cHeader from '@/headers/c-header.vue'
import lFooter from '@/footers/l-footer.vue'
import bookshelf from './components/bookshelf.vue'
export default {
  name:'community',
  components:{
    cHeader,
    lFooter,
    bookshelf
  }
}
</script>

<style lang="stylus" scoped>

</style>