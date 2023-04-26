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


  <main class="hero d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="hero_content ">
        <h1>Tech Forum!</h1>
        <p>Discuss all the new Technology news and trends</p>
        <button class="border-0 p-2">Get Avada Now</button>
      </div>
    </div>
  </main>


  <footer></footer>
</template>



<style lang="scss" scoped>
@use './partials/partials.scss' as *;

main{
  background-image: url(/img/home_slider_bg.jpg);
  height: 90vh;
  background-size: cover;

  .hero_content{
    color: $white;

    h1{
      font-size: 64px;
      font-weight: bold;
    }

    button{
      background-color: $azure;
      color: $white;
    }
  }
}


</style>