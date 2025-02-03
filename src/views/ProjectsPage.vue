<script>
import AkkordionComponent from "../components/AccordionComponent.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeItem = ref(null);

onMounted(() => {
    handleHashChange(route.hash);
});

watch(() => route.hash, (newHash) => {
    handleHashChange(newHash);
});

const handleHashChange = (hash) => {
  if (hash) {
    const id = hash.replace("#", ""); // Entfernt das "#"
    activeItem.value = id; // Öffnet das entsprechende Accordion
    scrollToAccordion(id);
  }
};

const scrollToAccordion = (id) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300); // Verzögerung für reibungsloses Scrollen
};

    export default {
        components: {
            AkkordionComponent,
        },
    };

</script>

<template>
    <div class="content">
        <h2>{{ $t("common.projectsCaps")}}</h2>
        <AkkordionComponent />
    </div>
</template>

<style scoped lang="scss">
@import '../css/projects.scss'
</style>