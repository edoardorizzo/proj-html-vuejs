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
    <header>
        <div class="container d-flex justify-content-between align-items-center pt-1 pb-1">
            <div class="left_container">
                <div class="header_logo w-75">
                    <img class="w-100" src="/img/logo.png" alt="">
                </div>
            </div>
            <div class="right_container d-flex justify-content-center align-items-center">
                <div class="navbar d-flex justify-content-center align-items-center fs-7">
                    <a v-for="voice in state.voices" class="text-decoration-none ms-4" href=""> {{ voice }}</a>
                    <button class="ms-4 border-0 p-2">JOIN US</button>
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
    }
}
</style>