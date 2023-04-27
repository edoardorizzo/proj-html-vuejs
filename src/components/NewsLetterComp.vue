<script>
export default {
    name: 'NewsLetterComp',
}
</script>

<template>
    <div class="nl_comp p-5">
        <div class="container text-center">
            <div class="heading mb-4">
                Subscribe to our Newsletter
            </div>
            <input class="border-0 p-2 ps-4 pe-4 me-3" placeholder="Insert your mail here..." type="email" name="" id="">
            <button class="border-0 p-2 ps-4 pe-4">SEND</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../partials/partials.scss' as *;

.nl_comp{
    background-color: $lightgrey;

    .heading{
        font-size: 18px;
    }
}

button{
        background-color: $black;
        color: $white;
    }
</style>