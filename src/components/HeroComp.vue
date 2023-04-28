<script>
export default {
    name: 'HeroComp',

}
</script>

<template>
    <div class="hero d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="hero_content ">
                <h1>Tech Forum!</h1>
                <p>Discuss all the new Technology news and trends</p>
                <button class="border-0 p-2 ps-4 pe-4 d-flex align-items-center justify-content-between">
                    Get Avada Now
                    <div class="icon_container ms-3">
                        <img src="/icons/chevron-right-solid.svg" alt="">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.hero {
    background-image: url(/img/home_slider_bg.jpg);
    height: 90vh;
    background-size: cover;

    .hero_content {
        color: $white;

        h1 {
            font-size: 64px;
            font-weight: bold;
        }

        button {
            background-color: $azure;
            color: $white;

            .icon_container{
                width: 10px;
            }
        }


    }
}
</style>