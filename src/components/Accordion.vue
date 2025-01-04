<script>
export default {
  name: "Akkordeon",
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
  <div class="accordion"> <!-- Klassenname angepasst -->
    <div class="item">
      <button class="header_accordion">POSTER & FLYERS</button>
      <div class="content_accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
    <div class="item">
      <button class="header_accordion">INTERFACEDESIGN</button>
      <div class="content_accordion">
        <p>Lorem lorem</p>
      </div>
    </div>
  </div>
</template>

<style>
.content_accordion {
  display: none;
  padding: 10px;
  border: 1px solid #ddd;
}

.header_accordion {
  padding: 10px;
  background: #f7f7f7;
  cursor: pointer;
  border: 1px solid #ddd;
}

.header_accordion:hover {
  background: #e7e7e7;
}
</style>