<script>
import HeroSection from '@/components/HeroSection.vue';
import GraphicDesign from '@/components/home_projects/GraphicDesign.vue';
import InterfaceDesign from '@/components/home_projects/InterfaceDesign.vue';
import PhotographySegment from '@/components/home_projects/PhotographySegment.vue';
import WebDesign from '@/components/home_projects/WebDesign.vue';
import WebDesignExample from '@/components/home_projects/WebDesignExample.vue';

export default {
    components: {
        HeroSection,
        GraphicDesign,
        InterfaceDesign,
        WebDesign,
        WebDesignExample,
        PhotographySegment,
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
            <WebDesignExample />
            <PhotographySegment />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../css/home.scss'
</style>
