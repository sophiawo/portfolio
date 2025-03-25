<script>
    import LightboxImage from '../LightboxImage.vue';

    export default {
        components: {
            LightboxImage
        },

        data() {
            return {
                webClass: "webdesign-example-picture",
                webImg1: "/src/assets/webdesign/purrfect_match1.png",
                webImg1Alt: "Lorem",
                webImg2: "/src/assets/webdesign/accesability_website.png",
                webImg2Alt: "Lorem"
            };
        },

        name: "WebDesignExample"
    }
</script>

<template>
    <div class="home-segment" id="webdesign-example1">
        <LightboxImage :imageClass="webClass" :image="webImg1" :alt="webImg1Alt" />
    </div>
    <div class="home-segment" id="webdesign-example2">
        <LightboxImage :imageClass="webClass" :image="webImg2" :alt="webImg2Alt" />
    </div>
</template>

<style scooped lang="scss">
@use '../../css/components/home_projects/homeSegment.scss';
</style>