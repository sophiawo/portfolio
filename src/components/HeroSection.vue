<script>
    import MyButton from './MyButton.vue'

    export default {
        components: {
            MyButton,
        },

        name : "HeroSection",
    }
</script>

<template>
    <div id="hero-section">
            <div class="gradient-background">
                <img id="grain" src="../assets/hero_section/grain1.png">
            </div>
            <div id="hero-content">
                <img id="me-picture" src="../assets/hero_section/itsme.png">
                <h1>SOPHIA M. WONKA</h1>
                <p id="golden-ticket"> {{ $t("homepage.goldenticket") }}</p>
                <div id="experience">
                    <p class="experience1"> {{ $t("homepage.experiencein") }}</p>
                    <p class="experience2">UX/UI Design // Frontend Web Developement // Digital Accessability // Animation</p>
                    <p class="experience3"> {{ $t("homepage.muchmore") }} </p>
                </div>
                <div id="hero-button">
                    <MyButton class="segment-button-black" @click="$router.push('projects')" :buttonTextKey="'homepage.heroButtonText'" />
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
@import '../css/components/herosection.scss'
</style>
