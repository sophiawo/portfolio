<template>
  <div>
    <div class="image-container">
      <img :src="image" :class="imageClass" :alt="altText" @click="openLightbox" />
    </div>
    <div v-if="isLightboxOpen" class="lightbox" role="dialog" aria-modal="true" aria-label="Bildanzeige">
      <button class="close-btn" @click="closeLightbox" aria-label="Schließen">
        <span class="material-symbols-outlined" id="close-icon">close</span>
      </button>
      <img :src="image" alt="Vergrößertes Bild" />
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },

      imageClass: {
        type: String
      },

      altText: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        isLightboxOpen: false
      };
    },

    methods: {
      openLightbox() {
        this.isLightboxOpen = true;
      },
      closeLightbox() {
        this.isLightboxOpen = false;
      }
    },

    mounted() {
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') this.closeLightbox();
      });
    }
  };
</script>
  
<style scooped lang="scss">
  @import '/src/css/components/lighboxImage.scss';
</style>