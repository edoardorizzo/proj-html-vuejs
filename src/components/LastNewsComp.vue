<script>
import LastNewsCardComp from './LastNewsCardComp.vue';
export default {
    components:{
        LastNewsCardComp,
    },
    name: 'LastNewsComp',
}
</script>


<template>
    <div class="container mt-5">
        <div class="top_news d-flex justify-content-center align-items-center">
            <div class="title_container text-center">
                <span><strong>PHASELLUS EGET METUS</strong></span>
                <h3 class="mt-2 fw-bold">All the latest news</h3>
                <div class="bar d-flex justify-content-center align-items-center">
                    <hr class="w-25">
                </div>
            </div>
        </div>
        <div class="body_news">
            <div class="row">
                <LastNewsCardComp></LastNewsCardComp>
            </div>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

hr{
    color: $orange;
}


</style>