<script>
    export default{
        name: "AccordionComponentGraphicDesign",
    }
</script>

<template>
<div class="item">
      <button class="header-accordion" id="graphic-design-accordion">
        <h3>GRAPHIC DESIGN</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/sharedcss/accordionShared.scss';
@import '/src/css/components/accordion_components/accordionComponentGraphicDesign.scss';
</style>