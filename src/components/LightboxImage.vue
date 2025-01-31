<template>
    <div>
      <div class="image-container">
        <img :src="image" :class="imageClass" :alt="altText" @click="openLightbox" />
      </div>
      
      <div v-if="isLightboxOpen" class="lightbox" role="dialog" aria-modal="true" aria-label="Bildanzeige">
        <button class="close-btn" @click="closeLightbox" aria-label="Schließen">X</button>
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
  
  <style scoped>
  .image-container img {
    cursor: pointer;
  }

  .lightbox {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .lightbox img {
    max-width: 90%;
    max-height: 90%;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
  }

  </style>