<script>
import HeroSection from '@/components/HeroSection.vue';
import GraphicDesign from '@/components/homeProjects/GraphicDesign.vue';
import InterfaceDesign from '@/components/homeProjects/InterfaceDesign.vue';
import PhotographySegment from '@/components/homeProjects/PhotographySegment.vue';
import WebDesign from '@/components/homeProjects/WebDesign.vue';
import WebDesignExample from '@/components/homeProjects/WebDesignExample.vue';

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
            <h2> {{ $t("common.projectsCaps")}}</h2>
            <GraphicDesign />
            <InterfaceDesign />
            <WebDesign />
            <WebDesignExample />
            <PhotographySegment />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../css/home.scss';
</style>
