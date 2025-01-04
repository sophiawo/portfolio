<script>
import HeroSection from '@/components/HeroSection.vue';
import GraphicDesign from '@/components/home_projects/GraphicDesign.vue';
import InterfaceDesign from '@/components/home_projects/InterfaceDesign.vue';
import Photography from '@/components/home_projects/Photography.vue';
import WebDesign from '@/components/home_projects/WebDesign.vue';

export default {
    components: {
        HeroSection,
        GraphicDesign,
        InterfaceDesign,
        WebDesign,
        Photography,
    }
}
</script>

<template>
    <div class="content">
        <HeroSection />
        <div id="projects-home">
            <h2> PROJECTS </h2>
            <GraphicDesign />
            <InterfaceDesign />
            <WebDesign />
            <Photography />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../css/home.scss'
</style>
