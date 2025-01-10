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
        <h2>{{ $t("projectsCaps")}}</h2>
        <AkkordionComponent />
    </div>
</template>

<style scoped lang="scss">
@import '../css/projects.scss'
</style>