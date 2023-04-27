<script>
export default {
    name: 'FullScreenComp',

}
</script>


<template>
    <div class="fullscreen_comp d-flex justify-content-center align-items-center">
        <div class="container-sm w-25 p-3 text-center">
            <h2 class="mb-4">Hey! Join to our Community</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam impedit repellendus omnis maxime iure, facilis unde ipsa suscipit quasi.</p>
            <button class="border-0 p-2 ps-4 pe-4">SIGN UP</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.fullscreen_comp{
    background-image: url('/img/join_now_cta_bg.jpg');
    background-size: cover;
    color: $white;
    height: 400px;

    h2{
        font-size: 40px;
    }

    button {
            background-color: $azure;
            color: $white;
        }
}
</style>