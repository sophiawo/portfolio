<script>
    export default{
        name: "AccordionComponentPhotography",
    }
</script>

<template>
<div class="item d-flex align-items-start justify-content-center flex-column">
      <button class="header-accordion d-flex justify-content-between flex-row align-items-center border-0 bg-transparent" id="photography-accordion">
        <h3>{{ $t("common.photographyCaps") }}</h3>
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