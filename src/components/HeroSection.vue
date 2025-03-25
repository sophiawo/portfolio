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
    <section id="hero-section" class="position-relative w-100 h-100">

        <!-- Hero section background and grain-->
        <div class="gradient-background w-100 position-absolute z-0" aria-hidden="true"></div>
        <img id="grain" class="w-100 position-absolute z-0" aria-hidden="true" src="../assets/hero_section/grain1.png">
            
        <!-- Content -->
        <div id="hero-content" class="container-fluid z-1 w-100">
            <div class="row">

                <!-- Portray -->
                <div class="col-lg-5">
                    <img id="me-picture" class="position-absolute" src="../assets/hero_section/itsme.png">
                </div>

                <!-- Text & button -->
                <div class="col-lg-7 hero-text">
                    <h1 lang="de" class="position-absolute">SOPHIA M. WONKA</h1>
                    <p id="golden-ticket" class="position-absolute"> {{ $t("homepage.goldenticket") }}</p>

                    <!-- Experience -->
                    <div id="experience" class="mt-4 position-absolute">
                        <p class="experience1 pb-1"> {{ $t("homepage.experiencein") }}</p>
                        <p lang="en" class="experience2 py-1">UX/UI Design // Frontend Web Developement // Digital Accessability // Animation</p>
                        <p class="experience3 py-1"> {{ $t("homepage.muchmore") }} </p>
                    </div>
                
                    <!-- Show me projects button-->
                    <div id="hero-button" class="position-absolute">
                        <MyButton class="segment-button-black" @click="$router.push('projects')" :buttonTextKey="'homepage.heroButtonText'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../css/components/herosection.scss';
</style>
