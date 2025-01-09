<script>
export default {
  name: "AkkordionComponent",
  mounted() {
    const headers = document.querySelectorAll(".accordion .header_accordion"); // Korrektur hier: Klassenname war anders
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  },
};
</script>

<template>
  <div class="accordion">
    <div class="item">
      <button class="header-accordion">GRAPHIC DESIGN</button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">INTERFACEDESIGN</button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">WEBDESIGN</button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header-accordion">PHOTOGRAPHY</button>
      <div class="content-accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/src/css/components/accordion.scss';
</style>