<script>
import HeroComp from './HeroComp.vue';
import PlaceToBeComp from './PlaceToBeComp.vue';
import LastNewsComp from './LastNewsComp.vue';
import ReadBlogComp from './ReadBlogComp.vue';
import ForumComp from './ForumComp.vue';

export default {
    name: 'SiteMain',
    components:{
        HeroComp,
        PlaceToBeComp,
        LastNewsComp,
        ReadBlogComp,
        ForumComp

    }

}
</script>

<template>
    <main>
        <HeroComp></HeroComp>
        <PlaceToBeComp></PlaceToBeComp>
        <LastNewsComp></LastNewsComp>
        <ReadBlogComp></ReadBlogComp>
        <ForumComp></ForumComp>

    </main>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;


</style>