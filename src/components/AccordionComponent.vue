<script>
import AccordionComponentGraphicDesign from './AccordionComponents/AccordionComponentGraphicDesign.vue';
import AccordionComponentInterfaceDesign from './AccordionComponents/AccordionComponentInterfaceDesign.vue';
import AccordionComponentPhotography from './AccordionComponents/AccordionComponentPhotography.vue';
import AccordionComponentWebDesign from './AccordionComponents/AccordionComponentWebDesign.vue';

export default {
  name: "AkkordionComponent",
  mounted() {
    const headers = document.querySelectorAll(".accordion .header-accordion"); 
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".arrow-icon");

        content.style.display = content.style.display === "block" ? "none" : "block";

        if(content.style.display === "block") {
          icon.textContent = "keyboard_arrow_down";
        } else {
          icon.textContent = "keyboard_arrow_right";
        }
      });
    });

    this.openAccordionFromHash();
  },

  watch: {
    '$route.hash'() {
      this.openAccordionFromHash();
    }
  },
  
  methods: {
    openAccordionFromHash() {
      const hash = this.$route.hash;
      if (hash) {
        const targetHeader = document.querySelector(hash);
        if (targetHeader && targetHeader.classList.contains("header-accordion")) {
          const content = targetHeader.nextElementSibling;
          content.style.display = "block";
          targetHeader.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  },

  components: {
    AccordionComponentGraphicDesign,
    AccordionComponentInterfaceDesign,
    AccordionComponentWebDesign,
    AccordionComponentPhotography
  }
};
</script>

<template>
  <div class="accordion">
    <AccordionComponentGraphicDesign/>
    <AccordionComponentInterfaceDesign/>
    <AccordionComponentWebDesign/>
    <AccordionComponentPhotography/>
  </div>
</template>

<style scoped lang="scss">
@use '../css/components/accordion/accordion.scss';
</style>