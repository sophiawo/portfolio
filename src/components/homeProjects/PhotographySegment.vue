<script>
    import MyButton from '../MyButton.vue';
    import LightboxImage from '../LightboxImage.vue';

    export default{
        components: {
            MyButton,
            LightboxImage
        },

        data() {
            return {
                photography1class: "photography-img1",
                photography1: "/src/assets/photography/photography_1.png",
                photography1Alt: "Lorem",
                photography2class: "photography-img2",
                photography2: "/src/assets/photography/photography_2.png",
                photography2Alt: "Lorem"
            };
        },

        name: "PhotographySegment",
    }
</script>

<template>
    <div class="home-segment justify-content-between align-items-center d-flex" id="photography">
        <div class="segment-picture-side d-flex flex-row align-items-center">
            <LightboxImage :imageClass="photography1class" :image="photography1" :altText="photography1Alt" />
            <LightboxImage :imageClass="photography2class" :image="photography2" :altText="photography2Alt" />
        </div>
        <div class="rightside-ph d-flex flex-column justify-content-center">
            <h3 class="segment-heading" id="heading-photography">{{ $t("common.photographyCaps") }}</h3>
            <p class="photography-text segment-text"> {{ $t("homepage.photographyShort1") }} </p>
            <p class="photography-text segment-text"> {{ $t("homepage.photographyShort2") }} </p>
            <p class="photography-text segment-text"> {{ $t("homepage.photographyMore") }} </p>
            <div class="d-flex justify-content-center" id="button-flexbox-photography">
                <div class="segment-button">
                    <MyButton class="segment-button-white align-self-center" @click="$router.push({ path: '/projects', hash: '#photography-accordion' })" :buttonTextKey="'homepage.photographyButton'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@use '../../css/components/home_projects/homeSegment.scss';
</style>