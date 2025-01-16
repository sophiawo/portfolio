<script>
    export default{
        name: "AccordionComponentWebDesign",
    }
</script>

<template>
<div class="item">
      <button class="header-accordion" id="web-design-accordion">
        <h3>WEB DESIGN</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/sharedcss/accordionShared.scss';
</style>