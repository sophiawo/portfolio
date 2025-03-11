<script>
import LightboxImage from '../LightboxImage.vue';


    export default{
      components: {
        LightboxImage
      },

      data() {
        return {
          gdImgClass: "project-gd-picture",
          gdImgClassBig: "project-gd-picture-big",

          tam1: "/src/assets/graphic_design/angry_men1.JPG",
          tam1Alt: "Lorem",
          tam2: "/src/assets/graphic_design/angry_men2.JPG",
          tam2Alt: "Lorem",
          posterEntwurf1: "/src/assets/graphic_design/angry_men3.png",
          posterEntwurf1Alt: "Lorem",
          poster: "/src/assets/graphic_design/theater_poster.png",
          posterAlt: "Lorem",
          posterEntwurf2: "/src/assets/graphic_design/angry_men4.jpg",
          posterEntwurf2Alt: "Lorem",
          flyer: "/src/assets/graphic_design/theater_flyer.png",
          flyerAlt: "Lorem",

          communicating_doors1: "/src/assets/graphic_design/communicating_doors1.png",
          communicating_doors1Alt: "Lorem"
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
            <p>{{ $t("projects.graphicdesign.tamtext6") }}</p>
          </div>

          <figure>
            <LightboxImage :imageClass="gdImgClass" :image="tam1" :altText="tam1Alt" />
            <figcaption> {{ $t("projects.graphicdesign.tam1under") }} </figcaption>
          </figure>

          <figure>
            <LightboxImage :imageClass="gdImgClass" :image="tam2" :altText="tam2Alt" />
            <figcaption> {{ $t("projects.graphicdesign.tam2under") }} </figcaption>
          </figure>
        </div>

        <div class="tam-content-flexbox">
          <figure>
            <LightboxImage :imageClass="gdImgClass" :image="posterEntwurf1" :altText="posterEntwurf1Alt" />
            <figcaption> {{ $t("projects.graphicdesign.tam3under") }} </figcaption>
          </figure>

          <figure>
            <LightboxImage :imageClass="gdImgClass" :image="poster" :altText="posterAlt" />
            <figcaption> {{ $t("projects.graphicdesign.tam4under") }} </figcaption>
          </figure>

           <figure>
           <LightboxImage :imageClass="gdImgClass" :image="posterEntwurf2" :altText="posterEntwurf2Alt" />
            <figcaption> {{ $t("projects.graphicdesign.tam5under") }} </figcaption>
          </figure>

           <figure>
            <LightboxImage :imageClass="gdImgClass" :image="flyer" :altText="flyerAlt" />
          <figcaption> {{ $t("projects.graphicdesign.tam6under") }} </figcaption>
          </figure>
        </div>
      </div>

      <h4>{{ $t("projects.graphicdesign.communicatingDoors") }}</h4>
        
        <div class="cd-content-flexbox">
          <figure>
            <LightboxImage :imageClass="gdImgClassBig" :image="communicating_doors1" :altText="communicating_doors1Alt" />
            <figcaption> three parted poster design by Carina Huber</figcaption>
          </figure>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '/src/css/sharedcss/accordionShared.scss';
@import '/src/css/components/accordion_components/accordionComponentGraphicDesign.scss';
</style>