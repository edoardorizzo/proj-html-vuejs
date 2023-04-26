<script>
import { state } from './state';
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';

export default {
  components: {
    SiteHeader,
    SiteMain,
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

  <SiteMain></SiteMain>


  <footer></footer>
</template>



<style lang="scss" scoped>
@use './partials/partials.scss' as *;


</style>