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
                theaterClass: "theater",
                theater1: "/src/assets/graphic_design/angry_men1.png",
                theater1Alt: "Lorem",
                theater2: "/src/assets/graphic_design/angry_men4.png",
                theater2Alt: "Lorem"
            };
        },

        name: "GraphicDesign",
    }

    
</script>

<template>
    <div class="home-segment justify-content-between align-items-center d-flex" id="graphic-design">
        <div class="leftside-gd d-flex flex-column justify-content-center w-45">
            <h3 class="segment-heading" id="heading-graphic-design">{{ $t("common.graphicDesignCaps") }}</h3>
            <p class="design-text segment-text"> {{ $t('homepage.graphicDesignShort') }} </p>
            <p class="design-text segment-text"> {{ $t('homepage.graphicDesignMore') }} </p>
            <div class="d-flex justify-content-center">
                <div class="segment-button">
                    <MyButton class="segment-button-white align-self-center" @click="$router.push({ path: '/projects', hash: '#graphic-design-accordion'})" :buttonTextKey="'homepage.graphicDesignButton'" />
                </div>           
            </div>
        </div>
        <div class="d-flex flex-row align-items-center">
            <LightboxImage :imageClass="theaterClass" :image="theater1" :altText="theater1Alt" />
            <LightboxImage :imageClass="theaterClass" :image="theater2" :altText="theater2Alt" />
        </div>
    </div>
</template>

<style scooped lang="scss">
@use '../../css/components/home_projects/homeSegment.scss';
</style>