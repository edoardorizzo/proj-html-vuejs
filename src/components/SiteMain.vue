<script>
import HeroComp from './HeroComp.vue';
import PlaceToBeComp from './PlaceToBeComp.vue';
import LastNewsComp from './LastNewsComp.vue';
import ReadBlogComp from './ReadBlogComp.vue';
import ForumComp from './ForumComp.vue';
import FullScreenComp from './FullScreenComp.vue';
import NewsLetterComp from './NewsLetterComp.vue'

export default {
    name: 'SiteMain',
    components:{
        HeroComp,
        PlaceToBeComp,
        LastNewsComp,
        ReadBlogComp,
        ForumComp,
        FullScreenComp,
        NewsLetterComp,

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
        <ReadBlogComp></ReadBlogComp>
        <FullScreenComp></FullScreenComp>
        <NewsLetterComp></NewsLetterComp>

    </main>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;


</style>