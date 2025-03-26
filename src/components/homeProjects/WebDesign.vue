<script>
    import MyButton from '../MyButton.vue';

    export default{
        components: {
            MyButton,
        },

        name: "InterfaceDesign",
    }
</script>

<template>
    <div class="home-segment justify-content-between align-items-center d-flex" id="webdesign">
        <div id="webdesign-content">
            <h3 class="segment-heading" id="heading-webdesign">{{ $t("common.webDesignCaps") }}</h3>
            <p class="web-text segment-text"> {{ $t('homepage.webDesignShort') }} </p>
            <p class="web-text segment-text"> {{ $t('homepage.webDesignMore') }} </p>
            <div class="d-flex justify-content-center" id="button-flexbox-web">
                <div class="segment-button" id="web-button">
                    <MyButton class="segment-button-black align-self-center" @click="$router.push({ path: '/projects', hash: '#web-design-accordion' })" :buttonTextKey="'homepage.webDesignButton'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@use '../../css/components/home_projects/homeSegment.scss';
</style>