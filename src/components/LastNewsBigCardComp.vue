<script>
export default {
name: 'LastNewsBigCardComp',
}
</script>


<template>
    <div class="big_card container mt-4 mb-5">
        <span>Fetured Article</span>
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam at provident sint molestias est enim dolores maiores voluptate ducimus quidem!</p>
        <button class="border-0 p-2 ps-4 pe-4">READ MORE</button>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.big_card{
    background-image: url('/img/featured_article_1_bg.jpg');
    background-size: cover;
    height: 480px;
    padding: 64px;
    padding-top: 240px;
    color: $white;

    button{
        background-color: $black;
        color: $white;
    }
}

</style>