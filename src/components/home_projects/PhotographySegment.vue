<script>
    import MyButton from '../MyButton.vue';

    export default{
        components: {
            MyButton,
        },

        name: "PhotographySegment",
    }
</script>

<template>
    <div class="home-segment" id="photography">
        <div class="segment-picture-side">
            <img id="photography-img1" src="/src/assets/photography/photography_1.png" />
            <img id="photography-img2" src="/src/assets/photography/photography_2.png" />
        </div>
        <div class="rightside-ph">
            <h3 class="segment-heading" id="heading-photography">{{ $t("common.photographyCaps") }}</h3>
            <p class="photography-text, segment-text"> {{ $t("homepage.photographyShort1") }} </p>
            <p class="photography-text, segment-text"> {{ $t("homepage.photographyShort2") }} </p>
            <p class="photography-text, segment-text"> {{ $t("homepage.photographyMore") }} </p>
            <div class="segment-button-flexbox" id="button-flexbox-photography">
                <div class="segment-button">
                    <MyButton class="segment-button-white" @click="$router.push('projects')" :buttonTextKey="'homepage.photographyButton'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/photography.scss';
</style>