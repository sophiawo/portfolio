<script>
import LightboxImage from '../LightboxImage.vue';


    export default{
      components: {
        LightboxImage
      },

      data() {
        return {
          gdImgClass: "project-gd-picture",
          tam1: "/src/assets/graphic_design/angry_men1.JPG",
          tam1Alt: "Lorem",
          tam2: "/src/assets/graphic_design/angry_men2.JPG",
          tam2Alt: "Lorem",
          poster: "/src/assets/graphic_design/theater_poster.png",
          posterAlt: "Lorem",
          flyer: "/src/assets/graphic_design/theater_flyer.png",
          flyerAlt: "Lorem"
        };
      },

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
        <div id="projects-tam-container">
        <h4>{{ $t("projects.graphicdesign.twelveAngryMen") }}</h4>
        
        <div class="tam-content-flexbox">
          <div class="tam-content-text-container">
            <p>{{ $t("projects.graphicdesign.tamtext1") }}</p>
            <p>{{ $t("projects.graphicdesign.tamtext2") }}</p>
            <p>{{ $t("projects.graphicdesign.tamtext3") }}</p>
            <p>{{ $t("projects.graphicdesign.tamtext4") }}</p>
            <p>{{ $t("projects.graphicdesign.tamtext5") }}</p>
          </div>
          <LightboxImage :imageClass="gdImgClass" :image="tam1" :altText="tam1Alt" />
          <LightboxImage :imageClass="gdImgClass" :image="tam2" :altText="tam2Alt" />
        </div>
        <div class="tam-content-flexbox">
          <LightboxImage :imageClass="gdImgClass" :image="poster" :altText="posterAlt" />
          <LightboxImage :imageClass="gdImgClass" :image="flyer" :altText="flyerAlt" />
        </div>
        
        </div>
        <h4>{{ $t("projects.graphicdesign.communicatingDoors") }}</h4>
        <p>Lorem lorem</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/sharedcss/accordionShared.scss';
@import '/src/css/components/accordion_components/accordionComponentGraphicDesign.scss';
</style>