<script>
    import MyButton from '../MyButton.vue';

    export default{
        components: {
            MyButton,
        },

        name: "GraphicDesign",
    }
</script>

<template>
    <div class="home-segment" id="graphic-design">
        <div class="leftside-gd">
            <h3 class="segment-heading" id="heading-graphic-design">{{ $t("common.graphicDesignCaps") }}</h3>
            <p class="design-text, segment-text"> {{ $t('homepage.graphicDesignShort') }} </p>
            <p class="design-text, segment-text"> {{ $t('homepage.graphicDesignMore') }} </p>
            <div class="segment-button-flexbox">
                <div class="segment-button">
                    <MyButton class="segment-button-white" @click="$router.push({ path: '/projects', hash: '#graphic-design-accordion'})" :buttonTextKey="'homepage.graphicDesignButton'" />
                </div>           
            </div>
        </div>
        <div class="segment-picture-side">
            <img class="theater" src="/src/assets/graphic_design/theater_poster.png"/>
            <img class="theater" src="/src/assets/graphic_design/theater_flyer.png" />
        </div>
    </div>
</template>

<style scooped lang="scss">
@import '/src/css/components/home_projects/graphicdesign.scss';
</style>