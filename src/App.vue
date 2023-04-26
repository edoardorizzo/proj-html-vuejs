<script>
import { state } from './state';
import SiteHeader from './components/SiteHeader.vue';
export default {
  components: {
    SiteHeader,
  },
  data(){
    return{
      state,
    }
  }
}
</script>


<template>
  <SiteHeader></SiteHeader>


  <main></main>


  <footer></footer>
</template>



<style lang="scss" scoped>


</style>