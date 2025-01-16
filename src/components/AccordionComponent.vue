<script>
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
  }
};
</script>

<template>
  <div class="accordion">
    <div class="item">
      <button class="header-accordion" id="graphic-design-accordion">
        <h3>GRAPHIC DESIGN</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">
        <h3>INTERFACEDESIGN</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">
        <h3>WEB DESIGN</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">
        <h3>PHOTOGRAPHY</h3>
        <span class="material-symbols-outlined arrow-icon">keyboard_arrow_right</span>
      </button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/src/css/components/accordion.scss';
</style>