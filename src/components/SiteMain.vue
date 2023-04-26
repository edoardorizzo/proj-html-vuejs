<script>
import HeroComp from './HeroComp.vue';
import PlaceToBeComp from './PlaceToBeComp.vue';
export default {
    name: 'SiteMain',
    components:{
        HeroComp,
        PlaceToBeComp,
    }

}
</script>

<template>
    <main>
        <HeroComp></HeroComp>
        <PlaceToBeComp></PlaceToBeComp>
    </main>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;


</style>