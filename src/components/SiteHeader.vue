<script>
import { state } from '../state';
export default {
    name: 'SiteHeader',
    data() {
        return {
            state,
        }
    }
}
</script>


<template>
    <header class="d-flex justify-content-center align-items-center">
        <div class="container d-flex justify-content-between align-items-center pt-1 pb-1">
            <div class="left_container">
                <div class="header_logo w-75">
                    <img class="w-100" src="/img/logo.png" alt="">
                </div>
            </div>
            <div class="right_container d-flex justify-content-center align-items-center">
                <div class="navbar d-flex justify-content-center align-items-center fs-7">
                    <a v-for="nav in state.navs" class="text-decoration-none ms-4" href=""> {{ nav }}</a>
                    <button class="ms-4 me-4 border-0 p-2 ps-4 pe-4">JOIN US</button>
                    <div class="icon_container">
                        <img src="/icons/magnifying-glass-solid.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

header {
    background-color: $azure;
    height: 10vh;

    a {
        color: $white;
    }

    button {
        background-color: $black;
        color: $white;
        font-size: 12px;
    }

    .icon_container{
        width: 16px;
    }
}
</style>