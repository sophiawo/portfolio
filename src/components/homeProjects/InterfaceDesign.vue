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
                interfaceClass: "interface-img",
                interfaceImg1: "/src/assets/interface_design/sign_up_screen.png",
                interfaceImg1Alt: "Lorem",
                interfaceImg2: "/src/assets/interface_design/main_screen.png",
                interfaceImg2Alt: "Lorem",
                interfaceImg3: "/src/assets/interface_design/achievements_screen.png",
                interfaceImg3Alt: "Lorem"
            };
        },

        name: "InterfaceDesign",
    }
</script>

<template>
    <div class="home-segment justify-content-between align-items-center d-flex" id="interface-design">
        <div class="segment-picture-side d-flex flex-row align-items-center">
            <LightboxImage :imageClass="interfaceClass" :image="interfaceImg1" :altText="interfaceImg1Alt" />
            <LightboxImage :imageClass="interfaceClass" :image="interfaceImg2" :altText="interfaceImg2Alt" />
            <LightboxImage :imageClass="interfaceClass" :image="interfaceImg3" :altText="interfaceImg3Alt" />
        </div>
        <div class="rightside-id d-flex flex-column justify-content-center">
            <h3 class="segment-heading" id="heading-interface">{{ $t("common.interfaceDesignCaps") }}</h3>
            <p class="interface-text segment-text"> {{ $t("homepage.interfaceDesignShort") }} </p>
            <p class="interface-text segment-text"> {{ $t("homepage.interfaceDesignMore") }} </p>
            <div class="d-flex justify-content-center" id="button-flexbox-interface">
                <div class="segment-button">
                    <MyButton class="segment-button-black align-self-center" @click="$router.push({ path: '/projects', hash: '#interface-design-accordion'})" :buttonTextKey="'homepage.interfaceDesignButton'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@use '../../css/components/home_projects/homeSegment.scss';
</style>