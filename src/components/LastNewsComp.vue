<script>
import { state } from '../state';

import LastNewsCardComp from './LastNewsCardComp.vue';
import LastNewsBigCardComp from './LastNewsBigCardComp.vue';
import TutorialComp from './TutorialComp.vue';

export default {
    name: 'LastNewsComp',
    components: {
        LastNewsCardComp,
        LastNewsBigCardComp,
        TutorialComp,
    },
    data() {
        return {
            state,
        }
    }
}
</script>


<template>
    <div class="container mt-5">
        <div class="top_news d-flex justify-content-center align-items-center mb-2">
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
                <LastNewsCardComp/>
                <LastNewsBigCardComp></LastNewsBigCardComp>
                <LastNewsCardComp/>
                <TutorialComp></TutorialComp>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

hr {
    color: $orange;
}
</style>