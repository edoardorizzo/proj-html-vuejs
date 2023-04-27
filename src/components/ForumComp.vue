<script>
import { state } from '../state';
export default {
    name: 'ForumComp',
    data() {
        return {
            state,
        }
    }
}
</script>

<template>
    <div class="forum">
        <div class="container pt-5 pb-5">
            <div class="top_news d-flex justify-content-center align-items-center mb-2">
                <div class="title_container text-center">
                    <span><strong>PHASELLUS EGET METUS</strong></span>
                    <h3 class="mt-2 fw-bold">Forum Section</h3>
                    <div class="bar mb-2 d-flex justify-content-center align-items-center">
                        <hr class="w-25">
                    </div>
                </div>
            </div>
            <div class="forum_cards_container">
                <div class="row">
                    <div class="col-3 mb-3" v-for="(forum, index) in state.forums">
                        <div class="card p-5 rounded-0 d-flex justify-content-center align-items-center">
                            <div class="img_container mb-4 p-3 d-flex justify-content-center align-items-center">
                                <img class="w-75" :src=state.forums[index].img alt="">
                            </div>
                            <h5><strong>{{ state.forums[index].title }}</strong></h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.forum{
    background-color: $lightgrey;
    hr {
    color: $orange;
}

.card {
    border-top: 2px solid $azure;


    .img_container {
        background-color: $orange;
        border-radius: 50%;
        width: 72px;
        height: 72px;
    }

    img {
        color: $white;
    }
}
}


</style>