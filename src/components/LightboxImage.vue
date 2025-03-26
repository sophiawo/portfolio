<template>
  <div>
    <div class="image-container d-inline-block overflow-hidden">
      <img :src="image" :class="imageClass" :alt="altText" @click="openLightbox" />
    </div>

    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isLightboxOpen" class="lightbox position-fixed d-flex justify-content-center align-items-center z-10" role="dialog" aria-modal="true" aria-label="Bildanzeige" @click="closeLightbox">
        <button class="close-btn d-flex align-items-center justify-content-center position-absolute border-0" @click="closeLightbox" aria-label="Close">
          <span class="material-symbols-outlined" id="close-icon">close</span>
        </button>
        <img :src="image" alt="Vergrößertes Bild" />
      </div>
    </transition>
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
      },
      beforeEnter(el) {
        el.style.opacity = 0;
      },
      enter(el, done) {
        el.offsetHeight;
        el.style.transition = "opacity 0.3s ease";
        el.style.opacity = 1;
        done();
      },
      leave(el, done) {
        el.style.transition = "opacity 0.3s ease";
        el.style.opacity = 0;
        done();
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
@use '../css/components/lighboxImage.scss';
</style>