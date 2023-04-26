<script>
import HeroComp from './HeroComp.vue';
import PlaceToBeComp from './PlaceToBeComp.vue';
import LastNewsComp from './LastNewsComp.vue';

export default {
    name: 'SiteMain',
    components:{
        HeroComp,
        PlaceToBeComp,
        LastNewsComp,

    }

}
</script>

<template>
    <main>
        <HeroComp></HeroComp>
        <PlaceToBeComp></PlaceToBeComp>
        <LastNewsComp></LastNewsComp>
    </main>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;


</style>