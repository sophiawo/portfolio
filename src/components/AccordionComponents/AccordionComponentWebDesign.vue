<script>
    export default{
        name: "AccordionComponentWebDesign",
    }
</script>

<template>
<div class="item d-flex align-items-start justify-content-center flex-column">
      <button class="header-accordion d-flex justify-content-between flex-row align-items-center border-0 bg-transparent" id="web-design-accordion">
        <h3>{{ $t("common.webDesignCaps") }}</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../css/components/accordion/accordion.scss';
</style>