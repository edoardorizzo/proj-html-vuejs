<script>
export default {
    name: 'LastNewsBigCardComp',
}
</script>


<template>
    <div class="big_card container mt-4 mb-5">
        <div class="mb-3">Fetured Article</div>
        <h2 class="mb-3">Lorem Ipsum</h2>
        <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti. Tenetur harum fuga quidem
            obcaecati, neque minima quaerat accusamus ea sint, sequi enim! Officia incidunt aut, quaerat architecto aliquam
            cum.</p>
        <button class="border-0 p-2 ps-4 pe-4 d-flex align-items-center justify-content-between">
            READ MORE
            <div class="icon_container ms-3">
                <img src="/icons/chevron-right-solid.svg" alt="">
            </div>
        </button>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.big_card {
    background-image: url('/img/featured_article_1_bg.jpg');
    background-size: cover;
    width: 100%;
    height: 480px;
    padding: 40px;
    padding-top: 240px;
    color: $white;

    button {
        background-color: $black;
        color: $white;

        .icon_container{
            width: 10px;
        }
    }
}
</style>