<script>
import { state } from '../state';

export default {
    name: 'SireFooter',
    data() {
        return {
            state,
        }
    }

}
</script>


<template>
    <div class="container-sm pt-5 pb-5">
        <div class="row">
            <div class="col-3">
                <h4 class="mb-4">AVADA TECH FORUM</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsam laudantium sapiente tenetur
                    mollitia unde.</p>
            </div>
            <div class="col-3" v-for="(voice, index) in state.voices">
                <h4 class="mb-3">{{ state.voices[index].title }}</h4>
                <p class="border-bottom pb-2">{{ state.voices[index].topics[0] }}</p>
                <p class="border-bottom pb-2">{{ state.voices[index].topics[1] }}</p>
                <p class="border-bottom pb-2">{{ state.voices[index].topics[2] }}</p>
            </div>
        </div>
    </div>
    <div class="post_footer border-top">
        <div class="container d-flex justify-content-between align-items-center pt-5 pb-5">
            <div class="left">
                <div>Copyright 2023 - 2028 | Avada Theme by Theme Fusion | All right reserved</div>
            </div>
            <div class="right d-flex justify-content-center align-items-center">
                <div class="fb ms-1 me-1">
                    <img class="w-100" src="/icons/facebook.svg" alt="">
                </div>
                <div class="tw ms-1 me-1">
                    <img src="/icons/twitter.svg" alt="">
                </div>
                <div class="ig ms-1 me-1">
                    <img src="/icons/instagram.svg" alt="">
                </div>
                <div class="yt ms-1 me-1">
                    <img src="/icons/youtube.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.fb,
.ig,
.tw,
.yt {
    width: 32px;
}
</style>