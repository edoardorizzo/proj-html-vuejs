<script>
import { state } from '../state';
export default {
    name: 'LastNewsCardComp',
    props:{
        new: Object
    },
    data(){
        return{
            state
        }
    }
}
</script>

<template>
    <div class="col-sm-4">
        <div class="card border-0">
            <img class="mb-2" src="/img/post_feat_img_20-147x118.jpg" alt="">
            <h4>Lorem Ipsum</h4>
            <div class="card_body d-flex mb-2">
                <span>Lorem ipsum</span><span>| Comments</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio!</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;
</style>