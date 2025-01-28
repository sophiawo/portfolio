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
    <div class="home-segment" id="interface-design">
        <div class="segment-picture-side">
            <img class="interface-img" src="/src/assets/interface_design/sign_up_screen.png" />
            <img class="interface-img" src="/src/assets/interface_design/main_screen.png" />
            <img class="interface-img" src="/src/assets/interface_design/achievements_screen.png" />
        </div>
        <div class="rightside-id">
            <h3 class="segment-heading" id="heading-interface">{{ $t("common.interfaceDesignCaps") }}</h3>
            <p class="interface-text, segment-text"> {{ $t("homepage.interfaceDesignShort") }} </p>
            <p class="interface-text, segment-text"> {{ $t("homepage.interfaceDesignMore") }} </p>
            <div class="segment-button-flexbox" id="button-flexbox-interface">
                <div class="segment-button">
                    <MyButton class="segment-button-black" @click="$router.push('projects')" :buttonTextKey="'homepage.interfaceDesignButton'" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scooped lang="scss">
@import '/src/css/components/home_projects/interfacedesign.scss';
</style>