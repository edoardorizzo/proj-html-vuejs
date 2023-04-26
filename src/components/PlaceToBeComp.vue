
<script>
export default {
    name: 'PlaceToBeComp',

}
</script>


<template>
    <div class="background d-flex justify-content-center align-items-center">
        <div class="container-sm p-4 text-center w-50">
            <span class="mb-2"><strong>AVADA FORUM IS THE PLACE TO BE</strong></span>
            <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam autem similique impedit, officia blanditiis quaerat excepturi, necessitatibus, odit est nam quia laboriosam possimus maiores ut asperiores! Est maiores ad accusamus?</p>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.background{
    background-color: $lightgrey;
    height: 240px;

    p{
        color: $grey;
    }
}

</style>