<script>
import AkkordionComponent from "../components/AccordionComponent.vue";


    export default {
        components: {
            AkkordionComponent,
        },
    };

</script>

<template>
    <div class="content">
        <h2>{{ $t("common.projectsCaps")}}</h2>
        <AkkordionComponent />
    </div>
</template>

<style scoped lang="scss">
@use '../css/projects.scss';
</style>