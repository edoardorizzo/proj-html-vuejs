<script>
export default {
    name: 'TutorialLittleCardComp',
}
</script>


<template>
    <div class="tutorial_little_card d-flex align-items-center mb-2">
        <div class="img_container w-50 me-2">
            <img class="w-100" src="/img/post_feat_img_23-700x441.jpg" alt="">
        </div>
        <div class="text_container">
            <h5>Lorem Ipsum</h5>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.tutorial_guides {

h5{
    font-size: 16px;
}

p{
    font-size: 14px;
}

hr {
    color: $orange;
}
}
</style>