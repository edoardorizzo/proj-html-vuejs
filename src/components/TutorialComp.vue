<script>
import TutorialLittleCardComp from './TutorialLittleCardComp.vue';

export default {
    components:{
        TutorialLittleCardComp,
    },
    name: 'TutorialComp',

}

</script>


<template>
    <div class="tutorial mt-4 mb-5">
        <div class="row">
            <div class="big_card col-7">
                <div class="mb-3">Fetured Article</div>
                <h2 class="mb-3">Lorem Ipsum</h2>
                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti. Tenetur harum fuga
                    quidem obcaecati, neque minima quaerat accusamus ea sint, sequi enim! Officia incidunt aut, quaerat
                    architecto aliquam cum.</p>
                <button class="border-0 p-2 ps-4 pe-4">READ MORE</button>
            </div>
            <div class="tutorial_guides ms-3 col-4">
                <h4>Tutorial & Guides</h4>
                <hr class="w-25">
                <TutorialLittleCardComp></TutorialLittleCardComp>
                <TutorialLittleCardComp></TutorialLittleCardComp>
                <TutorialLittleCardComp></TutorialLittleCardComp>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.big_card {
    background-image: url('/img/featured_article_1_bg.jpg');
    background-size: cover;
    padding: 40px;
    padding-top: 200px;
    color: $white;

    button {
        background-color: $black;
        color: $white;
    }
}
</style>