<script>
    export default{
        name: "AccordionComponentGraphicDesign",
    }
</script>

<template>
<div class="item">
      <button class="header-accordion" id="graphic-design-accordion">
        <h3>{{ $t("common.graphicDesignCaps") }}</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <h4>{{ $t("projects.graphicdesign.twelveAngryMen") }}</h4>
        <p>Lorem lorem</p>
        <h4>{{ $t("projects.graphicdesign.communicatingDoors") }}</h4>
        <p>Lorem lorem</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/sharedcss/accordionShared.scss';
@import '/src/css/components/accordion_components/accordionComponentGraphicDesign.scss';
</style>