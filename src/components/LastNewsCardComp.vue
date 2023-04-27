<script>
import { state } from '../state';
export default {
    name: 'LastNewsCardComp',
    data(){
        return{
            state
        }
    }
}
</script>

<template>
    <div class="col-sm-4" v-for="(latestNew, index) in 3">
        <div class="card border-0">
            <img class="mb-2" :src=state.latestNews[index].img alt="">
            <h4>{{ state.latestNews[index].title }}</h4>
            <div class="card_body d-flex mb-2">
                <span>{{ state.latestNews[index].date }}</span>
            </div>
            <p>{{ state.latestNews[index].paragraph }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;
</style>